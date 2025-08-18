// Grade 12 English Units Data - 5 Section Structure
// This file contains all content organized by section type for each unit
// You can easily add, edit, or remove content by modifying this file

const unitsData = {
  // ==========================================
  // UNIT 1: EXAMPLE UNIT - LITERATURE BASICS
  // ==========================================
  unit1: {
    title: "Unit 1: GOOD MANNERS",
    description: "Introduction to literary terms and concepts",

    // VOCABULARY FLASHCARDS - Terms and definitions
    vocabulary: [
      {
        front: "Adequate",
        back: "Good enough to be considered satisfactory. Example: The food was adequate for everyone at the party.",
      },
      {
        front: "Celebrities",
        back: "Film stars or pop stars who are widely known and admired. Example: Many young people are influenced by celebrities.",
      },
      {
        front: "Vital",
        back: "Extremely important or necessary. Example: Respect is vital in maintaining good relationships.",
      },
      {
        front: "Role Models",
        back: "People that we admire and try to copy. Example: Parents should act as role models for their children.",
      },
      {
        front: "Universal",
        back: "True or suitable in every situation, across all cultures or societies. Example: A smile is a universal way of showing friendliness.",
      },
      {
        front: "Acquired",
        back: "Got or obtained something, especially knowledge or skills. Example: She acquired good manners from her grandmother.",
      },
      {
        front: "Impart",
        back: "Give information, knowledge, or wisdom to someone. Example: Teachers impart values and discipline to their students.",
      },
      {
        front: "Manner",
        back: "The way of doing something. Example: He spoke in a polite manner.",
      },
      {
        front: "Manners",
        back: "The way a person behaves in society. Example: It is bad manners to interrupt someone while they are speaking.",
      },
      {
        front: "Polite",
        back: "Showing respect and good manners. Example: She is always polite to her teachers.",
      },
      {
        front: "Impolite",
        back: "Not polite; rude. Example: It is impolite to shout at elders.",
      },
      {
        front: "Crude",
        back: "Rough or lacking good manners. Example: His crude behavior upset everyone.",
      },
      {
        front: "Rude",
        back: "Not having respect for others; impolite. Example: Talking loudly in class is considered rude.",
      },
      {
        front: "Atmosphere",
        back: "The feeling or mood in a place. Example: Good manners create a pleasant atmosphere at home.",
      },
      {
        front: "Institution",
        back: "An organized place or system where people are educated or guided. Example: Schools are institutions that teach manners and knowledge.",
      },
      {
        front: "Domain",
        back: "An area of activity or influence. Example: Once he started working, the workplace became his new domain for learning manners.",
      },
      {
        front: "Influence",
        back: "The power to affect how someone thinks or behaves. Example: Friends can have a strong influence on teenagers.",
      },
      {
        front: "Conscientiously",
        back: "Carefully and with a sense of responsibility. Example: He conscientiously completed his homework every day.",
      },
      {
        front: "Merciful",
        back: "Showing kindness and forgiveness to others. Example: The king was merciful to the prisoners.",
      },
      {
        front: "Forgiving",
        back: "Willing to stop feeling angry toward someone who hurt you. Example: She is a forgiving person who never holds grudges.",
      },
    ],

    // SHORT QUESTIONS - Question and answer pairs
    shortQuestions: [
      {
        front: "What is the difference between a metaphor and a simile?",
        back: "A metaphor makes a direct comparison without using 'like' or 'as', while a simile uses 'like' or 'as' to make the comparison.",
      },
      {
        front: "How do you identify the theme of a literary work?",
        back: "Look for recurring ideas, the main conflict resolution, character development, and what the author seems to be saying about life or human nature.",
      },
      {
        front: "Why do authors use personification?",
        back: "To make abstract concepts more relatable, create vivid imagery, and help readers connect emotionally with non-human elements.",
      },
    ],

    // INITIAL LETTERS - Fill in the first letter(s)
    // INITIAL LETTERS - Fill in the exact word
    initialLetters: [
      {
        question: "‘Manner’ refers to the way of doing s__________.",
        correct: ["something"],
      },
      {
        question:
          "‘Manners’ refers to the way a person b__________ in society.",
        correct: ["behaviour"],
      },
      {
        question: "Manners can be good or bad, p__________ or impolite.",
        correct: ["polite"],
      },
      {
        question:
          "In Myanmar culture, it is bad manners for a junior to start e__________ before a senior does.",
        correct: ["eating"],
      },
      {
        question:
          "It is polite for a junior to listen with arms f__________ while spoken to by a senior.",
        correct: ["folded"],
      },
      {
        question:
          "Every society and culture has its own list of good and bad m__________.",
        correct: ["manners"],
      },
      {
        question:
          "Some manners are universal while some are c__________-specific.",
        correct: ["culture-specific"],
      },
      {
        question:
          "Belching or b__________ wind may be acceptable in one society but not in another.",
        correct: ["breaking"],
      },
      {
        question:
          "Good manners are vital for a pleasant a__________ in one’s home or elsewhere.",
        correct: ["atmosphere"],
      },
      {
        question:
          "Showing r__________ to others is an example of good manners.",
        correct: ["respect"],
      },
      {
        question:
          "Saying “I’m s__________” after doing something wrong is a sign of good manners.",
        correct: ["sorry"],
      },
      {
        question: "The home is considered the b__________ of manners.",
        correct: ["birthplace"],
      },
      {
        question: "Children acquire manners by i__________ their elders.",
        correct: ["imitating"],
      },
      {
        question:
          "Fathers, mothers, or elder siblings may formally t__________ children to be polite.",
        correct: ["teach"],
      },
      {
        question:
          "If elders are gentle and polite, children grow up to be g__________ and polite.",
        correct: ["gentle"],
      },
      {
        question:
          "If elders are rude, children will also become c__________ and rude.",
        correct: ["crude"],
      },
      {
        question:
          "The s__________ is another institution that imparts manners.",
        correct: ["school"],
      },
      {
        question: "Students imitate their teachers’ m__________ and behaviour.",
        correct: ["manners"],
      },
      {
        question:
          "Teenagers and young adults are often influenced by c__________, films, and books.",
        correct: ["celebrities"],
      },
      {
        question:
          "The w__________ domain also influences a person’s manners after getting a job.",
        correct: ["workplace"],
      },
      {
        question:
          "The current g__________ is the most powerful in imparting manners.",
        correct: ["generation"],
      },
      {
        question:
          "Elders should join h__________ to teach juniors law-abiding behaviour.",
        correct: ["hands"],
      },
      {
        question:
          "A well-mannered society values h__________, discipline, and punctuality.",
        correct: ["honesty"],
      },
      {
        question:
          "We are m__________ responsible for building a well-mannered society.",
        correct: ["mutually"],
      },
      {
        question:
          "A junior should not i__________ others while they are speaking.",
        correct: ["interrupt"],
      },
      {
        question: "Greeting others a__________ is also a good manner.",
        correct: ["appropriately"],
      },
      {
        question:
          "Being c__________ and forgiving are qualities of good manners.",
        correct: ["charitable"],
      },
      {
        question: "Politeness helps people get on well in l__________.",
        correct: ["life"],
      },
      {
        question:
          "Negative views may be acquired if young people are m__________ by bad influences.",
        correct: ["misled"],
      },
      {
        question: "Teachers must be good role m__________ for students.",
        correct: ["models"],
      },
    ],

    // MULTIPLE CHOICE QUESTIONS
    multipleChoice: [
      {
        question: "Which of the following is an example of a metaphor?",
        options: [
          "She runs like the wind",
          "Time is money",
          "The cat sat on the mat",
          "He is as brave as a lion",
        ],
        correct: 1,
      },
      {
        question:
          "What literary device gives human qualities to non-human things?",
        options: ["Metaphor", "Simile", "Personification", "Alliteration"],
        correct: 2,
      },
      {
        question: "Which sentence contains a simile?",
        options: [
          "The world is a stage",
          "Her voice is music to my ears",
          "He fights like a lion",
          "Time flies",
        ],
        correct: 2,
      },
    ],

    // GRAMMAR - Grammar rules and explanations
    grammar: [
      {
        front: "Subject-Verb Agreement Rule",
        back: "The subject and verb in a sentence must agree in number. Singular subjects take singular verbs, plural subjects take plural verbs. Example: 'The cat runs' vs 'The cats run'.",
      },
      {
        front: "Comma Usage in Lists",
        back: "Use commas to separate items in a series of three or more. The Oxford comma (before 'and') is optional but recommended for clarity. Example: 'I bought apples, oranges, and bananas.'",
      },
      {
        front: "Apostrophe for Possession",
        back: "Use an apostrophe + s for singular possession, and just an apostrophe for plural possession ending in s. Examples: 'The dog's bone' (singular), 'The dogs' bones' (plural).",
      },
    ],
  },

  // ==========================================
  // UNIT 2: EXAMPLE UNIT - POETRY ANALYSIS
  // ==========================================
  unit2: {
    title: "Unit 2: KEY TO HAPPINESS",
    description: "Understanding poetic devices and analysis techniques",

    // VOCABULARY FLASHCARDS
    vocabulary: [
      {
        front: "Alliteration",
        back: "The repetition of the same consonant sound at the beginning of words in close succession. Example: 'Peter Piper picked a peck of pickled peppers.'",
      },
      {
        front: "Rhyme Scheme",
        back: "The pattern of rhymes at the end of each line of poetry, usually marked with letters (ABAB, AABB, etc.)",
      },
      {
        front: "Iambic Pentameter",
        back: "A rhythmic pattern in poetry consisting of five iambs (unstressed-stressed syllable pairs) per line. Common in Shakespeare's sonnets.",
      },
      {
        front: "Meter",
        back: "The rhythmic structure of poetry, determined by the pattern of stressed and unstressed syllables.",
      },
    ],

    // SHORT QUESTIONS
    shortQuestions: [
      {
        front: "How do you identify the rhyme scheme of a poem?",
        back: "Look at the ending sounds of each line and assign letters (A, B, C, etc.) to matching sounds. Lines that rhyme get the same letter.",
      },
      {
        front: "What effect does alliteration have on poetry?",
        back: "It creates rhythm, emphasizes certain words, makes the poem more memorable, and can create mood or tone.",
      },
      {
        front: "Why did Shakespeare use iambic pentameter?",
        back: "It closely mimics natural English speech patterns and creates a musical quality that enhances the emotional impact of the words.",
      },
    ],

    // INITIAL LETTERS
    initialLetters: [
      {
        question:
          "The repetition of consonant sounds at the beginning of words: A___________",
        correct: [
          "a",
          "al",
          "all",
          "alli",
          "allit",
          "allite",
          "alliter",
          "allitera",
          "alliterat",
          "alliterati",
          "alliteratio",
          "alliteration",
        ],
      },
      {
        question: "The pattern of rhymes in poetry: R____ S_____",
        correct: ["r", "rh", "rhy", "rhym", "rhyme"],
      },
      {
        question: "A poetic meter with five iambs per line: I_____ P_________",
        correct: ["i", "ia", "iam", "iamb", "iambi", "iambic"],
      },
    ],

    // MULTIPLE CHOICE
    multipleChoice: [
      {
        question:
          "What is the rhyme scheme of a poem with the pattern: cat/bat/dog/log?",
        options: ["ABAB", "AABB", "ABBA", "AAAA"],
        correct: 1,
      },
      {
        question: "Which is an example of alliteration?",
        options: [
          "The cat in the hat",
          "Silly Sally sells seashells",
          "Roses are red, violets are blue",
          "Twinkle, twinkle, little star",
        ],
        correct: 1,
      },
      {
        question: "How many stressed syllables are in iambic pentameter?",
        options: ["3", "4", "5", "10"],
        correct: 2,
      },
    ],

    // GRAMMAR
    grammar: [
      {
        front: "Capitalization in Poetry",
        back: "Traditionally, each line of poetry begins with a capital letter, regardless of punctuation. Modern poetry may vary this rule for artistic effect.",
      },
      {
        front: "Punctuation in Poetry",
        back: "Poetry may use unconventional punctuation for rhythm and emphasis. End-stopped lines end with punctuation, while enjambed lines continue without pause.",
      },
      {
        front: "Poetic License",
        back: "Poets may bend grammar rules for meter, rhyme, or artistic effect. This includes unusual word order, archaic forms, or invented words.",
      },
    ],
  },

  // ==========================================
  // UNIT 3: TEMPLATE FOR NEW UNIT
  // ==========================================
  unit3: {
    title: "Unit 3: DIET AND NUTRITION",
    description: "[Your unit description here]",

    // VOCABULARY FLASHCARDS - Terms and definitions
    vocabulary: [
      {
        front: "[Term]",
        back: "[Definition and example]",
      },
      // Add more vocabulary cards here
    ],

    // SHORT QUESTIONS - Question and answer pairs
    shortQuestions: [
      {
        front: "[Your question here]",
        back: "[Your answer here]",
      },
      // Add more short questions here
    ],

    // INITIAL LETTERS - Fill in the first letter(s)
    initialLetters: [
      {
        question: "[Description]: [First letter(s)]_____",
        correct: ["letter1", "letters2", "word"], // Array of acceptable answers
      },
      // Add more initial letter questions here
    ],

    // MULTIPLE CHOICE QUESTIONS
    multipleChoice: [
      {
        question: "[Your question here]",
        options: ["[Option 1]", "[Option 2]", "[Option 3]", "[Option 4]"],
        correct: 0, // Index of correct answer (0-3)
      },
      // Add more multiple choice questions here
    ],

    // GRAMMAR - Grammar rules and explanations
    grammar: [
      {
        front: "[Grammar Rule/Topic]",
        back: "[Explanation and examples]",
      },
      // Add more grammar cards here
    ],
  },

  // ==========================================
  // ADD MORE UNITS HERE
  // ==========================================
  // Copy the unit template above and modify it for each new unit
  // Remember to:
  // 1. Give each unit a unique key (unit4, unit5, etc.)
  // 2. Update the title and description
  // 3. Add your flashcards and questions
  // 4. Don't forget the comma after each unit (except the last one)
};

// ==========================================
// HOW TO ADD NEW CONTENT - QUICK GUIDE
// ==========================================

/*
TO ADD A NEW UNIT:
1. Copy the unit3 template above
2. Change the unit key (e.g., "unit4", "unit5")
3. Update the title and description
4. Add your flashcards and questions
5. Make sure to add a comma after the closing brace

FLASHCARD FORMAT:
{
    "front": "Question or term",
    "back": "Answer or definition"
}

MULTIPLE CHOICE QUESTION FORMAT:
{
    "type": "multiple-choice",
    "question": "Your question here",
    "options": [
        "Option 1",
        "Option 2", 
        "Option 3",
        "Option 4"
    ],
    "correct": 2  // Index of correct answer (0 = first option, 1 = second, etc.)
}

TRUE/FALSE QUESTION FORMAT:
{
    "type": "true-false",
    "question": "Your statement here",
    "correct": true  // or false
}

FILL-IN-THE-BLANK QUESTION FORMAT:
{
    "type": "fill-blank",
    "question": "Your question with ______ for the blank",
    "correct": ["answer1", "answer2", "alternative answer"]  // Multiple acceptable answers
}

TIPS:
- Always use double quotes for strings
- Don't forget commas between items in arrays and objects
- The correct answer index for multiple choice starts at 0
- You can have multiple acceptable answers for fill-in-the-blank questions
- Test your changes by refreshing the website
*/

