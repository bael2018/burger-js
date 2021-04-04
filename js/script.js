
let toggle = document.querySelector(".toggle")
let header_upper = document.querySelector(".header_upper")

toggle.onclick = () => {
    header_upper.classList.toggle("left")
    toggle.classList.toggle("animation")
}