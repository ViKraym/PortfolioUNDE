const buttons = document.querySelectorAll('button');
const botNumber = getRandomInt(1, 11);
// console.log(botNumber);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


 buttons.forEach( function(btn) {
    
    btn.addEventListener('click', function(){
        let b = this.innerHTML;
          console.log(b);
          console.log(this);


          if (this.innerHTML == Number(botNumber)) {
            this.innerHTML = "✔"
          } else {
            this.innerHTML = "✖"
          }
        
          


      }

    );
 });
