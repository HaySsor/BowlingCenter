const destktopNav = document.querySelector(".nav__desktop");
const navlist = document.querySelectorAll(".link");
const burger = document.getElementById("burger");
const navid = document.getElementById("nav");
const phone = document.getElementById("phone");
const icon = document.getElementById("icon");
const navDesktop = document.querySelectorAll(".nav__desktop .item");

const cardBox = document.querySelectorAll(".arrangements__boxs-box");

const quesIcon = document.querySelectorAll(".fa-question-circle");

const allIcon = document.querySelectorAll(".icon");

const planningBtn = document.querySelector(".icon1");
const planningPhoto = document.querySelector(
	".planning__box-planning-info-photo"
);
const finanseBtn = document.querySelector(".icon3");
const finansePhoto = document.querySelector(
	".planning__box-finances-info-photo"
);
const lanesBtn = document.querySelector(".icon2");
const lanesPhoto = document.querySelector(".planning__box-lanes-info-photo");

const arrangementsBtn = document.querySelector(".icon4");
const arrangementsPhoto = document.querySelector(
	".planning__box-arrangements-info-photo"
);

const equipmentBtn = document.querySelector(".icon5");
const equipmentPhoto = document.querySelector(
	".planning__box-equipment-info-photo"
);

const allPhoto = document.querySelectorAll(".galleryPhoto__box-item");

const galleryBtn = document.querySelector(".galleryPhoto__btn-box-button");

const firstPhoto = document.querySelector(".first");

const service = document.querySelector(".service");
const serviceCardOne = document.querySelector(".service__news-card-one");
const serviceCardTwo = document.querySelector(".service__news-card-two");
const footerYear = document.querySelector(".footer__year");

const section = document.querySelectorAll("section");

// Navigarion List
const burgerMenu = () => {
	burger.classList.toggle("hamburger--active");
	navid.classList.toggle("navigation--active");

	navlist.forEach(navi => {
		navi.addEventListener("click", () => {
			burger.classList.remove("hamburger--active");
			navid.classList.remove("navigation--active");
		});
	});
};

document.onclick = function (e) {
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

// shawdo nav desktop
const addShadow = () => {
	if (window.scrollY >= 100) {
		destktopNav.classList.add("show-bgc");
	} else {
		destktopNav.classList.remove("show-bgc");
	}
};

const togglePhonebox = () => {
	phone.classList.toggle("show");
};

const showCard = () => {
	quesIcon.forEach(item => {
		item.addEventListener("click", e => {
			const title = e.target.previousElementSibling;
			const card = e.target.nextElementSibling;
			console.log(e.target);

			if (e.target.matches(".fa-question-circle")) {
				title.classList.toggle("hidden");
				card.classList.toggle("show-card");
			}
		});
	});
};

const showPlaningPhoto = () => {
	allIcon.forEach(item => {
		item.addEventListener("click", e => {
			if (e.target.matches(".icon")) {
				e.target.classList.toggle("arrow-rotate");
			}
		});
	});
};

showCard();
showPlaningPhoto();

const planningToggle = () => {
	planningPhoto.classList.toggle("show-photo1");
};
const finanseToggle = () => {
	finansePhoto.classList.toggle("show-photo2");
};
const linesToggle = () => {
	lanesPhoto.classList.toggle("show-photo3");
};
const arrangementsToggle = () => {
	arrangementsPhoto.classList.toggle("show-photo4");
};
const equipmentToggle = () => {
	equipmentPhoto.classList.toggle("show-photo5");
};

function galleryShow() {
	allPhoto.forEach(item => {
		item.classList.toggle("show-photo1");
		// service.classList.toggle('active')
	});
	if (firstPhoto.classList.contains("show-photo1")) {
		console.log(firstPhoto);
		galleryBtn.textContent = "Showaj";
	} else {
		galleryBtn.textContent = "Pokaż";
	}
}

function ServiceShowCard() {
	if (window.scrollY >= 13698) {
		serviceCardOne.classList.add("show-service-card");
		serviceCardTwo.classList.add("show-service-card");
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();

window.onscroll = () => {
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
	if (window.scrollY > 2521) {
		arrangements.classList.add("slide");
	}
}
function rollIN() {
	const equipment = document.querySelector(".planning__box-equipment");
	if (window.scrollY > 7949) {
		equipment.classList.add(".slide");
	}
}

window.addEventListener("scroll", addShadow);
window.addEventListener("scroll", ServiceShowCard);
window.addEventListener("scroll", roolInFinanse);
window.addEventListener("scroll", rollIN);

burger.addEventListener("click", burgerMenu);
icon.addEventListener("click", togglePhonebox);
planningBtn.addEventListener("click", planningToggle);
lanesBtn.addEventListener("click", linesToggle);
arrangementsBtn.addEventListener("click", arrangementsToggle);
finanseBtn.addEventListener("click", finanseToggle);
equipmentBtn.addEventListener("click", equipmentToggle);
galleryBtn.addEventListener("click", galleryShow);

const sliderBox = document.querySelector(".accessories__img-box");
const leftBtn = document.querySelector(".accessories__img-button--left");
const rightBtn = document.querySelector(".accessories__img-button--right");
const carouselImg = document.querySelectorAll(".accessories__img-box-slider");

const carouselWidth = 800;
const carouselSpeed = 3500;

let index = 0;

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

rightBtn.addEventListener("click", hendleRightArrow);
leftBtn.addEventListener("click", hendleLeftArrow);
