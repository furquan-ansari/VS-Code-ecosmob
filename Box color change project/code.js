// Below code for color changes according to button click

const box = document.getElementById('box');
const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');

redButton.addEventListener('click', function() {
  box.style.backgroundColor = 'red';
});

greenButton.addEventListener('click', function() {
  box.style.backgroundColor = 'green';
});

blueButton.addEventListener('click', function() {
  box.style.backgroundColor = 'blue';
});



// Below code for radio button

/* let radios = document.getElementsByName('color');

for (let i=0 ; i <radios.length; i++){
    radios[i].onclick= function(){
        let target = document.body;
        target.style.background = radios[i].value;
    }
}
 */

