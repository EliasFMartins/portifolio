const btn = document.querySelector(".mobile");
const nav = document.querySelector(".nav")
const inicio = document.querySelector(".inicioo")
const quem = document.querySelector(".quem")
const projetos = document.querySelector(".projeto")
const conhecimento = document.querySelector(".conhecimento")
btn.addEventListener("click", (e) => {
  btn.classList.toggle("active");
  nav.classList.toggle("hidden");
});
inicio.addEventListener("click", e=> 
{btn.classList.toggle("active");
nav.classList.toggle("hidden");})
 quem.addEventListener("click", e=> 
 {btn.classList.toggle("active");
 nav.classList.toggle("hidden");})
 projetos.addEventListener("click", e=> 
 {btn.classList.toggle("active");
 nav.classList.toggle("hidden");})
 conhecimento.addEventListener("click",e=> 
 {btn.classList.toggle("active");
 nav.classList.toggle("hidden");})
 
 
 
window.sr = ScrollReveal({reset:true});

sr.reveal('.inicio', { rotate:{ x:0, y:80,z:0},duration: 3000});
sr.reveal('.quemsou', { rotate:{ x:0, y:80,z:0},duration: 3000});
sr.reveal('.conhecimentos', { rotate:{ x:0, y:80,z:0},duration: 3000});
sr.reveal('.projetos',  { rotate:{ x:0, y:80,z:0},duration: 3000});
