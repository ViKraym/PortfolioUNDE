const buttons = document.querySelectorAll('.button-game-box');
const botNumber = getRandomInt(1, 10);
// console.log(botNumber);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


 buttons.forEach( function(btn) {
    
    btn.addEventListener('click', function(){
        let buttonAtrib = this.getAttribute('name');
        let b = this.innerHTML;
          console.log(b);
          console.log(this);


          if (buttonAtrib == Number(botNumber)) {
            this.innerHTML = "✔"
            alert("Мои поздравления вы ДОТЫКАЛИСЬ ;)")
          } else {
            this.innerHTML = "✖"
          }
      }

    );
 });
 
