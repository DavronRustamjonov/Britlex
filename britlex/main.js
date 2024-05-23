const button = document.getElementById("nav__btn");
const subbutton = document.getElementById("nav__subbtn");
const modal = document.querySelector(".modal");
const tel = document.querySelector(".modal__sublink")
button.addEventListener("click" , function(){
    modal.style.display = "block"
    subbutton.style.display = "block"
    tel.style.display = "block"
})
subbutton.addEventListener("click",function(){
    modal.style.display = "none"
    subbutton.style.display = "none"
    tel.style.display = "none"
    
})
