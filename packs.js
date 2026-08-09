/* ============================================================
   STUDY PACKS - DATA FILE
   ------------------------------------------------------------
   This is your "database" for now. Every study pack lives in
   the list below. To add a new pack, paste a new { ... } block
   into the array. Nothing else needs to change.

   Ask Claude: "make a study pack from this" + paste the
   student's notes, and you'll get a block ready to drop in.

   FORMAT (every field explained):

   id           unique short name, lowercase with dashes
   subject      "Biology", "Maths", "History" - used for filtering
   year         "Year 11", "Year 12" etc - used for filtering
   title        what the pack is called on the card
   blurb        one line describing it
   topics       list of topics covered (shown as tags)
   created      "YYYY-MM-DD"
   custom       true = made for one student, false = general library

   theme        "blue" | "green" | "purple" | "orange" - colours the pack
   emoji        shown next to the title
   examInfo     the line under the title, e.g. "Term 3 · 16 questions · 10%"
   homeTitle    big heading on the pack's home page
   homeIntro    friendly paragraph under it

   unitInfo     { "Unit name": { blurb: "one line" } }
   overview     list of { heading, points: [] }   - the dot-point summary

   notes        list of sections. Each needs a `unit` so it lands in the
                right tab: { heading, unit, body, worked, diagram,
                diagramCaption, table }
                  body supports **bold** and blank lines for paragraphs
                  worked is a step-by-step example
                  diagram is raw SVG
                  table is { head: [], rows: [[]] }

   terms        list of { term, unit, definition }
   cards        list of { front, back }           (flashcards)
   quick        list of { q, a }                  (fast one-liners)
   quiz         list of { q, a, hint, marks }     (the practice exam)
   exam         { minutes: 50 }                   (how long the exam runs)

   Any section can be left as an empty list [] if not needed.
   ============================================================ */

window.PACKS = [

  {
    id: "bio-y11-cells-genetics",
    subject: "Biology",
    year: "Year 11",
    title: "Cells & Genetics",
    blurb: "Cell structure, mitosis, DNA and basic inheritance.",
    topics: ["Cell structure", "Mitosis", "DNA", "Inheritance"],
    created: "2026-08-05",
    custom: false,
    theme: "green",
    focus: "memory",
    studyTip: "This one is mostly recall. Read the overview, then hammer the flashcards and quick questions until the answers come out without you having to think.",
    emoji: "🧬",
    examInfo: "Unit test · short answer · cells and inheritance",
    homeTitle: "Cells and genetics, without the textbook waffle",
    homeIntro: "Two topics, four sections. Read the overview if you are short on time, then drill the flashcards.",

    unitInfo: {
      "Cells": { blurb: "What cells are made of, and how they copy themselves." },
      "Genetics": { blurb: "How DNA works and how traits get passed on." }
    },

    overview: [
      {
        heading: "Cells",
        points: [
          "**Prokaryotic** cells have no nucleus - DNA floats free. Bacteria.",
          "**Eukaryotic** cells keep DNA in a nucleus. Plants, animals, fungi.",
          "**Nucleus** controls the cell, **mitochondria** release energy, **ribosomes** build proteins.",
          "Plant cells only: **cell wall**, **chloroplasts**, large vacuole.",
          "**Mitosis** makes two identical cells, for growth and repair.",
          "Stages in order: **Prophase, Metaphase, Anaphase, Telophase**, then cytokinesis. PMAT."
        ]
      },
      {
        heading: "Genetics",
        points: [
          "DNA is a **double helix** built from four bases: A, T, C, G.",
          "**A pairs with T. C pairs with G.** That is why DNA copies accurately.",
          "A **gene** is a length of DNA coding for one protein. An **allele** is a version of a gene.",
          "**Dominant** shows with one copy. **Recessive** needs two.",
          "**Genotype** = the alleles you carry. **Phenotype** = what actually shows.",
          "Use a **Punnett square** to work out the odds for offspring."
        ]
      }
    ],

    quick: [
      { q: "Which cell type has no nucleus?", options: ["Prokaryotic", "Eukaryotic", "Plant cells", "Animal cells"], answer: 0, why: "Bacteria are prokaryotic — their DNA floats loose in the cytoplasm." },
      { q: "What is the job of the nucleus?", options: ["Holds the DNA and controls the cell", "Releases energy", "Builds proteins", "Gives the cell its shape"], answer: 0, why: "Energy is mitochondria, proteins are ribosomes, shape is the cell wall." },
      { q: "What do mitochondria do?", options: ["Release energy through respiration", "Store water", "Build proteins", "Carry out photosynthesis"], answer: 0, why: "Often called the powerhouse of the cell." },
      { q: "Which structure is found ONLY in plant cells?", options: ["Chloroplast", "Nucleus", "Mitochondria", "Ribosome"], answer: 0, why: "Chloroplasts do photosynthesis. Cell walls and large vacuoles are also plant-only." },
      { q: "What is mitosis for?", options: ["Growth and repair", "Making sex cells", "Digesting food", "Fighting infection"], answer: 0, why: "It makes two genetically identical copies, which is exactly what growth and repair need." },
      { q: "What does PMAT stand for?", options: ["Prophase, Metaphase, Anaphase, Telophase", "Phase, Middle, Anaphase, Total", "Protein, Mitosis, Allele, Trait", "Prophase, Mitosis, Anaphase, Transfer"], answer: 0, why: "The four stages of mitosis in order, before cytokinesis splits the cell." },
      { q: "In which stage do chromosomes line up in the middle?", options: ["Metaphase", "Prophase", "Anaphase", "Telophase"], answer: 0, why: "Middle starts with M, same as Metaphase — a useful way to remember it." },
      { q: "Which bases pair together in DNA?", options: ["A with T, C with G", "A with C, T with G", "A with G, C with T", "Any base with any base"], answer: 0, why: "Complementary base pairing is why DNA can copy itself accurately." },
      { q: "What shape is DNA?", options: ["A double helix", "A single spiral", "A flat sheet", "A hollow sphere"], answer: 0, why: "Two strands twisted around each other." },
      { q: "What is an allele?", options: ["A version of a gene", "A type of cell", "A section of protein", "A stage of mitosis"], answer: 0, why: "A gene codes for a trait. An allele is one particular version of it, like blue vs brown." },
      { q: "A person with genotype Bb shows which trait?", options: ["The dominant one", "The recessive one", "A blend of both", "Neither"], answer: 0, why: "One dominant allele is enough. You need two recessives to show the recessive trait." },
      { q: "Which genotype shows a recessive trait?", options: ["bb", "BB", "Bb", "All of them"], answer: 0, why: "Recessive alleles only show when there is no dominant one to mask them." },
      { q: "Brown eyes is an example of a…", options: ["Phenotype", "Genotype", "Allele", "Chromosome"], answer: 0, why: "Phenotype is what you can actually see. Genotype is the letters you carry." },
      { q: "Two Bb parents. What is the chance of a recessive child?", options: ["1 in 4", "1 in 2", "1 in 3", "None"], answer: 0, why: "The Punnett square gives BB, Bb, Bb, bb. Only bb shows the recessive trait." }
    ],

    exam: { minutes: 30 },

    notes: [
      {
        heading: "Cell structure",
        unit: "Cells",
        body: "All living things are made of cells. There are two broad types.\n\n**Prokaryotic** cells (bacteria) have no nucleus. Their DNA floats loose in the cytoplasm. They are small and simple.\n\n**Eukaryotic** cells (plants, animals, fungi) keep their DNA inside a nucleus and contain membrane-bound organelles.\n\nKey organelles worth knowing cold:\n- **Nucleus** - holds DNA, controls the cell\n- **Mitochondria** - releases energy through respiration\n- **Ribosomes** - build proteins\n- **Chloroplasts** - photosynthesis (plant cells only)\n- **Cell wall** - rigid support (plant cells only)",
        image: null
      },
      {
        heading: "Mitosis",
        unit: "Cells",
        body: "Mitosis is how a cell divides to make **two identical copies** of itself. It is used for growth and repair.\n\nThe stages, in order:\n1. **Prophase** - chromosomes condense and become visible\n2. **Metaphase** - chromosomes line up along the middle\n3. **Anaphase** - chromatids are pulled to opposite ends\n4. **Telophase** - two new nuclei form\n5. **Cytokinesis** - the cytoplasm splits into two cells\n\nA common memory trick is **PMAT**. Examiners love asking you to identify a stage from a diagram, so practise recognising them by the position of the chromosomes.",
        image: null
      },
      {
        heading: "DNA",
        unit: "Genetics",
        body: "DNA is a **double helix** - two strands twisted together.\n\nIt is built from four bases: **A, T, C and G**. They pair up in a fixed way:\n- A always pairs with T\n- C always pairs with G\n\nThis is called **complementary base pairing**, and it is why DNA can copy itself accurately. A **gene** is a section of DNA that codes for one protein.",
        image: null
      },
      {
        heading: "Inheritance",
        unit: "Genetics",
        body: "You inherit one copy of each gene from each parent. Different versions of a gene are called **alleles**.\n\n**Dominant** alleles (written with a capital, e.g. B) show up even if you only have one copy.\n**Recessive** alleles (lowercase, e.g. b) only show up if you have two copies.\n\nSo BB and Bb both show the dominant trait. Only bb shows the recessive one.\n\n**Genotype** is the alleles you carry (Bb). **Phenotype** is what you actually look like (brown eyes).\n\nUse a **Punnett square** to work out the chances for offspring - draw one parent's alleles across the top, the other down the side, then fill in the boxes.",
        image: null
      }
    ],

    terms: [
      { term: "Organelle", unit: "Cells", definition: "A structure inside a cell with a specific job, like the nucleus or mitochondria." },
      { term: "Prokaryotic", unit: "Cells", definition: "A cell with no nucleus - its DNA floats freely. Bacteria are prokaryotic." },
      { term: "Eukaryotic", unit: "Cells", definition: "A cell that keeps its DNA inside a nucleus. Plants, animals and fungi." },
      { term: "Mitosis", unit: "Cells", definition: "Cell division producing two genetically identical cells, used for growth and repair." },
      { term: "Chromatid", unit: "Cells", definition: "One half of a duplicated chromosome, joined to its pair at the centromere." },
      { term: "Gene", unit: "Genetics", definition: "A section of DNA that codes for one protein." },
      { term: "Allele", unit: "Genetics", definition: "A different version of the same gene, for example brown vs blue eye colour." },
      { term: "Genotype", unit: "Genetics", definition: "The combination of alleles an organism carries, e.g. Bb." },
      { term: "Phenotype", unit: "Genetics", definition: "The physical characteristic that actually shows, e.g. brown eyes." },
      { term: "Homozygous", unit: "Genetics", definition: "Having two identical alleles for a gene - BB or bb." },
      { term: "Heterozygous", unit: "Genetics", definition: "Having two different alleles for a gene - Bb." },
      { term: "Punnett square", unit: "Genetics", definition: "A grid used to predict the possible genotypes of offspring." }
    ],

    cards: [
      { front: "What are the two types of cell?", back: "Prokaryotic (no nucleus, e.g. bacteria) and eukaryotic (nucleus, e.g. plants and animals)." },
      { front: "What does the mitochondria do?", back: "Releases energy through respiration. Often called the powerhouse of the cell." },
      { front: "Name three things plant cells have that animal cells don't.", back: "Cell wall, chloroplasts, and a large permanent vacuole." },
      { front: "List the stages of mitosis in order.", back: "Prophase, Metaphase, Anaphase, Telophase, then Cytokinesis. Remember PMAT." },
      { front: "Which bases pair together in DNA?", back: "A pairs with T. C pairs with G." },
      { front: "What shape is DNA?", back: "A double helix - two strands twisted around each other." },
      { front: "What is the difference between genotype and phenotype?", back: "Genotype is the alleles you carry (Bb). Phenotype is the trait that shows (brown eyes)." },
      { front: "If both parents are Bb, what fraction of children show the recessive trait?", back: "1 in 4, or 25%. Only the bb combination shows it." },
      { front: "What does heterozygous mean?", back: "Carrying two different alleles for a gene, such as Bb." },
      { front: "Why can DNA copy itself accurately?", back: "Because of complementary base pairing - each base only ever pairs with one other, so each strand is a template for a new one." }
    ],

    quiz: [
      {
        q: "A cell is examined under a microscope. It has a cell wall and chloroplasts. What type of cell is it, and how do you know?",
        a: "A plant cell. Chloroplasts are only found in plant cells (for photosynthesis), and the cell wall gives rigid support. Animal cells have neither.",
        hint: "Think about which structures only one kingdom has."
      },
      {
        q: "Explain why mitosis must produce genetically identical cells.",
        a: "Because it is used for growth and repair. New cells have to do the same job as the originals, so they need exactly the same instructions. The DNA is copied first, then split evenly, so each new cell gets a full identical set.",
        hint: "What is mitosis actually FOR?"
      },
      {
        q: "One strand of DNA reads A-T-C-G-G-A. What does the matching strand read?",
        a: "T-A-G-C-C-T. Each base is swapped for its pair: A with T, C with G.",
        hint: "Go base by base and apply the pairing rule."
      },
      {
        q: "Two brown-eyed parents have a blue-eyed child. Explain how this is possible. (Brown B is dominant, blue b is recessive.)",
        a: "Both parents must be heterozygous - Bb. They show brown eyes because they each carry one dominant B. But each parent can pass on their recessive b. If the child receives b from both, the genotype is bb, so the phenotype is blue eyes. A Punnett square shows a 1 in 4 chance.",
        hint: "The parents show brown, but what could they be carrying?"
      },
      {
        q: "Draw a Punnett square for Bb x bb. What proportion of offspring will have brown eyes?",
        a: "Across the top: B and b. Down the side: b and b. The boxes give Bb, bb, Bb, bb. That is 2 out of 4 with a dominant B, so 50% brown eyes and 50% blue.",
        hint: "One parent can only ever pass on b."
      },
      {
        q: "Why does a prokaryotic cell not need a nuclear membrane?",
        a: "Prokaryotes are small and simple, with a single circular loop of DNA and no membrane-bound organelles. There is no need to separate the DNA from the rest of the cell because there are no competing internal compartments. Eukaryotes are larger and more complex, so keeping DNA protected and separate becomes important.",
        hint: "Compare the size and complexity of the two cell types."
      }
    ]
  },

  {
    id: "maths-y8-number-algebra",
    subject: "Maths",
    year: "Year 8",
    title: "Number, Fractions & Algebra",
    blurb: "Everything from long division through to simplifying algebra. Explained simply, with diagrams.",
    topics: ["Long division", "HCF & LCM", "Prime factors", "Integers", "Fractions", "Decimals", "Percentages", "Algebra"],
    created: "2026-08-05",
    custom: true,
    theme: "blue",
    focus: "practice",
    studyTip: "Maths does not stick from reading it. Skim a topic once so you know the method, then go straight to Practice. Getting one wrong and seeing why is the bit that actually teaches you.",
    emoji: "📐",
    examInfo: "Year 8 Maths · chapters 1, 3 and 5 · every dot point from your checklist",
    homeTitle: "Everything on your checklist, nothing extra",
    homeIntro: "Built straight from the list your teacher handed out, so nothing here is off-topic and nothing you need is missing. Short on time? Go to the Overview - the whole lot in dot points.",

    unitInfo: {
      "Number": { blurb: "Division, factors, primes, negatives and the order you do things in." },
      "Fractions & Decimals": { blurb: "Fractions, decimals and percentages - and moving between all three." },
      "Algebra": { blurb: "Letters instead of numbers, and how to tidy expressions up." }
    },

    overview: [
      {
        heading: "Number",
        points: [
          "**Long division** - one digit at a time, carry the remainder across.",
          "**HCF** is the biggest number that divides into both. **LCM** is the smallest they both go into.",
          "**Squaring** = times by itself. **Cubing** = three times. Roots undo them.",
          "**Factor trees** break a number into primes. 60 = 2² × 3 × 5.",
          "Prime factors give HCF (lowest powers shared) and LCM (highest powers of everything).",
          "**Divisibility**: 3 and 9 add the digits; 4 check last two digits; 8 check last three.",
          "On a number line, **further left is smaller**. So −5 is less than −2.",
          "**Two signs together collapse into one.** Same = plus, different = minus.",
          "For × and ÷: **same signs positive, different signs negative**.",
          "**BIDMAS** - but × and ÷ are the same level, so go left to right. Same for + and −.",
          "**Substituting**: swap the letter for the number, and use brackets."
        ]
      },
      {
        heading: "Fractions & Decimals",
        points: [
          "**Equivalent fractions** - multiply or divide top and bottom by the same number.",
          "**Simplify** by dividing both by the HCF.",
          "**Adding or subtracting** needs a common denominator. Multiplying does not.",
          "**Dividing** - flip the second fraction and multiply. Keep, change, flip.",
          "Turn **mixed numerals into improper fractions** before doing anything.",
          "**Fraction to decimal** - divide top by bottom. **Decimal to fraction** - use the place value, then simplify.",
          "**× or ÷ by 10, 100, 1000** - move the decimal point, one place per zero.",
          "**Multiplying decimals** - ignore points, multiply, then count the places.",
          "**Terminating** stops (0.125). **Recurring** repeats forever (0.333...).",
          "**Rounding** - look at the next digit. 5 or more rounds up.",
          "**Percent means out of 100.** ÷100 for decimal, ×100 to go back.",
          "**Percentage of an amount** - make it a decimal and multiply. Watch your units."
        ]
      },
      {
        heading: "Algebra",
        points: [
          "A **variable** is a letter standing in for a number.",
          "A **term** is a chunk separated by + or −. The **coefficient** is the number in front.",
          "In just x the coefficient is 1. In −x it is −1.",
          "**Like terms** have identical letters AND powers. Only those can be combined.",
          "3x and 3y are not alike. Neither are 3x and 3x².",
          "**The sign in front belongs to the term** - that is why 4b − 6b = −2b.",
          "**Multiplying terms** - multiply the numbers, write the letters together. 3a × 4b = 12ab.",
          "**Dividing terms** - write it as a fraction and cancel. 12xy ÷ 3x = 4y."
        ]
      }
    ],

    quick: [
      { q: "What does HCF stand for?", options: ["Highest Common Factor", "Higher Count Formula", "Half Common Fraction", "Highest Complete Figure"], answer: 0, why: "It is the biggest number that divides into both of your numbers." },
      { q: "What does LCM stand for?", options: ["Lowest Common Multiple", "Largest Common Multiple", "Least Common Fraction", "Lowest Counted Method"], answer: 0, why: "The smallest number that both of your numbers go into." },
      { q: "Is 1 a prime number?", options: ["No", "Yes", "Only sometimes", "Only in algebra"], answer: 0, why: "A prime needs exactly two factors. 1 only has one factor, itself." },
      { q: "What is 60 written as prime factors?", options: ["2² × 3 × 5", "2 × 3 × 10", "6 × 10", "2³ × 5"], answer: 0, why: "60 splits into 6 × 10, then 2 × 3 and 2 × 5. So two 2s, a 3 and a 5." },
      { q: "How do you test if a number divides by 3?", options: ["Add the digits and check that total", "Check the last digit", "Halve it twice", "Check the last two digits"], answer: 0, why: "471 gives 4 + 7 + 1 = 12, which divides by 3, so 471 does too." },
      { q: "How do you test if a number divides by 4?", options: ["Check the last two digits", "Check the last digit", "Add all the digits", "Check the first two digits"], answer: 0, why: "1316 ends in 16, and 16 divides by 4, so the whole number does." },
      { q: "What is 4³?", options: ["64", "12", "16", "81"], answer: 0, why: "4 × 4 × 4. The 12 is the trap — that would be 4 × 3." },
      { q: "What is √81?", options: ["9", "8", "40.5", "18"], answer: 0, why: "Because 9 × 9 = 81." },
      { q: "Which is bigger, −5 or −2?", options: ["−2", "−5", "They are equal", "You cannot compare negatives"], answer: 0, why: "On a number line −2 sits further right. Further left always means smaller." },
      { q: "What is 5 − (−3)?", options: ["8", "2", "−8", "−2"], answer: 0, why: "Minus a minus becomes plus, so it turns into 5 + 3." },
      { q: "What is −4 + (−6)?", options: ["−10", "10", "−2", "2"], answer: 0, why: "Plus a minus becomes minus, so it is −4 − 6." },
      { q: "What is −20 ÷ −4?", options: ["5", "−5", "80", "−80"], answer: 0, why: "Same signs give a positive answer." },
      { q: "What is −6 × 3?", options: ["−18", "18", "−9", "9"], answer: 0, why: "Different signs give a negative answer." },
      { q: "What is 3 + 4 × 2²?", options: ["19", "28", "49", "14"], answer: 0, why: "Indices first (2² = 4), then multiply (16), then add. 28 is what you get reading left to right, which is wrong." },
      { q: "In 20 − 12 ÷ 4 × 2, what do you do first?", options: ["The division", "The subtraction", "The multiplication", "Left to right, so the subtraction"], answer: 0, why: "× and ÷ are the same level, so go left to right. The ÷ is furthest left." },
      { q: "Simplify 18/24", options: ["3/4", "9/12", "6/8", "2/3"], answer: 0, why: "9/12 and 6/8 are equal in value but not fully simplified. Divide both by the HCF, 6." },
      { q: "What is 2/3 + 1/4?", options: ["11/12", "3/7", "2/12", "5/7"], answer: 0, why: "Convert to twelfths: 8/12 + 3/12. Never add the bottoms — 3/7 is the classic mistake." },
      { q: "How do you divide by a fraction?", options: ["Flip the second one and multiply", "Flip the first one and multiply", "Divide tops and divide bottoms", "Find a common denominator first"], answer: 0, why: "Keep, change, flip. So 3/4 ÷ 2/5 becomes 3/4 × 5/2." },
      { q: "What is 3/8 as a decimal?", options: ["0.375", "0.38", "0.83", "3.8"], answer: 0, why: "Just divide the top by the bottom: 3 ÷ 8." },
      { q: "What is 5.6 ÷ 1000?", options: ["0.0056", "0.056", "5600", "0.56"], answer: 0, why: "Three zeros means the point moves three places left." },
      { q: "What is 0.6 × 0.4?", options: ["0.24", "2.4", "0.024", "1.0"], answer: 0, why: "6 × 4 = 24, and there are two decimal places altogether." },
      { q: "Which of these is a recurring decimal?", options: ["0.333...", "0.125", "0.5", "0.75"], answer: 0, why: "Recurring means it repeats forever. The others all stop, so they terminate." },
      { q: "Round 0.6666 to 2 decimal places", options: ["0.67", "0.66", "0.7", "0.666"], answer: 0, why: "The third digit is 6, which is 5 or more, so the second decimal rounds up." },
      { q: "What is 45% as a decimal?", options: ["0.45", "4.5", "45.0", "0.045"], answer: 0, why: "Percent means out of 100, so divide by 100." },
      { q: "What is 3/5 as a percentage?", options: ["60%", "35%", "53%", "30%"], answer: 0, why: "3 ÷ 5 = 0.6, then × 100." },
      { q: "What is 20% of 350?", options: ["70", "35", "700", "17.5"], answer: 0, why: "0.2 × 350. Or find 10% (35) and double it." },
      { q: "15 out of 60 as a percentage is…", options: ["25%", "15%", "40%", "4%"], answer: 0, why: "15/60 = 0.25, then × 100." },
      { q: "What is the coefficient in −x?", options: ["−1", "1", "0", "x"], answer: 0, why: "There is always an invisible 1, and the minus sign belongs with it." },
      { q: "Are 3x and 3x² like terms?", options: ["No, the powers differ", "Yes, both have an x", "Yes, both have a 3", "Only when x = 1"], answer: 0, why: "Like terms need identical letters AND identical powers." },
      { q: "Simplify 5x + 3y − 2x + y", options: ["3x + 4y", "6x + 3y", "3x + 3y", "7xy"], answer: 0, why: "Collect x terms (5x − 2x) and y terms (3y + y) separately. They cannot merge." },
      { q: "Simplify 3a × 4b", options: ["12ab", "7ab", "12a + 12b", "3a4b"], answer: 0, why: "Multiply the numbers, then write the letters side by side." },
      { q: "Simplify 12xy ÷ 3x", options: ["4y", "4xy", "9y", "4x"], answer: 0, why: "12 ÷ 3 = 4, and the x cancels top and bottom, leaving just the y." }
    ],

    practice: [
      { topic: "Long division", q: "3552 ÷ 8", answer: "444", why: "8 into 35 goes 4 (32) remainder 3. Bring down the 5 to make 35 again: 4 remainder 3. Bring down the 2 to make 32: exactly 4." },
      { topic: "HCF", q: "Find the HCF of 24 and 36", answer: "12", why: "24 = 2³ × 3 and 36 = 2² × 3². Take the lowest shared powers: 2² × 3 = 12." },
      { topic: "LCM", q: "Find the LCM of 6 and 8", answer: "24", why: "Multiples of 6: 6, 12, 18, 24. Multiples of 8: 8, 16, 24. First match is 24." },
      { topic: "Powers", q: "What is 5³?", answer: "125", why: "5 × 5 × 5." },
      { topic: "Roots", q: "What is √144?", answer: "12", accept: ["12.0"], why: "12 × 12 = 144." },
      { topic: "Prime factors", q: "Write 72 as a product of prime factors (use ^ for powers, like 2^3 x 3)", answer: "2^3 x 3^2", accept: ["2^3*3^2", "2x2x2x3x3", "2*2*2*3*3"], why: "72 = 8 × 9, and 8 = 2³ while 9 = 3²." },
      { topic: "Integers", q: "−8 − (−5)", answer: "-3", why: "Minus a minus becomes plus, so it is −8 + 5." },
      { topic: "Integers", q: "−7 + (−6)", answer: "-13", why: "Plus a minus becomes minus, so it is −7 − 6." },
      { topic: "Integers", q: "−9 × −4", answer: "36", why: "Same signs give a positive answer." },
      { topic: "Integers", q: "−48 ÷ 6", answer: "-8", why: "Different signs give a negative answer." },
      { topic: "Order of operations", q: "6 + 2 × 3²", answer: "24", why: "Indices first (3² = 9), then multiply (2 × 9 = 18), then add 6." },
      { topic: "Order of operations", q: "30 − 20 ÷ 5 × 2", answer: "22", why: "× and ÷ left to right: 20 ÷ 5 = 4, then 4 × 2 = 8. Then 30 − 8." },
      { topic: "Substitution", q: "Evaluate 4a − b when a = −3 and b = 5", answer: "-17", why: "4(−3) − 5 = −12 − 5." },
      { topic: "Substitution", q: "Evaluate x² + 2x when x = −4", answer: "8", why: "(−4)² = 16 and 2(−4) = −8, so 16 − 8." },
      { topic: "Fractions", q: "Simplify 42/56", answer: "3/4", why: "The HCF of 42 and 56 is 14. 42 ÷ 14 = 3 and 56 ÷ 14 = 4." },
      { topic: "Fractions", q: "3/5 + 1/4  (give a fraction)", answer: "17/20", why: "Twentieths: 12/20 + 5/20." },
      { topic: "Fractions", q: "2/3 × 6/7  (simplest form)", answer: "4/7", why: "12/21, then divide both by 3." },
      { topic: "Fractions", q: "5/6 ÷ 2/3  (simplest form)", answer: "5/4", accept: ["1 1/4", "1.25"], why: "Flip and multiply: 5/6 × 3/2 = 15/12 = 5/4." },
      { topic: "Decimals", q: "0.8 × 0.05", answer: "0.04", why: "8 × 5 = 40, and three decimal places gives 0.040, which is 0.04." },
      { topic: "Decimals", q: "7.2 ÷ 100", answer: "0.072", why: "Two zeros, so the point moves two places left." },
      { topic: "Decimals", q: "Write 5/8 as a decimal", answer: "0.625", why: "5 ÷ 8." },
      { topic: "Rounding", q: "Round 3.4851 to 2 decimal places", answer: "3.49", why: "The third decimal is 5, so the second one rounds up." },
      { topic: "Percentages", q: "What is 35% of 80?", answer: "28", why: "0.35 × 80." },
      { topic: "Percentages", q: "Write 18 out of 45 as a percentage (number only)", answer: "40", accept: ["40%"], why: "18/45 = 0.4, then × 100." },
      { topic: "Percentages", q: "A $60 jacket is reduced by 15%. What is the new price? (number only)", answer: "51", accept: ["$51", "51.00"], why: "You pay 85% of it. 0.85 × 60 = 51." },
      { topic: "Algebra", q: "Simplify 9m + 4n − 5m − 7n", answer: "4m-3n", accept: ["4m - 3n", "-3n+4m", "4m+-3n"], why: "m terms: 9m − 5m = 4m. n terms: 4n − 7n = −3n." },
      { topic: "Algebra", q: "Simplify 6p × 3q", answer: "18pq", accept: ["18qp"], why: "6 × 3 = 18, then write the letters together." },
      { topic: "Algebra", q: "Simplify 4x × 5x", answer: "20x^2", accept: ["20x²", "20xx"], why: "4 × 5 = 20, and x × x = x²." },
      { topic: "Algebra", q: "Simplify 20ab ÷ 5a", answer: "4b", why: "20 ÷ 5 = 4, and the a cancels top and bottom." }
    ],

    exam: { minutes: 50 },

    notes: [
      {
        heading: "Long division",
        unit: "Number",
        body: "Long division is just doing division one digit at a time, left to right.\n\nFor each digit you ask: **how many times does it go in?** Write that on top. Then work out what's left over and carry it to the next digit.",
        steps: [
          { art: "     7 8 8\n    _______\n 6 ) 4 7 2 8", why: "Set it out with the divisor outside and the answer building up on top." },
          { do: "6 into 4 goes 0 times", why: "6 is bigger than 4, so we cannot start there. Look at the first TWO digits instead." },
          { do: "6 into 47 goes 7 times, remainder 5", why: "7 x 6 = 42, and 47 - 42 = 5. Write the 7 on top." },
          { do: "6 into 52 goes 8 times, remainder 4", why: "Bring the 2 down beside the 5 to make 52. 8 x 6 = 48." },
          { do: "6 into 48 goes 8 times, remainder 0", why: "Bring the 8 down to make 48. It divides exactly, so we are finished." },
          { do: "4728 divided by 6 = 788", why: "Always check by multiplying back: 788 x 6 = 4728.", answer: true }
        ]
      },
      {
        heading: "HCF and LCM",
        unit: "Number",
        body: "**HCF** = Highest Common Factor. The **biggest** number that divides into both.\n\n**LCM** = Lowest Common Multiple. The **smallest** number both go into.\n\nEasy way to remember: HCF is smaller than your numbers, LCM is bigger.",
        steps: [
          { do: "Factors of 12:  1, 2, 3, 4, 6, 12", why: "Every whole number that divides into 12 with nothing left over." },
          { do: "Factors of 18:  1, 2, 3, 6, 9, 18", why: "Same again for 18." },
          { do: "Shared factors: 1, 2, 3, 6", why: "Both lists contain these. The biggest is 6." },
          { do: "HCF = 6", answer: true },
          { do: "Multiples of 12:  12, 24, 36, 48 ...", why: "Just count up in 12s." },
          { do: "Multiples of 18:  18, 36, 54 ...", why: "Count up in 18s. The first number that shows up in both lists is 36." },
          { do: "LCM = 36", answer: true }
        ]
      },
      {
        heading: "Squares, cubes and roots",
        unit: "Number",
        body: "**Squaring** means times a number by itself. 4² = 4 × 4 = 16.\n\n**Cubing** means times it by itself three times. 3³ = 3 × 3 × 3 = 27.\n\nRoots undo them. √16 = 4 because 4² = 16. ∛27 = 3 because 3³ = 27.\n\nThe names come from shapes, which is the easiest way to picture it.",
        diagram: '<svg viewBox="0 0 520 170" xmlns="http://www.w3.org/2000/svg" role="img"><title>A 4 by 4 square showing 16, and a 3 by 3 by 3 cube showing 27</title><g><rect x="20" y="30" width="120" height="120" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/><g stroke="var(--accent-line)" stroke-width="1"><line x1="50" y1="30" x2="50" y2="150"/><line x1="80" y1="30" x2="80" y2="150"/><line x1="110" y1="30" x2="110" y2="150"/><line x1="20" y1="60" x2="140" y2="60"/><line x1="20" y1="90" x2="140" y2="90"/><line x1="20" y1="120" x2="140" y2="120"/></g><text x="80" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="var(--ink)">4 &#215; 4 = 16</text><text x="80" y="166" text-anchor="middle" font-size="13" fill="var(--ink-soft)">4 squared, written 4&#178;</text></g><g transform="translate(300,0)"><path d="M20 60 L90 60 L90 130 L20 130 Z" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/><path d="M20 60 L50 30 L120 30 L90 60 Z" fill="#d9e9e0" stroke="var(--accent)" stroke-width="2"/><path d="M90 60 L120 30 L120 100 L90 130 Z" fill="#c5ddd0" stroke="var(--accent)" stroke-width="2"/><text x="70" y="20" text-anchor="middle" font-size="14" font-weight="600" fill="var(--ink)">3 &#215; 3 &#215; 3 = 27</text><text x="70" y="152" text-anchor="middle" font-size="13" fill="var(--ink-soft)">3 cubed, written 3&#179;</text></g></svg>',
        diagramCaption: "Squaring makes a square. Cubing makes a cube."
      },
      {
        heading: "Prime factors and factor trees",
        unit: "Number",
        body: "A **prime number** has exactly two factors: 1 and itself. 2, 3, 5, 7, 11, 13...\n\nEvery number can be broken down into primes multiplied together. Draw a **factor tree**: split the number into any two factors, keep splitting, and stop when everything is prime.\n\nCircle the primes as you finish them so you don't lose track.",
        diagram: '<svg viewBox="0 0 500 210" xmlns="http://www.w3.org/2000/svg" role="img"><title>Factor tree breaking 60 into 2 times 2 times 3 times 5</title><g stroke="var(--ink-faint)" stroke-width="1.5"><line x1="250" y1="42" x2="180" y2="78"/><line x1="250" y1="42" x2="320" y2="78"/><line x1="180" y1="100" x2="140" y2="136"/><line x1="180" y1="100" x2="220" y2="136"/><line x1="320" y1="100" x2="280" y2="136"/><line x1="320" y1="100" x2="360" y2="136"/></g><g font-size="17" font-weight="600" text-anchor="middle"><text x="250" y="35" fill="var(--ink)">60</text><text x="180" y="95" fill="var(--ink)">6</text><text x="320" y="95" fill="var(--ink)">10</text></g><g><circle cx="140" cy="148" r="16" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/><circle cx="220" cy="148" r="16" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/><circle cx="280" cy="148" r="16" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/><circle cx="360" cy="148" r="16" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/></g><g font-size="16" font-weight="600" text-anchor="middle" fill="var(--accent)"><text x="140" y="154">2</text><text x="220" y="154">3</text><text x="280" y="154">2</text><text x="360" y="154">5</text></g><text x="250" y="195" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">60 = 2 &#215; 2 &#215; 3 &#215; 5 = 2&#178; &#215; 3 &#215; 5</text></svg>',
        diagramCaption: "Circled numbers are prime, so that branch stops."
      },
      {
        heading: "Using prime factors for HCF and LCM",
        unit: "Number",
        body: "This method is faster once numbers get big.\n\n**HCF** – take the primes that appear in **both**, using the smaller power.\n**LCM** – take **every** prime that appears, using the bigger power.",
        steps: [
          { do: "12 = 2 x 2 x 3 = 2² x 3", why: "Break the first number down into primes." },
          { do: "18 = 2 x 3 x 3 = 2 x 3²", why: "And the second one." },
          { do: "HCF: take the LOWEST power of each shared prime", why: "Both have a 2 and a 3. Lowest powers are 2¹ and 3¹." },
          { do: "2 x 3 = 6", answer: true },
          { do: "LCM: take the HIGHEST power of every prime that appears", why: "Highest powers are 2² and 3²." },
          { do: "4 x 9 = 36", answer: true }
        ]
      },
      {
        heading: "Divisibility tests",
        unit: "Number",
        body: "These let you check if a number divides evenly **without** doing the division. Worth memorising – they save loads of time in an exam.",
        table: {
          head: ["Divisible by", "Test", "Example"],
          rows: [
            ["2", "Last digit is even", "374 ends in 4, yes"],
            ["3", "Digits add to a multiple of 3", "471: 4+7+1 = 12, yes"],
            ["4", "Last TWO digits divide by 4", "1316: 16 divides by 4, yes"],
            ["5", "Ends in 0 or 5", "285 ends in 5, yes"],
            ["6", "Passes the 2 test AND the 3 test", "342 is even, 3+4+2 = 9, yes"],
            ["8", "Last THREE digits divide by 8", "5120: 120 divides by 8, yes"],
            ["9", "Digits add to a multiple of 9", "738: 7+3+8 = 18, yes"]
          ]
        }
      },
      {
        heading: "Negative numbers on a number line",
        unit: "Number",
        body: "A number line is the best tool for negatives. Numbers get **smaller** as you go left.\n\nSo −5 is smaller than −2, even though 5 looks bigger than 2. This trips people up constantly.\n\nAdding moves you **right**. Subtracting moves you **left**.",
        diagram: '<svg viewBox="0 0 560 110" xmlns="http://www.w3.org/2000/svg" role="img"><title>Number line from negative 5 to positive 5</title><defs><marker id="ar" markerWidth="9" markerHeight="7" refX="8" refY="3.5" orient="auto"><polygon points="0 0, 9 3.5, 0 7" fill="var(--ink-soft)"/></marker></defs><line x1="20" y1="50" x2="540" y2="50" stroke="var(--ink-soft)" stroke-width="2" marker-end="url(#ar)"/><g stroke="var(--ink-soft)" stroke-width="2"><line x1="30" y1="42" x2="30" y2="58"/><line x1="80" y1="42" x2="80" y2="58"/><line x1="130" y1="42" x2="130" y2="58"/><line x1="180" y1="42" x2="180" y2="58"/><line x1="230" y1="42" x2="230" y2="58"/><line x1="280" y1="38" x2="280" y2="62"/><line x1="330" y1="42" x2="330" y2="58"/><line x1="380" y1="42" x2="380" y2="58"/><line x1="430" y1="42" x2="430" y2="58"/><line x1="480" y1="42" x2="480" y2="58"/><line x1="530" y1="42" x2="530" y2="58"/></g><g font-size="14" text-anchor="middle" fill="var(--ink)"><text x="30" y="78">-5</text><text x="80" y="78">-4</text><text x="130" y="78">-3</text><text x="180" y="78">-2</text><text x="230" y="78">-1</text><text x="280" y="78" font-weight="700">0</text><text x="330" y="78">1</text><text x="380" y="78">2</text><text x="430" y="78">3</text><text x="480" y="78">4</text><text x="530" y="78">5</text></g><text x="120" y="24" text-anchor="middle" font-size="13" font-weight="600" fill="var(--warn)">&#8592; smaller</text><text x="440" y="24" text-anchor="middle" font-size="13" font-weight="600" fill="var(--accent)">bigger &#8594;</text><text x="280" y="102" text-anchor="middle" font-size="13" fill="var(--ink-soft)">-5 is LESS than -2</text></svg>',
        diagramCaption: "Further left always means smaller."
      },
      {
        heading: "Adding and subtracting negatives",
        unit: "Number",
        body: "There is really only one rule you need:\n\n**Two signs next to each other turn into one.**\n\n- Two the same (+ + or − −) become a **plus**\n- Two different (+ − or − +) become a **minus**\n\nFix the signs first, then just move along the number line.",
        steps: [
          { do: "5 + (-3)  becomes  5 - 3 = 2", why: "Plus then minus are different signs, so they collapse into a minus." },
          { do: "5 - (-3)  becomes  5 + 3 = 8", why: "Minus then minus are the same, so they collapse into a plus." },
          { do: "-4 + (-6)  becomes  -4 - 6 = -10", why: "Different signs again, so it is a minus. Keep going left from -4." },
          { do: "-4 - (-6)  becomes  -4 + 6 = 2", why: "Same signs, so plus. Move 6 to the right from -4." },
          { do: "Subtracting a negative is the same as adding", why: "That is the whole trick. Fix the signs first, then it is ordinary arithmetic.", answer: true }
        ]
      },
      {
        heading: "Multiplying and dividing integers",
        unit: "Number",
        body: "For × and ÷ the sign rule is short: **same signs give a positive, different signs give a negative.**\n\nWork out the numbers first, then decide the sign at the end.\n\nIf there are several signs, count the negatives. An **even** number of negatives gives a positive. An **odd** number gives a negative.",
        diagram: '<svg viewBox="0 0 420 180" xmlns="http://www.w3.org/2000/svg" role="img"><title>Sign rules grid for multiplying and dividing</title><g><rect x="90" y="30" width="150" height="60" fill="var(--accent-soft)" stroke="var(--accent-line)" stroke-width="1.5"/><rect x="240" y="30" width="150" height="60" fill="var(--warn-soft)" stroke="#e4c9ac" stroke-width="1.5"/><rect x="90" y="90" width="150" height="60" fill="var(--warn-soft)" stroke="#e4c9ac" stroke-width="1.5"/><rect x="240" y="90" width="150" height="60" fill="var(--accent-soft)" stroke="var(--accent-line)" stroke-width="1.5"/></g><g font-size="20" font-weight="700" text-anchor="middle"><text x="165" y="67" fill="var(--accent)">+ &#215; + = +</text><text x="315" y="67" fill="var(--warn)">+ &#215; &#8722; = &#8722;</text><text x="165" y="127" fill="var(--warn)">&#8722; &#215; + = &#8722;</text><text x="315" y="127" fill="var(--accent)">&#8722; &#215; &#8722; = +</text></g><text x="45" y="63" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink-soft)">same</text><text x="45" y="79" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink-soft)">signs</text><text x="45" y="123" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink-soft)">mixed</text><text x="45" y="139" text-anchor="middle" font-size="13" font-weight="600" fill="var(--ink-soft)">signs</text><text x="240" y="172" text-anchor="middle" font-size="13" fill="var(--ink-soft)">The same rules work for division.</text></svg>',
        diagramCaption: "Green means the answer is positive, orange means negative."
      },
      {
        heading: "Order of operations",
        unit: "Number",
        body: "Do things in this order, or you'll get the wrong answer:\n\n**B** rackets\n**I** ndices (powers and roots)\n**D** ivision and **M** ultiplication – left to right\n**A** ddition and **S** ubtraction – left to right\n\nThe big trap: × and ÷ are the **same level**. You do them left to right, not all the × first. Same with + and −.",
        steps: [
          { do: "3 + 4 x 2²", why: "Do not read this left to right. Find the highest-priority bit first." },
          { do: "= 3 + 4 x 4", why: "Indices come before everything except brackets. 2² = 4." },
          { do: "= 3 + 16", why: "Now multiply. 4 x 4 = 16." },
          { do: "= 19", why: "Finally add. If you had gone left to right you would have got 28, which is wrong.", answer: true },
          { do: "20 - 12 ÷ 4 x 2", why: "Second example. Division and multiplication are the SAME level." },
          { do: "= 20 - 3 x 2", why: "So go left to right. The division is further left, so do it first." },
          { do: "= 20 - 6 = 14", answer: true }
        ]
      },
      {
        heading: "Substitution",
        unit: "Number",
        body: "Substituting means **swapping a letter for a number**.\n\nPut brackets around the number when you swap it in – especially with negatives. This one habit prevents most substitution mistakes.",
        steps: [
          { do: "Evaluate 3a + b² when a = -2 and b = 3", why: "Swap each letter for its number." },
          { do: "= 3(-2) + (3)²", why: "Brackets around every number you substitute. This is the habit that saves you." },
          { do: "= -6 + 9", why: "3 x -2 = -6. And 3² = 9." },
          { do: "= 3", answer: true },
          { do: "Evaluate 5 - 2x when x = -4", why: "Second one, same method." },
          { do: "= 5 - 2(-4) = 5 + 8 = 13", why: "Minus times minus gives plus, so it becomes 5 + 8.", answer: true }
        ]
      },
      {
        heading: "Equivalent fractions and simplifying",
        unit: "Fractions & Decimals",
        body: "Equivalent fractions look different but are worth the same amount.\n\nTo make one, **multiply top and bottom by the same number**. To simplify, **divide top and bottom by the same number** until you can't any more.\n\nQuickest way to simplify: divide both by their HCF.",
        diagram: '<svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" role="img"><title>Three bars showing one half equals two quarters equals three sixths</title><g><rect x="120" y="20" width="300" height="40" fill="none" stroke="var(--ink-soft)" stroke-width="2"/><rect x="120" y="20" width="150" height="40" fill="var(--accent-soft)"/><line x1="270" y1="20" x2="270" y2="60" stroke="var(--ink-soft)" stroke-width="2"/><text x="60" y="46" font-size="18" font-weight="600" fill="var(--ink)">1/2</text></g><g><rect x="120" y="80" width="300" height="40" fill="none" stroke="var(--ink-soft)" stroke-width="2"/><rect x="120" y="80" width="150" height="40" fill="var(--accent-soft)"/><g stroke="var(--ink-soft)" stroke-width="2"><line x1="195" y1="80" x2="195" y2="120"/><line x1="270" y1="80" x2="270" y2="120"/><line x1="345" y1="80" x2="345" y2="120"/></g><text x="60" y="106" font-size="18" font-weight="600" fill="var(--ink)">2/4</text></g><g><rect x="120" y="140" width="300" height="40" fill="none" stroke="var(--ink-soft)" stroke-width="2"/><rect x="120" y="140" width="150" height="40" fill="var(--accent-soft)"/><g stroke="var(--ink-soft)" stroke-width="2"><line x1="170" y1="140" x2="170" y2="180"/><line x1="220" y1="140" x2="220" y2="180"/><line x1="270" y1="140" x2="270" y2="180"/><line x1="320" y1="140" x2="320" y2="180"/><line x1="370" y1="140" x2="370" y2="180"/></g><text x="60" y="166" font-size="18" font-weight="600" fill="var(--ink)">3/6</text></g><text x="460" y="106" font-size="15" fill="var(--ink-soft)">all the</text><text x="460" y="124" font-size="15" fill="var(--ink-soft)">same</text></svg>',
        diagramCaption: "The shaded amount never changes – only how many pieces it's cut into.",
        steps: [
          { do: "Simplify 18/24", why: "Look for a number that divides into both the top and the bottom." },
          { do: "HCF of 18 and 24 is 6", why: "6 is the biggest number that goes into both." },
          { do: "18 ÷ 6 = 3   and   24 ÷ 6 = 4", why: "Divide top and bottom by the same thing, so the value does not change." },
          { do: "18/24 = 3/4", answer: true }
        ]
      },
      {
        heading: "Adding and subtracting fractions",
        unit: "Fractions & Decimals",
        body: "You can only add or subtract fractions when the **bottoms match**.\n\nFind a common denominator (the LCM of the bottoms works well), convert both, then add the tops only. The bottom stays the same.\n\nWith mixed numerals, turn them into improper fractions first – it's less fiddly than trying to handle the whole numbers separately.",
        steps: [
          { do: "2/3 + 1/4", why: "The bottoms are different, so we cannot add yet." },
          { do: "LCM of 3 and 4 is 12", why: "Twelfths is the smallest size of piece that works for both." },
          { do: "2/3 = 8/12   and   1/4 = 3/12", why: "Multiply top and bottom by whatever turns the denominator into 12." },
          { do: "8/12 + 3/12 = 11/12", why: "Add the tops only. The bottom stays as it is.", answer: true },
          { do: "2 1/2 + 1 3/4", why: "Mixed numerals. Convert before you do anything else." },
          { do: "= 5/2 + 7/4 = 10/4 + 7/4", why: "Improper fractions, then a common bottom of 4." },
          { do: "= 17/4 = 4 1/4", answer: true }
        ]
      },
      {
        heading: "Multiplying and dividing fractions",
        unit: "Fractions & Decimals",
        body: "**Multiplying** is the easy one. Tops times tops, bottoms times bottoms. No common denominator needed.\n\n**Dividing** – flip the second fraction upside down and multiply instead. Some people remember it as \"keep, change, flip\".\n\nAgain, convert mixed numerals to improper fractions before you start.",
        steps: [
          { do: "2/3 x 3/5", why: "Multiplying is the easy one - no common denominator needed." },
          { do: "= (2 x 3) / (3 x 5) = 6/15", why: "Tops together, bottoms together." },
          { do: "= 2/5", why: "Simplify by dividing both by 3.", answer: true },
          { do: "3/4 ÷ 2/5", why: "Dividing. Do not try to divide directly." },
          { do: "= 3/4 x 5/2", why: "Keep the first, change the sign, flip the second." },
          { do: "= 15/8 = 1 7/8", answer: true }
        ]
      },
      {
        heading: "Negative fractions",
        unit: "Fractions & Decimals",
        body: "Nothing new here – it's the fraction rules plus the sign rules you already know.\n\nDeal with the **sign first**, then do the fraction work. Keep the negative sign with the top of the fraction so you don't lose it.",
        steps: [
          { do: "-1/2 + 1/3", why: "Common denominator first, sign rules second." },
          { do: "= -3/6 + 2/6 = -1/6", why: "Sixths. -3 plus 2 is -1.", answer: true },
          { do: "-2/3 x 3/4 = -6/12 = -1/2", why: "One negative, so the answer is negative.", answer: true },
          { do: "-1/2 ÷ -1/4  =  -1/2 x -4/1  =  4/2 = 2", why: "Two negatives cancel out, so the answer comes out positive.", answer: true }
        ]
      },
      {
        heading: "Understanding decimals",
        unit: "Fractions & Decimals",
        body: "Each place after the point is ten times smaller than the one before: tenths, hundredths, thousandths.\n\n**Comparing decimals** – line up the points and compare digit by digit from the left. Pad with zeros if it helps. 0.7 is bigger than 0.68, because 0.70 beats 0.68 at the tenths.\n\n**Decimal to fraction** – the last place tells you the bottom number, then simplify.\n\n**Fraction to decimal** – just divide the top by the bottom.",
        steps: [
          { do: "0.35  ->  35/100  ->  7/20", why: "The last digit is in the hundredths place, so put it over 100, then simplify by 5." },
          { do: "0.6  ->  6/10  ->  3/5", why: "Tenths place, so over 10, then simplify by 2." },
          { do: "3/8  ->  3 ÷ 8  =  0.375", why: "Going the other way is just a division." },
          { do: "1/4  ->  1 ÷ 4  =  0.25", answer: true }
        ]
      },
      {
        heading: "Operations with decimals",
        unit: "Fractions & Decimals",
        body: "**Adding and subtracting** – line up the decimal points, then work as normal.\n\n**Multiplying or dividing by 10, 100, 1000** – just move the point. Right to multiply, left to divide. One place per zero.\n\n**Multiplying two decimals** – ignore the points, multiply as whole numbers, then count how many decimal places there were altogether and put that many in the answer.",
        steps: [
          { do: "2.4 x 100 = 240", why: "Two zeros, so the point moves two places RIGHT." },
          { do: "5.6 ÷ 1000 = 0.0056", why: "Three zeros, so three places LEFT. Pad with zeros where you run out." },
          { do: "0.6 x 0.4", why: "For two decimals, ignore the points to start with." },
          { do: "6 x 4 = 24", why: "Do it as whole numbers." },
          { do: "1 place + 1 place = 2 places", why: "Count the decimal places in the question." },
          { do: "0.6 x 0.4 = 0.24", answer: true }
        ]
      },
      {
        heading: "Terminating, recurring and rounding",
        unit: "Fractions & Decimals",
        body: "A **terminating** decimal stops. 1/8 = 0.125.\n\nA **recurring** decimal repeats forever. 1/3 = 0.333... We write it with a dot over the repeating part.\n\n**Rounding** – look at the digit **after** the place you're rounding to. 5 or more rounds up, 4 or less stays put.",
        steps: [
          { do: "1/8 = 0.125", why: "It stops, so it is a terminating decimal." },
          { do: "1/3 = 0.333...", why: "It never stops. That is recurring - write it with a dot over the 3." },
          { do: "2/11 = 0.1818...", why: "Recurring too, but a two-digit pattern repeats." },
          { do: "Round 0.6666 to 2 decimal places", why: "Look at the digit AFTER the place you are keeping." },
          { do: "Third digit is 6, which is 5 or more, so round up", why: "That bumps the second decimal from 6 to 7." },
          { do: "0.6666 rounds to 0.67", answer: true }
        ]
      },
      {
        heading: "Fractions, decimals and percentages",
        unit: "Fractions & Decimals",
        body: "These are three ways of writing the same thing. You need to move between all of them.\n\n**Percent literally means \"out of 100\"**, so a percentage is already a fraction with 100 on the bottom.",
        diagram: '<svg viewBox="0 0 520 220" xmlns="http://www.w3.org/2000/svg" role="img"><title>How to convert between fractions, decimals and percentages</title><defs><marker id="a2" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="var(--ink-soft)"/></marker></defs><g><rect x="190" y="15" width="140" height="46" rx="9" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><rect x="25" y="150" width="140" height="46" rx="9" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><rect x="355" y="150" width="140" height="46" rx="9" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/></g><g font-size="16" font-weight="650" text-anchor="middle" fill="var(--accent)"><text x="260" y="44">FRACTION</text><text x="95" y="179">DECIMAL</text><text x="425" y="179">PERCENT</text></g><g stroke="var(--ink-soft)" stroke-width="1.5" fill="none" marker-end="url(#a2)"><line x1="205" y1="66" x2="120" y2="145"/><line x1="315" y1="66" x2="400" y2="145"/><line x1="170" y1="173" x2="350" y2="173"/><line x1="350" y1="185" x2="170" y2="185"/></g><text x="105" y="105" text-anchor="end" font-size="12.5" fill="var(--ink-soft)">divide top</text><text x="105" y="121" text-anchor="end" font-size="12.5" fill="var(--ink-soft)">by bottom</text><text x="415" y="105" font-size="12.5" fill="var(--ink-soft)">x 100</text><text x="415" y="121" font-size="12.5" fill="var(--ink-soft)">add % sign</text><text x="260" y="167" text-anchor="middle" font-size="12.5" fill="var(--ink-soft)">x 100</text><text x="260" y="203" text-anchor="middle" font-size="12.5" fill="var(--ink-soft)">/ 100</text></svg>',
        diagramCaption: "Percent to decimal, divide by 100. Decimal to percent, multiply by 100.",
        steps: [
          { do: "45%  ->  45/100  ->  9/20", why: "Percent already means out of 100, so the fraction is free. Then simplify by 5." },
          { do: "45%  ->  45 ÷ 100  =  0.45", why: "To a decimal, just divide by 100." },
          { do: "3/5  ->  3 ÷ 5 = 0.6  ->  60%", why: "Fraction to decimal to percent. Divide, then times 100." },
          { do: "0.08  ->  0.08 x 100  =  8%", answer: true }
        ]
      },
      {
        heading: "Working with percentages",
        unit: "Fractions & Decimals",
        body: "**One amount as a percentage of another** – write it as a fraction, then times by 100. Make sure both are in the **same units** first.\n\n**Percentage of an amount** – turn the percent into a decimal, then multiply.",
        steps: [
          { do: "15 out of 60 as a percentage", why: "Write it as a fraction first." },
          { do: "= 15/60 x 100", why: "Fraction, then multiply by 100 to turn it into a percentage." },
          { do: "= 0.25 x 100 = 25%", answer: true },
          { do: "20% of 350", why: "Different job - now you want part of an amount." },
          { do: "= 0.2 x 350 = 70", why: "Turn the percent into a decimal, then multiply.", answer: true },
          { do: "40 cm out of 2 m", why: "Units warning. These do not match yet." },
          { do: "2 m = 200 cm, so 40/200 x 100 = 20%", why: "Convert first. Doing 40/2 would give 2000%, which is obviously nonsense.", answer: true }
        ]
      },
      {
        heading: "The language of algebra",
        unit: "Algebra",
        body: "A **variable** (or pronumeral) is a letter standing in for a number.\n\nA **term** is a bit of an expression separated by + or −. In 5x + 3y − 2, the terms are 5x, 3y and −2.\n\nThe **coefficient** is the number in front of the letter. In 5x it's 5. If you see just x, the coefficient is 1. In −x it's −1.\n\nA **constant** is a plain number with no letter.",
        steps: [
          { do: "\"7 more than triple a number n\"  ->  3n + 7", why: "Triple means times 3. More than means add." },
          { do: "\"a number x reduced by 4, then halved\"  ->  (x - 4) ÷ 2", why: "The brackets matter - the subtraction happens first." },
          { do: "In 6a - b + 9 :", why: "Now pick out the parts." },
          { do: "coefficient of a is 6", why: "The number sitting in front of the letter." },
          { do: "coefficient of b is -1", why: "There is an invisible 1, and the minus belongs to it." },
          { do: "the constant is 9", why: "A term with no letter at all.", answer: true }
        ]
      },
      {
        heading: "Like terms",
        unit: "Algebra",
        body: "**Like terms** have exactly the same letters, to the same powers. Only like terms can be combined.\n\n3x and 5x are like terms. 3x and 3y are not. 3x and 3x² are not either – the powers differ.\n\nThink of them as different objects: 3 apples plus 2 apples is 5 apples, but 3 apples plus 2 oranges just stays as it is.\n\nWhen collecting, **the sign in front belongs to the term**.",
        diagram: '<svg viewBox="0 0 520 150" xmlns="http://www.w3.org/2000/svg" role="img"><title>Like terms can be added, unlike terms cannot</title><g><rect x="20" y="20" width="220" height="110" rx="10" fill="var(--accent-soft)" stroke="var(--accent-line)" stroke-width="1.5"/><text x="130" y="46" text-anchor="middle" font-size="13" font-weight="650" fill="var(--accent)">LIKE TERMS &#8211; combine</text><text x="130" y="82" text-anchor="middle" font-size="19" font-weight="600" fill="var(--ink)">3x + 5x = 8x</text><text x="130" y="110" text-anchor="middle" font-size="13" fill="var(--ink-soft)">same letter, same power</text></g><g><rect x="280" y="20" width="220" height="110" rx="10" fill="var(--warn-soft)" stroke="#e4c9ac" stroke-width="1.5"/><text x="390" y="46" text-anchor="middle" font-size="13" font-weight="650" fill="var(--warn)">UNLIKE &#8211; leave alone</text><text x="390" y="82" text-anchor="middle" font-size="19" font-weight="600" fill="var(--ink)">3x + 5y</text><text x="390" y="110" text-anchor="middle" font-size="13" fill="var(--ink-soft)">different letters</text></g></svg>',
        diagramCaption: "If the letter part isn't identical, you can't combine them.",
        steps: [
          { do: "5x + 3y - 2x + y", why: "Sort the terms by which letter they carry." },
          { do: "x terms:  5x - 2x = 3x", why: "The minus in front of the 2x belongs to it." },
          { do: "y terms:  3y + y = 4y", why: "That lonely y counts as 1y." },
          { do: "= 3x + 4y", why: "You cannot go further - x and y are different things.", answer: true }
        ]
      },
      {
        heading: "Multiplying and dividing terms",
        unit: "Algebra",
        body: "**Multiplying** – multiply the numbers, then write the letters together. You don't need like terms for this.\n\n**Dividing** – write it as a fraction and cancel what appears on both top and bottom.\n\nWrite letters in alphabetical order in your answer. It's not wrong otherwise, but it makes marking easier and helps you spot like terms later.",
        steps: [
          { do: "3a x 4b", why: "Numbers with numbers, letters with letters." },
          { do: "= 3 x 4 x a x b = 12ab", answer: true },
          { do: "2x x 5x", why: "Same idea, but both have an x." },
          { do: "= 10 x x x = 10x²", why: "Two x's multiplied gives x squared.", answer: true },
          { do: "12xy ÷ 3x", why: "Write division as a fraction so you can see what cancels." },
          { do: "= 12xy / 3x = 4y", why: "12 ÷ 3 = 4, and the x on top cancels the x underneath.", answer: true }
        ]
      }
    ],

    terms: [
      { term: "Factor", unit: "Number", definition: "A number that divides evenly into another. Factors of 12 are 1, 2, 3, 4, 6 and 12." },
      { term: "Multiple", unit: "Number", definition: "The result of multiplying by a whole number. Multiples of 5 are 5, 10, 15, 20..." },
      { term: "HCF", unit: "Number", definition: "Highest Common Factor. The biggest number that divides into both numbers." },
      { term: "LCM", unit: "Number", definition: "Lowest Common Multiple. The smallest number that both numbers go into." },
      { term: "Prime number", unit: "Number", definition: "A number with exactly two factors: 1 and itself. 2, 3, 5, 7, 11..." },
      { term: "Prime factorisation", unit: "Number", definition: "Writing a number as primes multiplied together, like 60 = 2² × 3 × 5." },
      { term: "Square number", unit: "Number", definition: "A number times itself. 4² = 16." },
      { term: "Cube number", unit: "Number", definition: "A number times itself three times. 3³ = 27." },
      { term: "Square root", unit: "Number", definition: "Undoes squaring. √16 = 4." },
      { term: "Integer", unit: "Number", definition: "A whole number, positive or negative, including zero. No fractions or decimals." },
      { term: "Numerator", unit: "Fractions & Decimals", definition: "The top number of a fraction – how many pieces you have." },
      { term: "Denominator", unit: "Fractions & Decimals", definition: "The bottom number of a fraction – how many pieces the whole is cut into." },
      { term: "Equivalent fractions", unit: "Fractions & Decimals", definition: "Fractions worth the same amount, like 1/2 and 3/6." },
      { term: "Simplest form", unit: "Fractions & Decimals", definition: "A fraction where the top and bottom share no common factor except 1." },
      { term: "Improper fraction", unit: "Fractions & Decimals", definition: "A fraction where the top is bigger than the bottom, like 7/4." },
      { term: "Mixed numeral", unit: "Fractions & Decimals", definition: "A whole number with a fraction attached, like 1 3/4." },
      { term: "Reciprocal", unit: "Fractions & Decimals", definition: "A fraction flipped upside down. The reciprocal of 2/5 is 5/2. Used when dividing." },
      { term: "Terminating decimal", unit: "Fractions & Decimals", definition: "A decimal that stops, like 0.125." },
      { term: "Recurring decimal", unit: "Fractions & Decimals", definition: "A decimal that repeats forever, like 0.333..." },
      { term: "Percentage", unit: "Fractions & Decimals", definition: "A number out of 100. 45% means 45 out of every 100." },
      { term: "Variable", unit: "Algebra", definition: "A letter used in place of a number. Also called a pronumeral." },
      { term: "Term", unit: "Algebra", definition: "A part of an expression separated by + or −. In 5x + 3, the terms are 5x and 3." },
      { term: "Coefficient", unit: "Algebra", definition: "The number in front of a variable. In 7y the coefficient is 7." },
      { term: "Constant", unit: "Algebra", definition: "A term that is just a number, with no variable." },
      { term: "Like terms", unit: "Algebra", definition: "Terms with exactly the same variables and powers, so they can be combined." },
      { term: "Substitution", unit: "Algebra", definition: "Replacing a variable with a number and working out the value." },
      { term: "Expression", unit: "Algebra", definition: "A collection of terms with no equals sign, like 3x + 2." }
    ],

    cards: [
      { front: "What does HCF stand for, and is it bigger or smaller than your numbers?", back: "Highest Common Factor. It's smaller than (or equal to) your numbers – it has to divide into them." },
      { front: "What does LCM stand for, and is it bigger or smaller?", back: "Lowest Common Multiple. It's bigger than (or equal to) your numbers – they both have to go into it." },
      { front: "What is a prime number?", back: "A number with exactly two factors: 1 and itself. 2, 3, 5, 7, 11, 13... Note 1 is NOT prime." },
      { front: "Write 60 as a product of prime factors.", back: "60 = 2 × 2 × 3 × 5, or 2² × 3 × 5." },
      { front: "How do you test if a number is divisible by 3?", back: "Add up its digits. If the total is a multiple of 3, so is the number. 471: 4+7+1 = 12, so yes." },
      { front: "How do you test if a number is divisible by 4?", back: "Look at the last TWO digits only. If they divide by 4, so does the number. 1316: 16 divides by 4, so yes." },
      { front: "How do you test for divisibility by 6?", back: "It must pass both the 2 test and the 3 test. Even AND digits add to a multiple of 3." },
      { front: "What is 4³?", back: "64. That's 4 × 4 × 4." },
      { front: "What is √81?", back: "9, because 9 × 9 = 81." },
      { front: "Which is bigger, −5 or −2?", back: "−2 is bigger. On a number line −2 is further right. Further left always means smaller." },
      { front: "What is 5 − (−3)?", back: "8. Minus a minus becomes plus, so it turns into 5 + 3." },
      { front: "What is −4 + (−6)?", back: "−10. Plus a minus becomes minus, so it's −4 − 6." },
      { front: "What is the sign rule for multiplying?", back: "Same signs give a positive. Different signs give a negative." },
      { front: "What is −20 ÷ −4?", back: "5. Two negatives, so the answer is positive." },
      { front: "What order do you do operations in?", back: "Brackets, Indices, then Division and Multiplication left to right, then Addition and Subtraction left to right." },
      { front: "What is 3 + 4 × 2²?", back: "19. Indices first (2² = 4), then multiply (4 × 4 = 16), then add (3 + 16)." },
      { front: "How do you make an equivalent fraction?", back: "Multiply the top and bottom by the same number. 3/4 = 9/12 (both × 3)." },
      { front: "Simplify 18/24.", back: "3/4. Divide both by their HCF, which is 6." },
      { front: "What do you need before adding fractions?", back: "The same denominator. Find the LCM of the bottoms, convert both, then add the tops only." },
      { front: "What is 2/3 + 1/4?", back: "11/12. Convert to twelfths: 8/12 + 3/12." },
      { front: "How do you divide by a fraction?", back: "Flip the second fraction and multiply instead. Keep, change, flip." },
      { front: "What is 3/4 ÷ 2/5?", back: "15/8, or 1 7/8. Flip to get 3/4 × 5/2." },
      { front: "How do you turn a fraction into a decimal?", back: "Divide the top by the bottom. 3/8 = 3 ÷ 8 = 0.375." },
      { front: "What is 5.6 ÷ 1000?", back: "0.0056. Move the decimal point three places left." },
      { front: "What is 0.6 × 0.4?", back: "0.24. Multiply 6 × 4 = 24, then put in 2 decimal places." },
      { front: "What is the difference between a terminating and a recurring decimal?", back: "Terminating stops (0.125). Recurring repeats forever (0.333...)." },
      { front: "Round 0.6666 to 2 decimal places.", back: "0.67. The third digit is 6, which is 5 or more, so round up." },
      { front: "How do you turn a percentage into a decimal?", back: "Divide by 100. 45% = 0.45." },
      { front: "How do you turn a fraction into a percentage?", back: "Divide top by bottom, then multiply by 100. 3/5 = 0.6 = 60%." },
      { front: "What is 20% of 350?", back: "70. Turn 20% into 0.2, then multiply by 350." },
      { front: "Express 15 out of 60 as a percentage.", back: "25%. 15/60 = 0.25, times 100." },
      { front: "What is the coefficient in −x?", back: "−1. An invisible 1 is always there." },
      { front: "What are like terms?", back: "Terms with exactly the same letters to the same powers. 3x and 5x are like. 3x and 3y are not. 3x and 3x² are not." },
      { front: "Simplify 5x + 3y − 2x + y.", back: "3x + 4y. Collect the x terms and the y terms separately." },
      { front: "Simplify 3a × 4b.", back: "12ab. Multiply the numbers, then write the letters together." },
      { front: "Simplify 12xy ÷ 3x.", back: "4y. 12 ÷ 3 = 4, and the x cancels top and bottom." },
      { front: "Evaluate 3a + b² when a = −2 and b = 3.", back: "3. That's 3(−2) + 9 = −6 + 9." }
    ],

    quiz: [
      {
        q: "Work out 4728 ÷ 6 using long division.",
        a: "788.\n\n6 doesn't go into 4, so start with 47. 6 into 47 goes 7 times (42), remainder 5. Bring down the 2 to make 52. 6 into 52 goes 8 times (48), remainder 4. Bring down the 8 to make 48. 6 into 48 goes exactly 8 times.\n\nCheck: 788 × 6 = 4728.",
        hint: "6 won't go into the first digit, so look at the first two digits together."
      },
      {
        q: "Find the HCF and LCM of 12 and 18.",
        a: "HCF = 6, LCM = 36.\n\nBy prime factors: 12 = 2² × 3 and 18 = 2 × 3².\n\nFor the HCF take the lowest power of each shared prime: 2 × 3 = 6.\nFor the LCM take the highest power of every prime: 2² × 3² = 4 × 9 = 36.",
        hint: "Break both numbers into primes first, then compare."
      },
      {
        q: "Write 84 as a product of prime factors.",
        a: "84 = 2² × 3 × 7.\n\nSplit 84 into 4 × 21. Then 4 becomes 2 × 2, and 21 becomes 3 × 7. All four are prime, so stop.\n\nCheck: 2 × 2 × 3 × 7 = 84.",
        hint: "Start by splitting it into any two factors – it doesn't matter which."
      },
      {
        q: "Is 738 divisible by 9? Show how you know without dividing.",
        a: "Yes.\n\nAdd the digits: 7 + 3 + 8 = 18. Since 18 is a multiple of 9, the whole number is divisible by 9.\n\n(Check if you like: 738 ÷ 9 = 82.)",
        hint: "There's a digit-adding test for 9."
      },
      {
        q: "Calculate −7 − (−3) + (−4).",
        a: "−8.\n\nFix the double signs first:\n− (−3) becomes + 3\n+ (−4) becomes − 4\n\nSo it's −7 + 3 − 4 = −4 − 4 = −8.",
        hint: "Deal with every pair of signs before doing any arithmetic."
      },
      {
        q: "Calculate −6 × 3 ÷ (−2).",
        a: "9.\n\nWork left to right. −6 × 3 = −18. Then −18 ÷ −2 = 9.\n\nOr count the negatives: there are two, which is even, so the answer is positive. 6 × 3 ÷ 2 = 9.",
        hint: "× and ÷ are the same level, so go left to right."
      },
      {
        q: "Evaluate 2x² − 3y when x = −3 and y = 4.",
        a: "6.\n\nSubstitute with brackets: 2(−3)² − 3(4)\n\n(−3)² = 9, so 2 × 9 = 18.\n3 × 4 = 12.\n18 − 12 = 6.\n\nThe trap is squaring before multiplying by 2, and remembering that a negative squared is positive.",
        hint: "Indices come before multiplication. And what does a negative squared give you?"
      },
      {
        q: "Work out 3 1/2 − 1 2/3.",
        a: "1 5/6.\n\nMake them improper: 3 1/2 = 7/2 and 1 2/3 = 5/3.\n\nCommon denominator 6: 7/2 = 21/6 and 5/3 = 10/6.\n\n21/6 − 10/6 = 11/6 = 1 5/6.",
        hint: "Convert to improper fractions before finding a common denominator."
      },
      {
        q: "Work out 2 1/4 × 1 1/3.",
        a: "3.\n\nMake them improper: 9/4 × 4/3.\n\nMultiply tops and bottoms: 36/12 = 3.\n\nYou could also cancel first: the 4s cancel, leaving 9/1 × 1/3 = 3.",
        hint: "Never multiply mixed numerals directly – convert first."
      },
      {
        q: "Calculate −3/4 ÷ 1/2.",
        a: "−3/2, or −1 1/2.\n\nFlip the second fraction and multiply: −3/4 × 2/1 = −6/4.\n\nSimplify: −3/2 = −1 1/2.\n\nOne negative means the answer stays negative.",
        hint: "Keep, change, flip – then sort out the sign."
      },
      {
        q: "Put these in order from smallest to largest: 0.7, 0.68, 0.702, 0.6",
        a: "0.6, 0.68, 0.7, 0.702\n\nPad them all to three decimal places so they're easy to compare:\n0.700, 0.680, 0.702, 0.600\n\nNow compare digit by digit from the left. Length doesn't decide size – 0.68 has more digits than 0.7 but is smaller.",
        hint: "Add zeros so they all have the same number of decimal places."
      },
      {
        q: "Convert 7/8 to a decimal and say whether it terminates or recurs.",
        a: "0.875, and it terminates.\n\n7 ÷ 8 = 0.875, which stops after three places.\n\nA fraction terminates when its denominator (in simplest form) only has 2s and 5s as prime factors. 8 = 2³, so it terminates.",
        hint: "Just divide the top by the bottom and see what happens."
      },
      {
        q: "A jacket costs $80. It is reduced by 25%. What is the new price?",
        a: "$60.\n\nMethod 1: 25% of 80 = 0.25 × 80 = $20 off, so 80 − 20 = $60.\n\nMethod 2 (faster): if 25% comes off, you pay 75%. 0.75 × 80 = $60.",
        hint: "You could find the discount and subtract – or work out what percentage you actually pay."
      },
      {
        q: "Express 40 cm as a percentage of 2 metres.",
        a: "20%.\n\nThe units must match first. 2 m = 200 cm.\n\nThen 40/200 = 0.2, and 0.2 × 100 = 20%.\n\nThis is the classic trap – doing 40/2 gives 2000%, which should look obviously wrong.",
        hint: "Check the units before you do anything else."
      },
      {
        q: "Simplify 7a + 4b − 3a − 6b + 2.",
        a: "4a − 2b + 2.\n\na terms: 7a − 3a = 4a\nb terms: 4b − 6b = −2b\nconstant: 2\n\nThe sign in front of a term belongs to it – that's why 4b − 6b gives −2b.",
        hint: "Collect each letter separately, and watch the signs."
      },
      {
        q: "Simplify 5x × 3xy.",
        a: "15x²y.\n\nMultiply the numbers: 5 × 3 = 15.\nThen the letters: x × xy = x²y (there are two x's).\n\nSo the answer is 15x²y.",
        hint: "Count how many of each letter you end up with."
      },
      {
        q: "Are 3(x + 2) and 3x + 6 equivalent? Explain how you'd check.",
        a: "Yes, they're equivalent.\n\nExpanding the brackets gives 3 × x + 3 × 2 = 3x + 6.\n\nYou can also test with a number. Let x = 4:\n3(4 + 2) = 3 × 6 = 18\n3(4) + 6 = 12 + 6 = 18\n\nSame answer. Testing one value doesn't prove they're equivalent, but a different answer would prove they're not.",
        hint: "Expand one of them – or try substituting a number into both."
      }
    ]
  }

,

{
  id: "maths-y8-rates-stats-equations-pythagoras",
  subject: "Maths", year: "Year 8", title: "Rates, Stats, Equations & Pythagoras",
  blurb: "Rates and speed, handling data, solving equations, and right-angled triangles.",
  topics: ["Rates", "Speed", "Statistics", "Equations", "Pythagoras"],
  created: "2026-08-09", custom: true,
  theme: "purple", focus: "practice", emoji: "📊",
  studyTip: "Four separate topics, so do not try to cram them together. Read one topic, then do the Practice questions for it before moving on. Pythagoras and equations are the easiest marks to lock in.",
  examInfo: "Year 8 Maths · chapters 6, 8, 7 and 4 · rates, data, equations and Pythagoras",
  homeTitle: "Four topics, every dot point from your list",
  homeIntro: "Rates and speed, statistics, solving equations, and Pythagoras. Built straight from your checklist, so there is nothing here you do not need.",

  unitInfo: {
    "Rates & Speed": { blurb: "Comparing two different units, and the speed formula." },
    "Statistics": { blurb: "Collecting data, graphing it, and describing the middle and the spread." },
    "Equations": { blurb: "Undoing operations to find the value of the letter." },
    "Pythagoras": { blurb: "Finding missing sides in right-angled triangles." }
  },

  overview: [
    { heading: "Rates & Speed", points: [
      "A **rate** compares two quantities with **different units**, like km/h or $/kg.",
      "**Simplify a rate** by dividing until the second quantity is 1.",
      "**Average rate** = total amount ÷ total time. Not the average of the rates.",
      "**Speed = distance ÷ time.** Rearranged: distance = speed × time, time = distance ÷ speed.",
      "**km/h to m/s: divide by 3.6.** m/s to km/h: multiply by 3.6.",
      "**Unitary method** - find the value of ONE unit first, then multiply up."
    ]},
    { heading: "Statistics", points: [
      "A **tally** counts in groups of five. The **frequency** is that count as a number.",
      "**Mean** = add all the scores, divide by how many. The everyday average.",
      "**Median** = the middle score once they are in order. Even count, average the middle two.",
      "**Mode** = the score that appears most often. There can be none, one, or several.",
      "**Range** = highest − lowest. It measures **spread**, not centre.",
      "**Population** is everyone. A **sample** is part of it. A **census** surveys everyone.",
      "**Symmetric** data is balanced. **Skewed** leans one way. **Bi-modal** has two peaks."
    ]},
    { heading: "Equations", points: [
      "Whatever you do to one side, **do to the other**. That keeps it balanced.",
      "**Undo in reverse order** - remove the + or − first, then the × or ÷.",
      "**Fractions**: multiply both sides by the denominator to clear it.",
      "**Pronumerals on both sides**: move the smaller one across so you avoid negatives.",
      "**Brackets**: expand first, then solve as normal.",
      "**Always check** by substituting your answer back in."
    ]},
    { heading: "Pythagoras", points: [
      "Only works in **right-angled triangles**.",
      "The **hypotenuse** is the longest side, always **opposite the right angle**.",
      "**a² + b² = c²**, where c is the hypotenuse.",
      "**Finding the hypotenuse**: square both short sides, add, then square root.",
      "**Finding a shorter side**: square the hypotenuse, **subtract**, then square root.",
      "A **Pythagorean triple** is three whole numbers that fit, like 3, 4, 5.",
      "To test for a right angle, check whether a² + b² actually equals c²."
    ]}
  ],

  quick: [
    { q: "What makes something a rate rather than a ratio?", options: ["The two quantities have different units", "It is always bigger than 1", "It uses fractions", "It compares three things"], answer: 0, why: "km/h compares kilometres to hours. A ratio compares the same kind of thing." },
    { q: "A car travels 240 km in 3 hours. What is its speed?", options: ["80 km/h", "720 km/h", "0.0125 km/h", "120 km/h"], answer: 0, why: "Speed = distance ÷ time = 240 ÷ 3." },
    { q: "What is the speed formula?", options: ["Speed = distance ÷ time", "Speed = time ÷ distance", "Speed = distance × time", "Speed = distance + time"], answer: 0, why: "And rearranged: distance = speed × time, time = distance ÷ speed." },
    { q: "How do you convert 72 km/h into m/s?", options: ["Divide by 3.6", "Multiply by 3.6", "Divide by 60", "Multiply by 1000"], answer: 0, why: "72 ÷ 3.6 = 20 m/s. Going the other way, multiply by 3.6." },
    { q: "5 pens cost $12.50. What does 1 pen cost?", options: ["$2.50", "$2.00", "$62.50", "$5.00"], answer: 0, why: "That is the unitary method - divide to find one unit first." },
    { q: "What does the mean measure?", options: ["The centre", "The spread", "The highest score", "How often a score appears"], answer: 0, why: "Mean, median and mode are all measures of centre. Range measures spread." },
    { q: "Find the median of 3, 4, 5, 7, 7, 9", options: ["6", "7", "5", "5.83"], answer: 0, why: "Six scores, so average the middle two: (5 + 7) ÷ 2 = 6." },
    { q: "Find the mode of 3, 4, 5, 7, 7, 9", options: ["7", "6", "5", "3"], answer: 0, why: "7 appears twice, everything else once." },
    { q: "How do you calculate the range?", options: ["Highest − lowest", "Add them all up", "The middle score", "The most common score"], answer: 0, why: "It tells you how spread out the data is, not where the centre is." },
    { q: "What is a census?", options: ["A survey of the whole population", "A survey of a small sample", "A type of graph", "The middle score"], answer: 0, why: "A sample is only part of the population. A census covers everyone." },
    { q: "Data with two clear peaks is called...", options: ["Bi-modal", "Symmetric", "Skewed", "Random"], answer: 0, why: "Two modes, so two peaks in the graph." },
    { q: "Solve 3x + 5 = 20", options: ["x = 5", "x = 15", "x = 8.3", "x = 25"], answer: 0, why: "Take 5 off both sides to get 3x = 15, then divide by 3." },
    { q: "In 3x + 5 = 20, what do you undo first?", options: ["The + 5", "The × 3", "Either works equally well", "The = sign"], answer: 0, why: "Undo in reverse order. Addition and subtraction come off first." },
    { q: "Solve x/4 = 6", options: ["x = 24", "x = 1.5", "x = 10", "x = 2"], answer: 0, why: "Multiply both sides by 4 to clear the fraction." },
    { q: "First step in solving 5x + 3 = 2x + 18?", options: ["Subtract 2x from both sides", "Subtract 5x from both sides", "Divide everything by 5", "Add 18 to both sides"], answer: 0, why: "Move the smaller x term so you keep the x positive. 5x − 2x = 3x." },
    { q: "First step in solving 3(x − 2) = 12?", options: ["Expand the brackets", "Divide both sides by x", "Add 2 to both sides", "Square both sides"], answer: 0, why: "3(x − 2) becomes 3x − 6. You could also divide both sides by 3 first." },
    { q: "Which side is the hypotenuse?", options: ["The one opposite the right angle", "The bottom one", "The shortest one", "The one on the left"], answer: 0, why: "It is always the longest side, and always opposite the right angle." },
    { q: "What is Pythagoras' Theorem?", options: ["a² + b² = c²", "a + b = c", "a² − b² = c²", "a × b = c²"], answer: 0, why: "c is the hypotenuse. The two shorter sides get squared and added." },
    { q: "Short sides 6 and 8. What is the hypotenuse?", options: ["10", "14", "48", "100"], answer: 0, why: "36 + 64 = 100, and √100 = 10." },
    { q: "Hypotenuse 13, one short side 5. Find the other side.", options: ["12", "18", "8", "144"], answer: 0, why: "For a shorter side you SUBTRACT: 169 − 25 = 144, and √144 = 12." },
    { q: "Is 5, 12, 13 a Pythagorean triple?", options: ["Yes", "No", "Only if it is right-angled", "Not enough information"], answer: 0, why: "25 + 144 = 169, which is 13². So yes." },
    { q: "When finding a shorter side, you...", options: ["Subtract the squares", "Add the squares", "Multiply the squares", "Divide the squares"], answer: 0, why: "Adding is only for the hypotenuse. This is the most common mistake in the topic." }
  ],

  practice: [
    { topic: "Rates", q: "A car travels 315 km in 3.5 hours. Speed in km/h?", answer: "90", accept: ["90km/h", "90 km/h"], why: "315 ÷ 3.5 = 90." },
    { topic: "Rates", q: "Simplify: 450 words in 9 minutes (words per minute, number only)", answer: "50", why: "450 ÷ 9 = 50 words per minute." },
    { topic: "Rates", q: "A tap fills 84 litres in 12 minutes. Litres per minute?", answer: "7", why: "84 ÷ 12 = 7." },
    { topic: "Speed", q: "Convert 90 km/h to m/s", answer: "25", accept: ["25m/s", "25 m/s"], why: "Divide by 3.6. 90 ÷ 3.6 = 25." },
    { topic: "Speed", q: "Convert 15 m/s to km/h", answer: "54", accept: ["54km/h", "54 km/h"], why: "Multiply by 3.6. 15 × 3.6 = 54." },
    { topic: "Speed", q: "A cyclist rides at 18 km/h for 2.5 hours. Distance in km?", answer: "45", why: "distance = speed × time = 18 × 2.5." },
    { topic: "Speed", q: "How long to travel 150 km at 60 km/h? (hours)", answer: "2.5", accept: ["2 1/2", "2.50"], why: "time = distance ÷ speed = 150 ÷ 60." },
    { topic: "Unitary method", q: "7 identical books cost $91. What do 4 cost? (number only)", answer: "52", accept: ["$52", "52.00"], why: "One book = 91 ÷ 7 = $13. Then 13 × 4 = 52." },
    { topic: "Unitary method", q: "3 kg of apples costs $8.40. Cost of 5 kg? (number only)", answer: "14", accept: ["$14", "14.00"], why: "One kg = 8.40 ÷ 3 = $2.80. Then 2.80 × 5 = 14." },
    { topic: "Statistics", q: "Find the mean of 6, 9, 4, 9, 12", answer: "8", why: "Total is 40, and there are 5 scores. 40 ÷ 5 = 8." },
    { topic: "Statistics", q: "Find the median of 6, 9, 4, 9, 12", answer: "9", why: "In order: 4, 6, 9, 9, 12. The middle one is 9." },
    { topic: "Statistics", q: "Find the mode of 6, 9, 4, 9, 12", answer: "9", why: "9 appears twice, everything else once." },
    { topic: "Statistics", q: "Find the range of 6, 9, 4, 9, 12", answer: "8", why: "Highest 12 minus lowest 4." },
    { topic: "Statistics", q: "Find the median of 2, 5, 8, 11", answer: "6.5", accept: ["6 1/2", "13/2"], why: "Even number of scores, so average the middle two: (5 + 8) ÷ 2." },
    { topic: "Equations", q: "Solve 4x + 7 = 31  (give x)", answer: "6", accept: ["x=6"], why: "Take 7 off both sides: 4x = 24. Then divide by 4." },
    { topic: "Equations", q: "Solve 5x − 9 = 26  (give x)", answer: "7", accept: ["x=7"], why: "Add 9 to both sides: 5x = 35. Then divide by 5." },
    { topic: "Equations", q: "Solve x/3 + 4 = 10  (give x)", answer: "18", accept: ["x=18"], why: "Take 4 off: x/3 = 6. Then multiply both sides by 3." },
    { topic: "Equations", q: "Solve (2x + 1)/5 = 3  (give x)", answer: "7", accept: ["x=7"], why: "Multiply both sides by 5: 2x + 1 = 15. Then 2x = 14." },
    { topic: "Equations", q: "Solve 7x + 2 = 4x + 17  (give x)", answer: "5", accept: ["x=5"], why: "Take 4x off both sides: 3x + 2 = 17. Then 3x = 15." },
    { topic: "Equations", q: "Solve 3(x + 4) = 27  (give x)", answer: "5", accept: ["x=5"], why: "Expand: 3x + 12 = 27. Then 3x = 15." },
    { topic: "Equations", q: "Solve 2(3x − 1) = 22  (give x)", answer: "4", accept: ["x=4"], why: "Expand: 6x − 2 = 22. Then 6x = 24." },
    { topic: "Pythagoras", q: "Short sides 9 and 12. Find the hypotenuse.", answer: "15", why: "81 + 144 = 225, and √225 = 15." },
    { topic: "Pythagoras", q: "Short sides 8 and 15. Find the hypotenuse.", answer: "17", why: "64 + 225 = 289, and √289 = 17." },
    { topic: "Pythagoras", q: "Hypotenuse 25, one short side 7. Find the other short side.", answer: "24", why: "625 − 49 = 576, and √576 = 24. Subtract, because you are after a shorter side." },
    { topic: "Pythagoras", q: "Hypotenuse 10, one short side 6. Find the other short side.", answer: "8", why: "100 − 36 = 64, and √64 = 8." },
    { topic: "Pythagoras", q: "A ladder reaches 12 m up a wall, with its base 5 m out. How long is the ladder?", answer: "13", accept: ["13m", "13 m"], why: "The ladder is the hypotenuse. 144 + 25 = 169, and √169 = 13." }
  ],

  exam: { minutes: 50 },

  notes: [
    { heading: "Introducing rates", unit: "Rates & Speed",
      body: "A **rate** compares two quantities that have **different units**. Speed (km/h), pay ($/hour) and price ($/kg) are all rates.\n\nThat is what separates a rate from a ratio - a ratio compares two things measured the same way.\n\nTo **simplify** a rate, divide until the second quantity is 1. That gives you the amount 'per one'.\n\n**Average rate** = total amount ÷ total time. Be careful: it is not the average of the individual rates.",
      steps: [
        { do: "A car uses 45 L of fuel to travel 540 km", why: "Two different units, so this is a rate." },
        { do: "540 km ÷ 45 L = 12", why: "Divide to find how far it goes on ONE litre." },
        { do: "12 km per litre", answer: true },
        { do: "A runner covers 3 km in 12 min, then 5 km in 28 min", why: "Average rate question. Do not average 3/12 and 5/28." },
        { do: "Total: 8 km in 40 min", why: "Add the distances, add the times." },
        { do: "8 ÷ 40 = 0.2 km per minute", answer: true }
      ] },
    { heading: "Speed", unit: "Rates & Speed",
      body: "**Speed = distance ÷ time.**\n\nRearranged two ways:\n- **distance = speed × time**\n- **time = distance ÷ speed**\n\nThe triangle below is the quickest way to remember all three. Cover the one you want, and what is left tells you what to do.\n\nCheck your units match. If speed is in km/h, time must be in hours.",
      diagram: '<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img"><title>Formula triangle with distance on top, speed and time underneath</title><path d="M210 25 L360 185 L60 185 Z" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5"/><line x1="110" y1="120" x2="310" y2="120" stroke="var(--brand)" stroke-width="2.5"/><line x1="210" y1="120" x2="210" y2="185" stroke="var(--brand)" stroke-width="2.5"/><text x="210" y="100" text-anchor="middle" font-size="26" font-weight="700" fill="var(--ink)">D</text><text x="155" y="165" text-anchor="middle" font-size="26" font-weight="700" fill="var(--ink)">S</text><text x="265" y="165" text-anchor="middle" font-size="26" font-weight="700" fill="var(--ink)">T</text><text x="210" y="210" text-anchor="middle" font-size="13" fill="var(--ink-soft)">Cover what you want. D = S &#215; T,  S = D &#247; T,  T = D &#247; S</text></svg>',
      diagramCaption: "Cover the letter you are after and the triangle shows you the sum.",
      steps: [
        { do: "A train travels 480 km in 6 hours", why: "You want speed, so cover the D." },
        { do: "S = D ÷ T = 480 ÷ 6", why: "What is left is D over T." },
        { do: "80 km/h", answer: true },
        { do: "How far in 2.5 h at 80 km/h?", why: "Now you want distance, so cover the D again - the other two sit side by side." },
        { do: "D = S × T = 80 × 2.5 = 200 km", answer: true }
      ] },
    { heading: "Converting units of speed", unit: "Rates & Speed",
      body: "The two you need are **km/h** and **m/s**.\n\n- **km/h → m/s: divide by 3.6**\n- **m/s → km/h: multiply by 3.6**\n\nThe 3.6 comes from 1000 metres in a kilometre and 3600 seconds in an hour: 3600 ÷ 1000 = 3.6.\n\nSanity check: m/s numbers are always **smaller** than the same speed in km/h.",
      steps: [
        { do: "Convert 72 km/h to m/s", why: "Going to the smaller unit, so divide." },
        { do: "72 ÷ 3.6 = 20 m/s", answer: true },
        { do: "Convert 25 m/s to km/h", why: "Going the other way, so multiply." },
        { do: "25 × 3.6 = 90 km/h", answer: true },
        { do: "Check it looks right", why: "90 is bigger than 25, which is what you expect." }
      ] },
    { heading: "The unitary method", unit: "Rates & Speed",
      body: "The trick is always the same: **find the value of ONE unit first**, then multiply up to whatever you need.\n\nIt works for prices, rates, ratios and recipes. Two steps, every time: divide to get one, then multiply.",
      steps: [
        { do: "5 tickets cost $85. What do 8 cost?", why: "Do not try to jump straight there." },
        { do: "1 ticket = 85 ÷ 5 = $17", why: "Divide down to one unit." },
        { do: "8 tickets = 17 × 8 = $136", answer: true },
        { do: "A machine makes 240 parts in 8 hours. How many in 5 hours?", why: "Same method." },
        { do: "1 hour = 240 ÷ 8 = 30 parts", why: "Down to one." },
        { do: "5 hours = 30 × 5 = 150 parts", answer: true }
      ] },
    { heading: "Frequency tables and tallies", unit: "Statistics",
      body: "A **tally** records data as you collect it, in groups of five - four strokes and one through them.\n\nThe **frequency** column turns those tallies into numbers.\n\nAlways check the frequencies add up to the number of pieces of data you started with. That single check catches most mistakes.",
      table: { head: ["Score", "Tally", "Frequency"], rows: [
        ["1", "|||", "3"],
        ["2", "|||| |", "6"],
        ["3", "|||| ||||", "9"],
        ["4", "||||", "5"],
        ["5", "||", "2"],
        ["Total", "", "25"]
      ] } },
    { heading: "Graphs of frequency tables", unit: "Statistics",
      body: "A frequency table turns straight into a **column graph**. The scores go along the bottom, the frequency goes up the side.\n\nColumns must be the **same width** with **gaps between them**, and the vertical scale must start at zero and go up evenly.\n\nReading one is easy: the tallest column is the **mode**.",
      diagram: '<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" role="img"><title>Column graph of the frequency table, tallest column at score 3</title><line x1="60" y1="20" x2="60" y2="190" stroke="var(--ink-soft)" stroke-width="2"/><line x1="60" y1="190" x2="430" y2="190" stroke="var(--ink-soft)" stroke-width="2"/><g fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"><rect x="85" y="139" width="50" height="51"/><rect x="155" y="88" width="50" height="102"/><rect x="225" y="37" width="50" height="153"/><rect x="295" y="105" width="50" height="85"/><rect x="365" y="156" width="50" height="34"/></g><g font-size="13" text-anchor="middle" fill="var(--ink)"><text x="110" y="208">1</text><text x="180" y="208">2</text><text x="250" y="208">3</text><text x="320" y="208">4</text><text x="390" y="208">5</text></g><g font-size="12" text-anchor="end" fill="var(--ink-soft)"><text x="52" y="194">0</text><text x="52" y="143">3</text><text x="52" y="92">6</text><text x="52" y="41">9</text></g><text x="245" y="228" text-anchor="middle" font-size="13" fill="var(--ink-soft)">Score</text><text x="22" y="105" text-anchor="middle" font-size="13" fill="var(--ink-soft)" transform="rotate(-90 22 105)">Frequency</text></svg>',
      diagramCaption: "Equal widths, gaps between, and the tallest column is the mode." },
    { heading: "Measures of centre", unit: "Statistics",
      body: "Three different ways of describing the middle:\n\n**Mean** - add every score, divide by how many there are. The everyday average.\n\n**Median** - put them **in order**, then take the middle one. With an even number of scores, average the middle two.\n\n**Mode** - the score that appears most often. There can be no mode, one, or several.\n\nThe order-them-first step for the median is the one people forget.",
      steps: [
        { do: "Data: 4, 7, 3, 7, 9, 5", why: "Six scores." },
        { do: "Mean: 4+7+3+7+9+5 = 35, then 35 ÷ 6 = 5.83", why: "Add everything, divide by 6." },
        { do: "In order: 3, 4, 5, 7, 7, 9", why: "You must sort before finding the median." },
        { do: "Median: (5 + 7) ÷ 2 = 6", why: "Even count, so average the middle two." },
        { do: "Mode: 7", why: "It is the only score appearing twice." },
        { do: "Mean 5.83, median 6, mode 7", answer: true }
      ] },
    { heading: "Measures of spread - range", unit: "Statistics",
      body: "**Range = highest score − lowest score.**\n\nIt does not tell you anything about the middle. It only tells you how **spread out** the data is.\n\nTwo sets can share a mean and have wildly different ranges - which is exactly why you report both.",
      steps: [
        { do: "Set A: 48, 50, 52", why: "Mean is 50." },
        { do: "Range of A: 52 − 48 = 4", why: "Tightly bunched." },
        { do: "Set B: 10, 50, 90", why: "Mean is also 50." },
        { do: "Range of B: 90 − 10 = 80", why: "Same centre, completely different spread." },
        { do: "Same mean, ranges of 4 and 80", answer: true }
      ] },
    { heading: "Surveying and sampling", unit: "Statistics",
      body: "**Population** - every single member of the group you are studying.\n**Sample** - a smaller part of the population that you actually ask.\n**Census** - a survey of the whole population.\n**Survey** - collecting data by asking questions.\n\nA good sample is **random** and **big enough**. A biased sample gives a wrong answer no matter how carefully you do the maths.\n\nShapes you need to name:\n- **Symmetric** - balanced either side of the middle\n- **Skewed** - bunched at one end with a tail off the other\n- **Bi-modal** - two separate peaks" },
    { heading: "Two-step equations", unit: "Equations",
      body: "An equation is a balance. **Whatever you do to one side, you must do to the other.**\n\nUndo operations in **reverse order**: get rid of the + or − first, then the × or ÷.\n\nAlways check by substituting your answer back into the original.",
      diagram: '<svg viewBox="0 0 460 190" xmlns="http://www.w3.org/2000/svg" role="img"><title>Balance scales showing both sides staying equal</title><line x1="60" y1="120" x2="400" y2="120" stroke="var(--ink-soft)" stroke-width="3"/><polygon points="230,120 210,165 250,165" fill="var(--ink-soft)"/><rect x="80" y="120" width="120" height="4" fill="var(--ink-soft)"/><rect x="260" y="120" width="120" height="4" fill="var(--ink-soft)"/><rect x="85" y="70" width="110" height="50" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/><rect x="265" y="70" width="110" height="50" rx="8" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2"/><text x="140" y="102" text-anchor="middle" font-size="21" font-weight="700" fill="var(--ink)">3x + 5</text><text x="320" y="102" text-anchor="middle" font-size="21" font-weight="700" fill="var(--ink)">20</text><text x="230" y="45" text-anchor="middle" font-size="14" fill="var(--ink-soft)">Take 5 off one side, take 5 off the other</text><text x="230" y="185" text-anchor="middle" font-size="13" fill="var(--ink-soft)">The scales only stay level if you treat both sides the same</text></svg>',
      diagramCaption: "Do the same thing to both sides and the balance holds.",
      steps: [
        { do: "3x + 5 = 20", why: "Two operations on the x: times 3, then add 5." },
        { do: "3x + 5 − 5 = 20 − 5", why: "Undo the +5 first, on both sides." },
        { do: "3x = 15", why: "Now just the multiplication is left." },
        { do: "3x ÷ 3 = 15 ÷ 3", why: "Divide both sides by 3." },
        { do: "x = 5", why: "Check: 3(5) + 5 = 15 + 5 = 20. Correct.", answer: true }
      ] },
    { heading: "Equations with fractions", unit: "Equations",
      body: "Get rid of the fraction as early as you can - **multiply both sides by the denominator**.\n\nIf the whole side is one fraction, multiply first. If only part of it is, deal with the loose numbers first.\n\nWhen the top is a bracket-like expression such as (2x + 1)/5, multiplying by 5 clears it in one move.",
      steps: [
        { do: "x/4 + 2 = 7", why: "Only part of the side is the fraction." },
        { do: "x/4 = 5", why: "Take 2 off both sides first." },
        { do: "x = 20", why: "Now multiply both sides by 4. Check: 20/4 + 2 = 7. Correct.", answer: true },
        { do: "(2x + 1)/3 = 5", why: "Here the whole side is one fraction." },
        { do: "2x + 1 = 15", why: "Multiply both sides by 3 straight away." },
        { do: "2x = 14, so x = 7", why: "Check: (14 + 1)/3 = 15/3 = 5. Correct.", answer: true }
      ] },
    { heading: "Pronumerals on both sides", unit: "Equations",
      body: "When the letter appears on both sides, **collect them onto one side first**.\n\nMove the **smaller** x term across. That keeps your x positive and saves you fighting negatives later.\n\nThen it is an ordinary two-step equation.",
      steps: [
        { do: "5x + 3 = 2x + 18", why: "x on both sides." },
        { do: "5x − 2x + 3 = 18", why: "2x is smaller, so subtract 2x from both sides." },
        { do: "3x + 3 = 18", why: "Now it looks like a normal two-step equation." },
        { do: "3x = 15", why: "Take 3 off both sides." },
        { do: "x = 5", why: "Check: 5(5) + 3 = 28 and 2(5) + 18 = 28. Both sides match.", answer: true }
      ] },
    { heading: "Equations with brackets", unit: "Equations",
      body: "**Expand the brackets first**, then solve as normal.\n\nRemember the number outside multiplies **everything** inside - a very common slip is multiplying only the first term.\n\nShortcut: if everything on that side is inside the bracket, you can just divide both sides by the outside number instead.",
      steps: [
        { do: "3(x − 2) = 12", why: "Expand, or divide both sides by 3. Both work." },
        { do: "3x − 6 = 12", why: "3 times x AND 3 times −2." },
        { do: "3x = 18", why: "Add 6 to both sides." },
        { do: "x = 6", why: "Check: 3(6 − 2) = 3 × 4 = 12. Correct.", answer: true },
        { do: "2(3x + 1) = 26", why: "Second example." },
        { do: "6x + 2 = 26, so 6x = 24", why: "Expand both terms, then take 2 off." },
        { do: "x = 4", answer: true }
      ] },
    { heading: "Introducing Pythagoras' Theorem", unit: "Pythagoras",
      body: "This only works in **right-angled triangles**.\n\nThe **hypotenuse** is the longest side, and it is always **opposite the right angle**. Find the right angle first, then look straight across - that side is the hypotenuse.\n\n**a² + b² = c²**, where a and b are the short sides and c is the hypotenuse.\n\nA **Pythagorean triple** is three whole numbers that fit exactly: 3-4-5, 5-12-13, 8-15-17, 7-24-25.",
      diagram: '<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" role="img"><title>Right-angled triangle with squares drawn on each side, 3 4 5</title><polygon points="150,170 150,80 270,170" fill="var(--brand-soft)" stroke="var(--brand)" stroke-width="2.5"/><rect x="150" y="155" width="15" height="15" fill="none" stroke="var(--brand)" stroke-width="2"/><rect x="60" y="80" width="90" height="90" fill="none" stroke="var(--ink-faint)" stroke-width="1.5" stroke-dasharray="4 3"/><rect x="150" y="170" width="120" height="60" fill="none" stroke="var(--ink-faint)" stroke-width="1.5" stroke-dasharray="4 3"/><text x="105" y="130" text-anchor="middle" font-size="14" fill="var(--ink-soft)">3&#178; = 9</text><text x="210" y="205" text-anchor="middle" font-size="14" fill="var(--ink-soft)">4&#178; = 16</text><text x="130" y="128" text-anchor="end" font-size="15" font-weight="600" fill="var(--ink)">a = 3</text><text x="210" y="188" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">b = 4</text><text x="222" y="115" text-anchor="middle" font-size="15" font-weight="700" fill="var(--brand)">c = 5</text><text x="360" y="110" text-anchor="middle" font-size="15" font-weight="600" fill="var(--ink)">9 + 16 = 25</text><text x="360" y="134" text-anchor="middle" font-size="15" font-weight="700" fill="var(--brand)">&#8730;25 = 5</text><text x="230" y="245" text-anchor="middle" font-size="13" fill="var(--ink-soft)">The square on the long side equals the other two squares added</text></svg>',
      diagramCaption: "The hypotenuse sits opposite the right angle, marked by the small box.",
      steps: [
        { do: "Is 9, 12, 15 a Pythagorean triple?", why: "Test the two shorter sides against the longest." },
        { do: "9² + 12² = 81 + 144 = 225", why: "Square and add the two short sides." },
        { do: "15² = 225", why: "Square the longest side." },
        { do: "They match, so yes - and the triangle has a right angle", answer: true }
      ] },
    { heading: "Finding the hypotenuse", unit: "Pythagoras",
      body: "When the missing side is the **longest** one, you **add**.\n\nSquare both short sides, add them, then take the square root.\n\nIf the answer is not a whole number, round as the question asks - usually to two decimal places.",
      steps: [
        { do: "Short sides 6 cm and 8 cm", why: "The hypotenuse is missing." },
        { do: "c² = 6² + 8²", why: "Add, because you are after the longest side." },
        { do: "c² = 36 + 64 = 100", why: "Square each, then add." },
        { do: "c = √100 = 10 cm", why: "Square root at the end. Sensible - it is longer than both.", answer: true }
      ] },
    { heading: "Finding a shorter side", unit: "Pythagoras",
      body: "When the missing side is a **short** one, you **subtract**.\n\nSquare the hypotenuse, subtract the square of the side you know, then take the square root.\n\nThis is the single biggest trap in the topic. Ask yourself first: **am I looking for the longest side or not?** Longest means add, otherwise subtract.\n\nYour answer must come out **smaller** than the hypotenuse. If it does not, you added when you should have subtracted.",
      steps: [
        { do: "Hypotenuse 13 m, one short side 5 m", why: "The missing side is a short one." },
        { do: "a² = 13² − 5²", why: "Subtract, because you are not after the longest side." },
        { do: "a² = 169 − 25 = 144", why: "Square the hypotenuse first, then take the other square off." },
        { do: "a = √144 = 12 m", why: "12 is smaller than 13, so it makes sense.", answer: true },
        { do: "A ladder 10 m long leans with its base 6 m from a wall. How far up?", why: "The ladder is the hypotenuse." },
        { do: "h² = 100 − 36 = 64, so h = 8 m", answer: true }
      ] }
  ],

  terms: [
    { term: "Rate", unit: "Rates & Speed", definition: "A comparison of two quantities with different units, like km/h or $/kg." },
    { term: "Average rate", unit: "Rates & Speed", definition: "Total amount divided by total time. Not the average of the separate rates." },
    { term: "Speed", unit: "Rates & Speed", definition: "Distance divided by time. How much ground is covered per unit of time." },
    { term: "Unitary method", unit: "Rates & Speed", definition: "Find the value of one unit first, then multiply up to what you need." },
    { term: "Tally", unit: "Statistics", definition: "Marks recorded in groups of five as data is collected." },
    { term: "Frequency", unit: "Statistics", definition: "How many times a particular score appears." },
    { term: "Mean", unit: "Statistics", definition: "Add all the scores and divide by how many there are. The everyday average." },
    { term: "Median", unit: "Statistics", definition: "The middle score once they are in order. Average the middle two if there is an even number." },
    { term: "Mode", unit: "Statistics", definition: "The score that appears most often. There can be none, one, or several." },
    { term: "Range", unit: "Statistics", definition: "Highest score minus lowest score. A measure of spread, not centre." },
    { term: "Population", unit: "Statistics", definition: "Every member of the group being studied." },
    { term: "Sample", unit: "Statistics", definition: "A smaller part of the population that you actually survey." },
    { term: "Census", unit: "Statistics", definition: "A survey of the entire population." },
    { term: "Symmetric", unit: "Statistics", definition: "Data balanced evenly either side of the middle." },
    { term: "Skewed", unit: "Statistics", definition: "Data bunched at one end with a tail stretching off the other." },
    { term: "Bi-modal", unit: "Statistics", definition: "Data with two separate peaks, so two modes." },
    { term: "Equation", unit: "Equations", definition: "A statement that two expressions are equal. It has an equals sign." },
    { term: "Solve", unit: "Equations", definition: "Find the value of the pronumeral that makes the equation true." },
    { term: "Inverse operation", unit: "Equations", definition: "The operation that undoes another. Subtraction undoes addition, division undoes multiplication." },
    { term: "Expand", unit: "Equations", definition: "Multiply out the brackets. 3(x + 2) becomes 3x + 6." },
    { term: "Hypotenuse", unit: "Pythagoras", definition: "The longest side of a right-angled triangle, opposite the right angle." },
    { term: "Pythagoras' Theorem", unit: "Pythagoras", definition: "a² + b² = c², where c is the hypotenuse." },
    { term: "Pythagorean triple", unit: "Pythagoras", definition: "Three whole numbers that satisfy the theorem exactly, like 3, 4, 5." }
  ],

  cards: [
    { front: "What is a rate?", back: "A comparison of two quantities with different units, like km/h or dollars per kilo." },
    { front: "How do you find an average rate?", back: "Total amount divided by total time. Never average the separate rates." },
    { front: "What is the speed formula?", back: "Speed = distance ÷ time. Also distance = speed × time, and time = distance ÷ speed." },
    { front: "Convert km/h to m/s. What do you do?", back: "Divide by 3.6. Going the other way, multiply by 3.6." },
    { front: "Convert 90 km/h to m/s.", back: "25 m/s. 90 ÷ 3.6." },
    { front: "What is the unitary method?", back: "Find the value of one unit first, then multiply up. Divide, then multiply." },
    { front: "What is the frequency in a frequency table?", back: "How many times that score appeared, written as a number." },
    { front: "How do you find the mean?", back: "Add all the scores, then divide by how many there are." },
    { front: "How do you find the median?", back: "Put the scores in order, then take the middle one. Even count, average the middle two." },
    { front: "How do you find the mode?", back: "The score that appears most often. There can be none, one, or several." },
    { front: "How do you find the range?", back: "Highest score minus lowest score." },
    { front: "Does the range measure centre or spread?", back: "Spread. Mean, median and mode measure centre." },
    { front: "Population vs sample?", back: "Population is everyone in the group. A sample is the smaller part you actually ask." },
    { front: "What is a census?", back: "A survey of the entire population, not just a sample." },
    { front: "What does bi-modal mean?", back: "The data has two separate peaks, so two modes." },
    { front: "In 4x + 3 = 19, what do you undo first?", back: "The + 3. Undo addition and subtraction before multiplication and division." },
    { front: "Solve 4x + 3 = 19", back: "x = 4. Take 3 off to get 4x = 16, then divide by 4." },
    { front: "How do you clear a fraction from an equation?", back: "Multiply both sides by the denominator." },
    { front: "Solve x/5 = 7", back: "x = 35. Multiply both sides by 5." },
    { front: "5x + 2 = 3x + 12. What is the first move?", back: "Subtract 3x from both sides. Move the smaller x term so x stays positive." },
    { front: "How do you handle 4(x + 3) = 20?", back: "Expand to 4x + 12 = 20, or just divide both sides by 4. Either works." },
    { front: "Which side is the hypotenuse?", back: "The longest side, always opposite the right angle." },
    { front: "State Pythagoras' Theorem.", back: "a² + b² = c², where c is the hypotenuse and a and b are the short sides." },
    { front: "Finding the hypotenuse: add or subtract?", back: "Add. Square both short sides, add, then square root." },
    { front: "Finding a shorter side: add or subtract?", back: "Subtract. Square the hypotenuse, take off the other square, then square root." },
    { front: "Short sides 6 and 8. Hypotenuse?", back: "10. Because 36 + 64 = 100, and √100 = 10." },
    { front: "Hypotenuse 13, short side 5. Other side?", back: "12. Because 169 − 25 = 144, and √144 = 12." },
    { front: "Name three Pythagorean triples.", back: "3-4-5, 5-12-13, 8-15-17. Also 7-24-25, and any multiple like 6-8-10." },
    { front: "How do you test if a triangle has a right angle?", back: "Check whether a² + b² equals c², using the longest side as c. If it matches, it is right-angled." }
  ],

  quiz: [
    { q: "A car travels 405 km in 4.5 hours. Find its average speed, and state the formula you used.", a: "90 km/h.\n\nSpeed = distance ÷ time.\n\n405 ÷ 4.5 = 90 km/h.", hint: "Cover the D in the formula triangle.", marks: 2 },
    { q: "Convert 108 km/h into m/s. Show your working.", a: "30 m/s.\n\nTo go from km/h to m/s you divide by 3.6.\n\n108 ÷ 3.6 = 30 m/s.\n\nSense check: the m/s number should be smaller, and it is.", marks: 2, hint: "Which direction is the 3.6 — divide or multiply?" },
    { q: "A runner covers 4 km in 20 minutes, then 6 km in 40 minutes. Find the average speed in km per minute.", a: "1/6 km per minute, or about 0.167.\n\nAverage rate = total distance ÷ total time.\n\nTotal distance = 10 km. Total time = 60 minutes.\n\n10 ÷ 60 = 0.1667 km/min (which is 10 km/h).\n\nThe trap is averaging the two separate rates — that gives a different, wrong answer.", hint: "Add the distances and add the times before dividing.", marks: 3 },
    { q: "6 identical chairs cost $270. Using the unitary method, find the cost of 10 chairs.", a: "$450.\n\nOne chair = 270 ÷ 6 = $45.\n\nTen chairs = 45 × 10 = $450.\n\nDivide down to one, then multiply up.", hint: "What does a single chair cost?", marks: 2 },
    { q: "For the data 5, 8, 3, 8, 11, 7, find the mean, median, mode and range.", a: "Mean = 7, median = 7.5, mode = 8, range = 8.\n\nMean: 5+8+3+8+11+7 = 42, and 42 ÷ 6 = 7.\n\nIn order: 3, 5, 7, 8, 8, 11. Six scores, so median = (7 + 8) ÷ 2 = 7.5.\n\nMode: 8 appears twice.\n\nRange: 11 − 3 = 8.", hint: "Sort the data before you go looking for the median.", marks: 4 },
    { q: "Explain the difference between a census and a sample survey, and give one reason you might choose a sample.", a: "A census surveys the entire population. A sample survey asks only part of it.\n\nYou would choose a sample when a census is too expensive, too slow, or impossible — for example testing the lifetime of every light bulb would destroy the whole stock.\n\nA sample needs to be random and large enough, or the results will be biased.", hint: "Think about cost and practicality.", marks: 3 },
    { q: "Solve 6x − 7 = 29. Show each step and check your answer.", a: "x = 6.\n\n6x − 7 = 29\n6x = 36  (add 7 to both sides)\nx = 6  (divide both sides by 6)\n\nCheck: 6(6) − 7 = 36 − 7 = 29. Correct.", hint: "Undo the subtraction before the multiplication.", marks: 2 },
    { q: "Solve (3x − 2)/4 = 4.", a: "x = 6.\n\nMultiply both sides by 4: 3x − 2 = 16.\n\nAdd 2: 3x = 18.\n\nDivide by 3: x = 6.\n\nCheck: (18 − 2)/4 = 16/4 = 4. Correct.", hint: "Clear the fraction first by multiplying both sides by the bottom number.", marks: 3 },
    { q: "Solve 8x − 5 = 3x + 20.", a: "x = 5.\n\nSubtract 3x from both sides: 5x − 5 = 20.\n\nAdd 5: 5x = 25.\n\nDivide by 5: x = 5.\n\nCheck: 8(5) − 5 = 35 and 3(5) + 20 = 35. Both sides agree.", hint: "Move the smaller x term across so x stays positive.", marks: 3 },
    { q: "Solve 5(2x − 3) = 35.", a: "x = 5.\n\nExpand: 10x − 15 = 35.\n\nAdd 15: 10x = 50.\n\nDivide by 10: x = 5.\n\nFaster route: divide both sides by 5 first to get 2x − 3 = 7, then 2x = 10.\n\nCheck: 5(10 − 3) = 5 × 7 = 35. Correct.", hint: "Expand the brackets — or divide both sides by 5 first.", marks: 3 },
    { q: "Ben thinks of a number, multiplies it by 4 and adds 9, getting 41. Write an equation and solve it.", a: "4n + 9 = 41, and n = 8.\n\n4n + 9 = 41\n4n = 32  (take 9 off both sides)\nn = 8  (divide by 4)\n\nCheck: 4(8) + 9 = 32 + 9 = 41. Correct.", hint: "Let the number be n and translate the sentence one step at a time.", marks: 3 },
    { q: "A right-angled triangle has short sides of 9 cm and 12 cm. Find the hypotenuse.", a: "15 cm.\n\nc² = 9² + 12² = 81 + 144 = 225.\n\nc = √225 = 15 cm.\n\nYou add, because the hypotenuse is the longest side.", hint: "Longest side missing means add the squares.", marks: 2 },
    { q: "A right-angled triangle has a hypotenuse of 25 m and one short side of 20 m. Find the other side.", a: "15 m.\n\na² = 25² − 20² = 625 − 400 = 225.\n\na = √225 = 15 m.\n\nSubtract, because the missing side is a short one. Sense check: 15 is less than 25, as it must be.", hint: "You are not after the longest side, so which operation is it?", marks: 3 },
    { q: "A ladder 17 m long leans against a wall with its base 8 m from the wall. How far up the wall does it reach?", a: "15 m.\n\nThe ladder is the hypotenuse, so the height is a shorter side.\n\nh² = 17² − 8² = 289 − 64 = 225.\n\nh = √225 = 15 m.", hint: "Which of the three lengths is the hypotenuse here?", marks: 3 },
    { q: "A triangle has sides 8 cm, 15 cm and 17 cm. Show whether it is right-angled.", a: "Yes, it is right-angled.\n\nTest the two shorter sides against the longest:\n8² + 15² = 64 + 225 = 289.\n17² = 289.\n\nThey are equal, so by the converse of Pythagoras' Theorem the triangle has a right angle. 8-15-17 is a Pythagorean triple.", hint: "Square the two short sides, add, and compare with the longest squared.", marks: 3 }
  ]
}

];
