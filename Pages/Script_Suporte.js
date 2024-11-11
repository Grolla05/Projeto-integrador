function handleSubmit(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Captura os dados do formulário
  const form = document.getElementById('contactForm');
  const nome = form.nome.value;
  const email = form.email.value;
  const mensagem = form.mensagem.value;

  // Chama a função sendMail
  sendMail(nome, email, mensagem);

  // Limpa os campos do formulário após o envio
  form.reset();
}

function sendMail(nome, email, mensagem) {
  var templateParams = {
    nome: nome,
    email: email,
    mensagem: mensagem,
  };

  emailjs.send('service_9h671ex', 'template_hvhfmhf', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
      showNotification('E-mail enviado com sucesso!');
    },
    (error) => {
      console.log('FAILED...', error);
      showNotification('Falha no envio do e-mail. Tente novamente mais tarde.', true);
    }
  );
}

// Função para mostrar uma notificação na tela
function showNotification(message, isError = false) {
  const notification = document.createElement('div');
  notification.className = `notification ${isError ? 'error' : 'success'}`;
  notification.innerText = message;

  document.body.appendChild(notification);

  // Remove a notificação após 3 segundos
  setTimeout(() => {
    notification.remove();
  }, 3000);
}
