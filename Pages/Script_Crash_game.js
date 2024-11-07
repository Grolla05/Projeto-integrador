document.addEventListener('DOMContentLoaded', function() {
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

    function createTrail(x, y) {
        const trail = document.createElement('div');
        trail.classList.add('trail');
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
        dragonTrail.appendChild(trail);

        // Remove o rastro após um tempo para evitar acúmulo de elementos
        setTimeout(() => {
            trail.remove();
        }, 10500); // O rastro vai desaparecer após 0.5 segundos
    }

    function startAnimation() {
        if (animationRunning) return;

        // Redefine a posição da bolinha para o canto inferior esquerdo do contêiner
        ball.style.transform = 'translate(0, 0)';
        let x = 0;
        let y = 0;
        let speed = 0.05;
        animationRunning = true;

        function animate() {
            x += speed;
            y = Math.pow(x, 3) / 1000; // A posição vertical da bolinha
            ball.style.transform = `translate(${x * 10}px, ${-y}px)`; // Move a bolinha

            // Cria o rastro vermelho
            createTrail(x * 10, -y);

            if (x * 10 < window.innerWidth && y < window.innerHeight) {
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

        const countdownElement = document.getElementById('countdown');
        countdownElement.style.visibility = 'visible';
        countdownElement.innerText = countdown;

        betButton.disabled = true;
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
    }

    function startGame() {
        isPlaying = true;
        multiplier = 0.00;
        multiplierElement.innerText = `${multiplier.toFixed(2)}x`;
        cashoutButton.disabled = false;
        ball.style.visibility = 'visible';

        interval = setInterval(() => {
            multiplier += 0.01;
            multiplierElement.innerText = `${multiplier.toFixed(2)}x`;
            dragonElement.style.bottom = `${20 + multiplier * 5}%`;
            dragonElement.style.transform = `translate(-50%, 1) rotate(${multiplier * 3}deg)`;

            // A probabilidade de crash pode ser ajustada aqui
            let crashProbability = multiplier < 1 ? (1 - multiplier) : 0.01;
            if (Math.random() < crashProbability || multiplier >= maxMultiplier) {
                setTimeout(() => gameOver(false), Math.random() * 2000 + 3000);
            }
        }, 75);
    }

    function cashOut() {
        if (!isPlaying) return;
        showToast(`Congratulations! You cashed out at ${multiplier.toFixed(2)}x!`);
        cashoutButton.disabled = true;
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
