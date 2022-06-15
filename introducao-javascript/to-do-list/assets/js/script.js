const newAssignment = document.getElementById("assignment")
const newList = document.getElementById("list")
const form = document.getElementById("task-form")

form.onsubmit = function (e) {
  e.preventDefault()
  createList()
  form.reset()
}

function createList() {
  const input = document.createElement("input")
  const label = document.createElement("label")
  const listContainer = document.createElement("div")

  input.setAttribute("type", "checkbox")
  input.setAttribute("id", `${newAssignment.value}`)

  label.setAttribute("for", `${newAssignment.value}`)
  label.textContent = newAssignment.value

  newList.appendChild(input)
  newList.appendChild(label)
  newList.appendChild(listContainer)
}
