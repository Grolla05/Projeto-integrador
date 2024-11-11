<h1>Relatório de Projeto - PUCBET</h1>

<p><strong>Disciplina:</strong> PI: Desenvolvimento WEB</p>
<p><strong>Curso:</strong> Engenharia de Computação</p>
<p><strong>Instituição:</strong> PUC Campinas</p>
<p><strong>Autores:</strong> Antonio Magalhaes Roquete, Felipe Grolla Freitas, Gabriel Henrique Pozeti e Lucas Espica Rezende</p>
<p><strong>Data:</strong> 25/11/2024</p>

<hr>

<h2>Sumário</h2>
<ol>
  <li><a href="#introducao">Introdução</a></li>
  <li><a href="#objetivo">Objetivo</a></li>
  <li><a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a></li>
  <li><a href="#arquitetura-do-sistema">Arquitetura do Sistema</a></li>
  <li><a href="#funcionalidades-implementadas">Funcionalidades Implementadas</a></li>
  <li><a href="#implementacao">Implementação</a></li>
  <li><a href="#testes">Testes</a></li>
  <li><a href="#conclusao">Conclusão</a></li>
</ol>

<h2 id="introducao">Introdução</h2>
<p>O projeto <strong>PUCBET</strong> consiste no desenvolvimento de uma plataforma de apostas esportivas fictícia com o intuito de simular uma casa de apostas online, destinada a demonstrar o funcionamento e a implementação de um sistema desse tipo. O sistema permite que usuários realizem apostas em eventos esportivos e que acompanhem os resultados, podendo lucrar ficticiamente com base nos resultados de suas apostas. A plataforma foi idealizada para fins acadêmicos e não envolve transações financeiras reais.</p>

<h2 id="objetivo">Objetivo</h2>
<p>O objetivo principal deste projeto é aplicar e consolidar conhecimentos adquiridos durante o curso de Engenharia de Computação, incluindo:</p>
<ul>
  <li>Desenvolvimento de uma aplicação web interativa e responsiva.</li>
  <li>Implementação de um sistema de apostas baseado em probabilidades e estatísticas esportivas.</li>
  <li>Estudo e prática de sistemas de segurança de dados e autenticação de usuários.</li>
  <li>Simulação de algoritmos de cálculo de odds (probabilidades de retorno).</li>
</ul>
<p>Este projeto também visa proporcionar um entendimento prático dos desafios envolvidos na criação e manutenção de uma plataforma de apostas, incluindo questões de usabilidade, segurança e integridade de dados.</p>

<h2 id="tecnologias-utilizadas">Tecnologias Utilizadas</h2>
<p>Para o desenvolvimento da plataforma PUCBET, foram utilizadas as seguintes tecnologias:</p>
<ul>
  <li><strong>Frontend</strong>: HTML, CSS, JavaScript</li>
  <li><strong>Backend</strong>: JavaScript somente</li>
  <li><strong>Outras Ferramentas</strong>: Git e GitHub para controle de versão e GitHub Pages para hospedagem da aplicação</li>
</ul>

<h2 id="arquitetura-do-sistema">Arquitetura do Sistema</h2>
<p>A plataforma PUCBET foi projetada com uma arquitetura de três camadas:</p>
<ol>
  <li><strong>Camada de Apresentação</strong>: Interface gráfica onde os usuários interagem com a plataforma.</li>
  <li><strong>Camada de Lógica de Negócios</strong>: Implementada com Node.js.</li>
</ol>

<h2 id="funcionalidades-implementadas">Funcionalidades Implementadas</h2>
<p>As principais funcionalidades do PUCBET incluem:</p>
<ul>
  <li><strong>Cadastro e Login de Usuários</strong>: Sistema de autenticação com e-mail e senha.</li>
  <li><strong>Simulação de Apostas</strong>: Escolha de apostas em diferentes modalidades.</li>
  <li><strong>Histórico de Apostas e Saldo</strong>: Histórico completo de todas as apostas realizadas pelo usuário.</li>
  <li><strong>Exibição de Resultados e Acompanhamento de Jogos</strong>: Resultados atualizados das partidas em que o usuário realizou apostas.</li>
  <li><strong>Notificações e Alertas</strong>: Notificações de confirmação e erro no processo de apostas.</li>
</ul>

<h2 id="implementacao">Implementação</h2>
<h3>1. Banco de Dados</h3>
<p>Estrutura das coleções para usuários, apostas e eventos. Modelagem de dados orientada à eficiência nas operações de consulta e atualização de registros.</p>

<h3>2. Backend</h3>
<p>Estrutura de rotas RESTful para interagir com a camada de apresentação. Lógica de cálculo de odds e verificação de integridade de apostas.</p>

<h3>3. Frontend</h3>
<p>Layout responsivo desenvolvido com Bootstrap e Vue.js. Painel do usuário com exibição de saldo, histórico de apostas e lista de eventos.</p>

<h2 id="testes">Testes</h2>
<p>Para garantir a confiabilidade do sistema, foram realizados diversos testes:</p>
<ul>
  <li><strong>Testes de Integração</strong>: Validaram a comunicação entre frontend e backend.</li>
  <li><strong>Testes de Interface do Usuário (UI)</strong>: Verificaram a usabilidade e responsividade do layout da plataforma.</li>
</ul>

<h2 id="conclusao">Conclusão</h2>
<p>O desenvolvimento do PUCBET permitiu que os participantes adquirissem experiência prática na criação de uma plataforma de apostas esportivas e na utilização de tecnologias atuais, como Node.js. Esse projeto envolveu diversas áreas de conhecimento, desde o desenvolvimento de interfaces até a integração de APIs e a implementação de sistemas de autenticação segura.</p>
<p>Embora seja um sistema fictício, o PUCBET é um modelo funcional e instrutivo para entender as operações básicas de uma casa de apostas online. Esse tipo de sistema apresenta inúmeros desafios, especialmente relacionados à segurança de dados, confiabilidade e experiência do usuário.</p>
<p>O projeto pode ser expandido para incluir novas funcionalidades, como um sistema de recomendação de eventos baseado no histórico do usuário ou até mesmo uma funcionalidade de simulador de apostas com odds variáveis.</p>

</body>
</html>
