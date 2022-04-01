// 3a Lägg till en route /guestbook som skickar texten "Du är besökare nummer 1". Antalet besökare ska räknas upp varje gång man laddar om sidan.
let visitorCount = 0
function get(req, res) {
	visitorCount++
	res.send(`Du är besökare nummer ${visitorCount}.`)
}

module.exports = { get }
