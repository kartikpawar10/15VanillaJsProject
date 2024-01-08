const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector(".links");
const btn = document.getElementById("btn")

navToggle.addEventListener('click',() =>{
    links.classList.toggle("show-links");
})
btn.addEventListener('click',()=>{
    btn.classList.toggle("round")
})