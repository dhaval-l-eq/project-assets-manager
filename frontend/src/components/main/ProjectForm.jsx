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
import { formElements, formKeys, formSchemaDef } from '@/helpers/project-config';

const formSchema = z.object(formSchemaDef);

function ProjectForm() {
   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: formKeys,
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
               {formElements.map(
                  (el, idx) =>
                     idx < 4 && (
                        <FormField
                           key={el.id}
                           control={form.control}
                           name={el.name}
                           render={({ field }) => (
                              <FormItem>
                                 <FormLabel>{el.label}</FormLabel>
                                 <FormControl>
                                    <Input
                                       placeholder={el.placeholder || 'Enter ' + el.label}
                                       {...field}
                                    />
                                 </FormControl>
                                 <FormMessage />
                              </FormItem>
                           )}
                        />
                     )
               )}
               <div className="flex items-center justify-between">
                  <Button type="submit">Submit</Button>
                  <Button className="text-3xl rounded-full" type="button" variant="outline" size="icon">
                     +
                  </Button>
               </div>
            </form>
         </Form>
      </div>
   );
}
export default ProjectForm;
