/* Quarter 2 content — source: Essq2.pdf (textbook pages 26–38). Single source of truth: the uploaded textbook. */
window.Q2 = {
  source: "Essq2.pdf (textbook pages 26–38)",
  chapters: [{
    id: "rome",
    title: "Textbook Pages 26–38",
    subtitle: "Lesson 5 and Lesson 6",
    lessons: ["l5", "l6"]
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
  }
  }
};
