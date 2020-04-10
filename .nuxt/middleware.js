const middleware = {}

middleware['delay'] = require('..\\middleware\\delay.js')
middleware['delay'] = middleware['delay'].default || middleware['delay']

export default middleware
