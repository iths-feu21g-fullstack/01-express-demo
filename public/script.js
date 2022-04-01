const button = document.querySelector('#button')
const message = document.querySelector('#message')
const checkin = document.querySelector('#checkinButton')
const gbMessage = document.querySelector('#guestbookMessage')

button.addEventListener('click', () => {
	message.innerHTML = 'It works!'
})

checkin.addEventListener('click', async () => {
	// skicka GET request till webbservern med fetch
	// vänta på svar
	// visa svaret i p-taggen

	// Alternativ 1: fetch med callbacks
	// fetch('/guestbook')
	// .then(response => response.text())  // response.json i vanliga fall
	// .then(text => {
	// 	gbMessage.innerHTML = text
	// })
	// .catch(error => {
	// 	console.log(error)
	// 	gbMessage.innerHTML = 'Something went wrong! Please try again later.'
	// })

	// Alternativ 2: fetch med async/await
	try {
		const response = await fetch('/guestbook')
		const text = await response.text()
		gbMessage.innerHTML = text
	} catch(error) {
		console.log(error)
		gbMessage.innerHTML = 'Something went wrong! Please try again later.'
	}

})