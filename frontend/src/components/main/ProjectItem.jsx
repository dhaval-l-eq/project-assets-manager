import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { copyToClipboard, transformProject } from '@/utils/helper';
import { projectElements } from '@/utils/project-config';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Button, buttonVariants } from '../ui/button';
import { CopyIcon } from '../icons/Icon';
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from '@/components/ui/dialog';
import { DialogClose } from '@radix-ui/react-dialog';
import { useMutation } from '@tanstack/react-query';
import fetchData, { queryClient } from '@/utils/service';
import { PROJECT_DELETE_URL } from '@/utils/config';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function LinkPopup({ data }) {
   return (
      <TooltipProvider>
         <Tooltip delayDuration={200}>
            <TooltipTrigger asChild>
               <p className="link">{data}</p>
            </TooltipTrigger>
            <TooltipContent color="dark" className="flex items-center space-x-3">
               <a target="_blank" className="link link-full" href={data}>
                  {data}
               </a>
               <Button
                  onClick={() => copyToClipboard(data)}
                  className="rounded-full"
                  size="icon"
                  variant="ghost"
               >
                  <CopyIcon />
               </Button>
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   );
}

function ProjectItem({ details }) {

   const btnCloseDialog = useRef(null);
   const {mutate, isPending, isError, error} = useMutation({
      mutationFn: (id) => fetchData(PROJECT_DELETE_URL + id, {method: 'DELETE'}),
      onSuccess: (data) => {
         queryClient.invalidateQueries({queryKey: ['project']});
         btnCloseDialog.current.click();
      }
   })

   const transformedData = transformProject(details);
   return (
      <Card>
         <CardHeader>
            <CardTitle>{transformedData.title}</CardTitle>
         </CardHeader>
         <CardContent>
            <ul className="space-y-4">
               {projectElements.map(item => (
                  <li className="flex items-start space-x-2" key={item.id}>
                     <p className="shrink-0 font-medium">{item.label} :</p>
                     <LinkPopup data={transformedData[item.handle]} />
                  </li>
               ))}
               {transformedData?.additional.length > 0 &&
                  transformedData.additional.map(([itemKey, itemValue], idx) => (
                     <li className="flex items-start space-x-2" key={idx}>
                        <p className="shrink-0 font-medium">{itemKey} :</p>
                        <LinkPopup data={itemValue} />
                     </li>
                  ))}
            </ul>
         </CardContent>
         <CardFooter className="mt-auto">
            <div className="flex items-center space-x-2">
               <Link to={'/edit/' + details._id} className={buttonVariants({size: 'sm'})}>Edit</Link>
               <Dialog>
                  <DialogTrigger className={buttonVariants({variant: 'destructive', size: 'sm'})}>
                     Delete
                  </DialogTrigger>
                  <DialogContent>
                     <DialogHeader>
                        <DialogTitle>Are you absolutely sure?</DialogTitle>
                        <DialogDescription>
                           This action cannot be undone. This will permanently delete the project
                           data.
                        </DialogDescription>
                     </DialogHeader>
                     <DialogFooter>
                        <DialogClose asChild>
                           <Button ref={btnCloseDialog} variant="outline">Close</Button>
                        </DialogClose>
                        <Button onClick={() => mutate(details._id)} variant="destructive">Delete</Button>
                     </DialogFooter>
                  </DialogContent>
               </Dialog>
            </div>
         </CardFooter>
      </Card>
   );
}
export default ProjectItem;
