import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export default async function fetchData(url, config) {
   try {
      let fetchConfig = null;

      if (config) {
         fetchConfig = {
            method: config.method,
            body: config.payload ? JSON.stringify(config.payload) : undefined,
            headers: {
               'Content-Type': 'application/json',
            },
         };
      }

      const res = await fetch(url, fetchConfig);
      const data = await res.json();
      if (!res.ok) {
         throw new Error('Failed to fetch: ' + data?.message || '');
      }
      return data;
   } catch (error) {
      throw new Error(error.message);
   }
}
