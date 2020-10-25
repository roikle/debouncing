import debounce from "../util/debounce.js"
import Row from "./row.js";

/**
 * ScrollWindow class for creating a scroll window to a container id.
 * @class
 */
export default class ScrollWindow {
	/**
	 * Create a ScrollWindow object and add it to the specified container.
	 * @constructor
	 * @param {string} containerId - Container Id for the scroll window. 
	 */
	constructor(containerId) {
		this.containerId = containerId;
		this.scrollWindow;

		this.addScrollWindow();

		// Add event handlers for scroll window.
		if (this.scrollWindow) {
			
			// Scroll event without debounce
			this.scrollWindow.addEventListener('scroll', function(){
					console.log('scrolled window');
			});

			// Scroll event with debounce
			this.scrollWindow.addEventListener('scroll', debounce(function(){
				console.log('debounced scrolled window');
			}, 500));
		}
	}

	// Add rows of content to the scroll window
	addContentToScrollWindow() {
		let i, hexColour;
		const rows = 16;

		for (i = 0; i < rows; i += 1) {
			hexColour = "#" + i.toString(16) + i.toString(16) + "0000";
			new Row('scrolling-window', hexColour);
		}
	}

	// Add scroll window to container
	addScrollWindow() {
		const container = document.getElementById(this.containerId);
		this.scrollWindow = document.createElement('div');
		this.scrollWindow.setAttribute('id', 'scrolling-window');
		container.appendChild(this.scrollWindow);
		
		this.addContentToScrollWindow();
	}
}
