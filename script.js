let  btnMenu = document.getElementById('btn-abrir-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})
    
    // Efeito de deslizamento para a seção de habilidades
window.addEventListener('scroll', function() {
    const habilidadesSection = document.querySelector('.habilidades-conteudo');
    const sectionPosition = habilidadesSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
        habilidadesSection.classList.add('animate__animated', 'animate__slideInLeft');
    } else {
         habilidadesSection.classList.remove('animate__animated', 'animate__slideInLeft');
    }
});


// EmailJS
emailjs.init("GBrS3tuOVHjUmci36"); 


const form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  emailjs.sendForm('service_ep66agk', 'template_ka4jdfb', form)
    .then(function(response) {
      alert('Mensagem enviada com sucesso!');
      console.log('Mensagem enviada', response.status, response.text);
    }, function(error) {
      alert('Erro ao enviar mensagem, tente novamente.');
      console.error('Erro ao enviar mensagem', error);
    });
});


