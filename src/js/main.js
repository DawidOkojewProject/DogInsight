const btn1 = document.querySelector('.chooseOne')
const btn2 = document.querySelector('.chooseTwo')
const btn3 = document.querySelector('.chooseThree')
const btn4 = document.querySelector('.chooseFour')
const app = document.querySelector('.appText')
const wrapper = document.querySelector('.wrapper')
const photoMode = document.querySelector('.photoMode')
const photoIcon = document.querySelector('.fa-image')
const divAppPhoto = document.querySelector('.appPhoto')
let textInterval

const textOne = 'Pies na tym zdjęciu jest spokojny, opanowany'
const textTwo =
	'Pies spedza dobry czas prawdopodobnie z włascicielem, wystawiony język swiadczy o pozytywnym usposobieniu'
const textThree = 'Pies posiada pogodne usposobienie,czuje sie komfortowo,jest zrelaksowany'
const textFour = 'Pies jest zrelaksowany, prawdopodobnie lekko zmęczony po spacerze'

const swapSection = () => {
	clearInterval(textInterval)
	wrapper.classList.add('none')
	photoMode.classList.remove('none')
	divAppPhoto.classList.remove('imgGalery')
	divAppPhoto.classList.remove(photo)
	app.textContent = ''
}

const chooseText = (text, photo) => {
	wrapper.classList.remove('none')
	photoMode.classList.add('none')
	divAppPhoto.classList.add('imgGalery')
	divAppPhoto.classList.add(photo)
	app.textContent = ''
	let counter = 0

	textInterval = setInterval(() => {
		if (counter < text.length) {
			app.textContent += text[counter]
			counter++
		} else {
			clearInterval(textInterval)
		}
	}, 100) // Czas w milisekundach, np. 1000 ms = 1 sekunda
}

btn1.addEventListener('click', () => chooseText(textOne, 'imgOne'))
btn2.addEventListener('click', () => chooseText(textTwo, 'imgTwo'))
btn3.addEventListener('click', () => chooseText(textThree, 'imgThree'))
btn4.addEventListener('click', () => chooseText(textFour, 'imgFour'))
photoIcon.addEventListener('click', () => {
	swapSection() // Dodatkowe działania, jeśli potrzebne
})
