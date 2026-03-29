// Main Application
class MindReflexApp {
    constructor() {
        this.currentUser = null;
        this.isGameActive = false;
        this.currentGameMode = 'solo';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.loadUser();
        this.updateUI();
        soundManager.initAudioContext();
    }

    setupEventListeners() {
        // Language toggle
        document.getElementById('langToggle').addEventListener('click', () => {
            languageManager.toggleLanguage();
            // Only update game content if game is active
            if (this.isGameActive) {
                this.displayNextQuestion();
            }
            soundManager.playClickSound();
        });

        // Sound toggle
        document.getElementById('soundToggle').addEventListener('click', () => {
            soundManager.setSoundEnabled(!soundManager.isSoundEnabled());
            const message = soundManager.isSoundEnabled() 
                ? languageManager.t('notification.soundEnabled')
                : languageManager.t('notification.soundDisabled');
            uiManager.showToast(message);
            soundManager.playClickSound();
        });

        // Profile button
        document.getElementById('profileBtn').addEventListener('click', () => {
            uiManager.showScreen('profileScreen');
            if (this.currentUser) {
                uiManager.displayProfile(this.currentUser);
            }
            soundManager.playClickSound();
        });

        // Login/Logout
        document.getElementById('loginBtn').addEventListener('click', () => {
            uiManager.showScreen('loginScreen');
            soundManager.playClickSound();
        });

        document.getElementById('logoutBtn').addEventListener('click', () => {
            this.logout();
            soundManager.playClickSound();
        });

        // Home Screen
        document.getElementById('startGameBtn').addEventListener('click', () => {
            uiManager.showScreen('loginScreen');
            soundManager.playClickSound();
        });

        document.getElementById('guestPlayBtn').addEventListener('click', () => {
            this.startGame(true);
            soundManager.playClickSound();
        });

        document.getElementById('leaderboardBtn').addEventListener('click', () => {
            this.showLeaderboard('global');
            soundManager.playClickSound();
        });

        document.getElementById('howToPlayBtn').addEventListener('click', () => {
            uiManager.showScreen('howToPlayScreen');
            soundManager.playClickSound();
        });

        // Login Form
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
            soundManager.playClickSound();
        });

        document.getElementById('goToRegister').addEventListener('click', () => {
            uiManager.showScreen('registerScreen');
            soundManager.playClickSound();
        });

        document.getElementById('backToHome').addEventListener('click', () => {
            uiManager.showScreen('homeScreen');
            soundManager.playClickSound();
        });

        // Register Form
        document.getElementById('registerForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleRegister();
            soundManager.playClickSound();
        });

        document.getElementById('goToLogin').addEventListener('click', () => {
            uiManager.showScreen('loginScreen');
            soundManager.playClickSound();
        });

        // Game Screen
        document.getElementById('quitGameBtn').addEventListener('click', () => {
            this.quitGame();
            soundManager.playClickSound();
        });

        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (this.isGameActive && !gameEngine.isAnswered) {
                    const index = parseInt(e.target.getAttribute('data-index'));
                    this.handleAnswer(index);
                    soundManager.playClickSound();
                }
            });
        });

        // Game Over Screen
        document.getElementById('playAgainBtn').addEventListener('click', () => {
            this.startGame(this.currentGameMode === 'guest');
            soundManager.playClickSound();
        });

        document.getElementById('reviewBtn').addEventListener('click', () => {
            this.showReview();
            soundManager.playClickSound();
        });

        document.getElementById('backHomeBtn').addEventListener('click', () => {
            uiManager.showScreen('homeScreen');
            soundManager.playClickSound();
        });

        // Leaderboard
        document.getElementById('globalLbTab').addEventListener('click', () => {
            this.showLeaderboard('global');
            soundManager.playClickSound();
        });

        document.getElementById('friendsLbTab').addEventListener('click', () => {
            this.showLeaderboard('friends');
            soundManager.playClickSound();
        });

        document.getElementById('backFromLbBtn').addEventListener('click', () => {
            uiManager.showScreen('homeScreen');
            soundManager.playClickSound();
        });

        // Review
        document.getElementById('backFromReviewBtn').addEventListener('click', () => {
            uiManager.showScreen('gameOverScreen');
            soundManager.playClickSound();
        });

        // How to Play
        document.getElementById('backFromHowToPlayBtn').addEventListener('click', () => {
            uiManager.showScreen('homeScreen');
            soundManager.playClickSound();
        });

        // Profile
        document.getElementById('editProfileBtn').addEventListener('click', () => {
            if (this.currentUser) {
                uiManager.updateEditProfileForm(this.currentUser);
                uiManager.showScreen('editProfileScreen');
            }
            soundManager.playClickSound();
        });

        document.getElementById('backFromProfileBtn').addEventListener('click', () => {
            uiManager.showScreen('homeScreen');
            soundManager.playClickSound();
        });

        // Edit Profile
        document.getElementById('editProfileForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleProfileUpdate();
            soundManager.playClickSound();
        });

        document.getElementById('cancelEditBtn').addEventListener('click', () => {
            uiManager.showScreen('profileScreen');
            if (this.currentUser) {
                uiManager.displayProfile(this.currentUser);
            }
            soundManager.playClickSound();
        });
    }

    handleLogin() {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (!username || !password) {
            uiManager.showToast(languageManager.t('notification.error'));
            return;
        }

        // Simple authentication (in real app, would validate against server)
        const user = {
            id: Date.now(),
            username: username,
            email: `${username}@example.com`,
            avatar: username[0].toUpperCase(),
            bio: '',
            soundEnabled: true
        };

        storageManager.saveUser(user);
        this.currentUser = user;
        this.updateUI();
        uiManager.showToast(languageManager.t('notification.loginSuccess'));
        
        // Clear form
        document.getElementById('loginForm').reset();
        
        // Start game
        this.startGame(false);
    }

    handleRegister() {
        const username = document.getElementById('regUsername').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;

        if (!username || !email || !password) {
            uiManager.showToast(languageManager.t('notification.error'));
            return;
        }

        const user = {
            id: Date.now(),
            username: username,
            email: email,
            avatar: username[0].toUpperCase(),
            bio: '',
            soundEnabled: true
        };

        storageManager.saveUser(user);
        this.currentUser = user;
        this.updateUI();
        uiManager.showToast(languageManager.t('notification.registerSuccess'));
        
        // Clear form
        document.getElementById('registerForm').reset();
        
        // Start game
        this.startGame(false);
    }

    handleProfileUpdate() {
        const username = document.getElementById('editUsername').value;
        const bio = document.getElementById('editBio').value;
        const soundEnabled = document.getElementById('soundToggleProfile').checked;

        if (!username) {
            uiManager.showToast(languageManager.t('notification.error'));
            return;
        }

        this.currentUser.username = username;
        this.currentUser.bio = bio;
        this.currentUser.soundEnabled = soundEnabled;

        storageManager.saveUser(this.currentUser);
        soundManager.setSoundEnabled(soundEnabled);
        uiManager.showToast(languageManager.t('notification.profileUpdated'));
        uiManager.showScreen('profileScreen');
        uiManager.displayProfile(this.currentUser);
    }

    startGame(isGuest = false) {
        this.isGameActive = true;
        this.currentGameMode = isGuest ? 'guest' : 'solo';
        
        gameEngine.startGame(isGuest);
        soundManager.playStartSound();
        
        this.displayNextQuestion();
        uiManager.showScreen('gameScreen');
    }

    displayNextQuestion() {
        const question = gameEngine.loadNextQuestion();
        if (!question) {
            this.endGame();
            return;
        }

        uiManager.displayQuestion(question);
        this.startQuestionTimer();
    }

    startQuestionTimer() {
        let timeRemaining = 5;
        uiManager.updateGameTimer(timeRemaining);

        const gameTimer = setInterval(() => {
            timeRemaining--;
            uiManager.updateGameTimer(timeRemaining);
            uiManager.updateProgressBar((timeRemaining / 5) * 100);

            if (timeRemaining <= 0) {
                clearInterval(gameTimer);
                if (!gameEngine.isAnswered) {
                    // Auto-select wrong answer
                    this.handleAnswer(Math.floor(Math.random() * 4));
                }
            }
        }, 1000);
    }

    handleAnswer(selectedIndex) {
        const result = gameEngine.answerQuestion(selectedIndex);
        if (!result) return;

        uiManager.selectAnswer(selectedIndex, result.isCorrect);
        uiManager.updateGameStats(gameEngine.getGameStats());

        if (result.isCorrect && result.combo > 1) {
            soundManager.playComboSound(result.combo);
        }

        // Show next question after delay
        setTimeout(() => {
            if (gameEngine.currentQuestionIndex >= 10) {
                this.endGame();
            } else {
                this.displayNextQuestion();
            }
        }, 1500);
    }

    endGame() {
        this.isGameActive = false;
        const results = gameEngine.getGameResults();
        uiManager.displayGameOver(results);
        uiManager.showScreen('gameOverScreen');
    }

    quitGame() {
        this.isGameActive = false;
        uiManager.showScreen('homeScreen');
    }

    showLeaderboard(type = 'global') {
        const leaderboard = storageManager.getLeaderboard();
        
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        if (type === 'global') {
            document.getElementById('globalLbTab').classList.add('active');
        } else {
            document.getElementById('friendsLbTab').classList.add('active');
        }

        uiManager.displayLeaderboard(leaderboard);
        uiManager.showScreen('leaderboardScreen');
    }

    showReview() {
        const reviewData = gameEngine.getReviewData();
        uiManager.displayReview(reviewData);
        uiManager.showScreen('reviewScreen');
    }

    logout() {
        this.currentUser = null;
        storageManager.clearUser();
        this.updateUI();
        uiManager.showScreen('homeScreen');
        uiManager.showToast(languageManager.t('notification.logoutSuccess'));
    }

    loadUser() {
        this.currentUser = storageManager.getUser();
    }

    updateUI() {
        const loginBtn = document.getElementById('loginBtn');
        const logoutBtn = document.getElementById('logoutBtn');
        const profileBtn = document.getElementById('profileBtn');
        const startGameBtn = document.getElementById('startGameBtn');

        if (this.currentUser) {
            loginBtn.style.display = 'none';
            logoutBtn.style.display = 'block';
            profileBtn.style.display = 'block';
            startGameBtn.textContent = languageManager.t('home.startGame');
        } else {
            loginBtn.style.display = 'block';
            logoutBtn.style.display = 'none';
            profileBtn.style.display = 'none';
        }
    }

    updateAllTranslations() {
        // This method is no longer used - language toggle only affects game content
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const app = new MindReflexApp();
});
