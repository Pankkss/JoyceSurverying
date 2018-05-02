var open = 0;

function main()
{
  hideNav();


  hideNav();
  //drop down for nav
  $('#aboutNav').click(function() {

    choice(1);
  });

  $('#servicesNav').click(function() { //drop down for nav
    choice(2);
  });
  $('#portfolioNav').click(function() { //drop down for nav
    choice(3);
  });

  $('#contactNav').click(function() { //drop down for nav
    choice(4);
  });


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





$(document).ready(main);
