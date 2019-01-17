console.log('hoi')

var filterknop = document.querySelector('fieldset button');
var filteren = document.querySelector('form');

filterknop.addEventListener('click', function () {
    filteren.classList.toggle('show-filteren');
});




document.addEventListener('DOMContentLoaded', function() {
  
var downloadbutton = document.querySelector('article footer button');

    downloadbutton.addEventListener('click', function() {
    window.lb = downloadbutton;
    downloadbutton.classList.toggle('selected');
  });
}, false);
                 
                          
/*
var downloadbutton = document.querySelector('article footer');

document.addEventListener('DOMContentLoaded', function() {
  
  downloadbutton.addEventListener('click', function() {
    window.lb = downloadbutton;
    downloadbutton.classList.toggle('selected');
  });
}, false);

*/
