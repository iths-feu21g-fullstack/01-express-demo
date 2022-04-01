// importera paketet Express
const express = require('express')
// const { get as getGuestbook } = require('./routes/guestbook.js')
const guestbook = require('./routes/guestbook.js')
const PORT = 1337

// "app" är webbservern som vi bygger
const app = express()


// Middleware
app.use( express.static('public') )

/*app.get('/style.css', (req, res) => {
	// console.log(__dirname + '/public/style.css')
	res.sendFile(__dirname + '/public/style.css')
})
app.get('/index.html', (req, res) => {
	// console.log(__dirname + '/public/index.html')
	res.sendFile(__dirname + '/public/index.html')
})
app.get('/script.js', (req, res) => {
	// console.log(__dirname + '/public/script.js')
	res.sendFile(__dirname + '/public/script.js')
})*/


// Detta ska göras om det kommer ett "GET /" request
app.get('/', (req, res) => {
	res.send('You got me!')
})
app.get('/icecream', (req, res) => {
	res.send('Time for icecream')
})
app.get('/infinite', (req, res) => {
	console.log('Anropar inte res.send')
})

const fruits = ['apple', 'orange', 'banana', 'grape']
// GET /fruits?index=3
app.get('/fruits', (req, res) => {
	let i = req.query.index
	console.log('GET /fruits  i=', i)

	if( i !== undefined ) {
		res.send(fruits[i])
	} else {
		res.send(fruits)
	}
})





app.use('/guestbook', guestbook)
// x++ returnerar gamla värdet på x
// ++x returnerar nya värdet på x



// Sätt igång servern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`)
})