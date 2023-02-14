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
window.addEventListener('resize', ()=>{
  if(window.innerWidth > 850){
    removeClass
    location.reload()
  
  }
})



inicio.addEventListener('click', removeClass)
quem.addEventListener('click', removeClass)
projetos.addEventListener('click', removeClass)
conhecimento.addEventListener('click', removeClass)
function removeClass (){
  nav.classList.remove('active');
  btn.classList.remove('active')
}

 
window.sr = ScrollReveal({reset:true});

sr.reveal('.neon', { duration: 3000});
// sr.reveal('.quemsou', { rotate:{ x:0, y:80,z:0},duration: 3000});
sr.reveal('.cards', { duration: 3000});
sr.reveal('.projetoss', { duration: 3000});



