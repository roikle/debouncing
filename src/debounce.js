/**
 * A debounce function to reduce the number of function calls.
 * Inspired by freecodecamp article https://www.freecodecamp.org/news/debounce-explained-how-to-make-your-javascript-wait-for-your-user-to-finish-typing-2/
 * @param {function} callback - function to be called upon completion of timeout
 * @param {number} ms_delay - number of milliseconds of delay in timeout
 */
const debounce = (callback, ms_delay) => {
    let timeout;
    return function() {
		// clear old timeout
		window.clearTimeout(timeout);

		// reset timeout
		timeout = window.setTimeout(callback, ms_delay);
    }
}

export { debounce as default };