/* Elements ================================================================ */
const screenOne = document.querySelector('#screen-1')
const screenTwo = document.querySelector('#screen-2')
const tryButton = document.querySelector('#btn-try')
const guessText = document.querySelector('#txt-guess')
const playAgainButton = document.querySelector('#btn-play-again')
const attemptsMsg = document.querySelector('#attempts')
const form = document.querySelector('form')
const errorMessage = document.querySelector('#error-message')

let secretNumber = randomNumber()
let xAttempts = 0


function randomNumber() {
  number = Math.floor(Math.random() * 10)
  return number
}

function randomAnswer() {
  const answerList = [
    'Errou!',
    'Não foi dessa vez!',
    'Tente de novo!',
    'Tente mais uma vez!',
    'Tente outra vez!',
    'Número errado!',
    'Mais uma chance!',
    'Tente novamente!'
  ]
  const index = Math.floor(Math.random() * answerList.length)
  return answerList[index]
}

function showErrorMessage(text) {

  errorMessage.innerText = randomAnswer()
  if(text){ 
    errorMessage.innerText = `${text}` 
  } 
    
  errorMessage.style.opacity = 0.75
  
  setTimeout(() => {
    errorMessage.style.opacity = 0
  }, 500)
}

function toggleScreen() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}

function handleTryButton(event) {
  event.preventDefault()

  let notValidNumber = isNaN(guessText.value) || guessText.value == ''

  if (notValidNumber){
    showErrorMessage('Informe um valor válido!')
    return
  } 
  
  xAttempts++ 
  
  if(secretNumber === Number(guessText.value)){
    attemptsMsg.innerText = `${xAttempts} tentativa${xAttempts>1 ? 's' : ', parabéns' }`
    toggleScreen()
  } else {
    showErrorMessage()
  }
  
  guessText.value = ''
  guessText.focus()
}

function handlePlayAgainButton() {
  resetGame()
}

function resetGame() {
  secretNumber = randomNumber()
  guessText.value = ''
  guessText.focus()
  xAttempts = 0
  screenOne.classList.remove('hide')
  screenTwo.classList.add('hide')
}

function handleEnterPress(e) {
  let screenTwoVisible = !screenTwo.classList.contains('hide')

  if(screenTwoVisible){
    handlePlayAgainButton()
  } else if (e.code == 'Enter'){
    handleTryButton(e)
  }
}

/* Event listeners ========================================================= */
tryButton.addEventListener('click', handleTryButton)

playAgainButton.addEventListener('click', handlePlayAgainButton)

// form.addEventListener('submit', handleTryButton)
form.addEventListener('submit', (e) => {
  e.preventDefault()
})

document.body.addEventListener('keydown', handleEnterPress)

