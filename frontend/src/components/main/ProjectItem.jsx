import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
function ProjectItem({ details }) {
   return (
      <Card>
         <CardHeader>
            <CardTitle>{details.title}</CardTitle>
         </CardHeader>
         <CardContent>
            <ul className="space-y-4">
               <li>
                  URL :{' '}
                  <a className="link" href="#">
                     {details.primaryUrl}
                  </a>
               </li>
               <li>
                  figma :{' '}
                  <a className="link" href="#">
                     {details.figma}
                  </a>
               </li>
               <li>
                  Github :{' '}
                  <a className="link" href="#">
                     {details.githubRepo}
                  </a>
               </li>
               {details?.additional.length > 0 &&
                  details.additional.map((item, idx) => (
                     <li key={idx}>
                        {item.name} : <a className="link" href={item.url}>{item.url}</a>
                     </li>
                  ))}
            </ul>
         </CardContent>
      </Card>
   );
}
export default ProjectItem;
