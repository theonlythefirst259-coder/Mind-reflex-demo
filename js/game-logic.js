// Game Logic and Mechanics
class GameEngine {
    constructor() {
        this.currentGame = null;
        this.currentQuestionIndex = 0;
        this.currentQuestion = null;
        this.gameTimer = null;
        this.timeRemaining = 5;
        this.combo = 1;
        this.score = 0;
        this.answers = [];
        this.questionStartTime = 0;
        this.isAnswered = false;
        this.totalTime = 0;
        this.startTime = 0;
    }

    startGame(isGuest = false) {
        this.currentGame = {
            id: Date.now(),
            userId: isGuest ? null : storageManager.getUser()?.id,
            username: isGuest ? 'Guest' : storageManager.getUser()?.username,
            avatar: isGuest ? 'G' : storageManager.getUser()?.avatar || 'U',
            score: 0,
            questionsAnswered: 0,
            correctAnswers: 0,
            highestCombo: 1,
            averageResponseTime: 0,
            totalTime: 0,
            answers: [],
            startedAt: new Date(),
            isCompleted: false
        };

        this.currentQuestionIndex = 0;
        this.combo = 1;
        this.score = 0;
        this.answers = [];
        this.startTime = Date.now();
        this.loadNextQuestion();
    }

    loadNextQuestion() {
        if (this.currentQuestionIndex >= 10) {
            this.endGame();
            return;
        }

        this.currentQuestion = gameQuestions[this.currentQuestionIndex];
        this.questionStartTime = Date.now();
        this.isAnswered = false;
        this.timeRemaining = 5;
        this.currentQuestionIndex++;

        // Randomize answer options
        this.shuffleAnswers();

        return this.currentQuestion;
    }

    shuffleAnswers() {
        if (!this.currentQuestion) return;

        const lang = languageManager.getLanguage();
        const optionsKey = lang === 'en' ? 'optionsEn' : 'optionsTh';
        const options = [...this.currentQuestion[optionsKey]];
        const correctIndex = this.currentQuestion.correctAnswerIndex;
        const correctAnswer = options[correctIndex];

        // Fisher-Yates shuffle
        for (let i = options.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [options[i], options[j]] = [options[j], options[i]];
        }

        this.currentQuestion.shuffledOptions = options;
        this.currentQuestion.correctAnswerIndex = options.indexOf(correctAnswer);
    }

    answerQuestion(selectedIndex) {
        if (this.isAnswered || !this.currentQuestion) return;

        this.isAnswered = true;
        const responseTime = Date.now() - this.questionStartTime;
        const isCorrect = selectedIndex === this.currentQuestion.correctAnswerIndex;

        // Calculate points
        let points = 0;
        if (isCorrect) {
            points = 100; // Base points
            
            // Combo multiplier
            points *= this.combo;

            // Reflex bonus (less than 1 second)
            if (responseTime < 1000) {
                points += 50;
            }

            this.combo++;
            this.currentGame.correctAnswers++;
        } else {
            this.combo = 1; // Reset combo on wrong answer
        }

        this.score += points;
        this.currentGame.score = this.score;
        this.currentGame.questionsAnswered++;

        // Track answer
        const answer = {
            questionId: this.currentQuestion.id,
            selectedIndex: selectedIndex,
            isCorrect: isCorrect,
            responseTime: responseTime,
            points: points,
            combo: this.combo - (isCorrect ? 1 : 0)
        };

        this.answers.push(answer);
        this.currentGame.answers = this.answers;

        // Update highest combo
        if (this.combo - (isCorrect ? 1 : 0) > this.currentGame.highestCombo) {
            this.currentGame.highestCombo = this.combo - (isCorrect ? 1 : 0);
        }

        return {
            isCorrect,
            points,
            responseTime,
            combo: this.combo - (isCorrect ? 1 : 0)
        };
    }

    getNextQuestion() {
        if (this.currentQuestionIndex >= 10) {
            this.endGame();
            return null;
        }
        return this.loadNextQuestion();
    }

    endGame() {
        this.currentGame.isCompleted = true;
        this.currentGame.totalTime = Date.now() - this.startTime;

        // Calculate average response time
        if (this.answers.length > 0) {
            const totalResponseTime = this.answers.reduce((sum, a) => sum + a.responseTime, 0);
            this.currentGame.averageResponseTime = Math.round(totalResponseTime / this.answers.length);
        }

        // Save game
        storageManager.saveGame(this.currentGame);
        storageManager.updateLeaderboard();

        return this.currentGame;
    }

    getGameStats() {
        return {
            score: this.score,
            combo: this.combo,
            questionsAnswered: this.currentGame.questionsAnswered,
            correctAnswers: this.currentGame.correctAnswers,
            accuracy: this.currentGame.questionsAnswered > 0 
                ? Math.round((this.currentGame.correctAnswers / this.currentGame.questionsAnswered) * 100)
                : 0,
            highestCombo: this.currentGame.highestCombo,
            averageResponseTime: this.currentGame.averageResponseTime
        };
    }

    getGameResults() {
        const stats = this.getGameStats();
        return {
            finalScore: this.currentGame.score,
            questionsAnswered: this.currentGame.questionsAnswered,
            correctAnswers: this.currentGame.correctAnswers,
            accuracy: stats.accuracy,
            highestCombo: this.currentGame.highestCombo,
            averageResponseTime: this.currentGame.averageResponseTime,
            totalTime: this.currentGame.totalTime
        };
    }

    getReviewData() {
        return this.answers.map((answer, index) => {
            const question = gameQuestions.find(q => q.id === answer.questionId);
            const lang = languageManager.getLanguage();
            const questionKey = lang === 'en' ? 'questionEn' : 'questionTh';
            const optionsKey = lang === 'en' ? 'optionsEn' : 'optionsTh';
            const explanationKey = lang === 'en' ? 'explanationEn' : 'explanationTh';

            return {
                index: index + 1,
                question: question[questionKey],
                options: question[optionsKey],
                selectedIndex: answer.selectedIndex,
                correctIndex: question.correctAnswerIndex,
                isCorrect: answer.isCorrect,
                explanation: question[explanationKey],
                responseTime: answer.responseTime,
                points: answer.points
            };
        });
    }
}

const gameEngine = new GameEngine();
