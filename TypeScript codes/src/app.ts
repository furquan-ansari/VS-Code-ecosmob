// console.log("app.js file....????");

// hello guys

export {};

// function apple(data: string | number, other: string) {
//   let item = 10;
//   if (data == 20) {
//     return true;
//   } else {
//     console.log("else");
//   }
//   apple("fruit","hello");
// }


function apple(data:string){
switch(data){
    case 'fruit':
        console.log("fruit");
        break;
    case 'color':
        console.log("color");
}
}
apple('fruit')