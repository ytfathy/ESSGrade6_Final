/* =====================================================================
   INTERNATIONAL EDUCATION EGYPT — rewards configuration
   Every XP value, level, badge, message and timing is set here only.
   ===================================================================== */
window.GAME_CONFIG = {
  xp: {
    correct: 10,        // correct answer (each question earns this once)
    firstTry: 5,        // bonus when the first-ever answer to a question is correct
    lesson: 50,         // complete a lesson
    infographic: 15,    // read an infographic to the end
    quiz: 30,           // complete a quiz
    perfect: 50,        // score 100% in a quiz
    chapter: 100,       // complete a chapter / unit
    dailyGoal: 40,      // reach the daily goal
    badge: 20           // bonus for every badge (a badge can override with its own "xp")
  },
  dailyGoal: 10,                                   // different questions answered correctly in one day
  streakMilestones: {3: 30, 7: 100, 14: 150, 30: 300},   // day count: bonus XP
  infographicMinSeconds: 20,                       // minimum reading time before an infographic counts
  quizSecondsPerQuestion: 45,                      // recommended quiz time, used by "Speed Learner"
  popupMs: 4200,
  levels: [
    [1, "Beginner", 0], [2, "Explorer", 100], [3, "Learner", 250], [4, "Achiever", 500], [5, "Scholar", 1000],
    [6, "Expert", 2000], [7, "Champion", 3500], [8, "Master", 5000], [9, "Legend", 7500], [10, "Education Hero", 10000]
  ],
  cheers: {
    correct: ["Excellent!", "Amazing!", "Well done!", "Brilliant!", "You're doing great!", "Perfect answer!"],
    wrong: ["Not quite — let's look at the explanation.", "Almost there!", "Keep going!", "You can do it!", "Let's learn from this mistake!"]
  },
  categories: {learning: "Learning", quiz: "Quiz", consistency: "Consistency", special: "Special"},
  /* stat: lessons | chapters | quizzes | perfect | q90 | run | correct | days | streak | speed | explorer | xp */
  badges: [
    {id: "first-steps", cat: "learning", shape: "shield", icon: "🌱", colors: ["#34d399", "#0c9f91"], name: "First Steps", desc: "Complete your first lesson.", stat: "lessons", goal: 1},
    {id: "knowledge-seeker", cat: "learning", shape: "shield", icon: "🔎", colors: ["#60a5fa", "#3b6cf6"], name: "Knowledge Seeker", desc: "Complete 5 lessons.", stat: "lessons", goal: 5},
    {id: "book-explorer", cat: "learning", shape: "shield", icon: "📚", colors: ["#a78bfa", "#6c4cf1"], name: "Book Explorer", desc: "Complete 10 lessons.", stat: "lessons", goal: 10},
    {id: "chapter-master", cat: "learning", shape: "shield", icon: "🏛️", colors: ["#fbbf24", "#f97316"], name: "Chapter Master", desc: "Complete an entire chapter.", stat: "chapters", goal: 1},
    {id: "knowledge-champion", cat: "learning", shape: "shield", icon: "👑", colors: ["#f472b6", "#c026d3"], name: "Knowledge Champion", desc: "Complete 5 chapters.", stat: "chapters", goal: 5},
    {id: "first-victory", cat: "quiz", shape: "burst", icon: "🏁", colors: ["#4fd9c8", "#0c9f91"], name: "First Victory", desc: "Complete your first quiz.", stat: "quizzes", goal: 1},
    {id: "perfect-score", cat: "quiz", shape: "burst", icon: "💯", colors: ["#ff9d8a", "#ec4f3f"], name: "Perfect Score", desc: "Score 100% in a quiz.", stat: "perfect", goal: 1},
    {id: "quiz-champion", cat: "quiz", shape: "burst", icon: "🏆", colors: ["#ffc94a", "#f59e0b"], name: "Quiz Champion", desc: "Score 90% or above in 5 quizzes.", stat: "q90", goal: 5},
    {id: "unstoppable", cat: "quiz", shape: "burst", icon: "⚡", colors: ["#818cf8", "#4338ca"], name: "Unstoppable", desc: "Answer 10 questions correctly in a row.", stat: "run", goal: 10},
    {id: "sharp-mind", cat: "quiz", shape: "burst", icon: "🧠", colors: ["#f9a8d4", "#db2777"], name: "Sharp Mind", desc: "Answer 20 questions correctly.", stat: "correct", goal: 20},
    {id: "first-day", cat: "consistency", shape: "hex", icon: "☀️", colors: ["#fde68a", "#f59e0b"], name: "First Day", desc: "Complete your first learning session.", stat: "days", goal: 1},
    {id: "three-day-streak", cat: "consistency", shape: "hex", icon: "🔥", colors: ["#fdba74", "#ea580c"], name: "Three-Day Streak", desc: "Study for 3 consecutive days.", stat: "streak", goal: 3},
    {id: "weekly-warrior", cat: "consistency", shape: "hex", icon: "🛡️", colors: ["#93c5fd", "#2563eb"], name: "Weekly Warrior", desc: "Study for 7 consecutive days.", stat: "streak", goal: 7},
    {id: "monthly-master", cat: "consistency", shape: "hex", icon: "🗓️", colors: ["#c4b5fd", "#7c3aed"], name: "Monthly Master", desc: "Study for 30 consecutive days.", stat: "streak", goal: 30},
    {id: "speed-learner", cat: "special", shape: "round", icon: "🚀", colors: ["#67e8f9", "#0891b2"], name: "Speed Learner", desc: "Finish a quiz within the recommended time with at least 90%.", stat: "speed", goal: 1},
    {id: "perfectionist", cat: "special", shape: "round", icon: "💎", colors: ["#a5f3fc", "#6c4cf1"], name: "Perfectionist", desc: "Achieve 100% in 3 different quizzes.", stat: "perfect", goal: 3},
    {id: "explorer", cat: "special", shape: "round", icon: "🧭", colors: ["#86efac", "#16a34a"], name: "Explorer", desc: "Finish the infographic, keywords and quiz of one lesson.", stat: "explorer", goal: 1},
    {id: "super-learner", cat: "special", shape: "round", icon: "🌟", colors: ["#ffc94a", "#ff6b5e"], name: "Super Learner", desc: "Earn 1,000 XP.", stat: "xp", goal: 1000},
    {id: "legendary-student", cat: "special", shape: "round", icon: "🦸", colors: ["#1b1340", "#6c4cf1"], name: "Legendary Student", desc: "Earn 5,000 XP.", stat: "xp", goal: 5000}
  ]
};
