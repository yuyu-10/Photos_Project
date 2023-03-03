const btnMenu = document.getElementById('btn-menu');
btnMenu.addEventListener("click", openMenu);
function openMenu() {
    const back = document.getElementById('hamburger-menu');
    const enora = document.getElementById('eno');
    const menu = document.getElementById('menu');
    const cross = document.getElementById('cross');
    const street = document.getElementById('street');
    const imgCar = document.getElementById("img-car");
    btnMenu.style.display = "none";
    back.style.display = "inline";
    enora.style.zIndex = -1;
    menu.style.display = "flex";
    cross.style.display = "inline";
    street.style.display = "none";
    imgCar.style.visibility = "hidden"
}

const btnCloseMenu = document.getElementById('cross');
btnCloseMenu.addEventListener("click", closeMenu);
function closeMenu() {
    const back = document.getElementById('hamburger-menu');
    const enora = document.getElementById('eno');
    const menu = document.getElementById('menu');
    const cross = document.getElementById('cross');
    const street = document.getElementById('street');
    const imgCar = document.getElementById("img-car");
    btnMenu.style.display = "inline";
    back.style.display = "none";
    enora.style.zIndex = 0;
    menu.style.display = "none";
    cross.style.display = "none";
    street.style.display = "flex";
    imgCar.style.visibility = "visible"
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

const arrow = document.getElementById("arrow");
  arrow.addEventListener("click", topFunction);
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }