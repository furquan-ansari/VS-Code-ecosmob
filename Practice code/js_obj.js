/* let user ={
    name: "John",
    age: 30,
    "like birds": true,
}
console.log(user.name);
console.log(user.age);
console.log(user["like birds"]);

delete user["like birds"]
 */


/* let user={ 
    name:'john',
    lastname:'wick',
}
//in operator is used to identify whether the key is in obj or not
console.log('age'in user);
 */

let user={
    name:'john',
    age:30,
    isAdmin:true
};
for(key in user){
    console.log(key);
    console.log(user[key]);
}