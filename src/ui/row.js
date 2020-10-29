/**
 * Row class for creating row divs
 * @class
 */
export default class Row {

	/**
	 * Creates a div with a specified colour
	 * @constructor
	 * @param {string} containerId - Id of the container
	 * @param {string} colour - hex colour code
	 */
	constructor(containerId, colour) {
		this.containerId = containerId;
		this.colour = colour;

		this.createRow();
	}

	// Create a row div with a set background colour. 
	createRow() {
		const container = document.getElementById(this.containerId);
		const row = document.createElement('div');
		row.classList.add('row');
		row.style.backgroundColor = this.colour;
		container.appendChild(row);
	}
}
