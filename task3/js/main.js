let array = [
  { type: "A", value: "Tesla" },
  { type: "A", value: "GMC" },
  { type: "B", value: "KIA" },
  { type: "C", value: "Dodge" },
  { type: "C", value: "Ford" },
];

let output = [];

array.forEach(function (item) {
  let existItem = output.filter(function (v, i) {
    return v.type == item.type;
  });
  if (existItem.length) {
    let existItemIndex = output.indexOf(existItem[0]);
    output[existItemIndex].value = output[existItemIndex].value.concat(
      item.value
    );
  } else {
    if (typeof item.value == "string") item.value = [item.value];
    output.push(item);
  }
});

console.log(output);
