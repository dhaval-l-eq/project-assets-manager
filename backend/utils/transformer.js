function transformProjects(data) {
   const newData = data.map(item => {
      const additional = [];
      ['additional1', 'additional2', 'additional3'].forEach(handle => {
         if(item[handle]) {
            const [key, value] = item[handle].split(' - ');
            additional.push({[key]: value});
         }
      })
      return {...item, additional};
   })
   return newData;
}

module.exports = {
   transformProjects
}