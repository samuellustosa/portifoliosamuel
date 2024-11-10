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


// Inicialização do EmailJS
emailjs.init("GBrS3tuOVHjUmci36");

// Obter o formulário
const form = document.getElementById("contact-form");

form.addEventListener("submit", async function(event) {
  event.preventDefault();


  const name = form.querySelector('input[name="name"]');
  const email = form.querySelector('input[name="email"]');
  const message = form.querySelector('textarea[name="mensagem"]');

  if (!name.value || !email.value || !message.value) {
    alert("Por favor, preencha todos os campos.");
    return;
  }


  const loadingMessage = document.createElement('p');
  loadingMessage.textContent = "Enviando... Aguarde.";
  form.appendChild(loadingMessage);

  try {
    
    const response = await emailjs.sendForm('service_ep66agk', 'template_ka4jdfb', form);

  
    alert('Mensagem enviada com sucesso!');
    console.log('Mensagem enviada:', response.status, response.text);
    
    
    form.reset();

  } catch (error) {
    
    alert('Erro ao enviar mensagem, tente novamente.');
    console.error('Erro ao enviar mensagem', error);
  } finally {
    
    form.removeChild(loadingMessage);
  }
});


