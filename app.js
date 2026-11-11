"use strict";

/* =================================
   LANGUAGE SYSTEM
================================= */

const translations = {
    en: {
        theme: "☀ Theme",
        themeDark: "☀ Theme",
        title: "Islamic Learning",
        subtitle: "Learn, discover and grow every day.",

        quiz: "Quiz Mode",
        quizDesc: "Test your Islamic knowledge",
        ai: "AI Learning",
        aiDesc: "Ask questions with Gemini",
        quran: "Quran",
        quranDesc: "Read Quran chapters",
        prayer: "Prayer Times",
        prayerDesc: "View daily prayer times",
        tasbih: "Tasbih",
        tasbihDesc: "Keep track of your dhikr",
        daily: "Daily Knowledge",
        dailyDesc: "Discover something new",
        settings: "Settings",
        settingsDesc: "Customize your app",
        exit: "Exit",
        exitDesc: "Close the application",

        back: "← Back to menu",
        quizTitle: "📚 Islamic Quiz",
        question: "Question",
        score: "Score",
        next: "Next Question",
        retry: "Try Again",
        completed: "Quiz completed!",
        finished: "Finished",
        correct: "Correct!",
        incorrect: "Not quite.",
        finalScore: "Your final score:",

        aiTitle: "🤖 AI Learning",
        aiDescription: "Ask a question and learn with Gemini AI.",
        aiPlaceholder: "Write your question here...",
        ask: "Ask Gemini",
        thinking: "Thinking...",
        aiWaiting: "Your answer will appear here.",
        emptyQuestion: "Please write a question first.",
        aiError: "Could not contact the AI service.",

        quranTitle: "📖 Quran",
        surahNumber: "Surah number (1–114)",
        loadSurah: "Load Surah",
        chooseSurah: "Choose a Surah to begin.",
        invalidSurah: "Enter a Surah number between 1 and 114.",
        loadingSurah: "Loading Surah...",
        quranError: "Unable to load the Quran right now. Check your internet connection.",

        prayerTitle: "🕌 Prayer Times",
        city: "City",
        country: "Country",
        cityPlaceholder: "Example: Tunis",
        getPrayers: "Get Prayer Times",
        enterCity: "Enter your city to view prayer times.",
        bothFields: "Please enter both city and country.",
        loadingPrayers: "Loading prayer times...",
        prayerError: "Unable to load prayer times. Check the city and your internet connection.",

        tasbihTitle: "📿 Digital Tasbih",
        tasbihDescription: "Keep track of your dhikr.",
        count: "+ Count",
        reset: "Reset",

        dailyTitle: "✨ Daily Knowledge",
        dailyStart: "Discover a new piece of Islamic knowledge.",
        another: "Show Another",

        settingsTitle: "⚙️ Settings",
        language: "Language",
        appearance: "Appearance",
        dark: "Dark",
        light: "Light",

        thankYou: "Thank you for learning with us!",
        closeTab: "You can close this browser tab now.",

        prayerNames: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"],

        questions: [
            {
                question: "How many pillars of Islam are there?",
                answers: ["Three", "Four", "Five", "Six"],
                explanation: "Islam has five pillars."
            },
            {
                question: "What is the holy book of Islam?",
                answers: ["The Torah", "The Quran", "The Psalms", "The Gospel"],
                explanation: "The Quran is the holy book of Islam."
            },
            {
                question: "How many daily obligatory prayers are there?",
                answers: ["Three", "Four", "Five", "Six"],
                explanation: "Muslims have five daily obligatory prayers."
            },
            {
                question: "In which month do Muslims fast?",
                answers: ["Muharram", "Ramadan", "Shawwal", "Rajab"],
                explanation: "Muslims fast during Ramadan."
            },
            {
                question: "What is the direction Muslims face during prayer?",
                answers: ["Jerusalem", "Madinah", "The Kaaba", "Mount Uhud"],
                explanation: "Muslims face the Kaaba in Makkah."
            },
            {
                question: "Which angel brought revelation to Prophet Muhammad?",
                answers: ["Mikail", "Jibril", "Israfil", "Malik"],
                explanation: "Angel Jibril brought revelation."
            },
            {
                question: "What is the first month of the Islamic calendar?",
                answers: ["Ramadan", "Safar", "Muharram", "Rajab"],
                explanation: "Muharram is the first month of the Islamic calendar."
            },
            {
                question: "Which city is home to the Kaaba?",
                answers: ["Madinah", "Makkah", "Jerusalem", "Cairo"],
                explanation: "The Kaaba is located in Makkah."
            }
        ],

        facts: [
            "The Quran is divided into 114 Surahs.",
            "The Islamic calendar is a lunar calendar.",
            "Al-Fatiha is the opening Surah of the Quran.",
            "The Kaaba is located in Makkah.",
            "Ramadan is the ninth month of the Islamic calendar."
        ]
    },

    fr: {
        theme: "☀ Thème",
        themeDark: "☀ Thème",
        title: "Apprentissage islamique",
        subtitle: "Apprenez, découvrez et progressez chaque jour.",

        quiz: "Mode Quiz",
        quizDesc: "Testez vos connaissances islamiques",
        ai: "Apprentissage IA",
        aiDesc: "Posez des questions avec Gemini",
        quran: "Coran",
        quranDesc: "Lisez les sourates du Coran",
        prayer: "Heures de prière",
        prayerDesc: "Consultez les horaires de prière",
        tasbih: "Tasbih",
        tasbihDesc: "Suivez vos invocations",
        daily: "Savoir quotidien",
        dailyDesc: "Découvrez quelque chose de nouveau",
        settings: "Paramètres",
        settingsDesc: "Personnalisez votre application",
        exit: "Quitter",
        exitDesc: "Fermer l'application",

        back: "← Retour au menu",
        quizTitle: "📚 Quiz islamique",
        question: "Question",
        score: "Score",
        next: "Question suivante",
        retry: "Réessayer",
        completed: "Quiz terminé !",
        finished: "Terminé",
        correct: "Correct !",
        incorrect: "Pas tout à fait.",
        finalScore: "Votre score final :",

        aiTitle: "🤖 Apprentissage IA",
        aiDescription: "Posez une question et apprenez avec Gemini AI.",
        aiPlaceholder: "Écrivez votre question ici...",
        ask: "Demander à Gemini",
        thinking: "Réflexion en cours...",
        aiWaiting: "Votre réponse apparaîtra ici.",
        emptyQuestion: "Veuillez d'abord écrire une question.",
        aiError: "Impossible de contacter le service IA.",

        quranTitle: "📖 Coran",
        surahNumber: "Numéro de la sourate (1–114)",
        loadSurah: "Charger la sourate",
        chooseSurah: "Choisissez une sourate pour commencer.",
        invalidSurah: "Entrez un numéro de sourate entre 1 et 114.",
        loadingSurah: "Chargement de la sourate...",
        quranError: "Impossible de charger le Coran. Vérifiez votre connexion Internet.",

        prayerTitle: "🕌 Heures de prière",
        city: "Ville",
        country: "Pays",
        cityPlaceholder: "Exemple : Tunis",
        getPrayers: "Obtenir les horaires",
        enterCity: "Entrez votre ville pour consulter les horaires.",
        bothFields: "Veuillez saisir la ville et le pays.",
        loadingPrayers: "Chargement des horaires...",
        prayerError: "Impossible de charger les horaires. Vérifiez la ville et votre connexion.",

        tasbihTitle: "📿 Tasbih numérique",
        tasbihDescription: "Suivez vos invocations.",
        count: "+ Compter",
        reset: "Réinitialiser",

        dailyTitle: "✨ Savoir quotidien",
        dailyStart: "Découvrez une nouvelle connaissance islamique.",
        another: "Afficher un autre",

        settingsTitle: "⚙️ Paramètres",
        language: "Langue",
        appearance: "Apparence",
        dark: "Sombre",
        light: "Clair",

        thankYou: "Merci d'avoir appris avec nous !",
        closeTab: "Vous pouvez maintenant fermer cet onglet.",

        prayerNames: ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"],

        questions: [
            {
                question: "Combien de piliers l'islam compte-t-il ?",
                answers: ["Trois", "Quatre", "Cinq", "Six"],
                explanation: "L'islam compte cinq piliers."
            },
            {
                question: "Quel est le livre sacré de l'islam ?",
                answers: ["La Torah", "Le Coran", "Les Psaumes", "L'Évangile"],
                explanation: "Le Coran est le livre sacré de l'islam."
            },
            {
                question: "Combien de prières obligatoires y a-t-il chaque jour ?",
                answers: ["Trois", "Quatre", "Cinq", "Six"],
                explanation: "Les musulmans accomplissent cinq prières obligatoires chaque jour."
            },
            {
                question: "Pendant quel mois les musulmans jeûnent-ils ?",
                answers: ["Mouharram", "Ramadan", "Chawwal", "Rajab"],
                explanation: "Les musulmans jeûnent pendant le Ramadan."
            },
            {
                question: "Dans quelle direction les musulmans prient-ils ?",
                answers: ["Jérusalem", "Médine", "La Kaaba", "Mont Ouhoud"],
                explanation: "Les musulmans se tournent vers la Kaaba à La Mecque."
            },
            {
                question: "Quel ange a transmis la révélation au prophète Mohammed ?",
                answers: ["Mikail", "Jibril", "Israfil", "Malik"],
                explanation: "L'ange Jibril a transmis la révélation."
            },
            {
                question: "Quel est le premier mois du calendrier islamique ?",
                answers: ["Ramadan", "Safar", "Mouharram", "Rajab"],
                explanation: "Mouharram est le premier mois du calendrier islamique."
            },
            {
                question: "Dans quelle ville se trouve la Kaaba ?",
                answers: ["Médine", "La Mecque", "Jérusalem", "Le Caire"],
                explanation: "La Kaaba se trouve à La Mecque."
            }
        ],

        facts: [
            "Le Coran est divisé en 114 sourates.",
            "Le calendrier islamique est un calendrier lunaire.",
            "Al-Fatiha est la première sourate du Coran.",
            "La Kaaba se trouve à La Mecque.",
            "Le Ramadan est le neuvième mois du calendrier islamique."
        ]
    },

    ar: {
        theme: "☀ المظهر",
        themeDark: "☀ المظهر",
        title: "التعلّم الإسلامي",
        subtitle: "تعلّم واكتشف وتطوّر كل يوم.",

        quiz: "وضع الاختبار",
        quizDesc: "اختبر معلوماتك الإسلامية",
        ai: "التعلّم بالذكاء الاصطناعي",
        aiDesc: "اطرح أسئلتك باستخدام Gemini",
        quran: "القرآن الكريم",
        quranDesc: "اقرأ سور القرآن الكريم",
        prayer: "مواقيت الصلاة",
        prayerDesc: "اطّلع على مواقيت الصلاة اليومية",
        tasbih: "المسبحة",
        tasbihDesc: "تابع أذكارك",
        daily: "معلومات يومية",
        dailyDesc: "اكتشف معلومة جديدة",
        settings: "الإعدادات",
        settingsDesc: "خصّص تطبيقك",
        exit: "خروج",
        exitDesc: "إغلاق التطبيق",

        back: "العودة إلى القائمة ←",
        quizTitle: "📚 الاختبار الإسلامي",
        question: "السؤال",
        score: "النتيجة",
        next: "السؤال التالي",
        retry: "حاول مجدداً",
        completed: "اكتمل الاختبار!",
        finished: "انتهى",
        correct: "إجابة صحيحة!",
        incorrect: "ليس تماماً.",
        finalScore: "نتيجتك النهائية:",

        aiTitle: "🤖 التعلّم بالذكاء الاصطناعي",
        aiDescription: "اطرح سؤالاً وتعلّم باستخدام Gemini AI.",
        aiPlaceholder: "اكتب سؤالك هنا...",
        ask: "اسأل Gemini",
        thinking: "جارٍ التفكير...",
        aiWaiting: "ستظهر إجابتك هنا.",
        emptyQuestion: "يرجى كتابة سؤال أولاً.",
        aiError: "تعذّر الاتصال بخدمة الذكاء الاصطناعي.",

        quranTitle: "📖 القرآن الكريم",
        surahNumber: "رقم السورة (1–114)",
        loadSurah: "تحميل السورة",
        chooseSurah: "اختر سورة للبدء.",
        invalidSurah: "أدخل رقم سورة بين 1 و114.",
        loadingSurah: "جارٍ تحميل السورة...",
        quranError: "تعذّر تحميل القرآن حالياً. تحقق من اتصالك بالإنترنت.",

        prayerTitle: "🕌 مواقيت الصلاة",
        city: "المدينة",
        country: "البلد",
        cityPlaceholder: "مثال: تونس",
        getPrayers: "عرض مواقيت الصلاة",
        enterCity: "أدخل مدينتك لعرض مواقيت الصلاة.",
        bothFields: "يرجى إدخال المدينة والبلد.",
        loadingPrayers: "جارٍ تحميل مواقيت الصلاة...",
        prayerError: "تعذّر تحميل مواقيت الصلاة. تحقق من المدينة واتصالك بالإنترنت.",

        tasbihTitle: "📿 المسبحة الرقمية",
        tasbihDescription: "تابع أذكارك.",
        count: "+ تسبيح",
        reset: "إعادة التصفير",

        dailyTitle: "✨ معلومات يومية",
        dailyStart: "اكتشف معلومة إسلامية جديدة.",
        another: "معلومة أخرى",

        settingsTitle: "⚙️ الإعدادات",
        language: "اللغة",
        appearance: "المظهر",
        dark: "داكن",
        light: "فاتح",

        thankYou: "شكراً لتعلّمك معنا!",
        closeTab: "يمكنك الآن إغلاق علامة التبويب هذه.",

        prayerNames: ["الفجر", "الظهر", "العصر", "المغرب", "العشاء"],

        questions: [
            {
                question: "كم عدد أركان الإسلام؟",
                answers: ["ثلاثة", "أربعة", "خمسة", "ستة"],
                explanation: "أركان الإسلام خمسة."
            },
            {
                question: "ما هو كتاب الإسلام المقدس؟",
                answers: ["التوراة", "القرآن الكريم", "الزبور", "الإنجيل"],
                explanation: "القرآن الكريم هو كتاب الإسلام."
            },
            {
                question: "كم عدد الصلوات المفروضة يومياً؟",
                answers: ["ثلاث", "أربع", "خمس", "ست"],
                explanation: "الصلوات المفروضة خمس صلوات يومياً."
            },
            {
                question: "في أي شهر يصوم المسلمون؟",
                answers: ["محرّم", "رمضان", "شوّال", "رجب"],
                explanation: "يصوم المسلمون في شهر رمضان."
            },
            {
                question: "إلى أي اتجاه يتجه المسلمون أثناء الصلاة؟",
                answers: ["القدس", "المدينة المنورة", "الكعبة", "جبل أُحد"],
                explanation: "يتجه المسلمون نحو الكعبة في مكة المكرمة."
            },
            {
                question: "من هو المَلَك الذي نزل بالوحي على النبي محمد؟",
                answers: ["ميكائيل", "جبريل", "إسرافيل", "مالك"],
                explanation: "نزل المَلَك جبريل بالوحي."
            },
            {
                question: "ما هو أول شهر في التقويم الهجري؟",
                answers: ["رمضان", "صفر", "محرّم", "رجب"],
                explanation: "محرّم هو أول شهر في التقويم الهجري."
            },
            {
                question: "في أي مدينة توجد الكعبة؟",
                answers: ["المدينة المنورة", "مكة المكرمة", "القدس", "القاهرة"],
                explanation: "تقع الكعبة في مكة المكرمة."
            }
        ],

        facts: [
            "ينقسم القرآن الكريم إلى 114 سورة.",
            "التقويم الهجري تقويم قمري.",
            "سورة الفاتحة هي أول سورة في القرآن الكريم.",
            "تقع الكعبة في مكة المكرمة.",
            "رمضان هو الشهر التاسع في التقويم الهجري."
        ]
    }
};

let currentLanguage = localStorage.getItem("chahin-language") || "en";

if (!translations[currentLanguage]) {
    currentLanguage = "en";
}

function t(key) {
    return translations[currentLanguage][key];
}


/* =================================
   APPLY LANGUAGE
================================= */

function applyLanguage() {
    const lang = translations[currentLanguage];

    document.documentElement.lang = currentLanguage;
    document.documentElement.dir =
        currentLanguage === "ar" ? "rtl" : "ltr";

    document.getElementById("theme-button").textContent = lang.theme;

    document.querySelector(".main-title").textContent = lang.title;
    document.querySelector(".subtitle").textContent = lang.subtitle;

    const cards = document.querySelectorAll(".menu-card");

    const cardTranslations = [
        [lang.quiz, lang.quizDesc],
        [lang.ai, lang.aiDesc],
        [lang.quran, lang.quranDesc],
        [lang.prayer, lang.prayerDesc],
        [lang.tasbih, lang.tasbihDesc],
        [lang.daily, lang.dailyDesc],
        [lang.settings, lang.settingsDesc],
        [lang.exit, lang.exitDesc]
    ];

    cards.forEach((card, index) => {
        const title = card.querySelector(".card-title");
        const description = card.querySelector(".card-description");

        title.textContent = cardTranslations[index][0];
        description.textContent = cardTranslations[index][1];
    });

    document.querySelectorAll("[data-home]").forEach(button => {
        button.textContent = lang.back;
    });

    document.querySelector("#quiz-screen h2").textContent = lang.quizTitle;
    document.querySelector("#ai-screen h2").textContent = lang.aiTitle;
    document.querySelector("#quran-screen h2").textContent = lang.quranTitle;
    document.querySelector("#prayer-screen h2").textContent = lang.prayerTitle;
    document.querySelector("#tasbih-screen h2").textContent = lang.tasbihTitle;
    document.querySelector("#daily-screen h2").textContent = lang.dailyTitle;
    document.querySelector("#settings-screen h2").textContent = lang.settingsTitle;

    document.getElementById("next-question").textContent = lang.next;
    document.getElementById("retry-quiz").textContent = lang.retry;

    document.querySelector("#ai-screen .panel p").textContent =
        lang.aiDescription;

    document.getElementById("ai-question").placeholder =
        lang.aiPlaceholder;

    document.getElementById("ask-ai").textContent = lang.ask;
    document.getElementById("ai-loading").textContent = lang.thinking;

    if (!aiAnswer.dataset.hasAnswer) {
        aiAnswer.textContent = lang.aiWaiting;
    }

    document.querySelector('label[for="surah-number"]').textContent =
        lang.surahNumber;

    document.getElementById("load-surah").textContent = lang.loadSurah;

    if (!document.getElementById("surah-name").textContent) {
        document.getElementById("quran-content").textContent =
            lang.chooseSurah;
    }

    document.querySelector('label[for="city"]').textContent = lang.city;
    document.querySelector('label[for="country"]').textContent = lang.country;

    document.getElementById("city").placeholder = lang.cityPlaceholder;
    document.getElementById("load-prayers").textContent = lang.getPrayers;

    if (!document.getElementById("prayer-results").dataset.loaded) {
        document.getElementById("prayer-results").textContent =
            lang.enterCity;
    }

    document.querySelector("#tasbih-screen .panel p").textContent =
        lang.tasbihDescription;

    document.getElementById("tasbih-add").textContent = lang.count;
    document.getElementById("tasbih-reset").textContent = lang.reset;

    document.getElementById("daily-fact").dataset.loaded = "";
    document.getElementById("new-fact").textContent = lang.another;

    document.querySelector('label[for="language-select"]').textContent =
        lang.language;

    document.querySelector('label[for="theme-select"]').textContent =
        lang.appearance;

    const themeOptions = document.getElementById("theme-select").options;
    themeOptions[0].textContent = lang.dark;
    themeOptions[1].textContent = lang.light;

    if (quizStarted && quizIndex < quizQuestions.length) {
        showQuestion();
    } else if (!quizStarted) {
        document.getElementById("question-number").textContent =
            `${lang.question} 1`;

        document.getElementById("quiz-score").textContent =
            `${lang.score}: 0`;
    }

    if (document.getElementById("daily-fact").dataset.loaded !== "yes") {
        showDailyFact();
    }
}


/* =================================
   SCREEN NAVIGATION
================================= */

const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {
    screens.forEach(screen => screen.classList.remove("active"));

    const selected = document.getElementById(screenId);
    if (selected) selected.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });

    if (screenId === "quiz-screen" && !quizStarted) {
        startQuiz();
    }
}

document.querySelectorAll("[data-screen]").forEach(button => {
    button.addEventListener("click", () => {
        showScreen(button.dataset.screen);
    });
});

document.querySelectorAll("[data-home]").forEach(button => {
    button.addEventListener("click", () => {
        showScreen("home-screen");
    });
});

document.getElementById("exit-button").addEventListener("click", () => {
    makeCatSad();

    setTimeout(() => {
        const lang = translations[currentLanguage];

        document.body.innerHTML =
            `<div style="text-align:center;padding:80px 20px;color:#ffd166;font-family:Arial;direction:${currentLanguage === "ar" ? "rtl" : "ltr"}">
                <h1>${lang.thankYou}</h1>
                <p>${lang.closeTab}</p>
            </div>`;
    }, 900);
});


/* =================================
   CAT MASCOT ANIMATION
================================= */

const cat = document.getElementById("cat");
const pupils = document.querySelectorAll(".pupil");

function moveCatEyes(x, y) {
    pupils.forEach(pupil => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angle = Math.atan2(y - centerY, x - centerX);
        const distance = 4;

        const pupilX = Math.cos(angle) * distance;
        const pupilY = Math.sin(angle) * distance;

        pupil.style.transform =
            `translate(${pupilX}px, ${pupilY}px)`;
    });
}

document.addEventListener("mousemove", event => {
    moveCatEyes(event.clientX, event.clientY);
});

document.addEventListener("touchmove", event => {
    if (event.touches.length > 0) {
        moveCatEyes(
            event.touches[0].clientX,
            event.touches[0].clientY
        );
    }
}, { passive: true });

function blinkCat() {
    const eyes = document.querySelectorAll(".eye");

    eyes.forEach(eye => {
        eye.style.height = "3px";
    });

    setTimeout(() => {
        eyes.forEach(eye => {
            eye.style.height = "29px";
        });
    }, 160);
}

function scheduleBlink() {
    const delay = 2500 + Math.random() * 3500;

    setTimeout(() => {
        blinkCat();
        scheduleBlink();
    }, delay);
}

scheduleBlink();

function makeCatSad() {
    if (!cat) return;

    cat.style.animation = "none";
    cat.style.transform = "translateY(5px)";

    const mouth = document.querySelector(".cat-mouth");

    if (mouth) {
        mouth.style.borderBottom = "none";
        mouth.style.borderTop = "2px solid #75413a";
    }
}


/* =================================
   THEME SETTINGS
================================= */

const themeButton = document.getElementById("theme-button");
const themeSelect = document.getElementById("theme-select");

function setTheme(theme) {
    document.body.classList.toggle("light-theme", theme === "light");

    if (themeSelect) {
        themeSelect.value = theme;
    }

    localStorage.setItem("chahin-theme", theme);
}

const savedTheme = localStorage.getItem("chahin-theme") || "dark";
setTheme(savedTheme);

themeButton.addEventListener("click", () => {
    const newTheme =
        document.body.classList.contains("light-theme") ? "dark" : "light";

    setTheme(newTheme);
});

themeSelect.addEventListener("change", event => {
    setTheme(event.target.value);
});


/* =================================
   QUIZ
================================= */

let quizIndex = 0;
let quizScore = 0;
let quizStarted = false;
let answerSelected = false;

const questionElement = document.getElementById("quiz-question");
const answersElement = document.getElementById("quiz-answers");
const feedbackElement = document.getElementById("quiz-feedback");
const nextButton = document.getElementById("next-question");
const retryButton = document.getElementById("retry-quiz");

function getQuizQuestions() {
    return translations[currentLanguage].questions;
}

function startQuiz() {
    quizIndex = 0;
    quizScore = 0;
    quizStarted = true;

    nextButton.classList.remove("hidden");
    retryButton.classList.add("hidden");

    showQuestion();
}

function showQuestion() {
    answerSelected = false;

    const lang = translations[currentLanguage];
    const question = getQuizQuestions()[quizIndex];

    document.getElementById("question-number").textContent =
        `${lang.question} ${quizIndex + 1} / ${quizQuestions.length}`;

    document.getElementById("quiz-score").textContent =
        `${lang.score}: ${quizScore}`;

    document.getElementById("quiz-progress").style.width =
        `${(quizIndex / quizQuestions.length) * 100}%`;

    questionElement.textContent = question.question;

    answersElement.innerHTML = "";
    feedbackElement.textContent = "";
    nextButton.disabled = true;

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer-option";
        button.textContent = answer;

        button.addEventListener("click", () => {
            selectAnswer(index, button);
        });

        answersElement.appendChild(button);
    });
}

function selectAnswer(index, selectedButton) {
    if (answerSelected) return;

    answerSelected = true;

    const question = getQuizQuestions()[quizIndex];
    const lang = translations[currentLanguage];

    const answerButtons =
        answersElement.querySelectorAll(".answer-option");

    answerButtons.forEach(button => {
        button.disabled = true;
    });

    if (index === quizQuestions[quizIndex].correct) {
        quizScore++;
        selectedButton.classList.add("correct");

        feedbackElement.textContent =
            lang.correct + " " + question.explanation;
    } else {
        selectedButton.classList.add("wrong");
        answerButtons[quizQuestions[quizIndex].correct].classList.add("correct");

        feedbackElement.textContent =
            lang.incorrect + " " + question.explanation;
    }

    document.getElementById("quiz-score").textContent =
        `${lang.score}: ${quizScore}`;

    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    if (!answerSelected) return;

    quizIndex++;

    if (quizIndex < quizQuestions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
});

function finishQuiz() {
    const lang = translations[currentLanguage];

    questionElement.textContent = lang.completed;
    answersElement.innerHTML = "";

    document.getElementById("quiz-progress").style.width = "100%";
    document.getElementById("question-number").textContent = lang.finished;

    feedbackElement.textContent =
        `${lang.finalScore} ${quizScore} / ${quizQuestions.length}`;

    nextButton.classList.add("hidden");
    retryButton.classList.remove("hidden");
}

retryButton.addEventListener("click", startQuiz);


/* =================================
   GEMINI AI
================================= */

const askButton = document.getElementById("ask-ai");
const aiQuestion = document.getElementById("ai-question");
const aiAnswer = document.getElementById("ai-answer");
const aiLoading = document.getElementById("ai-loading");

askButton.addEventListener("click", async () => {
    const question = aiQuestion.value.trim();
    const lang = translations[currentLanguage];

    if (!question) {
        aiAnswer.textContent = lang.emptyQuestion;
        aiAnswer.dataset.hasAnswer = "yes";
        return;
    }

    askButton.disabled = true;
    aiLoading.classList.remove("hidden");
    aiAnswer.textContent = "";
    aiAnswer.dataset.hasAnswer = "yes";

    try {
        const response = await fetch("/api/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: question,
                language: currentLanguage
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || lang.aiError);
        }

        aiAnswer.textContent = data.answer;

    } catch (error) {
        aiAnswer.textContent =
            lang.aiError + " " + error.message;
    } finally {
        askButton.disabled = false;
        aiLoading.classList.add("hidden");
    }
});


/* =================================
   QURAN
================================= */

document.getElementById("load-surah").addEventListener("click", async () => {
    const number = Number(document.getElementById("surah-number").value);
    const content = document.getElementById("quran-content");
    const name = document.getElementById("surah-name");
    const lang = translations[currentLanguage];

    if (!Number.isInteger(number) || number < 1 || number > 114) {
        content.textContent = lang.invalidSurah;
        return;
    }

    content.textContent = lang.loadingSurah;

    try {
        const response = await fetch(
            `https://api.alquran.cloud/v1/surah/${number}`
        );

        if (!response.ok) {
            throw new Error("Quran service unavailable.");
        }

        const data = await response.json();

        if (data.code !== 200 || !data.data) {
            throw new Error("Could not load this Surah.");
        }

        name.textContent =
            `${data.data.englishName} — ${data.data.name}`;

        content.textContent = data.data.ayahs
            .map(ayah => `${ayah.text} ۞ (${ayah.numberInSurah})`)
            .join(" ");

    } catch (error) {
        content.textContent = lang.quranError;
        console.error(error);
    }
});


/* =================================
   PRAYER TIMES
================================= */

document.getElementById("load-prayers").addEventListener("click", async () => {
    const city = document.getElementById("city").value.trim();
    const country = document.getElementById("country").value.trim();
    const results = document.getElementById("prayer-results");
    const lang = translations[currentLanguage];

    if (!city || !country) {
        results.textContent = lang.bothFields;
        return;
    }

    results.textContent = lang.loadingPrayers;
    results.dataset.loaded = "";

    try {
        const url =
            `https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}` +
            `&country=${encodeURIComponent(country)}&method=3`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Prayer service unavailable.");
        }

        const data = await response.json();

        if (data.code !== 200 || !data.data) {
            throw new Error("Could not find prayer times.");
        }

        const timings = data.data.timings;

        const prayerKeys = [
            "Fajr",
            "Dhuhr",
            "Asr",
            "Maghrib",
            "Isha"
        ];

        results.innerHTML = "";

        prayerKeys.forEach((key, index) => {
            const row = document.createElement("div");
            row.className = "prayer-row";

            const prayerName = document.createElement("span");
            prayerName.textContent = lang.prayerNames[index];

            const prayerTime = document.createElement("strong");
            prayerTime.textContent = timings[key];

            row.append(prayerName, prayerTime);
            results.appendChild(row);
        });

        results.dataset.loaded = "yes";

    } catch (error) {
        results.textContent = lang.prayerError;
        console.error(error);
    }
});


/* =================================
   TASBIH
================================= */

let tasbihCount = Number(localStorage.getItem("chahin-tasbih")) || 0;

const countDisplay = document.getElementById("tasbih-count");

function updateTasbih() {
    countDisplay.textContent = tasbihCount;

    localStorage.setItem(
        "chahin-tasbih",
        String(tasbihCount)
    );
}

updateTasbih();

document.getElementById("tasbih-add").addEventListener("click", () => {
    tasbihCount++;
    updateTasbih();
});

document.getElementById("tasbih-reset").addEventListener("click", () => {
    tasbihCount = 0;
    updateTasbih();
});


/* =================================
   DAILY KNOWLEDGE
================================= */

function showDailyFact() {
    const facts = translations[currentLanguage].facts;

    const index = Math.floor(Math.random() * facts.length);

    const factElement = document.getElementById("daily-fact");

    factElement.textContent = facts[index];
    factElement.dataset.loaded = "yes";
}

document.getElementById("new-fact").addEventListener("click", showDailyFact);


/* =================================
   LANGUAGE SELECTOR
================================= */

const languageSelect = document.getElementById("language-select");

languageSelect.value = currentLanguage;

languageSelect.addEventListener("change", event => {
    const selectedLanguage = event.target.value;

    if (!translations[selectedLanguage]) return;

    currentLanguage = selectedLanguage;

    localStorage.setItem("chahin-language", currentLanguage);

    applyLanguage();
});


/* =================================
   STARTUP
================================= */

applyLanguage();
showScreen("home-screen");
