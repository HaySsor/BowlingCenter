document.onclick = function (e) {
	const phone = document.getElementById("phone");
	const burger = document.getElementById("burger");
	const navid = document.getElementById("nav");
	if (
		e.target.id !== "navid" &&
		e.target.id !== "burger" &&
		e.target.id !== "phone" &&
		e.target.id !== "icon"
	) {
		burger.classList.remove("hamburger--active");
		navid.classList.remove("navigation--active");
		phone.classList.remove("show");
	}
};

const togglePhonebox = () => {
	const phone = document.getElementById("phone");
	phone.classList.toggle("show");
};

const burgerMenu = () => {
	const navlist = document.querySelectorAll(".link");
	const burger = document.getElementById("burger");
	const navid = document.getElementById("nav");
	burger.classList.toggle("hamburger--active");
	navid.classList.toggle("navigation--active");

	navlist.forEach(navi => {
		navi.addEventListener("click", () => {
			burger.classList.remove("hamburger--active");
			navid.classList.remove("navigation--active");
		});
	});
};
const showPlaningPhoto = () => {
	const allIcon = document.querySelectorAll(".icon");
	allIcon.forEach(item => {
		item.addEventListener("click", e => {
			if (e.target.matches(".icon")) {
				e.target.classList.toggle("arrow-rotate");
			}
		});
	});
};
const planningToggle = () => {
	const planningPhoto = document.querySelector(
		".planning__box-planning-info-photo"
	);
	planningPhoto.classList.toggle("show-photo1");
};
const finanseToggle = () => {
	const finansePhoto = document.querySelector(
		".planning__box-finances-info-photo"
	);
	finansePhoto.classList.toggle("show-photo2");
};
const linesToggle = () => {
	const lanesPhoto = document.querySelector(".planning__box-lanes-info-photo");
	lanesPhoto.classList.toggle("show-photo3");
};
const arrangementsToggle = () => {
	const arrangementsPhoto = document.querySelector(
		".planning__box-arrangements-info-photo"
	);
	arrangementsPhoto.classList.toggle("show-photo4");
};
const equipmentToggle = () => {
	const equipmentPhoto = document.querySelector(
		".planning__box-equipment-info-photo"
	);
	equipmentPhoto.classList.toggle("show-photo5");
};

function roolInFinanse() {
	const finanse = document.querySelector(".planning__box-finances");
	const planing = document.querySelector(".planning__box-planning");
	const lines = document.querySelector(".planning__box-lanes");
	const equipment = document.querySelector(".planning__box-equipment");
	const arrangements = document.querySelector(".planning__box-arrangements");

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
function ServiceShowCard() {
	const serviceCardOne = document.querySelector(".service__news-card-one");
	const serviceCardTwo = document.querySelector(".service__news-card-two");
	if (window.scrollY >= 13360) {
		serviceCardOne.classList.add("show-service-card");
		serviceCardTwo.classList.add("show-service-card");
	}
}
const handleCurrentYear = () => {
	const footerYear = document.querySelector(".footer__year");
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

window.onscroll = () => {
	const section = document.querySelectorAll("section");
	const navDesktop = document.querySelectorAll(".nav__desktop .item");
	section.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop;
		let height = sec.offsetHeight;
		let id = sec.getAttribute("id");

		if (top >= offset && top < offset + height) {
			navDesktop.forEach(links => {
				links.classList.remove("scrollSpy");
				document
					.querySelector(".nav__desktop a[href*=" + id + "]")
					.classList.add("scrollSpy");
			});
		}
	});
};

const carouselWidth = 800;
const carouselSpeed = 3500;
const carouselImg = document.querySelectorAll(".accessories__img-box-slider");
let index = 0;
const sliderBox = document.querySelector(".accessories__img-box");

function hendleCarousel() {
	index++;
	changeImage();
}

let startCarousel = setInterval(hendleCarousel, carouselSpeed);

function changeImage() {
	if (index > carouselImg.length / 2 - 1) {
		index = 0;
	} else if (index < 0) {
		index = carouselImg.length / 2 - 1;
	}
	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`;
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

function openAccordionItems() {
	const text = this.nextElementSibling;
	if (text.classList.contains("activeAcordeon")) {
		text.classList.remove("activeAcordeon");
	} else {
		closeAccordionItem();
		text.classList.toggle("activeAcordeon");
	}
}

function closeAccordionItem() {
	const allActiveitems = document.querySelectorAll(
		".arrangements__accordion-box-info"
	);
	allActiveitems.forEach(item => {
		item.classList.remove("activeAcordeon");
	});
}

function clickOutSideAccordion(e) {
	if (
		e.target.classList.contains("arrangements__accordion-box-btn") ||
		e.target.classList.contains("arrangements__accordion-box-info") ||
		e.target.classList.contains("arrangements__accordion-box-info-text")
	) {
		return;
	}
	closeAccordionItem();
}

showPlaningPhoto();
handleCurrentYear();

window.addEventListener("scroll", ServiceShowCard);
window.addEventListener("scroll", roolInFinanse);
document.querySelector(".icon1").addEventListener("click", planningToggle);
document.querySelector(".icon2").addEventListener("click", linesToggle);
document.querySelector(".icon4").addEventListener("click", arrangementsToggle);
document.querySelector(".icon3").addEventListener("click", finanseToggle);
document.querySelector(".icon5").addEventListener("click", equipmentToggle);

document.getElementById("icon").addEventListener("click", togglePhonebox);

document.getElementById("burger").addEventListener("click", burgerMenu);
document
	.querySelector(".accessories__img-button--right")
	.addEventListener("click", hendleRightArrow);
document
	.querySelector(".accessories__img-button--left")
	.addEventListener("click", hendleLeftArrow);
document
	.querySelectorAll(".arrangements__accordion-box-btn")
	.forEach(button => {
		button.addEventListener("click", openAccordionItems);
	});
window.addEventListener("click", clickOutSideAccordion);

window.onload= ()=>{
	document.querySelector(".desktop-photo").classList.add('desktop-photo-active')
}