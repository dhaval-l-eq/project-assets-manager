export function transformProject(data) {
   const additional = [];
   ['additional1', 'additional2', 'additional3'].forEach(handle => {
      if (data[handle] && data[handle].length > 0) {
         additional.push(data[handle].split(' - '));
      }
   });
   return { ...data, additional };
}

export async function copyToClipboard(data) {
   await navigator.clipboard.writeText(data);
   return true;
}
