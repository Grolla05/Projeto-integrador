// Função para o multiplicador baseado no tempo
function multiplicador(t) {
    return Math.pow(1.1, t); // Exemplo de crescimento exponencial, onde o multiplicador cresce 10% a cada unidade de tempo
}

// Configurações do gráfico
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line', // Tipo de gráfico (linha)
    data: {
        labels: [], // Rótulos de tempo (eixo x)
        datasets: [{
            label: '', // Nome da função (removido para não exibir legenda)
            data: [], // Dados para o multiplicador (eixo y)
            borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo da linha
            fill: false, // Não preencher abaixo da linha
            lineTension: 0.1 // Suavização da linha
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false // Desativa a exibição da legenda
            }
        },
        scales: {
            x: {
                type: 'linear', // Eixo x é linear
                position: 'bottom',
                min: 0, // Valor mínimo no eixo x (tempo)
                max: 100, // Valor máximo no eixo x (tempo)
            },
            y: {
                beginAtZero: false, // O multiplicador não começa em 0
                suggestedMin: 1, // O multiplicador começa em 1
                suggestedMax: Math.pow(1.1, 100), // Estimativa de valor máximo do multiplicador para o tempo 100
            }
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const ball = document.getElementById('crash-ball');
    const betButton = document.getElementById('bet-button');
    const countdownElement = document.getElementById('countdown');
    const multiplierElement = document.getElementById('multiplier');
    const dragonElement = document.getElementById('dragon');
    const cashoutButton = document.getElementById('cashout-button');
    const toastElement = document.getElementById('toast');
    const dragonTrail = document.getElementById('dragon-trail'); // Elemento do rastro

    let animationRunning = false;
    let multiplier = 0.00;
    let isPlaying = false;
    let interval;
    let countdown = 3;
    const maxMultiplier = 100.00;
    const stopAtY = 500; // Define o valor de Y para parar a bolinha (ajuste conforme necessário)
    let startTime;

    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        dragonTrail.appendChild(trail);

        // Remove o rastro após um tempo para evitar acúmulo de elementos
        setTimeout(() => {
            trail.remove();
        }, 10500); // O rastro vai desaparecer após 10.5 segundos
    }

    function calculateY(x) {
        return Math.pow(x, 3) / 1000;
    }

    function startAnimation() {
        if (animationRunning) return;

        // Redefine a posição da bolinha para o canto inferior esquerdo do contêiner
        ball.style.transform = 'translate(0, 0)';
        let x = 0;
        let y = 0;
        let speed = 0.05;
        animationRunning = true;

        // A largura máxima do gráfico, que é a largura da janela
        const maxX = window.innerWidth;

        function animate() {
            x += speed;
            y = calculateY(x); // A posição vertical da bolinha

            // Impede que a bolinha ultrapasse o limite do gráfico
            if (x * 10 > maxX) {
                x = maxX / 10; // Limita o valor de x para que a bolinha pare no limite
            }

            ball.style.transform = `translate(${x * 10}px, ${-y}px)`; // Move a bolinha

            // Cria o rastro vermelho
            createTrail(x * 10, -y);

            if (x * 10 < maxX && y < window.innerHeight) {
                requestAnimationFrame(animate);
            } else {
                animationRunning = false; // Redefine o estado da animação
            }
        }

        animate();
    }

    function startCountdown() {
        if (isPlaying) return;
        countdown = 3;
        const betPlacedMessage = document.getElementById('bet-placed-message');
        betPlacedMessage.innerText = 'Bet Placed';
        betPlacedMessage.style.display = 'block';

        // Aguarda a exibição da mensagem antes de mostrar o countdown
        setTimeout(() => {
            const countdownElement = document.getElementById('countdown');
            countdownElement.style.visibility = 'visible';
            countdownElement.innerText = countdown;

            const countdownInterval = setInterval(() => {
                countdown--;
                countdownElement.innerText = countdown;
                if (countdown === 0) {
                    clearInterval(countdownInterval);
                    countdownElement.innerText = '';
                    startGame();
                    betPlacedMessage.style.display = 'none';
                }
            }, 1000);
        }, 1000); // Exibe o countdown após 1 segundo
    }

    function startGame() {
        isPlaying = true;
        multiplier = 1.00;
        multiplierElement.innerText = `${multiplier.toFixed(2)}x`;
        cashoutButton.disabled = false;
        ball.style.visibility = 'visible';
        startTime = Date.now();

        // Ajuste para centralizar o multiplicador no meio do gráfico
        const chartContainer = document.getElementById('chart-container'); // Certifique-se de ter um contêiner para o gráfico
        multiplierElement.style.position = 'absolute';
        multiplierElement.style.left = '50%';
        multiplierElement.style.top = '50%';
        multiplierElement.style.transform = 'translate(-50%, -50%)';

        interval = setInterval(() => {
            const elapsedTime = (Date.now() - startTime) / 1000;
            multiplier = multiplicador(elapsedTime);
            multiplierElement.innerText = `${multiplier.toFixed(2)}x`;
            dragonElement.style.bottom = `${20 + multiplier * 5}%`;
            dragonElement.style.transform = `translate(-50%, 1) rotate(${multiplier * 3}deg)`;

            // Atualiza o gráfico em tempo real
            myChart.data.datasets[0].data.push(multiplier);
            myChart.data.labels.push(elapsedTime);
            myChart.update();

            // A probabilidade de crash pode ser ajustada aqui
            let crashProbability = multiplier > 1 ? (1 / multiplier) : 0.01;
            if (Math.random() < crashProbability || multiplier >= maxMultiplier) {
                setTimeout(() => gameOver(false), Math.random() * 2000 + 3000);
            }
        }, 75);
    }

    function cashOut() {
        if (!isPlaying) return;

        // Mostrar a mensagem de Cash Out centralizada na tela
        const cashOutMessage = document.createElement('div');
        cashOutMessage.classList.add('cashout-message');
        cashOutMessage.innerText = `Congratulations! You cashed out at ${multiplier.toFixed(2)}x!`;

        // Estilizar a mensagem para centralizar
        cashOutMessage.style.position = 'absolute';
        cashOutMessage.style.top = '50%';
        cashOutMessage.style.left = '50%';
        cashOutMessage.style.transform = 'translate(-50%, -50%)';
        cashOutMessage.style.fontSize = '24px';
        cashOutMessage.style.fontWeight = 'bold';
        cashOutMessage.style.color = 'green';
        cashOutMessage.style.background = 'rgba(0, 0, 0, 0.7)';
        cashOutMessage.style.padding = '20px';
        cashOutMessage.style.borderRadius = '10px';

        // Adicionar a mensagem ao body
        document.body.appendChild(cashOutMessage);

        // Remover a mensagem após 3 segundos
        setTimeout(() => {
            cashOutMessage.remove();
        }, 3000);

        cashoutButton.disabled = true;
        gameOver(true);
    }

    function gameOver(cashedOut) {
        clearInterval(interval);
        isPlaying = false;
        betButton.disabled = false;
        cashoutButton.disabled = true;
        dragonElement.style.bottom = '20%';
        dragonElement.style.transform = `translate(-50%, 0) rotate(0deg)`;
        if (!cashedOut) {
            showToast(`Oops! The game crashed at ${multiplier.toFixed(2)}x.`);
        }
    }

    function showToast(message) {
        toastElement.innerText = message;
        toastElement.classList.add('show');
        setTimeout(() => {
            toastElement.classList.remove('show');
        }, 3000);
    }

    // Eventos de clique
    betButton.addEventListener('click', () => {
        startCountdown();
        startAnimation();
    });

    cashoutButton.addEventListener('click', cashOut);
});
