// console.log('hello???');
export{}

class Users{
    name:'' | undefined;
    email:'' | undefined

    addUser(user: string){
        return `${user} is Added`
    }
    removeUser(user:string){
        console.log(`${user} is removed`);
    }
}

let User1 = new Users;
let result = User1.addUser('Muhammad')
User1.removeUser("Furquan")

console.log(result);