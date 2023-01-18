const keys = ['one', 'two', 'three'];
const values = ['a', 'b', 'c'];


const dictionary = {};
for (let i = 0; i < keys.length; i++) {
  dictionary[keys[i]] = values[i];
}

console.log(dictionary); 






















//  code using Object.assign value
/* 
const dictionary1 = Object.assign({}, ...keys.map((k, i) => ({[k]: values[i]})));

console.log(dictionary1);  */
