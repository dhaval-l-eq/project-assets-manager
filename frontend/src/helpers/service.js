export default async function fetchData(url, config) {
   try {
      const res = await fetch(url);
      const data = await res.json();
      if(!res.ok) {
         throw new Error('Failed to fetch: ' + data?.message || '');
      }
      return data;
   } catch (error) {
      throw new Error(error.message);
   }
}