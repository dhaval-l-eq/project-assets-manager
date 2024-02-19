import ProjectItem from '@/components/main/ProjectItem';
import { PROJECT_LIST_URL } from '@/utils/config';
import fetchData from '@/utils/service';
import { useQuery } from '@tanstack/react-query';

function Dashboard() {
   const { data, isPending, isLoading, error } = useQuery({
      queryKey: ['project'],
      queryFn: () => fetchData(PROJECT_LIST_URL),
   });

   if(isPending) return <h3>Loading...</h3>
   if(error) return <h3>An error occured : {error.message}</h3>

   return (
      <div className="grid grid-cols-4 gap-4">
         {data.map(item => <ProjectItem key={item.id} details={item} />)}
      </div>
   );
}
export default Dashboard;
