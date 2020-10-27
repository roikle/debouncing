/**
 * Counter object which contains a count of regular and
 * debounced scroll events.
 * @class
 */
export default class Counter {
	constructor(containerId) {
		this.containerId = containerId;
		this.regularCount = 0;
		this.debounceCount = 0;

		// Add counter display
		this.addCounterDisplay();
	}

	addCounterDisplay() {
		const container = document.getElementById(this.containerId);
		const counterDisplay = document.createElement('div');
		counterDisplay.classList.add('counter-display');

		// Add regular counter
		const regularCounter = document.createElement('div');
		regularCounter.classList.add('regular-counter');
		regularCounter.innerHTML = 'Regular Scroll Events: ' + this.regularCount;
		counterDisplay.appendChild(regularCounter);

		// Add debounce counter
		const debounceCounter = document.createElement('div');
		debounceCounter.classList.add('debouce-counter');
		debounceCounter.innerHTML = 'Debounce Scroll Events: ' + this.debounceCount;
		counterDisplay.appendChild(debounceCounter);

		// Add counterDisplay to counter
		container.appendChild(counterDisplay);
	}
}