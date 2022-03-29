// importera paketet Express
const express = require('express')
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

// Sätt igång servern
app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}.`)
})