let array = [
  { type: "A", value: "Tesla" },
  { type: "A", value: "GMC" },
  { type: "B", value: "KIA" },
  { type: "C", value: "Dodge" },
  { type: "C", value: "Ford" },
];

const combinedItems = (arr = []) => {
    const res = arr.reduce((acc, obj) => {
       let found = false;
       for (let i = 0; i < acc.length; i++) {
          if (acc[i].type === obj.type) {
             found = true;
          };
       }
       if (!found) {
          acc.push(obj);
       }
       return acc;
    }, []);
    return res;
 }
 console.log(combinedItems(array));


 