const starButton=document.querySelector("#start")
const screen1=document.querySelector("#screen1")
const screen2=document.querySelector("#screen2")
const screen3=document.querySelector("#screen3")
const characters= document.querySelectorAll("#screen2 img")


starButton.onclick = () => {
screen1.style.display="none"

screen2.style.display="flex"
}

