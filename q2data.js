/* Quarter 2 content — sources: Essq2.pdf (textbook pages 26–38), G6+Q2.pdf (Quarter 2 booklet, PDF pages 2–38)
   and Charlemagne_Study_Guide.pdf (Lesson 8 panels whose page says "study guide").
   Single source of truth: the uploaded textbooks. Page numbers for Lessons 7–11 and Exploration Lessons 1–3 are G6+Q2.pdf pages. */
window.Q2 = {
  source: "Essq2.pdf (textbook pages 26–38) + G6+Q2.pdf + Charlemagne Study Guide",
  chapters: [{
    id: "rome",
    title: "Textbook Pages 26–38",
    subtitle: "Lesson 5 and Lesson 6",
    lessons: ["l5", "l6"]
  }, {
    id: "middle",
    title: "G6+Q2 Booklet",
    subtitle: "Lessons 7–11: The Early Middle Ages & the Vikings",
    lessons: ["l7", "l8", "l9", "l10", "l11"]
  }, {
    id: "explore",
    title: "G6+Q2 Booklet",
    subtitle: "Exploration Lessons 1–3: The Age of Exploration",
    lessons: ["x1", "x2", "x3"]
  }],
  lessons: {
  /* =====================================================================
     LESSON 5: ROMAN EMPIRE (pages 26–35)
     ===================================================================== */
  l5: {
    num: 5, title: "Roman Empire", fullTitle: "Lesson 5: Roman Empire", pages: "26–35", icon: "🏛️", color: "#6d4ed8",
    infographic: [
      { type: "hero", icon: "👑", title: "Lesson 5: Roman Empire",
        text: "From civil war to an empire that lasted hundreds of years — how Rome was ruled, how it traded, how it fought and how it grew." },

      { type: "timeline", title: "From Republic to Empire", icon: "⏳", page: "26, 29, 35", events: [
        { date: "c. 450 BCE", title: "The Twelve Tables", text: "Rome’s first written laws are posted in the Roman Forum." },
        { date: "44 BCE", title: "Julius Caesar assassinated", text: "His assassination led to civil war." },
        { date: "44 → 31 BCE", title: "13 years of struggle", text: "The Roman world suffered from an ongoing struggle among political rivals." },
        { date: "31 BCE", title: "Battle of Actium", text: "Octavian’s forces defeated Antony and Cleopatra’s fleet in a sea battle at Actium, in Greece." },
        { date: "Soon after", title: "Octavian becomes Augustus", text: "Sole ruler of Rome; takes the name Augustus Caesar and the title princeps (“first one”). The Roman Republic was over." },
        { date: "23 or 24 BCE", title: "Standard currency", text: "Augustus established a standard currency, or money, for the whole empire." },
        { date: "14 CE", title: "Death of Augustus", text: "Augustus reigned until his death. The empire he established would last for hundreds of years." }
      ]},

      { type: "versus", title: "Battling for Power after Caesar", icon: "⚔️", page: "26",
        left: { name: "Octavian", icon: "🦅", points: ["Caesar’s adoptive son", "His forces won the sea battle at Actium (31 BCE)", "Became sole ruler: Augustus Caesar, princeps (“first one”)", "Strong and wise → won widespread support"] },
        right: { name: "Marc Antony + Cleopatra", icon: "⛵", points: ["Antony had served as a general under Caesar", "Allied himself with Cleopatra, the Egyptian queen", "Their fleet was defeated at Actium, in Greece"] } },

      { type: "section", title: "The Early Latins", icon: "🌾", page: "27", color: "#0e8a8c", image: "q2img/mosaic.jpg", imageCaption: "Mosaic shown with “The Early Latins” in the textbook (p. 27)",
        cards: [
          { icon: "🏷️", title: "Who were they?", text: "The Latin people would become known as Romans." },
          { icon: "🤝", title: "Neighbors", text: "They often encountered their Etruscan and Greek neighbors. Both groups influenced Roman culture." },
          { icon: "🧑‍🌾", title: "Settlers", text: "Latin settlers were farmers and herders." },
          { icon: "🍇", title: "Crops", text: "Wheat, olives and grapes." },
          { icon: "🐑", title: "Animals raised", text: "Sheep, goats, cattle and pigs." },
          { icon: "🛖", title: "Villages", text: "A typical Latin village was made up of one-room huts and located on a hill." }
        ] },

      { type: "flow", title: "How the Latin Alphabet Travelled", icon: "🔤", page: "27",
        steps: [{ icon: "🏺", label: "Greeks", sub: "created it" }, { icon: "✍️", label: "Etruscans", sub: "borrowed & adapted it" }, { icon: "📜", label: "Latins (Romans)", sub: "borrowed it from the Etruscans" }] },

      { type: "split", title: "Greek Religion → Roman Religion", icon: "🏛️", page: "27", image: "q2img/athena.jpg", imageCaption: "Statue of Athena (textbook p. 27)",
        text: "The Romans adopted aspects of the Greek religion, giving the Greek gods Latin names.",
        highlight: { from: "Athena", fromLabel: "Greek goddess", to: "Minerva", toLabel: "Roman name" } },

      { type: "reasons", title: "Why Build the Village on a Hill?", icon: "⛰️", page: "27", center: "Hilltop village",
        items: [{ icon: "🌊", text: "Protected the village from flooding in the valleys" }, { icon: "👀", text: "Residents could see approaching enemies" }, { icon: "🏃", text: "Residents could escape to higher ground when in danger" }] },

      { type: "section", title: "Trade & Money", icon: "💰", page: "28–29", color: "#e36a1d", image: "q2img/cart.jpg", imageCaption: "Roman relief of a horse-drawn cart (textbook p. 28)",
        cards: [
          { icon: "🛣️", title: "Roads", text: "Augustus believed a network of roads across the empire was vital — for conquests and defense and, just as important, for trade." },
          { icon: "✨", title: "Wealth → culture", text: "The wealth that trade created allowed Roman culture to flourish." },
          { icon: "🌊", title: "Water routes", text: "Besides roads, the Mediterranean Sea and the empire’s major rivers served as essential trade routes." },
          { icon: "🌾", title: "Grain from Egypt", text: "Ships carried millions of sacks of grain from Egypt to Rome each year." },
          { icon: "🫒", title: "Provincial exports", text: "Each province produced its own exports. Example: Spain exported olive oil to other provinces." }
        ] },

      { type: "map", title: "Roman Trade Network in 180 CE", icon: "🗺️", page: "29", image: "q2img/trademap.jpg",
        legend: [{ sw: "#f2b3a0", text: "Roman Empire" }, { sw: "#9b1c1c", text: "Internal trade route" }, { sw: "#14532d", text: "External trade route" }],
        facts: ["Regions: Britain, Gaul (France), Germany, Spain, Greece, Asia Minor, Arabia, Egypt, Africa", "Cities: Londinium, Lugdunum, Arelate, Barcino, Rome, Carthage, Leptis Magna, Sirmium, Thessalonica, Byzantium, Trapezus, Antiocha, Tyrus, Alexandria", "Rome sits at the centre of the Mediterranean routes"] },

      { type: "coins", title: "Roman Coins & Currency", icon: "🪙", page: "29", image: "q2img/coins.jpg", imageCaption: "Roman coins (textbook p. 29)",
        steps: [
          { icon: "🏺", title: "Learned from the Greeks", text: "The Romans had learned about the use of coins from the Greeks." },
          { icon: "📅", title: "23 or 24 BCE", text: "Augustus established a standard currency, or money, for the whole empire." },
          { icon: "⚖️", title: "Fixed values", text: "He set a value for each kind of coin so that traders across the empire could use the same money." },
          { icon: "🥇", title: "Four metals", text: "Coins were made of gold, silver, bronze and copper." },
          { icon: "👤", title: "Portraits", text: "Julius Caesar issued coins stamped with his portrait; Augustus and later emperors continued this. Most coins show the emperor who ruled when they were minted." }
        ] },

      { type: "section", title: "The Roman Army", icon: "🛡️", page: "30–31", color: "#b91c1c", image: "q2img/soldier.jpg", imageCaption: "Roman soldier and armour (textbook p. 30)",
        cards: [
          { icon: "💪", title: "Source of power", text: "The Roman Empire’s power came from its well-trained army. Roman soldiers made conquest possible." },
          { icon: "🧭", title: "After conquest", text: "Troops kept conquered peoples under control and protected the empire’s borders." }
        ] },

      { type: "beforeafter", title: "Augustus Reforms the Army", icon: "🔁", page: "30",
        before: { label: "During the Republic", points: ["Soldiers were paid not with money", "…but with valuables taken from the people they conquered"] },
        after: { label: "Under Augustus", points: ["Regular pay", "A retirement program"] },
        result: ["More men made the army a career", "The army became more professional", "More loyal to Rome than to any one army leader"] },

      { type: "split", title: "The Battering Ram", icon: "🪵", page: "31", image: "q2img/ram.jpg", imageCaption: "Model of a battering ram (textbook p. 31)",
        steps: ["Mounted on a wheeled platform", "Pounded against the walls and gates of a city or fort", "…until they splintered", "Then the Roman army surged in"],
        text: "The sight of a huge battering ram struck fear in the hearts of Rome’s enemies." },

      { type: "government", title: "The Roman Republic: A Tripartite Government", icon: "⚖️", page: "31–32", image: "q2img/gov.jpg",
        intro: "The Roman Republic had a tripartite (or three-part) government. The three parts were set up to act as checks and balances on one another, ensuring that no one part had too much power.",
        parts: [
          { name: "Consuls", icon: "👥", color: "#16a34a", points: ["Took the place of a king", "Carried out laws, ran the government, judged court cases", "In war, one consul usually led the army in battle", "Two consuls → each could check, or limit, the other’s power", "Power balanced by the Senate and assemblies"] },
          { name: "Senate", icon: "🏛️", color: "#4f6bd8", points: ["Only male patricians could become senators", "Plebeians could not become senators"] },
          { name: "Assemblies", icon: "🗳️", color: "#e05252", points: ["Every male citizen belonged to one", "Existed under the kings; more powerful in the republic", "Several assemblies for different purposes", "Together: made the laws and elected the consuls", "Could declare war and try court cases"] }
        ],
        note: "The founders of the United States also designed a tripartite government with checks and balances." },

      { type: "compare", title: "Citizens of the Roman Republic", icon: "👥", page: "33", image: "q2img/patrician.jpg", imageCaption: "Roman woman (textbook p. 33)",
        left: { name: "Patricians", icon: "💎", points: ["The upper class", "Typically wealthy landowners", "Only male patricians could become senators", "Female patricians were citizens but could not vote or hold office"] },
        right: { name: "Plebeians", icon: "🧑‍🌾", points: ["All other citizens", "Usually poorer", "Had fewer rights", "Could not become senators", "Could vote in the assemblies"] },
        note: "Enslaved people and foreigners were not allowed to be citizens." },

      { type: "chain", title: "Why Life Was Unfair for Plebeians", icon: "⛓️", page: "34", image: "q2img/debt.jpg", imageCaption: "Cartoon from the textbook (p. 34)",
        steps: ["In the early years of the republic, Rome was often at war", "Plebeians had to fight in the army when needed", "Their farms and businesses were left without anyone to run them", "Many plebeians lost their homes and lands when enemies attacked", "Soldiers who came home often found themselves in debt", "Those who couldn’t pay were imprisoned or enslaved"], end: "The situation was unfair." },

      { type: "tables", title: "The Twelve Tables", icon: "📜", page: "35",
        intro: "Around 450 BCE, Rome’s first written laws were posted in the Roman Forum on tablets called the Twelve Tables.",
        items: [{ icon: "🏠", text: "Some laws stated citizens’ rights, such as the right to own property" }, { icon: "⚖️", text: "Other laws explained how trials should be conducted" }, { icon: "🚫", text: "…and described punishments for various crimes" }],
        why: "The Twelve Tables were created after the plebeians demanded that the laws be recorded." },

      { type: "reasons", title: "Rome Expands: Why Expansion Was Important", icon: "🗺️", page: "35", center: "Expansion", image: "q2img/enslaved.jpg",
        items: [{ icon: "🛡️", text: "Neighboring lands in Italy were controlled by enemies of Rome — taking control made Rome safer" }, { icon: "🌾", text: "Conquered lands had natural resources, including farmland needed to feed Rome’s growing population" }, { icon: "⛓️", text: "Romans could enslave defeated enemies to provide free labor" }, { icon: "💰", text: "Romans could collect taxes from conquered people" }] }
    ],

    keywords: [
      { term: "Julius Caesar", cat: "Person", star: true, def: "Roman ruler assassinated in 44 BCE; his assassination led to civil war. He issued coins stamped with his portrait." },
      { term: "Civil war", cat: "Concept", def: "The war that followed Caesar’s assassination; for 13 years the Roman world suffered from an ongoing struggle among political rivals." },
      { term: "Octavian", cat: "Person", star: true, def: "Caesar’s adoptive son. His forces won at Actium in 31 BCE and he became the sole ruler of Rome, taking the name Augustus Caesar." },
      { term: "Marc Antony", cat: "Person", def: "Had served as a general under Caesar; allied himself with Cleopatra. Defeated at Actium." },
      { term: "Cleopatra", cat: "Person", def: "The Egyptian queen who allied with Marc Antony; their fleet was defeated at Actium." },
      { term: "Actium", cat: "Place", def: "Place in Greece where, in 31 BCE, Octavian’s forces defeated Antony and Cleopatra’s fleet in a sea battle." },
      { term: "Augustus Caesar", cat: "Person", star: true, def: "The name Octavian took as sole ruler. Strong and wise, he won widespread support and reigned until his death in 14 CE." },
      { term: "Princeps", cat: "Term", star: true, def: "Title taken by Augustus meaning “first one”." },
      { term: "Roman Republic", cat: "Concept", star: true, def: "Rome’s government before the empire; it ended when Octavian became sole ruler. It had a tripartite government with checks and balances." },
      { term: "Latins", cat: "People", def: "The Latin people who would become known as Romans; early settlers were farmers and herders." },
      { term: "Etruscans", cat: "People", def: "Neighbors of the Romans who influenced Roman culture; the Latin alphabet was borrowed from them (they had adapted it from the Greeks)." },
      { term: "Greeks", cat: "People", def: "Neighbors who influenced Roman culture: source of the alphabet (via the Etruscans), religion and the use of coins." },
      { term: "Latin alphabet", cat: "Term", def: "Borrowed from the Etruscans, who had borrowed and adapted it from the Greeks." },
      { term: "Athena → Minerva", cat: "Example", def: "The Greek goddess Athena became Minerva to the Romans — an example of Greek gods given Latin names." },
      { term: "Hilltop village", cat: "Concept", def: "Latin villages of one-room huts built on a hill: safe from valley floods, able to see enemies and escape to higher ground." },
      { term: "Network of roads", cat: "Concept", def: "Augustus believed roads across the empire were vital for conquests, defense and trade." },
      { term: "Trade routes", cat: "Concept", def: "Roads, the Mediterranean Sea and the empire’s major rivers." },
      { term: "Export", cat: "Term", def: "Goods a province produced for others, e.g. Spain exported olive oil; Egypt sent grain to Rome." },
      { term: "Province", cat: "Term", def: "A region of the empire; each province produced its own exports." },
      { term: "Currency", cat: "Term", star: true, def: "Money. In 23 or 24 BCE Augustus established a standard currency for the whole empire." },
      { term: "Minted", cat: "Term", def: "Made (of coins). Most Roman coins show the emperor who ruled when they were minted." },
      { term: "Roman army", cat: "Concept", def: "Well-trained source of the empire’s power; made conquest possible, kept conquered peoples under control and protected the borders." },
      { term: "Army reforms", cat: "Concept", def: "Augustus gave soldiers regular pay and a retirement program, making the army more professional and loyal to Rome." },
      { term: "Battering ram", cat: "Term", def: "A huge ram mounted on a wheeled platform that pounded city or fort walls and gates until they splintered." },
      { term: "Tripartite", cat: "Term", star: true, def: "Three-part. The Republic’s three parts were the consuls, Senate and assemblies." },
      { term: "Checks and balances", cat: "Term", star: true, def: "Each part of government limits the others so no one part has too much power. The U.S. founders copied this idea." },
      { term: "Consuls", cat: "Term", star: true, def: "Two leaders who took the place of a king: carried out laws, ran the government, judged court cases; one usually led the army in war." },
      { term: "Check (verb)", cat: "Term", def: "To limit. Having two consuls meant each could check the other’s power." },
      { term: "Senate", cat: "Term", def: "One of the three parts of government; only male patricians could become senators." },
      { term: "Assemblies", cat: "Term", star: true, def: "Every male citizen belonged to one. Together they made laws, elected consuls, could declare war and try court cases." },
      { term: "Patricians", cat: "Term", star: true, def: "The upper class; typically wealthy landowners." },
      { term: "Plebeians", cat: "Term", star: true, def: "All other citizens; usually poorer with fewer rights; could vote in the assemblies but not become senators." },
      { term: "Citizens", cat: "Concept", def: "Patricians and plebeians. Enslaved people and foreigners were not allowed to be citizens." },
      { term: "Debt", cat: "Term", def: "Returning plebeian soldiers were often in debt; those who couldn’t pay were imprisoned or enslaved." },
      { term: "Twelve Tables", cat: "Term", star: true, def: "Rome’s first written laws, posted around 450 BCE in the Roman Forum after the plebeians demanded the laws be recorded." },
      { term: "Roman Forum", cat: "Place", def: "Where the Twelve Tables were posted." },
      { term: "Expansion", cat: "Concept", def: "Rome took neighboring lands for safety, natural resources (farmland), free labor and taxes." },
      { term: "44 BCE", cat: "Date", def: "Assassination of Julius Caesar." },
      { term: "31 BCE", cat: "Date", def: "Battle of Actium." },
      { term: "23 or 24 BCE", cat: "Date", def: "Augustus establishes a standard currency." },
      { term: "14 CE", cat: "Date", def: "Death of Augustus." },
      { term: "c. 450 BCE", cat: "Date", def: "The Twelve Tables are posted." },
      { term: "180 CE", cat: "Date", def: "Year shown on the map “Roman Trade Network in 180 CE”." }
    ],

    quiz: [
      // ---- Rise of Augustus (p. 26)
      ["Rise of Augustus", "In what year was the Roman ruler Julius Caesar assassinated?", "44 BCE", ["31 BCE", "14 CE", "450 BCE"], "The textbook says Julius Caesar was assassinated in 44 BCE."],
      ["Rise of Augustus", "What did the assassination of Julius Caesar lead to?", "Civil war", ["The Twelve Tables", "The end of the Roman Empire", "A standard currency"], "Caesar’s assassination in 44 BCE led to civil war."],
      ["Rise of Augustus", "For how many years after Caesar’s death did the Roman world suffer from a struggle among political rivals?", "13 years", ["3 years", "31 years", "44 years"], "Over the next 13 years the Roman world suffered from an ongoing struggle among political rivals."],
      ["Rise of Augustus", "Who was Caesar’s adoptive son?", "Octavian", ["Marc Antony", "Minerva", "A consul named Actium"], "Those battling for power included Caesar’s adoptive son Octavian."],
      ["Rise of Augustus", "Marc Antony had served under Caesar as a…", "General", ["Consul", "Senator", "Tax collector"], "Marc Antony had served as a general under Caesar."],
      ["Rise of Augustus", "Who did Antony eventually ally himself with?", "Cleopatra, the Egyptian queen", ["Octavian", "The Etruscans", "The Roman Senate"], "Antony eventually allied himself with Cleopatra, the Egyptian queen."],
      ["Rise of Augustus", "In what year did Octavian’s forces defeat Antony and Cleopatra’s fleet?", "31 BCE", ["44 BCE", "14 CE", "24 BCE"], "In 31 BCE Octavian’s forces defeated Antony and Cleopatra’s fleet."],
      ["Rise of Augustus", "What kind of battle was fought at Actium?", "A sea battle", ["A battle on a hilltop", "A siege with battering rams", "A desert battle in Egypt"], "Octavian’s forces defeated Antony and Cleopatra’s fleet in a sea battle at Actium."],
      ["Rise of Augustus", "Where is Actium?", "In Greece", ["In Egypt", "In Spain", "In Gaul"], "The sea battle was at Actium, in Greece."],
      ["Rise of Augustus", "What did Octavian become soon after the victory at Actium?", "The sole ruler of Rome", ["One of two consuls", "A senator", "A general under Antony"], "Soon after that victory, Octavian became the sole ruler of Rome."],
      ["Rise of Augustus", "What name did Octavian take?", "Augustus Caesar", ["Julius Caesar", "Marc Antony", "Minerva"], "He took the name Augustus Caesar."],
      ["Rise of Augustus", "What does the title princeps mean?", "“First one”", ["“King of kings”", "“Father of the army”", "“Great judge”"], "He took the title princeps (“first one”)."],
      ["Rise of Augustus", "What was over once Octavian became sole ruler?", "The Roman Republic", ["The Roman Empire", "Trade with Egypt", "The Roman army"], "The textbook states: “The Roman Republic was over.”"],
      ["Rise of Augustus", "Why did Augustus win widespread support?", "He was both strong and wise", ["He was elected by the plebeians", "He gave all land to the soldiers", "He defeated the Greeks"], "Because Augustus was both strong and wise, he won widespread support."],
      ["Rise of Augustus", "When did Augustus’s reign end?", "At his death in 14 CE", ["At Actium in 31 BCE", "In 44 BCE", "In 117 CE"], "Augustus reigned until his death in 14 CE."],
      ["Rise of Augustus", "How long would the empire Augustus established last?", "For hundreds of years", ["Only 13 years", "Until his death", "About 50 years"], "The empire he established would last for hundreds of years."],
      // ---- The Early Latins (p. 27)
      ["The Early Latins", "The Latin people would become known as…", "Romans", ["Etruscans", "Greeks", "Patricians"], "The Latin people would become known as Romans."],
      ["The Early Latins", "Which neighbors did the Latin people often encounter?", "Etruscans and Greeks", ["Egyptians and Spaniards", "Britons and Gauls", "Arabs and Germans"], "They often encountered their Etruscan and Greek neighbors."],
      ["The Early Latins", "What did both the Etruscans and Greeks do?", "Influenced Roman culture", ["Conquered Rome", "Built Rome’s roads", "Ruled the Roman Senate"], "Both groups influenced Roman culture."],
      ["The Early Latins", "From whom did the Latins borrow their alphabet?", "The Etruscans", ["The Egyptians", "The Gauls", "The Spanish"], "The Latin alphabet was borrowed from the Etruscans."],
      ["The Early Latins", "From whom had the Etruscans borrowed and adapted the alphabet?", "The Greeks", ["The Romans", "The Egyptians", "The Latins"], "The Etruscans had borrowed and adapted it from the Greeks."],
      ["The Early Latins", "Which shows the correct path of the alphabet?", "Greeks → Etruscans → Latins", ["Etruscans → Greeks → Latins", "Latins → Etruscans → Greeks", "Greeks → Latins → Etruscans"], "Greeks → Etruscans (borrowed & adapted) → Latins (borrowed from the Etruscans)."],
      ["The Early Latins", "How did the Romans adopt aspects of the Greek religion?", "They gave the Greek gods Latin names", ["They stopped worshipping all gods", "They made the emperor the only god", "They copied Egyptian gods"], "The Romans adopted aspects of Greek religion, giving the Greek gods Latin names."],
      ["The Early Latins", "The Greek goddess Athena became ___ to the Romans.", "Minerva", ["Cleopatra", "Princeps", "Augusta"], "The Greek goddess Athena became Minerva to the Romans."],
      ["The Early Latins", "What were the early Latin settlers?", "Farmers and herders", ["Sailors and traders", "Miners and metal workers", "Soldiers and generals"], "Settlers were farmers and herders."],
      ["The Early Latins", "Which crops did the Latin settlers grow?", "Wheat, olives and grapes", ["Rice, cotton and tea", "Corn, potatoes and sugar", "Dates, figs and barley"], "They grew crops including wheat, olives and grapes."],
      ["The Early Latins", "Which animals did the Latin settlers raise?", "Sheep, goats, cattle and pigs", ["Camels, horses and donkeys", "Chickens, ducks and geese", "Elephants and oxen"], "They raised sheep, goats, cattle and pigs."],
      ["The Early Latins", "A typical Latin village was made up of…", "One-room huts", ["Stone palaces", "Tents", "Tall apartment buildings"], "A typical Latin village was made up of one-room huts."],
      ["The Early Latins", "Where was a typical Latin village located?", "On a hill", ["In a valley", "On the coast", "Beside a desert"], "It was located on a hill."],
      ["The Early Latins", "Being on a hill protected the village from…", "Flooding in the valleys", ["Volcanoes", "Heavy taxes", "Sandstorms"], "This protected the village from flooding in the valleys."],
      ["The Early Latins", "Living on a hill also allowed the residents to…", "See approaching enemies", ["Trade by sea", "Grow rice in the valleys", "Mine silver"], "It allowed the residents to see approaching enemies."],
      ["The Early Latins", "What could hilltop residents do when in danger?", "Escape to higher ground", ["Sail away to Greece", "Hide in the valleys", "Call the Egyptian army"], "Residents could escape to higher ground when in danger."],
      // ---- Trade & Money (p. 28–29)
      ["Trade & Money", "Augustus believed building a network of roads was vital for…", "Conquests, defense and trade", ["Religion only", "Entertainment only", "The Senate only"], "Roads were vital not only for conquests and defense but — just as important — for trade."],
      ["Trade & Money", "What did the wealth that trade created allow?", "Roman culture to flourish", ["The Republic to return", "The army to shrink", "The Greeks to rule Rome"], "The wealth that trade created allowed Roman culture to flourish."],
      ["Trade & Money", "Besides roads, what served as essential trade routes?", "The Mediterranean Sea and the empire’s major rivers", ["Mountain passes only", "The Atlantic Ocean only", "Desert caravans only"], "Besides roads, the Mediterranean Sea and the empire’s major rivers served as essential trade routes."],
      ["Trade & Money", "Ships carried millions of sacks of grain to Rome each year from…", "Egypt", ["Spain", "Britain", "Greece"], "Ships carried millions of sacks of grain from Egypt to Rome each year."],
      ["Trade & Money", "What did ships carry from Egypt to Rome each year?", "Millions of sacks of grain", ["Barrels of olive oil", "Silver coins", "Marble statues"], "Ships carried millions of sacks of grain from Egypt to Rome."],
      ["Trade & Money", "What did each province of the empire produce?", "Its own exports", ["Its own currency", "Its own king", "Its own alphabet"], "Each province of the empire produced its own exports."],
      ["Trade & Money", "Which province exported olive oil to other provinces?", "Spain", ["Egypt", "Britain", "Germany"], "For example, Spain exported olive oil to other provinces."],
      ["Trade & Money", "What year does the textbook’s trade-network map show?", "180 CE", ["117 CE", "44 BCE", "14 CE"], "The map is titled “Roman Trade Network in 180 CE”."],
      ["Trade & Money", "On the map “Roman Trade Network in 180 CE”, what do the red lines show?", "Internal trade routes", ["External trade routes", "Rivers", "Borders of Egypt"], "The map key shows red = Internal Trade Route and dark green = External Trade Route."],
      ["Trade & Money", "On the 180 CE trade map, which city is shown in Egypt?", "Alexandria", ["Londinium", "Barcino", "Lugdunum"], "Alexandria is labelled in Egypt on the trade-network map."],
      ["Trade & Money", "On the 180 CE trade map, Londinium is in…", "Britain", ["Gaul", "Spain", "Asia Minor"], "Londinium is labelled in Britain."],
      ["Trade & Money", "On the trade map, Gaul is labelled with which modern name?", "France", ["Germany", "Spain", "Greece"], "The map labels “GAUL (FRANCE)”."],
      ["Trade & Money", "From whom had the Romans learned about the use of coins?", "The Greeks", ["The Etruscans", "The Egyptians", "The Gauls"], "The Romans had learned about the use of coins from the Greeks."],
      ["Trade & Money", "When did Augustus establish a standard currency for the whole empire?", "23 or 24 BCE", ["44 BCE", "14 CE", "212 CE"], "It was not until 23 or 24 BCE that Augustus established a standard currency."],
      ["Trade & Money", "Who established a standard currency for the whole empire?", "Augustus", ["Julius Caesar", "Marc Antony", "The assemblies"], "Augustus established a standard currency, or money, for the whole empire."],
      ["Trade & Money", "In the textbook, “currency” means…", "Money", ["A road", "A trade route", "A province"], "“A standard currency, or money, for the whole empire.”"],
      ["Trade & Money", "Why did Augustus set a value for each kind of coin?", "So traders across the empire could use the same money", ["So only soldiers could use coins", "To stop trade with Egypt", "To honor the Greek gods"], "He set a value for each kind of coin so that traders across the empire could use the same money."],
      ["Trade & Money", "Roman coins were made of…", "Gold, silver, bronze and copper", ["Iron, tin and lead", "Gold and wood", "Clay and stone"], "Coins were made of gold, silver, bronze and copper."],
      ["Trade & Money", "Who had issued coins stamped with his own portrait?", "Julius Caesar", ["Marc Antony", "Cleopatra", "A Greek king"], "Julius Caesar had issued coins stamped with his portrait; Augustus continued this practice."],
      ["Trade & Money", "Most Roman coins display…", "The image of the emperor who ruled when they were minted", ["A map of Rome", "The Twelve Tables", "The goddess Minerva only"], "Most Roman coins display the image of the emperor who ruled at the time they were minted."],
      // ---- The Roman Army (p. 30–31)
      ["The Roman Army", "Where did the Roman Empire’s power come from?", "Its well-trained army", ["Its large farms", "Its Greek allies", "Its coins"], "The Roman Empire’s power came from its well-trained army."],
      ["The Roman Army", "Roman soldiers made ___ possible.", "Conquest", ["Inflation", "The Twelve Tables", "Civil war"], "Roman soldiers made conquest possible."],
      ["The Roman Army", "Once lands were captured, what did Roman troops do?", "Kept conquered peoples under control and protected the borders", ["Returned the lands to their owners", "Went home to farm", "Joined the Senate"], "Troops kept conquered peoples under control and protected the empire’s borders."],
      ["The Roman Army", "During the republic, how were soldiers paid?", "With valuables taken from the people they conquered", ["With regular money", "With farmland in Italy", "With grain from Egypt"], "Soldiers had been paid not with money, but with valuables taken from the people they conquered."],
      ["The Roman Army", "What did Augustus give soldiers?", "Regular pay and a retirement program", ["Land in Egypt", "Seats in the Senate", "Citizenship only"], "He gave soldiers regular pay and created a retirement program for them."],
      ["The Roman Army", "What was one result of Augustus’s army reforms?", "More men made the army a career", ["Fewer men joined the army", "The army was disbanded", "Soldiers lost their pay"], "Because of these reforms, more men made the army a career."],
      ["The Roman Army", "After the reforms, the army became more professional and more loyal to…", "Rome than to any one army leader", ["Their own generals", "Egypt", "The plebeians"], "The army became more professional — and more loyal to Rome than to any one army leader."],
      ["The Roman Army", "What was a battering ram mounted on?", "A wheeled platform", ["A ship", "A horse", "A stone tower"], "The ram was mounted on a wheeled platform."],
      ["The Roman Army", "What did the battering ram pound against?", "The walls and gates of a city or fort", ["Enemy ships", "Roman roads", "Farm huts on hills"], "The ram pounded against the walls and gates of a city or fort until they splintered."],
      ["The Roman Army", "What happened after the walls and gates splintered?", "The Roman army surged in", ["The army retreated", "The enemy surrendered peacefully", "The ram was burned"], "Then the Roman army surged in."],
      ["The Roman Army", "What effect did the sight of a huge battering ram have?", "It struck fear in the hearts of Rome’s enemies", ["It made Rome’s enemies laugh", "It scared Roman soldiers", "It had no effect"], "The sight of a huge battering ram struck fear in the hearts of Rome’s enemies."],
      // ---- The Roman Republic (p. 31–34)
      ["The Roman Republic", "What does “tripartite” mean?", "Three-part", ["Two-part", "Four-part", "One ruler"], "A tripartite (or three-part) government."],
      ["The Roman Republic", "What were the three parts of the Roman Republic’s government?", "Consuls, Senate and assemblies", ["King, army and priests", "Patricians, plebeians and slaves", "Emperor, consuls and generals"], "The three parts were the consuls, Senate and assemblies."],
      ["The Roman Republic", "Why were the three parts set up as checks and balances?", "To ensure that no one part had too much power", ["To make the consuls kings", "To let the army rule", "To collect more taxes"], "They acted as checks and balances, ensuring that no one part had too much power."],
      ["The Roman Republic", "The founders of which country also designed a tripartite government with checks and balances?", "The United States", ["Egypt", "Greece", "Spain"], "The founders of the United States also designed a tripartite government with checks and balances."],
      ["The Roman Republic", "The consuls took the place of…", "A king", ["The Senate", "The assemblies", "The army"], "The consuls took the place of a king."],
      ["The Roman Republic", "Which were jobs of the consuls?", "Carrying out laws, running the government and judging court cases", ["Making all laws and electing senators", "Collecting grain from Egypt", "Writing the Twelve Tables alone"], "Consuls carried out laws, ran the government and judged court cases."],
      ["The Roman Republic", "In times of war, what did one consul usually do?", "Led the army in battle", ["Ran away to Greece", "Closed the assemblies", "Became king"], "In times of war, one consul usually led the army in battle."],
      ["The Roman Republic", "The consuls’ power was balanced by…", "The Senate and assemblies", ["The emperor", "The army generals", "The Greeks"], "The consuls’ power was balanced by the power of the Senate and assemblies."],
      ["The Roman Republic", "Why was having two consuls important?", "Each consul could check, or limit, the other’s power", ["They could rule as two kings", "One could ignore the Senate", "It doubled the taxes"], "Having two consuls meant each consul could check, or limit, the other’s power."],
      ["The Roman Republic", "In the textbook, to “check” power means to…", "Limit it", ["Increase it", "Write it down", "Count it"], "“Each consul could check, or limit, the other’s power.”"],
      ["The Roman Republic", "Who belonged to one of the assemblies?", "Every male citizen of Rome", ["Only patricians", "Only senators", "Enslaved people and foreigners"], "Every male citizen of Rome belonged to one of the assemblies."],
      ["The Roman Republic", "When had the assemblies first existed?", "Under the kings", ["Only after Augustus", "After 212 CE", "After the Twelve Tables"], "The assemblies had existed under the kings, but became more powerful in the republic."],
      ["The Roman Republic", "How did the assemblies change in the republic?", "They became more powerful", ["They were abolished", "They lost all power", "They became the army"], "They became more powerful in the republic."],
      ["The Roman Republic", "Together, what did the assemblies do?", "Made the laws for Rome and elected the consuls", ["Chose the emperor", "Minted coins", "Built the roads"], "Together, the assemblies made the laws for Rome and elected the consuls."],
      ["The Roman Republic", "What else could the assemblies do?", "Declare war and try court cases", ["Choose senators from plebeians", "Set coin values", "Lead the army in battle"], "The assemblies could also declare war and try court cases."],
      ["The Roman Republic", "How many assemblies were there?", "Several, for different purposes", ["Only one", "Exactly two", "Twelve"], "There were several assemblies for different purposes."],
      ["The Roman Republic", "What were the two types of citizens in the Roman Republic?", "Patricians and plebeians", ["Consuls and senators", "Latins and Etruscans", "Soldiers and farmers"], "There were two types of citizens: patricians and plebeians."],
      ["The Roman Republic", "Who were the patricians?", "The upper class, typically wealthy landowners", ["Poor farmers with fewer rights", "Enslaved people", "Foreign traders"], "Patricians were the upper class. They were typically wealthy landowners."],
      ["The Roman Republic", "Who were the plebeians?", "All other citizens, usually poorer with fewer rights", ["Wealthy landowners", "Senators only", "Foreigners"], "All other citizens were plebeians, who were usually poorer and had fewer rights."],
      ["The Roman Republic", "Who could become senators?", "Only male patricians", ["Any citizen", "Plebeians only", "Female patricians"], "Only male patricians could become senators."],
      ["The Roman Republic", "What was true of female patricians?", "They were citizens but could not vote or hold office", ["They could become senators", "They were not citizens", "They led the assemblies"], "Female patricians were considered citizens, but they could not vote or hold office."],
      ["The Roman Republic", "What could plebeians do?", "Vote in the assemblies", ["Become senators", "Become consuls only", "Nothing at all"], "Plebeians could not become senators, but they could vote in the assemblies."],
      ["The Roman Republic", "Who was NOT allowed to be a citizen?", "Enslaved people and foreigners", ["Plebeians", "Female patricians", "Male patricians"], "Enslaved people and foreigners were not allowed to be citizens."],
      ["The Roman Republic", "In the early years of the republic, Rome was…", "Often at war", ["Always at peace", "Ruled by Augustus", "Part of Egypt"], "In the early years of the republic, Rome was often at war."],
      ["The Roman Republic", "Why were plebeians’ farms and businesses left without anyone to run them?", "The plebeians had to fight in the army when needed", ["They moved to Egypt", "They became senators", "They were too wealthy to work"], "Plebeians had to fight in the army when needed, leaving their farms and businesses without anyone to run them."],
      ["The Roman Republic", "Many plebeians lost their homes and lands when…", "Enemies attacked", ["The Senate took them", "Floods hit the hills", "They sold them to Greeks"], "Many plebeians lost their homes and lands when enemies attacked."],
      ["The Roman Republic", "Soldiers who came home often found themselves…", "In debt", ["Rich", "Elected consul", "Made into patricians"], "Soldiers who came home often found themselves in debt."],
      ["The Roman Republic", "What happened to plebeians who couldn’t pay their debts?", "They were imprisoned or enslaved", ["They became senators", "Their debts were forgiven", "They were sent to Greece"], "Those who couldn’t pay were imprisoned or enslaved."],
      ["The Roman Republic", "How does the textbook describe the plebeians’ situation?", "Unfair", ["Fair", "Peaceful", "Wealthy"], "“The situation was unfair.”"],
      // ---- The Twelve Tables (p. 35)
      ["The Twelve Tables", "Around when were Rome’s first written laws posted?", "Around 450 BCE", ["44 BCE", "31 BCE", "212 CE"], "Around 450 BCE, Rome’s first written laws were posted."],
      ["The Twelve Tables", "Where were Rome’s first written laws posted?", "In the Roman Forum", ["At Actium", "In Alexandria", "In the Senate only"], "They were posted in the Roman Forum."],
      ["The Twelve Tables", "What were the tablets with Rome’s first written laws called?", "The Twelve Tables", ["The Princeps", "The Assemblies", "The Ten Laws"], "The tablets were called the Twelve Tables."],
      ["The Twelve Tables", "Which citizens’ right is given as an example in the Twelve Tables?", "The right to own property", ["The right to become emperor", "The right to free grain", "The right to avoid taxes"], "Some laws stated citizens’ rights, such as the right to own property."],
      ["The Twelve Tables", "What did other laws in the Twelve Tables explain?", "How trials should be conducted and punishments for crimes", ["How to build roads", "How to mint coins", "How to train soldiers"], "Other laws explained how trials should be conducted and described punishments for various crimes."],
      ["The Twelve Tables", "Why were the Twelve Tables created?", "The plebeians demanded that the laws be recorded", ["Augustus ordered it", "The Greeks requested it", "The consuls wanted more power"], "The Twelve Tables were created after the plebeians demanded that the laws be recorded."],
      // ---- Rome Expands (p. 35)
      ["Rome Expands", "Who controlled the neighboring lands in Italy?", "Enemies of Rome", ["The Egyptians", "Roman senators", "The Greeks of Athens"], "The neighboring lands in Italy were controlled by enemies of Rome."],
      ["Rome Expands", "How did taking control of neighboring lands help Rome?", "It made Rome safer", ["It ended the Republic", "It lowered taxes", "It caused inflation"], "Taking control of those lands made Rome safer."],
      ["Rome Expands", "Which natural resource in conquered lands helped feed Rome’s growing population?", "Farmland", ["Silver mines", "Forests", "Seaports"], "Conquered lands had natural resources, including farmland needed to feed Rome’s growing population."],
      ["Rome Expands", "Why did the Romans enslave their defeated enemies?", "To provide free labor", ["To make them citizens", "To make them senators", "To send them to Egypt"], "The Romans could enslave their defeated enemies to provide free labor."],
      ["Rome Expands", "What could Rome collect from conquered people?", "Taxes", ["Votes", "Alphabets", "Gods"], "Romans could collect taxes from conquered people."],
      ["Rome Expands", "Which is NOT a reason for expansion given in the textbook?", "To spread the Latin alphabet", ["To make Rome safer", "To gain farmland", "To collect taxes"], "The reasons given are safety, natural resources (farmland), free labor and taxes."]
    ]
  },

  /* =====================================================================
     LESSON 6: THE DECLINE OF THE ROMAN EMPIRE (pages 36–38)
     ===================================================================== */
  l6: {
    num: 6, title: "The Decline of the Roman Empire", fullTitle: "Lesson 6: The Decline of the Roman Empire", pages: "36–38", icon: "🏚️", color: "#e36a1d",
    infographic: [
      { type: "hero", icon: "📉", title: "Lesson 6: The Decline of the Roman Empire",
        text: "At its height in 117 CE the empire was huge — but taxes, size, money problems and unrest made life harder and weakened Rome." },

      { type: "extent", title: "The Empire at Its Height — 117 CE", icon: "🌍", page: "36–37", image: "q2img/map117.jpg",
        dirs: [{ d: "West", t: "As far as the Atlantic Ocean" }, { d: "North", t: "As far as what is now England" }, { d: "East", t: "As far as places that are now part of Iraq" }],
        facts: ["Map key: purple = Roman lands", "Continents: Europe, Africa, Asia; Britain in the north-west", "Cities: Rome, Athens, Byzantium, Antioch, Jerusalem, Alexandria, Cyrene, Carthage, Zama, New Carthage (Cartagena)", "Rivers: Tagus, Danube, Nile, Tigris, Euphrates; mountains: the Alps", "Seas: Mediterranean, Black, Caspian, Red; Persian Gulf; Atlantic Ocean"] },

      { type: "chain", title: "Taxes, Citizenship and Unrest", icon: "🧾", page: "36",
        steps: ["All citizens had to pay taxes", "212 CE: to raise more tax money, the government gave citizenship to all free people living in the empire", "Soon the rights of citizenship became weaker", "Dishonest leaders gave more rights to wealthy citizens and took rights away from poorer citizens", "This made people angry and caused social unrest", "Problems caused news to travel slowly between the provinces and the city of Rome"], end: "Many Romans started to lose respect for their government." },

      { type: "tree", title: "Problem: The Empire’s Vast Size", icon: "📏", page: "37", root: "Vast size",
        branches: [
          { icon: "🛡️", title: "Large army needed", text: "To protect thousands of miles of borders" },
          { icon: "🧾", title: "Heavy taxes", text: "Citizens had to pay taxes to support this army" },
          { icon: "🚜", title: "Farmers forced off farms", text: "Many could not afford the heavy taxes. Some sold farms to large landowners; others turned to robbery or joined invading armies" },
          { icon: "🏹", title: "Disloyal frontier soldiers", text: "Soldiers defending the frontiers, or borderlands, felt little loyalty to the empire — they supported their generals, who often acted independently of Rome’s government" }
        ] },

      { type: "inflation", title: "Changing Ways of Life: How Inflation Happened", icon: "📈", page: "38",
        steps: [
          { icon: "🗺️", text: "No new lands were being conquered → wealth no longer flowed into the empire" },
          { icon: "🪙", text: "A shortage of silver, the main metal used in Roman coins" },
          { icon: "⚗️", text: "To make new coins, the government mixed silver with less valuable metals" },
          { icon: "🏪", text: "Merchants knew the new coins were not as valuable, so they raised their prices" },
          { icon: "📈", text: "This led to INFLATION" }
        ],
        def: { term: "Inflation", text: "A rise in prices, caused by a decrease in the value of money." } },

      { type: "cards", title: "Life Became Much Harder for Ordinary Citizens", icon: "😟", page: "38",
        cards: [
          { icon: "🍞", title: "Food prices", text: "The price of food rose dramatically, causing more difficulties for ordinary people." },
          { icon: "🏫", title: "School", text: "Only the wealthiest families could afford to send their kids to school." },
          { icon: "🌀", title: "Political chaos", text: "Political chaos spread." },
          { icon: "🚚", title: "Food shortages", text: "Invading armies on the move made it hard to get food from the countryside to Rome’s cities, resulting in general food shortages." }
        ] }
    ],

    keywords: [
      { term: "117 CE", cat: "Date", star: true, def: "The Roman Empire was at the height of its glory." },
      { term: "Extent of the empire (117 CE)", cat: "Place", def: "West to the Atlantic Ocean, north to what is now England, east to places now part of Iraq." },
      { term: "Taxes", cat: "Term", def: "All citizens had to pay taxes; heavy taxes supported the large army." },
      { term: "212 CE", cat: "Date", star: true, def: "To raise more tax money, the government gave citizenship to all free people living in the empire." },
      { term: "Citizenship", cat: "Term", def: "Given to all free people in 212 CE; soon its rights became weaker." },
      { term: "Dishonest leaders", cat: "Concept", def: "Gave more rights to wealthy citizens and took rights away from poorer citizens." },
      { term: "Social unrest", cat: "Term", star: true, def: "Anger among people caused by unfair treatment of poorer citizens." },
      { term: "Slow news", cat: "Concept", def: "Problems caused news to travel slowly between the provinces and the city of Rome." },
      { term: "Loss of respect", cat: "Concept", def: "Many Romans started to lose respect for their government." },
      { term: "Vast size", cat: "Concept", star: true, def: "One problem facing the empire; it needed a large army to protect thousands of miles of borders." },
      { term: "Large landowners", cat: "Term", def: "Some farmers who could not pay heavy taxes sold their farms to them." },
      { term: "Robbery / invading armies", cat: "Concept", def: "Some farmers forced off their land turned to robbery or joined invading armies." },
      { term: "Frontiers", cat: "Term", star: true, def: "Borderlands. Soldiers defending them felt little loyalty to the empire." },
      { term: "Generals", cat: "Term", def: "Frontier soldiers supported their generals, who often acted independently of Rome’s government." },
      { term: "Ordinary citizens", cat: "Concept", def: "Life became much harder for them during the decline of Rome." },
      { term: "Silver", cat: "Term", star: true, def: "The main metal used in Roman coins; there was a shortage of it." },
      { term: "Less valuable metals", cat: "Term", def: "Mixed with silver by the government to make new coins." },
      { term: "Merchants", cat: "Term", def: "Raised their prices because they knew the new coins were not as valuable." },
      { term: "Inflation", cat: "Term", star: true, def: "A rise in prices, caused by a decrease in the value of money." },
      { term: "Food prices", cat: "Concept", def: "Rose dramatically, causing more difficulties for ordinary people." },
      { term: "Education", cat: "Concept", def: "Only the wealthiest families could afford to send their kids to school." },
      { term: "Political chaos", cat: "Term", def: "Spread across the empire during the decline." },
      { term: "Food shortages", cat: "Term", def: "Invading armies on the move made it hard to get food from the countryside to Rome’s cities." }
    ],

    quiz: [
      ["The Empire at Its Height", "In what year was the Roman Empire at the height of its glory?", "117 CE", ["212 CE", "14 CE", "180 CE"], "The Roman Empire was at the height of its glory in 117 CE."],
      ["The Empire at Its Height", "In 117 CE, how far west did the empire’s territory stretch?", "As far as the Atlantic Ocean", ["As far as the Caspian Sea", "Only to Italy", "As far as Iraq"], "Its territory stretched as far west as the Atlantic Ocean."],
      ["The Empire at Its Height", "In 117 CE, how far north did the empire extend?", "As far as what is now England", ["As far as the Black Sea", "Only to the Alps", "As far as Egypt"], "It stretched as far north as what is now England."],
      ["The Empire at Its Height", "In 117 CE, how far east did the empire extend?", "As far as places that are now part of Iraq", ["As far as the Atlantic Ocean", "Only to Greece", "As far as Spain"], "It extended as far east as places that are now part of Iraq."],
      ["The Empire at Its Height", "On the map “Roman Empire 117 CE”, what does the purple colour show?", "Roman lands", ["Trade routes", "Seas", "Enemy lands"], "The map key shows purple = Roman lands."],
      ["The Empire at Its Height", "On the 117 CE map, which river flows through Egypt?", "The Nile River", ["The Danube River", "The Tagus River", "The Tigris River"], "The Nile River is labelled in Egypt."],
      ["The Empire at Its Height", "On the 117 CE map, which two rivers are shown in the east of the empire?", "The Tigris and Euphrates", ["The Nile and Tagus", "The Danube and Nile", "The Tagus and Danube"], "The Tigris River and Euphrates River are labelled in the east."],
      ["The Empire at Its Height", "On the 117 CE map, which mountains are labelled north of Italy?", "The Alps", ["The Andes", "The Himalayas", "The Atlas"], "The Alps are labelled on the map."],
      ["The Empire at Its Height", "On the 117 CE map, New Carthage is also called…", "Cartagena", ["Carthage", "Zama", "Cyrene"], "The map labels “New Carthage (Cartagena)”."],
      ["The Empire at Its Height", "On the 117 CE map, which body of water lies north-east of Greece by Byzantium?", "The Black Sea", ["The Red Sea", "The Persian Gulf", "The Atlantic Ocean"], "The Black Sea is labelled beside Byzantium."],
      ["Taxes & Citizenship", "Who had to pay taxes in the Roman Empire?", "All citizens", ["Only patricians", "Only soldiers", "Only foreigners"], "All citizens had to pay taxes."],
      ["Taxes & Citizenship", "What happened in 212 CE?", "Citizenship was given to all free people living in the empire", ["Augustus died", "The Twelve Tables were posted", "The empire reached its height"], "In 212 CE the government gave citizenship to all free people living in the empire."],
      ["Taxes & Citizenship", "Why did the government give citizenship to all free people in 212 CE?", "To raise more tax money", ["To end the army", "To stop inflation", "To reward the generals"], "It was done to raise more tax money."],
      ["Taxes & Citizenship", "What soon happened to the rights of citizenship?", "They became weaker", ["They became stronger", "They stayed the same", "They were given to enslaved people"], "Soon the rights of citizenship became weaker."],
      ["Taxes & Citizenship", "What did dishonest leaders do?", "Gave more rights to wealthy citizens and took rights from poorer citizens", ["Gave more rights to poorer citizens", "Removed all taxes", "Gave land to every farmer"], "Dishonest leaders gave more rights to wealthy citizens and took rights away from poorer citizens."],
      ["Taxes & Citizenship", "What did the unfair treatment of citizens cause?", "Anger and social unrest", ["Peace and wealth", "Lower prices", "More schools"], "This made people angry and caused social unrest."],
      ["Taxes & Citizenship", "Problems in the empire caused news to…", "Travel slowly between the provinces and Rome", ["Travel faster by ship", "Stop completely", "Be written on coins"], "Problems caused news to travel slowly between the provinces and the city of Rome."],
      ["Taxes & Citizenship", "What did many Romans start to lose?", "Respect for their government", ["Their alphabet", "Their roads", "Their Greek gods"], "Many Romans started to lose respect for their government."],
      ["Vast Size", "What was one problem facing the Roman Empire?", "Its vast size", ["Its small army", "Too much silver", "Too few taxes"], "One problem facing the Roman Empire was its vast size."],
      ["Vast Size", "Why was a large army needed?", "To protect thousands of miles of borders", ["To collect grain from Egypt", "To build schools", "To run the assemblies"], "A large army was needed to protect thousands of miles of borders."],
      ["Vast Size", "Why did citizens have to pay taxes, according to this section?", "To support the army", ["To build hilltop villages", "To pay the Greeks", "To buy silver from Spain"], "Citizens had to pay taxes to support this army."],
      ["Vast Size", "What happened to many farmers who could not afford the heavy taxes?", "They were forced to leave their farms", ["They became senators", "They joined the Senate", "They received free land"], "Many farmers could not afford the heavy taxes and were forced to leave their farms."],
      ["Vast Size", "To whom did some farmers sell their farms?", "Large landowners", ["The army", "Merchants in Egypt", "The emperor"], "Some sold them to large landowners."],
      ["Vast Size", "What did other farmers who left their farms do?", "Turned to robbery or joined invading armies", ["Became teachers", "Moved to Britain to farm", "Became consuls"], "Others turned to robbery or joined invading armies."],
      ["Vast Size", "In the textbook, “frontiers” means…", "Borderlands", ["Capital cities", "Trade routes", "Farmlands"], "“Soldiers defending the frontiers, or borderlands…”"],
      ["Vast Size", "How did soldiers defending the frontiers feel about the empire?", "They felt little loyalty to it", ["They were very loyal", "They wanted to become emperor", "They wanted lower taxes for Rome"], "Even soldiers defending the frontiers felt little loyalty to the empire."],
      ["Vast Size", "Whom did the frontier soldiers support instead?", "Their generals", ["The Senate", "The plebeians", "The merchants"], "Instead, they supported their generals."],
      ["Vast Size", "How did the generals often act?", "Independently of Rome’s government", ["Exactly as the Senate ordered", "As judges in court cases", "As tax collectors in Rome"], "The generals often acted independently of Rome’s government."],
      ["Changing Ways of Life", "For whom did life become much harder during the decline of Rome?", "Ordinary citizens", ["Generals", "The wealthiest families", "Merchants only"], "Life became much harder for ordinary citizens during the decline of Rome."],
      ["Changing Ways of Life", "Why did wealth no longer flow into the empire?", "No new lands were being conquered", ["Trade with Egypt grew", "The army was paid too much", "Coins were made of gold"], "Without new lands being conquered, wealth no longer flowed into the empire."],
      ["Changing Ways of Life", "There was a shortage of which metal?", "Silver", ["Gold", "Copper", "Bronze"], "There was a shortage of silver."],
      ["Changing Ways of Life", "What was silver used for?", "It was the main metal used in Roman coins", ["Building roads", "Making battering rams", "Making farm tools"], "Silver was the main metal used in Roman coins."],
      ["Changing Ways of Life", "How did the government make new coins?", "It mixed silver with less valuable metals", ["It used only pure gold", "It borrowed coins from Greece", "It stopped making coins"], "To make new coins, the government mixed silver with less valuable metals."],
      ["Changing Ways of Life", "Why did merchants raise their prices?", "They knew the new coins were not as valuable", ["Food became cheaper", "The army ordered them to", "There was too much silver"], "Because merchants knew the new coins were not as valuable, they raised their prices."],
      ["Changing Ways of Life", "What is inflation?", "A rise in prices caused by a decrease in the value of money", ["A fall in prices caused by more money", "A shortage of soldiers", "A new type of coin"], "Inflation: a rise in prices, caused by a decrease in the value of money."],
      ["Changing Ways of Life", "Which sequence correctly leads to inflation?", "Silver shortage → silver mixed with less valuable metals → merchants raise prices", ["Merchants lower prices → more silver → inflation", "New lands conquered → more wealth → inflation", "Gold coins made → prices fall → inflation"], "Shortage of silver → mixed metals in new coins → merchants raised prices → inflation."],
      ["Changing Ways of Life", "What happened to the price of food?", "It rose dramatically", ["It fell sharply", "It stayed the same", "Food became free"], "The price of food rose dramatically, causing more difficulties for ordinary people."],
      ["Changing Ways of Life", "Who could afford to send their kids to school?", "Only the wealthiest families", ["All families", "Only soldiers’ families", "Only farmers"], "Only the wealthiest families could afford to send their kids to school."],
      ["Changing Ways of Life", "What spread across the empire during this time?", "Political chaos", ["Peace", "New schools", "Cheap food"], "Political chaos spread."],
      ["Changing Ways of Life", "What made it hard to get food from the countryside to Rome’s cities?", "Invading armies on the move", ["Too many roads", "Floods on the hills", "The Twelve Tables"], "Invading armies on the move made it hard to get food from the countryside to Rome’s cities."],
      ["Changing Ways of Life", "What was the result of food not reaching Rome’s cities?", "General food shortages", ["Lower food prices", "More farmland", "A stronger army"], "This resulted in general food shortages."]
    ]
  },

  /* =====================================================================
     LESSON 7: LARGE FORCES AT WORK (G6+Q2.pdf pages 2–4)
     ===================================================================== */
  l7: {
    num: 7, title: "Large Forces at Work", fullTitle: "Lesson 7: Large Forces at Work", pages: "2–4", icon: "🌋", color: "#b45309",
    infographic: [
      { type: "hero", icon: "🌋", title: "Lesson 7: Large Forces at Work",
        text: "As Germanic tribes migrated into western Europe, momentous events were happening in the world at large: dark ash clouds, poor harvests, a deadly plague and invaders." },

      { type: "chain", title: "536 CE: Dark Ash Clouds", icon: "☁️", page: "2", color: "#475569", image: "q2img/ash.jpg", imageCaption: "Dark ash clouds (textbook p. 3)",
        steps: [
          "In 536 CE, dark ash clouds appeared in the area around the Mediterranean Sea.",
          "The clouds blocked sunlight and caused cooler climates.",
          "This disrupted growing seasons and led to poor harvests.",
          "Shortages of food triggered large migrations of people."
        ],
        end: "People migrated, seeking food" },

      { type: "cards", title: "Where Did the Ash Clouds Come From?", icon: "🔬", page: "2",
        cards: [
          { icon: "🌋", title: "Modern scientists", text: "Believe the clouds came from two large volcanic eruptions elsewhere in the world." },
          { icon: "🏛️", title: "Some historians", text: "Think these distant volcanic eruptions played a role in the decline of Rome." },
          { icon: "🚶", title: "At the same time", text: "Germanic tribes were migrating into western Europe." }
        ] },

      { type: "section", title: "The Justinian Plague", icon: "🦠", page: "3", color: "#b91c1c",
        cards: [
          { icon: "🏷️", title: "Its name", text: "The plague that ravaged the Byzantine Empire came to be called the “Justinian Plague” after the emperor." },
          { icon: "👑", title: "Emperor Justinian", text: "Justinian himself caught the disease, yet he managed to survive. Others were not as fortunate." },
          { icon: "🏙️", title: "Constantinople", text: "Historians estimate that around 5000 people a day died in Constantinople." }
        ] },

      { type: "tree", title: "The Plague Weakened the Byzantine Empire", icon: "⚔️", page: "3",
        root: "The plague weakened the power of the Byzantine Empire",
        branches: [
          { icon: "🏰", title: "568 CE · Northern Italy", text: "Lombard invaders overran a small stronghold of Byzantine soldiers." },
          { icon: "↩️", title: "Pushed out", text: "The Lombards eventually pushed the Byzantine Empire out of northern Italy." },
          { icon: "🌍", title: "North Africa & West Asia", text: "The empire was unable to stop the advances of Muslim armies." }
        ] },

      { type: "map", title: "Map: Byzantine Empire, 550 CE", icon: "🗺️", page: "4", image: "q2img/byzmap.jpg",
        legend: [{ sw: "#d9678b", text: "Byzantine Empire, 550 CE" }],
        facts: [
          "Constantinople, Rome, Athens, Antioch, Alexandria, Jerusalem and Carthage are shown inside the Byzantine Empire.",
          "The Frankish Kingdom and the Kingdom of the Visigoths (around Córdoba) lie to the west.",
          "The Persian Empire lies to the east.",
          "Rivers shown: the Danube, the Nile, the Tigris and the Euphrates."
        ] },

      { type: "cards", title: "Where the Plague Did Not Reach", icon: "🐀", page: "4",
        cards: [
          { icon: "🌲", title: "Not everywhere", text: "The plague that devastated the Byzantine Empire did not penetrate northern Europe or the countryside." },
          { icon: "⚓", title: "Why?", text: "Some believe this was because the rats that carried it kept close to ports and ships." },
          { icon: "📅", title: "Western Europe", text: "Western Europe would not experience this kind of plague until the 1300s CE." }
        ] }
    ],

    keywords: [
      { term: "Germanic tribes", cat: "People", def: "Tribes that migrated into western Europe while momentous events were happening in the world at large." },
      { term: "536 CE", cat: "Date", star: true, def: "The year dark ash clouds appeared in the area around the Mediterranean Sea." },
      { term: "Ash clouds", cat: "Term", star: true, def: "Dark clouds that blocked sunlight and caused cooler climates." },
      { term: "Volcanic eruptions", cat: "Term", star: true, def: "Modern scientists believe the ash clouds came from two large volcanic eruptions elsewhere in the world." },
      { term: "Cooler climates", cat: "Concept", def: "Caused by the clouds blocking sunlight; they disrupted growing seasons." },
      { term: "Poor harvests", cat: "Concept", def: "The result of disrupted growing seasons." },
      { term: "Shortages of food", cat: "Concept", def: "Triggered large migrations of people seeking food." },
      { term: "Migrations", cat: "Term", def: "Large movements of people seeking food." },
      { term: "Decline of Rome", cat: "Concept", def: "Some historians think the distant volcanic eruptions played a role in it." },
      { term: "Justinian Plague", cat: "Term", star: true, def: "The plague that ravaged the Byzantine Empire, named after the emperor." },
      { term: "Justinian", cat: "Person", star: true, def: "The Byzantine emperor. He caught the plague but managed to survive." },
      { term: "Constantinople", cat: "Place", def: "Historians estimate that around 5000 people a day died there from the plague." },
      { term: "Byzantine Empire", cat: "Place", star: true, def: "The empire that was ravaged and weakened by the plague (shown on the 550 CE map)." },
      { term: "Lombards", cat: "People", star: true, def: "Invaders who overran a Byzantine stronghold in northern Italy in 568 CE and eventually pushed the empire out of northern Italy." },
      { term: "568 CE", cat: "Date", def: "Lombard invaders overran a small stronghold of Byzantine soldiers in northern Italy." },
      { term: "Muslim armies", cat: "People", def: "The Byzantine Empire was unable to stop their advances in North Africa and West Asia." },
      { term: "Rats", cat: "Term", def: "Carried the plague. Some believe they kept close to ports and ships." },
      { term: "1300s CE", cat: "Date", def: "When western Europe would experience this kind of plague." }
    ],

    quiz: [
      ["Ash Clouds of 536 CE", "Who was migrating into western Europe when these momentous events happened?", "Germanic tribes", ["Vikings", "Ottoman Turks", "Portuguese sailors"], "As Germanic tribes migrated into western Europe, momentous events were happening in the world at large."],
      ["Ash Clouds of 536 CE", "In what year did dark ash clouds appear around the Mediterranean Sea?", "536 CE", ["568 CE", "814 CE", "982 CE"], "In 536 CE, dark ash clouds appeared in the area around the Mediterranean Sea."],
      ["Ash Clouds of 536 CE", "Where did the dark ash clouds appear?", "In the area around the Mediterranean Sea", ["Only over Scandinavia", "Over the Caribbean Sea", "Only over China"], "The clouds appeared in the area around the Mediterranean Sea."],
      ["Ash Clouds of 536 CE", "Where do modern scientists believe the ash clouds came from?", "Two large volcanic eruptions elsewhere in the world", ["A great fire in Constantinople", "Burning Viking ships", "Smoke from the plague"], "Modern scientists believe they came from two large volcanic eruptions elsewhere in the world."],
      ["Ash Clouds of 536 CE", "What did the clouds block?", "Sunlight", ["Trade routes", "The Danube River", "The sea route to India"], "The clouds blocked sunlight and caused cooler climates."],
      ["Ash Clouds of 536 CE", "What did the blocked sunlight cause?", "Cooler climates", ["Hotter summers", "Huge floods", "Bigger harvests"], "The clouds blocked sunlight and caused cooler climates."],
      ["Ash Clouds of 536 CE", "The cooler climates disrupted growing seasons. What did this lead to?", "Poor harvests", ["Huge harvests", "Cheaper food", "More farmland"], "This disrupted growing seasons and led to poor harvests."],
      ["Ash Clouds of 536 CE", "What triggered large migrations of people?", "Shortages of food", ["The discovery of gold", "Warmer weather", "New ships"], "Shortages of food triggered large migrations of people seeking food."],
      ["Ash Clouds of 536 CE", "Some historians think the distant volcanic eruptions played a role in…", "The decline of Rome", ["The rise of Charlemagne", "The fall of Constantinople in 1453", "The discovery of Iceland"], "Some historians think these distant volcanic eruptions played a role in the decline of Rome."],
      ["Ash Clouds of 536 CE", "Which order of events is correct?", "Ash clouds → less sunlight → cooler climates → poor harvests → migrations", ["Migrations → ash clouds → poor harvests → cooler climates", "Poor harvests → ash clouds → more sunlight → migrations", "Cooler climates → migrations → ash clouds → good harvests"], "Clouds blocked sunlight → cooler climates → disrupted growing seasons → poor harvests → food shortages → migrations."],
      ["The Justinian Plague", "What was the plague that ravaged the Byzantine Empire called?", "The Justinian Plague", ["The Lombard Plague", "The Roman Plague", "The Viking Plague"], "The plague came to be called the “Justinian Plague” after the emperor."],
      ["The Justinian Plague", "Why was it called the Justinian Plague?", "It was named after the emperor", ["It started in a town called Justinian", "A doctor named Justinian found it", "It was named after a river"], "It came to be called the “Justinian Plague” after the emperor."],
      ["The Justinian Plague", "What happened to Emperor Justinian?", "He caught the disease, yet he survived", ["He never caught the disease", "He died of the disease", "He escaped to northern Europe"], "Justinian himself caught the disease, yet he managed to survive. Others were not as fortunate."],
      ["The Justinian Plague", "Historians estimate that about how many people a day died in Constantinople?", "Around 5000", ["Around 50", "Around 500", "Around 50,000"], "Historians estimate that around 5000 people a day died in Constantinople."],
      ["A Weakened Empire", "What effect did the plague have on the Byzantine Empire?", "It weakened the power of the empire", ["It made the empire stronger", "It doubled the empire’s land", "It ended all invasions"], "The plague weakened the power of the Byzantine Empire."],
      ["A Weakened Empire", "Who overran a small stronghold of Byzantine soldiers in northern Italy?", "Lombard invaders", ["Vikings", "Arabs and Berbers", "Ottoman Turks"], "In northern Italy, Lombard invaders overran a small stronghold of Byzantine soldiers in 568 CE."],
      ["A Weakened Empire", "In what year did the Lombards overrun the Byzantine stronghold?", "568 CE", ["536 CE", "814 CE", "1453"], "Lombard invaders overran a small stronghold of Byzantine soldiers in 568 CE."],
      ["A Weakened Empire", "What did the Lombards eventually do?", "Pushed the Byzantine Empire out of northern Italy", ["Joined the Byzantine army", "Sailed to Iceland", "Captured Constantinople"], "The Lombards eventually pushed the Byzantine Empire out of northern Italy."],
      ["A Weakened Empire", "Where was the Byzantine Empire unable to stop the advances of Muslim armies?", "In North Africa and West Asia", ["In northern Italy and Spain", "In Scandinavia", "In England and France"], "In North Africa and West Asia, the empire was unable to stop the advances of Muslim armies."],
      ["Map: Byzantine Empire 550 CE", "On the map, what does the pink colour show?", "The Byzantine Empire in 550 CE", ["Viking lands", "The Frankish Kingdom", "The Persian Empire"], "The map key: pink = Byzantine Empire, 550 CE."],
      ["Map: Byzantine Empire 550 CE", "On the 550 CE map, which empire lies east of the Byzantine Empire?", "The Persian Empire", ["The Frankish Kingdom", "The Kingdom of the Visigoths", "The Ottoman Empire"], "The Persian Empire is shown to the east."],
      ["Map: Byzantine Empire 550 CE", "On the 550 CE map, which kingdom is shown in Spain, around Córdoba?", "The Kingdom of the Visigoths", ["The Frankish Kingdom", "The Persian Empire", "Arabia"], "The map labels the Kingdom of the Visigoths with the city of Córdoba."],
      ["Map: Byzantine Empire 550 CE", "On the 550 CE map, which city lies beside the Black Sea?", "Constantinople", ["Carthage", "Córdoba", "Alexandria"], "Constantinople is shown on the Black Sea."],
      ["Where the Plague Spread", "Where did the plague NOT penetrate?", "Northern Europe and the countryside", ["Constantinople", "The Byzantine Empire", "Ports and ships"], "The plague did not penetrate northern Europe or the countryside."],
      ["Where the Plague Spread", "What carried the plague, according to some people?", "Rats", ["Birds", "Horses", "Fish"], "Some believe this was because the rats that carried it kept close to ports and ships."],
      ["Where the Plague Spread", "Why do some believe the plague did not reach northern Europe or the countryside?", "The rats that carried it kept close to ports and ships", ["The weather there was too hot", "Northern Europe had better doctors", "The Vikings stopped it"], "Some believe this was because the rats that carried it kept close to ports and ships."],
      ["Where the Plague Spread", "When would western Europe experience this kind of plague?", "In the 1300s CE", ["In 536 CE", "In 568 CE", "In the 700s CE"], "Western Europe would not experience this kind of plague until the 1300s CE."]
    ]
  },

  /* =====================================================================
     LESSON 8: CHARLEMAGNE (G6+Q2.pdf pages 5–7)
     ===================================================================== */
  l8: {
    num: 8, title: "Charlemagne", fullTitle: "Lesson 8: Charlemagne", pages: "5–7 + Study Guide", icon: "👑", color: "#1d4ed8",
    infographic: [
      { type: "hero", icon: "👑", title: "Lesson 8: Charlemagne",
        text: "One ruler stands out from all the rest during the Early Middle Ages, and not just for his height! His name was Charlemagne, and he eventually ruled an empire." },

      { type: "section", title: "Who Was Charlemagne?", icon: "🤴", page: "5–6", image: "q2img/charlemagne.jpg", imageCaption: "Charlemagne (textbook p. 5)",
        cards: [
          { icon: "📏", title: "Very tall", text: "At a time when most men were little more than five feet tall, Charlemagne was more than a foot taller than that." },
          { icon: "🏰", title: "An empire", text: "He stands out among the rulers of the Early Middle Ages and eventually ruled an empire." },
          { icon: "🎯", title: "His big goal", text: "To unite all of the Germanic tribes into a single Christian kingdom." }
        ] },

      { type: "cards", title: "Charlemagne at a Glance", icon: "📌", page: "1 (study guide)", color: "#9f1239",
        cards: [
          { icon: "🏷️", title: "Name meaning", text: "Charlemagne translates directly as “Charles the Great” (Carolus Magnus)." },
          { icon: "👑", title: "768 CE · Ascension", text: "He became King of the Franks, ascending the throne in 768 CE." },
          { icon: "🌍", title: "Empire scope", text: "Western Europe — a unified Frankish realm." },
          { icon: "⛪", title: "800 CE (Dec 25) · Coronation", text: "Crowned Emperor of the Romans." },
          { icon: "🧩", title: "Before his reign", text: "Western Europe was fractured into splintered Germanic kingdoms following the collapse of the Western Roman Empire." },
          { icon: "🎯", title: "Two central goals", text: "To unite Europe under a single centralized authority, and to spread Christianity across his empire." }
        ] },

      { type: "timeline", title: "Milestones of Charlemagne’s Rule (768–800+ CE)", icon: "⏳", page: "1 (study guide)", events: [
        { date: "768 CE", title: "Ascension to the throne", text: "Becomes King of the Franks; begins his reign in Western Europe." },
        { date: "770s–790s CE", title: "Imperial expansion", text: "Unites Western Europe through wars, conquests, and legal reforms." },
        { date: "780s–800 CE", title: "Carolingian Revival", text: "Encourages literacy, opens schools, preserves books." },
        { date: "800 CE (Dec 25)", title: "Imperial coronation", text: "The Pope crowns Charlemagne Emperor of the Romans." },
        { date: "Enduring legacy", title: "Medieval foundations", text: "Shapes European culture, Christianity and future nations." }
      ]},

      { type: "cards", title: "Warrior and Wise Ruler", icon: "⚖️", page: "6",
        cards: [
          { icon: "⚔️", title: "A fierce warrior", text: "Charlemagne won many battles to accomplish his goal. But he didn’t stop there." },
          { icon: "🦉", title: "A wise ruler", text: "In a time of great turmoil, he brought peace and order to the diverse peoples he had conquered." }
        ] },

      { type: "tree", title: "Four Pillars of Charlemagne’s Achievements", icon: "🏛️", page: "1 (study guide)", color: "#9f1239",
        root: "Charlemagne’s achievements",
        branches: [
          { icon: "🗺️", title: "1. Territorial Unification", text: "Expanded the Frankish Empire through wars and military conquests and joined fractured territories into one empire. Impact: brought regional kingdoms under one ruler and created stability." },
          { icon: "✝️", title: "2. Religious Alliance & Spread", text: "Encouraged Christianity and spread it through the realm; defended the Papacy and formed an alliance with the Church. Impact: a shared spiritual bond across Western Europe." },
          { icon: "🏫", title: "3. Educational Renaissance", text: "Built new schools, encouraged reading and writing, invited European scholars to court, and preserved books. Impact: reversed educational decline and trained literate administrators and clergy." },
          { icon: "⚖️", title: "4. Law & Governance", text: "Reformed and standardized legal codes; appointed royal envoys to inspect provinces and enforce justice. Impact: strengthened the rule of law and reduced corruption." }
        ] },

      { type: "flow", title: "Charlemagne and Learning", icon: "📚", page: "6", color: "#0e8a8c",
        steps: [
          { icon: "📖", label: "Reading", sub: "Government and church officials should be able to read" },
          { icon: "🏫", label: "Education", sub: "He improved education" },
          { icon: "📚", label: "Books", sub: "He promoted the creation of books" },
          { icon: "⚖️", label: "Fair government", sub: "He taught his nobles how to govern fairly" }
        ] },

      { type: "section", title: "The Carolingian Renaissance", icon: "📜", page: "2 (study guide)", color: "#0e8a8c",
        cards: [
          { icon: "💡", title: "Why?", text: "Although he was a warrior king, Charlemagne recognized that an empire could not endure on military conquest alone, so he started a revival of learning." },
          { icon: "✍️", title: "Promoting literacy", text: "He encouraged nobles, clergy, and ordinary citizens to learn reading and writing." },
          { icon: "🎓", title: "Inviting scholars", text: "He gathered educators, theologians, and scholars from across Europe to his royal court at Aachen." },
          { icon: "🏫", title: "Schools & libraries", text: "He ordered the creation and expansion of cathedral and monastic schools throughout Frankish lands." },
          { icon: "📚", title: "Preserving knowledge", text: "Monasteries copied and protected ancient Greek, Roman, and Christian manuscripts so knowledge survived for future generations." }
        ] },

      { type: "chain", title: "Each Spring: Equal Justice for All", icon: "🌸", page: "6",
        steps: [
          "Each spring, Charlemagne met with all his nobles.",
          "He taught them about law and other subjects.",
          "He then sent out teams to different parts of the empire."
        ],
        end: "Their task: make sure all people, including peasants, were receiving equal justice" },

      { type: "section", title: "Charlemagne’s Network of Nobles", icon: "🏞️", page: "7", color: "#7c3aed", image: "q2img/feudal.jpg", imageCaption: "Pictures shown with this paragraph in the textbook (p. 7)",
        cards: [
          { icon: "🎁", title: "Large estates", text: "Charlemagne granted large estates to loyal nobles." },
          { icon: "🕸️", title: "A network of officials", text: "This built a network of officials to govern his vast lands." },
          { icon: "🛡️", title: "In return for land", text: "The nobles provided military and political services to him." },
          { icon: "🌉", title: "Looking after the land", text: "The nobles also looked after the roads, bridges, and forts on their land." }
        ] },

      { type: "inflation", title: "What Is Feudalism?", icon: "🤝", page: "7", color: "#7c3aed",
        steps: [
          { icon: "🏞️", text: "Land" },
          { icon: "🤝", text: "is exchanged for loyalty" },
          { icon: "🛡️", text: "and protection" }
        ],
        def: { term: "Feudalism", text: "The system in which land is exchanged for loyalty and protection. Feudalism in Europe lasted for the next 400 years." } },

      { type: "section", title: "The Imperial Coronation of 800 CE", icon: "⛪", page: "2 (study guide)", color: "#b45309",
        cards: [
          { icon: "🎄", title: "Christmas Day, 800 CE", text: "In St. Peter’s Basilica in Rome, the Pope crowned Charlemagne Emperor of the Romans." },
          { icon: "👑", title: "Supreme Western authority", text: "The title made him one of the most powerful rulers in Western Europe and revived the prestige of the Roman emperors in the West." },
          { icon: "🤝", title: "Church–state alliance", text: "It strengthened the relationship between the Church and the emperor: the Pope gave spiritual approval, and the empire defended the Christian faith." },
          { icon: "✝️", title: "Birth of Western Christendom", text: "It united Roman imperial tradition, Germanic culture, and Christian beliefs into one European identity." }
        ] },

      { type: "tree", title: "Enduring Legacy: Foundations of Medieval Europe", icon: "🌟", page: "2 (study guide)", color: "#7c3aed",
        root: "Charlemagne’s reign: the cornerstone of medieval civilization",
        branches: [
          { icon: "🌍", title: "United Western Europe", text: "Brought fractured tribes and territories under one imperial crown — earning him the name “Father of Europe”." },
          { icon: "🎭", title: "Strong European culture", text: "His mix of Roman law, Christian religion, and Germanic customs formed the core cultural identity of Western Europe." },
          { icon: "✝️", title: "Strengthened Christianity", text: "Christian institutions became the unifying framework for European society, ethics, and government." },
          { icon: "🏰", title: "Long-term influence", text: "His empire laid the foundations for modern European nations, particularly France and Germany." }
        ] },

      { type: "cards", title: "Classwork Keynote Guide (W1 CW L8)", icon: "🖥️", page: "2 (study guide)",
        cards: [
          { icon: "📝", title: "The task", text: "Individually create a keynote: explain how Charlemagne helped to unite and strengthen Europe during his rule. Give at least two examples of what he did and explain why they were important." },
          { icon: "🎯", title: "Thesis", text: "Charlemagne unified and strengthened Europe by joining fractured territories into a centralized empire, standardizing laws, building religious unity through an alliance with the Church, and reviving education." },
          { icon: "⚔️", title: "Example 1: Military & legal unification", text: "What he did: expanded the Frankish Empire through conquests, uniting most of Western Europe under one crown, and reformed laws. Why it mattered: it ended tribal warfare and created a secure, stable realm." },
          { icon: "🏫", title: "Example 2: Education & schools", text: "What he did: built schools, encouraged reading and writing, invited scholars, and preserved manuscripts. Why it mattered: it restored literacy, produced capable administrators, and preserved classical knowledge." },
          { icon: "⛪", title: "Example 3 (alternative): Coronation & religious unity", text: "What he did: protected the Church, spread Christianity, and was crowned Emperor of the Romans by the Pope in 800 CE. Why it mattered: it formed a lasting Church–state alliance and gave Western Europeans a shared identity." }
        ] },

      { type: "cards", title: "Key Exam Takeaways & Common Mistakes", icon: "✅", page: "3 (study guide)", color: "#15803d",
        cards: [
          { icon: "4️⃣", title: "Remember the Core 4", text: "(1) Expanding the empire, (2) encouraging education, (3) spreading Christianity, (4) crowned Emperor of the Romans in 800 CE." },
          { icon: "🚫", title: "Not a Viking", text: "Charlemagne was not a Viking (the Vikings raided after his era)." },
          { icon: "🚫", title: "Not an explorer", text: "He did not explore America or Asia, invent ships, or defeat the Vikings." },
          { icon: "🏫", title: "Schools, not books himself", text: "He did not create new languages or write books himself — he opened schools and invited scholars." }
        ] }
    ],

    keywords: [
      { term: "Charlemagne", cat: "Person", star: true, def: "A ruler who stands out from all the rest during the Early Middle Ages; he eventually ruled an empire." },
      { term: "Early Middle Ages", cat: "Term", def: "The period in which Charlemagne stood out from all other rulers." },
      { term: "More than a foot taller", cat: "Concept", def: "Charlemagne’s height, at a time when most men were little more than five feet tall." },
      { term: "Germanic tribes", cat: "People", def: "Charlemagne wanted to unite all of them into a single Christian kingdom." },
      { term: "Single Christian kingdom", cat: "Concept", star: true, def: "Charlemagne’s big goal: to unite all of the Germanic tribes into one." },
      { term: "Fierce warrior", cat: "Concept", def: "Charlemagne won many battles to accomplish his goal." },
      { term: "Wise ruler", cat: "Concept", def: "Besides being a warrior, Charlemagne brought peace and order to the diverse peoples he had conquered." },
      { term: "Turmoil", cat: "Term", def: "A time of great turmoil — the time in which Charlemagne brought peace and order." },
      { term: "Education", cat: "Concept", def: "Charlemagne improved education and believed government and church officials should be able to read." },
      { term: "Creation of books", cat: "Concept", def: "Charlemagne promoted it." },
      { term: "Nobles", cat: "People", star: true, def: "Charlemagne taught them each spring about law and other subjects; loyal nobles received large estates." },
      { term: "Peasants", cat: "People", def: "Charlemagne’s teams made sure that all people, including peasants, were receiving equal justice." },
      { term: "Equal justice", cat: "Concept", star: true, def: "The teams Charlemagne sent out made sure all people were receiving it." },
      { term: "Estates", cat: "Term", def: "Large lands that Charlemagne granted to loyal nobles." },
      { term: "Network of officials", cat: "Term", def: "Built by granting large estates to loyal nobles, to govern Charlemagne’s vast lands." },
      { term: "Military and political services", cat: "Term", def: "What the nobles provided to Charlemagne in return for land." },
      { term: "Roads, bridges, and forts", cat: "Term", def: "The nobles looked after these on their land." },
      { term: "Feudalism", cat: "Term", star: true, def: "A system in which land is exchanged for loyalty and protection." },
      { term: "400 years", cat: "Date", def: "How long feudalism in Europe lasted." },
      { term: "Charles the Great (Carolus Magnus)", cat: "Term", star: true, def: "What the name Charlemagne translates as." },
      { term: "King of the Franks", cat: "Person", star: true, def: "Charlemagne’s title from 768 CE; his main identity in the curriculum." },
      { term: "768 CE", cat: "Date", star: true, def: "Charlemagne ascended the throne as King of the Franks." },
      { term: "Western Roman Empire (collapse)", cat: "Concept", def: "After its collapse, Western Europe was fractured into splintered Germanic kingdoms." },
      { term: "Unite Europe & spread Christianity", cat: "Concept", star: true, def: "Charlemagne’s two central goals: unite Europe under a single centralized authority and spread Christianity across his empire." },
      { term: "800 CE (December 25)", cat: "Date", star: true, def: "On Christmas Day, the Pope crowned Charlemagne Emperor of the Romans in St. Peter’s Basilica, Rome." },
      { term: "Emperor of the Romans", cat: "Term", star: true, def: "The title the Pope gave Charlemagne in 800 CE." },
      { term: "The Pope / Papacy", cat: "Person", def: "Crowned Charlemagne; Charlemagne defended the Papacy and formed an alliance with the Church." },
      { term: "St. Peter’s Basilica", cat: "Place", def: "The church in Rome where Charlemagne was crowned in 800 CE." },
      { term: "Church–state alliance", cat: "Concept", def: "The relationship between the Church and the emperor, strengthened by the coronation." },
      { term: "Western Christendom", cat: "Term", def: "The union of Roman imperial tradition, Germanic culture, and Christian beliefs into one European identity." },
      { term: "Carolingian Renaissance", cat: "Term", star: true, def: "Charlemagne’s revival of learning: literacy, schools, scholars, and preserving books." },
      { term: "Aachen", cat: "Place", def: "Charlemagne’s royal court, where he gathered scholars from across Europe." },
      { term: "Cathedral and monastic schools", cat: "Term", def: "Schools Charlemagne ordered to be created and expanded throughout Frankish lands." },
      { term: "Manuscripts", cat: "Term", def: "Ancient Greek, Roman, and Christian writings copied and protected by monasteries." },
      { term: "Royal envoys", cat: "Person", def: "Officials Charlemagne appointed to inspect local provinces and enforce justice." },
      { term: "Father of Europe", cat: "Term", star: true, def: "Charlemagne’s nickname, because he brought fractured tribes and territories under one imperial crown." },
      { term: "France and Germany", cat: "Place", def: "Modern European nations whose foundations were laid by Charlemagne’s empire." }
    ],

    quiz: [
      ["Who Was Charlemagne?", "Charlemagne stands out from all the other rulers of which period?", "The Early Middle Ages", ["Ancient Greece", "The Roman Republic", "The 1400s"], "One ruler stands out from all the rest during the Early Middle Ages… His name was Charlemagne."],
      ["Who Was Charlemagne?", "Besides his importance, what else made Charlemagne stand out?", "His height", ["His red cloak", "His ships", "His age"], "He stands out from all the rest, and not just for his height!"],
      ["Who Was Charlemagne?", "Most men at the time were little more than five feet tall. How tall was Charlemagne?", "More than a foot taller than that", ["Shorter than most men", "Exactly five feet tall", "Only an inch taller"], "Charlemagne was more than a foot taller than that."],
      ["Who Was Charlemagne?", "What did Charlemagne eventually rule?", "An empire", ["One small city", "A Viking village", "A trading ship"], "His name was Charlemagne, and he eventually ruled an empire."],
      ["Who Was Charlemagne?", "What was Charlemagne’s big goal?", "To unite all of the Germanic tribes into a single Christian kingdom", ["To find a sea route to Asia", "To discover Greenland", "To build a fleet of longships"], "He wanted to unite all of the Germanic tribes into a single Christian kingdom."],
      ["Warrior and Wise Ruler", "How did Charlemagne accomplish his goal?", "As a fierce warrior, he won many battles", ["He paid the tribes with spices", "He sailed to North America", "He let the Vikings rule"], "A fierce warrior, Charlemagne won many battles to accomplish his goal."],
      ["Warrior and Wise Ruler", "Besides being a warrior, Charlemagne was also…", "A wise ruler", ["A Viking explorer", "A Venetian merchant", "A shipbuilder"], "Besides being a warrior, he was also a wise ruler."],
      ["Warrior and Wise Ruler", "In a time of great turmoil, what did Charlemagne bring to the peoples he had conquered?", "Peace and order", ["Plague and hunger", "War and chaos", "Ash clouds"], "In a time of great turmoil, he brought peace and order to the diverse peoples he had conquered."],
      ["Charlemagne and Learning", "Who did Charlemagne believe should be able to read?", "Government and church officials", ["Only the king", "Only soldiers", "Nobody"], "Charlemagne believed that both government and church officials should be able to read."],
      ["Charlemagne and Learning", "Which TWO things did Charlemagne do for learning?", "He improved education and promoted the creation of books", ["He closed schools and burned books", "He built ports and ships", "He banned reading"], "He improved education and promoted the creation of books."],
      ["Charlemagne and Learning", "What did Charlemagne make his responsibility?", "To teach his nobles how to govern fairly", ["To teach peasants how to sail", "To collect every tax himself", "To lead every raid"], "He made it his responsibility to teach his nobles how to govern fairly."],
      ["Equal Justice", "When did Charlemagne meet with all his nobles?", "Each spring", ["Every winter", "Once every ten years", "Only during wars"], "Each spring, he met with all his nobles."],
      ["Equal Justice", "What did Charlemagne teach his nobles at these meetings?", "Law and other subjects", ["Shipbuilding and sailing", "How to raid at night", "How to trade furs"], "He met with all his nobles and taught them about law and other subjects."],
      ["Equal Justice", "Why did Charlemagne send teams to different parts of the empire?", "To make sure all people, including peasants, were receiving equal justice", ["To collect gold for the king", "To find new trade routes", "To build churches only"], "Their task was to make sure that all people, including peasants, were receiving equal justice."],
      ["Equal Justice", "According to Charlemagne’s teams, who should receive equal justice?", "All people, including peasants", ["Only nobles", "Only church officials", "Only soldiers"], "Their task was to make sure that all people, including peasants, were receiving equal justice."],
      ["Feudalism", "What did Charlemagne grant to loyal nobles?", "Large estates", ["Longships", "Silk and spices", "Books only"], "By granting large estates to loyal nobles, Charlemagne built a network of officials."],
      ["Feudalism", "Granting estates helped Charlemagne build…", "A network of officials to govern his vast lands", ["A fleet of longships", "A wall around the empire", "A trading post in Africa"], "By granting large estates to loyal nobles, Charlemagne built a network of officials to govern his vast lands."],
      ["Feudalism", "What did the nobles provide in return for land?", "Military and political services", ["Spices and silks", "Ships and sailors", "Nothing at all"], "In return for land, the nobles provided military and political services to him."],
      ["Feudalism", "What did the nobles look after on their land?", "Roads, bridges, and forts", ["Ports and lighthouses", "Rune stones", "Markets in Asia"], "The nobles also looked after the roads, bridges, and forts on their land."],
      ["Feudalism", "A system in which land is exchanged for loyalty and protection is called…", "Feudalism", ["Inflation", "Territorial expansion", "A Thing"], "This system in which land is exchanged for loyalty and protection is called feudalism."],
      ["Feudalism", "How long did feudalism in Europe last?", "For the next 400 years", ["For 4 years", "For 40 years", "For 4000 years"], "Feudalism in Europe lasted for the next 400 years."],
      ["Feudalism", "A noble receives land and, in return, serves the ruler and stays loyal. This is an example of…", "Feudalism", ["A plague", "Inflation", "A runic alphabet"], "Feudalism: land is exchanged for loyalty and protection."],
      ["Study Guide Q01–Q05", "Who was Charlemagne?", "The king of the Franks", ["A Viking explorer", "A Byzantine ruler", "A Roman Emperor"], "He ascended the Frankish throne in 768 CE. Although he was crowned Emperor of the Romans later, in 800 CE, his main identity in the curriculum is the King of the Franks."],
      ["Study Guide Q01–Q05", "What was one lasting impact of Charlemagne’s rule?", "The creation of a strong European culture", ["The fall of the Roman Empire", "The rise of Viking power", "The spread of Islam in Europe"], "His mix of Christian, Roman, and Germanic traditions formed the foundational culture of medieval Western Europe."],
      ["Study Guide Q01–Q05", "How did Charlemagne improve education in his empire?", "He opened schools", ["He taught music and art", "He built castles", "He created new languages"], "He built and opened cathedral and monastic schools, invited scholars to court, and encouraged literacy and book preservation."],
      ["Study Guide Q01–Q05", "What happened to Charlemagne in the year 800 CE?", "He was crowned Emperor of the Romans", ["He was defeated in battle", "He traveled to Asia", "He built the first university"], "The Pope crowned him on Christmas Day in 800 CE in Rome, formalizing the alliance between Church and empire."],
      ["Study Guide Q01–Q05", "What was one of Charlemagne’s main goals?", "To unite Europe and spread Christianity", ["To build ships for trade", "To explore new lands", "To destroy the Church"], "His policies centered on uniting Western Europe under Frankish rule and promoting the Christian faith."],
      ["Study Guide Q06–Q10", "Charlemagne was crowned Emperor of the Romans in the year ____.", "800 CE", ["700 CE", "750 CE", "850 CE"], "He was crowned by the Pope in Rome on Christmas Day, 800 CE."],
      ["Study Guide Q06–Q10", "Charlemagne encouraged learning by ____.", "opening schools", ["creating new languages", "building castles", "writing books himself"], "He established cathedral and monastic schools and promoted literacy."],
      ["Study Guide Q06–Q10", "Charlemagne’s empire included much of ____.", "Europe", ["Asia", "Africa", "America"], "He unified Western and Central Europe under Frankish rule."],
      ["Study Guide Q06–Q10", "Charlemagne’s rule is remembered for ____.", "helping shape European culture", ["leading Viking raids", "discovering new lands", "inventing new ships"], "He laid the cultural foundations of medieval Western civilization."],
      ["Study Guide Q06–Q10", "One of Charlemagne’s main goals was to ____.", "spread Christianity", ["defeat the Vikings", "explore new continents", "expand trade with China"], "He sent out missionaries and protected the Church."],
      ["Study Guide: Overview", "What does the name “Charlemagne” mean?", "Charles the Great", ["Charles the Viking", "Charles the Builder", "Charles the Young"], "Charlemagne translates directly as “Charles the Great” (Carolus Magnus)."],
      ["Study Guide: Overview", "In what year did Charlemagne become King of the Franks?", "768 CE", ["800 CE", "814 CE", "536 CE"], "He became King of the Franks, ascending the throne in 768 CE."],
      ["Study Guide: Overview", "What was Western Europe like before Charlemagne’s reign?", "Fractured into splintered Germanic kingdoms", ["United under one emperor", "Ruled by the Vikings", "Part of the Ottoman Empire"], "Western Europe was fractured into splintered Germanic kingdoms following the collapse of the Western Roman Empire."],
      ["Study Guide: Coronation", "Who crowned Charlemagne Emperor of the Romans?", "The Pope", ["A Viking chief", "The Byzantine emperor", "His nobles"], "On Christmas Day in 800 CE, the Pope crowned Charlemagne Emperor of the Romans."],
      ["Study Guide: Coronation", "Where was Charlemagne crowned in 800 CE?", "In St. Peter’s Basilica in Rome", ["In Constantinople", "At Aachen", "In Paris"], "On Christmas Day in 800 CE, in St. Peter’s Basilica in Rome, the Pope crowned Charlemagne."],
      ["Study Guide: Coronation", "Which relationship did the coronation strengthen?", "Between the Church and the emperor", ["Between the Vikings and the Franks", "Between Europe and China", "Between the nobles and the peasants"], "His coronation strengthened the relationship between the Church and the emperor."],
      ["Study Guide: Carolingian Renaissance", "What is Charlemagne’s revival of learning called?", "The Carolingian Renaissance", ["The Roman Republic", "The Viking Age", "Feudalism"], "He started a revival of learning known as the Carolingian Renaissance."],
      ["Study Guide: Carolingian Renaissance", "Where was Charlemagne’s royal court, to which he invited scholars?", "Aachen", ["Rome", "Constantinople", "Oslo"], "He gathered scholars from across Europe to his royal court at Aachen."],
      ["Study Guide: Carolingian Renaissance", "What did monasteries do to preserve knowledge?", "Copied and protected ancient Greek, Roman, and Christian manuscripts", ["Burned old books", "Sold books to the Vikings", "Stopped all writing"], "Monasteries copied, cataloged, and protected ancient Greek, Roman, and Christian manuscripts."],
      ["Study Guide: Four Pillars", "Which pillar includes appointing royal envoys to inspect provinces and enforce justice?", "Law & Governance", ["Territorial Unification", "Religious Alliance & Spread", "Educational Renaissance"], "Law & Governance: he reformed legal codes and appointed royal envoys to inspect local provinces and enforce justice."],
      ["Study Guide: Legacy", "What nickname did Charlemagne earn for uniting Western Europe?", "Father of Europe", ["King of the Seas", "The Navigator", "The Great Explorer"], "He brought fractured tribes and territories under one imperial crown, earning him the name “Father of Europe”."],
      ["Study Guide: Legacy", "Charlemagne’s empire laid the foundations for which modern nations in particular?", "France and Germany", ["Spain and Portugal", "Norway and Sweden", "Italy and Greece"], "His empire laid the foundations for modern European nations, particularly France and Germany."]
    ]
  },

  /* =====================================================================
     LESSON 9: NEW WAVES OF INVADERS (G6+Q2.pdf pages 8–12)
     ===================================================================== */
  l9: {
    num: 9, title: "New Waves of Invaders", fullTitle: "Lesson 9: New Waves of Invaders", pages: "8–12", icon: "🛡️", color: "#0f766e",
    infographic: [
      { type: "hero", icon: "🛡️", title: "Lesson 9: New Waves of Invaders",
        text: "Even before Charlemagne’s death in 814 CE, his empire came under attack from invaders — from northern Africa and from the North." },

      { type: "versus", title: "Invaders from Two Directions", icon: "🧭", page: "8",
        left: { name: "From northern Africa", icon: "🏜️", points: ["Arabs and Berbers", "Attacked the empire’s Mediterranean coast"] },
        right: { name: "From the North", icon: "❄️", points: ["The Vikings", "Came from Scandinavia: present-day Denmark, Norway and Sweden"] } },

      { type: "chain", title: "Why Did the Vikings Set Out?", icon: "🌾", page: "8",
        steps: [
          "In the 700s CE, Scandinavia’s population grew very much.",
          "The land available for farming could not provide enough food for everyone.",
          "Many Scandinavians set out in long ships."
        ],
        end: "To search for food — and steal it if they had to" },

      { type: "section", title: "Viking Raiders", icon: "⚔️", page: "9", color: "#b91c1c", image: "q2img/longship.jpg", imageCaption: "A Viking longship (textbook p. 9)",
        cards: [
          { icon: "🔨", title: "Skillful shipbuilders", text: "The Vikings were skillful shipbuilders." },
          { icon: "🚢", title: "Fast-moving longships", text: "Allowed them to reach many coastal areas of northwestern Europe and to sail inland along rivers." },
          { icon: "🌙", title: "Surprise attacks", text: "They usually attacked at night or early in the morning in order to take people by surprise." },
          { icon: "🔥", title: "Fierce fighters", text: "Often killing everyone they found and destroying what they did not take." }
        ] },

      { type: "section", title: "Territorial Expansion", icon: "🗺️", page: "10", color: "#0369a1", image: "q2img/erik.jpg", imageCaption: "Erik the Red (textbook p. 10)",
        cards: [
          { icon: "🏡", title: "Settling down", text: "In time, the Vikings began to settle on the lands they attacked." },
          { icon: "➕", title: "Territorial expansion", text: "The adding of new lands. It gave the Vikings the resources they believed they needed." },
          { icon: "🏴", title: "Control", text: "Vikings took control of parts of England, Scotland, and France." },
          { icon: "🌊", title: "Baltic Sea", text: "Some settled on the shores of the Baltic Sea in what is now Latvia." },
          { icon: "🧊", title: "Erik the Red", text: "Left Iceland to settle in Greenland." },
          { icon: "🌎", title: "Leif Eriksson", text: "Erik’s son, believed to have been the first European to reach North America." }
        ] },

      { type: "section", title: "Viking Daily Life", icon: "🏘️", page: "11", color: "#b45309", image: "q2img/village.jpg", imageCaption: "A Viking settlement (textbook p. 11)",
        cards: [
          { icon: "🏠", title: "Homes", text: "Most Vikings lived in villages or on farms. They built simple one-story houses of wood or stone." },
          { icon: "🔥", title: "The open fireplace", text: "Indoors, family life centered on an open fireplace used for lighting, cooking and heating." },
          { icon: "🛠️", title: "Jobs", text: "Many men were employed building ships or as woodcarvers or fishermen." }
        ] },

      { type: "beforeafter", title: "From Raiders to Traders", icon: "🔄", page: "9, 11",
        before: { label: "Raiding", points: ["Attacked at night or early morning to take people by surprise", "Killed and destroyed what they did not take"] },
        after: { label: "Permanent settlements", points: ["The Vikings stopped raiding and attacking", "Trading became their main economic activity"] },
        result: ["Trading became the Vikings’ main economic activity"] },

      { type: "map", title: "Map: Viking Lands & Trade, 800–1000 CE", icon: "🗺️", page: "12", image: "q2img/vtrademap.jpg",
        legend: [{ sw: "#c4a6d8", text: "Viking lands, 800–1000 CE" }, { sw: "#9b7bb8", text: "Trade route (purple line)" }],
        facts: [
          "Viking lands: Norway, Sweden, Denmark and Iceland are shaded.",
          "Iceland: fish, wool, fat.",
          "Norway: iron, soapstone.",
          "England: wheat, wool, tin, honey, silver.",
          "Russia: furs, wax, honey.",
          "Greece: fruit, spices, silk, jewelry."
        ] },

      { type: "tree", title: "Viking Society: Three Classes", icon: "👥", page: "12",
        root: "Viking society",
        branches: [
          { icon: "👑", title: "Nobles", text: "The descendants of important ancestors in the Viking community." },
          { icon: "🧑‍🌾", title: "Common people", text: "Farmers and craftspeople." },
          { icon: "⛓️", title: "Enslaved persons", text: "Captured in battles or raids. They were allowed to sell the crafts they produced and buy their freedom." }
        ] }
    ],

    keywords: [
      { term: "814 CE", cat: "Date", star: true, def: "The year of Charlemagne’s death. Even before it, his empire came under attack from invaders." },
      { term: "Invaders", cat: "People", def: "Groups that attacked Charlemagne’s empire, such as the Arabs and Berbers and the Vikings." },
      { term: "Arabs and Berbers", cat: "People", star: true, def: "Invaders from northern Africa who attacked the empire’s Mediterranean coast." },
      { term: "Vikings", cat: "People", star: true, def: "Invaders from the North, from Scandinavia." },
      { term: "Scandinavia", cat: "Place", star: true, def: "The present-day countries of Denmark, Norway and Sweden." },
      { term: "700s CE", cat: "Date", def: "Scandinavia’s population grew so much that the farmland could not provide enough food for everyone." },
      { term: "Long ships / longships", cat: "Term", star: true, def: "Fast-moving Viking ships that reached coastal areas of northwestern Europe and sailed inland along rivers." },
      { term: "Skillful shipbuilders", cat: "Concept", def: "A description of the Vikings." },
      { term: "Surprise attacks", cat: "Concept", def: "The Vikings usually attacked at night or early in the morning to take people by surprise." },
      { term: "Territorial expansion", cat: "Term", star: true, def: "The adding of new lands." },
      { term: "Resources", cat: "Term", def: "What territorial expansion gave the Vikings — the resources they believed they needed." },
      { term: "Latvia", cat: "Place", def: "Where some Vikings settled, on the shores of the Baltic Sea." },
      { term: "Erik the Red", cat: "Person", def: "Left Iceland to settle in Greenland." },
      { term: "Leif Eriksson", cat: "Person", star: true, def: "Son of Erik the Red; believed to have been the first European to reach North America." },
      { term: "One-story houses", cat: "Term", def: "Simple Viking houses of wood or stone." },
      { term: "Open fireplace", cat: "Term", def: "The centre of Viking family life indoors; used for lighting, cooking and heating." },
      { term: "Woodcarvers", cat: "People", def: "One job of Viking men, along with building ships and fishing." },
      { term: "Permanent settlements", cat: "Term", def: "As the Vikings established them, they stopped raiding and attacking." },
      { term: "Trading", cat: "Term", star: true, def: "Became the Vikings’ main economic activity." },
      { term: "Nobles", cat: "People", def: "Viking class: the descendants of important ancestors in the Viking community." },
      { term: "Common people", cat: "People", def: "Viking class: farmers and craftspeople." },
      { term: "Enslaved persons", cat: "People", star: true, def: "Viking class: those captured in battles or raids; they could sell their crafts and buy their freedom." }
    ],

    quiz: [
      ["Invaders", "In what year did Charlemagne die?", "814 CE", ["536 CE", "568 CE", "982 CE"], "Even before Charlemagne’s death in 814 CE, his empire came under attack from invaders."],
      ["Invaders", "When did Charlemagne’s empire first come under attack from invaders?", "Even before Charlemagne’s death", ["Only 300 years after his death", "It was never attacked", "Only after 1453"], "Even before Charlemagne’s death in 814 CE, his empire came under attack from invaders."],
      ["Invaders", "Who attacked the empire from northern Africa?", "Arabs and Berbers", ["Vikings", "Lombards", "Ottoman Turks"], "From northern Africa, Arabs and Berbers attacked the empire’s Mediterranean coast."],
      ["Invaders", "Which part of the empire did the Arabs and Berbers attack?", "Its Mediterranean coast", ["Its northern forests", "The shores of the Baltic Sea", "Iceland"], "Arabs and Berbers attacked the empire’s Mediterranean coast."],
      ["Invaders", "From which direction did the Vikings invade?", "From the North", ["From the South", "From the East", "From northern Africa"], "Then Vikings invaded from the North, from Scandinavia."],
      ["Invaders", "Scandinavia is made up of which present-day countries?", "Denmark, Norway and Sweden", ["Spain, Portugal and Italy", "England, Scotland and France", "Russia, Latvia and Greece"], "Scandinavia: present-day countries of Denmark, Norway and Sweden."],
      ["Why the Vikings Left", "What happened to Scandinavia’s population in the 700s CE?", "It grew so much that the farmland could not feed everyone", ["It shrank because of a plague", "It moved to Africa", "It stayed the same"], "In the 700s CE, Scandinavia’s population grew so much that the land available for farming could not provide enough food for everyone."],
      ["Why the Vikings Left", "Why did many Scandinavians set out in long ships?", "To search for food, and steal it if they had to", ["To find a sea route to India", "To spread a new alphabet", "To escape the Ottoman Turks"], "Many Scandinavians set out in long ships, to search for food and steal it if they had to."],
      ["Viking Raiders", "The Vikings were skillful…", "Shipbuilders", ["Mapmakers", "Bankers", "Astronomers"], "The Vikings were skillful shipbuilders."],
      ["Viking Raiders", "What did the Vikings’ fast-moving longships allow them to do?", "Reach coastal areas of northwestern Europe and sail inland along rivers", ["Cross the Sahara Desert", "Reach China by land", "Fly over the mountains"], "Their fast-moving longships allowed them to reach many coastal areas of northwestern Europe and to sail inland along rivers."],
      ["Viking Raiders", "When did the Vikings usually attack?", "At night or early in the morning", ["At noon", "Only in the afternoon", "Only in winter"], "The Vikings usually attacked at night or early in the morning."],
      ["Viking Raiders", "Why did the Vikings attack at night or early in the morning?", "To take people by surprise", ["Because it was cooler", "Because they were trading", "Because they could not sail by day"], "They attacked at night or early in the morning in order to take people by surprise."],
      ["Viking Raiders", "Which sentence describes the Vikings as fighters?", "They were fierce, often killing everyone they found and destroying what they did not take", ["They were gentle and never fought", "They only fought with words", "They were afraid of battles"], "They were fierce fighters, often killing everyone they found and destroying what they did not take."],
      ["Territorial Expansion", "What does “territorial expansion” mean?", "The adding of new lands", ["Losing land", "Trading goods", "Building ships"], "This territorial expansion, or adding of new lands…"],
      ["Territorial Expansion", "What did territorial expansion give the Vikings?", "The resources they believed they needed", ["A new religion", "Maps and compasses", "Peace with Charlemagne"], "Territorial expansion gave the Vikings the resources they believed they needed."],
      ["Territorial Expansion", "In time, what did the Vikings begin to do on the lands they attacked?", "Settle on them", ["Leave them empty", "Burn all the forests", "Give them to Charlemagne"], "In time, the Vikings began to settle on the lands they attacked."],
      ["Territorial Expansion", "Vikings took control of parts of…", "England, Scotland, and France", ["China, India, and Japan", "Brazil and the Caribbean", "Egypt and Arabia"], "Vikings took control of parts of England, Scotland, and France."],
      ["Territorial Expansion", "Some Vikings settled on the shores of the Baltic Sea in what is now…", "Latvia", ["Spain", "Iceland", "Greenland"], "Some settled on the shores of the Baltic Sea in what is now Latvia."],
      ["Territorial Expansion", "Where did Erik the Red go when he left Iceland?", "Greenland", ["Latvia", "France", "Norway"], "Erik the Red left Iceland to settle in Greenland."],
      ["Territorial Expansion", "Who is believed to have been the first European to reach North America?", "Leif Eriksson", ["Erik the Red", "Charlemagne", "Justinian"], "His son, Leif Eriksson, is believed to have been the first European to reach North America."],
      ["Viking Daily Life", "Where did most Vikings live?", "In villages or on farms", ["In big stone castles", "In cities in Asia", "On their ships all year"], "Most Vikings lived in villages or on farms."],
      ["Viking Daily Life", "What kind of houses did the Vikings build?", "Simple one-story houses of wood or stone", ["Tall towers of brick", "Tents of animal skins", "Houses of glass"], "They built simple one-story houses of wood or stone."],
      ["Viking Daily Life", "Indoors, Viking family life centered on…", "An open fireplace", ["A large window", "A water well", "A library"], "Indoors, family life centered on an open fireplace."],
      ["Viking Daily Life", "What was the open fireplace used for?", "Lighting, cooking and heating", ["Making swords only", "Signalling ships", "Keeping animals"], "The open fireplace was used for lighting, cooking and heating."],
      ["Viking Daily Life", "Which jobs did many Viking men have?", "Building ships, woodcarving or fishing", ["Banking and teaching", "Mapmaking and printing", "Mining gold in Africa"], "Many men were employed building ships or as woodcarvers or fishermen."],
      ["From Raiders to Traders", "What happened as the Vikings established permanent settlements?", "They stopped raiding and attacking", ["They raided even more", "They left Europe", "They stopped building ships"], "As the Vikings established permanent settlements, they stopped raiding and attacking."],
      ["From Raiders to Traders", "What became the Vikings’ main economic activity?", "Trading", ["Raiding", "Mining", "Building castles"], "Trading became their main economic activity."],
      ["Map: Viking Trade", "On the Viking trade map, what does the purple shading show?", "Viking lands, 800–1000 CE", ["The Byzantine Empire", "Charlemagne’s empire", "The Ottoman Empire"], "The map key: purple shading = Viking lands, 800–1000 CE."],
      ["Map: Viking Trade", "On the map, which trade products are shown for Iceland?", "Fish, wool, fat", ["Silk, silver, spices", "Furs, wax, honey", "Fruit, spices, jewelry"], "The map shows “Fish, wool, fat” beside Iceland."],
      ["Map: Viking Trade", "On the map, which trade products are shown for England?", "Wheat, wool, tin, honey, silver", ["Fish, wool, fat", "Iron, soapstone", "Furs, wax, honey"], "The map shows “Wheat, wool, tin, honey, silver” beside England."],
      ["Viking Society", "How many classes made up Viking society?", "Three", ["Two", "Four", "Five"], "Viking society consisted of three classes: nobles, common people, and enslaved persons."],
      ["Viking Society", "Who were the Viking nobles?", "The descendants of important ancestors in the Viking community", ["Farmers and craftspeople", "People captured in raids", "Merchants from Venice"], "Nobles were the descendants of important ancestors in the Viking community."],
      ["Viking Society", "Who were the Viking common people?", "Farmers and craftspeople", ["Descendants of important ancestors", "People captured in battles", "Law speakers only"], "Common people were farmers and craftspeople."],
      ["Viking Society", "Who were the enslaved persons in Viking society?", "Those who had been captured in battles or raids", ["The descendants of important ancestors", "Farmers who owned land", "Visitors from Constantinople"], "Enslaved persons were those who had been captured in battles or raids."],
      ["Viking Society", "How could enslaved persons gain their freedom?", "By selling the crafts they produced and buying their freedom", ["By winning a ship race", "By moving to Greenland", "They could never be free"], "They were allowed to sell the crafts they produced and buy their freedom."]
    ]
  },

  /* =====================================================================
     LESSON 10: THE VIKINGS (G6+Q2.pdf pages 13–17)
     ===================================================================== */
  l10: {
    num: 10, title: "The Vikings", fullTitle: "Lesson 10: The Vikings", pages: "13–17", icon: "⚔️", color: "#7c3aed",
    infographic: [
      { type: "hero", icon: "⚔️", title: "Lesson 10: The Vikings",
        text: "Who were the Vikings? Fierce warriors, cruel conquerors and mighty raiders — but also great poets and storytellers, courageous explorers, excellent sailors and skilled shipbuilders." },

      { type: "versus", title: "Who Were the Vikings?", icon: "❓", page: "13",
        left: { name: "Fierce", icon: "🪓", points: ["Fierce warriors", "Cruel conquerors", "Mighty raiders", "In many places, they left a trail of terror"] },
        right: { name: "Skilled", icon: "✒️", points: ["Great poets and storytellers", "Courageous explorers", "Excellent sailors", "Skilled shipbuilders"] } },

      { type: "cards", title: "Homeland & Heyday", icon: "🏔️", page: "13",
        cards: [
          { icon: "📍", title: "Homeland", text: "The Vikings lived in the countries we know today as Denmark, Norway, and Sweden." },
          { icon: "⏳", title: "Heyday", text: "From the late 8th century CE to the late 11th century CE." },
          { icon: "🔎", title: "Searching for", text: "Land, gold, silver, and people to enslave." },
          { icon: "🧭", title: "Discovered", text: "Iceland, Greenland, and the Faroe Islands." },
          { icon: "🌎", title: "North America", text: "They were probably the first Europeans to land in North America." }
        ] },

      { type: "section", title: "The Thing: Viking Community Elections", icon: "🗳️", page: "13–14", color: "#0e8a8c", image: "q2img/thing.jpg", imageCaption: "An open-air meeting (textbook p. 14)",
        cards: [
          { icon: "🗳️", title: "Elections", text: "The Vikings held community elections long before the rest of Europe did." },
          { icon: "👥", title: "The Thing (ting)", text: "An open-air meeting that all free people could attend." },
          { icon: "📜", title: "What happened there", text: "Local problems were discussed and new laws were made." },
          { icon: "⛰️", title: "The law speaker", text: "People came from all over to hear the laws announced from the top of a hill by the law speaker." }
        ] },

      { type: "map", title: "The Vikings’ Golden Age", icon: "🌍", page: "14–15", image: "q2img/vroutes.jpg",
        legend: [{ sw: "#ffffff", text: "White lines: Viking routes" }],
        facts: [
          "The Vikings’ golden age lasted approximately 300 years.",
          "Strong footholds: Ireland, France, England, and Frisia (now parts of Germany and the Netherlands).",
          "They traveled to, raided, and traded with Spain, Italy, North Africa, Russia, Jerusalem, and the Byzantine Empire.",
          "The map also shows routes to Iceland, Greenland, Baffin Island and Newfoundland."
        ] },

      { type: "reasons", title: "Why Did Many Vikings Leave Home?", icon: "🚪", page: "15",
        center: "Most of the land in Scandinavia was not well suited for farming",
        items: [
          { icon: "🌲", text: "Sweden has dense forests." },
          { icon: "⛰️", text: "Much of Norway is mountainous." },
          { icon: "❄️", text: "The climate is cold and harsh." },
          { icon: "🪨", text: "The soil is poor." }
        ] },

      { type: "section", title: "Runes: The Viking Alphabet", icon: "🔤", page: "16", color: "#b45309", image: "q2img/futhark.jpg", imageCaption: "The 16 runes of the futhark (textbook p. 16)",
        cards: [
          { icon: "🔤", title: "The futhark", text: "The basic Viking alphabet was the futhark (FOO-thork)." },
          { icon: "🔢", title: "16 runes", text: "It was made up of 16 runes, or letters." },
          { icon: "🪵", title: "Carved and painted", text: "Runes were carved on stones or wood and painted in bright colors." },
          { icon: "🏛️", title: "In public places", text: "They were put in public places where people could read them." }
        ] },

      { type: "section", title: "Memorial Rune Stones", icon: "🪨", page: "16–17", image: "q2img/runestone.jpg", imageCaption: "Rune Stone (textbook p. 17)",
        cards: [
          { icon: "🎖️", title: "Honoring warriors", text: "Brave warriors, both dead and alive, were honored with memorial stones." },
          { icon: "🖼️", title: "Pictures and runes", text: "The memorial stones included pictures along with runic writing." }
        ] }
    ],

    keywords: [
      { term: "Vikings", cat: "People", star: true, def: "Fierce warriors, cruel conquerors and mighty raiders; also great poets and storytellers, courageous explorers, excellent sailors and skilled shipbuilders." },
      { term: "Denmark, Norway, and Sweden", cat: "Place", star: true, def: "The countries where the Vikings lived." },
      { term: "Heyday", cat: "Term", star: true, def: "The Vikings’ heyday extended from the late 8th century CE to the late 11th century CE." },
      { term: "Iceland, Greenland, and the Faroe Islands", cat: "Place", def: "Lands the Vikings discovered in their search for land, gold, silver, and people to enslave." },
      { term: "North America", cat: "Place", def: "The Vikings were probably the first Europeans to land there." },
      { term: "Trail of terror", cat: "Concept", def: "In many places, the Vikings left a trail of terror in their wake." },
      { term: "Community elections", cat: "Concept", def: "The Vikings held them long before the rest of Europe did." },
      { term: "Thing (ting)", cat: "Term", star: true, def: "An open-air meeting that all free people could attend, where local problems were discussed and new laws were made." },
      { term: "Law speaker", cat: "Person", star: true, def: "Announced the laws from the top of a hill." },
      { term: "Golden age", cat: "Term", star: true, def: "The Vikings’ golden age lasted approximately 300 years." },
      { term: "Footholds", cat: "Term", def: "During their golden age, the Vikings established strong footholds in Ireland, France, England, and Frisia." },
      { term: "Frisia", cat: "Place", def: "Now parts of Germany and the Netherlands." },
      { term: "Scandinavia", cat: "Place", def: "Denmark, Norway, and Sweden. Most of its land was not well suited for farming." },
      { term: "Dense forests", cat: "Concept", def: "Sweden has dense forests." },
      { term: "Mountainous", cat: "Concept", def: "Much of Norway is mountainous." },
      { term: "Cold, harsh climate & poor soil", cat: "Concept", def: "Reasons the land in Scandinavia was not well suited for farming." },
      { term: "Futhark (FOO-thork)", cat: "Term", star: true, def: "The basic Viking alphabet. It was made up of 16 runes, or letters." },
      { term: "Runes", cat: "Term", star: true, def: "Letters of the futhark, carved on stones or wood and painted in bright colors." },
      { term: "Memorial stones", cat: "Term", def: "Stones that honored brave warriors, both dead and alive, with pictures and runic writing." },
      { term: "Rune stone", cat: "Term", def: "A stone carved with runes (shown in the textbook)." }
    ],

    quiz: [
      ["Who Were the Vikings?", "Which list describes the Vikings, according to the textbook?", "Fierce warriors, cruel conquerors and mighty raiders", ["Peaceful farmers who never fought", "Desert traders and camel riders", "Roman senators and judges"], "Without a doubt, they were fierce warriors, cruel conquerors, and mighty raiders."],
      ["Who Were the Vikings?", "Besides being raiders, the Vikings were also…", "Great poets, storytellers, explorers, sailors and shipbuilders", ["Bad sailors who feared the sea", "Only farmers", "People who could not write"], "They were also great poets and storytellers, courageous explorers, excellent sailors, and skilled shipbuilders."],
      ["Homeland & Heyday", "In which countries did the Vikings live?", "Denmark, Norway, and Sweden", ["Spain, Portugal, and Italy", "England, France, and Ireland", "Russia, Greece, and Turkey"], "The Vikings lived in the countries we know today as Denmark, Norway, and Sweden."],
      ["Homeland & Heyday", "The Vikings’ heyday extended from…", "The late 8th century CE to the late 11th century CE", ["The 1st century to the 3rd century CE", "The 1400s to the 1500s", "536 CE to 568 CE"], "Their heyday extended from the late 8th century CE to the late 11th century CE."],
      ["Homeland & Heyday", "What were the Vikings searching for?", "Land, gold, silver, and people to enslave", ["Spices and silks from India", "A sea route to China", "Books and schools"], "In their search for land, gold, silver, and people to enslave, they discovered Iceland, Greenland, and the Faroe Islands."],
      ["Homeland & Heyday", "Which lands did the Vikings discover?", "Iceland, Greenland, and the Faroe Islands", ["Brazil, Cuba, and India", "Sicily, Crete, and Cyprus", "China and Japan"], "They discovered Iceland, Greenland, and the Faroe Islands."],
      ["Homeland & Heyday", "The Vikings were probably the first Europeans to land in…", "North America", ["Australia", "China", "India"], "They were probably the first Europeans to land in North America."],
      ["Homeland & Heyday", "What did the Vikings leave behind in many places?", "A trail of terror", ["Schools and libraries", "Peace treaties", "Empty ships"], "In many places, they left a trail of terror in their wake."],
      ["The Thing", "The Vikings held community elections…", "Long before the rest of Europe did", ["Long after the rest of Europe", "Never", "Only in Rome"], "The Vikings held community elections long before the rest of Europe did."],
      ["The Thing", "What was the open-air meeting of the Vikings called?", "A Thing (ting)", ["A Forum", "A Senate", "A futhark"], "All free people could attend the open-air meeting called a Thing (ting)."],
      ["The Thing", "Who could attend the Thing?", "All free people", ["Only kings", "Only enslaved persons", "Only warriors"], "All free people could attend the open-air meeting called a Thing."],
      ["The Thing", "What happened at the Thing?", "Local problems were discussed and new laws were made", ["Ships were built", "Runes were carved", "Goods were traded with Asia"], "At the Thing, local problems were discussed and new laws were made."],
      ["The Thing", "Who announced the laws, and from where?", "The law speaker, from the top of a hill", ["The king, from a ship", "A priest, from a church", "A merchant, from a market"], "People came from all over to hear the laws announced from the top of a hill by the law speaker."],
      ["Golden Age", "About how long did the Vikings’ golden age last?", "Approximately 300 years", ["About 30 years", "About 3 years", "About 3000 years"], "The Vikings’ golden age lasted approximately 300 years."],
      ["Golden Age", "Where did the Vikings establish strong footholds?", "Ireland, France, England, and Frisia", ["China, India, and Japan", "Brazil and the Caribbean", "Egypt and Arabia only"], "They established strong footholds in Ireland, France, England, and Frisia."],
      ["Golden Age", "Frisia is now part of which countries?", "Germany and the Netherlands", ["Spain and Portugal", "Norway and Sweden", "Italy and Greece"], "Frisia (now parts of Germany and the Netherlands)."],
      ["Golden Age", "Which places did the Vikings travel to, raid, and trade with?", "Spain, Italy, North Africa, Russia, Jerusalem, and the Byzantine Empire", ["China, Japan, and India only", "Only Iceland", "Only Denmark"], "They traveled to, raided, and traded with Spain, Italy, North Africa, Russia, Jerusalem, and the Byzantine Empire."],
      ["Why Vikings Left Home", "Why did many Vikings leave home to find new lands?", "Most of the land in Scandinavia was not well suited for farming", ["They wanted to see Charlemagne", "Their king ordered them to study", "Scandinavia was too hot"], "Many Vikings left home to find new lands because most of the land in Scandinavia was not well suited for farming."],
      ["Why Vikings Left Home", "Which country has dense forests?", "Sweden", ["Denmark", "Iceland", "Italy"], "Sweden has dense forests."],
      ["Why Vikings Left Home", "Much of which country is mountainous?", "Norway", ["Denmark", "Frisia", "Latvia"], "Much of Norway is mountainous."],
      ["Why Vikings Left Home", "What are Scandinavia’s climate and soil like?", "The climate is cold and harsh, and the soil is poor", ["The climate is warm, and the soil is rich", "The climate is dry, and the soil is sandy", "The climate is mild, and the soil is perfect"], "The climate is cold and harsh, and the soil is poor."],
      ["Runes", "What was the basic Viking alphabet called?", "The futhark", ["The Thing", "The husanotra", "The knörr"], "The basic Viking alphabet was the futhark (FOO-thork)."],
      ["Runes", "How many runes made up the futhark?", "16", ["12", "26", "32"], "It was made up of 16 runes, or letters."],
      ["Runes", "In the textbook, “runes” means…", "Letters", ["Ships", "Meetings", "Stones"], "It was made up of 16 runes, or letters."],
      ["Runes", "Runes were carved on…", "Stones or wood", ["Gold coins only", "Paper books", "Glass windows"], "Runes were carved on stones or wood and painted in bright colors."],
      ["Runes", "Why were runes put in public places?", "So people could read them", ["To hide them", "To scare enemies at sea", "To mark trade routes"], "They were put in public places where people could read them."],
      ["Runes", "How were brave warriors honored?", "With memorial stones that included pictures along with runic writing", ["With gold crowns", "With new longships", "With a feast at the Thing"], "Brave warriors, both dead and alive, were honored with memorial stones that included pictures along with runic writing."],
      ["Runes", "Which warriors were honored with memorial stones?", "Brave warriors, both dead and alive", ["Only dead kings", "Only living chiefs", "Only enslaved persons"], "Brave warriors, both dead and alive, were honored with memorial stones."]
    ]
  },

  /* =====================================================================
     LESSON 11: EXPLORERS & TRADERS – VIKING VESSELS (G6+Q2.pdf pages 17–26)
     Not used: the booklet line “The Vikings beat Columbus … by nearly 5000 years!” (p. 18) — not tested.
     ===================================================================== */
  l11: {
    num: 11, title: "Explorers & Traders – Viking Vessels", fullTitle: "Lesson 11: Explorers & Traders – Viking Vessels", pages: "17–26", icon: "⛵", color: "#0369a1",
    infographic: [
      { type: "hero", icon: "⛵", title: "Lesson 11: Explorers & Traders – Viking Vessels",
        text: "Imagine it’s the year 870 CE and you live in Norway. Food is scarce. What do you do? Where do you go? And what do you discover?" },

      { type: "reasons", title: "Life in Norway, 870 CE", icon: "❄️", page: "17",
        center: "Food is scarce — what do you do?",
        items: [
          { icon: "🥶", text: "Norway was a frigid place with little farmland." },
          { icon: "🏞️", text: "The fertile valleys that did exist were crowded." },
          { icon: "🌨️", text: "Another harsh winter had ruined the crops." },
          { icon: "🐄", text: "The animals had starved or frozen." }
        ] },

      { type: "section", title: "Ingolf Reaches Iceland", icon: "🌋", page: "19", color: "#b45309", image: "q2img/ingolf.jpg", imageCaption: "Ingolf (textbook p. 19)",
        cards: [
          { icon: "⛵", title: "870 CE", text: "Ingolf, a Norwegian farmer, set sail from his home. He was not certain where he would end up." },
          { icon: "🌋", title: "Seven long days", text: "Then he saw huge lava cliffs that seemed to rise out of the sea." },
          { icon: "🏝️", title: "Iceland", text: "A volcanic island 620 miles from Norway across the North Sea." },
          { icon: "🌾", title: "What he found", text: "Lush farmland along the coast, untouched forests, fish-filled waters, and iron and soapstone to make weapons." },
          { icon: "🏔️", title: "Never settled", text: "Iceland’s interior, with its rugged mountains, volcanoes, and glaciers, was never settled." },
          { icon: "👥", title: "By 934 CE", text: "More than 10,000 Vikings had populated Iceland’s coast." }
        ] },

      { type: "section", title: "Erik the Red and Greenland", icon: "🧊", page: "20", color: "#0e8a8c", image: "q2img/erikship.jpg", imageCaption: "Viking ship (textbook p. 20)",
        cards: [
          { icon: "➡️", title: "Norway → Iceland", text: "Erik came to Iceland with his family after being forced to leave Norway because his father had been accused of murder." },
          { icon: "🚪", title: "Forced to leave again", text: "In time, Erik was forced to leave Iceland after he, too, was accused of murder." },
          { icon: "🧊", title: "982 CE", text: "Erik headed out to sea and came upon a mostly ice-covered land. He named the place Greenland." },
          { icon: "🏅", title: "Who gets the credit?", text: "A man named Gunnbjörn had discovered Greenland earlier, but Erik the Red is given credit for exploring and settling it." }
        ] },

      { type: "timeline", title: "Who Discovered America?", icon: "🌎", page: "18", events: [
        { date: "About 1000 CE", title: "Blown off course", text: "Leif Eriksson, son of Erik the Red, was sailing to Greenland when gales (heavy winds) blew his ship off course." },
        { date: "About 1000 CE", title: "Vinland", text: "Leif landed in a place that had many grapevines, so he called it Vinland." },
        { date: "Today’s view", title: "Newfoundland, Canada", text: "Historians believe he landed in what is now Newfoundland — making him the first European to set foot on the North American continent." },
        { date: "For centuries", title: "Arguments raged", text: "Was Christopher Columbus or a Viking the first to discover the “New World”? Proof could not be found." },
        { date: "1960", title: "Proof found", text: "Traces of a Viking settlement were found in Newfoundland — proof of the early Viking presence there." }
      ]},

      { type: "tree", title: "Smart Viking Traders", icon: "⚖️", page: "21",
        root: "The Vikings were smart traders",
        branches: [
          { icon: "📤", title: "Took to distant lands", text: "Whale, walrus, and seal skins (for ship ropes); iron (for weapons); whale bones and walrus-tusk ivory (for carving figures); timber (wood); amber (fossilized tree resin), traded as beads." },
          { icon: "🧵", title: "From Britain", text: "Silver, cloth, and wheat." },
          { icon: "🏺", title: "From the Mediterranean region", text: "Gold, pottery, and salt." },
          { icon: "🕌", title: "From Russia, Constantinople, Jerusalem and others", text: "Spices, silks, glass, and enslaved people. (Constantinople is modern-day Istanbul, Turkey.)" }
        ] },

      { type: "section", title: "Viking Treasures", icon: "💎", page: "22", image: "q2img/artifacts.jpg", imageCaption: "Walrus-ivory figurine, amber beads, silver cup, gold and silver brooch (textbook p. 22)",
        cards: [
          { icon: "🗿", title: "Walrus-ivory figurine", text: "A figure carved from walrus ivory." },
          { icon: "📿", title: "Amber beads", text: "Amber is fossilized tree resin, traded as beads." },
          { icon: "🏆", title: "Silver cup", text: "A cup made of silver." },
          { icon: "📌", title: "Brooch", text: "A gold and silver brooch (badge or pin)." }
        ] },

      { type: "cards", title: "Going “A-Viking”", icon: "🌊", page: "22",
        cards: [
          { icon: "🧭", title: "750 CE – 1100 CE", text: "If you were a man in Scandinavia at this time, at some point you would have gone “a-viking” — gone to sea — to seek adventure." },
          { icon: "🛡️", title: "Feeling safe", text: "You would have felt safe while traveling. After all, Viking ships were the most advanced of the day." }
        ] },

      { type: "chain", title: "How Do We Know What Viking Ships Looked Like?", icon: "⚱️", page: "22–23",
        steps: [
          "It was a Viking tradition to bury rich people and their belongings in ships that had been dragged to the land.",
          "The ships were believed to carry the dead to “Viking Heaven”.",
          "The buried items would allow the person to continue his life in the next world.",
          "Luckily, a few Viking ships were found buried in large mounds."
        ],
        end: "Buried ships show us what Viking ships looked like" },

      { type: "section", title: "Kinds of Vessels: The Viking Longship", icon: "🐉", page: "23", color: "#b91c1c", image: "q2img/longship.jpg", imageCaption: "A Viking longship (textbook p. 9)",
        cards: [
          { icon: "📏", title: "Shape", text: "A slender, low and very fast wooden ship." },
          { icon: "🐉", title: "Beast prow and stern", text: "The prow and stern might be carved in the shape of a beast, to scare enemies. The beasts were covered in gold and silver." },
          { icon: "⛵", title: "Sail", text: "One large sail, often striped and with a colorful design on it." },
          { icon: "🎨", title: "Hull", text: "The hull was painted in bright colors." },
          { icon: "👥", title: "Crew", text: "A Viking longship often carried 50 or more warriors." }
        ] },

      { type: "section", title: "The Gokstad Ship", icon: "🏆", page: "24", image: "q2img/gokstad.jpg", imageCaption: "The Gokstad ship (textbook p. 24)",
        cards: [
          { icon: "🏆", title: "Best-preserved", text: "One of the best-preserved Viking ships." },
          { icon: "📍", title: "Found in 1880", text: "Near Oslo, Norway." },
          { icon: "⚔️", title: "A warship", text: "In its sailing days, a strong, slender warship." },
          { icon: "🛡️", title: "32 shields", text: "Thirty-two brightly painted shields flanked each side." },
          { icon: "💀", title: "Unearthed", text: "Diggers found a man’s skeleton along with some of his possessions." },
          { icon: "🌊", title: "1893 replica", text: "A replica (life-size model) sailed across the Atlantic Ocean to Newfoundland and then on to Chicago for the World’s Fair." }
        ] },

      { type: "section", title: "The Knörr and Other Viking Vessels", icon: "📦", page: "25", color: "#0e8a8c", image: "q2img/knorr.jpg", imageCaption: "A knörr (textbook p. 25)",
        cards: [
          { icon: "📦", title: "Knörr", text: "The main vessel the Vikings used when they went trading and exploring in the western Atlantic Ocean." },
          { icon: "🚤", title: "Many vessels", text: "The Vikings built warships, cargo boats, fishing boats, ferries, and rowboats, made for different purposes." }
        ] },

      { type: "reasons", title: "The Same Basic Design", icon: "🔧", page: "25",
        center: "All Viking ships shared the same basic design",
        items: [
          { icon: "🪵", text: "Overlapping planks" },
          { icon: "↔️", text: "Matching prow and stern" },
          { icon: "📍", text: "A sturdy mast" },
          { icon: "⛵", text: "A single full sail" },
          { icon: "⚓", text: "A keel" }
        ] },

      { type: "section", title: "Navigating Without Maps or Compasses", icon: "⭐", page: "26", color: "#7c3aed", image: "q2img/husanotra.jpg", imageCaption: "Using a notched stick (textbook p. 26)",
        cards: [
          { icon: "⭐", title: "The stars", text: "The Vikings sailed far from home without maps or compasses, using the stars as their guide." },
          { icon: "📏", title: "Husanotra (hoo-sah-NO-trah)", text: "A special notched stick that may have measured how high above the horizon the stars were — that could have helped them figure out the ship’s latitude." },
          { icon: "☁️", title: "Clouds and water", text: "They knew the meanings of different cloud formations and colors of water." },
          { icon: "🐦", title: "Nature", text: "They knew a lot about waves, the wind, and the locations of birds and fish." },
          { icon: "💎", title: "Sunstones", text: "On cloudy days, Viking sailors used sunstones — special crystals — to help them find their path." }
        ] }
    ],

    keywords: [
      { term: "870 CE", cat: "Date", star: true, def: "The year Ingolf, a Norwegian farmer, set sail from his home and reached Iceland." },
      { term: "Frigid", cat: "Term", def: "How the textbook describes Norway in 870 CE: a frigid place with little farmland." },
      { term: "Fertile valleys", cat: "Term", def: "The fertile valleys that did exist in Norway were crowded." },
      { term: "Leif Eriksson", cat: "Person", star: true, def: "Son of Erik the Red; believed to be the first European to set foot on the North American continent." },
      { term: "Gales", cat: "Term", star: true, def: "Heavy winds. They blew Leif Eriksson’s ship off course in about 1000 CE." },
      { term: "Vinland", cat: "Place", star: true, def: "The name Leif gave the place he landed, because it had many grapevines." },
      { term: "Newfoundland, Canada", cat: "Place", def: "Where historians believe Leif landed; traces of a Viking settlement were found there in 1960." },
      { term: "“New World”", cat: "Term", def: "Arguments raged for centuries over whether Columbus or a Viking was the first to discover it." },
      { term: "1960", cat: "Date", def: "Traces of a Viking settlement were found in Newfoundland — proof of the early Viking presence there." },
      { term: "Ingolf", cat: "Person", star: true, def: "A Norwegian farmer who set sail in 870 CE and, after seven days, reached Iceland." },
      { term: "Iceland", cat: "Place", star: true, def: "A volcanic island 620 miles from Norway across the North Sea; more than 10,000 Vikings populated its coast by 934 CE." },
      { term: "Soapstone", cat: "Term", def: "Found with iron in Iceland; used to make weapons." },
      { term: "Erik the Red", cat: "Person", star: true, def: "Forced to leave Iceland after being accused of murder; in 982 CE he named Greenland and is given credit for exploring and settling it." },
      { term: "Gunnbjörn", cat: "Person", def: "A man who had discovered Greenland before Erik the Red." },
      { term: "Greenland", cat: "Place", def: "A mostly ice-covered land that Erik the Red came upon and named in 982 CE." },
      { term: "Amber", cat: "Term", star: true, def: "Fossilized tree resin, which the Vikings traded as beads." },
      { term: "Timber", cat: "Term", def: "Wood — one of the goods the Vikings took to distant lands." },
      { term: "Ivory", cat: "Term", def: "From walrus tusks; used for carving figures." },
      { term: "Constantinople", cat: "Place", def: "Modern-day Istanbul, Turkey; the Vikings traded there for spices, silks, glass, and enslaved people." },
      { term: "Brooch", cat: "Term", def: "A badge or pin (a gold and silver brooch is shown in the textbook)." },
      { term: "“A-viking”", cat: "Term", star: true, def: "Going to sea to seek adventure — what a man in Scandinavia between 750 CE and 1100 CE would have done." },
      { term: "Viking Heaven", cat: "Term", def: "Where the burial ships were believed to carry the dead." },
      { term: "Mounds", cat: "Term", def: "A few Viking ships were found buried in large mounds." },
      { term: "Longship", cat: "Term", star: true, def: "A slender, low and very fast wooden ship with one large sail; it often carried 50 or more warriors." },
      { term: "Prow and stern", cat: "Term", def: "On a longship they might be carved in the shape of a beast, to scare enemies. All Viking ships had a matching prow and stern." },
      { term: "Hull", cat: "Term", def: "On a Viking longship, the hull was painted in bright colors." },
      { term: "Gokstad ship", cat: "Term", star: true, def: "One of the best-preserved Viking ships, found in 1880 near Oslo, Norway; 32 painted shields flanked each side." },
      { term: "Replica", cat: "Term", def: "A life-size model. In 1893 a replica of the Gokstad ship sailed to Newfoundland and Chicago." },
      { term: "Knörr", cat: "Term", star: true, def: "The main vessel the Vikings used for trading and exploring in the western Atlantic Ocean." },
      { term: "Keel", cat: "Term", def: "Part of the basic design shared by all Viking ships." },
      { term: "Husanotra (hoo-sah-NO-trah)", cat: "Term", star: true, def: "A special notched stick that may have measured how high above the horizon the stars were." },
      { term: "Latitude", cat: "Term", def: "Measuring the height of the stars could have helped the Vikings figure out the ship’s latitude." },
      { term: "Sunstones", cat: "Term", star: true, def: "Special crystals Viking sailors used on cloudy days to help them find their path." }
    ],

    quiz: [
      ["Life in Norway, 870 CE", "How does the textbook describe Norway in 870 CE?", "A frigid place with little farmland", ["A hot desert", "A land full of empty fertile valleys", "A place with too much food"], "Imagine it’s the year 870 CE and you live in Norway, a frigid place with little farmland."],
      ["Life in Norway, 870 CE", "What was true about the fertile valleys in Norway?", "They were crowded", ["They were empty", "They were covered in sand", "They were full of spices"], "The fertile valleys that do exist are crowded."],
      ["Life in Norway, 870 CE", "Why was food scarce in Norway?", "A harsh winter had ruined the crops and starved or frozen the animals", ["The Lombards took all the food", "There was too much rain in summer", "Charlemagne collected all the food"], "Food is scarce because another harsh winter has ruined the crops and starved or frozen the animals."],
      ["Who Discovered America?", "Who was Leif Eriksson’s father?", "Erik the Red", ["Ingolf", "Charlemagne", "Gunnbjörn"], "Leif Eriksson was the son of famed Viking, Erik the Red."],
      ["Who Discovered America?", "In about 1000 CE, what blew Leif Eriksson’s ship off course?", "Gales (heavy winds)", ["A volcano", "Ice cliffs", "A sea battle"], "On a voyage to Greenland in about 1000 CE, his ship was blown off course by gales (heavy winds)."],
      ["Who Discovered America?", "Where was Leif Eriksson sailing when he was blown off course?", "To Greenland", ["To Rome", "To India", "To Spain"], "On a voyage to Greenland in about 1000 CE, his ship was blown off course."],
      ["Who Discovered America?", "Why did Leif call the place he landed “Vinland”?", "It had many grapevines", ["It had many volcanoes", "It was covered in ice", "It had many Vikings"], "Leif landed in a place that had many grapevines, so he called it Vinland."],
      ["Who Discovered America?", "Where do historians believe Leif landed?", "In what is now Newfoundland, Canada", ["In what is now Brazil", "In the Caribbean Sea", "In what is now Latvia"], "Historians believe he landed in what is now Newfoundland, Canada."],
      ["Who Discovered America?", "If Leif landed in Newfoundland, what would that make him?", "The first European to set foot on the North American continent", ["The first emperor of Rome", "The founder of Iceland", "The inventor of the futhark"], "That would make him the first European to set foot on the North American continent."],
      ["Who Discovered America?", "What did people argue about for centuries?", "Whether Columbus or a Viking was the first to discover the “New World”", ["Who built the first longship", "Who wrote the futhark", "Who captured Constantinople"], "Arguments raged for centuries over whether Christopher Columbus or a Viking was the first to discover the “New World”."],
      ["Who Discovered America?", "What was found in Newfoundland in 1960?", "Traces of a Viking settlement", ["The Gokstad ship", "Columbus’s ships", "A rune alphabet"], "In 1960, traces of a Viking settlement were found in Newfoundland — proof of the early Viking presence there."],
      ["Ingolf & Iceland", "Who was Ingolf?", "A Norwegian farmer", ["A Roman emperor", "A Venetian merchant", "The law speaker of Sweden"], "When Ingolf, a Norwegian farmer, set sail from his home in 870 CE…"],
      ["Ingolf & Iceland", "What did Ingolf see after seven long days at sea?", "Huge lava cliffs that seemed to rise out of the sea", ["Grapevines and forests", "Ice-covered land", "The city of Constantinople"], "After seven long days, he saw huge lava cliffs that seemed to rise out of the sea."],
      ["Ingolf & Iceland", "How far is Iceland from Norway?", "620 miles, across the North Sea", ["62 miles, across a river", "6200 miles, across the Pacific", "2 miles, across a lake"], "Iceland, a volcanic island 620 miles from Norway across the North Sea."],
      ["Ingolf & Iceland", "What did Ingolf find in Iceland?", "Lush farmland, untouched forests, fish-filled waters, and iron and soapstone", ["Gold mines and spices", "Grapevines and deserts", "Big cities and markets"], "Ingolf saw lush farmland along the coast and untouched forests. He found fish-filled waters, and iron and soapstone to make weapons."],
      ["Ingolf & Iceland", "What were iron and soapstone used for?", "To make weapons", ["To build fireplaces", "To make ropes", "To carve runes on paper"], "He found … iron and soapstone to make weapons."],
      ["Ingolf & Iceland", "Which part of Iceland was never settled?", "Its interior, with rugged mountains, volcanoes, and glaciers", ["Its coast", "Its farmland", "Its fishing villages"], "Iceland’s interior, with its rugged mountains, volcanoes, and glaciers, was never settled."],
      ["Ingolf & Iceland", "How many Vikings had populated Iceland’s coast by 934 CE?", "More than 10,000", ["About 100", "Exactly 620", "About 1000"], "More than 10,000 Vikings had populated its coast by 934 CE."],
      ["Erik the Red", "Why did Erik the Red’s family leave Norway?", "His father had been accused of murder", ["They wanted to trade amber", "There was a plague", "Charlemagne invaded Norway"], "Erik came to Iceland with his family after being forced to leave Norway because his father had been accused of murder."],
      ["Erik the Red", "Why was Erik forced to leave Iceland?", "He, too, was accused of murder", ["He wanted to find spices", "The volcanoes erupted", "He was elected king"], "In time, Erik was forced to leave Iceland after he, too, was accused of murder."],
      ["Erik the Red", "In what year did Erik the Red come upon a mostly ice-covered land and name it Greenland?", "982 CE", ["870 CE", "934 CE", "1000 CE"], "In 982 CE, Erik headed out to sea and came upon a mostly ice-covered land. He named the place Greenland."],
      ["Erik the Red", "Who had discovered Greenland before Erik the Red?", "A man named Gunnbjörn", ["Ingolf", "Leif Eriksson", "Marco Polo"], "Although a man named Gunnbjörn had discovered Greenland earlier, Erik the Red is given credit for exploring and settling it."],
      ["Erik the Red", "Erik the Red is given credit for…", "Exploring and settling Greenland", ["Discovering Iceland", "Building the Gokstad ship", "Inventing the husanotra"], "Erik the Red is given credit for exploring and settling it."],
      ["Smart Traders", "What did the Vikings use whale, walrus, and seal skins for?", "Making ship ropes", ["Making sails for kings", "Making books", "Making coins"], "To distant lands, they took whale, walrus, and seal skins for making ship ropes."],
      ["Smart Traders", "What were whale bones and walrus-tusk ivory used for?", "Carving figures", ["Making weapons", "Building houses", "Making glass"], "They also had whale bones and ivory from walrus tusks for carving figures."],
      ["Smart Traders", "What is amber?", "Fossilized tree resin", ["A type of metal", "A kind of fish", "A Viking ship"], "Amber (fossilized tree resin), which they traded as beads."],
      ["Smart Traders", "In what form did the Vikings trade amber?", "As beads", ["As coins", "As ropes", "As sails"], "Timber (wood) and amber (fossilized tree resin), which they traded as beads."],
      ["Smart Traders", "What did the Vikings get from Britain?", "Silver, cloth, and wheat", ["Gold, pottery, and salt", "Spices, silks, and glass", "Iron and soapstone"], "From Britain, the Vikings got silver, cloth, and wheat."],
      ["Smart Traders", "What did the Vikings get from the Mediterranean region?", "Gold, pottery, and salt", ["Silver, cloth, and wheat", "Furs and amber", "Whale bones"], "From the Mediterranean region, they got gold, pottery, and salt."],
      ["Smart Traders", "Constantinople is the same city as modern-day…", "Istanbul, Turkey", ["Oslo, Norway", "Rome, Italy", "Jerusalem"], "Constantinople (modern-day Istanbul, Turkey)."],
      ["Smart Traders", "What did the Vikings trade for in Russia, Constantinople, and Jerusalem?", "Spices, silks, glass, and enslaved people", ["Silver, cloth, and wheat", "Gold, pottery, and salt", "Timber and amber"], "From places like Russia, Constantinople, Jerusalem, and others, they traded for spices, silks, glass, and enslaved people."],
      ["Smart Traders", "In the textbook, a “brooch” is…", "A badge or pin", ["A silver cup", "A carved figure", "A string of beads"], "Gold and silver brooch (badge or pin)."],
      ["Going A-Viking", "What does going “a-viking” mean?", "Going to sea to seek adventure", ["Going to the Thing", "Carving runes", "Farming in the valleys"], "At some point you would have gone “a-viking” – gone to sea – to seek adventure."],
      ["Going A-Viking", "Why would a Viking have felt safe while traveling?", "Viking ships were the most advanced of the day", ["The seas were always calm", "They had maps and compasses", "They never left the coast"], "You would have felt safe while traveling. After all, Viking ships were the most advanced of the day."],
      ["Going A-Viking", "Between which years would a man in Scandinavia have gone “a-viking”?", "750 CE and 1100 CE", ["100 CE and 300 CE", "1400 and 1500", "536 CE and 568 CE"], "If you were a man in Scandinavia between 750 CE and 1100 CE, at some point you would have gone “a-viking”."],
      ["Buried Ships", "Where were a few Viking ships found?", "Buried in large mounds", ["At the bottom of the Black Sea", "Inside churches", "In Charlemagne’s palace"], "Luckily, a few Viking ships were found buried in large mounds."],
      ["Buried Ships", "What was the Viking tradition for burying rich people?", "Burying them and their belongings in ships dragged to the land", ["Burying them under rune stones only", "Sending them to Constantinople", "Burning their houses"], "It was a Viking tradition to bury rich people and their belongings in ships that had been dragged to the land."],
      ["Buried Ships", "Where were the burial ships believed to carry the dead?", "To “Viking Heaven”", ["To Greenland", "To Vinland", "To the Thing"], "The ships were believed to carry the dead to “Viking Heaven”."],
      ["Buried Ships", "Why were items buried with the dead person?", "To allow the person to continue his life in the next world", ["To pay taxes", "To trade with other Vikings", "To scare enemies"], "The buried items would allow the person to continue his life in the next world."],
      ["The Longship", "Which describes the Viking longship?", "Slender, low and very fast wooden ship", ["Tall, slow stone ship", "Wide, heavy iron ship", "A small rowboat for fishing only"], "The Viking long ship was a slender, low and very fast wooden ship."],
      ["The Longship", "Why might the prow and stern be carved in the shape of a beast?", "To scare enemies", ["To carry more cargo", "To help steer at night", "To honor Charlemagne"], "Its prow and its stern might be carved to give it the shape of a beast, to scare enemies."],
      ["The Longship", "What were the carved beasts covered in?", "Gold and silver", ["Amber beads", "Seal skins", "Bright paint only"], "The beasts were covered in gold and silver."],
      ["The Longship", "How many warriors did a Viking longship often carry?", "50 or more", ["5 or fewer", "About 10", "Exactly 32"], "A Viking long ship often carried 50 or more warriors."],
      ["The Longship", "Which is true of a longship’s sail?", "One large sail, often striped and colorful", ["Many small white sails", "No sail at all", "Two triangular sails"], "The ship had one large sail … the sail was often striped and had a colorful design on it."],
      ["The Gokstad Ship", "Where and when was the Gokstad ship found?", "Near Oslo, Norway, in 1880", ["In Newfoundland in 1960", "In Iceland in 934 CE", "In Chicago in 1893"], "The Gokstad ship was found in 1880 near Oslo, Norway."],
      ["The Gokstad Ship", "How many brightly painted shields flanked each side of the Gokstad ship?", "Thirty-two", ["Sixteen", "Fifty", "Ten"], "Thirty-two brightly painted shields flanked each side."],
      ["The Gokstad Ship", "What did the diggers find when the Gokstad ship was unearthed?", "A man’s skeleton along with some of his possessions", ["A map of America", "A box of spices", "A rune alphabet"], "When the ship was unearthed, the diggers found a man’s skeleton along with some of his possessions."],
      ["The Gokstad Ship", "What happened in 1893?", "A replica of the Gokstad ship sailed to Newfoundland and on to Chicago for the World’s Fair", ["The Gokstad ship was found", "Traces of a Viking settlement were found", "Leif Eriksson reached Vinland"], "In 1893, a replica (life-size model) of the Gokstad ship sailed across the Atlantic Ocean to Newfoundland and then on to Chicago for the World’s Fair."],
      ["The Gokstad Ship", "In the textbook, a “replica” is…", "A life-size model", ["A burial mound", "A trade route", "A painted shield"], "A replica (life-size model) of the Gokstad ship."],
      ["Kinds of Vessels", "What was the main vessel the Vikings used for trading and exploring in the western Atlantic Ocean?", "The knörr", ["The Gokstad ship", "The caravel", "The rowboat"], "A knörr was the main vessel Vikings used when they went trading and exploring in the western Atlantic Ocean."],
      ["Kinds of Vessels", "Which kinds of ships did the Vikings build?", "Warships, cargo boats, fishing boats, ferries, and rowboats", ["Only warships", "Only caravels", "Only fishing boats"], "The Vikings built warships, cargo boats, fishing boats, ferries, and rowboats."],
      ["Kinds of Vessels", "Which is part of the basic design shared by all Viking ships?", "Overlapping planks, matching prow and stern, a sturdy mast, a single full sail, and a keel", ["Triangular sails and a compass", "Metal sides and two masts", "No mast and no sail"], "They all had the same basic design: overlapping planks, matching prow and stern, a sturdy mast, a single full sail, and a keel."],
      ["Navigation", "What did the Vikings use as their guide instead of maps or compasses?", "The stars", ["Rune stones", "The law speaker", "Astrolabes"], "The Vikings sailed far from home without the help of maps or compasses, instead using the stars as their guide."],
      ["Navigation", "What was a husanotra?", "A special notched stick that may have measured how high the stars were above the horizon", ["A Viking sail", "A type of crystal", "A meeting place"], "A special notched stick, called a husanotra, may have measured how high above the horizon the stars were."],
      ["Navigation", "Measuring the stars with a husanotra could have helped the Vikings figure out…", "The ship’s latitude", ["The price of amber", "The time of the Thing", "The number of warriors"], "That could have helped them figure out the ship’s latitude."],
      ["Navigation", "Which natural signs also helped the Vikings navigate?", "Cloud formations, colors of water, waves, wind, and the locations of birds and fish", ["Only the moon", "Only maps", "Only the sound of bells"], "They knew the meanings of different cloud formations and colors of water … waves, the wind, and the locations of birds and fish."],
      ["Navigation", "What did Viking sailors use on cloudy days?", "Sunstones — special crystals", ["Compasses", "Notched sticks", "Rune stones"], "On cloudy days, Viking sailors used sunstones – special crystals – to help them find their path."]
    ]
  },

  /* =====================================================================
     EXPLORATION LESSON 1: SETTING THE STAGE OF EXPLORATION (G6+Q2.pdf pages 27–30)
     ===================================================================== */
  x1: {
    num: 1, title: "Setting the Stage of Exploration", fullTitle: "Lesson 1: Setting the Stage of Exploration", pages: "27–30", icon: "🌍", color: "#c2410c",
    infographic: [
      { type: "hero", icon: "🌍", title: "Lesson 1: Setting the Stage of Exploration",
        text: "It’s the early 1400s in Europe. Most people live very simple lives, with only the basic things they need to survive." },

      { type: "versus", title: "Early Life in the 1400s", icon: "🏠", page: "27",
        left: { name: "Most people", icon: "🧺", points: ["Lived very simple lives", "Had only the basic things they needed to survive"] },
        right: { name: "Nobles & the very wealthy", icon: "💎", points: ["Had more comfortable lives", "Enjoyed spices, silks, fine china and other luxury goods that came from Asia"] } },

      { type: "chain", title: "The Problem with Trade", icon: "💰", page: "27",
        steps: [
          "Luxury goods such as spices, silks and fine china came from Asia.",
          "Trade between Europe and Asia was controlled by Italian and Arab traders.",
          "These traders could charge high prices for these goods."
        ],
        end: "European rulers dreamed of finding new sea routes to Asia" },

      { type: "cards", title: "The Dream of New Sea Routes", icon: "🧭", page: "27",
        cards: [
          { icon: "👑", title: "The dream", text: "The rulers of several European countries dreamed of finding new sea routes to Asia." },
          { icon: "🤝", title: "Trading directly", text: "This could allow their own merchants to trade directly with Asia." },
          { icon: "💰", title: "Keeping the profits", text: "Instead of making the Italian and Arab traders rich, they could keep the profits from trade for themselves." }
        ] },

      { type: "section", title: "Is the Earth Round?", icon: "🌐", page: "27–28", color: "#0369a1", image: "q2img/globes.jpg", imageCaption: "Round, flat or pear-shaped? (textbook p. 28)",
        cards: [
          { icon: "📜", title: "Ancient Greek & medieval Muslim scholars", text: "They knew that the Earth was a sphere." },
          { icon: "❓", title: "Christians in medieval Europe", text: "Weren’t so sure. Some argued that the Earth was flat, or even pear-shaped." },
          { icon: "✅", title: "By the 1400s", text: "The belief in a round Earth was common in Europe." },
          { icon: "⬅️", title: "A new idea", text: "Navigators began to consider the possibility of sailing west, instead of east, to reach Asia." }
        ] },

      { type: "chain", title: "The Ottomans", icon: "🏰", page: "28", color: "#b91c1c", image: "q2img/constantinople.jpg", imageCaption: "The fall of Constantinople (textbook p. 28)",
        steps: [
          "In 1453, the Ottoman Turks captured the city of Constantinople.",
          "This gave the Ottoman Empire almost complete control over trade routes between Europe and Asia.",
          "After the fall of Constantinople, few Asian goods were reaching Europe."
        ],
        end: "Europeans had more reason than ever to look for new routes to Asia" },

      { type: "section", title: "The Venetian Merchant: Marco Polo", icon: "📖", page: "29", color: "#7c3aed", image: "q2img/marcopolo.jpg", imageCaption: "Marco Polo (textbook p. 29)",
        cards: [
          { icon: "🐫", title: "1200s", text: "The Venetian merchant Marco Polo traveled to China." },
          { icon: "📖", title: "Around 1300", text: "He wrote about his travels in a book published around 1300." },
          { icon: "📚", title: "By the 1400s", text: "Many Europeans had read his popular book, and some were inspired to explore the world." },
          { icon: "⛵", title: "Viking stories", text: "Those explorers may also have been inspired by stories of Viking voyages across the Atlantic many years earlier." }
        ] },

      { type: "section", title: "The Improved Caravel", icon: "⛵", page: "30", color: "#0e8a8c", image: "q2img/caravel.jpg", imageCaption: "A caravel (textbook p. 31)",
        cards: [
          { icon: "🔧", title: "Improved in the 1400s", text: "Portuguese shipbuilders made improvements to the caravel, turning it into an ideal ship for exploration." },
          { icon: "💪", title: "Strong", text: "Strong enough for long ocean voyages." },
          { icon: "⚡", title: "Light and fast", text: "Lighter and faster than other ocean-going ships." },
          { icon: "🏖️", title: "Shallow waters", text: "It could glide through shallow coastal waters." },
          { icon: "🔺", title: "Triangular sails", text: "Made it easier to sail against the wind." },
          { icon: "🧭", title: "Columbus", text: "Columbus would later bring caravels on his first voyage to the Americas." }
        ] },

      { type: "cards", title: "Lesson Goals (from the booklet)", icon: "🎯", page: "30",
        cards: [
          { icon: "🌊", title: "Goal 1", text: "Identify that trade was easier explored through seas." },
          { icon: "🤝", title: "Goal 2", text: "Identify that trade between Europe & Asia was controlled by Italian & Arab traders." },
          { icon: "🏰", title: "Goal 3", text: "Acknowledge the main important characteristics of the Middle Ages." }
        ] }
    ],

    keywords: [
      { term: "Early 1400s", cat: "Date", def: "The time this lesson describes: most people in Europe lived very simple lives." },
      { term: "Simple lives", cat: "Concept", def: "Most people had only the basic things they needed to survive." },
      { term: "Nobles and the very wealthy", cat: "People", def: "Had more comfortable lives and enjoyed luxury goods from Asia." },
      { term: "Luxury goods", cat: "Term", star: true, def: "Spices, silks, fine china and other goods that came from Asia." },
      { term: "Italian and Arab traders", cat: "People", star: true, def: "Controlled trade between Europe and Asia and could charge high prices for these goods." },
      { term: "Sea routes to Asia", cat: "Term", star: true, def: "European rulers dreamed of finding new ones so their own merchants could trade directly with Asia." },
      { term: "Merchants", cat: "People", def: "With new sea routes, a country’s own merchants could trade directly with Asia." },
      { term: "Profits", cat: "Term", def: "European rulers wanted to keep the profits from trade for themselves instead of making the Italian and Arab traders rich." },
      { term: "Sphere", cat: "Term", star: true, def: "Ancient Greek and medieval Muslim scholars knew that the Earth was a sphere." },
      { term: "Flat or pear-shaped", cat: "Concept", def: "What some Christians in medieval Europe argued the Earth was." },
      { term: "Round Earth", cat: "Concept", def: "By the 1400s, the belief in a round Earth was common in Europe." },
      { term: "Sailing west", cat: "Concept", def: "Navigators began to consider sailing west, instead of east, to reach Asia." },
      { term: "Ottoman Turks", cat: "People", star: true, def: "Captured the city of Constantinople in 1453." },
      { term: "1453", cat: "Date", star: true, def: "The Ottoman Turks captured Constantinople, gaining almost complete control over trade routes between Europe and Asia." },
      { term: "Fall of Constantinople", cat: "Term", def: "After it, few Asian goods were reaching Europe." },
      { term: "Marco Polo", cat: "Person", star: true, def: "A Venetian merchant who traveled to China in the 1200s and wrote a book about his travels." },
      { term: "Venetian", cat: "Term", def: "From Venice — Marco Polo was a Venetian merchant." },
      { term: "Book published around 1300", cat: "Date", def: "Marco Polo’s popular book; by the 1400s many Europeans had read it." },
      { term: "Viking voyages", cat: "Concept", def: "Stories of Viking voyages across the Atlantic may also have inspired explorers." },
      { term: "Caravel", cat: "Term", star: true, def: "A type of ship improved by Portuguese shipbuilders in the 1400s, turning it into an ideal ship for exploration." },
      { term: "Triangular sails", cat: "Term", def: "Made it easier for the caravel to sail against the wind." },
      { term: "Shallow coastal waters", cat: "Term", def: "The caravel could glide through them." }
    ],

    quiz: [
      ["Early Life", "How did most people in Europe live in the early 1400s?", "Very simple lives, with only the basic things they needed to survive", ["In great luxury", "As explorers at sea", "As traders in Asia"], "It’s the early 1400s in Europe. Most people live very simple lives, with only the basic things they need to survive."],
      ["Early Life", "Who had more comfortable lives in the early 1400s?", "European nobles and the very wealthy", ["Farmers", "Sailors", "Most ordinary people"], "European nobles and the very wealthy have more comfortable lives."],
      ["Early Life", "Which luxury goods did nobles and the wealthy enjoy?", "Spices, silks and fine china", ["Iron, soapstone and timber", "Wheat, wool and fish", "Furs and amber"], "They enjoyed spices, silks, fine china and other luxury goods that come from Asia."],
      ["Early Life", "Where did these luxury goods come from?", "Asia", ["Scandinavia", "The Americas", "Iceland"], "…luxury goods that come from Asia."],
      ["The Problem with Trade", "Who controlled trade between Europe and Asia?", "Italian and Arab traders", ["Portuguese and Spanish traders", "Viking traders", "English and French traders"], "Trade between Europe and Asia is controlled by Italian and Arab traders."],
      ["The Problem with Trade", "Why was controlling the trade useful to the Italian and Arab traders?", "They could charge high prices for these goods", ["They could give goods away free", "They could stop all trade", "They could avoid the sea"], "Italian and Arab traders … can charge high prices for these goods."],
      ["The Problem with Trade", "What were the rulers of several European countries dreaming of?", "Finding new sea routes to Asia", ["Building a wall around Europe", "Ending all trade with Asia", "Moving to Asia"], "The rulers of several European countries are dreaming of finding new sea routes to Asia."],
      ["The Problem with Trade", "How would new sea routes help European rulers?", "Their own merchants could trade directly with Asia and keep the profits", ["They could pay the Italian traders more", "They could stop buying spices", "They could make Arab traders richer"], "This could allow their own merchants to trade directly with Asia … they could keep the profits from trade for themselves."],
      ["The Shape of the Earth", "Who knew that the Earth was a sphere?", "Ancient Greek and medieval Muslim scholars", ["Only Viking sailors", "Only Christopher Columbus", "Nobody before 1500"], "Ancient Greek & medieval Muslim scholars knew that the Earth was a sphere."],
      ["The Shape of the Earth", "What did some Christians in medieval Europe argue about the Earth’s shape?", "That it was flat, or even pear-shaped", ["That it was a perfect sphere", "That it was square", "That it had no shape"], "Christians in medieval Europe weren’t so sure. Some argued that the Earth was flat, or even pear-shaped."],
      ["The Shape of the Earth", "By the 1400s, what was common in Europe?", "The belief in a round Earth", ["The belief in a flat Earth", "The belief in a pear-shaped Earth", "No belief about the Earth’s shape"], "By the 1400s, the belief in a round Earth was common in Europe."],
      ["The Shape of the Earth", "Once the Earth was believed to be round, what did navigators consider?", "Sailing west, instead of east, to reach Asia", ["Sailing north to reach Africa", "Walking to Asia", "Never sailing again"], "Navigators began to consider the possibility of sailing west, instead of east, to reach Asia."],
      ["The Ottomans", "In what year did the Ottoman Turks capture Constantinople?", "1453", ["1300", "1419", "1492"], "In 1453, the Ottoman Turks captured the city of Constantinople."],
      ["The Ottomans", "Who captured the city of Constantinople in 1453?", "The Ottoman Turks", ["The Vikings", "The Portuguese", "The Lombards"], "In 1453, the Ottoman Turks captured the city of Constantinople."],
      ["The Ottomans", "What did capturing Constantinople give the Ottoman Empire?", "Almost complete control over trade routes between Europe and Asia", ["Control of the Atlantic Ocean", "A sea route around Africa", "Control of Scandinavia"], "This gave the Ottoman Empire almost complete control over trade routes between Europe and Asia."],
      ["The Ottomans", "What happened after the fall of Constantinople?", "Few Asian goods were reaching Europe", ["Asian goods became cheaper in Europe", "Europe stopped needing spices", "Italian traders became richer than ever"], "After the fall of Constantinople, few Asian goods were reaching Europe."],
      ["The Ottomans", "How did the fall of Constantinople affect Europeans?", "They had more reason than ever to look for new routes to Asia", ["They stopped exploring", "They moved to Constantinople", "They traded only with the Ottomans"], "Europeans had more reason than ever to look for new routes to Asia."],
      ["Marco Polo", "Who was Marco Polo?", "A Venetian merchant", ["A Portuguese prince", "A Viking explorer", "An Ottoman sultan"], "The Venetian merchant Marco Polo traveled to China in the 1200s."],
      ["Marco Polo", "Where did Marco Polo travel in the 1200s?", "China", ["Iceland", "Brazil", "Greenland"], "Marco Polo traveled to China in the 1200s."],
      ["Marco Polo", "When was Marco Polo’s book about his travels published?", "Around 1300", ["Around 1000", "In 1453", "In 1492"], "He wrote about his travels in a book published around 1300."],
      ["Marco Polo", "What effect did Marco Polo’s book have by the 1400s?", "Many Europeans had read it, and some were inspired to explore the world", ["Nobody read it", "It made people afraid to travel", "It was banned in Europe"], "By the 1400s, many Europeans had read his popular book, and some were inspired to explore the world."],
      ["Marco Polo", "Besides Marco Polo’s book, what else may have inspired explorers?", "Stories of Viking voyages across the Atlantic", ["Stories of Roman emperors", "The Twelve Tables", "Charlemagne’s schools"], "Those explorers may also have been inspired by stories of Viking voyages across the Atlantic many years earlier."],
      ["The Caravel", "Who improved the caravel in the 1400s?", "Portuguese shipbuilders", ["Viking shipbuilders", "Ottoman shipbuilders", "Italian traders"], "In the 1400s, Portuguese shipbuilders made improvements to a type of ship called the caravel."],
      ["The Caravel", "The improved caravel was strong enough for long ocean voyages, but also…", "Lighter and faster than other ocean-going ships", ["Heavier and slower than other ships", "Only able to sail on rivers", "Made of stone"], "The improved caravel was strong enough for long ocean voyages but lighter and faster than other ocean-going ships."],
      ["The Caravel", "Which type of water could the caravel glide through?", "Shallow coastal waters", ["Only frozen seas", "Only deep lakes", "Only rivers in Asia"], "It could also glide through shallow coastal waters."],
      ["The Caravel", "What made it easier for the caravel to sail against the wind?", "Triangular sails", ["Oars", "A beast-shaped prow", "A single square sail"], "Triangular sails made it easier to sail against the wind."],
      ["The Caravel", "Who would later bring caravels on his first voyage to the Americas?", "Columbus", ["Marco Polo", "Leif Eriksson", "Vasco da Gama"], "Columbus would later bring caravels on his first voyage to the Americas."]
    ]
  },

  /* =====================================================================
     EXPLORATION LESSON 2: PORTUGAL TAKES THE LEAD (G6+Q2.pdf pages 31–35)
     ===================================================================== */
  x2: {
    num: 2, title: "Portugal Takes the Lead", fullTitle: "Lesson 2: Portugal Takes the Lead", pages: "31–35", icon: "🧭", color: "#15803d",
    infographic: [
      { type: "hero", icon: "🧭", title: "Lesson 2: Portugal Takes the Lead",
        text: "Portugal in the early 1400s was a small country and not wealthy. But one prince dreamed that Portugal could lead the world in exploration." },

      { type: "section", title: "Portugal’s Prince: Henry the Navigator", icon: "🤴", page: "31", color: "#15803d",
        cards: [
          { icon: "👑", title: "Who?", text: "Prince Henry the Navigator was the third son of Portugal’s King John I." },
          { icon: "📍", title: "Around 1419", text: "He moved his court to Sagres Point, near the southwestern tip of Europe." },
          { icon: "🗺️", title: "The best team", text: "At Sagres, he brought together the best mapmakers, shipbuilders and sailors of the time." },
          { icon: "⛵", title: "Ships", text: "His shipbuilders adapted the caravel for exploration." },
          { icon: "🎓", title: "Sailors", text: "His sailors were well trained." },
          { icon: "🧭", title: "Instruments", text: "They had the most modern navigation instruments, such as astrolabes and compasses." }
        ] },

      { type: "split", title: "Henry’s Legacy", icon: "🏆", page: "31", image: "q2img/caravel.jpg", imageCaption: "A caravel (textbook p. 31)",
        text: "Thanks to Prince Henry’s mapmakers, shipbuilders, trained sailors and modern instruments, Portugal continued to lead in exploration long after Henry’s death." },

      { type: "timeline", title: "New Trade Routes", icon: "🛳️", page: "31–34", events: [
        { date: "Around 1419", title: "Sagres Point", text: "Prince Henry moved his court to Sagres Point, near the southwestern tip of Europe." },
        { date: "1460", title: "Henry’s death", text: "The Portuguese continued exploring the west African coast, going a little farther south on each trip." },
        { date: "1488", title: "Bartolomeu Dias", text: "Sailed around the southern tip of Africa and entered the Indian Ocean. He wanted to sail to India, but his crew refused, and he was forced to return home." },
        { date: "Later", title: "Cape of Good Hope", text: "The Portuguese king named the tip of Africa the “Cape of Good Hope”, because he hoped Dias had found a new route to Asia." },
        { date: "Ten years after Dias", title: "Vasco da Gama", text: "Led an expedition that sailed around Africa and all the way to India." },
        { date: "1499", title: "Back to Portugal", text: "The expedition made it back with a cargo of Indian spices and jewels." },
        { date: "Late 1500s", title: "A trade network", text: "Portugal ruled a trade network that extended around Africa, the Indian subcontinent, and China." }
      ]},

      { type: "map", title: "Map: Routes of Dias and da Gama", icon: "🗺️", page: "32", image: "q2img/explmap.jpg",
        legend: [{ sw: "#f7941d", text: "Dias" }, { sw: "#8e2a8e", text: "Da Gama" }],
        facts: [
          "Both routes start from Portugal and sail south along the coast of Africa.",
          "Dias’s route reaches the southern tip of Africa.",
          "Da Gama’s route goes around Africa and across the Indian Ocean to India."
        ] },

      { type: "section", title: "Vasco da Gama’s Voyage to India", icon: "🌶️", page: "33", color: "#b45309", image: "q2img/dagama.jpg", imageCaption: "Vasco da Gama (textbook p. 33)",
        cards: [
          { icon: "🌊", title: "Losses", text: "Half of its sailors and one of its three ships were lost in storms." },
          { icon: "🏠", title: "1499", text: "The expedition made it back to Portugal with a cargo of Indian spices and jewels." },
          { icon: "💰", title: "60 times the cost", text: "The sale of this cargo brought Portugal 60 times what the trip had cost." },
          { icon: "🏅", title: "Reward", text: "The King rewarded da Gama for opening a sea route to India." }
        ] },

      { type: "section", title: "Trip to India: A Rich Trade Network", icon: "🏰", page: "34", color: "#0369a1", image: "q2img/spices.jpg", imageCaption: "Spices (textbook p. 34)",
        cards: [
          { icon: "🔁", title: "A regular route", text: "After da Gama’s first trip to India by sea, the Portuguese established a regular trade route between Europe and Asia." },
          { icon: "🏰", title: "Posts and fortresses", text: "They built trading posts and fortresses on the west and east coasts of Africa." },
          { icon: "🌏", title: "Late 1500s", text: "Portugal ruled a trade network that extended around Africa, the Indian subcontinent, and China." },
          { icon: "💎", title: "Rich and powerful", text: "Portugal became a rich and powerful country." },
          { icon: "⏳", title: "Nearly 200 years", text: "The Portuguese kept control of the sea route to Asia for nearly 200 years." }
        ] },

      { type: "chain", title: "Arab Traders and the Trade in Enslaved People", icon: "⛓️", page: "35", color: "#475569", image: "q2img/arabtraders.jpg", imageCaption: "Picture from the textbook (p. 35)",
        steps: [
          "Arab traders were buying and selling enslaved people long before the Portuguese arrived in Africa.",
          "Portugal was the first European power to engage directly in the trade.",
          "Portuguese traders purchased enslaved people in Africa and shipped them to the Americas, first to the Spanish colonies."
        ],
        end: "Later, the Spanish, Dutch, French, and English all joined this trade between Africa and the European colonies in the Americas" }
    ],

    keywords: [
      { term: "Portugal (early 1400s)", cat: "Place", def: "A small country and not wealthy, but one prince dreamed it could lead the world in exploration." },
      { term: "Prince Henry the Navigator", cat: "Person", star: true, def: "The third son of Portugal’s King John I; he brought together the best mapmakers, shipbuilders and sailors at Sagres." },
      { term: "King John I", cat: "Person", def: "King of Portugal; Prince Henry was his third son." },
      { term: "Sagres Point", cat: "Place", star: true, def: "Near the southwestern tip of Europe; Prince Henry moved his court there around 1419." },
      { term: "1419", cat: "Date", def: "Around this year, Prince Henry moved his court to Sagres Point." },
      { term: "Mapmakers, shipbuilders and sailors", cat: "People", def: "The best of the time were brought together by Prince Henry at Sagres." },
      { term: "Astrolabes and compasses", cat: "Term", star: true, def: "The most modern navigation instruments of the time, used by Henry’s sailors." },
      { term: "1460", cat: "Date", def: "The year of Prince Henry’s death; the Portuguese continued exploring the west African coast." },
      { term: "Bartolomeu Dias", cat: "Person", star: true, def: "In 1488, sailed around the southern tip of Africa and entered the Indian Ocean; his crew refused to sail on to India." },
      { term: "1488", cat: "Date", star: true, def: "Bartolomeu Dias sailed around the southern tip of Africa." },
      { term: "Indian Ocean", cat: "Place", def: "Dias entered it after sailing around the southern tip of Africa." },
      { term: "Cape of Good Hope", cat: "Place", star: true, def: "The name the Portuguese king gave the tip of Africa, because he hoped Dias had found a new route to Asia." },
      { term: "Vasco da Gama", cat: "Person", star: true, def: "Ten years after Dias, led an expedition around Africa all the way to India; rewarded for opening a sea route to India." },
      { term: "1499", cat: "Date", def: "Da Gama’s expedition made it back to Portugal with Indian spices and jewels." },
      { term: "60 times", cat: "Concept", def: "The sale of da Gama’s cargo brought Portugal 60 times what the trip had cost." },
      { term: "Trading posts and fortresses", cat: "Term", def: "Built by the Portuguese on the west and east coasts of Africa." },
      { term: "Trade network", cat: "Term", star: true, def: "By the late 1500s, Portugal’s network extended around Africa, the Indian subcontinent, and China." },
      { term: "Nearly 200 years", cat: "Date", def: "How long the Portuguese kept control of the sea route to Asia." },
      { term: "Arab traders", cat: "People", def: "Were buying and selling enslaved people long before the Portuguese arrived in Africa." },
      { term: "Spanish colonies", cat: "Place", def: "The first place in the Americas where Portuguese traders shipped enslaved people." }
    ],

    quiz: [
      ["Portugal’s Prince", "What was Portugal like in the early 1400s?", "A small country and not wealthy", ["A huge and very rich empire", "The ruler of Asia", "A Viking kingdom"], "Portugal in the early 1400s was a small country and not wealthy."],
      ["Portugal’s Prince", "What did one Portuguese prince dream?", "That Portugal could lead the world in exploration", ["That Portugal could conquer Scandinavia", "That Portugal would stop sailing", "That Portugal could build a wall"], "But one prince dreamed that Portugal could lead the world in exploration."],
      ["Portugal’s Prince", "Prince Henry the Navigator was the third son of…", "Portugal’s King John I", ["King Ferdinand of Spain", "Charlemagne", "Erik the Red"], "Prince Henry the Navigator was the third son of Portugal’s King John I."],
      ["Portugal’s Prince", "Around 1419, where did Prince Henry move his court?", "Sagres Point", ["Constantinople", "Venice", "The Canary Islands"], "Around 1419, Prince Henry moved his court to Sagres Point, near the southwestern tip of Europe."],
      ["Portugal’s Prince", "Where is Sagres Point?", "Near the southwestern tip of Europe", ["In northern Norway", "In the middle of Asia", "On the coast of Brazil"], "Sagres Point, near the southwestern tip of Europe."],
      ["Portugal’s Prince", "Whom did Prince Henry bring together at Sagres?", "The best mapmakers, shipbuilders and sailors of the time", ["The best farmers and bakers", "Viking raiders", "Ottoman soldiers"], "At Sagres, Prince Henry brought together the best mapmakers, shipbuilders and sailors of the time."],
      ["Portugal’s Prince", "What did Henry’s shipbuilders adapt for exploration?", "The caravel", ["The longship", "The knörr", "The rowboat"], "His shipbuilders adapted the caravel for exploration."],
      ["Portugal’s Prince", "Which modern navigation instruments did Henry’s sailors have?", "Astrolabes and compasses", ["Sunstones and notched sticks", "Rune stones", "Telescopes and radios"], "They had the most modern navigation instruments, such as astrolabes and compasses."],
      ["Portugal’s Prince", "What happened to Portugal’s lead in exploration after Henry died?", "Portugal continued to lead long after Henry’s death", ["Portugal stopped exploring at once", "Spain took the lead the same year", "The Vikings took control"], "Thanks to this, Portugal continued to lead in exploration long after Henry’s death."],
      ["New Trade Routes", "In what year did Prince Henry die?", "1460", ["1419", "1488", "1499"], "After Prince Henry’s death in 1460, the Portuguese continued exploring the west African coast."],
      ["New Trade Routes", "How did the Portuguese explore the west African coast after Henry’s death?", "Going a little farther south on each trip", ["Going north to Scandinavia", "Going only on land", "Stopping after one trip"], "The Portuguese continued exploring the west African coast, going a little farther south on each trip."],
      ["New Trade Routes", "What did Bartolomeu Dias do in 1488?", "Sailed around the southern tip of Africa and entered the Indian Ocean", ["Reached India and returned with spices", "Captured Constantinople", "Reached the Caribbean"], "In 1488, Bartolomeu Dias sailed around the southern tip of Africa and entered the Indian Ocean."],
      ["New Trade Routes", "Why did Dias not sail on to India?", "His crew refused", ["He had no ships", "The king ordered him home", "He reached China instead"], "Dias wanted to sail to India, but his crew refused. He was forced to return home."],
      ["New Trade Routes", "What did the Portuguese king name the tip of Africa?", "The Cape of Good Hope", ["Sagres Point", "Vinland", "The New World"], "The Portuguese king later named the tip of Africa the “Cape of Good Hope”."],
      ["New Trade Routes", "Why was the tip of Africa named the “Cape of Good Hope”?", "The king hoped Dias had found a new route to Asia", ["It had good weather all year", "It was full of gold", "Dias hoped to live there"], "…because he hoped Dias had found a new route to Asia."],
      ["New Trade Routes", "On the route map, which explorer’s route reaches all the way to India?", "Da Gama’s", ["Dias’s", "Columbus’s", "Leif Eriksson’s"], "The map shows Da Gama’s route crossing the Indian Ocean to India."],
      ["Vasco da Gama", "When did Vasco da Gama lead his expedition to India?", "Ten years after Dias’s voyage", ["Before Prince Henry was born", "In 1453", "Fifty years after Dias"], "Ten years after Dias’s voyage, Vasco da Gama led an expedition that sailed around Africa and all the way to India."],
      ["Vasco da Gama", "What was lost in storms during da Gama’s expedition?", "Half of its sailors and one of its three ships", ["All of its ships", "None of its sailors", "Only its cargo"], "Half of its sailors and one of its three ships were lost in storms."],
      ["Vasco da Gama", "In what year did da Gama’s expedition make it back to Portugal?", "1499", ["1488", "1460", "1492"], "The expedition made it back to Portugal in 1499."],
      ["Vasco da Gama", "What cargo did da Gama’s expedition bring back?", "Indian spices and jewels", ["Furs and amber", "Wheat and wool", "Iron and soapstone"], "…with a cargo of Indian spices and jewels."],
      ["Vasco da Gama", "How much did the sale of da Gama’s cargo bring Portugal?", "60 times what the trip had cost", ["Half of what the trip had cost", "Exactly what the trip had cost", "6 times what the trip had cost"], "The sale of this cargo brought Portugal 60 times what the trip had cost."],
      ["Vasco da Gama", "Why did the King reward da Gama?", "For opening a sea route to India", ["For finding Greenland", "For capturing Constantinople", "For reaching the Caribbean"], "The King rewarded da Gama for opening a sea route to India."],
      ["Trip to India", "What did the Portuguese establish after da Gama’s first trip to India by sea?", "A regular trade route between Europe and Asia", ["A new alphabet", "A colony in Iceland", "A peace treaty with the Vikings"], "After da Gama’s first trip to India by sea, the Portuguese established a regular trade route between Europe and Asia."],
      ["Trip to India", "Where did the Portuguese build trading posts and fortresses?", "On the west and east coasts of Africa", ["In Scandinavia", "In the Caribbean", "In northern Italy"], "They built trading posts and fortresses on the west and east coasts of Africa."],
      ["Trip to India", "By the late 1500s, Portugal’s trade network extended around…", "Africa, the Indian subcontinent, and China", ["Iceland and Greenland", "England and France", "Only Portugal"], "By the late 1500s, Portugal ruled a trade network that extended around Africa, the Indian subcontinent, and China."],
      ["Trip to India", "What did Portugal become as a result of its trade network?", "A rich and powerful country", ["A poor and weak country", "Part of the Ottoman Empire", "A Viking settlement"], "Portugal became a rich and powerful country."],
      ["Trip to India", "For how long did the Portuguese keep control of the sea route to Asia?", "Nearly 200 years", ["Nearly 20 years", "Nearly 2000 years", "Only 2 years"], "Portuguese people kept control of the sea route to Asia for nearly 200 years."],
      ["Arab Traders", "Who was buying and selling enslaved people long before the Portuguese arrived in Africa?", "Arab traders", ["Viking traders", "Venetian merchants", "Ottoman Turks"], "Arab traders were buying and selling enslaved people long before the Portuguese arrived in Africa."],
      ["Arab Traders", "Which was the first European power to engage directly in the trade of enslaved people?", "Portugal", ["Spain", "England", "France"], "Portugal was the first European power to engage directly in the trade."],
      ["Arab Traders", "Where were enslaved people first shipped by Portuguese traders?", "To the Americas, first to the Spanish colonies", ["To Scandinavia", "To China", "To Iceland"], "Portuguese traders purchased enslaved people in Africa and shipped them to the Americas, first to the Spanish colonies."],
      ["Arab Traders", "Which countries later joined this trade?", "The Spanish, Dutch, French, and English", ["The Vikings and Lombards", "The Ottomans and Persians", "No other countries"], "The Spanish, Dutch, French, and English all later joined in the trade of enslaved people between Africa and the European colonies in the Americas."]
    ]
  },

  /* =====================================================================
     EXPLORATION LESSON 3: SPAIN & PORTUGAL EXPLORE THE WORLD (G6+Q2.pdf pages 36–38)
     The booklet’s lesson goals also list a map of Spain & Portugal and an exploring agreement between them,
     but no text about them appears in the booklet, so they are not covered here.
     ===================================================================== */
  x3: {
    num: 3, title: "Spain & Portugal Explore the World", fullTitle: "Lesson 3: Spain & Portugal Explore the World", pages: "36–38", icon: "🌎", color: "#be123c",
    infographic: [
      { type: "hero", icon: "🌎", title: "Lesson 3: Spain & Portugal Explore the World",
        text: "It’s October 1492. Christopher Columbus and his little fleet of three ships left the Canary Islands 36 days ago. Columbus had expected to reach Asia by now." },

      { type: "section", title: "Who Was Columbus?", icon: "🧭", page: "37", color: "#be123c", image: "q2img/columbus.jpg", imageCaption: "Christopher Columbus (textbook p. 37)",
        cards: [
          { icon: "⛵", title: "An Italian sailor", text: "Columbus was an Italian sailor." },
          { icon: "⬅️", title: "His idea", text: "He believed he could reach Asia by sailing west across the Atlantic." }
        ] },

      { type: "flow", title: "Who Would Pay for the Voyage?", icon: "💰", page: "37",
        steps: [
          { icon: "❌", label: "King of Portugal", sub: "Refused to pay for an expedition" },
          { icon: "❌", label: "Genoa and Venice", sub: "Their rulers were not interested" },
          { icon: "✅", label: "Ferdinand & Isabella of Spain", sub: "Funded his voyage in 1492" }
        ] },

      { type: "timeline", title: "Columbus’s First Voyage, 1492", icon: "⛵", page: "36", events: [
        { date: "1492", title: "Funded", text: "King Ferdinand and Queen Isabella of Spain funded the voyage." },
        { date: "Departure", title: "Three ships", text: "Columbus and his little fleet of three ships left the Canary Islands, off the west coast of Africa." },
        { date: "Each day", title: "Misleading the crew", text: "He misled his crew about how far they had sailed each day, so they wouldn’t think he’d made a mistake and demand to go back to Spain." },
        { date: "September", title: "A sign of land", text: "One sailor saw a bird that’s never seen more than 75 miles from land." },
        { date: "A week later", title: "A restless crew", text: "The crew was restless." },
        { date: "October 1492", title: "Land!", text: "36 days after leaving the Canary Islands, a sailor finally called out that he saw land." }
      ]},

      { type: "chain", title: "Columbus’s Big Mistake", icon: "🌐", page: "37",
        steps: [
          "Columbus believed the Earth was much smaller than it really is.",
          "When he left the Canary Islands, he thought he’d reach Asia in just a few weeks.",
          "He was sure he had reached India, but he was really in the Caribbean Sea."
        ],
        end: "That’s also why he called the native people “Indians”" },

      { type: "section", title: "A New World", icon: "🗺️", page: "38", color: "#0369a1", image: "q2img/vespucci.jpg", imageCaption: "Amerigo Vespucci (textbook p. 38)",
        cards: [
          { icon: "4️⃣", title: "Four voyages", text: "Columbus made four voyages to the Caribbean." },
          { icon: "⚰️", title: "1506", text: "When Columbus died, he still believed he’d reached Asia." },
          { icon: "💡", title: "New lands", text: "Other explorers soon realized that he’d found new lands that Europeans had not known about." },
          { icon: "🧭", title: "1501: Amerigo Vespucci", text: "An Italian explorer sailing for Portugal, he explored the coast of what is now Brazil." },
          { icon: "✍️", title: "Careful maps", text: "He drew careful maps and wrote about what he saw. He understood he was exploring what he called “a new world.”" },
          { icon: "🌎", title: "The Americas", text: "The Americas were probably named in his honor." }
        ] },

      { type: "cards", title: "Lesson Goals (from the booklet)", icon: "🎯", page: "38",
        cards: [
          { icon: "👤", title: "Goal 1", text: "Identify who is Christopher Columbus." },
          { icon: "⬅️", title: "Goal 2", text: "Identify how to reach Asia by sailing west across the Atlantic." },
          { icon: "🗺️", title: "Goals 3 & 4", text: "Map of Spain & Portugal and the exploring agreement between them — ask your teacher; the booklet pages give no details on these." }
        ] }
    ],

    keywords: [
      { term: "Christopher Columbus", cat: "Person", star: true, def: "An Italian sailor who believed he could reach Asia by sailing west across the Atlantic." },
      { term: "October 1492", cat: "Date", star: true, def: "36 days after Columbus’s fleet left the Canary Islands, a sailor called out that he saw land." },
      { term: "Canary Islands", cat: "Place", star: true, def: "Off the west coast of Africa; Columbus’s fleet of three ships left from there." },
      { term: "Fleet of three ships", cat: "Term", def: "Columbus’s little fleet on his 1492 voyage." },
      { term: "Misleading the crew", cat: "Concept", def: "Columbus misled his crew about how far they had sailed each day so they wouldn’t demand to go back to Spain." },
      { term: "75 miles", cat: "Concept", def: "The bird a sailor saw in September is never seen more than 75 miles from land — the first sign land was near." },
      { term: "King of Portugal", cat: "Person", def: "Refused to pay for Columbus’s expedition." },
      { term: "Genoa and Venice", cat: "Place", def: "Their rulers were not interested in Columbus’s idea." },
      { term: "King Ferdinand and Queen Isabella", cat: "Person", star: true, def: "The rulers of Spain who funded Columbus’s voyage in 1492." },
      { term: "Earth much smaller", cat: "Concept", def: "Columbus believed the Earth was much smaller than it really is." },
      { term: "Caribbean Sea", cat: "Place", star: true, def: "Where Columbus really was when he was sure he had reached India." },
      { term: "“Indians”", cat: "Term", def: "What Columbus called the native people, because he thought he had reached India." },
      { term: "Four voyages", cat: "Concept", def: "Columbus made four voyages to the Caribbean." },
      { term: "1506", cat: "Date", def: "Columbus died, still believing he had reached Asia." },
      { term: "Amerigo Vespucci", cat: "Person", star: true, def: "An Italian explorer sailing for Portugal who explored the coast of what is now Brazil in 1501." },
      { term: "1501", cat: "Date", def: "Amerigo Vespucci explored the coast of what is now Brazil." },
      { term: "Brazil", cat: "Place", def: "Vespucci explored the coast of what is now Brazil." },
      { term: "“A new world”", cat: "Term", star: true, def: "What Vespucci called the lands he was exploring." },
      { term: "The Americas", cat: "Place", def: "Probably named in Amerigo Vespucci’s honor." }
    ],

    quiz: [
      ["Columbus’s Voyage", "In October 1492, how many ships were in Columbus’s little fleet?", "Three", ["One", "Five", "Ten"], "Christopher Columbus and his little fleet of three ships left the Canary Islands 36 days ago."],
      ["Columbus’s Voyage", "From where did Columbus’s fleet leave?", "The Canary Islands", ["Sagres Point", "Constantinople", "Newfoundland"], "…left the Canary Islands 36 days ago."],
      ["Columbus’s Voyage", "Where are the Canary Islands?", "Off the west coast of Africa", ["In the Baltic Sea", "Near Norway", "In the Indian Ocean"], "When he left the Canary Islands off the west coast of Africa…"],
      ["Columbus’s Voyage", "By October 1492, how many days had passed since the fleet left the Canary Islands?", "36 days", ["7 days", "75 days", "100 days"], "…left the Canary Islands 36 days ago."],
      ["Columbus’s Voyage", "Where had Columbus expected to be by October 1492?", "In Asia", ["Back in Spain", "In Africa", "In Greenland"], "Columbus had expected to reach Asia by now."],
      ["Columbus’s Voyage", "What was Columbus misleading his crew about?", "How far they had sailed each day", ["How much food they had", "Who paid for the voyage", "The name of the ships"], "He has been misleading his crew about how far they’ve sailed each day."],
      ["Columbus’s Voyage", "Why did Columbus mislead his crew?", "So they wouldn’t think he’d made a mistake and demand to go back to Spain", ["So they would row faster", "So they would land in Africa", "So they would trust the king of Portugal"], "…so they won’t think he’s made a mistake and demand to go back to Spain."],
      ["Columbus’s Voyage", "What was the first sign that land was near?", "A bird that’s never seen more than 75 miles from land", ["A floating tree", "A Viking ship", "A rune stone"], "In September, one sailor saw the first sign that land was near: a bird that’s never seen more than 75 miles from land."],
      ["Columbus’s Voyage", "In which month did a sailor see the bird?", "September", ["October", "January", "June"], "In September, one sailor saw the first sign that land was near."],
      ["Who Was Columbus?", "What nationality was Columbus?", "Italian", ["Portuguese", "Spanish", "Norwegian"], "Columbus was an Italian sailor."],
      ["Who Was Columbus?", "What did Columbus believe he could do?", "Reach Asia by sailing west across the Atlantic", ["Reach Asia by sailing around Africa", "Reach Greenland by walking", "Reach India by land"], "Columbus was an Italian sailor who believed he could reach Asia by sailing west across the Atlantic."],
      ["Who Was Columbus?", "What did the king of Portugal do when Columbus brought him his idea?", "Refused to pay for an expedition", ["Paid for three ships", "Made Columbus a prince", "Sent him to Venice"], "He brought his idea to the king of Portugal, who refused to pay for an expedition."],
      ["Who Was Columbus?", "Which rulers were also not interested in Columbus’s idea?", "The rulers of Genoa and Venice", ["The rulers of Spain", "King Ferdinand and Queen Isabella", "The Vikings"], "The rulers of Genoa and Venice were also not interested."],
      ["Who Was Columbus?", "Who funded Columbus’s voyage in 1492?", "King Ferdinand and Queen Isabella of Spain", ["The king of Portugal", "Prince Henry the Navigator", "The rulers of Venice"], "Finally, he brought his idea to King Ferdinand and Queen Isabella of Spain, who funded his voyage in 1492."],
      ["Columbus’s Mistake", "What did Columbus believe about the size of the Earth?", "It was much smaller than it really is", ["It was much bigger than it really is", "It was flat", "It was pear-shaped"], "Columbus believed that the Earth was much smaller than it really is."],
      ["Columbus’s Mistake", "When he left the Canary Islands, how long did Columbus think it would take to reach Asia?", "Just a few weeks", ["Several years", "One day", "Ten months"], "He thought he’d reach Asia in just a few weeks."],
      ["Columbus’s Mistake", "Where was Columbus really when he was sure he had reached India?", "In the Caribbean Sea", ["In the Indian Ocean", "In the Mediterranean Sea", "In the Black Sea"], "That’s why he was sure that he’d reached India, when he was really in the Caribbean Sea."],
      ["Columbus’s Mistake", "Why did Columbus call the native people “Indians”?", "He thought he had reached India", ["They came from India", "The king told him to", "Vespucci named them"], "It’s also why he called the native people “Indians.”"],
      ["A New World", "How many voyages did Columbus make to the Caribbean?", "Four", ["One", "Two", "Ten"], "Columbus made four voyages to the Caribbean."],
      ["A New World", "When Columbus died in 1506, what did he still believe?", "That he’d reached Asia", ["That he’d found a new world", "That the Earth was flat", "That he’d reached Africa"], "When he died in 1506, he still believed he’d reached Asia."],
      ["A New World", "What did other explorers soon realize about Columbus’s voyages?", "He’d found new lands that Europeans had not known about", ["He had reached China", "He had never left Spain", "He had found the Cape of Good Hope"], "Other explorers soon realized that he’d found new lands that Europeans had not known about."],
      ["A New World", "Who was Amerigo Vespucci?", "An Italian explorer sailing for Portugal", ["A Spanish king", "A Viking chief", "A Portuguese prince"], "In 1501, Amerigo Vespucci, an Italian explorer sailing for Portugal, explored the coast of what is now Brazil."],
      ["A New World", "In 1501, which coast did Amerigo Vespucci explore?", "The coast of what is now Brazil", ["The coast of Norway", "The coast of India", "The coast of Iceland"], "He explored the coast of what is now Brazil."],
      ["A New World", "What did Vespucci do on his voyage?", "Drew careful maps and wrote about what he saw", ["Burned his ships", "Called the people “Indians”", "Looked for a bird"], "He drew careful maps and wrote about what he saw."],
      ["A New World", "What did Vespucci call the lands he was exploring?", "“A new world”", ["“Vinland”", "“The Cape of Good Hope”", "“Asia”"], "He understood that he was exploring what he called “a new world.”"],
      ["A New World", "The Americas were probably named in honor of…", "Amerigo Vespucci", ["Christopher Columbus", "Vasco da Gama", "Queen Isabella"], "The Americas were probably named in his honor."]
    ]
  }
  }
};
