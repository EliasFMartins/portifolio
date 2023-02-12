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
inicio.addEventListener('click', remove)
quem.addEventListener('click', remove)
projetos.addEventListener('click', remove)
conhecimento.addEventListener('click', remove)
function remove (){
  nav.classList.remove('active');
  btn.classList.remove('active')
}
function att(){
  if(window.screen.availWidth > 850){
    console.log('foi')
  }
}
 
window.sr = ScrollReveal({reset:true});

sr.reveal('.neon', { duration: 3000});
// sr.reveal('.quemsou', { rotate:{ x:0, y:80,z:0},duration: 3000});
sr.reveal('.cards', { duration: 3000});
sr.reveal('.projetoss', { duration: 3000});

function chama(){
  console.log(window.screen.availWidth)
}
att()
chama()

