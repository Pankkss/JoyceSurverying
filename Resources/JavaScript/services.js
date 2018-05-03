var open = 0;

function main()
{
  hideNav();


  hideNav();
  //drop down for nav
  $('#aboutNav').click(function() {
    choice(1);
  });
//drop down for nav
  $('#servicesNav').click(function() {
    choice(2);
  });
  //drop down for nav
  $('#portfolioNav').click(function() {
    choice(3);
  });
//drop down for nav
  $('#contactNav').click(function() {
    choice(4);
  });

  slideshow();
  commentSlideShow();

}
 // hides top nav drop down boxes
function hideNav()
{
   $('#aboutDropDown').slideUp();
   $('#aboutNav').css('background-color', '#002647');
   $('#portfolioDropDown').slideUp();
    $('#portfolioNav').css('background-color', '#002647');
    $('#servicesDropDown').slideUp();
    $('#servicesNav').css('background-color', '#002647');
   $('#contactDropDown').slideUp();
    $('#contactNav').css('background-color', '#002647');
}

// opens / closes top nav boxes
function choice(menu)
{
  if (menu == open)
  {
    hideNav();
    open = 0;
    return;
  }
  switch(menu)
  {
  case 1:
    hideNav();
    $('#aboutDropDown').slideDown();
    $('#aboutNav').css('background-color', '#193B5A');
    open = 1;
    break;
  case 2:
    hideNav();
    $('#servicesDropDown').slideDown();
    $('#servicesNav').css('background-color', '#193B5A');
    open = 2;
    break;
  case 3:
    hideNav();
    $('#portfolioDropDown').slideDown();
    $('#portfolioNav').css('background-color', '#193B5A');
    open = 3;
    break;
  case 4:
    hideNav();
    $('#contactDropDown').slideDown();
    $('#contactNav').css('background-color', '#193B5A');
    open = 4;
    break;
  }
  return;
}

 //function for all slideshows
var slideIndex=0;
function slideshow()
{
  var slide = document.getElementsByClassName('slides');
  for(var x=0; x < slide.length; x++)
  {
    slide[x].style.display="none";
  }
  slideIndex++;
  if(slideIndex == slide.length)
  {
    slideIndex = 0;
  }
  slide[slideIndex].style.display="block";
  setTimeout(slideshow, 3500);
  return;
}

var thisIndex=0;
function commentSlideShow()
{
  var slide = document.getElementsByClassName('commentSlides');
  for(var x=0; x < slide.length; x++)
  {
    slide[x].style.display="none";
  }
  thisIndex++;
  if(thisIndex == slide.length)
  {
    thisIndex = 0;
  }
  slide[thisIndex].style.display="block";
  setTimeout(commentSlideShow, 5000);
  return;
}




$(document).ready(main);
