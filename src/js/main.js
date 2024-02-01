const btn1 = document.querySelector('.chooseOne')
const btn2 = document.querySelector('.chooseTwo')
const btn3 = document.querySelector('.chooseThree')
const btn4 = document.querySelector('.chooseFour')
const app = document.querySelector('.appText')
const wrapper = document.querySelector('.wrapper')
const photoMode = document.querySelector('.photoMode')
const photoIcon = document.querySelector('.fa-image')

const textOne = 'Pies na tym zdjęciu jest spokojny, opanowany'
const textTwo =
	'Pies spedza dobry czas prawdopodobnie z włascicielem, wystawiony język swiadczy o pozytywnym usposobieniu'
const textThree = 'Pies posiada pogodne usposobienie,czuje sie komfortowo,jest zrelaksowany'
const textFour = 'Pies jest zrelaksowany, prawdopodobnie lekko zmęczony po spacerze'

const swapSection = () => {
	wrapper.classList.add('none')
	photoMode.classList.remove('none')
}

const chooseText = text => {
	wrapper.classList.remove('none')
	photoMode.classList.add('none')
	app.textContent = ''
	for (let i = 0; i < text.length; i++) {
		setTimeout(() => {
			app.textContent += text[i]
		}, 100 * i)
	}
}

btn1.addEventListener('click', () => chooseText(textOne))
btn2.addEventListener('click', () => chooseText(textTwo))
btn3.addEventListener('click', () => chooseText(textThree))
btn4.addEventListener('click', () => chooseText(textFour))
photoIcon.addEventListener('click', () => swapSection())
