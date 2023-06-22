const bigger = document.getElementById("bigger")
const smaller = document.getElementById("smaller")
const body = document.getElementById("body")

bigger.addEventListener("click", function() {
    body.style.backgroundSize = "100px 100px"
})
smaller.addEventListener("click", function() {
    body.style.backgroundSize = "30px 30px"
})



