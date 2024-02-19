import { z } from 'zod';

export const formElements = [
   {
      id: 'f1',
      name: 'projectTitle',
      validationSchema: z.string().min(1, {message: 'Project Title is required'}),
      label: 'Project Title',
   },
   {
      id: 'f2',
      name: 'url',
      validationSchema: z.string().url({message: 'Please enter a valid url!'}),
      label: 'URL',
   },
   {
      id: 'f3',
      name: 'figma',
      validationSchema: z.string(),
      label: 'Figma Link',
   },
   {
      id: 'f4',
      name: 'github',
      validationSchema: z.string(),
      label: 'Github repo',
   },
   {
      id: 'f5',
      name: 'additional1',
      validationSchema: z.string(),
      label: 'Additional Link 1',
      placeholder: 'Name - Value'
   },
   {
      id: 'f6',
      name: 'additional2',
      validationSchema: z.string(),
      label: 'Additional Link 2',
      placeholder: 'Name - Value'
   },
   {
      id: 'f7',
      name: 'additional3',
      validationSchema: z.string(),
      label: 'Additional Link 3',
      placeholder: 'Name - Value'
   },
]

const schemaObj = {};
const formKeysObj = {};

formElements.forEach(el => {
   schemaObj[el.name] = el.validationSchema;
   formKeysObj[el.name] = '';
})

export const formSchemaDef = schemaObj;
export const formKeys = formKeysObj;