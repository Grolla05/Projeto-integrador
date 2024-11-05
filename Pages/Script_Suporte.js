var nome = document.getElementById('nome').value;
var email = document.getElementById('email').value;
var mensagem = document.getElementById('mensagem').value;

function salvar(nome, email, mensagem) {
    axios.post('https://sheetdb.io/api/v1/0x5ii4k2k1n0z', {
        "data": {
            "nome": nome,
            "email": email,
            "mensagem": mensagem,
        }
    }, {
        "auth": {
            "username": "g73y7li3",
            "password": "ns2i5qgetk0kvakz4f9z"
        }
    })
    .then(response => {
        console.log(response.data);
        alert('Mensagem enviada com sucesso!');
    })
    .catch(error => {
        console.error('Erro ao enviar mensagem:', error);
        alert('Erro ao enviar mensagem. Tente novamente.');
    });
  }
  // Planilha na qual esta o banco das mensagens enviadas: https://docs.google.com/spreadsheets/d/1lK0vNr903_Le3oznWk3YOMgK90hdxs4h5z-ORRElWBI/edit#gid=0
  
  function handleSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
  
    // Captura os dados do formulário
    const form = document.getElementById('contactForm');
    const nome = form.nome.value;
    const email = form.email.value;
    const mensagem = form.mensagem.value;
  
    // Chama a função salvar
    salvar(nome, email, mensagem);
  
    // Opcional: Limpa os campos do formulário após o envio
    form.reset();
  }

function sendMail(nome, email, mensagem) {
    var templateParams = {
        nome: nome,
        email: email,
        mensagem: mensagem,
      };
      
      emailjs.send('service_0kw0duf', 'template_hvhfmhf', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #f4f4f9;
  color: #333;
  padding: 20px;
  margin: 0;
}

.form-container {
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-width: 600px;
  margin: auto;
  transition: transform 0.2s;
}

.form-container:hover {
  transform: translateY(-5px);
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border-radius: 8px;
  border: 1px solid #ddd;
  outline: none;
  transition: border-color 0.3s;
}

.input-group input:focus,
.input-group textarea:focus {
  border-color: #3a9ad9;
}

button {
  background-color: #3a9ad9;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.2s;
}

button:hover {
  background-color: #337ab7;
  transform: translateY(-3px);
}

button:active {
  background-color: #2c6b9e;
}

.label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.ball {
  background-color: #f4f4f9;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  transition: all 0.3s;
}

img.Logo-Puc-Bet {
  display: block;
  margin: 20px auto;
  width: 150px;
  height: auto;
}

