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
var UserUtils;
(function (UserUtils) {
    var Users = /** @class */ (function () {
        function Users() {
        }
        Users.prototype.getName = function () {
            return "Muhammad Furquan";
        };
        return Users;
    }());
    UserUtils.Users = Users;
})(UserUtils || (UserUtils = {}));
var u1 = new UserUtils.Users();
console.log(u1.getName());
