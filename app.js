(function(){
  const e = React.createElement;
  const KEY = "bible-path-progress-v3";

  const SUPABASE_URL = "https://wvovrtkszewohbtfqsbz.supabase.co";
  const SUPABASE_KEY = "sb_publishable_E8MMK1clBTPW313Cg0sthw_G9fDvhTn";
  const sb = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

  const DEFAULT_STATE = { completed: [], completedCheckpoints: [], streak: 0, gems: 0, pearls: 0, ownedBadges: [], dailyStreak: 0, lastCheckIn: null, claimedQuests: [], profile: { name: 'Your name', avatar: '\ud83d\udcd6' }, testimony: '', reflections: [], testBest: {}, deepStudies: [] };

  const RIDGE_JAG_BACK = 'polygon(0% 100%, 0% 45%, 8% 55%, 18% 30%, 30% 50%, 42% 20%, 55% 48%, 66% 25%, 78% 52%, 88% 32%, 100% 50%, 100% 100%)';
  const RIDGE_JAG_FRONT = 'polygon(0% 100%, 0% 55%, 12% 35%, 24% 60%, 36% 40%, 48% 65%, 60% 38%, 72% 62%, 84% 42%, 100% 60%, 100% 100%)';
  const DUNE_BACK = 'polygon(0% 100%, 0% 62%, 15% 48%, 32% 60%, 48% 42%, 64% 58%, 80% 44%, 100% 56%, 100% 100%)';
  const DUNE_FRONT = 'polygon(0% 100%, 0% 70%, 18% 56%, 36% 68%, 55% 50%, 74% 66%, 100% 52%, 100% 100%)';

  const BOOK_ATMOSPHERES = {
    Genesis: {
      gradient: 'linear-gradient(180deg, #1b1730 0%, #362a52 14%, #55406e 26%, #8a5a6e 38%, #c98a56 50%, #e3bd6c 60%, #a9b96a 72%, #6f9569 84%, #3f7583 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'34%' } },
        { type:'glow', style:{ left:'50%', top:'16%', width:260, height:260, marginLeft:-130, marginTop:-130, background:'radial-gradient(circle, rgba(255,244,214,0.85) 0%, rgba(255,224,160,0.35) 45%, rgba(255,224,160,0) 72%)' } },
        { type:'ridge', style:{ bottom:'8%', height:'22%', background:'#4a6b52', opacity:0.55, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'16%', background:'#375c3d', opacity:0.8, clipPath:RIDGE_JAG_FRONT } },
        { type:'water', style:{ background:'linear-gradient(180deg, rgba(63,117,131,0) 0%, rgba(63,117,131,0.6) 100%)' } }
      ]
    },
    Exodus: {
      gradient: 'linear-gradient(180deg, #f6dd9a 0%, #2f7396 20%, #1c5b8a 36%, #d9a45f 56%, #b85c34 72%, #7a2f1e 88%, #4a1912 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'5%', width:220, height:220, marginLeft:-110, marginTop:-110, background:'radial-gradient(circle, rgba(255,240,200,0.85) 0%, rgba(255,224,160,0.3) 45%, rgba(255,224,160,0) 72%)' } },
        { type:'sparkle', style:{ top:'22%', height:'22%' } },
        { type:'ridge', style:{ top:'40%', height:'20%', background:'#c99a5a', opacity:0.5, clipPath:DUNE_BACK } },
        { type:'ridge', style:{ top:'48%', height:'18%', background:'#a9793f', opacity:0.65, clipPath:DUNE_FRONT } },
        { type:'glow', style:{ left:'30%', bottom:'2%', width:200, height:200, marginLeft:-100, marginBottom:-100, background:'radial-gradient(circle, rgba(255,150,90,0.7) 0%, rgba(200,70,30,0.28) 50%, rgba(200,70,30,0) 75%)' } }
      ]
    },
    Leviticus: {
      gradient: 'linear-gradient(180deg, #241322 0%, #4a1d2e 18%, #7a2634 34%, #a8433a 50%, #c9803f 66%, #e0b25c 80%, #8a5a30 92%, #4a2a16 100%)',
      decor: [
        { type:'sparkle', style:{ top:'6%', height:'26%' } },
        { type:'glow', style:{ left:'50%', top:'14%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(255,214,150,0.75) 0%, rgba(230,160,90,0.3) 48%, rgba(230,160,90,0) 74%)' } },
        { type:'ridge', style:{ bottom:'10%', height:'18%', background:'#5c3018', opacity:0.55, clipPath:DUNE_BACK } },
        { type:'glow', style:{ left:'50%', bottom:'0%', width:260, height:200, marginLeft:-130, marginBottom:-100, background:'radial-gradient(circle, rgba(255,170,70,0.8) 0%, rgba(220,110,40,0.3) 50%, rgba(220,110,40,0) 76%)' } }
      ]
    },
    Numbers: {
      gradient: 'linear-gradient(180deg, #101a33 0%, #1e2c4d 16%, #3d3b63 32%, #7a5a63 46%, #c08a54 60%, #d9a860 72%, #a9793f 84%, #5c3d24 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'38%' } },
        { type:'glow', style:{ left:'64%', top:'10%', width:180, height:180, marginLeft:-90, marginTop:-90, background:'radial-gradient(circle, rgba(220,230,255,0.75) 0%, rgba(160,180,230,0.3) 46%, rgba(160,180,230,0) 72%)' } },
        { type:'ridge', style:{ top:'52%', height:'18%', background:'#b3854a', opacity:0.5, clipPath:DUNE_BACK } },
        { type:'ridge', style:{ top:'60%', height:'18%', background:'#8a6234', opacity:0.65, clipPath:DUNE_FRONT } },
        { type:'glow', style:{ left:'34%', bottom:'4%', width:170, height:220, marginLeft:-85, marginBottom:-110, background:'radial-gradient(circle, rgba(255,180,90,0.8) 0%, rgba(230,120,50,0.32) 48%, rgba(230,120,50,0) 74%)' } }
      ]
    },
    Deuteronomy: {
      gradient: 'linear-gradient(180deg, #f2c877 0%, #e8a35f 16%, #c98a56 30%, #9a7a52 44%, #6f8a5a 58%, #4d7a54 72%, #3a6b62 86%, #2b5570 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'6%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(255,240,200,0.9) 0%, rgba(255,214,150,0.35) 46%, rgba(255,214,150,0) 72%)' } },
        { type:'ridge', style:{ top:'38%', height:'22%', background:'#7a5a38', opacity:0.55, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ top:'46%', height:'20%', background:'#5c4426', opacity:0.7, clipPath:RIDGE_JAG_FRONT } },
        { type:'water', style:{ background:'linear-gradient(180deg, rgba(43,85,112,0) 0%, rgba(43,85,112,0.65) 100%)' } }
      ]
    },
    Joshua: {
      gradient: 'linear-gradient(180deg, #ffe9b0 0%, #f2c877 14%, #d9a45f 28%, #8fae62 46%, #5f9459 62%, #3f7a5c 78%, #2b6478 90%, #1c4a66 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'4%', width:230, height:230, marginLeft:-115, marginTop:-115, background:'radial-gradient(circle, rgba(255,246,214,0.9) 0%, rgba(255,224,160,0.35) 46%, rgba(255,224,160,0) 72%)' } },
        { type:'ridge', style:{ top:'34%', height:'20%', background:'#6b8a48', opacity:0.5, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ top:'42%', height:'18%', background:'#4d6e3a', opacity:0.65, clipPath:RIDGE_JAG_FRONT } },
        { type:'water', style:{ background:'linear-gradient(180deg, rgba(28,74,102,0) 0%, rgba(28,74,102,0.7) 100%)' } }
      ]
    },
    Judges: {
      gradient: 'linear-gradient(180deg, #171226 0%, #2c1e3d 16%, #4a2d4d 32%, #6e3a4d 48%, #8a4438 62%, #a85c2e 76%, #6e3a1c 88%, #3a1d10 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'30%' } },
        { type:'ridge', style:{ top:'44%', height:'20%', background:'#4a2d33', opacity:0.55, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ top:'52%', height:'18%', background:'#33202a', opacity:0.7, clipPath:RIDGE_JAG_FRONT } },
        { type:'glow', style:{ left:'50%', bottom:'2%', width:240, height:200, marginLeft:-120, marginBottom:-100, background:'radial-gradient(circle, rgba(255,150,60,0.75) 0%, rgba(210,90,30,0.3) 50%, rgba(210,90,30,0) 76%)' } }
      ]
    },
    Ruth: {
      gradient: 'linear-gradient(180deg, #bfe0f0 0%, #e8ecc8 18%, #f0dc9a 36%, #e8c470 54%, #d9a850 70%, #c08a3c 84%, #8a5f28 100%)',
      decor: [
        { type:'glow', style:{ left:'68%', top:'6%', width:200, height:200, marginLeft:-100, marginTop:-100, background:'radial-gradient(circle, rgba(255,250,225,0.95) 0%, rgba(255,236,180,0.4) 46%, rgba(255,236,180,0) 72%)' } },
        { type:'ridge', style:{ top:'50%', height:'18%', background:'#d9b45c', opacity:0.5, clipPath:DUNE_BACK } },
        { type:'ridge', style:{ top:'58%', height:'18%', background:'#b8923e', opacity:0.6, clipPath:DUNE_FRONT } },
        { type:'sparkle', style:{ top:'40%', height:'26%' } }
      ]
    },
    "1 Samuel": {
      gradient: 'linear-gradient(180deg, #12102b 0%, #241d4a 18%, #3b2a63 34%, #5c3a6e 50%, #8a4d63 64%, #c98a56 80%, #e0b25c 92%, #a9793f 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'36%' } },
        { type:'glow', style:{ left:'50%', top:'14%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(230,214,255,0.7) 0%, rgba(180,150,230,0.28) 46%, rgba(180,150,230,0) 72%)' } },
        { type:'ridge', style:{ bottom:'8%', height:'18%', background:'#7a5a30', opacity:0.55, clipPath:RIDGE_JAG_BACK } },
        { type:'glow', style:{ left:'50%', bottom:'0%', width:220, height:180, marginLeft:-110, marginBottom:-90, background:'radial-gradient(circle, rgba(255,214,120,0.75) 0%, rgba(230,160,60,0.3) 50%, rgba(230,160,60,0) 76%)' } }
      ]
    },
    "2 Samuel": {
      gradient: 'linear-gradient(180deg, #f2d98a 0%, #d9a860 16%, #b87a3e 32%, #8a4d3a 48%, #6e3a4d 62%, #4a2d52 76%, #2c1d44 90%, #171230 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'6%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(255,240,200,0.85) 0%, rgba(255,214,150,0.32) 46%, rgba(255,214,150,0) 72%)' } },
        { type:'ridge', style:{ top:'36%', height:'20%', background:'#9a6a3a', opacity:0.5, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ top:'44%', height:'18%', background:'#7a4d2c', opacity:0.65, clipPath:RIDGE_JAG_FRONT } },
        { type:'stars', style:{ bottom:0, height:'28%' } },
        { type:'glow', style:{ left:'34%', bottom:'4%', width:190, height:190, marginLeft:-95, marginBottom:-95, background:'radial-gradient(circle, rgba(190,160,255,0.55) 0%, rgba(140,110,220,0.25) 48%, rgba(140,110,220,0) 74%)' } }
      ]
    },
    "1 Kings": {
      gradient: 'linear-gradient(180deg, #1a1433 0%, #34255c 16%, #5c3a7a 32%, #8a5a63 46%, #c9924a 60%, #e8c46c 72%, #b8863e 84%, #6e4a24 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'32%' } },
        { type:'glow', style:{ left:'50%', top:'40%', width:270, height:270, marginLeft:-135, marginTop:-135, background:'radial-gradient(circle, rgba(255,226,150,0.85) 0%, rgba(240,190,90,0.35) 46%, rgba(240,190,90,0) 72%)' } },
        { type:'ridge', style:{ bottom:'10%', height:'20%', background:'#8a6230', opacity:0.5, clipPath:DUNE_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'18%', background:'#6e4a24', opacity:0.7, clipPath:DUNE_FRONT } },
        { type:'sparkle', style:{ top:'34%', height:'24%' } }
      ]
    },
    "2 Kings": {
      gradient: 'linear-gradient(180deg, #e8d9a0 0%, #c9a860 14%, #9a7440 28%, #6e4a3a 44%, #4a3352 58%, #302448 72%, #1c1636 86%, #100c26 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'8%', width:230, height:230, marginLeft:-115, marginTop:-115, background:'radial-gradient(circle, rgba(255,240,200,0.8) 0%, rgba(240,200,120,0.3) 48%, rgba(240,200,120,0) 74%)' } },
        { type:'ridge', style:{ top:'34%', height:'22%', background:'#8a6236', opacity:0.5, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ top:'42%', height:'18%', background:'#5c4028', opacity:0.65, clipPath:RIDGE_JAG_FRONT } },
        { type:'stars', style:{ bottom:0, height:'34%' } },
        { type:'glow', style:{ left:'62%', bottom:'6%', width:180, height:180, marginLeft:-90, marginBottom:-90, background:'radial-gradient(circle, rgba(150,130,230,0.5) 0%, rgba(110,90,200,0.22) 50%, rgba(110,90,200,0) 76%)' } }
      ]
    },
    "Ezra": {
      gradient: 'linear-gradient(180deg, #1c1636 0%, #34285c 16%, #5c4a86 32%, #8a6f9e 46%, #c9a878 62%, #e8ce8c 76%, #b89a56 88%, #7a6236 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'30%' } },
        { type:'glow', style:{ left:'50%', top:'52%', width:260, height:260, marginLeft:-130, marginTop:-130, background:'radial-gradient(circle, rgba(255,236,180,0.8) 0%, rgba(230,200,120,0.32) 48%, rgba(230,200,120,0) 74%)' } },
        { type:'ridge', style:{ bottom:'8%', height:'18%', background:'#8a7040', opacity:0.5, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'15%', background:'#6e5630', opacity:0.7, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Nehemiah": {
      gradient: 'linear-gradient(180deg, #e8d0a0 0%, #cfa870 14%, #a67c48 30%, #7a5636 46%, #56405c 62%, #3a2d52 76%, #241d40 90%, #14102c 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'10%', width:220, height:220, marginLeft:-110, marginTop:-110, background:'radial-gradient(circle, rgba(255,238,200,0.8) 0%, rgba(240,200,130,0.3) 48%, rgba(240,200,130,0) 74%)' } },
        { type:'ridge', style:{ top:'40%', height:'16%', background:'#8a6a3e', opacity:0.6, clipPath:DUNE_BACK } },
        { type:'ridge', style:{ top:'48%', height:'14%', background:'#6e5230', opacity:0.75, clipPath:DUNE_FRONT } },
        { type:'stars', style:{ bottom:0, height:'30%' } }
      ]
    },
    "Esther": {
      gradient: 'linear-gradient(180deg, #2c1030 0%, #4a1c4d 16%, #6e2a63 32%, #94406e 48%, #b85c6e 62%, #d98a6e 76%, #b8623e 88%, #7a3a24 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'34%' } },
        { type:'glow', style:{ left:'50%', top:'22%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(255,200,220,0.6) 0%, rgba(220,140,190,0.25) 48%, rgba(220,140,190,0) 74%)' } },
        { type:'sparkle', style:{ top:'12%', height:'30%' } },
        { type:'ridge', style:{ bottom:'6%', height:'18%', background:'#8a4030', opacity:0.55, clipPath:RIDGE_JAG_BACK } },
        { type:'glow', style:{ left:'50%', bottom:'0%', width:200, height:160, marginLeft:-100, marginBottom:-80, background:'radial-gradient(circle, rgba(255,170,110,0.6) 0%, rgba(230,120,70,0.25) 50%, rgba(230,120,70,0) 76%)' } }
      ]
    },
    "Job": {
      gradient: 'linear-gradient(180deg, #10121f 0%, #1e2236 16%, #303852 32%, #4a5470 48%, #6e7a94 62%, #9aa6b8 76%, #6e7a94 88%, #3a4258 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'40%' } },
        { type:'glow', style:{ left:'50%', top:'34%', width:280, height:280, marginLeft:-140, marginTop:-140, background:'radial-gradient(circle, rgba(200,214,240,0.55) 0%, rgba(150,170,210,0.22) 50%, rgba(150,170,210,0) 76%)' } },
        { type:'ridge', style:{ bottom:'10%', height:'20%', background:'#4a5468', opacity:0.6, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'16%', background:'#343c50', opacity:0.8, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Psalms": {
      gradient: 'linear-gradient(180deg, #14102e 0%, #28205c 14%, #40348a 28%, #5c4aa8 42%, #8a6fc0 56%, #c0a0d9 70%, #e8cfa0 84%, #c9a060 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'42%' } },
        { type:'glow', style:{ left:'50%', top:'18%', width:260, height:260, marginLeft:-130, marginTop:-130, background:'radial-gradient(circle, rgba(220,200,255,0.7) 0%, rgba(170,140,230,0.28) 48%, rgba(170,140,230,0) 74%)' } },
        { type:'sparkle', style:{ top:'8%', height:'34%' } },
        { type:'glow', style:{ left:'50%', bottom:'2%', width:230, height:180, marginLeft:-115, marginBottom:-90, background:'radial-gradient(circle, rgba(255,224,150,0.7) 0%, rgba(230,180,90,0.28) 50%, rgba(230,180,90,0) 76%)' } }
      ]
    },
    "Proverbs": {
      gradient: 'linear-gradient(180deg, #2c2410 0%, #4a3c1c 16%, #6e5a2c 32%, #94783a 48%, #b8964a 62%, #d9b862 76%, #b8964a 88%, #6e5a2c 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'14%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(255,240,190,0.8) 0%, rgba(240,210,130,0.32) 48%, rgba(240,210,130,0) 74%)' } },
        { type:'sparkle', style:{ top:'6%', height:'28%' } },
        { type:'ridge', style:{ bottom:'8%', height:'18%', background:'#8a7036', opacity:0.55, clipPath:DUNE_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'15%', background:'#6e582c', opacity:0.75, clipPath:DUNE_FRONT } }
      ]
    }
  };

  function renderDecor(d, key){
    const base = { position:'absolute', left:0, right:0, ...d.style };
    if (d.type === 'stars') return e('div', {className:'dl-stars', style:base, key});
    if (d.type === 'glow') return e('div', {className:'dl-glow', style:{ position:'absolute', ...d.style }, key});
    if (d.type === 'ridge') return e('div', {className:'dl-ridge', style:{ position:'absolute', left:'-5%', width:'110%', ...d.style }, key});
    if (d.type === 'water') return e('div', {className:'dl-water', style:base, key});
    if (d.type === 'sparkle') return e('div', {className:'dl-sparkle', style:base, key});
    return null;
  }

  function scene(topColor, botColor, decor){
    return { topColor, botColor, decor };
  }

  const LESSONS = [
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
        { q:"Was being unclean the same as sinning?", opts:["Yes, always", "No \u2014 it meant being temporarily unable to come to the Tabernacle", "Yes, and it was permanent"], correct:1, explain:"Many things that made someone unclean, like illness, weren't wrong at all \u2014 uncleanness was about access to sacred space, not guilt." },
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
        { q:"What happened to the land every seventh year?", opts:["It was sold", "It rested \u2014 unplanted and unharvested", "It was divided again"], correct:1, explain:"Even the soil got a sabbath \u2014 rest was woven into the rhythm of creation, not just the week." },
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
        { q:"How long might Israel stay camped in one place?", opts:["Always exactly one week", "A night or a year \u2014 however long the cloud stayed", "Never more than a day"], correct:1, explain:"Sometimes the cloud rested briefly, sometimes for a long season \u2014 the timing belonged to God." }
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
        { q:"Where did Moses say the command could be found?", opts:["In heaven, out of reach", "Across the sea", "Very near \u2014 in their mouth and heart"], correct:2, explain:"Obedience wasn't an impossible quest \u2014 God had already brought His word within reach." },
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
        { q:"What was Israel's strategy against Jericho's walls?", opts:["Siege towers", "Marching, trumpets, and a shout \u2014 as God commanded", "Tunneling underneath"], correct:1, explain:"The plan made no military sense \u2014 which was exactly the point. The victory would be unmistakably God's." },
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
        { q:"Why did Israel march to defend Gibeon?", opts:["For payment", "Because of the covenant they had sworn \u2014 even one gained by deception", "To capture the city"], correct:1, explain:"Israel honored the treaty at real cost \u2014 an all-night march into a five-king battle." },
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
        { q:"What is the repeating cycle of Judges?", opts:["Sin, oppression, crying out, deliverance \u2014 then sin again", "War, peace, war", "Kings rising and falling"], correct:0, explain:"The cycle repeats through the whole book, spiraling downward each time." },
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
        { q:"What happened in the Midianite camp?", opts:["A long siege", "Panic \u2014 the enemy fled before a battle was fought", "A negotiated surrender"], correct:1, explain:"The victory was won by confusion God sent, not by combat \u2014 exactly as designed." }
      ],
      deepDive: "The whittling of Gideon's army is one of Scripture's clearest statements about how God works: the odds are deliberately made impossible so the outcome can't be misread. Thirty-two thousand against Midian was a fight; three hundred with kitchenware was a testimony. God names the danger explicitly \u2014 \u2018so that Israel may not boast\u2019 \u2014 the same warning Deuteronomy gave about prosperity. The strategy of torches hidden in pitchers, suddenly revealed, became a favorite image for later writers: unimpressive vessels, broken open, blazing with light that was never theirs." },
    { id:64, book:"Judges", title:"Samson's calling", side:"r",
      passage: "To a childless couple, the angel of the Lord announced a son who would begin to deliver Israel from the Philistines. He was to be a Nazirite from birth \u2014 no wine, no razor to his head, set apart to God. Samson grew, and the Spirit of the Lord began to move him. His strength became legendary: he tore a lion apart with his bare hands and struck down a thousand Philistines with the jawbone of a donkey.",
      keyVerses: [
        { ref: "Judges 13:5", text: "He will take the lead in delivering Israel from the hands of the Philistines." }
      ],
      questions: [
        { q:"What was Samson set apart as from birth?", opts:["A priest", "A Nazirite \u2014 no wine, no razor, devoted to God", "A king"], correct:1, explain:"The Nazirite vow (from Numbers) was usually temporary and voluntary \u2014 Samson's was lifelong and God-assigned." },
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
        { q:"How did Samson's story end?", opts:["He escaped and lived quietly", "In prayer \u2014 God answered, and his final act broke Philistine power", "The Philistines released him"], correct:1, explain:"\u2018Remember me\u2019 \u2014 his first recorded dependence on God \u2014 was answered. The text notes he accomplished more in his death than in his life." }
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
        { q:"What was gleaning?", opts:["Stealing from fields", "Gathering leftover grain \u2014 the harvest margin the law reserved for the poor", "A harvest festival"], correct:1, explain:"The command from Leviticus \u2014 leave the edges and leftovers for the poor and the foreigner \u2014 is exactly what feeds Ruth." },
        { q:"How does the text describe Ruth finding Boaz's field?", opts:["An angel led her", "\u2018As it happened\u2019 she found it \u2014 seeming chance carrying providence", "Naomi drew her a map"], correct:1, explain:"The storyteller winks: what looks like luck is God's quiet steering \u2014 the book's signature move." },
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
        { q:"Where was David when the choosing happened?", opts:["At the feast", "Out keeping the sheep \u2014 not even summoned", "In Saul's court"], correct:1, explain:"His own father hadn't considered him \u2014 the future king was the family afterthought." },
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
        { q:"Why did David refuse Saul's armor?", opts:["It didn't fit and wasn't his \u2014 he had not proved it", "It was too heavy to lift", "Saul refused to lend it"], correct:0, explain:"David fought as himself \u2014 a shepherd with a shepherd's weapon \u2014 trusting the God who had delivered him from lion and bear." },
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
        { q:"What did David actually do?", opts:["Nothing at all", "Cut the corner of Saul's robe \u2014 and felt convicted even for that", "Took Saul captive"], correct:1, explain:"His conscience struck him over a piece of cloth \u2014 a tenderness of heart that defined him more than the sling ever did." },
        { q:"Why did David refuse to harm Saul?", opts:["Fear of Saul's army", "Saul was the Lord's anointed \u2014 removing him was God's business, not David's", "A treaty required it"], correct:1, explain:"David refused to seize by violence what God had promised to give \u2014 the throne would come in God's way and time." }
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
        { q:"What did David want to build?", opts:["A palace for himself", "A temple \u2014 a house for God", "A wall around Jerusalem"], correct:1, explain:"It troubled David that he lived in cedar while the ark stayed in a tent \u2014 the desire itself was honored even as the plan was redirected." },
        { q:"What was God's reversal in Nathan's message?", opts:["God would build David a \u2018house\u2019 \u2014 a dynasty enduring forever", "The temple would never be built", "David would lose his throne"], correct:0, explain:"David offered God a building; God promised David an everlasting kingdom \u2014 the gift ran the other direction." },
        { q:"How did David respond to the promise?", opts:["He started construction anyway", "He sat before the Lord in humble amazement \u2014 \u2018Who am I?\u2019", "He demanded proof"], correct:1, explain:"The shepherd-king's response to the Bible's biggest royal promise was not pride but wonder." }
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
        { q:"What motivated the kindness?", opts:["Political strategy", "David's covenant with Jonathan \u2014 kindness \u2018for Jonathan's sake\u2019", "A prophet's command"], correct:1, explain:"A promise made years earlier between friends was kept when only one of them remained alive to honor it." }
      ],
      deepDive: "The Mephibosheth story is the Bible's picture of covenant kindness \u2014 the Hebrew word is hesed, the same loyal love Ruth showed Naomi. Mephibosheth had nothing to offer, a name that marked him as a rival, and legs that couldn't carry him to the king; the king sent for him. Grace here has a specific shape: sought out, undeserved, grounded in a promise made to someone else, and ending at a table with a permanent place setting. Many readers across the centuries have seen their own story in his \u2014 brought to the table not for their merit, but for the sake of another." },
    { id:84, book:"2 Samuel", title:"David and Bathsheba", side:"l",
      passage: "In the spring, when kings go off to war, David stayed in Jerusalem. From his roof he saw a woman bathing \u2014 Bathsheba, wife of Uriah the Hittite, one of his loyal soldiers. David sent for her, and she became pregnant. His cover-up escalated from deception to murder: he ordered Uriah placed at the front of the fiercest fighting and abandoned there. Uriah died, David married the widow, and the chapter ends with the Bible's quiet thunder: \u201cBut the thing David had done displeased the LORD.\u201d",
      keyVerses: [
        { ref: "2 Samuel 11:27", text: "But the thing David had done displeased the LORD." }
      ],
      questions: [
        { q:"What detail opens the chapter as a warning sign?", opts:["A famine had begun", "It was the season kings go to war \u2014 but David stayed home", "A prophet had left the city"], correct:1, explain:"The story starts with David out of position \u2014 the fall began before the rooftop, in the drift from his post." },
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
        { q:"How did David respond to \u2018You are the man\u2019?", opts:["\u2018I have sinned against the LORD\u2019 \u2014 immediate, unqualified confession", "He denied everything", "He exiled Nathan"], correct:0, explain:"Kings killed prophets for less \u2014 David's greatness resurfaces not in innocence but in how he received the truth." },
        { q:"What does the aftermath teach about forgiveness and consequences?", opts:["Forgiveness erased all consequences", "The sin was forgiven, yet consequences still followed in David's house", "There was no forgiveness"], correct:1, explain:"Grace was real and immediate; so were the ripples \u2014 the Bible refuses to simplify either side." }
      ],
      deepDive: "Nathan's parable is one of the most skillful confrontations ever recorded \u2014 truth delivered in a package that arrived before the defenses could rise. And David's response separates him forever from Saul: Saul, confronted, managed appearances (\u2018honor me before the elders\u2019); David, confronted, collapsed into honesty. Psalm 51, written from this rubble, became the prayer of every broken person since \u2014 asking not for image repair but for a new heart. The chapter's mature teaching is that forgiveness and consequences coexist: God put away David's sin, and David's family still fractured along the lines his choices had drawn. Grace is free; it is not pretend." },
    { id:86, book:"2 Samuel", title:"Absalom's rebellion", side:"c",
      passage: "The sword Nathan foretold rose within David's own house. His son Absalom \u2014 handsome, charming, wronged and unreconciled \u2014 spent years stealing the hearts of Israel at the city gate, then declared himself king at Hebron. David fled Jerusalem barefoot and weeping up the Mount of Olives rather than turn the city into a battlefield. When the armies finally met, David's one command rang out to every soldier: \u201cBe gentle with the young man Absalom for my sake.\u201d",
      keyVerses: [
        { ref: "2 Samuel 15:30", text: "David continued up the Mount of Olives, weeping as he went; his head was covered and he was barefoot." }
      ],
      questions: [
        { q:"How did Absalom win the people before the revolt?", opts:["He bribed the army", "Years of charm at the city gate \u2014 \u2018he stole the hearts of the men of Israel\u2019", "He performed miracles"], correct:1, explain:"The rebellion was built slowly, on flattery and a thousand small resentments \u2014 long before any sword was drawn." },
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
        { q:"Who killed Absalom, and against whose order?", opts:["A Philistine, by accident", "Joab \u2014 directly against David's command to be gentle", "David himself"], correct:1, explain:"Joab chose the kingdom's stability over the king's heart \u2014 pragmatism that solved a war and wounded a father forever." },
        { q:"What was David's reaction to the victory?", opts:["A triumphant feast", "Overwhelming grief \u2014 \u2018would I had died instead of you\u2019", "He rewarded Joab"], correct:1, explain:"The day's military triumph disappeared inside a father's mourning \u2014 the army crept back into the city as if defeated." },
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
        { q:"What does the song survey?", opts:["Only his victories as king", "A whole lifetime of God's rescues \u2014 from Saul, from enemies, from himself", "The building of the temple"], correct:1, explain:"The song (also Psalm 18) is autobiography turned to praise \u2014 every chapter of the story finds its place." },
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
        { q:"What was notable about the sound at the building site?", opts:["Constant hammering day and night", "No hammer or iron tool was heard \u2014 stones were finished at the quarry", "Singing drowned out the work"], correct:1, explain:"The house of God rose in reverent quiet \u2014 even the construction was an act of worship." },
        { q:"What did God say mattered more than the building itself?", opts:["Its size", "Obedience \u2014 walking in His statutes", "The amount of gold used"], correct:1, explain:"Mid-construction, God reframed the project: the temple's promise depended on the people's faithfulness, not the architecture." },
        { q:"Whose dream was Solomon completing?", opts:["His own alone", "His father David's \u2014 the son building what the father was promised", "Pharaoh's"], correct:1, explain:"The covenant of 2 Samuel 7 was being kept: David's son built the house, exactly as God had said." }
      ],
      deepDive: "The temple was the most magnificent structure Israel ever raised \u2014 and right in the middle of the blueprint chapters, God interrupts with a conditional: this house means nothing without obedience. It's the Bible's permanent warning about religious architecture, budgets, and beauty: God cannot be contained or impressed by buildings, a truth Solomon himself will say out loud at the dedication. The quiet construction site \u2014 no iron tool heard \u2014 gave Israel a parable in stone: what is truly sacred is assembled with reverence. The building took seven years; keeping the heart it pointed to would prove far harder." },
    { id:91, book:"1 Kings", title:"The glory fills the temple", side:"r",
      passage: "When the ark was brought into the finished temple, the cloud of the Lord's glory filled the house so thickly the priests could not stand to minister \u2014 the same glory that had filled the Tabernacle in Moses' day. Solomon's dedication prayer rose with astonishing theology: \u201cBut will God really dwell on earth? The heavens, even the highest heaven, cannot contain you. How much less this temple I have built!\u201d He asked instead that God's eyes be open toward the house night and day \u2014 hearing every prayer turned toward it, even the foreigner's.",
      keyVerses: [
        { ref: "1 Kings 8:27", text: "But will God really dwell on earth? The heavens, even the highest heaven, cannot contain you. How much less this temple I have built!" }
      ],
      questions: [
        { q:"What happened when the ark entered the temple?", opts:["Nothing unusual", "The cloud of God's glory filled the house so the priests couldn't stand", "An earthquake struck"], correct:1, explain:"The glory that filled Moses' Tabernacle now filled Solomon's temple \u2014 God publicly taking residence." },
        { q:"What stunning admission stands at the center of Solomon's prayer?", opts:["That the temple guaranteed God's presence", "That even the highest heaven cannot contain God \u2014 much less this house", "That only Israel could pray there"], correct:1, explain:"At the temple's own dedication, Solomon declared it could never contain the God it honored \u2014 theology at its most honest." },
        { q:"Whose prayers did Solomon ask God to hear?", opts:["Only the priests'", "Everyone's who prayed toward the house \u2014 including the foreigner's", "Only kings'"], correct:1, explain:"The dedication prayer explicitly welcomed the outsider \u2014 the temple was meant to make God's name known to all peoples." }
      ],
      deepDive: "The dedication of the temple is one of the Old Testament's summit moments \u2014 glory descending, a nation on its face, the Exodus promise \u2018I will dwell among them\u2019 visibly kept. Yet the wisest man alive stood in his own masterpiece and declared it too small: heaven itself cannot contain God. That single sentence guards against every temptation to shrink God to a building, a system, or a side. And Solomon's welcome to the foreigner's prayer reaches back to Abraham \u2014 blessed to be a blessing to all nations \u2014 and forward to a day when, as Jesus put it, true worshipers would worship neither on this mountain nor that one, but in spirit and in truth." },
    { id:92, book:"1 Kings", title:"The queen of Sheba", side:"c",
      passage: "The queen of Sheba heard reports of Solomon's fame and came from the ends of the known world to test him with hard questions. Nothing was too difficult for him to explain. When she had seen the wisdom, the palace, the food, the officials, and the worship at the temple, \u201cshe was overwhelmed\u201d \u2014 the half had not been told her \u2014 and she blessed the God who had set Solomon on the throne \u201cto maintain justice and righteousness.\u201d",
      keyVerses: [
        { ref: "1 Kings 10:7", text: "Indeed, not even half was told me; in wisdom and wealth you have far exceeded the report I heard." }
      ],
      questions: [
        { q:"Why did the queen of Sheba come to Jerusalem?", opts:["To conquer it", "To test Solomon with hard questions after hearing of his fame", "To buy cedar"], correct:1, explain:"Wisdom's reputation traveled a thousand miles \u2014 and drew a head of state to come examine it in person." },
        { q:"What was her verdict?", opts:["The reports were exaggerated", "\u2018The half was not told me\u2019 \u2014 reality exceeded the rumor", "She was unimpressed"], correct:1, explain:"She arrived skeptical and left overwhelmed \u2014 the rare case of a legend that undersold the truth." },
        { q:"Where did she direct her final praise?", opts:["To Solomon's architects", "To the LORD who set Solomon on the throne for justice and righteousness", "To her own journey"], correct:1, explain:"A foreign queen read the wisdom correctly \u2014 as evidence of Israel's God, and for the purpose of justice." }
      ],
      deepDive: "The queen of Sheba's visit is Israel's calling working exactly as designed: a nation so marked by God's wisdom that the world comes asking questions. Notably, she praises not just Solomon but Solomon's God \u2014 and names the throne's purpose as \u2018justice and righteousness,\u2019 the very things wisdom was requested for at Gibeon. Jesus later pointed back to her as a rebuke to his own generation: she traveled the ends of the earth for wisdom, \u2018and now something greater than Solomon is here.\u2019 The chapter is Solomon at his zenith \u2014 which makes what comes next, only one chapter later, all the more sobering." },
    { id:93, book:"1 Kings", title:"Solomon's fall", side:"l",
      passage: "King Solomon loved many foreign women \u2014 seven hundred wives, three hundred concubines \u2014 from the very nations God had warned would turn Israel's heart. \u201cAs Solomon grew old, his wives turned his heart after other gods, and his heart was not fully devoted to the LORD his God, as the heart of David his father had been.\u201d The wisest man who ever lived built high places for Chemosh and Molek on the hill facing Jerusalem. God's verdict: the kingdom would be torn from his son's hand \u2014 all but one tribe, kept for David's sake.",
      keyVerses: [
        { ref: "1 Kings 11:4", text: "As Solomon grew old, his wives turned his heart after other gods, and his heart was not fully devoted to the LORD his God." }
      ],
      questions: [
        { q:"What turned Solomon's heart?", opts:["A military defeat", "His many foreign wives and their gods \u2014 gradually, as he grew old", "Poverty"], correct:1, explain:"The fall wasn't one dramatic moment but a long drift \u2014 a thousand small allowances compounding over decades." },
        { q:"What makes Solomon's idolatry especially stunning?", opts:["He was the wisest man alive and had seen God twice", "He was very young", "He had never been warned"], correct:0, explain:"Wisdom, two divine appearances, and the temple itself \u2014 none of it substituted for a guarded heart." },
        { q:"What was the consequence?", opts:["Immediate exile", "The kingdom would be torn away \u2014 except one tribe, spared for David's sake", "Nothing at all"], correct:1, explain:"Judgment came tempered by covenant: the promise to David kept a lamp burning in Jerusalem." }
      ],
      deepDive: "Solomon's collapse is the Bible's most sobering study in drift. No one falls further from a higher starting point: wisdom straight from God, glory that stunned queens, and two personal encounters with the Almighty \u2014 undone not by a crisis but by accumulation, \u2018as Solomon grew old.\u2019 The text's key phrase is surgical: his heart was not \u2018fully devoted\u2019 \u2014 partially devoted, importantly devoted, but divided. Deuteronomy had warned kings specifically against multiplying wives, horses, and gold; Solomon multiplied all three. The lesson is not that wisdom fails, but that wisdom unapplied to one's own heart is the most dangerous knowledge of all. Beginning well, First Kings insists, is not the same as ending well." },
    { id:94, book:"1 Kings", title:"The kingdom divides", side:"r",
      passage: "Solomon's son Rehoboam went to Shechem to be crowned, and the people asked one thing: lighten the heavy yoke your father laid on us. The elders counseled him: serve them today, and they will serve you forever. His young friends counseled swagger: \u201cMy little finger is thicker than my father's waist.\u201d Rehoboam chose the swagger. Ten tribes tore away under Jeroboam, who promptly built two golden calves so his people wouldn't return to Jerusalem to worship: \u201cHere are your gods, Israel.\u201d The kingdom never reunited.",
      keyVerses: [
        { ref: "1 Kings 12:7", text: "If today you will be a servant to these people and serve them... they will always be your servants." }
      ],
      questions: [
        { q:"What did the people ask of Rehoboam?", opts:["A new temple", "A lighter yoke \u2014 relief from his father's harsh labor and taxes", "War with Egypt"], correct:1, explain:"Solomon's glory had been paid for by the people \u2014 the bill came due at his son's coronation." },
        { q:"Whose counsel did Rehoboam reject?", opts:["The elders who said \u2018serve the people and they will serve you forever\u2019", "The priests", "The prophets"], correct:0, explain:"Servant leadership was offered as the path to a lasting reign \u2014 and traded for a threat about his little finger." },
        { q:"What did Jeroboam build, and why?", opts:["A new temple in Jerusalem", "Two golden calves \u2014 so his people wouldn't worship in Jerusalem", "A wall around Shechem"], correct:1, explain:"Politics manufactured a religion: the words \u2018here are your gods, Israel\u2019 deliberately echo the sin at Sinai." }
      ],
      deepDive: "The kingdom split on a single arrogant sentence \u2014 and the elders' rejected counsel became one of Scripture's clearest statements on leadership: serve the people, and they will serve you. Centuries later, Jesus would make it the law of his own kingdom: whoever would be great must be servant of all. Jeroboam's golden calves, meanwhile, show how quickly fear corrupts worship \u2014 he invented a religion to protect a throne, and \u2018the sin of Jeroboam\u2019 became the refrain by which every northern king after him was measured. One chapter, two kings, two failures: pride that divides, and fear that counterfeits. The rest of Kings unfolds from here." },
    { id:95, book:"1 Kings", title:"Elijah and the ravens", side:"c",
      passage: "As Israel sank under Ahab and Jezebel \u2014 who made Baal worship the state religion \u2014 a prophet appeared from nowhere: Elijah the Tishbite, declaring to the king's face, \u201cAs the LORD, the God of Israel, lives, whom I serve, there will be neither dew nor rain in the next few years except at my word.\u201d Then God hid him by the brook Cherith, where ravens brought him bread and meat, and afterward sent him to a starving widow in Zarephath \u2014 whose jar of flour and jug of oil never ran dry through all the famine.",
      keyVerses: [
        { ref: "1 Kings 17:14", text: "The jar of flour will not be used up and the jug of oil will not run dry until the day the LORD sends rain." }
      ],
      questions: [
        { q:"What did Elijah declare to Ahab?", opts:["A coming flood", "No dew or rain except at his word \u2014 a direct challenge to Baal, the storm god", "A new tax"], correct:1, explain:"Baal was worshiped as lord of rain and storm \u2014 the drought was a duel aimed at his exact territory." },
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
        { q:"What was God's first response to Elijah's despair?", opts:["A rebuke", "Food and sleep \u2014 twice \u2014 before any words about his soul", "Immediate reassignment"], correct:1, explain:"The angel's treatment plan for a burned-out prophet began with the body: \u2018the journey is too much for you.\u2019" },
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
        { q:"What finally persuaded him?", opts:["A second miracle", "His servants' logic \u2014 you'd have done something hard; why not something simple?", "A letter from Elisha"], correct:1, explain:"Pride will attempt the heroic and refuse the humble \u2014 his servants saw it and said so." }
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
        { q:"How did the crisis end?", opts:["A bloody battle", "Elisha led the blinded army to Samaria \u2014 then fed them and sent them home", "The city was destroyed"], correct:1, explain:"The chapter closes with enemies at a banquet instead of a slaughter \u2014 and the raids stopped." }
      ],
      deepDive: "This chapter gives fear its most enduring biblical answer. The servant's panic was based on accurate data \u2014 the army really was there, really surrounding them. Elisha's calm was based on more complete data: the unseen host outnumbered the visible one. His prayer is the model \u2014 not \u2018change the situation\u2019 but \u2018open his eyes,\u2019 because the protection was already present. Then comes the twist most retellings skip: handed his enemies blind and helpless, Elisha forbids killing them and orders a feast instead. Bread and water for the raiders \u2014 and the raids stop. Seeing the armies of God, it turns out, frees a person not only from fear but from vengeance." },
    { id:102, book:"2 Kings", title:"Four lepers and good news", side:"c",
      passage: "Ben-Hadad besieged Samaria until the famine turned monstrous \u2014 a donkey's head sold for eighty shekels. Elisha promised the unthinkable: by tomorrow, flour and barley would sell cheap at the city gate. That night the LORD made the Aramean army hear chariots and a great host; they fled in the dark, abandoning everything. Four lepers, starving outside the gate, stumbled into the empty camp \u2014 tents full of food, silver, and clothes. After feasting and hoarding, they stopped: \u201cWe're not doing right. This is a day of good news and we are keeping it to ourselves.\u201d They went and told the city.",
      keyVerses: [
        { ref: "2 Kings 7:9", text: "This is a day of good news and we are keeping it to ourselves... let\u2019s go at once and report this." }
      ],
      questions: [
        { q:"Who discovered that the siege army had fled?", opts:["The king's scouts", "Four starving lepers outside the gate", "Elisha himself"], correct:1, explain:"The city's least \u2014 men barred from entering it \u2014 became the first to find the deliverance." },
        { q:"What stopped the lepers mid-hoard?", opts:["Soldiers returned", "Conscience \u2014 \u2018this is a day of good news and we are keeping it to ourselves\u2019", "The food ran out"], correct:1, explain:"Their sentence has echoed for centuries as the logic of evangelism: found bread demands to be shared." },
        { q:"What had emptied the enemy camp?", opts:["A plague", "The LORD made them hear the sound of a great army, and they fled at dusk", "Israel's army attacked"], correct:1, explain:"Not a sword was raised \u2014 the siege broke on a sound God played in Aramean ears." }
      ],
      deepDive: "The relief of Samaria is a story built on reversals: the deliverance no official believed, discovered by four men the city wouldn't let inside, won by an army that never fought. The lepers' turn at the tent flap \u2014 \u2018we are not doing right\u2019 \u2014 has become the Bible's plainest picture of witness: beggars telling other beggars where the bread is. No credentials, no eloquence, just found food and the honesty not to hoard it. And the royal officer who scoffed at Elisha's forecast (\u2018even if the LORD opened the floodgates of heaven!\u2019) saw the abundance and never tasted it \u2014 the chapter's sober footnote that cynicism can stand in the middle of a miracle and still starve." },
    { id:103, book:"2 Kings", title:"Joash, the boy king", side:"l",
      passage: "When wicked queen Athaliah saw her son was dead, she massacred the royal family and seized the throne \u2014 nearly extinguishing David's line. But one infant, Joash, was hidden by his aunt in the temple for six years. In the seventh year, Jehoiada the priest armed the guards, crowned the seven-year-old beside the pillar, and the people clapped and shouted \u201cLong live the king!\u201d Joash repaired the temple and did right all the days Jehoiada instructed him \u2014 a promising reign that lasted exactly as long as his mentor lived.",
      keyVerses: [
        { ref: "2 Kings 12:2", text: "Joash did what was right in the eyes of the LORD all the years Jehoiada the priest instructed him." }
      ],
      questions: [
        { q:"How did David's royal line survive Athaliah's massacre?", opts:["It didn't \u2014 the line ended", "One infant, Joash, was hidden in the temple for six years", "The family fled to Egypt"], correct:1, explain:"God's covenant with David hung on one hidden baby \u2014 and held." },
        { q:"How old was Joash when crowned?", opts:["Thirty", "Seven", "Sixteen"], correct:1, explain:"A seven-year-old beside the temple pillar, and the promise of 2 Samuel 7 was publicly alive again." },
        { q:"What was the quiet warning in Joash's story?", opts:["He did right \u2018all the years Jehoiada instructed him\u2019 \u2014 borrowed faith that faded when the mentor died", "He never repaired the temple", "He refused the crown"], correct:0, explain:"After Jehoiada's death, Joash drifted badly \u2014 faith sustained only by another person's presence proved not to be his own." }
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
        { q:"What had God done before judgment fell?", opts:["Nothing \u2014 it came without warning", "Warned them \u2018through all his prophets\u2019 for generations", "Sent one final letter"], correct:1, explain:"The exile arrived after centuries of patience \u2014 warning upon warning, prophet after prophet, all refused." }
      ],
      deepDive: "Second Kings 17 is the Old Testament's post-mortem \u2014 the narrator stops narrating and explains. The fall of Samaria wasn't a diplomatic failure or military bad luck; it was the harvest of two hundred years of choices, beginning with Jeroboam's golden calves and running through every ignored prophet since. What stands out is the patience being mourned: God \u2018warned them through all his prophets and seers,\u2019 generation after generation, before the end came. Judgment in Scripture is never sudden \u2014 it is slow, reluctant, and preceded by every possible offer of return. The chapter is written as a warning to the survivors: Judah watched it happen, and had the same choice in front of her." },
    { id:105, book:"2 Kings", title:"Hezekiah and the Assyrian threat", side:"c",
      passage: "The Assyrian war machine that swallowed Israel came next for Judah. The field commander stood outside Jerusalem's wall shouting propaganda in Hebrew: no god of any nation has ever stopped Assyria \u2014 don't let Hezekiah deceive you into trusting the LORD. Hezekiah took the blasphemous letter, went up to the temple, and spread it out before the LORD: \u201cYou alone are God over all the kingdoms of the earth... deliver us, so that all kingdoms may know that you alone, LORD, are God.\u201d That night the angel of the LORD struck the Assyrian camp, and Sennacherib went home to die in his own temple.",
      keyVerses: [
        { ref: "2 Kings 19:19", text: "Now, LORD our God, deliver us from his hand, so that all the kingdoms of the earth may know that you alone, LORD, are God." }
      ],
      questions: [
        { q:"What was the Assyrian commander's argument?", opts:["Surrender and be spared taxes", "No nation's god had ever stopped Assyria \u2014 so trusting the LORD was foolish", "Judah's walls were weak"], correct:1, explain:"The taunt lumped the living God in with the idols of conquered nations \u2014 the exact category error the story exists to correct." },
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
        { q:"What was found during the temple repairs?", opts:["Solomon's gold", "The Book of the Law \u2014 lost in God's own house", "The ark of the covenant"], correct:1, explain:"The most damning detail in the book: Scripture itself had been misplaced inside the temple built to honor it." },
        { q:"How did Josiah react to hearing it read?", opts:["He filed it away", "He tore his robes \u2014 grief at how far the nation had drifted", "He doubted its authenticity"], correct:1, explain:"The words measured the distance between what God asked and what Judah had become \u2014 and the king felt it physically." },
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
    { id:108, book:"Ezra", title:"Cyrus opens the door home", side:"c",
      passage: "Seventy years after Jerusalem burned, the impossible happened: Cyrus, king of Persia \u2014 the new superpower that had swallowed Babylon \u2014 issued a decree that God's people could go home and rebuild the temple. The book's first sentence names the engine behind it: \u201cthe LORD moved the heart of Cyrus.\u201d Nearly fifty thousand made the journey, carrying back the temple articles Nebuchadnezzar had looted, funded in part by the empire that had once destroyed them.",
      keyVerses: [
        { ref: "Ezra 1:1", text: "The LORD moved the heart of Cyrus king of Persia to make a proclamation throughout his realm." }
      ],
      questions: [
        { q:"Who does the book credit for Cyrus's decree?", opts:["Cyrus's advisors", "The LORD, who moved the king's heart", "A Persian law"], correct:1, explain:"The most powerful man on earth acted \u2014 and the text calmly names God as the one moving him." },
        { q:"What had Jeremiah prophesied about this moment?", opts:["Nothing", "That the exile would last seventy years \u2014 and it did", "That the temple would never be rebuilt"], correct:1, explain:"Ezra opens by noting the decree fulfilled \u2018the word of the LORD spoken by Jeremiah\u2019 \u2014 the exile had an expiration date all along." },
        { q:"What did the returnees carry back?", opts:["Nothing but memories", "The looted temple articles \u2014 and Persian funding", "Weapons for war"], correct:1, explain:"The stolen vessels went home, and the destroying empire's successor paid for the rebuild \u2014 restoration with interest." }
      ],
      deepDive: "Ezra opens with one of the Bible's boldest claims about history: the superpower's foreign-policy decision was God keeping a seventy-year-old promise. Isaiah had named Cyrus a century in advance; Jeremiah had set the exile's length before it began; and now a pagan king signs the paperwork of prophecy. The theology matters for every era since \u2014 God's purposes are not hostage to who holds power, and no exile, personal or national, is outside His calendar. The people who walked home were mostly grandchildren of the deported, returning to a city they'd never seen, on the strength of promises made before they were born. Faith, Ezra suggests, is often inherited hope finally cashed." },
    { id:109, book:"Ezra", title:"Weeping and shouting at the foundation", side:"l",
      passage: "The returnees built the altar first \u2014 worship before walls \u2014 and then laid the foundation of the new temple. At the dedication, the sound was unforgettable: the young shouted for joy, while the old men who had seen Solomon's temple wept aloud at how small this one was. \u201cNo one could distinguish the sound of the shouts of joy from the sound of weeping, because the people made so much noise.\u201d",
      keyVerses: [
        { ref: "Ezra 3:13", text: "No one could distinguish the sound of the shouts of joy from the sound of weeping." }
      ],
      questions: [
        { q:"What did the returnees build first?", opts:["The walls", "The altar \u2014 worship before infrastructure", "Their own houses"], correct:1, explain:"Before any stone of the temple was laid, the sacrifices resumed \u2014 the relationship was the point of the return." },
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
        { q:"What did the archive search uncover?", opts:["Nothing", "Cyrus's original decree \u2014 the opposition's appeal backfired into royal funding", "A forgery"], correct:1, explain:"The enemies' own legal challenge unearthed the document that protected and paid for the project." }
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
        { q:"What does \u2018devoted himself\u2019 literally suggest?", opts:["A casual interest", "A set, prepared heart \u2014 a deliberate life-orientation", "A temporary vow"], correct:1, explain:"The Hebrew says Ezra \u2018set his heart\u2019 \u2014 devotion as a decision made once and kept daily." }
      ],
      deepDive: "Ezra 7:10 is one verse that has quietly shaped centuries of teachers, pastors, and ordinary readers: study, then do, then teach \u2014 a sequence with no honest shortcuts. Study without doing breeds hypocrisy; doing without study breeds error; teaching before either breeds both. Ezra \u2018set his heart\u2019 \u2014 the same phrase used of preparing a foundation \u2014 meaning the devotion was architectural, built in before the tests came. And the chapter's repeated refrain, \u2018the hand of the LORD was on him,\u2019 links the set heart to the open doors: the favor followed the devotion, not the other way around. For anyone wanting their life to carry weight with God's word, this verse is the blueprint." },
    { id:112, book:"Ezra", title:"Grief, confession, and turning back", side:"l",
      passage: "Ezra arrived to find the community compromised \u2014 the people, priests, and leaders had intermarried into the surrounding idolatry, the very entanglement that had wrecked Israel before. Ezra tore his garments and sat appalled until evening, then prayed one of Scripture's great confessions \u2014 including himself in it: \u201cOur sins are higher than our heads... yet our God has not forsaken us.\u201d The people gathered weeping, and reform followed \u2014 painful, imperfect, and real.",
      keyVerses: [
        { ref: "Ezra 9:6", text: "I am too ashamed and disgraced... our sins are higher than our heads and our guilt has reached to the heavens." }
      ],
      questions: [
        { q:"How did Ezra respond to the news of compromise?", opts:["He resigned", "Torn garments, appalled silence, then confession", "He ignored it"], correct:1, explain:"The scholar's first act was grief \u2014 sin measured against the Word he had set his heart to." },
        { q:"What pronoun dominates Ezra's confession?", opts:["\u2018They\u2019 \u2014 blaming the guilty", "\u2018Our\u2019 and \u2018we\u2019 \u2014 he confessed as one of them", "\u2018You\u2019 \u2014 accusing God"], correct:1, explain:"Ezra hadn't committed the sin, but he owned it with his people \u2014 intercession, not finger-pointing." },
        { q:"What note of hope anchors the prayer?", opts:["\u2018Our God has not forsaken us\u2019 \u2014 grace even in the wreckage", "That Persia would help", "That the sin didn't matter"], correct:0, explain:"The confession is severe and hopeful at once \u2014 a \u2018brief moment of grace\u2019 acknowledged even while naming the guilt." }
      ],
      deepDive: "Ezra's confession models something nearly extinct: a leader who says \u2018we\u2019 about sins he didn't personally commit. He had every right to say \u2018they\u2019 \u2014 he'd just arrived \u2014 but identification, not accusation, is the grammar of intercession, the same \u2018our\u2019 Daniel and Nehemiah pray in exile. The chapter is also honest about how costly turning back can be; the reforms of chapter 10 were wrenching, and the book doesn't pretend otherwise. What it insists on is the stakes: the exile had happened for exactly this drift, and grace \u2014 \u2018a remnant, a peg in his holy place, light to our eyes\u2019 \u2014 was too precious to squander twice. Repentance, in Ezra, is love for the second chance." },
    { id:113, book:"Nehemiah", title:"Broken walls, broken heart", side:"r",
      passage: "In the Persian citadel of Susa, Nehemiah \u2014 cupbearer to the king \u2014 asked visitors from Judah how Jerusalem fared. The answer: the wall broken, the gates burned, the people in disgrace. Nehemiah sat down and wept, and for days he mourned, fasted, and prayed \u2014 confessing his people's sins as his own and pleading the promises of Moses. His prayer ends with a plan already forming: \u201cGive your servant success today by granting him favor in the presence of this man.\u201d This man was the most powerful king on earth.",
      keyVerses: [
        { ref: "Nehemiah 1:4", text: "When I heard these things, I sat down and wept. For some days I mourned and fasted and prayed before the God of heaven." }
      ],
      questions: [
        { q:"What was Nehemiah's position in Persia?", opts:["A general", "Cupbearer to the king \u2014 trusted, close, and comfortable", "A prisoner"], correct:1, explain:"He had security and access most exiles could only dream of \u2014 which makes what he risked next remarkable." },
        { q:"What was his first response to the bad news?", opts:["He organized a committee", "He wept, mourned, fasted, and prayed for days", "He wrote the king a memo"], correct:1, explain:"Before any strategy, grief and prayer \u2014 the burden went to God before it went to the king." },
        { q:"How does his prayer end?", opts:["With resignation", "With a request for favor \u2018in the presence of this man\u2019 \u2014 prayer turning into a plan", "With blame"], correct:1, explain:"Nehemiah's praying and his planning were one motion \u2014 he asked God for the exact conversation he was preparing to have." }
      ],
      deepDive: "Nehemiah opens with a man who could have looked away. Jerusalem's ruin didn't threaten his palace job or his safety \u2014 the disgrace was eight hundred miles away. But he asked, and having asked, he wept; and having wept, he prayed for days; and having prayed, he planned. The sequence is the leadership lesson of the whole book: burden first, prayer under everything, strategy growing out of both. Notice too that his great prayer is mostly quotation \u2014 he prays Moses' own words back to God, holding the covenant to its promises. Vision, in Nehemiah, doesn't start with ambition. It starts with caring about a ruin you could have comfortably ignored." },
    { id:114, book:"Nehemiah", title:"Before the king", side:"c",
      passage: "Four months later, the moment came. The king noticed his cupbearer's sadness \u2014 dangerous, since sorrow in the royal presence could cost your life \u2014 and asked why. \u201cI was very much afraid,\u201d Nehemiah admits, \u201cbut I said to the king...\u201d and out came the request: send me to rebuild my ancestors' city. Between the king's question and his own answer, Nehemiah wedged the fastest prayer in the Bible: \u201cThen I prayed to the God of heaven, and I answered the king.\u201d He left with letters, timber, and an armed escort.",
      keyVerses: [
        { ref: "Nehemiah 2:4", text: "The king said to me, \u201cWhat is it you want?\u201d Then I prayed to the God of heaven, and I answered the king." }
      ],
      questions: [
        { q:"How long passed between the news and the opportunity?", opts:["One day", "About four months \u2014 praying and waiting", "Ten years"], correct:1, explain:"The burden of chapter 1 waited through a season of silence before the door opened \u2014 readiness met timing." },
        { q:"What is remarkable about the prayer in 2:4?", opts:["Its length", "It happened in the breath between the king's question and Nehemiah's answer", "It was written down and read"], correct:1, explain:"Months of long prayers made the split-second one possible \u2014 the arrow prayer flew from a full quiver." },
        { q:"What did Nehemiah do despite being \u2018very much afraid\u2019?", opts:["He stayed silent", "He made the request anyway \u2014 fully prepared with specifics", "He resigned his post"], correct:1, explain:"Courage in Nehemiah isn't the absence of fear \u2014 it's a prepared request delivered with shaking hands." }
      ],
      deepDive: "Nehemiah 2:4 holds two kinds of prayer in one verse: the four months of fasting behind it, and the half-second flash of it \u2014 \u2018then I prayed to the God of heaven, and I answered the king.\u2019 The quick prayer worked because the long prayers had already done their forming. Notice also how prepared he was: asked what he wants, Nehemiah produces a timeline, a route, named officials, and a lumber requisition \u2014 faith and homework in the same sentence. And his own admission, \u2018I was very much afraid,\u2019 keeps the story honest: God's work advances not through fearless people but through frightened people who ask anyway. The king said yes \u2014 \u2018because the gracious hand of my God was on me.\u2019" },
    { id:115, book:"Nehemiah", title:"A sword in one hand, a trowel in the other", side:"l",
      passage: "The wall rose with astonishing speed because everyone built \u2014 priests, perfumers, goldsmiths, rulers, daughters \u2014 each family repairing the section nearest their own house. Then came the mockery: Sanballat and Tobiah jeering that a fox could break their stone wall. Then threats of attack. Nehemiah's answer became proverbial: he posted guards, armed the builders \u2014 \u201cthose who carried materials did their work with one hand and held a weapon in the other\u201d \u2014 and told the people, \u201cRemember the Lord, who is great and awesome, and fight for your families.\u201d",
      keyVerses: [
        { ref: "Nehemiah 4:14", text: "Don\u2019t be afraid of them. Remember the Lord, who is great and awesome, and fight for your families." }
      ],
      questions: [
        { q:"Who built the wall?", opts:["Hired Persian crews", "Everyone \u2014 priests, perfumers, goldsmiths, families at their own sections", "Only soldiers"], correct:1, explain:"Chapter 3 is a roll call of amateurs \u2014 the wall went up because the work was everyone's." },
        { q:"How did opposition escalate?", opts:["It never came", "Mockery first, then threats of violence", "A single battle"], correct:1, explain:"Ridicule is opposition's cheapest weapon and usually its first \u2014 when the wall kept rising, threats followed." },
        { q:"What was Nehemiah's double response?", opts:["Prayer alone", "\u2018We prayed to our God and posted a guard\u2019 \u2014 trust and preparation together", "Retreat"], correct:1, explain:"The book's signature move: full dependence on God and full diligence in defense, refusing to choose between them." }
      ],
      deepDive: "Nehemiah 4 settles a false choice believers have argued about forever: pray or prepare? Nehemiah's answer is a single sentence \u2014 \u2018we prayed to our God and posted a guard against them day and night.\u2019 Not prayer instead of vigilance, not vigilance instead of prayer. The image of builders with a trowel in one hand and a sword in the other became the emblem of every generation doing good work under fire: the work goes on, and the work is defended. Notice also where courage gets aimed \u2014 \u2018fight for your families\u2019 \u2014 and where fear gets answered: \u2018remember the Lord.\u2019 Half the battle against discouragement, this chapter teaches, is simply remembering accurately." },
    { id:116, book:"Nehemiah", title:"\u201cShould a man like me run?\u201d", side:"r",
      passage: "With the wall nearly done, the attacks turned personal. Four times Sanballat invited Nehemiah to a \u2018meeting\u2019 on the plain of Ono \u2014 a trap \u2014 and four times came the same answer: \u201cI am carrying on a great project and cannot go down.\u201d Then an open letter of slander, then a hired prophet urging him to hide in the temple from assassins. Nehemiah saw through it: \u201cShould a man like me run away?\u201d The wall was finished in fifty-two days \u2014 and even the enemies \u201crealized that this work had been done with the help of our God.\u201d",
      keyVerses: [
        { ref: "Nehemiah 6:3", text: "I am carrying on a great project and cannot go down. Why should the work stop while I leave it and go down to you?" }
      ],
      questions: [
        { q:"How did Nehemiah answer the repeated \u2018meeting\u2019 invitations?", opts:["He attended once", "\u2018I am carrying on a great project and cannot go down\u2019 \u2014 four times", "He sent soldiers"], correct:1, explain:"He recognized distraction dressed as diplomacy \u2014 and gave the same clear no every time." },
        { q:"What was the final tactic against him?", opts:["A bribe", "A hired prophet urging him to hide in the temple \u2014 to discredit him through fear", "An army at the gates"], correct:1, explain:"The subtlest attack came wrapped in religious advice \u2014 designed to make the leader sin by saving himself." },
        { q:"How long did the wall take?", opts:["Fifty-two days", "Seven years", "A generation"], correct:0, explain:"What lay ruined for well over a century was rebuilt in under two months \u2014 and even the enemies read the cause correctly." }
      ],
      deepDive: "Nehemiah 6 is the veteran's chapter \u2014 opposition's advanced course. When mockery and threats fail, the tactics get personal: endless meetings designed to drain, public slander designed to distract, and finally spiritual-sounding counsel designed to induce a discrediting compromise. Nehemiah's replies are a masterclass in focus: \u2018I am carrying on a great project and cannot go down\u2019 \u2014 no counter-attack, no self-defense tour, just the work. And his test for the false prophet is worth keeping: counsel urging self-protective sin cannot be from God, however pious it sounds. Fifty-two days after the first stone, the wall stood \u2014 and the enemies' own conclusion, that \u2018this work had been done with the help of our God,\u2019 is the vindication Nehemiah never had to write himself." },
    { id:117, book:"Nehemiah", title:"The joy of the LORD is your strength", side:"c",
      passage: "With the wall complete, the real rebuilding began. All the people gathered as one in the square, and Ezra read the Book of the Law aloud from daybreak till noon \u2014 with Levites moving through the crowd \u201cgiving the meaning so that the people understood what was being read.\u201d The people wept as the words landed. But Nehemiah and Ezra stopped them: this day is holy \u2014 go feast, send portions to those who have nothing, \u201cfor the joy of the LORD is your strength.\u201d",
      keyVerses: [
        { ref: "Nehemiah 8:10", text: "Do not grieve, for the joy of the LORD is your strength." }
      ],
      questions: [
        { q:"What did the people ask for once the wall was done?", opts:["A celebration feast", "The Book \u2014 they told Ezra to bring out the Law and read it", "New houses"], correct:1, explain:"The initiative came from the people: the finished wall protected a city, but the Word rebuilt the people." },
        { q:"What did the Levites do during the reading?", opts:["Collected offerings", "Gave the meaning, so the people understood", "Guarded the gates"], correct:1, explain:"Reading plus explanation plus understanding \u2014 verse 8 is the Bible's oldest picture of teaching Scripture well." },
        { q:"Why were the weeping people told to feast instead?", opts:["Grief was forbidden", "The day was holy \u2014 and \u2018the joy of the LORD is your strength\u2019", "The food would spoil"], correct:1, explain:"Conviction had done its work; now joy, feasting, and generosity to the poor were the right response to grace." }
      ],
      deepDive: "Nehemiah 8 is revival in its purest recorded form: no technique, no spectacle \u2014 an attentive crowd, an open book, and teachers \u2018giving the meaning so that the people understood.\u2019 The weeping was right; the words measured how far they'd drifted. But the leaders' pastoral instinct is the chapter's surprise: they interrupt the tears and prescribe a feast, with take-out portions for the poor \u2014 because a holy day is for joy, and \u2018the joy of the LORD is your strength.\u2019 That sentence has carried more weary believers than almost any other: strength located not in willpower or circumstances but in God's own gladness, shared. Conviction opens the door; joy is what moves in and holds the house up." },
    { id:118, book:"Nehemiah", title:"Keeping what was rebuilt", side:"l",
      passage: "The story could end at the celebration \u2014 but Nehemiah is too honest. The people renewed the covenant in writing, sealed by their leaders, promising to keep the Sabbath, support the temple, and never again intermarry into idolatry. Then Nehemiah returned to Persia \u2014 and came back to find every promise broken: a room in the temple rented to Tobiah, the Levites unpaid, the Sabbath a market day. His final chapter is the unglamorous work of re-reform, ending with the book's plain last prayer: \u201cRemember me with favor, my God.\u201d",
      keyVerses: [
        { ref: "Nehemiah 13:14", text: "Remember me for this, my God, and do not blot out what I have so faithfully done for the house of my God." }
      ],
      questions: [
        { q:"What did Nehemiah find on returning from Persia?", opts:["The reforms holding strong", "Every major promise of the covenant broken", "The wall torn down"], correct:1, explain:"Even a written, sealed covenant drifted within years \u2014 the book refuses a tidy ending." },
        { q:"Who had moved into a temple storeroom?", opts:["The high priest", "Tobiah \u2014 the very enemy who had mocked the wall", "Persian soldiers"], correct:1, explain:"The opposition Nehemiah kept off the wall got in through compromise \u2014 a furnished room in God's own house." },
        { q:"What does the book's honest ending teach?", opts:["Reform is pointless", "Renewal isn't an event but a maintenance \u2014 drift is constant, and so must faithfulness be", "Covenants shouldn't be written"], correct:1, explain:"Nehemiah's last chapter is re-reform \u2014 the unglamorous, necessary work of keeping what was once rebuilt." }
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
        { q:"What sparked Haman's genocidal plan?", opts:["A military threat", "One man \u2014 Mordecai \u2014 refusing to bow to him", "A royal command"], correct:1, explain:"Wounded pride scaled a personal slight into an attempted genocide \u2014 the book's anatomy of how hatred metastasizes." },
        { q:"How was the date of destruction chosen?", opts:["By the king", "By casting the pur \u2014 the lot", "By the army's schedule"], correct:1, explain:"Haman rolled dice to schedule a slaughter \u2014 and the \u2018random\u2019 date fell eleven months out, leaving room for everything that follows." },
        { q:"What chilling detail closes the chapter?", opts:["\u2018The king and Haman sat down to drink\u2019 while the city reeled", "A storm struck Susa", "Haman fled"], correct:0, explain:"Casual cruelty at the top, bewilderment below \u2014 the narrator's quiet indictment of power without conscience." }
      ],
      deepDive: "Esther 3 is one of Scripture's most clear-eyed portraits of evil: not a monster from nowhere, but wounded vanity given power and a budget. Haman's leap from one man's slight to a people's annihilation traces the ancient logic of every genocide since \u2014 and the king's shrugging delegation (\u2018do with the people as you please\u2019) indicts indifference as evil's essential partner. Yet the chapter plants its own undoing: the lot meant to seal the Jews' doom lands eleven months away, an accidental grace period no one intended \u2014 except, the book winks, Someone did. Proverbs had already said it: \u2018the lot is cast into the lap, but its every decision is from the LORD.\u2019 Even the dice were working the rescue." },
    { id:121, book:"Esther", title:"For such a time as this", side:"l",
      passage: "Mordecai tore his clothes and sent word to Esther: go to the king, beg for your people. Her reply was realistic \u2014 anyone entering the king's inner court unsummoned faced death unless he extended the gold scepter, and she hadn't been called in thirty days. Mordecai's answer became one of the Bible's most quoted sentences: \u201cIf you remain silent at this time, relief and deliverance for the Jews will arise from another place... And who knows but that you have come to your royal position for such a time as this?\u201d Esther's resolve closed the exchange: \u201cI will go to the king, even though it is against the law. And if I perish, I perish.\u201d",
      keyVerses: [
        { ref: "Esther 4:14", text: "And who knows but that you have come to your royal position for such a time as this?" }
      ],
      questions: [
        { q:"What risk did Esther face in approaching the king?", opts:["Mild embarrassment", "Death \u2014 unless the king extended the gold scepter to an unsummoned visitor", "Exile only"], correct:1, explain:"The crown offered no immunity \u2014 the last queen who displeased this king was Vashti." },
        { q:"What confidence anchors Mordecai's appeal?", opts:["That Persia would relent", "That deliverance would come regardless \u2014 the only question was Esther's part in it", "That the decree was fake"], correct:1, explain:"\u2018Relief will arise from another place\u2019 \u2014 faith that the outcome was certain, and the invitation was hers to accept or lose." },
        { q:"What did Esther request before acting?", opts:["An army", "A three-day fast by all the Jews of Susa \u2014 joining her own", "The king's written pardon"], correct:1, explain:"Her courage was corporate and prepared \u2014 the whole community's fasting stood behind her walk to the throne room." }
      ],
      deepDive: "Esther 4 turns on the Bible's great sentence about position and purpose: \u2018who knows but that you have come to your royal position for such a time as this?\u2019 Mordecai's theology is exact \u2014 deliverance is certain with or without Esther (\u2018from another place\u2019 is the book's nearest brush with naming God), so the question isn't whether God's purpose will stand but whether Esther will be part of it. Privilege, in this reading, is placement: her crown wasn't a reward to enjoy but a post to serve from. And her answer \u2014 \u2018if I perish, I perish\u2019 \u2014 is not fatalism but surrendered courage, sealed by three days of fasting. Every believer holding any position of comfort or access eventually meets this chapter's question." },
    { id:122, book:"Esther", title:"The sleepless night", side:"r",
      passage: "Esther approached; the scepter extended. Her request: simply that the king and Haman come to a banquet \u2014 then, at that banquet, to another. Haman left elated, then saw Mordecai unbowed and, at his wife's suggestion, built a seventy-five-foot gallows for him. That night the king couldn't sleep. He had the royal chronicles read aloud \u2014 and the page happened to record Mordecai's forgotten act of loyalty, never rewarded. When Haman arrived at dawn to request the hanging, the king asked him first: what should be done for the man the king delights to honor?",
      keyVerses: [
        { ref: "Esther 6:1", text: "That night the king could not sleep; so he ordered the book of the chronicles... to be brought in and read to him." }
      ],
      questions: [
        { q:"What turned the entire story around?", opts:["A battle", "The king's sleepless night and a \u2018random\u2019 page of chronicles", "A prophet's visit"], correct:1, explain:"Insomnia, an archive, and the exact right page \u2014 providence disguised as coincidence, the book's signature move." },
        { q:"What had the chronicles recorded?", opts:["Haman's crimes", "Mordecai's unrewarded loyalty \u2014 he had once exposed an assassination plot", "Esther's identity"], correct:1, explain:"A forgotten good deed, filed away for years, surfaced at the only moment it could save a nation." },
        { q:"What bitter irony fell on Haman?", opts:["He lost his fortune", "He prescribed lavish honors thinking they were for himself \u2014 then performed them for Mordecai", "He was exiled"], correct:1, explain:"Asked what to do for the man the king delights to honor, Haman wrote his own humiliation in detail." }
      ],
      deepDive: "Esther 6 is the hinge of the book, and it swings on the smallest of hinges: a king's insomnia. No angel, no earthquake \u2014 a man can't sleep, asks for the most boring reading available, and the scroll opens to the one entry that changes everything. The timing is surgical: had Mordecai been rewarded years earlier, the entry wouldn't exist; had the king slept, Haman's dawn request would have sailed through. The narrator plays the irony to the hilt \u2014 Haman designing his own enemy's parade \u2014 but the deeper comfort is quieter: unrewarded faithfulness is not unrecorded, and delays in recognition may be providence saving the reward for the moment it matters most. God's providence, Esther insists, runs through insomnia and filing systems as surely as through fire and cloud." },
    { id:123, book:"Esther", title:"The reversal", side:"c",
      passage: "At the second banquet, Esther revealed everything: her people were sold for destruction \u2014 \u201cthe adversary and enemy is this vile Haman.\u201d Haman was hanged on the very gallows he built for Mordecai; the king's ring passed to Mordecai; and a new decree armed the Jews to defend themselves on the appointed day. The dreaded date arrived and reversed: \u201cthe tables were turned, and the Jews got the upper hand over those who hated them.\u201d The feast of Purim was established forever \u2014 named after the pur, the lot cast against them \u2014 days of feasting, joy, and gifts to the poor.",
      keyVerses: [
        { ref: "Esther 9:1", text: "On this day the enemies of the Jews had hoped to overpower them, but now the tables were turned." }
      ],
      questions: [
        { q:"How did Haman's story end?", opts:["He escaped to Media", "Hanged on the gallows he built for Mordecai", "He was pardoned"], correct:1, explain:"The book's justice is poetic to the letter \u2014 the trap sprang on its builder." },
        { q:"What is Purim named after?", opts:["A Persian palace", "The pur \u2014 the lot Haman cast to destroy the Jews", "Esther's family name"], correct:1, explain:"The festival's name enshrines the irony: the dice rolled for their doom became the anniversary of their deliverance." },
        { q:"How is Purim celebrated?", opts:["Fasting and silence", "Feasting, joy, and giving gifts \u2014 especially to the poor", "Military parades"], correct:1, explain:"Deliverance turned outward into generosity \u2014 the rescued marking their rescue by giving." }
      ],
      deepDive: "Esther ends in total reversal \u2014 the literary structure the Hebrew Bible loves most, executed to perfection: the gallows repurposed, the ring transferred, the date of doom becoming a festival. Purim institutionalizes the lesson: every year, the story is retold with feasting and gifts to the poor, so that no generation forgets that the darkest decree carried the seed of its own undoing. And still, through it all, God stays unnamed \u2014 the book's final act of trust in its readers. The Jewish people have kept Purim through twenty-five centuries of new Hamans, and its message has never expired: the schemes of the proud overreach, hidden providence outlasts visible power, and laughter \u2014 eventually \u2014 belongs to the delivered." },
    { id:124, book:"Job", title:"The man who lost everything", side:"l",
      passage: "Job was blameless and upright, the greatest man of the east \u2014 and heaven itself testified to it. Then, in a scene Job never sees, the accuser challenges: does Job fear God for nothing? Take away the blessings and he will curse You. In one day, messengers stack catastrophe on catastrophe: oxen, sheep, camels, servants \u2014 and then all ten children, killed as the house fell. Job tore his robe, shaved his head, and fell to the ground \u2014 in worship: \u201cThe LORD gave and the LORD has taken away; may the name of the LORD be praised.\u201d",
      keyVerses: [
        { ref: "Job 1:21", text: "The LORD gave and the LORD has taken away; may the name of the LORD be praised." }
      ],
      questions: [
        { q:"What was the accuser's challenge?", opts:["That Job was secretly wicked", "That Job's faith was rented \u2014 he feared God only for the blessings", "That Job was weak"], correct:1, explain:"\u2018Does Job fear God for nothing?\u2019 \u2014 the question beneath the whole book: can God be loved for Himself alone?" },
        { q:"What did Job never learn in the book?", opts:["That his children died", "The heavenly backstory of chapters 1\u20132 \u2014 he suffers without ever knowing why", "That he was righteous"], correct:1, explain:"The reader sees the courtroom; Job never does \u2014 which makes his story every sufferer's story." },
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
        { q:"What made the friends finally start talking?", opts:["Job's questions", "Job's anguished lament in chapter 3 \u2014 which they couldn't leave unanswered", "A command from God"], correct:1, explain:"When Job cursed the day of his birth, the friends abandoned silence for theology \u2014 and the comfort ended." }
      ],
      deepDive: "Job 2 contains the Bible's finest grief counseling, performed by the same men who spend the next thirty chapters botching it: they came, they wept, and they sat in silence for seven days \u2014 the origin of the Jewish practice of sitting shiva. Their presence said what presence says: you are not alone, and your pain deserves witness. Everything went wrong the moment they opened their mouths \u2014 not because they spoke, but because they spoke to defend a system: suffering must be deserved, so Job must have sinned. The lesson has never aged: the sufferer's greatest need is rarely an explanation, and the comforter's greatest temptation is always to provide one. Sit longer; theorize less; let the hurting person speak first." },
    { id:126, book:"Job", title:"The friends' bad math", side:"c",
      passage: "Three rounds of speeches follow, all built on one equation: suffering equals punishment, therefore Job must repent of whatever he did. Eliphaz appeals to visions, Bildad to tradition, Zophar to blunt certainty \u2014 eloquent, orthodox-sounding, and wrong, because the reader knows what they don't: Job is blameless. Job's replies are raw \u2014 he protests his innocence, accuses God of injustice, demands a hearing, and wishes he'd never been born \u2014 and yet keeps aiming his anguish at God rather than away from Him: \u201cThough he slay me, yet will I hope in him.\u201d",
      keyVerses: [
        { ref: "Job 13:15", text: "Though he slay me, yet will I hope in him; I will surely defend my ways to his face." }
      ],
      questions: [
        { q:"What single equation drives all three friends?", opts:["Suffering is random", "Suffering equals punishment, so Job must have sinned", "God is absent"], correct:1, explain:"Their theology had no category for innocent suffering \u2014 so they redefined Job's innocence rather than their system." },
        { q:"What makes their speeches dangerous rather than just wrong?", opts:["Bad grammar", "They sound pious and quote true-sounding maxims \u2014 while crushing an innocent man", "They deny God exists"], correct:1, explain:"Almost every line could be stitched on a pillow; applied to Job, they became cruelty with a religious accent." },
        { q:"Where does Job keep directing his protest?", opts:["Away from God, into silence", "At God \u2014 arguing, demanding, hoping, all in His direction", "At his friends only"], correct:1, explain:"Job's fury stays face-to-face with God \u2014 which the book will ultimately call speaking \u2018rightly\u2019 of Him." }
      ],
      deepDive: "The long middle of Job is the Bible auditing its own popular theology. The friends say things that sound like Proverbs \u2014 sow wickedness, reap trouble \u2014 and the book lets them talk for chapters precisely so the reader can watch true-sounding principles become false accusations when forced onto the wrong life. Proverbs describes how life generally works; Job exists to protest that it doesn't always work that way, and God endorses the protest. Meanwhile Job models something rarely taught: faith that argues. He never curses God; he cross-examines Him \u2014 anger, despair, and hope all delivered to God's address. The book's shocking final verdict will side with the arguer over the defenders: honest wrestling honors God more than tidy explanations that bend the truth." },
    { id:127, book:"Job", title:"\u201cI know that my Redeemer lives\u201d", side:"l",
      passage: "At his lowest \u2014 abandoned, diseased, accused by his comforters \u2014 Job's faith suddenly vaults past everything visible: \u201cI know that my redeemer lives, and that in the end he will stand on the earth. And after my skin has been destroyed, yet in my flesh I will see God; I myself will see him with my own eyes \u2014 I, and not another. How my heart yearns within me!\u201d A go'el \u2014 a redeemer \u2014 was the kinsman who bought back what was lost. Job, with no human left to defend him, stakes everything on a Defender he cannot see.",
      keyVerses: [
        { ref: "Job 19:25", text: "I know that my redeemer lives, and that in the end he will stand on the earth." }
      ],
      questions: [
        { q:"What is a go'el \u2014 a \u2018redeemer\u2019?", opts:["A judge", "The kinsman who buys back what was lost and defends the family's cause", "A priest"], correct:1, explain:"The word from Ruth's story \u2014 Boaz's role \u2014 now applied by Job to God Himself: a Defender bound to his case by kinship." },
        { q:"When does this declaration erupt?", opts:["After his restoration", "At his lowest point \u2014 mid-argument, abandoned and accused", "In his youth"], correct:1, explain:"The book's highest peak of faith rises from its deepest valley \u2014 hope with no visible support beneath it." },
        { q:"What does Job expect \u2018in my flesh\u2019?", opts:["Nothing after death", "To see God with his own eyes \u2014 vindication beyond the grave", "Only his children's future"], correct:1, explain:"Reaching past death itself, Job glimpses resurrection hope centuries before it was fully revealed." }
      ],
      deepDive: "Job 19:25 is the Old Testament's lightning flash \u2014 a moment where a suffering man, arguing in the dark, suddenly says more than he can possibly know. His go'el language borrows the kinsman-redeemer of Israel's law: the relative obligated to buy back the enslaved, avenge the wronged, restore the lost \u2014 Boaz's role in Ruth. With every earthly advocate gone, Job asserts a living Redeemer who will stand on the earth at the last and vindicate him personally: \u2018I myself will see him with my own eyes.\u2019 Christians for two millennia have heard the gospel humming under these words \u2014 Handel set them at the heart of Messiah. Whatever Job understood in the moment, the book preserves the truth every sufferer needs: your case is not closed, your Defender lives, and seeing Him is the ending." },
    { id:128, book:"Job", title:"God answers from the whirlwind", side:"r",
      passage: "After the humans finish, God speaks \u2014 out of the whirlwind, and not with answers but with questions, more than seventy of them: \u201cWhere were you when I laid the earth's foundation? Have you entered the storehouses of the snow? Can you bind the chains of the Pleiades? Does the hawk take flight by your wisdom?\u201d A tour of oceans, stars, weather, and wild creatures \u2014 lions, mountain goats, the ostrich, the war horse \u2014 none of it explaining Job's suffering, all of it revealing the Questioner. Job's hand goes over his mouth.",
      keyVerses: [
        { ref: "Job 38:4", text: "Where were you when I laid the earth\u2019s foundation? Tell me, if you understand." }
      ],
      questions: [
        { q:"How does God answer Job?", opts:["With a full explanation of chapters 1\u20132", "With questions \u2014 a tour of creation He runs and Job doesn't", "With silence"], correct:1, explain:"God never explains the accuser, the wager, or the why \u2014 He reveals Himself instead, and somehow that suffices." },
        { q:"What is the effect of the creation tour?", opts:["It humiliates Job cruelly", "It re-sizes the frame \u2014 a God managing oceans, stars, and ostriches can be trusted with what He hasn't explained", "It proves nature is random"], correct:1, explain:"The wild, untamed splendor \u2014 much of it useless to humans \u2014 testifies to wisdom vaster than Job's questions." },
        { q:"What does Job do when God finishes the first speech?", opts:["He renews his arguments", "He puts his hand over his mouth \u2014 \u2018I have no answer\u2019", "He faints"], correct:1, explain:"Not crushed but quieted \u2014 the demanded hearing happened, and the encounter outweighed the explanation." }
      ],
      deepDive: "God's speeches are the Bible's strangest comfort: the sufferer demands answers and receives, instead, wonder. Not one word about the accuser or the wager \u2014 Job never learns his \u2018why.\u2019 What he gets is a Creator delighting in a universe far wilder than human-centered theology imagined: rain on lands where no one lives, the ostrich's absurd design, the untamable leviathan. The implicit argument: a wisdom that runs all this exceeds what a creature could audit \u2014 and can therefore be trusted precisely where it can't be explained. Notice too what God does not do: He never condemns Job for the questions. He shows up \u2014 which was, underneath everything, what Job actually asked for. The presence, not the explanation, turned out to be the answer." },
    { id:129, book:"Job", title:"Restored \u2014 and the friends rebuked", side:"c",
      passage: "Job's last words melt into worship: \u201cMy ears had heard of you, but now my eyes have seen you\u201d \u2014 and he repents, not of secret sins, but of speaking beyond his knowledge. Then the thunderclap: God turns to Eliphaz \u2014 \u201cI am angry with you and your two friends, because you have not spoken the truth about me, as my servant Job has.\u201d The defenders are wrong; the arguer spoke rightly. They must offer sacrifice, and Job \u2014 the man they tormented \u2014 must pray for them. The LORD restored Job's fortunes doubled, gave him ten more children, and he died old and full of years.",
      keyVerses: [
        { ref: "Job 42:5", text: "My ears had heard of you but now my eyes have seen you." }
      ],
      questions: [
        { q:"What is God's shocking verdict on the speeches?", opts:["The friends spoke rightly; Job erred", "Job spoke rightly of God; the friends did not", "Everyone spoke rightly"], correct:1, explain:"Honest anguish aimed at God was truer speech than polished defenses of a false system." },
        { q:"When was Job's restoration timed?", opts:["Immediately after God's speech", "\u2018After Job had prayed for his friends\u2019 \u2014 forgiveness preceded the turnaround", "Years later"], correct:1, explain:"The text ties the healing to the moment Job interceded for the men who had wounded him." },
        { q:"What changed most for Job by the end?", opts:["Only his possessions", "His knowledge became sight \u2014 \u2018now my eyes have seen you\u2019", "His theology of retribution was confirmed"], correct:1, explain:"The suffering never got explained; the Sufferer got encountered \u2014 and secondhand faith became firsthand." }
      ],
      deepDive: "Job's ending delivers two verdicts the reader never sees coming. First: God sides with the man who raged, questioned, and demanded a hearing \u2014 \u2018my servant Job has spoken rightly of me\u2019 \u2014 over the friends who defended God with untruths. Heaven, it turns out, prefers honest wrestling to dishonest tidiness; God would rather be argued with than lied about. Second: the restoration begins \u2018after Job had prayed for his friends\u2019 \u2014 grace flowing through the wounded man toward his tormentors before it doubled back to him. The losses were not erased (ten new children don't replace ten graves; the book knows it), but Job's deepest gain is named in his own words: hearing became seeing. That, not the doubled flocks, is the book's idea of a happy ending." },
    { id:130, book:"Psalms", title:"Psalm 1 \u2014 Two ways to live", side:"l",
      passage: "The songbook of the Bible opens not with a song but a signpost: two ways, two trees, two ends. Blessed is the one who doesn't walk in step with the wicked \u2014 whose delight is in the law of the LORD, meditating on it day and night. That person is \u201clike a tree planted by streams of water, which yields its fruit in season and whose leaf does not wither.\u201d The wicked are not so \u2014 chaff the wind blows away. Every psalm that follows grows from this fork in the road.",
      keyVerses: [
        { ref: "Psalm 1:2\u20133", text: "Whose delight is in the law of the LORD... That person is like a tree planted by streams of water, which yields its fruit in season." }
      ],
      questions: [
        { q:"What word describes the blessed person's relationship to God's word?", opts:["Duty", "Delight \u2014 meditating on it day and night", "Fear"], correct:1, explain:"Not grim obligation but appetite \u2014 the word is where this person's mind goes when it's free to go anywhere." },
        { q:"What is the central image for the rooted life?", opts:["A fortress", "A tree planted by streams \u2014 fruitful in season, leaves that don't wither", "A mountain"], correct:1, explain:"Planted, not wild \u2014 deliberately positioned by the water source, drawing life invisibly and constantly." },
        { q:"What does \u2018fruit in season\u2019 quietly acknowledge?", opts:["Constant visible success", "Seasons \u2014 fruit comes in its time, not all the time", "That trees don't bear fruit"], correct:1, explain:"The rooted life still has winters; the promise is fruitfulness in season, not performance on demand." }
      ],
      deepDive: "Psalm 1 is the gatekeeper of the whole Psalter \u2014 read it first, and every other psalm makes sense as the songs of people trying to be that tree. Its progression is subtle: walking, then standing, then sitting with scoffers \u2014 drift pictured as a gradual slowing into the wrong company. Against it stands one habit: delight-driven meditation, the word turned over day and night like food being chewed. The tree image rewards a long look \u2014 planted (someone chose the spot), by streams (the source never depends on rain), fruit in season (seasons exist; barrenness in winter isn't failure), unwithered leaves (life persists even between harvests). The psalm doesn't promise the rooted life is easy. It promises it is alive." },
    { id:131, book:"Psalms", title:"Psalm 23 \u2014 The Lord is my shepherd", side:"r",
      passage: "The best-known poem ever written is a former shepherd's confession: \u201cThe LORD is my shepherd, I lack nothing.\u201d Green pastures, quiet waters, a restored soul, right paths. Then the valley: \u201cEven though I walk through the darkest valley, I will fear no evil, for you are with me\u201d \u2014 and the pronoun shifts from talking about God to talking to Him. A table spread in the presence of enemies, an anointed head, an overflowing cup \u2014 and goodness and mercy not merely available but pursuing: \u201csurely goodness and love will follow me all the days of my life.\u201d",
      keyVerses: [
        { ref: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me." }
      ],
      questions: [
        { q:"What quietly changes at the darkest valley?", opts:["The scenery only", "The pronoun \u2014 \u2018he\u2019 becomes \u2018you\u2019; talking about God becomes talking to Him", "The shepherd disappears"], correct:1, explain:"In the sunlight David describes his shepherd; in the dark he addresses Him \u2014 the valley turns theology into conversation." },
        { q:"What does the psalm promise about dark valleys?", opts:["That the sheep will never enter them", "Not avoidance but accompaniment \u2014 \u2018through\u2019 the valley, \u2018you are with me\u2019", "That they last forever"], correct:1, explain:"The path of the good shepherd goes through the valley, not around it \u2014 and the presence is the comfort." },
        { q:"What do goodness and mercy do in the final verse?", opts:["Wait passively", "Follow \u2014 literally \u2018pursue\u2019 \u2014 the psalmist all his days", "Depart"], correct:1, explain:"The Hebrew verb is used for chasing \u2014 David, once hunted by Saul, now finds himself hunted by mercy." }
      ],
      deepDive: "Psalm 23's power lives in its details. \u2018I lack nothing\u2019 is a claim about the shepherd, not the circumstances \u2014 David wrote from a life full of caves and pursuers. \u2018He makes me lie down\u2019: sheep won't rest while afraid; rest here is the shepherd's achievement. The famous pronoun shift at verse 4 \u2014 \u2018he leads\u2019 becoming \u2018you are with me\u2019 \u2014 is the psalm's secret: distance collapses precisely in the dark. The rod and staff (defense and rescue) comfort because the shepherd is armed on the sheep's behalf. And the last verb undoes David's whole biography: the man pursued by Saul, by Absalom, by his own failures, declares that what's actually chasing him \u2014 all the days of his life \u2014 is goodness and mercy, herding him home." },
    { id:132, book:"Psalms", title:"Psalm 8 \u2014 What is mankind?", side:"c",
      passage: "A night-sky psalm: \u201cWhen I consider your heavens, the work of your fingers, the moon and the stars, which you have set in place \u2014 what is mankind that you are mindful of them, human beings that you care for them?\u201d The honest question of anyone who has felt small under the stars. The answer astonishes: \u201cYou have made them a little lower than the angels and crowned them with glory and honor. You made them rulers over the works of your hands.\u201d The psalm is framed top and bottom by its real point: \u201cLORD, our Lord, how majestic is your name in all the earth!\u201d",
      keyVerses: [
        { ref: "Psalm 8:4", text: "What is mankind that you are mindful of them, human beings that you care for them?" }
      ],
      questions: [
        { q:"What prompts the psalm's central question?", opts:["A battle", "The night sky \u2014 moon and stars making humanity feel small", "A coronation"], correct:1, explain:"The bigger the cosmos looks, the sharper the question: why would its Maker be mindful of us?" },
        { q:"What is the psalm's stunning answer about humanity?", opts:["Humans are insignificant", "Crowned with glory and honor \u2014 made rulers over the works of God's hands", "Humans are equal to God"], correct:1, explain:"Genesis 1's image-bearing dignity set to music: smallness under the stars, royalty in God's design." },
        { q:"Whose praise does the psalm put first?", opts:["Kings and warriors", "Children and infants \u2014 strength ordained \u2018through the praise of children\u2019", "Angels only"], correct:1, explain:"God silences His foes not with armies but with the praise of the smallest voices \u2014 a reversal Jesus quoted in the temple." }
      ],
      deepDive: "Psalm 8 holds the two truest things about being human in one frame: cosmic smallness and conferred royalty. The night sky isn't wrong \u2014 we are tiny \u2014 but the psalm refuses to let size dictate worth: dignity comes from the Crowner, not the measurements. \u2018A little lower than the angels, crowned with glory\u2019 restates Genesis 1 as doxology, and its claim lands on every human being, not an elite. The New Testament quotes this psalm more than almost any other \u2014 Hebrews reads it as fulfilled in Jesus, the true human who finally wears the crown rightly. And its frame matters: the meditation on human dignity begins and ends with God's majesty \u2014 because in Scripture, human worth is never diminished by God's greatness. It is derived from it." },
    { id:133, book:"Psalms", title:"Psalm 42 \u2014 Talking to your own soul", side:"l",
      passage: "\u201cAs the deer pants for streams of water, so my soul pants for you, my God.\u201d But this is a psalm of drought \u2014 the writer is far from the temple, taunted (\u201cWhere is your God?\u201d), remembering better days, drinking his own tears. Then he does something remarkable: he interrogates himself. \u201cWhy, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.\u201d The question and the answer repeat like a refrain \u2014 a man preaching to his own downcast soul.",
      keyVerses: [
        { ref: "Psalm 42:11", text: "Why, my soul, are you downcast?... Put your hope in God, for I will yet praise him, my Savior and my God." }
      ],
      questions: [
        { q:"What is the psalmist's situation?", opts:["Triumphant in the temple", "Far from worship, taunted, remembering better days through tears", "Newly crowned"], correct:1, explain:"This is spiritual homesickness set to music \u2014 thirst for a God who feels distant." },
        { q:"What unusual move does the psalmist make?", opts:["He curses his enemies", "He talks to his own soul \u2014 questioning it and commanding it to hope", "He stops praying"], correct:1, explain:"Instead of only listening to his despair, he addresses it \u2014 the difference between hearing yourself and preaching to yourself." },
        { q:"What tense carries the hope?", opts:["Past \u2014 things were better before", "Future \u2014 \u2018I will YET praise him\u2019", "Present \u2014 everything is fine now"], correct:1, explain:"\u2018Yet\u2019 is the psalm's hinge: praise postponed is not praise abandoned." }
      ],
      deepDive: "Psalm 42 gave the church its oldest mental-health strategy: stop only listening to yourself and start talking to yourself. The psalmist's despair speaks all day (\u2018where is your God?\u2019, \u2018I remember how it used to be\u2019); his faith interrupts it \u2014 \u2018Why, my soul, are you downcast? Put your hope in God.\u2019 Notice what the psalm doesn't do: it never denies the sadness, never rushes the recovery, and never pretends the taunts don't sting \u2014 tears are called food here. The refrain repeats because one round rarely settles a soul; hope in dark seasons is a discipline of repetition. And \u2018I will yet praise him\u2019 plants a flag in the future: the praise is scheduled, even while the tears are current. Deep calls to deep \u2014 and the deepest call is hope's." },
    { id:134, book:"Psalms", title:"Psalm 46 \u2014 Be still and know", side:"r",
      passage: "\u201cGod is our refuge and strength, an ever-present help in trouble. Therefore we will not fear, though the earth give way and the mountains fall into the heart of the sea.\u201d The psalm imagines the worst \u2014 creation itself uncreating \u2014 and answers with a river: \u201cThere is a river whose streams make glad the city of God... God is within her, she will not fall.\u201d Nations rage, kingdoms totter, the earth melts at His voice. Then the command that has steadied centuries: \u201cBe still, and know that I am God; I will be exalted among the nations.\u201d",
      keyVerses: [
        { ref: "Psalm 46:10", text: "Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth." }
      ],
      questions: [
        { q:"What scale of trouble does the psalm face down?", opts:["Minor irritations", "The earth giving way, mountains falling into the sea \u2014 worst-case everything", "Only personal sadness"], correct:1, explain:"The psalm earns its calm by imagining maximum catastrophe first \u2014 and refusing fear even there." },
        { q:"Who is \u2018be still\u2019 addressed to in context?", opts:["Only quiet believers", "The raging nations \u2014 and every anxious heart listening in: stop striving; He is God", "The mountains"], correct:1, explain:"The command silences the world's uproar and the heart's \u2014 cease the frantic effort; the outcome is His." },
        { q:"What is the city's security in the psalm?", opts:["Its walls", "\u2018God is within her\u2019 \u2014 presence, pictured as a glad-making river", "Its army"], correct:1, explain:"While oceans roar outside, a quiet river runs inside \u2014 peace sourced in presence, not circumstances." }
      ],
      deepDive: "Psalm 46 is the psalm Luther turned into \u2018A Mighty Fortress,\u2019 and its architecture explains its power: it opens with the world's loudest imagery \u2014 earthquakes, roaring seas, raging nations \u2014 and closes in commanded stillness. The contrast of waters is the key: chaotic oceans outside the city, and inside, a gentle river making the city glad \u2014 two kinds of water, two sources of security. \u2018Be still\u2019 is not a relaxation tip; the Hebrew means something like \u2018cease striving \u2014 drop your hands\u2019 \u2014 addressed first to warring nations and, ever since, to every believer white-knuckling outcomes that were never theirs to control. The knowing follows the stilling: some certainties about God are only audible when the frantic activity stops. Twice the psalm plants its refrain like a flag: the LORD Almighty is with us." },
    { id:135, book:"Psalms", title:"Psalm 51 \u2014 Create in me a clean heart", side:"c",
      passage: "The superscription names the wound: \u2018when the prophet Nathan came to him after David had committed adultery with Bathsheba.\u2019 David's prayer refuses every excuse: \u201cAgainst you, you only, have I sinned... Surely I was sinful at birth.\u201d He asks not for image repair but for surgery: \u201cCreate in me a pure heart, O God, and renew a steadfast spirit within me... Restore to me the joy of your salvation.\u201d And he names what God actually wants: \u201cMy sacrifice, O God, is a broken and contrite heart \u2014 you, God, will not despise.\u201d",
      keyVerses: [
        { ref: "Psalm 51:17", text: "My sacrifice, O God, is a broken spirit; a broken and contrite heart you, God, will not despise." }
      ],
      questions: [
        { q:"What does David NOT do in this psalm?", opts:["Confess", "Excuse, minimize, or blame \u2014 the confession is total", "Ask for cleansing"], correct:1, explain:"No \u2018if I have offended,\u2019 no context, no Bathsheba-blaming \u2014 the psalm's power is its refusal of every escape hatch." },
        { q:"What does \u2018create\u2019 in verse 10 imply?", opts:["Minor repair", "The word from Genesis 1 \u2014 David needs something made from nothing, not patched", "A fresh start he can achieve himself"], correct:1, explain:"Bara \u2014 the verb of creation ex nihilo \u2014 confesses that a clean heart is beyond renovation; it must be made new." },
        { q:"What sacrifice does God never despise?", opts:["The largest offering", "A broken and contrite heart", "Public penance"], correct:1, explain:"The king could afford a thousand bulls; the psalm says the acceptable offering was the one thing money can't fake." }
      ],
      deepDive: "Psalm 51 is what repentance sounds like with all the exits sealed. Written from the rubble of the Bathsheba catastrophe, it models confession's anatomy: full ownership (\u2018my transgressions,\u2019 four different Hebrew words for sin), right sizing (\u2018against you, you only\u2019 \u2014 not denying Uriah's blood, but naming sin's deepest offense), and a request that goes beneath behavior to nature: create \u2014 the Genesis word \u2014 a clean heart, because this one can't be laundered. Notice what David fears most: not consequences but distance \u2014 \u2018do not cast me from your presence.\u2019 And notice the psalm's economics: the man who could sacrifice herds offers the one thing God won't despise, a broken heart. Three thousand years of sinners have found their own prayer already written here. That is the psalm's quiet mercy: the way back is public domain." },
    { id:136, book:"Psalms", title:"Psalm 103 \u2014 Bless the LORD, O my soul", side:"l",
      passage: "David rallies his own inner life to worship: \u201cPraise the LORD, my soul; all my inmost being, praise his holy name \u2014 and forget not all his benefits.\u201d Then the inventory: who forgives all your sins, heals your diseases, redeems your life from the pit, crowns you with love and compassion. The psalm's summit is the Bible's own self-description of God: \u201cThe LORD is compassionate and gracious, slow to anger, abounding in love... As far as the east is from the west, so far has he removed our transgressions from us. As a father has compassion on his children, so the LORD has compassion on those who fear him; for he knows how we are formed, he remembers that we are dust.\u201d",
      keyVerses: [
        { ref: "Psalm 103:12", text: "As far as the east is from the west, so far has he removed our transgressions from us." }
      ],
      questions: [
        { q:"What is the psalm's opening command aimed at?", opts:["The congregation", "David's own soul \u2014 \u2018forget not all his benefits\u2019", "The nations"], correct:1, explain:"Worship here begins as memory discipline \u2014 the soul must be told, because the soul forgets." },
        { q:"Why east from west, and not north from south?", opts:["Poetic accident", "East and west never meet \u2014 the distance is infinite, unlike the measurable pole-to-pole", "Geography of Israel"], correct:1, explain:"Travel north and you'll eventually head south; travel east and you never start going west \u2014 removal without limit." },
        { q:"What does God \u2018remember\u2019 about us?", opts:["Every failure permanently", "That we are dust \u2014 His compassion is sized to our frailty, like a father's", "Nothing at all"], correct:1, explain:"The same God who removes sins infinitely holds our weakness gently \u2014 He knows the material He's working with." }
      ],
      deepDive: "Psalm 103 is the Old Testament's fullest portrait of grace, and it runs on deliberate remembering \u2014 \u2018forget not\u2019 \u2014 because ingratitude is rarely rebellion and usually amnesia. Its center quotes God's self-revelation to Moses (\u2018compassionate and gracious, slow to anger\u2019) and then stretches mercy across every axis: as high as the heavens (vertical), as far as east from west (horizontal \u2014 an infinite, unmeetable distance), as tender as a father (relational). And underneath it all, the reason: \u2018he remembers that we are dust.\u2019 God's gentleness is not naivety about our failures but accurate knowledge of our frame. The psalm ends where it began \u2014 \u2018Praise the LORD, my soul\u2019 \u2014 the speaker's own heart being the first and hardest congregation. Gratitude, here, is a discipline of accurate memory." },
    { id:137, book:"Psalms", title:"Psalm 139 \u2014 Searched and known", side:"r",
      passage: "The most intimate psalm: \u201cYou have searched me, LORD, and you know me... Before a word is on my tongue you, LORD, know it completely.\u201d Nowhere escapes the presence \u2014 heavens, depths, the far side of the sea, even darkness, which \u201cis as light to you.\u201d Then the womb: \u201cYou created my inmost being; you knit me together in my mother's womb. I praise you because I am fearfully and wonderfully made.\u201d All my days were written before one came to be. The psalm ends by inviting the search it began with: \u201cSearch me, God, and know my heart... lead me in the way everlasting.\u201d",
      keyVerses: [
        { ref: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." }
      ],
      questions: [
        { q:"How completely does God know the psalmist?", opts:["Only his actions", "Thoughts from afar, words before they're spoken, every day before it dawned", "Only his prayers"], correct:1, explain:"The knowledge is total and prior \u2014 nothing about us is news to God." },
        { q:"What image describes God's work in the womb?", opts:["Assembly", "Knitting \u2014 intricate, deliberate, personal craftsmanship", "Accident"], correct:1, explain:"\u2018Knit together\u2019 and \u2018fearfully and wonderfully made\u2019 ground human worth in intentional making \u2014 before any achievement." },
        { q:"How does the psalm end?", opts:["Hiding from the searching God", "Inviting the search \u2014 \u2018Search me, God... lead me in the way everlasting\u2019", "With fear"], correct:1, explain:"The psalmist's response to being fully known is to open the last doors himself \u2014 known-ness embraced as safety." }
      ],
      deepDive: "Psalm 139 takes the fact people find most frightening \u2014 being completely known \u2014 and turns it into the deepest comfort. Every hiding place is tested and closed: distance (the far side of the sea), darkness (light to Him), even time (days written before one came to be). For the psalmist this total exposure isn't surveillance but embrace: \u2018you hem me in, behind and before\u2019 \u2014 the language of protection, not capture. The womb passage grounds human dignity earlier than any accomplishment or failure: worth was knitted in, in the dark, before anyone was watching \u2014 except Someone was. And the ending is the psalm's bravest move: having described God's inescapable search, David requests it \u2014 \u2018search me, know my heart, see if there is any offensive way in me.\u2019 Only someone convinced that the Searcher is for him could pray that. That conviction is the psalm." },
    { id:138, book:"Proverbs", title:"The fear of the LORD", side:"c",
      passage: "One proverb. Take it slowly, and carry it through your whole day: \u201cThe fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding.\u201d (Proverbs 9:10) This is the front door of the entire book \u2014 stated in chapter 1, repeated in chapter 9. Everything Proverbs will say about money, words, friendship, anger, and work grows from this root: wisdom doesn't begin with intelligence, education, or experience. It begins with taking God seriously.",
      keyVerses: [
        { ref: "Proverbs 9:10", text: "The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding." }
      ],
      questions: [
        { q:"What does \u2018the fear of the LORD\u2019 mean in Proverbs?", opts:["Terror and dread of God", "Awe-filled reverence \u2014 taking God seriously as the realest thing in your life", "Fear of punishment only"], correct:1, explain:"Not cowering but weight \u2014 living as though God actually is who He says, in every room of your life." },
        { q:"What does \u2018beginning\u2019 imply about wisdom?", opts:["Fear of God is optional advanced material", "It's the foundation \u2014 nothing built without it stands straight", "It comes last"], correct:1, explain:"The Hebrew suggests both starting point and chief part \u2014 skip this and everything downstream tilts." },
        { q:"What can a person have plenty of and still lack wisdom?", opts:["Intelligence, education, and experience", "Reverence", "Age"], correct:0, explain:"Proverbs knows brilliant fools \u2014 wisdom in this book is moral and relational before it is intellectual." }
      ],
      deepDive: "Sit with this one all day. \u2018The fear of the LORD\u2019 sounds harsh to modern ears, but in Proverbs it means something closer to gravity \u2014 God as the mass around which your life actually orbits. It is the difference between knowing about God and reckoning with Him: adjusting your money, your mouth, your ambitions, and your private browsing to the reality of His presence. \u2018Beginning\u2019 is the load-bearing word: not the first lesson you graduate past, but the foundation everything rests on permanently \u2014 remove it and cleverness becomes cunning, knowledge becomes leverage, and skill serves the self. Notice the parallel line: knowledge \u2018of the Holy One\u2019 \u2014 wisdom is ultimately relational, knowing a Person, not mastering a system. Today's assignment is simple and enormous: in each decision, ask what changes if God is actually in the room. He is." },
    { id:139, book:"Proverbs", title:"Trust with all your heart", side:"l",
      passage: "One proverb for today \u2014 maybe the most memorized sentence in the book: \u201cTrust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.\u201d (Proverbs 3:5\u20136) Four moves: trust totally, lean carefully, submit everywhere, and watch the path straighten. Let it question you all day: what are you actually leaning on right now?",
      keyVerses: [
        { ref: "Proverbs 3:5\u20136", text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." }
      ],
      questions: [
        { q:"What does the proverb say about your own understanding?", opts:["Ignore it entirely", "Don't LEAN on it \u2014 use your mind, but don't rest your whole weight there", "It's always wrong"], correct:1, explain:"The image is a wall you put your weight against \u2014 thinking is commanded elsewhere in Proverbs; self-sufficiency is the target here." },
        { q:"How much of life does \u2018in all your ways\u2019 cover?", opts:["Religious activities only", "Everything \u2014 work, money, relationships, plans, the ordinary Tuesday decisions", "Major crises only"], correct:1, explain:"The proverb refuses a spiritual/secular split \u2014 God gets acknowledged in every lane, or the trust isn't whole-hearted." },
        { q:"What is promised to the one who trusts and submits?", opts:["A painless life", "Straight paths \u2014 direction and arrival, not necessarily ease", "Wealth"], correct:1, explain:"\u2018Straight\u2019 means the path goes somewhere \u2014 God directing the route, which is different from paving it smooth." }
      ],
      deepDive: "Carry this one into every decision today. The proverb's genius is the word \u2018lean\u2019 \u2014 it doesn't forbid understanding (Proverbs spends thirty-one chapters building it); it forbids making your own perspective the weight-bearing wall. You see part of the picture; you always have, and today will be no exception. \u2018With all your heart\u2019 rules out the hedge most of us actually live \u2014 trusting God with the parts we can't control while quietly keeping the manageable parts for ourselves. \u2018In all your ways submit to him\u2019 is the practical engine: acknowledge Him in the email, the budget, the argument, the plan \u2014 not just the crisis. And the promise deserves precision: straight paths, not painless ones. The route may climb; it will arrive. Tonight, review the day and ask honestly: where did I lean, and on what?" },
    { id:140, book:"Proverbs", title:"Guard your heart", side:"r",
      passage: "Today's proverb: \u201cAbove all else, guard your heart, for everything you do flows from it.\u201d (Proverbs 4:23) In Hebrew thought the heart isn't just emotion \u2014 it's the control center: thoughts, desires, loyalties, imagination. This proverb ranks its command \u2014 \u2018above all else\u2019 \u2014 because the heart is the spring every action flows from. Guard the source, and you've guarded the stream. Ask yourself today: what have I been letting in?",
      keyVerses: [
        { ref: "Proverbs 4:23", text: "Above all else, guard your heart, for everything you do flows from it." }
      ],
      questions: [
        { q:"What is the \u2018heart\u2019 in Proverbs?", opts:["Only feelings", "The whole control center \u2014 thoughts, desires, loyalties, imagination", "The physical organ"], correct:1, explain:"Biblical \u2018heart\u2019 is closer to what we'd call the inner life \u2014 the place decisions are actually made before they're visible." },
        { q:"Why does the heart deserve guarding \u2018above all else\u2019?", opts:["It's fragile", "Everything you do flows from it \u2014 it's the spring feeding every stream of behavior", "Tradition requires it"], correct:1, explain:"Behavior management downstream can't fix a polluted source \u2014 Proverbs aims at the wellspring." },
        { q:"What does guarding practically involve?", opts:["Feeling nothing", "Watching what you let in \u2014 inputs, influences, dwelling thoughts \u2014 and what you let grow", "Avoiding all people"], correct:1, explain:"A guard controls the gate: what enters, what stays, what gets evicted \u2014 attention is the gate of the heart." }
      ],
      deepDive: "Let this one interrogate your inputs today. \u2018Above all else\u2019 is startling prioritization \u2014 of all the things Proverbs tells you to do, this ranks first, because the heart is upstream of everything: Jesus made the same diagnosis (\u2018out of the heart come evil thoughts\u2019) and so does modern psychology in its own vocabulary. Guarding is a gatekeeper's job, and the gate is attention: what you watch, scroll, listen to, replay, and rehearse doesn't stay at the gate \u2014 it moves in, takes a room, and eventually starts making decisions. The proverb also implies the positive: a guarded heart isn't an empty one but a garden with a wall \u2014 protection so the right things can grow. Tonight's honest audit: list the three inputs that got the most of your attention today. That list is what's currently being planted at your source." },
    { id:141, book:"Proverbs", title:"A gentle answer", side:"c",
      passage: "One sentence to carry into every conversation today: \u201cA gentle answer turns away wrath, but a harsh word stirs up anger.\u201d (Proverbs 15:1) Notice it's about the answer \u2014 the second move, the response when someone comes at you hot. In that half-second you hold a steering wheel: gentleness turns the moment one way, harshness the other. The soft answer isn't weakness; it takes far more strength than firing back.",
      keyVerses: [
        { ref: "Proverbs 15:1", text: "A gentle answer turns away wrath, but a harsh word stirs up anger." }
      ],
      questions: [
        { q:"When does this proverb apply most directly?", opts:["When you start a conversation", "In the ANSWER \u2014 the moment someone comes at you with heat", "Only in writing"], correct:1, explain:"It's a second-move proverb: the other person's wrath is already in the room; your response steers what happens next." },
        { q:"What does the gentle answer do to wrath?", opts:["Ignores it", "Turns it away \u2014 de-escalates what harshness would ignite", "Proves you lost"], correct:1, explain:"The verbs are directional: one response deflects the fire; the other feeds it fuel." },
        { q:"Is gentleness the same as weakness here?", opts:["Yes \u2014 it means backing down", "No \u2014 it's controlled strength; anyone can fire back, few can answer soft under fire", "It means silence"], correct:1, explain:"Returning heat is reflex; absorbing it and answering gently is mastery \u2014 Proverbs consistently ranks self-rule above conquest." }
      ],
      deepDive: "Today, watch for your half-second. Every heated moment contains one \u2014 the gap between what lands on you and what you send back \u2014 and this proverb lives entirely inside it. The physics are observable: harshness escalates because anger answered with anger validates and amplifies itself, while gentleness starves the fire of oxygen; you have watched both happen this month. What the proverb asks is not doormat passivity \u2014 a gentle answer can still be honest, firm, even a refusal \u2014 but temperature control: content can be strong while tone stays soft. Proverbs elsewhere crowns this skill: \u2018better a patient person than a warrior, one with self-control than one who takes a city.\u2019 The day's experiment: in your next tense exchange, deliberately lower your voice and slow your reply. Then watch what it does to the room." },
    { id:142, book:"Proverbs", title:"Pride before the fall", side:"l",
      passage: "Today's proverb is a warning label: \u201cPride goes before destruction, a haughty spirit before a fall.\u201d (Proverbs 16:18) Proverbs pairs it with its rescue: \u201cBefore a downfall the heart is haughty, but humility comes before honor\u201d (18:12). Pride isn't just unpleasant \u2014 it's structurally dangerous: it blinds you to warnings, isolates you from correction, and convinces you the rules of consequence don't apply to you. By the time pride is visible to you, it's usually already been steering.",
      keyVerses: [
        { ref: "Proverbs 16:18", text: "Pride goes before destruction, a haughty spirit before a fall." }
      ],
      questions: [
        { q:"What makes pride dangerous rather than just unattractive?", opts:["It annoys people", "It blinds \u2014 to warnings, correction, and your own limits \u2014 right before the drop", "It's expensive"], correct:1, explain:"Pride's mechanism is perceptual: it edits out exactly the information that would prevent the fall." },
        { q:"What \u2018goes before\u2019 honor, according to Proverbs?", opts:["Confidence", "Humility", "Wealth"], correct:1, explain:"The book pairs the warning with the promise: the road down runs through pride; the road up runs through humility." },
        { q:"Who in the story so far best illustrates this proverb?", opts:["Ruth", "Haman \u2014 building a gallows at the height of his pride, hanged on it days later", "Boaz"], correct:1, explain:"Scripture keeps staging this proverb: Pharaoh, Goliath, Rehoboam, Haman \u2014 the pattern never retires." }
      ],
      deepDive: "This one asks for an honest mirror today. Pride in Proverbs isn't confidence or healthy self-respect \u2014 it's the haughty spirit that stops listening: to advice, to warnings, to the possibility of being wrong. Its danger is sequence \u2014 \u2018goes before\u2019 \u2014 pride is the leading indicator, the tremor before the quake, which is why the falling rarely see it coming: the same pride that causes the fall conceals its approach. You've now read the pattern across half the Bible \u2014 Pharaoh's hard heart, Goliath's taunts, Rehoboam's little finger, Haman's gallows \u2014 and history and your own life keep the series going. The diagnostic questions are practical: When did I last change my mind because someone corrected me? Whose pushback can still reach me? What am I sure could never happen to me? Humility isn't thinking less of yourself; it's staying correctable. That, says Proverbs, is the posture that precedes honor." },
    { id:143, book:"Proverbs", title:"The power of the tongue", side:"r",
      passage: "Today's proverb weighs your words: \u201cThe tongue has the power of life and death, and those who love it will eat its fruit.\u201d (Proverbs 18:21) Not influence \u2014 power. Life and death. Proverbs backs it with a picture: \u201cThe words of the reckless pierce like swords, but the tongue of the wise brings healing\u201d (12:18). Every sentence you speak today will be one or the other, in some small measure: a sword or a stitch.",
      keyVerses: [
        { ref: "Proverbs 18:21", text: "The tongue has the power of life and death, and those who love it will eat its fruit." }
      ],
      questions: [
        { q:"How much power does Proverbs assign the tongue?", opts:["Mild influence", "Life and death", "None \u2014 actions alone matter"], correct:1, explain:"Words in Proverbs are not decoration on reality \u2014 they build people up or take them apart, daily, invisibly." },
        { q:"What do reckless words do, per Proverbs 12:18?", opts:["Evaporate harmlessly", "Pierce like swords \u2014 while wise tongues bring healing", "Entertain"], correct:1, explain:"You can likely still quote a sentence someone stabbed you with years ago \u2014 that's the proverb's proof." },
        { q:"What does \u2018eat its fruit\u2019 imply?", opts:["Words have no consequences", "You will live in the world your own words create \u2014 harvest included", "Only listeners are affected"], correct:1, explain:"The speaker isn't exempt: the relationships, reputation, and atmosphere around you are largely your tongue's crop." }
      ],
      deepDive: "Run today's experiment: assume every sentence you speak lands as either a sword or a stitch \u2014 because it does. Proverbs' claim isn't poetic exaggeration; you carry decades-old sentences in you right now, some that wounded and some that changed your life, spoken by people who probably forgot them within the hour. That asymmetry \u2014 words cheap to speak, expensive to receive \u2014 is exactly why the book legislates the tongue so heavily: think of the power differential in every careless remark. \u2018Those who love it will eat its fruit\u2019 closes the loop on the speaker: your words build the house you have to live in \u2014 the trust or wariness around you is largely harvest. Practical aim for today: speak one deliberate sentence of life to someone who won't expect it \u2014 specific, true, unprompted. Then notice what it cost you (almost nothing) and what it was worth." },
    { id:144, book:"Proverbs", title:"Iron sharpens iron", side:"c",
      passage: "Today's proverb is about who's around you: \u201cAs iron sharpens iron, so one person sharpens another.\u201d (Proverbs 27:17) Sharpening involves friction \u2014 sparks, pressure, contact. The friendships that make you better aren't always the most comfortable ones; they're the ones close enough and honest enough to grind the dullness off. Proverbs pairs it with a harder truth: \u201cWounds from a friend can be trusted, but an enemy multiplies kisses\u201d (27:6).",
      keyVerses: [
        { ref: "Proverbs 27:17", text: "As iron sharpens iron, so one person sharpens another." }
      ],
      questions: [
        { q:"What does the iron image imply about sharpening friendships?", opts:["They're always comfortable", "They involve friction \u2014 honest contact, pressure, even sparks", "They happen at a distance"], correct:1, explain:"Nothing gets sharpened by being agreed with \u2014 the grinding contact is the mechanism, not a malfunction." },
        { q:"What can be trusted, according to Proverbs 27:6?", opts:["An enemy's compliments", "Wounds from a friend \u2014 honest correction from someone for you", "Flattery"], correct:1, explain:"The friend's hard word and the enemy's kisses are inverted: one hurts to help, the other pleases to harm." },
        { q:"What does this proverb imply about isolation?", opts:["It's ideal for growth", "Unsharpened iron dulls \u2014 no close, honest people means no sharpening", "It's irrelevant"], correct:1, explain:"Proverbs 18:1 says it outright: the isolated person \u2018rages against all sound judgment\u2019 \u2014 dullness is the default alone." }
      ],
      deepDive: "Today's question is a roster check: who actually sharpens you? The image is precise \u2014 iron on iron means two hard surfaces in real contact: proximity (you can't sharpen from far away), friction (the useful conversations aren't always pleasant), and mutual benefit (both blades improve). Most of us drift toward whetstone-free relationships \u2014 people who agree, flatter, or simply never get close enough to see our dull edges \u2014 and Proverbs 27:6 names the danger: an enemy multiplies kisses, while a true friend will risk wounding you with the truth. The audit is worth doing on paper: Who is allowed to correct me? When did I last thank someone for honest pushback instead of defending myself? Whose growth am I contributing friction to? If the answers come up empty, the proverb's assignment is to move one friendship one layer deeper \u2014 invite the honesty you've been managing away." },
    { id:145, book:"Proverbs", title:"Plans and the path", side:"l",
      passage: "The last proverb of this path \u2014 hold it loosely and firmly at once: \u201cIn their hearts humans plan their course, but the LORD establishes their steps.\u201d (Proverbs 16:9) Its neighbors say it three ways: \u201cCommit to the LORD whatever you do, and he will establish your plans\u201d (16:3); \u201cMany are the plans in a person's heart, but it is the LORD's purpose that prevails\u201d (19:21). Plan \u2014 Proverbs commands it. And hold the pen loosely \u2014 Someone else writes the final draft.",
      keyVerses: [
        { ref: "Proverbs 16:9", text: "In their hearts humans plan their course, but the LORD establishes their steps." }
      ],
      questions: [
        { q:"Does this proverb discourage planning?", opts:["Yes \u2014 plans are faithless", "No \u2014 humans plan their course; the proverb assumes and honors it", "It doesn't mention plans"], correct:1, explain:"Proverbs praises the diligent planner repeatedly \u2014 the correction is aimed at the grip, not the planning." },
        { q:"What is God's part in the verse?", opts:["Watching neutrally", "Establishing the steps \u2014 the actual walked-out path", "Blocking all plans"], correct:1, explain:"You draft the route; He governs the journey \u2014 including the detours you'd never have chosen and later can't imagine losing." },
        { q:"Looking back over the whole story so far, who illustrates this best?", opts:["No one", "Joseph \u2014 \u2018you intended to harm me, but God intended it for good\u2019 \u2014 and Esther, Ruth, David...", "Only kings"], correct:1, explain:"Nearly every life in the story planned one course and walked another, better one \u2014 the proverb is the Bible's biography in one line." }
      ],
      deepDive: "End the Proverbs path with open hands. This proverb threads the needle between two errors: the person who won't plan (Proverbs calls that sluggardry, not spirituality) and the person whose plans have become demands God must ratify. Both plan and providence are affirmed \u2014 you genuinely chart the course; He genuinely establishes the steps \u2014 and the space between your map and your actual footprints is where most of life's meaning turns out to live. You've watched it all through this app: Joseph planned none of Egypt, Ruth planned none of Bethlehem, David planned sheep, Esther planned anonymity \u2014 and each looked back to find the interruptions were the plot. So plan well today: write the goals, keep the calendar. Then hold the pen loosely, and treat the day's detours with curiosity instead of only frustration. Some of them are the steps being established." }
  ];

  const MIDPOINT_REFLECTIONS = {
    Genesis: "You're halfway through Genesis. Looking at everything from Creation to now, where do you see God being patient with people who mess up \u2014 including you?",
    Exodus: "You're partway through Exodus. What does it look like to trust God when part of your life still feels like slavery or being stuck?",
    Leviticus: "You're halfway through Leviticus. Holiness here shows up in ordinary things \u2014 meals, work, honesty. What's one ordinary part of your daily routine where God feels absent, and what would it look like to invite Him into it?",
    Numbers: "You're partway through Numbers. The spies saw giants; Joshua and Caleb saw God. What's a \u2018giant\u2019 in your life right now, and which way have you been measuring it?",
    Deuteronomy: "You're partway through Deuteronomy. Moses kept telling Israel to remember what God had done. What's something God has brought you through that you're in danger of forgetting?",
    Joshua: "You're partway through Joshua. The priests had to step into the river before it stopped. Where in your life might God be waiting on your first step before the path opens?",
    Judges: "You're partway through Judges. The cycle always started with forgetting. What helps you actually remember what God has done \u2014 and what makes you forget?",
    Ruth: "You're partway through Ruth. God works in this story through ordinary kindness and \u2018coincidence.\u2019 Where might God be quietly at work in the ordinary parts of your life right now?",
    "1 Samuel": "You're partway through 1 Samuel. \u2018People look at the outward appearance, but the Lord looks at the heart.\u2019 What's the difference right now between how you appear and how your heart actually is?",
    "2 Samuel": "You're partway through 2 Samuel. David waited years between the anointing and the crown, and asked God before every move. Where in your life are you in the space between a promise and its fulfillment \u2014 and what would waiting faithfully look like?",
    "1 Kings": "You're partway through 1 Kings. Solomon asked for a hearing heart instead of riches. If God offered you anything tonight, what would you honestly ask for \u2014 and what does that answer tell you?",
    "2 Kings": "You're partway through 2 Kings. Elisha prayed \u2018open his eyes\u2019 \u2014 the fiery army was already there; only the sight was missing. Where in your life might the protection already be present, waiting for you to see it?",
    "Ezra": "You're partway through Ezra. At the foundation, joy and weeping made one indistinguishable sound. What in your life right now is both a genuine new beginning and a real loss \u2014 and can you let yourself feel both?",
    "Nehemiah": "You're partway through Nehemiah. He prayed for four months, then prayed again in the half-second before answering the king. Which kind of prayer does your life have less of \u2014 the long kind or the instant kind?",
    "Esther": "You're partway through Esther. God is never named in this book, yet He's moving in every coincidence. Where in your own story might the \u2018coincidences\u2019 deserve a second look?",
    "Job": "You're partway through Job. His friends' silence was their best comfort; their explanations were their worst. When someone you love is suffering, which do you reach for first \u2014 presence or answers?",
    "Psalms": "You're partway through the Psalms. Psalm 42 talks TO its own soul instead of just listening to it. What is your soul saying on repeat lately \u2014 and what would you preach back to it?",
    "Proverbs": "You're partway through Proverbs \u2014 one a day, remember. Of the proverbs so far, which one has been quietly working on you \u2014 and did you actually give it a full day to sit?"
  };
  const CHECKPOINT_REFLECTIONS = {
    Genesis: "Looking back at the whole book of Genesis, what stands out to you most about who God is \u2014 and what's one thing you're taking with you?",
    Exodus: "Looking back at Exodus so far, what have you learned about what it means to trust God in the middle of fear?",
    Leviticus: "Looking back at Leviticus, what has changed in how you think about holiness \u2014 and what's one way it could look like love in practice this week?",
    Numbers: "Looking back at Numbers, a whole generation lost the promise through fear and complaint. What did their story teach you about trust, patience, and what unbelief actually costs?",
    Deuteronomy: "You've finished the Torah \u2014 all five books. Looking back from Genesis to Moses' final words, what's the one thing you most want to carry with you, and who could you pass it on to?",
    Joshua: "Looking back at Joshua \u2014 promises kept, walls fallen, a choice set before the people \u2014 what would \u2018as for me and my house\u2019 actually look like in your life this year?",
    Judges: "Looking back at Judges, the spiral always began with \u2018right in my own eyes.\u2019 Where are you most tempted to be your own standard \u2014 and what would trusting God's instead change?",
    Ruth: "Looking back at Ruth, whose small faithfulness carried a royal future \u2014 what's one small, unglamorous act of loyalty or kindness God might be asking of you right now?",
    "1 Samuel": "Looking back at 1 Samuel \u2014 Hannah's prayer, Saul's appearance, David's heart \u2014 which of the two kings is your life more shaped like right now, and what would it take to have a heart after God's?",
    "2 Samuel": "Looking back at 2 Samuel \u2014 the covenant, the fall with Bathsheba, Nathan's mirror, Absalom's grief, the final song \u2014 David sinned terribly and repented completely. Is there anything in your life waiting for a \u2018You are the man\u2019 moment of honesty, and what would full confession look like?",
    "1 Kings": "Looking back at 1 Kings \u2014 Solomon's wisdom and slow drift, the divided kingdom, Elijah's fire and whisper \u2014 the book's warning is that starting well isn't ending well. What small compromise, if left alone for years, could quietly divide your heart \u2014 and what's one step to close that gap this week?",
    "2 Kings": "Looking back at 2 Kings \u2014 the cloak falling to Elisha, Naaman's muddy obedience, the lost book found, the fall of two kingdoms \u2014 warnings were given for generations before judgment came. What warning has God been patiently repeating to you, and what would it take to finally act on it?",
    "Ezra": "Looking back at Ezra \u2014 the door home opened by a pagan king, the stalled work restarted by preaching, the scribe's set heart \u2014 Ezra studied, did, and then taught, in that order. Which of those three steps is your life currently skipping?",
    "Nehemiah": "Looking back at Nehemiah \u2014 the burden, the wall, the sword and trowel, the joy that was strength, and the relapse of the final chapter \u2014 what has God helped you rebuild that now needs maintaining, and what would \u2018chapter 13 honesty\u2019 about it look like?",
    "Esther": "Looking back at Esther \u2014 the hidden identity, the sleepless night, the reversal \u2014 the whole book asks Mordecai's question: what position, access, or comfort do you hold right now that might exist \u2018for such a time as this\u2019?",
    "Job": "Looking back at Job \u2014 the losses, the bad comfort, the Redeemer hope, the whirlwind \u2014 God preferred Job's honest wrestling to the friends' tidy defenses. Is there a pain you've been managing with tidy answers that God is inviting you to bring to Him raw instead?",
    "Psalms": "Looking back at these Psalms \u2014 the rooted tree, the shepherd's valley, the clean heart, the searched soul \u2014 which one is the prayer you most need right now? Consider praying it out loud, in its own words, before you move on.",
    "Proverbs": "Looking back at Proverbs \u2014 the fear of the LORD, the guarded heart, the gentle answer, the loose-held plans \u2014 wisdom here was never information but transformation. Which single proverb, actually lived for a month, would change your life the most \u2014 and what's stopping you from starting today?"
  };

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
        { q:"What is the central theme of Leviticus?", opts:["Military conquest", "Holiness \u2014 how a holy God can dwell among His people", "Building the temple in Jerusalem"], correct:1, explain:"Every offering, law, and festival serves one question: how can a holy God and an unholy people live together?" },
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
        { q:"Why did God choose Israel, according to Moses?", opts:["They were the largest nation", "Because He loved them and kept His promise \u2014 not because of their size or merit", "They were the most skilled"], correct:1, explain:"Israel was the fewest of peoples \u2014 the choosing rested entirely on God's love and faithfulness." },
        { q:"What was Moses' climactic appeal?", opts:["\u2018Choose life\u2019", "\u2018Build the temple\u2019", "\u2018Return to Egypt\u2019"], correct:0, explain:"Life and death, blessing and curse \u2014 and a genuine choice placed in Israel's hands." },
        { q:"How does the Torah end?", opts:["With Israel settled in the land", "With Moses seeing the land from Mount Nebo, then dying \u2014 the story handed to the next generation", "With the temple built"], correct:1, explain:"The Torah closes on the edge of promise, deliberately unfinished \u2014 faith always passes to the next generation." }
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
        { q:"How did Samson's story end?", opts:["In escape and a quiet life", "In answered prayer \u2014 accomplishing more in his death than his life", "In a Philistine pardon"], correct:1, explain:"His first recorded prayer of dependence \u2014 \u2018remember me\u2019 \u2014 was the one God answered." },
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
        { q:"Which law fed Ruth in Boaz's field?", opts:["The gleaning laws of Leviticus \u2014 harvest margins left for the poor", "A royal decree", "Boaz's private charity alone"], correct:0, explain:"The command studied back in Leviticus 19 appears here as a widow's actual survival." },
        { q:"How does Ruth's story end?", opts:["With her return to Moab", "With a son, Obed \u2014 grandfather of King David", "With famine returning"], correct:1, explain:"The quiet domestic tale turns out to be royal \u2014 and ultimately messianic \u2014 history." }
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
        { q:"Why did Naaman almost miss his healing?", opts:["The cost was too high", "The cure was too humble \u2014 a muddy river, no ceremony", "Elisha refused him"], correct:1, explain:"Grace offended his greatness; his servants' plain logic saved him from his pride." },
        { q:"What was Elisha's prayer at Dothan?", opts:["\u2018Send more soldiers\u2019", "\u2018Open his eyes, LORD, that he may see\u2019", "\u2018Destroy the enemy\u2019"], correct:1, explain:"The fiery army was already present \u2014 only the servant's sight was missing." },
        { q:"What did Josiah's workers find in the temple?", opts:["Hidden treasure", "The lost Book of the Law", "The ark"], correct:1, explain:"Scripture misplaced in God's own house \u2014 and its rediscovery ignited Judah's deepest reform." },
        { q:"How does 2 Kings end?", opts:["With the temple burning", "With David's heir freed from prison at Babylon's table \u2014 hope not extinguished", "With a new temple"], correct:1, explain:"After the worst, one deliberate flicker: the covenant line alive, the story unfinished." }
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
        { q:"Who moved Cyrus to send the exiles home?", opts:["His advisors", "The LORD \u2014 keeping a seventy-year-old promise through Jeremiah", "The Egyptian court"], correct:1, explain:"History's superpower signed the paperwork of prophecy." },
        { q:"What restarted the stalled temple work?", opts:["New funding", "The preaching of Haggai and Zechariah", "A Persian army"], correct:1, explain:"The remedy for lost heart was prophetic, not political." },
        { q:"What was Ezra's three-step life pattern?", opts:["Teach, study, do", "Study, do, teach", "Pray, fast, travel"], correct:1, explain:"Ezra 7:10 \u2014 the order with no honest shortcuts." },
        { q:"What pronoun marked Ezra's great confession?", opts:["\u2018They\u2019", "\u2018We\u2019 and \u2018our\u2019 \u2014 identification, not accusation", "\u2018You\u2019"], correct:1, explain:"He owned his people's sin as his own \u2014 the grammar of intercession." },
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
        { q:"How did Nehemiah answer the distraction invitations?", opts:["He attended one", "\u2018I am carrying on a great project and cannot go down\u2019 \u2014 every time", "With an army"], correct:1, explain:"Focus was the defense: no counter-attack, just the work." },
        { q:"What sentence steadied the weeping crowd?", opts:["\u2018Try harder\u2019", "\u2018The joy of the LORD is your strength\u2019", "\u2018Rebuild the wall\u2019"], correct:1, explain:"Conviction had done its work; joy \u2014 with feasting and portions for the poor \u2014 was the strength to carry it." },
        { q:"What does the final chapter honestly show?", opts:["Permanent success", "Relapse \u2014 and the unglamorous work of re-reform", "A new exile"], correct:1, explain:"Renewal has a maintenance schedule; Nehemiah's last act is starting again." }
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
        { q:"What is famously absent from Esther?", opts:["A villain", "God's name \u2014 while His providence saturates every scene", "Any feast"], correct:1, explain:"The silence is the theology: hiddenness is not absence." },
        { q:"What was Mordecai's confidence in chapter 4?", opts:["That Persia would relent", "Deliverance was certain regardless \u2014 the only question was Esther's part", "That the decree was illegal"], correct:1, explain:"\u2018Relief will arise from another place\u2019 \u2014 God's purpose didn't depend on her; her purpose depended on joining it." },
        { q:"What turned the story's hinge?", opts:["A battle", "The king's insomnia and the chronicles' page about Mordecai", "An earthquake"], correct:1, explain:"Providence ran through a sleepless night and a filing system." },
        { q:"What happened to Haman's gallows?", opts:["It was burned", "Haman was hanged on it", "It was never built"], correct:1, explain:"The book's justice is poetic to the letter \u2014 the trap sprang on its builder." },
        { q:"What does Purim celebrate \u2014 and how?", opts:["A military conquest, with parades", "The great reversal \u2014 with feasting, joy, and gifts to the poor", "The temple's completion"], correct:1, explain:"Deliverance turned outward into generosity, retold every year so no generation forgets." }
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
        { q:"How did God answer Job?", opts:["With the backstory of chapters 1\u20132", "With questions and creation \u2014 revealing Himself instead of explaining the pain", "He never answered"], correct:1, explain:"Job never learned his \u2018why\u2019 \u2014 he met his Who, and put his hand over his mouth." },
        { q:"Whose speech did God call right?", opts:["The friends' \u2014 they defended God", "Job's \u2014 the honest wrestler spoke rightly of God", "Neither"], correct:1, explain:"Heaven preferred raw honesty aimed at God over tidy defenses that bent the truth." },
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
        "Psalm 139 turns total exposure into total embrace: \u2018Search me, God, and know my heart.\u2019"
      ],
      questions: [
        { q:"What single habit defines Psalm 1's rooted person?", opts:["Constant travel", "Delight-driven meditation on God's word, day and night", "Wealth management"], correct:1, explain:"The tree is planted by what it drinks \u2014 the Word turned over like food being chewed." },
        { q:"What changes at Psalm 23's darkest valley?", opts:["The shepherd leaves", "\u2018He\u2019 becomes \u2018you\u2019 \u2014 description becomes address", "The valley disappears"], correct:1, explain:"Distance collapses precisely in the dark \u2014 the psalm's quiet masterstroke." },
        { q:"What does Psalm 42 model for dark seasons?", opts:["Denial", "Preaching to your own soul instead of only listening to it", "Silence"], correct:1, explain:"\u2018Why, my soul, are you downcast? Put your hope in God\u2019 \u2014 hope as a discipline of repetition." },
        { q:"What does \u2018create\u2019 confess in Psalm 51?", opts:["Minor repair is needed", "The heart must be made new \u2014 the Genesis word for making from nothing", "Nothing is wrong"], correct:1, explain:"David asks for creation, not renovation \u2014 repentance that goes beneath behavior to nature." },
        { q:"How does Psalm 139 end?", opts:["Hiding from God", "Inviting the search: \u2018Search me, God, and know my heart\u2019", "In despair"], correct:1, explain:"Total known-ness embraced as safety \u2014 only someone convinced the Searcher is FOR him prays that." }
      ],
      deepDive: "The Psalms are the Bible's prayer book \u2014 and their genius is range: rooted confidence and drowning despair, cosmic wonder and private guilt, stillness and shouting, all given words and all aimed at God. These eight are a sampler of the whole: they teach that worship begins with what you delight in (1), that presence outweighs circumstance (23, 46), that dignity is conferred, not earned (8, 139), that honest sadness can be discipled (42), that the way back from moral wreckage is public domain (51), and that gratitude is a discipline of accurate memory (103). The Psalter's deepest lesson may be its simplest: everything human \u2014 everything \u2014 can be prayed. The songbook has a page for the day you're having."
    },
    "Proverbs": {
      title: "Proverbs overview",
      overview: [
        "One a day \u2014 that was the pace, because a proverb is meant to be lived before the next one is read.",
        "The foundation: the fear of the LORD is the beginning of wisdom \u2014 taking God seriously as the realest thing in your life.",
        "Trust with all your heart; lean not on your own understanding \u2014 use your mind, don't rest your weight on it.",
        "Above all else, guard your heart \u2014 attention is the gate, and everything you do flows from the source.",
        "A gentle answer turns away wrath \u2014 the half-second between what lands on you and what you send back.",
        "Pride goes before destruction \u2014 it blinds you to warnings right before the drop; humility stays correctable.",
        "The tongue holds life and death \u2014 every sentence a sword or a stitch, and you eat your own words' fruit.",
        "Iron sharpens iron \u2014 growth needs close, honest friction; wounds from a friend can be trusted.",
        "Humans plan their course; the LORD establishes the steps \u2014 plan well, and hold the pen loosely."
      ],
      questions: [
        { q:"Where does wisdom begin, according to Proverbs?", opts:["Education", "The fear of the LORD", "Experience"], correct:1, explain:"Not intelligence but reverence \u2014 remove the foundation and cleverness becomes cunning." },
        { q:"What does \u2018lean not on your own understanding\u2019 forbid?", opts:["Thinking", "Making your own perspective the weight-bearing wall", "Planning"], correct:1, explain:"Use the mind Proverbs spends 31 chapters building \u2014 just don't rest your whole weight on partial sight." },
        { q:"Why guard the heart \u2018above all else\u2019?", opts:["It's fragile", "Everything you do flows from it \u2014 it's upstream of all behavior", "Tradition"], correct:1, explain:"Behavior management can't fix a polluted source; Proverbs aims at the wellspring." },
        { q:"What can be trusted more than an enemy's kisses?", opts:["Flattery", "Wounds from a friend", "Silence"], correct:1, explain:"The sharpening friendships risk honesty \u2014 friction is the mechanism, not a malfunction." },
        { q:"What was the recommended pace for this book \u2014 and why?", opts:["As fast as possible", "One proverb a day \u2014 lived through the day, not just read", "One per week"], correct:1, explain:"A proverb is dense enough to work on you for a whole day \u2014 speed is the one way to waste it." }
      ],
      deepDive: "Proverbs is wisdom in seed form \u2014 each saying compressed, portable, and designed to germinate in a lived day, which is why this path moved one proverb at a time. Its definition of wisdom is quietly radical: not information but formation, not IQ but skill at living \u2014 rooted in the fear of the LORD and expressed in the most ordinary places: your tone in an argument, your grip on your plans, your gate-keeping of attention, your roster of honest friends. The book's realism matters too: proverbs describe how life generally works, not iron guarantees (Job stands next to it in the canon as the exception's advocate). Keep the pace you learned here: one seed, one day, actually planted. A year of that would out-teach a library."
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
      reflection: "The fool in Proverbs isn't stupid \u2014 he's unteachable. On a scale of honest, how teachable are you right now: when were you last corrected, and what did you do with it?" }
  };

  function todayStr(){ return new Date().toISOString().slice(0,10); }
  function yesterdayStr(){ const d = new Date(); d.setDate(d.getDate()-1); return d.toISOString().slice(0,10); }
  function seededShuffle(arr, seedStr){
    let seed = 0;
    for (let i = 0; i < seedStr.length; i++) seed = (seed * 31 + seedStr.charCodeAt(i)) >>> 0;
    function rand(){ seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 4294967296; }
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); const t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function last7Days(){
    const days = [];
    for (let i = 6; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate()-i); days.push(d.toISOString().slice(0,10)); }
    return days;
  }
  function streakDateSet(state){
    const set = new Set();
    if (!state.lastCheckIn) return set;
    const base = new Date(state.lastCheckIn + 'T00:00:00');
    for (let i = 0; i < state.dailyStreak; i++) {
      const d = new Date(base); d.setDate(d.getDate() - i);
      set.add(d.toISOString().slice(0,10));
    }
    return set;
  }

  const TESTS = [
    { id:'people_easy', title:'Names & People', tier:'Easy', type:'multiple', icon:'\ud83e\uddd1', cost:20,
      questions: [
        { q:"Who was thrown into a lions' den for praying?", opts:["Daniel","Samson","David","Elijah"], correct:0, explain:"Daniel kept praying despite the king's decree, and God shut the lions' mouths." },
        { q:"Who led the Israelites out of Egypt?", opts:["Joshua","Moses","Aaron","Noah"], correct:1, explain:"Moses confronted Pharaoh and led Israel through the Red Sea to freedom." },
        { q:"Who was the first man, according to Genesis?", opts:["Noah","Abraham","Adam","Cain"], correct:2, explain:"Adam was formed from the dust and placed in the Garden of Eden." },
        { q:"Who betrayed Jesus for 30 pieces of silver?", opts:["Peter","Judas Iscariot","Thomas","John"], correct:1, explain:"Judas identified Jesus to the authorities with a kiss." },
        { q:"Who was known for his great strength and long hair?", opts:["Samson","Goliath","Gideon","Saul"], correct:0, explain:"Samson's strength was tied to a vow never to cut his hair." },
        { q:"Who was swallowed by a great fish?", opts:["Elijah","Jonah","Peter","Job"], correct:1, explain:"Jonah spent three days inside the fish before being spit out onto dry land." }
      ] },
    { id:'numbers_medium', title:'Numbers in the Bible', tier:'Medium', type:'multiple', icon:'\ud83d\udd22', cost:35,
      questions: [
        { q:"How many days and nights did it rain during the flood?", opts:["7","40","100","3"], correct:1, explain:"Forty days and nights of rain flooded the earth in Noah's story." },
        { q:"How many commandments did God give Moses?", opts:["10","12","7","5"], correct:0, explain:"The Ten Commandments were given at Mount Sinai." },
        { q:"How many disciples did Jesus choose?", opts:["7","10","12","20"], correct:2, explain:"Jesus chose twelve disciples to follow and learn from Him closely." },
        { q:"How many years did the Israelites wander in the wilderness?", opts:["10","40","100","4"], correct:1, explain:"Forty years passed before Israel entered the promised land." },
        { q:"How many days was Jesus in the tomb before rising?", opts:["1","3","7","40"], correct:1, explain:"Jesus rose on the third day, a central claim of the Christian faith." },
        { q:"How many plagues struck Egypt before Pharaoh let Israel go?", opts:["5","7","10","12"], correct:2, explain:"Ten plagues struck Egypt, ending with the death of the firstborn." }
      ] },
    { id:'books_hard', title:'Books of the Bible', tier:'Hard', type:'multiple', icon:'\ud83d\udcda', cost:50,
      questions: [
        { q:"What is the first book of the Bible?", opts:["Exodus","Genesis","Psalms","Matthew"], correct:1, explain:"Genesis opens with creation and the earliest stories of humanity." },
        { q:"What is the last book of the New Testament?", opts:["Revelation","Acts","Jude","John"], correct:0, explain:"Revelation closes the New Testament with visions of the end of the age." },
        { q:"Which book comes right after Matthew?", opts:["Luke","John","Mark","Acts"], correct:2, explain:"Mark is the second of the four Gospels, known for its fast pace." },
        { q:"How many books are in the New Testament?", opts:["27","39","66","12"], correct:0, explain:"The New Testament contains 27 books, from Matthew to Revelation." },
        { q:"Which Old Testament book is a collection of songs and prayers?", opts:["Proverbs","Psalms","Job","Ruth"], correct:1, explain:"Psalms is Israel's songbook, full of praise, lament, and prayer." },
        { q:"Who wrote most of the New Testament letters?", opts:["Peter","John","Paul","James"], correct:2, explain:"Paul wrote roughly half of the New Testament's books as letters to churches." }
      ] },
    { id:'lightning', title:'Lightning Round', tier:'Timed', type:'timed', icon:'\u26a1', cost:40, timeLimit:45,
      questions: [
        { q:"True or false: Noah built an ark.", opts:["True","False"], correct:0, explain:"Noah built the ark at God's instruction to survive the flood." },
        { q:"True or false: The Bible says Jonah was swallowed by a whale.", opts:["True","False"], correct:1, explain:"Scripture says a \u201cgreat fish,\u201d not specifically a whale." },
        { q:"True or false: Moses parted the Red Sea.", opts:["True","False"], correct:0, explain:"God parted the sea through Moses at the edge of Egypt." },
        { q:"True or false: David defeated Goliath with a sword.", opts:["True","False"], correct:1, explain:"David used a sling and a stone, not a sword, to defeat Goliath." },
        { q:"True or false: Jesus turned water into wine.", opts:["True","False"], correct:0, explain:"This was Jesus' first recorded miracle, at a wedding in Cana." },
        { q:"True or false: There are twelve tribes of Israel.", opts:["True","False"], correct:0, explain:"The twelve tribes descend from Jacob's twelve sons." },
        { q:"True or false: The Ten Commandments were given on Mount Sinai.", opts:["True","False"], correct:0, explain:"Sinai is the mountain where God gave Moses the Law." },
        { q:"True or false: Adam and Eve had three sons named in Genesis.", opts:["True","False"], correct:0, explain:"Cain, Abel, and Seth are all named as sons of Adam and Eve." }
      ] },
    { id:'verse_fill', title:'Complete the Verse', tier:'Fill-in', type:'fill', icon:'\u270d\ufe0f', cost:30,
      questions: [
        { text:"\u201cIn the beginning God created the heavens and the ___.\u201d", ref:"Genesis 1:1", answer:"earth", explain:"The very first verse of the Bible sets the stage for everything after." },
        { text:"\u201cThe Lord is my shepherd; I shall not ___.\u201d", ref:"Psalm 23:1", answer:"want", explain:"One of the most well-known verses, describing trust in God's provision." },
        { text:"\u201cFor God so loved the world, that he gave his one and only ___.\u201d", ref:"John 3:16", answer:"Son", explain:"This verse is often called the gospel in a single sentence." },
        { text:"\u201cI can do all things through Christ who strengthens ___.\u201d", ref:"Philippians 4:13", answer:"me", explain:"Paul wrote this from prison, about contentment in any circumstance." },
        { text:"\u201cTrust in the Lord with all your ___.\u201d", ref:"Proverbs 3:5", answer:"heart", explain:"This proverb continues: \u2018and do not lean on your own understanding.\u2019" }
      ] },
    { id:'miracles_medium', title:'Miracles of Jesus', tier:'Medium', type:'multiple', icon:'\u2728', cost:35,
      questions: [
        { q:"What was Jesus' first recorded miracle?", opts:["Turning water into wine", "Walking on water", "Healing a blind man", "Feeding the 5,000"], correct:0, explain:"This happened at a wedding in Cana, at His mother's request." },
        { q:"How many people did Jesus feed with five loaves and two fish?", opts:["500", "5,000", "50", "50,000"], correct:1, explain:"This miracle, feeding 5,000, appears in all four Gospels." },
        { q:"What did Jesus do for Lazarus?", opts:["Healed his blindness", "Raised him from the dead", "Cast out a demon", "Cured his leprosy"], correct:1, explain:"Lazarus had been dead four days when Jesus called him out of the tomb." },
        { q:"How did Jesus calm a storm on the sea?", opts:["He rowed to shore", "He spoke and rebuked the wind and waves", "He prayed all night first", "He waited it out"], correct:1, explain:"His disciples were amazed that even the wind and waves obeyed Him." },
        { q:"How many lepers did Jesus heal who then didn't return to thank Him, except one?", opts:["Ten", "Three", "Seven", "Twelve"], correct:0, explain:"Of the ten healed, only one, a Samaritan, came back to give thanks." }
      ] },
    { id:'parables_medium', title:'Parables of Jesus', tier:'Medium', type:'multiple', icon:'\ud83c\udf3e', cost:35,
      questions: [
        { q:"In the Parable of the Prodigal Son, what does the father do when the son returns?", opts:["Turns him away", "Runs to him and celebrates", "Makes him work as a servant", "Ignores him"], correct:1, explain:"The father's joyful welcome is the heart of this well-known parable." },
        { q:"In the Parable of the Good Samaritan, who stopped to help the injured man?", opts:["A priest", "A Levite", "A Samaritan", "A Pharisee"], correct:2, explain:"The Samaritan, someone the audience wouldn't expect, is the one who shows mercy." },
        { q:"In the Parable of the Sower, what happened to seed that fell on rocky ground?", opts:["It grew into a large tree", "It sprang up quickly but withered", "It never grew at all", "Birds ate it immediately"], correct:1, explain:"Without deep roots, the plant couldn't survive when troubles came." },
        { q:"In the Parable of the Lost Sheep, how many sheep did the shepherd leave to find the one?", opts:["9", "50", "99", "100"], correct:2, explain:"The shepherd leaves ninety-nine to go after the one that wandered off." },
        { q:"In the Parable of the Talents, what happened to the servant who buried his talent?", opts:["He was praised for caution", "He was rebuked for not using it", "He was given more talents", "He was made a ruler"], correct:1, explain:"The parable praises those who put what they were given to use." }
      ] },
    { id:'prophets_hard', title:'Old Testament Prophets', tier:'Hard', type:'multiple', icon:'\ud83d\udcdc', cost:50,
      questions: [
        { q:"Which prophet was taken up to heaven in a whirlwind?", opts:["Elisha", "Elijah", "Isaiah", "Jeremiah"], correct:1, explain:"Elijah was taken up in a whirlwind, with Elisha watching, in 2 Kings." },
        { q:"Which prophet confronted King David about his sin with Bathsheba?", opts:["Samuel", "Nathan", "Gad", "Elijah"], correct:1, explain:"Nathan told David a parable that exposed his own wrongdoing." },
        { q:"Which prophet is known for weeping over Jerusalem's coming destruction?", opts:["Jeremiah", "Ezekiel", "Daniel", "Hosea"], correct:0, explain:"Jeremiah is often called \u201cthe weeping prophet.\u201d" },
        { q:"Which prophet saw a vision of dry bones coming to life?", opts:["Isaiah", "Ezekiel", "Amos", "Micah"], correct:1, explain:"Ezekiel's vision symbolized new life for a discouraged Israel." },
        { q:"Which prophet confronted the prophets of Baal on Mount Carmel?", opts:["Elisha", "Elijah", "Samuel", "Jonah"], correct:1, explain:"Elijah's contest on Mount Carmel proved God's power over Baal's prophets." }
      ] },
    { id:'kings_hard', title:'Kings of Israel', tier:'Hard', type:'multiple', icon:'\ud83d\udc51', cost:50,
      questions: [
        { q:"Who was Israel's first king?", opts:["David", "Saul", "Solomon", "Samuel"], correct:1, explain:"Saul was anointed Israel's first king, though he later lost God's favor." },
        { q:"Which king was known for his wisdom and building the first temple?", opts:["David", "Solomon", "Saul", "Rehoboam"], correct:1, explain:"Solomon asked God for wisdom and used it to build the temple in Jerusalem." },
        { q:"Which king defeated Goliath before becoming king himself?", opts:["Saul", "David", "Solomon", "Ahab"], correct:1, explain:"David's victory over Goliath as a young shepherd made him famous long before his coronation." },
        { q:"Which wicked king married Jezebel?", opts:["Ahab", "Saul", "Jeroboam", "Omri"], correct:0, explain:"Ahab and Jezebel led Israel deep into idol worship." },
        { q:"After Solomon's reign, the kingdom split into Israel and what other kingdom?", opts:["Judah", "Egypt", "Babylon", "Assyria"], correct:0, explain:"The united kingdom split into Israel in the north and Judah in the south." }
      ] },
    { id:'geography_medium', title:'Bible Geography & Places', tier:'Medium', type:'multiple', icon:'\ud83d\uddfa\ufe0f', cost:35,
      questions: [
        { q:"In which river was Jesus baptized?", opts:["The Nile", "The Jordan River", "The Euphrates", "The Tigris"], correct:1, explain:"John baptized Jesus in the Jordan River, where the Spirit descended like a dove." },
        { q:"Which city is known as the city of David and Israel's capital?", opts:["Bethlehem", "Jerusalem", "Nazareth", "Jericho"], correct:1, explain:"Jerusalem became the political and spiritual center of Israel under David." },
        { q:"Where was Jesus born?", opts:["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"], correct:2, explain:"Bethlehem fulfilled an Old Testament prophecy about the Messiah's birthplace." },
        { q:"Which sea did the Israelites cross during the Exodus?", opts:["The Dead Sea", "The Red Sea", "The Mediterranean Sea", "The Sea of Galilee"], correct:1, explain:"God parted the Red Sea for Israel to cross on dry ground." },
        { q:"Where did Jesus grow up?", opts:["Bethlehem", "Jerusalem", "Nazareth", "Capernaum"], correct:2, explain:"Jesus is often called \u201cJesus of Nazareth\u201d because that's where He was raised." }
      ] },
    { id:'wisdom_easy', title:'Wisdom & Proverbs', tier:'Easy', type:'multiple', icon:'\ud83e\udd89', cost:20,
      questions: [
        { q:"According to Proverbs, what should you trust with all your heart?", opts:["Yourself", "The Lord", "Your riches", "Your friends"], correct:1, explain:"\u201cTrust in the Lord with all your heart\u201d is one of Proverbs' best-known verses." },
        { q:"Which book is known for wisdom sayings written largely by Solomon?", opts:["Psalms", "Proverbs", "Job", "Ecclesiastes"], correct:1, explain:"Proverbs is a collection of short, practical wisdom sayings." },
        { q:"According to Proverbs, what does pride come before?", opts:["A blessing", "A fall or destruction", "A reward", "Wisdom"], correct:1, explain:"\u201cPride goeth before destruction\u201d warns against arrogance." },
        { q:"Which book explores the suffering of a righteous man tested by hardship?", opts:["Job", "Ruth", "Esther", "Jonah"], correct:0, explain:"Job's story wrestles with why bad things happen to a faithful person." },
        { q:"Proverbs describes wisdom as more valuable than what?", opts:["Rubies or gold", "Land", "Cattle", "Servants"], correct:0, explain:"Wisdom is repeatedly held up as more precious than any material wealth." }
      ] },
    { id:'nt_basics_easy', title:'New Testament Basics', tier:'Easy', type:'multiple', icon:'\u2721\ufe0f', cost:20,
      questions: [
        { q:"What are the first four books of the New Testament called?", opts:["The Epistles", "The Gospels", "The Prophecies", "The Psalms"], correct:1, explain:"Matthew, Mark, Luke, and John are known as the four Gospels." },
        { q:"Which book tells the story of the early church after Jesus?", opts:["Acts", "Romans", "Revelation", "Hebrews"], correct:0, explain:"Acts follows the apostles as the church spreads after Jesus' ascension." },
        { q:"Who baptized Jesus?", opts:["Peter", "John the Baptist", "Paul", "Andrew"], correct:1, explain:"John the Baptist baptized Jesus in the Jordan River." },
        { q:"Which apostle denied knowing Jesus three times?", opts:["Peter", "John", "James", "Thomas"], correct:0, explain:"Peter denied Jesus three times before the rooster crowed, just as Jesus predicted." },
        { q:"Who is traditionally credited with writing the most New Testament letters?", opts:["Peter", "Paul", "John", "James"], correct:1, explain:"Paul wrote roughly half of the New Testament's books as letters to churches." }
      ] },
    { id:'ot_speed', title:'Old Testament Speed Round', tier:'Timed', type:'timed', icon:'\ud83d\udd25', cost:40, timeLimit:40,
      questions: [
        { q:"True or false: Abraham was originally named Abram.", opts:["True","False"], correct:0, explain:"God renamed him Abraham, meaning \u201cfather of many,\u201d after the covenant." },
        { q:"True or false: Moses saw the Promised Land but did not enter it.", opts:["True","False"], correct:0, explain:"Moses viewed Canaan from a mountain but died before crossing in." },
        { q:"True or false: Cain killed his brother Abel.", opts:["True","False"], correct:0, explain:"This was the first murder recorded in the Bible." },
        { q:"True or false: The Israelites wandered the wilderness for 100 years.", opts:["True","False"], correct:1, explain:"It was forty years, not one hundred." },
        { q:"True or false: Joseph had a coat of many colors.", opts:["True","False"], correct:0, explain:"The special coat from his father was part of what made his brothers jealous." },
        { q:"True or false: Samson lost his strength when his hair was cut.", opts:["True","False"], correct:0, explain:"His strength was tied to a vow that included never cutting his hair." },
        { q:"True or false: Ruth was Naomi's daughter-in-law.", opts:["True","False"], correct:0, explain:"Ruth stayed loyal to Naomi even after both of their husbands died." },
        { q:"True or false: Esther saved her people as queen of Persia.", opts:["True","False"], correct:0, explain:"Esther risked her life to expose a plot against the Jewish people." }
      ] },
    { id:'verse_fill_2', title:'Complete the Verse II', tier:'Fill-in', type:'fill', icon:'\ud83d\udcd6', cost:30,
      questions: [
        { text:"\u201cBe strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you ___.\u201d", ref:"Joshua 1:9", answer:"go", explain:"God's charge to Joshua as he took over leadership from Moses." },
        { text:"\u201cThis is the day that the Lord has made; we will rejoice and be glad in ___.\u201d", ref:"Psalm 118:24", answer:"it", explain:"A verse often used to greet each new day with gratitude." },
        { text:"\u201cAsk, and it will be given to you; seek, and you will ___.\u201d", ref:"Matthew 7:7", answer:"find", explain:"Jesus taught persistence in prayer using this pattern of ask, seek, knock." },
        { text:"\u201cLove is patient, love is ___.\u201d", ref:"1 Corinthians 13:4", answer:"kind", explain:"Paul's famous chapter on love \u2014 one of the most quoted passages at weddings." },
        { text:"\u201cBut those who wait on the Lord shall renew their ___.\u201d", ref:"Isaiah 40:31", answer:"strength", explain:"A promise of renewed energy for those who wait on God rather than rush ahead." }
      ] },
    { id:'bible_iq', title:'Bible IQ Challenge', tier:'Hard', type:'multiple', icon:'\ud83e\udde0', cost:60,
      questions: [
        { q:"What is commonly cited as the shortest verse in the Bible?", opts:["\u201cJesus wept\u201d", "\u201cIn the beginning\u201d", "\u201cThe Lord is my shepherd\u201d", "\u201cLet there be light\u201d"], correct:0, explain:"John 11:35, just two words in most English translations." },
        { q:"Which Old Testament figure interpreted dreams for Pharaoh?", opts:["Daniel", "Joseph", "Moses", "Solomon"], correct:1, explain:"Joseph's gift for interpreting dreams led to his rise in Egypt." },
        { q:"Which short New Testament letter is a personal appeal about a runaway slave?", opts:["Philemon", "Titus", "Jude", "3 John"], correct:0, explain:"Paul wrote Philemon on behalf of Onesimus, appealing for mercy and reconciliation." },
        { q:"Who was the mother of Jesus?", opts:["Mary", "Martha", "Elizabeth", "Anna"], correct:0, explain:"Mary is described as a young woman chosen to carry and raise Jesus." },
        { q:"Which disciple is remembered as \u201cdoubting\u201d for questioning Jesus' resurrection?", opts:["Thomas", "Philip", "Bartholomew", "Matthew"], correct:0, explain:"Thomas wanted to see and touch Jesus' wounds before he'd believe." },
        { q:"What was the final plague that convinced Pharaoh to free Israel?", opts:["Locusts", "Darkness", "Death of the firstborn", "Hail"], correct:2, explain:"This tenth and final plague broke Pharaoh's resistance for good." },
        { q:"Which short Old Testament book is commonly noted for never mentioning God's name directly?", opts:["Esther", "Ruth", "Job", "Nahum"], correct:0, explain:"Esther's story is famous for God working behind the scenes without being named outright." },
        { q:"Which two Old Testament books are named after women?", opts:["Ruth and Esther", "Naomi and Ruth", "Sarah and Rebekah", "Deborah and Ruth"], correct:0, explain:"Ruth and Esther are the only two Old Testament books named for their female protagonists." }
      ] }
  ];

  const QUESTS = [
    { id:'first_step', icon:'\ud83d\udc63', title:'First steps', desc:'Complete your first lesson.', target:1, reward:10, get: (s) => s.completed.length },
    { id:'steady_walk', icon:'\ud83e\udd7e', title:'Steady walk', desc:'Complete 5 lessons.', target:5, reward:25, get: (s) => s.completed.length },
    { id:'faithful_heart', icon:'\u2764\ufe0f', title:'Faithful heart', desc:'Complete 10 lessons.', target:10, reward:50, get: (s) => s.completed.length },
    { id:'daily_devotion', icon:'\u2600\ufe0f', title:'Daily devotion', desc:'Reach a 3-day daily reading streak.', target:3, reward:20, get: (s) => s.dailyStreak },
    { id:'full_armor', icon:'\ud83d\udee1\ufe0f', title:'Full armor', desc:'Clear a book checkpoint review.', target:1, reward:30, get: (s) => s.completedCheckpoints.length },
    { id:'written_word', icon:'\u270d\ufe0f', title:'Written word', desc:'Write 3 reflections.', target:3, reward:25, get: (s) => s.reflections.length },
    { id:'well_done', icon:'\ud83d\udc51', title:'Well done, good and faithful', desc:'Take 3 different tests.', target:3, reward:30, get: (s) => Object.keys(s.testBest).length },
    { id:'iron_sharpens', icon:'\u2694\ufe0f', title:'Iron sharpens iron', desc:'Score perfectly on any test.', target:1, reward:35, get: (s) => Object.entries(s.testBest).some(([id, score]) => { const t = TESTS.find(x => x.id === id); return t && score === t.questions.length; }) ? 1 : 0 }
  ];

  const AVATAR_OPTIONS = ['\ud83d\udcd6', '\u271d\ufe0f', '\ud83d\udd4a\ufe0f', '\ud83d\udc11', '\ud83d\udc1f', '\u26f0\ufe0f', '\ud83d\ude4f', '\ud83c\udf3f'];
  const BADGES = [
    { id:'seeker', icon:'\ud83d\udd0d', title:'Seeker', cost:30 },
    { id:'sharp_mind', icon:'\ud83e\udde0', title:'Sharp Mind', cost:60 },
    { id:'wordsmith', icon:'\ud83d\udcd6', title:'Wordsmith', cost:90 },
    { id:'faithful_scholar', icon:'\ud83c\udf93', title:'Faithful Scholar', cost:130 },
    { id:'deep_roots', icon:'\ud83c\udf33', title:'Deep Roots', cost:180 },
    { id:'iron_sharpens', icon:'\u2694\ufe0f', title:'Iron Sharpens Iron', cost:240 },
    { id:'overcomer', icon:'\ud83c\udfc5', title:'Overcomer', cost:320 },
    { id:'pillar_wisdom', icon:'\ud83c\udfdb\ufe0f', title:'Pillar of Wisdom', cost:420 }
  ];
  const SHEPHERD_LOGO_SVG = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="lbg" cx="50%" cy="32%" r="75%"><stop offset="0%" stop-color="#a56cf0"/><stop offset="100%" stop-color="#4a2f7a"/></radialGradient></defs><circle cx="50" cy="50" r="50" fill="url(#lbg)"/><g fill="#fdfaf3"><circle cx="47" cy="30" r="7.5"/><path d="M32 76 Q30 48 47 41 Q64 48 62 76 Z"/></g><path d="M68 24 Q60 22 61 32 L61 78" fill="none" stroke="#fdfaf3" stroke-width="3" stroke-linecap="round"/></svg>';
  const DEFAULT_VERSE = 'Be strong and courageous \u2014 Joshua 1:9';

  const DAILY_DEVOTIONALS = [
    { ref: 'Philippians 4:6\u20137', verse: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.', title: 'Bring it, don\u2019t carry it', text: 'Whatever\u2019s weighing on you today, this verse doesn\u2019t say to feel calm first \u2014 it says to bring it to God first. Try naming one specific worry in a short prayer right now, thanking Him for one thing in the middle of it.' },
    { ref: 'Psalm 23:1\u20133', verse: 'The LORD is my shepherd; I shall not want. He makes me lie down in green pastures; he leads me beside still waters; he restores my soul.', title: 'Let Him lead today', text: 'A shepherd doesn\u2019t just protect \u2014 he leads somewhere good. If today feels rushed or uncertain, ask God to lead your next hour, not just your big decisions.' },
    { ref: 'Joshua 1:9', verse: 'Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.', title: 'Courage isn\u2019t the absence of fear', text: 'God commanded courage to a man about to face real giants \u2014 courage here means moving forward anyway, because of who\u2019s with you. What\u2019s one thing you\u2019ve been avoiding that this verse gives you courage for?' },
    { ref: 'Lamentations 3:22\u201323', verse: 'The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness.', title: 'A fresh start, literally', text: 'Yesterday\u2019s failures don\u2019t carry over into today\u2019s mercy \u2014 it\u2019s new, this morning, specifically for you. Let today actually be a clean page instead of a continuation of yesterday.' },
    { ref: 'Proverbs 3:5\u20136', verse: 'Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.', title: 'You don\u2019t have to have it figured out', text: 'This isn\u2019t a call to stop thinking \u2014 it\u2019s a call to stop needing total certainty before you trust God with the next step. Where are you leaning too hard on your own read of a situation right now?' },
    { ref: 'Matthew 6:33\u201334', verse: 'Seek first the kingdom of God and his righteousness, and all these things will be added to you. Sufficient for the day is its own trouble.', title: 'One day at a time, really', text: 'Jesus isn\u2019t telling you not to plan \u2014 He\u2019s telling you not to borrow tomorrow\u2019s trouble today. What\u2019s one future worry you can set down until it\u2019s actually due?' },
    { ref: 'Isaiah 41:10', verse: 'Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.', title: 'Held, not just watched', text: 'Notice the verbs \u2014 strengthen, help, uphold. God isn\u2019t distantly aware of your day; He\u2019s actively holding it. Ask Him specifically for strength in the one part of today you\u2019re dreading most.' },
    { ref: 'Romans 8:28', verse: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.', title: 'Even this', text: 'This verse doesn\u2019t say everything that happens is good \u2014 it says God is able to work good through it. Is there a current hardship you\u2019ve stopped believing God can use?' },
    { ref: '1 Peter 5:6\u20137', verse: 'Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you, casting all your anxieties on him, because he cares for you.', title: 'He actually cares', text: 'Casting anxiety isn\u2019t pretending it\u2019s not there \u2014 it\u2019s handing it to someone who cares more than you do. What\u2019s one anxious thought you can consciously hand over today instead of just carrying?' },
    { ref: 'Galatians 6:9', verse: 'And let us not grow weary of doing good, for in due season we will reap, if we do not give up.', title: 'The unseen middle', text: 'Most growth happens in the unglamorous middle, long before any harvest shows. If you\u2019re tired of something good that hasn\u2019t paid off yet, this verse is for you today \u2014 keep going.' },
    { ref: 'Psalm 46:10', verse: 'Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!', title: 'Stillness as trust', text: 'Being still isn\u2019t passive here \u2014 it\u2019s a deliberate act of trust that God is God and you don\u2019t have to control everything. Where could you build one minute of real stillness into today?' },
    { ref: 'John 14:27', verse: 'Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.', title: 'A different kind of peace', text: 'The world\u2019s peace usually depends on circumstances being fine. Jesus offers a peace that holds even when circumstances aren\u2019t. What would it look like to ask for that kind of peace today, specifically?' },
    { ref: 'James 1:2\u20134', verse: 'Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness.', title: 'Trials with a purpose', text: 'This doesn\u2019t ask you to fake happiness about hardship \u2014 it points to what the hardship is producing in you. What steadiness might God be building in you through your current trial?' },
    { ref: 'Colossians 3:23', verse: 'Whatever you do, work heartily, as for the Lord and not for men.', title: 'Ordinary work, real purpose', text: 'Most of today will be ordinary tasks \u2014 this verse says none of it is beneath God\u2019s notice. Try doing one routine task today as if it were directly for Him.' }
  ];

  function dayOfYear(){
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    return Math.floor(diff / 86400000);
  }
  function todaysDevotional(){
    return DAILY_DEVOTIONALS[dayOfYear() % DAILY_DEVOTIONALS.length];
  }

  function App(){
    const [state, setState] = React.useState(null);
    const [tab, setTab] = React.useState("path");
    const [openLesson, setOpenLesson] = React.useState(null);
    const [openCheckpoint, setOpenCheckpoint] = React.useState(null);
    const [step, setStep] = React.useState("passage");
    const [qIndex, setQIndex] = React.useState(0);
    const [picked, setPicked] = React.useState(null);
    const [correctCount, setCorrectCount] = React.useState(0);
    const [editingProfile, setEditingProfile] = React.useState(false);
    const [editName, setEditName] = React.useState('');
    const [editAvatar, setEditAvatar] = React.useState('\ud83d\udcd6');
    const [editVerse, setEditVerse] = React.useState('');
    const [openStudyBook, setOpenStudyBook] = React.useState(null);
    const [studyStep, setStudyStep] = React.useState('prayer');
    const [editingTestimony, setEditingTestimony] = React.useState(false);
    const [testimonyDraft, setTestimonyDraft] = React.useState('');
    const [reflectionDraft, setReflectionDraft] = React.useState('');
    const [activeTest, setActiveTest] = React.useState(null);
    const [tIndex, setTIndex] = React.useState(0);
    const [tPicked, setTPicked] = React.useState(null);
    const [tFillInput, setTFillInput] = React.useState('');
    const [tFillResult, setTFillResult] = React.useState(null);
    const [tScore, setTScore] = React.useState(0);
    const [tEarned, setTEarned] = React.useState(0);
    const [tFinished, setTFinished] = React.useState(false);
    const [tTimeLeft, setTTimeLeft] = React.useState(0);

    const [user, setUser] = React.useState(null);
    const [authChecked, setAuthChecked] = React.useState(false);
    const [authOpen, setAuthOpen] = React.useState(false);
    const [authMode, setAuthMode] = React.useState('login');
    const [authEmail, setAuthEmail] = React.useState('');
    const [authPassword, setAuthPassword] = React.useState('');
    const [authError, setAuthError] = React.useState('');
    const [authLoading, setAuthLoading] = React.useState(false);
    const [showWelcome, setShowWelcome] = React.useState(true);
    const [showInstallBanner, setShowInstallBanner] = React.useState(false);
    const [deferredInstallPrompt, setDeferredInstallPrompt] = React.useState(null);
    const [installIsIOS, setInstallIsIOS] = React.useState(false);

    React.useEffect(() => {
      try {
        const standalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) || window.navigator.standalone === true;
        if (standalone) return;
        if (localStorage.getItem('stf-install-dismissed')) return;
        const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
        if (isIOS) { setInstallIsIOS(true); setShowInstallBanner(true); return; }
        const handler = (ev) => { ev.preventDefault(); setDeferredInstallPrompt(ev); setShowInstallBanner(true); };
        window.addEventListener('beforeinstallprompt', handler);
        return () => window.removeEventListener('beforeinstallprompt', handler);
      } catch (ex) {}
    }, []);

    function dismissInstallBanner(){
      try { localStorage.setItem('stf-install-dismissed', '1'); } catch (ex) {}
      setShowInstallBanner(false);
    }

    async function triggerAndroidInstall(){
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      try { await deferredInstallPrompt.userChoice; } catch (ex) {}
      setShowInstallBanner(false);
    }

    React.useEffect(() => {
      if (!sb) { load(null); setAuthChecked(true); return; }
      sb.auth.getSession().then(({ data }) => {
        const sessionUser = data && data.session ? data.session.user : null;
        setUser(sessionUser);
        setAuthChecked(true);
        load(sessionUser);
        if (sessionUser) setShowWelcome(false);
      });
      const { data: listener } = sb.auth.onAuthStateChange((event, session) => {
        const sessionUser = session ? session.user : null;
        setUser(sessionUser);
        load(sessionUser);
        if (sessionUser) setShowWelcome(false);
      });
      return () => { if (listener && listener.subscription) listener.subscription.unsubscribe(); };
    }, []);

    async function load(currentUser){
      if (sb && currentUser) {
        try {
          const { data, error } = await sb.from('progress').select('data').eq('id', currentUser.id).maybeSingle();
          if (error) throw error;
          if (data && data.data) { setState(data.data); return; }
          // No row yet for this account - start from local guest progress if any, else defaults
          let starting = { ...DEFAULT_STATE };
          try {
            const local = localStorage.getItem(KEY);
            if (local) starting = JSON.parse(local);
          } catch (ex) {}
          await sb.from('progress').upsert({ id: currentUser.id, data: starting });
          setState(starting);
          return;
        } catch (ex) { /* fall through to local */ }
      }
      try {
        const local = localStorage.getItem(KEY);
        setState(local ? JSON.parse(local) : { ...DEFAULT_STATE });
      } catch (ex) { setState({ ...DEFAULT_STATE }); }
    }

    async function persist(next){
      setState(next);
      if (sb && user) {
        try { await sb.from('progress').upsert({ id: user.id, data: next, updated_at: new Date().toISOString() }); return; } catch (ex) {}
      }
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (ex) {}
    }

    async function signUp(){
      if (!sb) return;
      setAuthError(''); setAuthLoading(true);
      const { data, error } = await sb.auth.signUp({ email: authEmail, password: authPassword });
      setAuthLoading(false);
      if (error) { setAuthError(error.message); return; }
      if (data && data.session) {
        // Email confirmation is off, or already confirmed - we're logged in immediately
        setAuthOpen(false); setAuthEmail(''); setAuthPassword(''); setAuthError('');
        return;
      }
      setAuthError('Check your email to confirm your account, then log in.');
    }

    async function signIn(){
      if (!sb) return;
      setAuthError(''); setAuthLoading(true);
      const { error } = await sb.auth.signInWithPassword({ email: authEmail, password: authPassword });
      setAuthLoading(false);
      if (error) { setAuthError(error.message); return; }
      setAuthOpen(false); setAuthEmail(''); setAuthPassword('');
    }

    async function signOut(){
      if (!sb) return;
      await sb.auth.signOut();
      load(null);
    }

    function renderAuthModal(){
      return e('div', {className:'dl-modal-bg open', key:'authmodal', onClick:(ev)=>{ if(ev.target===ev.currentTarget) setAuthOpen(false); }},
        e('div', {className:'dl-auth-modal'}, [
          e('div', {className:'dl-auth-modal-header', key:'hdr'}, [
            e('div', {className:'dl-auth-modal-logo', dangerouslySetInnerHTML:{__html: SHEPHERD_LOGO_SVG}, key:'logo'}),
            e('div', {className:'dl-auth-modal-title', key:'title'}, authMode === 'signup' ? 'Create your account' : 'Welcome back'),
            e('div', {className:'dl-auth-modal-sub', key:'sub'}, authMode === 'signup' ? 'Save your progress across every device' : 'Log in to pick up where you left off')
          ]),
          e('div', {className:'dl-auth-modal-body', key:'body'}, [
            e('div', {className:'dl-edit-field', key:'emailfield'}, [
              e('label', {key:'l'}, 'Email'),
              e('input', {type:'email', value:authEmail, onChange: ev=>setAuthEmail(ev.target.value), placeholder:'you@example.com', key:'i'})
            ]),
            e('div', {className:'dl-edit-field', key:'pwfield'}, [
              e('label', {key:'l'}, 'Password'),
              e('input', {type:'password', value:authPassword, onChange: ev=>setAuthPassword(ev.target.value), placeholder:'At least 6 characters', key:'i'})
            ]),
            authError ? e('div', {className:'dl-auth-error', key:'err'}, authError) : null,
            e('button', {className:'dl-auth-submit', disabled: authLoading || !authEmail.trim() || !authPassword.trim(), onClick: authMode === 'signup' ? signUp : signIn, key:'go'}, authLoading ? '...' : (authMode === 'signup' ? 'Create account' : 'Log in')),
            e('button', {className:'dl-auth-cancel', onClick:()=>setAuthOpen(false), key:'cancel'}, 'Cancel'),
            e('button', {className:'dl-auth-switch', onClick:()=>{ setAuthMode(authMode === 'signup' ? 'login' : 'signup'); setAuthError(''); }, key:'switch'},
              authMode === 'signup' ? 'Already have an account? Log in' : "Don't have an account? Sign up")
          ])
        ])
      );
    }

    function saveTestimony(){
      persist({ ...state, testimony: testimonyDraft });
      setEditingTestimony(false);
    }

    function startTest(test){
      if (state.gems < test.cost) return;
      persist({ ...state, gems: state.gems - test.cost });
      setActiveTest(test); setTIndex(0); setTPicked(null); setTFillInput(''); setTFillResult(null); setTScore(0); setTFinished(false); setTEarned(0);
      if (test.type === 'timed') setTTimeLeft(test.timeLimit);
    }

    function finishTest(finalScore){
      const prevBest = state.testBest[activeTest.id] || 0;
      const nextBest = finalScore > prevBest ? { ...state.testBest, [activeTest.id]: finalScore } : state.testBest;
      const earned = finalScore;
      persist({ ...state, testBest: nextBest, pearls: (state.pearls||0) + earned });
      setTEarned(earned);
      setTFinished(true);
    }

    function buyBadge(badge){
      const owned = state.ownedBadges || [];
      if (owned.includes(badge.id)) return;
      if ((state.pearls||0) < badge.cost) return;
      persist({ ...state, pearls: state.pearls - badge.cost, ownedBadges: [...owned, badge.id] });
    }

    function pickTAnswer(i){
      if (tPicked !== null) return;
      setTPicked(i);
      const correct = i === activeTest.questions[tIndex].correct;
      if (correct) setTScore(s => s + 1);
    }

    function submitFillAnswer(){
      if (tFillResult !== null) return;
      const q = activeTest.questions[tIndex];
      const correct = tFillInput.trim().toLowerCase() === q.answer.toLowerCase();
      setTFillResult(correct);
      if (correct) setTScore(s => s + 1);
    }

    function nextTQuestion(){
      const isLast = tIndex + 1 >= activeTest.questions.length;
      const justCorrect = activeTest.type === 'fill' ? tFillResult : (tPicked === activeTest.questions[tIndex].correct);
      if (isLast) {
        finishTest(tScore);
      } else {
        setTIndex(i => i + 1); setTPicked(null); setTFillInput(''); setTFillResult(null);
      }
    }

    React.useEffect(() => {
      if (!activeTest || activeTest.type !== 'timed' || tFinished) return;
      if (tTimeLeft <= 0) { finishTest(tScore); return; }
      const timer = setTimeout(() => setTTimeLeft(t => t - 1), 1000);
      return () => clearTimeout(timer);
    }, [activeTest, tTimeLeft, tFinished]);

    function checkInToday(){
      const today = todayStr();
      if (state.lastCheckIn === today) return;
      const wasYesterday = state.lastCheckIn === yesterdayStr();
      persist({ ...state, dailyStreak: wasYesterday ? state.dailyStreak + 1 : 1, lastCheckIn: today });
    }

    function claimQuest(q){
      if (state.claimedQuests.includes(q.id)) return;
      if (q.get(state) < q.target) return;
      persist({ ...state, claimedQuests: [...state.claimedQuests, q.id], gems: state.gems + q.reward });
    }

    function saveProfile(name, avatar, verse){
      persist({ ...state, profile: { name: name.trim() || 'Your name', avatar, verse: verse.trim() || DEFAULT_VERSE } });
    }

    function openEditProfile(){
      setEditName(state.profile.name);
      setEditAvatar(state.profile.avatar);
      setEditVerse(state.profile.verse || DEFAULT_VERSE);
      setEditingProfile(true);
    }

    function bookLessons(book){ return LESSONS.filter(l => l.book === book); }
    function bookComplete(book){ return bookLessons(book).every(l => state.completed.includes(l.id)); }

    function nodeStatus(lesson){
      if (state.completed.includes(lesson.id)) return "done";
      const firstIncomplete = bookLessons(lesson.book).find(l => !state.completed.includes(l.id));
      if (firstIncomplete && firstIncomplete.id === lesson.id) return "current";
      return "locked";
    }
    function checkpointStatus(book){
      if (state.completedCheckpoints.includes(book)) return "done";
      if (bookComplete(book)) return "current";
      return "locked";
    }

    function openIfAvailable(lesson){
      if (nodeStatus(lesson) === "locked") return;
      setOpenLesson(lesson); setStep("passage"); setQIndex(0); setPicked(null); setCorrectCount(0);
    }
    function openCheckpointIfAvailable(book){
      if (checkpointStatus(book) === "locked") return;
      setOpenCheckpoint(book); setStep("overview"); setQIndex(0); setPicked(null); setCorrectCount(0);
    }

    function completeDeepStudy(book){
      const done = state.deepStudies || [];
      if (!done.includes(book)) {
        persist({ ...state, deepStudies: [...done, book] });
      }
      setOpenStudyBook(null);
    }

    function pickAnswer(i){
      if (picked !== null) return;
      setPicked(i);
      const source = openCheckpoint ? CHECKPOINTS[openCheckpoint] : openLesson;
      if (i === source.questions[qIndex].correct) {
        setCorrectCount(c => c + 1);
        setStep("explain");
      } else {
        setStep("retry");
      }
    }

    function retryQuestion(){
      setPicked(null);
      setStep("question");
    }

    function midpointLessonId(book){
      const ls = bookLessons(book);
      return ls.length ? ls[Math.floor(ls.length / 2)].id : null;
    }

    function nextStep(){
      const source = openCheckpoint ? CHECKPOINTS[openCheckpoint] : openLesson;
      if (qIndex + 1 < source.questions.length) {
        setQIndex(q => q + 1); setPicked(null); setStep("question");
      } else if (openCheckpoint) {
        const already = state.completedCheckpoints.includes(openCheckpoint);
        persist({ ...state, completedCheckpoints: already ? state.completedCheckpoints : [...state.completedCheckpoints, openCheckpoint], gems: state.gems + (already ? 0 : 20) });
        setStep("deepdive");
      } else {
        const already = state.completed.includes(openLesson.id);
        persist({ ...state, completed: already ? state.completed : [...state.completed, openLesson.id], streak: already ? state.streak : state.streak + 1, gems: state.gems + (already ? 0 : 10) });
        setStep("deepdive");
      }
    }

    function continueFromDeepDive(){
      if (openCheckpoint) {
        setReflectionDraft('');
        setStep("reflect");
      } else if (openLesson.id === midpointLessonId(openLesson.book)) {
        setReflectionDraft('');
        setStep("reflect");
      } else {
        setStep("done");
      }
    }

    function currentDeepDive(){
      if (openCheckpoint) return CHECKPOINTS[openCheckpoint].deepDive || '';
      return openLesson ? (openLesson.deepDive || '') : '';
    }

    function currentReflectionPrompt(){
      if (openCheckpoint) return CHECKPOINT_REFLECTIONS[openCheckpoint] || 'What stood out to you most from this?';
      return openLesson ? (MIDPOINT_REFLECTIONS[openLesson.book] || 'What stood out to you most from this?') : '';
    }

    function saveReflection(){
      const text = reflectionDraft.trim();
      if (text) {
        const book = openCheckpoint || openLesson.book;
        const entry = {
          id: Date.now()+'',
          title: openCheckpoint ? (book + ' \u2014 end of book reflection') : (book + ' \u2014 halfway reflection'),
          book: book,
          prompt: currentReflectionPrompt(),
          text,
          date: todayStr()
        };
        persist({ ...state, reflections: [entry, ...state.reflections] });
      }
      setStep("done");
    }

    function closeModal(){ setOpenLesson(null); setOpenCheckpoint(null); }

    if (state === null) return e('div', {className:'dl-loading'}, [
      e('div', {className:'dl-loading-logo', dangerouslySetInnerHTML:{__html: SHEPHERD_LOGO_SVG}, key:'logo'}),
      'Loading\u2026'
    ]);

    if (showWelcome && authChecked) {
      return e('div', {className:'dl-welcome'}, [
        e('div', {className:'dl-welcome-stars', key:'stars'}),
        e('div', {className:'dl-welcome-inner', key:'inner'}, [
          e('div', {className:'dl-welcome-logo', dangerouslySetInnerHTML:{__html: SHEPHERD_LOGO_SVG}, key:'logo'}),
          e('div', {className:'dl-welcome-title', key:'title'}, 'Steps to Faith'),
          e('div', {className:'dl-welcome-tag', key:'tag'}, 'A guided walk through the Bible'),
          e('div', {className:'dl-welcome-body', key:'body'}, [
            e('p', {key:'p1'}, 'Steps to Faith walks you through the Bible one story at a time \u2014 starting in Genesis, but you\u2019re free to jump to any book whenever you want.'),
            e('p', {key:'p2'}, 'Each lesson has a short passage, a few questions, and a deeper look at what it means. Complete lessons to earn gems, then spend those gems on tests and quizzes to sharpen what you\u2019ve learned.'),
            e('p', {key:'p3'}, 'Build a daily streak, save personal reflections, and track your progress \u2014 sign in to keep it all saved across your devices.')
          ]),
          e('div', {className:'dl-welcome-actions', key:'actions'},
            user
              ? [ e('button', {className:'dl-welcome-btn primary', onClick:()=>setShowWelcome(false), key:'back'}, 'Continue') ]
              : [
                  e('button', {className:'dl-welcome-btn primary', onClick:()=>{ setAuthMode('signup'); setAuthError(''); setAuthOpen(true); }, key:'signup'}, 'Sign in / Create account'),
                  e('button', {className:'dl-welcome-btn', onClick:()=>setShowWelcome(false), key:'guest'}, 'Continue as guest')
                ]
          )
        ]),
        authOpen ? renderAuthModal() : null
      ]);
    }

    const books = [];
    LESSONS.slice().reverse().forEach(lesson => {
      if (!books.includes(lesson.book)) books.push(lesson.book);
    });
    const booksForward = books.slice().reverse();
    const selectedBook = booksForward.includes(state.selectedBook) ? state.selectedBook : booksForward[0];

    function selectBook(book){ persist({ ...state, selectedBook: book }); }

    function renderBookPath(book){
      const lessonsInOrder = bookLessons(book);
      const cpStatus = checkpointStatus(book);
      const atmosphere = BOOK_ATMOSPHERES[book];

      const checkpointRow = e('div', {className:'dl-scene', style: atmosphere ? {} : {background:'linear-gradient(180deg, #f1e7ff 0%, #f7f0ff 100%)'}, key:'cprow'}, [
        e('div', {className:'dl-scene-inner', style:{justifyContent:'center'}}, [
          e('div', {className:'dl-node-wrap'}, [
            e('button', {className:'dl-node checkpoint ' + cpStatus, onClick:()=>openCheckpointIfAvailable(book), key:'node'}, [
              cpStatus === 'current' && e('span', {className:'dl-node-ring', key:'ring'}),
              cpStatus !== 'locked' && e('span', {className:'dl-node-icon', key:'icon'}, String.fromCodePoint(0x1F3C6))
            ]),
            e('div', {className:'dl-node-label', key:'label'}, book + ' review')
          ])
        ])
      ]);

      const lessonRows = lessonsInOrder.map(lesson => {
        const status = nodeStatus(lesson);
        const sideClass = lesson.side === 'l' ? 'side-l' : lesson.side === 'r' ? 'side-r' : '';
        const bgStyle = atmosphere ? {} : { background: 'linear-gradient(180deg, ' + lesson.scene.topColor + ' 0%, ' + lesson.scene.botColor + ' 100%)' };
        return e('div', {className:'dl-scene ' + sideClass, style:bgStyle, key:lesson.id}, [
          atmosphere ? null : lesson.scene.decor.map((d, di) => e('span', {className:'dl-decor', style:{top:d.t, left:d.l, right:d.r}, key:'d'+di}, String.fromCodePoint(d.i))),
          e('div', {className:'dl-scene-inner', key:'inner'}, [
            e('div', {className:'dl-node-wrap'}, [
              e('button', {className:'dl-node ' + status, onClick:()=>openIfAvailable(lesson), key:'node'}, [
                status === 'current' && e('span', {className:'dl-node-ring', key:'ring'}),
                status !== 'locked' && e('span', {className:'dl-node-icon', key:'icon'}, status === 'done' ? String.fromCodePoint(0x2605) : String.fromCodePoint(0x25B6))
              ]),
              e('div', {className:'dl-node-label', key:'label'}, lesson.title)
            ])
          ])
        ]);
      });

      const studyDone = (state.deepStudies || []).includes(book);
      const deepStudyRow = DEEP_STUDIES[book] ? e('div', {className:'dl-scene', style: atmosphere ? {} : {background:'transparent'}, key:'studyrow'}, [
        e('div', {className:'dl-scene-inner', style:{justifyContent:'center'}}, [
          e('div', {className:'dl-node-wrap'}, [
            e('button', {className:'dl-node deepstudy' + (studyDone ? ' studied' : ''), onClick:()=>{ setOpenStudyBook(book); setStudyStep('prayer'); }, key:'node'},
              e('span', {className:'dl-node-icon', key:'icon'}, studyDone ? String.fromCodePoint(0x2713) : String.fromCodePoint(0x1F4DC))
            ),
            e('div', {className:'dl-node-label', key:'label'}, 'Deep study \u00b7 ' + DEEP_STUDIES[book].focus)
          ])
        ])
      ]) : null;

      const header = e('div', {className:'dl-book-header', key:'hdr'}, e('span', {className:'dl-band-label', style:{background:'#e2c8f7', color:'#4a2380', borderBottomColor:'#c9a0ea'}}, book));

      if (atmosphere) {
        return e('div', {key:book}, [
          header,
          e('div', {className:'dl-atmosphere', style:{background:atmosphere.gradient}, key:'atmo'}, [
            ...atmosphere.decor.map((d, di) => renderDecor(d, 'decor'+di)),
            deepStudyRow,
            ...lessonRows,
            checkpointRow
          ])
        ]);
      }
      return e('div', {key:book}, [header, deepStudyRow, ...lessonRows, checkpointRow]);
    }

    const activeModal = openLesson || (openCheckpoint && CHECKPOINTS[openCheckpoint]);
    const isCheckpoint = !!openCheckpoint;

    return e('div', null, [
      e('div', {className:'dl-top', key:'top'}, [
        e('div', {className:'dl-pill fire', key:'f'}, [String.fromCodePoint(0x1F525), ' ' + state.streak]),
        e('div', {className:'dl-pill gem', key:'g'}, [String.fromCodePoint(0x1F48E), ' ' + state.gems]),
        e('div', {className:'dl-pill pearl', key:'pl'}, [String.fromCodePoint(0x1F539), ' ' + (state.pearls||0)])
      ]),

      tab === 'path' ? e('div', {key:'path'}, [
        e('div', {className:'dl-book-picker', key:'picker'}, booksForward.map(book => {
          const total = bookLessons(book).length;
          const done = bookLessons(book).filter(l => state.completed.includes(l.id)).length;
          const complete = done === total && state.completedCheckpoints.includes(book);
          return e('button', {className:'dl-book-chip' + (book===selectedBook?' active':''), onClick:()=>selectBook(book), key:book}, [
            complete ? e('span', {key:'check'}, String.fromCodePoint(0x2705) + ' ') : null,
            book,
            e('span', {className:'dl-book-chip-progress', key:'p'}, ' ' + done + '/' + total)
          ]);
        })),
        e('div', {className:'dl-path', key:'pathinner'}, renderBookPath(selectedBook))
      ]) : null,

      tab === 'daily' ? e('div', {className:'dl-daily-wrap', key:'daily'}, [
        e('div', {className:'dl-passage-card', key:'verse'}, [
          e('div', {className:'dl-passage-ref'}, 'Today\u2019s reading \u00b7 ' + todaysDevotional().ref),
          e('div', {className:'dl-passage-text'}, '\u201c' + todaysDevotional().verse + '\u201d')
        ]),
        e('div', {className:'dl-devotional-card', key:'devotional'}, [
          e('div', {className:'dl-devotional-label', key:'lbl'}, [String.fromCodePoint(0x2600), ' Today\u2019s devotional']),
          e('div', {className:'dl-devotional-title', key:'t'}, todaysDevotional().title),
          e('div', {className:'dl-devotional-text', key:'txt'}, todaysDevotional().text)
        ]),
        e('div', {className:'dl-streak-card', key:'streak'}, [
          e('div', {className:'dl-streak-num', key:'n'}, state.dailyStreak),
          e('div', {className:'dl-streak-label', key:'l'}, state.dailyStreak === 1 ? 'day streak' : 'day streak'),
          e('div', {className:'dl-streak-week', key:'week'}, last7Days().map(d => e('span', {className:'dl-streak-dot', style:{background: streakDateSet(state).has(d) ? 'var(--gold)' : 'var(--gray-light)'}, key:d}))),
          state.lastCheckIn === todayStr()
            ? e('div', {className:'dl-checked-in', key:'done'}, [String.fromCodePoint(0x2705), ' You\u2019re checked in for today']) 
            : e('button', {className:'dl-continue', onClick: checkInToday, key:'btn'}, 'I read today\u2019s verse')
        ]),

        e('div', {className:'dl-section-title', style:{marginTop:'26px'}, key:'label'}, [String.fromCodePoint(0x1F3C6), ' Tests']),
        e('div', {className:'dl-empty-note', style:{marginBottom:'14px'}, key:'note'}, 'Spend gems to play \u2014 earn pearls for every question you get right, and spend pearls on badges in your Profile.'),
        ...TESTS.map(test => {
          const best = state.testBest[test.id];
          const canAfford = state.gems >= test.cost;
          return e('div', {className:'dl-test-card', key:test.id}, [
            e('div', {className:'dl-test-top', key:'top'}, [
              e('div', {className:'dl-test-icon', key:'icon'}, test.icon),
              e('div', {style:{flex:1}, key:'text'}, [
                e('div', {className:'dl-test-title', key:'t'}, test.title),
                e('div', {className:'dl-test-tier', key:'tier'}, test.tier + ' \u00b7 ' + test.questions.length + ' questions')
              ]),
              e('div', {className:'dl-test-cost', key:'cost'}, [String.fromCodePoint(0x1F48E), ' ' + test.cost])
            ]),
            e('div', {className:'dl-test-reward', key:'reward'}, '+1 \ud83d\udd39 pearl per correct answer'),
            best !== undefined && e('div', {className:'dl-test-best', key:'best'}, 'Best: ' + best + ' / ' + test.questions.length),
            e('button', {className:'dl-continue', style:{background:'var(--teal)', borderBottomColor:'var(--teal-dark)'}, disabled: !canAfford, onClick:()=>startTest(test), key:'start'}, canAfford ? 'Play' : 'Not enough gems')
          ]);
        })
      ]) : null,

      tab === 'callings' ? e('div', {className:'dl-daily-wrap', key:'callings'}, [
        e('div', {className:'dl-callings-header', key:'chdr'}, [
          e('div', {className:'dl-callings-icon', key:'i'}, String.fromCodePoint(0x1F4DC)),
          e('div', {className:'dl-callings-title', key:'t'}, 'Callings'),
          e('div', {className:'dl-callings-sub', key:'s'}, QUESTS.filter(q => state.claimedQuests.includes(q.id)).length + ' of ' + QUESTS.length + ' answered')
        ]),
        ...QUESTS.map(q => {
          const progress = Math.min(q.get(state), q.target);
          const claimed = state.claimedQuests.includes(q.id);
          const ready = progress >= q.target && !claimed;
          return e('div', {className:'dl-quest-card' + (claimed ? ' claimed' : ''), key:q.id}, [
            e('div', {className:'dl-quest-top', key:'top'}, [
              e('div', {className:'dl-quest-badge', key:'badge'}, q.icon),
              e('div', {style:{flex:1}, key:'text'}, [
                e('div', {className:'dl-quest-title', key:'t'}, q.title),
                e('div', {className:'dl-quest-desc', key:'d'}, q.desc)
              ]),
              e('div', {className:'dl-quest-gem', key:'g'}, [String.fromCodePoint(0x1F48E), ' ' + q.reward])
            ]),
            e('div', {className:'dl-quest-bar-track', key:'track'}, e('div', {className:'dl-quest-bar-fill', style:{width: Math.round((progress/q.target)*100) + '%'}})),
            e('div', {className:'dl-quest-bottom', key:'bottom'}, [
              e('div', {className:'dl-quest-progress', key:'p'}, progress + ' / ' + q.target),
              claimed
                ? e('div', {className:'dl-quest-claimed', key:'c'}, [String.fromCodePoint(0x2705), ' Claimed'])
                : e('button', {className:'dl-quest-claim', onClick:()=>claimQuest(q), disabled:!ready, key:'btn'}, 'Claim')
            ])
          ]);
        })
      ]) : null,

      tab === 'profile' ? e('div', {className:'dl-profile-outer', key:'profileouter'}, [
        e('div', {className:'dl-profile-stars', key:'stars'}),
        e('div', {className:'dl-profile-glow', key:'glow'}),
        e('div', {className:'dl-daily-wrap dl-profile-page', key:'profile'}, [
        e('div', {className:'dl-profile-header', key:'ph'}, [
          e('span', {className:'dl-profile-cross', style:{top:'14px', left:'14%'}, key:'c1'}, String.fromCodePoint(0x271D)),
          e('span', {className:'dl-profile-cross', style:{top:'34px', right:'16%'}, key:'c2'}, String.fromCodePoint(0x271D)),
          e('span', {className:'dl-profile-cross', style:{bottom:'12px', left:'22%'}, key:'c3'}, String.fromCodePoint(0x271D)),
          e('span', {className:'dl-profile-cross', style:{bottom:'20px', right:'20%'}, key:'c4'}, String.fromCodePoint(0x271D)),
          e('div', {className:'dl-profile-avatar', key:'av'}, state.profile.avatar),
          e('div', {className:'dl-profile-name', key:'name'}, state.profile.name),
          e('div', {className:'dl-profile-verse', key:'verse'}, '\u201c' + (state.profile.verse || DEFAULT_VERSE) + '\u201d'),
          e('button', {className:'dl-profile-edit-btn', onClick: openEditProfile, key:'edit'}, 'Edit profile')
        ]),

        e('div', {className:'dl-account-row', key:'account'},
          user
            ? [
                e('span', {className:'dl-account-text', key:'t'}, [String.fromCodePoint(0x2705), ' Signed in as ' + user.email]),
                e('button', {className:'dl-account-btn', onClick: signOut, key:'out'}, 'Log out')
              ]
            : [
                e('span', {className:'dl-account-text', key:'t'}, 'Your progress is only saved on this device.'),
                e('button', {className:'dl-account-btn', onClick: ()=>{ setAuthMode('signup'); setAuthError(''); setAuthOpen(true); }, key:'in'}, 'Sign in / Create account')
              ]
        ),
        e('button', {className:'dl-about-link', onClick:()=>setShowWelcome(true), key:'about'}, 'What is Steps to Faith?'),

        e('div', {className:'dl-hero-streak', key:'hero'}, [
          e('div', {className:'dl-hero-flame', key:'flame'}, String.fromCodePoint(0x1F525)),
          e('div', {className:'dl-hero-num', key:'num'}, state.dailyStreak),
          e('div', {className:'dl-hero-label', key:'label'}, state.dailyStreak === 1 ? 'day walking in the Word' : 'days walking in the Word'),
          e('div', {className:'dl-hero-week', key:'week'}, last7Days().map(d => {
            const lit = streakDateSet(state).has(d);
            return e('span', {className:'dl-hero-dot' + (lit?' lit':''), key:d}, lit ? String.fromCodePoint(0x1F525) : '');
          }))
        ]),

        e('div', {className:'dl-profile-grid', key:'grid'}, [
          e('div', {className:'dl-stat', key:'gems'}, [e('div',{className:'dl-stat-badge b1', key:'ic'}, String.fromCodePoint(0x1F48E)), e('div',{className:'dl-stat-num', key:'n'}, state.gems), e('div',{className:'dl-stat-label', key:'l'}, 'Gems')]),
          e('div', {className:'dl-stat', key:'lessons'}, [e('div',{className:'dl-stat-badge b2', key:'ic'}, String.fromCodePoint(0x1F4D6)), e('div',{className:'dl-stat-num', key:'n'}, state.completed.length), e('div',{className:'dl-stat-label', key:'l'}, 'Lessons done')]),
          e('div', {className:'dl-stat', key:'daily'}, [e('div',{className:'dl-stat-badge b3', key:'ic'}, String.fromCodePoint(0x1F3C6)), e('div',{className:'dl-stat-num', key:'n'}, state.completedCheckpoints.length), e('div',{className:'dl-stat-label', key:'l'}, 'Checkpoints')]),
          e('div', {className:'dl-stat', key:'reflections'}, [e('div',{className:'dl-stat-badge b4', key:'ic'}, String.fromCodePoint(0x1F4DD)), e('div',{className:'dl-stat-num', key:'n'}, state.reflections.length), e('div',{className:'dl-stat-label', key:'l'}, 'Reflections')])
        ]),
        e('div', {className:'dl-book-header', style:{padding:'8px 0'}, key:'badgeslbl'}, e('span', {className:'dl-band-label', style:{background:'#e2c8f7', color:'#4a2380', borderBottomColor:'#c9a0ea'}}, 'Book badges')),
        state.completedCheckpoints.length === 0
          ? e('div', {className:'dl-empty-note', key:'empty'}, 'Finish a book to earn your first badge.')
          : e('div', {className:'dl-badge-row', key:'badges'}, state.completedCheckpoints.map(b => e('div', {className:'dl-badge', key:b}, [String.fromCodePoint(0x1F3C6), ' ' + b]))),

        e('div', {className:'dl-section-title', style:{marginTop:'28px'}, key:'shoplabel'}, [String.fromCodePoint(0x1F539), ' Badge shop']),
        e('div', {className:'dl-empty-note', style:{marginBottom:'14px'}, key:'shopnote'}, 'Spend pearls earned from tests to unlock badges for your profile.'),
        e('div', {className:'dl-shop-grid', key:'shopgrid'}, BADGES.map(badge => {
          const owned = (state.ownedBadges||[]).includes(badge.id);
          const canAfford = (state.pearls||0) >= badge.cost;
          return e('div', {className:'dl-shop-item' + (owned?' owned':''), key:badge.id}, [
            e('div', {className:'dl-shop-icon', key:'icon'}, badge.icon),
            e('div', {className:'dl-shop-title', key:'t'}, badge.title),
            owned
              ? e('div', {className:'dl-shop-owned', key:'owned'}, [String.fromCodePoint(0x2705), ' Owned'])
              : e('button', {className:'dl-shop-buy', disabled: !canAfford, onClick:()=>buyBadge(badge), key:'buy'}, canAfford ? ('Unlock \u00b7 ' + badge.cost) : (badge.cost + ' \ud83d\udd39'))
          ]);
        })),

        e('div', {className:'dl-section-title', style:{marginTop:'28px'}, key:'rlabel'}, [String.fromCodePoint(0x1F4DD), ' Your reflections']),
        state.reflections.length === 0
          ? e('div', {className:'dl-empty-note', style:{marginBottom:'10px'}, key:'rnote'}, 'Reflections you save after lessons will show up here.')
          : e('div', {key:'rlist'}, state.reflections.map(r => e('div', {className:'dl-reflection-card', key:r.id}, [
              e('div', {className:'dl-reflection-meta', key:'m'}, r.book + ' \u00b7 ' + r.title + ' \u00b7 ' + r.date),
              e('div', {className:'dl-reflection-prompt-text', key:'p'}, r.prompt),
              e('div', {className:'dl-reflection-body', key:'b'}, r.text)
            ]))),

        e('div', {className:'dl-section-title', style:{marginTop:'28px'}, key:'tlabel'}, [String.fromCodePoint(0x1F4D3), ' Your testimony']),
        e('div', {className:'dl-empty-note', style:{marginBottom:'10px'}, key:'tnote'}, 'Only visible to you \u2014 a reminder of your story.'),
        editingTestimony
          ? e('div', {key:'tedit'}, [
              e('textarea', {className:'dl-testimony-input', value:testimonyDraft, onChange: ev=>setTestimonyDraft(ev.target.value), placeholder:'Write your story \u2014 where you\u2019ve been, and how your faith has grown...', key:'ta'}),
              e('div', {style:{display:'flex', gap:'10px', marginTop:'10px'}, key:'actions'}, [
                e('button', {className:'dl-continue', style:{background:'#fff', color:'var(--ink)', border:'2px solid var(--gray-light)', borderBottomWidth:'4px'}, onClick:()=>setEditingTestimony(false), key:'cancel'}, 'Cancel'),
                e('button', {className:'dl-continue', onClick: saveTestimony, key:'save'}, 'Save')
              ])
            ])
          : state.testimony
          ? e('div', {className:'dl-testimony-card', key:'tview'}, [
              e('div', {className:'dl-testimony-text', key:'text'}, state.testimony),
              e('button', {className:'dl-profile-edit-btn', style:{background:'#f1e7ff', color:'#4a2380', marginTop:'12px'}, onClick:()=>{ setTestimonyDraft(state.testimony); setEditingTestimony(true); }, key:'edit'}, 'Edit')
            ])
          : e('button', {className:'dl-continue', onClick:()=>{ setTestimonyDraft(''); setEditingTestimony(true); }, key:'write'}, 'Write your testimony')
        ])
      ]) : null,

      e('div', {className:'dl-tabs', key:'tabs'}, [
        e('button', {className:'dl-tab' + (tab==='path'?' active':''), onClick:()=>setTab('path'), key:'p'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F4D6)), 'Path']),
        e('button', {className:'dl-tab' + (tab==='daily'?' active':''), onClick:()=>setTab('daily'), key:'d'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x2600)), 'Daily']),
        e('button', {className:'dl-tab' + (tab==='callings'?' active':''), onClick:()=>setTab('callings'), key:'c'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F4DC)), 'Callings']),
        e('button', {className:'dl-tab' + (tab==='profile'?' active':''), onClick:()=>setTab('profile'), key:'pr'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F464)), 'Profile'])
      ]),

      e('div', {className:'dl-dc-modal-bg' + (openStudyBook ? ' open' : ''), key:'studymodal'},
        openStudyBook && DEEP_STUDIES[openStudyBook] && (
          studyStep === 'prayer'
          ? [
              e('div', {className:'dl-lesson-top', key:'ltop'}, [
                e('button', {className:'dl-x', onClick:()=>setOpenStudyBook(null), key:'x'}, String.fromCodePoint(0x2715))
              ]),
              e('div', {className:'dl-prayer-wrap', key:'prayer'}, [
                e('div', {className:'dl-prayer-icon', key:'icon'}, String.fromCodePoint(0x1F64F)),
                e('div', {className:'dl-prayer-title', key:'t'}, 'Before you begin'),
                e('div', {className:'dl-prayer-text', key:'p'}, '\u201cLord, open my eyes to see what You want me to see in this passage. Show me what stands out, and speak to my heart through Your word. Amen.\u201d'),
                e('button', {className:'dl-continue', style:{background:'var(--gold)', borderBottomColor:'var(--gold-dark)', color:'#5c4400'}, onClick:()=>setStudyStep('content'), key:'go'}, 'Continue')
              ])
            ]
          : [
          e('div', {className:'dl-lesson-top', key:'ltop'}, [
            e('button', {className:'dl-x', onClick:()=>setOpenStudyBook(null), key:'x'}, String.fromCodePoint(0x2715))
          ]),
          e('div', {className:'dl-dc-body', key:'body'}, [
            e('div', {className:'dl-study-header', key:'hdr'}, [
              e('div', {className:'dl-study-icon', key:'icon'}, String.fromCodePoint(0x1F4DC)),
              e('div', {className:'dl-study-focus', key:'f'}, openStudyBook + ' \u00b7 ' + DEEP_STUDIES[openStudyBook].focus),
              e('div', {className:'dl-study-title', key:'t'}, DEEP_STUDIES[openStudyBook].title)
            ]),
            e('div', {className:'dl-study-purpose', key:'purpose'}, [
              e('div', {className:'dl-study-purpose-h', key:'h'}, 'What is a Deep Study?'),
              e('div', {className:'dl-study-purpose-b', key:'b'}, 'Lessons move story by story \u2014 a Deep Study slows all the way down and sits with one landmark passage from ' + openStudyBook + ', a few verses at a time. There\u2019s no quiz and no reward here. The goal isn\u2019t speed or points \u2014 it\u2019s depth: noticing what a fast read misses, and letting the passage read you back.'),
              e('div', {className:'dl-study-step', key:'step'}, [
                e('span', {className:'dl-study-step-num', key:'n'}, '1'),
                e('span', {key:'t'}, ['First, open your Bible (or a Bible app) and read ', e('b', {key:'ref'}, DEEP_STUDIES[openStudyBook].focus), ' slowly, once, all the way through. Then come back and walk through it below, part by part.'])
              ])
            ]),
            ...DEEP_STUDIES[openStudyBook].sections.map((s, i) => e('div', {className:'dl-study-section', key:i}, [
              e('div', {className:'dl-study-part', key:'p'}, 'Part ' + (i+1) + ' of ' + DEEP_STUDIES[openStudyBook].sections.length),
              e('div', {className:'dl-study-h', key:'h'}, s.h),
              e('div', {className:'dl-study-b', key:'b'}, s.b)
            ])),
            DEEP_STUDIES[openStudyBook].takeaway ? e('div', {className:'dl-study-takeaway', key:'takeaway'}, [
              e('div', {className:'dl-study-takeaway-h', key:'h'}, [String.fromCodePoint(0x1F511), ' The takeaway']),
              e('div', {className:'dl-study-b', key:'b'}, DEEP_STUDIES[openStudyBook].takeaway)
            ]) : null,
            DEEP_STUDIES[openStudyBook].reflection ? e('div', {className:'dl-study-reflect', key:'reflect'}, [
              e('div', {className:'dl-study-reflect-h', key:'h'}, 'Before you go, sit with this:'),
              e('div', {className:'dl-study-reflect-q', key:'q'}, DEEP_STUDIES[openStudyBook].reflection)
            ]) : null
          ]),
          e('div', {className:'dl-footer', key:'footer'},
            e('button', {className:'dl-continue', style:{background:'var(--gold)', borderBottomColor:'var(--gold-dark)', color:'#5c4400'}, onClick:()=>completeDeepStudy(openStudyBook), key:'done'},
              'Done reading')
          )
        ])
      ),

      e('div', {className:'dl-dc-modal-bg' + (activeTest ? ' open' : ''), key:'testmodal'},
        activeTest && (
          tFinished
          ? e('div', {className:'dl-dc-done-wrap'}, [
              e('div', {className:'dl-dc-done-badge', style:{background:'var(--teal)', boxShadow:'0 6px 0 var(--teal-dark)'}, key:'badge'}, activeTest.icon),
              e('div', {className:'dl-dc-done-title', key:'t'}, 'Test complete!'),
              e('div', {className:'dl-dc-done-sub', key:'s'}, activeTest.title + ' \u2014 ' + tScore + ' / ' + activeTest.questions.length),
              e('div', {className:'dl-test-reward', style:{fontSize:'14px', marginBottom:'20px'}, key:'earned'}, '+' + tEarned + ' ' + String.fromCodePoint(0x1F539) + ' pearls earned'),
              e('button', {className:'dl-continue', style:{background:'var(--teal)', borderBottomColor:'var(--teal-dark)', maxWidth:'240px'}, onClick:()=>setActiveTest(null), key:'close'}, 'Done')
            ])
          : [
              e('div', {className:'dl-lesson-top', key:'ltop'}, [
                e('button', {className:'dl-x', onClick:()=>setActiveTest(null), key:'x'}, String.fromCodePoint(0x2715)),
                e('div', {className:'dl-bar-track', key:'track'}, e('div', {className:'dl-bar-fill', style:{background:'var(--teal)', width: Math.round((tIndex / activeTest.questions.length) * 100) + '%'}})),
                activeTest.type === 'timed' && e('div', {className:'dl-timer-pill', key:'timer'}, tTimeLeft + 's')
              ]),
              e('div', {className:'dl-dc-body', key:'body'},
                activeTest.type === 'fill'
                ? [
                    e('div', {className:'dl-dc-count', key:'c'}, 'Question ' + (tIndex+1) + ' of ' + activeTest.questions.length),
                    e('div', {className:'dl-fill-ref', key:'ref'}, activeTest.questions[tIndex].ref),
                    e('div', {className:'dl-fill-prompt', key:'p'}, activeTest.questions[tIndex].text),
                    e('div', {className:'dl-fill-input-row', key:'row'}, [
                      e('input', {value:tFillInput, onChange: ev=>setTFillInput(ev.target.value), placeholder:'Type the missing word...', disabled: tFillResult !== null, className: tFillResult===null?'':(tFillResult?'correct':'wrong'), onKeyDown: ev=>{ if(ev.key==='Enter') submitFillAnswer(); }, key:'i'})
                    ]),
                    tFillResult === false && e('div', {className:'dl-fill-answer', key:'ans'}, 'Correct answer: ' + activeTest.questions[tIndex].answer),
                    tFillResult !== null && e('div', {className:'dl-explain', style:{marginTop:'10px'}, key:'explain'}, [
                      e('div', {className:'dl-explain-label', key:'l'}, tFillResult ? 'Correct' : 'Not quite'),
                      e('div', {className:'dl-explain-text', key:'t'}, activeTest.questions[tIndex].explain)
                    ])
                  ]
                : [
                    e('div', {className:'dl-dc-count', key:'c'}, 'Question ' + (tIndex+1) + ' of ' + activeTest.questions.length),
                    e('div', {className:'dl-q', key:'q'}, activeTest.questions[tIndex].q),
                    ...activeTest.questions[tIndex].opts.map((opt, i) => {
                      let cls = 'dl-opt';
                      if (tPicked !== null) { if (i === activeTest.questions[tIndex].correct) cls += ' correct'; else if (i === tPicked) cls += ' wrong'; }
                      return e('button', {className: cls, onClick:()=>pickTAnswer(i), key:i, disabled: tPicked !== null}, opt);
                    }),
                    tPicked !== null && e('div', {className:'dl-explain', key:'explain'}, [
                      e('div', {className:'dl-explain-label', key:'l'}, tPicked === activeTest.questions[tIndex].correct ? 'Correct' : 'Not quite'),
                      e('div', {className:'dl-explain-text', key:'t'}, activeTest.questions[tIndex].explain)
                    ])
                  ]
              ),
              e('div', {className:'dl-footer', key:'footer'},
                activeTest.type === 'fill'
                ? (tFillResult === null
                    ? e('button', {className:'dl-continue', style:{background:'var(--teal)', borderBottomColor:'var(--teal-dark)'}, onClick: submitFillAnswer, disabled: !tFillInput.trim(), key:'submit'}, 'Submit')
                    : e('button', {className:'dl-continue', style:{background:'var(--teal)', borderBottomColor:'var(--teal-dark)'}, onClick: nextTQuestion, key:'next'}, tIndex+1 < activeTest.questions.length ? 'Next' : 'Finish'))
                : e('button', {className:'dl-continue', style:{background:'var(--teal)', borderBottomColor:'var(--teal-dark)'}, onClick: nextTQuestion, disabled: tPicked === null, key:'next'}, tIndex+1 < activeTest.questions.length ? 'Next' : 'Finish')
              )
            ]
        )
      ),

      authOpen ? renderAuthModal() : null,

      editingProfile ? e('div', {className:'dl-modal-bg open', key:'editmodal', onClick:(ev)=>{ if(ev.target===ev.currentTarget) setEditingProfile(false); }},
        e('div', {className:'dl-edit-modal'}, [
          e('div', {className:'dl-modal-label', style:{fontSize:'13px', fontWeight:800, color:'var(--gray)', textTransform:'uppercase', marginBottom:'10px'}, key:'lbl'}, 'Edit profile'),
          e('div', {className:'dl-edit-field', key:'namefield'}, [
            e('label', {key:'l'}, 'Name'),
            e('input', {value:editName, onChange: ev=>setEditName(ev.target.value), key:'i'})
          ]),
          e('div', {className:'dl-edit-field', key:'avfield'}, [
            e('label', {key:'l'}, 'Avatar'),
            e('div', {className:'dl-avatar-grid', key:'grid'}, AVATAR_OPTIONS.map(a => e('button', {className:'dl-avatar-opt' + (a===editAvatar?' sel':''), onClick:()=>setEditAvatar(a), key:a}, a)))
          ]),
          e('div', {className:'dl-edit-field', key:'versefield'}, [
            e('label', {key:'l'}, 'Your verse'),
            e('input', {value:editVerse, onChange: ev=>setEditVerse(ev.target.value), placeholder:'A verse that means something to you', key:'i'})
          ]),
          e('div', {style:{display:'flex', gap:'10px', marginTop:'10px'}, key:'actions'}, [
            e('button', {className:'dl-continue', style:{background:'#fff', color:'var(--ink)', border:'2px solid var(--gray-light)', borderBottomWidth:'4px'}, onClick:()=>setEditingProfile(false), key:'cancel'}, 'Cancel'),
            e('button', {className:'dl-continue', onClick:()=>{ saveProfile(editName, editAvatar, editVerse); setEditingProfile(false); }, key:'save'}, 'Save')
          ])
        ])
      ) : null,

      e('div', {className:'dl-modal-bg' + (activeModal ? ' open' : ''), key:'modal'},
        activeModal && (
          step === 'deepdive'
          ? e('div', {className:'dl-deepdive-wrap'}, [
              e('div', {className:'dl-deepdive-icon', key:'icon'}, String.fromCodePoint(0x1F56F)),
              e('div', {className:'dl-deepdive-title', key:'t'}, 'What this means'),
              e('div', {className:'dl-deepdive-text', key:'p'}, currentDeepDive()),
              e('button', {className:'dl-continue' + (isCheckpoint?' purple':''), onClick: continueFromDeepDive, key:'cont'}, 'Continue')
            ])
          : step === 'reflect'
          ? e('div', {className:'dl-reflect-wrap'}, [
              e('div', {className:'dl-reflect-icon', key:'icon'}, String.fromCodePoint(0x1F4DD)),
              e('div', {className:'dl-reflect-title', key:'t'}, 'Take a moment'),
              e('div', {className:'dl-reflect-prompt', key:'p'}, currentReflectionPrompt()),
              e('textarea', {className:'dl-reflect-input', value:reflectionDraft, onChange: ev=>setReflectionDraft(ev.target.value), placeholder:'Write as much or as little as you want...', key:'ta'}),
              e('div', {className:'dl-reflect-actions', key:'actions'}, [
                e('button', {className:'dl-reflect-skip', onClick: ()=>setStep('done'), key:'skip'}, 'Skip'),
                e('button', {className:'dl-continue' + (isCheckpoint?' purple':''), onClick: saveReflection, key:'save'}, 'Save reflection')
              ])
            ])
          : step === 'done'
          ? e('div', {className:'dl-done-wrap'}, [
              e('div', {className:'dl-done-badge' + (isCheckpoint?' purple':''), key:'badge'}, isCheckpoint ? String.fromCodePoint(0x1F3C6) : String.fromCodePoint(0x2605)),
              e('div', {className:'dl-done-title', key:'t'}, isCheckpoint ? 'Checkpoint cleared!' : 'Lesson complete!'),
              e('div', {className:'dl-done-sub', key:'s'}, isCheckpoint ? (openCheckpoint + ' review') : (openLesson.book + ' \u00b7 ' + openLesson.title)),
              e('div', {className:'dl-stats', key:'stats'}, [
                e('div', {className:'dl-stat', key:'c'}, [e('div',{className:'dl-stat-num', key:'n'}, correctCount + '/' + activeModal.questions.length), e('div',{className:'dl-stat-label', key:'l'}, 'Correct')]),
                e('div', {className:'dl-stat', key:'g'}, [e('div',{className:'dl-stat-num', key:'n'}, isCheckpoint ? '+20' : '+10'), e('div',{className:'dl-stat-label', key:'l'}, 'Gems')])
              ]),
              e('div', {className:'dl-footer', style:{marginTop:'20px', border:'none', width:'100%', display:'flex', gap:'10px'}, key:'foot'}, [
                correctCount < activeModal.questions.length && e('button', {className:'dl-continue', style:{background:'#fff', color:'var(--ink)', border:'2px solid var(--gray-light)', borderBottomWidth:'4px'}, onClick: ()=>{ setStep('passage'); setQIndex(0); setPicked(null); setCorrectCount(0); }, key:'retry'}, 'Try again'),
                e('button', {className:'dl-continue' + (isCheckpoint?' purple':''), onClick: closeModal, key:'cont'}, 'Continue')
              ])
            ])
          : [
              e('div', {className:'dl-lesson-top', key:'ltop'}, [
                e('button', {className:'dl-x', onClick: closeModal, key:'x'}, String.fromCodePoint(0x2715)),
                e('div', {className:'dl-bar-track', key:'track'}, e('div', {className:'dl-bar-fill' + (isCheckpoint?' purple':''), style:{width: (step==='passage'||step==='overview' ? 8 : Math.round(((qIndex + (step==='explain'?1:0)) / activeModal.questions.length) * 92) + 8) + '%'}}))
              ]),
              e('div', {className:'dl-lesson-body', key:'body'},
                (step === 'passage' || step === 'overview')
                ? [
                    (activeModal.book === 'Proverbs' && !isCheckpoint) ? e('div', {className:'dl-pace-note', key:'pace'}, [
                      e('span', {className:'dl-pace-icon', key:'i'}, String.fromCodePoint(0x1F305)),
                      e('span', {key:'t'}, 'One proverb a day. Read it slowly, then carry it with you \u2014 the next one will be here tomorrow.')
                    ]) : null,
                    (activeModal.book === 'Proverbs' && !isCheckpoint) ? e('div', {className:'dl-pace-note', key:'pace'}, [
                      e('span', {className:'dl-pace-icon', key:'i'}, String.fromCodePoint(0x1F331)),
                      e('span', {key:'t'}, 'One proverb a day. Read it slowly, then carry it with you \u2014 the next one will be here tomorrow.')
                    ]) : null,
                    e('div', {className:'dl-passage-card' + (isCheckpoint?' purple':''), key:'pc'}, isCheckpoint
                      ? [
                          e('div', {className:'dl-passage-ref', key:'r'}, activeModal.title),
                          e('ul', {className:'dl-overview-list', key:'ol'}, activeModal.overview.map((pt, i) => e('li', {key:i}, pt)))
                        ]
                      : [
                          e('div', {className:'dl-passage-ref', key:'r'}, openLesson.book + ' \u00b7 ' + openLesson.title),
                          e('div', {className:'dl-passage-text', key:'t'}, openLesson.passage),
                          ...(openLesson.keyVerses || []).map((kv, i) => e('div', {className:'dl-keyverse', key:'kv'+i}, [
                            e('div', {className:'dl-keyverse-mark', key:'m'}, String.fromCodePoint(0x275D)),
                            e('div', {className:'dl-keyverse-text', key:'t'}, kv.text),
                            e('div', {className:'dl-keyverse-ref', key:'r'}, kv.ref)
                          ]))
                        ]
                    )
                  ]
                : [
                    e('div', {className:'dl-q-count', key:'qc'}, 'Question ' + (qIndex+1) + ' of ' + activeModal.questions.length),
                    e('div', {className:'dl-q', key:'q'}, activeModal.questions[qIndex].q),
                    ...activeModal.questions[qIndex].opts.map((opt, i) => {
                      let cls = 'dl-opt';
                      if (step === 'explain' && picked !== null) { if (i === activeModal.questions[qIndex].correct) cls += ' correct'; }
                      if (step === 'retry' && i === picked) cls += ' wrong';
                      return e('button', {className: cls, onClick:()=>pickAnswer(i), key:i, disabled: picked !== null}, opt);
                    }),
                    step === 'retry' && e('div', {className:'dl-explain wrong', key:'retrybox'}, [
                      e('div', {className:'dl-explain-label wrong', key:'l'}, 'Not quite'),
                      e('div', {className:'dl-explain-text', key:'t'}, "That's not it \u2014 give it another shot.")
                    ]),
                    step === 'explain' && e('div', {className:'dl-explain', key:'explain'}, [
                      e('div', {className:'dl-explain-label', key:'l'}, 'Correct'),
                      e('div', {className:'dl-explain-text', key:'t'}, activeModal.questions[qIndex].explain)
                    ])
                  ]
              ),
              e('div', {className:'dl-footer', key:'footer'},
                (step === 'passage' || step === 'overview')
                ? e('button', {className:'dl-continue' + (isCheckpoint?' purple':''), onClick:()=>setStep('question')}, 'Start')
                : step === 'retry'
                ? e('button', {className:'dl-continue', onClick: retryQuestion}, 'Try again')
                : e('button', {className:'dl-continue' + (isCheckpoint?' purple':''), onClick: nextStep, disabled: step !== 'explain'}, step === 'explain' ? 'Continue' : 'Answer to continue')
              )
            ]
        )
      ),

      showInstallBanner ? e('div', {className:'dl-install-banner', key:'installbanner'}, [
        e('button', {className:'dl-install-close', onClick: dismissInstallBanner, key:'x'}, String.fromCodePoint(0x2715)),
        e('div', {className:'dl-install-title', key:'t'}, 'Add Steps to Faith to your home screen'),
        e('div', {className:'dl-install-sub', key:'s'}, installIsIOS ? 'Tap the Share icon below, then \u2018Add to Home Screen\u2019' : 'Install the app for quick access anytime'),
        (!installIsIOS && deferredInstallPrompt) ? e('button', {className:'dl-install-btn', onClick: triggerAndroidInstall, key:'b'}, 'Install') : null
      ]) : null
    ]);
  }

  ReactDOM.createRoot(document.getElementById('dl-root')).render(e(App));
})();
