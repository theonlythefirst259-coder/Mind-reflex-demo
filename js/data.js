// Game questions database with English and Thai translations
const gameQuestions = [
    {
        id: 1,
        questionEn: "What is the capital of France?",
        questionTh: "อะไรคือเมืองหลวงของฝรั่งเศส?",
        optionsEn: ["London", "Paris", "Berlin", "Madrid"],
        optionsTh: ["ลอนดอน", "ปารีส", "เบอร์ลิน", "มาดริด"],
        correctAnswerIndex: 1,
        explanationEn: "Paris is the capital and most populous city of France.",
        explanationTh: "ปารีสเป็นเมืองหลวงและเมืองที่มีประชากรมากที่สุดของฝรั่งเศส"
    },
    {
        id: 2,
        questionEn: "What is 2 + 2?",
        questionTh: "2 + 2 เท่ากับเท่าไหร่?",
        optionsEn: ["3", "4", "5", "6"],
        optionsTh: ["3", "4", "5", "6"],
        correctAnswerIndex: 1,
        explanationEn: "2 + 2 = 4",
        explanationTh: "2 + 2 = 4"
    },
    {
        id: 3,
        questionEn: "Which planet is known as the Red Planet?",
        questionTh: "ดาวไหนที่เรียกว่า 'ดาวแดง'?",
        optionsEn: ["Venus", "Mars", "Jupiter", "Saturn"],
        optionsTh: ["ศุกร์", "อังคาร", "พฤหัสบดี", "เสาร์"],
        correctAnswerIndex: 1,
        explanationEn: "Mars is known as the Red Planet because of its reddish appearance.",
        explanationTh: "อังคารเรียกว่าดาวแดงเพราะมีลักษณะสีแดง"
    },
    {
        id: 4,
        questionEn: "What is the largest ocean on Earth?",
        questionTh: "มหาสมุทรใดที่ใหญ่ที่สุดบนโลก?",
        optionsEn: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        optionsTh: ["มหาสมุทรแอตแลนติก", "มหาสมุทรอินเดีย", "มหาสมุทรแปซิฟิก", "มหาสมุทรโปลาร์"],
        correctAnswerIndex: 2,
        explanationEn: "The Pacific Ocean is the largest ocean on Earth.",
        explanationTh: "มหาสมุทรแปซิฟิกเป็นมหาสมุทรที่ใหญ่ที่สุดบนโลก"
    },
    {
        id: 5,
        questionEn: "Who painted the Mona Lisa?",
        questionTh: "ใครวาดภาพโมนาลิซา?",
        optionsEn: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"],
        optionsTh: ["มิเกเลนเจโล", "เลโอนาร์โด ดา วินชี", "ราฟาเอล", "โดนาเทลโล"],
        correctAnswerIndex: 1,
        explanationEn: "Leonardo da Vinci painted the Mona Lisa in the early 16th century.",
        explanationTh: "เลโอนาร์โด ดา วินชี วาดภาพโมนาลิซาในช่วงต้นศตวรรษที่ 16"
    },
    {
        id: 6,
        questionEn: "What is the smallest country in the world?",
        questionTh: "ประเทศใดที่เล็กที่สุดในโลก?",
        optionsEn: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
        optionsTh: ["โมนาโก", "ซานมารีโน", "วาติกันซิตี", "ลิกเตนสไตน์"],
        correctAnswerIndex: 2,
        explanationEn: "Vatican City is the smallest country in the world by both area and population.",
        explanationTh: "วาติกันซิตีเป็นประเทศที่เล็กที่สุดในโลกทั้งในด้านพื้นที่และประชากร"
    },
    {
        id: 7,
        questionEn: "What is the chemical symbol for Gold?",
        questionTh: "สัญลักษณ์ทางเคมีของทองคำคืออะไร?",
        optionsEn: ["Go", "Gd", "Au", "Ag"],
        optionsTh: ["Go", "Gd", "Au", "Ag"],
        correctAnswerIndex: 2,
        explanationEn: "The chemical symbol for Gold is Au, from the Latin word 'Aurum'.",
        explanationTh: "สัญลักษณ์ทางเคมีของทองคำคือ Au มาจากคำภาษาละตินว่า 'Aurum'"
    },
    {
        id: 8,
        questionEn: "Which country is home to the Great Wall?",
        questionTh: "ประเทศใดที่มีกำแพงเมืองที่ยิ่งใหญ่?",
        optionsEn: ["Japan", "Korea", "China", "Vietnam"],
        optionsTh: ["ญี่ปุ่น", "เกาหลี", "จีน", "เวียดนาม"],
        correctAnswerIndex: 2,
        explanationEn: "The Great Wall of China is one of the most iconic structures in the world.",
        explanationTh: "กำแพงเมืองจีนเป็นหนึ่งในโครงสร้างที่มีชื่อเสียงที่สุดในโลก"
    },
    {
        id: 9,
        questionEn: "What is the speed of light?",
        questionTh: "ความเร็วของแสงเท่ากับเท่าไหร่?",
        optionsEn: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
        optionsTh: ["300,000 กม./วินาที", "150,000 กม./วินาที", "500,000 กม./วินาที", "100,000 กม./วินาที"],
        correctAnswerIndex: 0,
        explanationEn: "The speed of light is approximately 299,792 km/s (often rounded to 300,000 km/s).",
        explanationTh: "ความเร็วของแสงประมาณ 299,792 กม./วินาที (มักปัดเศษเป็น 300,000 กม./วินาที)"
    },
    {
        id: 10,
        questionEn: "What is the largest mammal in the world?",
        questionTh: "สัตว์เลี้ยงลูกด้วยนมที่ใหญ่ที่สุดในโลกคืออะไร?",
        optionsEn: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        optionsTh: ["ช้าง", "ยีราฟ", "วาฬสีน้ำเงิน", "ฮิปโปโปเตมัส"],
        correctAnswerIndex: 2,
        explanationEn: "The Blue Whale is the largest mammal in the world, weighing up to 200 tons.",
        explanationTh: "วาฬสีน้ำเงินเป็นสัตว์เลี้ยงลูกด้วยนมที่ใหญ่ที่สุดในโลก หนักได้ถึง 200 ตัน"
    },
    {
        id: 11,
        questionEn: "What year did the Titanic sink?",
        questionTh: "เรือไทแทนิกจมในปีไหน?",
        optionsEn: ["1912", "1915", "1920", "1925"],
        optionsTh: ["1912", "1915", "1920", "1925"],
        correctAnswerIndex: 0,
        explanationEn: "The Titanic sank on April 15, 1912, after hitting an iceberg.",
        explanationTh: "เรือไทแทนิกจมในวันที่ 15 เมษายน 1912 หลังจากชนกับภูเขาน้ำแข็ง"
    },
    {
        id: 12,
        questionEn: "What is the capital of Japan?",
        questionTh: "เมืองหลวงของญี่ปุ่นคืออะไร?",
        optionsEn: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"],
        optionsTh: ["โอซาก้า", "โตเกียว", "เกียวโต", "ฮิโรชิมา"],
        correctAnswerIndex: 1,
        explanationEn: "Tokyo is the capital and largest city of Japan.",
        explanationTh: "โตเกียวเป็นเมืองหลวงและเมืองที่ใหญ่ที่สุดของญี่ปุ่น"
    },
    {
        id: 13,
        questionEn: "What is the most spoken language in the world?",
        questionTh: "ภาษาใดที่พูดกันมากที่สุดในโลก?",
        optionsEn: ["Spanish", "English", "Mandarin Chinese", "Hindi"],
        optionsTh: ["สเปนิช", "อังกฤษ", "จีนแมนดารินพูด", "ฮินดี"],
        correctAnswerIndex: 2,
        explanationEn: "Mandarin Chinese is the most spoken language in the world by native speakers.",
        explanationTh: "จีนแมนดารินพูดเป็นภาษาที่พูดกันมากที่สุดในโลกโดยผู้พูดเจ้าบ้าน"
    },
    {
        id: 14,
        questionEn: "What is the currency of Thailand?",
        questionTh: "สกุลเงินของไทยคืออะไร?",
        optionsEn: ["Baht", "Ringgit", "Peso", "Won"],
        optionsTh: ["บาท", "ริงกิต", "เปโซ", "วอน"],
        correctAnswerIndex: 0,
        explanationEn: "The currency of Thailand is the Thai Baht (฿).",
        explanationTh: "สกุลเงินของไทยคือบาทไทย (฿)"
    },
    {
        id: 15,
        questionEn: "What is the largest desert in the world?",
        questionTh: "ทะเลทรายที่ใหญ่ที่สุดในโลกคืออะไร?",
        optionsEn: ["Sahara", "Arabian", "Gobi", "Kalahari"],
        optionsTh: ["ซาฮารา", "อาหรับ", "โกบี", "คาลาฮารี"],
        correctAnswerIndex: 0,
        explanationEn: "The Sahara Desert is the largest hot desert in the world.",
        explanationTh: "ทะเลทรายซาฮารา เป็นทะเลทรายร้อนที่ใหญ่ที่สุดในโลก"
    },
    {
        id: 16,
        questionEn: "How many bones are in the human body?",
        questionTh: "กระดูกในร่างกายมนุษย์มีกี่ชิ้น?",
        optionsEn: ["186", "206", "226", "246"],
        optionsTh: ["186", "206", "226", "246"],
        correctAnswerIndex: 1,
        explanationEn: "An adult human body has 206 bones.",
        explanationTh: "ร่างกายมนุษย์ผู้ใหญ่มีกระดูก 206 ชิ้น"
    },
    {
        id: 17,
        questionEn: "What is the smallest unit of life?",
        questionTh: "หน่วยที่เล็กที่สุดของชีวิตคืออะไร?",
        optionsEn: ["Atom", "Molecule", "Cell", "Organism"],
        optionsTh: ["อะตอม", "โมเลกุล", "เซลล์", "สิ่งมีชีวิต"],
        correctAnswerIndex: 2,
        explanationEn: "The cell is the smallest unit of life and the basic building block of all living organisms.",
        explanationTh: "เซลล์เป็นหน่วยที่เล็กที่สุดของชีวิตและเป็นหน่วยพื้นฐานของสิ่งมีชีวิตทั้งหมด"
    },
    {
        id: 18,
        questionEn: "What is the capital of Thailand?",
        questionTh: "เมืองหลวงของไทยคืออะไร?",
        optionsEn: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"],
        optionsTh: ["ภูเก็ต", "เชียงใหม่", "กรุงเทพฯ", "พัทยา"],
        correctAnswerIndex: 2,
        explanationEn: "Bangkok is the capital city of Thailand.",
        explanationTh: "กรุงเทพฯ เป็นเมืองหลวงของไทย"
    },
    {
        id: 19,
        questionEn: "What is the most populated country in the world?",
        questionTh: "ประเทศใดที่มีประชากรมากที่สุดในโลก?",
        optionsEn: ["India", "China", "United States", "Indonesia"],
        optionsTh: ["อินเดีย", "จีน", "สหรัฐอเมริกา", "อินโดนีเซีย"],
        correctAnswerIndex: 0,
        explanationEn: "India has surpassed China as the most populated country in the world.",
        explanationTh: "อินเดียเป็นประเทศที่มีประชากรมากที่สุดในโลก"
    },
    {
        id: 20,
        questionEn: "What is the deepest ocean trench?",
        questionTh: "ร่องน้ำลึกที่สุดในมหาสมุทรคืออะไร?",
        optionsEn: ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Kuril-Kamchatka Trench"],
        optionsTh: ["ร่องมาเรียนา", "ร่องตองกา", "ร่องฟิลิปปินส์", "ร่องคูริล-กัมชัตกา"],
        correctAnswerIndex: 0,
        explanationEn: "The Mariana Trench is the deepest part of the world's oceans, reaching about 11,000 meters.",
        explanationTh: "ร่องมาเรียนาเป็นจุดลึกที่สุดของมหาสมุทรโลก ลึกประมาณ 11,000 เมตร"
    }
];

// Storage Manager for LocalStorage
class StorageManager {
    constructor() {
        this.userKey = 'mindReflex_user';
        this.gamesKey = 'mindReflex_games';
        this.leaderboardKey = 'mindReflex_leaderboard';
        this.friendsKey = 'mindReflex_friends';
    }

    // User Management
    saveUser(user) {
        localStorage.setItem(this.userKey, JSON.stringify(user));
    }

    getUser() {
        const user = localStorage.getItem(this.userKey);
        return user ? JSON.parse(user) : null;
    }

    clearUser() {
        localStorage.removeItem(this.userKey);
    }

    // Game History
    saveGame(game) {
        const games = this.getGames();
        games.push(game);
        localStorage.setItem(this.gamesKey, JSON.stringify(games));
    }

    getGames() {
        const games = localStorage.getItem(this.gamesKey);
        return games ? JSON.parse(games) : [];
    }

    getGameById(id) {
        const games = this.getGames();
        return games.find(g => g.id === id);
    }

    // Leaderboard
    updateLeaderboard() {
        const games = this.getGames();
        const leaderboard = {};

        games.forEach(game => {
            if (game.userId) {
                if (!leaderboard[game.userId]) {
                    leaderboard[game.userId] = {
                        userId: game.userId,
                        username: game.username,
                        avatar: game.avatar,
                        bestScore: 0,
                        totalGames: 0,
                        averageScore: 0,
                        totalScore: 0
                    };
                }
                leaderboard[game.userId].totalGames++;
                leaderboard[game.userId].totalScore += game.score;
                if (game.score > leaderboard[game.userId].bestScore) {
                    leaderboard[game.userId].bestScore = game.score;
                }
                leaderboard[game.userId].averageScore = Math.round(
                    leaderboard[game.userId].totalScore / leaderboard[game.userId].totalGames
                );
            }
        });

        const leaderboardArray = Object.values(leaderboard).sort((a, b) => b.bestScore - a.bestScore);
        localStorage.setItem(this.leaderboardKey, JSON.stringify(leaderboardArray));
        return leaderboardArray;
    }

    getLeaderboard() {
        const leaderboard = localStorage.getItem(this.leaderboardKey);
        return leaderboard ? JSON.parse(leaderboard) : [];
    }

    // Friends
    addFriend(friendId) {
        const friends = this.getFriends();
        if (!friends.includes(friendId)) {
            friends.push(friendId);
            localStorage.setItem(this.friendsKey, JSON.stringify(friends));
        }
    }

    getFriends() {
        const friends = localStorage.getItem(this.friendsKey);
        return friends ? JSON.parse(friends) : [];
    }

    removeFriend(friendId) {
        const friends = this.getFriends();
        const index = friends.indexOf(friendId);
        if (index > -1) {
            friends.splice(index, 1);
            localStorage.setItem(this.friendsKey, JSON.stringify(friends));
        }
    }
}

const storageManager = new StorageManager();
