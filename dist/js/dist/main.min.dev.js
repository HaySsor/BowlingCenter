"use strict";

var destktopNav = document.querySelector(".nav__desktop"),
    navlist = document.querySelectorAll(".link"),
    burger = document.getElementById("burger"),
    navid = document.getElementById("nav"),
    phone = document.getElementById("phone"),
    icon = document.getElementById("icon"),
    navDesktop = document.querySelectorAll(".nav__desktop .item"),
    quesIcon = document.querySelectorAll(".fa-question-circle"),
    allIcon = document.querySelectorAll(".icon"),
    planningBtn = document.querySelector(".icon1"),
    planningPhoto = document.querySelector(".planning__box-planning-info-photo"),
    finanseBtn = document.querySelector(".icon3"),
    finansePhoto = document.querySelector(".planning__box-finances-info-photo"),
    lanesBtn = document.querySelector(".icon2"),
    lanesPhoto = document.querySelector(".planning__box-lanes-info-photo"),
    arrangementsBtn = document.querySelector(".icon4"),
    arrangementsPhoto = document.querySelector(".planning__box-arrangements-info-photo"),
    equipmentBtn = document.querySelector(".icon5"),
    equipmentPhoto = document.querySelector(".planning__box-equipment-info-photo"),
    allPhoto = document.querySelectorAll(".galleryPhoto__box-item"),
    galleryBtn = document.querySelector(".galleryPhoto__btn-box-button"),
    firstPhoto = document.querySelector(".first"),
    service = document.querySelector(".service"),
    serviceCardOne = document.querySelector(".service__news-card-one"),
    serviceCardTwo = document.querySelector(".service__news-card-two"),
    footerYear = document.querySelector(".footer__year"),
    section = document.querySelectorAll("section"),
    sliderBox = document.querySelector(".accessories__img-box"),
    leftBtn = document.querySelector(".accessories__img-button--left"),
    rightBtn = document.querySelector(".accessories__img-button--right"),
    carouselImg = document.querySelectorAll(".accessories__img-box-slider"),
    accordion = document.querySelector(".arrangements__accordion"),
    accordionBtn = document.querySelectorAll(".arrangements__accordion-box-btn"),
    burgerMenu = function burgerMenu() {
  burger.classList.toggle("hamburger--active"), navid.classList.toggle("navigation--active"), navlist.forEach(function (e) {
    e.addEventListener("click", function () {
      burger.classList.remove("hamburger--active"), navid.classList.remove("navigation--active");
    });
  });
},
    addShadow = (document.onclick = function (e) {
  "navid" !== e.target.id && "burger" !== e.target.id && "phone" !== e.target.id && "icon" !== e.target.id && (burger.classList.remove("hamburger--active"), navid.classList.remove("navigation--active"), phone.classList.remove("show"));
}, function () {
  100 <= window.scrollY ? destktopNav.classList.add("show-bgc") : destktopNav.classList.remove("show-bgc");
}),
    togglePhonebox = function togglePhonebox() {
  phone.classList.toggle("show");
},
    showPlaningPhoto = function showPlaningPhoto() {
  allIcon.forEach(function (e) {
    e.addEventListener("click", function (e) {
      e.target.matches(".icon") && e.target.classList.toggle("arrow-rotate");
    });
  });
},
    planningToggle = (showPlaningPhoto(), function () {
  planningPhoto.classList.toggle("show-photo1");
}),
    finanseToggle = function finanseToggle() {
  finansePhoto.classList.toggle("show-photo2");
},
    linesToggle = function linesToggle() {
  lanesPhoto.classList.toggle("show-photo3");
},
    arrangementsToggle = function arrangementsToggle() {
  arrangementsPhoto.classList.toggle("show-photo4");
},
    equipmentToggle = function equipmentToggle() {
  equipmentPhoto.classList.toggle("show-photo5");
};

function galleryShow() {
  allPhoto.forEach(function (e) {
    e.classList.toggle("show-photo1");
  }), firstPhoto.classList.contains("show-photo1") ? (console.log(firstPhoto), galleryBtn.textContent = "Showaj") : galleryBtn.textContent = "Pokaż";
}

function ServiceShowCard() {
  12150 <= window.scrollY && (serviceCardOne.classList.add("show-service-card"), serviceCardTwo.classList.add("show-service-card"));
}

var handleCurrentYear = function handleCurrentYear() {
  var e = new Date().getFullYear();
  footerYear.innerText = e;
};

function roolInFinanse() {
  var e = document.querySelector(".planning__box-finances"),
      n = document.querySelector(".planning__box-planning"),
      o = document.querySelector(".planning__box-lanes"),
      t = document.querySelector(".planning__box-equipment"),
      c = document.querySelector(".planning__box-arrangements");
  1620 < window.scrollY && e.classList.add("slide"), 1944 < window.scrollY && n.classList.add("slide"), 2052 < window.scrollY && o.classList.add("slide"), 2336 < window.scrollY && t.classList.add("slide"), 2336 < window.scrollY && c.classList.add("slide");
}

function rollIN() {
  var e = document.querySelector(".planning__box-equipment");
  12150 < window.scrollY && e.classList.add(".slide");
}

handleCurrentYear(), window.onscroll = function () {
  section.forEach(function (e) {
    var n = window.scrollY,
        o = e.offsetTop,
        t = e.offsetHeight,
        c = e.getAttribute("id");
    o <= n && n < o + t && navDesktop.forEach(function (e) {
      e.classList.remove("scrollSpy"), document.querySelector(".nav__desktop a[href*=" + c + "]").classList.add("scrollSpy");
    });
  });
}, window.addEventListener("scroll", addShadow), window.addEventListener("scroll", ServiceShowCard), window.addEventListener("scroll", roolInFinanse), window.addEventListener("scroll", rollIN), burger.addEventListener("click", burgerMenu), icon.addEventListener("click", togglePhonebox), planningBtn.addEventListener("click", planningToggle), lanesBtn.addEventListener("click", linesToggle), arrangementsBtn.addEventListener("click", arrangementsToggle), finanseBtn.addEventListener("click", finanseToggle), equipmentBtn.addEventListener("click", equipmentToggle), galleryBtn.addEventListener("click", galleryShow);
var carouselWidth = 800,
    carouselSpeed = 3500,
    index = 0;

function hendleCarousel() {
  index++, changeImage();
}

var startCarousel = setInterval(hendleCarousel, carouselSpeed);

function changeImage() {
  index > carouselImg.length / 2 - 1 ? index = 0 : index < 0 && (index = carouselImg.length / 2 - 1), sliderBox.style.transform = "translateX(".concat(-index * carouselWidth, "px)");
}

function hendleRightArrow() {
  index++, resetInterwal();
}

function hendleLeftArrow() {
  index--, resetInterwal();
}

function resetInterwal() {
  changeImage(), clearInterval(startCarousel), startCarousel = setInterval(hendleCarousel, carouselSpeed);
}

function openAccordionItems() {
  var e = this.nextElementSibling;
  e.classList.contains("activeAcordeon") ? e.classList.remove("activeAcordeon") : (closeAccordionItem(), e.classList.toggle("activeAcordeon"));
}

function closeAccordionItem() {
  document.querySelectorAll(".arrangements__accordion-box-info").forEach(function (e) {
    e.classList.remove("activeAcordeon");
  });
}

function clickOutSideAccordion(e) {
  e.target.classList.contains("arrangements__accordion-box-btn") || e.target.classList.contains("arrangements__accordion-box-info") || e.target.classList.contains("arrangements__accordion-box-info-text") || closeAccordionItem();
}

rightBtn.addEventListener("click", hendleRightArrow), leftBtn.addEventListener("click", hendleLeftArrow), accordionBtn.forEach(function (e) {
  e.addEventListener("click", openAccordionItems);
}), window.addEventListener("click", clickOutSideAccordion);