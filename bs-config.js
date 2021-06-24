require('dotenv').config()

module.exports = {
	files: ['./templates/**/*', './web/bundle/**/*'],
	notify: false,
	proxy: process.env.PRIMARY_SITE_URL,
}
