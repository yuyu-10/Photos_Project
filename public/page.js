const back = document.getElementById('hamburger-menu');
const enora = document.getElementById('eno');
const menu = document.getElementById('menu');
const cross = document.getElementById('cross');
const street = document.getElementById('street');
const imgCar = document.getElementById("img-car");
const street2 = document.getElementById('street-2-mobile');
const street3 = document.getElementById('street-3-mobile');
const sectionPeace = document.getElementById('section-peace');
const sectionPortrait = document.getElementById('section-portrait');

const btnMenu = document.getElementById('btn-menu');
btnMenu.addEventListener("click", openMenu);
function openMenu() {
    btnMenu.style.display = "none";
    back.style.display = "inline";
    enora.style.zIndex = -1;
    menu.style.display = "flex";
    cross.style.display = "inline";
    street.style.display = "none";
    imgCar.style.visibility = "hidden";
    street2.style.display = 'none';
    street3.style.display = 'none';
    sectionPeace.style.display = 'none';
    sectionPortrait.style.display = 'none';
}

const btnCloseMenu = document.getElementById('cross');
btnCloseMenu.addEventListener("click", closeMenu);
function closeMenu() {
    btnMenu.style.display = "inline";
    back.style.display = "none";
    enora.style.zIndex = 0;
    menu.style.display = "none";
    cross.style.display = "none";
    street.style.display = "flex";
    imgCar.style.visibility = "visible";
    street2.style.display = 'inline-block';
    street3.style.display = 'inline-block';
    sectionPeace.style.display = 'inline-block';
    sectionPortrait.style.display = 'inline-block';
}

// const buttonStreet = document.getElementById('button-street');
// const street = document.getElementById('street')
// buttonStreet.addEventListener("click", goStreet);
// function goStreet() {
//   document.body.scrollTop = street;
//   document.documentElement.scrollTop = street;
// }

const buttonStreetPhone = document.getElementById("button-street-phone");
const linkStreet = document.getElementById("street");
buttonStreetPhone.addEventListener("click", goStreetPhone);
function goStreetPhone() {
  closeMenu();
  linkStreet.scrollIntoView();
}

const buttonPeacePhone = document.getElementById("peace-phone");
const linkPeace = document.getElementById("section-peace");
buttonPeacePhone.addEventListener("click", goPeacePhone);
function goPeacePhone() {
  closeMenu();
  linkPeace.scrollIntoView();
}


const buttonPortraitsPhone = document.getElementById("portrait-phone");
const linkPortraits = document.getElementById("section-portrait");
buttonPortraitsPhone.addEventListener("click", goPortraitsPhone);
function goPortraitsPhone() {
  closeMenu();
  linkPortraits.scrollIntoView();
}

const arrow = document.getElementById("arrow");
  arrow.addEventListener("click", topFunction);
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // ANIMATION

  $(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.hideme').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1500);
                      
              }
              
          }); 
      
      });
      
  });