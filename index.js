const app = require('express')()
const http = require('http').Server(app)
const socket = require('socket.io')(http)

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

socket.on('connection', (socket) => {
	socket.on('message', (msg) => {
		socket.emit('message', msg)
	})
})

http.listen(port, () => {
	console.log(`Socket.IO server running at http://localhost:${port}/`)
})
