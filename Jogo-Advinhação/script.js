// Variáveis do jogo
let secretNumber;
let attempts;
let guessHistory;
let gameActive;

// Elementos DOM
const guessInput = document.getElementById('guessInput');
const submitBtn = document.getElementById('submitBtn');
const message = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const guessHistoryDisplay = document.getElementById('guessHistory');
const newGameBtn = document.getElementById('newGameBtn');

// Elementos de estatísticas
const gamesPlayedDisplay = document.getElementById('gamesPlayed');
const gamesWonDisplay = document.getElementById('gamesWon');
const bestScoreDisplay = document.getElementById('bestScore');

// Carregar estatísticas do localStorage
let stats = loadStats();

// Inicializar o jogo
function initGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessHistory = [];
    gameActive = true;
    
    // Reset da interface
    guessInput.value = '';
    guessInput.disabled = false;
    submitBtn.disabled = false;
    newGameBtn.style.display = 'none';
    
    updateMessage('Faça seu primeiro palpite!', 'neutral');
    updateAttempts();
    updateGuessHistory();
    updateStats();
    
    // Focar no input
    guessInput.focus();
}

// Fazer um palpite
function makeGuess() {
    if (!gameActive) return;
    
    const guess = parseInt(guessInput.value);
    
    // Validação
    if (isNaN(guess) || guess < 1 || guess > 100) {
        updateMessage('Por favor, digite um número entre 1 e 100!', 'neutral');
        return;
    }
    
    // Verificar se o número já foi tentado
    if (guessHistory.includes(guess)) {
        updateMessage('Você já tentou esse número! Tente outro.', 'neutral');
        return;
    }
    
    attempts++;
    guessHistory.push(guess);
    
    // Verificar o palpite
    if (guess === secretNumber) {
        // Acertou!
        updateMessage(`🎉 Parabéns! Você acertou o número ${secretNumber} em ${attempts} tentativa${attempts > 1 ? 's' : ''}!`, 'correct');
        endGame(true);
    } else if (guess < secretNumber) {
        // Muito baixo
        updateMessage(`📈 O número é MAIOR que ${guess}. Tente novamente!`, 'too-low');
    } else {
        // Muito alto
        updateMessage(`📉 O número é MENOR que ${guess}. Tente novamente!`, 'too-high');
    }
    
    updateAttempts();
    updateGuessHistory();
    
    // Limpar input e focar
    guessInput.value = '';
    guessInput.focus();
    
    // Dicas especiais baseadas no número de tentativas
    if (attempts === 5 && gameActive) {
        const range = getHintRange(secretNumber);
        updateMessage(updateMessage() + ` 💡 Dica: O número está entre ${range.min} e ${range.max}.`, message.className);
    }
    
    if (attempts >= 10 && gameActive) {
        updateMessage(updateMessage() + ' 🔥 Você está próximo! Continue tentando!', message.className);
    }
}

// Finalizar o jogo
function endGame(won) {
    gameActive = false;
    guessInput.disabled = true;
    submitBtn.disabled = true;
    newGameBtn.style.display = 'block';
    
    // Atualizar estatísticas
    stats.gamesPlayed++;
    if (won) {
        stats.gamesWon++;
        if (stats.bestScore === 0 || attempts < stats.bestScore) {
            stats.bestScore = attempts;
        }
    }
    
    saveStats();
    updateStats();
}

// Iniciar novo jogo
function startNewGame() {
    initGame();
}

// Atualizar mensagem
function updateMessage(text, type) {
    message.textContent = text;
    message.className = `message ${type}`;
    return text;
}

// Atualizar contador de tentativas
function updateAttempts() {
    attemptsDisplay.textContent = `Tentativas: ${attempts}`;
}

// Atualizar histórico de palpites
function updateGuessHistory() {
    guessHistoryDisplay.innerHTML = '';
    
    guessHistory.forEach(guess => {
        const guessElement = document.createElement('div');
        guessElement.className = 'guess-item';
        guessElement.textContent = guess;
        
        if (guess === secretNumber) {
            guessElement.classList.add('correct');
        } else if (guess < secretNumber) {
            guessElement.classList.add('too-low');
        } else {
            guessElement.classList.add('too-high');
        }
        
        guessHistoryDisplay.appendChild(guessElement);
    });
}

// Atualizar estatísticas
function updateStats() {
    gamesPlayedDisplay.textContent = stats.gamesPlayed;
    gamesWonDisplay.textContent = stats.gamesWon;
    bestScoreDisplay.textContent = stats.bestScore || '-';
}

// Obter range de dica
function getHintRange(number) {
    const range = 20;
    let min = Math.max(1, number - range);
    let max = Math.min(100, number + range);
    return { min, max };
}

// Carregar estatísticas
function loadStats() {
    const savedStats = localStorage.getItem('guessingGameStats');
    if (savedStats) {
        return JSON.parse(savedStats);
    }
    return {
        gamesPlayed: 0,
        gamesWon: 0,
        bestScore: 0
    };
}

// Salvar estatísticas
function saveStats() {
    localStorage.setItem('guessingGameStats', JSON.stringify(stats));
}

// Event listeners
guessInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        makeGuess();
    }
});

// Impedir entrada de números fora do range
guessInput.addEventListener('input', function() {
    const value = parseInt(this.value);
    if (value < 1) this.value = 1;
    if (value > 100) this.value = 100;
});

// Efeitos sonoros usando Web Audio API
function playSound(type) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'correct':
            // Som de vitória
            oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime); // C5
            oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1); // E5
            oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2); // G5
            break;
        case 'wrong':
            // Som de erro
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            break;
    }
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Funcionalidades extras
function resetStats() {
    if (confirm('Tem certeza que deseja resetar todas as estatísticas?')) {
        stats = {
            gamesPlayed: 0,
            gamesWon: 0,
            bestScore: 0
        };
        saveStats();
        updateStats();
    }
}

// Adicionar botão para resetar stats
function addResetButton() {
    const resetBtn = document.createElement('button');
    resetBtn.textContent = '🔄 Resetar Stats';
    resetBtn.className = 'new-game-btn';
    resetBtn.style.fontSize = '0.9rem';
    resetBtn.style.padding = '10px 15px';
    resetBtn.onclick = resetStats;
    
    document.querySelector('.stats-card').appendChild(resetBtn);
}

// Inicializar o jogo quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    initGame();
    addResetButton();
    
    // Adicionar algumas animações sutis
    document.querySelector('.game-card').style.animation = 'slideIn 0.6s ease-out';
    document.querySelector('.stats-card').style.animation = 'slideIn 0.8s ease-out';
});

// Animação CSS adicional
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
