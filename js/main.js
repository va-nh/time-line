const burger = document.querySelector('.menu-burger');
		menu = document.querySelector('.header__menu');
		body = document.querySelector('body');


		burger.addEventListener('click', ()=> {
			burger.classList.toggle('_active');
			menu.classList.toggle('_active');
			body.classList.toggle('_lock');
	});

/*------------ header ---------------*/
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
	if (window.scrollY > 100) {
		header.classList.add('shrink-header');
	} else {
		header.classList.remove('shrink-header');
	}
});


const btn0 = document.getElementById("button0");
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

const block0 = document.getElementById("header-wrapper");
const block1 = document.getElementById("mechanical-era");
const block2 = document.getElementById("digital-era");


btn0.addEventListener("click", () => {
	scrollToElement(block0);
});

btn1.addEventListener("click", () => {
	scrollToElement(block1);
});

btn2.addEventListener("click", () => {
	scrollToElement(block2);
});

function scrollToElement(element) {
	window.scrollTo({
		top: element.offsetTop,
		behavior: "smooth"
	});
}

/*------------ animation ------------*/

const animatedObjects = document.querySelectorAll('.animated-object');

document.addEventListener('DOMContentLoaded', function () {
	const animatedObject = document.querySelector('.animated-object');
	animatedObject.classList.add('_active');
});

window.addEventListener('scroll', () => {
	animatedObjects.forEach((object) => {
		const objectTop = object.getBoundingClientRect().top;
		const objectBottom = object.getBoundingClientRect().bottom;

		if (objectTop < window.innerHeight && objectBottom > 0) {
			object.classList.add('_active');
		} /*else {
			object.classList.remove('_active');
		}*/
	});
	});