import ProjectForm from '@/components/main/ProjectForm';
import { PROJECT_DETAILS_URL, PROJECT_EDIT_URL } from '@/utils/config';
import fetchData, { queryClient } from '@/utils/service';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';

function EditProject() {
   const params = useParams();
   const { projectId } = params;

   const { data, error, isPending } = useQuery({
      queryKey: ['project', projectId],
      queryFn: ({ signal }) => fetchData(PROJECT_DETAILS_URL + projectId, { signal }),
   });

   const navigate = useNavigate();
   const { mutate, isPendingEdit, isError, errorEdit } = useMutation({
      mutationFn: payload => fetchData(PROJECT_EDIT_URL + projectId, { method: 'PATCH', payload }),
      onSuccess: () => {
         queryClient.removeQueries({queryKey: ['project', projectId], exact: true});
         navigate('/');
      },
   });

   if (isPending) return <p>Loading...</p>;
   if (error) return <p>{error.message}</p>;

   if(!data || data?.length === 0) {
      return <h1>Entry not found!</h1>
   }

   const transformedData = {
      projectTitle: data.title,
      url: data.primaryUrl,
      github: data.githubRepo,
      ...data,
   };

   return <ProjectForm submitHandler={data => mutate(data)} data={transformedData} />;
}
export default EditProject;
