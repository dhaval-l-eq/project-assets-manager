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
import { formElements, formKeys, formSchemaDef } from '@/utils/project-config';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useState } from 'react';

const formSchema = z.object(formSchemaDef);

function ProjectForm({submitHandler, data}) {

   const [isMoreItemsVisible, setIsMoreItemsVisible] = useState(false);

   const form = useForm({
      resolver: zodResolver(formSchema),
      defaultValues: data || formKeys,
      resetOptions: {
         keepDirtyValues: false,
         keepErrors: false,
       },
   });

   function onSubmit(values) {
      submitHandler(values);
   }
   return (
      <div className="max-w-[600px] mx-auto">
         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
               {formElements.map(
                  (el, idx) =>
                     (idx < 4 || isMoreItemsVisible) && (
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
                  <TooltipProvider delayDuration={300}>
                     <Tooltip>
                        <TooltipTrigger asChild>
                           <Button
                              onClick={() => setIsMoreItemsVisible(prev => !prev)}
                              className="text-3xl rounded-full"
                              type="button"
                              variant="outline"
                              size="icon"
                           >
                              {isMoreItemsVisible ? '-' : '+'}
                           </Button>
                        </TooltipTrigger>
                        <TooltipContent side='bottom'>
                           <p>{isMoreItemsVisible ? 'Hide more Items' : 'Show more Items'}</p>
                        </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </div>
            </form>
         </Form>
      </div>
   );
}
export default ProjectForm;
