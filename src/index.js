import debounce from './debounce.js';

const scrollWindow = document.getElementById('scrolling-window');

// Scroll event without debounce
scrollWindow.addEventListener('scroll', function(){
		console.log('scrolled window');
});

// Scroll event with debounce
scrollWindow.addEventListener('scroll', debounce(function(){
	console.log('debounced scrolled window');
}, 500));