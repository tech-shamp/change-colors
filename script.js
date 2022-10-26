const btn = document.getElementById("btn")
const txt = document.getElementById("txt")
const span = document.querySelectorAll("span")

function changeColors(color) {
  // change color
  document.body.style.background = color
  btn.style.background = color
  txt.style.borderColor = color

  //   Mark as active color
  span.forEach(function (item) {
    item.classList.remove("active")
  })
  event.target.classList.add("active")
}
