/**
 * Shared Game Utilities
 * Common functionality for all Happy Words games
 */

// ==================== PLAYER DATA ====================

const GameUtils = {
    // Get player name from localStorage
    getPlayerName() {
        return localStorage.getItem('happyWordsPlayerName') || 'Player';
    },

    // Get grade level from localStorage
    getGradeLevel() {
        return localStorage.getItem('happyWordsGradeLevel') || 'kg';
    },

    // ==================== HIGH SCORES ====================

    // Get high score for a game
    getHighScore(gameKey) {
        return parseInt(localStorage.getItem(gameKey + '_highScore')) || 0;
    },

    // Save high score for a game
    saveHighScore(gameKey, score, playerName) {
        const currentHigh = this.getHighScore(gameKey);
        if (score > currentHigh) {
            localStorage.setItem(gameKey + '_highScore', score);
            localStorage.setItem(gameKey + '_playerName', playerName || this.getPlayerName());
            return true; // New high score
        }
        return false;
    },

    // ==================== GRADE-BASED MATH ====================

    // Generate math question based on grade level
    generateMathQuestion(gradeLevel, level = 1) {
        let a, b, op, answer;
        
        if (gradeLevel === 'kg') {
            // KG: Simple addition/subtraction with small numbers
            a = Math.floor(Math.random() * 5) + 1;
            b = Math.floor(Math.random() * 5) + 1;
            if (level <= 2 || Math.random() < 0.7) {
                op = '+';
                answer = a + b;
            } else {
                if (a < b) [a, b] = [b, a];
                op = '-';
                answer = a - b;
            }
        } else if (gradeLevel === 'g1-3') {
            // Grade 1-3: Addition, subtraction, basic multiplication
            if (level <= 2) {
                a = Math.floor(Math.random() * 10) + 1;
                b = Math.floor(Math.random() * 10) + 1;
                op = '+';
                answer = a + b;
            } else if (level <= 4) {
                if (Math.random() < 0.5) {
                    a = Math.floor(Math.random() * 15) + 1;
                    b = Math.floor(Math.random() * 15) + 1;
                    op = '+';
                    answer = a + b;
                } else {
                    a = Math.floor(Math.random() * 15) + 5;
                    b = Math.floor(Math.random() * a);
                    op = '-';
                    answer = a - b;
                }
            } else {
                const rand = Math.random();
                if (rand < 0.4) {
                    a = Math.floor(Math.random() * 20) + 1;
                    b = Math.floor(Math.random() * 20) + 1;
                    op = '+';
                    answer = a + b;
                } else if (rand < 0.7) {
                    a = Math.floor(Math.random() * 20) + 5;
                    b = Math.floor(Math.random() * a);
                    op = '-';
                    answer = a - b;
                } else {
                    a = Math.floor(Math.random() * 5) + 1;
                    b = Math.floor(Math.random() * 5) + 1;
                    op = '×';
                    answer = a * b;
                }
            }
        } else {
            // Grade 3-6: All operations including division
            if (level <= 2) {
                a = Math.floor(Math.random() * 20) + 5;
                b = Math.floor(Math.random() * 20) + 5;
                op = Math.random() < 0.5 ? '+' : '-';
                if (op === '-' && a < b) [a, b] = [b, a];
                answer = op === '+' ? a + b : a - b;
            } else if (level <= 4) {
                const rand = Math.random();
                if (rand < 0.3) {
                    a = Math.floor(Math.random() * 50) + 10;
                    b = Math.floor(Math.random() * 30) + 1;
                    op = '+';
                    answer = a + b;
                } else if (rand < 0.5) {
                    a = Math.floor(Math.random() * 50) + 20;
                    b = Math.floor(Math.random() * 30) + 1;
                    op = '-';
                    answer = a - b;
                } else {
                    a = Math.floor(Math.random() * 10) + 1;
                    b = Math.floor(Math.random() * 10) + 1;
                    op = '×';
                    answer = a * b;
                }
            } else {
                const rand = Math.random();
                if (rand < 0.25) {
                    a = Math.floor(Math.random() * 100) + 10;
                    b = Math.floor(Math.random() * 50) + 1;
                    op = '+';
                    answer = a + b;
                } else if (rand < 0.45) {
                    a = Math.floor(Math.random() * 100) + 30;
                    b = Math.floor(Math.random() * 50) + 1;
                    op = '-';
                    answer = a - b;
                } else if (rand < 0.75) {
                    a = Math.floor(Math.random() * 12) + 1;
                    b = Math.floor(Math.random() * 12) + 1;
                    op = '×';
                    answer = a * b;
                } else {
                    b = Math.floor(Math.random() * 10) + 1;
                    answer = Math.floor(Math.random() * 10) + 1;
                    a = b * answer;
                    op = '÷';
                }
            }
        }
        
        return { a, b, op, answer, question: `${a} ${op} ${b}` };
    },

    // Generate wrong answers for a math question
    generateWrongAnswers(correctAnswer, count = 3) {
        const answers = [correctAnswer];
        while (answers.length < count + 1) {
            let wrong = correctAnswer + (Math.floor(Math.random() * 10) - 5);
            if (wrong !== correctAnswer && wrong > 0 && !answers.includes(wrong)) {
                answers.push(wrong);
            }
        }
        return answers.sort(() => Math.random() - 0.5);
    },

    // ==================== TOUCH SUPPORT ====================

    // Add touch-friendly attributes to an element
    makeTouchFriendly(element) {
        element.style.touchAction = 'manipulation';
        element.style.webkitTapHighlightColor = 'transparent';
        element.style.userSelect = 'none';
    },

    // Setup swipe detection on an element
    setupSwipeDetection(element, callbacks) {
        let touchStartX = 0;
        let touchStartY = 0;

        element.addEventListener('touchstart', (e) => {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        element.addEventListener('touchmove', (e) => {
            if (!touchStartX || !touchStartY) return;

            const touchX = e.touches[0].clientX;
            const touchY = e.touches[0].clientY;
            const diffX = touchX - touchStartX;
            const diffY = touchY - touchStartY;

            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
                if (diffX > 0 && callbacks.onSwipeRight) {
                    callbacks.onSwipeRight();
                } else if (diffX < 0 && callbacks.onSwipeLeft) {
                    callbacks.onSwipeLeft();
                }
                touchStartX = touchX;
            }
        }, { passive: true });

        element.addEventListener('touchend', () => {
            touchStartX = 0;
            touchStartY = 0;
        }, { passive: true });
    },

    // ==================== UI HELPERS ====================

    // Create home button HTML
    createHomeButton() {
        return `<a href="../index.html" class="home-btn">← Home</a>`;
    },

    // Initialize sound toggle button in top-bar
    initSoundToggle() {
        const topBar = document.querySelector('.top-bar');
        if (!topBar) return;
        
        const btn = document.createElement('button');
        btn.className = 'sound-toggle';
        btn.id = 'soundToggle';
        btn.title = 'Toggle Sound';
        btn.textContent = this.isSoundEnabled() ? '🔊' : '🔇';
        
        btn.addEventListener('click', () => {
            const enabled = this.toggleSound();
            btn.textContent = enabled ? '🔊' : '🔇';
        });
        
        btn.addEventListener('touchend', (e) => {
            e.preventDefault();
            const enabled = this.toggleSound();
            btn.textContent = enabled ? '🔊' : '🔇';
        });
        
        topBar.appendChild(btn);
    },

    // Create game over modal HTML
    createGameOverModal(gameKey, title = 'Game Over!') {
        return `
            <div id="gameOver" class="game-over-modal">
                <h2>${title}</h2>
                <p id="playerDisplay"></p>
                <p>Score: <span id="finalScore">0</span></p>
                <p>🏆 High Score: <span id="highScore">0</span></p>
                <button class="btn" onclick="startGame()">Play Again</button>
                <a href="../index.html" class="home-link">← Back to Home</a>
            </div>
        `;
    },

    // Show game over screen
    showGameOver(gameKey, score, gameOverEl) {
        const playerName = this.getPlayerName();
        const highScore = this.getHighScore(gameKey);
        
        this.saveHighScore(gameKey, score, playerName);
        
        if (gameOverEl) {
            const finalScoreEl = gameOverEl.querySelector('#finalScore');
            const highScoreEl = gameOverEl.querySelector('#highScore');
            const playerEl = gameOverEl.querySelector('#playerDisplay');
            
            if (finalScoreEl) finalScoreEl.textContent = score;
            if (highScoreEl) highScoreEl.textContent = Math.max(score, highScore);
            if (playerEl) playerEl.textContent = playerName + "'s Game";
            
            gameOverEl.style.display = 'block';
        }
    },

    // ==================== SOUNDS ====================

    audioContext: null,

    // Check if sound is enabled (global setting)
    isSoundEnabled() {
        return localStorage.getItem('happyWords_sound') !== 'false';
    },

    // Toggle sound globally
    toggleSound() {
        const current = this.isSoundEnabled();
        localStorage.setItem('happyWords_sound', (!current).toString());
        return !current;
    },

    getAudioContext() {
        if (!this.audioContext) {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }
        return this.audioContext;
    },

    playSound(type) {
        // Check global mute setting
        if (!this.isSoundEnabled()) return;
        
        try {
            const ctx = this.getAudioContext();
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            if (type === 'correct' || type === 'pop') {
                oscillator.frequency.setValueAtTime(523.25, ctx.currentTime);
                oscillator.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
                oscillator.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2);
                gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.3);
            } else if (type === 'wrong') {
                oscillator.frequency.setValueAtTime(200, ctx.currentTime);
                oscillator.frequency.setValueAtTime(150, ctx.currentTime + 0.1);
                gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.2);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.2);
            } else if (type === 'click') {
                oscillator.frequency.setValueAtTime(600, ctx.currentTime);
                gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.1);
            } else if (type === 'levelUp') {
                oscillator.frequency.setValueAtTime(400, ctx.currentTime);
                oscillator.frequency.setValueAtTime(500, ctx.currentTime + 0.1);
                oscillator.frequency.setValueAtTime(600, ctx.currentTime + 0.2);
                oscillator.frequency.setValueAtTime(800, ctx.currentTime + 0.3);
                gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
                oscillator.start(ctx.currentTime);
                oscillator.stop(ctx.currentTime + 0.4);
            }
        } catch (e) {
            // Audio not supported
        }
    },

    // ==================== ANIMATION HELPERS ====================

    // Create confetti effect
    createConfetti(container, count = 15) {
        const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#1dd1a1', '#ffeaa7'];
        
        for (let i = 0; i < count; i++) {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${50 + (Math.random() - 0.5) * 30}%;
                top: 50%;
                animation: confettiFall ${1 + Math.random()}s ease-out forwards;
            `;
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 2000);
        }
    }
};

// Add confetti animation style if not exists
if (!document.getElementById('game-utils-styles')) {
    const style = document.createElement('style');
    style.id = 'game-utils-styles';
    style.textContent = `
        @keyframes confettiFall {
            0% { transform: translateY(0) rotate(0deg) scale(1); opacity: 1; }
            100% { transform: translateY(200px) rotate(720deg) scale(0); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Export for ES modules (if used)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GameUtils;
}
