  const hideButton = document.getElementById('hideButton');
  const myBlock = document.getElementById('delivery');

  // hideButton.style.display = "none";

  hideButton.addEventListener('click', function() {
    // alert ("button click");
    if (myBlock.style.display != 'none'){
      myBlock.style.opacity = '0';
      myBlock.style.transition = '.3s';
        let timerId = setTimeout (() => {
     myBlock.style.display = 'none';
  }, 300);
      
         } else {
          myBlock.style.display = "flex";
         }
  });

