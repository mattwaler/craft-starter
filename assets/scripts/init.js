// Use this file to import and initialize global libraries
import 'lazysizes'
import Alpine from 'alpinejs'

window.Alpine = Alpine

// Start Alpine when the page is ready.
window.addEventListener('DOMContentLoaded', (event) => {
	Alpine.start()
})

// Restart Alpine when the DOM is altered by HTMX.
document.body.addEventListener('htmx:afterSwap', () => {
	Alpine.start()
})
