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
const buttonXalert = document.querySelector('.closeAlert')
const alertMicro = document.querySelector('.alertContainer')
const microphoneButtons = document.querySelectorAll('.fa-microphone')
const closeMenuBtn = document.querySelector('.closeMenu')
const menuTemplate = document.querySelector('.menuTemplate')
const burgersButton = document.querySelectorAll('.burgerBtn')
const homeInMenuSection = document.querySelector('.hyperLinkHome')
const authorsInMenuSection = document.querySelector('.hyperLinkAuthors')
const authorsSection = document.querySelector('.authorsSection')
const aboutInMenuSection = document.querySelector('.hyperLinkAboutProject')
const aboutProjectSection = document.querySelector('.aboutProject')
const contactInMenuSection = document.querySelector('.hyperLinkContakt')
const contactProjectSection = document.querySelector('.contactSection')
const aboutProjectInfo = document.querySelector('.aboutProject__info')
const menuItems = document.querySelectorAll('.hyperLink')
let index = 0
let textInterval

const textOne =
	'Pies na tym zdjęciu jest spokojny, opanowany. Posiada łagodną osobowość. Tego typu psy są dobrymi opiekunami osób młodszych; są dla nich delikatne, ale także opiekuńcze w stosunku do najmłodszych.'
const textTwo =
	'Pies spędza dobry czas, prawdopodobnie z właścicielem; wystawiony język świadczy o pozytywnym usposobieniu. Posiada spokojny charakter, jest opanowany, ale także gotowy do dalszych interakcji.'
const textThree =
	'Pies posiada pogodne usposobienie, czuje się komfortowo i jest zrelaksowany. Zwierzę jest zadbane i posiada niespożyte pokłady energii.'
const textFour =
	'Pies jest zrelaksowany, prawdopodobnie lekko zmęczony po spacerze. Zwierzę jest zadbane, prawdopodobnie niedługo pójdzie spać.'
const textFive =
	'Ma bardzo dobry kontakt z właścicielem, zadowolona mina świadczy o pełnym zrelaksowaniu i dobrze spędzonym czasie. Usposobienie jest pogodne, brak stresu.'
const textSix =
	'Pies jest zrelaksowany, ciekawy świata. Znalazł sobie zabawkę, którą się bawi. Pogodne usposobienie, brak problemów behawioralnych. Pies jest zadbany, nie zauważono żadnych negatywnych odruchów.'
const textSeventh =
	'Pies czuje się komfortowo i jest pozytywnie nastawiony do dalszych interakcji. Posiada pogodne usposobienie, brak niepokojących sygnałów. Pies jest zadbany.'

const aboutProjectText = `Jest to innowacyjne narzędzie oparte na zaawansowanych mechanizmach uczenia maszynowego, które zostało stworzone z myślą o pomocy psom z problemami behawioralnymi. Głównym celem tego rozwiązania jest poprawa jakości życia psów poprzez zrozumienie i rozwiązanie trudności behawioralnych.`

const gptModeInAboutProject = text => {
	let counter = 0
	textInterval = setInterval(() => {
		if (counter < text.length) {
			aboutProjectInfo.textContent += text[counter]
			counter++
		} else {
			clearInterval(textInterval)
		}
	}, 100)
}

const openMenuFunction = index => {
	closeAllFUnction()
	wrapper.classList.add('none')
	menuTemplate.classList.remove('none')
	///ttutaj
	////tuuu
	index = 0

	menuItems.forEach((menuItem, index) => {
		// Usuwa klasę 'none' i dodaje 'animation' do każdego elementu menu z opóźnieniem
		setTimeout(() => {
			menuItem.classList.remove('none')
			menuItem.classList.add('animation') // Dodaje animację do każdego elementu menu
			index++
		}, index * 400) // Opóźnienie zwiększa się o 1s dla każdego kolejnego elementu
		index = 0
	})
}
const closeMenuFunction = () => {
	wrapper.classList.remove('none')
	menuTemplate.classList.add('none')
}

const microphoneFunctionShow = () => {
	alertMicro.classList.remove('none')

	photoMode.classList.add('none')
	wrapper.classList.remove('none')
	divAppPhoto.classList.remove('imgGalery')
	divAppPhoto.classList.remove('imgOne')
	divAppPhoto.classList.remove('imgTwo')
	divAppPhoto.classList.remove('imgThree')
	divAppPhoto.classList.remove('imgFour')
	divAppPhoto.classList.remove('imgFive')
	divAppPhoto.classList.remove('imgSix')
	divAppPhoto.classList.remove('imgSeventh')
	clearInterval(textInterval)
	app.textContent = ''
}
const microphoneFunctionClose = () => {
	alertMicro.classList.add('none')
}
const cameraFuction = () => {
	clearInterval(textInterval)
	alertMicro.classList.add('none')
	photoMode.classList.add('none')
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
	alertMicro.classList.add('none')

	app.textContent = ''
	divAppPhoto.textContent = ''
}
const closeAllFUnction = () => {
	aboutProjectInfo.textContent = ''
	clearInterval(textInterval)
	menuTemplate.classList.add('none')
	alertMicro.classList.add('none')
	photoMode.classList.add('none')
	wrapper.classList.add('none')
	cameraSection.classList.add('none')
	divAppPhoto.classList.remove('imgGalery')
	divAppPhoto.classList.remove('imgOne')
	divAppPhoto.classList.remove('imgTwo')
	divAppPhoto.classList.remove('imgThree')
	divAppPhoto.classList.remove('imgFour')
	divAppPhoto.classList.remove('imgFive')
	divAppPhoto.classList.remove('imgSix')
	divAppPhoto.classList.remove('imgSeventh')
	authorsSection.classList.add('none')
	aboutProjectSection.classList.add('none')
	contactProjectSection.classList.add('none')

	divAppPhoto.textContent = ''
	index = 0
	menuItems.forEach(menuItem => {
		menuItem.classList.remove('animation') // Dodaje animację do każdego elementu menu
		menuItem.classList.add('none') // Dodaje animację do każdego elementu menu
	})

	// if ((divAppPhoto.contains = 'video')) {
	// 	divAppPhoto.remove
	// }
}
const menuSection = () => {
	alertMicro.classList.add('none')

	// Resetuje stan divAppPhoto

	app.textContent = '' // Czyści tekst
	closeAllFUnction()
	wrapper.classList.remove('none')
}
const homeFunction = () => {
	closeAllFUnction()
	wrapper.classList.remove('none')
}
const authorsFunction = () => {
	closeAllFUnction()
	authorsSection.classList.remove('none')
}
const aboutFunction = text => {
	closeAllFUnction()
	gptModeInAboutProject(text)
	aboutProjectSection.classList.remove('none')
}
const contactFunction = () => {
	closeAllFUnction()
	contactProjectSection.classList.remove('none')
}
const addVideoToAppPhoto = (videoSrc, text) => {
	closeAllFUnction()
	wrapper.classList.remove('none')
	// Usuń obecne zawartości appPhoto
	divAppPhoto.innerHTML = ''

	// Stwórz nowy element <video>
	const videoElement = document.createElement('video')
	videoElement.setAttribute('src', videoSrc)
	videoElement.setAttribute('controls', '')
	videoElement.style.width = '100%' // Dostosuj do potrzeb

	// Dodaj element video do divAppPhoto
	divAppPhoto.appendChild(videoElement)
	app.textContent = ''
	let counter = 0

	textInterval = setInterval(() => {
		if (counter < text.length) {
			app.textContent += text[counter]
			counter++
		} else {
			clearInterval(textInterval)
		}
	}, 100) // Czas w
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

const chooseVideo1Button = document.querySelector('.chooseVideoOne') // Zakładając, że masz przycisk do wyboru wideo
const chooseVideo2Button = document.querySelector('.chooseVideoTwo') // Zakładając, że masz przycisk do wyboru wideo
chooseVideo1Button.addEventListener('click', () => addVideoToAppPhoto('./dist/video/1.mp4', textSix)) // Przykładowa ścieżka do wideo
chooseVideo2Button.addEventListener('click', () => addVideoToAppPhoto('./dist/video/2.mp4', textSeventh)) // Przykładowa ścieżka do wideo

btn1.addEventListener('click', () => chooseText(textOne, 'imgOne'))
btn2.addEventListener('click', () => chooseText(textTwo, 'imgTwo'))
btn3.addEventListener('click', () => chooseText(textThree, 'imgThree'))
btn4.addEventListener('click', () => chooseText(textFour, 'imgFour'))
btn5.addEventListener('click', () => chooseText(textFive, 'imgFive'))

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
microphoneButtons.forEach(microphoneButton => {
	microphoneButton.addEventListener('click', microphoneFunctionShow)
})
buttonXalert.addEventListener('click', microphoneFunctionClose)
burgersButton.forEach(burgerButton => {
	burgerButton.addEventListener('click', () => openMenuFunction(index))
})
closeMenuBtn.addEventListener('click', closeMenuFunction)
homeInMenuSection.addEventListener('click', homeFunction)
authorsInMenuSection.addEventListener('click', authorsFunction)
aboutInMenuSection.addEventListener('click', () => aboutFunction(aboutProjectText))
contactInMenuSection.addEventListener('click', contactFunction)
