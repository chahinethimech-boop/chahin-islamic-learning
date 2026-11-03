
"use strict";

/* =================================
   SCREEN NAVIGATION
================================= */

const screens = document.querySelectorAll(".screen");

function showScreen(screenId) {
    screens.forEach(screen => screen.classList.remove("active"));

    const selected = document.getElementById(screenId);
    if (selected) selected.classList.add("active");

    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-screen]").forEach(button => {
    button.addEventListener("click", () => {
        showScreen(button.dataset.screen);

        if (button.dataset.screen === "quiz-screen" && !quizStarted) {
            startQuiz();
        }
    });
});

document.querySelectorAll("[data-home]").forEach(button => {
    button.addEventListener("click", () => showScreen("home-screen"));
});

document.getElementById("exit-button").addEventListener("click", () => {
    makeCatSad();

    setTimeout(() => {
        document.getElementById("home-screen").classList.remove("active");
        document.body.innerHTML =
            '<div style="text-align:center;padding:80px 20px;color:#ffd166;font-family:Arial">' +
            '<h1>Thank you for learning with us!</h1>' +
            '<p>You can close this browser tab now.</p></div>';
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

    if (themeSelect) themeSelect.value = theme;

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
   QUIZ DATA
================================= */

const quizQuestions = [
    {
        question: "How many pillars of Islam are there?",
        answers: ["Three", "Four", "Five", "Six"],
        correct: 2,
        explanation: "Islam has five pillars."
    },
    {
        question: "What is the holy book of Islam?",
        answers: ["The Torah", "The Quran", "The Psalms", "The Gospel"],
        correct: 1,
        explanation: "The Quran is the holy book of Islam."
    },
    {
        question: "How many daily obligatory prayers are there?",
        answers: ["Three", "Four", "Five", "Six"],
        correct: 2,
        explanation: "Muslims have five daily obligatory prayers."
    },
    {
        question: "In which month do Muslims fast?",
        answers: ["Muharram", "Ramadan", "Shawwal", "Rajab"],
        correct: 1,
        explanation: "Muslims fast during Ramadan."
    },
    {
        question: "What is the direction Muslims face during prayer?",
        answers: ["Jerusalem", "Madinah", "The Kaaba", "Mount Uhud"],
        correct: 2,
        explanation: "Muslims face the Kaaba in Makkah."
    },
    {
        question: "Which angel brought revelation to Prophet Muhammad?",
        answers: ["Mikail", "Jibril", "Israfil", "Malik"],
        correct: 1,
        explanation: "Angel Jibril brought revelation."
    },
    {
        question: "What is the first month of the Islamic calendar?",
        answers: ["Ramadan", "Safar", "Muharram", "Rajab"],
        correct: 2,
        explanation: "Muharram is the first month of the Islamic calendar."
    },
    {
        question: "Which city is home to the Kaaba?",
        answers: ["Madinah", "Makkah", "Jerusalem", "Cairo"],
        correct: 1,
        explanation: "The Kaaba is located in Makkah."
    }
];

let quizIndex = 0;
let quizScore = 0;
let quizStarted = false;
let answerSelected = false;

const questionElement = document.getElementById("quiz-question");
const answersElement = document.getElementById("quiz-answers");
const feedbackElement = document.getElementById("quiz-feedback");
const nextButton = document.getElementById("next-question");
const retryButton = document.getElementById("retry-quiz");

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

    const question = quizQuestions[quizIndex];

    document.getElementById("question-number").textContent =
        `Question ${quizIndex + 1} / ${quizQuestions.length}`;

    document.getElementById("quiz-score").textContent =
        `Score: ${quizScore}`;

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

    const question = quizQuestions[quizIndex];
    const answerButtons =
        answersElement.querySelectorAll(".answer-option");

    answerButtons.forEach(button => {
        button.disabled = true;
    });

    if (index === question.correct) {
        quizScore++;
        selectedButton.classList.add("correct");
        feedbackElement.textContent = "Correct! " + question.explanation;
    } else {
        selectedButton.classList.add("wrong");
        answerButtons[question.correct].classList.add("correct");
        feedbackElement.textContent = "Not quite. " + question.explanation;
    }

    document.getElementById("quiz-score").textContent =
        `Score: ${quizScore}`;

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
    questionElement.textContent = "Quiz completed!";
    answersElement.innerHTML = "";

    document.getElementById("quiz-progress").style.width = "100%";
    document.getElementById("question-number").textContent = "Finished";

    feedbackElement.textContent =
        `Your final score: ${quizScore} / ${quizQuestions.length}`;

    nextButton.classList.add("hidden");
    retryButton.classList.remove("hidden");
}

retryButton.addEventListener("click", startQuiz);


/* =================================
   GEMINI AI BACKEND CONNECTION
================================= */

const askButton = document.getElementById("ask-ai");
const aiQuestion = document.getElementById("ai-question");
const aiAnswer = document.getElementById("ai-answer");
const aiLoading = document.getElementById("ai-loading");

askButton.addEventListener("click", async () => {
    const question = aiQuestion.value.trim();

    if (!question) {
        aiAnswer.textContent = "Please write a question first.";
        return;
    }

    askButton.disabled = true;
    aiLoading.classList.remove("hidden");
    aiAnswer.textContent = "";

    try {
        const response = await fetch("/api/ask", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "The AI request failed.");
        }

        aiAnswer.textContent = data.answer;
    } catch (error) {
        aiAnswer.textContent =
            "Could not contact the AI service. Check that the Python server is running. " +
            error.message;
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

    if (!Number.isInteger(number) || number < 1 || number > 114) {
        content.textContent = "Enter a Surah number between 1 and 114.";
        return;
    }

    content.textContent = "Loading Surah...";

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
        content.textContent =
            "Unable to load the Quran right now. Check your internet connection.";
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

    if (!city || !country) {
        results.textContent = "Please enter both city and country.";
        return;
    }

    results.textContent = "Loading prayer times...";

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
        const prayers = [
            ["Fajr", timings.Fajr],
            ["Dhuhr", timings.Dhuhr],
            ["Asr", timings.Asr],
            ["Maghrib", timings.Maghrib],
            ["Isha", timings.Isha]
        ];

        results.innerHTML = "";

        prayers.forEach(([name, time]) => {
            const row = document.createElement("div");
            row.className = "prayer-row";

            const prayerName = document.createElement("span");
            prayerName.textContent = name;

            const prayerTime = document.createElement("strong");
            prayerTime.textContent = time;

            row.append(prayerName, prayerTime);
            results.appendChild(row);
        });

    } catch (error) {
        results.textContent =
            "Unable to load prayer times. Check the city and your internet connection.";
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
    localStorage.setItem("chahin-tasbih", String(tasbihCount));
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

const dailyFacts = [
    "The Quran is divided into 114 Surahs.",
    "The Islamic calendar is a lunar calendar.",
    "Al-Fatiha is the opening Surah of the Quran.",
    "The Kaaba is located in Makkah.",
    "Ramadan is the ninth month of the Islamic calendar."
];

function showDailyFact() {
    const index = Math.floor(Math.random() * dailyFacts.length);

    document.getElementById("daily-fact").textContent =
        dailyFacts[index];
}

showDailyFact();

document.getElementById("new-fact").addEventListener("click", showDailyFact);


/* =================================
   LANGUAGE SETTING
================================= */

const languageSelect = document.getElementById("language-select");

const savedLanguage = localStorage.getItem("chahin-language") || "en";
languageSelect.value = savedLanguage;

languageSelect.addEventListener("change", event => {
    localStorage.setItem("chahin-language", event.target.value);

    alert(
        "Language preference saved. Full translations will be added in a later update."
    );
});


/* =================================
   STARTUP
================================= */

showScreen("home-screen");
