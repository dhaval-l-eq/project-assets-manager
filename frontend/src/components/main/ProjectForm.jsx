import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
   projectTitle: z.string().min(2),
   url: z.string().url(),
   figma: z.string().url(),
   github: z.string().url(),
});

function ProjectForm() {
   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: {
         projectTitle: '',
         url: '',
         figma: '',
         github: '',
      },
   });

   // 2. Define a submit handler.
   function onSubmit(values) {
      // Do something with the form values.
      console.log(values);
   }
   return (
      <div className="max-w-[600px] mx-auto">
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               <FormField
                  control={form.control}
                  name="projectTitle"
                  render={({ field }) => (
                     <FormItem>
                        <FormLabel>Project Title</FormLabel>
                        <FormControl>
                           <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button type="submit">Submit</Button>
            </form>
         </Form>
      </div>
   );
}
export default ProjectForm;
