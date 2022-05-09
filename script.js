const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const input = document.querySelector('input');

input.addEventListener('change', updateValue)

function updateValue() {
  const dateControl = document.querySelector('input[type="date"]').value
  const newDateEl = dateControl
  return newDateEl
}

function countdown() {
  
  const actualDate = new Date()
  const newDate = new Date(updateValue())
  const base = Math.floor((newDate - actualDate) / 1000)

  const day = Math.floor(base / 3600 / 24)
  const hours = Math.floor((base / 3600) % 24)
  const minutes = Math.floor((base / 60) % 60)
  const seconds = Math.floor(base % 60)

  daysEl.innerHTML = day
  hoursEl.innerHTML = hours
  minutesEl.innerHTML = minutes
  secondsEl.innerHTML = seconds

  console.log(dateControl)
}

setInterval(countdown, 1000)
