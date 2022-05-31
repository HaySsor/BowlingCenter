"use strict";

var destktopNav = document.querySelector(".nav__desktop");
var navlist = document.querySelectorAll(".link");
var burger = document.getElementById("burger");
var navid = document.getElementById("nav");
var phone = document.getElementById("phone");
var icon = document.getElementById("icon");
var navDesktop = document.querySelectorAll(".nav__desktop .item");
var quesIcon = document.querySelectorAll(".fa-question-circle");
var allIcon = document.querySelectorAll(".icon");
var planningBtn = document.querySelector(".icon1");
var planningPhoto = document.querySelector(".planning__box-planning-info-photo");
var finanseBtn = document.querySelector(".icon3");
var finansePhoto = document.querySelector(".planning__box-finances-info-photo");
var lanesBtn = document.querySelector(".icon2");
var lanesPhoto = document.querySelector(".planning__box-lanes-info-photo");
var arrangementsBtn = document.querySelector(".icon4");
var arrangementsPhoto = document.querySelector(".planning__box-arrangements-info-photo");
var equipmentBtn = document.querySelector(".icon5");
var equipmentPhoto = document.querySelector(".planning__box-equipment-info-photo");
var allPhoto = document.querySelectorAll(".galleryPhoto__box-item");
var galleryBtn = document.querySelector(".galleryPhoto__btn-box-button");
var firstPhoto = document.querySelector(".first");
var service = document.querySelector(".service");
var serviceCardOne = document.querySelector(".service__news-card-one");
var serviceCardTwo = document.querySelector(".service__news-card-two");
var footerYear = document.querySelector(".footer__year");
var section = document.querySelectorAll("section");
var sliderBox = document.querySelector(".accessories__img-box");
var leftBtn = document.querySelector(".accessories__img-button--left");
var rightBtn = document.querySelector(".accessories__img-button--right");
var carouselImg = document.querySelectorAll(".accessories__img-box-slider");
var accordion = document.querySelector(".arrangements__accordion");
var accordionBtn = document.querySelectorAll(".arrangements__accordion-box-btn"); // Navigarion List

var burgerMenu = function burgerMenu() {
  burger.classList.toggle("hamburger--active");
  navid.classList.toggle("navigation--active");
  navlist.forEach(function (navi) {
    navi.addEventListener("click", function () {
      burger.classList.remove("hamburger--active");
      navid.classList.remove("navigation--active");
    });
  });
};

document.onclick = function (e) {
  if (e.target.id !== "navid" && e.target.id !== "burger" && e.target.id !== "phone" && e.target.id !== "icon") {
    burger.classList.remove("hamburger--active");
    navid.classList.remove("navigation--active");
    phone.classList.remove("show");
  }
}; // shawdo nav desktop


var addShadow = function addShadow() {
  if (window.scrollY >= 100) {
    destktopNav.classList.add("show-bgc");
  } else {
    destktopNav.classList.remove("show-bgc");
  }
};

var togglePhonebox = function togglePhonebox() {
  phone.classList.toggle("show");
};

var showPlaningPhoto = function showPlaningPhoto() {
  allIcon.forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (e.target.matches(".icon")) {
        e.target.classList.toggle("arrow-rotate");
      }
    });
  });
};

showPlaningPhoto();

var planningToggle = function planningToggle() {
  planningPhoto.classList.toggle("show-photo1");
};

var finanseToggle = function finanseToggle() {
  finansePhoto.classList.toggle("show-photo2");
};

var linesToggle = function linesToggle() {
  lanesPhoto.classList.toggle("show-photo3");
};

var arrangementsToggle = function arrangementsToggle() {
  arrangementsPhoto.classList.toggle("show-photo4");
};

var equipmentToggle = function equipmentToggle() {
  equipmentPhoto.classList.toggle("show-photo5");
};

function galleryShow() {
  allPhoto.forEach(function (item) {
    item.classList.toggle("show-photo1"); // service.classList.toggle('active')
  });

  if (firstPhoto.classList.contains("show-photo1")) {
    console.log(firstPhoto);
    galleryBtn.textContent = "Showaj";
  } else {
    galleryBtn.textContent = "Pokaż";
  }
}

function ServiceShowCard() {
  if (window.scrollY >= 13360) {
    serviceCardOne.classList.add("show-service-card");
    serviceCardTwo.classList.add("show-service-card");
  }
}

var handleCurrentYear = function handleCurrentYear() {
  var year = new Date().getFullYear();
  footerYear.innerText = year;
};

handleCurrentYear();

window.onscroll = function () {
  section.forEach(function (sec) {
    var top = window.scrollY;
    var offset = sec.offsetTop;
    var height = sec.offsetHeight;
    var id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navDesktop.forEach(function (links) {
        links.classList.remove("scrollSpy");
        document.querySelector(".nav__desktop a[href*=" + id + "]").classList.add("scrollSpy");
      });
    }
  });
};

function roolInFinanse() {
  var finanse = document.querySelector(".planning__box-finances");
  var planing = document.querySelector(".planning__box-planning");
  var lines = document.querySelector(".planning__box-lanes");
  var equipment = document.querySelector(".planning__box-equipment");
  var arrangements = document.querySelector(".planning__box-arrangements");

  if (window.scrollY > 1620) {
    finanse.classList.add("slide");
  }

  if (window.scrollY > 1944) {
    planing.classList.add("slide");
  }

  if (window.scrollY > 2052) {
    lines.classList.add("slide");
  }

  if (window.scrollY > 2336) {
    equipment.classList.add("slide");
  }

  if (window.scrollY > 2336) {
    arrangements.classList.add("slide");
  }
}

window.addEventListener("scroll", addShadow);
window.addEventListener("scroll", ServiceShowCard);
window.addEventListener("scroll", roolInFinanse);
burger.addEventListener("click", burgerMenu);
icon.addEventListener("click", togglePhonebox);
planningBtn.addEventListener("click", planningToggle);
lanesBtn.addEventListener("click", linesToggle);
arrangementsBtn.addEventListener("click", arrangementsToggle);
finanseBtn.addEventListener("click", finanseToggle);
equipmentBtn.addEventListener("click", equipmentToggle);
galleryBtn.addEventListener("click", galleryShow);
var carouselWidth = 800;
var carouselSpeed = 3500;
var index = 0;

function hendleCarousel() {
  index++;
  changeImage();
}

var startCarousel = setInterval(hendleCarousel, carouselSpeed);

function changeImage() {
  if (index > carouselImg.length / 2 - 1) {
    index = 0;
  } else if (index < 0) {
    index = carouselImg.length / 2 - 1;
  }

  sliderBox.style.transform = "translateX(".concat(-index * carouselWidth, "px)");
}

function hendleRightArrow() {
  index++;
  resetInterwal();
}

function hendleLeftArrow() {
  index--;
  resetInterwal();
}

function resetInterwal() {
  changeImage();
  clearInterval(startCarousel);
  startCarousel = setInterval(hendleCarousel, carouselSpeed);
}

rightBtn.addEventListener("click", hendleRightArrow);
leftBtn.addEventListener("click", hendleLeftArrow);

function openAccordionItems() {
  var text = this.nextElementSibling;

  if (text.classList.contains("activeAcordeon")) {
    text.classList.remove("activeAcordeon");
  } else {
    closeAccordionItem();
    text.classList.toggle("activeAcordeon");
  }
}

function closeAccordionItem() {
  var allActiveitems = document.querySelectorAll(".arrangements__accordion-box-info");
  allActiveitems.forEach(function (item) {
    item.classList.remove("activeAcordeon");
  });
}

function clickOutSideAccordion(e) {
  if (e.target.classList.contains("arrangements__accordion-box-btn") || e.target.classList.contains("arrangements__accordion-box-info") || e.target.classList.contains("arrangements__accordion-box-info-text")) {
    return;
  }

  closeAccordionItem();
}

accordionBtn.forEach(function (button) {
  button.addEventListener("click", openAccordionItems);
});
window.addEventListener("click", clickOutSideAccordion);