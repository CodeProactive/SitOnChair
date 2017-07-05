document.addEventListener('DOMContentLoaded', function() {
  // toggle display clair Chair
  var clairImg = document.querySelector('.clair');

  clairImg.addEventListener('mouseover', hideblur);

  function hideblur() {
    var clairBlur = document.querySelector('.blur1').style.display = 'none';
  }

  clairImg.addEventListener('mouseout', unblur);

  function unblur() {
    var clairBlur = document.querySelector('.blur1').style.display = 'inline-block';
  }

  // toggle display margarita Chair
  var margaritaImg = document.querySelector('.margarita');

  margaritaImg.addEventListener('mouseover', hideblur2);

  function hideblur2() {
    var margaritaBlur2 = document.querySelector('.blur2').style.display = 'none';
  }

  margaritaImg.addEventListener('mouseout', unblur2);

  function unblur2() {
    var margaritaBlur2 = document.querySelector('.blur2').style.display = 'inline-block';
  }

  //Slider
  var prevButton = document.querySelector(".pBtn")
  var nextButton = document.querySelector(".nBtn")
  var slider = document.getElementsByClassName("black-chair");

  var x = 0;
  var y = 1;


  prevButton.addEventListener('click', pClick);
  var slider = document.getElementsByClassName("black-chair");
  function pClick() {
    x -=1;
    if (x == -1) {
        x = 2;
    }
    for (var i = 0; i < slider.length; i++) {
      slider[i].style.display = "none"
    }
  slider[x].style.display = "block";
  }


  nextButton.addEventListener('click', nClick);
  var slider = document.getElementsByClassName("black-chair");
  function nClick() {
    x +=1;
    if (x == 3) {
        x = 0;
    }
    for (var i = 0; i < slider.length; i++) {
      slider[i].style.display = "none"
    }
  slider[x].style.display = "block";
  }
});
