/* Elements ================================================================ */
const screenOne = document.querySelector('#screen-1')
const screenTwo = document.querySelector('#screen-2')
const tryButton = document.querySelector('#btn-try')
const guessText = document.querySelector('#txt-guess')
const playAgainButton = document.querySelector('#btn-play-again')
const attemptsMsg = document.querySelector('#attempts')

let secretNumber = null
let xAttempts = 0


function randomNumber() {
  number = Math.floor(Math.random() * 10)
  return number
}

function toggleScreen() {
  screenOne.classList.toggle('hide')
  screenTwo.classList.toggle('hide')
}

function handleTryButton(event) {
  event.preventDefault()
  xAttempts++
  console.log('tentativa ' + xAttempts)
  if(secretNumber === Number(guessText.value)){
    gotTheNumber()
  }

  guessText.value = ''
}

function handlePlayAgainButton() {
  resetGame()
  toggleScreen()
}

function resetGame() {
  xAttempts = 0
  secretNumber = randomNumber()
}

function gotTheNumber() {
  attemptsMsg.innerText = `${xAttempts} tentativa${xAttempts>1 ? 's' : ', parabéns' }`
  toggleScreen()
}

/* Event listeners ========================================================= */
tryButton.addEventListener('click', handleTryButton)
playAgainButton.addEventListener('click', handlePlayAgainButton)


//draw the starting number
resetGame()