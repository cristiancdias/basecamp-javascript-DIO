function changeEvent() {
  changeMode()
  changeText()
}

function changeMode() {
  body.classList.toggle(darkModeClass)
  h1.classList.toggle(darkModeClass)
  footer.classList.toggle(darkModeClass)
  button.classList.toggle(darkModeClass)
}

function changeText() {
  const lightMode = "Light Mode"
  const darkMode = "Dark Mode"

  if (body.classList.contains(darkModeClass)) {
    h1.innerHTML = darkMode + " On"
    button.innerHTML = lightMode
    return
  }
  h1.innerHTML = lightMode + " On"
  button.innerHTML = darkMode
}

const darkModeClass = "dark-mode"
const body = document.getElementsByTagName("body")[0]
const h1 = document.getElementById("page-title")
const footer = document.getElementsByTagName("footer")[0]
const button = document.getElementById("mode-selector")

button.addEventListener("click", changeEvent)
