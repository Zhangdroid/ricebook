window.onload = function () {
  var header = document.querySelector("header");
  var headroom = new Headroom(header);
  headroom.init();

  var chosenCity = document.getElementById('chosen-city');
  var cityList = document.getElementById('city-list');
  var isOpen = false;

  chosenCity.addEventListener('click', triggerCity);
  cityList.addEventListener('click', function (e) {

    var chosenCityText = document.getElementById('chosen-city-text');
    chosenCityText.innerHTML = e.target.innerHTML;
    triggerCity();
    //TODO
  })

  //切换城市列表
  function triggerCity() {
    var chosenIcon = document.getElementById('chosen-city-icon');
    var cityList = document.getElementById('city-list');

    if (!isOpen) {
      chosenIcon.style.transform = 'rotate(180deg)';
      cityList.style.display = 'block';
      cityList.style.opacity = '1';
      cityList.style.top = '65px';
      isOpen = true;
    } else {
      chosenIcon.style.transform = 'rotate(0)';
      cityList.style.display = 'none';
      cityList.style.opacity = '0';
      cityList.style.top = '0';
      isOpen = false;
    }

  }
//改变label上选择元素的状态
  var labelList = document.getElementById('label');
  labelList.addEventListener('click', function (e) {
    var li = number = labelList.getElementsByTagName('li');
    var number = li.length;
    for (var i = 0; i < number; i++) {
      li[i].className = '';
    }
    e.target.className = 'chosen';
  })

}

