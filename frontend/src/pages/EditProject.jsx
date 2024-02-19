import ProjectForm from '@/components/main/ProjectForm';
import { PROJECT_DETAILS_URL } from '@/utils/config';
import fetchData from '@/utils/service';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

function EditProject() {
   const params = useParams();
   const { projectId } = params;
   
   const {data, error, isPending} = useQuery({
      queryKey: ['project', projectId],
      queryFn: () => fetchData(PROJECT_DETAILS_URL + projectId)
   })

   if(isPending) return <p>Loading...</p>
   if(error) return <p>{error.message}</p>

   
   const transformedData = {
      projectTitle: data.title,
      url: data.primaryUrl,
      github: data.githubRepo,
      ...data
   }
   console.log(transformedData);

   return <ProjectForm data={transformedData} />;
}
export default EditProject;
