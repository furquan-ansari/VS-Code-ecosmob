/* var click = function(){
    alert ("button clicked, id" +this.id+", text"+this.innerHTML )
}
document.getElementById('connect').onclick=click;

var click = function(){
    alert ("button clicked, id" +this.id+", text"+this.innerHTML )
}
document.getElementById('disconnect').onclick=click;

 */

const connect = document.getElementById('connect');
const disconnect = document.getElementById('disconnect');

function connectAction(e){
    e.preventDefault()
    alert('you clicked connect')
}

function disconectAction(e){
    e.preventDefault()
    // alert('you clicked disconnect')
    connect.click()
}

connect.addEventListener("click",connectAction,false);
disconnect.addEventListener("click",disconectAction,false)