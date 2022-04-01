// importera paketet Express
const express = require('express')
// const { get as getGuestbook } = require('./routes/guestbook.js')
const guestbook = require('./routes/guestbook.js')
const PORT = 1337

// "app" är webbservern som vi bygger
const app = express()


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



app.get('/guestbook', guestbook.get)
// x++ returnerar gamla värdet på x
// ++x returnerar nya värdet på x



// Sätt igång servern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`)
})