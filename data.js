(function(){
  'use strict';
  function scene(topColor, botColor, decor){ return { topColor, botColor, decor }; }
  window.STF_LESSONS = [
    { id:0, book:"Genesis", title:"Creation", side:"c",
      scene: scene('#a9d8f5', '#fef6d8', [{i:0x2601,t:'14%',l:'14%'},{i:0x2601,t:'22%',r:'18%'},{i:0x2600,t:'10%',r:'10%'},{i:0x1F30D,t:'62%',l:'20%'}]),
      passage: "In the beginning God created the heavens and the earth. Over six days He made light, sky, land, plants, sun and moon, sea creatures, animals, and finally people. On the seventh day, He rested.",
      keyVerses: [ { ref: "Genesis 1:1", text: "In the beginning, God created the heavens and the earth." } ],
      questions: [
        { q:"How many days did God take to create everything?", opts:["Six","Seven","Three"], correct:0, explain:"God created for six days, then rested on the seventh \u2014 that's why a 7-day week still shapes how we live today." },
        { q:"What did God do on the seventh day?", opts:["Made more animals", "Rested", "Made the stars"], correct:1, explain:"Rest wasn't an afterthought \u2014 it was built into creation from day one." },
        { q:"What did God create first?", opts:["Animals", "Light", "People"], correct:1, explain:"\u201cLet there be light\u201d comes before anything else \u2014 light and dark are separated on day one." }
      ],
      deepDive: "Genesis opens by showing that everything that exists was made intentionally and declared good by God. Unlike origin stories where the world results from conflict between gods, here creation flows from order, purpose, and generosity. Humanity is made distinctly in God's image, given dignity and a role to care for what God made. This sets the tone for the rest of the Bible: a good God intentionally creating a world meant for relationship with Him." },
    { id:1, book:"Genesis", title:"The Fall", side:"l",
      scene: scene('#bfe6c8', '#e3f4c9', [{i:0x1F333,t:'12%',l:'10%'},{i:0x1F34E,t:'40%',r:'16%'},{i:0x1F40D,t:'66%',l:'22%'}]),
      passage: "God placed Adam and Eve in the Garden of Eden and told them not to eat from the tree of the knowledge of good and evil. A serpent tempted Eve, she ate, and gave some to Adam too. Their eyes were opened, and they hid from God in shame.",
      keyVerses: [
        { ref: "Genesis 3:9", text: "The LORD God called to Adam and said to him, \u201cWhere are you?\u201d" }
      ],
      questions: [
        { q:"Which tree were they told not to eat from?", opts:["The tree of life", "The tree of knowledge of good and evil", "A fig tree"], correct:1, explain:"One boundary, one tree \u2014 the rest of the garden was theirs freely." },
        { q:"Who tempted Eve?", opts:["Adam", "A serpent", "An angel"], correct:1, explain:"The serpent is described as more crafty than any other wild animal God had made." },
        { q:"What did Adam and Eve do after eating the fruit?", opts:["Celebrated", "Hid from God in shame", "Told God right away"], correct:1, explain:"Shame and hiding enter the story here \u2014 a shift from the openness they had before." }
      ],
      deepDive: "The story of the Fall explains why the world feels broken even though it was made good. Adam and Eve's choice wasn't just about a piece of fruit, it was about trusting their own judgment over God's word. Sin entered through doubt and self-reliance, and its effects, shame, blame, and separation, still show up in everyday life. Yet even here, God begins moving toward restoration rather than abandonment." },
    { id:2, book:"Genesis", title:"Noah's Ark", side:"r",
      scene: scene('#5c8fb0', '#8fb8c9', [{i:0x1F327,t:'10%',r:'12%'},{i:0x26F5,t:'50%',l:'16%'},{i:0x1F40F,t:'70%',r:'22%'}]),
      passage: "As humanity's evil grew, God chose Noah, a righteous man, to build a massive ark. Noah brought his family and two of every animal (seven of the clean ones) aboard. Rain fell for forty days, flooding the earth, but Noah's family survived.",
      keyVerses: [
        { ref: "Genesis 9:13", text: "I have set my rainbow in the clouds, and it will be a sign of the covenant between me and the earth." }
      ],
      questions: [
        { q:"Why did God choose Noah?", opts:["He was rich", "He was righteous", "He was the oldest"], correct:1, explain:"Scripture calls Noah 'a righteous man, blameless among the people of his time.'" },
        { q:"How long did it rain?", opts:["Forty days", "Seven days", "One year"], correct:0, explain:"Forty days and nights of rain \u2014 a number that shows up again and again in scripture for testing and transition." },
        { q:"What did God set in the sky afterward as a promise?", opts:["A star", "A rainbow", "A cloud shape"], correct:1, explain:"The rainbow became a sign of God's promise never to flood the whole earth again." }
      ],
      deepDive: "Noah's story shows both the seriousness of human sin and the depth of God's mercy toward the few who remained faithful. Building the ark took decades of faithfulness with no visible proof that judgment was coming, only trust in what God had said. The flood ends not with punishment as the final word, but with a rainbow, a promise, and a fresh start for humanity." },
    { id:3, book:"Genesis", title:"The Tower of Babel", side:"c",
      passage: "After the flood, everyone on earth spoke one language and settled together. They built a great city and a tower reaching toward the heavens, wanting to make a name for themselves. God confused their language so they couldn't understand each other, scattering them across the earth.",
      keyVerses: [
        { ref: "Genesis 11:9", text: "There the LORD confused the language of the whole earth, and from there he scattered them over all the earth." }
      ],
      questions: [
        { q:"What were the people trying to do by building the tower?", opts:["Reach the heavens and make a name for themselves", "Build a home for animals", "Escape a flood"], correct:0, explain:"Their motive was pride and self-reliance \u2014 wanting fame instead of trusting God's plan for them to spread across the earth." },
        { q:"How did God respond to the tower?", opts:["He destroyed it with fire", "He confused their language", "He sent another flood"], correct:1, explain:"By confusing their language, God made it impossible for them to keep working together on the project." },
        { q:"What happened to the people afterward?", opts:["They kept building anyway", "They were scattered across the earth", "They all died"], correct:1, explain:"Unable to understand each other, they scattered into different groups \u2014 part of why the place was named Babel, meaning \u2018confusion.\u2019" }
      ],
      deepDive: "Babel is a story about human ambition reaching for control instead of trusting God. The people wanted to make a name for themselves and stay in one place, resisting God's instruction to spread out and fill the earth. God's response scatters them, but it's less a punishment than a redirect, pushing humanity back toward the purpose they were avoiding." },
    { id:4, book:"Genesis", title:"Abraham's call", side:"l",
      scene: scene('#2b3a67', '#5c4a8a', [{i:0x2728,t:'12%',l:'16%'},{i:0x2728,t:'20%',r:'20%'},{i:0x2728,t:'8%',r:'10%'},{i:0x1F42B,t:'64%',l:'18%'}]),
      passage: "God called Abram to leave his homeland for a place He would show him, promising to make him into a great nation and bless the whole earth through him. Abram obeyed, even without knowing exactly where he was going.",
      keyVerses: [
        { ref: "Genesis 12:1", text: "Leave your country, your people, and your father\u2019s household and go to the land I will show you." }
      ],
      questions: [
        { q:"What did God promise to make Abram into?", opts:["A great nation", "A wealthy merchant", "A king immediately"], correct:0, explain:"This promise becomes the foundation for the rest of the Old Testament story." },
        { q:"Did Abram know exactly where he was going when he left?", opts:["Yes, a detailed map", "No, he went by faith", "He refused to go"], correct:1, explain:"Abram's obedience despite the unknown is why he's remembered as a model of faith." },
        { q:"What did God later compare Abram's descendants to?", opts:["Grains of sand only", "The stars in the sky", "Waves in the sea"], correct:1, explain:"God told Abram to look up at the stars \u2014 that's how many descendants he would have." }
      ],
      deepDive: "God's call to Abraham marks a turning point: instead of dealing with all humanity at once, God begins building a people through one family's obedience. Abraham left everything familiar based only on a promise he couldn't yet see fulfilled. This kind of forward-facing faith, trusting God's word over present certainty, becomes the model for faith throughout the rest of the Bible." },
    { id:5, book:"Genesis", title:"Lot and Sodom", side:"r",
      passage: "Abraham's nephew Lot settled near the city of Sodom, a place known for its wickedness. When God decided to destroy the city, He sent angels to warn Lot to flee with his family. They were told not to look back as they escaped, but Lot's wife looked back and turned into a pillar of salt.",
      keyVerses: [
        { ref: "Genesis 19:26", text: "But Lot\u2019s wife looked back, and she became a pillar of salt." }
      ],
      questions: [
        { q:"Why was Sodom destroyed?", opts:["A famine struck it", "Its wickedness had become extreme", "It ran out of resources"], correct:1, explain:"Sodom's sin had grown so severe that judgment came, though God first sent angels to rescue Lot's family." },
        { q:"What warning were Lot and his family given as they fled?", opts:["Don't look back", "Travel only at night", "Bring nothing with them"], correct:0, explain:"The instruction not to look back was a test of trust as they left everything behind." },
        { q:"What happened to Lot's wife?", opts:["She reached safety with everyone else", "She looked back and turned into a pillar of salt", "She refused to leave and stayed behind"], correct:1, explain:"Her looking back cost her life \u2014 a stark picture of what happens when someone can't let go of what they're leaving." }
      ],
      deepDive: "This story contrasts Abraham's concern for others with Lot's compromise, showing how the choices we make and the places we linger shape our lives. Lot stayed in a place he knew was corrupt, and it nearly cost him everything. It's also a picture of mercy reaching in to rescue people even in the middle of judgment on a wider situation." },
    { id:6, book:"Genesis", title:"Isaac is born", side:"c",
      passage: "Years earlier, God had promised Abraham a son, but Abraham and Sarah grew old without one. When Sarah was around ninety, she gave birth to Isaac, just as God had promised. His name means \u201claughter,\u201d because Sarah had laughed in disbelief when she first heard the promise.",
      keyVerses: [
        { ref: "Genesis 21:6", text: "God has brought me laughter, and everyone who hears about this will laugh with me." }
      ],
      questions: [
        { q:"About how old was Sarah when Isaac was born?", opts:["About twenty", "About ninety", "A teenager"], correct:1, explain:"Sarah's advanced age is exactly why Isaac's birth was seen as a miracle fulfilling God's promise." },
        { q:"What does the name \u201cIsaac\u201d mean?", opts:["Laughter", "Strength", "Promise"], correct:0, explain:"Sarah laughed when she first heard she'd have a son in her old age, and the name stuck." },
        { q:"Why did Sarah laugh when she first heard the promise?", opts:["She thought it was impossible at her age", "She was overjoyed immediately", "She didn't believe in God at all"], correct:0, explain:"The promise seemed physically impossible to her, which is part of why the eventual birth mattered so much." }
      ],
      deepDive: "After decades of waiting, Isaac's birth shows that God's promises are trustworthy even when the timeline stretches far longer than expected. Sarah's doubt and later joy capture how real faith can hold both struggle and hope at once. The child of promise becomes proof that God does exactly what He said, even against impossible odds." },
    { id:7, book:"Genesis", title:"The test of faith", side:"l",
      passage: "Years later, God tested Abraham by asking him to offer Isaac, his promised son, as a sacrifice. Abraham obeyed, traveling three days to the mountain. As he raised the knife, an angel stopped him, and God provided a ram caught in a thicket instead. Abraham named the place \u201cThe Lord Will Provide.\u201d",
      keyVerses: [
        { ref: "Genesis 22:8", text: "God himself will provide the lamb, my son. And the two of them walked on together." }
      ],
      questions: [
        { q:"What did God ask Abraham to do?", opts:["Give away his wealth", "Offer Isaac as a sacrifice", "Leave his homeland again"], correct:1, explain:"This was the hardest test of Abraham's faith \u2014 offering back the very son the promise depended on." },
        { q:"What stopped Abraham at the last moment?", opts:["Isaac argued with him", "An angel called out to him", "Sarah arrived"], correct:1, explain:"An angel stopped Abraham just in time, showing the test was about obedience, not an actual demand for Isaac's life." },
        { q:"What did God provide instead of Isaac?", opts:["A ram caught in a thicket", "Nothing, the test simply ended", "A lamb from Abraham's own flock"], correct:0, explain:"God provided a ram, and Abraham named the place to remember God's provision." }
      ],
      deepDive: "The command to offer Isaac is one of the hardest passages in the Bible, testing whether Abraham trusted God more than the promise itself. Abraham's willingness to obey, combined with God providing a ram at the last moment, reveals a God who tests faith but never asks for more than He's willing to provide for. It points forward to a much larger act of provision later in the Bible." },
    { id:8, book:"Genesis", title:"Jacob and Esau", side:"r",
      passage: "Twin brothers Esau and Jacob were rivals from birth. Esau, exhausted from hunting, traded his birthright to Jacob for a bowl of stew. Later, Jacob tricked their father Isaac into giving him the blessing meant for Esau.",
      keyVerses: [
        { ref: "Genesis 25:34", text: "So Esau despised his birthright." }
      ],
      questions: [
        { q:"What did Esau trade for stew?", opts:["His birthright", "His land", "His sheep"], correct:0, explain:"The birthright meant a double share of inheritance and family leadership \u2014 Esau gave it up for a single meal." },
        { q:"Who tricked Isaac into giving the blessing to the wrong son?", opts:["Esau", "Jacob", "Their mother alone, without help"], correct:1, explain:"Jacob, with his mother Rebekah's help, disguised himself as Esau to receive the blessing." },
        { q:"How did Jacob disguise himself?", opts:["Wore Esau's clothes and animal skins on his arms", "He didn't disguise himself", "He hid in the dark"], correct:0, explain:"Isaac was blind by then, so the rough animal skins made Jacob's arms feel like Esau's." }
      ],
      deepDive: "Jacob's deception of his father to steal Esau's blessing shows a family shaped by favoritism and manipulation, not spiritual health. Yet even through Jacob's flawed choices, God's larger promise to Abraham's family keeps moving forward. It's a reminder that God can work through imperfect people and messy situations without ever excusing the wrong they've done." },
    { id:9, book:"Genesis", title:"Jacob's ladder", side:"c",
      passage: "Fleeing his brother's anger, Jacob stopped for the night and dreamed of a staircase reaching to heaven, with angels going up and down. God stood above it and renewed the promise first given to Abraham. Jacob woke up in awe and said, \u201cSurely the Lord is in this place, and I did not know it.\u201d",
      keyVerses: [
        { ref: "Genesis 28:15", text: "I am with you and will watch over you wherever you go... I will not leave you until I have done what I promised you." }
      ],
      questions: [
        { q:"What did Jacob see in his dream?", opts:["A burning bush", "A staircase reaching to heaven with angels", "A flood"], correct:1, explain:"This vision is often called \u2018Jacob's ladder\u2019 \u2014 a picture of heaven and earth connected." },
        { q:"What did God do in the dream?", opts:["Ignored Jacob", "Renewed His promise to Jacob", "Punished Jacob"], correct:1, explain:"God repeated the same promise of land, descendants, and blessing that He'd given Abraham and Isaac." },
        { q:"What did Jacob realize when he woke up?", opts:["That he was lost", "That God was present in that place", "That he should turn back"], correct:1, explain:"Jacob named the place Bethel, meaning \u2018house of God,\u2019 because of what he realized there." }
      ],
      deepDive: "Jacob's vision of a stairway between heaven and earth comes right after he fled the consequences of his own scheming, alone and uncertain. God meets him there anyway, renewing the same promise given to Abraham and Isaac. It shows that God's presence isn't reserved for people who have it all together, but meets people exactly where they are." },
    { id:10, book:"Genesis", title:"Jacob becomes Israel", side:"l",
      passage: "Returning home years later, afraid of facing Esau again, Jacob spent a night alone and wrestled with a mysterious man until daybreak. Refusing to let go without a blessing, Jacob was given a new name: Israel. He walked away limping, but changed.",
      keyVerses: [
        { ref: "Genesis 32:28", text: "Your name will no longer be Jacob, but Israel, because you have struggled with God and with men and have overcome." }
      ],
      questions: [
        { q:"What did Jacob do when the man tried to leave before daybreak?", opts:["Let him go immediately", "Refused to let go without a blessing", "Ran away"], correct:1, explain:"Jacob's persistence through the struggle is exactly why the moment mattered." },
        { q:"What new name was Jacob given?", opts:["Israel", "Abraham", "Judah"], correct:0, explain:"Israel becomes the name of the whole nation descended from Jacob's twelve sons." },
        { q:"What physical mark did Jacob carry after the encounter?", opts:["A scar on his face", "A limp", "Gray hair"], correct:1, explain:"Jacob's hip was touched during the struggle, leaving him with a limp as a lasting reminder." }
      ],
      deepDive: "Jacob's wrestling match happens the night before he faces the brother he wronged years earlier, and it becomes a turning point in his character. He walks away limping but renamed, Israel, meaning one who struggles with God. The story suggests that real transformation often comes through struggle, not around it." },
    { id:11, book:"Genesis", title:"Esau and Jacob reconcile", side:"r",
      passage: "Years after Jacob fled with Esau's stolen blessing, the brothers were set to meet again, and Jacob feared the worst. But instead of anger, Esau ran to meet him, embraced him, and wept. The two brothers, once bitter rivals, were reconciled.",
      keyVerses: [
        { ref: "Genesis 33:4", text: "Esau ran to meet him, threw his arms around him, and kissed him. And they wept." }
      ],
      questions: [
        { q:"What did Jacob expect from Esau after all those years?", opts:["A warm welcome", "Anger or revenge", "Indifference"], correct:1, explain:"Jacob had every reason to expect the worst, given how he'd wronged his brother years before." },
        { q:"How did Esau actually respond when he saw Jacob?", opts:["He ran to embrace him and wept", "He refused to speak to him", "He demanded repayment"], correct:0, explain:"Esau's response is a surprising picture of forgiveness after so many years of separation." },
        { q:"What does this reunion show about the brothers' relationship?", opts:["It stayed broken forever", "It was restored", "They never saw each other again"], correct:1, explain:"Despite the deception years earlier, the two brothers were able to reconcile and move forward." }
      ],
      deepDive: "After years of fear and separation, Esau's response to Jacob is grace, not revenge. This unexpected reconciliation shows that the wounds carried from family conflict don't have to define the ending. It's a picture of forgiveness that neither excuses the past wrong nor lets it control the future." },
    { id:12, book:"Genesis", title:"Joseph sold by his brothers", side:"c",
      passage: "Joseph was his father's favorite son and was given a special coat. He also had dreams that hinted he'd one day rule over his family, which made his brothers resent him. One day, they seized him, threw him in a pit, and sold him to traders heading to Egypt.",
      keyVerses: [
        { ref: "Genesis 37:28", text: "They sold Joseph to the Ishmaelites for twenty pieces of silver." }
      ],
      questions: [
        { q:"Why did Joseph's brothers resent him?", opts:["He was lazy", "He was their father's favorite and had dreams about ruling over them", "He was cruel to them"], correct:1, explain:"Favoritism plus Joseph's dreams about his family bowing to him pushed his brothers to jealousy." },
        { q:"What did the brothers do to Joseph?", opts:["Sold him to traders heading to Egypt", "Sent him to live with relatives", "Forgave him immediately"], correct:0, explain:"They threw him in a pit first, then sold him to traders passing by." },
        { q:"What did the brothers tell their father Jacob had happened to Joseph?", opts:["That he had run away", "That a wild animal had killed him", "That he had been captured by soldiers"], correct:1, explain:"They faked his death using his coat, to deceive their father." }
      ],
      deepDive: "Joseph's brothers' jealousy leads to one of the most painful betrayals in Genesis, selling their own brother into slavery. What looks like the end of Joseph's story is actually the beginning of a much longer, unseen plan. It's an early picture of how deep pain doesn't disqualify someone from being used for something greater later." },
    { id:13, book:"Genesis", title:"Joseph rises in Egypt", side:"l",
      passage: "In Egypt, Joseph was falsely accused and imprisoned, but he stayed faithful. When Pharaoh had troubling dreams no one could explain, Joseph correctly interpreted them: seven years of plenty would be followed by seven years of famine. Pharaoh made Joseph second-in-command to prepare Egypt for what was coming.",
      keyVerses: [
        { ref: "Genesis 39:2", text: "The LORD was with Joseph, and he prospered." }
      ],
      questions: [
        { q:"What happened to Joseph in Egypt before his rise to power?", opts:["He was falsely accused and imprisoned", "He immediately became a ruler", "He returned home right away"], correct:0, explain:"Joseph endured real hardship, including false accusations, before his circumstances changed." },
        { q:"What did Joseph's interpretation of Pharaoh's dreams predict?", opts:["Seven years of plenty, then seven years of famine", "A great flood", "War with a neighboring nation"], correct:0, explain:"Joseph's interpretation gave Egypt time to prepare, which is exactly why Pharaoh trusted him with power." },
        { q:"What role did Pharaoh give Joseph?", opts:["Second-in-command over Egypt", "A servant in the palace", "Head of the army"], correct:0, explain:"Joseph went from prisoner to the second most powerful person in Egypt almost overnight." }
      ],
      deepDive: "Joseph's rise from prisoner to second-in-command of Egypt happens entirely through circumstances he didn't choose and couldn't control. His consistent integrity, even when forgotten and mistreated, positions him for a role that saves an entire region from famine. It's a picture of character sustaining someone through seasons with no visible reward." },
    { id:14, book:"Genesis", title:"Joseph tests his brothers", side:"r",
      passage: "When Joseph's brothers came to Egypt for grain, he recognized them, but they didn't recognize him. Joseph tested their character, eventually demanding they bring their youngest brother Benjamin to Egypt. Watching how his brothers now protected Benjamin showed Joseph they had truly changed.",
      keyVerses: [
        { ref: "Genesis 42:21", text: "Surely we\u2019re being punished for what we did to our brother. We saw his anguish... but we wouldn\u2019t listen." }
      ],
      questions: [
        { q:"Did Joseph's brothers recognize him when they first arrived in Egypt?", opts:["Yes, immediately", "No, they had no idea who he was", "Only Benjamin recognized him"], correct:1, explain:"Joseph looked and lived like an Egyptian official by then \u2014 nothing like the brother they'd sold years before." },
        { q:"Who did Joseph demand his brothers bring to Egypt?", opts:["Their father Jacob", "Their youngest brother Benjamin", "Nobody else"], correct:1, explain:"Requiring Benjamin's presence was part of Joseph's test to see how his brothers had changed." },
        { q:"What did watching his brothers' behavior toward Benjamin show Joseph?", opts:["That they hadn't changed at all", "That they had truly changed and now protected their family", "That they wanted to sell Benjamin too"], correct:1, explain:"Their willingness to protect Benjamin, even at personal cost, showed Joseph real change of heart." }
      ],
      deepDive: "Joseph's testing of his brothers isn't cruelty, it's a way of finding out whether they've actually changed since selling him into slavery. Their willingness to protect Benjamin, the brother they could have easily abandoned again, shows real change. The story suggests that trust has to be rebuilt through action, not just declared with words." },
    { id:15, book:"Genesis", title:"Joseph forgives", side:"c",
      passage: "Years after being sold into slavery, Joseph, now Egypt's second-in-command, tested his brothers when famine brought them to Egypt for grain. Unable to hold back any longer, Joseph revealed who he was and wept. Instead of taking revenge, he told them, \u201cYou meant evil against me, but God meant it for good.\u201d",
      keyVerses: [ { ref: "Genesis 50:20", text: "You meant evil against me, but God meant it for good." } ],
      questions: [
        { q:"Why had Joseph's brothers come to Egypt?", opts:["To attack Egypt", "To buy grain during a famine", "To find Joseph"], correct:1, explain:"They had no idea the official they were bargaining with was the brother they'd sold years earlier." },
        { q:"How did Joseph respond once he revealed himself?", opts:["He had them punished", "He forgave them and wept", "He sent them away"], correct:1, explain:"Joseph's response is one of the clearest pictures of forgiveness in the Old Testament." },
        { q:"How did Joseph explain what happened to him?", opts:["It was pure bad luck", "His brothers meant it for evil, but God meant it for good", "He blamed Pharaoh"], correct:1, explain:"Joseph saw God's hand turning something painful into a way to save many lives." }
      ],
      deepDive: "When Joseph finally reveals himself, he doesn't demand payback for years of suffering, he offers forgiveness and reframes the entire story: what his brothers meant for evil, God used for good. This is one of the clearest pictures in the Old Testament of forgiveness that doesn't minimize the wrong done, but chooses to release it anyway." },
    { id:16, book:"Genesis", title:"Jacob's family reunited", side:"l",
      passage: "At Joseph's invitation, Jacob and the whole family moved to Egypt, reuniting father and son after more than twenty years apart. Before he died, Jacob blessed each of his twelve sons, whose descendants would become the twelve tribes of Israel. Genesis ends with the family settled in Egypt.",
      keyVerses: [
        { ref: "Genesis 46:30", text: "Now I am ready to die, since I have seen for myself that you are still alive." }
      ],
      questions: [
        { q:"Why did Jacob's family move to Egypt?", opts:["To escape a famine and be near Joseph", "To conquer Egypt", "To visit as tourists"], correct:0, explain:"The same famine that brought Joseph's brothers to Egypt is what led the whole family to resettle there." },
        { q:"What did Jacob do before he died?", opts:["Blessed each of his twelve sons", "Returned to Canaan alone", "Gave everything to Joseph only"], correct:0, explain:"Each blessing became connected to the future of that son's tribe among the twelve tribes of Israel." },
        { q:"How does the book of Genesis end?", opts:["With Israel already enslaved", "With Jacob's family settled in Egypt", "With the Ten Commandments"], correct:1, explain:"Genesis closes with the family safe in Egypt \u2014 the calm before the story of slavery and deliverance that Exodus tells." }
      ],
      deepDive: "The reunion of Jacob's family in Egypt closes Genesis with restoration instead of the fractures that defined so much of the book. A family shaped by favoritism, deception, and jealousy ends up whole again, not because they earned it, but because of Joseph's grace and God's providence. It sets up the next chapter of Israel's story: a family becoming a nation." },
    { id:17, book:"Exodus", title:"Israel enslaved in Egypt", side:"r",
      passage: "Generations after Joseph, a new Pharaoh who did not know him came to power. Israel had grown enormous in number, and Pharaoh, fearing their strength, enslaved them, forcing them into hard labor. He even ordered Hebrew baby boys to be killed at birth, but the Hebrew midwives feared God and refused.",
      keyVerses: [
        { ref: "Exodus 1:8", text: "Then a new king, who did not know Joseph, came to power in Egypt." }
      ],
      questions: [
        { q:"Why did Pharaoh enslave the Israelites?", opts:["He needed workers for a war", "He feared how numerous and strong they had become", "They refused to pay taxes"], correct:1, explain:"Pharaoh saw Israel's growing population as a threat to Egypt and responded with oppression." },
        { q:"What did Pharaoh order regarding Hebrew baby boys?", opts:["They be trained as soldiers", "They be killed at birth", "They be sent away"], correct:1, explain:"Pharaoh's fear escalated into a command to kill Hebrew infant boys." },
        { q:"How did the Hebrew midwives respond to Pharaoh's order?", opts:["They obeyed without question", "They feared God and refused to comply", "They fled Egypt"], correct:1, explain:"Their courage in defying Pharaoh, because they feared God more than Pharaoh, saved countless lives." }
      ],
      deepDive: "The opening of Exodus shows how quickly circumstances can shift, from favored guests to enslaved people, once a new leader forgets the past. It also introduces a pattern that runs through the whole book: God notices oppression and acts on behalf of people who have no power to save themselves. The midwives' quiet defiance shows that faithfulness sometimes looks like refusing to comply with what's wrong, even at personal risk." },
    { id:18, book:"Exodus", title:"Moses' birth and rescue", side:"c",
      passage: "To save her infant son from Pharaoh's decree, a Hebrew woman hid him for three months, then placed him in a basket on the Nile River. Pharaoh's own daughter found the baby, had compassion on him, and raised him as her own, naming him Moses.",
      keyVerses: [
        { ref: "Exodus 2:10", text: "She named him Moses, saying, \u201cI drew him out of the water.\u201d" }
      ],
      questions: [
        { q:"Why did Moses' mother place him in a basket on the river?", opts:["She didn't want him", "To save him from Pharaoh's order to kill Hebrew babies", "He was sick"], correct:1, explain:"Hiding him in the river was a desperate act to protect him from the death sentence Pharaoh had placed on Hebrew boys." },
        { q:"Who found and rescued baby Moses?", opts:["Pharaoh's daughter", "A shepherd", "A priest"], correct:0, explain:"In an unexpected twist, the daughter of the very king who ordered Hebrew babies killed ended up raising Moses." },
        { q:"What does the name Moses relate to?", opts:["\u201cDrawn out,\u201d since she drew him out of the water", "\u201cStrong warrior\u201d", "\u201cGift from God\u201d"], correct:0, explain:"Pharaoh's daughter named him Moses because she drew him out of the water." }
      ],
      deepDive: "Moses' survival depended on a series of small, risky acts of courage, his mother's decision, his sister's watchfulness, and an Egyptian princess's compassion. None of these people knew they were part of a much bigger story. It's a reminder that faithfulness in small, unnoticed moments can matter far more than it seems at the time." },
    { id:19, book:"Exodus", title:"Moses flees to Midian", side:"l",
      passage: "As an adult, Moses saw an Egyptian beating a Hebrew slave and, in anger, intervened, and the Egyptian died. Fearing Pharaoh's punishment, Moses fled to the land of Midian, where he became a shepherd and started a family, far from the palace he grew up in.",
      keyVerses: [
        { ref: "Exodus 2:22", text: "I have become a foreigner living in a foreign land." }
      ],
      questions: [
        { q:"What happened that caused Moses to flee Egypt?", opts:["He was caught stealing", "He intervened in a beating and the Egyptian died", "He insulted Pharaoh"], correct:1, explain:"Moses' violent intervention forced him to run for his life once Pharaoh found out." },
        { q:"Where did Moses flee to?", opts:["Midian", "Canaan", "Babylon"], correct:0, explain:"Midian became the place Moses spent decades away from Egypt, far from the life he'd known." },
        { q:"What did Moses become while in Midian?", opts:["A shepherd", "A soldier", "A merchant"], correct:0, explain:"The prince-turned-fugitive spent years as an ordinary shepherd before God called him back." }
      ],
      deepDive: "Moses' forty years in Midian look like a detour, a prince reduced to an ordinary shepherd in the wilderness. But this season of obscurity shapes him for the leadership role ahead. Sometimes what looks like a wasted or failed season is actually preparation happening out of sight." },
    { id:20, book:"Exodus", title:"The burning bush", side:"r",
      scene: scene('#d97b3e', '#f0a94f', [{i:0x1F525,t:'14%',l:'50%'},{i:0x1F33F,t:'40%',l:'14%'},{i:0x1F411,t:'66%',r:'18%'}]),
      passage: "Moses, tending sheep in the wilderness, saw a bush on fire that wasn't burning up. God spoke from it, calling Moses to go back to Egypt and lead His people out of slavery. Moses asked who he should say sent him.",
      keyVerses: [ { ref: "Exodus 3:14", text: "I am who I am... say to the Israelites, I AM has sent me to you." } ],
      questions: [
        { q:"What was unusual about the burning bush?", opts:["It was blue", "It burned but wasn't consumed", "It sang"], correct:1, explain:"The bush burning without being destroyed was the sign that this was no ordinary fire." },
        { q:"What name did God give when Moses asked who was sending him?", opts:["I AM WHO I AM", "The Almighty King", "Father of Israel"], correct:0, explain:"This name, often written as Yahweh, points to God's eternal, self-existing nature." },
        { q:"What was Moses doing when God called him?", opts:["Tending sheep", "Farming", "Traveling to Egypt"], correct:0, explain:"Moses was working an ordinary shepherd's day when the extraordinary happened." }
      ],
      deepDive: "God's appearance in a bush that burns without being consumed signals something totally outside normal experience, holy ground breaking into ordinary life. Moses' hesitation and excuses are met not with rejection but with patient reassurance and the promise of God's presence going with him. The name God gives, \u2018I AM,\u2019 points to a God who simply exists, unchanging and dependable, regardless of Moses' doubts." },
    { id:21, book:"Exodus", title:"Let my people go", side:"c",
      passage: "Moses and his brother Aaron returned to Egypt and told Pharaoh, \u201cLet my people go.\u201d Pharaoh refused and made the Israelites' work even harder. God sent Moses back again and again, but Pharaoh's heart stayed hard each time.",
      keyVerses: [
        { ref: "Exodus 5:1", text: "This is what the LORD, the God of Israel, says: Let my people go, so they may hold a feast to me in the wilderness." }
      ],
      questions: [
        { q:"What message did Moses bring to Pharaoh?", opts:["Let my people go", "Give us more food", "Make us kings"], correct:0, explain:"This simple demand became the central conflict of the whole Exodus story." },
        { q:"How did Pharaoh initially respond to the request?", opts:["He agreed immediately", "He refused and made their labor harder", "He negotiated a compromise"], correct:1, explain:"Rather than relenting, Pharaoh increased the Israelites' suffering, making their situation worse." },
        { q:"Who went with Moses to speak to Pharaoh?", opts:["Aaron, his brother", "Joshua", "Nobody, he went alone"], correct:0, explain:"Aaron served as Moses' spokesman throughout the confrontations with Pharaoh." }
      ],
      deepDive: "Moses' repeated demand and Pharaoh's repeated refusal set up a direct confrontation between human power and God's authority. Each hardening of Pharaoh's heart raises the stakes and makes clear that Israel's freedom won't come through negotiation, but through God's decisive action. It's a story about what happens when earthly power resists a higher authority." },
    { id:22, book:"Exodus", title:"The ten plagues", side:"l",
      passage: "When Pharaoh refused to free Israel, God sent a series of plagues on Egypt: water turned to blood, frogs, gnats, flies, diseased livestock, boils, hail, locusts, and darkness. Each time, Pharaoh's heart hardened again after brief moments of relenting.",
      keyVerses: [
        { ref: "Exodus 8:19", text: "The magicians said to Pharaoh, \u201cThis is the finger of God.\u201d" }
      ],
      questions: [
        { q:"What triggered each plague?", opts:["Random disasters", "Pharaoh's continued refusal to free Israel", "Egyptian priests' rituals"], correct:1, explain:"Each plague was a direct response to Pharaoh's repeated refusal to let Israel go." },
        { q:"What happened after several plagues, even when Pharaoh seemed to relent?", opts:["He kept his word every time", "His heart hardened again and he changed his mind", "He left Egypt himself"], correct:1, explain:"Pharaoh's pattern of temporary relenting followed by hardening his heart repeats throughout the plague narrative." },
        { q:"How many plagues struck Egypt before the final one?", opts:["Nine", "Three", "Twenty"], correct:0, explain:"Nine plagues struck Egypt before the tenth and final plague changed everything." }
      ],
      deepDive: "The plagues aren't random disasters, many directly confront specific Egyptian gods, showing that Egypt's entire belief system is powerless next to the true God. Each plague also builds toward the confrontation's climax, growing more severe as Pharaoh's resistance continues. It's a demonstration that no system of power, however entrenched, is beyond God's reach." },
    { id:23, book:"Exodus", title:"The Passover", side:"r",
      passage: "For the final plague, the death of every firstborn in Egypt, God instructed Israel to mark their doorframes with the blood of a lamb. Wherever God saw the blood, He would \u201cpass over\u201d that home, sparing it. That night, Pharaoh finally let Israel go.",
      keyVerses: [
        { ref: "Exodus 12:13", text: "When I see the blood, I will pass over you. No destructive plague will touch you." }
      ],
      questions: [
        { q:"What were the Israelites told to do to protect their firstborn?", opts:["Mark their doorframes with lamb's blood", "Hide in the desert", "Fast for a week"], correct:0, explain:"The blood on the doorframe was the sign that caused God to pass over that household during the final plague." },
        { q:"What finally convinced Pharaoh to let Israel go?", opts:["The death of the firstborn throughout Egypt", "A message from a prophet", "Israel's army attacked"], correct:0, explain:"The tenth and most devastating plague was the one that finally broke Pharaoh's resistance." },
        { q:"What does the Passover commemorate for Israel?", opts:["A victory in battle", "God passing over their homes and delivering them from slavery", "The building of the temple"], correct:1, explain:"Passover became one of Israel's most important yearly commemorations of God's deliverance." }
      ],
      deepDive: "The Passover instructions, marking doorframes with blood so judgment would pass over that household, establish a pattern that echoes throughout the rest of the Bible: protection and rescue coming through a sacrifice rather than personal merit. Every year afterward, Israel would retell this story to remember that their freedom cost something and was never something they achieved on their own." },
    { id:24, book:"Exodus", title:"The Red Sea", side:"c",
      scene: scene('#1c5b8a', '#3f8fb8', [{i:0x1F30A,t:'12%',r:'14%'},{i:0x1F30A,t:'40%',l:'16%'},{i:0x1F6E1,t:'66%',r:'20%'}]),
      passage: "Pharaoh let Israel go, then changed his mind and chased them with his army. Trapped at the Red Sea, Moses stretched out his hand and God parted the waters, letting Israel cross on dry ground before the sea closed over the pursuing Egyptians.",
      keyVerses: [
        { ref: "Exodus 14:14", text: "The LORD will fight for you; you need only to be still." }
      ],
      questions: [
        { q:"How did Israel cross the sea?", opts:["By boat", "On dry ground as the water parted", "They swam across"], correct:1, explain:"The waters formed a wall on each side, and Israel walked through on dry ground." },
        { q:"What happened to the Egyptian army?", opts:["They turned back safely", "The sea closed over them", "They joined Israel"], correct:1, explain:"As soon as Israel was safely across, the waters returned, ending Pharaoh's pursuit for good." },
        { q:"Who stretched out his hand to part the sea?", opts:["Moses", "Aaron", "Pharaoh"], correct:0, explain:"Moses stretched his hand over the sea at God's instruction, and the wind began driving the water back." }
      ],
      deepDive: "Trapped between Pharaoh's army and the sea, Israel faced a situation with no human way out, exactly the kind of moment where God's power becomes unmistakable. The sea parting wasn't just an escape route, it was a decisive, public end to Egypt's power over Israel. It becomes the defining rescue story Israel would return to again and again as proof of God's faithfulness." },
    { id:25, book:"Exodus", title:"Bread from heaven", side:"l",
      passage: "In the wilderness, the Israelites grumbled about hunger and thirst. God provided manna, bread that appeared on the ground each morning, and later brought water from a rock when Moses struck it at God's command. Despite their complaints, God provided for their needs.",
      keyVerses: [
        { ref: "Exodus 16:4", text: "Then the LORD said to Moses, \u201cI will rain down bread from heaven for you.\u201d" }
      ],
      questions: [
        { q:"What was manna?", opts:["Bread that appeared on the ground each morning", "Meat God sent nightly only", "Fruit from a special tree"], correct:0, explain:"Manna became Israel's daily food source throughout their wilderness years." },
        { q:"What did the Israelites do when they were hungry and thirsty?", opts:["Trusted God quietly", "Grumbled and complained", "Returned to Egypt immediately"], correct:1, explain:"Complaining becomes a recurring theme throughout Israel's wilderness journey, despite God's provision." },
        { q:"How did God provide water for them at one point?", opts:["Moses struck a rock and water came out", "They found a hidden well", "Rain fell for days"], correct:0, explain:"At God's instruction, Moses struck a rock and water poured out for the whole community." }
      ],
      deepDive: "The wilderness provision of manna and water reveals a God who provides daily, not all at once, requiring Israel to trust Him fresh each day rather than stockpile security. Their grumbling despite constant provision reflects a very human tendency to focus on what's missing rather than what's been given. It's a story less about food and water, and more about learning to depend on God one day at a time." },
    { id:26, book:"Exodus", title:"The Ten Commandments", side:"r",
      passage: "At Mount Sinai, God gave Moses Ten Commandments for Israel to live by, covering how to honor God and how to treat one another: no other gods, no idols, honor your parents, do not murder, steal, or lie, among others. These became the foundation of Israel's covenant with God.",
      keyVerses: [
        { ref: "Exodus 20:3", text: "You shall have no other gods before me." }
      ],
      questions: [
        { q:"Where did God give Moses the Ten Commandments?", opts:["Mount Sinai", "Jerusalem", "Egypt"], correct:0, explain:"Sinai became the mountain associated with this defining moment in Israel's relationship with God." },
        { q:"What do the Ten Commandments cover?", opts:["Only religious rituals", "How to honor God and how to treat one another", "Only dietary rules"], correct:1, explain:"The commandments address both Israel's relationship with God and their relationships with each other." },
        { q:"What did the Ten Commandments become for Israel?", opts:["A suggestion", "The foundation of their covenant with God", "A temporary rule, later discarded"], correct:1, explain:"These commandments became central and enduring to Israel's identity and relationship with God." }
      ],
      deepDive: "The Ten Commandments aren't a random list of rules, they're the foundation of a relationship, showing Israel how to live as God's people both toward Him and toward each other. Receiving them at Sinai marks Israel's shift from a rescued people to a covenant people bound to God by agreement, not just gratitude. The commandments reflect the character of the God who gave them: faithful, just, and concerned with how people treat one another." },
    { id:27, book:"Exodus", title:"The Golden Calf", side:"c",
      passage: "While Moses was on the mountain receiving God's law, the people grew impatient and convinced Aaron to make a golden calf to worship. God was angry at their unfaithfulness, but Moses interceded on their behalf, and God relented from destroying them.",
      keyVerses: [
        { ref: "Exodus 32:4", text: "These are your gods, Israel, who brought you up out of Egypt." }
      ],
      questions: [
        { q:"Why did the people ask Aaron to make the golden calf?", opts:["They grew impatient waiting for Moses", "God commanded it", "They wanted a new leader"], correct:0, explain:"Their impatience while Moses was up the mountain led them straight back into idolatry." },
        { q:"How did God respond to the golden calf?", opts:["He was pleased", "He was angry at their unfaithfulness", "He ignored it"], correct:1, explain:"Worshiping an idol was a direct violation of the covenant they had just agreed to." },
        { q:"What did Moses do on the people's behalf?", opts:["Joined in the worship", "Interceded for them, and God relented", "Left them permanently"], correct:1, explain:"Moses' intercession is a powerful picture of pleading for mercy on behalf of others." }
      ],
      deepDive: "The golden calf incident happens astonishingly soon after Israel promised to follow God's covenant, revealing how quickly fear and impatience can undo commitment. It's a sobering picture of how easily people drift toward something visible and controllable instead of trusting an unseen God. Moses' intercession on the people's behalf foreshadows a pattern of mediators standing between God's justice and people's failure." },
    { id:28, book:"Exodus", title:"The Tabernacle", side:"l",
      passage: "God gave Moses detailed instructions to build the Tabernacle, a portable tent where His presence would dwell among the people as they traveled. When it was finished, the glory of the Lord filled it, a visible sign that God was present with Israel wherever they went.",
      keyVerses: [
        { ref: "Exodus 40:34", text: "Then the cloud covered the tent of meeting, and the glory of the LORD filled the tabernacle." }
      ],
      questions: [
        { q:"What was the Tabernacle?", opts:["A portable tent where God's presence would dwell among the people", "A permanent temple in Jerusalem", "A burial site"], correct:0, explain:"Unlike a fixed temple, the Tabernacle could travel with Israel through the wilderness." },
        { q:"What happened when the Tabernacle was finished?", opts:["Nothing changed", "The glory of the Lord filled it", "It was destroyed immediately"], correct:1, explain:"God's glory filling the Tabernacle was a visible confirmation that He was truly present with His people." },
        { q:"What did the Tabernacle represent for Israel?", opts:["That God was distant from them", "That God was present with them wherever they traveled", "That their journey was over"], correct:1, explain:"The Tabernacle assured Israel that God traveled with them, not just watched from afar." }
      ],
      deepDive: "The Tabernacle's elaborate design wasn't about impressing anyone, it was about making God's presence tangible and central to a traveling, imperfect people. After chapters of failure and rebellion, the book ends with God choosing to dwell among His people anyway. It's one of the clearest pictures in the Old Testament of a God who wants to be close, not distant." },
    { id:29, book:"Leviticus", title:"The offerings", side:"r",
      passage: "God gave Israel five kinds of offerings to bring to the Tabernacle: burnt, grain, peace, sin, and guilt offerings. Each had its own purpose, from expressing devotion and thanksgiving to making things right after sin. The offerings were to come from the best of what a person had, not the leftovers.",
      keyVerses: [
        { ref: "Leviticus 17:11", text: "The life of every creature is in its blood... it is the blood that makes atonement for a life." }
      ],
      questions: [
        { q:"Where were the offerings brought?", opts:["To the Tabernacle", "To Egypt", "To each family's home"], correct:0, explain:"The Tabernacle, built at the end of Exodus, is where Israel's worship life in Leviticus takes place." },
        { q:"What quality was required of an animal offering?", opts:["It could be any animal", "It had to be without defect", "It had to be the smallest one"], correct:1, explain:"Bringing an animal without defect meant giving God the best, not what you wouldn't miss." },
        { q:"What were the offerings for?", opts:["Only paying the priests", "Devotion, thanksgiving, and making things right after sin", "Feeding the army"], correct:1, explain:"Different offerings served different purposes \u2014 worship, gratitude, and dealing with sin all had a place." }
      ],
      deepDive: "The opening chapters of Leviticus can feel like a list of rituals, but underneath them is a big idea: a holy God has chosen to live among an unholy people, and the offerings are how that relationship stays honest. Sin costs something, gratitude is expressed with something, and devotion is shown with something \u2014 worship in Leviticus is never just words. The insistence on offering animals without defect pushed Israel to trust God with their best, a principle that outlasts the sacrificial system itself." },
    { id:30, book:"Leviticus", title:"The priests are ordained", side:"c",
      passage: "Moses ordained Aaron and his sons as priests in a public ceremony, washing them, clothing them in priestly garments, and anointing them with oil. When Aaron offered the first sacrifices, the glory of the Lord appeared to all the people, and fire from the Lord consumed the offering on the altar.",
      keyVerses: [
        { ref: "Leviticus 9:24", text: "Fire came out from the presence of the LORD and consumed the offering... the people shouted for joy and fell facedown." }
      ],
      questions: [
        { q:"Who was ordained as Israel's first high priest?", opts:["Moses", "Aaron", "Joshua"], correct:1, explain:"Aaron, Moses' brother, became high priest, and his descendants carried the priesthood after him." },
        { q:"What happened when Aaron offered the first sacrifices?", opts:["Nothing unusual", "Fire from the Lord consumed the offering", "It began to rain"], correct:1, explain:"The fire consuming the offering was God's public confirmation that He accepted this worship and these priests." },
        { q:"How did the people respond to seeing God's glory?", opts:["They shouted for joy and fell facedown", "They ran away", "They ignored it"], correct:0, explain:"The people's reaction \u2014 joy and reverence together \u2014 captures what encountering God's holiness is like throughout the Bible." }
      ],
      deepDive: "The priesthood existed because Israel needed a way to approach a holy God safely \u2014 the priests stood in the middle, representing the people before God and God before the people. The elaborate ordination ceremony made the point that no one strolls casually into God's presence; being a mediator was a weighty, consecrated role. The fire falling on the first offering showed the system wasn't empty ritual \u2014 God Himself accepted it and showed up." },
    { id:31, book:"Leviticus", title:"Nadab and Abihu", side:"l",
      passage: "Aaron's sons Nadab and Abihu offered unauthorized fire before the Lord, something He had not commanded. Fire came out from the presence of the Lord and consumed them. Moses told Aaron this showed that God must be regarded as holy by those who come near Him, and Aaron remained silent.",
      keyVerses: [
        { ref: "Leviticus 10:3", text: "Among those who approach me I will show myself holy; before all the people I will be honored. Aaron remained silent." }
      ],
      questions: [
        { q:"What did Nadab and Abihu do wrong?", opts:["They stole from the altar", "They offered unauthorized fire God had not commanded", "They refused to serve"], correct:1, explain:"They approached God on their own terms rather than the way He had instructed \u2014 the issue was treating the holy carelessly." },
        { q:"What happened to them?", opts:["They were exiled", "Fire from the Lord consumed them", "They were forgiven immediately"], correct:1, explain:"The same kind of fire that had accepted the offerings in the previous chapter now responds to careless worship." },
        { q:"What lesson did Moses draw from it?", opts:["That priests should be feared", "That God must be regarded as holy by those who come near Him", "That sacrifices should stop"], correct:1, explain:"The point wasn't cruelty \u2014 it was that God's holiness is real and can't be treated as routine." }
      ],
      deepDive: "This is one of the most sobering moments in Leviticus, coming immediately after the joy of the priests' ordination. Nadab and Abihu treated the holiest role in Israel casually, improvising worship on their own terms, and the consequences were immediate. The story isn't meant to make God seem cruel but to correct a drift every generation faces: assuming that closeness to God means His holiness can be taken lightly. Aaron's silence \u2014 a grieving father with nothing to say \u2014 gives the passage its human weight." },
    { id:32, book:"Leviticus", title:"Clean and unclean", side:"r",
      passage: "God gave Israel detailed laws about clean and unclean things, covering food, disease, and daily life. These laws set Israel apart from the nations around them, weaving reminders of God into ordinary routines like eating and washing. Being unclean wasn't the same as sinning, but it meant being temporarily unable to come to the Tabernacle.",
      keyVerses: [
        { ref: "Leviticus 11:44", text: "I am the LORD your God; consecrate yourselves and be holy, because I am holy." }
      ],
      questions: [
        { q:"What areas of life did the clean and unclean laws cover?", opts:["Only worship days", "Food, disease, and daily routines", "Only the priests' duties"], correct:1, explain:"The laws reached into ordinary life \u2014 meals, illness, and daily habits all carried reminders of God." },
        { q:"Was being unclean the same as sinning?", opts:["Yes, always", "No", "Yes, and it was permanent"], correct:1, explain:"Many things that made someone unclean, like illness, weren't wrong at all \u2014 uncleanness was about access to sacred space, not guilt." },
        { q:"What was one purpose of these laws?", opts:["To set Israel apart from surrounding nations", "To make life difficult", "To increase taxes"], correct:0, explain:"Living differently in visible, daily ways marked Israel as belonging to God." }
      ],
      deepDive: "The clean and unclean laws seem foreign now, but their logic was formational: if God's presence lived at the center of the camp, then everything \u2014 even meals and sickness \u2014 related to Him somehow. Holiness in Leviticus isn't confined to a temple visit; it's threaded through ordinary Tuesday routines. The distinction between unclean and sinful also matters: much of life simply made a person ritually unclean without any wrongdoing, teaching Israel that approaching God required intentionality, not that everyday life was shameful." },
    { id:33, book:"Leviticus", title:"The Day of Atonement", side:"c",
      passage: "Once a year, on the Day of Atonement, the high priest entered the Most Holy Place to make atonement for the sins of all Israel. Two goats were used: one was sacrificed, and over the other the priest confessed the people's sins before sending it away into the wilderness, carrying their sins far from the camp.",
      keyVerses: [
        { ref: "Leviticus 16:30", text: "On this day atonement will be made for you to cleanse you, so that you will be clean from all your sins before the LORD." }
      ],
      questions: [
        { q:"How often did the high priest enter the Most Holy Place?", opts:["Every day", "Once a year, on the Day of Atonement", "Once in his lifetime"], correct:1, explain:"Even the high priest couldn't enter God's innermost presence casually \u2014 only once a year, and only with blood." },
        { q:"What happened with the second goat?", opts:["It was also sacrificed", "The people's sins were confessed over it and it was sent into the wilderness", "It was given to the priest"], correct:1, explain:"The \u2018scapegoat\u2019 visually carried Israel's sins away, a living picture of sins being removed." },
        { q:"Who was atonement made for on this day?", opts:["Only the priests", "All Israel", "Only the leaders"], correct:1, explain:"The Day of Atonement covered the whole nation \u2014 every person's sin was dealt with together." }
      ],
      deepDive: "The Day of Atonement was the most important day on Israel's calendar, the one day the accumulated sin of the whole nation was dealt with at once. The two goats told one story in two halves: sin's penalty paid (the sacrificed goat) and sin's presence removed (the goat sent away, never to return). The imagery of sins being carried far from the camp became one of the Bible's central pictures of forgiveness \u2014 not just pardoned, but removed. Later writers point back to this day as the pattern behind their deepest claims about what forgiveness costs and accomplishes." },
    { id:34, book:"Leviticus", title:"Be holy \u2014 love your neighbor", side:"l",
      passage: "God told Israel, \u201cYe shall be holy: for I the Lord your God am holy.\u201d The chapter that follows makes holiness surprisingly practical: leave part of your harvest for the poor, pay workers fairly, don't spread slander, don't hold grudges, and love your neighbor as yourself.",
      keyVerses: [ { ref: "Leviticus 19:18", text: "Do not seek revenge or bear a grudge... but love your neighbor as yourself. I am the LORD." } ],
      questions: [
        { q:"What reason does God give for Israel to be holy?", opts:["Because the priests demand it", "Because \u2018I the Lord your God am holy\u2019", "Because other nations were holy"], correct:1, explain:"Israel's standard wasn't the surrounding culture \u2014 it was God's own character." },
        { q:"What were farmers commanded to do at harvest?", opts:["Sell everything for profit", "Leave part of the harvest for the poor and the foreigner", "Burn the leftovers"], correct:1, explain:"Holiness included economics \u2014 building generosity to the vulnerable directly into how work was done." },
        { q:"Which famous command appears in this chapter?", opts:["Love your neighbor as yourself", "Build the temple", "Fast twice a week"], correct:0, explain:"Jesus later named this, alongside loving God, as the command the whole law hangs on." }
      ],
      deepDive: "Leviticus 19 explodes the idea that holiness is only about rituals. In one chapter, being holy like God means honest scales, fair wages paid on time, harvest margins left for the poor, truth-telling, and refusing to nurse grudges. The famous line \u2018love your neighbor as yourself\u2019 comes from here \u2014 not from a sermon on a hillside first, but from the middle of Israel's law code. Holiness, it turns out, is mostly about how you treat people when money, power, and memory of old wrongs are involved." },
    { id:35, book:"Leviticus", title:"Sabbath years and Jubilee", side:"r",
      passage: "God commanded that every seventh year the land itself would rest, unplanted and unharvested. And every fiftieth year, the Year of Jubilee, liberty was proclaimed throughout the land: debts released, ancestral land returned, and those who had sold themselves into servitude set free.",
      keyVerses: [
        { ref: "Leviticus 25:10", text: "Proclaim liberty throughout the land to all its inhabitants. It shall be a jubilee for you." }
      ],
      questions: [
        { q:"What happened to the land every seventh year?", opts:["It was sold", "It rested", "It was divided again"], correct:1, explain:"Even the soil got a sabbath \u2014 rest was woven into the rhythm of creation, not just the week." },
        { q:"What happened in the Year of Jubilee?", opts:["A great feast only", "Debts released, land returned, servants freed", "New kings were crowned"], correct:1, explain:"Every fifty years the economic slate was reset so no family stayed permanently ruined." },
        { q:"How often did the Jubilee come?", opts:["Every fiftieth year", "Every seventh year", "Every hundredth year"], correct:0, explain:"After seven cycles of seven years, the fiftieth year proclaimed liberty throughout the land." }
      ],
      deepDive: "The sabbath year and Jubilee laws are some of the most radical economics in the ancient world: the land rests, debts die, and no family's failure becomes permanent poverty across generations. Underneath them is a theology \u2014 the land belongs to God, and Israel are tenants, so no one gets to accumulate forever at another's expense. Whether Israel ever fully practiced the Jubilee is debated, but its vision of built-in liberation echoes through the prophets and into the New Testament, where proclaiming \u2018liberty to the captives\u2019 picks up Jubilee language directly." },
    { id:36, book:"Numbers", title:"The census in the wilderness", side:"c",
      passage: "In the wilderness of Sinai, God commanded Moses to count all the men of Israel able to serve in the army, tribe by tribe. The camp was then organized around the Tabernacle at its center, with each tribe assigned its place, and the Levites set apart to care for God's dwelling.",
      keyVerses: [
        { ref: "Numbers 10:35", text: "Rise up, LORD! May your enemies be scattered; may those who hate you flee before you." }
      ],
      questions: [
        { q:"Who was counted in the census?", opts:["Every person including children", "Men able to serve in the army", "Only the priests"], correct:1, explain:"The census counted fighting men, preparing Israel to move as an organized nation toward the promised land." },
        { q:"What stood at the center of Israel's camp?", opts:["The marketplace", "The Tabernacle", "Moses' tent"], correct:1, explain:"The camp's layout preached a message: God's presence at the literal center of the nation's life." },
        { q:"Which tribe was set apart to care for the Tabernacle?", opts:["Judah", "The Levites", "Benjamin"], correct:1, explain:"The Levites camped closest to the Tabernacle and carried it through every stage of the journey." }
      ],
      deepDive: "Numbers opens with organization \u2014 a census, camp assignments, marching order \u2014 which sounds dry until you see what it means: a mob of freed slaves is becoming an ordered nation with God's dwelling at its exact center. Everything in the camp's geometry pointed inward to the Tabernacle, a daily visual reminder of what held this people together. The book's name comes from these counts, but its real story is the journey between the counting: what happens to faith across forty years of wilderness." },
    { id:37, book:"Numbers", title:"The priestly blessing", side:"l",
      passage: "God gave Aaron and his sons specific words to bless Israel with: \u201cThe Lord bless you and keep you: the Lord make his face shine on you and be gracious to you: the Lord turn his face toward you and give you peace.\u201d In this way, God said, His name would be put on the people.",
      keyVerses: [ { ref: "Numbers 6:24\u201326", text: "The LORD bless you and keep you; the LORD make his face shine on you and be gracious to you; the LORD turn his face toward you and give you peace." } ],
      questions: [
        { q:"Who was given these words of blessing to speak?", opts:["Aaron and his sons, the priests", "The kings of Israel", "Foreign ambassadors"], correct:0, explain:"Blessing the people in God's name was a core part of the priests' calling." },
        { q:"What does the blessing ask God's face to do?", opts:["Turn away", "Shine upon the people", "Remain hidden"], correct:1, explain:"A shining face is a Hebrew picture of favor and delight \u2014 God looking at His people with warmth, not distance." },
        { q:"What did God say the blessing would do?", opts:["Put His name on the people", "Make them wealthy", "End the journey early"], correct:0, explain:"Bearing God's name meant belonging to Him \u2014 the blessing marked Israel as His." }
      ],
      deepDive: "Tucked among census lists and camp regulations is one of the most beloved passages in the Bible \u2014 the priestly blessing still spoken over congregations today, three thousand years later. Its three lines build: protection, then grace, then peace, each one anchored in God's personal attention (\u2018his face,\u2019 \u2018his countenance\u2019). The remarkable claim is the last line: when these words were spoken, God put His own name on the people. Blessing, in the Bible's logic, is ultimately about belonging." },
    { id:38, book:"Numbers", title:"The cloud leads the way", side:"r",
      passage: "The cloud of God's presence covered the Tabernacle, appearing as fire by night. When the cloud lifted, Israel set out; when it settled, they camped, whether for a night or for a year. At the Lord's command they journeyed, and at the Lord's command they stayed.",
      keyVerses: [
        { ref: "Numbers 9:23", text: "At the LORD\u2019s command they camped, and at the LORD\u2019s command they set out." }
      ],
      questions: [
        { q:"What signaled that it was time for Israel to move?", opts:["A trumpet from Moses only", "The cloud lifting from the Tabernacle", "The change of seasons"], correct:1, explain:"Israel's travel schedule wasn't theirs to set \u2014 they moved when God moved." },
        { q:"How did the cloud appear at night?", opts:["It disappeared", "As fire", "As a rainbow"], correct:1, explain:"Day or night, God's presence stayed visible \u2014 cloud in the daylight, fire in the dark." },
        { q:"How long might Israel stay camped in one place?", opts:["Always exactly one week", "A night or a year", "Never more than a day"], correct:1, explain:"Sometimes the cloud rested briefly, sometimes for a long season \u2014 the timing belonged to God." }
      ],
      deepDive: "This passage describes a life completely paced by God's presence: no itinerary, no advance notice, just a cloud that lifts or settles. Sometimes Israel camped a single night; sometimes a year in a place they might not have chosen. It's an uncomfortable picture for anyone who likes controlling their own schedule, and that's the point \u2014 the wilderness was training Israel to move at God's pace rather than their own. The fire at night adds a tender detail: even in the dark, they were never unaccompanied." },
    { id:39, book:"Numbers", title:"Complaints and quail", side:"c",
      passage: "The people grew tired of manna and wept for the food of Egypt, forgetting their slavery there. Moses, overwhelmed, told God the burden of the people was too heavy to carry alone, so God put His Spirit on seventy elders to share the load. Then God sent quail in abundance, but with the meat came a plague on those who had craved it with contempt for His provision.",
      keyVerses: [
        { ref: "Numbers 11:23", text: "Is the LORD\u2019s arm too short? Now you will see whether or not what I say comes true." }
      ],
      questions: [
        { q:"What did the people romanticize while complaining?", opts:["The food they ate in Egypt", "The Red Sea crossing", "Mount Sinai"], correct:0, explain:"Their memory edited out the slavery and kept the menu \u2014 a picture of how complaint distorts the past." },
        { q:"How did God respond to Moses feeling overwhelmed?", opts:["Removed him as leader", "Put His Spirit on seventy elders to share the burden", "Ignored him"], correct:1, explain:"God's answer to Moses' honest breaking point was shared leadership, not shame." },
        { q:"What came along with the quail?", opts:["A blessing feast", "A plague on those who had craved with contempt", "Nothing at all"], correct:1, explain:"Getting exactly what they demanded turned out to be its own judgment \u2014 the craving itself was the problem." }
      ],
      deepDive: "This chapter is brutally honest about both the people and their leader. The people's nostalgia for Egypt \u2014 slavery reimagined as the good old days because the food was seasoned \u2014 shows how complaint rewrites memory. Moses' prayer is one of the rawest in the Bible: he'd rather die than keep carrying the people alone, and God responds not with rebuke but with seventy Spirit-empowered helpers. The quail episode lands the warning: sometimes the most severe judgment is receiving exactly what you demanded." },
    { id:40, book:"Numbers", title:"The twelve spies", side:"l",
      passage: "Moses sent twelve spies into Canaan, who returned after forty days confirming the land was rich, flowing with milk and honey. But ten of them spread fear about giants and fortified cities, saying Israel seemed like grasshoppers next to them. Only Joshua and Caleb urged trust in God. The people chose fear, and that generation was sentenced to wander forty years until it passed away.",
      keyVerses: [
        { ref: "Numbers 13:30", text: "Let\u2019s go up and take possession of the land, for we can certainly do it." }
      ],
      questions: [
        { q:"What did all twelve spies agree on?", opts:["That the land was rich and good", "That the land was worthless", "That they should return to Egypt"], correct:0, explain:"The facts weren't in dispute \u2014 the land was everything promised. The division was over whether God could deliver it." },
        { q:"Which two spies urged the people to trust God?", opts:["Joshua and Caleb", "Aaron and Miriam", "Nadab and Abihu"], correct:0, explain:"Joshua and Caleb saw the same giants but reached a different conclusion because they factored God in." },
        { q:"What was the consequence of the people's refusal?", opts:["Immediate entry anyway", "Forty years of wandering, one year for each day the spies explored", "A new route through the sea"], correct:1, explain:"The generation that chose fear over trust would not enter the land \u2014 their children would." }
      ],
      deepDive: "The spies' report is the hinge of the whole book \u2014 the moment the wilderness generation's story is decided. All twelve saw identical facts: rich land, real giants. Ten measured the giants against themselves and despaired; two measured the giants against God and were ready. The people's fear wasn't punished arbitrarily \u2014 it was granted. They said they'd rather not enter, and God gave them what their unbelief chose, while promising the land to their children. It's the Bible's starkest case study in how two people can see the same reality and tell opposite stories about it." },
    { id:41, book:"Numbers", title:"Korah's rebellion", side:"r",
      passage: "Korah, a Levite, led 250 prominent men in challenging Moses and Aaron, claiming the whole community was holy and asking why Moses set himself above the assembly. Moses put the matter in God's hands. The next day the ground split open and swallowed the rebellion's leaders, and fire consumed the 250 offering incense.",
      keyVerses: [
        { ref: "Numbers 16:3", text: "You have gone too far! The whole community is holy, every one of them, and the LORD is with them." }
      ],
      questions: [
        { q:"What was Korah's accusation against Moses and Aaron?", opts:["That they stole from the Tabernacle", "That they had set themselves above everyone else", "That they were secretly Egyptian"], correct:1, explain:"Korah wrapped a power grab in spiritual language \u2014 claiming equality while seeking Aaron's priesthood for himself." },
        { q:"How did Moses respond to the challenge?", opts:["He fought Korah directly", "He put the matter in God's hands to decide", "He stepped down"], correct:1, explain:"Rather than defending his position, Moses let God publicly confirm whom He had chosen." },
        { q:"What happened to Korah and his followers?", opts:["They were exiled to Egypt", "The ground swallowed the leaders and fire consumed the 250", "They took over leadership"], correct:1, explain:"The dramatic judgment settled the question of whether Moses' authority was self-appointed or God-given." }
      ],
      deepDive: "Korah's challenge sounds almost democratic \u2014 \u2018all the congregation is holy\u2019 \u2014 which is what makes it dangerous: it was a grab for priestly power dressed in the language of equality. Korah was already a Levite with real privileges; the rebellion was about wanting more, not about justice. Moses' refusal to defend himself is striking \u2014 he lets God settle whose calling is whose. The story asks an uncomfortable question about motives: whether a challenge to leadership flows from genuine concern or from envy wearing concern's vocabulary." },
    { id:42, book:"Numbers", title:"Water from the rock at Meribah", side:"c",
      passage: "With no water at Kadesh, the people quarreled bitterly with Moses. God told Moses to speak to the rock, and it would pour out water. But Moses, angry, struck the rock twice with his staff instead, saying \u201cmust we fetch you water out of this rock?\u201d Water flowed anyway, but God told Moses that because he did not trust and honor Him before the people, he would not lead Israel into the land.",
      keyVerses: [
        { ref: "Numbers 20:12", text: "Because you did not trust me enough to honor me as holy in the sight of the Israelites, you will not bring this community into the land." }
      ],
      questions: [
        { q:"What had God told Moses to do at the rock?", opts:["Strike it twice", "Speak to it", "Dig beneath it"], correct:1, explain:"This time the instruction was to speak \u2014 Moses' striking it in anger went beyond what God commanded." },
        { q:"What did Moses' words \u2018must we fetch you water\u2019 wrongly suggest?", opts:["That Moses and Aaron were the source of the miracle", "That the people deserved the water", "That the rock was ordinary"], correct:0, explain:"In his anger Moses took credit that belonged to God, misrepresenting Him before the whole nation." },
        { q:"What consequence did Moses receive?", opts:["He was removed immediately", "He would not lead Israel into the promised land", "He lost his staff"], correct:1, explain:"After forty years of leadership, this failure of trust and honor before the people cost Moses the destination itself." }
      ],
      deepDive: "This is one of the Bible's most sobering leadership stories: the man who confronted Pharaoh, parted the sea, and interceded on Sinai loses the promised land over one public moment of anger and self-credit. The severity only makes sense given the stakes \u2014 Moses represented God to a whole nation, and in that moment he represented Him falsely, as angry and as sharing credit with men. The water still flowed, because God's provision didn't depend on Moses' behavior. Grace for the people and consequence for the leader arrive in the same miracle." },
    { id:43, book:"Numbers", title:"The bronze serpent", side:"l",
      passage: "When the people spoke against God and Moses yet again, venomous serpents came among them and many died. The people confessed their sin and asked Moses to pray. God told Moses to make a bronze serpent and set it on a pole: everyone who was bitten could look at it and live.",
      keyVerses: [
        { ref: "Numbers 21:9", text: "Then when anyone was bitten by a snake and looked at the bronze snake, they lived." }
      ],
      questions: [
        { q:"What did God tell Moses to make?", opts:["A bronze serpent set on a pole", "A golden altar", "A new staff"], correct:0, explain:"The remedy strangely resembled the affliction \u2014 lifted up where anyone could see it." },
        { q:"What did a bitten person have to do to live?", opts:["Perform a sacrifice", "Look at the bronze serpent", "Touch the pole"], correct:1, explain:"No ritual, no payment, no journey \u2014 just a look of trust toward the remedy God provided." },
        { q:"What did the people do before the remedy was given?", opts:["Confessed their sin and asked Moses to pray", "Fled the camp", "Blamed the serpents on Egypt"], correct:0, explain:"The turning point was honest confession \u2014 the remedy followed repentance." }
      ],
      deepDive: "The bronze serpent is one of the strangest remedies in the Bible: healing came by looking at an image of the very thing that was killing them, lifted up for all to see. The simplicity is the point \u2014 no one earned healing, they just looked in trust at what God provided. Centuries later, Jesus used exactly this scene to explain His own death: \u2018as Moses lifted up the serpent in the wilderness, even so must the Son of man be lifted up.\u2019 The pattern held \u2014 the remedy lifted up, and life for everyone who looks." },
    { id:44, book:"Numbers", title:"Balaam and the talking donkey", side:"r",
      passage: "Balak, king of Moab, feared Israel and hired the prophet Balaam to curse them. On the road, Balaam's donkey saw the angel of the Lord blocking the way and refused to go on \u2014 then spoke when Balaam beat her. Balaam's eyes were opened, and when he later opened his mouth over Israel, only blessings came out, for he could speak only what God put in his mouth.",
      keyVerses: [
        { ref: "Numbers 23:19", text: "God is not human, that he should lie... Does he speak and then not act? Does he promise and not fulfill it?" }
      ],
      questions: [
        { q:"Why did Balak hire Balaam?", opts:["To bless his crops", "To curse Israel", "To lead his army"], correct:1, explain:"Balak hoped a prophet's curse could weaken the people he was afraid to fight." },
        { q:"What did the donkey see that Balaam could not?", opts:["The angel of the Lord blocking the road", "A river ahead", "Balak's army"], correct:0, explain:"The humor is intentional \u2014 the famous seer is blind to what his donkey sees plainly." },
        { q:"What happened when Balaam tried to speak over Israel?", opts:["Only blessings came out", "The curse worked", "He lost his voice"], correct:0, explain:"Three times Balak paid for curses, and three times Balaam could only bless \u2014 God's word could not be bought." }
      ],
      deepDive: "The Balaam story runs on irony: a professional seer who can't see what his donkey sees, a hired curse that turns into blessing three times over, a pagan king funding oracle after oracle only to hear Israel praised. Beneath the comedy is a serious claim \u2014 God's blessing on His people cannot be reversed by payment, politics, or spiritual technique. Balaam's oracles even include one of the Old Testament's early messianic glimpses: \u2018there shall come a Star out of Jacob.\u2019 The nations scheming against Israel end up prophesying its future glory." },
    { id:45, book:"Deuteronomy", title:"Moses retells the journey", side:"c",
      passage: "On the plains of Moab, within sight of the promised land, Moses gathered the new generation and retold their story: Sinai, the spies' failure, the forty years, and God's faithfulness through all of it. He urged them to remember what their eyes had seen and to teach it to their children, so the story would not die with them.",
      keyVerses: [
        { ref: "Deuteronomy 1:31", text: "The LORD your God carried you, as a father carries his son, all the way you went." }
      ],
      questions: [
        { q:"Where does Deuteronomy take place?", opts:["Mount Sinai", "On the plains of Moab, at the edge of the promised land", "In Egypt"], correct:1, explain:"The whole book is Moses' farewell address, given just before Israel finally crosses in." },
        { q:"Who was Moses speaking to?", opts:["The generation that left Egypt", "The new generation raised in the wilderness", "Only the priests"], correct:1, explain:"The parents who refused the land had died out \u2014 their children now stood where they once stood." },
        { q:"What did Moses urge them to do with their story?", opts:["Keep it secret", "Remember it and teach it to their children", "Write it on the city gates only"], correct:1, explain:"Deuteronomy is obsessed with memory \u2014 faith one generation deep is always one generation from disappearing." }
      ],
      deepDive: "Deuteronomy is essentially a sermon \u2014 Moses' last words to a generation about to receive what their parents forfeited. The retelling isn't nostalgia; it's formation. This generation didn't stand at Sinai as adults, so Moses hands them their own history and says: this is your story too, remember it or lose everything it built. The book's central anxiety is forgetfulness \u2014 that prosperity in the land will erase the memory of dependence in the wilderness. Its answer is deliberate, repeated, taught remembrance." },
    { id:46, book:"Deuteronomy", title:"The Shema \u2014 love the Lord", side:"l",
      passage: "\u201cHear, O Israel: The Lord our God, the Lord is one. Love the Lord your God with all your heart, with all your soul, and with all your strength.\u201d Moses told them to keep these words on their hearts, teach them diligently to their children, and talk of them at home and on the road, morning and night.",
      keyVerses: [ { ref: "Deuteronomy 6:4\u20135", text: "Hear, O Israel: The LORD our God, the LORD is one. Love the LORD your God with all your heart, with all your soul, and with all your strength." } ],
      questions: [
        { q:"What does \u2018Shema\u2019 \u2014 the first word \u2014 mean?", opts:["Hear", "Obey the king", "Sacrifice"], correct:0, explain:"\u2018Hear, O Israel\u2019 \u2014 the Shema became the daily confession at the very center of Jewish faith and prayer." },
        { q:"How were the people told to love God?", opts:["With rituals only", "With all their heart, soul, and might", "Only on holy days"], correct:1, explain:"Total love \u2014 nothing held back \u2014 is the covenant's core command, before any list of rules." },
        { q:"Where were these words to be taught and discussed?", opts:["Only at the Tabernacle", "At home, on the road, morning and night", "Only by priests"], correct:1, explain:"Faith was designed to live in ordinary conversation and family rhythms, not just formal worship." }
      ],
      deepDive: "The Shema is the closest thing the Old Testament has to a creed, and Jesus called its command the greatest in all Scripture. Its order matters: before Israel is told to do anything, they're told who God is (one, theirs) and what He asks first (love, total and undivided). Everything else in the law is downstream of this. The teaching instructions are equally radical \u2014 the primary classroom for faith isn't the sanctuary but the home, the walk, the bedtime, the breakfast table. Faith that lives only in official spaces, Deuteronomy implies, doesn't survive." },
    { id:47, book:"Deuteronomy", title:"Not because you were mighty", side:"r",
      passage: "Moses told Israel plainly why God chose them: not because they were more numerous than other nations, for they were the fewest, but because the Lord loved them and kept the oath He swore to their ancestors. And he warned them: when you prosper in the land, do not say \u201cmy own power and the strength of my hands have gained me this wealth.\u201d",
      keyVerses: [
        { ref: "Deuteronomy 7:7\u20138", text: "The LORD did not set his affection on you and choose you because you were more numerous than other peoples... but because the LORD loved you." }
      ],
      questions: [
        { q:"Why did God choose Israel, according to Moses?", opts:["Because they were the largest nation", "Because He loved them and kept His promise to their ancestors", "Because they were the most righteous"], correct:1, explain:"The choosing rested entirely on God's love and faithfulness \u2014 not on anything impressive about Israel." },
        { q:"What danger did Moses warn would come with prosperity?", opts:["Foreign invasion", "Claiming \u2018my own power earned all this\u2019", "Running out of food"], correct:1, explain:"Success has a way of erasing the memory of grace \u2014 Moses names self-congratulation as the great danger of comfort." },
        { q:"How did Israel's size compare to other nations?", opts:["They were the fewest", "They were the largest", "About average"], correct:0, explain:"God's pattern throughout Scripture is choosing the small and unlikely, so the credit is unmistakably His." }
      ],
      deepDive: "These chapters dismantle every version of the idea that blessing is earned. Israel was chosen while small, rescued while enslaved, and warned that their coming prosperity would tempt them to rewrite the story as self-made success. The warning is timeless: gratitude has a short memory, and comfort quietly converts gifts into achievements. Moses' remedy is honest history \u2014 you were slaves, you were few, you were loved first. Identity built on grace received, not merit earned, is Deuteronomy's foundation for a healthy nation and a healthy soul." },
    { id:48, book:"Deuteronomy", title:"Blessings and curses", side:"c",
      passage: "Moses set before Israel the two paths of the covenant: obedience leading to blessing in the land, and rebellion leading to curse and eventually exile from it. The tribes were to stand on two mountains, Gerizim and Ebal, and hear the blessings and curses read aloud, answering \u201cAmen\u201d \u2014 so no one could say they hadn't been told.",
      keyVerses: [
        { ref: "Deuteronomy 27:26", text: "Cursed is anyone who does not uphold the words of this law by carrying them out. Then all the people shall say, \u2018Amen!\u2019" }
      ],
      questions: [
        { q:"What were the two paths Moses set before Israel?", opts:["Wealth and poverty", "Blessing through obedience, curse through rebellion", "War and peace"], correct:1, explain:"The covenant had real consequences in both directions \u2014 Israel's future in the land depended on faithfulness." },
        { q:"What were the people to answer as the words were read?", opts:["Nothing", "\u2018Amen\u2019", "A war cry"], correct:1, explain:"Saying \u2018Amen\u2019 made every person a witness to the covenant \u2014 they agreed to its terms out loud." },
        { q:"What was the ultimate consequence of persistent rebellion?", opts:["Higher taxes", "Exile from the land", "Nothing serious"], correct:1, explain:"Centuries later, the prophets would point back to these very chapters when exile actually came." }
      ],
      deepDive: "The blessings and curses read like a legal ceremony because they are one \u2014 a covenant formally ratified with the whole nation as witnesses. What's sobering is how precisely the curse section predicts Israel's actual future: siege, scattering, exile among the nations. When Babylon eventually destroyed Jerusalem, the prophets didn't treat it as random tragedy but as these chapters coming due. Yet even here, the covenant's logic isn't mechanical karma \u2014 it's relational. The land was the gift of a relationship, and abandoning the relationship meant losing the gift." },
    { id:49, book:"Deuteronomy", title:"Choose life", side:"l",
      passage: "Moses brought his appeal to its climax: \u201cI have set before you life and death, blessings and curses: now choose life, so that you and your children may live.\u201d The command, he said, was not too hard or too far away \u2014 not in heaven or across the sea \u2014 but very near, in their mouth and in their heart.",
      keyVerses: [
        { ref: "Deuteronomy 30:19", text: "I have set before you life and death, blessings and curses. Now choose life, so that you and your children may live." }
      ],
      questions: [
        { q:"What choice did Moses set before the people?", opts:["Life and death, blessing and cursing", "War and treaty", "Two different lands"], correct:0, explain:"Moses framed the whole covenant as one great decision, urged with a father's intensity: choose life." },
        { q:"Where did Moses say the command could be found?", opts:["In heaven, out of reach", "Across the sea", "Very near"], correct:2, explain:"Obedience wasn't an impossible quest \u2014 God had already brought His word within reach." },
        { q:"Who would benefit from choosing life?", opts:["Only the leaders", "The people and their children after them", "Only the priests"], correct:1, explain:"The choice echoed forward \u2014 each generation's faithfulness shaped the next one's inheritance." }
      ],
      deepDive: "\u2018Choose life\u2019 is Deuteronomy's whole message compressed into two words. Moses refuses to let covenant faith become fatalism \u2014 Israel's future isn't fixed by fate or feelings but decided by real choices available to ordinary people. His insistence that the command is \u2018not too hard, not far off\u2019 pushes back on every excuse of distance or difficulty: the word is already in your mouth and heart. Paul later quotes exactly this passage to describe faith itself. The nearness of God's word, and the weight of a genuine choice \u2014 that combination is Deuteronomy's parting gift." },
    { id:50, book:"Deuteronomy", title:"Be strong and courageous", side:"r",
      passage: "At one hundred and twenty years old, Moses summoned Joshua before all Israel and commissioned him to lead them into the land. \u201cBe strong and courageous,\u201d he told him, \u201cfor the Lord your God goes with you; he will never leave you nor forsake you.\u201d Moses then wrote down the law and commanded it to be read aloud to all the people every seven years.",
      keyVerses: [ { ref: "Deuteronomy 31:6", text: "Be strong and courageous. Do not be afraid... for the LORD your God goes with you; he will never leave you nor forsake you." } ],
      questions: [
        { q:"Who was commissioned to lead Israel after Moses?", opts:["Caleb", "Joshua", "Aaron"], correct:1, explain:"Joshua \u2014 one of the two faithful spies \u2014 had been Moses' aide for decades before this moment." },
        { q:"What was the basis for Joshua's courage?", opts:["His military skill", "That the Lord would go with him and never forsake him", "Israel's large army"], correct:1, explain:"The command to courage rested entirely on God's promised presence, not Joshua's qualifications." },
        { q:"What did Moses command to happen every seven years?", opts:["A new census", "The law read aloud to all the people", "A change of leaders"], correct:1, explain:"Regular public reading kept the covenant from becoming the private property of experts." }
      ],
      deepDive: "Leadership transitions are where movements usually die, and Moses knew it \u2014 so Joshua's commissioning happens publicly, before all Israel, with the ground of courage stated out loud: God goes with you. The words \u2018he will never leave you nor forsake you\u2019 became a promise quoted across the rest of Scripture. Just as important is the institution Moses creates alongside the successor: the law read aloud to everyone, every seven years, children included. The faith would be carried not by one irreplaceable leader but by a community that kept hearing its own covenant." },
    { id:51, book:"Deuteronomy", title:"The death of Moses", side:"c",
      passage: "Moses climbed Mount Nebo, and the Lord showed him the whole land \u2014 the promise he had carried for forty years but would not enter. Moses the servant of the Lord died there in Moab, and God Himself buried him; no one knows his grave to this day. He was one hundred and twenty years old, his eye not dim, and there arose no prophet since in Israel like him, whom the Lord knew face to face.",
      keyVerses: [
        { ref: "Deuteronomy 34:10", text: "Since then, no prophet has risen in Israel like Moses, whom the LORD knew face to face." }
      ],
      questions: [
        { q:"What did God show Moses from Mount Nebo?", opts:["The whole promised land", "The Red Sea", "Egypt in the distance"], correct:0, explain:"Moses saw with his eyes what he had believed for forty years \u2014 the promise was real, even though entering it belonged to others." },
        { q:"Who buried Moses?", opts:["Joshua", "The priests", "God Himself"], correct:2, explain:"The Bible's quiet, stunning detail: God personally buried His servant, in a grave no one has ever found." },
        { q:"How does Deuteronomy summarize Moses?", opts:["A failed leader", "A prophet the Lord knew face to face, unmatched in Israel", "A forgotten man"], correct:1, explain:"His epitaph centers not on his miracles but on his intimacy with God \u2014 known face to face." }
      ],
      deepDive: "Moses' death scene is one of the most tender passages in the Bible: a leader seeing the promise fulfilled for others but not himself, and a God who personally buries His friend on the mountain. The unmarked grave prevented a shrine \u2014 Israel's faith was to rest on God, not on venerating Moses. His epitaph, \u2018whom the Lord knew face to face,\u2019 names what actually made his life great: not the plagues, the sea, or Sinai, but the relationship underneath them all. The Torah ends here, on the edge of promise \u2014 the story deliberately unfinished, handed to the next generation." },
    { id:52, book:"Joshua", title:"Rahab and the spies", side:"r",
      passage: "Joshua sent two spies into Jericho, where Rahab hid them on her roof from the king's men. She confessed that all Jericho had heard what Israel's God did at the Red Sea, and their hearts had melted. The spies promised that when the city fell, everyone in her house marked by a scarlet cord in the window would be spared.",
      keyVerses: [
        { ref: "Joshua 1:9", text: "Be strong and courageous. Do not be afraid... for the LORD your God will be with you wherever you go." },
        { ref: "Joshua 1:8", text: "Keep this Book of the Law always on your lips; meditate on it day and night." }
      ],
      questions: [
        { q:"Who hid the spies in Jericho?", opts:["A priest of the city", "Rahab", "The king's servant"], correct:1, explain:"Rahab \u2014 an unlikely ally inside the enemy's walls \u2014 risked her life to protect Israel's spies." },
        { q:"What had Jericho already heard about?", opts:["Nothing at all", "What Israel's God did at the Red Sea", "Joshua's army size only"], correct:1, explain:"Forty years later, the Red Sea rescue was still making hearts melt inside fortified cities." },
        { q:"What sign marked Rahab's house for protection?", opts:["A scarlet cord in the window", "A white flag", "A carved doorpost"], correct:0, explain:"The scarlet cord echoes Passover \u2014 a visible sign marking a household for rescue." }
      ],
      deepDive: "Rahab is one of the Bible's great surprises: a Canaanite woman in a despised profession becomes a model of faith the New Testament names twice. Her confession shows something remarkable \u2014 Jericho had forty years of evidence about Israel's God and chose fear, while Rahab alone converted that evidence into trust. The scarlet cord marking her window deliberately recalls the Passover blood on the doorframes: rescue by faith, marked visibly. She wasn't just spared \u2014 she married into Israel and appears in the family line of David, and of Jesus." },
    { id:53, book:"Joshua", title:"Crossing the Jordan", side:"c",
      passage: "At flood stage, the Jordan River stopped flowing the moment the feet of the priests carrying the ark touched the water, and all Israel crossed on dry ground. Twelve stones were taken from the riverbed and set up as a memorial, so that when children asked \u201cWhat mean these stones?\u201d the story would be told again.",
      keyVerses: [
        { ref: "Joshua 4:24", text: "So that all the peoples of the earth might know that the hand of the LORD is powerful." }
      ],
      questions: [
        { q:"When did the Jordan's waters stop?", opts:["The night before", "When the priests carrying the ark stepped into the water", "After everyone crossed"], correct:1, explain:"The priests had to step into a flooding river first \u2014 the miracle met their obedience, not the other way around." },
        { q:"What were the twelve stones for?", opts:["Building a wall", "A memorial so children would ask and hear the story", "Weapons"], correct:1, explain:"The stones existed to provoke a question \u2014 remembrance was built to be conversational, passed to children." },
        { q:"What did the crossing echo from forty years earlier?", opts:["The Red Sea crossing", "The flood of Noah", "Jacob's ladder"], correct:0, explain:"A new generation got its own water-parting \u2014 proof that the God of their parents was theirs too." }
      ],
      deepDive: "The Jordan crossing is deliberately staged as the Red Sea all over again \u2014 but for the children of the wilderness, who had only heard the stories. Now they had their own. The detail that the priests had to step into the flood before the water stopped captures a pattern of faith throughout Scripture: the path opens after the first step, not before. And the memorial stones show how seriously this generation took Deuteronomy's warning about forgetting \u2014 they built the question \u2018what do these stones mean?\u2019 into the landscape itself, so the story would outlive them." },
    { id:54, book:"Joshua", title:"The fall of Jericho", side:"l",
      passage: "God's battle plan for Jericho was strange: march around the city once a day for six days in silence, then on the seventh day march seven times, blow the trumpets, and shout. Israel obeyed, the walls fell flat, and the city was taken. Rahab and her family were spared, just as the spies had promised.",
      keyVerses: [
        { ref: "Joshua 6:20", text: "The wall collapsed, and the people went up into the city... and they captured it." }
      ],
      questions: [
        { q:"What was Israel's strategy against Jericho's walls?", opts:["Siege towers", "Marching, trumpets, and a shout", "Tunneling underneath"], correct:1, explain:"The plan made no military sense \u2014 which was exactly the point. The victory would be unmistakably God's." },
        { q:"How many times did they march on the seventh day?", opts:["Once", "Seven times", "Twelve times"], correct:1, explain:"Six days of single laps, then seven circuits on the seventh day \u2014 obedience sustained past the point of feeling foolish." },
        { q:"Who was spared when the city fell?", opts:["No one", "Rahab and everyone in her house", "Only the king"], correct:1, explain:"The promise made to Rahab held \u2014 the scarlet cord marked her household for rescue." }
      ],
      deepDive: "Jericho's fall established the rule for the whole conquest: the land would be received, not merely won. Marching in silence for a week around a fortified city is a strategy designed to be inexplicable \u2014 no one could later credit Israel's tactics. The number seven saturates the story (seven days, seven priests, seven trumpets, seven laps), tying the victory to God's creation-week signature of completeness. And in the middle of judgment on the city stands Rahab's rescue \u2014 a reminder that faith, wherever it's found, is never overlooked." },
    { id:55, book:"Joshua", title:"Achan's hidden sin", side:"r",
      passage: "Against God's clear command, Achan secretly took silver, gold, and a beautiful garment from Jericho and buried them under his tent. Israel then suffered a shocking defeat at the small city of Ai. When God revealed the cause, Achan confessed, and the hidden things were dug up for all to see. Israel learned that one person's hidden sin had weakened the whole camp.",
      keyVerses: [
        { ref: "Joshua 7:20", text: "Achan replied, \u201cIt is true! I have sinned against the LORD, the God of Israel. This is what I did.\u201d" }
      ],
      questions: [
        { q:"What did Achan take from Jericho?", opts:["Nothing", "Silver, gold, and a garment that were devoted to God", "Only food"], correct:1, explain:"The plunder of Jericho was devoted to God \u2014 Achan treated the holy as personal profit." },
        { q:"How did Achan's sin first show itself?", opts:["Israel's surprising defeat at Ai", "A famine", "A storm"], correct:0, explain:"Israel assumed little Ai would be easy \u2014 the defeat revealed something was wrong inside the camp, not outside it." },
        { q:"What did the story teach Israel?", opts:["That small cities are dangerous", "That hidden sin affects more than the person hiding it", "That spies are unreliable"], correct:1, explain:"Achan buried it under his own tent, but the whole community felt the consequences." }
      ],
      deepDive: "Achan's story is the shadow side of Jericho: the same God whose power gave the victory takes the terms of it seriously. His confession traces sin's oldest anatomy \u2014 \u2018I saw, I coveted, I took, I hid\u2019 \u2014 the exact pattern of Eden replayed under a tent floor. The uncomfortable teaching is that hiddenness didn't contain the damage; a whole community lost a battle over one buried secret. Scripture keeps insisting that private compromise is never as private as it feels." },
    { id:56, book:"Joshua", title:"The Gibeonite deception", side:"c",
      passage: "The people of Gibeon, fearing Israel, dressed in worn-out clothes and carried moldy bread, pretending to be travelers from a far country. Israel examined their provisions but did not ask counsel of the Lord, and made a peace treaty with them. When the trick was discovered three days later, Israel kept the oath anyway, because it had been sworn in the Lord's name.",
      keyVerses: [
        { ref: "Joshua 9:14", text: "The Israelites sampled their provisions but did not inquire of the LORD." }
      ],
      questions: [
        { q:"How did the Gibeonites deceive Israel?", opts:["With a night attack", "By pretending to be travelers from a far country", "By bribing Joshua"], correct:1, explain:"Worn sandals, patched wineskins, moldy bread \u2014 a costume of long distance for people who lived nearby." },
        { q:"What crucial step did Israel skip?", opts:["Counting the bread", "Asking counsel of the Lord", "Checking their weapons"], correct:1, explain:"They examined the evidence but never prayed \u2014 the story's quiet warning about decisions made on appearances alone." },
        { q:"What did Israel do when the trick was discovered?", opts:["Broke the treaty immediately", "Kept the oath because it was sworn in the Lord's name", "Enslaved and expelled them"], correct:1, explain:"An oath in God's name bound them even when it was obtained by fraud \u2014 their word carried God's reputation." }
      ],
      deepDive: "The Gibeonite episode is a masterclass in how good people get fooled: the evidence looked convincing, the story was plausible, and nobody prayed. \u2018They asked not counsel at the mouth of the Lord\u2019 is the verse the whole chapter turns on. But the aftermath teaches something even bigger \u2014 Israel kept a promise that had been extracted by fraud, because it carried God's name. Generations later, God still held Israel to this oath. In Scripture's economy, your word given is your word kept, even when keeping it costs you." },
    { id:57, book:"Joshua", title:"The day the sun stood still", side:"l",
      passage: "When five Amorite kings attacked Gibeon, Israel marched all night to defend their new allies. God threw the enemy into confusion and hurled great hailstones on them. Then Joshua prayed boldly before all Israel: \u201cSun, stand still over Gibeon.\u201d And the sun stood still until the nation was avenged \u2014 a day like no other, when the Lord fought for Israel.",
      keyVerses: [
        { ref: "Joshua 10:13", text: "So the sun stood still... and delayed going down about a full day." }
      ],
      questions: [
        { q:"Why did Israel march to defend Gibeon?", opts:["For payment", "Because of the covenant they had sworn", "To capture the city"], correct:1, explain:"Israel honored the treaty at real cost \u2014 an all-night march into a five-king battle." },
        { q:"What did Joshua boldly ask for?", opts:["More soldiers", "For the sun to stand still", "A storm to end the battle"], correct:1, explain:"Joshua's prayer was spoken out loud before all Israel \u2014 staking everything on God answering publicly." },
        { q:"How does the chapter summarize the day?", opts:["Israel won by superior tactics", "The Lord fought for Israel", "It ended in a truce"], correct:1, explain:"Hailstones, confusion, and the long day all pointed one direction \u2014 this victory was God's doing." }
      ],
      deepDive: "This chapter contains what may be the boldest prayer in the Old Testament \u2014 asked out loud, in public, with no escape route if nothing happened. The context makes it richer: Israel was fighting to protect Gibeonites who had deceived them, honoring a covenant that cost them an all-night march. The narrator's summary is the point of the whole conquest: \u2018the Lord fought for Israel.\u2019 Whatever questions people bring to the sun standing still, the story's own emphasis is on a God so committed to His people that Joshua felt free to ask for the impossible." },
    { id:58, book:"Joshua", title:"Caleb's mountain", side:"r",
      passage: "At eighty-five years old, Caleb came to Joshua and recalled the promise Moses made forty-five years earlier, when the two of them alone had believed God at Kadesh. \u201cI am still as strong today as I was the day Moses sent me out,\u201d he said. \u201cNow give me this mountain.\u201d And Hebron, the land of the giants that had terrified the spies, became his inheritance.",
      keyVerses: [
        { ref: "Joshua 14:11", text: "I am still as strong today as I was the day Moses sent me out... to go out to war." }
      ],
      questions: [
        { q:"How old was Caleb when he claimed his inheritance?", opts:["Forty", "Sixty", "Eighty-five"], correct:2, explain:"Forty-five years after the spy mission, Caleb's faith hadn't aged \u2014 he asked for the hardest ground available." },
        { q:"What did Caleb ask for?", opts:["The easiest valley", "The mountain where the giants lived", "A city already conquered"], correct:1, explain:"Hebron was giant country \u2014 the exact fear that broke his generation was the inheritance he wanted most." },
        { q:"What had set Caleb apart at Kadesh years earlier?", opts:["He and Joshua alone believed God could give them the land", "He was the strongest fighter", "He was the oldest spy"], correct:0, explain:"Caleb \u2018followed the Lord wholeheartedly\u2019 \u2014 the phrase repeats through his story like a signature." }
      ],
      deepDive: "Caleb's request is one of the Old Testament's finest portraits of finishing well. He had carried a promise silently through forty years of other people's punishment \u2014 wandering a wilderness he never earned \u2014 without bitterness curdling his faith. At eighty-five, given his pick of the conquered land, he asks for the giants' mountain: the very thing that terrified his generation is the thing he's been waiting his whole life to face. The phrase that trails him through Scripture \u2014 \u2018he followed the Lord wholeheartedly\u2019 \u2014 suggests the real inheritance was the wholeheartedness itself." },
    { id:59, book:"Joshua", title:"Choose you this day", side:"c",
      passage: "Old and near death, Joshua gathered all Israel at Shechem and retold their whole story, from Abraham to the conquest, as God's own words: \u201cI gave you a land you did not labor for.\u201d Then he set the choice before them: \u201cChoose for yourselves this day whom you will serve... but as for me and my household, we will serve the Lord.\u201d The people vowed to serve the Lord, and Joshua set up a great stone as a witness.",
      keyVerses: [
        { ref: "Joshua 24:15", text: "Choose for yourselves this day whom you will serve... but as for me and my household, we will serve the LORD." },
        { ref: "Joshua 21:45", text: "Not one of all the LORD\u2019s good promises failed; every one was fulfilled." }
      ],
      questions: [
        { q:"What did Joshua's farewell speech mostly consist of?", opts:["Military strategy", "Retelling Israel's whole story as God's doing", "New laws"], correct:1, explain:"Like Moses before him, Joshua's last act was handing the people their own story \u2014 with God as its main character." },
        { q:"What choice did Joshua set before Israel?", opts:["Which tribe should rule", "Whom they would serve", "Where to build the temple"], correct:1, explain:"\u2018Choose for yourselves this day whom you will serve\u2019 \u2014 faith, for Joshua, was a decision renewed, not an inheritance assumed." },
        { q:"What was Joshua's own declaration?", opts:["\u2018As for me and my house, we will serve the Lord\u2019", "\u2018Let each man decide alone\u2019", "\u2018The battle is over\u2019"], correct:0, explain:"Still quoted on doorposts today \u2014 Joshua answered his own challenge first, for his whole household." }
      ],
      deepDive: "Joshua's farewell deliberately mirrors Moses' \u2014 story first, then choice \u2014 because covenant faith has to be re-chosen by every generation or it dies. His famous line pairs two things modern readers often separate: personal conviction (\u2018as for me\u2019) and household leadership (\u2018and my house\u2019). Joshua doesn't force Israel's decision, but he's already made his own, publicly, before asking for theirs. The book that began with \u2018be strong and courageous\u2019 ends with the quieter courage of commitment \u2014 a stone set up as witness, and a generation that kept faith all of Joshua's days." },
    { id:60, book:"Judges", title:"The cycle begins", side:"l",
      passage: "After Joshua's generation died, a generation arose that did not know the Lord nor what He had done for Israel. A grim cycle began: Israel did evil and served other gods, enemies oppressed them, they cried out to the Lord, He raised up a judge to deliver them \u2014 and when the judge died, they returned to worse corruption than before.",
      keyVerses: [
        { ref: "Judges 2:10", text: "After that whole generation had passed away, another generation grew up who knew neither the LORD nor what he had done for Israel." }
      ],
      questions: [
        { q:"What happened after Joshua's generation died?", opts:["Israel grew stronger in faith", "A generation arose that knew not the Lord", "The temple was built"], correct:1, explain:"One generation's failure to pass the story on \u2014 the exact thing Moses and Joshua warned about \u2014 set the whole era's tone." },
        { q:"What is the repeating cycle of Judges?", opts:["Sin, oppression, crying out, deliverance", "War, peace, war", "Kings rising and falling"], correct:0, explain:"The cycle repeats through the whole book, spiraling downward each time." },
        { q:"Who raised up the judges?", opts:["The people elected them", "The Lord raised them up as deliverers", "Neighboring kings appointed them"], correct:1, explain:"The judges weren't courtroom officials but rescuers \u2014 raised up by God in response to Israel's cries." }
      ],
      deepDive: "Judges 2 hands you the key to the whole book before the stories begin: a cycle of forgetting, suffering, crying out, and rescue that repeats like a broken record \u2014 except it's not a circle, it's a spiral downward. Each generation's rock bottom becomes the next one's starting point. The chilling first line of the era \u2014 a generation \u2018who did not know the Lord\u2019 \u2014 is Deuteronomy's nightmare come true: the story wasn't told, so the story was lost. Yet the cycle also reveals something stubborn about God: every single time they cried out, He answered. Judges is simultaneously the Bible's bleakest book and a long record of mercy that wouldn't quit." },
    { id:61, book:"Judges", title:"Deborah and Barak", side:"r",
      passage: "Deborah, a prophetess, judged Israel under a palm tree in the hill country. She summoned Barak with God's command to face Sisera's nine hundred iron chariots, but Barak would only go if she went with him. \u201cI will surely go with you,\u201d she said, \u201cbut because of the way you are going about this, the honor will not be yours, for the Lord will deliver Sisera into the hands of a woman.\u201d God routed the chariots, and Sisera fell \u2014 in the tent of a woman named Jael.",
      keyVerses: [
        { ref: "Judges 4:14", text: "Go! This is the day the LORD has given Sisera into your hands. Has not the LORD gone ahead of you?" }
      ],
      questions: [
        { q:"Who was judging Israel in this era?", opts:["Barak", "Deborah, a prophetess", "Gideon"], correct:1, explain:"Deborah led Israel as both prophet and judge \u2014 people came up to her palm tree for judgment." },
        { q:"What was Barak's condition for going to battle?", opts:["More chariots", "That Deborah go with him", "Payment in silver"], correct:1, explain:"Barak wanted the prophet beside him \u2014 and Deborah agreed, while telling him the honor would go to a woman." },
        { q:"What was Israel facing in Sisera's army?", opts:["Nine hundred iron chariots", "A navy", "Ten thousand archers"], correct:0, explain:"Iron chariots were the era's overwhelming military technology \u2014 which made the victory unmistakably God's." }
      ],
      deepDive: "Deborah stands out in the ancient world: a woman leading a nation as prophet and judge, so trusted that Israel's general refused to fight without her. Her response to Barak is graceful and pointed at once \u2014 she'll go, but the story's glory will belong to a woman, a prophecy fulfilled in the unexpected figure of Jael. The victory song that follows in chapter 5 is among the oldest poetry in the Bible. In a book about Israel's spiraling failure, this chapter shines: when the men God calls hesitate, God's work doesn't stall \u2014 it just finds the willing." },
    { id:62, book:"Judges", title:"Gideon and the fleece", side:"c",
      passage: "The angel of the Lord found Gideon threshing wheat in a winepress, hiding from the Midianites, and greeted him: \u201cThe Lord is with you, mighty warrior.\u201d Gideon objected that his clan was the weakest and he the least in his father's house. Twice he asked for a sign with a wool fleece \u2014 wet when the ground was dry, then dry when the ground was wet \u2014 and God patiently gave both.",
      keyVerses: [
        { ref: "Judges 6:12", text: "The LORD is with you, mighty warrior." }
      ],
      questions: [
        { q:"Where did the angel find Gideon?", opts:["Leading an army", "Threshing wheat in a winepress, hiding", "In the tabernacle"], correct:1, explain:"Threshing in a winepress \u2014 a hole in the ground \u2014 was the posture of fear. The greeting \u2018mighty warrior\u2019 named what he'd become, not what he was." },
        { q:"How did Gideon describe himself?", opts:["The strongest in Israel", "The least in the weakest clan", "A trained soldier"], correct:1, explain:"Gideon's list of qualifications was emptiness \u2014 which fits God's pattern of choosing the unlikely so the credit is clear." },
        { q:"How did God respond to the fleece requests?", opts:["With anger", "He patiently gave both signs", "He refused"], correct:1, explain:"God met Gideon's fragile faith where it was \u2014 twice \u2014 rather than demanding it arrive fully formed." }
      ],
      deepDive: "Gideon's call is a study in how God sees people: an angel addresses a man hiding in a hole as \u2018mighty warrior,\u2019 naming the future into the present. His fleece tests are often preached against as weak faith \u2014 and they were \u2014 but the striking thing is God's patience with them. No rebuke, just two quiet answers to a scared man's need for certainty. Scripture's honest portrait here comforts anyone whose faith starts small: God's calls are based on what He intends to make of someone, not on the confidence they can currently produce." },
    { id:63, book:"Judges", title:"Gideon's three hundred", side:"l",
      passage: "Gideon gathered thirty-two thousand men, but God said the army was too big: \u201cin order that Israel may not boast, \u2018My own strength has saved me.\u2019\u201d The fearful went home; a water-drinking test cut the rest to three hundred. Armed with only trumpets, empty pitchers, and torches, they surrounded the Midianite camp at night, and the enemy fled in panic before a battle was ever fought.",
      keyVerses: [
        { ref: "Judges 7:2", text: "So that Israel may not boast that her own strength saved her." }
      ],
      questions: [
        { q:"Why did God shrink Gideon's army?", opts:["To save food", "So Israel couldn't claim they saved themselves", "Because the men were untrained"], correct:1, explain:"Thirty-two thousand could take the credit; three hundred could only point to God." },
        { q:"What weapons did the three hundred carry?", opts:["Swords and shields", "Trumpets, pitchers, and torches", "Bows and spears"], correct:1, explain:"Light and sound, not blades \u2014 the Midianites defeated themselves in the panic." },
        { q:"What happened in the Midianite camp?", opts:["A long siege", "Panic", "A negotiated surrender"], correct:1, explain:"The victory was won by confusion God sent, not by combat \u2014 exactly as designed." }
      ],
      deepDive: "The whittling of Gideon's army is one of Scripture's clearest statements about how God works: the odds are deliberately made impossible so the outcome can't be misread. Thirty-two thousand against Midian was a fight; three hundred with kitchenware was a testimony. God names the danger explicitly \u2014 \u2018so that Israel may not boast\u2019 \u2014 the same warning Deuteronomy gave about prosperity. The strategy of torches hidden in pitchers, suddenly revealed, became a favorite image for later writers: unimpressive vessels, broken open, blazing with light that was never theirs." },
    { id:64, book:"Judges", title:"Samson's calling", side:"r",
      passage: "To a childless couple, the angel of the Lord announced a son who would begin to deliver Israel from the Philistines. He was to be a Nazirite from birth \u2014 no wine, no razor to his head, set apart to God. Samson grew, and the Spirit of the Lord began to move him. His strength became legendary: he tore a lion apart with his bare hands and struck down a thousand Philistines with the jawbone of a donkey.",
      keyVerses: [
        { ref: "Judges 13:5", text: "He will take the lead in delivering Israel from the hands of the Philistines." }
      ],
      questions: [
        { q:"What was Samson set apart as from birth?", opts:["A priest", "A Nazirite", "A king"], correct:1, explain:"The Nazirite vow (from Numbers) was usually temporary and voluntary \u2014 Samson's was lifelong and God-assigned." },
        { q:"Where did Samson's strength come from?", opts:["His training", "The Spirit of the Lord moving on him", "A magic weapon"], correct:1, explain:"The text repeatedly credits the Spirit, not muscle \u2014 the hair was the sign of the vow, not the power source itself." },
        { q:"Whom was Samson raised up to confront?", opts:["The Midianites", "The Philistines", "Egypt"], correct:1, explain:"The Philistines dominated Israel in this era \u2014 Samson would \u2018begin\u2019 a deliverance others would finish." }
      ],
      deepDive: "Samson is the strangest of the judges \u2014 a one-man army with a lifelong sacred vow he treats carelessly at almost every turn. His story is deliberately told as wasted potential: miraculous birth, divine calling, supernatural power, and a character that never grows to match the gifts. Yet the text insists the Spirit was the source of every feat, which raises the story's uncomfortable question: God's gifts operating in a life without God's character. Samson \u2018began\u2019 to deliver Israel, the angel said \u2014 an honest word for a hero who never finished anything, until the very end." },
    { id:65, book:"Judges", title:"Samson and Delilah", side:"c",
      passage: "The Philistines paid Delilah to discover the secret of Samson's strength. Three times he gave her false answers; three times she tried to betray him. Worn down by her daily pressing, he finally told her everything: his hair had never been cut because of his vow. She had it shaved as he slept, and \u201che wist not that the Lord was departed from him.\u201d Blinded and imprisoned, his hair began to grow again \u2014 and in his final act, he pulled down the temple of Dagon, praying, \u201cO Lord God, remember me.\u201d",
      keyVerses: [
        { ref: "Judges 16:20", text: "He did not know that the LORD had left him." }
      ],
      questions: [
        { q:"What should the three failed betrayals have told Samson?", opts:["That Delilah could be trusted", "That Delilah was actively working to destroy him", "Nothing important"], correct:1, explain:"He watched her use each answer against him and stayed anyway \u2014 the blindness began long before his eyes were taken." },
        { q:"What is the saddest line of the story?", opts:["\u2018He wist not that the Lord was departed from him\u2019", "\u2018The Philistines took him\u2019", "\u2018His hair was shaved\u2019"], correct:0, explain:"Presence lost so gradually that its absence went unnoticed \u2014 the vow had been eroding for years." },
        { q:"How did Samson's story end?", opts:["He escaped and lived quietly", "In prayer", "The Philistines released him"], correct:1, explain:"\u2018Remember me\u2019 \u2014 his first recorded dependence on God \u2014 was answered. The text notes he accomplished more in his death than in his life." }
      ],
      deepDive: "Samson's fall is a slow leak, not a sudden break \u2014 the vow had been treated carelessly for years before Delilah, and the terrifying line is that when the Lord departed, Samson couldn't tell the difference. But the ending refuses to be only tragedy. Blind, humiliated, grinding grain for his enemies' amusement, Samson finally does what he never did in strength: he prays. \u2018Remember me\u2019 \u2014 and God does. The New Testament lists Samson among the heroes of faith, which says less about Samson's record and more about a God who answers even a ruined man's first honest prayer." },
    { id:66, book:"Judges", title:"No king in Israel", side:"l",
      passage: "The final chapters of Judges descend into Israel's darkest stories \u2014 idolatry, violence, and civil war. Over them hangs the book's refrain, repeated like a diagnosis: \u201cIn those days there was no king in Israel: every man did that which was right in his own eyes.\u201d",
      keyVerses: [ { ref: "Judges 21:25", text: "In those days Israel had no king; everyone did as they saw fit." } ],
      questions: [
        { q:"What is the closing refrain of Judges?", opts:["\u2018The Lord reigned in Zion\u2019", "\u2018Every man did that which was right in his own eyes\u2019", "\u2018Peace covered the land\u2019"], correct:1, explain:"The line appears repeatedly in the final chapters \u2014 the book's own diagnosis of the era." },
        { q:"What do the final chapters of Judges depict?", opts:["Israel's golden age", "The nation's moral collapse into idolatry and civil war", "The building of the temple"], correct:1, explain:"The book ends at rock bottom on purpose \u2014 showing exactly where \u2018right in his own eyes\u2019 leads." },
        { q:"What does the refrain prepare readers for?", opts:["The story of Israel's kings, beginning in the books of Samuel", "The flood", "The exile to Egypt"], correct:0, explain:"Judges ends by aching for godly leadership \u2014 the question the books of Samuel and Ruth begin to answer." }
      ],
      deepDive: "Judges ends with its thesis: when every person becomes their own standard of right, the result isn't freedom but chaos \u2014 and the book's final chapters spare no detail in proving it. The refrain \u2018no king in Israel\u2019 works on two levels: Israel lacked earthly leadership, but deeper down, the people had stopped treating God as King. What reads as ancient history doubles as a mirror \u2014 \u2018right in his own eyes\u2019 is a permanently modern temptation. The book leaves readers longing for a king with a heart after God \u2014 which is exactly where the story goes next." },
    { id:67, book:"Ruth", title:"Wherever you go", side:"r",
      passage: "In the days of the judges, famine drove Naomi's family to Moab, where her husband and both sons died. Returning to Bethlehem empty, she urged her widowed daughters-in-law to stay behind. Orpah went back, but Ruth clung to her: \u201cWhere you go, I will go... your people will be my people, and your God my God.\u201d Naomi came home so broken she asked to be called Mara \u2014 \u201cbitter.\u201d",
      keyVerses: [ { ref: "Ruth 1:16", text: "Where you go, I will go, and where you stay, I will stay. Your people will be my people, and your God my God." } ],
      questions: [
        { q:"What had Naomi lost in Moab?", opts:["Her land only", "Her husband and both sons", "Her faith entirely"], correct:1, explain:"Naomi returned with nothing but grief and one loyal daughter-in-law \u2014 \u2018I went away full, and the Lord has brought me back empty.\u2019" },
        { q:"What did Ruth's famous vow include?", opts:["Only staying until the harvest", "Naomi's people and Naomi's God becoming her own", "A promise to return to Moab yearly"], correct:1, explain:"Ruth, a Moabite, bound herself to Naomi, to Israel, and to Israel's God \u2014 for life." },
        { q:"What name did Naomi ask for on arrival?", opts:["Mara, meaning bitter", "Joy", "Deborah"], correct:0, explain:"The book is honest about grief \u2014 Naomi's bitterness is stated, not scolded, and the story works its healing slowly." }
      ],
      deepDive: "Ruth opens where Judges left off \u2014 same lawless era \u2014 but zooms from national chaos to one shattered household, as if to say God's faithfulness works at kitchen-table scale too. Ruth's vow is among the most beautiful loyalty pledges ever written, and it's spoken by a Moabite \u2014 an outsider from a nation Israel was told to keep at distance \u2014 choosing Israel's God with nothing to gain. Naomi's honest bitterness matters just as much: the book lets grief speak in its own voice, then spends three chapters quietly answering it. Emptiness is where this story starts, not where it ends." },
    { id:68, book:"Ruth", title:"Gleaning in Boaz's field", side:"c",
      passage: "Ruth went out to glean leftover grain behind the harvesters \u2014 the provision Israel's law commanded for the poor \u2014 and, as it happened, she found herself in the field of Boaz, a relative of Naomi's husband. Boaz noticed her, had heard of her kindness to Naomi, and quietly ensured her protection and extra grain: \u201cMay the Lord repay you for what you have done... under whose wings you have come to take refuge.\u201d",
      keyVerses: [
        { ref: "Ruth 2:12", text: "May the LORD repay you for what you have done... under whose wings you have come to take refuge." }
      ],
      questions: [
        { q:"What was gleaning?", opts:["Stealing from fields", "Gathering leftover grain", "A harvest festival"], correct:1, explain:"The command from Leviticus \u2014 leave the edges and leftovers for the poor and the foreigner \u2014 is exactly what feeds Ruth." },
        { q:"How does the text describe Ruth finding Boaz's field?", opts:["An angel led her", "\u2018As it happened\u2019 she found it", "Naomi drew her a map"], correct:1, explain:"The storyteller winks: what looks like luck is God's quiet steering \u2014 the book's signature move." },
        { q:"What image did Boaz use for Ruth's new faith?", opts:["A fortress", "Coming to trust under the Lord's wings", "A burning lamp"], correct:1, explain:"Refuge under God's wings \u2014 an image Boaz himself will be asked to embody in the next chapter." }
      ],
      deepDive: "This chapter is Leviticus 19 wearing work clothes: the gleaning laws we studied as commands now appear as a widow's actual lunch. Boaz shows what the law looks like when someone keeps its spirit generously \u2014 protection ordered, extra grain deliberately dropped, dignity preserved. And the narrator's sly phrase \u2018as it happened\u2019 she found Boaz's field teaches the book's theology of providence: no miracles anywhere in Ruth, just \u2018coincidences\u2019 that keep landing exactly where love needs them to. God's most common way of working, the book suggests, is invisibly, through ordinary kindness and improbable timing." },
    { id:69, book:"Ruth", title:"The kinsman-redeemer", side:"l",
      passage: "Naomi revealed that Boaz was a kinsman-redeemer \u2014 a relative with the right to restore a ruined family's land and line. At the threshing floor, Ruth asked him to spread his garment over her, invoking that role. Boaz, honored, called her a virtuous woman \u2014 but revealed a nearer kinsman had first right. At the city gate, before witnesses, the nearer man declined, sealing it by drawing off his sandal, and Boaz redeemed all.",
      keyVerses: [
        { ref: "Ruth 3:9", text: "Spread the corner of your garment over me, since you are a guardian-redeemer of our family." }
      ],
      questions: [
        { q:"What was a kinsman-redeemer?", opts:["A tax collector", "A relative with the right to restore a ruined family's land and line", "A priest"], correct:1, explain:"The \u2018goel\u2019 could buy back family land and marry a childless widow to continue the family name \u2014 rescue built into Israel's law." },
        { q:"What did Ruth's request \u2014 spread your garment over me \u2014 mean?", opts:["A request for a coat", "A request for marriage and protection under the redeemer's role", "A secret code for escape"], correct:1, explain:"Her words echo Boaz's own blessing about the Lord's wings \u2014 she asks Boaz to be the answer to his own prayer." },
        { q:"How was the redemption made official?", opts:["A midnight oath", "Before witnesses at the city gate, sealed by the sandal custom", "A letter to the king"], correct:1, explain:"Boaz did everything honorably and publicly \u2014 the nearer kinsman's declined right made the redemption legally clean." }
      ],
      deepDive: "The kinsman-redeemer law turns this love story into theology: in Israel, rescue was a family obligation \u2014 someone close enough, willing enough, and able enough to buy back what was lost. Ruth's midnight request is bold but chaste, and her wording is the book's masterstroke: she asks Boaz to spread his \u2018wing\u2019 over her, the very word he'd used for God's refuge. Sometimes, the book implies, we are the wings we pray for others to find. \u2018Redeemer\u2019 became one of the Bible's great titles for God Himself \u2014 and this small-town legal drama is its clearest picture." },
    { id:70, book:"Ruth", title:"A child in David's line", side:"c",
      passage: "Boaz married Ruth, and she bore a son, Obed. The women of Bethlehem blessed Naomi \u2014 who had come home calling herself empty \u2014 saying the child would restore her life, born of a daughter-in-law \u201cwho is better to you than seven sons.\u201d Obed became the father of Jesse, and Jesse the father of David. The Moabite widow's name stands forever in the family line of Israel's greatest king \u2014 and of the Messiah.",
      keyVerses: [
        { ref: "Ruth 4:17", text: "A son has been born to Naomi... he was the father of Jesse, the father of David." }
      ],
      questions: [
        { q:"How did the women of Bethlehem describe Ruth to Naomi?", opts:["A burden", "Better to her than seven sons", "A stranger still"], correct:1, explain:"In a culture that counted wealth in sons, it's the highest compliment the town could give." },
        { q:"Whose grandfather did Ruth's son Obed become?", opts:["Saul's", "David's", "Samson's"], correct:1, explain:"Obed fathered Jesse, and Jesse fathered David \u2014 the shepherd king whose story begins in 1 Samuel." },
        { q:"What makes Ruth's place in this family line remarkable?", opts:["She was a Moabite outsider who chose Israel's God", "She was royalty already", "She was Israel's first judge"], correct:0, explain:"The genealogy of the Messiah deliberately includes a foreign widow \u2014 grace has always crossed borders." }
      ],
      deepDive: "The book that opened with three funerals closes with a birth, and Naomi \u2014 who asked to be called Bitter \u2014 ends the story holding a grandson the whole town celebrates. But the final verses spring the real surprise: this quiet domestic tale was secretly royal history. Ruth the Moabite becomes great-grandmother to King David, and Matthew's Gospel makes a point of naming her in the genealogy of Jesus. The message is unmistakable: no one is too foreign, too widowed, too empty, or too ordinary for God to write into the center of His story." },
    { id:71, book:"1 Samuel", title:"Hannah's prayer", side:"r",
      passage: "Hannah, childless and provoked for years, wept before the Lord at Shiloh and vowed that if God gave her a son, she would give him back for all his days. Watching her lips move silently, Eli the priest mistook her anguish for drunkenness \u2014 then blessed her when he understood. God remembered Hannah. She named her son Samuel, and when he was weaned, she kept her vow: \u201cAs long as he lives, he is given to the Lord.\u201d",
      keyVerses: [
        { ref: "1 Samuel 1:27", text: "I prayed for this child, and the LORD has granted what I asked of him." }
      ],
      questions: [
        { q:"What did Hannah vow?", opts:["To build an altar", "That a son given by God would be given back to God", "To move to Shiloh"], correct:1, explain:"Her prayer held nothing back \u2014 the answer she begged for, she promised to release." },
        { q:"What did Eli initially think of Hannah's silent prayer?", opts:["That she was a prophetess", "That she was drunk", "That she was asleep"], correct:1, explain:"Even the high priest misread desperate faith at first glance \u2014 the story is gentle with anguished prayer that looks strange." },
        { q:"What did Hannah do when Samuel was weaned?", opts:["Kept him home", "Brought him to the Lord's house at Shiloh, keeping her vow", "Sent him to Egypt"], correct:1, explain:"She followed through at the greatest possible cost \u2014 the answered prayer walked back into God's house." }
      ],
      deepDive: "The era of the kings begins not in a palace but with a woman crying in a sanctuary \u2014 the Bible's way of saying where real turning points come from. Hannah's prayer is raw enough to be mistaken for drunkenness, and her vow is staggering: she asks for the one thing she wants most and promises to give it away. Her song of praise in chapter 2 \u2014 God raising the poor and humbling the proud \u2014 becomes the template Mary's song echoes at the birth of Jesus. The boy she \u2018gave to the Lord\u2019 would anoint Israel's first two kings." },
    { id:72, book:"1 Samuel", title:"Speak, Lord \u2014 Samuel's call", side:"c",
      passage: "The boy Samuel served at Shiloh in days when \u201cthe word of the Lord was rare... there were not many visions.\u201d One night a voice called his name; three times he ran to old Eli, thinking it was him. Eli understood at last, and taught him the answer: \u201cSpeak, Lord, for your servant is listening.\u201d The Lord came and called again, and Samuel's first message was a hard word \u2014 judgment on Eli's own house. Samuel grew, and all Israel knew a prophet had been established.",
      keyVerses: [
        { ref: "1 Samuel 3:10", text: "Speak, for your servant is listening." }
      ],
      questions: [
        { q:"Why did Samuel run to Eli three times?", opts:["He was frightened of the dark", "He did not yet know the Lord's voice", "Eli kept calling him"], correct:1, explain:"The text says it plainly \u2014 Samuel \u2018did not yet know the Lord.\u2019 Recognizing God's voice was learned, with help." },
        { q:"What response did Eli teach Samuel?", opts:["\u2018Speak, for your servant is listening\u2019", "\u2018Depart from me\u2019", "\u2018Send Eli instead\u2019"], correct:0, explain:"Old, failing Eli still gave the boy the posture of a lifetime: availability before understanding." },
        { q:"What was hard about Samuel's first message?", opts:["It was in a foreign tongue", "It was judgment on Eli, the man who raised him", "It made no sense"], correct:1, explain:"Faithfulness to God's word cost Samuel from the very first morning \u2014 and Eli, to his credit, received it." }
      ],
      deepDive: "Samuel's call story is loved for good reason: it treats hearing God as something learned, not automatic \u2014 a boy needed an old man's coaching to recognize the voice, and God graciously kept calling until he did. But the morning after is where the chapter bites: Samuel's first prophetic word is against the household of the man who taught him to listen, and he has to say it to Eli's face. The lesson pairs comfort and cost \u2014 God speaks to the young and unqualified, and what He says isn't always easy to deliver. \u2018Speak, for your servant is listening\u2019 only means something if you'll repeat what you hear." },
    { id:73, book:"1 Samuel", title:"Give us a king", side:"l",
      passage: "When Samuel grew old, the elders demanded: \u201cappoint a king to lead us, such as all the other nations have.\u201d Samuel was grieved, but the Lord said, \u201cit is not you they have rejected, but they have rejected me as their king.\u201d At God's command Samuel warned them what a king would take \u2014 their sons, daughters, fields, and harvests \u2014 but the people refused to listen: \u201cNo! We want a king over us.\u201d",
      keyVerses: [
        { ref: "1 Samuel 8:7", text: "It is not you they have rejected, but they have rejected me as their king." }
      ],
      questions: [
        { q:"What reason did the elders give for wanting a king?", opts:["To be like all the nations", "God commanded it", "To lower taxes"], correct:0, explain:"The heart of the request was imitation \u2014 trading their unique King for a throne like everyone else's." },
        { q:"Whom did God say the people were really rejecting?", opts:["Samuel", "God Himself as their King", "The judges"], correct:1, explain:"The demand wasn't really about Samuel's age or his sons \u2014 it was a vote against God's reign." },
        { q:"What did Samuel's warning describe?", opts:["Foreign invasions", "All that a king would take from them", "A coming famine"], correct:1, explain:"\u2018He will take\u2019 drums through the warning \u2014 sons, daughters, fields, tenths \u2014 and Israel said yes anyway." }
      ],
      deepDive: "This chapter is one of the Bible's sharpest studies in getting what you ask for. Israel's demand sounds practical \u2014 Samuel is old, his sons are corrupt \u2014 but God names the root: they want to trade an invisible King for a visible one, distinctiveness for conformity. The warning Samuel delivers is essentially an itemized invoice of monarchy (\u2018he will take... he will take...\u2019), and the people's response is the chilling part: they hear the full cost and choose it anyway. God grants the request \u2014 and the rest of Israel's history becomes the long, painful proof of the warning. Sometimes judgment looks exactly like getting your way." },
    { id:74, book:"1 Samuel", title:"Saul chosen as king", side:"r",
      passage: "Saul, a tall and striking Benjamite out searching for his father's lost donkeys, was led by seeming chance to Samuel \u2014 whom God had told the day before, \u201cI will send you a man.\u201d Samuel anointed him privately, and the Spirit of God came upon him. But when the day came to present the king publicly, Saul was found hiding among the baggage. The people shouted, \u201cLong live the king!\u201d",
      keyVerses: [
        { ref: "1 Samuel 10:24", text: "Long live the king!" }
      ],
      questions: [
        { q:"What was Saul doing when his story began?", opts:["Leading an army", "Searching for his father's lost donkeys", "Serving at the tabernacle"], correct:1, explain:"Israel's first king entered history on an errand \u2014 the ordinary route to an extraordinary appointment." },
        { q:"What outwardly distinguished Saul?", opts:["His wisdom", "He was taller than any of the people", "His wealth"], correct:1, explain:"Saul looked like a king \u2014 head and shoulders above everyone \u2014 which is exactly the standard the book will later challenge." },
        { q:"Where was Saul when it was time to present him as king?", opts:["On a throne", "Hiding among the baggage", "Leading a parade"], correct:1, explain:"The detail is telling \u2014 impressive on the outside, uncertain underneath, a tension that will define his reign." }
      ],
      deepDive: "Saul's rise has all the marks of God's providence \u2014 lost donkeys steering a man to his anointing \u2014 and all the seeds of coming trouble. He is introduced entirely by externals: tall, handsome, impressive, precisely the king-shaped king the people asked for. But the baggage detail lingers \u2014 a man hiding from the very calling being handed to him. Scripture isn't mocking nervousness; it's beginning an argument that runs through the whole book: the difference between looking like a king and having the heart of one. Israel got what it could see. What God looks for comes later, in a shepherd boy nobody thought to summon." },
    { id:75, book:"1 Samuel", title:"To obey is better than sacrifice", side:"c",
      passage: "God commanded Saul to strike Amalek completely, but Saul spared King Agag and the best of the flocks. Confronted, he insisted he had obeyed \u2014 the animals were kept \u201cto sacrifice to the Lord.\u201d Samuel's reply cut through: \u201cDoes the Lord delight in burnt offerings and sacrifices as much as in obeying...? To obey is better than sacrifice.\u201d Because Saul rejected God's word, God rejected him as king, and Samuel mourned him.",
      keyVerses: [ { ref: "1 Samuel 15:22", text: "To obey is better than sacrifice, and to heed is better than the fat of rams." } ],
      questions: [
        { q:"How did Saul explain the spared animals?", opts:["He forgot the command", "They were kept to sacrifice to the Lord", "The soldiers stole them"], correct:1, explain:"Saul dressed partial obedience in worship language \u2014 the story's central self-deception." },
        { q:"What was Samuel's famous reply?", opts:["\u2018To obey is better than sacrifice\u2019", "\u2018The king can do no wrong\u2019", "\u2018Offer twice as much\u2019"], correct:0, explain:"Religious activity can never substitute for simply doing what God said \u2014 a line the prophets return to for centuries." },
        { q:"What was the consequence for Saul?", opts:["A fine", "God rejected him from being king", "A year of exile"], correct:1, explain:"The kingdom would be torn from him and given \u2018to one of your neighbors... better than you\u2019 \u2014 David is coming." }
      ],
      deepDive: "Saul's failure at Amalek is subtler than the golden calf \u2014 he obeyed most of the command and baptized the rest in the vocabulary of worship. That's what makes the chapter timeless: partial obedience presenting itself as devotion. Samuel's response became one of the Old Testament's defining sentences \u2014 God prefers plain obedience to spectacular religion \u2014 and it lands on every generation that finds sacrifice easier than surrender. Saul's repeated concern afterward is also diagnostic: \u2018honor me now before the elders.\u2019 Even his repentance is about appearances. The heart the next king must have is being defined here, by its absence." },
    { id:76, book:"1 Samuel", title:"David anointed", side:"l",
      passage: "God sent Samuel to Bethlehem, to the house of Jesse. Seeing the eldest son, tall and impressive, Samuel thought, surely this is the one \u2014 but God said: \u201cDo not consider his appearance... the Lord does not see as man sees; man looks at the outward appearance, but the Lord looks at the heart.\u201d Seven sons passed by; none was chosen. The youngest was out keeping sheep. They sent for David, and the Lord said, \u201cRise and anoint him; this is the one.\u201d",
      keyVerses: [ { ref: "1 Samuel 16:7", text: "The LORD does not see as humans see; people look at the outward appearance, but the LORD looks at the heart." } ],
      questions: [
        { q:"What did God correct in Samuel's judgment?", opts:["His timing", "Judging by outward appearance instead of the heart", "His choice of city"], correct:1, explain:"Even the great prophet defaulted to Saul's standard \u2014 height and looks \u2014 and God stopped him mid-thought." },
        { q:"Where was David when the choosing happened?", opts:["At the feast", "Out keeping the sheep", "In Saul's court"], correct:1, explain:"His own father hadn't considered him \u2014 the future king was the family afterthought." },
        { q:"What does the Lord look on, according to this passage?", opts:["The heart", "The countenance", "The strength of a man"], correct:0, explain:"The verse became the book's thesis \u2014 and the standard by which every king after is measured." }
      ],
      deepDive: "This chapter delivers the Bible's definitive statement on how God evaluates people, and it lands on the most qualified religious observer alive: even Samuel instinctively crowns the tall one. \u2018The Lord looks at the heart\u2019 isn't a nice sentiment here \u2014 it's a working method that passes over seven presentable brothers for the one nobody bothered to call in from the field. David arrives smelling of sheep, is anointed in front of the family that overlooked him, and returns to the flock; the Spirit comes on him, but the throne is years and many trials away. God's choices, the story insists, are made by different arithmetic \u2014 and confirmed slowly." },
    { id:77, book:"1 Samuel", title:"David and Goliath", side:"r",
      passage: "For forty days the Philistine champion Goliath defied Israel's army, and no man dared face him. David, bringing bread to his brothers, heard the taunts and asked, \u201cwho is this uncircumcised Philistine, that he should defy the armies of the living God?\u201d Refusing Saul's armor, he took his sling and five smooth stones. \u201cYou come against me with a sword,\u201d he told the giant, \u201cbut I come against you in the name of the Lord Almighty.\u201d One stone, and the champion fell.",
      keyVerses: [
        { ref: "1 Samuel 17:47", text: "The battle is the LORD\u2019s, and he will give all of you into our hands." }
      ],
      questions: [
        { q:"What question did David ask that no soldier was asking?", opts:["How tall is he?", "Who is this Philistine, that he should defy the armies of the living God?", "What is the reward?"], correct:1, explain:"Everyone else measured Goliath against themselves; David measured him against God \u2014 the spies' choice from Numbers, replayed." },
        { q:"Why did David refuse Saul's armor?", opts:["It didn't fit and wasn't his", "It was too heavy to lift", "Saul refused to lend it"], correct:0, explain:"David fought as himself \u2014 a shepherd with a shepherd's weapon \u2014 trusting the God who had delivered him from lion and bear." },
        { q:"In whose name did David say he came?", opts:["The name of the Lord of hosts", "The king of Israel", "His father Jesse"], correct:0, explain:"His speech before the fight is the story's center \u2014 the battle was the Lord's before the stone ever flew." }
      ],
      deepDive: "David and Goliath is so famous it gets reduced to an underdog clich\u00e9, but the text is doing something sharper: contrasting two ways of seeing, in the same valley, on the same day. The army sees an unbeatable giant; David sees a mortal man defying the living God \u2014 same facts, opposite conclusions, exactly like the twelve spies. His refusal of Saul's armor matters too: the anointed-but-hidden king wins with the tools of his actual life, not a borrowed identity. And his pre-fight speech gives the story its theology \u2014 \u2018the battle is the Lord's\u2019 \u2014 words spoken before the outcome, which is what faith is." },
    { id:78, book:"1 Samuel", title:"David spares Saul", side:"c",
      passage: "Consumed by jealousy, Saul hunted David through the wilderness with three thousand men. In a cave at En-gedi, Saul unknowingly walked in alone \u2014 directly into David's hiding place. David's men whispered that God had delivered his enemy into his hand. David crept forward \u2014 and only cut off a corner of Saul's robe, and even that struck his conscience. \u201cI will not lift my hand against my master,\u201d he said, \u201cfor he is the Lord's anointed.\u201d",
      keyVerses: [
        { ref: "1 Samuel 24:6", text: "The LORD forbid that I should do such a thing to my master, the LORD\u2019s anointed, or lay my hand on him." }
      ],
      questions: [
        { q:"What opportunity did the cave present David?", opts:["Escape to Moab", "His pursuer alone, defenseless, within arm's reach", "Hidden treasure"], correct:1, explain:"Everything lined up for revenge \u2014 opportunity, provocation, and companions urging it as God's will." },
        { q:"What did David actually do?", opts:["Nothing at all", "Cut the corner of Saul's robe", "Took Saul captive"], correct:1, explain:"His conscience struck him over a piece of cloth \u2014 a tenderness of heart that defined him more than the sling ever did." },
        { q:"Why did David refuse to harm Saul?", opts:["Fear of Saul's army", "Saul was the Lord's anointed", "A treaty required it"], correct:1, explain:"David refused to seize by violence what God had promised to give \u2014 the throne would come in God's way and time." }
      ],
      deepDive: "The cave at En-gedi is David's real coronation test \u2014 not whether he could kill a giant, but whether he could refuse a shortcut. His men even supply the spiritual reasoning: surely God delivered Saul into your hand. It sounds plausible; opportunity often does. But David distinguishes between what God permits him to do and what God has appointed him to be, and he will not take by bloodshed a throne promised by God. That his conscience struck him over a robe's corner reveals the interior life behind \u2018a man after God's own heart\u2019 \u2014 a conscience kept tender when calluses would have been so easy to justify." },
    { id:79, book:"1 Samuel", title:"The death of Saul", side:"l",
      passage: "The Philistines overwhelmed Israel on Mount Gilboa. Jonathan fell, and Saul, wounded and surrounded, died on the battlefield \u2014 Israel's first king ending in the defeat his disobedience had long foreshadowed. When word reached David, he did not celebrate the death of the man who hunted him. He tore his clothes, wept, and taught Israel a lament: \u201cA gazelle lies slain on your heights, Israel. How the mighty have fallen!\u201d",
      keyVerses: [
        { ref: "1 Samuel 31:6", text: "So Saul, his three sons, his armor-bearer, and all his men died together that same day." }
      ],
      questions: [
        { q:"Where did Saul and Jonathan die?", opts:["In Jerusalem", "In battle against the Philistines on Mount Gilboa", "In Egypt"], correct:1, explain:"The reign that began with such promise ended in the military disaster the whole story had been dreading." },
        { q:"How did David respond to Saul's death?", opts:["He celebrated his enemy's fall", "He tore his clothes, wept, and composed a lament", "He ignored the news"], correct:1, explain:"No gloating, no relief on display \u2014 David mourned the Lord's anointed and his beloved friend Jonathan together." },
        { q:"What famous line comes from David's lament?", opts:["\u2018How the mighty have fallen\u2019", "\u2018The battle is the Lord's\u2019", "\u2018My cup overflows\u2019"], correct:0, explain:"David honored even the man who hunted him \u2014 grief without bitterness, the final proof of the heart God saw in him." }
      ],
      deepDive: "Saul's end on Gilboa closes the argument the book has been making since the people demanded a king \u2018like all the nations\u2019: they received exactly that \u2014 impressive, insecure, and ultimately ruinous. But the chapter's true revelation is David's grief. The man with every reason to celebrate composes one of Scripture's most generous elegies for his persecutor, refusing to let years of injustice curdle into gloating. \u2018How the mighty have fallen\u2019 mourns what Saul was meant to be. The throne now passes to the shepherd \u2014 and the story of Israel's greatest king, with all its own glory and failure, is ready to begin." },
    { id:80, book:"2 Samuel", title:"David crowned king", side:"c",
      passage: "After Saul's death, David asked the Lord where to go and was sent to Hebron, where the men of Judah anointed him king over their tribe. Seven and a half years of division followed \u2014 Saul's house clinging to power in the north \u2014 until at last all the tribes of Israel came to David at Hebron: \u201cWe are your own flesh and blood.\u201d They anointed him king over all Israel. He was thirty years old, and he would reign forty years.",
      keyVerses: [
        { ref: "2 Samuel 5:3", text: "All the elders of Israel came to the king at Hebron... and they anointed David king over Israel." }
      ],
      questions: [
        { q:"What did David do before moving to Hebron?", opts:["Consulted his generals", "Asked the Lord where to go", "Took the city by force"], correct:1, explain:"Even with Saul gone and the promise within reach, David's first move was still inquiry, not ambition." },
        { q:"How long was David king over only Judah before all Israel accepted him?", opts:["A few weeks", "About seven and a half years", "Forty years"], correct:1, explain:"The anointing from Samuel took roughly twenty years to become a full crown \u2014 God's promises kept their own schedule." },
        { q:"What did the tribes say when they finally came to David?", opts:["\u2018We surrender\u2019", "\u2018We are your own flesh and blood\u2019", "\u2018Rule us like Saul did\u2019"], correct:1, explain:"The kingdom united not by conquest but by kinship and covenant \u2014 they came to him." }
      ],
      deepDive: "David's coronation is remarkable for what he didn't do: no coup, no assassination of rivals, no forcing the timeline \u2014 even after Saul died, David asked God where to go and then waited years more while the kingdom slowly turned to him. The anointing he received as a teenager finally became a throne two decades later. It's the Bible's great case study in the space between calling and fulfillment: the promise was real the whole time, and so was the wait. What God appoints, this story insists, doesn't need to be seized." },
    { id:81, book:"2 Samuel", title:"The ark comes to Jerusalem", side:"l",
      passage: "David captured Jerusalem and made it his capital, then set out to bring the ark of God into the city. The first attempt ended in tragedy when Uzzah touched the ark and died \u2014 holiness handled carelessly, carried on a cart instead of by Levites as commanded. Three months later David tried again, this time as God instructed, and danced before the Lord with all his might as the ark entered Jerusalem. His wife Michal despised him for it, but David answered: \u201cI will celebrate before the LORD.\u201d",
      keyVerses: [
        { ref: "2 Samuel 6:14", text: "Wearing a linen ephod, David was dancing before the LORD with all his might." }
      ],
      questions: [
        { q:"What went wrong with the first attempt to move the ark?", opts:["It was stolen", "It was carried carelessly on a cart, and Uzzah died touching it", "It was lost in a storm"], correct:1, explain:"Good intentions didn't excuse ignoring God's instructions \u2014 the ark was to be carried by Levites, not carted like cargo." },
        { q:"How did David enter Jerusalem with the ark the second time?", opts:["Solemnly and silently", "Dancing before the Lord with all his might", "Riding a war horse"], correct:1, explain:"Israel's king traded royal dignity for undignified joy \u2014 worship that cared nothing for appearances." },
        { q:"How did David answer Michal's contempt?", opts:["He apologized for the display", "\u2018I will celebrate before the LORD\u2019", "He never spoke to her again about it"], correct:1, explain:"David's worship had an audience of one \u2014 he would become even more undignified than this, he said, for God." }
      ],
      deepDive: "This chapter holds reverence and joy in one story \u2014 and insists on both. Uzzah's death is jarring, but it repeats the lesson of Nadab and Abihu: God's holiness doesn't become casual just because the cause is good. Then, once the ark moves God's way, the same chapter gives us Scripture's most exuberant picture of worship \u2014 a king dancing in the street, indifferent to looking foolish. Michal's sneer represents worship as image management; David's answer defines it as an audience of one. Holy fear and wholehearted joy, it turns out, are not opposites but partners." },
    { id:82, book:"2 Samuel", title:"God's covenant with David", side:"r",
      passage: "Settled in his palace, David wanted to build God a house \u2014 a temple to replace the tent. Through the prophet Nathan, God answered with a stunning reversal: \u201cThe LORD himself will establish a house for you.\u201d David's throne and kingdom would endure forever; a son from his own line would build the temple, and God would be a father to him. Overwhelmed, David sat before the Lord: \u201cWho am I, Sovereign LORD... that you have brought me this far?\u201d",
      keyVerses: [ { ref: "2 Samuel 7:16", text: "Your house and your kingdom will endure forever before me; your throne will be established forever." } ],
      questions: [
        { q:"What did David want to build?", opts:["A palace for himself", "A temple", "A wall around Jerusalem"], correct:1, explain:"It troubled David that he lived in cedar while the ark stayed in a tent \u2014 the desire itself was honored even as the plan was redirected." },
        { q:"What was God's reversal in Nathan's message?", opts:["God would build David a \u2018house\u2019", "The temple would never be built", "David would lose his throne"], correct:0, explain:"David offered God a building; God promised David an everlasting kingdom \u2014 the gift ran the other direction." },
        { q:"How did David respond to the promise?", opts:["He started construction anyway", "He sat before the Lord in humble amazement", "He demanded proof"], correct:1, explain:"The shepherd-king's response to the Bible's biggest royal promise was not pride but wonder." }
      ],
      deepDive: "Second Samuel 7 is one of the load-bearing chapters of the entire Bible. David's offer to build God a house becomes God's promise to build David one \u2014 a dynasty, a throne \u2018established forever.\u2019 Every later hope for a Messiah, a son of David whose kingdom never ends, grows from this promise; the New Testament opens by calling Jesus \u2018the son of David\u2019 for exactly this reason. Notice too the shape of grace here: the covenant is announced, not negotiated, and David's only possible response is astonished gratitude. The best things in the story of God, this chapter says, are given, not built." },
    { id:83, book:"2 Samuel", title:"Kindness to Mephibosheth", side:"c",
      passage: "Secure on his throne, David asked a question kings never ask: \u201cIs there anyone still left of the house of Saul to whom I can show kindness for Jonathan's sake?\u201d There was \u2014 Mephibosheth, Jonathan's son, lame in both feet, living in obscurity. Ancient kings eliminated rival bloodlines; David restored Saul's land to him and gave him a permanent seat at the king's own table, \u201clike one of the king's sons.\u201d",
      keyVerses: [
        { ref: "2 Samuel 9:7", text: "Don\u2019t be afraid... I will surely show you kindness for the sake of your father Jonathan... and you will always eat at my table." }
      ],
      questions: [
        { q:"Why was David's question so unusual for a king?", opts:["Kings normally eliminated rival bloodlines, not blessed them", "Kings never spoke of the past", "It broke Israel's law"], correct:0, explain:"A surviving grandson of Saul was, politically, a threat \u2014 David treated him as a covenant obligation of love instead." },
        { q:"What did David give Mephibosheth?", opts:["Money to leave the country", "Saul's land restored, and a permanent place at the king's table", "A position in the army"], correct:1, explain:"Full restoration plus family-level honor \u2014 \u2018like one of the king's sons.\u2019" },
        { q:"What motivated the kindness?", opts:["Political strategy", "David's covenant with Jonathan", "A prophet's command"], correct:1, explain:"A promise made years earlier between friends was kept when only one of them remained alive to honor it." }
      ],
      deepDive: "The Mephibosheth story is the Bible's picture of covenant kindness \u2014 the Hebrew word is hesed, the same loyal love Ruth showed Naomi. Mephibosheth had nothing to offer, a name that marked him as a rival, and legs that couldn't carry him to the king; the king sent for him. Grace here has a specific shape: sought out, undeserved, grounded in a promise made to someone else, and ending at a table with a permanent place setting. Many readers across the centuries have seen their own story in his \u2014 brought to the table not for their merit, but for the sake of another." },
    { id:84, book:"2 Samuel", title:"David and Bathsheba", side:"l",
      passage: "In the spring, when kings go off to war, David stayed in Jerusalem. From his roof he saw a woman bathing \u2014 Bathsheba, wife of Uriah the Hittite, one of his loyal soldiers. David sent for her, and she became pregnant. His cover-up escalated from deception to murder: he ordered Uriah placed at the front of the fiercest fighting and abandoned there. Uriah died, David married the widow, and the chapter ends with the Bible's quiet thunder: \u201cBut the thing David had done displeased the LORD.\u201d",
      keyVerses: [
        { ref: "2 Samuel 11:27", text: "But the thing David had done displeased the LORD." }
      ],
      questions: [
        { q:"What detail opens the chapter as a warning sign?", opts:["A famine had begun", "It was the season kings go to war", "A prophet had left the city"], correct:1, explain:"The story starts with David out of position \u2014 the fall began before the rooftop, in the drift from his post." },
        { q:"How did David's cover-up escalate?", opts:["From deception to arranging Uriah's death in battle", "He fled the country", "He blamed Bathsheba publicly"], correct:0, explain:"Each step to hide the sin required a darker one \u2014 ending with the murder of a loyal soldier by his own king's orders." },
        { q:"How does the chapter end?", opts:["With celebration in the palace", "\u2018But the thing David had done displeased the LORD\u2019", "With Uriah's rescue"], correct:1, explain:"One quiet sentence stands over the whole successful cover-up \u2014 hidden from everyone except the One who mattered." }
      ],
      deepDive: "The Bible does something almost no ancient literature does: it tells the worst story about its greatest king, unflinching. David \u2014 the man after God's own heart \u2014 commits adultery and murders one of his most loyal men to hide it. The chapter's craft is devastating: David never leaves the palace; he sins entirely through messengers, power exercised at a comfortable distance. And the cover-up works \u2014 everyone is managed, every loose end tied \u2014 except for the final sentence. Scripture's honesty here is itself a kind of mercy: if this could happen to David, no one is beyond temptation; and as the next chapter shows, no one is beyond grace either." },
    { id:85, book:"2 Samuel", title:"Nathan: \u201cYou are the man\u201d", side:"r",
      passage: "God sent Nathan the prophet to David with a story: a rich man with many flocks stole a poor man's one beloved lamb to feed a guest. David burned with anger \u2014 \u201cthe man who did this must die!\u201d Nathan answered: \u201cYou are the man.\u201d Confronted, David didn't argue, deny, or execute the prophet. He said simply, \u201cI have sinned against the LORD.\u201d Nathan declared forgiveness \u2014 the sin was put away \u2014 but consequences would still ripple through David's house. Psalm 51 records his broken prayer: \u201cCreate in me a clean heart, O God.\u201d",
      keyVerses: [
        { ref: "Psalm 51:10", text: "Create in me a pure heart, O God, and renew a steadfast spirit within me." }
      ],
      questions: [
        { q:"How did Nathan confront the king?", opts:["With a public trial", "With a story that let David judge himself", "With an army"], correct:1, explain:"The parable slipped past David's defenses \u2014 he condemned the rich man before realizing he was looking in a mirror." },
        { q:"How did David respond to \u2018You are the man\u2019?", opts:["\u2018I have sinned against the LORD\u2019", "He denied everything", "He exiled Nathan"], correct:0, explain:"Kings killed prophets for less \u2014 David's greatness resurfaces not in innocence but in how he received the truth." },
        { q:"What does the aftermath teach about forgiveness and consequences?", opts:["Forgiveness erased all consequences", "The sin was forgiven, yet consequences still followed in David's house", "There was no forgiveness"], correct:1, explain:"Grace was real and immediate; so were the ripples \u2014 the Bible refuses to simplify either side." }
      ],
      deepDive: "Nathan's parable is one of the most skillful confrontations ever recorded \u2014 truth delivered in a package that arrived before the defenses could rise. And David's response separates him forever from Saul: Saul, confronted, managed appearances (\u2018honor me before the elders\u2019); David, confronted, collapsed into honesty. Psalm 51, written from this rubble, became the prayer of every broken person since \u2014 asking not for image repair but for a new heart. The chapter's mature teaching is that forgiveness and consequences coexist: God put away David's sin, and David's family still fractured along the lines his choices had drawn. Grace is free; it is not pretend." },
    { id:86, book:"2 Samuel", title:"Absalom's rebellion", side:"c",
      passage: "The sword Nathan foretold rose within David's own house. His son Absalom \u2014 handsome, charming, wronged and unreconciled \u2014 spent years stealing the hearts of Israel at the city gate, then declared himself king at Hebron. David fled Jerusalem barefoot and weeping up the Mount of Olives rather than turn the city into a battlefield. When the armies finally met, David's one command rang out to every soldier: \u201cBe gentle with the young man Absalom for my sake.\u201d",
      keyVerses: [
        { ref: "2 Samuel 15:30", text: "David continued up the Mount of Olives, weeping as he went; his head was covered and he was barefoot." }
      ],
      questions: [
        { q:"How did Absalom win the people before the revolt?", opts:["He bribed the army", "Years of charm at the city gate", "He performed miracles"], correct:1, explain:"The rebellion was built slowly, on flattery and a thousand small resentments \u2014 long before any sword was drawn." },
        { q:"How did David leave Jerusalem?", opts:["At the head of an army", "Barefoot and weeping up the Mount of Olives", "In a royal procession"], correct:1, explain:"The king who once danced into the city now wept out of it \u2014 choosing exile over turning Jerusalem into a battlefield." },
        { q:"What was David's command about his rebel son?", opts:["\u2018Show no mercy\u2019", "\u2018Be gentle with the young man Absalom for my sake\u2019", "\u2018Bring me his crown\u2019"], correct:1, explain:"Even hunted by his own child, David was more father than king." }
      ],
      deepDive: "Absalom's rebellion is the bitter harvest of chapters of family failure \u2014 wrongs unaddressed, a son brought home but never truly embraced, resentment left to compound at the city gate. The narrative refuses easy villains: Absalom is grievously wrong and genuinely wronged; David is the innocent victim of the revolt and the negligent father who helped make it possible. His barefoot ascent of the Mount of Olives \u2014 weeping, head covered \u2014 became an image Israel never forgot, a king humbled through his own house. And his order to spare Absalom shows the anguish underneath the politics: some rebellions, a parent cannot stop loving through." },
    { id:87, book:"2 Samuel", title:"O Absalom, my son", side:"l",
      passage: "The battle in the forest of Ephraim went against the rebels. Absalom, riding beneath a great oak, was caught by his head in the branches and left hanging \u2014 and Joab, David's hardened commander, killed him against the king's explicit order. When word reached David, the victory turned to ashes. He climbed to the chamber over the gate weeping: \u201cO my son Absalom! My son, my son Absalom! Would I had died instead of you.\u201d",
      keyVerses: [
        { ref: "2 Samuel 18:33", text: "O my son Absalom! My son, my son Absalom! If only I had died instead of you." }
      ],
      questions: [
        { q:"Who killed Absalom, and against whose order?", opts:["A Philistine, by accident", "Joab", "David himself"], correct:1, explain:"Joab chose the kingdom's stability over the king's heart \u2014 pragmatism that solved a war and wounded a father forever." },
        { q:"What was David's reaction to the victory?", opts:["A triumphant feast", "Overwhelming grief", "He rewarded Joab"], correct:1, explain:"The day's military triumph disappeared inside a father's mourning \u2014 the army crept back into the city as if defeated." },
        { q:"What makes David's lament so haunting?", opts:["Its poetic length", "He wished to die in place of the son who tried to kill him", "It was written by Joab"], correct:1, explain:"Substitution is the deepest language love has \u2014 a father offering to trade places with his rebel child." }
      ],
      deepDive: "\u2018Would God I had died for thee\u2019 \u2014 David's cry over Absalom is one of the rawest sentences in all of Scripture, a father wishing to swap places with the child who rebelled against him. The wish was impossible for David; many readers have heard in it an echo of what God would one day actually do \u2014 the King dying in place of the rebels. The chapter also poses Joab's uncomfortable question without fully answering it: was the kingdom saved by his ruthlessness, or was something essential lost when the king's mercy was overruled? Grief and statecraft collide here, and the text lets them \u2014 because in real life, they do." },
    { id:88, book:"2 Samuel", title:"David's song of deliverance", side:"r",
      passage: "Near the book's end stands David's great song, looking back across a lifetime of rescues: \u201cThe LORD is my rock, my fortress and my deliverer... I called to the LORD, who is worthy of praise, and have been saved from my enemies.\u201d The shepherd, fugitive, king, sinner, and mourner gathers his whole story into praise. His last words follow: one who rules in righteousness is like the light of morning at sunrise \u2014 and God's everlasting covenant with his house remained his final confidence.",
      keyVerses: [
        { ref: "2 Samuel 22:2", text: "The LORD is my rock, my fortress and my deliverer." }
      ],
      questions: [
        { q:"What images open David's song?", opts:["Shepherd and sheep", "Rock, fortress, deliverer", "Vine and branches"], correct:1, explain:"A man who spent years hiding in literal rocks and strongholds knew exactly what he was calling God." },
        { q:"What does the song survey?", opts:["Only his victories as king", "A whole lifetime of God's rescues", "The building of the temple"], correct:1, explain:"The song (also Psalm 18) is autobiography turned to praise \u2014 every chapter of the story finds its place." },
        { q:"What anchored David's final words?", opts:["His military record", "God's everlasting covenant with his house", "His wealth"], correct:1, explain:"At the end, David rested not on his achievements but on the promise of 2 Samuel 7 \u2014 grace given, not earned." }
      ],
      deepDive: "Second Samuel closes not with an obituary but a song \u2014 David interpreting his own turbulent life, and choosing praise as the final word over all of it. The metaphors are earned: \u2018rock\u2019 and \u2018fortress\u2019 come from a man who hid in caves; \u2018deliverer\u2019 from one rescued more times than he could count \u2014 including from his own sin. That the adulterer of chapter 11 can sing chapter 22 is itself the book's gospel: failure told honestly, grace received fully, a covenant that held because God held it. David's story ends where every believer's does \u2014 not with a perfect record, but with a faithful God." },
    { id:89, book:"1 Kings", title:"Solomon asks for wisdom", side:"c",
      passage: "David died, and Solomon his son sat secure on the throne. At Gibeon the Lord appeared to the young king in a dream: \u201cAsk for whatever you want me to give you.\u201d Solomon confessed himself \u201conly a little child\u201d facing a task too great, and asked for one thing: a discerning heart to govern God's people and distinguish right from wrong. The request delighted God \u2014 who gave the wisdom, and added the riches and honor Solomon hadn't asked for.",
      keyVerses: [ { ref: "1 Kings 3:9", text: "Give your servant a discerning heart to govern your people and to distinguish between right and wrong." } ],
      questions: [
        { q:"What blank check did God offer Solomon?", opts:["\u2018Ask for whatever you want me to give you\u2019", "\u2018Build me a temple\u2019", "\u2018Defeat your enemies first\u2019"], correct:0, explain:"The dream at Gibeon was an open question \u2014 and the answer would reveal the man." },
        { q:"What did Solomon ask for?", opts:["Long life and wealth", "A discerning heart to govern well", "Victory over his enemies"], correct:1, explain:"He asked not for himself but for the task \u2014 wisdom to serve the people placed in his care." },
        { q:"How did God respond to the request?", opts:["He granted wisdom, plus the riches and honor Solomon didn't ask for", "He gave only what was asked", "He tested Solomon first"], correct:0, explain:"Asking for the right thing first brought the other things with it \u2014 a pattern Jesus later named: seek first the kingdom." }
      ],
      deepDive: "Solomon's request at Gibeon is the Old Testament's picture of praying well: offered a blank check, he asked for a listening heart \u2014 the Hebrew literally says a \u2018hearing heart\u2019 \u2014 for the sake of the people he served. The famous test case follows immediately: two women, one living baby, and a proposed sword that exposed the true mother's love. All Israel saw that wisdom from God was in him. Yet the book plants a quiet seed even here: the chapter notes Solomon's marriage alliance with Egypt and his worship at high places \u2014 small compromises in the season of greatest promise. First Kings will trace where they lead." },
    { id:90, book:"1 Kings", title:"Building the temple", side:"l",
      passage: "In the four hundred eightieth year after the Exodus, Solomon began to build the house of the Lord \u2014 the temple his father had dreamed of. Cedar from Lebanon, stone finished at the quarry so no hammer was heard at the site, gold overlaying the inner sanctuary: seven years of labor by tens of thousands. And in the middle of the construction account, God's word cut to the heart of it: the temple's true condition was not craftsmanship but obedience \u2014 \u201cI will live among the Israelites and will not abandon my people.\u201d",
      keyVerses: [
        { ref: "1 Kings 6:12\u201313", text: "As for this temple you are building, if you follow my decrees... I will live among the Israelites and will not abandon my people Israel." }
      ],
      questions: [
        { q:"What was notable about the sound at the building site?", opts:["Constant hammering day and night", "No hammer or iron tool was heard", "Singing drowned out the work"], correct:1, explain:"The house of God rose in reverent quiet \u2014 even the construction was an act of worship." },
        { q:"What did God say mattered more than the building itself?", opts:["Its size", "Obedience", "The amount of gold used"], correct:1, explain:"Mid-construction, God reframed the project: the temple's promise depended on the people's faithfulness, not the architecture." },
        { q:"Whose dream was Solomon completing?", opts:["His own alone", "His father David's", "Pharaoh's"], correct:1, explain:"The covenant of 2 Samuel 7 was being kept: David's son built the house, exactly as God had said." }
      ],
      deepDive: "The temple was the most magnificent structure Israel ever raised \u2014 and right in the middle of the blueprint chapters, God interrupts with a conditional: this house means nothing without obedience. It's the Bible's permanent warning about religious architecture, budgets, and beauty: God cannot be contained or impressed by buildings, a truth Solomon himself will say out loud at the dedication. The quiet construction site \u2014 no iron tool heard \u2014 gave Israel a parable in stone: what is truly sacred is assembled with reverence. The building took seven years; keeping the heart it pointed to would prove far harder." },
    { id:91, book:"1 Kings", title:"The glory fills the temple", side:"r",
      passage: "When the ark was brought into the finished temple, the cloud of the Lord's glory filled the house so thickly the priests could not stand to minister \u2014 the same glory that had filled the Tabernacle in Moses' day. Solomon's dedication prayer rose with astonishing theology: \u201cBut will God really dwell on earth? The heavens, even the highest heaven, cannot contain you. How much less this temple I have built!\u201d He asked instead that God's eyes be open toward the house night and day \u2014 hearing every prayer turned toward it, even the foreigner's.",
      keyVerses: [
        { ref: "1 Kings 8:27", text: "But will God really dwell on earth? The heavens, even the highest heaven, cannot contain you. How much less this temple I have built!" }
      ],
      questions: [
        { q:"What happened when the ark entered the temple?", opts:["Nothing unusual", "The cloud of God's glory filled the house so the priests couldn't stand", "An earthquake struck"], correct:1, explain:"The glory that filled Moses' Tabernacle now filled Solomon's temple \u2014 God publicly taking residence." },
        { q:"What stunning admission stands at the center of Solomon's prayer?", opts:["That the temple guaranteed God's presence", "That even the highest heaven cannot contain God", "That only Israel could pray there"], correct:1, explain:"At the temple's own dedication, Solomon declared it could never contain the God it honored \u2014 theology at its most honest." },
        { q:"Whose prayers did Solomon ask God to hear?", opts:["Only the priests'", "Everyone's who prayed toward the house", "Only kings'"], correct:1, explain:"The dedication prayer explicitly welcomed the outsider \u2014 the temple was meant to make God's name known to all peoples." }
      ],
      deepDive: "The dedication of the temple is one of the Old Testament's summit moments \u2014 glory descending, a nation on its face, the Exodus promise \u2018I will dwell among them\u2019 visibly kept. Yet the wisest man alive stood in his own masterpiece and declared it too small: heaven itself cannot contain God. That single sentence guards against every temptation to shrink God to a building, a system, or a side. And Solomon's welcome to the foreigner's prayer reaches back to Abraham \u2014 blessed to be a blessing to all nations \u2014 and forward to a day when, as Jesus put it, true worshipers would worship neither on this mountain nor that one, but in spirit and in truth." },
    { id:92, book:"1 Kings", title:"The queen of Sheba", side:"c",
      passage: "The queen of Sheba heard reports of Solomon's fame and came from the ends of the known world to test him with hard questions. Nothing was too difficult for him to explain. When she had seen the wisdom, the palace, the food, the officials, and the worship at the temple, \u201cshe was overwhelmed\u201d \u2014 the half had not been told her \u2014 and she blessed the God who had set Solomon on the throne \u201cto maintain justice and righteousness.\u201d",
      keyVerses: [
        { ref: "1 Kings 10:7", text: "Indeed, not even half was told me; in wisdom and wealth you have far exceeded the report I heard." }
      ],
      questions: [
        { q:"Why did the queen of Sheba come to Jerusalem?", opts:["To conquer it", "To test Solomon with hard questions after hearing of his fame", "To buy cedar"], correct:1, explain:"Wisdom's reputation traveled a thousand miles \u2014 and drew a head of state to come examine it in person." },
        { q:"What was her verdict?", opts:["The reports were exaggerated", "\u2018The half was not told me\u2019", "She was unimpressed"], correct:1, explain:"She arrived skeptical and left overwhelmed \u2014 the rare case of a legend that undersold the truth." },
        { q:"Where did she direct her final praise?", opts:["To Solomon's architects", "To the LORD who set Solomon on the throne for justice and righteousness", "To her own journey"], correct:1, explain:"A foreign queen read the wisdom correctly \u2014 as evidence of Israel's God, and for the purpose of justice." }
      ],
      deepDive: "The queen of Sheba's visit is Israel's calling working exactly as designed: a nation so marked by God's wisdom that the world comes asking questions. Notably, she praises not just Solomon but Solomon's God \u2014 and names the throne's purpose as \u2018justice and righteousness,\u2019 the very things wisdom was requested for at Gibeon. Jesus later pointed back to her as a rebuke to his own generation: she traveled the ends of the earth for wisdom, \u2018and now something greater than Solomon is here.\u2019 The chapter is Solomon at his zenith \u2014 which makes what comes next, only one chapter later, all the more sobering." },
    { id:93, book:"1 Kings", title:"Solomon's fall", side:"l",
      passage: "King Solomon loved many foreign women \u2014 seven hundred wives, three hundred concubines \u2014 from the very nations God had warned would turn Israel's heart. \u201cAs Solomon grew old, his wives turned his heart after other gods, and his heart was not fully devoted to the LORD his God, as the heart of David his father had been.\u201d The wisest man who ever lived built high places for Chemosh and Molek on the hill facing Jerusalem. God's verdict: the kingdom would be torn from his son's hand \u2014 all but one tribe, kept for David's sake.",
      keyVerses: [
        { ref: "1 Kings 11:4", text: "As Solomon grew old, his wives turned his heart after other gods, and his heart was not fully devoted to the LORD his God." }
      ],
      questions: [
        { q:"What turned Solomon's heart?", opts:["A military defeat", "His many foreign wives and their gods", "Poverty"], correct:1, explain:"The fall wasn't one dramatic moment but a long drift \u2014 a thousand small allowances compounding over decades." },
        { q:"What makes Solomon's idolatry especially stunning?", opts:["He was the wisest man alive and had seen God twice", "He was very young", "He had never been warned"], correct:0, explain:"Wisdom, two divine appearances, and the temple itself \u2014 none of it substituted for a guarded heart." },
        { q:"What was the consequence?", opts:["Immediate exile", "The kingdom would be torn away", "Nothing at all"], correct:1, explain:"Judgment came tempered by covenant: the promise to David kept a lamp burning in Jerusalem." }
      ],
      deepDive: "Solomon's collapse is the Bible's most sobering study in drift. No one falls further from a higher starting point: wisdom straight from God, glory that stunned queens, and two personal encounters with the Almighty \u2014 undone not by a crisis but by accumulation, \u2018as Solomon grew old.\u2019 The text's key phrase is surgical: his heart was not \u2018fully devoted\u2019 \u2014 partially devoted, importantly devoted, but divided. Deuteronomy had warned kings specifically against multiplying wives, horses, and gold; Solomon multiplied all three. The lesson is not that wisdom fails, but that wisdom unapplied to one's own heart is the most dangerous knowledge of all. Beginning well, First Kings insists, is not the same as ending well." },
    { id:94, book:"1 Kings", title:"The kingdom divides", side:"r",
      passage: "Solomon's son Rehoboam went to Shechem to be crowned, and the people asked one thing: lighten the heavy yoke your father laid on us. The elders counseled him: serve them today, and they will serve you forever. His young friends counseled swagger: \u201cMy little finger is thicker than my father's waist.\u201d Rehoboam chose the swagger. Ten tribes tore away under Jeroboam, who promptly built two golden calves so his people wouldn't return to Jerusalem to worship: \u201cHere are your gods, Israel.\u201d The kingdom never reunited.",
      keyVerses: [
        { ref: "1 Kings 12:7", text: "If today you will be a servant to these people and serve them... they will always be your servants." }
      ],
      questions: [
        { q:"What did the people ask of Rehoboam?", opts:["A new temple", "A lighter yoke", "War with Egypt"], correct:1, explain:"Solomon's glory had been paid for by the people \u2014 the bill came due at his son's coronation." },
        { q:"Whose counsel did Rehoboam reject?", opts:["The elders who said \u2018serve the people and they will serve you forever\u2019", "The priests", "The prophets"], correct:0, explain:"Servant leadership was offered as the path to a lasting reign \u2014 and traded for a threat about his little finger." },
        { q:"What did Jeroboam build, and why?", opts:["A new temple in Jerusalem", "Two golden calves", "A wall around Shechem"], correct:1, explain:"Politics manufactured a religion: the words \u2018here are your gods, Israel\u2019 deliberately echo the sin at Sinai." }
      ],
      deepDive: "The kingdom split on a single arrogant sentence \u2014 and the elders' rejected counsel became one of Scripture's clearest statements on leadership: serve the people, and they will serve you. Centuries later, Jesus would make it the law of his own kingdom: whoever would be great must be servant of all. Jeroboam's golden calves, meanwhile, show how quickly fear corrupts worship \u2014 he invented a religion to protect a throne, and \u2018the sin of Jeroboam\u2019 became the refrain by which every northern king after him was measured. One chapter, two kings, two failures: pride that divides, and fear that counterfeits. The rest of Kings unfolds from here." },
    { id:95, book:"1 Kings", title:"Elijah and the ravens", side:"c",
      passage: "As Israel sank under Ahab and Jezebel \u2014 who made Baal worship the state religion \u2014 a prophet appeared from nowhere: Elijah the Tishbite, declaring to the king's face, \u201cAs the LORD, the God of Israel, lives, whom I serve, there will be neither dew nor rain in the next few years except at my word.\u201d Then God hid him by the brook Cherith, where ravens brought him bread and meat, and afterward sent him to a starving widow in Zarephath \u2014 whose jar of flour and jug of oil never ran dry through all the famine.",
      keyVerses: [
        { ref: "1 Kings 17:14", text: "The jar of flour will not be used up and the jug of oil will not run dry until the day the LORD sends rain." }
      ],
      questions: [
        { q:"What did Elijah declare to Ahab?", opts:["A coming flood", "No dew or rain except at his word", "A new tax"], correct:1, explain:"Baal was worshiped as lord of rain and storm \u2014 the drought was a duel aimed at his exact territory." },
        { q:"How was Elijah fed at the brook?", opts:["By angels", "By ravens bringing bread and meat morning and evening", "By fishermen"], correct:1, explain:"God's provision came by the least likely couriers \u2014 unclean scavenger birds on a divine delivery schedule." },
        { q:"What happened to the widow's flour and oil?", opts:["They ran out immediately", "They never ran dry through the whole famine", "They turned to gold"], correct:1, explain:"Daily, just-enough provision \u2014 the manna principle again: God sustaining one day at a time." }
      ],
      deepDive: "Elijah bursts into the story with no introduction, no genealogy \u2014 just a man defined entirely by the phrase \u2018the LORD... whom I serve\u2019 (literally, \u2018before whom I stand\u2019). The drought is theological warfare: Baal claimed the rain, so Israel's God shut the sky. But before the famous public showdown, the text gives us Elijah's hidden seasons \u2014 fed by ravens at a shrinking brook, then dependent on a foreign widow's last meal. God trains his prophet in daily dependence before displaying him in power. Jesus later pointed to the widow of Zarephath \u2014 a Gentile \u2014 as proof that God's grace has always jumped Israel's borders." },
    { id:96, book:"1 Kings", title:"Fire on Mount Carmel", side:"l",
      passage: "Elijah summoned all Israel to Mount Carmel and threw down the question: \u201cHow long will you waver between two opinions? If the LORD is God, follow him; but if Baal is God, follow him.\u201d The contest: two altars, two bulls, and the God who answers by fire. Baal's prophets cried and danced and slashed themselves from morning till evening \u2014 \u201cbut there was no response, no one answered.\u201d Then Elijah rebuilt the LORD's altar, drenched his sacrifice with water three times, and prayed one short prayer. The fire of the LORD fell, consuming sacrifice, wood, stones, soil, and water \u2014 and the people fell facedown: \u201cThe LORD \u2014 he is God!\u201d",
      keyVerses: [ { ref: "1 Kings 18:39", text: "When all the people saw this, they fell prostrate and cried, \u201cThe LORD \u2014 he is God! The LORD \u2014 he is God!\u201d" } ],
      questions: [
        { q:"What question did Elijah put to the people?", opts:["\u2018Who will fight for me?\u2019", "\u2018How long will you waver between two opinions?\u2019", "\u2018Where is the king?\u2019"], correct:1, explain:"The real target of Carmel wasn't Baal's prophets but Israel's limping indecision \u2014 trying to hold both gods at once." },
        { q:"What did Elijah do to his own altar before praying?", opts:["Covered it in oil", "Drenched it with water three times", "Hid it from view"], correct:1, explain:"Twelve jars of water in a drought \u2014 removing every possible natural explanation before the fire fell." },
        { q:"How long was Elijah's prayer compared to Baal's prophets' efforts?", opts:["He prayed all day like they did", "One short prayer, after their daylong frenzy produced silence", "He didn't pray at all"], correct:1, explain:"The contrast was the message: hours of frenzy versus a few sentences to a God who actually hears." }
      ],
      deepDive: "Mount Carmel is the Old Testament's great showdown, staged with deliberate theater: Baal, the storm-and-fire god, given home-field advantage, hundreds of his prophets, and a full day \u2014 answered by silence. The narrator's line is devastating: \u2018no voice, no answer, no one paying attention.\u2019 Elijah's water-soaked altar and sixty-word prayer make the point that true faith doesn't need to manufacture outcomes. But the target of the whole event was the crowd's divided heart \u2014 \u2018wavering between two opinions,\u2019 literally limping between two crutches. Carmel's question outlives its fire: not whether God can win the contest, but how long a heart can keep hedging." },
    { id:97, book:"1 Kings", title:"The still small voice", side:"r",
      passage: "After Carmel's triumph, Jezebel's death threat broke Elijah. He fled into the wilderness, sat under a broom tree, and prayed to die: \u201cI have had enough, LORD.\u201d God's response was food and sleep \u2014 twice \u2014 then a journey to Horeb, the mountain of Moses. There came a wind that tore the mountains, an earthquake, a fire \u2014 but the LORD was not in them. And after the fire, a still small voice \u2014 a gentle whisper. God met his exhausted prophet with a question, a recommission, and a correction: \u201cI reserve seven thousand in Israel whose knees have not bowed to Baal.\u201d",
      keyVerses: [
        { ref: "1 Kings 19:12", text: "After the earthquake came a fire, but the LORD was not in the fire. And after the fire came a gentle whisper." }
      ],
      questions: [
        { q:"What was God's first response to Elijah's despair?", opts:["A rebuke", "Food and sleep", "Immediate reassignment"], correct:1, explain:"The angel's treatment plan for a burned-out prophet began with the body: \u2018the journey is too much for you.\u2019" },
        { q:"Where was the LORD not found on the mountain?", opts:["In the whisper", "In the wind, the earthquake, and the fire", "Anywhere at all"], correct:1, explain:"The prophet of fire learned that God's presence isn't confined to the spectacular \u2014 sometimes it comes as a whisper." },
        { q:"What did Elijah not know that God told him?", opts:["That Jezebel had fled", "That seven thousand in Israel had never bowed to Baal", "That the drought would return"], correct:1, explain:"\u2018I alone am left\u2019 was despair's math, not God's \u2014 the faithful remnant was seven thousand strong." }
      ],
      deepDive: "First Kings 19 may be Scripture's most tender chapter on burnout. The prophet who called down fire collapses the very next scene \u2014 courage and despair living in the same man, days apart. God's care proceeds in order: sleep and food first, then presence, then purpose \u2014 no shame anywhere in the sequence. The whisper at Horeb deliberately contrasts with Sinai's thunder: the same God who answers by fire also speaks in a \u2018sound of thin silence.\u2019 And the correction of Elijah's loneliness \u2014 seven thousand unbowed knees he knew nothing about \u2014 is for every servant of God who has ever felt like the last one standing. Despair always undercounts." },
    { id:98, book:"1 Kings", title:"Naboth's vineyard", side:"c",
      passage: "Naboth of Jezreel owned a vineyard beside Ahab's palace and refused to sell his family's inheritance \u2014 as Israel's law protected his right to do. Ahab went home and sulked; Jezebel went to work. Using the king's seal, she arranged false witnesses, a rigged trial, and Naboth's execution for blasphemy. As Ahab walked the dead man's rows to take possession, Elijah was waiting with God's word: judgment on his whole house. Yet when Ahab tore his clothes and humbled himself, God took notice \u2014 even for Ahab, humility delayed the storm.",
      keyVerses: [
        { ref: "1 Kings 21:20", text: "Ahab said to Elijah, \u201cSo you have found me, my enemy!\u201d \u201cI have found you,\u201d he answered." }
      ],
      questions: [
        { q:"Why did Naboth refuse to sell?", opts:["He wanted a higher price", "The land was his family's inheritance, protected by Israel's law", "He hated the king"], correct:1, explain:"Naboth's refusal was faithfulness, not stubbornness \u2014 ancestral land in Israel wasn't the king's to take." },
        { q:"How was the vineyard obtained?", opts:["A fair purchase", "False witnesses, a rigged trial, and Naboth's execution", "A trade of land"], correct:1, explain:"Jezebel weaponized legal process itself \u2014 religion and courts twisted into instruments of theft and murder." },
        { q:"What surprising turn ends the chapter?", opts:["Ahab humbled himself, and God delayed the judgment", "Naboth was found alive", "Jezebel repented"], correct:0, explain:"Even history's most notorious royal couple was not beyond the reach of mercy when genuine humility appeared." }
      ],
      deepDive: "Naboth's vineyard is the Bible's classic case of power abusing the powerless \u2014 and of a God who notices. A citizen stands on covenant law; the state responds with a show trial and a stoning; and the moment the king steps into the stolen rows, the prophet is standing in them. The message thundering through the chapter is that no throne is above the law of God, and no cover-up escapes the God of Naboth. Yet the ending refuses cynicism: Ahab's fast and sackcloth \u2014 from Ahab! \u2014 moves God to soften the timeline. Justice is certain in this story; and mercy, astonishingly, is still available inside it." },
    { id:99, book:"2 Kings", title:"Chariots of fire \u2014 Elijah taken up", side:"c",
      passage: "Elijah's final day was an open secret \u2014 prophets in every town told Elisha his master would be taken. Elisha refused to leave his side: \u201cAs surely as the LORD lives and as you live, I will not leave you.\u201d Asked for a parting gift, Elisha requested a double portion of Elijah's spirit \u2014 the inheritance of a firstborn son. Then, as they walked and talked, a chariot of fire and horses of fire separated them, and Elijah went up to heaven in a whirlwind. Elisha picked up the fallen cloak, struck the Jordan, and the water parted: the God of Elijah was still there.",
      keyVerses: [
        { ref: "2 Kings 2:11", text: "Suddenly a chariot of fire and horses of fire appeared... and Elijah went up to heaven in a whirlwind." }
      ],
      questions: [
        { q:"What did Elisha ask for as Elijah's parting gift?", opts:["Elijah's property", "A double portion of his spirit", "A place in the king's court"], correct:1, explain:"The \u2018double portion\u2019 was the firstborn's inheritance \u2014 Elisha asked to be Elijah's true successor, not just his admirer." },
        { q:"How did Elijah leave the earth?", opts:["He died in Jerusalem", "Taken up in a whirlwind, with chariots of fire appearing", "He crossed into Egypt"], correct:1, explain:"Only Enoch and Elijah leave the biblical story without dying \u2014 which is why Israel expected Elijah to return before the day of the LORD." },
        { q:"What did Elisha do with the fallen cloak?", opts:["Buried it", "Struck the Jordan, and the water parted", "Sent it to the king"], correct:1, explain:"His first act asked the only question that mattered \u2014 \u2018Where is the LORD, the God of Elijah?\u2019 \u2014 and the parted water answered it." }
      ],
      deepDive: "The transition from Elijah to Elisha is the Bible's masterclass in succession. Elisha's request for a \u2018double portion\u2019 wasn't greed for twice the miracles \u2014 it was the legal language of a firstborn heir, a claim to carry the ministry forward as a true son. Elijah's answer (\u2018if you see me taken\u2019) made the inheritance depend on staying close to the end \u2014 which Elisha did, through three separate invitations to stay behind. The whirlwind and fiery chariots gave Israel an image it never forgot; Malachi's last words promise Elijah's return, and the Gospels open with John the Baptist in camel hair by the Jordan. God's work, this chapter insists, outlives every servant who carries it \u2014 the cloak always falls to someone." },
    { id:100, book:"2 Kings", title:"Naaman washes in the Jordan", side:"l",
      passage: "Naaman, commander of Aram's army, was a great man \u2014 and a leper. A captured Israelite servant girl said the prophet in Samaria could heal him. Naaman arrived with silver, gold, and royal letters; Elisha didn't even come to the door, sending a message instead: wash seven times in the Jordan. Naaman stormed off in a rage \u2014 he had expected a dramatic ceremony, and Damascus had better rivers. His servants gently pressed him: if the prophet had asked something great, wouldn't you have done it? He went down, dipped seven times, and his flesh was restored like a little child's.",
      keyVerses: [
        { ref: "2 Kings 5:14", text: "So he went down and dipped himself in the Jordan seven times... and his flesh was restored and became clean like that of a young boy." }
      ],
      questions: [
        { q:"Who pointed Naaman toward healing?", opts:["The king of Aram", "A captured Israelite servant girl", "A fellow general"], correct:1, explain:"The chapter's chain of grace begins with its least powerful person \u2014 a slave girl who wished her captor well." },
        { q:"Why did Naaman initially storm off?", opts:["The price was too high", "He expected a dramatic ceremony, not a muddy river and no personal audience", "Elisha insulted his king"], correct:1, explain:"The cure offended his dignity precisely because it left no room for his greatness \u2014 only obedience." },
        { q:"What finally persuaded him?", opts:["A second miracle", "His servants' logic", "A letter from Elisha"], correct:1, explain:"Pride will attempt the heroic and refuse the humble \u2014 his servants saw it and said so." }
      ],
      deepDive: "Naaman's story is grace stripped of everything that flatters us. He brings enough silver and gold to buy a small city; the cure costs nothing. He expects prophet-waving ceremony; he gets a message and a muddy river. The offense is the point: healing that can't be purchased or performed leaves only humility as the way in \u2014 and humility is exactly what a great man finds hardest. Notice the servants who carry the whole plot: the captive girl who mentions the prophet, the aides who talk their general off his high horse. Jesus cited Naaman in his first sermon \u2014 a Gentile cleansed while Israel's lepers weren't \u2014 as proof that God's grace has never respected borders. The congregation tried to throw him off a cliff for it." },
    { id:101, book:"2 Kings", title:"Horses and chariots of fire", side:"r",
      passage: "The king of Aram sent an army with horses and chariots to capture one prophet \u2014 Elisha, who kept revealing his battle plans to Israel. They surrounded Dothan by night. Elisha's servant rose early, saw the encircling army, and panicked: \u201cAlas, my master! What shall we do?\u201d Elisha's answer became one of Scripture's great sentences: \u201cDon't be afraid. Those who are with us are more than those who are with them.\u201d Then he prayed \u2014 not for rescue, but for sight: \u201cOpen his eyes, LORD, that he may see.\u201d The hills were full of horses and chariots of fire all around Elisha.",
      keyVerses: [
        { ref: "2 Kings 6:16", text: "Don\u2019t be afraid... Those who are with us are more than those who are with them." }
      ],
      questions: [
        { q:"Why did Aram's king send an army after Elisha?", opts:["Elisha had insulted him", "The prophet kept revealing his secret plans to Israel's king", "To capture his gold"], correct:1, explain:"Aram's ambushes kept failing because, as his officers put it, Elisha knew the words spoken in the king's bedroom." },
        { q:"What did Elisha pray for his terrified servant?", opts:["A larger army", "\u2018Open his eyes, LORD, that he may see\u2019", "Safe passage out of the city"], correct:1, explain:"The reality hadn't changed \u2014 the fiery army was already there. Only the servant's sight needed to." },
        { q:"How did the crisis end?", opts:["A bloody battle", "Elisha led the blinded army to Samaria", "The city was destroyed"], correct:1, explain:"The chapter closes with enemies at a banquet instead of a slaughter \u2014 and the raids stopped." }
      ],
      deepDive: "This chapter gives fear its most enduring biblical answer. The servant's panic was based on accurate data \u2014 the army really was there, really surrounding them. Elisha's calm was based on more complete data: the unseen host outnumbered the visible one. His prayer is the model \u2014 not \u2018change the situation\u2019 but \u2018open his eyes,\u2019 because the protection was already present. Then comes the twist most retellings skip: handed his enemies blind and helpless, Elisha forbids killing them and orders a feast instead. Bread and water for the raiders \u2014 and the raids stop. Seeing the armies of God, it turns out, frees a person not only from fear but from vengeance." },
    { id:102, book:"2 Kings", title:"Four lepers and good news", side:"c",
      passage: "Ben-Hadad besieged Samaria until the famine turned monstrous \u2014 a donkey's head sold for eighty shekels. Elisha promised the unthinkable: by tomorrow, flour and barley would sell cheap at the city gate. That night the LORD made the Aramean army hear chariots and a great host; they fled in the dark, abandoning everything. Four lepers, starving outside the gate, stumbled into the empty camp \u2014 tents full of food, silver, and clothes. After feasting and hoarding, they stopped: \u201cWe're not doing right. This is a day of good news and we are keeping it to ourselves.\u201d They went and told the city.",
      keyVerses: [
        { ref: "2 Kings 7:9", text: "This is a day of good news and we are keeping it to ourselves... let\u2019s go at once and report this." }
      ],
      questions: [
        { q:"Who discovered that the siege army had fled?", opts:["The king's scouts", "Four starving lepers outside the gate", "Elisha himself"], correct:1, explain:"The city's least \u2014 men barred from entering it \u2014 became the first to find the deliverance." },
        { q:"What stopped the lepers mid-hoard?", opts:["Soldiers returned", "Conscience", "The food ran out"], correct:1, explain:"Their sentence has echoed for centuries as the logic of evangelism: found bread demands to be shared." },
        { q:"What had emptied the enemy camp?", opts:["A plague", "The LORD made them hear the sound of a great army, and they fled at dusk", "Israel's army attacked"], correct:1, explain:"Not a sword was raised \u2014 the siege broke on a sound God played in Aramean ears." }
      ],
      deepDive: "The relief of Samaria is a story built on reversals: the deliverance no official believed, discovered by four men the city wouldn't let inside, won by an army that never fought. The lepers' turn at the tent flap \u2014 \u2018we are not doing right\u2019 \u2014 has become the Bible's plainest picture of witness: beggars telling other beggars where the bread is. No credentials, no eloquence, just found food and the honesty not to hoard it. And the royal officer who scoffed at Elisha's forecast (\u2018even if the LORD opened the floodgates of heaven!\u2019) saw the abundance and never tasted it \u2014 the chapter's sober footnote that cynicism can stand in the middle of a miracle and still starve." },
    { id:103, book:"2 Kings", title:"Joash, the boy king", side:"l",
      passage: "When wicked queen Athaliah saw her son was dead, she massacred the royal family and seized the throne \u2014 nearly extinguishing David's line. But one infant, Joash, was hidden by his aunt in the temple for six years. In the seventh year, Jehoiada the priest armed the guards, crowned the seven-year-old beside the pillar, and the people clapped and shouted \u201cLong live the king!\u201d Joash repaired the temple and did right all the days Jehoiada instructed him \u2014 a promising reign that lasted exactly as long as his mentor lived.",
      keyVerses: [
        { ref: "2 Kings 12:2", text: "Joash did what was right in the eyes of the LORD all the years Jehoiada the priest instructed him." }
      ],
      questions: [
        { q:"How did David's royal line survive Athaliah's massacre?", opts:["It didn't", "One infant, Joash, was hidden in the temple for six years", "The family fled to Egypt"], correct:1, explain:"God's covenant with David hung on one hidden baby \u2014 and held." },
        { q:"How old was Joash when crowned?", opts:["Thirty", "Seven", "Sixteen"], correct:1, explain:"A seven-year-old beside the temple pillar, and the promise of 2 Samuel 7 was publicly alive again." },
        { q:"What was the quiet warning in Joash's story?", opts:["He did right \u2018all the years Jehoiada instructed him\u2019", "He never repaired the temple", "He refused the crown"], correct:0, explain:"After Jehoiada's death, Joash drifted badly \u2014 faith sustained only by another person's presence proved not to be his own." }
      ],
      deepDive: "The Joash story runs on a razor's edge: at one point the entire messianic promise \u2014 every \u2018son of David\u2019 hope in the Bible \u2014 resides in a single hidden infant, one aunt's courage away from extinction. His coronation is one of Scripture's most cinematic scenes. But the epitaph carries the sting: he did right \u2018all the years Jehoiada instructed him.\u2019 Borrowed conviction is real while the lender lives; Joash's collapse after his mentor's death (told fully in Chronicles, where he murders Jehoiada's own son) is the Bible's warning about secondhand faith. The question the chapter leaves behind: whose faith are you living on \u2014 and what happens to yours when they're gone?" },
    { id:104, book:"2 Kings", title:"The fall of Israel", side:"r",
      passage: "In the ninth year of Hoshea, the king of Assyria captured Samaria and deported Israel. The narrator pauses the story for a rare editorial: \u201cAll this took place because the Israelites had sinned against the LORD their God.\u201d They had feared other gods, built high places in every town, served idols though the LORD had said \u2018You shall not do this,\u2019 and stiffened their necks against every prophet sent to warn them \u2014 \u201cuntil the LORD removed them from his presence.\u201d Only Judah remained.",
      keyVerses: [
        { ref: "2 Kings 17:13\u201314", text: "The LORD warned Israel and Judah through all his prophets... But they would not listen and were as stiff-necked as their ancestors." }
      ],
      questions: [
        { q:"What happened to the northern kingdom of Israel?", opts:["It conquered Assyria", "Samaria fell and the people were deported by Assyria", "It reunited with Judah"], correct:1, explain:"After two centuries of golden calves and ignored prophets, the northern kingdom ended in exile \u2014 and never returned as a nation." },
        { q:"What does the narrator say caused the fall?", opts:["Assyria's military genius", "Israel's persistent sin and refusal to heed the prophets", "Bad harvests"], correct:1, explain:"The Bible reads the geopolitics theologically: Assyria was the instrument, but the cause was covenant-breaking." },
        { q:"What had God done before judgment fell?", opts:["Nothing", "Warned them \u2018through all his prophets\u2019 for generations", "Sent one final letter"], correct:1, explain:"The exile arrived after centuries of patience \u2014 warning upon warning, prophet after prophet, all refused." }
      ],
      deepDive: "Second Kings 17 is the Old Testament's post-mortem \u2014 the narrator stops narrating and explains. The fall of Samaria wasn't a diplomatic failure or military bad luck; it was the harvest of two hundred years of choices, beginning with Jeroboam's golden calves and running through every ignored prophet since. What stands out is the patience being mourned: God \u2018warned them through all his prophets and seers,\u2019 generation after generation, before the end came. Judgment in Scripture is never sudden \u2014 it is slow, reluctant, and preceded by every possible offer of return. The chapter is written as a warning to the survivors: Judah watched it happen, and had the same choice in front of her." },
    { id:105, book:"2 Kings", title:"Hezekiah and the Assyrian threat", side:"c",
      passage: "The Assyrian war machine that swallowed Israel came next for Judah. The field commander stood outside Jerusalem's wall shouting propaganda in Hebrew: no god of any nation has ever stopped Assyria \u2014 don't let Hezekiah deceive you into trusting the LORD. Hezekiah took the blasphemous letter, went up to the temple, and spread it out before the LORD: \u201cYou alone are God over all the kingdoms of the earth... deliver us, so that all kingdoms may know that you alone, LORD, are God.\u201d That night the angel of the LORD struck the Assyrian camp, and Sennacherib went home to die in his own temple.",
      keyVerses: [
        { ref: "2 Kings 19:19", text: "Now, LORD our God, deliver us from his hand, so that all the kingdoms of the earth may know that you alone, LORD, are God." }
      ],
      questions: [
        { q:"What was the Assyrian commander's argument?", opts:["Surrender and be spared taxes", "No nation's god had ever stopped Assyria", "Judah's walls were weak"], correct:1, explain:"The taunt lumped the living God in with the idols of conquered nations \u2014 the exact category error the story exists to correct." },
        { q:"What did Hezekiah do with the threatening letter?", opts:["Burned it publicly", "Spread it out before the LORD in the temple and prayed", "Sent tribute immediately"], correct:1, explain:"He literally laid the problem out in God's presence \u2014 the Bible's most physical picture of what prayer does with a crisis." },
        { q:"How was Jerusalem delivered?", opts:["Egypt's army arrived", "The angel of the LORD struck the Assyrian camp overnight", "Hezekiah paid Sennacherib off"], correct:1, explain:"The empire that mocked \u2018the gods of the nations\u2019 met the God who isn't one of them \u2014 without Judah drawing a sword." }
      ],
      deepDive: "Hezekiah's crisis is the Old Testament's great test case of trust under intimidation. The Assyrian speech is a masterpiece of psychological warfare \u2014 delivered in Hebrew so the common people on the wall would hear, stacked with evidence (every god so far had failed), and aimed at one target: confidence in the LORD. Hezekiah's response gives prayer its most vivid Old Testament image \u2014 the letter physically unrolled before God, the threat transferred from the king's hands to heaven's. His request is strikingly God-centered: deliver us \u2018so that all kingdoms may know that you alone are God.\u2019 The deliverance that followed was so famous even Assyrian records awkwardly omit taking Jerusalem. When the enemy's whole case is \u2018trust is naive,\u2019 this chapter is the rebuttal." },
    { id:106, book:"2 Kings", title:"Josiah and the lost book", side:"l",
      passage: "Josiah became king at eight years old, and in his eighteenth year, workers repairing the temple found something buried in the neglect: the Book of the Law. When it was read to the king, he tore his robes \u2014 the covenant had been sitting forgotten in God's own house while the nation drifted. Josiah gathered all the people, read the whole book aloud to them, renewed the covenant, and purged the land of idols in the most sweeping reform Judah ever saw: \u201cNeither before nor after Josiah was there a king like him who turned to the LORD as he did.\u201d",
      keyVerses: [
        { ref: "2 Kings 23:25", text: "Neither before nor after Josiah was there a king like him who turned to the LORD as he did \u2014 with all his heart and with all his soul and with all his strength." }
      ],
      questions: [
        { q:"What was found during the temple repairs?", opts:["Solomon's gold", "The Book of the Law", "The ark of the covenant"], correct:1, explain:"The most damning detail in the book: Scripture itself had been misplaced inside the temple built to honor it." },
        { q:"How did Josiah react to hearing it read?", opts:["He filed it away", "He tore his robes", "He doubted its authenticity"], correct:1, explain:"The words measured the distance between what God asked and what Judah had become \u2014 and the king felt it physically." },
        { q:"What did Josiah do with the rediscovered book?", opts:["Kept it private for scholars", "Read it aloud to all the people and renewed the covenant", "Sent it to Egypt"], correct:1, explain:"Reform started with public Scripture \u2014 the whole nation hearing the whole book, then acting on it." }
      ],
      deepDive: "Josiah's reform begins with the Bible's most quietly devastating image: the Word of God lost inside the house of God \u2014 present the whole time, buried under religious business-as-usual. Everything follows from the reading: the king's torn robes, the public assembly, the covenant renewed, the idols burned. It's the pattern of every genuine revival since \u2014 not new techniques but old words rediscovered and actually heard. Josiah's epitaph deliberately echoes the Shema: he turned with all his heart, soul, and strength. And yet the book is honest that one great king couldn't undo generations of drift; judgment was delayed, not canceled. Reform, Scripture suggests, must be more than one leader deep." },
    { id:107, book:"2 Kings", title:"The fall of Jerusalem", side:"r",
      passage: "The end came in stages: Nebuchadnezzar of Babylon besieged Jerusalem, deported king Jehoiachin with the craftsmen and treasures, then \u2014 after Zedekiah's rebellion \u2014 returned to finish it. The famine broke the city; the walls were breached; the temple, the palace, and every great house burned. The remnant went into exile in Babylon. Yet the book refuses to end in ashes: its final paragraph records exiled king Jehoiachin, thirty-seven years later, released from prison and given a seat at the king of Babylon's table \u2014 David's line, down but not extinguished.",
      keyVerses: [
        { ref: "2 Kings 25:27, 29", text: "Jehoiachin king of Judah was released from prison... and for the rest of his life ate regularly at the king\u2019s table." }
      ],
      questions: [
        { q:"What happened to the temple Solomon built?", opts:["It was spared", "Burned by the Babylonians along with the palace and the city", "Converted into a fortress"], correct:1, explain:"The house where the glory once descended went up in flames \u2014 the unthinkable, four centuries in the making." },
        { q:"Where were the people taken?", opts:["Egypt", "Exile in Babylon", "Assyria"], correct:1, explain:"Judah followed Israel into exile \u2014 the covenant warnings of Deuteronomy, finally and fully arrived." },
        { q:"How does the book choose to end?", opts:["With the burning temple", "With exiled king Jehoiachin freed from prison, eating at the king's table", "With Zedekiah's capture"], correct:1, explain:"A strange, deliberate flicker of hope \u2014 David's line alive at a table in Babylon, the promise not yet dead." }
      ],
      deepDive: "The fall of Jerusalem is the catastrophe the whole long story has been dreading \u2014 temple burned, city broken, promises seemingly buried in Babylonian rubble. The book could have ended at the ashes of chapter 25:21: \u2018So Judah went into captivity.\u2019 Instead the narrator adds one more paragraph, decades later and hundreds of miles away: Jehoiachin, David's heir, lifted from prison to a place at the king's table. It's a whisper, not a trumpet \u2014 but it's deliberate. The lamp of David still burns; the covenant of 2 Samuel 7 has survived the worst; and the stage is set for exile's prophets, the long wait, and a genealogy in Matthew that walks straight through Jehoiachin to Bethlehem. Even at the Bible's darkest ending, the story is not over." },
        { id:369, book:"1 Chronicles", title:"A genealogy that remembers everyone", side:"c",
      passage: "Chronicles opens with nine chapters of names \u2014 from Adam, through the patriarchs, the tribes, down to the exiles returning home. It looks like the driest possible way to start a book, until you notice who's writing and when: this was compiled after the exile, for a scattered, defeated people trying to remember who they were. Buried in the lists is a strange, tender interruption: \u201cJabez was more honorable than his brothers\u2026 Jabez cried out to the God of Israel, \u2018Oh, that you would bless me and enlarge my territory! Let your hand be with me.\u2019 And God granted his request.\u201d",
      keyVerses: [
        { ref: "1 Chronicles 4:10", text: "Jabez cried out to the God of Israel, \u201cOh, that you would bless me\u2026 Let your hand be with me.\u201d And God granted his request." }
      ],
      questions: [
        { q:"Why open a book with nine chapters of genealogy?", opts:["Filler", "To tell a scattered, defeated people after exile that they still belonged to a story", "Legal record-keeping only"], correct:1, explain:"Names are identity work for people who had lost their land and nearly lost their story." },
        { q:"What's remarkable about Jabez's prayer?", opts:["Its length", "It's a single honest, bold request embedded in a list of names", "It went unanswered"], correct:1, explain:"A flicker of an actual person and an actual prayer inside pages of ancestry." },
        { q:"What does the placement of names suggest about God's record?", opts:["Only the famous matter", "Every generation, known and unknown, is remembered by name", "Genealogies are irrelevant to faith"], correct:1, explain:"Chronicles insists ordinary, forgotten people are still part of the story God is telling." }
      ],
      deepDive: "It's easy to skip Chronicles' opening genealogies, but they're doing real work. This book was likely written after the exile, for people who had lost their land, their temple, and much of their sense of who they were. Before telling them anything else, the Chronicler tells them their names are remembered \u2014 all the way back to Adam, all the way through defeat and dispersal, down to the very people now reading it. Jabez's prayer, one verse long, interrupts the lists like a light switching on: an ordinary, unknown man cried out honestly and God answered. If you've ever felt like a footnote, Chronicles opens by insisting nobody in this story actually is one." },
    { id:370, book:"1 Chronicles", title:"David's heart for a house", side:"l",
      passage: "Once secure on the throne, David told the prophet Nathan he was ashamed to live in a palace of cedar while God's ark stayed in a tent. That night God gave Nathan a message: David would not build the temple \u2014 \u201cYou have shed much blood and have fought many wars\u201d \u2014 but his son would, and God would establish his house forever. David's response wasn't disappointment. He sat before the LORD and prayed: \u201cWho am I, LORD God, and what is my family, that you have brought me this far?\u2026 There is no one like you, LORD, and there is no God but you.\u201d",
      keyVerses: [
        { ref: "1 Chronicles 17:16", text: "Who am I, LORD God, and what is my family, that you have brought me this far?" }
      ],
      questions: [
        { q:"Why was David told he couldn't build the temple?", opts:["He wasn't wealthy enough", "He had shed much blood in war", "God didn't want a temple"], correct:1, explain:"The temple of worship needed a builder whose reign wasn't defined by warfare." },
        { q:"How did David respond to being told no?", opts:["Anger", "Worship", "He built it anyway"], correct:1, explain:"Denied his desire, he responded with gratitude rather than protest." },
        { q:"What did God promise instead?", opts:["Nothing", "David's house and throne established forever", "A smaller temple"], correct:1, explain:"The redirected desire became a permanent dynastic promise, ultimately fulfilled in Christ." }
      ],
      deepDive: "David wanted to build God a house; God turned it around and promised to build David one instead \u2014 a dynasty, not a building. What's most instructive is David's posture when his plan was declined. He didn't sulk or negotiate. He sat before the LORD \u2014 an unusual, humble position for a king \u2014 and prayed one of Scripture's most disarming prayers: who am I, and what is my family, that you have brought me this far? Being told no to a good desire, offered sincerely to God, became the occasion for some of David's deepest worship. That's a pattern worth having ready the next time your own good plan gets redirected." },
    { id:371, book:"1 Chronicles", title:"Preparing for a temple he'd never see", side:"r",
      passage: "David spent his final years gathering what Solomon would need: gold, silver, bronze, iron, cedar, and stone \u2014 \u201cwith great pains I have provided for the temple of the LORD.\u201d Then he gave the plans to Solomon and charged him publicly: \u201cBe strong and courageous, and do the work. Do not be afraid or discouraged, for the LORD God, my God, is with you.\u201d He led the people in giving, and they gave willingly, and David prayed: \u201cBut who am I, and who are my people, that we should be able to give as generously as this? Everything comes from you, and we have given you only what comes from your hand.\u201d",
      keyVerses: [
        { ref: "1 Chronicles 29:14", text: "Everything comes from you, and we have given you only what comes from your hand." }
      ],
      questions: [
        { q:"What did David spend his final years doing?", opts:["Fighting more wars", "Preparing materials and plans for a temple he'd never enter", "Retiring quietly"], correct:1, explain:"He invested enormous effort into a project he knew he would not live to see completed." },
        { q:"What's the theology behind David's prayer over the offerings?", opts:["Generosity earns merit", "Even our giving is only returning what was already His", "Wealth proves righteousness"], correct:1, explain:"He refuses to let generosity become a source of pride \u2014 the resources were never truly theirs to begin with." },
        { q:"What charge did David give Solomon?", opts:["Avoid conflict", "Be strong and courageous", "Wait for a sign"], correct:1, explain:"The same charge God gave Joshua, now passed from father to son." }
      ],
      deepDive: "There's a particular kind of faithfulness in working hard on something you'll never get to see finished. David gathered gold, silver, and stone for decades, drew up detailed plans, and handed the whole project to his son \u2014 knowing he himself would never walk through the doors. And when the people responded with lavish generosity, David's prayer refused to let anyone take credit, including himself: everything comes from you, and we have only given back what was already yours. That combination \u2014 pouring yourself into work you won't see completed, and refusing to claim credit for the resources it took \u2014 is a rare and valuable posture." },
    { id:372, book:"2 Chronicles", title:"Solomon's prayer at the dedication", side:"c",
      passage: "When the temple was finished, Solomon knelt before the whole assembly, spread his hands toward heaven, and prayed: \u201cBut will God really dwell on earth with humans? The heavens, even the highest heavens, cannot contain you. How much less this temple I have built!\u201d He asked that God would hear prayers offered toward this place \u2014 for Israelites and for the foreigner who comes from a distant land, \u201cso that all the peoples of the earth may know your name.\u201d Fire fell from heaven and consumed the offering, and the glory of the LORD filled the temple so that the priests could not enter.",
      keyVerses: [
        { ref: "2 Chronicles 6:18", text: "But will God really dwell on earth with humans? The heavens, even the highest heavens, cannot contain you. How much less this temple I have built!" }
      ],
      questions: [
        { q:"What tension does Solomon name in his prayer?", opts:["None", "That the God of the whole universe cannot be contained by any building", "That the temple was too small"], correct:1, explain:"He builds the temple and immediately admits it cannot hold the One it's built for." },
        { q:"Who does Solomon specifically pray for?", opts:["Only Israelites", "Israelites and foreigners from distant lands", "Only the priests"], correct:1, explain:"An early, surprising vision of the temple's welcome extending to outsiders \u2014 so all peoples would know God's name." },
        { q:"How did God respond to the dedication?", opts:["Silence", "Fire fell and consumed the offering; his glory filled the temple", "Nothing visible"], correct:1, explain:"An unmistakable, visible sign of acceptance and presence." }
      ],
      deepDive: "Solomon's prayer is remarkable for admitting its own inadequacy while still praying it. He builds the most magnificent structure his kingdom could produce and then says plainly: the heavens cannot contain you, how much less this house. That honesty protects the whole project from becoming an idol of its own \u2014 the temple was never meant to capture God, only to be a place where His people could turn and be heard. And his prayer for the foreigner is easy to miss but striking: centuries before the gospel went to the nations, Solomon asked that this house be a place where anyone from anywhere could come and know God's name." },
    { id:373, book:"2 Chronicles", title:"If my people will humble themselves", side:"l",
      passage: "After the dedication, God appeared to Solomon at night with both warning and promise. If the people ever turned to idols, the temple itself would become a cautionary tale to every passerby. But first, the promise that has outlasted the building by three thousand years: \u201cIf my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land.\u201d",
      keyVerses: [
        { ref: "2 Chronicles 7:14", text: "If my people, who are called by my name, will humble themselves and pray and seek my face and turn from their wicked ways, then I will hear from heaven, and I will forgive their sin and will heal their land." }
      ],
      questions: [
        { q:"What four things are asked of God's people?", opts:["Sacrifice, ritual, fasting, silence", "Humble themselves, pray, seek his face, turn from wicked ways", "Nothing"], correct:1, explain:"A real response is invited, though the initiative and the healing remain God's." },
        { q:"What three things does God promise in return?", opts:["Wealth, power, fame", "Hear from heaven, forgive their sin, heal their land", "Nothing specific"], correct:1, explain:"Attention, pardon, and restoration \u2014 addressing the relationship and its visible consequences." },
        { q:"Who is this promise specifically for?", opts:["Any nation", "\u2018My people, who are called by my name\u2019", "Only kings"], correct:1, explain:"It's addressed to God's covenant people, not a general civic principle, though its shape has echoed far beyond its original audience." }
      ],
      deepDive: "This verse has been quoted in more sermons about national revival than almost any other in Scripture, and it's worth reading in its actual setting: a specific covenant promise to a specific temple-building people, not a blank check for any nation to claim. Still, its structure teaches something permanent about how restoration works throughout the Bible. It doesn't begin with God overlooking sin; it begins with humility, prayer, seeking, and turning \u2014 and only then hearing, forgiving, and healing. Chronicles will spend the rest of its pages showing kings who did exactly this, and kings who didn't, as a working demonstration of the promise." },
    { id:374, book:"2 Chronicles", title:"Two revivals under Hezekiah and Josiah", side:"r",
      passage: "Generations after Solomon, two kings reopened what had been shut. Hezekiah found the temple doors closed and the courts abandoned; he reopened them, cleansed the temple, and called the nation back to Passover \u2014 \u201cthe people rejoiced at what God had brought about for them.\u201d Later, young King Josiah found the Book of the Law forgotten in the temple rubble during repairs. Hearing it read, he tore his robes in grief and led the most thorough reform in the kingdom's history: \u201cNeither before nor after Josiah was there a king like him who turned to the LORD as he did.\u201d",
      keyVerses: [
        { ref: "2 Chronicles 34:27", text: "Because your heart was tender and you humbled yourself before God\u2026 and because you humbled yourself before me and tore your robes and wept in my presence, I have heard you." }
      ],
      questions: [
        { q:"What had happened to the temple before Hezekiah's reform?", opts:["It was destroyed", "The doors were shut and it had fallen into neglect", "It was expanded"], correct:1, explain:"Neglect, not necessarily open rebellion, had let worship simply stop happening." },
        { q:"What triggered Josiah's reform?", opts:["A military victory", "Rediscovering the forgotten Book of the Law during temple repairs", "A prophet's rebuke"], correct:1, explain:"Scripture had been lost inside the very building meant to house it \u2014 a sobering image." },
        { q:"What was God's verdict on Josiah's response?", opts:["Too little, too late", "His tender heart and humility before tearing his robes were what God heard", "Indifference"], correct:1, explain:"The posture of the heart mattered as much as the reform that followed it." }
      ],
      deepDive: "Both stories describe the same basic tragedy: worship that had simply stopped, not through dramatic apostasy but through neglect \u2014 doors closed, Scripture misplaced inside its own building. And both describe the same remedy: a king willing to grieve honestly over what had been lost and act decisively to restore it. Josiah's detail is the most haunting \u2014 the Book of the Law itself had been buried in rubble inside the temple, forgotten by the very people meant to keep it. Chronicles doesn't record these revivals as museum pieces; it records them as evidence that 7:14's promise actually worked, generation after generation, whenever a king chose to humble himself." },
    { id:375, book:"2 Chronicles", title:"The decree that ends the story", side:"c",
      passage: "Chronicles catalogues king after king \u2014 some faithful, most not \u2014 until Jerusalem finally falls and the temple burns: \u201cThe LORD kept sending word to them through his messengers\u2026 but they mocked God's messengers, despised his words and scoffed at his prophets until the wrath of the LORD was aroused against his people and there was no remedy.\u201d Judah was carried into exile, \u201cuntil the land had enjoyed its Sabbath rests.\u201d But the very last words of the Hebrew Bible refuse to end in ruin: \u201cThis is what Cyrus king of Persia says: \u2018The LORD, the God of heaven\u2026 has appointed me to build a temple for him\u2026 Any of his people among you may go up, and may the LORD their God be with them.\u2019\u201d",
      keyVerses: [
        { ref: "2 Chronicles 36:23", text: "Any of his people among you may go up, and may the LORD their God be with them." }
      ],
      questions: [
        { q:"What is named as the reason for the exile?", opts:["Military weakness", "Persistent mockery of God's messengers despite repeated warnings", "Bad luck"], correct:1, explain:"Chronicles is careful to show judgment as the last resort after patient warning, not an arbitrary strike." },
        { q:"How does the whole Hebrew Bible traditionally end?", opts:["In despair", "With Cyrus's decree inviting the exiles to go home and rebuild", "With a battle"], correct:1, explain:"In the traditional Jewish ordering of Scripture, this is literally the Bible's final sentence." },
        { q:"What does the ending say about God's story?", opts:["It's finished and closed", "Even after total collapse, restoration is offered and the story continues", "Judgment always has the last word"], correct:1, explain:"The Hebrew Bible refuses to end on ruin \u2014 the last note is an open door home." }
      ],
      deepDive: "Chronicles was likely the closing book of the Hebrew Bible in its traditional arrangement, which makes its final sentence one of the most consequential in Scripture. After chapters cataloguing failure after failure, culminating in total destruction, the story does not end in the ashes. It ends with a pagan emperor's decree, quoted word for word, inviting a broken people to go home and build again. That is the whole shape of the biblical story compressed into one paragraph: patient warning, deserved consequence, and a door left open at the very end, wide enough for anyone who wants to go up. The Bible's last word, in its own internal ordering, is an invitation." },
    { id:108, book:"Ezra", title:"Cyrus opens the door home", side:"c",
      passage: "Seventy years after Jerusalem burned, the impossible happened: Cyrus, king of Persia \u2014 the new superpower that had swallowed Babylon \u2014 issued a decree that God's people could go home and rebuild the temple. The book's first sentence names the engine behind it: \u201cthe LORD moved the heart of Cyrus.\u201d Nearly fifty thousand made the journey, carrying back the temple articles Nebuchadnezzar had looted, funded in part by the empire that had once destroyed them.",
      keyVerses: [
        { ref: "Ezra 1:1", text: "The LORD moved the heart of Cyrus king of Persia to make a proclamation throughout his realm." }
      ],
      questions: [
        { q:"Who does the book credit for Cyrus's decree?", opts:["Cyrus's advisors", "The LORD, who moved the king's heart", "A Persian law"], correct:1, explain:"The most powerful man on earth acted \u2014 and the text calmly names God as the one moving him." },
        { q:"What had Jeremiah prophesied about this moment?", opts:["Nothing", "That the exile would last seventy years", "That the temple would never be rebuilt"], correct:1, explain:"Ezra opens by noting the decree fulfilled \u2018the word of the LORD spoken by Jeremiah\u2019 \u2014 the exile had an expiration date all along." },
        { q:"What did the returnees carry back?", opts:["Nothing but memories", "The looted temple articles", "Weapons for war"], correct:1, explain:"The stolen vessels went home, and the destroying empire's successor paid for the rebuild \u2014 restoration with interest." }
      ],
      deepDive: "Ezra opens with one of the Bible's boldest claims about history: the superpower's foreign-policy decision was God keeping a seventy-year-old promise. Isaiah had named Cyrus a century in advance; Jeremiah had set the exile's length before it began; and now a pagan king signs the paperwork of prophecy. The theology matters for every era since \u2014 God's purposes are not hostage to who holds power, and no exile, personal or national, is outside His calendar. The people who walked home were mostly grandchildren of the deported, returning to a city they'd never seen, on the strength of promises made before they were born. Faith, Ezra suggests, is often inherited hope finally cashed." },
    { id:109, book:"Ezra", title:"Weeping and shouting at the foundation", side:"l",
      passage: "The returnees built the altar first \u2014 worship before walls \u2014 and then laid the foundation of the new temple. At the dedication, the sound was unforgettable: the young shouted for joy, while the old men who had seen Solomon's temple wept aloud at how small this one was. \u201cNo one could distinguish the sound of the shouts of joy from the sound of weeping, because the people made so much noise.\u201d",
      keyVerses: [
        { ref: "Ezra 3:13", text: "No one could distinguish the sound of the shouts of joy from the sound of weeping." }
      ],
      questions: [
        { q:"What did the returnees build first?", opts:["The walls", "The altar", "Their own houses"], correct:1, explain:"Before any stone of the temple was laid, the sacrifices resumed \u2014 the relationship was the point of the return." },
        { q:"Why did the old men weep at the foundation?", opts:["Joy overwhelmed them", "They had seen Solomon's temple, and this one looked so small", "The work had failed"], correct:1, explain:"For those who remembered the former glory, the modest new beginning was grief and gift at once." },
        { q:"What was the mixed sound at the dedication?", opts:["Silence", "Joy and weeping so intertwined no one could tell them apart", "Only trumpets"], correct:1, explain:"The verse is one of Scripture's truest pictures of real life after loss \u2014 gratitude and grief in the same throat." }
      ],
      deepDive: "Ezra 3 gives us the Bible's most honest dedication service: joy and weeping tangled into one indistinguishable roar. The young, who had nothing to compare it to, shouted; the old, who remembered what was lost, wept \u2014 and the text honors both without correcting either. This is what rebuilding actually feels like: the new thing is real and the grief for the old thing is real, at the same time, in the same people. The prophet Haggai would later speak straight into this ache \u2014 \u2018the glory of this present house will be greater than the former\u2019 \u2014 and Zechariah added the line every small new beginning needs: \u2018Who dares despise the day of small things?\u2019" },
    { id:110, book:"Ezra", title:"Opposition stops the work", side:"r",
      passage: "Enemies of Judah first offered to \u2018help\u2019 build, then \u2014 refused \u2014 set out to discourage and frighten the builders. Letters to the Persian court accused Jerusalem of rebellion, and the work ground to a halt for years. Then God raised two prophets, Haggai and Zechariah, whose preaching restarted the construction \u2014 and when the governor challenged them, a search of the royal archives found Cyrus's original decree. The temple was finished \u2018according to the command of God\u2019 and the decrees of three Persian kings, and dedicated with joy.",
      keyVerses: [
        { ref: "Ezra 6:14", text: "They finished building the temple according to the command of the God of Israel and the decrees of Cyrus, Darius and Artaxerxes." }
      ],
      questions: [
        { q:"How did opposition first come dressed?", opts:["As an army", "As an offer to help build", "As a famine"], correct:1, explain:"The most dangerous opposition arrived smiling \u2014 partnership that would have diluted the work from inside." },
        { q:"What restarted the stalled construction?", opts:["A new Persian army", "The preaching of Haggai and Zechariah", "A bribe"], correct:1, explain:"Not new funding or new politics \u2014 the work resumed when God's word came through His prophets." },
        { q:"What did the archive search uncover?", opts:["Nothing", "Cyrus's original decree", "A forgery"], correct:1, explain:"The enemies' own legal challenge unearthed the document that protected and paid for the project." }
      ],
      deepDive: "Ezra 4\u20136 is a study in how good work gets stopped \u2014 and restarted. The opposition's sequence is timeless: infiltration offered as help, then discouragement, then fear, then bureaucratic warfare. The work stalled not because God's purpose failed but because the builders lost heart \u2014 which is why the remedy wasn't political but prophetic: Haggai's blunt \u2018is it a time for you to live in paneled houses while this house lies in ruins?\u2019 and Zechariah's visions of grace. Then the delicious reversal: the enemies' appeal to Persia triggers the archive search that finds Cyrus's decree, converting the opposition's paperwork into the project's funding. Delay, the book insists, is not defeat \u2014 and sometimes the attack becomes the provision." },
    { id:111, book:"Ezra", title:"Ezra: a heart set on the Word", side:"c",
      passage: "Decades after the temple was finished, Ezra came up from Babylon \u2014 a priest and scribe \u2018skilled in the Law of Moses.\u2019 The verse that defines him gives the order of a whole life: \u201cEzra had devoted himself to the study and observance of the Law of the LORD, and to teaching its decrees and laws in Israel.\u201d Study, do, teach \u2014 in that order. The king granted him everything he asked, \u201cfor the hand of the LORD his God was on him.\u201d",
      keyVerses: [
        { ref: "Ezra 7:10", text: "Ezra had devoted himself to the study and observance of the Law of the LORD, and to teaching its decrees and laws in Israel." }
      ],
      questions: [
        { q:"What three commitments defined Ezra, in order?", opts:["Teach, study, do", "Study, do, teach", "Do, teach, study"], correct:1, explain:"The order is the integrity: he learned it, lived it, and only then taught it \u2014 no step skipped." },
        { q:"What explains Ezra's favor with the king?", opts:["His wealth", "\u2018The hand of the LORD his God was on him\u2019", "Family connections"], correct:1, explain:"The refrain repeats through the chapter \u2014 the scribe's real credential was God's hand, not his r\u00e9sum\u00e9." },
        { q:"What does \u2018devoted himself\u2019 literally suggest?", opts:["A casual interest", "A set, prepared heart", "A temporary vow"], correct:1, explain:"The Hebrew says Ezra \u2018set his heart\u2019 \u2014 devotion as a decision made once and kept daily." }
      ],
      deepDive: "Ezra 7:10 is one verse that has quietly shaped centuries of teachers, pastors, and ordinary readers: study, then do, then teach \u2014 a sequence with no honest shortcuts. Study without doing breeds hypocrisy; doing without study breeds error; teaching before either breeds both. Ezra \u2018set his heart\u2019 \u2014 the same phrase used of preparing a foundation \u2014 meaning the devotion was architectural, built in before the tests came. And the chapter's repeated refrain, \u2018the hand of the LORD was on him,\u2019 links the set heart to the open doors: the favor followed the devotion, not the other way around. For anyone wanting their life to carry weight with God's word, this verse is the blueprint." },
    { id:112, book:"Ezra", title:"Grief, confession, and turning back", side:"l",
      passage: "Ezra arrived to find the community compromised \u2014 the people, priests, and leaders had intermarried into the surrounding idolatry, the very entanglement that had wrecked Israel before. Ezra tore his garments and sat appalled until evening, then prayed one of Scripture's great confessions \u2014 including himself in it: \u201cOur sins are higher than our heads... yet our God has not forsaken us.\u201d The people gathered weeping, and reform followed \u2014 painful, imperfect, and real.",
      keyVerses: [
        { ref: "Ezra 9:6", text: "I am too ashamed and disgraced... our sins are higher than our heads and our guilt has reached to the heavens." }
      ],
      questions: [
        { q:"How did Ezra respond to the news of compromise?", opts:["He resigned", "Torn garments, appalled silence, then confession", "He ignored it"], correct:1, explain:"The scholar's first act was grief \u2014 sin measured against the Word he had set his heart to." },
        { q:"What pronoun dominates Ezra's confession?", opts:["\u2018They\u2019", "\u2018Our\u2019 and \u2018we\u2019", "\u2018You\u2019"], correct:1, explain:"Ezra hadn't committed the sin, but he owned it with his people \u2014 intercession, not finger-pointing." },
        { q:"What note of hope anchors the prayer?", opts:["\u2018Our God has not forsaken us\u2019", "That Persia would help", "That the sin didn't matter"], correct:0, explain:"The confession is severe and hopeful at once \u2014 a \u2018brief moment of grace\u2019 acknowledged even while naming the guilt." }
      ],
      deepDive: "Ezra's confession models something nearly extinct: a leader who says \u2018we\u2019 about sins he didn't personally commit. He had every right to say \u2018they\u2019 \u2014 he'd just arrived \u2014 but identification, not accusation, is the grammar of intercession, the same \u2018our\u2019 Daniel and Nehemiah pray in exile. The chapter is also honest about how costly turning back can be; the reforms of chapter 10 were wrenching, and the book doesn't pretend otherwise. What it insists on is the stakes: the exile had happened for exactly this drift, and grace \u2014 \u2018a remnant, a peg in his holy place, light to our eyes\u2019 \u2014 was too precious to squander twice. Repentance, in Ezra, is love for the second chance." },
    { id:113, book:"Nehemiah", title:"Broken walls, broken heart", side:"r",
      passage: "In the Persian citadel of Susa, Nehemiah \u2014 cupbearer to the king \u2014 asked visitors from Judah how Jerusalem fared. The answer: the wall broken, the gates burned, the people in disgrace. Nehemiah sat down and wept, and for days he mourned, fasted, and prayed \u2014 confessing his people's sins as his own and pleading the promises of Moses. His prayer ends with a plan already forming: \u201cGive your servant success today by granting him favor in the presence of this man.\u201d This man was the most powerful king on earth.",
      keyVerses: [
        { ref: "Nehemiah 1:4", text: "When I heard these things, I sat down and wept. For some days I mourned and fasted and prayed before the God of heaven." }
      ],
      questions: [
        { q:"What was Nehemiah's position in Persia?", opts:["A general", "Cupbearer to the king", "A prisoner"], correct:1, explain:"He had security and access most exiles could only dream of \u2014 which makes what he risked next remarkable." },
        { q:"What was his first response to the bad news?", opts:["He organized a committee", "He wept, mourned, fasted, and prayed for days", "He wrote the king a memo"], correct:1, explain:"Before any strategy, grief and prayer \u2014 the burden went to God before it went to the king." },
        { q:"How does his prayer end?", opts:["With resignation", "With a request for favor \u2018in the presence of this man\u2019", "With blame"], correct:1, explain:"Nehemiah's praying and his planning were one motion \u2014 he asked God for the exact conversation he was preparing to have." }
      ],
      deepDive: "Nehemiah opens with a man who could have looked away. Jerusalem's ruin didn't threaten his palace job or his safety \u2014 the disgrace was eight hundred miles away. But he asked, and having asked, he wept; and having wept, he prayed for days; and having prayed, he planned. The sequence is the leadership lesson of the whole book: burden first, prayer under everything, strategy growing out of both. Notice too that his great prayer is mostly quotation \u2014 he prays Moses' own words back to God, holding the covenant to its promises. Vision, in Nehemiah, doesn't start with ambition. It starts with caring about a ruin you could have comfortably ignored." },
    { id:114, book:"Nehemiah", title:"Before the king", side:"c",
      passage: "Four months later, the moment came. The king noticed his cupbearer's sadness \u2014 dangerous, since sorrow in the royal presence could cost your life \u2014 and asked why. \u201cI was very much afraid,\u201d Nehemiah admits, \u201cbut I said to the king...\u201d and out came the request: send me to rebuild my ancestors' city. Between the king's question and his own answer, Nehemiah wedged the fastest prayer in the Bible: \u201cThen I prayed to the God of heaven, and I answered the king.\u201d He left with letters, timber, and an armed escort.",
      keyVerses: [
        { ref: "Nehemiah 2:4", text: "The king said to me, \u201cWhat is it you want?\u201d Then I prayed to the God of heaven, and I answered the king." }
      ],
      questions: [
        { q:"How long passed between the news and the opportunity?", opts:["One day", "About four months", "Ten years"], correct:1, explain:"The burden of chapter 1 waited through a season of silence before the door opened \u2014 readiness met timing." },
        { q:"What is remarkable about the prayer in 2:4?", opts:["Its length", "It happened in the breath between the king's question and Nehemiah's answer", "It was written down and read"], correct:1, explain:"Months of long prayers made the split-second one possible \u2014 the arrow prayer flew from a full quiver." },
        { q:"What did Nehemiah do despite being \u2018very much afraid\u2019?", opts:["He stayed silent", "He made the request anyway", "He resigned his post"], correct:1, explain:"Courage in Nehemiah isn't the absence of fear \u2014 it's a prepared request delivered with shaking hands." }
      ],
      deepDive: "Nehemiah 2:4 holds two kinds of prayer in one verse: the four months of fasting behind it, and the half-second flash of it \u2014 \u2018then I prayed to the God of heaven, and I answered the king.\u2019 The quick prayer worked because the long prayers had already done their forming. Notice also how prepared he was: asked what he wants, Nehemiah produces a timeline, a route, named officials, and a lumber requisition \u2014 faith and homework in the same sentence. And his own admission, \u2018I was very much afraid,\u2019 keeps the story honest: God's work advances not through fearless people but through frightened people who ask anyway. The king said yes \u2014 \u2018because the gracious hand of my God was on me.\u2019" },
    { id:115, book:"Nehemiah", title:"A sword in one hand, a trowel in the other", side:"l",
      passage: "The wall rose with astonishing speed because everyone built \u2014 priests, perfumers, goldsmiths, rulers, daughters \u2014 each family repairing the section nearest their own house. Then came the mockery: Sanballat and Tobiah jeering that a fox could break their stone wall. Then threats of attack. Nehemiah's answer became proverbial: he posted guards, armed the builders \u2014 \u201cthose who carried materials did their work with one hand and held a weapon in the other\u201d \u2014 and told the people, \u201cRemember the Lord, who is great and awesome, and fight for your families.\u201d",
      keyVerses: [
        { ref: "Nehemiah 4:14", text: "Don\u2019t be afraid of them. Remember the Lord, who is great and awesome, and fight for your families." }
      ],
      questions: [
        { q:"Who built the wall?", opts:["Hired Persian crews", "Everyone", "Only soldiers"], correct:1, explain:"Chapter 3 is a roll call of amateurs \u2014 the wall went up because the work was everyone's." },
        { q:"How did opposition escalate?", opts:["It never came", "Mockery first, then threats of violence", "A single battle"], correct:1, explain:"Ridicule is opposition's cheapest weapon and usually its first \u2014 when the wall kept rising, threats followed." },
        { q:"What was Nehemiah's double response?", opts:["Prayer alone", "\u2018We prayed to our God and posted a guard\u2019", "Retreat"], correct:1, explain:"The book's signature move: full dependence on God and full diligence in defense, refusing to choose between them." }
      ],
      deepDive: "Nehemiah 4 settles a false choice believers have argued about forever: pray or prepare? Nehemiah's answer is a single sentence \u2014 \u2018we prayed to our God and posted a guard against them day and night.\u2019 Not prayer instead of vigilance, not vigilance instead of prayer. The image of builders with a trowel in one hand and a sword in the other became the emblem of every generation doing good work under fire: the work goes on, and the work is defended. Notice also where courage gets aimed \u2014 \u2018fight for your families\u2019 \u2014 and where fear gets answered: \u2018remember the Lord.\u2019 Half the battle against discouragement, this chapter teaches, is simply remembering accurately." },
    { id:116, book:"Nehemiah", title:"\u201cShould a man like me run?\u201d", side:"r",
      passage: "With the wall nearly done, the attacks turned personal. Four times Sanballat invited Nehemiah to a \u2018meeting\u2019 on the plain of Ono \u2014 a trap \u2014 and four times came the same answer: \u201cI am carrying on a great project and cannot go down.\u201d Then an open letter of slander, then a hired prophet urging him to hide in the temple from assassins. Nehemiah saw through it: \u201cShould a man like me run away?\u201d The wall was finished in fifty-two days \u2014 and even the enemies \u201crealized that this work had been done with the help of our God.\u201d",
      keyVerses: [
        { ref: "Nehemiah 6:3", text: "I am carrying on a great project and cannot go down. Why should the work stop while I leave it and go down to you?" }
      ],
      questions: [
        { q:"How did Nehemiah answer the repeated \u2018meeting\u2019 invitations?", opts:["He attended once", "\u2018I am carrying on a great project and cannot go down\u2019", "He sent soldiers"], correct:1, explain:"He recognized distraction dressed as diplomacy \u2014 and gave the same clear no every time." },
        { q:"What was the final tactic against him?", opts:["A bribe", "A hired prophet urging him to hide in the temple", "An army at the gates"], correct:1, explain:"The subtlest attack came wrapped in religious advice \u2014 designed to make the leader sin by saving himself." },
        { q:"How long did the wall take?", opts:["Fifty-two days", "Seven years", "A generation"], correct:0, explain:"What lay ruined for well over a century was rebuilt in under two months \u2014 and even the enemies read the cause correctly." }
      ],
      deepDive: "Nehemiah 6 is the veteran's chapter \u2014 opposition's advanced course. When mockery and threats fail, the tactics get personal: endless meetings designed to drain, public slander designed to distract, and finally spiritual-sounding counsel designed to induce a discrediting compromise. Nehemiah's replies are a masterclass in focus: \u2018I am carrying on a great project and cannot go down\u2019 \u2014 no counter-attack, no self-defense tour, just the work. And his test for the false prophet is worth keeping: counsel urging self-protective sin cannot be from God, however pious it sounds. Fifty-two days after the first stone, the wall stood \u2014 and the enemies' own conclusion, that \u2018this work had been done with the help of our God,\u2019 is the vindication Nehemiah never had to write himself." },
    { id:117, book:"Nehemiah", title:"The joy of the LORD is your strength", side:"c",
      passage: "With the wall complete, the real rebuilding began. All the people gathered as one in the square, and Ezra read the Book of the Law aloud from daybreak till noon \u2014 with Levites moving through the crowd \u201cgiving the meaning so that the people understood what was being read.\u201d The people wept as the words landed. But Nehemiah and Ezra stopped them: this day is holy \u2014 go feast, send portions to those who have nothing, \u201cfor the joy of the LORD is your strength.\u201d",
      keyVerses: [
        { ref: "Nehemiah 8:10", text: "Do not grieve, for the joy of the LORD is your strength." }
      ],
      questions: [
        { q:"What did the people ask for once the wall was done?", opts:["A celebration feast", "The Book", "New houses"], correct:1, explain:"The initiative came from the people: the finished wall protected a city, but the Word rebuilt the people." },
        { q:"What did the Levites do during the reading?", opts:["Collected offerings", "Gave the meaning, so the people understood", "Guarded the gates"], correct:1, explain:"Reading plus explanation plus understanding \u2014 verse 8 is the Bible's oldest picture of teaching Scripture well." },
        { q:"Why were the weeping people told to feast instead?", opts:["Grief was forbidden", "The day was holy", "The food would spoil"], correct:1, explain:"Conviction had done its work; now joy, feasting, and generosity to the poor were the right response to grace." }
      ],
      deepDive: "Nehemiah 8 is revival in its purest recorded form: no technique, no spectacle \u2014 an attentive crowd, an open book, and teachers \u2018giving the meaning so that the people understood.\u2019 The weeping was right; the words measured how far they'd drifted. But the leaders' pastoral instinct is the chapter's surprise: they interrupt the tears and prescribe a feast, with take-out portions for the poor \u2014 because a holy day is for joy, and \u2018the joy of the LORD is your strength.\u2019 That sentence has carried more weary believers than almost any other: strength located not in willpower or circumstances but in God's own gladness, shared. Conviction opens the door; joy is what moves in and holds the house up." },
    { id:118, book:"Nehemiah", title:"Keeping what was rebuilt", side:"l",
      passage: "The story could end at the celebration \u2014 but Nehemiah is too honest. The people renewed the covenant in writing, sealed by their leaders, promising to keep the Sabbath, support the temple, and never again intermarry into idolatry. Then Nehemiah returned to Persia \u2014 and came back to find every promise broken: a room in the temple rented to Tobiah, the Levites unpaid, the Sabbath a market day. His final chapter is the unglamorous work of re-reform, ending with the book's plain last prayer: \u201cRemember me with favor, my God.\u201d",
      keyVerses: [
        { ref: "Nehemiah 13:14", text: "Remember me for this, my God, and do not blot out what I have so faithfully done for the house of my God." }
      ],
      questions: [
        { q:"What did Nehemiah find on returning from Persia?", opts:["The reforms holding strong", "Every major promise of the covenant broken", "The wall torn down"], correct:1, explain:"Even a written, sealed covenant drifted within years \u2014 the book refuses a tidy ending." },
        { q:"Who had moved into a temple storeroom?", opts:["The high priest", "Tobiah", "Persian soldiers"], correct:1, explain:"The opposition Nehemiah kept off the wall got in through compromise \u2014 a furnished room in God's own house." },
        { q:"What does the book's honest ending teach?", opts:["Reform is pointless", "Renewal isn't an event but a maintenance", "Covenants shouldn't be written"], correct:1, explain:"Nehemiah's last chapter is re-reform \u2014 the unglamorous, necessary work of keeping what was once rebuilt." }
      ],
      deepDive: "Nehemiah 13 is the chapter most success stories delete: after the wall, the revival, and the signed covenant \u2014 relapse. Tobiah in a temple room, the Levites back on their farms because no one paid them, the Sabbath trampled by commerce. Nehemiah's response isn't despair but housework: throw the furniture out, restore the portions, shut the gates, start again. The book's realism is its gift \u2014 spiritual renewal has a maintenance schedule, and drift is the default direction of every human institution and heart. His closing prayer, \u2018Remember me with favor, my God,\u2019 is the sigh of every faithful worker whose results didn't stay fixed: the outcomes belonged to God; the faithfulness was his to keep offering." },
    { id:119, book:"Esther", title:"A queen falls, a queen rises", side:"r",
      passage: "In the Persian capital, at a banquet flaunting the empire's glory, Queen Vashti refused the king's summons and was deposed. The search for her replacement swept up Hadassah \u2014 a Jewish orphan raised by her cousin Mordecai, known in Persian as Esther. She won the favor of everyone who saw her, and the crown was set on her head \u2014 while, at Mordecai's instruction, she told no one of her people. Notably absent from the entire book: any mention of God's name. He is everywhere in it, and named nowhere.",
      keyVerses: [
        { ref: "Esther 2:17", text: "The king was attracted to Esther more than to any of the other women... so he set a royal crown on her head." }
      ],
      questions: [
        { q:"Who was Esther before the palace?", opts:["A Persian noblewoman", "A Jewish orphan raised by her cousin Mordecai", "A princess of Media"], correct:1, explain:"The future queen began as an exile's orphan \u2014 the book's first quiet reversal of expectations." },
        { q:"What is famously missing from the book of Esther?", opts:["Any villain", "Any mention of God's name", "Any Persian customs"], correct:1, explain:"God is never named \u2014 and yet every \u2018coincidence\u2019 in the story bears His fingerprints. The silence is the theology." },
        { q:"What did Esther conceal at first?", opts:["Her age", "Her Jewish identity, at Mordecai's instruction", "Her wealth"], correct:1, explain:"The hidden identity becomes the story's loaded spring \u2014 everything will turn on when and how she reveals it." }
      ],
      deepDive: "Esther is the Bible's boldest literary experiment: a book about God's providence that never once says His name. No miracles, no prophets, no visions \u2014 just \u2018coincidences\u2019 stacking with suspicious precision: the right orphan wins the right crown in the right empire just before the right catastrophe. The silence is deliberate craft, teaching what most of life actually feels like: God unnamed, unseen, and unmistakably at work in timing, favor, and reversal. For every believer who has never heard an audible voice or seen a sea part, Esther is the assurance that hiddenness is not absence. The book asks to be read the way life must be lived \u2014 trusting the Author you cannot see in the plot." },
    { id:120, book:"Esther", title:"Haman's shadow", side:"c",
      passage: "The king elevated Haman above all his nobles, and everyone bowed \u2014 except Mordecai the Jew. Enraged, Haman scorned mere revenge on one man and resolved to destroy Mordecai's entire people. He cast the pur \u2014 the lot \u2014 to pick the date, and bought the king's indifferent consent with a staggering bribe. Couriers carried the decree to every province: on a single day, eleven months away, all Jews \u2014 young and old, women and children \u2014 were to be annihilated. The city of Susa was bewildered; the king and Haman sat down to drink.",
      keyVerses: [
        { ref: "Esther 3:13", text: "Dispatches were sent... with the order to destroy, kill and annihilate all the Jews \u2014 young and old, women and children \u2014 on a single day." }
      ],
      questions: [
        { q:"What sparked Haman's genocidal plan?", opts:["A military threat", "One man", "A royal command"], correct:1, explain:"Wounded pride scaled a personal slight into an attempted genocide \u2014 the book's anatomy of how hatred metastasizes." },
        { q:"How was the date of destruction chosen?", opts:["By the king", "By casting the pur", "By the army's schedule"], correct:1, explain:"Haman rolled dice to schedule a slaughter \u2014 and the \u2018random\u2019 date fell eleven months out, leaving room for everything that follows." },
        { q:"What chilling detail closes the chapter?", opts:["\u2018The king and Haman sat down to drink\u2019 while the city reeled", "A storm struck Susa", "Haman fled"], correct:0, explain:"Casual cruelty at the top, bewilderment below \u2014 the narrator's quiet indictment of power without conscience." }
      ],
      deepDive: "Esther 3 is one of Scripture's most clear-eyed portraits of evil: not a monster from nowhere, but wounded vanity given power and a budget. Haman's leap from one man's slight to a people's annihilation traces the ancient logic of every genocide since \u2014 and the king's shrugging delegation (\u2018do with the people as you please\u2019) indicts indifference as evil's essential partner. Yet the chapter plants its own undoing: the lot meant to seal the Jews' doom lands eleven months away, an accidental grace period no one intended \u2014 except, the book winks, Someone did. Proverbs had already said it: \u2018the lot is cast into the lap, but its every decision is from the LORD.\u2019 Even the dice were working the rescue." },
    { id:121, book:"Esther", title:"For such a time as this", side:"l",
      passage: "Mordecai tore his clothes and sent word to Esther: go to the king, beg for your people. Her reply was realistic \u2014 anyone entering the king's inner court unsummoned faced death unless he extended the gold scepter, and she hadn't been called in thirty days. Mordecai's answer became one of the Bible's most quoted sentences: \u201cIf you remain silent at this time, relief and deliverance for the Jews will arise from another place... And who knows but that you have come to your royal position for such a time as this?\u201d Esther's resolve closed the exchange: \u201cI will go to the king, even though it is against the law. And if I perish, I perish.\u201d",
      keyVerses: [
        { ref: "Esther 4:14", text: "And who knows but that you have come to your royal position for such a time as this?" }
      ],
      questions: [
        { q:"What risk did Esther face in approaching the king?", opts:["Mild embarrassment", "Death", "Exile only"], correct:1, explain:"The crown offered no immunity \u2014 the last queen who displeased this king was Vashti." },
        { q:"What confidence anchors Mordecai's appeal?", opts:["That Persia would relent", "That deliverance would come regardless", "That the decree was fake"], correct:1, explain:"\u2018Relief will arise from another place\u2019 \u2014 faith that the outcome was certain, and the invitation was hers to accept or lose." },
        { q:"What did Esther request before acting?", opts:["An army", "A three-day fast by all the Jews of Susa", "The king's written pardon"], correct:1, explain:"Her courage was corporate and prepared \u2014 the whole community's fasting stood behind her walk to the throne room." }
      ],
      deepDive: "Esther 4 turns on the Bible's great sentence about position and purpose: \u2018who knows but that you have come to your royal position for such a time as this?\u2019 Mordecai's theology is exact \u2014 deliverance is certain with or without Esther (\u2018from another place\u2019 is the book's nearest brush with naming God), so the question isn't whether God's purpose will stand but whether Esther will be part of it. Privilege, in this reading, is placement: her crown wasn't a reward to enjoy but a post to serve from. And her answer \u2014 \u2018if I perish, I perish\u2019 \u2014 is not fatalism but surrendered courage, sealed by three days of fasting. Every believer holding any position of comfort or access eventually meets this chapter's question." },
    { id:122, book:"Esther", title:"The sleepless night", side:"r",
      passage: "Esther approached; the scepter extended. Her request: simply that the king and Haman come to a banquet \u2014 then, at that banquet, to another. Haman left elated, then saw Mordecai unbowed and, at his wife's suggestion, built a seventy-five-foot gallows for him. That night the king couldn't sleep. He had the royal chronicles read aloud \u2014 and the page happened to record Mordecai's forgotten act of loyalty, never rewarded. When Haman arrived at dawn to request the hanging, the king asked him first: what should be done for the man the king delights to honor?",
      keyVerses: [
        { ref: "Esther 6:1", text: "That night the king could not sleep; so he ordered the book of the chronicles... to be brought in and read to him." }
      ],
      questions: [
        { q:"What turned the entire story around?", opts:["A battle", "The king's sleepless night and a \u2018random\u2019 page of chronicles", "A prophet's visit"], correct:1, explain:"Insomnia, an archive, and the exact right page \u2014 providence disguised as coincidence, the book's signature move." },
        { q:"What had the chronicles recorded?", opts:["Haman's crimes", "Mordecai's unrewarded loyalty", "Esther's identity"], correct:1, explain:"A forgotten good deed, filed away for years, surfaced at the only moment it could save a nation." },
        { q:"What bitter irony fell on Haman?", opts:["He lost his fortune", "He prescribed lavish honors thinking they were for himself", "He was exiled"], correct:1, explain:"Asked what to do for the man the king delights to honor, Haman wrote his own humiliation in detail." }
      ],
      deepDive: "Esther 6 is the hinge of the book, and it swings on the smallest of hinges: a king's insomnia. No angel, no earthquake \u2014 a man can't sleep, asks for the most boring reading available, and the scroll opens to the one entry that changes everything. The timing is surgical: had Mordecai been rewarded years earlier, the entry wouldn't exist; had the king slept, Haman's dawn request would have sailed through. The narrator plays the irony to the hilt \u2014 Haman designing his own enemy's parade \u2014 but the deeper comfort is quieter: unrewarded faithfulness is not unrecorded, and delays in recognition may be providence saving the reward for the moment it matters most. God's providence, Esther insists, runs through insomnia and filing systems as surely as through fire and cloud." },
    { id:123, book:"Esther", title:"The reversal", side:"c",
      passage: "At the second banquet, Esther revealed everything: her people were sold for destruction \u2014 \u201cthe adversary and enemy is this vile Haman.\u201d Haman was hanged on the very gallows he built for Mordecai; the king's ring passed to Mordecai; and a new decree armed the Jews to defend themselves on the appointed day. The dreaded date arrived and reversed: \u201cthe tables were turned, and the Jews got the upper hand over those who hated them.\u201d The feast of Purim was established forever \u2014 named after the pur, the lot cast against them \u2014 days of feasting, joy, and gifts to the poor.",
      keyVerses: [
        { ref: "Esther 9:1", text: "On this day the enemies of the Jews had hoped to overpower them, but now the tables were turned." }
      ],
      questions: [
        { q:"How did Haman's story end?", opts:["He escaped to Media", "Hanged on the gallows he built for Mordecai", "He was pardoned"], correct:1, explain:"The book's justice is poetic to the letter \u2014 the trap sprang on its builder." },
        { q:"What is Purim named after?", opts:["A Persian palace", "The pur", "Esther's family name"], correct:1, explain:"The festival's name enshrines the irony: the dice rolled for their doom became the anniversary of their deliverance." },
        { q:"How is Purim celebrated?", opts:["Fasting and silence", "Feasting, joy, and giving gifts", "Military parades"], correct:1, explain:"Deliverance turned outward into generosity \u2014 the rescued marking their rescue by giving." }
      ],
      deepDive: "Esther ends in total reversal \u2014 the literary structure the Hebrew Bible loves most, executed to perfection: the gallows repurposed, the ring transferred, the date of doom becoming a festival. Purim institutionalizes the lesson: every year, the story is retold with feasting and gifts to the poor, so that no generation forgets that the darkest decree carried the seed of its own undoing. And still, through it all, God stays unnamed \u2014 the book's final act of trust in its readers. The Jewish people have kept Purim through twenty-five centuries of new Hamans, and its message has never expired: the schemes of the proud overreach, hidden providence outlasts visible power, and laughter \u2014 eventually \u2014 belongs to the delivered." },
    { id:124, book:"Job", title:"The man who lost everything", side:"l",
      passage: "Job was blameless and upright, the greatest man of the east \u2014 and heaven itself testified to it. Then, in a scene Job never sees, the accuser challenges: does Job fear God for nothing? Take away the blessings and he will curse You. In one day, messengers stack catastrophe on catastrophe: oxen, sheep, camels, servants \u2014 and then all ten children, killed as the house fell. Job tore his robe, shaved his head, and fell to the ground \u2014 in worship: \u201cThe LORD gave and the LORD has taken away; may the name of the LORD be praised.\u201d",
      keyVerses: [
        { ref: "Job 1:21", text: "The LORD gave and the LORD has taken away; may the name of the LORD be praised." }
      ],
      questions: [
        { q:"What was the accuser's challenge?", opts:["That Job was secretly wicked", "That Job's faith was rented", "That Job was weak"], correct:1, explain:"\u2018Does Job fear God for nothing?\u2019 \u2014 the question beneath the whole book: can God be loved for Himself alone?" },
        { q:"What did Job never learn in the book?", opts:["That his children died", "The heavenly backstory of chapters 1\u20132", "That he was righteous"], correct:1, explain:"The reader sees the courtroom; Job never does \u2014 which makes his story every sufferer's story." },
        { q:"What was Job's first act after losing everything?", opts:["He cursed the day", "He fell to the ground in worship", "He fled the country"], correct:1, explain:"Grief and worship in the same motion \u2014 torn robes, shaved head, and \u2018blessed be the name of the LORD.\u2019" }
      ],
      deepDive: "Job opens by dismantling the oldest religious assumption on earth: that goodness guarantees blessing and suffering proves sin. Heaven's own verdict declares Job blameless before the losses begin \u2014 so whatever his suffering means, it cannot mean punishment. The accuser's question is the book's engine: is faith just a transaction \u2014 worship in exchange for protection? Job's worship amid the wreckage answers it before the debates even start. Crucially, Job is never shown the heavenly scenes; he suffers inside the same unknowing every grieving person inhabits. The book's honesty begins here: some suffering has reasons the sufferer will never be told, and worship is still possible \u2014 not because the pain makes sense, but because God is still God." },
    { id:125, book:"Job", title:"Seven days of silence", side:"r",
      passage: "A second wave took Job's health \u2014 painful sores from head to foot, a man scraping himself with pottery in the ashes. His wife broke: \u201cCurse God and die!\u201d Job answered, \u201cShall we accept good from God, and not trouble?\u201d Then his three friends came. When they saw him from a distance, they didn't recognize him. They wept, tore their robes \u2014 and then did the best thing they would do in the entire book: they sat with him on the ground seven days and seven nights, and no one said a word, because they saw how great his suffering was.",
      keyVerses: [
        { ref: "Job 2:13", text: "Then they sat on the ground with him for seven days and seven nights. No one said a word to him, because they saw how great his suffering was." }
      ],
      questions: [
        { q:"What was the friends' best moment in the whole book?", opts:["Their speeches", "Seven days of silent presence on the ground beside him", "Their final apology"], correct:1, explain:"Before they ruined it with explanations, they got comfort exactly right: presence without commentary." },
        { q:"How did Job answer his wife's despair?", opts:["He agreed with her", "\u2018Shall we accept good from God, and not trouble?\u2019", "He said nothing"], correct:1, explain:"Job refused a faith that only holds in fair weather \u2014 without pretending the trouble wasn't trouble." },
        { q:"What made the friends finally start talking?", opts:["Job's questions", "Job's anguished lament in chapter 3", "A command from God"], correct:1, explain:"When Job cursed the day of his birth, the friends abandoned silence for theology \u2014 and the comfort ended." }
      ],
      deepDive: "Job 2 contains the Bible's finest grief counseling, performed by the same men who spend the next thirty chapters botching it: they came, they wept, and they sat in silence for seven days \u2014 the origin of the Jewish practice of sitting shiva. Their presence said what presence says: you are not alone, and your pain deserves witness. Everything went wrong the moment they opened their mouths \u2014 not because they spoke, but because they spoke to defend a system: suffering must be deserved, so Job must have sinned. The lesson has never aged: the sufferer's greatest need is rarely an explanation, and the comforter's greatest temptation is always to provide one. Sit longer; theorize less; let the hurting person speak first." },
    { id:126, book:"Job", title:"The friends' bad math", side:"c",
      passage: "Three rounds of speeches follow, all built on one equation: suffering equals punishment, therefore Job must repent of whatever he did. Eliphaz appeals to visions, Bildad to tradition, Zophar to blunt certainty \u2014 eloquent, orthodox-sounding, and wrong, because the reader knows what they don't: Job is blameless. Job's replies are raw \u2014 he protests his innocence, accuses God of injustice, demands a hearing, and wishes he'd never been born \u2014 and yet keeps aiming his anguish at God rather than away from Him: \u201cThough he slay me, yet will I hope in him.\u201d",
      keyVerses: [
        { ref: "Job 13:15", text: "Though he slay me, yet will I hope in him; I will surely defend my ways to his face." }
      ],
      questions: [
        { q:"What single equation drives all three friends?", opts:["Suffering is random", "Suffering equals punishment, so Job must have sinned", "God is absent"], correct:1, explain:"Their theology had no category for innocent suffering \u2014 so they redefined Job's innocence rather than their system." },
        { q:"What makes their speeches dangerous rather than just wrong?", opts:["Bad grammar", "They sound pious and quote true-sounding maxims", "They deny God exists"], correct:1, explain:"Almost every line could be stitched on a pillow; applied to Job, they became cruelty with a religious accent." },
        { q:"Where does Job keep directing his protest?", opts:["Away from God, into silence", "At God", "At his friends only"], correct:1, explain:"Job's fury stays face-to-face with God \u2014 which the book will ultimately call speaking \u2018rightly\u2019 of Him." }
      ],
      deepDive: "The long middle of Job is the Bible auditing its own popular theology. The friends say things that sound like Proverbs \u2014 sow wickedness, reap trouble \u2014 and the book lets them talk for chapters precisely so the reader can watch true-sounding principles become false accusations when forced onto the wrong life. Proverbs describes how life generally works; Job exists to protest that it doesn't always work that way, and God endorses the protest. Meanwhile Job models something rarely taught: faith that argues. He never curses God; he cross-examines Him \u2014 anger, despair, and hope all delivered to God's address. The book's shocking final verdict will side with the arguer over the defenders: honest wrestling honors God more than tidy explanations that bend the truth." },
    { id:127, book:"Job", title:"\u201cI know that my Redeemer lives\u201d", side:"l",
      passage: "At his lowest \u2014 abandoned, diseased, accused by his comforters \u2014 Job's faith suddenly vaults past everything visible: \u201cI know that my redeemer lives, and that in the end he will stand on the earth. And after my skin has been destroyed, yet in my flesh I will see God; I myself will see him with my own eyes \u2014 I, and not another. How my heart yearns within me!\u201d A go'el \u2014 a redeemer \u2014 was the kinsman who bought back what was lost. Job, with no human left to defend him, stakes everything on a Defender he cannot see.",
      keyVerses: [
        { ref: "Job 19:25", text: "I know that my redeemer lives, and that in the end he will stand on the earth." }
      ],
      questions: [
        { q:"What is a go'el \u2014 a \u2018redeemer\u2019?", opts:["A judge", "The kinsman who buys back what was lost and defends the family's cause", "A priest"], correct:1, explain:"The word from Ruth's story \u2014 Boaz's role \u2014 now applied by Job to God Himself: a Defender bound to his case by kinship." },
        { q:"When does this declaration erupt?", opts:["After his restoration", "At his lowest point", "In his youth"], correct:1, explain:"The book's highest peak of faith rises from its deepest valley \u2014 hope with no visible support beneath it." },
        { q:"What does Job expect \u2018in my flesh\u2019?", opts:["Nothing after death", "To see God with his own eyes", "Only his children's future"], correct:1, explain:"Reaching past death itself, Job glimpses resurrection hope centuries before it was fully revealed." }
      ],
      deepDive: "Job 19:25 is the Old Testament's lightning flash \u2014 a moment where a suffering man, arguing in the dark, suddenly says more than he can possibly know. His go'el language borrows the kinsman-redeemer of Israel's law: the relative obligated to buy back the enslaved, avenge the wronged, restore the lost \u2014 Boaz's role in Ruth. With every earthly advocate gone, Job asserts a living Redeemer who will stand on the earth at the last and vindicate him personally: \u2018I myself will see him with my own eyes.\u2019 Christians for two millennia have heard the gospel humming under these words \u2014 Handel set them at the heart of Messiah. Whatever Job understood in the moment, the book preserves the truth every sufferer needs: your case is not closed, your Defender lives, and seeing Him is the ending." },
    { id:128, book:"Job", title:"God answers from the whirlwind", side:"r",
      passage: "After the humans finish, God speaks \u2014 out of the whirlwind, and not with answers but with questions, more than seventy of them: \u201cWhere were you when I laid the earth's foundation? Have you entered the storehouses of the snow? Can you bind the chains of the Pleiades? Does the hawk take flight by your wisdom?\u201d A tour of oceans, stars, weather, and wild creatures \u2014 lions, mountain goats, the ostrich, the war horse \u2014 none of it explaining Job's suffering, all of it revealing the Questioner. Job's hand goes over his mouth.",
      keyVerses: [
        { ref: "Job 38:4", text: "Where were you when I laid the earth\u2019s foundation? Tell me, if you understand." }
      ],
      questions: [
        { q:"How does God answer Job?", opts:["With a full explanation of chapters 1\u20132", "With questions", "With silence"], correct:1, explain:"God never explains the accuser, the wager, or the why \u2014 He reveals Himself instead, and somehow that suffices." },
        { q:"What is the effect of the creation tour?", opts:["It humiliates Job cruelly", "It re-sizes the frame", "It proves nature is random"], correct:1, explain:"The wild, untamed splendor \u2014 much of it useless to humans \u2014 testifies to wisdom vaster than Job's questions." },
        { q:"What does Job do when God finishes the first speech?", opts:["He renews his arguments", "He puts his hand over his mouth", "He faints"], correct:1, explain:"Not crushed but quieted \u2014 the demanded hearing happened, and the encounter outweighed the explanation." }
      ],
      deepDive: "God's speeches are the Bible's strangest comfort: the sufferer demands answers and receives, instead, wonder. Not one word about the accuser or the wager \u2014 Job never learns his \u2018why.\u2019 What he gets is a Creator delighting in a universe far wilder than human-centered theology imagined: rain on lands where no one lives, the ostrich's absurd design, the untamable leviathan. The implicit argument: a wisdom that runs all this exceeds what a creature could audit \u2014 and can therefore be trusted precisely where it can't be explained. Notice too what God does not do: He never condemns Job for the questions. He shows up \u2014 which was, underneath everything, what Job actually asked for. The presence, not the explanation, turned out to be the answer." },
    { id:129, book:"Job", title:"Restored \u2014 and the friends rebuked", side:"c",
      passage: "Job's last words melt into worship: \u201cMy ears had heard of you, but now my eyes have seen you\u201d \u2014 and he repents, not of secret sins, but of speaking beyond his knowledge. Then the thunderclap: God turns to Eliphaz \u2014 \u201cI am angry with you and your two friends, because you have not spoken the truth about me, as my servant Job has.\u201d The defenders are wrong; the arguer spoke rightly. They must offer sacrifice, and Job \u2014 the man they tormented \u2014 must pray for them. The LORD restored Job's fortunes doubled, gave him ten more children, and he died old and full of years.",
      keyVerses: [
        { ref: "Job 42:5", text: "My ears had heard of you but now my eyes have seen you." }
      ],
      questions: [
        { q:"What is God's shocking verdict on the speeches?", opts:["The friends spoke rightly; Job erred", "Job spoke rightly of God; the friends did not", "Everyone spoke rightly"], correct:1, explain:"Honest anguish aimed at God was truer speech than polished defenses of a false system." },
        { q:"When was Job's restoration timed?", opts:["Immediately after God's speech", "\u2018After Job had prayed for his friends\u2019", "Years later"], correct:1, explain:"The text ties the healing to the moment Job interceded for the men who had wounded him." },
        { q:"What changed most for Job by the end?", opts:["Only his possessions", "His knowledge became sight", "His theology of retribution was confirmed"], correct:1, explain:"The suffering never got explained; the Sufferer got encountered \u2014 and secondhand faith became firsthand." }
      ],
      deepDive: "Job's ending delivers two verdicts the reader never sees coming. First: God sides with the man who raged, questioned, and demanded a hearing \u2014 \u2018my servant Job has spoken rightly of me\u2019 \u2014 over the friends who defended God with untruths. Heaven, it turns out, prefers honest wrestling to dishonest tidiness; God would rather be argued with than lied about. Second: the restoration begins \u2018after Job had prayed for his friends\u2019 \u2014 grace flowing through the wounded man toward his tormentors before it doubled back to him. The losses were not erased (ten new children don't replace ten graves; the book knows it), but Job's deepest gain is named in his own words: hearing became seeing. That, not the doubled flocks, is the book's idea of a happy ending." },
    { id:130, book:"Psalms", title:"Psalm 1 \u2014 Two ways to live", side:"l",
      passage: "The songbook of the Bible opens not with a song but a signpost: two ways, two trees, two ends. Blessed is the one who doesn't walk in step with the wicked \u2014 whose delight is in the law of the LORD, meditating on it day and night. That person is \u201clike a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither.\u201d The wicked are not so \u2014 chaff the wind blows away. Every psalm that follows grows from this fork in the road.",
      keyVerses: [
        { ref: "Psalm 1:2\u20133", text: "Whose delight is in the law of the LORD... That person is like a tree planted by streams of water, which yields its fruit in season." }
      ],
      questions: [
        { q:"What word describes the blessed person's relationship to God's word?", opts:["Duty", "Delight", "Fear"], correct:1, explain:"Not grim obligation but appetite \u2014 the word is where this person's mind goes when it's free to go anywhere." },
        { q:"What is the central image for the rooted life?", opts:["A fortress", "A tree planted by streams", "A mountain"], correct:1, explain:"Planted, not wild \u2014 deliberately positioned by the water source, drawing life invisibly and constantly." },
        { q:"What does \u2018fruit in season\u2019 quietly acknowledge?", opts:["Constant visible success", "Seasons", "That trees don't bear fruit"], correct:1, explain:"The rooted life still has winters; the promise is fruitfulness in season, not performance on demand." }
      ],
      deepDive: "Psalm 1 is the gatekeeper of the whole Psalter \u2014 read it first, and every other psalm makes sense as the songs of people trying to be that tree. Its progression is subtle: walking, then standing, then sitting with scoffers \u2014 drift pictured as a gradual slowing into the wrong company. Against it stands one habit: delight-driven meditation, the word turned over day and night like food being chewed. The tree image rewards a long look \u2014 planted (someone chose the spot), by streams (the source never depends on rain), fruit in season (seasons exist; barrenness in winter isn't failure), unwithered leaves (life persists even between harvests). The psalm doesn't promise the rooted life is easy. It promises it is alive." },
    { id:131, book:"Psalms", title:"Psalm 23 \u2014 The Lord is my shepherd", side:"r",
      passage: "The best-known poem ever written is a former shepherd's confession: \u201cThe LORD is my shepherd, I lack nothing.\u201d Green pastures, quiet waters, a restored soul, right paths. Then the valley: \u201cEven though I walk through the darkest valley, I will fear no evil, for you are with me\u201d \u2014 and the pronoun shifts from talking about God to talking to Him. A table spread in the presence of enemies, an anointed head, an overflowing cup \u2014 and goodness and mercy not merely available but pursuing: \u201csurely goodness and love will follow me all the days of my life.\u201d",
      keyVerses: [
        { ref: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me." }
      ],
      questions: [
        { q:"What quietly changes at the darkest valley?", opts:["The scenery only", "The pronoun", "The shepherd disappears"], correct:1, explain:"In the sunlight David describes his shepherd; in the dark he addresses Him \u2014 the valley turns theology into conversation." },
        { q:"What does the psalm promise about dark valleys?", opts:["That the sheep will never enter them", "Not avoidance but accompaniment", "That they last forever"], correct:1, explain:"The path of the good shepherd goes through the valley, not around it \u2014 and the presence is the comfort." },
        { q:"What do goodness and mercy do in the final verse?", opts:["Wait passively", "Follow", "Depart"], correct:1, explain:"The Hebrew verb is used for chasing \u2014 David, once hunted by Saul, now finds himself hunted by mercy." }
      ],
      deepDive: "Psalm 23's power lives in its details. \u2018I lack nothing\u2019 is a claim about the shepherd, not the circumstances \u2014 David wrote from a life full of caves and pursuers. \u2018He makes me lie down\u2019: sheep won't rest while afraid; rest here is the shepherd's achievement. The famous pronoun shift at verse 4 \u2014 \u2018he leads\u2019 becoming \u2018you are with me\u2019 \u2014 is the psalm's secret: distance collapses precisely in the dark. The rod and staff (defense and rescue) comfort because the shepherd is armed on the sheep's behalf. And the last verb undoes David's whole biography: the man pursued by Saul, by Absalom, by his own failures, declares that what's actually chasing him \u2014 all the days of his life \u2014 is goodness and mercy, herding him home." },
    { id:132, book:"Psalms", title:"Psalm 8 \u2014 What is mankind?", side:"c",
      passage: "A night-sky psalm: \u201cWhen I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place \u2014 what is mankind that you are mindful of them, human beings that you care for them?\u201d The honest question of anyone who has felt small under the stars. The answer astonishes: \u201cYou have made them a little lower than the angels and crowned them with glory and honor. You made them rulers over the works of your hands.\u201d The psalm is framed top and bottom by its real point: \u201cLORD, our Lord, how majestic is your name in all the earth!\u201d",
      keyVerses: [
        { ref: "Psalm 8:4", text: "What is mankind that you are mindful of them, human beings that you care for them?" }
      ],
      questions: [
        { q:"What prompts the psalm's central question?", opts:["A battle", "The night sky", "A coronation"], correct:1, explain:"The bigger the cosmos looks, the sharper the question: why would its Maker be mindful of us?" },
        { q:"What is the psalm's stunning answer about humanity?", opts:["Humans are insignificant", "Crowned with glory and honor", "Humans are equal to God"], correct:1, explain:"Genesis 1's image-bearing dignity set to music: smallness under the stars, royalty in God's design." },
        { q:"Whose praise does the psalm put first?", opts:["Kings and warriors", "Children and infants", "Angels only"], correct:1, explain:"God silences His foes not with armies but with the praise of the smallest voices \u2014 a reversal Jesus quoted in the temple." }
      ],
      deepDive: "Psalm 8 holds the two truest things about being human in one frame: cosmic smallness and conferred royalty. The night sky isn't wrong \u2014 we are tiny \u2014 but the psalm refuses to let size dictate worth: dignity comes from the Crowner, not the measurements. \u2018A little lower than the angels, crowned with glory\u2019 restates Genesis 1 as doxology, and its claim lands on every human being, not an elite. The New Testament quotes this psalm more than almost any other \u2014 Hebrews reads it as fulfilled in Jesus, the true human who finally wears the crown rightly. And its frame matters: the meditation on human dignity begins and ends with God's majesty \u2014 because in Scripture, human worth is never diminished by God's greatness. It is derived from it." },
    { id:133, book:"Psalms", title:"Psalm 42 \u2014 Talking to your own soul", side:"l",
      passage: "\u201cAs the deer pants for streams of water, so my soul pants for you, my God.\u201d But this is a psalm of drought \u2014 the writer is far from the temple, taunted (\u201cWhere is your God?\u201d), remembering better days, drinking his own tears. Then he does something remarkable: he interrogates himself. \u201cWhy, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.\u201d The question and the answer repeat like a refrain \u2014 a man preaching to his own downcast soul.",
      keyVerses: [
        { ref: "Psalm 42:11", text: "Why, my soul, are you downcast?... Put your hope in God, for I will yet praise him, my Savior and my God." }
      ],
      questions: [
        { q:"What is the psalmist's situation?", opts:["Triumphant in the temple", "Far from worship, taunted, remembering better days through tears", "Newly crowned"], correct:1, explain:"This is spiritual homesickness set to music \u2014 thirst for a God who feels distant." },
        { q:"What unusual move does the psalmist make?", opts:["He curses his enemies", "He talks to his own soul", "He stops praying"], correct:1, explain:"Instead of only listening to his despair, he addresses it \u2014 the difference between hearing yourself and preaching to yourself." },
        { q:"What tense carries the hope?", opts:["Past", "Future", "Present"], correct:1, explain:"\u2018Yet\u2019 is the psalm's hinge: praise postponed is not praise abandoned." }
      ],
      deepDive: "Psalm 42 gave the church its oldest mental-health strategy: stop only listening to yourself and start talking to yourself. The psalmist's despair speaks all day (\u2018where is your God?\u2019, \u2018I remember how it used to be\u2019); his faith interrupts it \u2014 \u2018Why, my soul, are you downcast? Put your hope in God.\u2019 Notice what the psalm doesn't do: it never denies the sadness, never rushes the recovery, and never pretends the taunts don't sting \u2014 tears are called food here. The refrain repeats because one round rarely settles a soul; hope in dark seasons is a discipline of repetition. And \u2018I will yet praise him\u2019 plants a flag in the future: the praise is scheduled, even while the tears are current. Deep calls to deep \u2014 and the deepest call is hope's." },
    { id:134, book:"Psalms", title:"Psalm 46 \u2014 Be still and know", side:"r",
      passage: "\u201cGod is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea.\u201d The psalm imagines the worst \u2014 creation itself uncreating \u2014 and answers with a river: \u201cThere is a river whose streams make glad the city of God... God is within her, she will not fall.\u201d Nations rage, kingdoms totter, the earth melts at His voice. Then the command that has steadied centuries: \u201cBe still, and know that I am God; I will be exalted among the nations.\u201d",
      keyVerses: [
        { ref: "Psalm 46:10", text: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth." }
      ],
      questions: [
        { q:"What scale of trouble does the psalm face down?", opts:["Minor irritations", "The earth giving way, mountains falling into the sea", "Only personal sadness"], correct:1, explain:"The psalm earns its calm by imagining maximum catastrophe first \u2014 and refusing fear even there." },
        { q:"Who is \u2018be still\u2019 addressed to in context?", opts:["Only quiet believers", "The raging nations", "The mountains"], correct:1, explain:"The command silences the world's uproar and the heart's \u2014 cease the frantic effort; the outcome is His." },
        { q:"What is the city's security in the psalm?", opts:["Its walls", "\u2018God is within her\u2019", "Its army"], correct:1, explain:"While oceans roar outside, a quiet river runs inside \u2014 peace sourced in presence, not circumstances." }
      ],
      deepDive: "Psalm 46 is the psalm Luther turned into \u2018A Mighty Fortress,\u2019 and its architecture explains its power: it opens with the world's loudest imagery \u2014 earthquakes, roaring seas, raging nations \u2014 and closes in commanded stillness. The contrast of waters is the key: chaotic oceans outside the city, and inside, a gentle river making the city glad \u2014 two kinds of water, two sources of security. \u2018Be still\u2019 is not a relaxation tip; the Hebrew means something like \u2018cease striving \u2014 drop your hands\u2019 \u2014 addressed first to warring nations and, ever since, to every believer white-knuckling outcomes that were never theirs to control. The knowing follows the stilling: some certainties about God are only audible when the frantic activity stops. Twice the psalm plants its refrain like a flag: the LORD Almighty is with us." },
    { id:135, book:"Psalms", title:"Psalm 51 \u2014 Create in me a clean heart", side:"c",
      passage: "The superscription names the wound: \u2018when the prophet Nathan came to him after David had committed adultery with Bathsheba.\u2019 David's prayer refuses every excuse: \u201cAgainst you, you only, have I sinned... Surely I was sinful at birth.\u201d He asks not for image repair but for surgery: \u201cCreate in me a pure heart, O God, and renew a steadfast spirit within me... Restore to me the joy of your salvation.\u201d And he names what God actually wants: \u201cMy sacrifice, O God, is a broken and contrite heart \u2014 you, God, will not despise.\u201d",
      keyVerses: [
        { ref: "Psalm 51:17", text: "My sacrifice, O God, is a broken spirit; a broken and contrite heart you, God, will not despise." }
      ],
      questions: [
        { q:"What does David NOT do in this psalm?", opts:["Confess", "Excuse, minimize, or blame", "Ask for cleansing"], correct:1, explain:"No \u2018if I have offended,\u2019 no context, no Bathsheba-blaming \u2014 the psalm's power is its refusal of every escape hatch." },
        { q:"What does \u2018create\u2019 in verse 10 imply?", opts:["Minor repair", "The word from Genesis 1", "A fresh start he can achieve himself"], correct:1, explain:"Bara \u2014 the verb of creation ex nihilo \u2014 confesses that a clean heart is beyond renovation; it must be made new." },
        { q:"What sacrifice does God never despise?", opts:["The largest offering", "A broken and contrite heart", "Public penance"], correct:1, explain:"The king could afford a thousand bulls; the psalm says the acceptable offering was the one thing money can't fake." }
      ],
      deepDive: "Psalm 51 is what repentance sounds like with all the exits sealed. Written from the rubble of the Bathsheba catastrophe, it models confession's anatomy: full ownership (\u2018my transgressions,\u2019 four different Hebrew words for sin), right sizing (\u2018against you, you only\u2019 \u2014 not denying Uriah's blood, but naming sin's deepest offense), and a request that goes beneath behavior to nature: create \u2014 the Genesis word \u2014 a clean heart, because this one can't be laundered. Notice what David fears most: not consequences but distance \u2014 \u2018do not cast me from your presence.\u2019 And notice the psalm's economics: the man who could sacrifice herds offers the one thing God won't despise, a broken heart. Three thousand years of sinners have found their own prayer already written here. That is the psalm's quiet mercy: the way back is public domain." },
    { id:136, book:"Psalms", title:"Psalm 103 \u2014 Bless the LORD, O my soul", side:"l",
      passage: "David rallies his own inner life to worship: \u201cPraise the LORD, my soul; all my inmost being, praise his holy name \u2014 and forget not all his benefits.\u201d Then the inventory: who forgives all your sins, heals your diseases, redeems your life from the pit, crowns you with love and compassion. The psalm's summit is the Bible's own self-description of God: \u201cThe LORD is compassionate and gracious, slow to anger, abounding in love... As far as the east is from the west, so far has he removed our transgressions from us. As a father has compassion on his children, so the LORD has compassion on those who fear him; for he knows how we are formed, he remembers that we are dust.\u201d",
      keyVerses: [
        { ref: "Psalm 103:12", text: "As far as the east is from the west, so far has he removed our transgressions from us." }
      ],
      questions: [
        { q:"What is the psalm's opening command aimed at?", opts:["The congregation", "David's own soul", "The nations"], correct:1, explain:"Worship here begins as memory discipline \u2014 the soul must be told, because the soul forgets." },
        { q:"Why east from west, and not north from south?", opts:["Poetic accident", "East and west never meet", "Geography of Israel"], correct:1, explain:"Travel north and you'll eventually head south; travel east and you never start going west \u2014 removal without limit." },
        { q:"What does God \u2018remember\u2019 about us?", opts:["Every failure permanently", "That we are dust", "Nothing at all"], correct:1, explain:"The same God who removes sins infinitely holds our weakness gently \u2014 He knows the material He's working with." }
      ],
      deepDive: "Psalm 103 is the Old Testament's fullest portrait of grace, and it runs on deliberate remembering \u2014 \u2018forget not\u2019 \u2014 because ingratitude is rarely rebellion and usually amnesia. Its center quotes God's self-revelation to Moses (\u2018compassionate and gracious, slow to anger\u2019) and then stretches mercy across every axis: as high as the heavens (vertical), as far as east from west (horizontal \u2014 an infinite, unmeetable distance), as tender as a father (relational). And underneath it all, the reason: \u2018he remembers that we are dust.\u2019 God's gentleness is not naivety about our failures but accurate knowledge of our frame. The psalm ends where it began \u2014 \u2018Praise the LORD, my soul\u2019 \u2014 the speaker's own heart being the first and hardest congregation. Gratitude, here, is a discipline of accurate memory." },
    { id:137, book:"Psalms", title:"Psalm 139 \u2014 Searched and known", side:"r",
      passage: "The most intimate psalm: \u201cYou have searched me, LORD, and you know me... Before a word is on my tongue you, LORD, know it completely.\u201d Nowhere escapes the presence \u2014 heavens, depths, the far side of the sea, even darkness, which \u201cis as light to you.\u201d Then the womb: \u201cYou created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made.\u201d All my days were written before one came to be. The psalm ends by inviting the search it began with: \u201cSearch me, God, and know my heart... lead me in the way everlasting.\u201d",
      keyVerses: [
        { ref: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." }
      ],
      questions: [
        { q:"How completely does God know the psalmist?", opts:["Only his actions", "Thoughts from afar, words before they're spoken, every day before it dawned", "Only his prayers"], correct:1, explain:"The knowledge is total and prior \u2014 nothing about us is news to God." },
        { q:"What image describes God's work in the womb?", opts:["Assembly", "Knitting", "Accident"], correct:1, explain:"\u2018Knit together\u2019 and \u2018fearfully and wonderfully made\u2019 ground human worth in intentional making \u2014 before any achievement." },
        { q:"How does the psalm end?", opts:["Hiding from the searching God", "Inviting the search", "With fear"], correct:1, explain:"The psalmist's response to being fully known is to open the last doors himself \u2014 known-ness embraced as safety." }
      ],
      deepDive: "Psalm 139 takes the fact people find most frightening \u2014 being completely known \u2014 and turns it into the deepest comfort. Every hiding place is tested and closed: distance (the far side of the sea), darkness (light to Him), even time (days written before one came to be). For the psalmist this total exposure isn't surveillance but embrace: \u2018you hem me in, behind and before\u2019 \u2014 the language of protection, not capture. The womb passage grounds human dignity earlier than any accomplishment or failure: worth was knitted in, in the dark, before anyone was watching \u2014 except Someone was. And the ending is the psalm's bravest move: having described God's inescapable search, David requests it \u2014 \u2018search me, know my heart, see if there is any offensive way in me.\u2019 Only someone convinced that the Searcher is for him could pray that. That conviction is the psalm." },
        { id:381, book:"Psalms", title:"Psalm 63 \u2014 My soul thirsts for you", side:"c",
      passage: "Written in a dry and weary land, David's opening line names his ache with total clarity: \u201cYou, God, are my God, earnestly I seek you; I thirst for you, my whole being longs for you, in a dry and parched land where there is no water.\u201d He remembers seeing God's power and glory in the sanctuary, and declares, \u201cBecause your love is better than life, my lips will glorify you.\u201d Even lying awake at night, he thinks of God: \u201cOn my bed I remember you; I think of you through the watches of the night.\u201d",
      keyVerses: [
        { ref: "Psalm 63:1", text: "You, God, are my God, earnestly I seek you; I thirst for you, my whole being longs for you, in a dry and parched land where there is no water." }
      ],
      questions: [
        { q:"What physical image describes David's longing?", opts:["Hunger for bread", "Thirst in a dry, parched land", "Cold in winter"], correct:1, explain:"Written literally in a wilderness, the metaphor and his actual circumstances match exactly." },
        { q:"What does David say is better than life itself?", opts:["Victory", "God's love", "Wealth"], correct:1, explain:"A striking ranking from a man whose life was frequently under threat." },
        { q:"When does he think of God, according to verse 6?", opts:["Only in worship services", "Through the watches of the night, lying awake in bed", "Only in crisis"], correct:1, explain:"Longing that fills unstructured, sleepless hours, not just scheduled devotion." }
      ],
      deepDive: "Psalm 63 gives words to a specific, physical kind of spiritual hunger \u2014 not vague dissatisfaction but thirst, the kind that reorganizes your whole body around finding water. David wrote it while literally in a wilderness, fleeing danger, and instead of only praying for rescue, he prays his longing for God's presence itself. The line 'your love is better than life' is worth sitting with; David isn't saying life doesn't matter, he's saying he has found something that outranks even survival. And the detail about the night watches is quietly comforting for anyone who lies awake: that insomnia can become the very hours where longing for God gets its clearest voice." },
    { id:382, book:"Psalms", title:"Psalm 84 \u2014 Better is one day", side:"l",
      passage: "A pilgrim's love song for the temple: \u201cHow lovely is your dwelling place, LORD Almighty! My soul yearns, even faints, for the courts of the LORD.\u201d Even the sparrow finds a home near God's altars. \u201cBlessed are those who dwell in your house; they are ever praising you.\u201d Blessed too are those whose hearts are set on pilgrimage, who \u201cas they pass through the Valley of Baka, they make it a place of springs.\u201d And the famous declaration: \u201cBetter is one day in your courts than a thousand elsewhere; I would rather be a doorkeeper in the house of my God than dwell in the tents of the wicked.\u201d",
      keyVerses: [
        { ref: "Psalm 84:10", text: "Better is one day in your courts than a thousand elsewhere; I would rather be a doorkeeper in the house of my God than dwell in the tents of the wicked." }
      ],
      questions: [
        { q:"What image opens the psalm's longing?", opts:["A mountain", "A sparrow finding a home near God's altars", "A river"], correct:1, explain:"Even the smallest, most ordinary creature has found rest near God's presence." },
        { q:"What do pilgrims do in the Valley of Baka?", opts:["Get lost", "Turn a place of weeping into a place of springs", "Turn back"], correct:1, explain:"Baka means weeping; those journeying toward God transform hardship along the way." },
        { q:"What position would the psalmist prefer over comfort with the wicked?", opts:["King", "Doorkeeper in God's house", "Wealthy landowner"], correct:1, explain:"The lowest job near God's presence outranks the best position away from it." }
      ],
      deepDive: "Psalm 84 is pure longing for presence, expressed by someone who may not have even had regular access to the temple \u2014 a pilgrim, dreaming of the journey and the destination both. The sparrow image is deceptively simple: if the smallest bird has found rest near God's altars, what does that say about a person avoiding it? And the pilgrims turning the Valley of Weeping into springs is a portrait of how proximity to God changes the journey itself, not just the arrival \u2014 the road toward him becomes different, not only the destination. The closing preference for being a doorkeeper over comfort elsewhere ranks nearness to God above every alternative status available." },
    { id:383, book:"Psalms", title:"Psalm 90 \u2014 Teach us to number our days", side:"r",
      passage: "Moses' only psalm opens with the deepest possible contrast: \u201cLord, you have been our dwelling place throughout all generations. Before the mountains were born or you brought forth the whole world, from everlasting to everlasting you are God.\u201d Against that eternity, human life is brief \u2014 \u201cthe length of our days is seventy years\u2014or eighty, if our strength endures\u2026 yet their span is but trouble and sorrow, for they quickly pass, and we fly away.\u201d The prayer that follows has steadied countless people facing their own mortality: \u201cTeach us to number our days, that we may gain a heart of wisdom.\u201d",
      keyVerses: [
        { ref: "Psalm 90:12", text: "Teach us to number our days, that we may gain a heart of wisdom." }
      ],
      questions: [
        { q:"Who traditionally wrote this psalm?", opts:["David", "Moses", "Solomon"], correct:1, explain:"A man who led a generation through forty years of wilderness wandering and death." },
        { q:"What contrast opens the psalm?", opts:["Rich and poor", "God's eternity against human brevity", "War and peace"], correct:1, explain:"From everlasting to everlasting, set against a human life of seventy or eighty years." },
        { q:"What does numbering your days produce?", opts:["Anxiety", "A heart of wisdom", "Despair"], correct:1, explain:"Awareness of limited time is treated as the doorway to living wisely, not a reason for dread." }
      ],
      deepDive: "This is the only psalm attributed to Moses, and its weight makes sense once you remember his life \u2014 forty years watching an entire generation die in the wilderness because of unbelief, himself included in the sentence. Few people have had more reason to think honestly about mortality. His prayer doesn't ask for longer life; it asks for wisdom sized correctly to a short one. 'Teach us to number our days' isn't morbid arithmetic \u2014 it's a request to live with accurate awareness of how limited our time actually is, so that awareness can shape what we do with it, rather than letting denial waste what's left." },
    { id:384, book:"Psalms", title:"Psalm 145 \u2014 The LORD is good to all", side:"c",
      passage: "David's sweeping praise, gathering everything the Psalter has said about God into one song: \u201cThe LORD is gracious and compassionate, slow to anger and rich in love. The LORD is good to all; he has compassion on all he has made.\u201d Creation itself joins the chorus \u2014 \u201call your works praise you, LORD.\u201d And the personal promise: \u201cThe LORD is near to all who call on him, to all who call on him in truth. He fulfills the desires of those who fear him; he hears their cry and saves them.\u201d",
      keyVerses: [
        { ref: "Psalm 145:18\u201319", text: "The LORD is near to all who call on him, to all who call on him in truth. He fulfills the desires of those who fear him; he hears their cry and saves them." }
      ],
      questions: [
        { q:"What is the scope of God's goodness in this psalm?", opts:["Only Israel", "All", "Only the righteous"], correct:1, explain:"Repeated deliberately: good to all, compassion on all, near to all who call." },
        { q:"Who joins in praising God?", opts:["Only humans", "All his works", "Only angels"], correct:1, explain:"The praise widens past the human choir to everything God has made." },
        { q:"What condition is attached to being heard?", opts:["Perfect performance", "Calling on him in truth", "Wealth or status"], correct:1, explain:"Sincerity, not achievement, is the entry point to being heard." }
      ],
      deepDive: "Psalm 145 is a summary psalm, gathering threads that have run through the whole book into one confident song. Its repeated word is 'all' \u2014 good to all, compassion on all he has made, near to all who call on him \u2014 which pushes back against any reading of the Psalms as a private club's songbook. And the promise in verses 18\u201319 is worth memorizing for its precision: nearness is promised to everyone who calls in truth, not to the flawless or the impressive. The bar for being heard is honesty, which is available to absolutely everyone reading this right now." },
    { id:138, book:"Proverbs", title:"Chapter 1 \u2014 Wisdom shouts in the street", side:"c",
      passage: "Proverbs opens by stating its own purpose: these sayings exist for gaining wisdom, discipline, and understanding \u2014 \u201cfor giving prudence to those who are simple, knowledge and discretion to the young.\u201d Then the cornerstone: \u201cThe fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction.\u201d The chapter warns a son against a gang promising easy money (\u201cthrow in your lot with us\u201d), and ends with Wisdom personified as a woman shouting in the public square \u2014 not hidden in a temple, but calling out in the street where everyone passes.",
      keyVerses: [
        { ref: "Proverbs 1:7", text: "The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction." }
      ],
      questions: [
        { q:"What does the book say about its own purpose?", opts:["To entertain", "To give wisdom, discipline, prudence", "To record history"], correct:1, explain:"Proverbs is rare in Scripture for announcing exactly why it exists \u2014 a training manual for living well." },
        { q:"Who is a \u2018fool\u2019 in Proverbs?", opts:["Someone unintelligent", "Someone who despises wisdom and correction", "Someone uneducated"], correct:1, explain:"The fool's defining trait is refusing instruction, which is why brilliant people can qualify." },
        { q:"Where does Wisdom call out?", opts:["Only in the temple", "In the street, the public square, the city gate", "In secret to a chosen few"], correct:1, explain:"Wisdom isn't hidden knowledge for insiders; she's shouting where the crowds are, and most walk past." }
      ],
      deepDive: "Chapter 1 sets every term the rest of the book will use. \u2018The fear of the LORD\u2019 is the foundation \u2014 not terror, but reckoning with God as the realest thing in the room. The gang scene is startlingly modern: the appeal isn't evil for its own sake but belonging and easy gain \u2014 \u2018throw in your lot with us, we'll all share the loot.\u2019 And Wisdom's street-corner shouting reframes the whole book: wisdom isn't scarce or secret, it's public and ignored. Carry one question today: what has been shouting at me that I keep walking past?" },
    { id:139, book:"Proverbs", title:"Chapter 2 \u2014 Search for it like silver", side:"l",
      passage: "Chapter 2 is one long sentence in Hebrew \u2014 a chain of \u2018if... then.\u2019 IF you accept my words, turn your ear to wisdom, call out for insight, and \u201clook for it as for silver and search for it as for hidden treasure\u201d \u2014 THEN you will understand the fear of the LORD and find the knowledge of God. Because \u201cthe LORD gives wisdom; from his mouth come knowledge and understanding.\u201d The chapter promises wisdom will guard you: from the ways of wicked men, and from the smooth-talking adulteress.",
      keyVerses: [
        { ref: "Proverbs 2:4\u20135", text: "If you look for it as for silver and search for it as for hidden treasure, then you will understand the fear of the LORD." }
      ],
      questions: [
        { q:"What effort does the chapter require?", opts:["Passive waiting", "Active searching", "Paying a teacher"], correct:1, explain:"Wisdom is freely given AND diligently sought \u2014 the chapter holds both without apology." },
        { q:"Where does wisdom ultimately come from?", opts:["Experience alone", "The LORD", "Ancient philosophers"], correct:1, explain:"The searching is real, but the source is God \u2014 which is why the search is prayer as much as study." },
        { q:"What does wisdom do once found?", opts:["Makes you wealthy", "Guards and protects", "Makes you popular"], correct:1, explain:"Wisdom's first gift isn't advantage but protection \u2014 it keeps you off roads that end badly." }
      ],
      deepDive: "Chapter 2's grammar is its message: a long chain of conditions before a single promise. Nobody stumbles onto silver \u2014 you dig, in one place, for a long time, believing something's there. That's the posture toward Scripture and wisdom this chapter asks for, and it quietly rebukes the way most of us read: skimming, waiting to be struck. Notice too the balance: you search AND God gives. Wisdom isn't earned by effort, but it isn't handed to the incurious either. Today's question: what would 'searching like for treasure' actually change about how you read, listen, and ask?" },
    { id:140, book:"Proverbs", title:"Chapter 3 \u2014 Trust with all your heart", side:"r",
      passage: "The most quoted chapter: \u201cTrust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.\u201d It continues: honor the LORD with your wealth and firstfruits; do not despise the LORD's discipline, \u201cbecause the LORD disciplines those he loves, as a father the son he delights in.\u201d And practical neighbor-love: don't withhold good when it's in your power to act; don't say \u2018come back tomorrow\u2019 when you have it with you now.",
      keyVerses: [
        { ref: "Proverbs 3:5\u20136", text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." }
      ],
      questions: [
        { q:"What does \u2018lean not on your own understanding\u2019 forbid?", opts:["Thinking at all", "Resting your full weight on your own limited view", "Asking for advice"], correct:1, explain:"The image is a wall you put your weight against \u2014 use your mind, don't make it load-bearing." },
        { q:"How does the chapter frame God's discipline?", opts:["As rejection", "As fatherly love", "As random misfortune"], correct:1, explain:"Discipline here is evidence of relationship, not its absence \u2014 a theme Hebrews later quotes directly." },
        { q:"What does 3:27\u201328 say about delayed generosity?", opts:["Take your time", "Don't say \u2018come back tomorrow\u2019 when you can help today", "Only help family"], correct:1, explain:"Wisdom includes timing \u2014 postponed good is often good undone." }
      ],
      deepDive: "Chapter 3 is Proverbs' emotional center, and it earns its fame by covering the whole map: trust (5\u20136), money (9\u201310), suffering (11\u201312), and neighbors (27\u201328). The most overlooked part is the discipline passage \u2014 planted right after the famous trust verses because the two belong together: trusting God with all your heart includes trusting the parts of His work that hurt. And \u2018straight paths\u2019 deserves precision: straight means directed and arriving, not smooth or easy. Today's practice is small and concrete \u2014 verse 27: is there good in your power to do that you've been postponing?" },
    { id:141, book:"Proverbs", title:"Chapter 4 \u2014 Guard your heart", side:"c",
      passage: "A father recalls what his own father taught him \u2014 three generations of instruction in one chapter: \u201cGet wisdom, get understanding... though it cost all you have, get understanding.\u201d Two paths are contrasted: the path of the righteous \u201cis like the morning sun, shining ever brighter till the full light of day,\u201d while the way of the wicked is deep darkness where they stumble over what they can't see. It climaxes in the book's most quoted command about the inner life: \u201cAbove all else, guard your heart, for everything you do flows from it.\u201d",
      keyVerses: [
        { ref: "Proverbs 4:23", text: "Above all else, guard your heart, for everything you do flows from it." }
      ],
      questions: [
        { q:"What is the \u2018heart\u2019 in Hebrew thought?", opts:["Only emotions", "The control center", "The physical organ"], correct:1, explain:"Closer to what we'd call the inner life: where decisions are made before they're visible." },
        { q:"How is the righteous path described?", opts:["A sudden flash", "Like dawn brightening gradually to full day", "A narrow tunnel"], correct:1, explain:"Growth in wisdom is gradual and cumulative \u2014 more sunrise than lightning bolt." },
        { q:"What does chapter 4 say wisdom is worth?", opts:["A modest investment", "\u2018Though it cost all you have\u2019", "Only spare time"], correct:1, explain:"The father's urgency is total \u2014 wisdom is the one purchase worth everything." }
      ],
      deepDive: "Chapter 4 is a family heirloom being handed down \u2014 a grandfather's words quoted by a father to a son, which is itself a picture of how wisdom travels. The two-paths imagery is worth sitting with: the wicked stumble over obstacles they can't see, because darkness doesn't just feel bad, it hides hazards. And 4:23 gets the ranking word: 'above all else.' The heart is upstream of everything, and the gate to the heart is attention. Today's honest audit: name the three things that got the most of your attention today. That's what's being planted at your source." },
    { id:142, book:"Proverbs", title:"Chapter 5 \u2014 Faithfulness and folly", side:"l",
      passage: "A frank warning about adultery, aimed at a young man: the seductress's lips \u201cdrip honey,\u201d but in the end she is bitter as gall, and \u201cher feet go down to death.\u201d The counsel is not merely avoidance but redirection \u2014 delight in your own marriage: \u201cDrink water from your own cistern... May you rejoice in the wife of your youth.\u201d The chapter closes with a sobering picture of consequences: the wicked are held fast by the cords of their own sin, dying \u201cfor lack of discipline, led astray by their own great folly.\u201d",
      keyVerses: [
        { ref: "Proverbs 5:21", text: "For your ways are in full view of the LORD, and he examines all your paths." }
      ],
      questions: [
        { q:"How does the chapter describe temptation's opening?", opts:["Obviously ugly", "Sweet", "Openly threatening"], correct:1, explain:"Proverbs is honest that sin's front end is attractive; the bitterness is on the back end." },
        { q:"What's the chapter's positive counsel?", opts:["Avoid all relationships", "Delight in your own marriage", "Stay busy"], correct:1, explain:"Wisdom doesn't just fence off the wrong thing; it points you toward enjoying the right one." },
        { q:"What image describes being trapped by sin?", opts:["A locked door", "Held fast by the cords of one's own sin", "A heavy stone"], correct:1, explain:"The rope is self-woven \u2014 consequences aren't imposed from outside so much as accumulated from within." }
      ],
      deepDive: "Chapter 5 is uncomfortably direct, and deliberately so \u2014 Proverbs treats sexual faithfulness as a wisdom issue, not just a moral one, because of what it costs: honor, years, wealth, and the ability to look at your own life clearly. The strategy is worth noting: the chapter spends as much energy on delighting in what you have as on avoiding what you don't. Starvation makes bad decisions; gratitude protects. And verse 21 is the quiet anchor for the whole subject \u2014 'your ways are in full view of the LORD' \u2014 there is no private life, only an unwitnessed one." },
    { id:143, book:"Proverbs", title:"Chapter 6 \u2014 Go to the ant", side:"r",
      passage: "Four warnings: don't co-sign carelessly (free yourself \u2018like a gazelle from the hunter's hand\u2019); don't be lazy \u2014 \u201cGo to the ant, you sluggard; consider its ways and be wise,\u201d storing food in summer with no commander over it. Then a famous list: six things the LORD hates, seven that are detestable \u2014 haughty eyes, a lying tongue, hands that shed innocent blood, a heart that devises wicked schemes, feet quick to rush into evil, a false witness, \u201cand a person who stirs up conflict in the community.\u201d",
      keyVerses: [
        { ref: "Proverbs 6:6", text: "Go to the ant, you sluggard; consider its ways and be wise!" }
      ],
      questions: [
        { q:"What makes the ant a model?", opts:["Its strength", "Self-motivated diligence", "Its size"], correct:1, explain:"The ant needs no supervision \u2014 the rebuke is aimed at people who only work when watched." },
        { q:"How does the chapter describe poverty's arrival for the sluggard?", opts:["Instantly", "Like a thief", "Never"], correct:1, explain:"The famous line: ruin doesn't announce itself; it accumulates in small, reasonable-sounding delays." },
        { q:"What is the seventh detestable thing?", opts:["Wealth", "A person who stirs up conflict in the community", "Laughter"], correct:1, explain:"The list climaxes not with violence but with division-sowing \u2014 God takes community-wrecking seriously." }
      ],
      deepDive: "Chapter 6 is Proverbs at its most practical: financial caution, work ethic, and a list of what God actively hates. The ant passage is genuinely convicting because it isolates the variable \u2014 no commander, overseer, or ruler \u2014 and asks whether you produce when nobody's watching. The seven-things list rewards a slow read: it moves from attitude (haughty eyes) through speech and action, and lands on the person who divides a community, placing gossip and faction-stirring in the same category as violence. Today: which of the seven would someone who knows you well say you're closest to?" },
    { id:144, book:"Proverbs", title:"Chapter 7 \u2014 The young man with no sense", side:"c",
      passage: "The father tells a story he claims to have watched from his window: at twilight, a young man \u201cwho had no sense\u201d walks down the street near a certain corner \u2014 deliberately, step by step, toward the house of a woman waiting for him. She meets him with kisses, perfume, and reassurance that her husband is away on a long journey. \u201cAll at once he followed her, like an ox going to the slaughter... little knowing it will cost him his life.\u201d The counsel: \u201cDo not let your heart turn to her ways or stray into her paths.\u201d",
      keyVerses: [
        { ref: "Proverbs 7:25", text: "Do not let your heart turn to her ways or stray into her paths." }
      ],
      questions: [
        { q:"What was the young man's first mistake?", opts:["Talking to her", "Walking down that street, near that corner, at twilight", "Being out at night"], correct:1, explain:"The chapter tracks the fall backward to a decision made long before the temptation \u2014 proximity chosen on purpose." },
        { q:"How does the woman's pitch work?", opts:["Threats", "Warmth, flattery, and reassurance that no one will know", "Money"], correct:1, explain:"\u2018My husband is away on a long journey\u2019 \u2014 the promise of no consequences is temptation's oldest line." },
        { q:"What images describe the outcome?", opts:["A minor setback", "An ox to the slaughter, a bird darting into a snare", "A fair trade"], correct:1, explain:"Animals walking cheerfully into traps \u2014 the point is the gap between how it feels and what it is." }
      ],
      deepDive: "Chapter 7 is a short film, and its craft is in the geography: the young man is tracked walking 'down the street near her corner,' which is the actual moment of decision \u2014 everything after was just physics. Proverbs' realism is bracing: it doesn't picture temptation ambushing the innocent, it pictures a person managing his own route toward it while telling himself nothing has happened yet. And the animal images sting because animals in traps aren't fighting \u2014 they're comfortable, right up until they aren't. The application isn't fear; it's route planning: which corners do you keep finding reasons to walk past?" },
    { id:145, book:"Proverbs", title:"Chapter 8 \u2014 Wisdom before the world", side:"l",
      passage: "Wisdom calls again from the heights and the crossroads \u2014 and this time she describes her origins: \u201cThe LORD brought me forth as the first of his works... before the mountains were settled in place, before the hills, I was given birth.\u201d She was there when God set the heavens, marked the horizon, established the clouds. \u201cThen I was constantly at his side. I was filled with delight day after day, rejoicing always in his presence.\u201d And her value: \u201cChoose my instruction instead of silver, knowledge rather than choice gold.\u201d",
      keyVerses: [
        { ref: "Proverbs 8:30", text: "Then I was constantly at his side. I was filled with delight day after day, rejoicing always in his presence." }
      ],
      questions: [
        { q:"How old is wisdom, according to this chapter?", opts:["Invented by humans", "Present before creation", "Recent"], correct:1, explain:"Wisdom isn't a human invention or a cultural preference \u2014 it's woven into reality's design." },
        { q:"What is wisdom's emotional tone in verse 30?", opts:["Stern duty", "Delight and rejoicing", "Sorrow"], correct:1, explain:"The world was made in gladness, and wisdom is pictured playing before God \u2014 a striking picture of creation." },
        { q:"What does this imply about living wisely?", opts:["It's arbitrary rule-following", "It's living with the grain of how the world was actually built", "It only matters in church"], correct:1, explain:"If wisdom shaped creation, then wise living isn't imposed \u2014 it's aligned." }
      ],
      deepDive: "Chapter 8 lifts Proverbs from advice to cosmology. If wisdom stood beside God at creation, then the book's practical counsel about tempers, money, and words isn't arbitrary religious preference \u2014 it's an owner's manual matching the machine. That reframes every proverb: foolishness isn't just naughty, it's grinding gears. Christians have long heard echoes of Christ in this chapter (John 1 and Colossians 1 pick up the language of the one through whom all things were made). And don't miss verse 30's mood \u2014 delight. Creation happened in joy, and wisdom is what joy looks like when it's building something." },
    { id:146, book:"Proverbs", title:"Chapter 9 \u2014 Two invitations", side:"r",
      passage: "Two women each host a dinner. Wisdom builds her house, sets her table, sends out her servants, and calls from the high point of the city: \u201cCome, eat my food and drink the wine I have mixed. Leave your simple ways and you will live.\u201d Folly is loud, undisciplined, and sits at her door calling to the same passersby: \u201cStolen water is sweet; food eaten in secret is delicious!\u201d But her guests \u201care in the depths of the grave.\u201d Between them stands the book's cornerstone repeated: \u201cThe fear of the LORD is the beginning of wisdom.\u201d",
      keyVerses: [
        { ref: "Proverbs 9:10", text: "The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding." }
      ],
      questions: [
        { q:"What do both women have in common?", opts:["Their menu", "They call to the same passersby, from the same city, with an invitation", "Their houses"], correct:1, explain:"Both offer a meal and a life \u2014 the choice isn't between an invitation and no invitation." },
        { q:"What's Folly's actual pitch?", opts:["Hard work pays off", "Secrecy and stolen sweetness", "Long-term security"], correct:1, explain:"Folly's appeal is the thrill of the forbidden and the hidden \u2014 never mentioning the bill." },
        { q:"How does the chapter contrast responses to correction?", opts:["Everyone hates it", "Mock a mocker and he hates you; rebuke a wise person and he loves you", "It doesn't"], correct:1, explain:"Verse 8 is a diagnostic you can run on yourself: how do you receive correction?" }
      ],
      deepDive: "Chapter 9 closes the first section of Proverbs by staging the whole book as a choice between two dinner invitations. The symmetry is deliberate \u2014 same street, same audience, same offer of satisfaction \u2014 and the difference is what's on the table and where the guests end up. Verse 8 is the most personally useful verse here: your reaction to correction sorts you faster than any test. If honest feedback makes you defensive, that's data. Today's question is simple: when someone corrected me last, did I resent them or thank them?" },
    { id:147, book:"Proverbs", title:"Chapter 10 \u2014 The proverbs of Solomon begin", side:"c",
      passage: "Here the collected one-line proverbs begin, most built on contrast. \u201cLazy hands make for poverty, but diligent hands bring wealth.\u201d \u201cHatred stirs up conflict, but love covers over all wrongs.\u201d \u201cSin is not ended by multiplying words, but the prudent hold their tongues.\u201d \u201cThe mouth of the righteous is a fountain of life.\u201d And a favorite about integrity: \u201cWhoever walks in integrity walks securely, but whoever takes crooked paths will be found out.\u201d",
      keyVerses: [
        { ref: "Proverbs 10:9", text: "Whoever walks in integrity walks securely, but whoever takes crooked paths will be found out." }
      ],
      questions: [
        { q:"What does \u2018love covers over all wrongs\u2019 mean here?", opts:["Ignoring all sin", "Love doesn't broadcast or nurse every offense", "Lying to protect people"], correct:1, explain:"Contrasted with hatred that stirs up conflict; love's instinct is to cover, not publicize." },
        { q:"What does the chapter say about many words?", opts:["More words, more wisdom", "\u2018Sin is not ended by multiplying words\u2019", "Silence is always best"], correct:1, explain:"Proverbs consistently treats verbal restraint as a mark of wisdom, not weakness." },
        { q:"What's the security in walking with integrity?", opts:["Guaranteed wealth", "Nothing to be discovered", "Public praise"], correct:1, explain:"Integrity is restful because it requires no memory management." }
      ],
      deepDive: "From chapter 10 on, Proverbs shifts style: no more long speeches, just hundreds of two-line contrasts you can carry one at a time. Chapter 10 sets the themes the rest will circle: work, words, integrity, and the long horizon. Verse 9 is the whole book in miniature \u2014 integrity 'walks securely' because there's no exposure risk, nothing to track, no story to keep straight. It's a quiet argument that honesty is not only right but restful. Pick one line from this chapter and let it work on you today; the format is designed for exactly that." },
    { id:148, book:"Proverbs", title:"Chapter 11 \u2014 Generosity that grows", side:"l",
      passage: "The chapter opens with commerce: \u201cThe LORD detests dishonest scales, but accurate weights find favor with him\u201d \u2014 God cares about your business practices. Then pride and humility, integrity and duplicity. And its most surprising economics: \u201cOne person gives freely, yet gains even more; another withholds unduly, but comes to poverty. A generous person will prosper; whoever refreshes others will be refreshed.\u201d It closes with a memorable image: \u201cLike a gold ring in a pig's snout is a beautiful woman who shows no discretion.\u201d",
      keyVerses: [
        { ref: "Proverbs 11:25", text: "A generous person will prosper; whoever refreshes others will be refreshed." }
      ],
      questions: [
        { q:"What does the LORD \u2018detest\u2019 in verse 1?", opts:["Poverty", "Dishonest scales", "Trade itself"], correct:1, explain:"The Bible's God cares about the accuracy of a merchant's weights \u2014 worship and commerce aren't separate." },
        { q:"What's the paradox of generosity here?", opts:["Giving always costs you", "Giving freely can increase you; hoarding can impoverish you", "Only give to family"], correct:1, explain:"Proverbs describes a pattern that runs against arithmetic intuition \u2014 open hands tend to end up fuller." },
        { q:"What does the gold-ring image critique?", opts:["Jewelry", "Beauty without discretion", "Wealth"], correct:1, explain:"Proverbs' most vivid picture that outward polish without character is absurd, not impressive." }
      ],
      deepDive: "Chapter 11 pairs two things we usually keep apart: honest scales and open hands. The first says God is watching your invoices; the second says generosity has a strange return profile. Read carefully, verse 25 isn't a prosperity formula \u2014 Proverbs elsewhere is clear the righteous can be poor \u2014 but a description of how life generally runs: refreshers get refreshed, in relationships, reputation, and often more. Today's small experiment: give something away that you'd normally hold \u2014 time, credit, money, an hour of help \u2014 and watch what it does to you, regardless of what returns." },
    { id:149, book:"Proverbs", title:"Chapter 12 \u2014 Words that pierce or heal", side:"r",
      passage: "\u201cWhoever loves discipline loves knowledge, but whoever hates correction is stupid\u201d \u2014 the chapter's blunt opening. Then a run on speech: \u201cThe words of the reckless pierce like swords, but the tongue of the wise brings healing.\u201d \u201cTruthful lips endure forever, but a lying tongue lasts only a moment.\u201d And on inner life and others: \u201cAnxiety weighs down the heart, but a kind word cheers it up.\u201d Even animals get a mention: \u201cThe righteous care for the needs of their animals.\u201d",
      keyVerses: [
        { ref: "Proverbs 12:18", text: "The words of the reckless pierce like swords, but the tongue of the wise brings healing." }
      ],
      questions: [
        { q:"How blunt is the chapter about hating correction?", opts:["Gently discouraging", "It calls it stupid", "It doesn't address it"], correct:1, explain:"Proverbs uses the word for a brutish animal \u2014 refusing correction reduces a person's capacity to think." },
        { q:"What two things can words do, per verse 18?", opts:["Inform or bore", "Pierce like swords or bring healing", "Entertain or annoy"], correct:1, explain:"There's no neutral category \u2014 words are landing as damage or repair, whether you intended it or not." },
        { q:"What does verse 25 prescribe for an anxious heart?", opts:["Solitude", "A kind word", "Hard work"], correct:1, explain:"Proverbs treats a kind word as medicine \u2014 which means yours is medicine someone needs today." }
      ],
      deepDive: "Chapter 12 is largely about the mouth, and its images are surgical: reckless words 'pierce like swords' \u2014 you can probably still quote a sentence someone stabbed you with years ago, which is the proverb's own proof. The asymmetry is what should get us: words cost almost nothing to speak and can cost enormously to receive. Verse 25 turns that around into an assignment \u2014 someone in your orbit is carrying anxiety today, and a specific, true, unprompted kind word is the prescription Proverbs actually names. It'll take you eleven seconds." },
    { id:150, book:"Proverbs", title:"Chapter 13 \u2014 The company you keep", side:"c",
      passage: "\u201cWalk with the wise and become wise, for a companion of fools suffers harm.\u201d The chapter weighs long-term thinking against short: \u201cDishonest money dwindles away, but whoever gathers money little by little makes it grow.\u201d \u201cHope deferred makes the heart sick, but a longing fulfilled is a tree of life.\u201d And on receiving instruction: \u201cWhoever disregards discipline comes to poverty and shame, but whoever heeds correction is honored.\u201d",
      keyVerses: [
        { ref: "Proverbs 13:20", text: "Walk with the wise and become wise, for a companion of fools suffers harm." }
      ],
      questions: [
        { q:"How does verse 20 describe influence?", opts:["Instant", "Gradual absorption", "Impossible"], correct:1, explain:"The verb suggests ongoing companionship, not a single conversation \u2014 proximity shapes you slowly." },
        { q:"What does the chapter say about wealth built slowly?", opts:["It's not worth it", "Gathered little by little, it grows; dishonest money dwindles", "Only inheritance matters"], correct:1, explain:"Proverbs prefers the boring, compounding path over the fast, fragile one." },
        { q:"What is \u2018hope deferred\u2019 said to do?", opts:["Build character automatically", "Make the heart sick", "Have no effect"], correct:1, explain:"Scripture names the real ache of waiting rather than scolding people for feeling it." }
      ],
      deepDive: "Chapter 13's most portable line is verse 20, and it's worth taking literally: you are, over time, the average of your close company \u2014 in vocabulary, standards, humor, and what you consider normal. That's not a call to isolate from struggling people; it's a call to be honest about who has formative access to you. And notice verse 12's compassion: 'hope deferred makes the heart sick' \u2014 the Bible doesn't shame the exhaustion of waiting. If you're in a long wait right now, that verse is Scripture naming your condition accurately before offering anything else." },
    { id:151, book:"Proverbs", title:"Chapter 14 \u2014 The way that seems right", side:"l",
      passage: "\u201cThe wise woman builds her house, but with her own hands the foolish one tears hers down.\u201d The chapter's most sobering line appears twice in Proverbs: \u201cThere is a way that appears to be right, but in the end it leads to death.\u201d It also handles emotion honestly: \u201cEach heart knows its own bitterness, and no one else can share its joy.\u201d And justice: \u201cWhoever oppresses the poor shows contempt for their Maker, but whoever is kind to the needy honors God.\u201d",
      keyVerses: [
        { ref: "Proverbs 14:12", text: "There is a way that appears to be right, but in the end it leads to death." }
      ],
      questions: [
        { q:"What makes the wrong way dangerous, per verse 12?", opts:["It's obviously evil", "It seems right", "It's hidden"], correct:1, explain:"The danger isn't deception by others but self-assurance \u2014 feeling right is not evidence of being right." },
        { q:"How does verse 31 connect the poor and God?", opts:["They're unrelated", "Oppressing the poor is contempt for their Maker", "Poverty is deserved"], correct:1, explain:"How you treat vulnerable people is treated as direct commentary on your view of God." },
        { q:"What does verse 10 acknowledge about inner life?", opts:["Everyone feels the same", "Each heart knows a bitterness no one else can fully share", "Emotions don't matter"], correct:1, explain:"An unusually tender verse \u2014 Scripture admitting the loneliness inside even close relationships." }
      ],
      deepDive: "Verse 12 is Proverbs' hardest sentence for modern ears, because our culture treats sincerity as the final court: follow your heart, trust your gut. Proverbs' answer is that the heart is a decent compass and a terrible map \u2014 a way can feel entirely right and still end badly, which is precisely why counsel, Scripture, and correction exist. Pair it with verse 10's tenderness and the chapter is balanced: your inner life is real and worth honoring, and it is not sufficient for navigation. Today: what decision are you making mostly on the basis of how right it feels?" },
    { id:152, book:"Proverbs", title:"Chapter 15 \u2014 A gentle answer", side:"r",
      passage: "\u201cA gentle answer turns away wrath, but a harsh word stirs up anger.\u201d The chapter continues on speech and the heart behind it: \u201cThe tongue of the wise adorns knowledge, but the mouth of the fool gushes folly.\u201d It insists God sees everything: \u201cThe eyes of the LORD are everywhere, keeping watch on the wicked and the good.\u201d And it prizes contentment over abundance: \u201cBetter a small serving of vegetables with love than a fattened calf with hatred.\u201d",
      keyVerses: [
        { ref: "Proverbs 15:1", text: "A gentle answer turns away wrath, but a harsh word stirs up anger." }
      ],
      questions: [
        { q:"When does verse 1 apply?", opts:["When starting a conversation", "In the ANSWER", "Only in writing"], correct:1, explain:"It's a second-move proverb: the anger is already in the room; your reply steers what happens next." },
        { q:"Is a gentle answer weakness?", opts:["Yes", "No", "It means silence"], correct:1, explain:"Content can be firm while tone stays soft \u2014 gentleness is about temperature, not conviction." },
        { q:"What does verse 17 prefer?", opts:["A feast at any cost", "Vegetables with love over a fattened calf with hatred", "Solitude"], correct:1, explain:"Proverbs keeps ranking relational health above material comfort." }
      ],
      deepDive: "Chapter 15 lives in the half-second between what lands on you and what you send back. The physics are observable: harshness escalates because anger answered with anger validates itself; gentleness starves the fire of oxygen. You've watched both happen this month. The practical experiment is small \u2014 in your next tense exchange, deliberately lower your volume and slow your reply by two seconds \u2014 and the effect on the room is usually immediate. Proverbs elsewhere crowns this skill: better a patient person than a warrior." },
    { id:153, book:"Proverbs", title:"Chapter 16 \u2014 Plans, pride, and steps", side:"c",
      passage: "A chapter about who's actually running things: \u201cCommit to the LORD whatever you do, and he will establish your plans.\u201d \u201cIn their hearts humans plan their course, but the LORD establishes their steps.\u201d Between them sits the book's most quoted warning: \u201cPride goes before destruction, a haughty spirit before a fall.\u201d And a line about self-mastery: \u201cBetter a patient person than a warrior, one with self-control than one who takes a city.\u201d",
      keyVerses: [
        { ref: "Proverbs 16:9", text: "In their hearts humans plan their course, but the LORD establishes their steps." }
      ],
      questions: [
        { q:"Does verse 9 discourage planning?", opts:["Yes", "No", "It's silent on planning"], correct:1, explain:"Proverbs praises diligent planners \u2014 the correction is aimed at the grip, not the planning." },
        { q:"Why is pride dangerous rather than just unpleasant?", opts:["It annoys people", "It blinds", "It costs money"], correct:1, explain:"Pride edits out exactly the information that would have prevented the fall." },
        { q:"What does verse 32 rank above conquering a city?", opts:["Wealth", "Patience and self-control", "Fame"], correct:1, explain:"Proverbs' consistent verdict: ruling yourself is the harder and higher achievement." }
      ],
      deepDive: "Chapter 16 threads a needle between two errors: refusing to plan (which Proverbs calls laziness, not faith) and planning as though God must ratify your draft. Both are real \u2014 you genuinely chart the course, He genuinely establishes the steps \u2014 and the gap between your map and your actual footprints is where most of life's meaning turns out to live. You've watched it all through this app: Joseph planned none of Egypt, Ruth none of Bethlehem, Esther planned anonymity. Plan well today; hold the pen loosely; treat detours with curiosity instead of only frustration." },
    { id:154, book:"Proverbs", title:"Chapter 17 \u2014 A friend loves at all times", side:"l",
      passage: "\u201cBetter a dry crust with peace and quiet than a house full of feasting, with strife.\u201d The chapter gives friendship its best line: \u201cA friend loves at all times, and a brother is born for a time of adversity.\u201d It knows the cost of grudge-keeping: \u201cWhoever would foster love covers over an offense, but whoever repeats the matter separates close friends.\u201d And it names something modern medicine agrees with: \u201cA cheerful heart is good medicine, but a crushed spirit dries up the bones.\u201d",
      keyVerses: [
        { ref: "Proverbs 17:17", text: "A friend loves at all times, and a brother is born for a time of adversity." }
      ],
      questions: [
        { q:"What separates close friends, per verse 9?", opts:["Distance", "Repeating the matter", "Disagreement"], correct:1, explain:"Friendships rarely die from the original offense; they die from its retelling." },
        { q:"What does \u2018at all times\u2019 emphasize?", opts:["Constant contact", "Consistency", "Instant responses"], correct:1, explain:"The second line clarifies it: adversity is the time such love proves itself." },
        { q:"How does the chapter describe a cheerful heart?", opts:["Naive", "Good medicine", "Irrelevant"], correct:1, explain:"Proverbs connects inner life and physical health long before anyone studied it clinically." }
      ],
      deepDive: "Chapter 17 is about the atmosphere of a home and a friendship. Verse 1's 'dry crust with peace' over 'feasting with strife' is a ruthless ranking of what actually makes life livable \u2014 and worth remembering when chasing upgrades that come with tension. Verse 9 is the practical one: covering an offense doesn't mean pretending it didn't happen; it means refusing to rehearse it to others. Most damaged friendships die on the retelling, not the incident. Today's question: is there an offense you're keeping alive by repeating it?" },
    { id:155, book:"Proverbs", title:"Chapter 18 \u2014 Life and death in the tongue", side:"r",
      passage: "\u201cThe name of the LORD is a fortified tower; the righteous run to it and are safe.\u201d The chapter warns against isolation \u2014 \u201cAn unfriendly person pursues selfish ends and against all sound judgment starts quarrels\u201d \u2014 and against half-listening: \u201cTo answer before listening \u2014 that is folly and shame.\u201d Its most weighty line: \u201cThe tongue has the power of life and death, and those who love it will eat its fruit.\u201d And on loyalty: \u201cThere is a friend who sticks closer than a brother.\u201d",
      keyVerses: [
        { ref: "Proverbs 18:21", text: "The tongue has the power of life and death, and those who love it will eat its fruit." }
      ],
      questions: [
        { q:"How much power does verse 21 assign to words?", opts:["Mild influence", "Life and death", "None"], correct:1, explain:"Words in Proverbs build people up or take them apart \u2014 daily, invisibly, cumulatively." },
        { q:"What does verse 13 call answering before listening?", opts:["Efficient", "Folly and shame", "Confident"], correct:1, explain:"Most arguments are two people rehearsing replies \u2014 Proverbs calls that shameful, not clever." },
        { q:"What does \u2018eat its fruit\u2019 imply?", opts:["Only listeners are affected", "You live in the world your own words create", "Words vanish"], correct:1, explain:"The trust or wariness surrounding you is largely your own tongue's harvest." }
      ],
      deepDive: "Chapter 18 puts three things side by side that belong together: a refuge (the name of the LORD), a warning about isolation, and the tongue's enormous power. The connection is community \u2014 people who withdraw stop being corrected, and uncorrected speech does damage. Verse 13 is the most immediately useful: answering before listening. Try the discipline today of actually finishing someone's sentence in your head before composing yours; most conflicts shrink by half. And verse 21's assignment: speak one deliberate sentence of life to someone who won't expect it." },
    { id:156, book:"Proverbs", title:"Chapter 19 \u2014 Integrity over income", side:"c",
      passage: "\u201cBetter the poor whose walk is blameless than a fool whose lips are perverse.\u201d The chapter is realistic about money and friendship (\u201cwealth attracts many friends\u201d), tender toward the poor (\u201cWhoever is kind to the poor lends to the LORD\u201d), and clear about self-inflicted trouble: \u201cA person's own folly leads to their ruin, yet their heart rages against the LORD.\u201d It closes the theme with: \u201cMany are the plans in a person's heart, but it is the LORD's purpose that prevails.\u201d",
      keyVerses: [
        { ref: "Proverbs 19:21", text: "Many are the plans in a person\u2019s heart, but it is the LORD\u2019s purpose that prevails." }
      ],
      questions: [
        { q:"What does verse 17 say about kindness to the poor?", opts:["It's optional charity", "It's lending to the LORD", "It's unwise"], correct:1, explain:"One of Scripture's boldest images: God personally assumes the debt of what you give away." },
        { q:"What's the irony in verse 3?", opts:["Fools blame themselves", "Their own folly ruins them", "God causes their ruin"], correct:1, explain:"Proverbs names a pattern most of us recognize: consequences arrive and we look for someone else to blame." },
        { q:"What prevails over human plans?", opts:["Chance", "The LORD's purpose", "Willpower"], correct:1, explain:"Plans are many and welcome; the outcome belongs to God \u2014 the same theme as 16:9." }
      ],
      deepDive: "Chapter 19 is unusually honest about class and character. It admits plainly that money attracts people and poverty isolates \u2014 no pretending otherwise \u2014 and then insists integrity outranks income anyway. Verse 17 is the one to carry: kindness to the poor is treated as a loan to God Himself, which reframes generosity from charity to investment with a divine counterparty. And verse 3 stings usefully: check whether any frustration you're currently aiming at God is actually the arrival of your own choices." },
    { id:157, book:"Proverbs", title:"Chapter 20 \u2014 Who can say my heart is pure?", side:"l",
      passage: "\u201cWine is a mocker and beer a brawler; whoever is led astray by them is not wise.\u201d The chapter probes motives: \u201cMany claim to have unfailing love, but a faithful person who can find?\u201d and asks the question nobody can answer well: \u201cWho can say, \u2018I have kept my heart pure; I am clean and without sin\u2019?\u201d It also praises honest business again \u2014 differing weights and measures are detestable \u2014 and notes: \u201cThe purposes of a person's heart are deep waters, but one who has insight draws them out.\u201d",
      keyVerses: [
        { ref: "Proverbs 20:9", text: "Who can say, \u201cI have kept my heart pure; I am clean and without sin\u201d?" }
      ],
      questions: [
        { q:"What answer does verse 9 expect?", opts:["Many people", "No one", "Only the wise"], correct:1, explain:"Proverbs, the book of practical achievement, admits the one thing achievement can't accomplish." },
        { q:"What does verse 5 say about people's motives?", opts:["They're obvious", "Deep waters", "They don't matter"], correct:1, explain:"Understanding people takes patient drawing-out, like hauling a bucket from a deep well." },
        { q:"How does the chapter treat alcohol?", opts:["Forbidden entirely", "Warned about", "Encouraged"], correct:1, explain:"Proverbs' concern is control: what's mocking and brawling in you when judgment goes." }
      ],
      deepDive: "Verse 9 is Proverbs quietly conceding the limits of its own project. Thirty-one chapters teach skill at living \u2014 and then this: who can claim a pure heart? Nobody. It's the crack in wisdom literature through which the rest of the Bible's grace flows, and it's why Proverbs ultimately points beyond self-improvement. Pair it with verse 5's picture of people as deep wells: both other people and you yourself require patient drawing-out, and neither can be read at a glance. Today's practice: ask someone a second and third question instead of assuming you already know their motive." },
    { id:158, book:"Proverbs", title:"Chapter 21 \u2014 The king's heart in God's hand", side:"r",
      passage: "\u201cIn the LORD's hand the king's heart is a stream of water that he channels toward all who please him.\u201d The chapter prizes justice over ritual: \u201cTo do what is right and just is more acceptable to the LORD than sacrifice.\u201d It's honest about domestic misery (\u201cBetter to live on a corner of the roof than share a house with a quarrelsome wife\u201d), and it ends with a line that has steadied anxious people for centuries: \u201cThe horse is made ready for the day of battle, but victory rests with the LORD.\u201d",
      keyVerses: [
        { ref: "Proverbs 21:1", text: "In the LORD\u2019s hand the king\u2019s heart is a stream of water that he channels toward all who please him." }
      ],
      questions: [
        { q:"What does verse 1 claim about rulers?", opts:["They're beyond God's reach", "Even a king's heart is directed by God like a channeled stream", "They always obey God"], correct:1, explain:"Written under absolute monarchy, this is a bold claim \u2014 and Ezra 1 shows it in action with Cyrus." },
        { q:"What does God prefer over sacrifice?", opts:["Longer prayers", "Doing what is right and just", "Bigger offerings"], correct:1, explain:"Proverbs joins the prophets: worship without justice doesn't impress God." },
        { q:"What's the balance in verse 31?", opts:["Preparation is pointless", "Prepare the horse fully", "God does everything"], correct:1, explain:"Full diligence plus full dependence \u2014 the same pairing as Nehemiah's prayer and posted guard." }
      ],
      deepDive: "Chapter 21 opens and closes on the same theme from opposite ends: God directs the most powerful heart in the kingdom, and God grants the victory the best-prepared army can't guarantee. Between those bookends sits a jab at religious performance \u2014 justice over sacrifice \u2014 that would be at home in Amos or Micah. The practical takeaway is verse 31: prepare the horse. Do the work, make the plan, train, save, study. Then release the outcome, because it was never in your column. Anxiety usually comes from trying to occupy both columns at once." },
    { id:159, book:"Proverbs", title:"Chapter 22 \u2014 A good name, and a child's path", side:"c",
      passage: "\u201cA good name is more desirable than great riches; to be esteemed is better than silver or gold. Rich and poor have this in common: The LORD is the Maker of them all.\u201d The chapter contains the famous parenting line: \u201cStart children off on the way they should go, and even when they are old they will not turn from it.\u201d It warns against exploiting the poor \u2014 \u201cthe LORD will take up their case\u201d \u2014 and against befriending hot-tempered people, \u201cor you may learn their ways and get yourself ensnared.\u201d",
      keyVerses: [
        { ref: "Proverbs 22:1", text: "A good name is more desirable than great riches; to be esteemed is better than silver or gold." }
      ],
      questions: [
        { q:"What do rich and poor have in common?", opts:["Nothing", "The LORD is the Maker of them all", "The same opportunities"], correct:1, explain:"Shared origin levels the field \u2014 the basis for the chapter's warnings against exploiting the poor." },
        { q:"What's the warning about hot-tempered friends?", opts:["They're unreliable", "You may learn their ways", "They're dangerous physically"], correct:1, explain:"Proverbs keeps insisting your close company rewires your defaults, including your temper." },
        { q:"How should verse 6 about children be read?", opts:["An ironclad guarantee", "A general principle", "Irrelevant today"], correct:1, explain:"Proverbs describes how life generally runs; Job stands nearby as the reminder that exceptions exist." }
      ],
      deepDive: "Chapter 22 begins the transition into the 'sayings of the wise' and opens with reputation \u2014 a good name outranking wealth. Worth noting what a good name actually is in Proverbs: not fame or image management, but the accumulated trust of people who've dealt with you. It's built slowly and spent quickly. And verse 2's leveling claim \u2014 the LORD made both rich and poor \u2014 is the engine under all this book's justice material. Today: whose name do you speak about behind their back, and would it survive them hearing you?" },
    { id:160, book:"Proverbs", title:"Chapter 23 \u2014 Don't wear yourself out for riches", side:"l",
      passage: "\u201cDo not wear yourself out to get rich; do not trust your own cleverness. Cast but a glance at riches, and they are gone, for they will surely sprout wings and fly off like an eagle.\u201d The chapter warns against a stingy host's hospitality, against moving ancient boundary stones (defrauding the vulnerable), and closes with the Bible's most vivid portrait of the morning after: \u201cWho has woe? Who has sorrow?... Those who linger over wine... In the end it bites like a snake and poisons like a viper.\u201d",
      keyVerses: [
        { ref: "Proverbs 23:4\u20135", text: "Do not wear yourself out to get rich... Cast but a glance at riches, and they are gone." }
      ],
      questions: [
        { q:"What image describes wealth's stability?", opts:["A stone foundation", "An eagle sprouting wings and flying away", "A deep well"], correct:1, explain:"Money is real but not solid \u2014 the chapter aims at exhausting yourself for something that can leave overnight." },
        { q:"What does the chapter warn about self-reliance?", opts:["Trust your cleverness fully", "\u2018Do not trust your own cleverness\u2019", "Cleverness is useless"], correct:1, explain:"Intelligence isn't the problem; treating it as your security is." },
        { q:"How does the wine passage work?", opts:["Abstract theory", "A vivid, almost cinematic picture of the aftermath", "A blanket prohibition"], correct:1, explain:"Proverbs argues by showing the ending, not just labeling the behavior." }
      ],
      deepDive: "Chapter 23's financial counsel isn't anti-work \u2014 Proverbs praises diligence constantly \u2014 it's anti-exhaustion for something that can't hold you. 'Do not wear yourself out to get rich' is aimed at the person whose health, family, and rest are being spent as fuel. The eagle image is the argument: what you're burning your life for has wings. The wine passage at the end works the same way \u2014 it doesn't lecture, it just narrates the morning after in enough detail that the reader supplies the conclusion. Today: what are you currently trading that you can't get back, and for what?" },
    { id:161, book:"Proverbs", title:"Chapter 24 \u2014 Rise again", side:"r",
      passage: "\u201cBy wisdom a house is built, and through understanding it is established.\u201d The chapter counsels rescue \u2014 \u201cRescue those being led away to death... If you say, \u2018But we knew nothing about this,\u2019 does not he who weighs the heart perceive it?\u201d It refuses gloating: \u201cDo not gloat when your enemy falls.\u201d And it gives the line that has carried countless people through failure: \u201cFor though the righteous fall seven times, they rise again, but the wicked stumble when calamity strikes.\u201d",
      keyVerses: [
        { ref: "Proverbs 24:16", text: "For though the righteous fall seven times, they rise again." }
      ],
      questions: [
        { q:"What defines the righteous in verse 16?", opts:["Never falling", "Rising again", "Falling only once"], correct:1, explain:"Righteousness here is not a clean record but a refusal to stay down." },
        { q:"What excuse does verse 12 dismantle?", opts:["\u2018I was too busy\u2019", "\u2018We knew nothing about this\u2019", "\u2018It's not my job\u2019"], correct:1, explain:"God 'weighs the heart' \u2014 selective ignorance isn't an alibi." },
        { q:"What does the chapter forbid regarding enemies?", opts:["Defending yourself", "Gloating when they fall", "Speaking to them"], correct:1, explain:"Even justified vindication isn't a license to celebrate someone's ruin." }
      ],
      deepDive: "Verse 16 is one of the most quoted verses in the Bible for good reason: it relocates righteousness from performance to persistence. Seven falls \u2014 not one lapse, a pattern of them \u2014 and the person is still called righteous, because they get up. If you're currently down for the fourth or fifth time on something, this verse is Scripture's refusal to write you off. Pair it with verse 12's harder edge: the chapter also won't let you claim ignorance about people in trouble you could have helped. Rise yourself; go back for others." },
    { id:162, book:"Proverbs", title:"Chapter 25 \u2014 A city with broken walls", side:"c",
      passage: "\u201cThese are more proverbs of Solomon, compiled by the men of Hezekiah king of Judah.\u201d The chapter loves precise images: \u201cLike apples of gold in settings of silver is a ruling rightly given.\u201d \u201cLike a city whose walls are broken through is a person who lacks self-control.\u201d It advises restraint in visiting (\u201cSeldom set foot in your neighbor's house \u2014 too much of you, and they will hate you\u201d) and radical kindness to enemies: \u201cIf your enemy is hungry, give him food to eat... you will heap burning coals on his head.\u201d",
      keyVerses: [
        { ref: "Proverbs 25:28", text: "Like a city whose walls are broken through is a person who lacks self-control." }
      ],
      questions: [
        { q:"What does the broken-walls image convey?", opts:["Poverty", "Total vulnerability", "Loneliness"], correct:1, explain:"In the ancient world, walls were survival; a person without self-control is defenseless against everything." },
        { q:"What's the counsel about enemies?", opts:["Avoid them", "Feed them", "Confront them"], correct:1, explain:"The 'burning coals' image is debated, but the action is unmistakable: meet hostility with concrete good." },
        { q:"What does verse 17 warn about?", opts:["Poor gifts", "Overstaying", "Bad advice"], correct:1, explain:"Proverbs' social intelligence includes knowing when to leave." }
      ],
      deepDive: "Chapter 25's images are its argument. Broken walls is the sharpest: self-control isn't one virtue among many but the perimeter that protects all the others \u2014 lose it and your time, money, mouth, and body are all exposed at once. The enemy-feeding counsel is remarkable this far back in Scripture; Paul quotes it directly in Romans 12 as the Christian answer to revenge. Today's takeaway is diagnostic: where is your wall broken? Name the one area where you consistently have no perimeter, and that's the repair project." },
    { id:163, book:"Proverbs", title:"Chapter 26 \u2014 The fool, the sluggard, the gossip", side:"l",
      passage: "A gallery of unflattering portraits. The fool: \u201cAs a dog returns to its vomit, so fools repeat their folly.\u201d The sluggard: \u201cAs a door turns on its hinges, so a sluggard turns on his bed\u201d \u2014 endless motion, no progress \u2014 and \u201cThe sluggard buries his hand in the dish; he is too lazy to bring it back to his mouth.\u201d The gossip: \u201cWithout wood a fire goes out; without a gossip a quarrel dies down.\u201d And on false friendliness: \u201cLike a coating of silver dross on earthenware are fervent lips with an evil heart.\u201d",
      keyVerses: [
        { ref: "Proverbs 26:20", text: "Without wood a fire goes out; without a gossip a quarrel dies down." }
      ],
      questions: [
        { q:"What does the door-on-hinges image capture?", opts:["Productivity", "Motion without progress", "Restfulness"], correct:1, explain:"The sluggard isn't still; he's busy turning, and ends up exactly where he started." },
        { q:"What sustains a quarrel, per verse 20?", opts:["The original offense", "The gossip", "Time"], correct:1, explain:"Conflicts usually survive on retelling, not on the incident itself." },
        { q:"How does the chapter picture the fool's pattern?", opts:["Slow improvement", "A dog returning to its vomit", "One-time mistakes"], correct:1, explain:"Proverbs' most disgusting image, chosen deliberately for the repetition of avoidable mistakes." }
      ],
      deepDive: "Chapter 26 is Proverbs at its most brutal, and its humor is the point \u2014 these images are meant to be so vivid you can't unsee yourself in them. The sluggard passages are the funniest and most convicting: a man turning on his bed like a door, too tired to lift food to his own mouth. And verse 20 hands you a genuine tool: if you want a conflict to die, stop feeding it wood. Most quarrels in a family, church, or workplace are kept alive by three people retelling them. Today: is there a fire you're supplying?" },
    { id:164, book:"Proverbs", title:"Chapter 27 \u2014 Iron sharpens iron", side:"r",
      passage: "\u201cDo not boast about tomorrow, for you do not know what a day may bring.\u201d The chapter values honest friction: \u201cWounds from a friend can be trusted, but an enemy multiplies kisses,\u201d and gives its most famous line: \u201cAs iron sharpens iron, so one person sharpens another.\u201d It ends with practical stewardship: \u201cBe sure you know the condition of your flocks, give careful attention to your herds; for riches do not endure forever.\u201d",
      keyVerses: [
        { ref: "Proverbs 27:17", text: "As iron sharpens iron, so one person sharpens another." }
      ],
      questions: [
        { q:"What does the iron image require?", opts:["Distance and politeness", "Proximity and friction", "Identical opinions"], correct:1, explain:"Nothing is sharpened by agreement; the grinding contact is the mechanism, not a malfunction." },
        { q:"What can be trusted more than an enemy's kisses?", opts:["Flattery", "Wounds from a friend", "Silence"], correct:1, explain:"One hurts to help; the other pleases to harm \u2014 Proverbs inverts how they feel." },
        { q:"What does \u2018know the condition of your flocks\u2019 teach?", opts:["Buy more", "Pay attention to what you actually have", "Sell everything"], correct:1, explain:"Wealth requires attention, not just acquisition \u2014 an ancient case for actually checking your accounts." }
      ],
      deepDive: "Chapter 27 is a roster check. Iron on iron means two hard surfaces in real contact \u2014 proximity, friction, mutual benefit. Most of us drift toward whetstone-free relationships: people who agree, flatter, or never get close enough to see our dull edges. The audit is worth doing honestly: Who is allowed to correct me? When did I last thank someone for pushback instead of defending myself? Whose growth am I supplying friction to? If those come up empty, the assignment is to take one friendship a layer deeper \u2014 invite the honesty you've been managing away." },
    { id:165, book:"Proverbs", title:"Chapter 28 \u2014 Bold as a lion", side:"c",
      passage: "\u201cThe wicked flee though no one pursues, but the righteous are as bold as a lion.\u201d The chapter is heavy on justice and honesty in leadership: \u201cWhen the righteous triumph, there is great elation; but when the wicked rise to power, people go into hiding.\u201d And it names the mechanism of mercy: \u201cWhoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy.\u201d It's also blunt about listening: \u201cIf anyone turns a deaf ear to my instruction, even their prayers are detestable.\u201d",
      keyVerses: [
        { ref: "Proverbs 28:13", text: "Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy." }
      ],
      questions: [
        { q:"What does verse 1 say about guilt?", opts:["It's invisible", "The wicked flee though no one pursues", "It brings peace"], correct:1, explain:"Hidden wrongdoing costs you rest; integrity walks in without looking over its shoulder." },
        { q:"What two things does verse 13 require?", opts:["Confession alone", "Confessing AND renouncing", "Renouncing alone"], correct:1, explain:"Confession without change is management; renouncing without honesty is willpower. Mercy meets both." },
        { q:"What happens when the wicked rise to power?", opts:["Nothing changes", "People go into hiding", "Prosperity follows"], correct:1, explain:"Proverbs consistently notes that leadership character reshapes an entire society's atmosphere." }
      ],
      deepDive: "Verse 13 is the clearest gospel-shaped sentence in Proverbs: concealment blocks prosperity; confession plus renunciation finds mercy. Both halves matter \u2014 admitting without turning is just performance, turning without admitting is just willpower. And verse 1 explains why concealment costs so much: hidden wrong makes you jumpy, defensive, and exhausted, fleeing pursuers who don't exist. Boldness in Proverbs isn't personality; it's the natural posture of someone with nothing buried. Today's question: what would it take to stop managing something and simply name it?" },
    { id:166, book:"Proverbs", title:"Chapter 29 \u2014 Where there is no vision", side:"l",
      passage: "\u201cWhoever remains stiff-necked after many rebukes will suddenly be destroyed \u2014 without remedy.\u201d The chapter's best-known line: \u201cWhere there is no revelation, people cast off restraint; but blessed is the one who heeds wisdom's instruction.\u201d It names a trap most people recognize: \u201cFear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.\u201d And it observes anger honestly: \u201cFools give full vent to their rage, but the wise bring calm in the end.\u201d",
      keyVerses: [
        { ref: "Proverbs 29:25", text: "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe." }
      ],
      questions: [
        { q:"What happens without revelation/vision?", opts:["People become efficient", "People cast off restraint", "Nothing changes"], correct:1, explain:"The verse is about God's revealed word, not merely leadership vision \u2014 lose it and restraint unravels." },
        { q:"Why is fear of man called a snare?", opts:["People are dangerous", "It traps you", "It's unavoidable"], correct:1, explain:"A snare catches you gradually and invisibly; approval-hunger steers a life without announcing itself." },
        { q:"How do fools and the wise handle rage?", opts:["Identically", "Fools give full vent; the wise bring calm in the end", "The wise suppress everything"], correct:1, explain:"Not denial of anger \u2014 management of it, aiming at eventual calm rather than immediate release." }
      ],
      deepDive: "Chapter 29's most personally useful line is verse 25. Fear of man is a snare because it operates invisibly: you don't feel afraid, you just find yourself shaping opinions, spending money, and making decisions around anticipated approval. The antidote Proverbs offers isn't bravado but trust \u2014 relocating your sense of safety from people's verdicts to God's. Pair it with verse 11 on anger: the wise aren't people who feel less, they're people who aim at the end state. Today: name one decision you're making mostly to avoid someone's disapproval." },
    { id:167, book:"Proverbs", title:"Chapter 30 \u2014 Neither poverty nor riches", side:"r",
      passage: "The sayings of Agur \u2014 who opens with startling humility: \u201cI am the most ignorant of men; I do not have a man's understanding.\u201d He prays one of Scripture's most practical prayers: \u201cGive me neither poverty nor riches, but give me only my daily bread. Otherwise, I may have too much and disown you... Or I may become poor and steal, and so dishonor the name of my God.\u201d He marvels at four small creatures that are \u201cextremely wise\u201d \u2014 ants, hyraxes, locusts, and lizards.",
      keyVerses: [
        { ref: "Proverbs 30:8\u20139", text: "Give me neither poverty nor riches, but give me only my daily bread." }
      ],
      questions: [
        { q:"Why does Agur fear too much wealth?", opts:["Taxes", "He may disown God", "It's hard to manage"], correct:1, explain:"Abundance can quietly make God feel optional \u2014 a spiritual risk most people never name." },
        { q:"Why does he fear poverty?", opts:["Discomfort", "He may steal and dishonor God's name", "Shame"], correct:1, explain:"Both extremes threaten his integrity \u2014 the prayer is about character, not comfort." },
        { q:"What makes the four small creatures wise?", opts:["Their strength", "They compensate for weakness with foresight and cooperation", "Their size"], correct:1, explain:"Ants store, hyraxes shelter in rock, locusts organize without a king, lizards get into palaces \u2014 small and effective." }
      ],
      deepDive: "Agur's prayer is one of the sanest requests in the Bible, and rare for being aimed at his own weakness rather than his circumstances. He knows himself: too much and he'll forget God; too little and he'll compromise. So he asks for the middle \u2014 daily bread, the same phrase Jesus later put in the Lord's Prayer. Notice the humility that opens the chapter too: the wisest thing said in it is 'I am ignorant.' Today's exercise: pray Agur's prayer honestly, and see which half you resist more \u2014 that's the one worth examining." },
    { id:168, book:"Proverbs", title:"Chapter 31 \u2014 Speak up, and a life well built", side:"c",
      passage: "King Lemuel records what his mother taught him \u2014 first a charge to leadership: \u201cSpeak up for those who cannot speak for themselves, for the rights of all who are destitute. Speak up and judge fairly; defend the rights of the poor and needy.\u201d Then the book's closing poem, an acrostic portrait of a woman of noble character: she works, trades, plans, invests in a field, \u201copens her arms to the poor,\u201d speaks with wisdom, and \u201ccan laugh at the days to come.\u201d The final line returns to the beginning: \u201cCharm is deceptive, and beauty is fleeting; but a woman who fears the LORD is to be praised.\u201d",
      keyVerses: [
        { ref: "Proverbs 31:8\u20139", text: "Speak up for those who cannot speak for themselves... defend the rights of the poor and needy." }
      ],
      questions: [
        { q:"What is the first charge to the king?", opts:["Expand the kingdom", "Speak up for the voiceless and defend the poor", "Collect taxes fairly"], correct:1, explain:"Power's first assignment in Proverbs is advocacy for those without it." },
        { q:"What characterizes the woman of chapter 31?", opts:["Only domestic duties", "Enterprise, planning, trade, generosity, wisdom, and strength", "Beauty and charm"], correct:1, explain:"She buys fields, runs trade, manages a household, and speaks with wisdom \u2014 a portrait of capability." },
        { q:"How does the book end \u2014 and why does it matter?", opts:["With wealth", "\u2018A woman who fears the LORD is to be praised\u2019", "With a warning"], correct:1, explain:"The book closes on the same foundation it opened with: the fear of the LORD, now embodied in a life." }
      ],
      deepDive: "Proverbs ends by embodying everything it taught. The wisdom that shouted in the streets in chapter 1 now looks like a specific life: someone who works hard, plans ahead, trades shrewdly, opens her arms to the poor, speaks with kindness, and can 'laugh at the days to come' because she's prepared for them. It's not a checklist to measure anyone against \u2014 it's what the fear of the LORD looks like when it's fully lived out in ordinary work, money, and speech. And Lemuel's mother's charge sits right before it: use whatever voice you have for people who don't have one. Thirty-one chapters, and the last word is the same as the first \u2014 the fear of the LORD. That's where wisdom starts, and apparently where it ends up too." }
,
    { id:169, book:"Ecclesiastes", title:"Everything is vapor", side:"l",
      passage: "\u201cMeaningless! Meaningless!\u201d says the Teacher. \u201cUtterly meaningless! Everything is meaningless.\u201d The Hebrew word is hevel \u2014 vapor, breath, mist: not worthless, but impossible to grasp. \u201cWhat do people gain from all their labors at which they toil under the sun? Generations come and generations go, but the earth remains forever.\u201d The sun rises and sets and hurries back; rivers run to the sea and the sea is never full. \u201cThere is nothing new under the sun.\u201d",
      keyVerses: [
        { ref: "Ecclesiastes 1:2", text: "\u201cMeaningless! Meaningless!\u201d says the Teacher. \u201cUtterly meaningless! Everything is meaningless.\u201d" }
      ],
      questions: [
        { q:"What does the Hebrew word hevel actually picture?", opts:["Garbage", "Vapor or breath", "A lie"], correct:1, explain:"Not \u2018worthless\u2019 so much as \u2018ungraspable\u2019 \u2014 you can see your breath on a cold morning and never catch it." },
        { q:"What phrase frames the book's whole search?", opts:["\u2018In heaven above\u2019", "\u2018Under the sun\u2019", "\u2018In the beginning\u2019"], correct:1, explain:"The Teacher deliberately limits his view to this world alone \u2014 and reports honestly what he finds there." },
        { q:"Why is a book this bleak in the Bible?", opts:["By accident", "Because Scripture refuses to pretend life feels tidy", "To discourage faith"], correct:1, explain:"Ecclesiastes gives permission to say the honest thing out loud, inside the pages of Scripture itself." }
      ],
      deepDive: "Ecclesiastes is the strangest book in the Bible and one of the most needed \u2014 an unflinching look at life 'under the sun,' the phrase repeated nearly thirty times to mark the experiment's boundaries. The Teacher isn't a cynic for sport; he's a man with unlimited resources testing whether anything on earth can bear the weight of ultimate meaning. His verdict, hevel, is often mistranslated 'meaningless,' but 'vapor' catches it better: everything real, everything fleeting, nothing you can grip. That honesty is a gift. Most religion rushes to reassure; Ecclesiastes sits in the ache long enough to make its final answer worth something." },
    { id:170, book:"Ecclesiastes", title:"The great experiment", side:"r",
      passage: "The Teacher tries everything a person could want: laughter, wine, great projects, houses, vineyards, gardens, reservoirs, servants, herds, silver and gold, singers, \u201cthe delights of a man's heart.\u201d \u201cI denied myself nothing my eyes desired; I refused my heart no pleasure.\u201d And then the verdict: \u201cYet when I surveyed all that my hands had done and what I had toiled to achieve, everything was meaningless, a chasing after the wind; nothing was gained under the sun.\u201d Even wisdom, he notes, ends the same as folly \u2014 both die.",
      keyVerses: [
        { ref: "Ecclesiastes 2:11", text: "Yet when I surveyed all that my hands had done... everything was meaningless, a chasing after the wind." }
      ],
      questions: [
        { q:"What made the Teacher's experiment unusual?", opts:["He had no resources", "He could actually afford everything", "He only imagined it"], correct:1, explain:"Most people theorize about whether money and pleasure satisfy; he ran the full test with unlimited budget." },
        { q:"What's his conclusion about achievement?", opts:["It fully satisfies", "A chasing after the wind", "It should be avoided"], correct:1, explain:"Not that work is bad, but that it can't carry the weight of ultimate meaning." },
        { q:"What troubles him about wisdom itself?", opts:["It's useless", "The wise and the fool meet the same end", "It can't be learned"], correct:1, explain:"He grants wisdom is better than folly, then notes it doesn't exempt anyone from the grave." }
      ],
      deepDive: "Chapter 2 is the experiment nobody else can afford to run. Solomon-like resources, total permission, and a careful record kept \u2014 pleasure, alcohol, architecture, art, wealth, music, sex, and the sheer satisfaction of building things. The honest report is that it worked, briefly, and then didn't. What makes this more than a rich man's complaint is the reason he gives: everything he built would pass to someone who hadn't earned it and might waste it. Achievement can't outlast you. If you've ever hit a goal and felt the strange flatness afterward, this chapter is Scripture already knowing about it." },
    { id:171, book:"Ecclesiastes", title:"A time for everything", side:"c",
      passage: "\u201cThere is a time for everything, and a season for every activity under the heavens: a time to be born and a time to die, a time to plant and a time to uproot... a time to weep and a time to laugh, a time to mourn and a time to dance... a time to be silent and a time to speak, a time to love and a time to hate, a time for war and a time for peace.\u201d And then the key: \u201cHe has made everything beautiful in its time. He has also set eternity in the human heart.\u201d",
      keyVerses: [
        { ref: "Ecclesiastes 3:11", text: "He has made everything beautiful in its time. He has also set eternity in the human heart." }
      ],
      questions: [
        { q:"What does the poem of seasons acknowledge?", opts:["Only good seasons exist", "Both halves are real", "Nothing changes"], correct:1, explain:"Scripture refuses to pretend life is only harvest; there's a season for uprooting too." },
        { q:"What has God set in the human heart?", opts:["Ambition", "Eternity", "Fear"], correct:1, explain:"The ache the whole book documents is explained here: we're built for more than \u2018under the sun\u2019 can supply." },
        { q:"How does that explain the book's restlessness?", opts:["We're broken", "We're made for eternity but living inside time", "The Teacher was ungrateful"], correct:1, explain:"The mismatch is by design \u2014 it's what keeps a person looking up." }
      ],
      deepDive: "The seasons poem is the most quoted passage in Ecclesiastes, and it's usually read as gentle comfort. It's actually sharper than that: it names the things we'd rather not schedule \u2014 dying, uprooting, tearing down, mourning, hating, war \u2014 as having their proper time under God's ordering. But verse 11 is the key to the whole book: eternity set in the human heart. That single line explains why the Teacher's experiment failed. Nothing temporary satisfies a creature built for permanence. The restlessness isn't a defect; it's a compass." },
    { id:172, book:"Ecclesiastes", title:"Two are better than one", side:"l",
      passage: "The Teacher looks at oppression, envy, and driven work \u2014 \u201cAll toil and all achievement spring from one person's envy of another\u201d \u2014 and then turns to a man with no family, working endlessly, never asking, \u201cFor whom am I toiling?\u201d Against that isolation he sets community: \u201cTwo are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up... A cord of three strands is not quickly broken.\u201d",
      keyVerses: [
        { ref: "Ecclesiastes 4:9\u201310", text: "Two are better than one... If either of them falls down, one can help the other up." }
      ],
      questions: [
        { q:"What does he say drives much achievement?", opts:["Love of the work", "Envy of others", "Divine calling"], correct:1, explain:"An uncomfortably modern diagnosis: much ambition is competitive, not creative." },
        { q:"What question does the isolated worker never ask?", opts:["\u2018How much more?\u2019", "\u2018For whom am I toiling?\u2019", "\u2018Is this legal?\u2019"], correct:1, explain:"Work without relationship loses its point \u2014 and the driven often never pause to notice." },
        { q:"What's the cord-of-three-strands image about?", opts:["Wealth", "Strength through companionship", "Physical rope-making"], correct:1, explain:"Often read at weddings, but written about friendship and community in general." }
      ],
      deepDive: "Chapter 4 is Ecclesiastes at its most tender. Having proven that achievement can't satisfy, the Teacher notices the person most likely to keep trying anyway: alone, driven, no one to enjoy it with, never once asking who any of it is for. The answer he offers isn't more meaning from the work \u2014 it's people. Two are better than one, for warmth, for defense, and for the simple mechanic of being picked up when you fall. If the last few weeks have been all output and no company, this chapter has your name on it: the question to sit with is his, exactly as written \u2014 for whom am I toiling?" },
    { id:173, book:"Ecclesiastes", title:"Eat your bread with joy", side:"r",
      passage: "Between the hard verdicts, the Teacher keeps returning to a simple, stubborn counsel: \u201cA person can do nothing better than to eat and drink and find satisfaction in their own toil. This too, I see, is from the hand of God.\u201d Later he sharpens it: \u201cGo, eat your food with gladness, and drink your wine with a joyful heart... Enjoy life with your wife, whom you love... Whatever your hand finds to do, do it with all your might.\u201d Money doesn't satisfy \u2014 \u201cwhoever loves money never has enough\u201d \u2014 but bread, work, and companionship, received as gifts, do.",
      keyVerses: [
        { ref: "Ecclesiastes 9:7", text: "Go, eat your food with gladness, and drink your wine with a joyful heart, for God has already approved what you do." }
      ],
      questions: [
        { q:"What does the Teacher recommend, given that nothing lasts?", opts:["Despair", "Receive ordinary gifts with joy", "Withdraw from life"], correct:1, explain:"His conclusion is not nihilism but gratitude: enjoy the day you were given." },
        { q:"What does he say about loving money?", opts:["It satisfies eventually", "Whoever loves money never has enough", "It's harmless"], correct:1, explain:"An appetite that grows with feeding \u2014 a diagnosis three thousand years old and still accurate." },
        { q:"How should work be done?", opts:["Minimally", "\u2018With all your might\u2019", "Only for pay"], correct:1, explain:"Fleeting doesn't mean unimportant \u2014 the brevity is a reason for presence, not withdrawal." }
      ],
      deepDive: "This is the turn that saves Ecclesiastes from despair, and it's easy to miss because it arrives quietly and repeatedly. If nothing under the sun can bear ultimate weight, then stop asking it to \u2014 and enjoy it for what it actually is: a gift for today. Bread tastes better when it isn't being asked to justify your existence. That's the paradox at the book's center: the person who stops demanding that life supply meaning is finally free to enjoy life. Today's practice is embarrassingly simple \u2014 eat one meal slowly, notice it, and thank God for it without asking it to be more than a meal." },
    { id:174, book:"Ecclesiastes", title:"Remember your Creator", side:"c",
      passage: "The book closes with an image of aging \u2014 the days of trouble when \u201cthe keepers of the house tremble\u201d and \u201cthe grinders cease because they are few\u201d \u2014 and one urgent charge: \u201cRemember your Creator in the days of your youth, before the days of trouble come.\u201d Then the final verdict, spoken after every experiment has failed: \u201cNow all has been heard; here is the conclusion of the matter: Fear God and keep his commandments, for this is the duty of all mankind. For God will bring every deed into judgment, including every hidden thing.\u201d",
      keyVerses: [
        { ref: "Ecclesiastes 12:13", text: "Now all has been heard; here is the conclusion of the matter: Fear God and keep his commandments." }
      ],
      questions: [
        { q:"When does the Teacher say to remember your Creator?", opts:["After retirement", "In the days of your youth", "Only in crisis"], correct:1, explain:"He is telling the young what the old learn too late: build the foundation before the weather comes." },
        { q:"Where does the whole book finally land?", opts:["Despair", "Fear God and keep his commandments", "Enjoy money"], correct:1, explain:"Everything \u2018under the sun\u2019 failed; the answer required looking above it." },
        { q:"What does he say about hidden deeds?", opts:["They don't count", "God will bring every deed into judgment, including every hidden thing", "Only public acts matter"], correct:1, explain:"Meaning is restored precisely because nothing is finally forgotten \u2014 not even the unseen." }
      ],
      deepDive: "Ecclesiastes ends by earning its conclusion. After chapters of demolition \u2014 pleasure, wealth, wisdom, work, legacy, all vapor \u2014 the last word is not 'therefore nothing matters' but the opposite: fear God, keep his commandments, because everything, including what nobody saw, is finally accounted for. That's the inversion the whole book was built for. If nothing is remembered, nothing matters; because God remembers everything, even the small hidden faithfulness has weight. And the aging poem gives the charge its urgency: remember Him now, while your strength is yours to spend." },
    { id:175, book:"Song of Solomon", title:"Let him kiss me", side:"l",
      passage: "The Bible's love poem opens in the woman's voice, unembarrassed: \u201cLet him kiss me with the kisses of his mouth \u2014 for your love is more delightful than wine.\u201d She is candid about herself \u2014 \u201cDark am I, yet lovely\u201d \u2014 and about wanting to be near him: \u201cTell me, you whom I love, where you graze your flock.\u201d He answers in kind, calling her \u201cmy darling\u201d and comparing her to a mare among Pharaoh's chariots. Two people delighting openly in each other, in a book Scripture chose to keep.",
      keyVerses: [
        { ref: "Song of Solomon 1:2", text: "Let him kiss me with the kisses of his mouth \u2014 for your love is more delightful than wine." }
      ],
      questions: [
        { q:"Whose voice opens the book?", opts:["The man's", "The woman's", "A narrator's"], correct:1, explain:"Unusual for ancient literature: the woman's desire and voice lead the poem throughout." },
        { q:"What's notable about the Song being in Scripture?", opts:["It's a mistake", "The Bible includes frank, joyful romantic love as good and God-given", "It's purely allegory"], correct:1, explain:"Long read allegorically too, but its plain sense celebrates married love without embarrassment." },
        { q:"How does she describe herself?", opts:["Ashamed", "\u2018Dark am I, yet lovely\u2019", "Perfect in every way"], correct:1, explain:"Sun-darkened from working the vineyards \u2014 real, working, and beautiful." }
      ],
      deepDive: "It surprises people that this book is in the Bible at all \u2014 which says more about our assumptions than about Scripture. The Song presents romantic and physical love between a husband and wife as something to be celebrated out loud, not tolerated quietly. Notice who drives it: the woman speaks the majority of the lines and initiates most of the desire, extraordinary in ancient poetry. Christians have also read it for centuries as a picture of God's love for His people \u2014 a legitimate second layer \u2014 but the first layer matters too: God is not embarrassed by the love He designed." },
    { id:176, book:"Song of Solomon", title:"Arise, my darling", side:"r",
      passage: "Winter breaks and the beloved calls: \u201cSee! The winter is past; the rains are over and gone. Flowers appear on the earth; the season of singing has come... Arise, come, my darling; my beautiful one, come with me.\u201d She answers with the Song's refrain of belonging: \u201cMy beloved is mine and I am his.\u201d And she gives the Song's repeated warning, spoken three times across the book: \u201cDo not arouse or awaken love until it so desires.\u201d",
      keyVerses: [
        { ref: "Song of Solomon 2:16", text: "My beloved is mine and I am his." }
      ],
      questions: [
        { q:"What season imagery frames the invitation?", opts:["Harvest", "Spring", "Deep winter"], correct:1, explain:"Love pictured as a thaw \u2014 the world coming back to life around it." },
        { q:"What does the refrain \u2018my beloved is mine and I am his\u2019 emphasize?", opts:["Ownership as control", "Mutual belonging", "One-sided devotion"], correct:1, explain:"The Song's vision is reciprocal: each fully given, neither consumed." },
        { q:"What warning repeats three times in the book?", opts:["Guard your money", "Do not awaken love before its time", "Avoid marriage"], correct:1, explain:"A striking note of restraint inside a celebration \u2014 love is good, and timing matters." }
      ],
      deepDive: "The spring passage is the Song's most quoted, and it works because it locates love inside the turning of seasons: the winter really was long, and it really did end. Then, right beside all that warmth, comes the Song's repeated caution \u2014 don't awaken love before it's ready. That the same book celebrating desire also counsels patience is exactly the balance Scripture keeps: this is powerful and good, and powerful good things have a proper time. Modern culture tends to keep the first half and drop the second. The Song insists on both." },
    { id:177, book:"Song of Solomon", title:"You are altogether beautiful", side:"c",
      passage: "The husband's praise runs long and specific: \u201cHow beautiful you are, my darling! Oh, how beautiful!\u201d Line after line naming what he sees, ending: \u201cYou are altogether beautiful, my darling; there is no flaw in you.\u201d He calls her \u201cmy sister, my bride\u201d \u2014 language of covenant kinship as well as romance \u2014 and says, \u201cYou have stolen my heart with one glance of your eyes.\u201d She responds by welcoming him: \u201cLet my beloved come into his garden.\u201d",
      keyVerses: [
        { ref: "Song of Solomon 4:7", text: "You are altogether beautiful, my darling; there is no flaw in you." }
      ],
      questions: [
        { q:"What characterizes his praise?", opts:["Vague compliments", "Long, specific, particular", "Comparison to others"], correct:1, explain:"Real love in the Song is detailed; generic admiration isn't the same as being known." },
        { q:"What does \u2018my sister, my bride\u2019 add?", opts:["Confusion", "Covenant kinship alongside romance", "A literal relation"], correct:1, explain:"Ancient love language combining permanence and passion \u2014 she is both beloved and kin." },
        { q:"What does \u2018no flaw in you\u2019 express?", opts:["Literal perfection", "Love's way of seeing", "Naive blindness"], correct:1, explain:"Not that she has no faults, but that his gaze isn't hunting for them." }
      ],
      deepDive: "What stands out in chapter 4 is the specificity. He doesn't say 'you're great' \u2014 he catalogues, at length, particular things about a particular person. That's the difference between flattery and being known, and it's a usable lesson: generic praise costs nothing and lands as nothing. 'There is no flaw in you' isn't a claim about her record; it's a description of how love looks at someone \u2014 not scanning for defects. And 'my sister, my bride' quietly refuses to separate passion from permanence, which the surrounding culture then and now keeps trying to do." },
    { id:178, book:"Song of Solomon", title:"Love as strong as death", side:"l",
      passage: "The Song's climax is its most famous passage: \u201cPlace me like a seal over your heart, like a seal on your arm; for love is as strong as death, its jealousy unyielding as the grave. It burns like blazing fire, like a mighty flame. Many waters cannot quench love; rivers cannot sweep it away. If one were to give all the wealth of one's house for love, it would be utterly scorned.\u201d",
      keyVerses: [
        { ref: "Song of Solomon 8:6\u20137", text: "For love is as strong as death... Many waters cannot quench love; rivers cannot sweep it away." }
      ],
      questions: [
        { q:"What does the seal image request?", opts:["Ownership", "Permanent belonging", "A gift"], correct:1, explain:"A seal was pressed into wax as a signature; she asks to be that permanent mark on him." },
        { q:"What comparison measures love's strength?", opts:["Wealth", "Death and the grave", "Time"], correct:1, explain:"Love is placed in the same weight class as death: it does not let go." },
        { q:"What can't buy love?", opts:["Nothing", "All the wealth of one's house", "Only small amounts"], correct:1, explain:"The Song ends by declaring love priceless in the strict sense: not for sale at any figure." }
      ],
      deepDive: "This is where the Song lifts from romance to something enormous. Love as strong as death \u2014 in a world where death always wins, that's the highest claim available. Many waters cannot quench it; wealth cannot buy it. Christians have long heard the gospel in these lines, because a love that outmatched death is exactly what the New Testament claims happened. But the human-level reading is powerful on its own: covenant love is not a feeling that fades with weather, it's a fire that floodwater can't put out. Ask what kind of love you're building \u2014 and whether it could survive what this passage says love survives." },
    { id:179, book:"Isaiah", title:"Come, let us reason together", side:"r",
      passage: "Isaiah opens with God's lawsuit against His people: they've kept the religion and lost the point. \u201cStop bringing meaningless offerings! Your incense is detestable to me... Your hands are full of blood!\u201d And then the remedy, which is not more religion but justice and mercy: \u201cLearn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.\u201d Then the astonishing offer: \u201cCome now, let us settle the matter. Though your sins are like scarlet, they shall be as white as snow.\u201d",
      keyVerses: [
        { ref: "Isaiah 1:18", text: "Come now, let us settle the matter. Though your sins are like scarlet, they shall be as white as snow." }
      ],
      questions: [
        { q:"What was wrong with their worship?", opts:["The wrong songs", "It continued while injustice did", "Too few sacrifices"], correct:1, explain:"God rejects offerings from hands full of blood \u2014 worship can't launder how you treat people." },
        { q:"What does God ask for instead?", opts:["Bigger offerings", "Justice, defense of the oppressed, care for the fatherless and widow", "Silence"], correct:1, explain:"The prophets' constant demand: worship proven by how the vulnerable are treated." },
        { q:"What is offered despite the indictment?", opts:["Nothing", "Complete cleansing", "A lighter sentence"], correct:1, explain:"The chapter's turn is stunning: the prosecutor offers full pardon mid-lawsuit." }
      ],
      deepDive: "Isaiah 1 sets the pattern for the whole book: unflinching diagnosis followed by unreasonable grace. The charge is not irreligion \u2014 they were busy with offerings and festivals \u2014 but religion running alongside injustice, as though the two occupied separate accounts. God says they don't. Then comes verse 18, one of Scripture's boldest sentences: scarlet to snow, offered to the very people just indicted. Isaiah's whole message lives in that tension \u2014 judgment named honestly, mercy offered anyway \u2014 and the invitation is to bring the mess into the open rather than manage it." },
    { id:180, book:"Isaiah", title:"Holy, holy, holy", side:"c",
      passage: "\u201cIn the year that King Uzziah died, I saw the Lord, high and exalted, seated on a throne; and the train of his robe filled the temple.\u201d Seraphim called to one another: \u201cHoly, holy, holy is the LORD Almighty; the whole earth is full of his glory.\u201d The doorposts shook. Isaiah's response was collapse: \u201cWoe to me! I am ruined! For I am a man of unclean lips.\u201d A seraph touched his mouth with a coal from the altar \u2014 \u201cyour guilt is taken away\u201d \u2014 and then the Lord asked, \u201cWhom shall I send?\u201d Isaiah answered: \u201cHere am I. Send me!\u201d",
      keyVerses: [
        { ref: "Isaiah 6:8", text: "Then I heard the voice of the Lord saying, \u201cWhom shall I send? And who will go for us?\u201d And I said, \u201cHere am I. Send me!\u201d" }
      ],
      questions: [
        { q:"What was Isaiah's first reaction to seeing God?", opts:["Joy", "Ruin", "Confidence"], correct:1, explain:"Nearness to holiness produced immediate self-knowledge, not comfort." },
        { q:"What happened before Isaiah was sent?", opts:["He was trained", "His guilt was taken away by a coal from the altar", "He volunteered first"], correct:1, explain:"Cleansing preceded commissioning \u2014 God dealt with his mouth before using it." },
        { q:"What is the order of the encounter?", opts:["Call, then cleansing", "Vision", "Call, then vision"], correct:1, explain:"A pattern many have recognized in their own story: seeing God rightly starts everything else." }
      ],
      deepDive: "Isaiah 6 is the Bible's most complete picture of encountering God's holiness, and its sequence matters. The vision produces conviction \u2014 not vague guilt, but specific: unclean lips, in a man whose life's work was words. Then cleansing, applied precisely where the problem was. Only then the question, and it's an open one: 'whom shall I send?' The invitation was not aimed at him personally; he volunteered from a cleansed place. Notice too that 'holy' is the only attribute Scripture triples. If your sense of God has grown casual, this chapter is the corrective \u2014 and its comfort is that the coal comes before the commission." },
    { id:181, book:"Isaiah", title:"A child is born", side:"l",
      passage: "Into a nation walking in darkness under threat of invasion, Isaiah speaks a promise: \u201cThe virgin will conceive and give birth to a son, and will call him Immanuel\u201d \u2014 God with us. Later he expands it: \u201cThe people walking in darkness have seen a great light... For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.\u201d",
      keyVerses: [
        { ref: "Isaiah 9:6", text: "For to us a child is born, to us a son is given... And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace." }
      ],
      questions: [
        { q:"What does \u2018Immanuel\u2019 mean?", opts:["God is great", "God with us", "God saves"], correct:1, explain:"The name is the promise \u2014 not merely help from a distance but presence." },
        { q:"What's remarkable about the titles in 9:6?", opts:["They're modest", "They ascribe divine names to a coming child", "They describe a general"], correct:1, explain:"No ordinary king in Israel was called Mighty God \u2014 the promise reaches beyond any local ruler." },
        { q:"When were these words first spoken?", opts:["In peacetime", "Under threat of invasion", "After the exile ended"], correct:1, explain:"The light was promised while the darkness was still thickening, not after it lifted." }
      ],
      deepDive: "These are the words read in churches every Christmas, and their original setting makes them stronger, not weaker: a small nation facing annihilation, told that the answer would arrive as a baby. Not an army \u2014 a child. The titles stack up impossibly for any ordinary king: Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace. Seven centuries later the New Testament claims the arrival, and Matthew quotes Immanuel directly. Whatever Isaiah's first hearers understood, the shape of the promise is unmistakable: God's answer to darkness comes near, and comes small." },
    { id:182, book:"Isaiah", title:"Soar on wings like eagles", side:"r",
      passage: "\u201cComfort, comfort my people, says your God\u201d \u2014 the great turn in Isaiah. He measures the waters in the hollow of his hand, weighs the mountains on scales, and the nations are \u201ca drop in a bucket.\u201d To exiles convinced God had lost track of them, the answer is a question: \u201cDo you not know? Have you not heard? The LORD is the everlasting God... He gives strength to the weary and increases the power of the weak... but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.\u201d",
      keyVerses: [
        { ref: "Isaiah 40:31", text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary." }
      ],
      questions: [
        { q:"Who is the promise of renewed strength aimed at?", opts:["The naturally strong", "The weary and the weak", "Warriors only"], correct:1, explain:"The chapter explicitly says youth and strength give out; the renewal is for those who've run dry." },
        { q:"What does \u2018hope in the LORD\u2019 translate more literally as?", opts:["Wish", "Wait for", "Ignore"], correct:1, explain:"The Hebrew carries waiting and hoping together \u2014 strength comes to those who keep looking to Him." },
        { q:"What's the descending order at the end \u2014 soar, run, walk?", opts:["A mistake", "Deliberate", "Random"], correct:1, explain:"Soaring is dramatic; walking without fainting is daily life, and it's given last for a reason." }
      ],
      deepDive: "Isaiah 40 opens the second half of the book with comfort, addressed to people who assumed they'd been forgotten. Its logic is to make God big again: oceans in a hand's hollow, nations as dust on a scale, stars called out by name. Then it turns personal \u2014 the same God who runs galaxies notices your exhaustion. Don't miss the descending order at the end: soar, run, walk. It descends on purpose, because most of life isn't soaring, and walking without fainting through an ordinary hard season is the harder miracle. That's the promise, and it's given to the weary specifically." },
    { id:183, book:"Isaiah", title:"When you pass through the waters", side:"c",
      passage: "\u201cBut now, this is what the LORD says \u2014 he who created you, Jacob, he who formed you, Israel: Do not fear, for I have redeemed you; I have summoned you by name; you are mine. When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.\u201d And the reason: \u201cyou are precious and honored in my sight, and... I love you.\u201d",
      keyVerses: [
        { ref: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you." }
      ],
      questions: [
        { q:"What word choice matters most \u2014 \u2018if\u2019 or \u2018when\u2019?", opts:["\u2018If\u2019", "\u2018When\u2019", "Neither"], correct:1, explain:"God never promises the absence of deep water; He promises company inside it." },
        { q:"What is the basis of \u2018do not fear\u2019?", opts:["Positive thinking", "Redemption, being summoned by name, and belonging", "Good odds"], correct:1, explain:"The command rests on relationship, not on circumstances improving." },
        { q:"What reason does God give in verse 4?", opts:["Their usefulness", "\u2018You are precious and honored in my sight, and I love you\u2019", "Their obedience"], correct:1, explain:"Value assigned by the One doing the valuing \u2014 not earned by performance." }
      ],
      deepDive: "Isaiah 43:2 has walked with people through hospital corridors, funerals, and bankruptcies for centuries, and its honesty is why. It doesn't promise dry ground; it says 'when you pass through' \u2014 the waters are coming, and the fire is real. What's promised is presence and preservation: not swept away, not consumed. Notice also the grammar of belonging stacked in verse 1 \u2014 created you, formed you, redeemed you, summoned you by name, you are mine. Fear is answered not by information about the future but by clarity about whose you are." },
    { id:184, book:"Isaiah", title:"The suffering servant", side:"l",
      passage: "The most quoted chapter in the New Testament: \u201cHe was despised and rejected by mankind, a man of suffering, and familiar with pain... Surely he took up our pain and bore our suffering, yet we considered him punished by God, stricken by him, and afflicted. But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed. We all, like sheep, have gone astray... and the LORD has laid on him the iniquity of us all.\u201d",
      keyVerses: [
        { ref: "Isaiah 53:5", text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." }
      ],
      questions: [
        { q:"What is the servant's suffering FOR?", opts:["His own sins", "Ours", "No reason given"], correct:1, explain:"Substitution is the chapter's engine: he takes what belonged to others." },
        { q:"How did onlookers first interpret his suffering?", opts:["As sacrifice", "As punishment from God for his own wrongdoing", "As heroic"], correct:1, explain:"\u2018We considered him stricken by God\u2019 \u2014 the meaning was hidden until later." },
        { q:"How does the chapter describe us?", opts:["Innocent bystanders", "Sheep who have gone astray, each turning to our own way", "Faithful followers"], correct:1, explain:"The confession is universal \u2014 which is why the substitution had to be." }
      ],
      deepDive: "Isaiah 53 was written centuries before crucifixion existed as a Roman practice, and the New Testament quotes it more than almost any other passage \u2014 Philip explains it to the Ethiopian in Acts 8, and Peter echoes it directly. The theology is dense and simple at once: substitution. He takes what was ours; we receive what was his. Read it slowly and notice the pronouns \u2014 our pain, our transgressions, our iniquity, our peace, our healing \u2014 stacked against his silence, his wounds, his grave. Whatever else this chapter is, it is Scripture's clearest statement that the cost of restoration was paid by someone else." },
    { id:185, book:"Isaiah", title:"Come, all you who are thirsty", side:"r",
      passage: "\u201cCome, all you who are thirsty, come to the waters; and you who have no money, come, buy and eat! Come, buy wine and milk without money and without cost. Why spend money on what is not bread, and your labor on what does not satisfy?\u201d Then the invitation to return: \u201cSeek the LORD while he may be found... Let the wicked forsake their ways... Let them turn to the LORD, and he will have mercy on them, for he will freely pardon.\u201d And God's own perspective: \u201cMy thoughts are not your thoughts, neither are your ways my ways.\u201d",
      keyVerses: [
        { ref: "Isaiah 55:1", text: "Come, all you who are thirsty, come to the waters; and you who have no money, come, buy and eat!" }
      ],
      questions: [
        { q:"Who is the invitation for?", opts:["The wealthy", "The thirsty and those with no money", "The religious elite"], correct:1, explain:"The single entry requirement is thirst; the price has already been handled." },
        { q:"What question does verse 2 ask?", opts:["Why work at all?", "Why spend money on what isn't bread and labor on what doesn't satisfy?", "Why give to the poor?"], correct:1, explain:"A diagnosis of misdirected appetite \u2014 paying for what can't feed you." },
        { q:"What is promised to those who return?", opts:["A probation period", "Free and abundant pardon", "Nothing certain"], correct:1, explain:"The Hebrew suggests pardon in abundance, not grudging minimum." }
      ],
      deepDive: "Isaiah 55 is the Old Testament's great open invitation, and its economics are deliberately absurd: come buy, without money, without cost. That paradox is the point \u2014 the transaction happened somewhere else (chapter 53 just told you where), so what remains is simply coming. Verse 2's question is worth carrying: what am I currently paying for that doesn't feed me? Time, attention, money, energy \u2014 spent on things that leave you hungrier. And the chapter's closing image is one of Scripture's most hopeful: God's word going out like rain and snow, never returning empty, always accomplishing what it was sent to do." },
    { id:186, book:"Isaiah", title:"The Spirit of the Lord is on me", side:"c",
      passage: "\u201cThe Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners... to comfort all who mourn, and provide for those who grieve \u2014 to bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair.\u201d Centuries later, Jesus stood in a synagogue in Nazareth, read exactly this, and said: \u201cToday this scripture is fulfilled in your hearing.\u201d",
      keyVerses: [
        { ref: "Isaiah 61:3", text: "To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair." }
      ],
      questions: [
        { q:"Who is the anointing aimed at serving?", opts:["Kings and nobles", "The poor, brokenhearted, captive, imprisoned, and grieving", "Priests"], correct:1, explain:"The mission is aimed downward \u2014 at exactly the people power usually overlooks." },
        { q:"What's the pattern of the exchanges in verse 3?", opts:["Loss for loss", "Beauty for ashes, joy for mourning, praise for despair", "Delay"], correct:1, explain:"Not erasure of grief but exchange \u2014 something better given in place of what was lost." },
        { q:"What did Jesus do with this passage?", opts:["Avoided it", "Read it aloud in Nazareth and declared it fulfilled that day", "Rewrote it"], correct:1, explain:"He chose this text to announce His own mission \u2014 and stopped reading mid-sentence, before the day of vengeance." }
      ],
      deepDive: "This is the passage Jesus chose as His mission statement, which makes it worth reading twice. Notice who it's for: poor, brokenhearted, captive, grieving \u2014 the mission runs toward the people most systems route around. And notice the exchange language: ashes for beauty, mourning for joy, despair for praise. Nothing here pretends the ashes weren't real; the promise is a trade, not a denial. When Jesus read it in Nazareth, He stopped mid-verse, right before 'the day of vengeance' \u2014 as if to say that part isn't today. Today is the favor." },
    { id:187, book:"Isaiah", title:"Arise, shine", side:"l",
      passage: "\u201cArise, shine, for your light has come, and the glory of the LORD rises upon you. See, darkness covers the earth and thick darkness is over the peoples, but the LORD rises upon you and his glory appears over you. Nations will come to your light, and kings to the brightness of your dawn.\u201d The vision widens: the wealth of nations flowing in, gates that never shut, and a city that needs no sun \u2014 \u201cthe LORD will be your everlasting light, and your God will be your glory.\u201d",
      keyVerses: [
        { ref: "Isaiah 60:1", text: "Arise, shine, for your light has come, and the glory of the LORD rises upon you." }
      ],
      questions: [
        { q:"What is the light's source?", opts:["The people themselves", "The glory of the LORD rising upon them", "The nations"], correct:1, explain:"They shine by reflection \u2014 the command is to arise into a light that has already come." },
        { q:"What is happening around them meanwhile?", opts:["Universal peace", "Darkness covering the earth", "Nothing"], correct:1, explain:"The contrast is the point: light is most visible against the deepest dark." },
        { q:"What happens to the nations in this vision?", opts:["They're destroyed", "They come toward the light", "They ignore it"], correct:1, explain:"Isaiah's vision keeps widening beyond Israel \u2014 the light is for everyone who comes." }
      ],
      deepDive: "Isaiah 60 is written to a people who felt anything but radiant \u2014 which is why the command is 'arise' rather than 'become.' The light already came; the response is to get up into it. The chapter's most striking feature is its scope: nations streaming in, gates standing permanently open, and finally no need for sun or moon because God Himself is the light. Revelation picks up that exact image for the New Jerusalem at the Bible's very end. For anyone in a dark season, the sequencing is the comfort: darkness covers the earth, and the light rises anyway, right in the middle of it." },
    { id:188, book:"Isaiah", title:"New heavens and a new earth", side:"r",
      passage: "Isaiah's final vision: \u201cSee, I will create new heavens and a new earth. The former things will not be remembered... I will create Jerusalem to be a delight and its people a joy. I will rejoice over Jerusalem and take delight in my people; the sound of weeping and of crying will be heard in it no more.\u201d People will build houses and live in them, plant vineyards and eat their fruit \u2014 no more labor stolen by others. \u201cThe wolf and the lamb will feed together... They will neither harm nor destroy on all my holy mountain.\u201d",
      keyVerses: [
        { ref: "Isaiah 65:17", text: "See, I will create new heavens and a new earth. The former things will not be remembered." }
      ],
      questions: [
        { q:"What ends in the new creation?", opts:["Work and joy", "Weeping, crying, and stolen labor", "Community"], correct:1, explain:"Not an escape from life but life without its griefs and injustices." },
        { q:"What continues in the new creation?", opts:["Nothing", "Building, planting, working", "Only rest"], correct:1, explain:"Isaiah's picture isn't idleness on clouds; it's ordinary good work finally secure." },
        { q:"What does the wolf-and-lamb image convey?", opts:["Zoology", "Reconciliation so deep even natural hostility ends", "A parable about kings"], correct:1, explain:"Peace pictured at every level \u2014 not merely absence of war but the healing of hostility itself." }
      ],
      deepDive: "Isaiah ends where the Bible ends: a new creation. What's striking is how earthy it is \u2014 houses, vineyards, work, neighborhoods \u2014 not a disembodied elsewhere but this world healed. What's removed is precise: weeping, premature death, and the theft of your labor by someone else. And the wolf lying down with the lamb pictures peace so complete that even instinctive hostility is undone. Revelation 21 quotes this chapter nearly word for word. For a book that opened with a lawsuit over injustice, ending here is the whole argument: God's intention was never merely to forgive the world but to remake it." },
        { id:398, book:"Isaiah", title:"A shoot from the stump of Jesse", side:"c",
      passage: "After chapters of judgment falling like an axe on a proud forest, Isaiah promises new growth from what looks dead: \u201cA shoot will come up from the stump of Jesse; from his roots a Branch will bear fruit. The Spirit of the LORD will rest on him \u2014 the Spirit of wisdom and of understanding, the Spirit of counsel and of might, the Spirit of the knowledge and fear of the LORD.\u201d This ruler will judge not by appearances but with righteousness, and under him \u201cthe wolf will live with the lamb, the leopard will lie down with the goat\u2026 They will neither harm nor destroy on all my holy mountain, for the earth will be full of the knowledge of the LORD as the waters cover the sea.\u201d",
      keyVerses: [
        { ref: "Isaiah 11:1\u20132", text: "A shoot will come up from the stump of Jesse; from his roots a Branch will bear fruit. The Spirit of the LORD will rest on him." }
      ],
      questions: [
        { q:"What image describes David's line after judgment?", opts:["A thriving tree", "A stump", "A mountain"], correct:1, explain:"The royal line looked finished, which makes new growth from it all the more striking." },
        { q:"What rests on this coming ruler?", opts:["An army", "The Spirit of the LORD", "Wealth"], correct:1, explain:"His qualification is spiritual endowment, not military or political strength." },
        { q:"What picture describes the peace under his rule?", opts:["Absence of conflict only", "Natural enemies", "Human alliances"], correct:1, explain:"Peace so complete it reverses even instinctive predatory hostility." }
      ],
      deepDive: "Jesse was David's father, and calling the royal line a 'stump' is a deliberately harsh image \u2014 a tree cut down to nothing, exactly what the Davidic dynasty would look like after the exile ended it. Isaiah's promise is that new life would come from what looked permanently finished, and that the coming ruler's power would be entirely spiritual rather than military: wisdom, counsel, might, and reverence for God resting on him like nothing before. The wolf-and-lamb vision that follows is one of Scripture's most beloved pictures of restored creation \u2014 not merely an absence of war between nations but a healing so deep it reaches even the food chain. Christians have long read this branch from Jesse's stump as Jesus, whose own genealogy runs straight through a family the exile appeared to have ended." },
  ];
})();
