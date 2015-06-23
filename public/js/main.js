

window.onload = function(){
  var header = document.querySelector("header");
// construct an instance of Headroom, passing the element
  var headroom  = new Headroom(header);
// initialise
  headroom.init();

  var chosenCity = document.getElementById('chosen-city');
  chosenCity.addEventListener('click',function(){

    var chosenIcon = document.getElementById('chosen-city-icon');
    if(chosenIcon.style.transform != 'rotate(180deg)'){
      chosenIcon.style.transform = 'rotate(180deg)';
    } else{
      chosenIcon.style.transform = 'rotate(0)';
    }

  })
}
