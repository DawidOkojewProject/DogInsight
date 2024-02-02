const btn1 = document.querySelector('.chooseOne')
const btn2 = document.querySelector('.chooseTwo')
const btn3 = document.querySelector('.chooseThree')
const btn4 = document.querySelector('.chooseFour')
const btn5 = document.querySelector('.chooseFive')
const btn6 = document.querySelector('.chooseSix')
const btn7 = document.querySelector('.chooseSeventh')
const app = document.querySelector('.appText')
const wrapper = document.querySelector('.wrapper')
const photoMode = document.querySelector('.photoMode')
const photoIcon = document.querySelector('.fa-image')
const cameraIcon = document.querySelectorAll('.fa-camera')
const cameraSection = document.querySelector('.camera')
const divAppPhoto = document.querySelector('.appPhoto')
const logos = document.querySelectorAll('.logo')
const buttonX = document.querySelector('.xButton')
let textInterval

const textOne = 'Pies na tym zdjęciu jest spokojny, opanowany'
const textTwo =
	'Pies spedza dobry czas prawdopodobnie z włascicielem, wystawiony język swiadczy o pozytywnym usposobieniu'
const textThree = 'Pies posiada pogodne usposobienie,czuje sie komfortowo,jest zrelaksowany'
const textFour = 'Pies jest zrelaksowany, prawdopodobnie lekko zmęczony po spacerze'
const textFive =
	'Ma bardzo dobry kontakt z włascicielem zadowolona mina świadczy o pełnym zrelaksowaniu i  dobrze spedzonym czasie'
const textSix =
	'Pies jest lekko zmartwiony jego mimika świadczy o wewnętrznym problemie, zalecana jest dalsza obserwacja'
const textSeventh =
	'Spokojne usposobienie jakie te psy reprezentuja widać także w tym przypadku. Pies jest skupiony na obiekcie, prawodopodobnie obserwuje jedzących wlascicieli i czekający na moment gdy "przypadkowo" spadnie im jedzenie.'

const cameraFuction = () => {
	clearInterval(textInterval)
	wrapper.classList.add('none')
	cameraSection.classList.remove('none')
	divAppPhoto.classList.remove('imgGalery')
	divAppPhoto.classList.remove('imgOne')
	divAppPhoto.classList.remove('imgTwo')
	divAppPhoto.classList.remove('imgThree')
	divAppPhoto.classList.remove('imgFour')
	divAppPhoto.classList.remove('imgFive')
	divAppPhoto.classList.remove('imgSix')
	divAppPhoto.classList.remove('imgSeventh')
	app.textContent = ''
}
const closeFunction = () => {
	clearInterval(textInterval)
	wrapper.classList.remove('none')
	cameraSection.classList.add('none')
	divAppPhoto.classList.remove('imgGalery')
	divAppPhoto.classList.remove('imgOne')
	divAppPhoto.classList.remove('imgTwo')
	divAppPhoto.classList.remove('imgThree')
	divAppPhoto.classList.remove('imgFour')
	divAppPhoto.classList.remove('imgFive')
	divAppPhoto.classList.remove('imgSix')
	divAppPhoto.classList.remove('imgSeventh')
	app.textContent = ''
}
const swapSection = () => {
	clearInterval(textInterval)
	wrapper.classList.add('none')
	photoMode.classList.remove('none')
	divAppPhoto.classList.remove('imgGalery')
	divAppPhoto.classList.remove('imgOne')
	divAppPhoto.classList.remove('imgTwo')
	divAppPhoto.classList.remove('imgThree')
	divAppPhoto.classList.remove('imgFour')
	divAppPhoto.classList.remove('imgFive')
	divAppPhoto.classList.remove('imgSix')
	divAppPhoto.classList.remove('imgSeventh')

	app.textContent = ''
}
const menuSection = () => {
	clearInterval(textInterval) // Zatrzymuje animację tekstu
	wrapper.classList.remove('none') // Pokazuje główny wrapper
	photoMode.classList.add('none') // Ukrywa sekcję photoMode

	// Resetuje stan divAppPhoto
	divAppPhoto.classList.remove('imgGalery', 'imgOne', 'imgTwo', 'imgThree', 'imgFour')

	app.textContent = '' // Czyści tekst
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
btn5.addEventListener('click', () => chooseText(textFive, 'imgFive'))
btn6.addEventListener('click', () => chooseText(textSix, 'imgSix'))
btn7.addEventListener('click', () => chooseText(textSeventh, 'imgSeventh'))
photoIcon.addEventListener('click', () => {
	swapSection() // Dodatkowe działania, jeśli potrzebne
})
logos.forEach(logo => {
	logo.addEventListener('click', menuSection)
})
cameraIcon.forEach(camera => {
	camera.addEventListener('click', cameraFuction)
})
// cameraIcon.forEach(camera => {
// 	camera.addEventListener('click', cameraFuction)
// })
// cameraIcon.addEventListener('click', () => cameraFuction())
buttonX.addEventListener('click', closeFunction)
