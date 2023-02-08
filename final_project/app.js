// const observer = new IntersectionObserver((entries) => {
// 	entries.forEach((entry) => {
// 		console.log(entry);
// 		if (entry.isIntersecting) {
// 			entry.target.classList.add('show');
// 		} else {
// 			entry.target.classList.remove('show');
// 		}
// 	});
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((element) => observer.observe(element));

// var tablinks = document.getElementsByClassName('tab-links');
// var tabcontents = document.getElementsByClassName('tab-contents');

// function opentab(tabname) {
// 	for (tablink of tablinks) {
// 		tablink.classList.remove('active-link');
// 	}
// 	for (tabcontent of tabcontents) {
// 		tabcontent.classList.remove('active-tab');
// 	}
// 	event.currentTarget.classList.add('active-link');
// 	document.getElementById(tabname).classList.add('active-tab');
// }

// var sidemenu = document.getElementById('sidemenu');

// function openmenu() {
// 	sidemenu.style.right = '0';
// }

// function closemenu() {
// 	sidemenu.style.right = '-200px';
// }

// const form = document.querySelector('form');
// const inputs = document.querySelectorAll('input, textarea');

// form.addEventListener('submit', function (event) {
// 	event.preventDefault();

// 	let isValid = true;
// 	inputs.forEach((input) => {
// 		if (!input.value) {
// 			isValid = false;
// 		}
// 	});

// 	if (isValid) {
// 		showSuccessMessage();
// 	} else {
// 		showErrorMessage();
// 	}
// });

// function showSuccessMessage() {
// 	const successMessage = document.createElement('div');
// 	successMessage.classList.add('message', 'success');
// 	successMessage.innerHTML = 'Form submitted successfully!';
// 	form.appendChild(successMessage);

// 	setTimeout(() => {
// 		successMessage.style.display = 'none';
// 	}, 3000); // hide message after 3 seconds
// }

// function showErrorMessage() {
// 	const errorMessage = document.createElement('div');
// 	errorMessage.classList.add('message', 'error');
// 	errorMessage.innerHTML = 'Please fill out all fields';
// 	form.appendChild(errorMessage);

// 	setTimeout(() => {
// 		errorMessage.style.display = 'none';
// 	}, 3000); // hide message after 3 seconds
// }

//________________________________________________________________________________________

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

const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
	for (const tablink of tablinks) {
		tablink.classList.remove('active-link');
	}
	for (const tabcontent of tabcontents) {
		tabcontent.classList.remove('active-tab');
	}
	event.currentTarget.classList.add('active-link');
	document.getElementById(tabname).classList.add('active-tab');
}

const sidemenu = document.getElementById('sidemenu');

function openmenu() {
	sidemenu.style.right = '0';
}

function closemenu() {
	sidemenu.style.right = '-200px';
}

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
