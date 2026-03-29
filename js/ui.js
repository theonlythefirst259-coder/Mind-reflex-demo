// UI Manager
class UIManager {
    constructor() {
        this.currentScreen = 'homeScreen';
        this.gameTimer = null;
    }

    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        const screen = document.getElementById(screenId);
        if (screen) {
            screen.classList.add('active');
            this.currentScreen = screenId;
        }
    }

    updateTranslations() {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = languageManager.t(key);
        });
    }

    showToast(message, duration = 3000) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, duration);
    }

    updateGameStats(stats) {
        document.getElementById('gameScore').textContent = stats.score;
        document.getElementById('gameCombo').textContent = `x${stats.combo}`;
    }

    updateGameTimer(seconds) {
        document.getElementById('gameTimer').textContent = `${seconds}s`;
    }

    displayQuestion(question) {
        const lang = languageManager.getLanguage();
        const questionKey = lang === 'en' ? 'questionEn' : 'questionTh';
        const optionsKey = lang === 'en' ? 'optionsEn' : 'optionsTh';

        document.getElementById('questionText').textContent = question[questionKey];

        const answerBtns = document.querySelectorAll('.answer-btn');
        const options = question.shuffledOptions || question[optionsKey];

        answerBtns.forEach((btn, index) => {
            btn.textContent = options[index];
            btn.classList.remove('selected', 'correct', 'incorrect');
            btn.disabled = false;
            btn.style.opacity = '1';
        });
    }

    selectAnswer(index, isCorrect) {
        const answerBtns = document.querySelectorAll('.answer-btn');
        const selectedBtn = answerBtns[index];

        selectedBtn.classList.add('selected');

        if (isCorrect) {
            selectedBtn.classList.add('correct');
            soundManager.playCorrectSound();
            this.flashScreen('correct');
        } else {
            selectedBtn.classList.add('incorrect');
            soundManager.playWrongSound();
            this.shakeScreen();
        }

        // Disable all buttons
        answerBtns.forEach(btn => btn.disabled = true);
    }

    showCorrectAnswer(correctIndex) {
        const answerBtns = document.querySelectorAll('.answer-btn');
        answerBtns[correctIndex].classList.add('correct');
    }

    flashScreen(type = 'correct') {
        const container = document.querySelector('.game-container');
        if (!container) return;

        const className = type === 'correct' ? 'flash-correct' : 'flash-incorrect';
        container.style.animation = 'none';
        setTimeout(() => {
            if (type === 'correct') {
                container.style.boxShadow = '0 0 30px rgba(0, 255, 0, 0.8)';
                setTimeout(() => {
                    container.style.boxShadow = '';
                }, 300);
            }
        }, 10);
    }

    shakeScreen() {
        const container = document.querySelector('.game-container');
        if (!container) return;

        let shakeCount = 0;
        const shakeInterval = setInterval(() => {
            if (shakeCount < 6) {
                const offset = shakeCount % 2 === 0 ? -10 : 10;
                container.style.transform = `translateX(${offset}px)`;
                shakeCount++;
            } else {
                container.style.transform = 'translateX(0)';
                clearInterval(shakeInterval);
            }
        }, 50);
    }

    displayGameOver(results) {
        document.getElementById('finalScore').textContent = results.finalScore;
        document.getElementById('questionsAnswered').textContent = results.questionsAnswered;
        document.getElementById('correctAnswers').textContent = results.correctAnswers;
        document.getElementById('accuracy').textContent = `${results.accuracy}%`;
        document.getElementById('highestCombo').textContent = `x${results.highestCombo}`;
        document.getElementById('avgResponseTime').textContent = `${results.averageResponseTime}ms`;

        soundManager.playGameOverSound();
    }

    displayLeaderboard(entries) {
        const container = document.getElementById('leaderboardContent');
        container.innerHTML = '';

        entries.forEach((entry, index) => {
            const entryEl = document.createElement('div');
            entryEl.className = 'leaderboard-entry';
            entryEl.innerHTML = `
                <div class="leaderboard-rank">#${index + 1}</div>
                <div class="leaderboard-info">
                    <div class="leaderboard-name">${entry.username}</div>
                    <div style="font-size: 0.9rem; color: var(--text-secondary);">
                        ${entry.totalGames} ${languageManager.t('leaderboard.games')} | Avg: ${Math.round(entry.averageScore)}
                    </div>
                </div>
                <div class="leaderboard-score">${entry.bestScore}</div>
            `;
            container.appendChild(entryEl);
        });

        if (entries.length === 0) {
            container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">No scores yet</p>';
        }
    }

    displayReview(reviewData) {
        const container = document.getElementById('reviewContent');
        container.innerHTML = '';

        reviewData.forEach((item) => {
            const itemEl = document.createElement('div');
            itemEl.className = 'review-item';

            const lang = languageManager.getLanguage();
            const correctLabel = languageManager.t('review.correct');
            const incorrectLabel = languageManager.t('review.incorrect');

            itemEl.innerHTML = `
                <div class="review-question">Q${item.index}: ${item.question}</div>
                <div class="review-answer ${item.isCorrect ? 'correct' : 'incorrect'}">
                    <strong>${item.isCorrect ? correctLabel : incorrectLabel}</strong>
                    <div style="margin-top: 0.5rem;">
                        Your answer: <strong>${item.options[item.selectedIndex]}</strong>
                        ${!item.isCorrect ? `<div>Correct answer: <strong>${item.options[item.correctIndex]}</strong></div>` : ''}
                    </div>
                    <div style="margin-top: 0.5rem; font-size: 0.9rem;">
                        Points: ${item.points} | Time: ${item.responseTime}ms
                    </div>
                </div>
                <div class="review-explanation">
                    <strong>Explanation:</strong> ${item.explanation}
                </div>
            `;

            container.appendChild(itemEl);
        });
    }

    displayProfile(user) {
        const games = storageManager.getGames().filter(g => g.userId === user.id);
        const bestScore = games.length > 0 ? Math.max(...games.map(g => g.score)) : 0;

        document.getElementById('profileUsername').textContent = user.username;
        document.getElementById('profileEmail').textContent = user.email || 'No email';
        document.getElementById('profileAvatarText').textContent = user.username[0].toUpperCase();
        document.getElementById('profileStats').textContent = 
            `${languageManager.t('profile.totalGames')}: ${games.length} | ${languageManager.t('profile.bestScore')}: ${bestScore}`;
    }

    updateEditProfileForm(user) {
        document.getElementById('editUsername').value = user.username;
        document.getElementById('editBio').value = user.bio || '';
        document.getElementById('soundToggleProfile').checked = user.soundEnabled !== false;
    }

    startGameTimer(onTick, onEnd) {
        let timeRemaining = 5;
        this.updateGameTimer(timeRemaining);

        this.gameTimer = setInterval(() => {
            timeRemaining--;
            this.updateGameTimer(timeRemaining);

            if (onTick) onTick(timeRemaining);

            if (timeRemaining <= 0) {
                clearInterval(this.gameTimer);
                if (onEnd) onEnd();
            }
        }, 1000);
    }

    stopGameTimer() {
        if (this.gameTimer) {
            clearInterval(this.gameTimer);
            this.gameTimer = null;
        }
    }

    updateProgressBar(percentage) {
        const progressFill = document.getElementById('progressFill');
        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }
    }
}

const uiManager = new UIManager();
