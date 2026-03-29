const translations = {
    en: {
        // Header
        'header.title': 'MIND REFLEX',
        'header.tagline': 'Neon Arcade Quiz',
        'header.language': 'EN / ไทย',
        'header.sound': '🔊',
        'header.profile': '👤',
        'header.login': 'LOGIN',
        'header.logout': 'LOGOUT',

        // Home Screen
        'home.welcome': 'WELCOME TO MIND REFLEX',
        'home.subtitle': 'Test your reflexes and knowledge in this neon arcade quiz game!',
        'home.startGame': 'START GAME',
        'home.playGuest': 'PLAY AS GUEST',
        'home.leaderboard': 'LEADERBOARD',
        'home.howToPlay': 'HOW TO PLAY',

        // Login Screen
        'login.title': 'LOGIN',
        'login.username': 'Username',
        'login.password': 'Password',
        'login.loginBtn': 'LOGIN',
        'login.createAccount': 'CREATE ACCOUNT',
        'login.back': 'BACK',

        // Register Screen
        'register.title': 'CREATE ACCOUNT',
        'register.username': 'Username',
        'register.email': 'Email',
        'register.password': 'Password',
        'register.createBtn': 'CREATE ACCOUNT',
        'register.backToLogin': 'BACK TO LOGIN',

        // Game Screen
        'game.score': 'SCORE',
        'game.combo': 'COMBO',
        'game.time': 'TIME',
        'game.quitGame': 'QUIT GAME',

        // Game Over Screen
        'gameOver.title': 'GAME OVER',
        'gameOver.finalScore': 'Final Score',
        'gameOver.questionsAnswered': 'Questions Answered',
        'gameOver.correctAnswers': 'Correct Answers',
        'gameOver.accuracy': 'Accuracy',
        'gameOver.highestCombo': 'Highest Combo',
        'gameOver.avgResponseTime': 'Avg Response Time',
        'gameOver.playAgain': 'PLAY AGAIN',
        'gameOver.review': 'REVIEW ANSWERS',
        'gameOver.backHome': 'BACK TO HOME',

        // Leaderboard Screen
        'leaderboard.title': 'LEADERBOARD',
        'leaderboard.global': 'GLOBAL',
        'leaderboard.friends': 'FRIENDS',
        'leaderboard.rank': 'Rank',
        'leaderboard.player': 'Player',
        'leaderboard.score': 'Score',
        'leaderboard.games': 'Games',
        'leaderboard.back': 'BACK',

        // Review Screen
        'review.title': 'REVIEW ANSWERS',
        'review.question': 'Question',
        'review.yourAnswer': 'Your Answer',
        'review.correctAnswer': 'Correct Answer',
        'review.explanation': 'Explanation',
        'review.correct': 'CORRECT',
        'review.incorrect': 'INCORRECT',
        'review.back': 'BACK',

        // How to Play Screen
        'howToPlay.title': 'HOW TO PLAY',
        'howToPlay.objective': 'Objective',
        'howToPlay.objectiveText': 'Answer as many questions as possible correctly and as quickly as you can!',
        'howToPlay.timer': 'Timer',
        'howToPlay.timerText': 'You have 3-5 seconds to answer each question. The faster you answer, the more bonus points you get!',
        'howToPlay.combo': 'Combo System',
        'howToPlay.comboText': 'Answer correctly to build your combo multiplier (x2, x3, x4, etc.). Wrong answers reset your combo!',
        'howToPlay.reflex': 'Reflex Bonus',
        'howToPlay.reflexText': 'Answer in less than 1 second to get a reflex bonus and extra points!',
        'howToPlay.scoring': 'Scoring',
        'howToPlay.scoringText': 'Base points + Combo multiplier + Reflex bonus = Your score for that question!',
        'howToPlay.back': 'BACK',

        // Profile Screen
        'profile.title': 'PROFILE',
        'profile.totalGames': 'Total Games',
        'profile.bestScore': 'Best Score',
        'profile.editProfile': 'EDIT PROFILE',
        'profile.myGames': 'MY GAMES',
        'profile.back': 'BACK',

        // Edit Profile Screen
        'editProfile.title': 'EDIT PROFILE',
        'editProfile.username': 'Username',
        'editProfile.bio': 'Bio',
        'editProfile.soundEnabled': 'Enable Sound Effects',
        'editProfile.save': 'SAVE CHANGES',
        'editProfile.cancel': 'CANCEL',

        // Notifications
        'notification.loginSuccess': 'Login successful!',
        'notification.registerSuccess': 'Account created successfully!',
        'notification.logoutSuccess': 'Logged out successfully!',
        'notification.profileUpdated': 'Profile updated successfully!',
        'notification.error': 'An error occurred. Please try again.',
        'notification.soundEnabled': 'Sound enabled',
        'notification.soundDisabled': 'Sound disabled',
    },
    th: {
        // Header
        'header.title': 'จิตสำนึก ปฏิกิริยา',
        'header.tagline': 'เกมควิซอาร์เคดเนออน',
        'header.language': 'EN / ไทย',
        'header.sound': '🔊',
        'header.profile': '👤',
        'header.login': 'เข้าสู่ระบบ',
        'header.logout': 'ออกจากระบบ',

        // Home Screen
        'home.welcome': 'ยินดีต้อนรับสู่จิตสำนึก ปฏิกิริยา',
        'home.subtitle': 'ทดสอบปฏิกิริยาและความรู้ของคุณในเกมควิซอาร์เคดเนออนนี้!',
        'home.startGame': 'เริ่มเกม',
        'home.playGuest': 'เล่นในฐานะแขก',
        'home.leaderboard': 'อันดับคะแนน',
        'home.howToPlay': 'วิธีการเล่น',

        // Login Screen
        'login.title': 'เข้าสู่ระบบ',
        'login.username': 'ชื่อผู้ใช้',
        'login.password': 'รหัสผ่าน',
        'login.loginBtn': 'เข้าสู่ระบบ',
        'login.createAccount': 'สร้างบัญชี',
        'login.back': 'กลับ',

        // Register Screen
        'register.title': 'สร้างบัญชี',
        'register.username': 'ชื่อผู้ใช้',
        'register.email': 'อีเมล',
        'register.password': 'รหัสผ่าน',
        'register.createBtn': 'สร้างบัญชี',
        'register.backToLogin': 'กลับไปเข้าสู่ระบบ',

        // Game Screen
        'game.score': 'คะแนน',
        'game.combo': 'คอมโบ',
        'game.time': 'เวลา',
        'game.quitGame': 'ออกจากเกม',

        // Game Over Screen
        'gameOver.title': 'เกมจบแล้ว',
        'gameOver.finalScore': 'คะแนนสุดท้าย',
        'gameOver.questionsAnswered': 'คำถามที่ตอบ',
        'gameOver.correctAnswers': 'คำตอบที่ถูกต้อง',
        'gameOver.accuracy': 'ความแม่นยำ',
        'gameOver.highestCombo': 'คอมโบสูงสุด',
        'gameOver.avgResponseTime': 'เวลาตอบเฉลี่ย',
        'gameOver.playAgain': 'เล่นอีกครั้ง',
        'gameOver.review': 'ตรวจสอบคำตอบ',
        'gameOver.backHome': 'กลับไปหน้าแรก',

        // Leaderboard Screen
        'leaderboard.title': 'อันดับคะแนน',
        'leaderboard.global': 'ทั่วโลก',
        'leaderboard.friends': 'เพื่อน',
        'leaderboard.rank': 'อันดับ',
        'leaderboard.player': 'ผู้เล่น',
        'leaderboard.score': 'คะแนน',
        'leaderboard.games': 'เกม',
        'leaderboard.back': 'กลับ',

        // Review Screen
        'review.title': 'ตรวจสอบคำตอบ',
        'review.question': 'คำถาม',
        'review.yourAnswer': 'คำตอบของคุณ',
        'review.correctAnswer': 'คำตอบที่ถูกต้อง',
        'review.explanation': 'คำอธิบาย',
        'review.correct': 'ถูกต้อง',
        'review.incorrect': 'ไม่ถูกต้อง',
        'review.back': 'กลับ',

        // How to Play Screen
        'howToPlay.title': 'วิธีการเล่น',
        'howToPlay.objective': 'วัตถุประสงค์',
        'howToPlay.objectiveText': 'ตอบคำถามให้ได้มากที่สุดอย่างถูกต้องและรวดเร็ว!',
        'howToPlay.timer': 'ตัวจับเวลา',
        'howToPlay.timerText': 'คุณมีเวลา 3-5 วินาทีในการตอบแต่ละคำถาม ยิ่งตอบเร็วเท่าไหร่ คุณก็ยิ่งได้คะแนนโบนัสมากขึ้นเท่านั้น!',
        'howToPlay.combo': 'ระบบคอมโบ',
        'howToPlay.comboText': 'ตอบถูกต้องเพื่อสร้างตัวคูณคอมโบของคุณ (x2, x3, x4 เป็นต้น) คำตอบที่ผิดจะรีเซ็ตคอมโบของคุณ!',
        'howToPlay.reflex': 'โบนัสปฏิกิริยา',
        'howToPlay.reflexText': 'ตอบในเวลาน้อยกว่า 1 วินาทีเพื่อรับโบนัสปฏิกิริยาและคะแนนพิเศษ!',
        'howToPlay.scoring': 'การให้คะแนน',
        'howToPlay.scoringText': 'คะแนนพื้นฐาน + ตัวคูณคอมโบ + โบนัสปฏิกิริยา = คะแนนของคุณสำหรับคำถามนั้น!',
        'howToPlay.back': 'กลับ',

        // Profile Screen
        'profile.title': 'โปรไฟล์',
        'profile.totalGames': 'จำนวนเกมทั้งหมด',
        'profile.bestScore': 'คะแนนที่ดีที่สุด',
        'profile.editProfile': 'แก้ไขโปรไฟล์',
        'profile.myGames': 'เกมของฉัน',
        'profile.back': 'กลับ',

        // Edit Profile Screen
        'editProfile.title': 'แก้ไขโปรไฟล์',
        'editProfile.username': 'ชื่อผู้ใช้',
        'editProfile.bio': 'ประวัติ',
        'editProfile.soundEnabled': 'เปิดใช้เสียงเอฟเฟกต์',
        'editProfile.save': 'บันทึกการเปลี่ยนแปลง',
        'editProfile.cancel': 'ยกเลิก',

        // Notifications
        'notification.loginSuccess': 'เข้าสู่ระบบสำเร็จ!',
        'notification.registerSuccess': 'สร้างบัญชีสำเร็จ!',
        'notification.logoutSuccess': 'ออกจากระบบสำเร็จ!',
        'notification.profileUpdated': 'อัปเดตโปรไฟล์สำเร็จ!',
        'notification.error': 'เกิดข้อผิดพลาด โปรดลองอีกครั้ง',
        'notification.soundEnabled': 'เปิดใช้เสียง',
        'notification.soundDisabled': 'ปิดใช้เสียง',
    }
};

class LanguageManager {
    constructor() {
        this.currentLanguage = localStorage.getItem('language') || 'en';
    }

    setLanguage(lang) {
        if (lang === 'en' || lang === 'th') {
            this.currentLanguage = lang;
            localStorage.setItem('language', lang);
        }
    }

    getLanguage() {
        return this.currentLanguage;
    }

    t(key) {
        const keys = key.split('.');
        let value = translations[this.currentLanguage];
        for (let k of keys) {
            value = value[k];
            if (!value) return key;
        }
        return value;
    }

    toggleLanguage() {
        this.setLanguage(this.currentLanguage === 'en' ? 'th' : 'en');
    }
}

const languageManager = new LanguageManager();
