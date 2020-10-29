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

		// Update counter display
		this.updateCounterDisplay();

		// Add event handler for counter display
		this.countersEventHandler();
	}

	// Add a counter display to the interface.
	addCounterDisplay() {
		const container = document.getElementById(this.containerId);
		const counterDisplay = document.createElement('div');
		counterDisplay.classList.add('counter-display');

		// Add regular counter
		const regularCounter = document.createElement('div');
		regularCounter.setAttribute('id', 'regular-counter');
		counterDisplay.appendChild(regularCounter);

		// Add debounce counter
		const debounceCounter = document.createElement('div');
		debounceCounter.setAttribute('id', 'debounce-counter');
		counterDisplay.appendChild(debounceCounter);

		// Add counterDisplay to counter
		container.appendChild(counterDisplay);
	}

	// Update the counter display text with an updated count values
	updateCounterDisplay() {
		const regularCounter = document.getElementById('regular-counter');
		regularCounter.innerHTML = 'Regular Scroll Events: ' + this.regularCount;
		
		const debounceCounter = document.getElementById('debounce-counter');
		debounceCounter.innerHTML = 'Debounce Scroll Events: ' + this.debounceCount;
	}

	// Add event handlers for increment-regular-count and 
	// increment-debounce-count, increment count values, and update the 
	// counter displays
	countersEventHandler() {
		var context = this;
		document.addEventListener('increment-regular-count', function(){
			context.regularCount += 1;
			context.updateCounterDisplay();
		}, false);

		document.addEventListener('increment-debounce-count', function(){
			context.debounceCount += 1;
			context.updateCounterDisplay();
		}, false);
	}
}
