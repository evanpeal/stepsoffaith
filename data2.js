(function(){
  'use strict';
const CHECKPOINTS = {
    Genesis: {
      title: "Genesis overview",
      overview: [
        "God created the world in six days and rested on the seventh.",
        "Adam and Eve disobeyed God and were separated from the garden.",
        "Noah's obedience saved his family through the flood.",
        "Humanity's pride at the Tower of Babel led God to scatter the people across the earth.",
        "Abraham was called to leave home and become the father of a great nation.",
        "Lot escaped the destruction of Sodom, though his wife looked back and was lost.",
        "Isaac was born in Sarah's old age, and Abraham's faith was tested and proven.",
        "Jacob gained the birthright and blessing meant for his brother Esau.",
        "Jacob dreamed of a stairway to heaven, then later wrestled through the night and was renamed Israel.",
        "Esau and Jacob were reconciled years after their falling out.",
        "Joseph rose from slavery to second-in-command of Egypt, tested his brothers, then forgave them.",
        "Genesis ends with Jacob's family reunited and settled in Egypt."
      ],
      questions: [
        { q:"What theme runs through Genesis \u2014 Noah, Abraham, and Joseph all show this?", opts:["Faithfulness through hardship", "Wealth above all", "Avoiding responsibility"], correct:0, explain:"Each of them stayed faithful through difficulty, and each was part of God preserving His people." },
        { q:"Which family line does Genesis spend most of its second half following?", opts:["Noah's", "Abraham's", "Pharaoh's"], correct:1, explain:"From Abraham onward, Genesis follows his descendants: Isaac, Jacob, and Joseph." },
        { q:"What caused God to scatter the people at Babel?", opts:["A famine", "Their pride in building a tower to make a name for themselves", "A war"], correct:1, explain:"Their desire for fame over trusting God's plan is what led to the confusion of languages." },
        { q:"What new name was Jacob given after wrestling through the night?", opts:["Israel", "Isaac", "Judah"], correct:0, explain:"Israel becomes the name of the nation that traces back to Jacob's twelve sons." },
        { q:"How does Genesis end?", opts:["With Israel in Egypt", "With the Ten Commandments", "With the flood"], correct:0, explain:"Joseph's family settles in Egypt, setting up the story that continues in Exodus." }
      ],
      deepDive: "Genesis moves from the beginning of everything to the beginning of a specific family chosen to carry God's promise forward. Along the way, it never hides the flaws of its main characters, deception, favoritism, jealousy, fear, showing that God's plan doesn't depend on people being perfect, only on His faithfulness to keep working through them. By the end, a fractured family becomes a picture of restoration, setting the stage for what's next: that family becoming an enslaved nation in need of rescue."
    },
    Exodus: {
      title: "Exodus overview",
      overview: [
        "Generations later, Israel had grown into slavery under a new Pharaoh in Egypt.",
        "Moses was rescued as a baby, raised in Pharaoh's household, then fled to Midian after killing an Egyptian.",
        "God called Moses through a burning bush that burned without being consumed.",
        "Moses and Aaron demanded Pharaoh let Israel go, and Pharaoh refused again and again.",
        "God sent ten plagues on Egypt, ending with the death of the firstborn at the first Passover.",
        "God parted the Red Sea, delivering Israel and destroying the pursuing Egyptian army.",
        "God provided manna and water in the wilderness despite the people's complaints.",
        "At Mount Sinai, God gave Israel the Ten Commandments as the foundation of their covenant.",
        "The people worshiped a golden calf while Moses was on the mountain, and Moses interceded for them.",
        "Israel built the Tabernacle, and God's glory came to dwell among them."
      ],
      questions: [
        { q:"What was Israel's condition in Egypt at the start of Exodus?", opts:["Ruling Egypt", "Enslaved", "Living freely"], correct:1, explain:"The descendants of Joseph's family had multiplied but were now enslaved under a Pharaoh who didn't know Joseph." },
        { q:"How did God first get Moses's attention?", opts:["A dream", "A burning bush", "A storm"], correct:1, explain:"The bush that burned without being consumed drew Moses in before God ever spoke." },
        { q:"What was the final plague that broke Pharaoh's resistance?", opts:["Locusts", "The death of the firstborn", "Darkness"], correct:1, explain:"The tenth plague, tied to the first Passover, was the one that finally made Pharaoh let Israel go." },
        { q:"What did Israel receive at Mount Sinai?", opts:["The Ten Commandments", "A new king", "A map to Canaan"], correct:0, explain:"The Ten Commandments became the foundation of Israel's covenant relationship with God." },
        { q:"What did Israel build so God's presence could dwell among them?", opts:["A palace", "The Tabernacle", "A wall"], correct:1, explain:"The Tabernacle was a portable dwelling place, a visible sign that God traveled with His people." }
      ],
      deepDive: "Exodus tells the story of a people moving from slavery to covenant, from having no power of their own to being defined by their relationship with God. It's a story with a clear pattern: God sees oppression, acts to rescue, provides for real needs, and then invites His people into a relationship built on trust rather than control. Even Israel's repeated failures, fear, grumbling, the golden calf, don't cancel God's commitment to dwell among them by the book's end."
    },
    Leviticus: {
      title: "Leviticus overview",
      overview: [
        "God gave Israel five kinds of offerings for worship, thanksgiving, and dealing with sin.",
        "Aaron and his sons were ordained as priests, and God's fire consumed the first offering.",
        "Nadab and Abihu offered unauthorized fire and died \u2014 God's holiness cannot be treated carelessly.",
        "Laws of clean and unclean wove reminders of God into food, health, and daily life.",
        "On the Day of Atonement, the high priest made atonement for all Israel once a year, and the scapegoat carried their sins away.",
        "\u2018Be holy, for I am holy\u2019 turned out to be practical: fair wages, care for the poor, honesty, and loving your neighbor as yourself.",
        "Sabbath years rested the land, and the Year of Jubilee released debts, returned land, and freed servants."
      ],
      questions: [
        { q:"What is the central theme of Leviticus?", opts:["Military conquest", "Holiness", "Building the temple in Jerusalem"], correct:1, explain:"Every offering, law, and festival serves one question: how can a holy God and an unholy people live together?" },
        { q:"What happened on the Day of Atonement?", opts:["The high priest made atonement for all Israel's sins once a year", "A new king was crowned", "The harvest was gathered"], correct:0, explain:"One day a year, one man, carrying the sins of the whole nation \u2014 the most important day on Israel's calendar." },
        { q:"Which famous command comes from Leviticus 19?", opts:["Love your neighbor as yourself", "Go and make disciples", "Remember the sabbath"], correct:0, explain:"Jesus quoted Leviticus when asked for the greatest commandments \u2014 holiness was always about love in practice." },
        { q:"What did the Year of Jubilee provide?", opts:["A yearly tax", "Debts released, land returned, servants freed every fiftieth year", "A new census"], correct:1, explain:"Jubilee built liberation into the calendar so no family's ruin became permanent." },
        { q:"What did the story of Nadab and Abihu teach?", opts:["That priests were above the law", "That God's holiness must not be treated carelessly", "That fire was forbidden"], correct:1, explain:"Closeness to God never makes His holiness casual \u2014 the priests bore the greatest responsibility, not the least." }
      ],
      deepDive: "Leviticus sits at the very center of the Torah, and its question is the Bible's question: how does a holy God live among ordinary, failing people? Its answer works in layers \u2014 sacrifice deals with sin, priests mediate, rhythms of clean and unclean keep God in view daily, and one great Day of Atonement resets the whole nation each year. But the book refuses to let holiness stay ritual: its ethical heart commands fair pay, care for the poor, and love of neighbor. Holiness, in Leviticus, is worship and justice fused together."
    },
    Numbers: {
      title: "Numbers overview",
      overview: [
        "Israel was counted and organized into a camp with the Tabernacle at its center.",
        "The priests blessed the people: \u2018The Lord bless you and keep you.\u2019",
        "The cloud of God's presence led the way \u2014 Israel moved when it lifted and camped when it settled.",
        "The people's complaining brought quail, and a plague with it; seventy elders were given the Spirit to help Moses.",
        "Ten of twelve spies spread fear about Canaan; only Joshua and Caleb trusted God, and the fearful generation was sentenced to forty years in the wilderness.",
        "Korah's rebellion against Moses ended in dramatic judgment.",
        "At Meribah, Moses struck the rock in anger instead of speaking to it, and lost his entry into the land.",
        "The bronze serpent was lifted up \u2014 everyone who looked at it lived.",
        "Balaam was hired to curse Israel, but could only bless them."
      ],
      questions: [
        { q:"What decided Israel's forty years of wandering?", opts:["A drought", "The people believing the fearful spies instead of trusting God", "A war with Moab"], correct:1, explain:"The spies' report was the hinge \u2014 the generation that chose fear would not enter the land their children received." },
        { q:"Which two spies urged Israel to trust God?", opts:["Joshua and Caleb", "Korah and Balaam", "Nadab and Abihu"], correct:0, explain:"They saw the same giants as the other ten but measured them against God instead of themselves." },
        { q:"Why was Moses not allowed to enter the promised land?", opts:["He grew too old", "At Meribah he struck the rock in anger instead of speaking, dishonoring God before the people", "He chose to stay behind"], correct:1, explain:"Representing God falsely in one public moment cost the great leader the destination itself." },
        { q:"What saved those bitten by the venomous serpents?", opts:["A special medicine", "Looking at the bronze serpent lifted on a pole", "Leaving the camp"], correct:1, explain:"Just a look of trust at God's provided remedy \u2014 a pattern Jesus later applied to Himself." },
        { q:"What happened when Balaam tried to curse Israel?", opts:["Only blessings came out of his mouth", "Israel was weakened", "He was made king of Moab"], correct:0, explain:"Three paid attempts, three blessings \u2014 God's favor on His people could not be bought off or reversed." }
      ],
      deepDive: "Numbers is the honest book of the journey \u2014 the long middle between promise and fulfillment where faith is actually tested. Its generation had seen the sea part and still chose fear at the border; its greatest leader, after forty faithful years, stumbled in a single moment of anger. Yet through every failure, the cloud kept leading, the manna kept falling, and hired curses kept turning into blessings. The book's sobering lesson is that unbelief has real costs; its comfort is that God's faithfulness outlasts a whole generation of human failure."
    },
    Deuteronomy: {
      title: "Deuteronomy overview",
      overview: [
        "On the plains of Moab, Moses retold the whole journey to the new generation.",
        "The Shema called Israel to love the Lord with all their heart, soul, and might, and to teach their children diligently.",
        "Moses reminded them they were chosen out of love, not merit \u2014 and warned against claiming \u2018my own power earned this.\u2019",
        "Blessings and curses were set before the people, ratified with their own \u2018Amen.\u2019",
        "Moses' great appeal: \u2018I have set before you life and death... therefore choose life.\u2019",
        "Joshua was commissioned: \u2018Be strong and courageous, for the Lord your God goes with you.\u2019",
        "Moses viewed the promised land from Mount Nebo, died, and was buried by God Himself \u2014 a prophet the Lord knew face to face."
      ],
      questions: [
        { q:"What is Deuteronomy, in form?", opts:["A battle record", "Moses' farewell address to the generation about to enter the land", "A list of kings"], correct:1, explain:"The whole book is Moses preaching Israel's own story back to them before they cross the Jordan." },
        { q:"What does the Shema command first?", opts:["Build an altar", "Love the Lord with all your heart, soul, and might", "Fast weekly"], correct:1, explain:"Before any rule, the covenant asks for undivided love \u2014 Jesus called this the greatest commandment." },
        { q:"Why did God choose Israel, according to Moses?", opts:["They were the largest nation", "Because He loved them and kept His promise", "They were the most skilled"], correct:1, explain:"Israel was the fewest of peoples \u2014 the choosing rested entirely on God's love and faithfulness." },
        { q:"What was Moses' climactic appeal?", opts:["\u2018Choose life\u2019", "\u2018Build the temple\u2019", "\u2018Return to Egypt\u2019"], correct:0, explain:"Life and death, blessing and curse \u2014 and a genuine choice placed in Israel's hands." },
        { q:"How does the Torah end?", opts:["With Israel settled in the land", "With Moses seeing the land from Mount Nebo, then dying", "With the temple built"], correct:1, explain:"The Torah closes on the edge of promise, deliberately unfinished \u2014 faith always passes to the next generation." }
      ],
      deepDive: "Deuteronomy gathers the whole Torah into one long, urgent sermon about memory and choice. Moses knows prosperity will tempt Israel to forget the wilderness, so he builds remembering into everything: daily recitation, family teaching, public reading, songs. The book's theology is strikingly warm \u2014 chosen out of love, commanded first to love \u2014 and strikingly honest about consequences. And it ends the only way the Torah could: with the promise visible but not yet possessed, the great leader buried by God's own hand, and everything depending on whether the next generation will choose life."
    },
    Joshua: {
      title: "Joshua overview",
      overview: [
        "Rahab hid the spies in Jericho and was marked for rescue by a scarlet cord.",
        "The Jordan stopped flowing when the priests stepped in, and twelve memorial stones kept the story alive.",
        "Jericho's walls fell after seven days of marching, trumpets, and a shout.",
        "Achan's hidden theft brought defeat at Ai \u2014 hidden sin weakened the whole camp.",
        "Israel was deceived by the Gibeonites but kept the oath sworn in God's name.",
        "Defending Gibeon, Joshua prayed and the sun stood still \u2014 \u2018the Lord fought for Israel.\u2019",
        "At eighty-five, Caleb claimed the giants' mountain he'd trusted God for since Kadesh.",
        "Joshua's farewell: \u2018Choose for yourselves this day whom you will serve... as for me and my house, we will serve the Lord.\u2019"
      ],
      questions: [
        { q:"What did the priests have to do before the Jordan stopped?", opts:["Wait on the bank for the water to part", "Step into the flooding river carrying the ark", "Build a bridge"], correct:1, explain:"The water stopped when their feet touched it \u2014 the path opened after the first step of obedience." },
        { q:"Why was Jericho's battle plan deliberately strange?", opts:["To confuse historians", "So the victory could only be credited to God", "Israel lacked weapons"], correct:1, explain:"Marching and trumpets win no battles \u2014 which is why no one could claim the walls fell by tactics." },
        { q:"What did Achan's story teach Israel?", opts:["That hidden sin affects the whole community", "That gold is worthless", "That small cities are easy"], correct:0, explain:"One buried secret under one tent cost the whole nation a battle." },
        { q:"Why did Israel keep the treaty with the deceptive Gibeonites?", opts:["They feared Gibeon's army", "The oath was sworn in the Lord's name", "The kings demanded it"], correct:1, explain:"Their word carried God's reputation \u2014 binding even when obtained by fraud." },
        { q:"What choice closed the book of Joshua?", opts:["Which city would be capital", "\u2018Choose for yourselves this day whom you will serve\u2019", "Who would succeed Joshua"], correct:1, explain:"Like Moses, Joshua ended with story and choice \u2014 covenant faith must be re-chosen by every generation." }
      ],
      deepDive: "Joshua is the book of promises kept \u2014 its closing chapters say it outright: \u2018not one of all the Lord's good promises failed.\u2019 The land was received by a strange mix of bold action and radical dependence: rivers crossed by stepping in first, walls toppled by obedient marching, battles won while God threw hailstones. Its warnings are equally clear \u2014 Achan's buried plunder and the unprayed-about treaty show how quickly victory unravels through hidden compromise and self-reliant decisions. The book ends where faith always ends up: a choice, made publicly, renewed by each generation."
    },
    Judges: {
      title: "Judges overview",
      overview: [
        "A generation arose that knew not the Lord, and the cycle began: sin, oppression, crying out, deliverance \u2014 repeat.",
        "Deborah judged Israel and went to battle with Barak; God routed nine hundred iron chariots.",
        "Gideon was called \u2018mighty man of valour\u2019 while hiding in a winepress, and God patiently answered his fleece.",
        "God cut Gideon's army to three hundred so Israel couldn't say \u2018my own strength saved me.\u2019",
        "Samson, a Nazirite from birth, was mighty through God's Spirit but careless with his calling.",
        "Betrayed through Delilah, blinded and imprisoned, Samson's last prayer \u2014 \u2018remember me\u2019 \u2014 was answered.",
        "The book ends in chaos with its refrain: \u2018every man did that which was right in his own eyes.\u2019"
      ],
      questions: [
        { q:"What started the era of the judges?", opts:["A generation that knew not the Lord", "A foreign invasion", "A famine"], correct:0, explain:"The story wasn't passed on \u2014 Deuteronomy's great fear realized within one generation." },
        { q:"Why did God shrink Gideon's army to three hundred?", opts:["To move faster", "So Israel couldn't claim to have saved themselves", "The rest deserted"], correct:1, explain:"Impossible odds made the credit impossible to steal." },
        { q:"What was the true source of Samson's strength?", opts:["His hair itself, like a charm", "The Spirit of the Lord, with his hair as the sign of his vow", "His training"], correct:1, explain:"The hair marked his consecration \u2014 when the vow was fully broken, the presence departed." },
        { q:"How did Samson's story end?", opts:["In escape and a quiet life", "In answered prayer", "In a Philistine pardon"], correct:1, explain:"His first recorded prayer of dependence \u2014 \u2018remember me\u2019 \u2014 was the one God answered." },
        { q:"What is the book's closing diagnosis of Israel?", opts:["\u2018Every man did that which was right in his own eyes\u2019", "\u2018The land had rest forever\u2019", "\u2018All Israel served the Lord\u2019"], correct:0, explain:"With no king \u2014 and God no longer treated as King \u2014 self-rule collapsed into chaos." }
      ],
      deepDive: "Judges is the Bible's most honest book about what happens when a rescued people forgets its rescuer \u2014 not sudden collapse but a spiral, each cycle starting lower than the last. Its heroes are deliberately flawed: a general who won't go without the prophet, a fearful farmer demanding signs, a strongman with no self-control \u2014 and God works through every one of them, which is the book's strange comfort. The refrain \u2018right in his own eyes\u2019 diagnoses the disease, and the ache for a true king sets up everything that follows: Ruth's quiet hope, and Samuel's search for a man after God's own heart."
    },
    Ruth: {
      title: "Ruth overview",
      overview: [
        "Famine and death emptied Naomi's family in Moab; she returned to Bethlehem calling herself Mara \u2014 bitter.",
        "Ruth the Moabite clung to her: \u2018where you go, I will go... your God my God.\u2019",
        "Gleaning \u2018by chance\u2019 in Boaz's field, Ruth met the kindness of a man who kept the law's generous spirit.",
        "Naomi revealed Boaz was a kinsman-redeemer \u2014 a relative with the right to restore the family.",
        "At the threshing floor Ruth asked for his covering; at the city gate Boaz redeemed all, honorably and publicly.",
        "Ruth bore Obed \u2014 grandfather of David \u2014 writing a Moabite widow into the line of Israel's king and the Messiah."
      ],
      questions: [
        { q:"What made Ruth's vow to Naomi remarkable?", opts:["It was required by law", "A Moabite outsider bound herself to Israel's people and God for life", "It lasted one harvest"], correct:1, explain:"Ruth chose Naomi's God with nothing to gain \u2014 loyalty and faith fused in one promise." },
        { q:"How does the book portray God's providence?", opts:["Through dramatic miracles", "Through \u2018coincidences\u2019 and ordinary kindness quietly steered by God", "Through prophetic visions"], correct:1, explain:"No miracles occur in Ruth \u2014 just perfectly timed chance and human faithfulness, which is the point." },
        { q:"What was a kinsman-redeemer?", opts:["A relative with the right to restore a ruined family's land and line", "A royal tax official", "A temple priest"], correct:0, explain:"Rescue was built into Israel's family law \u2014 and \u2018Redeemer\u2019 became one of God's own titles." },
        { q:"Which law fed Ruth in Boaz's field?", opts:["The gleaning laws of Leviticus", "A royal decree", "Boaz's private charity alone"], correct:0, explain:"The command studied back in Leviticus 19 appears here as a widow's actual survival." },
        { q:"How does Ruth's story end?", opts:["With her return to Moab", "With a son, Obed", "With famine returning"], correct:1, explain:"The quiet domestic tale turns out to be royal \u2014 and ultimately messianic \u2014 history." }
      ],
      deepDive: "Ruth is the Bible's great small story \u2014 four chapters, no miracles, no villains \u2014 and it answers the chaos of Judges with a different kind of evidence for God: ordinary people keeping faith, and providence working through coincidence and kindness. Every major character over-delivers on obligation \u2014 Ruth to Naomi, Boaz to the law, Naomi to her grief's slow healing \u2014 embodying the Hebrew idea of hesed, loyal love that does more than duty requires. The ending reframes everything: the widow gleaning scraps was carrying the royal line. God's biggest plans, the book insists, travel through the smallest faithfulness."
    },
    "1 Samuel": {
      title: "1 Samuel overview",
      overview: [
        "Hannah's anguished prayer was answered with Samuel \u2014 whom she gave back to the Lord as promised.",
        "God called the boy Samuel by name in the night; Eli taught him to answer, \u2018Speak, Lord, for your servant is listening.\u2019",
        "Israel demanded a king \u2018like all the nations\u2019 \u2014 rejecting God as King, and choosing it with eyes open.",
        "Saul looked the part \u2014 tallest in Israel \u2014 but was found hiding among the baggage.",
        "At Amalek, Saul's partial obedience ended his kingship: \u2018to obey is better than sacrifice.\u2019",
        "God sent Samuel past seven impressive brothers to anoint David: \u2018the Lord looks at the heart.\u2019",
        "David felled Goliath with a sling and a stone \u2014 \u2018the battle is the Lord's.\u2019",
        "Hunted by jealous Saul, David spared him in the cave, refusing to seize the throne by violence.",
        "Saul and Jonathan fell at Gilboa, and David mourned them: \u2018how are the mighty fallen.\u2019"
      ],
      questions: [
        { q:"How does the era of the kings begin?", opts:["With a coronation", "With a childless woman's prayer at Shiloh", "With a battle"], correct:1, explain:"Hannah's answered prayer produced the prophet who would anoint Israel's first two kings." },
        { q:"What was Israel really rejecting in demanding a king?", opts:["Samuel's leadership", "God Himself as their King", "The judges' salaries"], correct:1, explain:"God named it plainly \u2014 the demand was a vote against His reign, granted with full warning." },
        { q:"What sentence ended Saul's kingship?", opts:["\u2018To obey is better than sacrifice\u2019", "\u2018The sun stood still\u2019", "\u2018Choose you this day\u2019"], correct:0, explain:"Partial obedience dressed as worship \u2014 Samuel's reply became one of Scripture's defining lines." },
        { q:"What standard did God teach Samuel at Jesse's house?", opts:["Height and bearing matter most", "\u2018People look at the outward appearance, but the Lord looks at the heart\u2019", "Eldest sons inherit callings"], correct:1, explain:"Seven presentable brothers passed by; the overlooked shepherd was the choice." },
        { q:"How did David treat Saul while being hunted by him?", opts:["He ambushed him twice", "He spared him, refusing to harm the Lord's anointed", "He fled to Philistia and fought for them against Israel"], correct:1, explain:"David would not take by violence what God had promised to give \u2014 the throne came in God's time." }
      ],
      deepDive: "1 Samuel is the story of two kinds of king \u2014 the one Israel wanted and the one God was preparing \u2014 told through three intertwined lives: the prophet born of prayer, the impressive man who never grew a matching heart, and the shepherd chosen by different arithmetic. Its recurring lesson cuts deep: God is not persuaded by appearance, religious performance, or partial obedience \u2014 \u2018the Lord looks at the heart\u2019 and \u2018to obey is better than sacrifice\u2019 are the book's twin theses. David's years as a hunted fugitive, refusing every shortcut to a promised throne, show what that heart looks like under pressure. The book closes with the old order fallen at Gilboa \u2014 and the shepherd's reign about to begin."
    },
    "2 Samuel": {
      title: "2 Samuel overview",
      overview: [
        "David was crowned over Judah, then \u2014 after seven more years \u2014 over all Israel, without ever seizing the throne.",
        "He took Jerusalem, and danced with all his might as the ark entered the city.",
        "God's covenant through Nathan: David's house and throne would be established forever.",
        "David sought out lame Mephibosheth and gave him a permanent place at the king's table \u2014 for Jonathan's sake.",
        "In the season kings go to war, David stayed home \u2014 Bathsheba, the cover-up, and Uriah's arranged death followed.",
        "Nathan's parable cornered the king: \u2018You are the man.\u2019 David confessed without excuse; Psalm 51 was his prayer.",
        "Forgiveness was real, and so were consequences \u2014 the sword rose in David's own house.",
        "Absalom stole Israel's heart and took the kingdom; David fled barefoot and weeping.",
        "Absalom died against David's orders \u2014 \u2018O my son Absalom, would I had died instead of you.\u2019",
        "The book closes with David's song: \u2018The LORD is my rock, my fortress and my deliverer.\u2019"
      ],
      questions: [
        { q:"What did God promise David through Nathan?", opts:["Endless wealth", "A house and throne established forever", "Victory in every battle"], correct:1, explain:"The Davidic covenant \u2014 the root of every later hope for a forever-King from David's line." },
        { q:"Why did David show kindness to Mephibosheth?", opts:["Political alliance", "His covenant with Jonathan", "Public image"], correct:1, explain:"Hesed \u2014 loyal covenant love \u2014 sought out someone with nothing to offer and gave him the king's table." },
        { q:"What sentence hangs over the Bathsheba chapter?", opts:["\u2018And David rejoiced\u2019", "\u2018But the thing David had done displeased the LORD\u2019", "\u2018And the people never knew\u2019"], correct:1, explain:"The cover-up worked on everyone except the One who mattered." },
        { q:"How did David respond to Nathan's confrontation?", opts:["\u2018I have sinned against the LORD\u2019", "He denied it", "He exiled the prophet"], correct:0, explain:"Immediate, unqualified confession \u2014 the difference between David and Saul in a single sentence." },
        { q:"What was David's cry when Absalom died?", opts:["\u2018Justice is done\u2019", "\u2018Would I had died instead of you\u2019", "\u2018The kingdom is safe\u2019"], correct:1, explain:"A father wishing to trade places with his rebel son \u2014 substitution, the deepest language of love." }
      ],
      deepDive: "2 Samuel gives us the whole David \u2014 the worshiper who danced before the ark, the king who received an everlasting covenant, the adulterer who murdered to hide it, the penitent who wrote Psalm 51, and the father who would have died for his rebel son. No ancient culture told stories like this about its greatest hero; Scripture's honesty is the point. The book's spine is the covenant of chapter 7 \u2014 grace announced, not earned \u2014 holding firm through every failure that follows. David's life proves both halves of the gospel's grammar: sin has real consequences, and genuine repentance finds real mercy. The final song gets the last word: a lifetime of rescue, gathered into praise."
    },
    "1 Kings": {
      title: "1 Kings overview",
      overview: [
        "Offered anything, young Solomon asked for a hearing heart to govern well \u2014 and God added what he didn't ask.",
        "Solomon built the temple in seven years; mid-construction, God said obedience mattered more than architecture.",
        "The glory filled the house, and Solomon prayed: even the highest heaven cannot contain You.",
        "The queen of Sheba came, tested, and confessed: \u2018the half was not told me.\u2019",
        "But Solomon's heart drifted \u2014 seven hundred wives, foreign gods \u2014 \u2018not fully devoted\u2019 as he grew old.",
        "His son Rehoboam chose swagger over servanthood, and ten tribes tore away.",
        "Jeroboam built golden calves so the north wouldn't worship in Jerusalem \u2014 fear counterfeiting faith.",
        "Elijah shut the sky, was fed by ravens, and kept a widow's flour and oil from running dry.",
        "On Carmel, fire fell on a water-soaked altar: \u2018The LORD \u2014 he is God!\u2019",
        "Then burnout: under the broom tree, God gave Elijah food, sleep, a whisper, and seven thousand reasons he wasn't alone."
      ],
      questions: [
        { q:"What did Solomon ask for at Gibeon?", opts:["Riches and long life", "A discerning heart to govern God's people", "Victory over enemies"], correct:1, explain:"He asked for the task, not for himself \u2014 and God delighted to add the rest." },
        { q:"What did Solomon admit at the temple dedication?", opts:["The temple guaranteed God's presence", "Even the highest heaven cannot contain God", "Only Israel could pray there"], correct:1, explain:"The builder himself declared the building too small for its God." },
        { q:"What phrase diagnoses Solomon's fall?", opts:["\u2018His heart was not fully devoted\u2019", "\u2018He lost a great battle\u2019", "\u2018He became poor\u2019"], correct:0, explain:"Not a dramatic collapse but a long drift \u2014 divided devotion compounding as he grew old." },
        { q:"What counsel did Rehoboam reject?", opts:["\u2018Attack Egypt first\u2019", "\u2018Serve the people and they will serve you forever\u2019", "\u2018Build more chariots\u2019"], correct:1, explain:"Servant leadership was the elders' path to a lasting reign \u2014 traded for a boast, and the kingdom split." },
        { q:"Where did Elijah find the LORD at Horeb?", opts:["In the wind", "In the earthquake and fire", "In a gentle whisper"], correct:2, explain:"Not in the spectacular but in the still small voice \u2014 with food, sleep, and a recommission for a burned-out prophet." }
      ],
      deepDive: "1 Kings is a book of summits and cliffs: the temple's glory and Solomon's drift, Carmel's fire and Elijah's broom tree, all within a few chapters of each other. Its central warning is that beginnings guarantee nothing \u2014 the wisest man alive ended \u2018not fully devoted,\u2019 and one arrogant sentence split a kingdom forever. Yet its comfort runs just as deep: God feeds despairing prophets before lecturing them, speaks in whispers as well as fire, and always keeps a remnant \u2014 seven thousand unbowed knees \u2014 that despair never counts. The book asks every reader Elijah's question from Carmel: how long will you waver between two opinions?"
    },
    "2 Kings": {
      title: "2 Kings overview",
      overview: [
        "Elijah was taken up in a whirlwind with chariots of fire \u2014 and his cloak fell to Elisha, who asked for a double portion.",
        "Naaman the great commander was healed of leprosy by the humblest cure imaginable: seven dips in the muddy Jordan.",
        "Surrounded at Dothan, Elisha prayed \u2018open his eyes\u2019 \u2014 and the hills were full of horses and chariots of fire.",
        "Four lepers found the abandoned siege camp and couldn't keep it: \u2018this is a day of good news.\u2019",
        "David's line survived a massacre in one hidden infant \u2014 Joash, crowned at seven beside the temple pillar.",
        "The northern kingdom fell to Assyria \u2014 two centuries of warnings through \u2018all his prophets,\u2019 refused.",
        "Hezekiah spread the Assyrian threat letter before the LORD \u2014 and Jerusalem was delivered without a sword.",
        "Josiah found the lost Book of the Law in the temple, tore his robes, and led Judah's greatest reform.",
        "But Jerusalem fell at last \u2014 the temple burned, and Judah went into exile in Babylon.",
        "The final paragraph is a flicker: Jehoiachin of David's line, freed from prison, at a table in Babylon."
      ],
      questions: [
        { q:"What did Elisha ask of Elijah before he was taken?", opts:["His property", "A double portion of his spirit", "A royal appointment"], correct:1, explain:"The firstborn's inheritance \u2014 to carry the ministry forward as a true heir." },
        { q:"Why did Naaman almost miss his healing?", opts:["The cost was too high", "The cure was too humble", "Elisha refused him"], correct:1, explain:"Grace offended his greatness; his servants' plain logic saved him from his pride." },
        { q:"What was Elisha's prayer at Dothan?", opts:["\u2018Send more soldiers\u2019", "\u2018Open his eyes, LORD, that he may see\u2019", "\u2018Destroy the enemy\u2019"], correct:1, explain:"The fiery army was already present \u2014 only the servant's sight was missing." },
        { q:"What did Josiah's workers find in the temple?", opts:["Hidden treasure", "The lost Book of the Law", "The ark"], correct:1, explain:"Scripture misplaced in God's own house \u2014 and its rediscovery ignited Judah's deepest reform." },
        { q:"How does 2 Kings end?", opts:["With the temple burning", "With David's heir freed from prison at Babylon's table", "With a new temple"], correct:1, explain:"After the worst, one deliberate flicker: the covenant line alive, the story unfinished." }
      ],
      deepDive: "2 Kings is the long fall \u2014 two kingdoms, dozens of kings, and the slow arrival of every warning Deuteronomy ever gave. Yet inside the decline, God keeps working at every scale: healing an enemy general, feeding a besieged city through four lepers, defending Jerusalem overnight, reviving a nation through a rediscovered book. The pattern is unmistakable: judgment comes slowly and only after generations of ignored prophets, while mercy shows up instantly anywhere humility appears \u2014 in a muddy river, a torn robe, a spread-out letter. And the ending is the Bible in miniature: everything apparently lost, and one quiet paragraph insisting the promise still lives."
    },
    "Ezra": {
      title: "Ezra overview",
      overview: [
        "The LORD moved the heart of Cyrus \u2014 and a pagan king's decree sent the exiles home, on Jeremiah's seventy-year schedule.",
        "They built the altar before the walls \u2014 worship first.",
        "At the temple foundation, joy and weeping made one indistinguishable roar.",
        "Opposition came dressed as help, then as fear, then as paperwork \u2014 and stalled the work for years.",
        "Haggai and Zechariah's preaching restarted it; the enemies' own appeal unearthed Cyrus's decree and funded the finish.",
        "Ezra came with a set heart: study the Word, do it, then teach it \u2014 in that order.",
        "Finding the people compromised, Ezra confessed with \u2018we\u2019 and \u2018our\u2019 \u2014 owning sins he hadn't committed.",
        "Reform followed \u2014 painful, imperfect, and real."
      ],
      questions: [
        { q:"Who moved Cyrus to send the exiles home?", opts:["His advisors", "The LORD", "The Egyptian court"], correct:1, explain:"History's superpower signed the paperwork of prophecy." },
        { q:"What restarted the stalled temple work?", opts:["New funding", "The preaching of Haggai and Zechariah", "A Persian army"], correct:1, explain:"The remedy for lost heart was prophetic, not political." },
        { q:"What was Ezra's three-step life pattern?", opts:["Teach, study, do", "Study, do, teach", "Pray, fast, travel"], correct:1, explain:"Ezra 7:10 \u2014 the order with no honest shortcuts." },
        { q:"What pronoun marked Ezra's great confession?", opts:["\u2018They\u2019", "\u2018We\u2019 and \u2018our\u2019", "\u2018You\u2019"], correct:1, explain:"He owned his people's sin as his own \u2014 the grammar of intercession." },
        { q:"What mixed sound rose at the temple foundation?", opts:["Silence", "Joy and weeping, indistinguishable", "Only trumpets"], correct:1, explain:"Rebuilding after loss holds gratitude and grief in the same throat \u2014 and Ezra honors both." }
      ],
      deepDive: "Ezra is the Bible's book of second chances at national scale: the exile ends on schedule, the temple rises twice (once in stone, once in courage), and the community relearns its identity around the Word. Its threads braid together \u2014 providence moving pagan kings, opposition that delays but cannot cancel, prophets who restart what discouragement stopped, and a scribe whose set heart (study, do, teach) becomes the enduring template for anyone handling Scripture. The book's honesty extends to the mess: restoration involved weeping at small foundations and wrenching reform of real compromise. Grace, in Ezra, is a door reopened \u2014 and the sobering, hopeful truth that walking back through it still takes everything you have."
    },
    "Nehemiah": {
      title: "Nehemiah overview",
      overview: [
        "News of Jerusalem's broken walls broke Nehemiah's heart \u2014 he wept, fasted, and prayed for days before planning.",
        "Four months later, the king asked what he wanted \u2014 and between question and answer, Nehemiah prayed the Bible's fastest prayer.",
        "Everyone built: priests, perfumers, goldsmiths, daughters \u2014 each at the section nearest home.",
        "Mockery came first, then threats \u2014 answered with prayer AND a posted guard, a trowel in one hand and a sword in the other.",
        "Four \u2018meeting\u2019 invitations, one answer: \u2018I am carrying on a great project and cannot go down.\u2019",
        "The wall finished in fifty-two days \u2014 and even the enemies credited God.",
        "Then the real rebuilding: Ezra read the Law from daybreak to noon, the Levites gave the meaning, and the people understood.",
        "The weeping people were sent to feast: \u2018the joy of the LORD is your strength.\u2019",
        "And the honest last chapter: promises broken, reforms redone \u2014 renewal as maintenance, not a moment."
      ],
      questions: [
        { q:"What preceded Nehemiah's plan?", opts:["A committee", "Days of weeping, fasting, and prayer", "A royal command"], correct:1, explain:"The burden went to God before it went to the king \u2014 vision began as grief that prayed." },
        { q:"What was the double response to threats?", opts:["Prayer only", "\u2018We prayed to our God and posted a guard\u2019", "Surrender"], correct:1, explain:"Trust and preparation in one sentence \u2014 the book's signature refusal of a false choice." },
        { q:"How did Nehemiah answer the distraction invitations?", opts:["He attended one", "\u2018I am carrying on a great project and cannot go down\u2019", "With an army"], correct:1, explain:"Focus was the defense: no counter-attack, just the work." },
        { q:"What sentence steadied the weeping crowd?", opts:["\u2018Try harder\u2019", "\u2018The joy of the LORD is your strength\u2019", "\u2018Rebuild the wall\u2019"], correct:1, explain:"Conviction had done its work; joy \u2014 with feasting and portions for the poor \u2014 was the strength to carry it." },
        { q:"What does the final chapter honestly show?", opts:["Permanent success", "Relapse", "A new exile"], correct:1, explain:"Renewal has a maintenance schedule; Nehemiah's last act is starting again." }
      ],
      deepDive: "Nehemiah is Scripture's leadership manual disguised as a construction log: burden before vision, prayer under strategy, shared work, focused refusal of distraction, and trust that posts a guard. But its deepest structure is the two walls \u2014 the stone one finished in fifty-two days, and the people rebuilt more slowly around an open book and explained words. The famous sentence at the center \u2014 the joy of the LORD is your strength \u2014 relocates endurance from willpower to gladness. And chapter 13's relapse is the book's severe mercy: what gets rebuilt must be kept, drift is the default, and faithfulness is less a monument than a habit. \u2018Remember me with favor, my God\u2019 \u2014 the worker's prayer when the results won't stay fixed."
    },
    "Esther": {
      title: "Esther overview",
      overview: [
        "A Jewish orphan became queen of Persia \u2014 her identity hidden, her timing not accidental.",
        "One man's refusal to bow became Haman's excuse for genocide \u2014 the date chosen by dice.",
        "Mordecai's question rang out: \u2018Who knows but that you have come to your royal position for such a time as this?\u2019",
        "Esther answered with fasting and courage: \u2018If I perish, I perish.\u2019",
        "A king's sleepless night and a \u2018random\u2019 page of chronicles turned the entire story.",
        "Haman built a gallows for Mordecai and hung on it himself.",
        "The tables were turned; the day of doom became the feast of Purim \u2014 joy and gifts to the poor.",
        "And through it all, God's name never appears \u2014 while His hand never leaves the page."
      ],
      questions: [
        { q:"What is famously absent from Esther?", opts:["A villain", "God's name", "Any feast"], correct:1, explain:"The silence is the theology: hiddenness is not absence." },
        { q:"What was Mordecai's confidence in chapter 4?", opts:["That Persia would relent", "Deliverance was certain regardless", "That the decree was illegal"], correct:1, explain:"\u2018Relief will arise from another place\u2019 \u2014 God's purpose didn't depend on her; her purpose depended on joining it." },
        { q:"What turned the story's hinge?", opts:["A battle", "The king's insomnia and the chronicles' page about Mordecai", "An earthquake"], correct:1, explain:"Providence ran through a sleepless night and a filing system." },
        { q:"What happened to Haman's gallows?", opts:["It was burned", "Haman was hanged on it", "It was never built"], correct:1, explain:"The book's justice is poetic to the letter \u2014 the trap sprang on its builder." },
        { q:"What does Purim celebrate \u2014 and how?", opts:["A military conquest, with parades", "The great reversal", "The temple's completion"], correct:1, explain:"Deliverance turned outward into generosity, retold every year so no generation forgets." }
      ],
      deepDive: "Esther is providence written in invisible ink: no miracles, no visions, no divine name \u2014 only timing, favor, insomnia, and reversal arranged with an author's precision. It is the Bible's book for ordinary life, where God is rarely announced and constantly at work. Its two great sentences balance each other: \u2018for such a time as this\u2019 reframes every position and privilege as placement for service, and \u2018if I perish, I perish\u2019 shows what accepting that placement costs. The reversal structure \u2014 gallows repurposed, dice overruled, doom turned festival \u2014 became Purim's annual lesson: the schemes of the proud overreach, and hidden providence outlasts visible power. Read Esther, and then reread your own \u2018coincidences.\u2019"
    },
    "Job": {
      title: "Job overview",
      overview: [
        "Heaven itself called Job blameless \u2014 before he lost everything in a single day.",
        "His first act in the ashes was worship: \u2018The LORD gave and the LORD has taken away.\u2019",
        "His friends' best moment was seven days of silent presence \u2014 before they ruined it with explanations.",
        "Their system \u2014 suffering equals punishment \u2014 sounded pious and crushed an innocent man.",
        "Job argued, protested, despaired \u2014 and kept aiming all of it at God: faith that wrestles.",
        "From the bottom came the lightning flash: \u2018I know that my Redeemer lives.\u2019",
        "God answered from the whirlwind with seventy questions and no explanation \u2014 and it was enough.",
        "The verdict stunned everyone: the arguer spoke rightly; the defenders did not.",
        "Restoration began after Job prayed for the friends who wounded him."
      ],
      questions: [
        { q:"What did the reader know that Job's friends didn't?", opts:["Job had secretly sinned", "Heaven had declared Job blameless before the suffering began", "The suffering was random"], correct:1, explain:"The book's whole design: watching true-sounding theology become false accusation against a righteous man." },
        { q:"What was the friends' one great success?", opts:["Their speeches", "Seven days of silent presence", "Their final rebuttal"], correct:1, explain:"Comfort was presence; the failure began when explanation replaced it." },
        { q:"How did God answer Job?", opts:["With the backstory of chapters 1\u20132", "With questions and creation", "He never answered"], correct:1, explain:"Job never learned his \u2018why\u2019 \u2014 he met his Who, and put his hand over his mouth." },
        { q:"Whose speech did God call right?", opts:["The friends'", "Job's", "Neither"], correct:1, explain:"Heaven preferred raw honesty aimed at God over tidy defenses that bent the truth." },
        { q:"When did Job's restoration begin?", opts:["Immediately after the whirlwind", "After Job prayed for his friends", "It never came"], correct:1, explain:"Grace moved through the wounded man toward his tormentors before doubling back to him." }
      ],
      deepDive: "Job is the Bible auditing its own simplest theology and finding it insufficient: goodness does not purchase immunity, and suffering is not a verdict. Its structure is the argument \u2014 heaven declares Job innocent on page one precisely so every explanation the friends offer lands as false witness. What survives the audit is stranger and stronger than the old formula: a faith that argues in God's direction, a hope that leaps to a living Redeemer from the story's lowest floor, and a God who answers presence for explanation \u2014 and calls the honest wrestler righteous. The book never tells Job why. It tells the reader something better: your case is heard, your anguish may be spoken aloud to God Himself, and the Voice from the whirlwind does not despise it."
    },
    "Psalms": {
      title: "Psalms overview",
      overview: [
        "Psalm 1 opens the songbook with a fork in the road: the rooted tree or the blowing chaff \u2014 and delight in the Word makes the difference.",
        "Psalm 23 walks through the darkest valley \u2014 where \u2018he\u2019 becomes \u2018you,\u2019 and goodness and mercy give chase.",
        "Psalm 8 stands under the stars: cosmic smallness, conferred royalty \u2014 crowned with glory and honor.",
        "Psalm 42 preaches to its own downcast soul: \u2018Put your hope in God, for I will YET praise him.\u2019",
        "Psalm 46 faces mountains falling into the sea and hears the command: \u2018Be still, and know that I am God.\u2019",
        "Psalm 51 is repentance with the exits sealed: \u2018Create in me a pure heart.\u2019",
        "Psalm 103 disciplines memory into gratitude: sins removed as far as east from west.",
        "Psalm 139 turns total exposure into total embrace: \u2018Search me, God, and know my heart.\u2019",
        "Psalm 63: thirst in a dry land, and a night spent remembering God.",
        "Psalm 84: \u2018Better is one day in your courts than a thousand elsewhere.\u2019",
        "Psalm 90, Moses\u2019 only psalm: \u2018Teach us to number our days, that we may gain a heart of wisdom.\u2019",
        "Psalm 145: the LORD is good to all, and near to all who call on him in truth"
      ],
      questions: [
        { q:"What single habit defines Psalm 1's rooted person?", opts:["Constant travel", "Delight-driven meditation on God's word, day and night", "Wealth management"], correct:1, explain:"The tree is planted by what it drinks \u2014 the Word turned over like food being chewed." },
        { q:"What changes at Psalm 23's darkest valley?", opts:["The shepherd leaves", "\u2018He\u2019 becomes \u2018you\u2019", "The valley disappears"], correct:1, explain:"Distance collapses precisely in the dark \u2014 the psalm's quiet masterstroke." },
        { q:"What does Psalm 42 model for dark seasons?", opts:["Denial", "Preaching to your own soul instead of only listening to it", "Silence"], correct:1, explain:"\u2018Why, my soul, are you downcast? Put your hope in God\u2019 \u2014 hope as a discipline of repetition." },
        { q:"What does \u2018create\u2019 confess in Psalm 51?", opts:["Minor repair is needed", "The heart must be made new", "Nothing is wrong"], correct:1, explain:"David asks for creation, not renovation \u2014 repentance that goes beneath behavior to nature." },
        { q:"How does Psalm 139 end?", opts:["Hiding from God", "Inviting the search: \u2018Search me, God, and know my heart\u2019", "In despair"], correct:1, explain:"Total known-ness embraced as safety \u2014 only someone convinced the Searcher is FOR him prays that." }
      ],
      deepDive: "The Psalms are the Bible's prayer book \u2014 and their genius is range: rooted confidence and drowning despair, cosmic wonder and private guilt, stillness and shouting, all given words and all aimed at God. These eight are a sampler of the whole: they teach that worship begins with what you delight in (1), that presence outweighs circumstance (23, 46), that dignity is conferred, not earned (8, 139), that honest sadness can be discipled (42), that the way back from moral wreckage is public domain (51), and that gratitude is a discipline of accurate memory (103). The Psalter's deepest lesson may be its simplest: everything human \u2014 everything \u2014 can be prayed. The songbook has a page for the day you're having."
    },
    "Proverbs": {
      title: "Proverbs overview",
      overview: [
        "One chapter a day \u2014 that was the pace, because a proverb is meant to be lived before the next one is read.",
        "Chapters 1\u20139 are a father's long plea: wisdom shouts in the street, is searched for like silver, and hosts a feast opposite Folly's.",
        "The foundation appears twice: the fear of the LORD is the beginning of wisdom \u2014 and fools are unteachable, not unintelligent.",
        "Chapter 3: trust with all your heart, lean not on your own understanding. Chapter 4: above all else, guard your heart.",
        "Chapter 8 lifts it all to cosmology \u2014 wisdom stood beside God at creation, delighting, as the world was built.",
        "From chapter 10 the one-line proverbs begin: work, words, integrity, money, friendship, anger, and the long horizon.",
        "The tongue holds life and death (18:21); a gentle answer turns away wrath (15:1); reckless words pierce like swords (12:18).",
        "Pride goes before destruction (16:18); the righteous fall seven times and rise again (24:16).",
        "Iron sharpens iron (27:17); walk with the wise and become wise (13:20); fear of man is a snare (29:25).",
        "Agur prays for neither poverty nor riches (30:8), and the book closes with a charge to speak up for the voiceless \u2014 and a life that embodies everything taught."
      ],
      questions: [
        { q:"Where does wisdom begin, according to Proverbs?", opts:["Education", "The fear of the LORD", "Experience"], correct:1, explain:"Not intelligence but reverence \u2014 remove the foundation and cleverness becomes cunning." },
        { q:"Who is a \u2018fool\u2019 in this book?", opts:["Someone unintelligent", "Someone unteachable", "Someone poor"], correct:1, explain:"The fool's defining trait is refusing instruction, which is why brilliant people can qualify." },
        { q:"Why guard the heart \u2018above all else\u2019 (4:23)?", opts:["It's fragile", "Everything you do flows from it", "Tradition"], correct:1, explain:"Behavior management can't fix a polluted source; Proverbs aims at the wellspring." },
        { q:"What does 14:12 warn about?", opts:["Obvious evil", "A way that SEEMS right but ends in death", "Bad advice from others"], correct:1, explain:"Feeling right is not evidence of being right \u2014 which is why counsel and Scripture exist." },
        { q:"What was the recommended pace for this book \u2014 and why?", opts:["As fast as possible", "One chapter a day", "One per week"], correct:1, explain:"A chapter of Proverbs is dense enough to work on you for a whole day \u2014 speed is the one way to waste it." }
      ],
      deepDive: "Proverbs is wisdom in seed form \u2014 thirty-one chapters, one for each day of most months, which is exactly how generations have read it. Its definition of wisdom is quietly radical: not information but formation, not IQ but skill at living \u2014 rooted in the fear of the LORD and expressed in the most ordinary places: your tone in an argument, your grip on your plans, your gate-keeping of attention, your roster of honest friends, the accuracy of your scales. The shape of the book matters too: chapters 1\u20139 are a father pleading, chapters 10\u201329 are the compressed one-liners, and chapters 30\u201331 close with humility, daily bread, advocacy for the voiceless, and a life that embodies it all. Its realism is essential: proverbs describe how life generally works, not iron guarantees \u2014 Job stands next to it in the canon as the exception's advocate. And its honesty runs deeper than self-improvement: 20:9 asks who can claim a pure heart, and the answer is nobody. Keep the pace you learned here: one chapter, one day, actually planted. A year of that would out-teach a library."
    },
    "Ecclesiastes": {
      title: "Ecclesiastes overview",
      overview: [
        "\u201cMeaningless\u201d is really hevel \u2014 vapor: everything real, everything fleeting, nothing you can grip.",
        "The Teacher ran the full experiment \u2014 pleasure, wine, building, wealth, music, wisdom \u2014 and reported honestly that none of it held.",
        "\u2018Under the sun\u2019 marks the boundary: life examined without looking up.",
        "A time for everything \u2014 including the seasons we'd never schedule: uprooting, mourning, war.",
        "\u201cHe has set eternity in the human heart\u201d \u2014 the line that explains the whole restlessness.",
        "Two are better than one; the driven worker never asks \u2018for whom am I toiling?\u2019",
        "The turn that saves the book: eat your bread with joy, do your work with all your might, receive the day as a gift.",
        "The conclusion, earned after everything failed: fear God and keep his commandments \u2014 every hidden deed is remembered."
      ],
      questions: [
        { q:"What does hevel picture?", opts:["Garbage", "Vapor", "A lie"], correct:1, explain:"Not worthless; ungraspable. That distinction changes the whole book." },
        { q:"What phrase marks the experiment's boundary?", opts:["\u2018In the beginning\u2019", "\u2018Under the sun\u2019", "\u2018Forever and ever\u2019"], correct:1, explain:"Life examined on its own terms, without reference to God \u2014 and found unable to satisfy." },
        { q:"What has God set in the human heart?", opts:["Ambition", "Eternity", "Fear"], correct:1, explain:"Built for permanence, living inside time \u2014 which is why temporary things never quite fit." },
        { q:"What's the book's practical counsel amid all the vapor?", opts:["Despair", "Receive ordinary gifts", "Withdraw"], correct:1, explain:"Stop asking life to justify you, and you're finally free to enjoy it." },
        { q:"Where does the book land?", opts:["Nihilism", "Fear God and keep his commandments", "Wealth"], correct:1, explain:"Meaning is restored precisely because nothing is finally forgotten." }
      ],
      deepDive: "Ecclesiastes is Scripture's permission to say the honest thing. It refuses to rush past the ache \u2014 nearly the whole book is spent proving that pleasure, wealth, achievement, and even wisdom cannot bear ultimate weight. That demolition is what makes its conclusion trustworthy rather than sentimental: fear God, keep his commandments, and in the meantime eat your bread with joy. Two threads hold it together \u2014 eternity set in the human heart (3:11), which explains the restlessness, and the repeated counsel to receive ordinary days as gifts rather than as payment. It's the Bible's answer to anyone who has achieved something and felt the strange flatness afterward: that flatness is telling the truth, and there's somewhere else to look."
    },
    "Song of Solomon": {
      title: "Song of Solomon overview",
      overview: [
        "The Bible's love poem, opening in the woman's voice \u2014 she speaks first and speaks most.",
        "Frank, joyful, unembarrassed celebration of love between husband and wife.",
        "Spring imagery: winter past, flowers appearing, \u2018Arise, come, my darling.\u2019",
        "The refrain of mutual belonging: \u2018My beloved is mine and I am his.\u2019",
        "A repeated caution, three times over: do not awaken love before its time.",
        "Praise that is long and specific \u2014 not generic admiration but being genuinely known.",
        "\u2018My sister, my bride\u2019 \u2014 covenant permanence held together with passion.",
        "The climax: love as strong as death, unquenchable by many waters, unpurchasable at any price."
      ],
      questions: [
        { q:"Whose voice leads the Song?", opts:["The man's", "The woman's", "A narrator's"], correct:1, explain:"Unusual for ancient poetry \u2014 her desire and perspective drive the book." },
        { q:"What repeated caution sits inside the celebration?", opts:["Guard your wealth", "Do not awaken love before its time", "Avoid marriage"], correct:1, explain:"The same book that celebrates desire also counsels patience \u2014 Scripture keeps both." },
        { q:"What characterizes the praise in chapter 4?", opts:["Vague compliments", "Long and specific", "Comparison to others"], correct:1, explain:"The difference between flattery and being truly known." },
        { q:"How strong is love, per chapter 8?", opts:["Stronger than wealth only", "As strong as death", "It fades"], correct:1, explain:"In a world where death always wins, that's the highest claim available." },
        { q:"What can buy love?", opts:["Great wealth", "Nothing", "Time"], correct:1, explain:"The Song ends declaring love priceless in the strict sense." }
      ],
      deepDive: "That this book is in the Bible surprises people, which says more about our assumptions than about Scripture. The Song presents faithful love \u2014 emotional, physical, covenantal \u2014 as good, God-given, and worth celebrating out loud. Its structure is worth noticing: the woman's voice leads, the praise is specific rather than generic, belonging runs both directions equally, and a caution about timing repeats three times inside all the warmth. Christians have long read it as a picture of God's love for His people, a legitimate second layer. But the first layer holds on its own, and it climbs at the end to something enormous: a love as strong as death, that floodwater cannot quench and money cannot buy."
    },
    "Isaiah": {
      title: "Isaiah overview",
      overview: [
        "A lawsuit opens the book: religion continuing alongside injustice \u2014 and then the offer, scarlet sins made white as snow.",
        "The throne room: holy, holy, holy \u2014 conviction, a coal from the altar, and \u2018Here am I. Send me!\u2019",
        "Into invasion and darkness: a virgin will conceive, Immanuel \u2014 and a child born called Mighty God, Prince of Peace.",
        "Comfort for exiles: nations as a drop in a bucket, and strength renewed for the weary \u2014 soar, run, and walk without fainting.",
        "\u2018When you pass through the waters\u2019 \u2014 not if; presence promised inside the fire, not instead of it.",
        "The suffering servant: pierced for our transgressions, and by his wounds we are healed.",
        "The open invitation: come, all who are thirsty, without money and without cost.",
        "The mission Jesus claimed in Nazareth: good news to the poor, beauty for ashes.",
        "A shoot from the stump of Jesse \u2014 new growth from what looked permanently finished.",
        "A taunt against pride reaching past its proper place, echoing far beyond its original target.",
        "The absurdity of an idol-maker warming himself with half a log and worshiping the other half.",
        "And the ending: new heavens and a new earth, no more weeping, work that isn't stolen, the wolf beside the lamb."
      ],
      questions: [
        { q:"What was wrong with the worship in chapter 1?", opts:["Wrong music", "It ran alongside injustice", "Too infrequent"], correct:1, explain:"The prophets insist worship is proven by how the vulnerable are treated." },
        { q:"What order does Isaiah 6 follow?", opts:["Call, then cleansing", "Vision, conviction, cleansing, call", "Cleansing, then vision"], correct:1, explain:"The coal came before the commission \u2014 God dealt with his lips before using them." },
        { q:"Who is promised renewed strength in 40:31?", opts:["The naturally strong", "The weary and weak", "Soldiers"], correct:1, explain:"And note the descending order: soar, run, and finally walk without fainting \u2014 daily life, given last." },
        { q:"What is the servant's suffering for, in chapter 53?", opts:["His own sins", "Ours", "No stated reason"], correct:1, explain:"Substitution is the chapter's engine, and the New Testament quotes it constantly." },
        { q:"What's the entry requirement in chapter 55?", opts:["Wealth", "Thirst", "Religious standing"], correct:1, explain:"The transaction happened elsewhere (chapter 53); what remains is coming." }
      ],
      deepDive: "Isaiah is the Old Testament in miniature: unflinching diagnosis followed by unreasonable grace, over and over, for sixty-six chapters. The first half confronts a nation that kept its religion and lost its justice; the second half comforts exiles convinced they'd been forgotten. Its most famous passages have shaped the church's imagination permanently \u2014 the thrice-holy throne room, the child born with divine titles, eagles' wings for the exhausted, the suffering servant, the free invitation, and a new creation where weeping stops and labor is never stolen. The New Testament quotes Isaiah more than almost any other book, and Jesus chose Isaiah 61 to announce His own mission. Read straight through, its argument is simple: God tells the truth about what's wrong and then does something about it Himself."
    },
    "Jeremiah": {
      title: "Jeremiah overview",
      overview: [
        "Known before formed, set apart before born \u2014 and told plainly that presence, not success, was the promise.",
        "Two sins: forsaking the spring of living water, and digging broken cisterns that hold nothing.",
        "At the potter's house: the marred pot went back on the wheel, not in the trash.",
        "The letter to exiles: build houses, plant gardens, seek the city's good \u2014 and \u2018plans to give you hope and a future,\u2019 seventy years out.",
        "The rawest prayer: \u2018You deceived me, LORD\u2019 \u2014 followed by praise, followed by cursing the day he was born.",
        "A fire shut up in his bones \u2014 he tried to quit and couldn't.",
        "The new covenant: the law written on hearts, sins remembered no more.",
        "And the ending he never wanted: the city fell exactly as he'd warned, and he stayed with the poorest who remained."
      ],
      questions: [
        { q:"What did God promise Jeremiah at his call?", opts:["Success and honor", "Presence and rescue", "An easy road"], correct:1, explain:"Forty years of ignored preaching tested that distinction to its limit." },
        { q:"What are the two sins of Jeremiah 2:13?", opts:["Lying and stealing", "Forsaking the spring, and digging broken cisterns", "Idolatry and theft"], correct:1, explain:"Leaving is the first; the exhausting, leaking substitute is the tragedy." },
        { q:"Who received the promise of Jeremiah 29:11?", opts:["Free citizens of Jerusalem", "Exiles in Babylon facing seventy years", "The king"], correct:1, explain:"Its context makes it sturdier: good plans that outlast a long hard middle." },
        { q:"What's new about the new covenant?", opts:["Fewer rules", "The law written on hearts, and sins remembered no more", "A new priesthood only"], correct:1, explain:"Jesus reached for this language over a cup the night before He died." },
        { q:"How should we measure Jeremiah's ministry?", opts:["By its results", "By obedience under sustained discouragement", "By his popularity"], correct:1, explain:"By modern metrics he failed; by Scripture's, he stands near the top." }
      ],
      deepDive: "Jeremiah is the Bible's hardest study in faithfulness without visible results \u2014 forty years of preaching, no repentance, a burned city, and a prophet who wept rather than gloated when he was proven right. Its images are among Scripture's most useful: broken cisterns for every substitute that requires enormous labor and still runs dry, and the potter's wheel for anyone who feels past repair. Its most quoted verse (29:11) was addressed to people whose situation would not improve for a lifetime, which makes it stronger, not weaker. And at the center, spoken over a city about to fall, is the promise everything afterward depends on: a covenant written on hearts, with sins remembered no more."
    },
    "Lamentations": {
      title: "Lamentations overview",
      overview: [
        "Five poems written in the ashes of Jerusalem \u2014 grief given a whole book and permitted to speak.",
        "Nothing minimized: hunger, ruin, shame, and children, all named without explanation.",
        "The poems are acrostics \u2014 grief so overwhelming it needed a form to hold it, A to Z.",
        "At the exact center, the turn: \u2018Yet this I call to mind and therefore I have hope.\u2019",
        "Because of the LORD's great love we are not consumed \u2014 his compassions are new every morning.",
        "Hope here is not a mood but a deliberate act of recall.",
        "The final plea: restore us to yourself \u2014 relationship asked for before circumstances.",
        "And the book ends unresolved, still waiting, still addressing the God who reigns."
      ],
      questions: [
        { q:"What kind of book is Lamentations?", opts:["A history", "Five poems of sustained grief over Jerusalem's fall", "A law code"], correct:1, explain:"Scripture gives mourning its own book, with no plot and no rush to resolution." },
        { q:"Where does \u2018great is your faithfulness\u2019 sit?", opts:["At a happy ending", "At the center, surrounded by unresolved grief", "In an appendix"], correct:1, explain:"Written by a man who two verses earlier said his hope had perished." },
        { q:"How does hope arrive in chapter 3?", opts:["As a feeling", "By deliberate recall", "Through circumstances improving"], correct:1, explain:"He chooses what to remember when he cannot choose what to feel." },
        { q:"How often are God's mercies renewed?", opts:["Once", "Every morning", "Yearly"], correct:1, explain:"Enough for one day, arriving again tomorrow \u2014 sized exactly for hard seasons." },
        { q:"How does the book end?", opts:["With restoration", "With an unresolved plea", "With celebration"], correct:1, explain:"Scripture lets a book end mid-wait, because sometimes life does." }
      ],
      deepDive: "Lamentations exists because Scripture takes grief seriously enough to give it a structure. The acrostic form is the tell: sorrow so total it required the whole alphabet to contain it. Nothing here is rushed \u2014 no tidy explanations, no early comfort, no minimizing \u2014 which is exactly why grieving people have trusted it for twenty-five centuries. And its most famous lines are trustworthy for the same reason: 'great is your faithfulness' is spoken by a man surrounded by rubble, arriving not by feeling better but by deliberately calling something true to mind. The book ends still waiting, and even that is a gift: it makes room for the faith that is honest, unfinished, and still talking to God."
    },
    "Daniel": {
      title: "Daniel overview",
      overview: [
        "Taken as a teenager and enrolled in a program built to remake him \u2014 he accepted much and drew one clear line.",
        "The statue and the stone: empires rise and shatter; a kingdom not cut by human hands fills the earth.",
        "\u2018But even if he does not\u2019 \u2014 three men refuse to bow, and are met inside the furnace rather than spared it.",
        "The proudest king alive lost his mind, and wrote his own testimony of being humbled.",
        "The writing on the wall: weighed and found wanting \u2014 and the charge, \u2018you knew, and did not humble yourself.\u2019",
        "In his eighties, windows still open toward Jerusalem, three times a day, just as he had done before.",
        "One like a son of man, given everlasting dominion \u2014 the title Jesus chose for Himself.",
        "And a prayer that says \u2018we\u2019 throughout, asking on the basis of God's mercy alone."
      ],
      questions: [
        { q:"How did Daniel handle Babylon's culture?", opts:["Rejected all of it", "Engaged deeply and drew a firm line at one specific point", "Fully assimilated"], correct:1, explain:"He learned the language and served the government, and settled his line in advance." },
        { q:"What do the three words \u2018but if not\u2019 establish?", opts:["Doubt", "Obedience that doesn't depend on being rescued", "A bargain"], correct:1, explain:"They state God can deliver, and refuse to make faithfulness conditional on it." },
        { q:"What was the added charge against Belshazzar?", opts:["Poor governance", "He knew Nebuchadnezzar's story and still didn't humble himself", "Military defeat"], correct:1, explain:"Available truth, unapplied, is its own indictment." },
        { q:"What phrase describes Daniel's response to the prayer ban?", opts:["He prayed louder", "\u2018Just as he had done before\u2019", "He prayed in secret"], correct:1, explain:"The crisis revealed a decades-old habit rather than producing a decision." },
        { q:"Why does \u2018son of man\u2019 matter?", opts:["It's a minor detail", "It's the throne-room title Jesus most often used for Himself", "It refers to Daniel"], correct:1, explain:"A name that sounds humble and quietly claims Daniel 7's scene." }
      ],
      deepDive: "Daniel is the Bible's manual for faithfulness in a culture that isn't yours \u2014 seventy years inside a hostile empire without either withdrawing from it or dissolving into it. The pattern repeats: engage fully, draw the line early, refuse to make obedience conditional on rescue, and give God the credit publicly. Its visions supply the theology underneath that courage \u2014 empires look like a gleaming statue from the ground and like beasts from heaven, and every one of them is temporary. Against them stands a kingdom not cut by human hands and one like a son of man given everlasting dominion. The book's most quietly convicting detail may be Daniel's open windows: what he did under a death sentence was simply what he had always done."
    },

    "Ezekiel": {
      title: "Ezekiel overview",
      overview: [
        "A priest with no temple saw God's throne \u2014 with wheels \u2014 in Babylon. God isn't local.",
        "The watchman: sound the warning; you control the trumpet, never the response.",
        "\u201cI take no pleasure in the death of the wicked\u201d \u2014 the heart behind every warning in the book.",
        "The valley of very dry bones, and the honest answer: \u2018Sovereign LORD, you alone know.\u2019",
        "A new heart of flesh for a heart of stone \u2014 every verb in the promise is \u2018I will.\u2019",
        "Woe to shepherds who feed themselves; \u2018I myself will search for my sheep.\u2019",
        "The glory departed by stages \u2014 slowly, reluctantly \u2014 and returned at the end.",
        "A river from the temple, deepening ankle to waist to unswimmable \u2014 where it flows, everything lives.",
        "And the final word: the city's name is THE LORD IS THERE."
      ],
      questions: [
        { q:"Why did the wheeled throne matter to exiles?", opts:["It was impressive", "It showed God is not confined to Jerusalem", "It predicted chariots"], correct:1, explain:"Their assumption was that God stayed behind in the ruins; the vision says otherwise." },
        { q:"What is the watchman responsible for?", opts:["The response", "The warning", "The outcome of the battle"], correct:1, explain:"Faithfulness measured by the trumpet, not by who listens." },
        { q:"What did the dry bones represent?", opts:["Enemy armies", "Exiles saying \u2018our hope is gone; we are cut off\u2019", "Literal graves"], correct:1, explain:"The vision addresses the death of hope specifically." },
        { q:"Who does the work in the new-heart promise?", opts:["The people", "God", "The priests"], correct:1, explain:"A transplant, not a resolution \u2014 and His Spirit as the power to walk in it." },
        { q:"How does the book end?", opts:["In exile", "With glory returned and the city named THE LORD IS THERE", "With judgment"], correct:1, explain:"Everything the prophets promise comes down to restored presence." }
      ],
      deepDive: "Ezekiel is the book of glory departing and returning, written for people convinced God had been left behind in the rubble. Its visions are famously strange, and every one of them argues the same thing: God is mobile, God is not finished, and God intends to fix the thing that actually broke \u2014 the human heart. The valley of dry bones and the promise of a heart of flesh are the two hinges; together they say that hopelessness and hard-heartedness are both within His power to reverse. And the ending is the whole Bible in four words: THE LORD IS THERE."
    },
    "Hosea": {
      title: "Hosea overview",
      overview: [
        "A prophet told to marry an unfaithful woman \u2014 his ruined marriage became the sermon.",
        "Children named \u2018Not Loved\u2019 and \u2018Not My People\u2019 \u2014 judgment spoken over a family.",
        "And then: go get her back, and love her again, as the LORD loves Israel.",
        "He bought his own wife back for the price of a slave.",
        "Their loyalty was \u2018like the morning mist\u2019 \u2014 real, and gone by noon.",
        "\u2018I desire mercy, not sacrifice\u2019 \u2014 quoted twice by Jesus to religious experts.",
        "God remembers teaching Israel to walk and bending down to feed them.",
        "\u2018How can I give you up?\u2019 \u2014 compassion overruling deserved judgment.",
        "And the ending: \u2018I will heal their waywardness and love them freely.\u2019"
      ],
      questions: [
        { q:"What was Hosea's assignment?", opts:["To rebuild the temple", "To marry an unfaithful woman and live out God's experience", "To crown a king"], correct:1, explain:"His pain became a window into God's." },
        { q:"What did he do after she left?", opts:["Divorced her", "Bought her back and loved her again", "Nothing"], correct:1, explain:"Redemption pictured literally \u2014 paying to reclaim what was already his." },
        { q:"What does God desire over sacrifice?", opts:["Longer prayers", "Mercy, and knowing Him", "Bigger offerings"], correct:1, explain:"Jesus quoted this twice to people who were technically correct and relationally cruel." },
        { q:"What image describes their devotion?", opts:["A river", "Morning mist", "A mountain"], correct:1, explain:"An uncomfortably accurate picture of most shallow devotion." },
        { q:"How does the book end?", opts:["In judgment", "\u2018I will heal their waywardness and love them freely\u2019", "Unresolved"], correct:1, explain:"\u2018Freely\u2019 rules out anything earned." }
      ],
      deepDive: "Hosea is God answering the question of what betrayal feels like from His side by making a prophet live it. The result is the rawest picture of divine love in the Old Testament \u2014 not calm benevolence but the grief of a betrayed spouse who goes and buys his wife back out of the life she chose. The book's two most quoted lines pull in the same direction: 'I desire mercy, not sacrifice' aims at religion without compassion, and 'how can I give you up?' shows God's compassion overruling at the exact moment judgment was due. It ends with two words that define the whole book: love them freely."
    },
    "Joel": {
      title: "Joel overview",
      overview: [
        "A locust plague strips the land \u2014 and Joel reads the disaster as a summons.",
        "\u2018Even now, return to me with all your heart\u2019 \u2014 the door still open after devastation.",
        "\u2018Rend your heart and not your garments\u2019 \u2014 the inward turn, not the visible sign.",
        "God described as gracious, compassionate, slow to anger, abounding in love.",
        "\u2018I will repay you for the years the locusts have eaten.\u2019",
        "And afterward: the Spirit poured out on all people \u2014 sons and daughters, old and young, servants.",
        "\u2018Everyone who calls on the name of the LORD will be saved.\u2019",
        "Peter stood up at Pentecost and said: this is that."
      ],
      questions: [
        { q:"What does \u2018rend your heart, not your garments\u2019 mean?", opts:["Tear clothes correctly", "Real inward repentance rather than a public display", "Fast longer"], correct:1, explain:"The sign was easier than the thing it represented." },
        { q:"What two words open the invitation?", opts:["\u2018Too late\u2019", "\u2018Even now\u2019", "\u2018Perhaps someday\u2019"], correct:1, explain:"Spoken over a stripped landscape \u2014 the door hadn't closed." },
        { q:"What does God promise about lost time?", opts:["It's gone", "\u2018I will repay you for the years the locusts have eaten\u2019", "It never mattered"], correct:1, explain:"Not a rewind, but an outcome fuller than the loss." },
        { q:"Who receives the outpoured Spirit?", opts:["Prophets only", "All people", "Priests"], correct:1, explain:"A flood where there had been a trickle." },
        { q:"Where is Joel 2 quoted?", opts:["Nowhere", "Peter's sermon at Pentecost", "Only in Revelation"], correct:1, explain:"The church's first sermon is an exposition of this chapter." }
      ],
      deepDive: "Joel is short and lands two enormous promises. The first is for the past: 'I will repay you for the years the locusts have eaten' \u2014 spoken to people looking at stripped fields, and carried ever since by anyone grieving a wasted season. The second is for the future: God's Spirit poured out on everyone, explicitly including the people with the least standing. Between them sits the invitation that makes both possible \u2014 'even now, return to me with all your heart,' with the reminder that the God being returned to is gracious, compassionate, and slow to anger."
    },
    "Amos": {
      title: "Amos overview",
      overview: [
        "A shepherd and fig farmer, not a professional prophet, sent to a booming economy.",
        "Judgment on the neighbors first \u2014 and the audience cheered, until the circle closed on them.",
        "The charges were concrete: selling the needy for a pair of sandals, trampling the poor.",
        "\u2018I hate, I despise your religious festivals\u2019 \u2014 worship rejected from an unjust society.",
        "\u2018Let justice roll on like a river, righteousness like a never-failing stream.\u2019",
        "The plumb line: a fixed standard held beside a wall that looked fine to everyone living behind it.",
        "The priest's response: go prophesy somewhere else \u2014 this is the king's sanctuary."
      ],
      questions: [
        { q:"Who was Amos?", opts:["A priest", "A shepherd and fig farmer", "A prince"], correct:1, explain:"An outsider with no career at stake, which is part of why he spoke so plainly." },
        { q:"What's the strategy of chapters 1\u20132?", opts:["Flattery", "Judge the neighbors first, then turn the same standard on the audience", "Historical review"], correct:1, explain:"They applauded six oracles before the seventh landed at home." },
        { q:"Why was their worship rejected?", opts:["Wrong music", "It came from a society crushing the poor", "Too infrequent"], correct:1, explain:"God refuses worship that runs alongside injustice." },
        { q:"What does a plumb line do?", opts:["Measure length", "Test whether a wall is truly vertical", "Weigh goods"], correct:1, explain:"An external standard, because eyes adjust to crooked over time." },
        { q:"What image describes the justice God wants?", opts:["An occasional shower", "A river and a never-failing stream", "A well"], correct:1, explain:"Continuous, not seasonal \u2014 occasional generosity is a wadi, not a river." }
      ],
      deepDive: "Amos is the prophet of justice, and his aim is precise: not a nation that abandoned religion but one that kept it while grinding the poor. His opening is a preaching masterpiece \u2014 six oracles against neighbors that draw applause, then a seventh that lands on the applauders. His most famous line has anchored the church's justice tradition for centuries, and its image matters: a never-failing stream, not a seasonal one. And the plumb line explains why any of it was needed \u2014 walls look straight to the people living behind them, and only an outside standard tells the truth."
    },
    "Obadiah": {
      title: "Obadiah overview",
      overview: [
        "The shortest book in the Old Testament \u2014 twenty-one verses.",
        "Aimed at Edom, descended from Esau: a family betrayal, not a foreign one.",
        "Their sin was standing by when Jerusalem fell \u2014 then gloating, then looting.",
        "\u2018The pride of your heart has deceived you\u2019 \u2014 mountain strongholds that felt untouchable.",
        "\u2018Though you soar like the eagle, from there I will bring you down.\u2019",
        "And a closing promise: the kingdom will be the LORD's."
      ],
      questions: [
        { q:"Who was Edom to Israel?", opts:["Strangers", "Brothers", "Longtime allies"], correct:1, explain:"Which is why the language is so sharp; this was family." },
        { q:"What was their sin?", opts:["Idolatry", "Gloating over a brother's disaster and profiting from it", "Breaking a treaty"], correct:1, explain:"The bystander who becomes a participant gets a whole book." },
        { q:"What deceived them?", opts:["False prophets", "The pride of their own hearts", "Bad advisors"], correct:1, explain:"Pride distorts perception \u2014 they genuinely could not imagine falling." },
        { q:"What does the book's brevity suggest?", opts:["It's unimportant", "That God gave a whole book to how a nation treated someone on their worst day", "It was unfinished"], correct:1, explain:"One page, two permanent points \u2014 pride, and what you do while others suffer." }
      ],
      deepDive: "Obadiah takes one page to make two points that don't expire. First, God notices what you do when someone else is having their worst day \u2014 Edom didn't destroy Jerusalem, they watched, cheered, and took a share, and that was enough. Passive complicity is treated as participation. Second, the diagnosis of pride is exactly worded: 'the pride of your heart has deceived you.' Its danger isn't that it looks bad but that it distorts vision \u2014 secure in cliffs, they could not conceive of falling. The shortest book in the Old Testament exists to say both things are fully visible from heaven."
    },
    "Jonah": {
      title: "Jonah overview",
      overview: [
        "Sent to Nineveh \u2014 capital of Israel's cruelest enemy \u2014 Jonah booked passage the opposite way.",
        "Pagan sailors prayed while the prophet slept, and tried to save him before throwing him over.",
        "The fish was provision, not punishment \u2014 the text says the LORD \u2018provided\u2019 it.",
        "From inside it, Jonah prayed in remembered psalms: \u2018Salvation comes from the LORD.\u2019",
        "An eight-word sermon produced the largest revival in Scripture.",
        "The whole city turned \u2014 from the greatest to the least, the king off his throne.",
        "God relented. Jonah was furious, and admitted why he ran: he knew God was merciful.",
        "The plant, the worm, and a question left hanging: should I not have concern for that city?"
      ],
      questions: [
        { q:"Why did Jonah run?", opts:["Fear of Nineveh", "He knew God was merciful and might spare his enemies", "He doubted the call"], correct:1, explain:"He didn't doubt God's mercy \u2014 he objected to it." },
        { q:"Who behaves better in chapter 1?", opts:["The prophet", "The pagan sailors", "Neither"], correct:1, explain:"The book keeps making outsiders look better than the insider, on purpose." },
        { q:"What's notable about his sermon?", opts:["Its eloquence", "Eight words, no mercy offered", "Its length"], correct:1, explain:"The power plainly wasn't in the preacher." },
        { q:"What was the plant and worm for?", opts:["Shade only", "To expose Jonah grieving a vine while resenting mercy toward 120,000 people", "Punishment"], correct:1, explain:"God argued by experience rather than lecture." },
        { q:"How does the book end?", opts:["Jonah repents", "With God's question unanswered", "Nineveh falls"], correct:1, explain:"The silence aims the question past Jonah, at the reader." }
      ],
      deepDive: "Jonah is a book about a prophet's heart, not a fish. He runs not from danger but from the possibility of mercy reaching people he hates, and says so out loud in chapter 4 while quoting God's own self-description as an accusation. Everything in the book is arranged to expose that: pagan sailors who pray, a pagan city that repents instantly, and a prophet who is angrier about a dead plant than about a spared city. Then it simply stops on God's question, unanswered. That ending is deliberate, and the question it leaves is the one worth carrying: is there anyone you'd rather God judged than saved?"
    },
    "Micah": {
      title: "Micah overview",
      overview: [
        "A courtroom scene: God's case against His people, with the mountains as jury.",
        "The people bid upward \u2014 rams, rivers of oil, even a firstborn \u2014 assuming God was expensive.",
        "The answer: act justly, love mercy, walk humbly with your God.",
        "\u2018But you, Bethlehem\u2019 \u2014 the ruler would come from a town too small to be listed.",
        "His origins \u2018from of old,\u2019 and his work shepherding: \u2018he will be their peace.\u2019",
        "And the closing wonder: who is a God like you, who delights to show mercy?",
        "Sins hurled into the depths of the sea."
      ],
      questions: [
        { q:"What were the people offering?", opts:["Nothing", "Escalating sacrifices, up to a firstborn child", "Prayers only"], correct:1, explain:"They kept raising the price, assuming the problem was quantity." },
        { q:"What are the three requirements of 6:8?", opts:["Pray, fast, give", "Act justly, love mercy, walk humbly", "Study, obey, teach"], correct:1, explain:"Behavior, affection, and posture \u2014 covering others and God." },
        { q:"What's emphasized about Bethlehem?", opts:["Its wealth", "Its smallness", "Its walls"], correct:1, explain:"God's pattern: significance out of the overlooked place." },
        { q:"What does God delight in?", opts:["Judgment", "Showing mercy", "Sacrifice"], correct:1, explain:"Not reluctant forgiveness \u2014 pleasure in it." },
        { q:"What happens to forgiven sins?", opts:["Filed", "Hurled into the depths of the sea", "Reduced"], correct:1, explain:"Thrown where nothing is recovered \u2014 deliberately final." }
      ],
      deepDive: "Micah holds together the two things the prophets keep insisting belong together: what God requires and what God is like. The requirement is the most memorable summary in the Old Testament \u2014 act justly, love mercy, walk humbly \u2014 offered in place of a bidding war of sacrifices. And the answer to what God is like comes in the book's final wonder: a God who does not stay angry and actually delights in mercy, throwing sins into the sea. In between sits the promise over a village too small to list, which Herod's scribes could still quote from memory seven centuries later."
    },
    "Nahum": {
      title: "Nahum overview",
      overview: [
        "A century after Jonah, Nineveh returned to its brutality \u2014 and Nahum announces its fall.",
        "\u2018The LORD is slow to anger but great in power; he will not leave the guilty unpunished.\u2019",
        "Patience is not permission \u2014 both truths sit in the same verse.",
        "\u2018The LORD is good, a refuge in times of trouble. He cares for those who trust in him.\u2019",
        "For nations crushed under Assyria for generations, this was good news, not cruelty.",
        "Mercy received in one generation was not inherited by the next."
      ],
      questions: [
        { q:"How does Nahum relate to Jonah?", opts:["No connection", "Same city, a century later", "Same prophet"], correct:1, explain:"Nineveh's turning under Jonah didn't pass down to the next generation." },
        { q:"What two truths sit in 1:3?", opts:["Anger and indifference", "Slow to anger, and will not leave the guilty unpunished", "Power and distance"], correct:1, explain:"Patience is not the same as permission." },
        { q:"Who was this book good news for?", opts:["Assyria", "The nations Assyria had crushed", "No one"], correct:1, explain:"Judgment on an empire reads differently from underneath its boot." },
        { q:"What does 1:7 say?", opts:["God is distant", "The LORD is good, a refuge in trouble, caring for those who trust Him", "Judgment is coming"], correct:1, explain:"Placed right inside the judgment \u2014 shelter for those who take it." }
      ],
      deepDive: "Nahum is hard reading until you consider who it was written for. Assyria was the ancient world's most efficient terror state, and this book told its victims that the terror had an expiration date. Read from underneath, judgment is not vengeance \u2014 it's justice finally arriving. The book's balance is in its opening verses: slow to anger and unwilling to leave guilt unaddressed, both true at once, with a promise of refuge planted in the middle for anyone who runs to Him. And its relationship to Jonah is its own sober lesson: a generation's repentance has to be handed down, not assumed."
    },
    "Habakkuk": {
      title: "Habakkuk overview",
      overview: [
        "A prophet who argues with God instead of preaching to people.",
        "\u2018How long, LORD, must I call for help, but you do not listen?\u2019",
        "God's answer made it worse: I am raising up Babylon \u2014 and Habakkuk pushed back harder.",
        "He stationed himself on the watchtower to wait for a reply \u2014 complaint with expectation.",
        "\u2018Write the revelation and make it plain... though it linger, wait for it.\u2019",
        "\u2018The righteous person will live by his faithfulness\u2019 \u2014 the line that lit the Reformation.",
        "And the ending: though the fig tree does not bud... yet I will rejoice in the LORD."
      ],
      questions: [
        { q:"What's unusual about this book?", opts:["It's a history", "It's a dialogue", "It has no author"], correct:1, explain:"Complaint, answer, harder complaint, answer \u2014 and none of it rebuked." },
        { q:"What did Habakkuk do after complaining?", opts:["Left", "Climbed the watchtower to wait for God's reply", "Complained louder"], correct:1, explain:"Complaint with expectation \u2014 the posture the whole book models." },
        { q:"Why is 2:4 historically significant?", opts:["It isn't", "Paul quotes it twice; it shaped Luther and the Reformation", "It's obscure"], correct:1, explain:"One line from a minor prophet became the backbone of justification by faith." },
        { q:"What changed by the book's end?", opts:["Everything improved", "Nothing", "He moved away"], correct:1, explain:"The resolution is worship, not circumstances." },
        { q:"What's the force of \u2018yet\u2019 in 3:18?", opts:["Uncertainty", "A deliberate choice of joy after listing every failure honestly", "Denial"], correct:1, explain:"Joy anchored to a Person rather than conditions." }
      ],
      deepDive: "Habakkuk is the book for anyone who has looked at the world and wondered how God tolerates it. The prophet asks directly, receives an answer he finds worse than silence, asks again \u2014 and Scripture preserves all of it without a word of rebuke. Its two most famous lines answer the question in different registers: 'the righteous will live by faith' is the theology, and 'though the fig tree does not bud... yet I will rejoice' is the practice. The ending is the bravest sentence in the minor prophets, and it works because it names every failure specifically before planting that 'yet' on the other side."
    },
    "Zephaniah": {
      title: "Zephaniah overview",
      overview: [
        "The day of the LORD announced in sweeping terms \u2014 no one on the sidelines.",
        "A pointed indictment of complacency: \u2018the LORD will do nothing, either good or bad.\u2019",
        "\u2018Wine left on its dregs\u2019 \u2014 settled, thickened, unstirred indifference.",
        "\u2018Seek the LORD, all you humble of the land... perhaps you will be sheltered.\u2019",
        "And then the turn: judgment past, fear removed, hands no longer hanging limp.",
        "\u2018The LORD your God is with you, the Mighty Warrior who saves.\u2019",
        "He will take great delight in you, and rejoice over you with singing."
      ],
      questions: [
        { q:"What sin does Zephaniah single out?", opts:["Idolatry only", "Complacency", "Poverty"], correct:1, explain:"People who assumed God simply wouldn't act, either way." },
        { q:"What does the \u2018wine on its dregs\u2019 picture?", opts:["Celebration", "Settled, stale indifference from never being stirred", "Wealth"], correct:1, explain:"An image of a life gone thick with unexamined assumptions." },
        { q:"Who is invited to seek the LORD?", opts:["Kings", "The humble of the land", "Priests only"], correct:1, explain:"The invitation runs toward the overlooked." },
        { q:"What is God pictured doing in 3:17?", opts:["Judging", "Delighting, quieting, and singing over His people", "Departing"], correct:1, explain:"One of the few places God Himself is described as singing." },
        { q:"Where does that verse sit in the book?", opts:["At the opening", "After the judgment", "In the middle of the warnings"], correct:1, explain:"The tenderness isn't denial; it's what remains once the confrontation is done." }
      ],
      deepDive: "Zephaniah moves from one of the Bible's bleakest openings to one of its warmest endings, and both halves are needed. The indictment lands on complacency \u2014 not rebellion but the quiet assumption that God isn't going to do anything either way, which is practical atheism wearing religious clothes. Against that he calls the humble to actively seek, without guarantees, only a 'perhaps.' And then the book ends with God delighting, quieting with His love, and singing. Most people can imagine God tolerating them. Very few picture Him singing."
    },
    "Haggai": {
      title: "Haggai overview",
      overview: [
        "The exiles were home, and the temple sat unfinished for sixteen years.",
        "\u2018Is it a time for you to be living in your paneled houses, while this house remains a ruin?\u2019",
        "The felt result of misordered priorities: wages in a purse with holes in it.",
        "\u2018Give careful thought to your ways\u2019 \u2014 an invitation to audit, repeated through the book.",
        "The people obeyed, and God stirred their spirits to build \u2014 a prophet actually listened to.",
        "Then discouragement: the new temple looked like nothing beside Solomon's.",
        "Three times: be strong, and work, for I am with you.",
        "\u2018The glory of this present house will be greater than the former.\u2019"
      ],
      questions: [
        { q:"What was the problem?", opts:["Persecution", "Postponement", "No materials"], correct:1, explain:"Nobody decided to abandon it; sixteen years just passed." },
        { q:"What image names their frustration?", opts:["An empty barn", "Wages put in a purse with holes", "A broken plow"], correct:1, explain:"Effort producing nothing that stays." },
        { q:"How did the people respond?", opts:["They ignored him", "They obeyed and began to build", "They exiled him"], correct:1, explain:"One of the few prophets whose audience actually listened." },
        { q:"What discouraged the builders later?", opts:["Enemies", "Comparison with the former temple", "Illness"], correct:1, explain:"God named the comparison out loud rather than pretending it away." },
        { q:"What did God repeat three times?", opts:["\u2018Give more\u2019", "\u2018Be strong... and work. For I am with you\u2019", "\u2018Wait\u2019"], correct:1, explain:"Encouragement, assignment, presence \u2014 in that order." }
      ],
      deepDive: "Haggai is short, practical, and uncomfortably current. Its subject is how good intentions die \u2014 not by decision but by postponement, one reasonable delay at a time until sixteen years have gone. The purse with holes names the feeling that results: working hard and watching it evaporate. And the second half addresses the discouragement that comes after you finally start, when what you're building looks small beside what used to be. God's answer isn't to dismiss the comparison but to outlast it: be strong, work, I am with you \u2014 and this modest house will hold a greater glory than the first."
    },
    "Zechariah": {
      title: "Zechariah overview",
      overview: [
        "Visions to encourage a discouraged remnant rebuilding with almost nothing.",
        "A lampstand fed by olive trees \u2014 a light with a supply it doesn't generate itself.",
        "\u2018Not by might nor by power, but by my Spirit, says the LORD Almighty.\u2019",
        "\u2018Who dares despise the day of small things?\u2019",
        "A king arriving righteous and victorious \u2014 and lowly, riding a donkey.",
        "He removes the war horses and the battle bow, and proclaims peace to the nations.",
        "A fountain opened for cleansing; a shepherd struck; one pierced and mourned as an only child.",
        "And an ending where even the cooking pots are marked HOLY TO THE LORD."
      ],
      questions: [
        { q:"What does the lampstand vision picture?", opts:["Human effort", "A light continuously supplied from a source it doesn't produce", "A treasury"], correct:1, explain:"Oil flowing straight from the trees \u2014 supply without pumping." },
        { q:"What does 4:6 rule out?", opts:["All work", "Might and power as the source of the work", "Prayer"], correct:1, explain:"Zerubbabel still built; the verse names what it ran on." },
        { q:"What does \u2018the day of small things\u2019 address?", opts:["Impatience", "Contempt for modest beginnings", "Poor planning"], correct:1, explain:"A direct word to anyone embarrassed by how small their start looks." },
        { q:"Why does the donkey matter in 9:9?", opts:["Practicality", "Horses meant war; a donkey signaled peace", "It was cheaper"], correct:1, explain:"Jesus deliberately arranged this entrance." },
        { q:"What's remarkable about the book's ending?", opts:["Nothing", "Even cooking pots are inscribed HOLY TO THE LORD", "It ends in judgment"], correct:1, explain:"The line between sacred and ordinary disappears entirely." }
      ],
      deepDive: "Zechariah was written to people rebuilding something that looked pitiful next to what used to be, and its most quoted line is aimed exactly there: not by might nor by power, but by my Spirit. Alongside it sits the question that has rescued a lot of small faithful beginnings \u2014 who dares despise the day of small things? The later chapters turn toward a coming king whose victory arrives on a donkey and results in disarmament, and toward a pierced one mourned like an only child, images the Gospels reach for directly. And the ending erases the line between sacred and ordinary: even the pots are holy."
    },
    "Malachi": {
      title: "Malachi overview",
      overview: [
        "Six arguments \u2014 God speaks, and the people answer back with defensive questions.",
        "\u2018I have loved you.\u2019 \u2018How have you loved us?\u2019",
        "Blind, lame, and diseased animals offered \u2014 leftovers dressed as worship.",
        "\u2018Try offering them to your governor. Would he be pleased with you?\u2019",
        "\u2018Will a mere mortal rob God?\u2019 \u2014 in tithes and offerings.",
        "The one place God says: test me in this, and see if I do not open the floodgates.",
        "A scroll of remembrance written for those who feared the LORD in a cynical age.",
        "\u2018The sun of righteousness will rise with healing in its rays\u2019 \u2014 and then four hundred years of silence."
      ],
      questions: [
        { q:"What's the book's structure?", opts:["Poetry", "Six disputes, with the people's objections quoted back", "A narrative"], correct:1, explain:"The defensive questions make it feel unnervingly modern." },
        { q:"What was wrong with the offerings?", opts:["Too small", "Blind and diseased animals", "The wrong species"], correct:1, explain:"Cheapness dressed as devotion." },
        { q:"What test does God propose about the offerings?", opts:["A contest", "Offer them to your governor and see", "A fast"], correct:1, explain:"They showed more care for a human official than for God." },
        { q:"What's unique about the tithe passage?", opts:["Nothing", "God explicitly invites His people to test Him", "It's a parable"], correct:1, explain:"Elsewhere testing God is forbidden; here He opens the books." },
        { q:"How does the Old Testament end?", opts:["In judgment", "With sunrise promised", "With a new king"], correct:1, explain:"The next voice is John the Baptist, the promised messenger." }
      ],
      deepDive: "Malachi closes the Old Testament with an argument and a sunrise. Its central charge isn't dramatic rebellion but cheapness \u2014 giving God what costs nothing while showing more care for a human official. The test God proposes cuts through every defense: try that with your governor. And then two gifts before the silence: a scroll of remembrance, recording the people who kept fearing God in a cynical era when it changed nothing visible, and the promise of the sun of righteousness rising with healing in its rays. Four hundred years later, an angel appeared to a priest in the temple, and the silence broke."
    },

    "Matthew": {
      title: "Matthew overview",
      overview: [
        "A genealogy that includes a prostitute, a Moabite, and \u2018Uriah's wife\u2019 \u2014 this family line runs through scandal on purpose.",
        "Two names frame everything: Jesus, because he saves; Immanuel, God with us.",
        "Foreign stargazers worshiped; the scribes who knew the prophecy never walked the six miles.",
        "At the baptism the Father said \u2018I am well pleased\u2019 \u2014 before a single public work.",
        "In the wilderness, three offers of legitimate ends by illegitimate routes, answered with Scripture.",
        "The Beatitudes announce favor on the bankrupt, grieving, and hungry \u2014 the wrong list.",
        "The law driven inward: contempt is murder's root, and enemies are to be loved.",
        "\u2018Our Father in heaven\u2019 \u2014 God's name, kingdom, and will before bread, forgiveness, and rescue.",
        "Both builders heard the same words; only one put them into practice.",
        "\u2018Come to me, all you who are weary\u2026 for I am gentle and humble in heart.\u2019",
        "The sheep and the goats: food, water, welcome, clothes, and visits \u2014 done to Him.",
        "And the ending: all authority, therefore go \u2014 and \u2018I am with you always.\u2019"
      ],
      questions: [
        { q:"Why does Matthew include those women in the genealogy?", opts:["To fill space", "To show the Messiah's line runs through outsiders, scandal, and failure", "They were royalty"], correct:1, explain:"It tells you what kind of Savior is arriving and who He came for." },
        { q:"When did the Father declare His pleasure in Jesus?", opts:["After the miracles", "At the baptism, before any public ministry", "At the resurrection"], correct:1, explain:"The pleasure preceded the performance \u2014 and was immediately attacked in the wilderness." },
        { q:"Who does Jesus call blessed?", opts:["The strong and admired", "The poor in spirit, mourning, meek, merciful, persecuted", "The religious experts"], correct:1, explain:"Announcements about who the kingdom belongs to, not steps to earn it." },
        { q:"What separates the two builders in chapter 7?", opts:["Their materials", "One put the words into practice; both heard them", "One avoided the storm"], correct:1, explain:"The same storm hit both houses; only the foundation differed." },
        { q:"What does Jesus say His own heart is like?", opts:["Fierce", "Gentle and humble", "Distant"], correct:1, explain:"The one time He describes His heart directly, this is the word He chooses." }
      ],
      deepDive: "Matthew writes for readers steeped in the Old Testament, and his Gospel is built to show that Jesus is where all of it was pointing \u2014 quoting prophecy constantly and structuring the book around five great teaching blocks. Its center of gravity is the Sermon on the Mount, which is deliberately impossible: by the time Jesus finishes relocating murder to contempt and adultery to the look, nobody honest is still standing, which is exactly why the sermon opened with \u2018blessed are the poor in spirit.\u2019 Grace isn't a footnote to the demand; it's the foundation under it. And the book brackets itself with presence: it opens with Immanuel, God with us, and closes with the risen Christ saying \u2018I am with you always, to the very end of the age.\u2019"
    },
    "Mark": {
      title: "Mark overview",
      overview: [
        "No genealogy, no birth story \u2014 Mark drops you straight into the action and never slows down.",
        "\u2018Immediately\u2019 appears more than forty times; the whole Gospel moves at a run.",
        "Four friends tore open a roof, and Jesus forgave before He healed.",
        "In the storm they asked \u2018don't you care?\u2019 \u2014 and were more afraid after the calm than during the wind.",
        "A synagogue ruler and an unclean, bankrupt woman received the same full attention.",
        "\u2018You give them something to eat\u2019 \u2014 and twelve baskets left over for twelve doubters.",
        "\u2018Who do you say I am?\u2019 \u2014 the right answer, then the cross rejected minutes later.",
        "One man was invited to follow and walked away; Mark notes Jesus loved him first.",
        "\u2018Not to be served, but to serve, and to give his life as a ransom for many.\u2019",
        "Gethsemane: overwhelmed to the point of death, and still \u2018not what I will, but what you will.\u2019",
        "The curtain torn from top to bottom, and a Roman executioner's confession.",
        "And Sunday: \u2018He has risen! He is not here.\u2019"
      ],
      questions: [
        { q:"What's distinctive about Mark's style?", opts:["Long sermons", "Speed", "Genealogies"], correct:1, explain:"The shortest Gospel, traditionally linked to Peter's preaching." },
        { q:"Whose faith does Mark credit in the paralytic story?", opts:["The man's alone", "\u2018Their\u2019 faith", "The crowd's"], correct:1, explain:"Some people arrive in Jesus' presence carried by someone else's persistence." },
        { q:"What did the disciples ask in the storm?", opts:["\u2018Can you help?\u2019", "\u2018Don't you care if we drown?\u2019", "\u2018Where are we?\u2019"], correct:1, explain:"Fear translated His sleep into indifference \u2014 which is what fear usually does with silence." },
        { q:"What is Mark 10:45?", opts:["A minor aside", "The key verse", "A parable"], correct:1, explain:"Spoken right after James and John asked for the best seats." },
        { q:"Who confesses Jesus as Son of God at the cross?", opts:["Peter", "The Roman centurion who executed Him", "John"], correct:1, explain:"The confession Mark has been building toward for fifteen chapters comes from a Gentile soldier." }
      ],
      deepDive: "Mark is the fastest and rawest of the Gospels \u2014 short, urgent, and unflattering toward the disciples, which is part of why it reads as honest. The book is built around a single question, asked in the boat and again on the road: who is this? The first half piles up evidence of authority over sickness, weather, demons, and death; the second half turns toward Jerusalem and insists the authority will be exercised by dying. That's the hinge in chapter 8, where Peter gets the identity right and the mission wrong. Two moments frame the whole answer: God tearing the temple curtain from the top down, and an executioner saying what the disciples couldn't \u2014 surely this man was the Son of God."
    },
    "Luke": {
      title: "Luke overview",
      overview: [
        "A physician's carefully investigated account \u2014 and four hundred years of silence broken during an ordinary temple shift.",
        "Mary's song: rulers brought down, the humble lifted, the hungry filled and the rich sent away empty.",
        "No guest room, a feeding trough, and shepherds as heaven's first audience.",
        "At Nazareth He read Isaiah, said \u2018today this is fulfilled,\u2019 and was nearly thrown off a cliff.",
        "A disgraced woman washed His feet with tears while a respectable host stayed dry-eyed.",
        "The Good Samaritan: the despised outsider became the model, and mercy came with a bill.",
        "\u2018Martha, Martha\u2026 few things are needed \u2014 or indeed only one.\u2019",
        "Lost sheep, lost coin, lost son \u2014 and a father who ran while his son was still far off.",
        "Zacchaeus was welcomed first, and gave back fourfold afterward.",
        "\u2018Father, forgive them\u2019 \u2014 and \u2018today you will be with me in paradise.\u2019",
        "And on the Emmaus road, the risen Christ explained all the Scriptures concerning Himself."
      ],
      questions: [
        { q:"What runs through Luke's whole Gospel?", opts:["Court intrigue", "Attention to outsiders", "Military history"], correct:1, explain:"From Mary's song to Zacchaeus, Luke keeps putting the overlooked at the center." },
        { q:"What turned admiration into fury at Nazareth?", opts:["A miracle", "His examples of God's mercy reaching Gentiles", "His age"], correct:1, explain:"They welcomed a hometown Messiah and rejected one whose grace extended past them." },
        { q:"What's the point of the two-debtor parable in Luke 7?", opts:["Repay your debts", "Whoever is forgiven little loves little", "Both were ungrateful"], correct:1, explain:"Cool love is usually a symptom of an underestimated debt." },
        { q:"How many lost sons are in Luke 15?", opts:["One", "Two", "Three"], correct:1, explain:"The parable's second half is aimed at the religious people listening." },
        { q:"What could the criminal on the cross offer?", opts:["Years of service", "Nothing", "A donation"], correct:1, explain:"The clearest case in Scripture of salvation entirely apart from works." }
      ],
      deepDive: "Luke is a historian and a physician writing for outsiders, and his Gospel is the one that keeps noticing people other accounts might skip: shepherds, widows, Samaritans, women, tax collectors, and a criminal minutes from death. That emphasis is announced early in Mary's song about thrones toppling and the hungry being filled, and it never lets up. Luke also gives us the greatest parables \u2014 the Samaritan, the prodigal, the lost coin \u2014 all of them turning on mercy that arrives before it's earned. And he ends on the Emmaus road, with the risen Jesus teaching two grieving disciples to read the whole Bible as a story about Himself, which is exactly how Luke wants his readers to read it."
    },
    "John": {
      title: "John overview",
      overview: [
        "Not Bethlehem but before Genesis: \u2018In the beginning was the Word, and the Word was God.\u2019",
        "\u2018The Word became flesh and made his dwelling among us\u2019 \u2014 pitched His tent, full of grace and truth.",
        "The first sign was rescuing a wedding, with 150 gallons of the best wine anyone had tasted.",
        "Nicodemus, with the best credentials available, was told he had to be born \u2014 something done to you.",
        "A Samaritan woman at noon got His longest conversation and His clearest early self-disclosure.",
        "\u2018I am the bread of life\u2019 \u2014 and many disciples turned back that same day.",
        "\u2018Neither do I condemn you\u2019 and \u2018go now and leave your life of sin,\u2019 in two sentences.",
        "\u2018I was blind but now I see\u2019 \u2014 a man who couldn't win the argument and didn't need to.",
        "\u2018I am the good shepherd\u2019 \u2014 claiming Ezekiel 34, and adding that this shepherd dies.",
        "\u2018I am the resurrection and the life\u2019 \u2014 and Jesus wept anyway.",
        "The towel and basin, including Judas' feet, and a new command: love as I have loved you.",
        "\u2018I am the vine\u2019 \u2014 fruit from connection, not effort.",
        "\u2018It is finished\u2019 \u2014 tetelestai, paid in full \u2014 and then breakfast on the beach with Peter."
      ],
      questions: [
        { q:"What does \u2018made his dwelling among us\u2019 literally picture?", opts:["A brief visit", "Pitching a tent", "Building a temple"], correct:1, explain:"God camping with His people again, except this time the tent had a face." },
        { q:"Why is \u2018born again\u2019 the right image for Nicodemus?", opts:["It's gradual", "Nobody arranges their own birth", "It's painless"], correct:1, explain:"For a man used to mastering material, he had to receive what he couldn't produce." },
        { q:"What did Jesus do when disciples left over hard teaching?", opts:["Softened it", "Let them go, and asked the Twelve if they would leave too", "Followed them"], correct:1, explain:"Peter's answer: to whom shall we go? You have the words of eternal life." },
        { q:"What identifying mark did Jesus give His disciples?", opts:["Correct doctrine", "Love for one another", "Miraculous power"], correct:1, explain:"\u2018By this everyone will know that you are my disciples.\u2019" },
        { q:"What does \u2018it is finished\u2019 mean?", opts:["\u2018I am defeated\u2019", "Tetelestai", "\u2018It is over\u2019"], correct:1, explain:"A commercial term stamped on settled accounts: nothing outstanding." }
      ],
      deepDive: "John is the most theological Gospel and the most intimate \u2014 the one that starts before creation and ends with breakfast on a beach. Its structure runs on seven signs and seven \u2018I am\u2019 statements, each one answering a human need: bread for hunger, light for darkness, shepherd for lostness, resurrection for death, vine for fruitlessness, way for confusion. John states his purpose outright near the end: these are written that you may believe and have life in His name. And the two halves of the book hold together what Christians often separate \u2014 the highest possible claims about Christ's divinity, and the most human portrait of Him: tired at a well, weeping at a tomb, kneeling with a towel, cooking fish for the friend who denied Him."
    },
    "Acts": {
      title: "Acts overview",
      overview: [
        "Jesus refused a timetable and gave an assignment: witnesses to the ends of the earth.",
        "Pentecost reversed Babel \u2014 many languages hearing one message, and 3,000 believed.",
        "A community of teaching, fellowship, bread, and prayer, where nobody's need was invisible.",
        "Stephen forgave his killers while a young man named Saul held the coats.",
        "On the Damascus road: \u2018Saul, why do you persecute ME?\u2019 \u2014 and Ananias said \u2018Brother Saul.\u2019",
        "A rooftop vision took three tries to convince Peter that God shows no favoritism.",
        "Paul and Silas sang at midnight, bleeding in stocks, and nobody escaped when the doors opened.",
        "In Athens Paul quoted their poets; some sneered, some believed.",
        "Ananias and Sapphira\u2019s deception exposed how seriously the early church took truthfulness.",
        "The first deacons: an unglamorous problem, solved well, and the church grew.",
        "Philip met the Ethiopian exactly where his own curiosity already was \u2014 and he went away rejoicing.",
        "Barnabas, the encourager, vouched for Saul and then gave away his own leadership to include him.",
        "And the last word of the book is \u2018unhindered\u2019 \u2014 the preacher chained, the message free."
      ],
      questions: [
        { q:"What did Jesus give instead of a timetable?", opts:["A date", "An assignment", "A warning"], correct:1, explain:"Curiosity about schedules redirected into mission." },
        { q:"What reversed at Pentecost?", opts:["Creation", "Babel", "The exodus"], correct:1, explain:"Scattering became gathering." },
        { q:"What did the Damascus road reveal?", opts:["Saul was mistaken about the law", "Jesus identifies personally with His people", "Saul was innocent"], correct:1, explain:"Harming the church is harming Him." },
        { q:"How many times did Peter need the vision?", opts:["Once", "Three times", "Seven"], correct:1, explain:"Deep prejudice took repetition to dislodge, even in an apostle." },
        { q:"What is the last word of Acts?", opts:["Amen", "\u2018Unhindered\u2019", "Rome"], correct:1, explain:"Chains on the man, none on the word \u2014 and no conclusion, because the mission continues." }
      ],
      deepDive: "Acts is the story of a message that refuses to stay contained. It begins in a locked room in Jerusalem and ends in the empire's capital, and every barrier it crosses \u2014 linguistic at Pentecost, ethnic on Peter's rooftop, geographic through Paul's journeys \u2014 is crossed because God pushed first, usually against the church's own reluctance. Luke is honest about that reluctance, and honest about the cost: Stephen stoned, Paul flogged and shipwrecked, believers scattered. But the pattern holds throughout \u2014 persecution scatters the church and the scattering spreads the gospel. The book ends without an ending, on the word \u2018unhindered,\u2019 because Luke knew the story wasn't finished."
    },
    "Romans": {
      title: "Romans overview",
      overview: [
        "The thesis: the gospel is the power of God for salvation to everyone who believes.",
        "Every mouth silenced \u2014 pagan, moralist, and religious alike; all have sinned.",
        "Justified freely by grace, through the redemption that came by Christ Jesus.",
        "Peace with God \u2014 and love proved while we were still sinners.",
        "Dead to sin, alive to God \u2014 and chapter 7's honest ongoing struggle.",
        "\u2018There is now no condemnation for those who are in Christ Jesus.\u2019",
        "The Spirit interceding through wordless groans when we don't know how to pray.",
        "Nothing in all creation can separate us from the love of God.",
        "Chapters 9\u201311 wrestle honestly with Israel\u2019s place in the story \u2014 ending not in a formula but in worship: \u2018Oh, the depth of the riches of the wisdom of God!\u2019",
        "Therefore: living sacrifices, renewed minds, sincere love, and welcoming one another."
      ],
      questions: [
        { q:"What is the gospel called in 1:16?", opts:["Good advice", "The power of God for salvation", "A philosophy"], correct:1, explain:"Not information about power but power itself." },
        { q:"Who is included in the indictment of chapters 1\u20133?", opts:["Only pagans", "Everyone, including the religious", "Only lawbreakers"], correct:1, explain:"Paul closes every exit before saying \u2018but now.\u2019" },
        { q:"When did Christ die for us?", opts:["After we improved", "While we were still sinners", "When we asked"], correct:1, explain:"The timing is the proof of the love." },
        { q:"How much condemnation remains for those in Christ?", opts:["Some", "None", "It varies"], correct:1, explain:"Not reduced \u2014 none, and now, present tense." },
        { q:"What does the \u2018therefore\u2019 of chapter 12 rest on?", opts:["Our effort", "Eleven chapters of God's mercy", "Church rules"], correct:1, explain:"Obedience always follows grace in Paul, never the reverse." }
      ],
      deepDive: "Romans is the most systematic presentation of the gospel in Scripture, and its architecture matters. Chapters 1\u20133 build a case that leaves nobody standing; chapters 3\u20135 announce a righteousness that comes as a gift; chapters 6\u20138 deal with the new life and its real struggle, climbing to the summit where nothing in creation can separate you from God's love; chapters 9\u201311 wrestle with God's faithfulness to Israel; and chapters 12\u201316 turn it all into a life. The hinge word is \u2018therefore.\u2019 Everything Paul asks for at the end rests entirely on what God has done at the beginning, and he never once reverses that order."
    },
    "1 Corinthians": {
      title: "1 Corinthians overview",
      overview: [
        "A gifted, wealthy, fractured church quarreling over which teacher they followed.",
        "The message of the cross \u2014 foolishness to the perishing, the power of God to the saved.",
        "God chooses the weak and foolish so that no one may boast.",
        "Your body is a temple of the Holy Spirit; you were bought at a price.",
        "One body, many parts \u2014 no part may say \u2018I don't belong\u2019 or \u2018I don't need you.\u2019",
        "Without love, the most impressive spiritual gifts amount to nothing.",
        "The resurrection is historical and non-negotiable \u2014 or our faith is futile.",
        "Therefore stand firm: your labor in the Lord is not in vain."
      ],
      questions: [
        { q:"What were they quarreling about?", opts:["Doctrine", "Which teacher they followed", "Money"], correct:1, explain:"Celebrity factions, which Paul treats as immaturity." },
        { q:"Why does God choose the weak?", opts:["No alternative", "So no one may boast", "To make things difficult"], correct:1, explain:"The method is designed to eliminate bragging rights." },
        { q:"What two attitudes does the body image correct?", opts:["Only pride", "\u2018I don't belong\u2019 and \u2018I don't need you\u2019", "Only laziness"], correct:1, explain:"Withdrawal and dismissal are both denials of the body." },
        { q:"What is Paul without love?", opts:["Less effective", "Nothing", "Still useful"], correct:1, explain:"Mountain-moving faith and total giving both price at zero." },
        { q:"What if Christ was not raised?", opts:["Faith still helps", "Preaching is useless and we're most to be pitied", "Little changes"], correct:1, explain:"Paul stakes everything on a historical event." }
      ],
      deepDive: "Corinth was talented, wealthy, and a mess \u2014 which makes this letter unusually practical. Paul confronts factions, lawsuits, sexual immorality, chaotic worship, and pride in spiritual gifts, and behind every correction is the same standard: the cross. A crucified Messiah reorders what counts as strength, wisdom, and greatness, which is precisely what a status-obsessed church needed. That's why chapter 13 sits where it does \u2014 not as a wedding reading but as a rebuke to gifted people who had forgotten love. And the letter closes on the resurrection, because everything Paul asks of them assumes that death has been defeated and no faithful work is wasted."
    },
    "2 Corinthians": {
      title: "2 Corinthians overview",
      overview: [
        "Paul's most personal letter \u2014 defending his ministry to a church that had doubted him.",
        "God comforts us in all our troubles so we can comfort others with what we received.",
        "He admits pressure beyond his ability to endure, despairing even of life.",
        "Treasure in jars of clay \u2014 cheap containers so the power is obviously God's.",
        "Pressed but not crushed; struck down but not destroyed.",
        "If anyone is in Christ, the new creation has come \u2014 and we are ambassadors.",
        "He became sin for us so that we might become the righteousness of God.",
        "\u2018My grace is sufficient for you, for my power is made perfect in weakness.\u2019",
        "God was reconciling the world to himself, and has committed to us the ministry of reconciliation.",
        "The Macedonians gave themselves first to the Lord, out of extreme poverty \u2014 God loves a cheerful giver.",
        "Weapons not of the world, demolishing strongholds and taking every thought captive to Christ."
      ],
      questions: [
        { q:"What is comfort for?", opts:["Private relief", "Passing on to others in trouble", "Ending all suffering"], correct:1, explain:"Comfort is a supply line, not a terminus." },
        { q:"Why jars of clay?", opts:["No better option", "So the power is obviously God's, not ours", "To humiliate us"], correct:1, explain:"Cheap containers make the contents unmistakable." },
        { q:"What is the great exchange of 5:21?", opts:["Nothing changes", "He became sin; we become God's righteousness", "We earn righteousness"], correct:1, explain:"The most compressed statement of substitution in the New Testament." },
        { q:"How did God answer Paul's three prayers?", opts:["He removed the thorn", "He refused, and gave sufficient grace", "Silence"], correct:1, explain:"A clear no, with something better attached." },
        { q:"What does Paul boast about?", opts:["His visions", "His weaknesses", "His converts"], correct:1, explain:"He inverts the credentials his rivals paraded." }
      ],
      deepDive: "This is Paul with his guard down. Under attack from rivals who paraded credentials, he responds by listing beatings, shipwrecks, hunger, and anxiety \u2014 and by admitting he once despaired of life itself. That honesty is the letter's gift: it puts an apostle's breaking point in Scripture. And out of it comes the theology that has carried suffering Christians ever since \u2014 comfort received is comfort to be passed on, weakness is the container God chose so the power would be visible, and unanswered prayer can become the very place His strength shows up. My grace is sufficient for you."
    },
    "Galatians": {
      title: "Galatians overview",
      overview: [
        "The angriest letter in the New Testament \u2014 Paul skips his usual thanksgiving entirely.",
        "The false gospel wasn't denying Christ but adding requirements to Him.",
        "Even an angel preaching another gospel would be condemned.",
        "Paul confronted Peter publicly for withdrawing from Gentile tables.",
        "\u2018I have been crucified with Christ and I no longer live, but Christ lives in me.\u2019",
        "If righteousness could come through the law, Christ died for nothing.",
        "It is for freedom that Christ set us free \u2014 freedom to serve one another in love.",
        "The fruit of the Spirit grows; it isn't manufactured."
      ],
      questions: [
        { q:"What was the \u2018different gospel\u2019?", opts:["Atheism", "Faith plus law-keeping", "Paganism"], correct:1, explain:"Adding to grace destroys it." },
        { q:"Why confront Peter publicly?", opts:["Personal rivalry", "His table habits preached a different gospel", "A doctrinal error about Christ"], correct:1, explain:"Practice can contradict theology." },
        { q:"What's the logic of \u2018Christ died for nothing\u2019?", opts:["Hypothetical", "If law-keeping worked, the cross was unnecessary", "A minor aside"], correct:1, explain:"Paul's sharpest argument against legalism." },
        { q:"Why \u2018fruit\u2019 rather than \u2018works\u2019?", opts:["Style", "Fruit grows from life within; it isn't manufactured", "It's easier"], correct:1, explain:"Deliberately contrasted with the \u2018acts\u2019 of the flesh." },
        { q:"What is freedom for?", opts:["Doing as you please", "Serving one another in love", "Avoiding all rules"], correct:1, explain:"Paul guards freedom from becoming self-indulgence." }
      ],
      deepDive: "Galatians is short, hot, and enormously consequential \u2014 the letter that shaped Luther and the Reformation. Its target is subtle: teachers who affirmed Christ and added conditions. Paul treats that addition as fatal, because Christ-plus-anything makes the plus the real hinge, and he'd rather be called harsh than let it stand. But the letter isn't only negative. Its second half describes what freedom actually produces: not license, but a life serving others, with character growing like fruit rather than being manufactured by effort. And 2:20 remains its heart \u2014 crucified with Christ, and loved personally by the Son of God who gave Himself for me."
    },
    "Ephesians": {
      title: "Ephesians overview",
      overview: [
        "Chosen before the creation of the world, adopted, redeemed, forgiven \u2014 all God's verbs.",
        "God's purpose: to bring unity to all things in heaven and on earth under Christ.",
        "Dead in sin, made alive by grace through faith \u2014 the gift of God, not by works.",
        "Created in Christ Jesus to do good works, prepared in advance for us.",
        "The dividing wall of hostility destroyed \u2014 one new humanity.",
        "Paul prays for power to grasp how wide, long, high, and deep Christ's love is.",
        "God is able to do immeasurably more than all we ask or imagine.",
        "The full armor of God \u2014 because the struggle is not against flesh and blood."
      ],
      questions: [
        { q:"When were believers chosen?", opts:["When they believed", "Before the creation of the world", "At baptism"], correct:1, explain:"Which removes the decision from the realm of merit." },
        { q:"What was our condition before grace?", opts:["Sick", "Dead in transgressions", "Confused"], correct:1, explain:"Dead people don't improve; they must be made alive." },
        { q:"Where do good works fit?", opts:["They save us", "They're the result, prepared in advance", "They're irrelevant"], correct:1, explain:"Saved for good works, not by them." },
        { q:"What does Paul pray for?", opts:["Easier circumstances", "Power to grasp Christ's love", "Financial provision"], correct:1, explain:"He treats comprehending love as needing supernatural strength." },
        { q:"Who is the real enemy?", opts:["Difficult people", "Spiritual forces, not flesh and blood", "Ourselves"], correct:1, explain:"Which reframes the person across the table." }
      ],
      deepDive: "Ephesians divides cleanly: three chapters of what God has done, three of how to live in light of it. The first half is almost dizzying \u2014 chosen before creation, adopted, redeemed, seated with Christ, and all of it aimed at a cosmic purpose of bringing everything together under Him. The second half brings it to earth: unity across old hostilities, honest speech, marriage, family, work, and the armor for a struggle that isn't against people. At the pivot sits Paul's prayer, which asks not for changed circumstances but for power to grasp a love that surpasses knowledge \u2014 as if being convinced you're loved is the deepest need he can imagine."
    },
    "Philippians": {
      title: "Philippians overview",
      overview: [
        "A letter about joy, written in chains.",
        "He who began a good work in you will carry it on to completion.",
        "Rivals preached Christ from envy, and Paul rejoiced that Christ was preached.",
        "Christ made himself nothing \u2014 servant, human, obedient to death on a cross \u2014 then exalted.",
        "The highest Christology in the New Testament, quoted to settle a personal conflict.",
        "Everything counted as loss for the surpassing worth of knowing Christ.",
        "Do not be anxious \u2014 pray with thanksgiving, and peace will guard your heart.",
        "Contentment learned in plenty and in want; strength for all of it through Him.",
        "Whatever is true, noble, right, pure, lovely, admirable \u2014 think about such things."
      ],
      questions: [
        { q:"Where was Paul writing from?", opts:["A comfortable home", "Prison", "A ship"], correct:1, explain:"Which is what gives the joy its authority." },
        { q:"Who completes the good work?", opts:["We do", "He who began it", "Nobody"], correct:1, explain:"The confidence is in the worker." },
        { q:"Why quote the Christ hymn?", opts:["To settle doctrine", "To fix a relational conflict", "As a creed"], correct:1, explain:"\u2018In your relationships\u2026 have the same mindset.\u2019" },
        { q:"How did Paul come by contentment?", opts:["Naturally", "He learned it, in plenty and in want", "He was never in need"], correct:1, explain:"A skill acquired through hard circumstances." },
        { q:"What does \u2018I can do all this\u2019 refer to?", opts:["Any ambition", "Contentment in every circumstance", "Athletic success"], correct:1, explain:"Read the sentence before it." }
      ],
      deepDive: "Philippians is the joy letter and the prison letter at once, which is exactly why it's trusted. Paul isn't theorizing about contentment from comfort; he's demonstrating it in custody, cheerful even about rivals preaching to spite him. At its center is the Christ hymn \u2014 the loftiest description of Christ's descent and exaltation in the New Testament, deployed to resolve an argument between two women in a small church. That's the letter's whole method: enormous theology aimed at ordinary relational and emotional life, ending with anxiety handed over in prayer and a mind deliberately trained on what is true, noble, and lovely."
    },
    "Colossians": {
      title: "Colossians overview",
      overview: [
        "Christ is the image of the invisible God, before all things, holding all things together.",
        "In him all the fullness of God dwells \u2014 so nothing can be added to him.",
        "Reconciliation made through his blood, shed on the cross.",
        "Since you were raised with Christ, set your hearts on things above.",
        "Take off the old clothes; put on compassion, kindness, humility, gentleness, patience.",
        "Forgive as the Lord forgave you \u2014 and over all these virtues, put on love.",
        "Let the peace of Christ rule in your hearts, and his message dwell richly among you.",
        "Whatever you do, work at it with all your heart, as working for the Lord."
      ],
      questions: [
        { q:"What holds creation together?", opts:["Physical laws alone", "Christ", "Nothing"], correct:1, explain:"Sustaining, not merely starting." },
        { q:"Why make Christ so large in this letter?", opts:["Poetic flourish", "Against teaching that made him one authority among many", "To impress"], correct:1, explain:"If everything depends on him, no supplement is available." },
        { q:"What is the clothing image about?", opts:["Modesty", "Character deliberately put on daily", "Baptism only"], correct:1, explain:"Take off the old set, put on the new \u2014 repeated like dressing." },
        { q:"What's the standard for forgiveness?", opts:["What the offense deserves", "As the Lord forgave you", "How you feel"], correct:1, explain:"The measure is the pardon you received." },
        { q:"Who was the work instruction first addressed to?", opts:["Owners", "Slaves", "Priests"], correct:1, explain:"Which makes it apply to anyone whose work feels unseen." }
      ],
      deepDive: "Colossians answers a subtle threat: teaching that kept Christ but added supplements \u2014 angels, visions, rules about food and festivals. Paul's response is to describe Christ so comprehensively that addition becomes impossible. He made everything, he holds everything together, and the fullness of God lives in him bodily. Then the letter turns practical with one of the most usable images in Paul: character as clothing you put on each morning. Compassion, kindness, humility, gentleness, patience, and love over the top. And it ends by dignifying ordinary labor \u2014 whatever you do, you're working for the Lord."
    },
    "1 Thessalonians": {
      title: "1 Thessalonians overview",
      overview: [
        "Possibly Paul's earliest letter, to a church only months old.",
        "Work produced by faith, labor prompted by love, endurance inspired by hope.",
        "They turned from idols to serve the living and true God, at real social cost.",
        "Paul shared not only the gospel but his life \u2014 like a nursing mother caring for children.",
        "Grieve, but not like those who have no hope: the dead in Christ miss nothing.",
        "And so we will be with the Lord forever \u2014 therefore encourage one another.",
        "Rejoice always, pray continually, give thanks in all circumstances."
      ],
      questions: [
        { q:"What triad opens the letter?", opts:["Faith, hope, love as abstractions", "Work from faith, labor from love, endurance from hope", "Wisdom, knowledge, power"], correct:1, explain:"Each virtue named by what it produces." },
        { q:"How did Paul describe his ministry?", opts:["Professional distance", "Like a nursing mother, sharing his life", "By command"], correct:1, explain:"People rarely receive a message from someone unwilling to be known." },
        { q:"Does Paul forbid grief?", opts:["Yes", "No", "He doesn't mention it"], correct:1, explain:"Christian grief is real; the horizon changes." },
        { q:"What is the purpose of the return teaching?", opts:["Setting dates", "Encouraging one another", "Winning arguments"], correct:1, explain:"Pastoral comfort, not a timeline." },
        { q:"What is the final promise?", opts:["A reward", "We will be with the Lord forever", "A new city"], correct:1, explain:"Presence is the point." }
      ],
      deepDive: "This is a warm letter to a young, frightened church. Its opening triad \u2014 faith that works, love that labors, hope that endures \u2014 has shaped Christian teaching ever since, and chapter 2 shows what it cost Paul to build them: sharing not just a message but a life. The heart of the letter answers a specific fear, that believers who died had somehow missed Christ's return. Paul's response is comfort, not chronology, and it ends with the line the whole passage exists for: and so we will be with the Lord forever. Therefore encourage one another with these words."
    },
    "2 Thessalonians": {
      title: "2 Thessalonians overview",
      overview: [
        "A follow-up correcting the claim that the day of the Lord had already come.",
        "Some had quit working and become busybodies living off others.",
        "Paul points to his own labor, night and day, so as not to burden anyone.",
        "\u2018The one who is unwilling to work shall not eat\u2019 \u2014 unwilling, not unable.",
        "Expecting Christ's return should produce diligence, not paralysis.",
        "\u2018Never tire of doing what is good.\u2019"
      ],
      questions: [
        { q:"What error was circulating?", opts:["Christ would never return", "That the day of the Lord had already come", "That work saves"], correct:1, explain:"Bad eschatology producing bad economics." },
        { q:"What word is crucial in 3:10?", opts:["Eat", "Unwilling", "Work"], correct:1, explain:"Freeloading is distinguished from genuine need." },
        { q:"What should expectation produce?", opts:["Withdrawal", "Diligence in doing good", "Speculation"], correct:1, explain:"Paul's end-times teaching always terminates in how you live now." },
        { q:"What is the closing encouragement?", opts:["Wait passively", "Never tire of doing what is good", "Avoid society"], correct:1, explain:"For anyone worn down by doing right with no visible result." }
      ],
      deepDive: "This brief letter tackles a practical question with lasting force: how should believing Jesus will return change today? Some Thessalonians answered by stopping work altogether, and Paul's reply is brisk and unsentimental. Anticipating the end doesn't excuse you from ordinary responsibility \u2014 it dignifies it. He backs the instruction with his own example of working night and day rather than being a burden. And the letter's closing line is worth keeping for any long, unrewarded season of faithfulness: never tire of doing what is good."
    },
    "1 Timothy": {
      title: "1 Timothy overview",
      overview: [
        "A letter to a younger colleague left in Ephesus to correct false teaching.",
        "\u2018Christ Jesus came into the world to save sinners \u2014 of whom I am the worst.\u2019",
        "Paul was shown mercy as an example of Christ's immense patience.",
        "One God and one mediator \u2014 the man Christ Jesus \u2014 so pray for all people.",
        "Instructions for leaders: above reproach, self-controlled, hospitable, able to teach.",
        "Godliness with contentment is great gain \u2014 we brought nothing in and take nothing out.",
        "The love of money is a root of all kinds of evil.",
        "To the rich: don't hope in wealth; be rich in good deeds and generous."
      ],
      questions: [
        { q:"What tense does Paul use of being the worst sinner?", opts:["Past", "Present", "Neither"], correct:1, explain:"Grace made him more aware of his need, not less." },
        { q:"Why was he shown mercy?", opts:["He deserved another chance", "As an example of Christ's patience", "Because he was useful"], correct:1, explain:"A limit case: if him, then anyone." },
        { q:"What is \u2018a root of all kinds of evil\u2019?", opts:["Money", "The love of money", "Poverty"], correct:1, explain:"The common misquote drops the crucial word." },
        { q:"What is great gain?", opts:["Wealth", "Godliness with contentment", "Reputation"], correct:1, explain:"He borrows the false teachers' profit language and redefines the asset." },
        { q:"What does Paul tell the rich?", opts:["Give it all away", "Don't hope in wealth; be generous and rich in good deeds", "Feel guilty"], correct:1, explain:"Reassignment of hope, not condemnation." }
      ],
      deepDive: "1 Timothy is a working manual for a young leader in a difficult church, and its most memorable lines are personal rather than procedural. Paul, decades into ministry, calls himself the worst of sinners in the present tense \u2014 the opposite of the usual religious trajectory \u2014 and explains that his own story exists as evidence that no one is beyond Christ's patience. The letter's other great theme is money, aimed at teachers who treated godliness as a wealth strategy. Paul's counter is simple arithmetic: you arrived with nothing and leave with nothing, so contentment with godliness is the only real profit."
    },
    "2 Timothy": {
      title: "2 Timothy overview",
      overview: [
        "Paul's last letter, from a cold cell with execution near.",
        "Guard the deposit entrusted to you; endure hardship like a good soldier.",
        "The faith that first lived in his grandmother Lois and mother Eunice.",
        "All Scripture is God-breathed \u2014 teaching, rebuking, correcting, training.",
        "Preach the word; be prepared in season and out of season.",
        "\u2018I have fought the good fight, I have finished the race, I have kept the faith.\u2019",
        "The crown goes to all who have longed for his appearing.",
        "\u2018Everyone deserted me\u2026 But the Lord stood at my side.\u2019"
      ],
      questions: [
        { q:"What does \u2018God-breathed\u2019 claim?", opts:["Human inspiration", "That Scripture originates in God's own breath", "Historical accuracy only"], correct:1, explain:"Origin, not merely quality." },
        { q:"What are the four uses of Scripture?", opts:["Comfort, ritual, art, law", "Teaching, rebuking, correcting, training", "Prophecy, history, poetry, law"], correct:1, explain:"Two constructive, two corrective." },
        { q:"Where did Timothy's faith come from?", opts:["A school", "His grandmother and mother", "A vision"], correct:1, explain:"Two women in a provincial town." },
        { q:"How does Paul measure his life?", opts:["By success", "Fought, finished, kept", "By years"], correct:1, explain:"Completion, not comfort or acclaim." },
        { q:"Who receives the crown?", opts:["Only apostles", "All who have longed for his appearing", "The most successful"], correct:1, explain:"He widens it past himself immediately." }
      ],
      deepDive: "This is a handoff letter, written by a man who knows he's near the end, and it mixes the monumental with the mundane in a way that feels deeply human. He charges Timothy to guard the gospel and preach it in and out of season, gives the church its clearest statement about Scripture's origin and use, and then asks for his coat, because Roman cells were cold, and for his scrolls, because he still wanted to read. His self-assessment is three verbs \u2014 fought, finished, kept \u2014 and the loneliest line in his letters sits beside the steadiest: everyone deserted me, but the Lord stood at my side."
    },
    "Titus": {
      title: "Titus overview",
      overview: [
        "Titus left in Crete to appoint elders and set things in order.",
        "Leaders must be blameless, hospitable, self-controlled, holding firmly to sound teaching.",
        "The grace of God has appeared, offering salvation to all people.",
        "Grace teaches us to say \u2018No\u2019 to ungodliness and worldly passions.",
        "Live self-controlled, upright lives while we wait for the blessed hope.",
        "He saved us not because of righteous things we had done, but because of his mercy."
      ],
      questions: [
        { q:"What does grace do besides save?", opts:["Nothing else", "It teaches", "It removes standards"], correct:1, explain:"Grace is a tutor, not a permission slip." },
        { q:"Why were we saved?", opts:["Our righteous deeds", "His mercy", "Our potential"], correct:1, explain:"Paul rules out our contribution explicitly." },
        { q:"What are believers waiting for?", opts:["Nothing specific", "The blessed hope", "Better circumstances"], correct:1, explain:"Present life framed between grace appeared and glory to come." },
        { q:"What does the letter emphasize about leaders?", opts:["Charisma", "Character", "Education"], correct:1, explain:"The qualifications are almost entirely about character." }
      ],
      deepDive: "Titus is short and answers a persistent accusation: that grace makes people careless. Paul's reply is one of the most useful sentences in the New Testament \u2014 grace teaches us to say no. The same gift that pardons is the instructor for everything after, which means holiness isn't a return to earning but the ongoing work of the gift itself. The letter's structure reinforces it: grace has appeared, glory will appear, and life in between is lived self-controlled and upright because of both. And its instructions for leaders are almost entirely about character rather than talent."
    },
    "Philemon": {
      title: "Philemon overview",
      overview: [
        "Paul's shortest letter \u2014 a personal appeal about a runaway slave.",
        "Onesimus fled Philemon, met Paul in prison, and became a believer.",
        "Paul sends him back with a letter, calling him \u2018my very heart.\u2019",
        "He appeals on the basis of love, though he says he could command it.",
        "Receive him no longer as a slave, but better \u2014 as a dear brother.",
        "\u2018If he has done you any wrong or owes you anything, charge it to me.\u2019"
      ],
      questions: [
        { q:"How does Paul make his appeal?", opts:["By command", "On the basis of love, declining to use his authority", "Anonymously"], correct:1, explain:"He names the authority he has and sets it aside." },
        { q:"What does Paul offer about the debt?", opts:["Nothing", "To charge it to his own account", "To sue"], correct:1, explain:"A small picture of what Christ does with ours." },
        { q:"What relationship does he request?", opts:["Leniency", "Brotherhood", "Legal manumission only"], correct:1, explain:"A category change the culture had no room for." },
        { q:"Where would this letter have been read?", opts:["Privately", "Aloud to the church meeting in Philemon's house", "In court"], correct:1, explain:"Which applies gentle, unmistakable pressure." }
      ],
      deepDive: "One page, and it quietly undermines an entire institution. Paul doesn't issue a decree about slavery; he asks a slave owner to receive his runaway as a beloved brother, and notes pointedly that he could command it and won't. The most moving line is financial: charge it to me. A man in prison offers to cover someone else's debt so a relationship can be restored, which is the gospel in miniature. We never learn what Philemon decided \u2014 but the letter was preserved and circulated, which is its own kind of answer."
    },
    "Hebrews": {
      title: "Hebrews overview",
      overview: [
        "God spoke through prophets in fragments; now he has spoken by his Son.",
        "The Son is the radiance of God's glory and the exact representation of his being.",
        "A high priest who was tempted in every way, yet without sin \u2014 so approach with confidence.",
        "The word of God is alive and active, judging the thoughts and attitudes of the heart.",
        "One sacrifice, once for all \u2014 and then he sat down, because the work was finished.",
        "Faith is confidence in what we hope for and assurance about what we do not see.",
        "The hall of faith includes those who conquered kingdoms and those who were sawed in two.",
        "Run with perseverance, fixing our eyes on Jesus, who endured for the joy set before him.",
        "Jesus Christ is the same yesterday and today and forever.",
        "A priest like Melchizedek \u2014 not by ancestry, but by the power of an indestructible life.",
        "A better covenant: the old system pointed forward; the new one delivers what it pointed to."
      ],
      questions: [
        { q:"How is the Son's revelation different?", opts:["Clearer wording", "The message is a person, not a fragment", "It's shorter"], correct:1, explain:"Previous revelation came in pieces; this comes embodied." },
        { q:"Why can Jesus empathize?", opts:["He observed humanity", "He was tempted in every way, as we are", "By nature only"], correct:1, explain:"Experience, not merely disposition." },
        { q:"Why does \u2018he sat down\u2019 matter?", opts:["He was tired", "Priests always stood", "It shows rank"], correct:1, explain:"There were no chairs in the tabernacle." },
        { q:"What outcomes appear in Hebrews 11?", opts:["Only victories", "Deliverance and torture, both called faith", "Only suffering"], correct:1, explain:"No distinction in honor between the rescued and the not." },
        { q:"What fueled Jesus' endurance?", opts:["Duty", "The joy set before him", "Anger"], correct:1, explain:"Endurance running on anticipation." }
      ],
      deepDive: "Hebrews was written to believers under pressure who were tempted to drift back to a familiar religious system, and its entire strategy is comparison: better than angels, better than Moses, a better priesthood, a better covenant, a better sacrifice. The argument climaxes in a piece of furniture \u2014 Christ sat down, which no priest ever did, because his work was actually finished. Then chapter 11 gathers a crowd of people who died still waiting, and chapter 12 turns to the reader: now run yours. Its most quoted line is its anchor for anyone whose world is shifting \u2014 Jesus Christ is the same yesterday and today and forever."
    },
    "James": {
      title: "James overview",
      overview: [
        "Practical, blunt, and concrete \u2014 Proverbs with a Christian accent.",
        "Ask God for wisdom; he gives generously to all without finding fault.",
        "Don't merely hear the word \u2014 do it, or you're forgetting your own face.",
        "Faith without deeds is dead; \u2018keep warm and well fed\u2019 without a coat is nothing.",
        "Quick to listen, slow to speak, slow to become angry.",
        "The tongue \u2014 a bit, a rudder, a spark \u2014 which no human being can tame.",
        "Quarrels come from desires battling within you.",
        "God opposes the proud but shows favor to the humble.",
        "Be patient like a farmer; confess your sins to each other and pray."
      ],
      questions: [
        { q:"What is the mirror illustration about?", opts:["Vanity", "Hearing the word and doing nothing", "Self-esteem"], correct:1, explain:"Information that changes nothing equals never having looked." },
        { q:"Does James contradict Paul?", opts:["Yes", "No", "They discuss different gods"], correct:1, explain:"Paul: how are we accepted? James: how do you know it's real?" },
        { q:"Can the tongue be tamed by effort?", opts:["Easily", "No human being can tame it", "Only the wise can"], correct:1, explain:"Which points past technique to the heart." },
        { q:"Where do quarrels originate?", opts:["Other people", "Desires battling within you", "Circumstances"], correct:1, explain:"He relocates conflict to your own wanting." },
        { q:"What does he prescribe for healing?", opts:["Solitude", "Confession to one another and prayer", "Silence"], correct:1, explain:"Communal and spoken, not privately managed." }
      ],
      deepDive: "James has no interest in theory. Every paragraph pushes belief toward evidence: a coat for someone cold, a bridled tongue, humility in conflict, patience in waiting, confession spoken out loud to another person. His famous claim that faith without works is dead has been misread as a quarrel with Paul, but they're answering different questions \u2014 Paul asks how a person is accepted by God, James asks how you can tell the faith is alive. His sharpest image is the mirror: reading Scripture and changing nothing is like forgetting your own face the moment you look away."
    },
    "1 Peter": {
      title: "1 Peter overview",
      overview: [
        "Written to scattered believers already suffering for their faith.",
        "New birth into a living hope through the resurrection of Jesus Christ.",
        "An inheritance that can never perish, spoil, or fade \u2014 kept in heaven for you.",
        "Trials refine like fire proves gold.",
        "You are a chosen people, a royal priesthood, God's special possession.",
        "Always be prepared to explain your hope \u2014 with gentleness and respect.",
        "Christ suffered unjustly and did not retaliate.",
        "Cast all your anxiety on him, because he cares for you."
      ],
      questions: [
        { q:"What makes the hope \u2018living\u2019?", opts:["Optimism", "It rests on the resurrection", "Good circumstances"], correct:1, explain:"Hope with a foundation outside itself." },
        { q:"What prompts the question we're to answer?", opts:["Our arguments", "A visible hope people notice", "Advertising"], correct:1, explain:"The assumption is a life odd enough to prompt asking." },
        { q:"How is the answer to be given?", opts:["Forcefully", "With gentleness and respect", "Only when safe"], correct:1, explain:"Tone is part of the witness." },
        { q:"What does \u2018cast\u2019 suggest?", opts:["Gradual release", "Throwing it", "Ignoring it"], correct:1, explain:"Fling it off yourself onto him." },
        { q:"What reason is given for casting anxiety?", opts:["Worry is useless", "Because he cares for you", "It's commanded"], correct:1, explain:"A claim about his attention, not your competence." }
      ],
      deepDive: "Peter writes to Christians scattered and suffering, and he leads with what can't be taken: an inheritance kept somewhere beyond anyone's reach, imperishable and unfading. That framing runs through the whole letter \u2014 identity secure, so hostility survivable. His famous call to always be ready with an answer assumes a life visibly hopeful enough to prompt the question, and it comes with a required manner: gentleness and respect, written by a man who once drew a sword to defend Jesus and later watched him absorb insults without retaliating. And its most beloved line ties humility and anxiety together: cast it all on him, because he cares for you."
    },
    "2 Peter": {
      title: "2 Peter overview",
      overview: [
        "A final letter warning against false teachers and scoffers.",
        "\u2018Where is this coming he promised?\u2019 \u2014 the question of every generation.",
        "With the Lord a day is like a thousand years, and a thousand years like a day.",
        "The Lord is not slow \u2014 he is patient, not wanting anyone to perish.",
        "Every delayed day is time for someone else to come to repentance.",
        "So make every effort to be found spotless and at peace with him.",
        "Grow in the grace and knowledge of our Lord and Savior Jesus Christ."
      ],
      questions: [
        { q:"How does Peter explain the delay?", opts:["The promise failed", "Patience", "God forgot"], correct:1, explain:"What looks like slowness is mercy." },
        { q:"What does the thousand-years line address?", opts:["Prophecy math", "God's relationship to time", "The earth's age"], correct:1, explain:"A caution against measuring faithfulness by our impatience." },
        { q:"What response does Peter urge?", opts:["Date-setting", "Growth in grace and blameless living", "Withdrawal"], correct:1, explain:"His eschatology always terminates in present character." },
        { q:"Who does God not want to perish?", opts:["The elect only", "Anyone", "The faithful"], correct:1, explain:"The scope of the patience is the point." }
      ],
      deepDive: "The scoffers' question in this letter \u2014 where is this coming he promised? \u2014 gets asked in every generation, sometimes silently by believers. Peter's answer reframes waiting entirely: the delay isn't failure or indifference but patience, and its purpose is that more people get time. Every day the return hasn't come is a day someone else can still come. That turns impatience into gratitude, especially if you remember that you were once among those being waited for. And Peter's conclusion is characteristically practical \u2014 not charts and calculations, but growing in grace and living blamelessly while you wait."
    },
    "1 John": {
      title: "1 John overview",
      overview: [
        "Written by someone who heard, saw, and touched him \u2014 against those who made Christ an idea.",
        "God is light; walking in the light means living honestly, not sinlessly.",
        "If we confess our sins, he is faithful and just to forgive and purify us.",
        "See what great love the Father has lavished on us \u2014 we are called children of God.",
        "This is love: not that we loved God, but that he loved us and sent his Son.",
        "There is no fear in love; perfect love drives out fear.",
        "Let us not love with words or speech but with actions and in truth.",
        "\u2018I write these things\u2026 so that you may know that you have eternal life.\u2019",
        "We have an advocate with the Father, and a test for real knowledge: obedience.",
        "Do not love the world \u2014 the lust of the flesh, the eyes, and the pride of life all pass away.",
        "Test the spirits: does the teaching acknowledge Christ came in the flesh?"
      ],
      questions: [
        { q:"What does walking in the light mean?", opts:["Sinlessness", "Living out in the open before God", "Constant happiness"], correct:1, explain:"The next verses assume ongoing sin." },
        { q:"Why is God \u2018faithful and just\u2019 to forgive?", opts:["He's lenient", "The debt was paid, so forgiveness satisfies justice", "He overlooks it"], correct:1, explain:"Not mercy against justice but mercy through the cross." },
        { q:"How does John define love?", opts:["By feeling", "By an event", "By intention"], correct:1, explain:"Anchored to something that happened." },
        { q:"What does perfect love do to fear?", opts:["Increases it", "Drives it out", "Ignores it"], correct:1, explain:"Confidence grows with understanding love, not with performance." },
        { q:"What is John's stated purpose?", opts:["To frighten", "That believers may know they have eternal life", "To settle a dispute"], correct:1, explain:"Assurance, not anxiety." }
      ],
      deepDive: "1 John is warm and completely unwilling to let faith stay theoretical. It opens with physical testimony \u2014 heard, seen, touched \u2014 against teachers who made Christ a spiritual concept, and then applies the same concreteness to love: not words and speech but actions and truth. Its most famous sentence, God is love, is guarded in the same paragraph by a definition anchored at the cross, which keeps it from meaning whatever anyone wants. And its stated purpose is worth remembering when the tests in it feel heavy: John writes so that you may know you have eternal life."
    },
    "2 John": {
      title: "2 John overview",
      overview: [
        "A one-page letter from \u2018the elder\u2019 to a church and its members.",
        "Joy at finding some walking in the truth.",
        "The old command, repeated: love one another.",
        "\u2018And this is love: that we walk in obedience to his commands.\u2019",
        "A warning about deceivers who deny that Jesus Christ came in the flesh.",
        "Do not welcome or endorse such teaching.",
        "He hopes to visit face to face, so that their joy may be complete."
      ],
      questions: [
        { q:"What two things are held together?", opts:["Truth and power", "Truth and love", "Love and tolerance"], correct:1, explain:"Neither is allowed to exist without the other." },
        { q:"What was the false teaching?", opts:["That Jesus was only human", "Denying he came in the flesh", "That the law still applied"], correct:1, explain:"An early denial of the incarnation." },
        { q:"How does John define love here?", opts:["A feeling", "Walking in obedience to his commands", "Agreement"], correct:1, explain:"Concrete and directional." },
        { q:"Why does John prefer a visit?", opts:["Cost", "Face to face, so their joy may be complete", "To inspect them"], correct:1, explain:"Even an apostle prefers presence to correspondence." }
      ],
      deepDive: "This short letter corrects two opposite instincts at once. To anyone who thinks love means accepting every teaching, John says some things are disqualifying and shouldn't be given a platform. To anyone who thinks defending truth licenses coldness, he wraps the whole warning in love, joy, and a longing to sit down together in person. Truth without love turns cruel; love without truth turns meaningless. And his working definition of love is characteristically concrete \u2014 not a feeling to summon but obedience to walk in."
    },
    "3 John": {
      title: "3 John overview",
      overview: [
        "The shortest book in the New Testament \u2014 a personal note to a friend named Gaius.",
        "\u2018I have no greater joy than to hear that my children are walking in the truth.\u2019",
        "Gaius commended for hospitality to traveling workers, even strangers.",
        "Supporting them makes him a co-worker for the truth.",
        "Diotrephes, who loves to be first, refuses hospitality and pushes others out.",
        "Demetrius, well spoken of by everyone.",
        "\u2018Do not imitate what is evil but what is good.\u2019"
      ],
      questions: [
        { q:"What is Gaius commended for?", opts:["Preaching", "Hospitality and practical support", "Wealth"], correct:1, explain:"Supporting others' ministry counted as working together for the truth." },
        { q:"What is wrong with Diotrephes?", opts:["False doctrine", "He loves to be first", "Laziness"], correct:1, explain:"No heresy is named; the problem is preeminence." },
        { q:"What is the closing standard?", opts:["Avoid conflict", "Do not imitate what is evil but what is good", "Leave the church"], correct:1, explain:"Given after two live examples to compare." },
        { q:"What gives John his greatest joy?", opts:["Growth in numbers", "Hearing his children walk in the truth", "Financial support"], correct:1, explain:"Worth holding if you've invested in anyone's faith." }
      ],
      deepDive: "The shortest book in the New Testament preserves a very ordinary church problem: a man who loves being first. Diotrephes isn't accused of heresy \u2014 just ego, gossip, refusing hospitality, and pushing out those who offer it. That such a small human failure was worth recording in Scripture says something about how much damage it does. Against him stand Gaius, whose hospitality made him a partner in the work, and Demetrius, well spoken of by everyone. The instruction is simple and permanent: do not imitate what is evil but what is good."
    },
    "Jude": {
      title: "Jude overview",
      overview: [
        "Jude intended to write about salvation and changed course out of urgency.",
        "Contend for the faith once for all entrusted to God's holy people.",
        "Certain people had turned grace into a license for immorality.",
        "Vivid images: clouds without rain, autumn trees without fruit, wandering stars.",
        "Build yourselves up in your faith and pray in the Holy Spirit.",
        "Be merciful to those who doubt; snatch others from the fire.",
        "To him who is able to keep you from stumbling \u2014 and present you without fault, with great joy."
      ],
      questions: [
        { q:"What error is Jude confronting?", opts:["Legalism", "Grace turned into a license for immorality", "Denial of the resurrection"], correct:1, explain:"The opposite error from Galatians." },
        { q:"What does \u2018contend\u2019 imply?", opts:["Passive holding", "Strain and effort", "Debate only"], correct:1, explain:"For a faith \u2018once for all entrusted,\u2019 not ours to renovate." },
        { q:"How are doubters to be treated?", opts:["Expelled", "With mercy", "Ignored"], correct:1, explain:"Contending doesn't license hardness toward the uncertain." },
        { q:"Who keeps believers from falling?", opts:["Their vigilance", "God", "Church leaders"], correct:1, explain:"After a letter about danger, it names who does the holding." }
      ],
      deepDive: "Jude is a single page of urgency \u2014 he abandoned the letter he planned because something was going wrong. People were using grace as cover for whatever they wanted, and his response is to contend, an athletic word implying real strain, for a faith that was entrusted rather than invented. But the tone isn't merely combative. In the middle of the warnings sits one of the New Testament's gentlest instructions: be merciful to those who doubt. And after all that talk of falling, the closing doxology names the one keeping you upright, and it isn't you."
    },
    "Revelation": {
      title: "Revelation overview",
      overview: [
        "Written to churches under real pressure, showing them who is actually in charge.",
        "Christ walking among the lampstands \u2014 present in struggling churches, holding the keys of death.",
        "Seven letters: Ephesus lost its first love, Sardis had a reputation and was dead, Laodicea needed nothing.",
        "\u2018Here I am! I stand at the door and knock\u2019 \u2014 spoken to a church, not an outsider.",
        "John hears \u2018Lion\u2019 and turns to see a Lamb, looking as if it had been slain.",
        "Worthy is the Lamb \u2014 who purchased people from every tribe, language, and nation.",
        "A new heaven and new earth, and the city coming DOWN \u2014 God dwelling with his people.",
        "Every tear wiped away; no more death, mourning, crying, or pain.",
        "The river and the tree of life return, and the curse is gone.",
        "And the last words: \u2018Come, Lord Jesus.\u2019",
        "The martyrs\u2019 honest cry \u2014 how long? \u2014 and the uncountable multitude in robes washed white.",
        "War in heaven, the dragon hurled down, and victory by the blood of the Lamb and steadfast testimony.",
        "Patient endurance under real pressure, and rest promised for faithful death.",
        "Babylon\u2019s fall announced with certainty, and then \u2014 a wedding."
      ],
      questions: [
        { q:"Where is Christ standing in chapter 1?", opts:["Far off", "Among the lampstands, with his churches", "In a distant temple"], correct:1, explain:"Presence before prophecy or judgment." },
        { q:"What was Laodicea's problem?", opts:["Poverty", "Self-sufficiency", "Persecution"], correct:1, explain:"The gap between self-assessment and reality was total." },
        { q:"What does John see when he turns to look at the Lion?", opts:["A lion", "A Lamb, looking as if slain", "An angel"], correct:1, explain:"Heaven's definition of victory is a cross." },
        { q:"Which direction does the holy city travel?", opts:["Up", "Down", "It stays"], correct:1, explain:"The hope isn't evacuation but God dwelling here." },
        { q:"How does the Bible end?", opts:["With a warning", "With an invitation and \u2018Come, Lord Jesus\u2019", "With a genealogy"], correct:1, explain:"Longing and welcome, and grace as the final word." }
      ],
      deepDive: "Revelation is famous for its terrors and ends in extraordinary tenderness. It was written to real churches facing real pressure, and it opens not with prophecy but with presence \u2014 Christ walking among the lampstands, hand on a terrified man's shoulder, holding the keys of death. Its interpretive key is chapter 5: John hears a Lion announced and turns to see a slaughtered Lamb, which means every claim about conquest in this book must be read through a cross. And it closes by reopening Eden \u2014 river, tree of life, no curse, God's face seen \u2014 with an invitation to anyone thirsty and a church praying for her Lord to hurry back."
    },
    "1 Chronicles": {
      title: "1 Chronicles overview",
      overview: [
        "Nine chapters of genealogy, written to remind a scattered post-exile people that they still belonged to a story.",
        "Jabez's one bold prayer interrupts the lists \u2014 and God granted his request.",
        "David wanted to build God a house; God promised to build David one instead.",
        "\u2018Who am I, LORD God, that you have brought me this far?\u2019",
        "David spent his final years gathering materials and plans for a temple he'd never enter.",
        "\u2018Everything comes from you, and we have given you only what comes from your hand.\u2019",
        "\u2018Be strong and courageous\u2026 the LORD my God is with you\u2019 \u2014 David's charge to Solomon."
      ],
      questions: [
        { q:"Why open with nine chapters of names?", opts:["Filler", "To tell a scattered people after exile they still belonged to the story", "Legal record only"], correct:1, explain:"Identity work for people who had lost their land and nearly lost their story." },
        { q:"Why couldn't David build the temple?", opts:["Lack of funds", "He had shed much blood in war", "God forbade all temples"], correct:1, explain:"The house of worship needed a builder whose reign wasn't defined by warfare." },
        { q:"How did David respond to being told no?", opts:["Anger", "Worship and gratitude", "He built it anyway"], correct:1, explain:"His prayer afterward is one of Scripture's most humble responses to a denied desire." },
        { q:"What did David spend his final years doing?", opts:["Resting", "Preparing materials and plans for a temple he'd never see finished", "Fighting more wars"], correct:1, explain:"Faithful investment in something beyond his own lifetime." },
        { q:"What did David's prayer over the offerings insist?", opts:["Generosity earns favor", "Even our giving only returns what was already His", "Wealth proves righteousness"], correct:1, explain:"He refuses to let generosity become a source of pride." }
      ],
      deepDive: "1 Chronicles retells David's story to a very different audience than 2 Samuel did \u2014 not a nation at the height of its power, but survivors of exile trying to remember who they were and what they still belonged to. That's why it opens with nine chapters of names: before anything else, the Chronicler insists that every generation, known and unknown, is remembered. And it's why David's arc centers not on his conquests but on a redirected desire \u2014 wanting to build God a house, and instead spending his final years preparing the way for a temple, and a dynasty, he would never personally see completed."
    },
    "2 Chronicles": {
      title: "2 Chronicles overview",
      overview: [
        "Solomon dedicates the temple, admitting the heavens themselves cannot contain the God it houses.",
        "He prays for Israelites and for foreigners from distant lands \u2014 so all peoples may know God's name.",
        "Fire fell from heaven; the glory of the LORD filled the temple.",
        "\u2018If my people\u2026 will humble themselves and pray\u2026 I will hear from heaven and heal their land.\u2019",
        "Hezekiah reopened the temple's shut doors and restored Passover.",
        "Josiah rediscovered the forgotten Book of the Law and led the greatest reform in the kingdom's history.",
        "Jerusalem finally fell after repeated warnings were mocked \u2014 \u2018there was no remedy.\u2019",
        "And the very last words of the Hebrew Bible: Cyrus's decree inviting the exiles to go home and rebuild."
      ],
      questions: [
        { q:"What tension does Solomon's prayer name?", opts:["None", "That no building can contain the God of the whole universe", "That the temple was too small"], correct:1, explain:"He builds the grandest structure his kingdom could produce and admits its limits immediately." },
        { q:"What four things does 7:14 ask of God's people?", opts:["Sacrifice, ritual, fasting, silence", "Humble themselves, pray, seek his face, turn from wicked ways", "Nothing"], correct:1, explain:"A real response invited before the promised healing." },
        { q:"What triggered Josiah's reform?", opts:["A military victory", "Rediscovering the forgotten Book of the Law during temple repairs", "A prophet's rebuke"], correct:1, explain:"Scripture itself had been lost inside its own building." },
        { q:"What reason is given for the exile?", opts:["Bad luck", "Persistent mockery of God's messengers despite repeated warnings", "Weak leadership alone"], correct:1, explain:"Judgment presented as a last resort after patient warning." },
        { q:"How does the book \u2014 and the Hebrew Bible \u2014 end?", opts:["In despair", "With Cyrus's decree inviting exiles to go home and rebuild", "With a battle"], correct:1, explain:"The story refuses to end on ashes; the last note is an open door." }
      ],
      deepDive: "2 Chronicles tracks the kings of Judah alone, weighing each one against a single question: did they turn toward God or away? Its theological center is 7:14, God's promise that humility, prayer, and turning can heal what's broken \u2014 and the book proves it twice, in Hezekiah's and Josiah's revivals, before showing what happens when kings and people finally stop listening altogether. Jerusalem falls, the temple burns, and it looks like the end. But the book \u2014 and in the traditional Hebrew ordering, the entire Bible \u2014 closes with a pagan king's decree inviting the broken people home. Even total collapse doesn't get the final word."
    }
  };
const DEEP_STUDIES = {
    Genesis: { focus: "Genesis 1:1\u20132:3", title: "The architecture of creation",
      sections: [
        { h: "\u201cIn the beginning God\u201d", b: "The Bible's first four words settle its biggest claims before a single event happens: God already exists, needs no origin story, and stands outside the beginning He creates. Ancient creation stories opened with wars between gods; Genesis opens with one God speaking, unopposed. The first verse isn't just information \u2014 it's a quiet declaration that everything else in existence is creature, not competitor." },
        { h: "Forming, then filling", b: "The six days follow a deliberate architecture. Days one through three form realms: light and dark, sky and sea, land. Days four through six fill each realm with rulers, in the same order: sun, moon, and stars for the light; birds and fish for sky and sea; animals and humanity for the land. Day one pairs with day four, two with five, three with six. Creation is presented not as random output but as ordered craftsmanship \u2014 a cosmos with structure built in." },
        { h: "\u201cIn the image of God\u201d", b: "Everything else is created \u2018after his kind,\u2019 but humanity alone is made \u2018in the image of God\u2019 \u2014 the phrase repeats three times in a single verse, the Hebrew way of underlining. In the ancient world, kings placed images of themselves in territories to represent their rule; Genesis democratizes the idea: every human being, male and female, carries the King's image. Human dignity in the Bible starts here, before any command, achievement, or failure." },
        { h: "The seventh day", b: "The week climaxes not in humanity but in rest \u2014 the only day called holy. God doesn't rest from exhaustion; the seventh day crowns creation with completion and enjoyment, and its pattern later becomes the Sabbath command. Notice what's missing: every other day ends with \u2018evening and morning,\u2019 but the seventh has no closing formula \u2014 an old observation suggesting God's rest is an open invitation, still standing." }
      ],
      takeaway: "Genesis 1 answers the questions every worldview must face \u2014 where everything came from, whether it has order, and what a human being is worth \u2014 in one chapter of measured, deliberate prose. Creation is neither accident nor battlefield: it is craftsmanship, spoken into being and called good, with every person carrying the Maker's image.",
      reflection: "If you really believed every person you meet this week carries God's image \u2014 including the difficult ones, including you \u2014 what would change about how you treat them?" },
    Exodus: { focus: "Exodus 20:1\u201317", title: "The Ten Commandments, closely read",
      sections: [
        { h: "Grace before law", b: "Before a single command, God introduces Himself: \u2018I am the Lord your God, who brought you out of the land of Egypt, out of the house of slavery.\u2019 The order is everything \u2014 rescue first, requirements second. Israel isn't told to obey in order to be saved; they're already saved, and the commandments describe how rescued people live. Skipping this verse reverses the Bible's whole logic of grace." },
        { h: "The first table: loving God", b: "The opening commands guard the relationship itself: no other gods, no carved images, no misusing God's name, and a day of rest kept holy. The idol prohibition isn't about art \u2014 it forbids shrinking the living God into something manageable and controllable. And \u2018taking the name in vain\u2019 reaches beyond rough language: Israel carried God's name, so living falsely under it was the deepest misuse." },
        { h: "The second table: loving neighbor", b: "The remaining commands protect what makes human community possible: honor for parents, and the safeguarding of life, marriage, property, truth, and contentment. Jesus later summarized the two tables exactly this way \u2014 love God, love neighbor \u2014 and Paul wrote that love fulfills the law. The commandments aren't arbitrary tests; each one fences something precious." },
        { h: "The tenth commandment's surprise", b: "Nine commandments regulate actions; the tenth \u2014 \u2018you shall not covet\u2019 \u2014 moves inside, ruling the heart's desires where no court can see. It quietly admits what the whole Bible will argue: behavior flows from wanting, and wanting can be disordered even when behavior looks clean. The law ends by pointing past itself, toward the heart-level transformation the prophets would promise and the New Testament would claim." }
      ],
      takeaway: "The Ten Commandments open with rescue, not requirements \u2014 \u2018I brought you out of slavery\u2019 comes before a single rule. God's law is how freed people stay free, guarding what's precious: worship, rest, family, life, truth, and the heart's desires underneath them all.",
      reflection: "Which commandment names the area of your life where freedom is slipping right now \u2014 and what would it look like to let God guard that ground again?" },
    Leviticus: { focus: "Leviticus 16", title: "Inside the Day of Atonement",
      sections: [
        { h: "Once a year, one man, not without blood", b: "The chapter opens in the shadow of Nadab and Abihu's death \u2014 access to God is not casual. Even Aaron may enter the Most Holy Place only one day a year, only after sacrifice for his own sins, only wearing plain linen rather than his glorious robes. Every restriction preaches the same sermon: sin is real, holiness is dangerous to the unholy, and approach requires provision God Himself specifies." },
        { h: "The first goat: penalty", b: "One goat is sacrificed as a sin offering, its blood carried into the innermost sanctuary and sprinkled on the mercy seat \u2014 the lid of the ark, directly over the tablets of the broken law. The geography is theology: between God's presence above and the law's accusation below, blood intervenes. Atonement in Leviticus is never sentiment; something dies in the sinner's place." },
        { h: "The second goat: removal", b: "Over the live goat, the high priest confesses \u2018all the iniquities of the children of Israel,\u2019 transferring them by laid-on hands, and the goat is led away into the wilderness, never to return. Forgiveness, this ritual insists, isn't only a cancelled penalty \u2014 it's distance: sins carried away from the camp, out of sight. The psalmist's line \u2018as far as the east is from the west\u2019 is this goat's route turned into poetry." },
        { h: "The pattern behind the gospel", b: "The New Testament book of Hebrews reads this chapter as blueprint: a greater High Priest entering a greater sanctuary, not yearly but once for all, by His own blood. Whether or not a reader shares that faith, it's historically undeniable that Leviticus 16 supplied the vocabulary \u2014 atonement, blood, mercy seat, sins carried away \u2014 in which the meaning of the cross was first expressed." }
      ],
      takeaway: "The Day of Atonement dramatized the problem and the promise at the heart of the whole Bible: sin is real and costly, and God Himself provides the way for it to be covered and carried away. Nothing casual, nothing cheap \u2014 and yet, once a year, everything dealt with.",
      reflection: "The scapegoat carried Israel's sins somewhere they could never be retrieved. What are you still carrying that, according to this picture, has already been carried away?" },
    Numbers: { focus: "Numbers 6:24\u201326", title: "The priestly blessing, line by line",
      sections: [
        { h: "\u201cThe Lord bless you, and keep you\u201d", b: "The first line pairs generosity with protection \u2014 blessing that enriches and keeping that guards. In the wilderness, \u2018keep\u2019 was no abstraction: a people surrounded by threats needed a Keeper. The Hebrew word is the same used of the watchman; Psalm 121 expands this single word into an entire poem \u2014 \u2018he who keeps you will not slumber.\u2019" },
        { h: "\u201cThe Lord make his face shine on you\u201d", b: "A shining face is Hebrew's warmest image: the way a face lights up on seeing someone loved. The blessing dares Israel to believe God looks at them that way \u2014 not with the averted or darkened face of displeasure, but with delight. \u2018And be gracious to you\u2019 grounds it: the shining is unearned, grace rather than wages." },
        { h: "\u201cAnd give you peace\u201d", b: "The climb of the blessing ends at shalom \u2014 a word far larger than quiet. Shalom is wholeness: things mended, relationships right, nothing missing, nothing broken. Each line of the blessing has grown longer in the Hebrew, three words, then five, then seven \u2014 blessing gathering momentum until it rests on completeness." },
        { h: "\u201cThey shall put my name upon them\u201d", b: "The closing verse explains what the blessing does: it places God's own name on the people. In biblical thought, bearing a name means belonging \u2014 ownership, identity, and responsibility together. The priests weren't wishing Israel luck; they were marking Israel as God's. Three thousand years later, these exact words are still spoken over congregations \u2014 the oldest blessing in continuous use on earth." }
      ],
      takeaway: "The bronze serpent is salvation at its strangest and simplest: no ritual to perform, no distance to travel \u2014 just look and live. Jesus chose this exact scene to explain His own cross, which means the wilderness's oddest story is also one of its most important.",
      reflection: "Looking is the easiest act in the world \u2014 and the hardest, when pride wants a more impressive cure. Where are you trying to earn what God has offered to simply give?" },
    Deuteronomy: { focus: "Deuteronomy 6:4\u20139", title: "The Shema, word by word",
      sections: [
        { h: "\u201cHear, O Israel\u201d", b: "The command is not first \u2018do\u2019 or \u2018believe\u2019 but \u2018hear\u2019 \u2014 shema, a word meaning listen so deeply that response follows. Faith in Deuteronomy begins as attention. The address is corporate \u2014 O Israel \u2014 a people commanded to listen together, which is why these words became the daily confession of an entire civilization." },
        { h: "\u201cThe Lord our God is one Lord\u201d", b: "In a world crowded with local gods \u2014 one for rain, one for war, one per city \u2014 \u2018one\u2019 was revolutionary. It means God is not divided, not regional, not one option in a marketplace: the same Lord in every place and season of life. It also means life can be whole rather than fragmented among competing loyalties \u2014 one God, therefore one integrated self." },
        { h: "\u201cWith all your heart, soul, and might\u201d", b: "The response to oneness is totality. Heart, in Hebrew, is the seat of thinking and choosing, not just feeling; soul is the whole living self; might is everything you have \u2014 an odd word here, closer to \u2018very-ness\u2019 or \u2018muchness.\u2019 The command refuses to let love for God be one compartment among many. Jesus, asked for the greatest commandment, quoted exactly this line." },
        { h: "\u201cTeach them diligently to your children\u201d", b: "The Shema immediately turns pedagogical: these words go on hearts, then into conversations \u2014 sitting at home, walking on the road, lying down, rising up. Faith's primary classroom is ordinary family life, its curriculum repetition woven into routine. The commands about binding words on hands and doorposts (still practiced literally in tefillin and mezuzot) make the principle physical: truth positioned where life actually happens." }
      ],
      takeaway: "The Shema compresses the entire law into one relationship: hear, love, remember, repeat. Faith in Deuteronomy is not a compartment but a whole-life orientation \u2014 talked about on the road, taught at the table, bound to the everyday.",
      reflection: "If someone watched your ordinary Tuesday \u2014 your conversations, your habits, your home \u2014 what would they conclude you love with all your heart?" },
    Joshua: { focus: "Joshua 1:1\u20139", title: "Be strong and courageous \u2014 anatomy of a commissioning",
      sections: [
        { h: "\u201cMoses my servant is dead\u201d", b: "God's first words to Joshua are brutally clear-eyed: the irreplaceable man is gone, \u2018now therefore arise.\u2019 Grief is real but the promise doesn't die with the leader \u2014 \u2018as I was with Moses, so I will be with you.\u2019 The passage models how God handles transitions: honest about loss, unbroken in purpose, and personal in reassurance to the successor standing in a giant's shadow." },
        { h: "Three times: \u2018be strong and courageous\u2019", b: "The command repeats three times in nine verses \u2014 and repetition in Hebrew narrative is emphasis, not accident. Notably, courage here is commanded, not felt: it's presented as obedience available to the frightened, grounded on one fact only \u2014 \u2018for the Lord your God is with you.\u2019 Courage in the Bible is never self-confidence; it's presence-confidence." },
        { h: "The strange center: a book, day and night", b: "In the middle of a military commissioning sits a scribe's instruction: \u2018this book of the law shall not depart from your mouth; but you shall meditate on it day and night.\u2019 The word \u2018meditate\u2019 pictures low murmuring \u2014 words kept literally in the mouth. Success for the general, remarkably, is defined by devotion to the text, not tactics. Psalm 1 borrows this exact verse to describe the flourishing life." },
        { h: "\u201cWherever you go\u201d", b: "The passage closes with presence going mobile: not a God of one mountain or shrine, but \u2018with you wherever you go.\u2019 For a people about to scatter across a new land, this was the essential promise. The New Testament's closing lines \u2014 \u2018I am with you alway\u2019 \u2014 stand in a straight line of descent from this verse." }
      ],
      takeaway: "Joshua's commission repeats one command three times \u2014 be strong and courageous \u2014 and grounds it not in Joshua's ability but in God's presence: \u2018I will be with you wherever you go.\u2019 Courage in the Bible is never self-confidence; it's presence-confidence.",
      reflection: "What is the one thing in front of you right now that you would attempt this month if you fully believed \u2018the LORD your God is with you wherever you go\u2019?" },
    Judges: { focus: "Judges 2:11\u201319", title: "The cycle, anatomized",
      sections: [
        { h: "Stage one: forgetting into evil", b: "The cycle begins with a verb of abandonment \u2014 Israel \u2018forsook the Lord God of their fathers\u2019 \u2014 and the narrator ties it directly to memory failure: they served gods \u2018of the people that were round about them.\u2019 Sin in Judges is rarely bold rebellion; it's assimilation, drifting into the neighborhood's normal. The most dangerous spiritual condition, the chapter implies, is forgetfulness wearing the mask of fitting in." },
        { h: "Stage two and three: distress and the cry", b: "Consequence follows: sold into oppressors' hands, \u2018greatly distressed.\u2019 Yet the text notes something tender \u2014 God is moved \u2018because of their groanings.\u2019 The cry that triggers rescue is not repentance polished into eloquence; it's often just pain turned upward. Judges portrays a God whose compassion responds to groaning even when reformation hasn't happened yet." },
        { h: "Stage four: the raised-up deliverer", b: "\u2018The Lord raised them up judges\u2019 \u2014 the deliverers are God's initiative, not Israel's election, and God is \u2018with the judge\u2019 all his days. Each rescue is pure grace layered on a repeat offense. But the chapter is honest about the limit of leader-dependent faith: the reform lasts exactly as long as the leader breathes." },
        { h: "The spiral: \u2018more than their fathers\u2019", b: "Verse 19 turns the circle into a spiral: when the judge died, \u2018they corrupted themselves more than their fathers.\u2019 Each generation's floor becomes the next one's ceiling. It's the Bible's most sobering picture of inherited drift \u2014 and its unstated question presses every reader: what breaks a cycle that leaders alone cannot? The rest of Scripture is, in a sense, the long answer." }
      ],
      takeaway: "Gideon's three hundred is God's arithmetic on display: the army was cut down precisely so no one could credit the victory to human strength. God's preference for the insufficient isn't cruelty \u2014 it's clarity about where deliverance actually comes from.",
      reflection: "Where do you feel most outnumbered or under-equipped right now \u2014 and is it possible that's exactly the place God intends to be unmistakably Himself?" },
    Ruth: { focus: "Ruth 1:16\u201317", title: "Ruth's vow \u2014 the shape of hesed",
      sections: [
        { h: "\u201cDo not urge me to leave you\u201d", b: "Ruth's vow answers Naomi's third attempt to send her away \u2014 and each release Naomi offers is reasonable, even generous. Ruth's refusal is therefore fully informed: she has heard the costs (no home, no husband, no prospects) and chooses anyway. Biblical loyalty is never naive; hesed \u2014 covenant love \u2014 is precisely commitment that has counted the cost and stays." },
        { h: "Five bindings, ascending", b: "The vow climbs: your way, my way; your lodging, mine; your people, my people; your God, my God; your burial place, mine. Geography, community, faith, and death \u2014 each line binds deeper than the last. The genius of the vow is that faith sits inside loyalty: Ruth doesn't adopt Israel's God in the abstract but through devotion to one grieving woman who embodied Him poorly at that moment. Love for a person became the road to God." },
        { h: "\u201cThe Lord do so to me, and more also\u201d", b: "Ruth seals the vow with Israel's own oath formula, invoking the Lord \u2014 Yahweh, the covenant name \u2014 by name. A Moabite swears by Israel's God before Israel has given her anything but famine and funerals. It's the book's quiet thunderclap: faith arriving from outside, fluent and total, while insiders like Naomi can only manage bitterness. God, the book hints, is never without witnesses in unexpected places." },
        { h: "Why this vow echoes", b: "These verses are read at weddings, though they were spoken between a widow and her mother-in-law \u2014 fitting, since they define covenant love itself, in any relationship: informed, chosen, total, sealed before God, and bounded only by death. The rest of the book is simply this vow being honored \u2014 and rewarded beyond all imagining, as the loyal outsider becomes grandmother to kings." }
      ],
      takeaway: "Ruth's vow \u2014 your people, my people; your God, my God \u2014 is covenant love spoken by an outsider with nothing to gain, and it lands her in the family line of David and, eventually, the Messiah. The Bible's biggest doors turn on the smallest hinges of ordinary faithfulness.",
      reflection: "Whose life is God asking you to stay committed to right now, when leaving would be easier and no one would blame you?" },
    "1 Samuel": { focus: "1 Samuel 16:1\u201313", title: "The Lord looks at the heart",
      sections: [
        { h: "\u201cHow long will you mourn for Saul?\u201d", b: "The chapter opens with God gently moving Samuel past grief over a failed chapter: \u2018fill your horn with oil, and go.\u2019 The prophet's mourning was real and legitimate \u2014 but God's next thing was already prepared. There's a pastoral wisdom in the sequence: sorrow is honored, and then redirected toward the anointing oil." },
        { h: "\u201cSurely the Lord's anointed is before him\u201d", b: "Seeing Eliab \u2014 tall, eldest, impressive \u2014 Samuel reaches the instant verdict everyone reaches. The irony stings: the very prophet who anointed tall Saul, and watched that experiment fail, still defaults to height. The text is honest that even the godliest instincts are culturally trained. God's correction follows immediately, and it's the book's thesis." },
        { h: "\u201cMan looks at the outward appearance\u201d", b: "The Hebrew says literally that man looks \u2018to the eyes\u2019 \u2014 to what eyes can reach \u2014 \u2018but the Lord looks at the heart.\u2019 Heart in Scripture is not emotion but the command center: thought, intention, loyalty, desire. The verse doesn't say appearance is worthless; it says appearance is simply the wrong data for the question of calling. Seven sons pass by on this principle. None is chosen." },
        { h: "The eighth son, out with the sheep", b: "David isn't merely overlooked \u2014 he wasn't invited; the feast waits while someone fetches the boy nobody considered. He arrives, is anointed among his brethren, \u2018and the Spirit of the Lord came upon David from that day forward.\u2019 Then \u2014 crucially \u2014 he goes back to the sheep. Between anointing and throne lie years of harps, giants, spears, and caves. God's callings, this chapter teaches, are often confirmed long before they're crowned." }
      ],
      takeaway: "Samuel almost anointed the wrong brother because even prophets default to appearances. God's correction \u2014 \u2018the LORD looks at the heart\u2019 \u2014 is both a comfort and an examination: the things people overlook about you, God doesn't; and the image you manage for others, God sees straight through.",
      reflection: "If God evaluated you this week only by what's invisible to everyone else \u2014 your motives, your private loyalties, your unperformed thoughts \u2014 what would He find growing there?" },
    "2 Samuel": { focus: "2 Samuel 7:1\u201316", title: "The covenant with David",
      sections: [
        { h: "\u201cI live in a house of cedar, and the ark in a tent\u201d", b: "The chapter opens with holy discontent: David, finally at rest from his enemies, is troubled by the imbalance between his palace and God's tent. The impulse is beautiful \u2014 and Nathan initially blesses it. Then God's word comes that night with a redirection. Not every good desire is God's assignment; even the prophet had to be corrected. The desire itself, though, God treasures \u2014 later texts say it was counted to David's credit that it was \u2018in his heart.\u2019" },
        { h: "\u201cThe LORD himself will establish a house for you\u201d", b: "The wordplay is the theology: David offers God a house (a building); God promises David a house (a dynasty). The gift refuses to flow in the direction David planned. Verses 8\u20139 rehearse the story so far \u2014 \u2018I took you from the pasture\u2019 \u2014 grounding the promise in grace already shown. Before any future is pledged, God reminds David that his entire past has been gift." },
        { h: "\u201cYour throne will be established forever\u201d", b: "The promise stretches beyond Solomon, beyond any single reign: a house, kingdom, and throne \u2018forever.\u2019 Even future sin is anticipated \u2014 \u2018when he does wrong, I will punish him... but my love will never be taken away.\u2019 Discipline within the covenant, never expulsion from it. This is the seedbed of all messianic hope: the prophets, the psalms, and the Gospels all reach back here. When Gabriel tells Mary her son will receive \u2018the throne of his father David\u2019 and reign forever, Luke is quoting this room." },
        { h: "\u201cWho am I, Sovereign LORD?\u201d", b: "David's response sets the posture for receiving grace: he goes in, sits before the LORD, and marvels. No negotiation, no vow to earn it \u2014 just \u2018who am I... that you have brought me this far?\u2019 The prayer looks backward (all You've done), inward (who am I), and forward (do as You promised). Covenant grace, rightly received, produces neither entitlement nor anxious striving \u2014 it produces worship. The rest of David's turbulent life will test this promise; none of it will break it." }
      ],
      takeaway: "David offered to build God a house; God promised to build David one that would never end. The covenant wasn't negotiated, earned, or maintained by David's performance \u2014 his worst chapters couldn't break it. Every hope the Bible later hangs on \u2018the son of David\u2019 hangs from this room.",
      reflection: "David's response to the biggest promise of his life was to sit down and marvel: \u2018Who am I?\u2019 When did you last stop and simply be astonished at what God has already brought you through?" },
    "1 Kings": { focus: "1 Kings 19:1\u201318", title: "The whisper at Horeb",
      sections: [
        { h: "\u201cI have had enough, LORD\u201d", b: "One threat from Jezebel, and the prophet of Carmel runs for his life \u2014 then prays to lose it. The whiplash is the point: yesterday's mountain-top victor is today's broom-tree casualty. Scripture refuses to airbrush its heroes' mental collapse; the man who prayed down fire genuinely wants to die. Elation and despair, the text teaches, can live days apart in the same faithful person \u2014 and neither cancels the other." },
        { h: "Sleep, bread, and a second helping", b: "God's first response contains no rebuke and no sermon \u2014 an angel touches him, feeds him fresh bread and water, and lets him sleep again before a second meal: \u2018the journey is too much for you.\u2019 The order of care is striking: body first, then presence, then purpose. Before Elijah is asked a single question, he is fed twice. Sometimes the most spiritual thing a depleted person can do is eat and sleep \u2014 the text comes remarkably close to saying exactly that." },
        { h: "Not in the wind, the earthquake, or the fire", b: "At Horeb \u2014 Sinai itself, where God once answered Moses in thunder \u2014 the expected spectacle parades past: hurricane wind, earthquake, fire. \u2018But the LORD was not in\u2019 any of them. Then comes the Hebrew phrase qol demamah daqqah \u2014 a voice of thin silence, a gentle whisper. For a prophet whose whole ministry had been fire and drama, the lesson lands precisely: God is not confined to the spectacular, and the next season's guidance may arrive at a volume only stillness can hear." },
        { h: "\u201cYet I reserve seven thousand\u201d", b: "Twice Elijah repeats his despairing math: \u2018I alone am left.\u2019 God's answer holds a correction and a commission: anoint your successors \u2014 the work outlives you \u2014 and know that seven thousand in Israel have never bowed to Baal. Despair always undercounts God's people and God's future. The chapter ends with Elijah finding Elisha and throwing his cloak over him: the cure for \u2018I alone am left\u2019 turned out to include companionship, succession, and a reminder that the story was never resting on one man's shoulders." }
      ],
      takeaway: "God's care for a burned-out prophet ran body-first: food, sleep, more food \u2014 then presence in a whisper, then a corrected count of the faithful, then a companion. Despair lies about being alone; Horeb answers with bread, quiet, and seven thousand unbowed knees.",
      reflection: "Which does your soul need most right now \u2014 rest, the whisper, or the reminder that you are not the only one left \u2014 and what would it look like to receive it this week?" },
    "2 Kings": { focus: "2 Kings 5:1\u201319", title: "Naaman: grace that offends",
      sections: [
        { h: "\u201cA great man... but a leper\u201d", b: "The opening verse builds Naaman up in five phrases \u2014 commander, great man, highly regarded, victorious, valiant \u2014 then punctures it with two words: but leprous. It's the Bible's anatomy of every impressive life: the r\u00e9sum\u00e9, and the incurable thing the r\u00e9sum\u00e9 can't touch. Everyone the world calls great carries a \u2018but\u2019 \u2014 and the story's honesty about it is the door grace walks through." },
        { h: "The servant girl's sentence", b: "The entire chain of healing begins with a captive Israelite girl \u2014 stolen from her home by the very army Naaman commands \u2014 who wishes her master well: \u2018If only he would see the prophet in Samaria.\u2019 One sentence, spoken by the story's least powerful person, to the benefit of her captor. Before Naaman ever touches the Jordan, the chapter has already shown its deepest miracle: grace in the mouth of someone with every right to bitterness." },
        { h: "The rage at the river", b: "Naaman arrives with roughly 750 pounds of silver, 150 pounds of gold, and royal letters \u2014 the full apparatus of importance. Elisha doesn't come to the door. The prescription \u2014 wash seven times in the Jordan \u2014 enrages him precisely because it ignores everything he brought: no audience, no ceremony, no price. \u2018I thought he would surely come out to me and stand and call on the name of the LORD.\u2019 Grace offends the great because it treats them like everyone else." },
        { h: "\u201cLike the flesh of a little child\u201d", b: "His servants' gentle logic \u2014 you'd have done something heroic; why not something simple? \u2014 gets him into the water, and the seventh dip restores his skin \u2018like that of a young boy.\u2019 The detail is doing theology: the great man comes up from the river with a child's flesh, having finally received like a child. He rises confessing \u2018there is no God in all the earth except in Israel\u2019 and \u2014 remarkably \u2014 tries to pay. Elisha refuses. Some things must remain free, or they stop being what they are." }
      ],
      takeaway: "Naaman's healing cost him nothing and offended him deeply \u2014 because grace that can't be bought or performed leaves greatness with nothing to do but obey. The chapter runs on unlikely mouths: a captive girl, unnamed servants \u2014 while the general, the kings, and the silver accomplish nothing. God's economy hasn't changed.",
      reflection: "Is there anything God has made simple that you've been making complicated \u2014 because the simple version doesn't let you earn it?" },
    "Ezra": { focus: "Ezra 7:1\u201310", title: "The set heart",
      sections: [
        { h: "A genealogy with a point", b: "The chapter opens by tracing Ezra's line back to Aaron \u2014 sixteen generations of priesthood behind one man's arrival. The point isn't pedigree for its own sake: Ezra carries an inheritance of responsibility. What he does with Scripture, he does as someone entrusted with it. Every reader of this app stands in a similar line \u2014 the Book reached you through hands that kept it." },
        { h: "\u201cThe hand of the LORD his God was on him\u201d", b: "The phrase repeats like a heartbeat through Ezra 7\u20138 \u2014 six times. The king grants \u2018everything he asked\u2019 not because Ezra was persuasive but because God's hand was on him. Notice the order the chapter implies: the set heart of verse 10 comes with the open doors of verse 6. Favor followed devotion; the hand rested on a heart already prepared." },
        { h: "Study \u2014 do \u2014 teach", b: "Verse 10's sequence rewards slow reading: Ezra set his heart to study the Law of the LORD, and to do it, and to teach. Study without doing manufactures hypocrites; doing without study manufactures errors; teaching before either manufactures both. The verse's integrity is its order \u2014 no step skipped, no step rushed. It has served as the quiet job description for every honest teacher of Scripture since." },
        { h: "\u201cSet his heart\u201d", b: "The Hebrew phrase behind \u2018devoted himself\u2019 means Ezra fixed, prepared, established his heart \u2014 the same root used for laying foundations. Devotion here isn't a mood; it's architecture, decided in advance of the tests. Ezra's heart was set before the king's favor, before the dangerous journey, before the crisis he'd find in Jerusalem. The direction was locked in early \u2014 which is why the storms later couldn't turn it." }
      ],
      takeaway: "Ezra 7:10 is one verse carrying a whole life's blueprint: a heart set in advance, on a sequence with no shortcuts \u2014 learn the Word, live it, and only then teach it. The favor and open doors around Ezra weren't luck; they rested on that architecture.",
      reflection: "Study, do, teach \u2014 which step does your life currently skip, and what would \u2018setting your heart\u2019 on it this month actually look like?" },
    "Nehemiah": { focus: "Nehemiah 8:1\u201312", title: "When the Word came back",
      sections: [
        { h: "\u201cThey told Ezra to bring out the Book\u201d", b: "Notice who initiates: not the priests, not a program \u2014 all the people gathered as one and told Ezra to bring the Book of the Law. The wall was finished; the city was safe; and the people's first request was Scripture. Revival in this chapter is not something done to a crowd but something a crowd came hungry for. Appetite preceded the feast." },
        { h: "From daybreak till noon \u2014 and attentive", b: "Ezra read aloud from dawn to midday \u2014 five or six hours \u2014 \u2018and all the people listened attentively.\u2019 They stood when the book was opened. The scene rebukes our shrinking attention spans gently: the Word was treated as an event worth a morning, worth standing for, worth the whole city's presence \u2014 men, women, and all who could understand." },
        { h: "\u201cGiving the meaning so the people understood\u201d", b: "Verse 8 is the oldest picture of Bible teaching done right: the Levites read clearly, gave the meaning, and the people understood. Reading alone wasn't enough \u2014 explanation bridged the ancient words into living minds. Every sermon, commentary, study group, and honestly, every lesson in this app, descends from verse 8: the conviction that Scripture is meant to be understood, not just recited." },
        { h: "\u201cDo not grieve \u2014 the joy of the LORD is your strength\u201d", b: "The Word landed and the people wept \u2014 conviction doing its proper work. But the leaders interrupted the tears with a surprising prescription: feast, drink something sweet, send portions to those who have nothing, \u2018for this day is holy... the joy of the LORD is your strength.\u2019 Conviction opens the door; joy is what holds the house up. And the joy immediately turned outward \u2014 grace received became portions sent." }
      ],
      takeaway: "Nehemiah 8 is revival with no special effects: hungry people, an open book, clear explanation, real understanding \u2014 then tears rightly interrupted by joy and generosity. The Word rebuilt the people the way the people had rebuilt the wall: everyone present, everyone participating.",
      reflection: "When the Word convicts you, which do you skip \u2014 the honest grief, or the commanded joy that's supposed to follow it?" },
    "Esther": { focus: "Esther 4:9\u201317", title: "For such a time as this",
      sections: [
        { h: "The palace is not a bunker", b: "Esther's first instinct is understandable: approaching the king unsummoned means death unless the scepter extends, and she hasn't been called in thirty days. Mordecai's reply cuts through: \u2018Do not think that because you are in the king's house you alone of all the Jews will escape.\u2019 The palace felt like protection; it was actually exposure. Privilege never exempts \u2014 it implicates." },
        { h: "\u201cRelief and deliverance will arise from another place\u201d", b: "Here is the book's closest brush with naming God \u2014 and its boldest theology. Mordecai is certain deliverance is coming with or without Esther; the promise to Abraham's people will not die in Susa. God's purpose is not fragile, and Esther is not its last hope. That certainty transforms the invitation: she isn't being asked to save the plan. She's being asked whether she wants her part in it." },
        { h: "\u201cWho knows but that you have come... for such a time as this?\u201d", b: "Mordecai's famous question reframes Esther's entire biography in one stroke: the orphanhood, the beauty, the strange selection, the crown \u2014 perhaps none of it was random, and all of it was placement. \u2018Who knows\u2019 is honest \u2014 he doesn't claim a prophecy \u2014 but the question, once asked, cannot be unasked. Every position, platform, and comfort you hold is subject to the same interrogation." },
        { h: "\u201cIf I perish, I perish\u201d", b: "Esther's answer comes in stages worth noticing: first logistics (gather the Jews, fast three days \u2014 she doesn't go alone or unprepared), then resolve (\u2018I will go to the king, even though it is against the law\u2019), then surrender (\u2018if I perish, I perish\u2019). It is not fatalism; it is courage that has done the math and accepted the worst case. Prepared, accompanied, surrendered \u2014 the anatomy of brave obedience." }
      ],
      takeaway: "Esther 4 reframes privilege as placement: deliverance was certain either way \u2014 the only open question was whether Esther would take her part in it. Her yes was neither reckless nor solitary: fasting behind it, community around it, and surrender underneath it.",
      reflection: "What position, access, or comfort do you currently hold \u2014 and if Mordecai asked you \u2018who knows but that you have it for such a time as this,\u2019 what would come to mind first?" },
    "Job": { focus: "Job 38:1\u201311", title: "Out of the whirlwind",
      sections: [
        { h: "\u201cThen the LORD spoke to Job out of the storm\u201d", b: "After thirty-five chapters of human speeches, the voice Job demanded finally comes \u2014 out of the whirlwind, the very image of the chaos that took his children. God speaks from inside the storm, not around it. And note who He addresses: not the eloquent friends but the man who raged and questioned. The wrestler gets the audience; the defenders get bypassed." },
        { h: "\u201cWho is this that darkens my counsel?\u201d", b: "God's opening is a challenge, not a comfort \u2014 \u2018brace yourself like a man; I will question you.\u2019 Yet notice what is absent: no list of Job's sins, no vindication of the friends' accusations, no anger at the questions themselves. Job is challenged for speaking beyond his knowledge \u2014 \u2018words without knowledge\u2019 \u2014 never for speaking. The honest interrogation of God, it turns out, was admissible all along." },
        { h: "\u201cWhere were you when I laid the earth's foundation?\u201d", b: "The questions begin \u2014 over seventy of them, and Job can answer none. Earth's foundations, the sea's boundaries, dawn's assignment, snow's storehouses. The effect is not humiliation but re-scaling: Job's suffering was real, but his frame was small; the whirlwind installs a bigger one. If wisdom runs the morning and measures the sea, it may be running the parts of Job's story he cannot see." },
        { h: "The answer that isn't one", b: "Read the whole speech and notice what never comes: any mention of the accuser, the wager, or the reason for Job's pain. God explains nothing \u2014 and Job is satisfied: \u2018my ears had heard of you but now my eyes have seen you.\u2019 The presence answered what the explanation never could. It is the book's deepest claim: what sufferers ultimately need is not the reason for the storm but the God inside it \u2014 and He came." }
      ],
      takeaway: "God's answer to Job contains no explanation \u2014 only Himself, speaking from inside the storm, to the man who dared keep asking. The questions re-size Job's frame without dismissing his pain, and the encounter accomplishes what information never could: hearing became seeing, and it was enough.",
      reflection: "If God offered you His presence in your hardest question \u2014 but not the explanation \u2014 would you take the trade? What does your honest answer tell you about what you're really seeking?" },
    "Psalms": { focus: "Psalm 121", title: "I lift up my eyes",
      sections: [
        { h: "\u201cI lift up my eyes to the mountains \u2014 where does my help come from?\u201d", b: "This is a song of ascents \u2014 sung by pilgrims walking up to Jerusalem, eyes on the hills ahead. The mountains cut both ways: majestic, and dangerous \u2014 bandits, heat, a treacherous road. The psalm opens with the traveler's honest question, the one every journey eventually asks: looking at what's ahead of me, where is help actually going to come from?" },
        { h: "\u201cMy help comes from the LORD, the Maker of heaven and earth\u201d", b: "The answer overshoots the mountains entirely: help comes from the One who made them \u2014 and heaven and earth besides. The psalmist answers his own question, out loud, the way faith often must: not waiting to feel the confidence but declaring the fact. The credential matters: a helper who manufactured the terrain is not intimidated by it." },
        { h: "\u201cHe who watches over you will not slumber\u201d", b: "The center of the psalm hands the traveler to a Keeper who never sleeps: \u2018indeed, he who watches over Israel will neither slumber nor sleep.\u2019 Every other guardian \u2014 parent, friend, watchman \u2014 eventually closes their eyes; the pilgrim's Keeper does not. The word \u2018watches over\u2019 (shamar \u2014 keep, guard) repeats six times in eight verses. The psalm is practically built out of it." },
        { h: "\u201cYour coming and going, both now and forevermore\u201d", b: "The keeping widens as the psalm closes: the sun by day, the moon by night, your life, your coming and going \u2014 now and forever. Not a promise that nothing hard will happen (the pilgrims still walked the dangerous road), but that nothing will happen outside the Keeper's watch. The psalm was sung while walking. It still works best that way \u2014 carried into the actual journey, not just admired from the trailhead." }
      ],
      takeaway: "Psalm 121 is travel insurance of a different kind: not a smooth road, but an unsleeping Keeper \u2014 named six times in eight verses \u2014 who made the mountains you're staring at and watches your going out and coming in, now and forever.",
      reflection: "What \u2018mountain\u2019 are you currently staring at \u2014 and have you answered your own \u2018where does my help come from\u2019 out loud yet, the way the psalmist did?" },
    "Proverbs": { focus: "Proverbs 1:1\u20137", title: "What a proverb is for",
      sections: [
        { h: "\u201cFor gaining wisdom and instruction\u201d", b: "The book opens with its own purpose statement \u2014 rare in Scripture. These sayings exist \u2018for gaining wisdom,\u2019 for \u2018doing what is right and just and fair,\u2019 for giving \u2018prudence to the simple, knowledge and discretion to the young.\u2019 Wisdom in Proverbs is not trivia or cleverness; the Hebrew chokmah means skill \u2014 the same word used for master craftsmen. This is a book for getting skilled at being alive." },
        { h: "\u201cLet the wise listen and add to their learning\u201d", b: "Verse 5 quietly demolishes the idea that wisdom graduates: \u2018let the wise listen and add to their learning.\u2019 The already-wise are still students; the mark of a fool later in the book is precisely that he's done listening. Proverbs assumes lifelong intake \u2014 which is why one a day, for life, honors the book's design better than binge-reading it ever could." },
        { h: "\u201cFor understanding proverbs and parables\u201d", b: "The book even teaches you how to read it: proverbs, parables, \u2018sayings and riddles of the wise.\u2019 A proverb is compressed \u2014 a truth folded small enough to carry, designed to be unfolded by a lived day. That's why racing through thirty proverbs teaches almost nothing while sitting with one teaches plenty: the meaning isn't only in the words but in the collisions between the words and your actual Tuesday. Riddles reward the patient." },
        { h: "\u201cThe fear of the LORD is the beginning of knowledge\u201d", b: "Verse 7 lays the cornerstone the whole book builds on \u2014 and note the contrast that completes it: \u2018but fools despise wisdom and instruction.\u2019 The fool in Proverbs isn't unintelligent; he's unteachable \u2014 the person who despises correction. Two postures, two trajectories, from the very first page: reverence that keeps learning, or self-sufficiency that has heard enough. Every proverb after this one lands differently depending on which posture reads it." }
      ],
      takeaway: "Proverbs announces itself as a skill book \u2014 wisdom as craftsmanship for living \u2014 built from compressed sayings designed to be unfolded one lived day at a time, by readers who never stop being students. Its foundation and filter is the fear of the LORD; its only disqualification is being done listening.",
      reflection: "The fool in Proverbs isn't stupid \u2014 he's unteachable. On a scale of honest, how teachable are you right now: when were you last corrected, and what did you do with it?" },
    "Ecclesiastes": { focus: "Ecclesiastes 3:1\u201314", title: "A time for everything",
      sections: [
        { h: "Fourteen pairs, and none of them optional", b: "Read the list slowly and notice what's in it: not just planting and healing and dancing, but uprooting, killing, tearing down, weeping, mourning, hating, war. Scripture refuses a version of life containing only the seasons we'd choose. Naming the hard ones as having their time is not endorsement \u2014 it's honesty. Half of what the poem lists, nobody puts on a calendar; all of it arrives anyway." },
        { h: "\u201cA season for every activity under the heavens\u201d", b: "The book's usual phrase is \u2018under the sun\u2019 \u2014 life examined from ground level. Here it shifts to \u2018under the heavens,\u2019 a small change with a large view: these seasons aren't random weather but ordered time. That doesn't explain any particular season you're in. It does say the calendar has an Author, which is different from saying it has an explanation you'll receive." },
        { h: "\u201cHe has made everything beautiful in its time\u201d", b: "Note the qualifier: in its time. Beauty isn't claimed for every moment as you're living it \u2014 it's claimed for the whole, seen from a vantage point you don't currently occupy. Much of what looks shapeless up close is legible later, and some of it won't be legible in this life at all. The verse asks for patience with a picture still being assembled." },
        { h: "\u201cHe has also set eternity in the human heart\u201d", b: "Here is the sentence that explains the entire book. The Teacher has spent chapters proving nothing under the sun satisfies \u2014 and now says why: we've been given a sense of forever, installed in creatures who live inside time. That's the mismatch behind every flat feeling after a goal is reached. He adds honestly that we \u2018cannot fathom what God has done from beginning to end\u2019 \u2014 the ache comes with a limit on our sight, and both are by design." }
      ],
      takeaway: "The seasons poem doesn't promise only good seasons \u2014 it names the ones nobody schedules and places all of them under God's ordering. And 3:11 explains the restlessness the whole book documents: eternity set in hearts that live inside time, which is why nothing temporary ever fits.",
      reflection: "Which season are you actually in right now \u2014 planting, uprooting, weeping, mending? And what would change if you stopped fighting the season and started living inside it?" },
    "Song of Solomon": { focus: "Song of Solomon 8:6\u20137", title: "A seal upon your heart",
      sections: [
        { h: "\u201cPlace me like a seal over your heart\u201d", b: "A seal in the ancient world was pressed into wax or clay to mark ownership, authorship, and unbreakable claim \u2014 the equivalent of a signature and a lock together. She's not asking to be admired; she's asking to be the permanent mark on him, over his heart (affection) and on his arm (strength and action). Covenant love in one image: named, claimed, and unremovable." },
        { h: "\u201cLove is as strong as death\u201d", b: "In the ancient world nothing was stronger than death; it took everyone and released no one. To say love matches it is to place love in the only weight class that matters. The parallel line \u2014 \u2018its jealousy unyielding as the grave\u2019 \u2014 uses jealousy in its old, good sense: the refusal to share what belongs exclusively to you. This is not possessiveness; it's fidelity with a spine." },
        { h: "\u201cMany waters cannot quench love\u201d", b: "Fire and flood in one verse: love burns like a blazing flame, and rivers cannot sweep it away. Anyone who has watched a marriage survive a bad year knows what's being claimed \u2014 real love isn't a candle that weather blows out. Notice, too, that the Song has spent seven chapters showing this love being tended, spoken, and delighted in. The fire that survives floods is one someone kept feeding." },
        { h: "\u201cIt would be utterly scorned\u201d", b: "The Song ends its great passage on economics: if a man offered all the wealth of his house for love, the offer would be scorned \u2014 not declined politely, scorned, because it misunderstands the category. Love cannot be purchased, only given and received. In a culture that markets nearly every relationship, this verse is a hard stop: the best thing available to a human being is not for sale at any figure." }
      ],
      takeaway: "The Song's climax asks for permanence (a seal), claims love matches death in strength, insists floodwater cannot quench it, and declares it unpurchasable at any price. It's the highest description of covenant love in Scripture \u2014 and it comes at the end of a book that spent seven chapters showing that love being tended out loud.",
      reflection: "Is the love in your closest relationships being tended \u2014 spoken, specific, delighted in \u2014 or merely assumed? What's one thing you could say this week that you've been leaving unsaid?" },
    "Isaiah": { focus: "Isaiah 53", title: "The suffering servant",
      sections: [
        { h: "\u201cHe had no beauty or majesty to attract us\u201d", b: "The chapter opens by removing every expectation of grandeur: nothing in his appearance would draw a crowd, and he was \u2018despised and rejected,\u2019 familiar with pain, someone people looked away from. Whatever deliverance was coming, it would not arrive impressive. That alone reversed what Israel expected, and it's still the hardest part of the picture to accept: God's rescue looked, at ground level, like a failure." },
        { h: "\u201cWe considered him punished by God\u201d", b: "Verse 4 records the crowd's original reading of the scene \u2014 that his suffering was deserved, evidence of divine displeasure. They were exactly wrong, and their error is the same one Job's friends made: assuming suffering always testifies to guilt. The chapter's whole force depends on this misreading being corrected: he was suffering, and it wasn't for him." },
        { h: "\u201cPierced for our transgressions\u201d", b: "Now the pronouns do the work. Read verses 4\u20136 counting them: our pain, our suffering, our transgressions, our iniquities, our peace, our healing \u2014 against his piercing, his crushing, his punishment, his wounds. That exchange is the center of the chapter and, Christians would say, of the entire Bible. And the confession underneath it is universal: \u2018we all, like sheep, have gone astray, each of us has turned to our own way.\u2019 Not most of us. All." },
        { h: "\u201cHe was assigned a grave with the wicked\u201d", b: "The chapter tracks the servant past death \u2014 silent before his accusers, buried with the wicked though he had done no violence \u2014 and then, impossibly, forward again: he will \u2018see the light of life and be satisfied,\u2019 and \u2018justify many.\u2019 Written centuries before Rome invented crucifixion, it's the passage Philip used to explain Jesus to an Ethiopian official in Acts 8, and the one Peter quotes when writing about the cross." }
      ],
      takeaway: "Isaiah 53 is the Old Testament's clearest statement that restoration would be costly and that someone else would pay it. The pronouns carry the theology: our transgressions, his wounds. And its picture of rescue is deliberately unimpressive \u2014 no majesty, no crowd, a man people looked away from.",
      reflection: "Read verses 4\u20136 again slowly, replacing \u2018our\u2019 and \u2018we\u2019 with \u2018my\u2019 and \u2018I.\u2019 What happens in you when the chapter stops being general and becomes personal?" },
    "Jeremiah": { focus: "Jeremiah 29:1\u201314", title: "The letter to the exiles",
      sections: [
        { h: "A letter to people whose worst fear already happened", b: "This isn't advice to people bracing for trouble; it's a letter to people already inside it, deported, watching their old life recede. Jeremiah writes to captives in a foreign capital \u2014 and the first instruction isn't about deliverance at all. It's about groceries, houses, and gardens. God's word to people in a hard season starts with how to live in it, not how to escape it." },
        { h: "\u201cBuild houses... plant gardens... seek the peace of the city\u201d", b: "Every instruction assumes duration. You don't plant a garden for a short stay. And the hardest line is the last one: seek the peace and prosperity of Babylon \u2014 the city that conquered them \u2014 and pray for it, \u2018because if it prospers, you too will prosper.\u2019 That's more than resignation; it's an assignment to bless the place holding you. Waiting rooms, in Scripture, are still places you're responsible for." },
        { h: "\u201cSeventy years\u201d", b: "The number is the context everyone skips. Most who read this letter would die in Babylon; the promise was for their children. Notice what that does to verse 11: it stops being a promise of quick relief and becomes a claim about God's timeline running longer than a lifetime and still being good. Any honest reading has to hold both \u2014 the promise is real, and it was not fast." },
        { h: "\u201cPlans to give you hope and a future\u201d", b: "Read in place, the famous verse is sturdier than the coffee-mug version. God knows the plans; they're for welfare and not harm; they end in hope. And what follows is the part usually cut: \u2018you will call on me and come and pray to me, and I will listen. You will seek me and find me when you seek me with all your heart.\u2019 The promised future isn't primarily improved circumstances \u2014 it's being found by God, from the middle of exile." }
      ],
      takeaway: "Jeremiah 29:11 was written to people facing seventy years of exile and told to build houses in the meantime. Read in context it promises something better than fast relief: good purposes that outlast a long middle, and a God who is found by those who seek Him from inside it.",
      reflection: "What's the \u2018Babylon\u2019 you're currently in \u2014 a season you didn't choose and can't leave yet? What would it look like to plant a garden there instead of holding your breath?" },
    "Lamentations": { focus: "Lamentations 3:19\u201333", title: "New every morning",
      sections: [
        { h: "\u201cI remember my affliction and my wandering\u201d", b: "The passage doesn't begin with hope; it begins with an inventory of misery, and verse 20 says plainly, \u2018my soul is downcast within me.\u2019 The verses just before describe a man who says his splendor is gone and his hope has perished. That's the ground the famous lines grow from \u2014 not a good day, not a resolved situation, but the bottom." },
        { h: "\u201cYet this I call to mind and therefore I have hope\u201d", b: "Here is the mechanism, stated in the open. He doesn't wait to feel hopeful; he deliberately calls something to mind, and hope follows the recall. That order is worth copying exactly, because feelings rarely lead in a season like this. What we rehearse determines what we can hope; he chooses his material on purpose." },
        { h: "\u201cHis compassions never fail. They are new every morning\u201d", b: "The promise is sized for exactly this kind of season: not a single dramatic rescue but a fresh supply daily. Yesterday's failures don't carry over into today's allotment, and tomorrow's mercy hasn't been spent in advance. \u2018Great is your faithfulness\u2019 \u2014 the line that became a hymn \u2014 is said here about God's reliability, not the speaker's, which is the only reason it's sayable at all." },
        { h: "\u201cThe LORD is my portion; therefore I will wait\u201d", b: "\u2018Portion\u2019 is inheritance language \u2014 what you're allotted, what remains yours when other things are gone. The city is rubble; the temple is ash; and he claims God Himself as the remaining inheritance. Then the section closes with an astonishing statement in the circumstances: God \u2018does not willingly bring affliction or grief.\u2019 Even here, he refuses to conclude that God enjoys this." }
      ],
      takeaway: "The most quoted lines in Lamentations were written by a man surrounded by rubble who said two verses earlier that his hope had perished. Hope arrives by deliberate recall, not by feeling \u2014 and the mercy promised is a daily supply, renewed each morning, sized for long seasons.",
      reflection: "What true thing about God could you deliberately \u2018call to mind\u2019 tomorrow morning, before the day's feelings arrive? Consider writing it somewhere you'll see it when you wake." },
    "Daniel": { focus: "Daniel 6:1\u201323", title: "Windows toward Jerusalem",
      sections: [
        { h: "A record with nothing in it", b: "Daniel is in his eighties, about to be set over the whole kingdom, and his rivals launch an investigation. The result is one of Scripture's quiet honors: \u2018they could find no corruption in him, because he was trustworthy and neither corrupt nor negligent.\u2019 They conclude the only line of attack is his God. Decades in a pagan government, with real power and money moving through his hands, and the file is clean." },
        { h: "The trap, dressed as an honor", b: "The scheme flatters the king into signing a thirty-day ban on praying to anyone but him \u2014 irrevocable under Persian law. Notice how it works: nobody argues theology, they simply make faithfulness illegal for a month. Thirty days is short enough to seem survivable, which is the temptation's real edge. Surely one month of discretion wouldn't matter." },
        { h: "\u201cJust as he had done before\u201d", b: "Daniel goes home, opens the windows toward Jerusalem, and kneels three times a day \u2014 and the text's most important phrase is that he did it exactly as he always had. He doesn't escalate into protest or shrink into secrecy. The crisis didn't produce a decision; it revealed a habit built over decades. What you'll do under pressure is mostly settled by what you were already doing without it." },
        { h: "The king who couldn't sleep", b: "The story's most human detail is Darius \u2014 trapped by his own decree, fasting all night, refusing entertainment, and running to the den at first light calling out hopefully. The man with absolute power is helpless, and the man in the pit is safe. Daniel's answer in the morning credits God and adds a striking line: \u2018I was found innocent in his sight,\u2019 and also, before the king, \u2018I have never done any wrong.\u2019 The lions' mouths were shut; the record was already clean." }
      ],
      takeaway: "Daniel's rivals could find nothing against him except his faithfulness, and when prayer was outlawed he prayed exactly as he always had. The chapter's argument is that character under pressure is mostly a habit already formed \u2014 the windows were open long before the decree.",
      reflection: "If someone investigated your last ten years looking for something to use, what would they find \u2014 and what daily habit of yours would still be running if it suddenly became costly?" },

    "Ezekiel": { focus: "Ezekiel 37:1\u201314", title: "Can these bones live?",
      sections: [
        { h: "\u201cThey were very dry\u201d", b: "God doesn't set Ezekiel down in a hospital or a graveyard of the recently buried \u2014 the valley is full of bones long past any natural hope, bleached and scattered. The detail is deliberate. Whatever this vision is going to claim, it can't be mistaken for a hard case that might have recovered on its own. God leads him back and forth among them first, making sure he sees the scale before He asks anything." },
        { h: "\u201cSon of man, can these bones live?\u201d", b: "It's a genuine question with an obvious answer, and Ezekiel gives the only honest reply available: \u2018Sovereign LORD, you alone know.\u2019 He won't say yes, because the evidence says no. He won't say no, because of who's asking. That sentence is one of the most useful models of faith in Scripture \u2014 refusing both denial and despair, and leaving the outcome with God." },
        { h: "Rattling, tendons, flesh \u2014 and no breath", b: "The reassembly is described in stages, and then the vision stops short: bodies complete, standing, and lifeless. \u2018But there was no breath in them.\u2019 It's a crucial pause. Structure isn't life; a restored appearance isn't a restored person. Only when Ezekiel prophesies to the breath \u2014 the same Hebrew word as spirit, and the same word from Genesis 2 \u2014 do they stand up as a vast army." },
        { h: "\u201cOur hope is gone; we are cut off\u201d", b: "God finally names what the bones represent, quoting the exiles' own words back to them. This vision was never about a battlefield; it was about people who had concluded their story was over. And notice the promise attached: \u2018I will put my Spirit in you and you will live, and I will settle you in your own land.\u2019 The resurrection of hope and the restoration of a future arrive together, and both are God's doing." }
      ],
      takeaway: "The dry bones vision addresses the death of hope, not just the death of bodies. Its honest question \u2014 can these bones live? \u2014 gets an honest answer: you alone know. And the answer God gives is a two-stage resurrection: reassembly, then breath, because structure alone isn't life.",
      reflection: "What in your life has been dead long enough that you stopped praying about it? What would it look like to bring that specific thing back to God with Ezekiel's answer: \u2018Sovereign LORD, you alone know\u2019?" },
    "Hosea": { focus: "Hosea 11:1\u201311", title: "How can I give you up?",
      sections: [
        { h: "\u201cWhen Israel was a child, I loved him\u201d", b: "God begins not with the charges but with the memory \u2014 a child loved, called out of Egypt, taught to walk. The tenderness is startling in a book full of confrontation: \u2018it was I who taught Ephraim to walk, taking them by the arms.\u2019 Whatever comes next in the chapter, it comes from someone with a history of stooping down to help." },
        { h: "\u201cI bent down to feed them\u201d", b: "The image is a parent lowering themselves to a toddler's height. Alongside it: \u2018I led them with cords of human kindness, with ties of love.\u2019 Not chains \u2014 the cords are kindness itself. This is God describing His own methods, and they are gentler than most people assume: leading rather than dragging, feeding rather than demanding." },
        { h: "\u201cThe more I called them, the further they went\u201d", b: "Then the grief. Every kindness listed was met with turning away \u2014 sacrificing to Baals, burning incense to images. The chapter doesn't minimize this; the judgment described is real and deserved. What makes the passage extraordinary is that it presents the betrayal in full and then refuses to end there." },
        { h: "\u201cMy heart is changed within me\u201d", b: "At the exact point where the sentence should fall, God says something that shouldn't be possible from a judge: \u2018How can I give you up, Ephraim? How can I hand you over?... My heart is changed within me; all my compassion is aroused.\u2019 Nothing in Israel changed to produce this \u2014 the turn happens inside God. And the reason given is His own nature: \u2018For I am God, and not a man \u2014 the Holy One among you.\u2019 Human justice would have finished the sentence. Holiness, it turns out, includes this." }
      ],
      takeaway: "Hosea 11 shows God remembering a child He taught to walk, naming the betrayal honestly, and then \u2014 at the exact moment judgment is due \u2014 revealing a heart that will not give them up. The turn comes from God's own nature, not from anything Israel did.",
      reflection: "Where have you assumed God's patience with you had finally run out? What would it mean to read \u2018how can I give you up?\u2019 as spoken over your own name?" },
    "Joel": { focus: "Joel 2:12\u201332", title: "Even now, return to me",
      sections: [
        { h: "\u201cEven now\u201d", b: "Two words carrying the weight of the whole book. The land has been stripped by successive waves of locusts; the damage is done and irreversible by any human means. And into that, God says \u2018even now\u2019 \u2014 after the failure, after the loss, after the point where returning seems pointless. The invitation is not extended before the disaster as a warning. It's extended after, as an offer." },
        { h: "\u201cRend your heart and not your garments\u201d", b: "Tearing your robe was the standard public sign of grief and repentance \u2014 visible, immediate, and cheap. God asks for the thing the sign was invented to represent. It's a line worth holding up against modern equivalents: posting, confessing, apologizing publicly. None of those are wrong; all of them are easier than the inward turn they're supposed to reflect." },
        { h: "\u201cGracious and compassionate, slow to anger\u201d", b: "The reason given for returning isn't fear of worse consequences \u2014 it's God's character, quoted from Exodus 34. He is gracious, compassionate, slow to anger, abounding in love, and one who relents from sending calamity. Repentance in Scripture is almost always motivated this way: not by how bad the punishment will be but by how good the One is you're returning to." },
        { h: "\u201cI will repay you for the years the locusts have eaten\u201d", b: "This is the promise that makes Joel unforgettable. Not just forgiveness of what was done but restoration of what was lost \u2014 the years themselves, addressed. It doesn't rewind the calendar; the locust years still happened. It promises an outcome so full that the loss is answered. And it's followed immediately by the outpouring of the Spirit on all people \u2014 the restoration widening from a nation's fields to everyone who calls on His name." }
      ],
      takeaway: "Joel's invitation comes after the devastation, not before it: \u2018even now, return to me.\u2019 It asks for the inward turn rather than the visible sign, motivates it by God's character rather than fear, and attaches a promise that addresses lost years themselves.",
      reflection: "What \u2018eaten years\u2019 would you name if you were honest \u2014 a season lost to something? Can you bring that specific loss to God as something He offers to repay rather than merely forgive?" },
    "Amos": { focus: "Amos 5:18\u201324", title: "Let justice roll down",
      sections: [
        { h: "\u201cWoe to you who long for the day of the LORD\u201d", b: "Amos begins by dismantling their confidence. They looked forward to God's day as vindication \u2014 and he tells them it will be darkness, not light, \u2018as though a man fled from a lion only to meet a bear.\u2019 The assumption that God's arrival would automatically be good news for them was exactly what needed breaking. Being religious and being on God's side were not the same thing." },
        { h: "\u201cI hate, I despise your religious festivals\u201d", b: "The strongest rejection of worship anywhere in Scripture, and it's important to see what's being rejected. Not the wrong festivals \u2014 the right ones, correctly observed. Not idols \u2014 offerings to the true God. The problem was the society producing them: an economy running on the backs of the poor while the worship calendar ran perfectly. God calls the songs noise and asks them to stop." },
        { h: "\u201cBut let justice roll on like a river\u201d", b: "The alternative isn't better music or more sincerity \u2014 it's justice and righteousness, described with two deliberate images. A river, and a never-failing stream. In that climate, most watercourses were wadis: dramatic during the rainy season, bone dry the rest of the year. Occasional generosity is a wadi. God is asking for the kind that runs in August." },
        { h: "What this asks of ordinary people", b: "It would be easy to read this as a message for nations and leaders only, but Amos's charges were specific and local: rigged scales, bribed courts, the poor sold for a pair of sandals. The application scales down. Where do your purchases, your business practices, your vote, your silence, and your generosity actually land on the people with the least power? That's the question this passage exists to force." }
      ],
      takeaway: "Amos 5 rejects worship offered by an unjust society \u2014 the right festivals, correctly performed, called noise \u2014 and asks instead for justice that runs like a permanent river rather than a seasonal stream. Being religious and being on God's side were not the same thing.",
      reflection: "Is your justice a river or a wadi \u2014 continuous, or seasonal and event-based? Name one ongoing practice, not a one-time gift, that would move it toward being a stream that doesn't fail." },
    "Obadiah": { focus: "Obadiah 1:1\u201315", title: "The day of your brother",
      sections: [
        { h: "\u201cThe pride of your heart has deceived you\u201d", b: "Edom's capital was carved into cliffs \u2014 Petra's rock strongholds, reachable through a narrow gorge, effectively unassailable. That geography became theology: \u2018who can bring me down to the ground?\u2019 The verse names the mechanism precisely: pride deceives. It doesn't only make you unpleasant; it makes you unable to imagine your own fall, which is exactly the blindness that precedes one." },
        { h: "\u201cYou should not gloat over your brother\u201d", b: "The charge sheet is a list of things Edom did not do and one thing they did. They did not invade. They stood at the crossroads, watched Jerusalem burn, cheered, and then cut down fugitives trying to escape. Verse after verse repeats \u2018in the day of\u2019 \u2014 the day of his misfortune, his destruction, his trouble. God timestamps it. What you do on someone's worst day is recorded with the date attached." },
        { h: "Family makes it worse", b: "Edom descended from Esau; Israel from Jacob. Twins. The entire indictment is framed as a family betrayal \u2014 \u2018your brother Jacob\u2019 \u2014 which is why the language carries the heat it does. Scripture consistently treats harm done by insiders as heavier than the same harm from strangers, because proximity was supposed to mean protection." },
        { h: "\u201cAs you have done, it will be done to you\u201d", b: "The book's justice is exactly proportional: the ones who watched will be watched; the plunderers will be plundered. But it doesn't end in symmetry. The last verse turns outward and upward \u2014 \u2018and the kingdom will be the LORD's.\u2019 Even a book this short about a grudge this old ends by relocating the throne. The final word isn't Edom's fall; it's God's reign." }
      ],
      takeaway: "Obadiah gives an entire book to what a nation did while standing by: watching, gloating, and profiting on a brother's worst day. And it names pride's real danger \u2014 not arrogance but self-deception, the inability to imagine falling from your own safe heights.",
      reflection: "Whose hard season have you been watching from a safe distance? What would stepping in \u2014 practically, this week \u2014 actually look like?" },
    "Jonah": { focus: "Jonah 4", title: "The question at the end",
      sections: [
        { h: "\u201cIsn't this what I said when I was still at home?\u201d", b: "The confession that explains the whole book arrives in the last chapter. Jonah ran because he knew God was \u2018gracious and compassionate, slow to anger and abounding in love, a God who relents from sending calamity\u2019 \u2014 and he quotes God's own self-description from Exodus 34 as an accusation. His problem was never doubt about God's character. It was disagreement with it." },
        { h: "The prophet who wanted a front-row seat", b: "Jonah leaves the city and builds a shelter to the east, waiting to see what would happen \u2014 hoping the forty days weren't finished. The picture is remarkable: a man who has just witnessed the largest revival in Scripture, sitting outside the city sulking, hoping it gets destroyed. Success in ministry and sickness in the heart, occupying the same person on the same day." },
        { h: "The plant, the worm, and the wind", b: "God provides three things in quick succession \u2014 the same verb used for the fish. A plant for shade, which delights Jonah; a worm to kill it; a scorching wind. When the shade dies Jonah wants to die too. The setup is a trap of God's own careful construction, designed to surface what Jonah actually cares about and how little it takes to devastate him when it's removed." },
        { h: "\u201cShould I not have concern?\u201d", b: "God's closing argument is simple arithmetic: you cared about a plant you did not plant, that grew overnight and died overnight. Should I not care about a city of 120,000 people \u2014 and, He adds almost tenderly, \u2018also many animals\u2019? Then nothing. No reply from Jonah, no narration, no resolution. The book ends mid-question, which means the question is no longer aimed at Jonah. It's aimed at whoever is still reading." }
      ],
      takeaway: "Jonah's final chapter reveals he ran not from danger but from mercy \u2014 quoting God's own compassion as a complaint. The plant exposes his misplaced compassion, and the book ends on God's unanswered question, deliberately aimed past Jonah at the reader.",
      reflection: "Is there a person or group you would be quietly disappointed to see God bless? Sit with that honestly \u2014 and then read God's closing question again as if it were addressed to you." },
    "Micah": { focus: "Micah 6:1\u20138", title: "What does the LORD require?",
      sections: [
        { h: "A courtroom with mountains for a jury", b: "God opens a legal case and calls creation itself as witness: \u2018Stand up, plead my case before the mountains.\u2019 Then, remarkably, the plaintiff speaks first \u2014 not with charges but with a question: \u2018My people, what have I done to you? How have I burdened you? Answer me.\u2019 God submits Himself to cross-examination before making any accusation. The rehearsal that follows is a list of rescues, not demands." },
        { h: "The bidding war", b: "The people's response is to escalate: burnt offerings? Calves a year old? Thousands of rams? Ten thousand rivers of oil? My firstborn for my transgression? Each offer is more extravagant and more desperate than the last. It's the logic of a transaction \u2014 if God is displeased, raise the price. The final offer is horrifying, and it reveals the misunderstanding completely: they think the problem is that they haven't paid enough." },
        { h: "\u201cHe has shown you\u201d", b: "The answer begins by pointing out that this was never hidden: he has shown you, O mortal, what is good. No secret knowledge, no higher tier of spirituality. What follows is famously brief \u2014 three phrases where they expected a price list. Notice also the address: \u2018O mortal\u2019 (literally, \u2018O man\u2019) \u2014 this is aimed at human beings generally, not just Israel." },
        { h: "Justice, mercy, humility", b: "Three requirements, each doing distinct work. Act justly \u2014 behavior toward others, active and public. Love mercy \u2014 not merely practicing kindness but wanting to, an affection rather than a duty. And walk humbly with your God \u2014 a posture, ongoing, relational, with \u2018walk\u2019 implying a whole direction of life rather than a moment. Together they cover what you do, what you love, and who you're with." }
      ],
      takeaway: "Micah 6 answers a bidding war with a definition. The people offered escalating sacrifices assuming God was expensive; God answered with three things already shown: act justly, love mercy, walk humbly. Simple enough to memorize in a minute, demanding enough for a lifetime.",
      reflection: "Of the three \u2014 doing justice, loving mercy, walking humbly \u2014 which is thinnest in your life right now? What is one concrete change this week that would strengthen exactly that one?" },
    "Nahum": { focus: "Nahum 1:1\u201315", title: "Slow to anger, and not indifferent",
      sections: [
        { h: "Two truths in one verse", b: "\u2018The LORD is slow to anger but great in power; the LORD will not leave the guilty unpunished.\u2019 Most people hold one of these and quietly drop the other \u2014 either a God so patient He never acts, or one so severe He never waits. Nahum insists on both in a single sentence. Patience that never became justice would not be kindness to Assyria's victims; justice without patience would have ended the world long ago." },
        { h: "Written from underneath", b: "Assyria flayed prisoners, deported whole populations, and ran its empire on terror for over a century. This book was written to the people living under that. Read from a comfortable chair, the language sounds harsh; read from underneath the boot, it is the first good news in generations \u2014 the announcement that the bully does not last forever, and that Someone with power has noticed." },
        { h: "\u201cThe LORD is good, a refuge in times of trouble\u201d", b: "Verse 7 sits in the middle of the judgment like a door left open: the LORD is good, a refuge in times of trouble, and He cares for those who trust in Him \u2014 literally, who take shelter in Him. The same chapter announcing an empire's collapse offers personal shelter to anyone who runs to Him. Judgment and refuge aren't opposite messages here; they're the same message heard from two different positions." },
        { h: "A century after Jonah", b: "Nineveh had repented under Jonah \u2014 the whole city, from the king down. A hundred years later the same city is back to its brutality, which is this book's sober footnote: mercy received in one generation is not automatically inherited by the next. What God did in your life has to be told, taught, and handed on deliberately. Nothing spiritual passes down by default." }
      ],
      takeaway: "Nahum holds patience and justice together in one sentence, announces an empire's end as good news to its victims, and plants a promise of personal refuge right inside the judgment. Its footnote is sobering: Nineveh's earlier repentance wasn't inherited by the generation that followed.",
      reflection: "What has God done in your life that you've assumed the people after you will simply absorb? What would it take to actually tell them?" },
    "Zephaniah": { focus: "Zephaniah 3:14\u201320", title: "He will rejoice over you with singing",
      sections: [
        { h: "Where this comes in the book", b: "Zephaniah opened with one of the most sweeping judgments in Scripture \u2014 \u2018I will sweep away everything from the face of the earth.\u2019 That makes the ending almost disorienting. This tenderness isn't naivety about sin; it's what's left standing after sin has been dealt with honestly. Joy on the near side of confrontation is denial. Joy on the far side of it is the gospel." },
        { h: "\u201cThe LORD your God is with you\u201d", b: "The verse begins with presence, and the title attached is startling: \u2018the Mighty Warrior who saves.\u2019 Strength and tenderness in the same breath \u2014 the One who fights for you is the One who delights in you. Neither cancels the other, and most people's working picture of God badly needs both installed at once." },
        { h: "\u201cHe will take great delight in you\u201d", b: "Delight, not tolerance. The Hebrew is the language of rejoicing over something you're genuinely glad about. Then: \u2018in his love he will no longer rebuke you\u2019 \u2014 some translations read \u2018he will quiet you with his love,\u2019 the image of a parent settling a distressed child. The confrontation is finished, and what remains is a love that calms rather than accuses." },
        { h: "\u201cHe will rejoice over you with singing\u201d", b: "This is one of very few places in the entire Bible where God Himself is described as singing, and the object of the song is His people. Most believers can imagine God putting up with them; many can imagine Him forgiving them. Almost nobody pictures Him singing over them. The verse is worth reading out loud with your own name in it, slowly, until the strangeness of it actually lands." }
      ],
      takeaway: "Zephaniah ends with God present, delighting, quieting with His love, and singing over His people \u2014 and it arrives after two chapters of sweeping judgment, which is exactly what makes it credible rather than sentimental.",
      reflection: "Which picture of God do you carry around most \u2014 tolerating you, forgiving you, or delighting in you? Read 3:17 aloud with your name in it and notice what resists." },
    "Haggai": { focus: "Haggai 1:1\u201315", title: "Give careful thought to your ways",
      sections: [
        { h: "\u201cThe time has not yet come\u201d", b: "The people's excuse opens the book, and it sounds reasonable: the time hasn't come to rebuild the LORD's house. Not a refusal \u2014 a deferral. Sixteen years of deferral. That's how most important things die: not by a decision against them, but through a series of defensible postponements, each of which made sense on the day it was made." },
        { h: "\u201cPaneled houses\u201d", b: "God's reply is a single devastating comparison: is it a time for you to live in paneled houses while this house remains a ruin? Paneled meant finished, decorated, complete. Their own projects reached completion; His didn't. The question isn't whether they were allowed houses \u2014 it's what got finished and what stayed a ruin, which is a fair audit of anyone's calendar and bank statement." },
        { h: "\u201cA purse with holes in it\u201d", b: "Then the symptoms: planting much and harvesting little, eating without being full, drinking without being satisfied, earning wages and putting them in a purse with holes. This is the felt experience of misordered priorities \u2014 not dramatic collapse but a persistent sense that effort isn't converting into anything that stays. \u2018Give careful thought to your ways\u2019 repeats through this short book. It's an invitation to audit, not a condemnation." },
        { h: "\u201cThe LORD stirred up their spirit\u201d", b: "And then something rare in the prophets: the people listened and obeyed, within about three weeks. Notice the sequence \u2014 God spoke, they obeyed, and then \u2018the LORD stirred up the spirit\u2019 of the governor, the priest, and the whole remnant. The motivation followed the obedience rather than preceding it. Waiting to feel stirred before starting gets the order backwards." }
      ],
      takeaway: "Haggai diagnoses how good intentions actually die \u2014 not by decision but by sixteen years of defensible postponement \u2014 names the symptom (effort that never converts into anything lasting), and shows motivation arriving after obedience rather than before it.",
      reflection: "What have you postponed long enough that the postponing has quietly become the decision? What's the smallest possible first step, and could you take it this week?" },
    "Zechariah": { focus: "Zechariah 4:1\u201310", title: "Not by might, nor by power",
      sections: [
        { h: "A lamp that supplies itself", b: "Zechariah sees a golden lampstand with a bowl on top, seven lamps, and two olive trees beside it feeding oil directly into the bowl. In the temple, priests refilled the lamps by hand every day. This lampstand has no priest \u2014 the oil arrives from a living source without anyone carrying it. Before a word of explanation is given, the picture has already said something about where the work's fuel comes from." },
        { h: "The man it was spoken to", b: "The word goes to Zerubbabel, governor of a small, poor, discouraged remnant trying to rebuild a temple with a fraction of Solomon's resources and hostile neighbors nearby. This isn't a slogan for people with momentum. It's addressed to someone staring at a job clearly beyond his means \u2014 which is exactly who needs it." },
        { h: "\u201cNot by might nor by power, but by my Spirit\u201d", b: "The two Hebrew words cover armies and individual strength \u2014 collective resources and personal capability. Both are ruled out as the source. Note carefully what isn't ruled out: work. Zerubbabel still had to lay stones. The verse doesn't remove human effort; it names what the effort actually runs on, which changes how both failure and success get read." },
        { h: "\u201cWho dares despise the day of small things?\u201d", b: "Verse 10 answers the unspoken embarrassment: the foundation looked pathetic, and everyone knew it. God's response isn't a promise that it will look impressive soon, but a challenge to the contempt itself \u2014 and the added detail that \u2018the eyes of the LORD range throughout the earth\u2019 and rejoice to see the plumb line in Zerubbabel's hand. God is watching the small beginning with pleasure, not embarrassment." }
      ],
      takeaway: "Zechariah's lampstand is fed by a source it doesn't generate, and the word attached is for a governor whose project was clearly beyond his means: not by might nor by power, but by my Spirit \u2014 with a direct challenge to anyone despising a small start.",
      reflection: "What are you currently attempting mostly on your own strength \u2014 and what beginning have you been quietly embarrassed by? What changes if God is watching that small start with pleasure?" },
    "Habakkuk": { focus: "Habakkuk 3:16\u201319", title: "Though the fig tree does not bud",
      sections: [
        { h: "\u201cMy heart pounded, my lips quivered\u201d", b: "Before the famous declaration comes an admission most readers skip: Habakkuk is physically shaken. His heart pounds, his lips quiver, decay creeps into his bones, his legs tremble. This is not a man who has stopped feeling the threat. The faith at the end of this book is not calm because the fear went away \u2014 it's a decision made by someone still trembling." },
        { h: "\u201cYet I will wait patiently\u201d", b: "The first \u2018yet\u2019 comes before the famous one: yet I will wait patiently for the day of calamity to come on the nation invading us. He isn't promised rescue from the invasion \u2014 he's promised that justice arrives eventually, on a timeline he won't control. Waiting patiently is what faith looks like between the promise and the fulfillment, and it's harder than either." },
        { h: "The inventory of failure", b: "Then the list, and its thoroughness is the point: no buds on the fig tree, no grapes on the vines, the olive crop failed, the fields producing no food, no sheep in the pen, no cattle in the stalls. In an agricultural economy this is total collapse \u2014 no income, no food, no livestock, no seed for next year. He names each one specifically. Nothing is minimized before the turn." },
        { h: "\u201cYet I will rejoice in the LORD\u201d", b: "And then the sentence that has carried people through unemployment, illness, and grief for twenty-five centuries. Joy is not produced by the circumstances \u2014 every circumstance just got listed as a failure. It's located elsewhere: \u2018in the LORD... in God my Savior.\u2019 The closing image is a deer on high places: sure-footed on terrain that should be impossible. Not removed from the heights \u2014 enabled to walk on them." }
      ],
      takeaway: "Habakkuk ends with everything unresolved and everything named honestly \u2014 six specific failures listed before the word \u2018yet.\u2019 The joy is anchored in God rather than conditions, which is the only reason it can survive conditions like these.",
      reflection: "Write your own version: list the things in your life that genuinely aren't budding right now, specifically and honestly. Then write your \u2018yet\u2019 sentence underneath, and mean it." },
    "Malachi": { focus: "Malachi 3:13\u20134:6", title: "The scroll of remembrance",
      sections: [
        { h: "\u201cIt is futile to serve God\u201d", b: "The final dispute is the bleakest. People are saying it out loud: what did we gain by keeping His requirements? The arrogant prosper, evildoers succeed, and those who challenge God get away with it. This isn't a complaint from outsiders \u2014 it's from the congregation, and it names the quiet cynicism that grows in anyone who has been faithful for a long time without visible return." },
        { h: "\u201cThen those who feared the LORD talked with each other\u201d", b: "The response comes from an unnamed minority who did the simplest possible thing: they talked to each other. No program, no reform movement \u2014 just people who still feared God finding each other and speaking. In a cynical era, that conversation was enough to be worth recording. It's a quiet argument for the people you surround yourself with when belief is costly." },
        { h: "\u201cA scroll of remembrance was written\u201d", b: "God listens, and has it written down. The image is a royal chronicle \u2014 the same kind of record that saved Mordecai in Esther. Faithfulness that changes nothing visible, in a season where it seems futile, is nonetheless entered into a permanent record. \u2018They will be mine,\u2019 God says, \u2018my treasured possession... I will spare them, just as a father has compassion.\u2019" },
        { h: "\u201cThe sun of righteousness will rise\u201d", b: "The Old Testament's last promise is a sunrise with healing in its rays, and then a note about a coming messenger like Elijah. And then \u2014 nothing. Four hundred years of prophetic silence, during which faithful people kept the scroll's kind of faithfulness with no new word at all. That gap is part of the story: the dawn was promised, and the waiting was long, and the people who kept trusting through it are the ones God said He was writing down." }
      ],
      takeaway: "The Old Testament ends by recording the people who kept fearing God in an era when it looked futile \u2014 a scroll of remembrance for faithfulness that changed nothing visible \u2014 and then promises sunrise with healing before four hundred years of silence.",
      reflection: "Where have you been faithful for a long time without visible return, and started to wonder if it's futile? Who are the people you could talk with about it \u2014 and have you told them?" },
    "1 Chronicles": { focus: "1 Chronicles 29:10\u201319", title: "Who am I, that we could give this",
      sections: [
        { h: "A king who prepared and wouldn't finish", b: "David spent his final years amassing gold, silver, bronze, iron, and cut stone \u2014 by his own account, \u2018with great pains\u2019 \u2014 for a temple he had already been told he would never enter. There's no bitterness in the text about this. He simply kept working, because the work mattered more than getting to see it done." },
        { h: "The people gave willingly", b: "When David called for offerings toward the project, the response wasn't grudging \u2014 leaders and ordinary people gave gold, silver, bronze, iron, and precious stones, and Scripture says they \u2018gave willingly\u2019 and \u2018rejoiced.\u2019 Generosity offered freely, without pressure, tends to produce joy in the giver rather than resentment." },
        { h: "\u201cWho am I, and who are my people?\u201d", b: "David's prayer over the gifts refuses to let anyone \u2014 himself included \u2014 take credit. \u2018Everything comes from you, and we have given you only what comes from your hand.\u2019 Even the resources given back to God were never truly the people's own possession to begin with; they were simply passing through borrowed hands to their rightful owner." },
        { h: "A prayer for the next generation", b: "David closes by praying not for himself but for Solomon and the people who would come after him: give my son Solomon wholehearted devotion, and keep this desire in the hearts of your people forever. His final recorded prayer looks entirely forward, toward a temple and a generation he wouldn't live to see." }
      ],
      takeaway: "David poured decades of effort into a temple he'd never enter, and when the people responded with lavish generosity, his prayer refused to let anyone claim credit \u2014 everything given was only ever a return of what already belonged to God.",
      reflection: "What are you currently investing in that you may never see completed \u2014 and can you offer that work, like David did, without needing to witness the finish?" },
    "2 Chronicles": { focus: "2 Chronicles 7:11\u201322", title: "If my people",
      sections: [
        { h: "The vision comes after the dedication", b: "God appears to Solomon at night, after the fire has fallen and the glory has filled the temple \u2014 after the celebration, not during it. Sometimes the clearest word from God comes in the quiet that follows a mountaintop moment, not in the moment itself." },
        { h: "A warning built into the promise", b: "God tells Solomon plainly: if the people turn to other gods, this magnificent temple will become a byword, an object of ridicule to everyone who passes it. The very thing built to honor God's presence could become evidence of its absence. Nothing about the building itself guaranteed anything." },
        { h: "Four verbs, then three gifts", b: "\u2018If my people\u2026 will humble themselves and pray and seek my face and turn from their wicked ways\u2019 \u2014 four active, costly postures. Only then: \u2018I will hear\u2026 forgive\u2026 heal.\u2019 The order matters. God doesn't begin by overlooking what's wrong; he begins by inviting an honest turn, and everything else follows from there." },
        { h: "Called by my name", b: "The promise is addressed specifically to \u2018my people, who are called by my name\u2019 \u2014 not a general civic principle available to any nation on any terms, but a covenant word to a covenant people. That specificity doesn't shrink its power; it grounds it. This is a relationship being described, not a formula being handed out." }
      ],
      takeaway: "God's promise to Solomon came with a warning built in: even the temple itself offered no guarantee. Restoration always follows the same order in Scripture \u2014 humility, prayer, seeking, and turning, before hearing, forgiveness, and healing.",
      reflection: "Of the four postures named \u2014 humbling yourself, praying, seeking God's face, turning from wrong \u2014 which one have you been skipping while still hoping for the healing?" },

    "Matthew": { focus: "Matthew 5:1\u201312", title: "The Beatitudes",
      sections: [
        { h: "Announcements, not requirements", b: "Read them again and notice the grammar: Jesus doesn't say \u2018become poor in spirit and then you'll be blessed.\u2019 He says blessed ARE they. These are declarations about who already has God's favor, spoken over a crowd of ordinary Galileans \u2014 not entry requirements to be achieved. That order matters, because the rest of the sermon is impossibly demanding, and it rests on this foundation of grace announced first." },
        { h: "\u201cPoor in spirit\u201d \u2014 the doorway", b: "The first beatitude is the entry point to everything else. The word describes destitution, not modest need \u2014 someone with nothing to offer, no currency for the transaction. And theirs is the kingdom, present tense, already. Everyone who has tried to be good enough for God and quietly failed is standing in exactly the place Jesus calls blessed. You cannot begin this sermon by trying harder. You begin it by admitting you're empty." },
        { h: "The wrong list, on purpose", b: "In a culture that read prosperity as divine approval, Jesus pronounces favor on the mourning, the meek, the hungry, and the persecuted. Every category inverts what any society would call fortunate. This is not a suggestion that suffering is good \u2014 it's an announcement that God's kingdom operates on entirely different arithmetic, and that the people who look furthest from blessing may be closest to it." },
        { h: "The promises attached", b: "Notice that each declaration comes with something specific: comfort for mourners, the earth for the meek, satisfaction for the hungry, mercy for the merciful, seeing God for the pure in heart. None of them are vague. And the last one is the strangest \u2014 blessed are you when people insult and persecute you, \u2018for great is your reward in heaven.\u2019 Jesus tells them to rejoice in that, placing them in the line of the prophets. He is being honest, at the very start, about what following Him will cost." }
      ],
      takeaway: "The Beatitudes are announcements, not achievements \u2014 favor declared over the bankrupt, grieving, and hungry. And the first one is the door: theirs is the kingdom, present tense, because they finally have nothing to offer. That grace is the foundation the impossible sermon rests on.",
      reflection: "Which beatitude describes where you actually are right now \u2014 not where you wish you were? Sit with the promise attached to that one specifically." },
    "Mark": { focus: "Mark 10:35\u201345", title: "Not to be served, but to serve",
      sections: [
        { h: "The worst possible timing", b: "Mark places this immediately after Jesus described His own torture and execution in detail \u2014 mocked, flogged, killed. James and John's response is a request for the two best seats in the kingdom. It would be almost comic if it weren't so recognizable: the sermon lands, and we start calculating our position. Mark doesn't soften it, and neither does Jesus." },
        { h: "\u201cYou don't know what you are asking\u201d", b: "Jesus' reply isn't a rebuke but a question about the cup and the baptism \u2014 the suffering He's about to undergo. They answer \u2018we can,\u2019 with no idea what they're agreeing to. Notice He doesn't dismiss their ambition; He tells them it leads somewhere they haven't imagined. James would be the first apostle executed. They did drink the cup, eventually, just not the way they pictured." },
        { h: "\u201cNot so with you\u201d", b: "The other ten are indignant, which Mark quietly notes was competitive rather than principled \u2014 they wanted the seats too. So Jesus addresses all twelve and draws a line: Gentile rulers lord it over people and make their authority felt. \u2018Not so with you.\u2019 Greatness isn't abolished in the kingdom; it's inverted. Whoever wants to be great must serve, and whoever wants to be first must be slave of all." },
        { h: "\u201cA ransom for many\u201d", b: "Then Jesus points to Himself as the pattern and, for the first time in Mark, states plainly what the cross is for: the Son of Man came not to be served but to serve, and to give His life as a ransom for many. A ransom was the price paid to free a captive. This isn't only an example of humility to imitate \u2014 it's a transaction accomplished on behalf of people who could not pay it themselves. The model and the rescue are the same act." }
      ],
      takeaway: "Jesus answers a request for the best seats not by condemning ambition but by relocating it: greatness is real in the kingdom, and it looks like service. And He grounds it in Himself \u2014 the Son of Man came to serve and to give His life as a ransom for many.",
      reflection: "Where is your ambition currently pointed \u2014 at position, or at people? Name one place this week where you could serve without anyone knowing it was you." },
    "Luke": { focus: "Luke 15:11\u201332", title: "The father who ran",
      sections: [
        { h: "A request that wished him dead", b: "Asking for your inheritance while your father lives was, in that culture, effectively telling him you'd rather he were gone. It was a public humiliation, and the village would have known. The remarkable thing is the father's response: he gives it. Love in this parable does not prevent the leaving \u2014 which is one of the hardest things about how God actually deals with people." },
        { h: "\u201cHe came to his senses\u201d", b: "Rock bottom is a Gentile pig farm and envy of the animals' food. Notice that his repentance starts out fairly self-interested \u2014 he rehearses a speech about becoming a hired servant, and the motive named is hunger. Scripture doesn't require his motives to be pure before he starts walking home. Sometimes the first step back is just running out of options, and that's allowed." },
        { h: "\u201cWhile he was still a long way off\u201d", b: "The father saw him at a distance, which means he had been watching the road \u2014 probably for a long time. Then he ran, which elderly men of standing in that culture did not do; running required lifting your robe and exposing your legs, a public loss of dignity. The father absorbed shame to reach his son first, before the village could. And the rehearsed speech never gets finished \u2014 it's cut off by a robe, a ring, sandals, and a feast." },
        { h: "The son who stayed", b: "Then the second half, aimed at the Pharisees who prompted the story. The older brother is outside, furious, and his language gives him away: \u2018all these years I've been slaving for you,\u2019 and \u2018this son of yours\u2019 \u2014 no father, no brother. He kept every rule and never enjoyed being a son. And the father comes out a second time, leaving his own party to plead with him. Jesus never tells us whether he went in. The story ends with the invitation open, which is where He leaves His audience." }
      ],
      takeaway: "There are two lost sons in this parable. One left and came back to a father who ran, absorbing public shame and cutting off the apology with a feast. The other stayed, served without joy, and stood in the yard \u2014 and the ending is left open on purpose.",
      reflection: "Which son do you recognize yourself in more honestly \u2014 and if it's the older one, what would walking into the party actually require of you?" },
    "John": { focus: "John 13:1\u201317", title: "The towel and the basin",
      sections: [
        { h: "What He knew when He stood up", b: "John's setup is deliberate and enormous: \u2018Jesus knew that the Father had put all things under his power, and that he had come from God and was returning to God \u2014 so he got up\u2026 and began to wash his disciples' feet.\u2019 The service flows out of security, not insecurity. He didn't need anything from that room, which is exactly why He could kneel in it. People who are unsure of their standing rarely serve freely; they're too busy protecting position." },
        { h: "The job nobody took", b: "Foot-washing was the lowest household task, normally done by a servant on arrival. There was no servant, a basin sat there, and twelve men \u2014 who had recently argued about who was greatest \u2014 all let it sit. Jesus took off His outer clothing, wrapped a towel around His waist, and did the work none of them would. He didn't ask for a volunteer or shame them into it. He just did it." },
        { h: "Judas' feet were in the water", b: "John has already told us the betrayal was set in motion. Jesus knew, and washed his feet anyway. That detail refuses every attempt to make this a story about serving people who deserve it. He knelt in front of the man who would sell Him within hours and washed the dust off his feet. Whatever \u2018as I have loved you\u2019 means, it includes that." },
        { h: "\u201cAs I have loved you\u201d", b: "Then the new command, and what makes it new is the standard \u2014 not \u2018love your neighbor as yourself\u2019 but \u2018as I have loved you.\u2019 The measure is no longer your own self-interest but His demonstrated love, which just knelt on a floor for a betrayer. And He attaches the church's public credential to it: by this everyone will know you are my disciples. Not by accuracy, not by size, not by influence. By this." }
      ],
      takeaway: "Knowing He held all authority, Jesus picked up a towel and did the lowest job in the room \u2014 including for the man about to betray Him. Then He made that love the standard and the identifying mark of His people: as I have loved you, so you must love one another.",
      reflection: "What is the \u2018basin\u2019 sitting untouched in your household, workplace, or church \u2014 the task everyone sees and nobody takes? What would it cost you to just do it this week?" },
    "Acts": { focus: "Acts 2:1\u201347", title: "Pentecost",
      sections: [
        { h: "Wind, fire, and languages", b: "The Spirit's arrival is announced by a sound like a violent wind filling the whole house and what looked like tongues of fire resting on each person. Note \u2018each of them\u2019 \u2014 not on the leaders, not on a designated few, but on everyone present. Then the miracle turns outward immediately: they speak, and a crowd from every nation under heaven hears its own language. The first thing the Spirit does is translate." },
        { h: "Babel run backwards", b: "At Babel, one language became many and the people scattered. Here, many languages hear one message and the people gather. Luke almost certainly intends the echo. It says something permanent about what the church is for: a gospel that arrives in your own tongue rather than requiring you to adopt someone else's, and a unity that doesn't erase difference but crosses it." },
        { h: "Peter, of all people", b: "The preacher is the man whose last public statements were three denials by a fire. He stands up in the same city, weeks later, and tells a crowd that includes people who called for the crucifixion exactly what they did \u2014 and then offers them forgiveness. Restoration in John 21 becomes courage in Acts 2. If you think a failure has permanently disqualified you, Peter is standing there as the counterargument." },
        { h: "What the church became", b: "Three thousand were baptized, and Luke describes what happened next in one of Scripture's most quoted paragraphs: teaching, fellowship, breaking of bread, prayer. No buildings, no programs. Property sold as needs arose, meals shared with glad hearts, and daily growth credited to the Lord. The Spirit's arrival produced a community, not just an experience." }
      ],
      takeaway: "Pentecost reverses Babel: many languages hearing one message, delivered by a man who had recently denied Christ, producing a community where nobody's need was invisible. The Spirit's first act was translation, and its first fruit was a shared life.",
      reflection: "If the Spirit's arrival produced a community rather than just an experience, what does that say about how you're currently practicing your faith \u2014 and who is actually sharing life with you?" },
    "Romans": { focus: "Romans 8:28\u201339", title: "Nothing can separate us",
      sections: [
        { h: "\u201cIn all things God works for the good\u201d", b: "The verse is often quoted as a promise that everything will turn out pleasantly, which it doesn't say. It says God works in all things \u2014 including the ones that are genuinely bad \u2014 toward good, and the next verse defines what \u2018good\u2019 means: being conformed to the image of his Son. That's a harder and better promise. It doesn't guarantee comfortable outcomes; it guarantees that nothing is wasted." },
        { h: "The courtroom empties", b: "Paul stages a trial and dismisses it. Who will bring a charge? God is the one who justifies \u2014 the judge has already ruled. Who condemns? Christ died, was raised, and is at God's right hand interceding. Every accusation has to get past a verdict already delivered and an advocate already seated. Notice that Paul doesn't argue you're innocent; he argues the case is closed." },
        { h: "The list of real threats", b: "Then he names what might separate us, and they aren't hypotheticals: trouble, hardship, persecution, famine, nakedness, danger, sword. Paul had personally faced most of that list. He even quotes a psalm about being considered sheep for slaughter \u2014 an admission that following Christ can look like losing. \u2018No, in all these things we are more than conquerors through him who loved us.\u2019" },
        { h: "Built to be exhaustive", b: "The final sweep is designed so nothing slips through: death, life, angels, demons, present, future, powers, height, depth \u2014 and then a catch-all, \u2018nor anything else in all creation.\u2019 Since you are part of creation, the clause covers you on your worst day, including your own failures and your own doubts. Nothing on that list, and nothing off it, can separate you from the love of God in Christ Jesus." }
      ],
      takeaway: "Romans 8 ends by emptying the courtroom \u2014 the judge has ruled, the advocate is seated \u2014 and then listing every conceivable threat, including a catch-all clause, and ruling them all out. The security isn't in your grip on God but in his love in Christ Jesus.",
      reflection: "Which item on Paul's list feels most like it could separate you from God right now? Read verse 39 again and notice that it's already covered." },
    "1 Corinthians": { focus: "1 Corinthians 13", title: "The more excellent way",
      sections: [
        { h: "Everything, priced at zero", b: "Paul lists the most impressive spiritual achievements available in Corinth \u2014 tongues of angels, prophetic powers, understanding all mysteries, faith that moves mountains, giving everything to the poor, even surrendering his body \u2014 and prices each one at nothing without love. Not \u2018less effective.\u2019 Nothing. That's aimed squarely at a church that had been ranking itself by gifts." },
        { h: "Defined in verbs", b: "Then the definition, and almost every phrase is an action or a restraint: patient, kind, does not envy, does not boast, is not proud, does not dishonor, is not self-seeking, not easily angered, keeps no record of wrongs. This is love as behavior, which means it can be examined. A feeling can't be audited; \u2018keeps no record of wrongs\u2019 can." },
        { h: "\u201cKeeps no record of wrongs\u201d", b: "This phrase is an accounting term \u2014 love doesn't maintain a ledger. Most damaged relationships run on exactly such a ledger, itemized and available for instant recall during the next argument. Paul says love closes the book. That single line, taken seriously, would repair more marriages and friendships than most advice ever written." },
        { h: "What outlasts everything", b: "Prophecies cease, tongues still, knowledge passes \u2014 all the things the Corinthians prized are temporary by design. Now we see only a reflection as in a mirror; then we shall see face to face. Faith and hope will one day be fulfilled and no longer needed. Love is the only thing in the chapter that survives into eternity intact, which is why Paul calls it the greatest." }
      ],
      takeaway: "Chapter 13 was written to correct a gifted, unloving church, not to be read at weddings. It prices every spiritual achievement at zero without love, defines love in auditable verbs rather than feelings, and points out that of everything the Corinthians valued, only love survives.",
      reflection: "Read verses 4\u20137 slowly, substituting your own name for \u2018love.\u2019 Which line can you not honestly say \u2014 and what would change this week if you could?" },
    "2 Corinthians": { focus: "2 Corinthians 12:1\u201310", title: "My grace is sufficient",
      sections: [
        { h: "A vision he won't trade on", b: "Paul mentions being caught up to the third heaven, and then almost immediately refuses to build anything on it \u2014 he tells it in the third person and declines to boast, so no one will think more of him than what they see and hear. In a chapter forced on him by rivals parading credentials, he deliberately declines the one credential that would have won the argument." },
        { h: "The thorn, unexplained", b: "\u2018There was given me a thorn in my flesh, a messenger of Satan, to torment me.\u2019 Paul never says what it was, which has frustrated readers for two thousand years and is probably a mercy \u2014 it lets anyone with a chronic, humiliating, unfixable difficulty put their own name in the blank. Note the strange double attribution: it was given, and it is a messenger of Satan. Even the tormenting thing sits under God's purpose." },
        { h: "Three times", b: "He pleaded three times \u2014 the same number as Gethsemane \u2014 and the answer was no. That should be said plainly, because a great deal of teaching implies that persistent prayer always removes the problem. It didn't for Paul. What came instead was a sentence: \u2018My grace is sufficient for you, for my power is made perfect in weakness.\u2019 Not grace that removes it, but grace enough for the version of life that includes it." },
        { h: "Boasting in the wrong things", b: "Then the reversal that makes this passage unforgettable. Paul stops asking and starts boasting \u2014 gladly \u2014 about the very weaknesses he had begged God to take, because that's where Christ's power rested on him. \u2018When I am weak, then I am strong.\u2019 The unanswered prayer became the place God was most visible." }
      ],
      takeaway: "Paul's thorn was never removed, and the answer he received has held up millions of people since: grace sufficient for the life that includes it, and power made perfect in weakness. He stopped asking and began boasting about the very thing he'd wanted gone.",
      reflection: "What have you asked God repeatedly to remove that is still there? What would it look like to receive \u2018my grace is sufficient\u2019 as an actual answer rather than a consolation prize?" },
    "Galatians": { focus: "Galatians 2:15\u201321", title: "Crucified with Christ",
      sections: [
        { h: "The problem behind the passage", b: "Peter had been eating freely with Gentile believers until certain men arrived, and then he withdrew. Paul confronted him publicly, because table fellowship wasn't a minor social matter \u2014 pulling back said Gentiles were second-class, which meant faith in Christ wasn't sufficient after all. Practice was preaching a different gospel than doctrine." },
        { h: "Justified by faith, not works of the law", b: "Paul's answer states the principle three times in one verse for emphasis. Nobody is justified by observing the law. That was not a controversial statement about Gentiles; it was a statement about himself and Peter \u2014 \u2018we, who are Jews by birth\u2026 know that a person is not justified by the works of the law.\u2019 If the insiders can't get there that way, the requirement can't be imposed on outsiders." },
        { h: "\u201cI have been crucified with Christ\u201d", b: "Then the personal turn, and the tense matters: crucified, past and settled. The old self's claim to run things has been executed. \u2018And I no longer live, but Christ lives in me\u2019 \u2014 present and ongoing. This isn't self-improvement or a better version of the same person; it's a death and a new occupant, and it's why adding law-keeping makes no sense. You can't put a corpse back in charge." },
        { h: "\u201cWho loved me and gave himself for me\u201d", b: "Paul, who had hunted believers house to house, writes the cosmic gospel in the first person singular. Not \u2018who loved the world\u2019 \u2014 who loved me. And then the closing argument, which is unanswerable: if righteousness could be gained through the law, Christ died for nothing. Every subtle attempt to earn standing runs into that sentence." }
      ],
      takeaway: "Paul confronts a gospel with conditions attached and answers it with a death: crucified with Christ, no longer I who live. And he narrows it to the first person \u2014 who loved me and gave himself for me \u2014 before closing with the argument that ends all legalism: if trying could get you there, the cross was pointless.",
      reflection: "What have you quietly added to \u2018faith in Christ\u2019 as a requirement for your own acceptance? Say it out loud, then read verse 21 again." },
    "Ephesians": { focus: "Ephesians 3:14\u201321", title: "Rooted and established in love",
      sections: [
        { h: "What Paul actually asks for", b: "Read the requests and notice what's absent: no easier circumstances, no resolved problems, no material provision. He asks for inner strength through the Spirit, for Christ to dwell in their hearts, and for power to grasp love. Paul seems convinced that the deepest human need is not a change in situation but a comprehension of being loved." },
        { h: "Power to grasp", b: "It's a strange combination \u2014 why would understanding love require power? Because information about God's love rarely lands. Most people can recite it and still live as though they're on probation. Paul treats the gap between knowing it as a fact and grasping it as reality as something only the Spirit can close, which is why he prays rather than merely explaining." },
        { h: "Wide, long, high, deep", b: "Four dimensions, which is a way of saying there's no edge to measure. And then the deliberate impossibility: \u2018to know this love that surpasses knowledge.\u2019 You can genuinely know it and never come to the end of it, the way you can genuinely know the ocean without having seen most of it. The goal isn't mastery but immersion \u2014 being rooted and established in it, like a tree and a foundation." },
        { h: "Immeasurably more", b: "The doxology stretches past the request itself: God is able to do immeasurably more than all we ask or imagine. Not more than we ask \u2014 more than we can even conceive of asking. And note where the power operates: \u2018according to his power that is at work within us.\u2019 The same strength Paul prayed for is already the mechanism." }
      ],
      takeaway: "Paul kneels and asks not for changed circumstances but for power to grasp a love with no measurable edge \u2014 a love that can be truly known and never exhausted. He treats being convinced you're loved as the deepest need there is, and as something requiring the Spirit's strength.",
      reflection: "Do you live as though you're loved by God, or as though you're on probation with him? Pray this prayer for yourself this week and notice what resists." },
    "Philippians": { focus: "Philippians 2:1\u201311", title: "He humbled himself",
      sections: [
        { h: "Why the hymn is here", b: "This is the loftiest description of Christ in the New Testament, and Paul deploys it to fix a relational problem \u2014 rivalry and vanity in a small church, and eventually two named women who couldn't agree. The theology isn't decoration; it's the repair. \u2018In your relationships with one another, have the same mindset as Christ Jesus.\u2019" },
        { h: "Not something to be used to his advantage", b: "He was in very nature God and did not consider equality with God something to exploit. That phrase is the hinge: he had every right and declined to leverage it. Most conflict runs on the opposite instinct \u2014 pressing whatever advantage you legitimately have. Christ's example isn't giving up what he lacked but declining to use what he had." },
        { h: "The descent", b: "Then the movement, relentlessly downward: made himself nothing, took the nature of a servant, made in human likeness, humbled himself, became obedient to death \u2014 and then, as if the bottom weren't low enough, \u2018even death on a cross.\u2019 The most shameful execution the Roman world could devise, for the one through whom the world was made." },
        { h: "Therefore God exalted him", b: "Only after the full descent comes the exaltation \u2014 the name above every name, every knee bowing. The order is the argument: this is how God's kingdom works, and it's the mindset being prescribed. Paul isn't asking the Philippians to admire the pattern. He's asking them to live inside it with each other." }
      ],
      takeaway: "The highest Christology in the New Testament is quoted to settle a petty church conflict. Christ had every right and declined to use it, descending to a servant's death before God exalted him \u2014 and Paul presents that descent not as something to admire but as the mindset to have with one another.",
      reflection: "Where do you currently have a legitimate right, advantage, or upper hand in a relationship? What would \u2018not considering it something to be used to your advantage\u2019 look like this week?" },
    "Colossians": { focus: "Colossians 3:1\u201317", title: "Clothe yourselves",
      sections: [
        { h: "Start with what's already true", b: "The chapter opens with \u2018since, then, you have been raised with Christ\u2019 \u2014 not \u2018if you try hard enough.\u2019 Everything commanded rests on an accomplished fact. Your life is hidden with Christ in God, which is both secure and currently invisible. That's the order Paul never reverses: identity first, behavior second." },
        { h: "Take off", b: "Then the old clothes, named specifically: anger, rage, malice, slander, filthy language, lying. Notice how many involve the mouth. Paul doesn't describe these as things to feel bad about but as garments to remove \u2014 which implies they're not you anymore, however familiar they feel." },
        { h: "Put on", b: "And the new set: compassion, kindness, humility, gentleness, patience. The clothing image is the most practical thing here. Character isn't a mood you wait to feel; it's something you put on deliberately, again today, the way you dress whether or not you feel like it. Then bearing with each other, and forgiving \u2014 \u2018as the Lord forgave you,\u2019 which sets the standard at total, undeserved, and first." },
        { h: "Over all these, love", b: "Love goes over the top like an outer garment, binding everything together. Then peace ruling as an umpire in the heart, the message of Christ dwelling richly, gratitude, and finally the sweeping instruction: whatever you do, in word or deed, do it all in the name of the Lord Jesus. The chapter starts in the heavenly realms and ends with your Tuesday." }
      ],
      takeaway: "Colossians 3 grounds behavior in an accomplished fact \u2014 you were raised with Christ \u2014 and then treats character as clothing: take off anger and slander, put on compassion and patience, with love over the top. And it sets forgiveness at the hardest possible standard: as the Lord forgave you.",
      reflection: "Which garment do you need to deliberately put on tomorrow morning \u2014 and is there a grievance you've been holding that \u2018forgive as the Lord forgave you\u2019 addresses?" },
    "1 Thessalonians": { focus: "1 Thessalonians 4:13\u201318", title: "We do not grieve as those without hope",
      sections: [
        { h: "The fear behind the letter", b: "A young church was frightened. Believers had died before Christ returned, and they worried those people had somehow missed out. Paul writes to correct information, not to scold emotion \u2014 \u2018we do not want you to be uninformed.\u2019 Notice how much of pastoral care in the New Testament is simply telling frightened people the truth." },
        { h: "Not whether to grieve, but how", b: "\u2018So that you do not grieve like the rest of mankind, who have no hope.\u2019 Read carefully: he never says don't grieve. Christians cry at funerals, and should \u2014 death is an enemy, and loss is real. What changes is the horizon the sorrow is felt against. Grief with hope is still grief." },
        { h: "\u201cThose who sleep\u201d", b: "Paul's repeated word for Christian death is sleep, which isn't a denial of its seriousness but a statement about its duration. The imagery assumes waking. And his central assurance is that the dead in Christ lose no place in the order \u2014 they rise first, and nobody who died is behind." },
        { h: "The point of the passage", b: "Then the promise everything has been building toward, and it isn't about clouds or trumpets: \u2018and so we will be with the Lord forever.\u2019 Presence, permanently, together. And the instruction that follows tells you what this teaching is for \u2014 not date-setting or debate, but \u2018therefore encourage one another with these words.\u2019" }
      ],
      takeaway: "Paul writes to frightened people who thought their dead had missed out, and he never tells them to stop grieving \u2014 only not to grieve like those without hope. The passage ends where it aims: we will be with the Lord forever, therefore encourage one another with these words.",
      reflection: "Who in your life is grieving right now? What would it look like to actually use these words to encourage them, rather than keeping the comfort theoretical?" },
    "2 Thessalonians": { focus: "2 Thessalonians 3:6\u201318", title: "Never tire of doing good",
      sections: [
        { h: "The problem", b: "Believing the day of the Lord had already arrived, some had stopped working entirely and were living off the community \u2014 and, Paul notes drily, becoming busybodies. Idleness rarely stays neutral; unoccupied people tend to occupy themselves with other people's business." },
        { h: "Paul's own example", b: "Rather than pulling rank, he points at his own hands: he worked night and day, paying his own way, so as not to be a burden \u2014 even though as an apostle he had every right to support. He models the same principle as Philippians 2: having a right and declining to use it." },
        { h: "The blunt rule", b: "\u2018The one who is unwilling to work shall not eat.\u2019 The word choice is careful and often misquoted \u2014 unwilling, not unable. This isn't aimed at the sick, the elderly, or those who can't find work; the early church was famously generous to exactly those people. It's aimed at refusal, and it protects genuine generosity from being drained by it." },
        { h: "The word for everyone else", b: "Then, having dealt with the idle, Paul turns to the rest: \u2018And as for you, brothers and sisters, never tire of doing what is good.\u2019 That sentence is for anyone quietly exhausted by doing right with nothing visible to show for it \u2014 which, in a letter about waiting for Christ's return, is exactly the point." }
      ],
      takeaway: "Believing Christ would return made some Thessalonians quit working. Paul's response \u2014 backed by his own night-and-day labor \u2014 is that expectation should produce diligence, not paralysis, and he closes with a word for the weary: never tire of doing what is good.",
      reflection: "Where have you grown tired of doing good with nothing to show for it? What would \u2018not tiring\u2019 practically require of you this month?" },
    "1 Timothy": { focus: "1 Timothy 1:12\u201317", title: "The worst of sinners",
      sections: [
        { h: "The r\u00e9sum\u00e9 he doesn't hide", b: "Blasphemer, persecutor, violent man \u2014 Paul names his own record without softening it. He had approved an execution and dragged people from their homes. Decades later, writing as the most influential Christian alive, he leads with that. The past isn't erased in his memory; it's just no longer determinative." },
        { h: "Present tense", b: "\u2018Christ Jesus came into the world to save sinners \u2014 of whom I am the worst.\u2019 Not \u2018was.\u2019 That present tense is the opposite of the usual religious trajectory, where people grow more confident of their own decency over time. Proximity to grace made Paul more aware of his need, not less, which is a reliable marker of the real thing." },
        { h: "\u201cAs an example\u201d", b: "Then the reason he gives, which is remarkably generous: he was shown mercy so that in him, the worst of sinners, Christ might display his immense patience \u2018as an example for those who would believe.\u2019 Paul understood his own story as a limit case deliberately placed in Scripture. If the man holding the coats at Stephen's stoning could be forgiven, the argument that you're too far gone doesn't hold." },
        { h: "Where it lands", b: "The paragraph ends not in self-analysis but in worship: \u2018Now to the King eternal, immortal, invisible, the only God, be honor and glory for ever and ever. Amen.\u2019 Honest reckoning with your own history, in Paul, doesn't produce despair or self-loathing. It produces doxology." }
      ],
      takeaway: "Paul names his worst record plainly, calls himself the worst of sinners in the present tense decades after his conversion, and explains that his story sits in Scripture as a deliberate limit case \u2014 evidence that Christ's patience reaches anyone. And it ends in worship, not self-analysis.",
      reflection: "What in your past do you still treat as disqualifying? If Paul's story was preserved as an example, what does that mean for yours?" },
    "2 Timothy": { focus: "2 Timothy 4:1\u201322", title: "Finishing the race",
      sections: [
        { h: "The charge", b: "\u2018Preach the word; be prepared in season and out of season.\u2019 Paul knows he's handing off, and the instruction is about consistency rather than intensity \u2014 convenient or not, receptive audience or not. He warns that people will gather teachers who tell them what their itching ears want to hear, which is a permanent temptation for both preacher and listener." },
        { h: "Three verbs for a life", b: "\u2018I have fought the good fight, I have finished the race, I have kept the faith.\u2019 Note what's absent: no numbers, no achievements, no comparison. Fought, finished, kept. It's a completion metric rather than a success metric, which is available to anyone regardless of results." },
        { h: "Not only to me", b: "The crown of righteousness is \u2018not only to me, but also to all who have longed for his appearing.\u2019 Paul immediately widens it past apostles and heroes to ordinary believers whose qualification is simply loving Christ's return. Whatever reward means here, it isn't reserved for the impressive." },
        { h: "The cloak and the scrolls", b: "Then the details that make this letter unbearably human. Come before winter. Bring the cloak I left at Troas, and the scrolls, especially the parchments. He is cold, and he still wants to read. And the two sentences side by side: \u2018everyone deserted me\u2026 But the Lord stood at my side and gave me strength.\u2019" }
      ],
      takeaway: "Paul's last recorded words measure a life by completion rather than success \u2014 fought, finished, kept \u2014 and then widen the reward to everyone who has longed for Christ's appearing. And in the same breath he asks for his coat and his books, cold and still reading, deserted by everyone and not alone.",
      reflection: "If you wrote \u2018I have fought, I have finished, I have kept\u2019 about your life so far, what would be honest? What would you want to be able to say, and what changes now to get there?" },
    "Titus": { focus: "Titus 2:11\u201314", title: "Grace that teaches",
      sections: [
        { h: "Grace has appeared", b: "The word is the one used for a sunrise or a royal arrival \u2014 grace showed up, in history, offering salvation to all people. It isn't an abstract divine attitude but an event with a date. That framing matters for everything that follows: the training described comes from something that happened, not from a principle." },
        { h: "It teaches us to say no", b: "Here is the sentence that answers the oldest objection to grace \u2014 that it makes people careless. Grace is the tutor. It trains us to renounce ungodliness and worldly passions, which means saying no is not a return to earning but the ongoing work of the gift. Anyone who thinks grace and holiness pull in opposite directions has misread this verse." },
        { h: "And to say yes", b: "The training isn't only negative: self-controlled, upright, and godly lives \u2014 covering yourself, your neighbor, and God. And crucially, \u2018in this present age.\u2019 Not in retreat from the world, not postponed to the next one. The Christian life happens here, in Crete, among difficult people, now." },
        { h: "Between two appearings", b: "The passage frames the present between grace that has appeared and glory that will \u2014 \u2018the blessed hope, the appearing of the glory of our great God and Savior, Jesus Christ.\u2019 He gave himself to redeem us and to purify \u2018a people that are his very own, eager to do what is good.\u2019 Eagerness, not obligation, is the goal." }
      ],
      takeaway: "Titus answers the accusation that grace makes people lax with one sentence: grace teaches us to say no. The same gift that pardons is the instructor for everything after, training us for self-controlled, upright lives in this present age, between the grace that appeared and the glory that will.",
      reflection: "Where do you need grace to teach you a specific \u2018no\u2019 this month? And do you experience obedience as obligation or as eagerness \u2014 what would move it toward the second?" },
    "Philemon": { focus: "Philemon 1:8\u201321", title: "Charge it to me",
      sections: [
        { h: "Authority set aside", b: "\u2018Although in Christ I could be bold and order you to do what you ought to do, yet I prefer to appeal to you on the basis of love.\u2019 Paul names the authority he has and deliberately declines it. He wants a decision that comes freely \u2014 \u2018so that any favor you do would not seem forced but would be voluntary.\u2019 That's a remarkable way to handle power over someone." },
        { h: "A new name for a runaway", b: "Onesimus means \u2018useful,\u2019 and Paul plays on it: formerly useless to you, now useful to both of us. But the language goes far past usefulness \u2014 \u2018my son, who became my son while I was in chains,\u2019 and \u2018I am sending him \u2014 who is my very heart \u2014 back to you.\u2019 A fugitive slave has become the apostle's own heart." },
        { h: "No longer as a slave", b: "The request is a category change: receive him \u2018no longer as a slave, but better than a slave, as a dear brother\u2026 welcome him as you would welcome me.\u2019 Paul doesn't legislate against the institution; he asks one man to treat one other man as family, which is a change the institution cannot survive." },
        { h: "\u201cCharge it to me\u201d", b: "Then the line that turns a personal note into a picture of the gospel: if he has wronged you or owes you anything, put it on my account \u2014 written, Paul notes, in his own hand. Someone stands between the wronged party and the offender and absorbs the debt so a relationship can be restored. That is precisely what Christ does, and Paul apparently didn't feel the need to point it out." }
      ],
      takeaway: "Paul declines the authority he could have used, asks a slave owner to receive his runaway as a beloved brother, and offers to pay the debt himself in his own handwriting. A one-page letter about one relationship, and the gospel is visible in every move.",
      reflection: "Is there a relationship where you're waiting to be repaid \u2014 in money, apology, or acknowledgment? What would it cost you to write \u2018charge it to me\u2019 and let it go?" },
    "Hebrews": { focus: "Hebrews 4:14\u201316", title: "Approach with confidence",
      sections: [
        { h: "What comes just before", b: "The preceding verses are terrifying: the word of God is alive and active, sharper than a double-edged sword, dividing soul and spirit, judging the thoughts and attitudes of the heart. Nothing in creation is hidden; everything is uncovered and laid bare before the eyes of him to whom we must give account. Read alone, that sends anyone running for cover." },
        { h: "\u201cTherefore\u201d", b: "And then the pivot. Precisely because you are that exposed, hold firmly to the faith \u2014 because the one you're exposed before is not a distant judge but a high priest who has passed through the heavens. The terror and the comfort are attached to the same person, which is the entire pastoral genius of Hebrews." },
        { h: "Tempted in every way", b: "\u2018We do not have a high priest who is unable to empathize with our weaknesses, but we have one who has been tempted in every way, just as we are \u2014 yet he did not sin.\u2019 The sinlessness doesn't distance him; it means he felt the full force of temptation rather than giving in early. He knows the pull from the inside, at its strongest." },
        { h: "Confidence, in time of need", b: "\u2018Let us then approach God's throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.\u2019 Note the timing. Not after you've recovered, cleaned up, and can report progress \u2014 in the time of need, which is exactly when most people avoid God. The instinct to hide until you're presentable is the one this verse exists to overrule." }
      ],
      takeaway: "Hebrews first exposes you completely \u2014 a word that judges the heart's motives, nothing hidden \u2014 and then names who you're exposed before: a high priest who was tempted in every way you are. The invitation isn't to approach once you've cleaned up, but with confidence, in your time of need.",
      reflection: "When you fail, is your instinct to run toward God or to hide until you feel presentable? What would change if you took \u2018in time of need\u2019 literally this week?" },
    "James": { focus: "James 1:19\u201327", title: "Doers of the word",
      sections: [
        { h: "Quick, slow, slow", b: "\u2018Everyone should be quick to listen, slow to speak and slow to become angry.\u2019 Three settings, and most conflict violates all three at once. The ratio is worth noticing \u2014 one thing to be quick about, two to be slow about. Almost every relational disaster in your life came from reversing it." },
        { h: "The mirror", b: "Then the image that defines the letter: someone who hears the word and does nothing is like a person who looks at his face in a mirror and immediately forgets what he looks like. The absurdity is the point. You looked, you saw something, you walked away unchanged \u2014 which is functionally identical to never having looked." },
        { h: "The perfect law that gives freedom", b: "James calls Scripture a mirror and then, surprisingly, \u2018the perfect law that gives freedom\u2019 \u2014 and blesses not the one who studies it most but the one who \u2018looks intently into it and continues in it\u2026 not forgetting what they have heard, but doing it.\u2019 The blessing is attached to the doing, and it's promised \u2018in what they do.\u2019" },
        { h: "Religion that God accepts", b: "And his test is deliberately unspiritual: keeping a tight rein on your tongue, looking after orphans and widows in their distress, and staying unpolluted by the world. Speech, the vulnerable, and personal integrity. No mention of ceremony. If your religion doesn't govern your mouth and reach the powerless, James says it's worthless \u2014 his word, not a paraphrase." }
      ],
      takeaway: "James defines the difference between hearing and doing with a mirror: you looked, saw something true, and walked away unchanged. His test for real religion is deliberately ordinary \u2014 a controlled tongue, care for the vulnerable, and personal integrity.",
      reflection: "What have you known from Scripture for years without it changing anything you actually do? Pick one, and do it this week." },
    "1 Peter": { focus: "1 Peter 5:6\u201311", title: "Cast all your anxiety",
      sections: [
        { h: "Humble yourselves", b: "Verse 6 and verse 7 are one sentence in Greek: humble yourselves under God's mighty hand \u2026 casting all your anxiety on him. That grammatical link is easy to miss and enormously useful. Much anxiety is the weight of trying to control outcomes that were never yours, so handing it over is an act of humility, not merely relief." },
        { h: "\u201cThat he may lift you up\u201d", b: "Note who does the lifting, and when \u2014 \u2018in due time.\u2019 Humbling yourself isn't self-erasure or pretending you don't matter; it's declining to promote yourself because someone better positioned is handling it, on a schedule you don't set." },
        { h: "Cast, not set down", b: "The verb is forceful \u2014 to throw or fling something off yourself onto something else. It's the same word used for throwing cloaks on the colt at the triumphal entry. Not setting worry gently down where you can retrieve it, but throwing it. And \u2018all\u2019 leaves no category exempt: the large fears and the petty ones." },
        { h: "Because he cares for you", b: "The reason given isn't that worry is unproductive, true as that is. It's that he cares about you \u2014 a claim about his attention rather than your competence. And the very next verse says to be alert, because the enemy prowls. Peter puts childlike trust and sober vigilance side by side without any sense of contradiction." }
      ],
      takeaway: "Casting your anxiety and humbling yourself are one movement in Peter's sentence \u2014 much worry is the weight of controlling what was never yours. The verb means throw, not set down gently, and the reason given is his care for you, not the uselessness of worry.",
      reflection: "Name the anxiety you keep picking back up. What would it look like to actually throw it \u2014 and what does it say about your view of God that you keep retrieving it?" },
    "2 Peter": { focus: "2 Peter 3:1\u201318", title: "Patient, not slow",
      sections: [
        { h: "The scoffers' question", b: "\u2018Where is this coming he promised? Ever since our ancestors died, everything goes on as it has since the beginning.\u2019 It's a fair-sounding argument from ordinary experience, and it gets asked in every generation \u2014 sometimes silently by believers who wouldn't say it aloud." },
        { h: "A different clock", b: "Peter's first answer is about time itself: with the Lord a day is like a thousand years, and a thousand years like a day. This isn't a formula for calculating prophecy; it's a caution against measuring God's faithfulness by human impatience. Our sense of \u2018late\u2019 assumes a schedule we were never given." },
        { h: "Patience, not failure", b: "Then the real answer, and it changes everything: \u2018The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.\u2019 The delay isn't indifference or inability \u2014 it's mercy holding a door open. Every day the return hasn't come is a day someone else can still come in." },
        { h: "So what kind of people", b: "Peter's conclusion is never speculation but character: \u2018Since everything will be destroyed in this way, what kind of people ought you to be?\u2019 Holy and godly lives, making every effort to be found spotless and at peace with him, growing in grace and knowledge. His eschatology always terminates in how you live tomorrow morning." }
      ],
      takeaway: "What looks like God's slowness is patience with a purpose \u2014 more time for more people. Peter reframes the delay as mercy holding a door open, and lands not on dates or speculation but on the question of what kind of person you should be while waiting.",
      reflection: "Who were you when God was being patient with you? Who is he being patient with now that you've grown impatient about \u2014 and are you praying for them?" },
    "1 John": { focus: "1 John 4:7\u201321", title: "God is love",
      sections: [
        { h: "Love comes from somewhere", b: "\u2018Let us love one another, for love comes from God.\u2019 John doesn't treat love as a human capacity we generate but as something with a source. Which is why he can say that whoever loves has been born of God and knows him \u2014 the presence of real love is evidence of a connection to its origin." },
        { h: "\u201cThis is love\u201d", b: "\u2018God is love\u2019 is one of the most quoted and most abused sentences in the Bible, and John guards it immediately by defining his terms: \u2018This is love: not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins.\u2019 He points at an event, not a sentiment. That anchoring keeps the sentence from meaning whatever anyone wants it to mean." },
        { h: "The direction of the love", b: "Not that we loved God \u2014 but that he loved us. The initiative is entirely his, which reorders everything. Our loving is always response, never origination, and that's why John can command it: he's asking us to pass on something already received rather than manufacture something we don't have." },
        { h: "Fear driven out", b: "\u2018There is no fear in love. But perfect love drives out fear, because fear has to do with punishment.\u2019 Religious anxiety \u2014 the sense of being on probation with God \u2014 doesn't get fixed by better performance. It gets displaced by love actually understood. And John immediately makes it testable: anyone who claims to love God while hating a brother or sister is a liar." }
      ],
      takeaway: "John defines love not as a feeling but as an event \u2014 God sending his Son \u2014 and insists the direction runs from him to us first. Our loving is always response, fear is displaced rather than defeated by effort, and the claim to love God is tested by how you treat the person in front of you.",
      reflection: "Where is your religious anxiety coming from \u2014 and is there someone you're finding hard to love whose face is testing what you say you believe about God?" },
    "2 John": { focus: "2 John 1:1\u201313", title: "Truth and love",
      sections: [
        { h: "Both words, over and over", b: "In thirteen verses, John uses \u2018truth\u2019 five times and \u2018love\u2019 four. He loves them \u2018in the truth,\u2019 rejoices that they walk \u2018in the truth,\u2019 and asks them to love one another. The two aren't in tension in this letter; they're braided. Most modern conflict about faith comes from pulling them apart." },
        { h: "Love defined as obedience", b: "\u2018And this is love: that we walk in obedience to his commands.\u2019 John, of all people, refuses to let love float free of action or direction. It isn't a mood to summon but a path to walk, and the path has content given by someone else." },
        { h: "The line that gets drawn", b: "Then the warning: deceivers who deny that Jesus Christ came in the flesh. John says not to take such teaching into your house or welcome it \u2014 which in a world of traveling teachers and house churches meant declining to platform it. Note what he's protecting: not preference or tradition, but the incarnation itself." },
        { h: "Face to face", b: "And the closing is quietly moving. \u2018I have much to write to you, but I do not want to use paper and ink. Instead, I hope to visit you and talk with you face to face, so that our joy may be complete.\u2019 An apostle with the authority to write Scripture says the letter isn't as good as being in the room. Presence is still better than correspondence." }
      ],
      takeaway: "In thirteen verses John braids truth and love together \u2014 defining love as walking in obedience, drawing a firm line around the incarnation, and closing with a longing to be in the room rather than on paper. Truth without love turns cruel; love without truth turns meaningless.",
      reflection: "Which do you naturally lean toward \u2014 guarding truth or keeping peace? What does the one you neglect require of you in a current relationship?" },
    "3 John": { focus: "3 John 1:1\u201314", title: "Imitate what is good",
      sections: [
        { h: "Joy in someone else's faithfulness", b: "\u2018I have no greater joy than to hear that my children are walking in the truth.\u2019 It's a small sentence with enormous weight for anyone who has invested in another person's faith \u2014 a parent, a friend, a mentor. The report that they're still walking is described as the greatest joy available to John." },
        { h: "Hospitality as ministry", b: "Gaius is commended for supporting traveling teachers, \u2018even though they are strangers to you.\u2019 John's verdict: \u2018We ought therefore to show hospitality to such people so that we may work together for the truth.\u2019 Practical support of someone else's work is counted as partnership in it \u2014 which dignifies everyone who has ever funded, housed, fed, or covered for a worker." },
        { h: "Diotrephes, who loves to be first", b: "No heresy is named. His offenses are gossiping maliciously, refusing to welcome believers, and putting out those who do \u2014 all traced to one root: \u2018who loves to be first.\u2019 That such an ordinary failure is preserved in Scripture is a warning about how much damage a small ego can do in a small church." },
        { h: "A simple standard", b: "\u2018Do not imitate what is evil but what is good.\u2019 It arrives right after two live examples \u2014 Diotrephes grasping for preeminence, Demetrius well spoken of by everyone. John doesn't give an abstract principle; he gives two people and tells you which one to copy." }
      ],
      takeaway: "The New Testament's shortest book preserves a very ordinary problem \u2014 a man who loves to be first \u2014 alongside a man whose hospitality made him a co-worker for the truth. The standard given isn't abstract: here are two examples, imitate the good one.",
      reflection: "Whose example are you actually imitating right now \u2014 and where does the instinct to be first show up quietly in you?" },
    "Jude": { focus: "Jude 1:17\u201325", title: "Able to keep you",
      sections: [
        { h: "Build, pray, keep, wait", b: "After a page of warning, Jude turns to what believers should actively do: build yourselves up in your most holy faith, pray in the Holy Spirit, keep yourselves in God's love, and wait for the mercy of Christ. Four verbs, all ongoing. Contending for the faith turns out to include tending your own." },
        { h: "Three kinds of people", b: "Then the pastoral instruction: be merciful to those who doubt; save others by snatching them from the fire; to others show mercy mixed with fear. Different situations get different approaches. Doubt gets mercy, danger gets urgency, and some situations require caution \u2014 which is a more careful model of how to help people than most of us practice." },
        { h: "Mercy to doubters", b: "This is the line worth pulling out of a fierce letter. In a book about contending, defending, and warning, Jude explicitly instructs mercy toward the uncertain. Doubt is treated as a condition needing care, not a betrayal needing correction. Anyone who has been made to feel unwelcome for asking questions should read verse 22 slowly." },
        { h: "Who does the keeping", b: "And then the doxology, one of the finest in Scripture: \u2018To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy.\u2019 After an entire letter about the danger of falling away, the closing word is that the one holding you upright is God \u2014 and that he intends to present you with joy, not with relief." }
      ],
      takeaway: "A fierce letter about contending for the faith contains one of the New Testament's gentlest instructions \u2014 be merciful to those who doubt \u2014 and closes by naming who actually keeps you standing. After all the warnings about falling, the last word is God's ability to hold you.",
      reflection: "Who around you is doubting, and are you being merciful or impatient with them? And where have you been trying to keep yourself from stumbling by willpower?" },
    "Revelation": { focus: "Revelation 5:1\u201314", title: "Worthy is the Lamb",
      sections: [
        { h: "A scroll no one can open", b: "John sees a sealed scroll in the right hand of the one on the throne \u2014 God's purposes for history \u2014 and a search goes out for someone worthy to open it. No one is found, in heaven or on earth or under it. And John weeps, hard: the Greek suggests loud sobbing. If no one can open the scroll, history has no meaning and no resolution." },
        { h: "\u201cDo not weep\u201d", b: "An elder stops him: the Lion of the tribe of Judah, the Root of David, has triumphed. Everything about the announcement is royal and military \u2014 a lion, a conquering heir. John turns to look at a lion." },
        { h: "And sees a Lamb", b: "\u2018Then I saw a Lamb, looking as if it had been slain, standing at the center of the throne.\u2019 This is the most important sentence in the book. He hears Lion and sees Lamb; he hears conquest and sees slaughter; and the wounds are still visible on a creature that is standing. Every claim about victory in Revelation has to be read through this reversal \u2014 God's conquest looks like self-giving, not domination." },
        { h: "The song, and who's in it", b: "Then heaven sings a new song, and the reason for worthiness is stated: \u2018because you were slain, and with your blood you purchased for God persons from every tribe and language and people and nation.\u2019 The promise to Abraham, sung as accomplished fact. And the circle of praise widens until every creature in heaven, on earth, under the earth, and in the sea is singing to the Lamb." }
      ],
      takeaway: "John hears that a Lion has conquered and turns to see a slaughtered Lamb, standing. That reversal governs the entire book: heaven's definition of victory is a cross, and the song names people from every tribe and nation as already purchased.",
      reflection: "Where are you waiting for God to act through obvious power? What changes if the pattern of his victory looks more like the Lamb than the Lion you expected?" }
  };
  window.STF_CHECKPOINTS = CHECKPOINTS;
  window.STF_DEEP_STUDIES = DEEP_STUDIES;
})();
