const express = require('express')
const router = express.Router()

// 3a Lägg till en route /guestbook som skickar texten "Du är besökare nummer 1". Antalet besökare ska räknas upp varje gång man laddar om sidan.
let visitorCount = 0

// /guestbook är underförstått
router.get('/', (req, res) => {
	visitorCount++
	res.send(`Du är besökare nummer ${visitorCount}.`)	
})

router.get('/remove', (req, res) => {
	visitorCount--
	res.send(`Tog bort en besökare.`)
})

router.get('*', (req, res) => {
	res.send(`Felaktig URL, försök igen!`)
})


module.exports = router
