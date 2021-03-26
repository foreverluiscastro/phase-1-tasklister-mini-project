document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById('create-task-form').addEventListener('submit', addTask)
})

function addTask(event) {
  event.preventDefault()
  let input = event.target.querySelector('input').value
  const container = document.querySelector('#tasks')
  const liTag = document.createElement('li')
  liTag.textContent = input
  container.appendChild(liTag)
  event.target.querySelector('input').value = ""
}