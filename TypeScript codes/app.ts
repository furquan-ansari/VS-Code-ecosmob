//Below code for array
/*
 let data:string[]=["furquan","ansari"]
 data.push(100)
 console.warn(data)
 */

//Below code for objects
/* 

// interface usersTyped{
//     name: string,
//     age:number,
//     address:string,
// }

 let users:any={
    name:'bruce',
    age:30,
    address:'usa'
 }

 users.name = 'peter';
 users.email = 'peter@test.com'

console.warn(users) 
*/

//Below code for union that allow multiple datatype value

/* 
let data:string | number | boolean ="furquan";
data = 30;
data = true;
console.log(data);
*/

// Below code for interface

/*  
export{}

interface usersTyped{
    name: string,
    age: number,
    getName:()=>string,
}

let user:usersTyped={
name:'Furquan',
age: 26,
getName:() => {return 'Furquan Ansari'
}
}
console.table(user);
console.log(user.getName()); 
 */  

// Below code for Functions

/* 
export{}

//ES5
function calc(a:number,b?:number):number{
    return b?a+b : a;
}
console.log(calc(100));


//ES6
const cal =(a:number,b?:number):number=>{
    return b?a+b : a
}
console.log(cal(50));

 */


//Below code for class

/* 
export{}

class App{
    name: string ="Muhammad"
    constructor(name:string){
        this.name = name
        // console.log("Constructor called");
    }
    getName():string{
        return this.name
        // console.log(this.name)
    }
}
let a1 = new App('Furquan');
// a1.getName();
console.log(a1.getName());
 */

// Below code for Inheritance
/* 
export{}

class Parent{
    name: string 
    setName(name):void{
        this.name = name
    }
}

class Child extends Parent{

    getName():string{
        return this.name
    }
}
let a1 = new Child()
a1.setName('furquan');
console.log(a1.getName()); */

//Below code for NameSpace
/* 
export{}
/// <reference path= "Utils.ts"/>
namespace UserUtils{
    export class Users extends Parent implements userType{
        getName(){
            return this.name
        }
    }
}
let u1 = new UserUtils.Users()
u1.setName("bruce")
console.log(u1.getName());
 */

//Below code for modules
/* 
export{}

import sLogin from './modules/Student'
import tLogin from './modules/Teacher'

let student = new sLogin()
console.log(student.data);

let teacher = new tLogin()
console.log(teacher.data); 
 */

//Below code for Generics
/* 
export{}

function users<T>(data:T):T{
    return data
}

console.log(users({name:"Muhammad",age:'30'}));
console.log(users({name:"Muhammad",age:'30'}).age);
 */

//Below code for enum
/* 
export{}

enum Days{
    mon ="monday",tue ="Tuesday",
    // wed,thu,fri,sat,sun
}
// let whichDay:Days;
// whichDay= Days.mon
// // whichDay=1
// console.log(whichDay === "monday");

// function whichDay(day:Days){
//     return day
// }
// console.log(Days.mon);
 */

// Below code for symbol
/* 
export{}
let demoF1 = Symbol("d3")

// let s1 = Symbol("d1");
// let s2 = Symbol("d2");

// console.log(s1 === s2);
// console.log(s1, s2);
// console.log(s1.toString(), s2.toString());

// let data ={
//     [s1]:"some data"
// }
// console.log(data[s1]);

class Demo {
    [demoF1](){
        return "Some Data"
    }
}
let d3 = new Demo()
// console.log(d3.demoF1());
console.log(d3[demoF1]());
 */

// Below code for configuration
/* 
export{}
console.log("app.js file");
 */

// Below code for Access Modifier
/* 
export{}

class Users{
    private name = "";

    setName(name){
        this.name = name;
    }
    displayName(){
        console.log(this.name);
        this.getNameLength()
    }
    private getNameLength(){
        console.log(this.name.length);
    }
}

const u1 = new Users;
u1.setName("Muhammad")
// u1.name=("Furquan")
u1.displayName();
// u1.getNameLength();
 */

// Below code for Constructor and Shorthand Initialization

/* 
// export{}
// // Constructor code
// class Users{
//     name =""
//     age = 0
//     email = ""
//     constructor(name, age, email){
//         this.name = name;
//         this.age = age;
//         this.email = email;

//         // console.log("constructor called");
//     }
//     displayVal(){
//         console.log(this.name, this.age, this.email);
//     }
// }
// const u1 = new Users('Muhammad',0, '@gmail.com');
// // u1.displayVal()
// console.log(u1);
// // const u2 = new Users();




// export{}
// // Shorthand code
// class Users{
  
//     constructor(public name, public age, public email){}
//     displayVal(){
//         console.log(this.name, this.age, this.email);
//     }
// }
// const u1 = new Users('Muhammad',0, '@gmail.com');

// u1.displayVal()
 */

// Below code for Read only and Private
/* 
export{}

class Users{
   readonly name ="muhamamad"
}
const u1 = new Users()
// u1.name = 'furquan'
console.log(u1.name);
 */

// Below code for Inheritance
/* 
export{}

class CreateAccount{
    makeEmail(user){
        return `${user}@gmail.com`
    }
}
class Users extends CreateAccount{
    addUser(user){
        return `${user} added as an User`
    }
    deleteUser(){}
}
const u1 = new Users();
console.log(u1.addUser("Muhammad Furquan"));
console.log(u1.makeEmail("furquan"));


class Employee extends CreateAccount{
    addEmployee(emp){
        return `${emp} is added aas an Employee`
    }
}
const u2 = new Employee()
console.log(u2.addEmployee("Ansari"));
 */

// Below code for Tuple
/* 
export{}
// let role : number[] | string[] = ['admin','manager',1,3]
let role : [string,string,number,number,boolean?]= ['admin','manager',1,3]
role.push(true)
role[1]="user"
 */

// Below code for Inference (to Predict variable datatype without definining)
/* 
export{}

let data = "Hello";
data = 'hi';

let data1;
data1 ="abc";
data1 =123;
data1 =true

let data2:5=5;
data2= 20;

let data3 = 10
const val = 10;
 */

// Below code for Literal
/* 
// export{}

// let Data:string | number ="Hello"   //normal
// let Data1:"abc" | 123 ="abc"        //literal

//example code
// export{}

// function combine(
//     a: number | string,
//     b: number | string,
//     type:"as-number"| "as-string"
// )
// {
//     if(type === "as-number"){
//         return +a + +b;
//     }
//     else{
//         return a.toString() + b.toString()
//     }
// }
// console.log(combine(10,20,"as-number"));
// console.log(combine("Muhammad", "Furquan", "as-string"));
 */

// Below code for Type Alias
/* 
export{}

type vartype = string | number | undefined 
let a : vartype= 10;
let b : vartype = 20;
let c : vartype = undefined;

 */

// Below code for unknown type (it's used to avoid any type dilemmas)
/* 
export{}

let data: unknown;
data = 20;
data = "hello";

let item: string
if(typeof data === 'string')
item= data;
 */

// Below code for never type
/* 
export{}

function apiError(msg,code):never
{
    throw {message:msg,apiCode:code}
}
console.log(apiError("server side error"500));
 */
