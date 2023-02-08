/**
 * SCROLL ANIMATION
 */
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

/**
 * SIDEMENU
 */
const sidemenu = document.getElementById('sidemenu');

function openmenu() {
	sidemenu.style.right = '0';
}

function closemenu() {
	sidemenu.style.right = '-200px';
}

/**
 * FORM
 */
const form = document.querySelector('form');
const inputs = document.querySelectorAll('input, textarea');

form.addEventListener('submit', (event) => {
	event.preventDefault();

	let isValid = true;
	inputs.forEach((input) => {
		if (!input.value) {
			isValid = false;
		}
	});

	if (isValid) {
		showMessage('success', 'Form submitted successfully!');
	} else {
		showMessage('error', 'Please fill out all fields');
	}
});

function showMessage(type, message) {
	const messageContainer = document.createElement('div');
	messageContainer.classList.add('message', type);
	messageContainer.innerHTML = message;
	form.appendChild(messageContainer);

	setTimeout(() => {
		messageContainer.style.display = 'none';
	}, 3000);
}
