const btn = document.querySelector(".mobile");
const nav = document.querySelector(".nav")
const inicio = document.querySelector(".inicioo")
const quem = document.querySelector(".quem")
const projetos = document.querySelector(".projeto")
const conhecimento = document.querySelector(".conhecimento")

btn.addEventListener('click', toogleMenu);
function  toogleMenu (){
  nav.classList.toggle('active');
  btn.classList.toggle('active');
}
 
 
window.sr = ScrollReveal({reset:true});

sr.reveal('.inicio', { rotate:{ x:0, y:80,z:0},duration: 3000});
sr.reveal('.quemsou', { rotate:{ x:0, y:80,z:0},duration: 3000});
sr.reveal('.conhecimentos', { rotate:{ x:0, y:80,z:0},duration: 3000});
sr.reveal('.projetos',  { rotate:{ x:0, y:80,z:0},duration: 3000});
