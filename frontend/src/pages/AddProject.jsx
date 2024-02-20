import ProjectForm from '@/components/main/ProjectForm';
import { useMutation } from '@tanstack/react-query';
import fetchData, { queryClient } from '@/utils/service';
import { PROJECT_ADD_URL } from '@/utils/config';
import { useNavigate } from 'react-router-dom';

function AddProject() {
   const navigate = useNavigate();
   const { mutate, isPending, isError, error } = useMutation({
      mutationFn: payload => fetchData(PROJECT_ADD_URL, { method: 'POST', payload }),
      onSuccess: data => {
         console.log('form data submitted successfully!', data);
         queryClient.invalidateQueries({ queryKey: ['project'] });
         navigate('/');
      },
   });
   return <ProjectForm submitHandler={data => mutate(data)} />;
}
export default AddProject;
