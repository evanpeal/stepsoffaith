(function(){
  const e = React.createElement;
  const KEY = "bible-path-progress-v3";

  const SUPABASE_URL = "https://wvovrtkszewohbtfqsbz.supabase.co";
  const SUPABASE_KEY = "sb_publishable_E8MMK1clBTPW313Cg0sthw_G9fDvhTn";
  const sb = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

  const DEFAULT_STATE = { completed: [], completedCheckpoints: [], streak: 0, gems: 0, pearls: 0, ownedBadges: [], dailyStreak: 0, lastCheckIn: null, claimedQuests: [], profile: { name: 'Your name', avatar: '\ud83d\udcd6' }, testimony: '', reflections: [], testBest: {}, deepStudies: [], dailyWord: null, wordleGame: null, recentWords: [], streakFreezes: 0, streakFreezeUsedDate: null, highlights: [], favorites: [], completedLog: [], wordleWins: 0, seenTour: false, seenFriendIds: [], trackDone: [], activePlan: null, planStarted: null, planDays: null, planReflections: [] };

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
    "1 Chronicles": {
      gradient: 'linear-gradient(180deg, #14122a 0%, #2a2450 16%, #443a70 32%, #644e8e 48%, #8e70a6 62%, #b898b0 76%, #e0c294 90%, #c99a52 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'34%' } },
        { type:'glow', style:{ left:'50%', top:'18%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(232,222,255,0.75) 0%, rgba(170,150,225,0.3) 46%, rgba(170,150,225,0) 74%)' } },
        { type:'sparkle', style:{ top:'8%', height:'28%' } }
      ]
    },
    "2 Chronicles": {
      gradient: 'linear-gradient(180deg, #1a1230 0%, #302254 16%, #4e3676 32%, #705290 48%, #9a76a4 62%, #c4a2a0 76%, #e6c684 90%, #c9963e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'30%' } },
        { type:'glow', style:{ left:'50%', top:'16%', width:260, height:260, marginLeft:-130, marginTop:-130, background:'radial-gradient(circle, rgba(255,236,190,0.8) 0%, rgba(230,180,110,0.32) 46%, rgba(230,180,110,0) 74%)' } },
        { type:'ridge', style:{ bottom:'6%', height:'16%', background:'#7a5c40', opacity:0.5, clipPath:RIDGE_JAG_FRONT } }
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
    },
    "Ecclesiastes": {
      gradient: 'linear-gradient(180deg, #d9c9a8 0%, #b8a480 14%, #94806a 30%, #6e6258 46%, #4a4a52 62%, #32333f 78%, #1e1f2c 92%, #14141e 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'12%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(255,244,214,0.7) 0%, rgba(220,200,160,0.28) 48%, rgba(220,200,160,0) 74%)' } },
        { type:'ridge', style:{ top:'44%', height:'16%', background:'#7a7264', opacity:0.5, clipPath:DUNE_BACK } },
        { type:'ridge', style:{ top:'52%', height:'14%', background:'#5c574e', opacity:0.65, clipPath:DUNE_FRONT } },
        { type:'stars', style:{ bottom:0, height:'30%' } }
      ]
    },
    "Song of Solomon": {
      gradient: 'linear-gradient(180deg, #2e1230 0%, #52204a 14%, #7a2f5c 28%, #a8496a 44%, #cf7078 58%, #e8a08c 72%, #f0c8a8 86%, #d9a078 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'26%' } },
        { type:'glow', style:{ left:'50%', top:'26%', width:260, height:260, marginLeft:-130, marginTop:-130, background:'radial-gradient(circle, rgba(255,200,210,0.65) 0%, rgba(230,140,170,0.26) 48%, rgba(230,140,170,0) 74%)' } },
        { type:'sparkle', style:{ top:'10%', height:'32%' } },
        { type:'glow', style:{ left:'50%', bottom:'2%', width:220, height:170, marginLeft:-110, marginBottom:-85, background:'radial-gradient(circle, rgba(255,220,180,0.7) 0%, rgba(240,180,130,0.28) 50%, rgba(240,180,130,0) 76%)' } }
      ]
    },
    "Isaiah": {
      gradient: 'linear-gradient(180deg, #0e1430 0%, #1c2a5c 14%, #2f4a8a 28%, #4a6fae 42%, #7a9ccc 56%, #b8cfe4 70%, #e8dcc0 84%, #c9a86e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'34%' } },
        { type:'glow', style:{ left:'50%', top:'20%', width:280, height:280, marginLeft:-140, marginTop:-140, background:'radial-gradient(circle, rgba(220,236,255,0.75) 0%, rgba(150,190,240,0.3) 48%, rgba(150,190,240,0) 74%)' } },
        { type:'sparkle', style:{ top:'8%', height:'30%' } },
        { type:'ridge', style:{ bottom:'6%', height:'18%', background:'#8a7a52', opacity:0.5, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'14%', background:'#6e6040', opacity:0.7, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Jeremiah": {
      gradient: 'linear-gradient(180deg, #1a1018 0%, #33202a 14%, #56303a 30%, #7a4438 46%, #9a5c38 60%, #b87c44 74%, #8a5c30 88%, #52381e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'24%' } },
        { type:'glow', style:{ left:'50%', top:'40%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(255,190,120,0.7) 0%, rgba(230,140,70,0.28) 48%, rgba(230,140,70,0) 74%)' } },
        { type:'ridge', style:{ bottom:'8%', height:'20%', background:'#6e4428', opacity:0.6, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'16%', background:'#4a2e1c', opacity:0.8, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Lamentations": {
      gradient: 'linear-gradient(180deg, #14121c 0%, #241f2e 16%, #383044 32%, #504658 48%, #6e6070 62%, #52485c 76%, #322c3e 90%, #1a1724 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'32%' } },
        { type:'glow', style:{ left:'50%', top:'46%', width:230, height:230, marginLeft:-115, marginTop:-115, background:'radial-gradient(circle, rgba(255,230,180,0.5) 0%, rgba(220,180,120,0.2) 50%, rgba(220,180,120,0) 76%)' } },
        { type:'ridge', style:{ bottom:'6%', height:'18%', background:'#3e3648', opacity:0.7, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'14%', background:'#2a2434', opacity:0.85, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Daniel": {
      gradient: 'linear-gradient(180deg, #101026 0%, #1e1e48 14%, #34306e 28%, #52428a 42%, #7a5a9e 56%, #a87a8a 70%, #d9a45c 84%, #b8792e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'36%' } },
        { type:'glow', style:{ left:'50%', top:'24%', width:270, height:270, marginLeft:-135, marginTop:-135, background:'radial-gradient(circle, rgba(210,200,255,0.7) 0%, rgba(150,130,220,0.28) 48%, rgba(150,130,220,0) 74%)' } },
        { type:'sparkle', style:{ top:'12%', height:'26%' } },
        { type:'glow', style:{ left:'50%', bottom:'2%', width:230, height:180, marginLeft:-115, marginBottom:-90, background:'radial-gradient(circle, rgba(255,200,110,0.75) 0%, rgba(230,150,50,0.3) 50%, rgba(230,150,50,0) 76%)' } }
      ]
    },
    "Ezekiel": {
      gradient: 'linear-gradient(180deg, #0e1020 0%, #1c2038 14%, #303a5c 30%, #4a5a7e 46%, #6e7a96 60%, #a89a86 74%, #d9b872 88%, #a8813e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'30%' } },
        { type:'glow', style:{ left:'50%', top:'28%', width:280, height:280, marginLeft:-140, marginTop:-140, background:'radial-gradient(circle, rgba(220,230,255,0.7) 0%, rgba(150,180,230,0.28) 48%, rgba(150,180,230,0) 74%)' } },
        { type:'sparkle', style:{ top:'14%', height:'26%' } },
        { type:'ridge', style:{ bottom:'6%', height:'18%', background:'#7a6a48', opacity:0.55, clipPath:RIDGE_JAG_BACK } }
      ]
    },
    "Hosea": {
      gradient: 'linear-gradient(180deg, #2a1420 0%, #4a2434 14%, #6e3a44 30%, #94564e 46%, #b8785a 62%, #d9a074 78%, #b87a4e 90%, #7a4e2e 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'18%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(255,200,180,0.6) 0%, rgba(220,140,120,0.25) 48%, rgba(220,140,120,0) 74%)' } },
        { type:'ridge', style:{ bottom:'8%', height:'18%', background:'#8a5a38', opacity:0.55, clipPath:DUNE_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'14%', background:'#6e4428', opacity:0.7, clipPath:DUNE_FRONT } }
      ]
    },
    "Joel": {
      gradient: 'linear-gradient(180deg, #241a10 0%, #46301a 16%, #6e4a24 32%, #94682e 48%, #b88a3e 62%, #d9b25c 78%, #a8823a 90%, #6e5222 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'22%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(255,220,140,0.7) 0%, rgba(230,170,70,0.28) 48%, rgba(230,170,70,0) 74%)' } },
        { type:'sparkle', style:{ top:'8%', height:'26%' } },
        { type:'ridge', style:{ bottom:'6%', height:'18%', background:'#7a5a26', opacity:0.6, clipPath:DUNE_BACK } }
      ]
    },
    "Amos": {
      gradient: 'linear-gradient(180deg, #1a1c14 0%, #303426 16%, #4e5238 32%, #72704a 48%, #9a8e5c 62%, #c0ac72 76%, #94804c 88%, #5c4e2c 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'26%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(240,240,200,0.6) 0%, rgba(200,190,120,0.24) 48%, rgba(200,190,120,0) 74%)' } },
        { type:'ridge', style:{ bottom:'8%', height:'20%', background:'#6e6238', opacity:0.55, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'15%', background:'#4e4626', opacity:0.75, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Obadiah": {
      gradient: 'linear-gradient(180deg, #14161e 0%, #262a38 16%, #3e4454 34%, #5a5e6e 50%, #7a7482 66%, #56505e 82%, #2e2a38 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'34%' } },
        { type:'ridge', style:{ bottom:'10%', height:'26%', background:'#4a4654', opacity:0.7, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'20%', background:'#302c3a', opacity:0.85, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Jonah": {
      gradient: 'linear-gradient(180deg, #0a1a2e 0%, #123048 16%, #1c4a63 32%, #2e6a7e 48%, #4a8a94 62%, #7ab0ae 76%, #b8cfae 88%, #d9c88c 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'16%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(190,230,240,0.65) 0%, rgba(110,180,200,0.26) 48%, rgba(110,180,200,0) 74%)' } },
        { type:'water', style:{ background:'linear-gradient(180deg, rgba(40,110,130,0) 0%, rgba(40,110,130,0.55) 100%)' } },
        { type:'sparkle', style:{ top:'10%', height:'24%' } }
      ]
    },
    "Micah": {
      gradient: 'linear-gradient(180deg, #161426 0%, #2a2440 16%, #443a5c 32%, #63527a 48%, #8a7290 62%, #b09a9e 76%, #d9bc94 90%, #a8865a 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'32%' } },
        { type:'glow', style:{ left:'50%', top:'34%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(230,214,255,0.6) 0%, rgba(170,150,220,0.24) 48%, rgba(170,150,220,0) 74%)' } },
        { type:'ridge', style:{ bottom:'6%', height:'20%', background:'#7a6248', opacity:0.55, clipPath:RIDGE_JAG_BACK } }
      ]
    },
    "Nahum": {
      gradient: 'linear-gradient(180deg, #180e12 0%, #2e1820 16%, #4a2426 32%, #6e3628 48%, #8a4a2c 62%, #6e3822 78%, #401e14 92%, #24100c 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'34%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(255,170,90,0.6) 0%, rgba(220,110,50,0.24) 48%, rgba(220,110,50,0) 74%)' } },
        { type:'ridge', style:{ bottom:'8%', height:'20%', background:'#5c2c1c', opacity:0.7, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'15%', background:'#3a1c12', opacity:0.85, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Habakkuk": {
      gradient: 'linear-gradient(180deg, #101426 0%, #1e2642 16%, #343e64 32%, #4e5a84 48%, #74799e 62%, #a898a8 76%, #d9b48c 90%, #b8863e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'34%' } },
        { type:'glow', style:{ left:'50%', top:'40%', width:260, height:260, marginLeft:-130, marginTop:-130, background:'radial-gradient(circle, rgba(255,220,170,0.6) 0%, rgba(220,170,110,0.24) 48%, rgba(220,170,110,0) 74%)' } },
        { type:'ridge', style:{ bottom:'6%', height:'18%', background:'#6e5a3e', opacity:0.55, clipPath:DUNE_BACK } }
      ]
    },
    "Zephaniah": {
      gradient: 'linear-gradient(180deg, #14101c 0%, #281e34 16%, #443050 32%, #644a68 48%, #8a6a76 62%, #b8927e 78%, #e8c48c 92%, #c99a4e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'30%' } },
        { type:'glow', style:{ left:'50%', bottom:'6%', width:250, height:200, marginLeft:-125, marginBottom:-100, background:'radial-gradient(circle, rgba(255,224,150,0.75) 0%, rgba(230,180,90,0.3) 50%, rgba(230,180,90,0) 76%)' } },
        { type:'sparkle', style:{ top:'12%', height:'26%' } }
      ]
    },
    "Haggai": {
      gradient: 'linear-gradient(180deg, #1e1a12 0%, #3a3220 16%, #5c4e2e 32%, #806c3c 48%, #a48c4e 62%, #c9ae66 78%, #9a8244 90%, #62522a 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'24%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(255,236,170,0.7) 0%, rgba(220,180,90,0.28) 48%, rgba(220,180,90,0) 74%)' } },
        { type:'ridge', style:{ bottom:'8%', height:'18%', background:'#6e5c30', opacity:0.6, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'14%', background:'#4e4020', opacity:0.75, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Zechariah": {
      gradient: 'linear-gradient(180deg, #0e1226 0%, #1a2444 16%, #2e3e66 32%, #48588a 48%, #7078a8 62%, #a89ab8 76%, #d9c096 90%, #b0873e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'34%' } },
        { type:'glow', style:{ left:'50%', top:'26%', width:270, height:270, marginLeft:-135, marginTop:-135, background:'radial-gradient(circle, rgba(215,225,255,0.7) 0%, rgba(150,170,230,0.28) 48%, rgba(150,170,230,0) 74%)' } },
        { type:'sparkle', style:{ top:'10%', height:'28%' } }
      ]
    },
    "Malachi": {
      gradient: 'linear-gradient(180deg, #12101e 0%, #241e36 16%, #3c3050 32%, #584464 48%, #7c5e6e 62%, #a8827a 76%, #e0b878 90%, #c9903a 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'32%' } },
        { type:'glow', style:{ left:'50%', bottom:'8%', width:260, height:210, marginLeft:-130, marginBottom:-105, background:'radial-gradient(circle, rgba(255,214,130,0.8) 0%, rgba(235,175,70,0.32) 50%, rgba(235,175,70,0) 76%)' } },
        { type:'sparkle', style:{ top:'14%', height:'24%' } }
      ]
    },
    "Matthew": {
      gradient: 'linear-gradient(180deg, #0c1024 0%, #182044 14%, #2a3468 28%, #414e8e 42%, #6470ac 56%, #97a0c6 70%, #d8cba0 86%, #b8934e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'40%' } },
        { type:'glow', style:{ left:'50%', top:'16%', width:190, height:190, marginLeft:-95, marginTop:-95, background:'radial-gradient(circle, rgba(255,248,214,0.95) 0%, rgba(255,232,160,0.4) 42%, rgba(255,232,160,0) 72%)' } },
        { type:'sparkle', style:{ top:'6%', height:'32%' } },
        { type:'ridge', style:{ bottom:'6%', height:'18%', background:'#7e6a44', opacity:0.5, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'14%', background:'#5e4e30', opacity:0.7, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Mark": {
      gradient: 'linear-gradient(180deg, #1a1410 0%, #33261c 14%, #56402c 30%, #7c5c3a 46%, #a07c4c 60%, #c4a068 74%, #96794a 88%, #5e4a2c 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'20%', width:230, height:230, marginLeft:-115, marginTop:-115, background:'radial-gradient(circle, rgba(255,232,180,0.75) 0%, rgba(226,180,104,0.3) 46%, rgba(226,180,104,0) 74%)' } },
        { type:'ridge', style:{ bottom:'8%', height:'20%', background:'#6e5636', opacity:0.55, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'15%', background:'#4c3a24', opacity:0.75, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Luke": {
      gradient: 'linear-gradient(180deg, #141024 0%, #262044 14%, #40376a 28%, #5e5290 42%, #8a7aac 56%, #b8a4b4 70%, #e6cca4 86%, #c9a05e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'36%' } },
        { type:'glow', style:{ left:'50%', top:'22%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(255,236,206,0.8) 0%, rgba(236,196,140,0.32) 46%, rgba(236,196,140,0) 74%)' } },
        { type:'sparkle', style:{ top:'8%', height:'30%' } },
        { type:'glow', style:{ left:'50%', bottom:'2%', width:220, height:170, marginLeft:-110, marginBottom:-85, background:'radial-gradient(circle, rgba(255,220,160,0.7) 0%, rgba(230,180,100,0.28) 50%, rgba(230,180,100,0) 76%)' } }
      ]
    },
    "John": {
      gradient: 'linear-gradient(180deg, #06101e 0%, #0e2038 14%, #16365a 28%, #21567e 42%, #3a80a0 56%, #6eaec0 70%, #b4dcd8 84%, #e8dcae 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'34%' } },
        { type:'glow', style:{ left:'50%', top:'18%', width:290, height:290, marginLeft:-145, marginTop:-145, background:'radial-gradient(circle, rgba(236,250,255,0.9) 0%, rgba(150,220,240,0.34) 44%, rgba(150,220,240,0) 74%)' } },
        { type:'sparkle', style:{ top:'6%', height:'34%' } },
        { type:'water', style:{ background:'linear-gradient(180deg, rgba(40,120,150,0) 0%, rgba(40,120,150,0.4) 100%)' } }
      ]
    },
    "Acts": {
      gradient: 'linear-gradient(180deg, #1c0e14 0%, #3a1a1c 14%, #5e2c20 30%, #8a4826 46%, #b2702e 60%, #d99a3e 74%, #e8c25e 88%, #b8903a 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'18%', width:260, height:260, marginLeft:-130, marginTop:-130, background:'radial-gradient(circle, rgba(255,214,120,0.85) 0%, rgba(236,150,50,0.34) 46%, rgba(236,150,50,0) 74%)' } },
        { type:'sparkle', style:{ top:'6%', height:'30%' } },
        { type:'ridge', style:{ bottom:'6%', height:'18%', background:'#8a5a2c', opacity:0.5, clipPath:RIDGE_JAG_BACK } },
        { type:'ridge', style:{ bottom:'0%', height:'14%', background:'#5e3c1e', opacity:0.7, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Romans": {
      gradient: 'linear-gradient(180deg, #10121e 0%, #1e2236 14%, #333a56 30%, #4e5478 46%, #6e6e94 60%, #9a8ea6 74%, #d0b898 88%, #a8843e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'36%' } },
        { type:'glow', style:{ left:'50%', top:'24%', width:270, height:270, marginLeft:-135, marginTop:-135, background:'radial-gradient(circle, rgba(226,232,255,0.7) 0%, rgba(150,160,220,0.28) 46%, rgba(150,160,220,0) 74%)' } },
        { type:'ridge', style:{ bottom:'0%', height:'16%', background:'#4e4636', opacity:0.7, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "1 Corinthians": {
      gradient: 'linear-gradient(180deg, #0e1a24 0%, #163040 14%, #1f4c5e 30%, #2e7080 46%, #4a96a0 60%, #7cb8ba 74%, #b8d4c2 88%, #d9cc9a 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'20%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(214,244,250,0.75) 0%, rgba(120,190,210,0.3) 46%, rgba(120,190,210,0) 74%)' } },
        { type:'water', style:{ background:'linear-gradient(180deg, rgba(40,110,130,0) 0%, rgba(40,110,130,0.45) 100%)' } }
      ]
    },
    "2 Corinthians": {
      gradient: 'linear-gradient(180deg, #141020 0%, #262038 14%, #3e3450 30%, #5a4a66 46%, #7e6a7c 60%, #a89296 74%, #d9bfa0 88%, #b8904e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'32%' } },
        { type:'glow', style:{ left:'50%', top:'40%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(255,228,190,0.6) 0%, rgba(220,170,120,0.26) 48%, rgba(220,170,120,0) 74%)' } },
        { type:'ridge', style:{ bottom:'0%', height:'15%', background:'#5a4636', opacity:0.7, clipPath:RIDGE_JAG_FRONT } }
      ]
    },
    "Galatians": {
      gradient: 'linear-gradient(180deg, #1e1410 0%, #3c2418 14%, #603a1e 30%, #8a5626 46%, #b07a34 60%, #d2a04e 76%, #a87c34 90%, #6e5020 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'22%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(255,226,160,0.8) 0%, rgba(230,170,80,0.32) 46%, rgba(230,170,80,0) 74%)' } },
        { type:'ridge', style:{ bottom:'0%', height:'16%', background:'#6e4c22', opacity:0.7, clipPath:DUNE_FRONT } }
      ]
    },
    "Ephesians": {
      gradient: 'linear-gradient(180deg, #0e1024 0%, #1a1c46 14%, #2c2c6e 30%, #46448e 46%, #6a62aa 60%, #9a8cc4 74%, #d4c0d8 88%, #e0c890 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'38%' } },
        { type:'glow', style:{ left:'50%', top:'20%', width:280, height:280, marginLeft:-140, marginTop:-140, background:'radial-gradient(circle, rgba(228,220,255,0.8) 0%, rgba(160,140,230,0.3) 46%, rgba(160,140,230,0) 74%)' } },
        { type:'sparkle', style:{ top:'8%', height:'30%' } }
      ]
    },
    "Philippians": {
      gradient: 'linear-gradient(180deg, #14161c 0%, #262c34 14%, #3e4a4c 30%, #5c6e60 46%, #82947a 60%, #b0be9c 74%, #e0d8a8 88%, #c9a860 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'22%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(244,250,214,0.75) 0%, rgba(180,200,130,0.3) 46%, rgba(180,200,130,0) 74%)' } },
        { type:'sparkle', style:{ top:'8%', height:'26%' } },
        { type:'ridge', style:{ bottom:'0%', height:'15%', background:'#5c6448', opacity:0.65, clipPath:DUNE_FRONT } }
      ]
    },
    "Colossians": {
      gradient: 'linear-gradient(180deg, #0c1220 0%, #16223c 14%, #24385e 30%, #385480 46%, #567aa0 60%, #86a8c0 74%, #c4d4d0 88%, #dcc898 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'34%' } },
        { type:'glow', style:{ left:'50%', top:'18%', width:270, height:270, marginLeft:-135, marginTop:-135, background:'radial-gradient(circle, rgba(220,238,255,0.8) 0%, rgba(140,180,230,0.3) 46%, rgba(140,180,230,0) 74%)' } },
        { type:'sparkle', style:{ top:'6%', height:'28%' } }
      ]
    },
    "1 Thessalonians": {
      gradient: 'linear-gradient(180deg, #101828 0%, #1c2c48 16%, #2e4668 32%, #46648a 48%, #6c88a6 62%, #9cb0c0 78%, #d8ceac 92%, #b8964e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'32%' } },
        { type:'glow', style:{ left:'50%', top:'20%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(220,236,255,0.72) 0%, rgba(140,180,225,0.28) 48%, rgba(0,0,0,0) 74%)' } }
      ]
    },
    "2 Thessalonians": {
      gradient: 'linear-gradient(180deg, #0e1220 0%, #1a2138 16%, #2c3654 32%, #444e70 48%, #666c8a 62%, #8e8a9e 78%, #c4ac8e 92%, #a8783e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'36%' } },
        { type:'glow', style:{ left:'50%', top:'30%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(226,220,255,0.65) 0%, rgba(150,150,215,0.26) 48%, rgba(0,0,0,0) 74%)' } }
      ]
    },
    "1 Timothy": {
      gradient: 'linear-gradient(180deg, #16121c 0%, #2a2230 16%, #443648 32%, #624e60 48%, #86707a 62%, #ac9490 78%, #dcc09a 92%, #b8924e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'28%' } },
        { type:'glow', style:{ left:'50%', top:'26%', width:230, height:230, marginLeft:-115, marginTop:-115, background:'radial-gradient(circle, rgba(248,232,220,0.68) 0%, rgba(200,160,150,0.26) 48%, rgba(0,0,0,0) 74%)' } }
      ]
    },
    "2 Timothy": {
      gradient: 'linear-gradient(180deg, #14101a 0%, #261e2c 16%, #3e3242 32%, #5a4a56 48%, #7c6a68 62%, #a68e7c 78%, #d9b686 92%, #b88a3e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'32%' } },
        { type:'glow', style:{ left:'50%', top:'32%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(255,226,180,0.7) 0%, rgba(215,165,100,0.28) 48%, rgba(0,0,0,0) 74%)' } }
      ]
    },
    "Titus": {
      gradient: 'linear-gradient(180deg, #101a1c 0%, #1c3030 16%, #2e4a44 32%, #46685a 48%, #688a72 62%, #94ac8e 78%, #cbc79a 92%, #c09a52 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'22%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(228,246,228,0.72) 0%, rgba(140,190,150,0.28) 48%, rgba(0,0,0,0) 74%)' } }
      ]
    },
    "Philemon": {
      gradient: 'linear-gradient(180deg, #1a141c 0%, #302430 16%, #4c3a44 32%, #6c545a 48%, #907472 62%, #b89a88 78%, #e0c49c 92%, #bc9450 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'24%', width:230, height:230, marginLeft:-115, marginTop:-115, background:'radial-gradient(circle, rgba(255,232,214,0.7) 0%, rgba(210,165,140,0.28) 48%, rgba(0,0,0,0) 74%)' } }
      ]
    },
    "Hebrews": {
      gradient: 'linear-gradient(180deg, #0c0e1c 0%, #181c36 14%, #2a3058 30%, #40497e 46%, #6a6e9e 60%, #a099b8 74%, #dcc79e 88%, #b8903e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'34%' } },
        { type:'glow', style:{ left:'50%', top:'20%', width:270, height:270, marginLeft:-135, marginTop:-135, background:'radial-gradient(circle, rgba(230,232,255,0.8) 0%, rgba(155,160,225,0.3) 48%, rgba(0,0,0,0) 74%)' } },
        { type:'sparkle', style:{ top:'8%', height:'28%' } }
      ]
    },
    "James": {
      gradient: 'linear-gradient(180deg, #141a12 0%, #253020 16%, #3c4c30 32%, #586c42 48%, #7c8e58 62%, #a4b077 78%, #d0cc94 92%, #c09a4e 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'22%', width:240, height:240, marginLeft:-120, marginTop:-120, background:'radial-gradient(circle, rgba(236,248,208,0.72) 0%, rgba(160,190,110,0.28) 48%, rgba(0,0,0,0) 74%)' } },
        { type:'ridge', style:{ bottom:'0%', height:'14%', background:'#4e5630', opacity:0.7, clipPath:DUNE_FRONT } }
      ]
    },
    "1 Peter": {
      gradient: 'linear-gradient(180deg, #0e1626 0%, #182842 16%, #26405e 32%, #3a5e7c 48%, #5c869a 62%, #8eb0b4 78%, #ccd6ac 92%, #c09a52 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'26%' } },
        { type:'glow', style:{ left:'50%', top:'24%', width:250, height:250, marginLeft:-125, marginTop:-125, background:'radial-gradient(circle, rgba(214,238,250,0.75) 0%, rgba(120,180,210,0.3) 48%, rgba(0,0,0,0) 74%)' } }
      ]
    },
    "2 Peter": {
      gradient: 'linear-gradient(180deg, #0c1020 0%, #161e36 16%, #263054 32%, #3c486e 48%, #5e6684 62%, #8a8896 78%, #c4ae94 92%, #b8863e 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'38%' } },
        { type:'glow', style:{ left:'50%', top:'30%', width:230, height:230, marginLeft:-115, marginTop:-115, background:'radial-gradient(circle, rgba(255,236,190,0.7) 0%, rgba(220,175,95,0.28) 48%, rgba(0,0,0,0) 74%)' } }
      ]
    },
    "1 John": {
      gradient: 'linear-gradient(180deg, #0a1220 0%, #142238 16%, #223a54 32%, #365a72 48%, #58868e 62%, #8cb4a6 78%, #cadcae 92%, #c9a457 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'28%' } },
        { type:'glow', style:{ left:'50%', top:'20%', width:260, height:260, marginLeft:-130, marginTop:-130, background:'radial-gradient(circle, rgba(232,250,250,0.82) 0%, rgba(130,195,200,0.32) 48%, rgba(0,0,0,0) 74%)' } },
        { type:'sparkle', style:{ top:'8%', height:'26%' } }
      ]
    },
    "2 John": {
      gradient: 'linear-gradient(180deg, #101a24 0%, #1c2e3c 16%, #2c4654 32%, #44626c 48%, #648a88 62%, #94b2a4 80%, #c8cfa4 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'26%', width:230, height:230, marginLeft:-115, marginTop:-115, background:'radial-gradient(circle, rgba(226,244,240,0.7) 0%, rgba(130,180,180,0.28) 48%, rgba(0,0,0,0) 74%)' } }
      ]
    },
    "3 John": {
      gradient: 'linear-gradient(180deg, #12181e 0%, #1e2c34 16%, #30464c 32%, #4a6664 48%, #6c8a80 62%, #9ab29c 80%, #ccc9a0 100%)',
      decor: [
        { type:'glow', style:{ left:'50%', top:'26%', width:230, height:230, marginLeft:-115, marginTop:-115, background:'radial-gradient(circle, rgba(230,246,238,0.7) 0%, rgba(135,180,168,0.28) 48%, rgba(0,0,0,0) 74%)' } }
      ]
    },
    "Jude": {
      gradient: 'linear-gradient(180deg, #100c18 0%, #1e1828 16%, #342a40 32%, #4e3c56 48%, #6e566a 62%, #967a7a 78%, #c4a082 92%, #a8763a 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'40%' } },
        { type:'glow', style:{ left:'50%', top:'30%', width:230, height:230, marginLeft:-115, marginTop:-115, background:'radial-gradient(circle, rgba(240,224,255,0.65) 0%, rgba(170,145,205,0.26) 48%, rgba(0,0,0,0) 74%)' } }
      ]
    },
    "Revelation": {
      gradient: 'linear-gradient(180deg, #0a0c1e 0%, #161a3e 12%, #2a2666 26%, #46368e 40%, #6e4a9e 52%, #a05e8e 64%, #d08a6e 76%, #f0c274 88%, #ffe8a8 100%)',
      decor: [
        { type:'stars', style:{ top:0, height:'32%' } },
        { type:'glow', style:{ left:'50%', top:'16%', width:300, height:300, marginLeft:-150, marginTop:-150, background:'radial-gradient(circle, rgba(255,248,220,0.95) 0%, rgba(255,214,130,0.4) 48%, rgba(0,0,0,0) 74%)' } },
        { type:'sparkle', style:{ top:'6%', height:'34%' } },
        { type:'glow', style:{ left:'50%', bottom:'0%', width:260, height:200, marginLeft:-130, marginBottom:-100, background:'radial-gradient(circle, rgba(255,236,170,0.85) 0%, rgba(240,190,90,0.34) 50%, rgba(240,190,90,0) 76%)' } }
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

  const LESSONS = window.STF_LESSONS || [];

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
    "1 Chronicles": "You're partway through 1 Chronicles. Jabez's one honest prayer interrupts pages of forgotten names. What honest, specific request have you been afraid to actually voice to God?",
    "2 Chronicles": "You're partway through 2 Chronicles. Solomon admitted the temple couldn't contain the God it was built for. Where have you let a building, routine, or ritual start to feel bigger than the God it's meant to point to?",
    "Ezra": "You're partway through Ezra. At the foundation, joy and weeping made one indistinguishable sound. What in your life right now is both a genuine new beginning and a real loss \u2014 and can you let yourself feel both?",
    "Nehemiah": "You're partway through Nehemiah. He prayed for four months, then prayed again in the half-second before answering the king. Which kind of prayer does your life have less of \u2014 the long kind or the instant kind?",
    "Esther": "You're partway through Esther. God is never named in this book, yet He's moving in every coincidence. Where in your own story might the \u2018coincidences\u2019 deserve a second look?",
    "Job": "You're partway through Job. His friends' silence was their best comfort; their explanations were their worst. When someone you love is suffering, which do you reach for first \u2014 presence or answers?",
    "Psalms": "You're partway through the Psalms. Psalm 42 talks TO its own soul instead of just listening to it. What is your soul saying on repeat lately \u2014 and what would you preach back to it?",
    "Proverbs": "You're partway through Proverbs \u2014 one chapter a day, remember. Of the chapters so far, which single line has been quietly working on you \u2014 and did you actually give it a full day to sit?",
    "Ecclesiastes": "You're partway through Ecclesiastes. The Teacher had everything and still found it vapor \u2014 ungraspable. What are you currently asking to satisfy you that was never built to carry that weight?",
    "Song of Solomon": "You're partway through the Song. It celebrates love openly and still counsels patience \u2014 \u2018do not awaken love before its time.\u2019 Which of those two do you find harder to hold?",
    "Isaiah": "You're partway through Isaiah. He saw God high and lifted up, and his first response was \u2018woe to me.\u2019 When did you last feel genuinely small before God \u2014 and did it crush you or clean you?",
    "Jeremiah": "You're partway through Jeremiah. He preached forty years to a nation that never listened, and God's promise was presence, not results. Where are you measuring faithfulness by response instead of obedience?",
    "Lamentations": "You're partway through Lamentations. This book gives grief a whole language and refuses to rush it. Is there a loss you've been hurrying past instead of naming?",
    "Daniel": "You're partway through Daniel. He accepted much of Babylon and drew one clear line \u2014 decided in advance. What's your line, and have you settled it before the pressure arrives?",
    "Ezekiel": "You're partway through Ezekiel. God's throne had wheels \u2014 it showed up in Babylon, the last place the exiles expected. Where have you assumed God isn't, because of where you ended up?",
    "Hosea": "You're partway through Hosea. God told a prophet to go buy his unfaithful wife back. What does it do to you that this is the picture Scripture chose for God's love?",
    "Joel": "You're partway through Joel. \u2018Rend your heart and not your garments.\u2019 Where is your repentance currently more visible than it is real?",
    "Amos": "You're partway through Amos. He judged the neighbors first, and everyone cheered \u2014 until the same standard turned on them. Whose failings are you enjoying critiquing lately?",
    "Obadiah": "You're partway through Obadiah. Edom's sin was standing by and then profiting when a brother fell. Is there someone whose hard season you've been watching without stepping in?",
    "Jonah": "You're partway through Jonah. He ran because he feared God would be merciful to people he hated. Is there anyone you'd be quietly disappointed to see God bless?",
    "Micah": "You're partway through Micah. Act justly, love mercy, walk humbly \u2014 which of those three is thinnest in your life right now?",
    "Nahum": "You're partway through Nahum. \u2018Slow to anger\u2019 and \u2018will not leave the guilty unpunished\u2019 sit in the same verse. Which of those two do you find easier to believe about God?",
    "Habakkuk": "You're partway through Habakkuk. He argued with God and Scripture kept the transcript. What question about God have you been too polite to actually ask Him?",
    "Zephaniah": "You're partway through Zephaniah. He indicts people who assume \u2018the LORD will do nothing, either good or bad.\u2019 Has that quiet assumption crept into how you pray?",
    "Haggai": "You're partway through Haggai. The temple sat unfinished for sixteen years \u2014 not by decision, just by postponement. What have you postponed so long that the delay has become the decision?",
    "Zechariah": "You're partway through Zechariah. \u2018Not by might nor by power, but by my Spirit.\u2019 What are you currently trying to accomplish mostly on your own strength?",
    "Malachi": "You're partway through Malachi. They offered God the animals nobody wanted. What version of you does God usually get \u2014 your best, or your leftovers?",
    "Matthew": "You're partway through Matthew. The Father said \u2018with him I am well pleased\u2019 before Jesus had done any public work. Where are you still trying to earn an approval that was given before the performance?",
    "Mark": "You're partway through Mark. In the storm the disciples asked \u2018don't you care?\u2019 rather than \u2018can you?\u2019 What has God's silence lately tempted you to conclude about His care?",
    "Luke": "You're partway through Luke. Mary answered an impossible announcement with \u2018I am the Lord's servant.\u2019 What has God asked of you that you're still negotiating rather than accepting?",
    "John": "You're partway through John. \u2018The Word became flesh and made his dwelling among us.\u2019 What difference does it make to you today that God came near rather than sending instructions?",
    "Acts": "You're partway through Acts. Jesus refused to give a timetable and handed out an assignment instead. Where are you waiting for clarity about the future when you've already been given something to do?",
    "Romans": "You're partway through Romans. \u2018All have sinned\u2019 and \u2018justified freely by his grace\u2019 sit in the same sentence. Which half do you have a harder time actually believing about yourself?",
    "1 Corinthians": "You're partway through 1 Corinthians. Paul said he'd resolved to know nothing except Christ crucified. What are you tempted to build your spiritual confidence on instead?",
    "2 Corinthians": "You're partway through 2 Corinthians. Paul said the pressure was beyond his ability to endure. Have you ever admitted that to God plainly, or do you keep reporting that you're fine?",
    "Galatians": "You're partway through Galatians. The false gospel wasn't denying Christ \u2014 it was adding to Him. What have you quietly added to grace as a requirement for your own acceptance?",
    "Ephesians": "You're partway through Ephesians. You were chosen before the creation of the world. Does your sense of standing with God rise and fall with your week?",
    "Philippians": "You're partway through Philippians. Paul wrote about joy from a prison cell. What circumstance are you currently treating as a prerequisite for contentment?",
    "Colossians": "You're partway through Colossians. In Christ all things hold together. What are you holding together by force right now that was never yours to sustain?",
    "1 Thessalonians": "You're partway through 1 Thessalonians. Paul shared not just the gospel but his life. Who are you close enough to that they've seen the unedited version of you?",
    "2 Thessalonians": "You're partway through 2 Thessalonians. Some quit working because they thought the end had come. How does what you believe about the future actually shape your Monday?",
    "1 Timothy": "You're partway through 1 Timothy. Paul called himself the worst of sinners in the present tense, decades in. Has grace made you more aware of your need, or less?",
    "2 Timothy": "You're partway through 2 Timothy. Paul asked for his cloak and his scrolls while awaiting execution. What ordinary things would still matter to you if you knew the end was near?",
    "Titus": "You're partway through Titus. Grace teaches us to say no. Where has grace actually trained you \u2014 and where have you treated it as permission instead?",
    "Philemon": "You're partway through Philemon. Paul offered to pay someone else's debt himself. Is there a cost you could absorb this week to restore a broken relationship?",
    "Hebrews": "You're partway through Hebrews. \u2018Let us approach the throne with confidence\u2019 \u2014 in your time of need, not after you've recovered. When you fail, do you run toward God or away?",
    "James": "You're partway through James. Faith without action is dead. What have you believed for years without it changing anything you actually do?",
    "1 Peter": "You're partway through 1 Peter. He wrote to people suffering for their faith about an inheritance nobody could take. What can't be taken from you?",
    "2 Peter": "You're partway through 2 Peter. What looks like God's slowness is patience \u2014 time for more people to come. Who are you glad God waited for?",
    "1 John": "You're partway through 1 John. Walking in the light means living out in the open, not being sinless. What are you managing in the dark instead of bringing into the light?",
    "2 John": "You're partway through 2 John. Truth and love are held together here. Which do you find easier \u2014 and which does that make you likely to neglect?",
    "3 John": "You're partway through 3 John. Diotrephes' only recorded sin was loving to be first. Where does that same instinct show up quietly in you?",
    "Jude": "You're partway through Jude. \u2018Be merciful to those who doubt.\u2019 Who in your life is doubting right now, and are you being merciful or impatient with them?",
    "Revelation": "You're partway through Revelation. John heard \u2018Lion\u2019 and turned to see a slain Lamb. Where are you expecting God to work through power when He may be working through sacrifice?"
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
    "1 Chronicles": "Looking back at 1 Chronicles \u2014 nine chapters of remembered names, David's redirected desire, and decades spent preparing a temple he'd never enter \u2014 David prayed \u2018who am I, that you have brought me this far?\u2019 What are you currently building that you may never see finished, and can you make peace with that?",
    "2 Chronicles": "Looking back at 2 Chronicles \u2014 Solomon's prayer, \u20187:14\u2019, Hezekiah and Josiah's revivals, and Cyrus's closing decree \u2014 the whole story ends not in ashes but with an open door home. What door has God left open for you that you've been too discouraged to walk through?",
    "Ezra": "Looking back at Ezra \u2014 the door home opened by a pagan king, the stalled work restarted by preaching, the scribe's set heart \u2014 Ezra studied, did, and then taught, in that order. Which of those three steps is your life currently skipping?",
    "Nehemiah": "Looking back at Nehemiah \u2014 the burden, the wall, the sword and trowel, the joy that was strength, and the relapse of the final chapter \u2014 what has God helped you rebuild that now needs maintaining, and what would \u2018chapter 13 honesty\u2019 about it look like?",
    "Esther": "Looking back at Esther \u2014 the hidden identity, the sleepless night, the reversal \u2014 the whole book asks Mordecai's question: what position, access, or comfort do you hold right now that might exist \u2018for such a time as this\u2019?",
    "Job": "Looking back at Job \u2014 the losses, the bad comfort, the Redeemer hope, the whirlwind \u2014 God preferred Job's honest wrestling to the friends' tidy defenses. Is there a pain you've been managing with tidy answers that God is inviting you to bring to Him raw instead?",
    "Psalms": "Looking back at these Psalms \u2014 the rooted tree, the shepherd's valley, the clean heart, the searched soul \u2014 which one is the prayer you most need right now? Consider praying it out loud, in its own words, before you move on.",
    "Proverbs": "Looking back at all thirty-one chapters \u2014 the fear of the LORD, the guarded heart, the gentle answer, iron sharpening iron, Agur's daily bread, and the life of chapter 31 \u2014 wisdom here was never information but formation. Which single verse, actually lived for a month, would change your life the most \u2014 and what's stopping you from starting today?",
    "Ecclesiastes": "Looking back at Ecclesiastes \u2014 the vapor, the failed experiment, the seasons, the bread eaten with joy, and the final charge to fear God \u2014 the book demolished every substitute before offering the real thing. What would change if you stopped asking your work, money, or achievements to mean more than they can?",
    "Song of Solomon": "Looking back at the Song \u2014 the spring invitation, mutual belonging, specific praise, and love as strong as death \u2014 Scripture treats faithful love as something worth celebrating out loud. Who in your life deserves the kind of specific, spoken delight this book models, and when will you say it?",
    "Isaiah": "Looking back at Isaiah \u2014 scarlet made white, the throne room, the child born, wings like eagles, the suffering servant, and the new creation \u2014 the book pairs honest judgment with unreasonable grace. Which do you find harder to accept about yourself: the diagnosis or the pardon?",
    "Jeremiah": "Looking back at Jeremiah \u2014 the call before birth, the broken cisterns, the potter's wheel, the letter to exiles, the fire in his bones, the new covenant \u2014 he was faithful for forty years with almost nothing to show for it. What are you doing right now that God may be measuring differently than you are?",
    "Lamentations": "Looking back at Lamentations \u2014 the ruined city, the mercies new every morning, the unresolved final plea \u2014 Scripture gave grief a whole book and let it end still waiting. What grief of yours needs to be spoken to God in full, without hurrying to the comfort?",
    "Daniel": "Looking back at Daniel \u2014 the line drawn at the table, the furnace, the humbled king, the writing on the wall, the open windows, the son of man \u2014 he lived seventy years in a foreign empire without losing himself. What habit, practiced quietly for decades, would you want found in you if pressure came tomorrow?",
    "Ezekiel": "Looking back at Ezekiel \u2014 the wheeled throne, the watchman, the dry bones, the heart of flesh, the shepherd who searches, and the city named THE LORD IS THERE \u2014 the whole book moves from glory departing to glory returning. What in your life has been dead long enough to look permanent, and what would it mean to ask God if those bones can live?",
    "Hosea": "Looking back at Hosea \u2014 the unfaithful wife bought back, mercy over sacrifice, and \u2018how can I give you up?\u2019 \u2014 God chose a broken marriage as the picture of His own love. Where have you assumed God's patience with you had run out?",
    "Joel": "Looking back at Joel \u2014 the locusts, \u2018even now, return to me,\u2019 the years repaid, and the Spirit poured out on all people \u2014 what \u2018eaten years\u2019 in your life do you need to hand to the God who promises to repay them?",
    "Amos": "Looking back at Amos \u2014 the widening circle of judgment, justice rolling like a river, and the plumb line \u2014 he insisted worship and injustice cannot coexist. If a plumb line were hung beside your ordinary week, where is the wall out of true?",
    "Obadiah": "Looking back at Obadiah \u2014 one page about pride and standing by \u2014 God gave a whole book to what a nation did while a brother suffered. What would it look like this month to step in somewhere you've been spectating?",
    "Jonah": "Looking back at Jonah \u2014 the running, the fish, the eight-word sermon, the worm, and God's unanswered question \u2014 the book ends by asking whether you share God's concern for people you'd rather He judged. What's your honest answer?",
    "Micah": "Looking back at Micah \u2014 what the LORD requires, the promise over Bethlehem, and sins hurled into the sea \u2014 the book asks \u2018who is a God like you?\u2019 and answers with mercy. What sin do you keep fishing back out of the water God threw it into?",
    "Nahum": "Looking back at Nahum \u2014 Nineveh's fall a century after its repentance \u2014 mercy received in one generation wasn't inherited by the next. What has God done in your life that you need to make sure gets passed on rather than assumed?",
    "Habakkuk": "Looking back at Habakkuk \u2014 \u2018how long?\u2019, the watchtower, the righteous living by faith, and \u2018though the fig tree does not bud\u2019 \u2014 he ended in worship with nothing resolved. Could you write your own version of that \u2018yet\u2019 sentence tonight, naming the failures honestly and choosing joy anyway?",
    "Zephaniah": "Looking back at Zephaniah \u2014 the day of the LORD, the call to the humble, and God rejoicing over His people with singing \u2014 the book moves from sweeping judgment to a God who sings. Which of those two pictures of God do you carry around more often, and why?",
    "Haggai": "Looking back at Haggai \u2014 paneled houses, the purse with holes, and \u2018be strong and work, for I am with you\u2019 \u2014 the people actually listened and built. What's the one thing you'd start this week if you took \u2018give careful thought to your ways\u2019 seriously?",
    "Zechariah": "Looking back at Zechariah \u2014 not by might, the day of small things, the king on a donkey, the pierced one, and cooking pots marked HOLY \u2014 what small beginning in your life have you been despising, and what would it look like to honor it instead?",
    "Malachi": "Looking back at Malachi \u2014 the arguments, the blind offerings, \u2018test me in this,\u2019 the scroll of remembrance, and the sun of righteousness \u2014 the Old Testament ends with sunrise and then four hundred years of silence. What are you currently waiting on God for, and what would faithfulness look like during the wait?",
    "Matthew": "Looking back at Matthew \u2014 the scandalous genealogy, the Beatitudes, the Lord's Prayer, the two houses, \u2018come to me all who are weary,\u2019 the sheep and the goats, and \u2018I am with you always\u2019 \u2014 both builders heard the same words and only one built on rock. What is one thing from this Gospel you have heard many times and never actually done?",
    "Mark": "Looking back at Mark \u2014 the roof torn open, the storm stilled, the loaves multiplied, \u2018who do you say I am,\u2019 Gethsemane, and the torn curtain \u2014 the whole book races toward a Roman soldier saying \u2018surely this man was the Son of God.\u2019 If someone watched your ordinary week, what would they conclude you actually believe about who Jesus is?",
    "Luke": "Looking back at Luke \u2014 Mary's song, the shepherds, the Samaritan, Martha's distraction, the prodigal's father running, Zacchaeus, the criminal beside Him, and the road to Emmaus \u2014 this Gospel keeps putting outsiders at the center. Who would you rather God not welcome, and what does the father running down the road say to that?",
    "John": "Looking back at John \u2014 the Word made flesh, the well at noon, the bread of life, the good shepherd, Lazarus, the towel and basin, \u2018it is finished,\u2019 and breakfast on the beach \u2014 Jesus said the world would know His disciples by their love for one another. Where would someone watching your life see that mark, and where would they miss it?",
    "Acts": "Looking back at Acts \u2014 Pentecost, the shared table, Stephen's forgiveness, the Damascus road, Peter's rooftop, midnight singing in a jail, Athens, and Rome \u2014 the book ends with the word \u2018unhindered\u2019 and no conclusion, because the mission continues. What's your part in the chapter still being written?",
    "Romans": "Looking back at Romans \u2014 all have sinned, justified freely, peace with God, no condemnation, nothing can separate, living sacrifices, welcome one another \u2014 sixteen chapters build to a life offered back. Which truth from this letter would change the most if you actually lived like it were true?",
    "1 Corinthians": "Looking back at 1 Corinthians \u2014 the foolishness of the cross, your body as a temple, one body with many parts, love that outlasts every gift, and the resurrection \u2014 Paul told a gifted, divided church that without love they were nothing. Read chapter 13 with your own name in place of \u2018love.\u2019 Which line stops you?",
    "2 Corinthians": "Looking back at 2 Corinthians \u2014 comfort passed on, treasure in jars of clay, the new creation, and \u2018my grace is sufficient\u2019 \u2014 Paul boasted in the weaknesses he'd begged God to remove. What thorn have you been praying away that God may be using to display His power?",
    "Galatians": "Looking back at Galatians \u2014 no other gospel, crucified with Christ, and the fruit of the Spirit \u2014 Paul fought hardest against people adding requirements to grace. Where are you still trying to earn something Christ already secured?",
    "Ephesians": "Looking back at Ephesians \u2014 chosen before creation, saved by grace through faith, rooted in love, and the armor of God \u2014 Paul prayed believers would have power to grasp how loved they are. Do you actually believe you are loved like that, or only that you should?",
    "Philippians": "Looking back at Philippians \u2014 joy from a cell, Christ humbling Himself to a cross, contentment learned, and \u2018whatever is true\u2019 \u2014 Paul had learned contentment in plenty and in want. What would you need to release for contentment to be possible in your current circumstances?",
    "Colossians": "Looking back at Colossians \u2014 Christ holding all things together, hearts set above, forgiving as you were forgiven, and working as for the Lord \u2014 the letter dignifies your most ordinary Tuesday. What part of your week have you been treating as spiritually irrelevant?",
    "1 Thessalonians": "Looking back at 1 Thessalonians \u2014 faith that works, love that labors, hope that endures, and grief that isn't hopeless \u2014 Paul comforted a frightened church with the promise of being with the Lord forever. Who could you encourage with those same words this week?",
    "2 Thessalonians": "Looking back at 2 Thessalonians \u2014 bad theology producing idleness, and \u2018never tire of doing what is good\u2019 \u2014 waiting for Christ should make you more diligent, not less. Where have you grown tired of doing good with nothing to show for it?",
    "1 Timothy": "Looking back at 1 Timothy \u2014 the worst of sinners shown mercy as an example, one mediator, and godliness with contentment \u2014 Paul never got over being forgiven. When did you last feel genuine astonishment at being forgiven?",
    "2 Timothy": "Looking back at 2 Timothy \u2014 the faith of Lois and Eunice, all Scripture God-breathed, and \u2018I have finished the race\u2019 \u2014 Paul measured his life by completion, not comfort. If you wrote that sentence today, what would honestly go in the blanks?",
    "Titus": "Looking back at Titus \u2014 grace that saves and grace that teaches us to say no \u2014 the same gift that pardons is the one that trains. Where do you need grace to teach you a \u2018no\u2019 this month?",
    "Philemon": "Looking back at Philemon \u2014 a runaway received as a brother, and a debt charged to Paul's own account \u2014 the letter asks someone to absorb a loss for the sake of reconciliation. Is there a relationship where you're waiting for repayment that you could simply forgive?",
    "Hebrews": "Looking back at Hebrews \u2014 God speaking by His Son, a high priest who understands, one sacrifice offered and then a seat taken, the hall of faith, and \u2018fixing our eyes on Jesus\u2019 \u2014 the whole letter says: don't go back, look at who you'd be leaving. What are you tempted to drift back to, and what would looking at Christ change?",
    "James": "Looking back at James \u2014 faith that works, the untamable tongue, humility, and patient waiting \u2014 the letter refuses to let belief stay verbal. Name one concrete action this week that would prove a belief you claim to hold.",
    "1 Peter": "Looking back at 1 Peter \u2014 a living hope, an inheritance that can't fade, being ready to explain your hope with gentleness, and casting your anxiety on Him \u2014 Peter wrote all of it to people suffering unjustly. What anxiety are you still carrying that you were invited to throw onto Him?",
    "2 Peter": "Looking back at 2 Peter \u2014 God's patience mistaken for slowness, and the call to grow in grace \u2014 every delayed day is someone's opportunity. Who would you most want God to keep waiting for, and are you praying for them?",
    "1 John": "Looking back at 1 John \u2014 walking in the light, confession met with faithful forgiveness, God defined as love by the cross, and \u2018that you may know\u2019 \u2014 John wrote so you'd have assurance, not anxiety. Do you actually know you have eternal life, or do you hope so on good days?",
    "2 John": "Looking back at 2 John \u2014 walking in truth and loving one another, held together \u2014 truth without love turns cruel and love without truth turns meaningless. Which correction do you need more right now?",
    "3 John": "Looking back at 3 John \u2014 Gaius's hospitality, Diotrephes' love of being first, and \u2018do not imitate what is evil but what is good\u2019 \u2014 a whole book preserved about ego in a small church. Whose example are you actually imitating?",
    "Jude": "Looking back at Jude \u2014 contending for the faith, mercy toward doubters, and the God who is able to keep you from stumbling \u2014 the letter ends by naming who does the holding. Where have you been trying to hold yourself up?",
    "Revelation": "Looking back at Revelation \u2014 Christ among the lampstands, the letters to the churches, the Lamb who was slain, every tear wiped away, the river and the tree, and \u2018Come, Lord Jesus\u2019 \u2014 the Bible ends with an open invitation and a church longing for her Lord. Having reached the last page of the whole story, what do you most want to say back to God?"
  };

  

  

  function todayStr(){ return new Date().toISOString().slice(0,10); }
  function yesterdayStr(){ const d = new Date(); d.setDate(d.getDate()-1); return d.toISOString().slice(0,10); }
  function daysBetween(dateStr1, dateStr2){
    const d1 = new Date(dateStr1 + 'T00:00:00');
    const d2 = new Date(dateStr2 + 'T00:00:00');
    return Math.round((d2 - d1) / 86400000);
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

  function weeklyStats(state){
    const week = new Set(last7Days());
    const log = state.completedLog || [];
    const lessonsThisWeek = log.filter(entry => week.has(entry.date)).length;
    const ids = log.filter(entry => week.has(entry.date)).map(entry => entry.id);
    const booksTouched = new Set(ids.map(id => { const l = LESSONS.find(x => x.id === id); return l ? l.book : null; }).filter(Boolean));
    return { lessonsThisWeek, booksTouched: booksTouched.size };
  }

  const TESTS = [
    { id:'people_easy', title:'Names & People', tier:'Easy', type:'multiple', icon:'\ud83e\uddd1', cost:20,
      intro:{ ref:'Hebrews 11:1\u20132', verse:'By faith the people of old received their commendation.', note:'A quick tour of the most famous names in Scripture \u2014 great if you\u2019re just getting your feet under you.' },
      questions: [
        { q:"Who was thrown into a lions' den for praying?", opts:["Daniel","Samson","David","Elijah"], correct:0, explain:"Daniel kept praying despite the king's decree, and God shut the lions' mouths." },
        { q:"Who led the Israelites out of Egypt?", opts:["Joshua","Moses","Aaron","Noah"], correct:1, explain:"Moses confronted Pharaoh and led Israel through the Red Sea to freedom." },
        { q:"Who was the first man, according to Genesis?", opts:["Noah","Abraham","Adam","Cain"], correct:2, explain:"Adam was formed from the dust and placed in the Garden of Eden." },
        { q:"Who betrayed Jesus for 30 pieces of silver?", opts:["Peter","Judas Iscariot","Thomas","John"], correct:1, explain:"Judas identified Jesus to the authorities with a kiss." },
        { q:"Who was known for his great strength and long hair?", opts:["Samson","Goliath","Gideon","Saul"], correct:0, explain:"Samson's strength was tied to a vow never to cut his hair." },
        { q:"Who was swallowed by a great fish?", opts:["Elijah","Jonah","Peter","Job"], correct:1, explain:"Jonah spent three days inside the fish before being spit out onto dry land." },
        { q:"Who was Jesus' mother?", opts:["Martha","Elizabeth","Mary","Anna"], correct:2, explain:"Mary was the young woman chosen to carry and raise Jesus." }
      ] },
    { id:'numbers_medium', title:'Numbers in the Bible', tier:'Medium', type:'multiple', icon:'\ud83d\udd22', cost:35,
      intro:{ ref:'Deuteronomy 8:2', verse:'Remember the whole way that the LORD your God has led you these forty years in the wilderness.', note:'Scripture is full of specific numbers that carry real weight \u2014 this one rewards paying attention to the details.' },
      questions: [
        { q:"How many days and nights did it rain during the flood?", opts:["7","40","100","3"], correct:1, explain:"Forty days and nights of rain flooded the earth in Noah's story." },
        { q:"How many years did Jacob work for Laban before marrying both Leah and Rachel?", opts:["7","14","20","10"], correct:1, explain:"Seven years for Leah (after being deceived) and seven more for Rachel \u2014 fourteen total." },
        { q:"How many disciples did Jesus choose?", opts:["7","10","12","20"], correct:2, explain:"Jesus chose twelve disciples to follow and learn from Him closely." },
        { q:"How many years of famine did Joseph predict from Pharaoh's dream?", opts:["3","5","7","10"], correct:2, explain:"Seven years of plenty would be followed by seven years of famine." },
        { q:"How many days was Jesus in the tomb before rising?", opts:["1","3","7","40"], correct:1, explain:"Jesus rose on the third day, a central claim of the Christian faith." },
        { q:"How many plagues struck Egypt before Pharaoh let Israel go?", opts:["5","7","10","12"], correct:2, explain:"Ten plagues struck Egypt, ending with the death of the firstborn." },
        { q:"How many years did Solomon take to build the temple?", opts:["3","7","12","20"], correct:1, explain:"The temple took seven years to complete." }
      ] },
    { id:'books_hard', title:'Books of the Bible', tier:'Hard', type:'multiple', icon:'\ud83d\udcda', cost:50,
      intro:{ ref:'2 Timothy 3:16', verse:'All Scripture is God-breathed and is useful for teaching.', note:'This one goes past the basics \u2014 book order, structure, and a few genuinely obscure details.' },
      questions: [
        { q:"Which Old Testament book never mentions God's name directly?", opts:["Ruth","Esther","Job","Nahum"], correct:1, explain:"Esther's story is famous for God working behind the scenes without being named outright." },
        { q:"Which two Old Testament books are named after women?", opts:["Ruth and Esther","Naomi and Ruth","Sarah and Rebekah","Deborah and Ruth"], correct:0, explain:"Ruth and Esther are the only two Old Testament books named for their female protagonists." },
        { q:"How many chapters does the book of Obadiah have?", opts:["1","3","5","12"], correct:0, explain:"Obadiah is the shortest book in the Old Testament \u2014 just one chapter, twenty-one verses." },
        { q:"Which book comes immediately before the Gospels in most English Bibles?", opts:["Malachi","Zechariah","Daniel","Nehemiah"], correct:0, explain:"Malachi closes the Old Testament, followed by roughly four centuries of silence before Matthew opens the New." },
        { q:"Which New Testament letter is addressed to a specific individual about a runaway slave?", opts:["Titus","Philemon","Jude","3 John"], correct:1, explain:"Paul wrote Philemon as a personal appeal on behalf of Onesimus." },
        { q:"Which book of the Bible is traditionally attributed to an anonymous author, despite being included among Paul's letters in many old Bibles?", opts:["Galatians","Hebrews","Philippians","Titus"], correct:1, explain:"Hebrews never names its author, and its authorship has been debated since the early church." },
        { q:"Which Old Testament book is entirely a poem structured as an acrostic, working through the Hebrew alphabet?", opts:["Nahum","Lamentations","Joel","Micah"], correct:1, explain:"Lamentations' poems are built letter by letter through the Hebrew alphabet as a structure for grief." }
      ] },
    { id:'true_false_1', title:'True or False: Old Testament', tier:'Easy', type:'multiple', icon:'\ud83d\udd25', cost:20,
      intro:{ ref:'Psalm 119:160', verse:'The sum of your word is truth.', note:'Some of these sound true because they\u2019re famous \u2014 but a few are popular misquotes. Read carefully.' },
      questions: [
        { q:"True or false: Abraham was originally named Abram.", opts:["True","False"], correct:0, explain:"God renamed him Abraham, meaning \u201cfather of many,\u201d after the covenant." },
        { q:"True or false: Moses saw the Promised Land but did not enter it.", opts:["True","False"], correct:0, explain:"Moses viewed Canaan from a mountain but died before crossing in." },
        { q:"True or false: The Bible says Jonah was swallowed by a whale.", opts:["True","False"], correct:1, explain:"Scripture says a \u201cgreat fish,\u201d not specifically a whale." },
        { q:"True or false: The Israelites wandered the wilderness for 100 years.", opts:["True","False"], correct:1, explain:"It was forty years, not one hundred." },
        { q:"True or false: Joseph had a coat of many colors.", opts:["True","False"], correct:0, explain:"The special coat from his father was part of what made his brothers jealous." },
        { q:"True or false: David defeated Goliath with a sword.", opts:["True","False"], correct:1, explain:"David used a sling and a stone, not a sword, to defeat Goliath." },
        { q:"True or false: Ruth was Naomi's daughter-in-law.", opts:["True","False"], correct:0, explain:"Ruth stayed loyal to Naomi even after both of their husbands died." },
        { q:"True or false: Esther saved her people as queen of Persia.", opts:["True","False"], correct:0, explain:"Esther risked her life to expose a plot against the Jewish people." }
      ] },
    { id:'verse_fill', title:'Complete the Verse', tier:'Medium', type:'fill', icon:'\u270d\ufe0f', cost:30,
      intro:{ ref:'Psalm 119:11', verse:'I have stored up your word in my heart, that I might not sin against you.', note:'These are some of the most-quoted verses in Scripture \u2014 fill in the missing word from memory.' },
      questions: [
        { text:"\u201cIn the beginning God created the heavens and the ___.\u201d", ref:"Genesis 1:1", answer:"earth", explain:"The very first verse of the Bible sets the stage for everything after." },
        { text:"\u201cThe Lord is my shepherd; I shall not ___.\u201d", ref:"Psalm 23:1", answer:"want", explain:"One of the most well-known verses, describing trust in God's provision." },
        { text:"\u201cFor God so loved the world, that he gave his one and only ___.\u201d", ref:"John 3:16", answer:"Son", explain:"This verse is often called the gospel in a single sentence." },
        { text:"\u201cI can do all things through Christ who strengthens ___.\u201d", ref:"Philippians 4:13", answer:"me", explain:"Paul wrote this from prison, about contentment in any circumstance." },
        { text:"\u201cTrust in the Lord with all your ___.\u201d", ref:"Proverbs 3:5", answer:"heart", explain:"This proverb continues: \u2018and do not lean on your own understanding.\u2019" },
        { text:"\u201cBe strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you ___.\u201d", ref:"Joshua 1:9", answer:"go", explain:"God's charge to Joshua as he took over leadership from Moses." }
      ] },
    { id:'miracles_medium', title:'Miracles of Jesus', tier:'Medium', type:'multiple', icon:'\u2728', cost:35,
      intro:{ ref:'John 20:30\u201331', verse:'Jesus did many other signs\u2026 but these are written so that you may believe.', note:'Every miracle in the Gospels pointed at something \u2014 see how well you know the details behind the wonder.' },
      questions: [
        { q:"What was Jesus' first recorded miracle?", opts:["Turning water into wine", "Walking on water", "Healing a blind man", "Feeding the 5,000"], correct:0, explain:"This happened at a wedding in Cana, at His mother's request." },
        { q:"How many people did Jesus feed with five loaves and two fish?", opts:["500", "5,000", "50", "50,000"], correct:1, explain:"This miracle, feeding 5,000, appears in all four Gospels." },
        { q:"What did Jesus do for Lazarus?", opts:["Healed his blindness", "Raised him from the dead", "Cast out a demon", "Cured his leprosy"], correct:1, explain:"Lazarus had been dead four days when Jesus called him out of the tomb." },
        { q:"How did Jesus calm a storm on the sea?", opts:["He rowed to shore", "He spoke and rebuked the wind and waves", "He prayed all night first", "He waited it out"], correct:1, explain:"His disciples were amazed that even the wind and waves obeyed Him." },
        { q:"How many lepers did Jesus heal who then didn't return to thank Him, except one?", opts:["Ten", "Three", "Seven", "Twelve"], correct:0, explain:"Of the ten healed, only one, a Samaritan, came back to give thanks." },
        { q:"What did Jesus do when Peter tried to walk on water and began to sink?", opts:["Let him struggle to learn a lesson", "Immediately reached out and caught him", "Called for the other disciples to help", "Told him to swim to the boat"], correct:1, explain:"Jesus reached out immediately, asking why Peter doubted." }
      ] },
    { id:'parables_medium', title:'Parables of Jesus', tier:'Medium', type:'multiple', icon:'\ud83c\udf3e', cost:35,
      intro:{ ref:'Matthew 13:34\u201335', verse:'All these things Jesus said to the crowds in parables.', note:'Jesus taught the deepest truths through ordinary stories \u2014 farmers, coins, sheep, and feasts.' },
      questions: [
        { q:"In the Parable of the Prodigal Son, what does the father do when the son returns?", opts:["Turns him away", "Runs to him and celebrates", "Makes him work as a servant", "Ignores him"], correct:1, explain:"The father's joyful welcome is the heart of this well-known parable." },
        { q:"In the Parable of the Good Samaritan, who stopped to help the injured man?", opts:["A priest", "A Levite", "A Samaritan", "A Pharisee"], correct:2, explain:"The Samaritan, someone the audience wouldn't expect, is the one who shows mercy." },
        { q:"In the Parable of the Sower, what happened to seed that fell on rocky ground?", opts:["It grew into a large tree", "It sprang up quickly but withered", "It never grew at all", "Birds ate it immediately"], correct:1, explain:"Without deep roots, the plant couldn't survive when troubles came." },
        { q:"In the Parable of the Lost Sheep, how many sheep did the shepherd leave to find the one?", opts:["9", "50", "99", "100"], correct:2, explain:"The shepherd leaves ninety-nine to go after the one that wandered off." },
        { q:"In the Parable of the Talents, what happened to the servant who buried his talent?", opts:["He was praised for caution", "He was rebuked for not using it", "He was given more talents", "He was made a ruler"], correct:1, explain:"The parable praises those who put what they were given to use." },
        { q:"In the Parable of the Ten Virgins, what separated the wise from the foolish?", opts:["Their wealth", "Whether they brought extra oil for their lamps", "Their age", "Where they stood in line"], correct:1, explain:"The wise virgins prepared with extra oil; the foolish ones ran out waiting for the bridegroom." }
      ] },
    { id:'prophets_hard', title:'Old Testament Prophets', tier:'Hard', type:'multiple', icon:'\ud83d\udcdc', cost:50,
      intro:{ ref:'Amos 3:7', verse:'Surely the Lord GOD does nothing without revealing his secret to his servants the prophets.', note:'This one leans into specific prophets and their less-famous moments \u2014 not just Elijah and Isaiah.' },
      questions: [
        { q:"Which prophet was taken up to heaven in a whirlwind?", opts:["Elisha", "Elijah", "Isaiah", "Jeremiah"], correct:1, explain:"Elijah was taken up in a whirlwind, with Elisha watching, in 2 Kings." },
        { q:"Which prophet confronted King David about his sin with Bathsheba?", opts:["Samuel", "Nathan", "Gad", "Elijah"], correct:1, explain:"Nathan told David a parable that exposed his own wrongdoing." },
        { q:"Which prophet married a woman named Gomer at God's command, as a living picture of Israel's unfaithfulness?", opts:["Hosea", "Joel", "Amos", "Micah"], correct:0, explain:"Hosea's marriage became a lived-out sermon about God's persistent love." },
        { q:"Which prophet saw a vision of dry bones coming to life?", opts:["Isaiah", "Ezekiel", "Amos", "Micah"], correct:1, explain:"Ezekiel's vision symbolized new life for a discouraged Israel." },
        { q:"Which prophet was told to marry an unfaithful woman as an illustration of God's love for Israel?", opts:["Amos", "Hosea", "Habakkuk", "Zephaniah"], correct:1, explain:"Hosea's own marriage became the sermon \u2014 love that pursues even after betrayal." },
        { q:"Which minor prophet's entire message is a single chapter directed at the nation of Edom?", opts:["Obadiah", "Nahum", "Habakkuk", "Haggai"], correct:0, explain:"Obadiah, the Bible's shortest Old Testament book, confronts Edom's pride and betrayal." },
        { q:"Which prophet argued with God after being told he'd be sent to preach mercy to Nineveh, Israel's enemy?", opts:["Jonah", "Nahum", "Micah", "Joel"], correct:0, explain:"Jonah ran the opposite direction because he didn't want Nineveh to be spared." }
      ] },
    { id:'kings_hard', title:'Kings of Israel', tier:'Hard', type:'multiple', icon:'\ud83d\udc51', cost:50,
      intro:{ ref:'1 Samuel 8:6\u20137', verse:'The people\u2019s request for a king displeased Samuel\u2026 for they have not rejected you, but they have rejected me.', note:'Every king in this test made real choices with real consequences \u2014 this test rewards knowing the specifics.' },
      questions: [
        { q:"Who was Israel's first king?", opts:["David", "Saul", "Solomon", "Samuel"], correct:1, explain:"Saul was anointed Israel's first king, though he later lost God's favor." },
        { q:"Which king was known for his wisdom and building the first temple?", opts:["David", "Solomon", "Saul", "Rehoboam"], correct:1, explain:"Solomon asked God for wisdom and used it to build the temple in Jerusalem." },
        { q:"Which king's foolish response to his people's request for lighter labor caused the kingdom to split?", opts:["Solomon", "Rehoboam", "Jeroboam", "Saul"], correct:1, explain:"Rehoboam threatened even heavier burdens than his father Solomon, and ten tribes broke away." },
        { q:"Which wicked king married Jezebel?", opts:["Ahab", "Saul", "Jeroboam", "Omri"], correct:0, explain:"Ahab and Jezebel led Israel deep into idol worship." },
        { q:"Which king rediscovered the forgotten Book of the Law during temple repairs and led a sweeping national reform?", opts:["Hezekiah", "Josiah", "Jehoshaphat", "Uzziah"], correct:1, explain:"Josiah tore his robes in grief upon hearing the Law read and reformed the kingdom around it." },
        { q:"Which king reigned the longest in Judah's history, despite a wicked start marked by idolatry and even child sacrifice?", opts:["Manasseh", "Ahaz", "Amon", "Joash"], correct:0, explain:"Manasseh reigned 55 years \u2014 the longest of any king of Judah \u2014 and later repented after being taken captive." },
        { q:"After Solomon's reign, the kingdom split into Israel and what other kingdom?", opts:["Judah", "Egypt", "Babylon", "Assyria"], correct:0, explain:"The united kingdom split into Israel in the north and Judah in the south." }
      ] },
    { id:'geography_medium', title:'Bible Geography & Places', tier:'Medium', type:'multiple', icon:'\ud83d\uddfa\ufe0f', cost:35,
      intro:{ ref:'Acts 17:26', verse:'He determined allotted periods and the boundaries of their dwelling place.', note:'Places matter throughout Scripture \u2014 this test covers where the biggest moments actually happened.' },
      questions: [
        { q:"In which river was Jesus baptized?", opts:["The Nile", "The Jordan River", "The Euphrates", "The Tigris"], correct:1, explain:"John baptized Jesus in the Jordan River, where the Spirit descended like a dove." },
        { q:"Which city is known as the city of David and Israel's capital?", opts:["Bethlehem", "Jerusalem", "Nazareth", "Jericho"], correct:1, explain:"Jerusalem became the political and spiritual center of Israel under David." },
        { q:"Where was Jesus born?", opts:["Nazareth", "Jerusalem", "Bethlehem", "Capernaum"], correct:2, explain:"Bethlehem fulfilled an Old Testament prophecy about the Messiah's birthplace." },
        { q:"Which sea did the Israelites cross during the Exodus?", opts:["The Dead Sea", "The Red Sea", "The Mediterranean Sea", "The Sea of Galilee"], correct:1, explain:"God parted the Red Sea for Israel to cross on dry ground." },
        { q:"Where did Jesus grow up?", opts:["Bethlehem", "Jerusalem", "Nazareth", "Capernaum"], correct:2, explain:"Jesus is often called \u201cJesus of Nazareth\u201d because that's where He was raised." },
        { q:"On what mountain did Moses receive the Ten Commandments?", opts:["Mount Carmel", "Mount Sinai", "Mount Zion", "Mount of Olives"], correct:1, explain:"Sinai is where God gave Moses the Law after Israel left Egypt." },
        { q:"On which mountain did Elijah confront the prophets of Baal?", opts:["Mount Sinai", "Mount Carmel", "Mount Nebo", "Mount Hermon"], correct:1, explain:"Elijah's contest with 450 prophets of Baal took place on Mount Carmel." }
      ] },
    { id:'wisdom_easy', title:'Wisdom & Proverbs', tier:'Easy', type:'multiple', icon:'\ud83e\udd89', cost:20,
      intro:{ ref:'Proverbs 4:7', verse:'The beginning of wisdom is this: Get wisdom.', note:'The easiest, most widely known lines from Proverbs and the wisdom books \u2014 a gentle warm-up.' },
      questions: [
        { q:"According to Proverbs, what should you trust with all your heart?", opts:["Yourself", "The Lord", "Your riches", "Your friends"], correct:1, explain:"\u201cTrust in the Lord with all your heart\u201d is one of Proverbs' best-known verses." },
        { q:"Which book is known for wisdom sayings written largely by Solomon?", opts:["Psalms", "Proverbs", "Job", "Ecclesiastes"], correct:1, explain:"Proverbs is a collection of short, practical wisdom sayings." },
        { q:"According to Proverbs, what does pride come before?", opts:["A blessing", "A fall or destruction", "A reward", "Wisdom"], correct:1, explain:"\u201cPride goeth before destruction\u201d warns against arrogance." },
        { q:"Which book explores the suffering of a righteous man tested by hardship?", opts:["Job", "Ruth", "Esther", "Jonah"], correct:0, explain:"Job's story wrestles with why bad things happen to a faithful person." },
        { q:"Proverbs describes wisdom as more valuable than what?", opts:["Rubies or gold", "Land", "Cattle", "Servants"], correct:0, explain:"Wisdom is repeatedly held up as more precious than any material wealth." },
        { q:"According to Proverbs, what turns away wrath?", opts:["A gentle answer", "Silence", "Running away", "Money"], correct:0, explain:"\u201cA gentle answer turns away wrath, but a harsh word stirs up anger.\u201d" }
      ] },
    { id:'nt_basics_easy', title:'New Testament Basics', tier:'Easy', type:'multiple', icon:'\u2721\ufe0f', cost:20,
      intro:{ ref:'Mark 1:1', verse:'The beginning of the gospel of Jesus Christ, the Son of God.', note:'A friendly starting point covering the biggest, most familiar names and events in the New Testament.' },
      questions: [
        { q:"What are the first four books of the New Testament called?", opts:["The Epistles", "The Gospels", "The Prophecies", "The Psalms"], correct:1, explain:"Matthew, Mark, Luke, and John are known as the four Gospels." },
        { q:"Which book tells the story of the early church after Jesus?", opts:["Acts", "Romans", "Revelation", "Hebrews"], correct:0, explain:"Acts follows the apostles as the church spreads after Jesus' ascension." },
        { q:"Who baptized Jesus?", opts:["Peter", "John the Baptist", "Paul", "Andrew"], correct:1, explain:"John the Baptist baptized Jesus in the Jordan River." },
        { q:"Which apostle denied knowing Jesus three times?", opts:["Peter", "John", "James", "Thomas"], correct:0, explain:"Peter denied Jesus three times before the rooster crowed, just as Jesus predicted." },
        { q:"Who is traditionally credited with writing the most New Testament letters?", opts:["Peter", "Paul", "John", "James"], correct:1, explain:"Paul wrote roughly half of the New Testament's books as letters to churches." },
        { q:"On what day of the week did Jesus rise from the dead?", opts:["Friday", "Saturday", "Sunday", "Monday"], correct:2, explain:"The resurrection on Sunday is why Christians have historically gathered for worship on that day." }
      ] },
    { id:'women_medium', title:'Women of the Bible', tier:'Medium', type:'multiple', icon:'\ud83d\udc51', cost:35,
      intro:{ ref:'Proverbs 31:30', verse:'A woman who fears the LORD is to be praised.', note:'From queens to prophets to ordinary mothers, these women shaped the story in ways worth knowing well.' },
      questions: [
        { q:"Which woman hid two Israelite spies in Jericho and was spared when the city fell?", opts:["Rahab", "Deborah", "Jael", "Ruth"], correct:0, explain:"Rahab's faith and courage are later celebrated in Hebrews 11 and James 2." },
        { q:"Who was the only female judge of Israel, leading the nation to victory over a Canaanite army?", opts:["Miriam", "Deborah", "Huldah", "Abigail"], correct:1, explain:"Deborah judged Israel and led alongside the military commander Barak." },
        { q:"Which queen risked her life by approaching the king unsummoned to save her people from genocide?", opts:["Esther", "Bathsheba", "Vashti", "Jezebel"], correct:0, explain:"Esther's courage \u2014 \u2018if I perish, I perish\u2019 \u2014 saved the Jewish people in Persia." },
        { q:"Who was Naomi's loyal Moabite daughter-in-law who became King David's great-grandmother?", opts:["Orpah", "Ruth", "Leah", "Tamar"], correct:1, explain:"Ruth's line runs directly to David, and ultimately to Jesus." },
        { q:"Which sister of Moses watched over him as a baby in the Nile and later led Israel in a song of victory?", opts:["Miriam", "Deborah", "Zipporah", "Rebekah"], correct:0, explain:"Miriam appears at both the beginning and a major turning point of the Exodus story." },
        { q:"Which woman anointed Jesus' feet with expensive perfume and wiped them with her hair?", opts:["Martha", "Mary Magdalene", "A sinful woman in Simon's house (and separately, Mary of Bethany)", "Joanna"], correct:2, explain:"Two different Gospel accounts describe women anointing Jesus' feet this way, at different times." }
      ] },
    { id:'letters_hard', title:'Letters of Paul', tier:'Hard', type:'multiple', icon:'\u2709\ufe0f', cost:50,
      intro:{ ref:'2 Peter 3:15\u201316', verse:'Our beloved brother Paul also wrote to you\u2026 There are some things in them that are hard to understand.', note:'Paul wrote roughly half the New Testament \u2014 this test digs into the specifics of what, where, and to whom.' },
      questions: [
        { q:"Which of Paul's letters was written to defend the gospel against teachers requiring circumcision and law-keeping for salvation?", opts:["Romans", "Galatians", "Ephesians", "Colossians"], correct:1, explain:"Galatians is Paul's sharpest defense of salvation by faith alone, apart from the works of the law." },
        { q:"From which city was Paul writing when he wrote Philippians, Ephesians, Colossians, and Philemon \u2014 the so-called \u2018prison epistles\u2019?", opts:["Corinth", "Rome", "Ephesus", "Athens"], correct:1, explain:"Paul wrote these four letters under house arrest in Rome, awaiting trial before Caesar." },
        { q:"In which letter does Paul confront a church for tolerating a man in an incestuous relationship and quarreling over which teacher they followed?", opts:["1 Corinthians", "Galatians", "1 Timothy", "Titus"], correct:0, explain:"1 Corinthians addresses a church with real spiritual gifts and real dysfunction." },
        { q:"Which letter contains Paul's personal appeal for a runaway slave named Onesimus?", opts:["Titus", "Philemon", "2 Timothy", "1 Thessalonians"], correct:1, explain:"Paul asked Philemon to receive Onesimus back \u2018no longer as a slave, but as a dear brother.\u2019" },
        { q:"Which letter was written to correct the false belief that the day of the Lord had already come, causing some believers to stop working?", opts:["1 Thessalonians", "2 Thessalonians", "1 Timothy", "Titus"], correct:1, explain:"Paul insisted that anticipating Christ's return should produce diligence, not idleness." },
        { q:"In which letter does Paul write \u2018I have learned, in whatsoever state I am, therewith to be content\u2019?", opts:["Philippians", "Colossians", "1 Timothy", "Ephesians"], correct:0, explain:"Written from prison, Philippians is Paul's letter most focused on joy and contentment." }
      ] },
    { id:'verse_fill_2', title:'Complete the Verse II', tier:'Hard', type:'fill', icon:'\ud83d\udcd6', cost:30,
      intro:{ ref:'Colossians 3:16', verse:'Let the word of Christ dwell in you richly.', note:'A tougher round \u2014 these verses are well-loved but less universally memorized word-for-word.' },
      questions: [
        { text:"\u201cThis is the day that the Lord has made; we will rejoice and be glad in ___.\u201d", ref:"Psalm 118:24", answer:"it", explain:"A verse often used to greet each new day with gratitude." },
        { text:"\u201cAsk, and it will be given to you; seek, and you will ___.\u201d", ref:"Matthew 7:7", answer:"find", explain:"Jesus taught persistence in prayer using this pattern of ask, seek, knock." },
        { text:"\u201cLove is patient, love is ___.\u201d", ref:"1 Corinthians 13:4", answer:"kind", explain:"Paul's famous chapter on love \u2014 one of the most quoted passages at weddings." },
        { text:"\u201cBut those who wait on the Lord shall renew their ___.\u201d", ref:"Isaiah 40:31", answer:"strength", explain:"A promise of renewed energy for those who wait on God rather than rush ahead." },
        { text:"\u201cAnd we know that in all things God works for the good of those who love him, who have been called according to his ___.\u201d", ref:"Romans 8:28", answer:"purpose", explain:"A verse often quoted without its full, careful wording about God's purpose specifically." },
        { text:"\u201cThe LORD is my strength and my shield; my heart trusts in him, and he helps me; my heart exults, and with my song I give ___ to him.\u201d", ref:"Psalm 28:7", answer:"thanks", explain:"A less-quoted psalm verse that rewards close, careful reading." }
      ] },
    { id:'bible_iq', title:'Bible IQ Challenge', tier:'Hard', type:'multiple', icon:'\ud83e\udde0', cost:60,
      intro:{ ref:'Proverbs 25:2', verse:'It is the glory of God to conceal things, but the glory of kings is to search things out.', note:'The hardest test in the app \u2014 obscure details, minor figures, and questions that reward real Bible reading.' },
      questions: [
        { q:"What is commonly cited as the shortest verse in the Bible?", opts:["\u201cJesus wept\u201d", "\u201cIn the beginning\u201d", "\u201cThe Lord is my shepherd\u201d", "\u201cLet there be light\u201d"], correct:0, explain:"John 11:35, just two words in most English translations." },
        { q:"Which Old Testament figure interpreted dreams for Pharaoh?", opts:["Daniel", "Joseph", "Moses", "Solomon"], correct:1, explain:"Joseph's gift for interpreting dreams led to his rise in Egypt." },
        { q:"Which short New Testament letter is a personal appeal about a runaway slave?", opts:["Philemon", "Titus", "Jude", "3 John"], correct:0, explain:"Paul wrote Philemon on behalf of Onesimus, appealing for mercy and reconciliation." },
        { q:"Which disciple is remembered as \u201cdoubting\u201d for questioning Jesus' resurrection?", opts:["Thomas", "Philip", "Bartholomew", "Matthew"], correct:0, explain:"Thomas wanted to see and touch Jesus' wounds before he'd believe." },
        { q:"What was the final plague that convinced Pharaoh to free Israel?", opts:["Locusts", "Darkness", "Death of the firstborn", "Hail"], correct:2, explain:"This tenth and final plague broke Pharaoh's resistance for good." },
        { q:"Which obscure figure blessed Abraham and received a tithe from him, later used in Hebrews to argue for Christ's priesthood?", opts:["Melchizedek", "Lot", "Eliezer", "Jethro"], correct:0, explain:"This mysterious priest-king appears briefly in Genesis 14 and becomes central to the argument of Hebrews 7." },
        { q:"Which prophet's book ends the Old Testament by promising a messenger like Elijah before four centuries of prophetic silence?", opts:["Zechariah", "Malachi", "Haggai", "Micah"], correct:1, explain:"Malachi's closing words set up the long wait that ends with John the Baptist." },
        { q:"Which New Testament book is traditionally the only one attributed to a physician?", opts:["Luke", "Mark", "James", "Jude"], correct:0, explain:"Luke, described by Paul as \u2018the beloved physician,\u2019 wrote both Luke and Acts." }
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

  function dailyTests(){
    const seed = dayOfYear();
    const pool = TESTS.slice();
    // deterministic shuffle based on today's seed
    for (let i = pool.length - 1; i > 0; i--) {
      const j = (seed * 9301 + i * 49297) % (i + 1);
      const tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
    }
    return pool.slice(0, 6);
  }

  function msUntilMidnight(){
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    return midnight - now;
  }

  function formatCountdown(ms){
    if (ms < 0) ms = 0;
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const pad = n => String(n).padStart(2, '0');
    return pad(h) + ':' + pad(m) + ':' + pad(s);
  }

  const WORD_BANK = [
    { word:'FAITH', clue:'Trusting God without seeing the full picture' },
    { word:'GRACE', clue:'Unearned favor \u2014 a gift, not a wage' },
    { word:'MERCY', clue:'Not receiving the punishment that was deserved' },
    { word:'PEACE', clue:'What Christ gives that the world can\u2019t' },
    { word:'TRUTH', clue:'What sets people free, according to John 8' },
    { word:'HONOR', clue:'What the fifth commandment asks children to give parents' },
    { word:'DAVID', clue:'The shepherd boy who became Israel\u2019s greatest king' },
    { word:'MOSES', clue:'Led Israel out of slavery in Egypt' },
    { word:'ANGEL', clue:'A heavenly messenger \u2014 often the first words are \u2018do not be afraid\u2019' },
    { word:'CROSS', clue:'Where Jesus said \u2018it is finished\u2019' },
    { word:'BREAD', clue:'What fell from heaven each morning in the wilderness' },
    { word:'BLESS', clue:'What Jacob wrestled all night to receive' },
    { word:'PRIDE', clue:'What goes before a fall or destruction, per Proverbs' },
    { word:'JUDGE', clue:'A leader like Deborah or Gideon, before Israel had a king' },
    { word:'THORN', clue:'Paul\u2019s unnamed, unremoved affliction \u2014 \u2018in the flesh\u2019' },
    { word:'SAINT', clue:'Paul\u2019s common address for ordinary believers' },
    { word:'ALTAR', clue:'Where Abraham raised the knife over Isaac' },
    { word:'TRIBE', clue:'Israel was divided into twelve of these' },
    { word:'GLORY', clue:'What filled the temple so the priests couldn\u2019t enter' },
    { word:'MANNA', clue:'Bread from heaven, gathered fresh every morning' },
    { word:'EAGLE', clue:'The bird whose wings picture renewed strength in Isaiah 40' },
    { word:'EXILE', clue:'Seventy years away from home, promised by Jeremiah' },
    { word:'WOMAN', clue:'Found the lost coin after lighting a lamp and sweeping the house' },
    { word:'ELDER', clue:'A church leader Paul told Timothy and Titus to appoint' },
    { word:'DEMON', clue:'What Jesus cast out with a word, again and again' },
    { word:'HEART', clue:'Above all else, guard this \u2014 Proverbs 4:23' },
    { word:'SOWER', clue:'Scattered seed on four kinds of soil in a famous parable' },
    { word:'VOICE', clue:'Elijah heard God in a still, small one of these' },
    { word:'SHEEP', clue:'What the Good Shepherd leaves ninety-nine of to find one' },
    { word:'TITHE', clue:'A tenth, given back to God' },
    { word:'PSALM', clue:'A song or prayer \u2014 there are 150 of them' },
    { word:'ROYAL', clue:'A priesthood believers are called, in 1 Peter 2:9' },
    { word:'SPIES', clue:'Twelve were sent into Canaan; only two came back with a good report' },
    { word:'GIANT', clue:'Goliath, standing over nine feet tall' },
    { word:'TOWER', clue:'Built at Babel, reaching toward the heavens' },
    { word:'FLOOD', clue:'Covered the earth for forty days and nights' },
    { word:'SWORD', clue:'What God\u2019s word is compared to \u2014 sharper than any double-edged one' },
    { word:'ROBES', clue:'Washed white in the blood of the Lamb, in Revelation 7' },
    { word:'STONE', clue:'What David chose five smooth ones of, from a stream' },
    { word:'WATER', clue:'Turned to wine at a wedding in Cana' },
    { word:'LIGHT', clue:'What Jesus called Himself \u2014 \u2018of the world\u2019' },
    { word:'TEARS', clue:'What God promises to wipe away in the new creation' },
    { word:'EARTH', clue:'What the meek will inherit, per the Beatitudes' },
    { word:'CHILD', clue:'\u2018Unless you become like one, you won\u2019t enter the kingdom\u2019' },
    { word:'BABEL', clue:'Where languages were confused and people scattered' },
    { word:'JACOB', clue:'Wrestled with God and came away limping, renamed Israel' },
    { word:'ISAAC', clue:'The promised son, nearly offered on Mount Moriah' },
    { word:'JONAH', clue:'Ran from God\u2019s call and ended up inside a great fish' },
    { word:'JAMES', clue:'Wrote that faith without works is dead' },
    { word:'SIMON', clue:'Peter\u2019s other name, before Jesus renamed him \u2018the rock\u2019' },
    { word:'PETER', clue:'Denied Jesus three times, then was restored over breakfast' },
    { word:'JUDAS', clue:'Betrayed Jesus for thirty pieces of silver' },
    { word:'HEROD', clue:'The king who tried to kill the infant Jesus' },
{ word:'ABIDE', clue:'What Jesus asks branches to do with the vine' },
{ word:'ADORE', clue:'What the wise men did when they found Him' },
{ word:'AMENS', clue:'What a congregation says at the end of prayers' },
{ word:'ANGST', clue:'What Jesus felt in Gethsemane, in modern terms' },
{ word:'ARISE', clue:'What Jesus told Jairus\u2019 daughter to do' },
{ word:'ATONE', clue:'To make amends \u2014 the whole point of the Day of Atonement' },
{ word:'BEAST', clue:'Rises from the sea in Revelation 13' },
{ word:'BLOOD', clue:'What the doorposts were painted with at Passover' },
{ word:'BOAST', clue:'Paul says the cross leaves no room for this' },
{ word:'BRIDE', clue:'What the church is called in Revelation' },
{ word:'CAMEL', clue:'Easier for this to go through a needle\u2019s eye' },
{ word:'CHAFF', clue:'What the wind blows away in Psalm 1' },
{ word:'CHIEF', clue:'Paul called himself this \u2014 of sinners' },
{ word:'CROWN', clue:'Made of thorns, then promised in glory' },
{ word:'CRUSH', clue:'What the serpent\u2019s head would suffer, per Genesis 3' },
{ word:'CUBIT', clue:'The measurement Noah built the ark in' },
{ word:'CURSE', clue:'Removed at last in Revelation 22' },
{ word:'DEATH', clue:'Where is your sting? \u2014 1 Corinthians 15' },
{ word:'DEBTS', clue:'Forgive us ours, as we forgive our debtors' },
{ word:'DOUBT', clue:'Thomas is famous for it, and Jude says be merciful to those who have it' },
{ word:'DOVES', clue:'Be as wise as serpents and innocent as these' },
{ word:'DWELL', clue:'What God does among His people in Revelation 21' },
{ word:'EDICT', clue:'Cyrus issued one that ends the Hebrew Bible' },
{ word:'ENEMY', clue:'Jesus said love yours' },
{ word:'EXALT', clue:'Humble yourself and God will do this in due time' },
{ word:'FAVOR', clue:'Mary was told she had found this with God' },
{ word:'FEAST', clue:'The wedding supper of the Lamb' },
{ word:'FIELD', clue:'Where Ruth gleaned, and where treasure was hidden in a parable' },
{ word:'FLESH', clue:'The Word became this, in John 1' },
{ word:'FLOCK', clue:'Peter was told to shepherd God\u2019s' },
{ word:'FRUIT', clue:'Of the Spirit: love, joy, peace, and six more' },
{ word:'GIFTS', clue:'Different kinds, same Spirit \u2014 1 Corinthians 12' },
{ word:'GRAIN', clue:'Unless it falls to the ground and dies, it remains alone' },
{ word:'GRAVE', clue:'It could not hold Him' },
{ word:'GUARD', clue:'What God\u2019s peace does to your heart and mind' },
{ word:'GUIDE', clue:'The Spirit does this into all truth' },
{ word:'HARPS', clue:'Instruments played before the throne in Revelation' },
{ word:'HASTE', clue:'The shepherds went to Bethlehem with this' },
{ word:'HEALS', clue:'What He does to the brokenhearted' },
{ word:'HONEY', clue:'The land flowed with milk and this' },
{ word:'HOSTS', clue:'The LORD of \u2014 a title meaning armies' },
{ word:'IDOLS', clue:'What Paul was distressed to see filling Athens' },
{ word:'JUDAH', clue:'The tribe the Lion belongs to' },
{ word:'LAMBS', clue:'Feed my \u2014 Jesus to Peter on the beach' },
{ word:'LEAST', clue:'Whatever you did for the \u2018of these\u2019, you did for me' },
{ word:'MIDST', clue:'Where two or three gather, He is in the \u2014' },
{ word:'MOUNT', clue:'Sinai, Carmel, and the Sermon all happened on one' },
{ word:'NAOMI', clue:'Ruth\u2019s mother-in-law who asked to be called Mara' },
{ word:'OLIVE', clue:'The tree Paul uses to picture Jews and Gentiles grafted together' },
{ word:'PALMS', clue:'Waved on the road into Jerusalem' },
{ word:'PEARL', clue:'Of great price \u2014 a man sold everything for it' },
{ word:'PLANS', clue:'\u2018I know the ___ I have for you\u2019 \u2014 Jeremiah 29:11' },
{ word:'POWER', clue:'Made perfect in weakness' },
{ word:'QUAIL', clue:'Fell on the camp when Israel complained about manna' },
{ word:'RAISE', clue:'What He did to Lazarus after four days' },
{ word:'REIGN', clue:'What the saints will do forever and ever' },
{ word:'RESTS', clue:'What the seventh day is for' },
{ word:'RIVER', clue:'Flows from the throne in Revelation 22' },
{ word:'ROCKS', clue:'If the people stay silent, these will cry out' },
{ word:'SALTY', clue:'You are the salt of the earth \u2014 don\u2019t lose this' },
{ word:'SAVED', clue:'By grace, through faith \u2014 Ephesians 2:8' },
{ word:'SCALE', clue:'Fell from Saul\u2019s eyes when Ananias prayed' },
{ word:'SEEDS', clue:'The sower scattered them on four kinds of soil' },
{ word:'SERVE', clue:'The Son of Man came not to be served but to \u2014' },
{ word:'SHAME', clue:'Jesus endured the cross, scorning its \u2014' },
{ word:'SHINE', clue:'Let your light do this before others' },
{ word:'SINAI', clue:'The mountain where the Law was given' },
{ word:'SLAIN', clue:'The Lamb looked as if it had been \u2014' },
{ word:'SOWED', clue:'What the farmer did in the parable' },
{ word:'SPEAK', clue:'Be slow to do this, says James' },
{ word:'STAFF', clue:'Your rod and your \u2014 comfort me' },
{ word:'STARS', clue:'Abraham was told to count them' },
{ word:'STORM', clue:'Jesus slept through one, then told it to be still' },
{ word:'STRAW', clue:'What Pharaoh stopped providing for the bricks' },
{ word:'SWINE', clue:'What the prodigal son ended up feeding' },
{ word:'TABLE', clue:'You prepare one before me in the presence of my enemies' },
{ word:'TEACH', clue:'Go and make disciples, baptizing and doing this' },
{ word:'TEMPT', clue:'What happened to Jesus for forty days in the wilderness' },
{ word:'TOMBS', clue:'Jesus called the Pharisees whitewashed ones' },
{ word:'TRIAL', clue:'Consider it pure joy when you face many kinds \u2014 James 1' },
{ word:'TRUST', clue:'In the LORD with all your heart' },
{ word:'VINES', clue:'I am the true one; you are the branches' },
{ word:'WAGES', clue:'Of sin is death \u2014 Romans 6:23' },
{ word:'WATCH', clue:'Could you not do this with me one hour?' },
{ word:'WEARY', clue:'Come to me, all who are \u2014 and burdened' },
{ word:'WHEAT', clue:'Separated from the weeds at the harvest' },
{ word:'WIDOW', clue:'Gave two small coins \u2014 more than all the rest' },
{ word:'WORDS', clue:'Heaven and earth will pass away, but mine will not' },
{ word:'WORKS', clue:'Faith without them is dead' },
{ word:'WORLD', clue:'For God so loved the \u2014' },
{ word:'WOUND', clue:'By His stripes we are healed of them' },
{ word:'YEAST', clue:'A little works through the whole batch of dough' },
{ word:'YOKES', clue:'Mine is easy and my burden is light' }
  ];

  function todaysWord(){
    return WORD_BANK[dayOfYear() % WORD_BANK.length];
  }

  function evaluateGuess(guess, target){
    const result = new Array(5).fill('gray');
    const targetLetters = target.split('');
    const guessLetters = guess.split('');
    const used = new Array(5).fill(false);
    for (let i = 0; i < 5; i++) {
      if (guessLetters[i] === targetLetters[i]) { result[i] = 'green'; used[i] = true; }
    }
    for (let i = 0; i < 5; i++) {
      if (result[i] === 'green') continue;
      let found = -1;
      for (let j = 0; j < 5; j++) {
        if (!used[j] && targetLetters[j] === guessLetters[i]) { found = j; break; }
      }
      if (found !== -1) { result[i] = 'yellow'; used[found] = true; }
    }
    return result;
  }

  function keyboardStates(guesses, target){
    const rank = { gray:0, yellow:1, green:2 };
    const states = {};
    guesses.forEach(g => {
      const res = evaluateGuess(g, target);
      for (let i = 0; i < 5; i++) {
        const letter = g[i];
        if (!states[letter] || rank[res[i]] > rank[states[letter]]) states[letter] = res[i];
      }
    });
    return states;
  }

  const KEYBOARD_ROWS = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L'],
    ['ENTER','Z','X','C','V','B','N','M','BACK']
  ];

  const AVATAR_OPTIONS = ['\ud83d\udcd6', '\u271d\ufe0f', '\ud83d\udd4a\ufe0f', '\ud83d\udc11', '\ud83d\udc1f', '\u26f0\ufe0f', '\ud83d\ude4f', '\ud83c\udf3f', '\ud83d\udd2f', '\ud83d\udcff', '\ud83d\udd4c', '\u26ea\ufe0f', '\ud83c\udf87', '\u2728', '\ud83c\udf1f', '\ud83d\udcab', '\ud83c\udf1e', '\ud83c\udf19', '\u2600\ufe0f', '\ud83c\udf08', '\ud83c\udf33', '\ud83c\udf32', '\ud83c\udf35', '\ud83c\udf40', '\ud83c\udf3b', '\ud83c\udf37', '\ud83c\udf38', '\ud83c\udf3a', '\ud83c\udf3c', '\ud83c\udf44', '\ud83c\udf0a', '\ud83d\udd25', '\u2744\ufe0f', '\u26a1', '\ud83c\udf0d', '\ud83c\udf0b', '\ud83c\udfde\ufe0f', '\ud83c\udfd6\ufe0f', '\ud83c\udf04', '\ud83c\udf05', '\ud83e\udd81', '\ud83e\udd85', '\ud83d\udc0e', '\ud83d\udc2a', '\ud83e\udd98', '\ud83e\udd8c', '\ud83d\udc07', '\ud83d\udc36', '\ud83d\udc31', '\ud83e\udd8a', '\ud83d\udc3b', '\ud83d\udc2f', '\ud83d\udc38', '\ud83d\udc19', '\ud83d\udc20', '\ud83d\udc1d', '\ud83e\udd8b', '\ud83d\udc1e', '\ud83d\udc22', '\ud83d\ude42', '\ud83d\ude0a', '\ud83d\ude0c', '\ud83e\udd29', '\ud83e\udd13', '\ud83e\uddd1', '\ud83d\udc68', '\ud83d\udc69', '\ud83e\uddd2', '\ud83d\udc74', '\ud83d\udc75', '\ud83e\uddd4', '\ud83d\udc71', '\ud83e\udd34', '\ud83d\udc78', '\ud83e\uddb8', '\ud83e\uddd9', '\ud83e\uddda', '\ud83d\udc7c', '\ud83d\ude07', '\ud83c\udfb5', '\ud83c\udfb8', '\ud83c\udfba', '\ud83e\udd41', '\ud83c\udfa8', '\ud83d\udd8c\ufe0f', '\u270f\ufe0f', '\ud83d\udcdd', '\ud83d\udcda', '\ud83d\udcdc', '\ud83d\udddd\ufe0f', '\u2693\ufe0f', '\ud83c\udfc6', '\ud83c\udfc5', '\ud83c\udf96\ufe0f', '\ud83d\udc51', '\ud83d\udc8e', '\ud83d\udd2e', '\ud83e\udded', '\u23f3\ufe0f', '\ud83c\udf5e', '\ud83c\udf47', '\ud83c\udf3e', '\ud83c\udf6f', '\ud83c\udf75', '\u2615\ufe0f', '\ud83c\udf82', '\ud83c\udf4e', '\ud83c\udf4a', '\u2764\ufe0f', '\ud83e\udde1', '\ud83d\udc9b', '\ud83d\udc9a', '\ud83d\udc99', '\ud83d\udc9c', '\ud83d\udda4\ufe0f', '\ud83e\udd0d', '\ud83e\udd0e', '\ud83d\udc95', '\ud83d\udd4e', '\u2721\ufe0f', '\u262e\ufe0f', '\u26f5\ufe0f', '\ud83d\udee1\ufe0f', '\ud83d\uddfa\ufe0f', '\ud83c\udfaf', '\ud83d\udd11', '\ud83c\udfb2', '\ud83d\ude80'];
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


  const CHECKPOINTS = window.STF_CHECKPOINTS || {};
  const DEEP_STUDIES = window.STF_DEEP_STUDIES || {};

  const NEW_TESTAMENT = ["Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"];

  const TORAH = ["Genesis","Exodus","Leviticus","Numbers","Deuteronomy"];
  const GOSPELS = ["Matthew","Mark","Luke","John"];

  const TROPHIES = [
    { id:'first_steps', icon:'\ud83d\udc63', title:'First Steps', desc:'Complete your first lesson', check: s => s.completed.length >= 1 },
    { id:'ten_lessons', icon:'\ud83d\udcda', title:'Getting Rooted', desc:'Complete 10 lessons', check: s => s.completed.length >= 10 },
    { id:'fifty_lessons', icon:'\ud83c\udf33', title:'Deeply Rooted', desc:'Complete 50 lessons', check: s => s.completed.length >= 50 },
    { id:'hundred_lessons', icon:'\ud83c\udfdb\ufe0f', title:'Pillar of the Word', desc:'Complete 100 lessons', check: s => s.completed.length >= 100 },
    { id:'torah', icon:'\ud83d\udcdc', title:'Torah Complete', desc:'Finish Genesis through Deuteronomy', check: s => TORAH.every(b => LESSONS.filter(l => l.book === b).every(l => s.completed.includes(l.id))) },
    { id:'gospels', icon:'\u271d\ufe0f', title:'The Four Gospels', desc:'Finish Matthew, Mark, Luke, and John', check: s => GOSPELS.every(b => LESSONS.filter(l => l.book === b).every(l => s.completed.includes(l.id))) },
    { id:'old_testament', icon:'\ud83d\udd4a\ufe0f', title:'Old Testament Finished', desc:'Complete every Old Testament book', check: s => LESSONS.filter(l => !NEW_TESTAMENT.includes(l.book)).every(l => s.completed.includes(l.id)) },
    { id:'new_testament', icon:'\ud83d\udd77\ufe0f', title:'New Testament Finished', desc:'Complete every New Testament book', check: s => LESSONS.filter(l => NEW_TESTAMENT.includes(l.book)).every(l => s.completed.includes(l.id)) },
    { id:'whole_bible', icon:'\ud83d\udc51', title:'Genesis to Revelation', desc:'Complete the entire Bible', check: s => LESSONS.every(l => s.completed.includes(l.id)) },
    { id:'streak_7', icon:'\ud83d\udd25', title:'One Week Strong', desc:'Reach a 7-day streak', check: s => s.dailyStreak >= 7 },
    { id:'streak_30', icon:'\ud83d\udd25', title:'One Month Faithful', desc:'Reach a 30-day streak', check: s => s.dailyStreak >= 30 },
    { id:'streak_100', icon:'\ud83d\udd25', title:'Unshakeable', desc:'Reach a 100-day streak', check: s => s.dailyStreak >= 100 },
    { id:'quiz_perfect', icon:'\ud83e\udde0', title:'Quiz Master', desc:'Score a perfect result on any test', check: s => TESTS.some(t => (s.testBest[t.id] || 0) >= t.questions.length) },
    { id:'wordle_win', icon:'\ud83d\udcac', title:'Word Sleuth', desc:'Solve the Word of the Day', check: s => (s.wordleWins || 0) >= 1 },
    { id:'checkpoints_5', icon:'\ud83d\udcd6', title:'Checking In', desc:'Pass 5 book checkpoints', check: s => s.completedCheckpoints.length >= 5 },
    { id:'reflections_5', icon:'\ud83d\udcdd', title:'Reflective Heart', desc:'Write 5 personal reflections', check: s => s.reflections.length >= 5 }
  ];

  const DEFAULT_VERSE = 'Be strong and courageous \u2014 Joshua 1:9';

  const READING_PLANS = [
    {
      id:'gospels_30',
      icon:'\u271d\ufe0f',
      title:'The Life of Jesus',
      length:30,
      blurb:'Thirty days walking through the four Gospels \u2014 birth, ministry, cross, and resurrection.',
      books:['Matthew','Mark','Luke','John']
    },
    {
      id:'foundations_14',
      icon:'\ud83e\uddf1',
      title:'Foundations',
      length:14,
      blurb:'Two weeks on the essentials \u2014 creation, the fall, the promise, and the rescue. Best place to start if you\u2019re new.',
      lessonRefs:[
        ['Genesis', 0], ['Genesis', 1], ['Genesis', 2], ['Genesis', 3],
        ['Exodus', 0], ['Exodus', 2],
        ['Psalms', 1], ['Isaiah', 8],
        ['Luke', 2], ['John', 0], ['John', 2],
        ['Romans', 1], ['Romans', 4], ['Ephesians', 1]
      ]
    },
    {
      id:'wisdom_21',
      icon:'\ud83e\udd89',
      title:'Wisdom for Daily Life',
      length:21,
      blurb:'Three weeks in Proverbs, Ecclesiastes, and James \u2014 practical, blunt, and immediately usable.',
      books:['Proverbs','Ecclesiastes','James']
    },
    {
      id:'psalms_30',
      icon:'\ud83c\udfb5',
      title:'Prayers for Every Season',
      length:30,
      blurb:'A month in the Psalms \u2014 joy, grief, doubt, and praise, all given words.',
      books:['Psalms','Lamentations']
    },
    {
      id:'nt_60',
      icon:'\ud83d\udcd6',
      title:'New Testament in 60 Days',
      length:60,
      blurb:'Two months covering the entire New Testament, Matthew through Revelation.',
      testament:'new'
    },
    {
      id:'ot_120',
      icon:'\ud83d\udcdc',
      title:'Old Testament Journey',
      length:120,
      blurb:'Four months through the whole Old Testament \u2014 the long story that sets up everything else.',
      testament:'old'
    },
    {
      id:'whole_bible',
      icon:'\ud83d\udc51',
      title:'The Whole Bible',
      length:180,
      blurb:'Genesis to Revelation, about three lessons a day for six months. The full journey.',
      testament:'all'
    },
    {
      id:'advent',
      icon:'\ud83c\udf1f',
      title:'Advent \u2014 Waiting for the King',
      length:24,
      blurb:'Twenty-four days from the prophets\u2019 promise to the manger. Built for December.',
      lessonRefs:[
        ['Isaiah', 2], ['Isaiah', 8], ['Micah', 1], ['Malachi', 2],
        ['Luke', 0], ['Luke', 1], ['Luke', 2],
        ['Matthew', 0], ['Matthew', 1], ['John', 0]
      ]
    }
  ];

  function planLessons(plan){
    if (plan.lessonRefs) {
      return plan.lessonRefs.map(([book, idx]) => {
        const inBook = LESSONS.filter(l => l.book === book);
        return inBook[idx] || inBook[0];
      }).filter(Boolean);
    }
    if (plan.books) {
      return LESSONS.filter(l => plan.books.includes(l.book));
    }
    if (plan.testament === 'new') return LESSONS.filter(l => NEW_TESTAMENT.includes(l.book));
    if (plan.testament === 'old') return LESSONS.filter(l => !NEW_TESTAMENT.includes(l.book));
    return LESSONS.slice();
  }

  function planDayLessons(plan, day){
    const all = planLessons(plan);
    const perDay = Math.max(1, Math.ceil(all.length / plan.length));
    const start = (day - 1) * perDay;
    return all.slice(start, start + perDay);
  }

  function planProgress(plan, state){
    const all = planLessons(plan);
    if (!all.length) return { done: 0, total: 0, pct: 0 };
    const done = all.filter(l => state.completed.includes(l.id)).length;
    return { done, total: all.length, pct: Math.round((done / all.length) * 100) };
  }

  const TIMELINE = [
    { era:'Beginnings', tint:'#8e6ad6', events:[
      { when:'In the beginning', title:'Creation', text:'God speaks the world into being and calls it good.', book:'Genesis' },
      { when:'Early days', title:'The fall', text:'Adam and Eve eat from the one forbidden tree, and everything fractures.', book:'Genesis' },
      { when:'Generations later', title:'The flood', text:'Noah builds an ark; the world is washed and started again.', book:'Genesis' },
      { when:'After the flood', title:'Babel', text:'A tower reaching for heaven ends in scattered languages.', book:'Genesis' }
    ]},
    { era:'The Patriarchs', tint:'#c98a34', approx:'c. 2000\u20131800 BC', events:[
      { when:'c. 2000 BC', title:'God calls Abram', text:'Leave your country. I will make you into a great nation.', book:'Genesis' },
      { when:'c. 1900 BC', title:'Isaac on the mountain', text:'Abraham raises the knife; God provides a ram instead.', book:'Genesis' },
      { when:'c. 1850 BC', title:'Jacob wrestles God', text:'He walks away limping, and renamed Israel.', book:'Genesis' },
      { when:'c. 1800 BC', title:'Joseph in Egypt', text:'Sold by his brothers, he rises to save them from famine.', book:'Genesis' }
    ]},
    { era:'Exodus & Wilderness', tint:'#c2452d', approx:'c. 1450\u20131400 BC', events:[
      { when:'c. 1450 BC', title:'The burning bush', text:'A shepherd is sent back to the empire he fled.', book:'Exodus' },
      { when:'c. 1446 BC', title:'Passover and the Red Sea', text:'Ten plagues, a night of blood on doorposts, and a sea split open.', book:'Exodus' },
      { when:'Weeks later', title:'Sinai', text:'God gives the Law to a people who have never been free before.', book:'Exodus' },
      { when:'40 years', title:'The wilderness', text:'A generation wanders; manna every morning.', book:'Numbers' }
    ]},
    { era:'Conquest & Judges', tint:'#3f7a4f', approx:'c. 1400\u20131050 BC', events:[
      { when:'c. 1400 BC', title:'Jericho falls', text:'Marching, trumpets, and a shout bring the walls down.', book:'Joshua' },
      { when:'c. 1350 BC', title:'The judges', text:'A cycle repeats: the people drift, an enemy rises, God sends a rescuer.', book:'Judges' },
      { when:'c. 1150 BC', title:'Gideon and Samson', text:'Unlikely deliverers with obvious flaws.', book:'Judges' },
      { when:'c. 1100 BC', title:'Ruth', text:'A Moabite widow\u2019s loyalty puts her in the line of David.', book:'Ruth' }
    ]},
    { era:'The Kings', tint:'#b8923e', approx:'c. 1050\u2013586 BC', events:[
      { when:'c. 1050 BC', title:'Israel demands a king', text:'Saul is anointed. Samuel warns them what it will cost.', book:'1 Samuel' },
      { when:'c. 1010 BC', title:'David', text:'A shepherd boy kills a giant and eventually takes the throne.', book:'2 Samuel' },
      { when:'c. 970 BC', title:'Solomon builds the temple', text:'Wisdom, gold, and a house for God \u2014 then a slow drift.', book:'1 Kings' },
      { when:'c. 930 BC', title:'The kingdom splits', text:'Rehoboam\u2019s arrogance breaks Israel into two.', book:'1 Kings' },
      { when:'c. 860 BC', title:'Elijah on Carmel', text:'Fire falls; 450 prophets of Baal are answered by silence.', book:'1 Kings' }
    ]},
    { era:'Prophets & Exile', tint:'#4a6d9e', approx:'c. 760\u2013539 BC', events:[
      { when:'c. 760 BC', title:'Amos, Hosea, Jonah', text:'Prophets confront a comfortable, unjust nation.', book:'Amos' },
      { when:'722 BC', title:'Israel falls to Assyria', text:'The northern kingdom is carried off and does not return.', book:'2 Kings' },
      { when:'c. 700 BC', title:'Isaiah', text:'Judgment and the promise of a suffering servant.', book:'Isaiah' },
      { when:'586 BC', title:'Jerusalem burns', text:'Babylon destroys the temple. Judah goes into exile.', book:'2 Kings' },
      { when:'c. 580 BC', title:'Ezekiel and Daniel', text:'Dry bones rise; a young exile refuses the king\u2019s table.', book:'Daniel' }
    ]},
    { era:'Return & Silence', tint:'#7a6a9e', approx:'539\u20135 BC', events:[
      { when:'539 BC', title:'Cyrus lets them go home', text:'The Hebrew Bible ends on an open door.', book:'2 Chronicles' },
      { when:'c. 516 BC', title:'The second temple', text:'Older men weep remembering the first one.', book:'Ezra' },
      { when:'c. 445 BC', title:'Nehemiah rebuilds the wall', text:'Fifty-two days, with a trowel in one hand.', book:'Nehemiah' },
      { when:'c. 430 BC', title:'Malachi', text:'The last prophet promises a messenger \u2014 then four centuries of quiet.', book:'Malachi' }
    ]},
    { era:'Jesus', tint:'#d4a03c', approx:'c. 5 BC \u2013 AD 30', events:[
      { when:'c. 5 BC', title:'Born in Bethlehem', text:'No room. Shepherds are the first told.', book:'Luke' },
      { when:'c. AD 27', title:'Baptism and temptation', text:'The Spirit descends; forty days in the wilderness follow.', book:'Matthew' },
      { when:'AD 27\u201330', title:'Ministry in Galilee', text:'Sermons, miracles, parables, and a widening circle.', book:'Mark' },
      { when:'c. AD 30', title:'The cross', text:'\u201cIt is finished.\u201d The curtain tears top to bottom.', book:'John' },
      { when:'Third day', title:'The resurrection', text:'The tomb is empty. Everything changes.', book:'John' }
    ]},
    { era:'The Church', tint:'#3f8f8a', approx:'AD 30\u201395', events:[
      { when:'c. AD 30', title:'Pentecost', text:'Wind, fire, and every language hearing one message.', book:'Acts' },
      { when:'c. AD 34', title:'The Damascus road', text:'The church\u2019s fiercest enemy becomes its greatest missionary.', book:'Acts' },
      { when:'AD 46\u201357', title:'Paul\u2019s journeys', text:'Churches planted across the Roman world, letters written to hold them.', book:'Romans' },
      { when:'c. AD 60', title:'Paul reaches Rome', text:'In chains, preaching unhindered.', book:'Acts' },
      { when:'c. AD 95', title:'Revelation', text:'An exile on Patmos sees the end \u2014 and a new beginning.', book:'Revelation' }
    ]}
  ];

  const TRACKS = [
    {
      id:'realfight',
      name:'The Real Fight',
      icon:'\u2694\ufe0f',
      tag:'For adults',
      blurb:'Honest, unflinching studies on what people actually wrestle with \u2014 the things that are hard to say out loud. Written without shame, and without pretending it\u2019s simple.',
      note:'Frank language and adult subject matter.',
      modules:[
        {
          id:'purity',
          title:'Purity & Desire',
          icon:'\ud83d\udd25',
          summary:'On lust, pornography, and wanting something real underneath the wanting.',
          lessons:[
            {
              id:'rf-p1',
              title:'Say it plainly',
              scripture:{ ref:'Psalm 32:3\u20135', text:'When I kept silent, my bones wasted away through my groaning all day long. For day and night your hand was heavy on me; my strength was sapped as in the heat of summer. Then I acknowledged my sin to you and did not cover up my iniquity. I said, \u201cI will confess my transgressions to the LORD.\u201d And you forgave the guilt of my sin.' },
              body:'Most people carrying this have never said it out loud to another human being. Not once. They\u2019ve prayed about it in the dark, promised God it was the last time, and then said nothing to anyone \u2014 for years.\n\nDavid describes what that costs, and he describes it physically. Bones wasting. Strength drained. He isn\u2019t being poetic about guilt; he\u2019s describing what silence does to a body over time. The exhaustion of managing a secret is its own separate weight, on top of the thing itself.\n\nNotice what actually breaks it. Not trying harder. Not a better filter or a stricter schedule. He acknowledged it and stopped covering it up. The relief in that psalm comes from the saying, not from the fixing.\n\nAnd notice what God does with it: forgives the guilt. Not a lecture. Not probation. Not a wait-and-see. The verse turns fast because that\u2019s how fast God moves when someone finally stops hiding.\n\nThere\u2019s a reason shame keeps this quiet. Shame\u2019s whole argument is that if anyone knew, you\u2019d be finished. But shame has never once made anyone free \u2014 it just makes them better at hiding, which makes the next time easier.',
              reflect:'What have you never said out loud to anyone? Not the whole story \u2014 just the first true sentence. What would it be?',
              prayer:'God, I\u2019ve been carrying this alone and it\u2019s wearing me down. I\u2019m not going to pretend anymore. You already know. I\u2019m saying it anyway.'
            },
            {
              id:'rf-p2',
              title:'What you\u2019re actually after',
              scripture:{ ref:'Jeremiah 2:13', text:'My people have committed two sins: They have forsaken me, the spring of living water, and have dug their own cisterns, broken cisterns that cannot hold water.' },
              body:'Jeremiah\u2019s image is worth sitting with. A spring is moving water \u2014 it keeps coming, you don\u2019t maintain it. A cistern is a pit you dig yourself to hold water you carry there. A broken cistern is worse: you do all the work of digging, all the work of hauling, and it drains out anyway. So you go back and haul more.\n\nThat is an unnervingly accurate description of a habit like this. The work of hiding it, the work of getting to it, the promise that this time it will satisfy \u2014 and then the drain, immediately, so that the wanting comes back exactly as it was.\n\nHere is what most teaching on this gets wrong. It treats the desire itself as the enemy. But God made desire, and Jeremiah\u2019s complaint isn\u2019t that the people are thirsty. Thirst is fine. Thirst is correct. The complaint is where they took it.\n\nSo the question worth asking isn\u2019t \u201cwhy am I like this?\u201d It\u2019s \u201cwhat am I actually thirsty for?\u201d Under most of it is something specific: to be wanted, to feel powerful, to not feel alone tonight, to stop feeling anything at all for twenty minutes. Those are real needs. Pornography is a broken cistern promising to meet them and structurally unable to.\n\nYou will not win this by wanting less. You win it by finally being honest about what you want, and taking that to the only place it can actually be met.',
              reflect:'Think about the last time you gave in. What was the day like? What were you feeling an hour before? What were you actually looking for?',
              prayer:'God, I keep going back to something that empties out every time. Show me what I\u2019m really thirsty for, and be that for me instead.'
            },
            {
              id:'rf-p3',
              title:'Why willpower keeps failing',
              scripture:{ ref:'Romans 7:15, 18\u201319, 24\u201325', text:'I do not understand what I do. For what I want to do I do not do, but what I hate I do\u2026 For I have the desire to do what is good, but I cannot carry it out. For I do not do the good I want to do, but the evil I do not want to do \u2014 this I keep on doing\u2026 What a wretched man I am! Who will rescue me from this body that is subject to death? Thanks be to God, who delivers me through Jesus Christ our Lord!' },
              body:'The apostle Paul wrote that. In the present tense. That should change how you read your own failures.\n\nHere\u2019s the part worth understanding: your brain is doing exactly what it was built to do. Every time you go to this, you get a chemical reward, and your brain files it as something that works \u2014 fast, reliable, no rejection risk. Repeat that enough and you build a groove. Stress arrives, and before you\u2019ve decided anything, the groove is already open.\n\nThat is not weak character. That is a nervous system doing its job with bad training data. And it explains why sheer resolve fails: you\u2019re trying to out-decide something that fires before deciding happens.\n\nPaul\u2019s cry \u2014 who will rescue me \u2014 is the right question because it\u2019s the honest one. He doesn\u2019t say who will help me try harder. He asks for rescue, which is what you ask for when you\u2019ve established you can\u2019t self-extract.\n\nAnd then, immediately, chapter 8: there is now no condemnation. Paul goes straight from describing failure to declaring no condemnation, with nothing in between about earning it back. Whatever you think God feels toward you in the aftermath, Paul put those two things back to back on purpose.\n\nSo stop building your strategy on willpower. It\u2019s the weakest tool you have. What actually rewires a groove is time, different inputs, other people knowing, and grace that doesn\u2019t evaporate when you fail \u2014 because a plan that collapses the first time you slip was never a plan.',
              reflect:'What does your inner voice say about you right after you fail? Now read Romans 8:1 again. Which one are you actually going to believe?',
              prayer:'God, I\u2019ve tried to beat this by force and I keep losing. I need rescue, not another promise from me. I\u2019m asking for it.'
            },
            {
              id:'rf-p4',
              title:'Bring in one person',
              scripture:{ ref:'James 5:16', text:'Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective.' },
              body:'This is the verse the church quietly skips. We\u2019re fine confessing to God \u2014 it\u2019s private, and nobody\u2019s face changes. James says confess to each other, and attaches healing to it.\n\nThere\u2019s a mechanism here, not just a rule. A secret has power in proportion to how hidden it is. The moment one other person knows, the thing shrinks. It stops being who you are and becomes something you\u2019re dealing with. People who beat this almost always describe the same turning point, and it\u2019s rarely a technique \u2014 it\u2019s the day somebody knew.\n\nBe careful who. This should be someone who is for you: another man if you\u2019re a man, another woman if you\u2019re a woman, someone who won\u2019t flinch and won\u2019t gossip. Not your girlfriend or boyfriend \u2014 that puts a weight on them they shouldn\u2019t carry. A pastor, a counselor, an older friend who has walked this.\n\nAnd say a real sentence. Not \u201cI\u2019ve been struggling lately.\u201d Something true: \u201cI look at porn, it\u2019s been years, and I want it to stop.\u201d Vagueness protects the secret. It\u2019s the thing shame lets you say so you can feel brave without actually being exposed.\n\nOne more thing, plainly: if this has a genuine grip \u2014 if it\u2019s escalating, eating hours, or you\u2019ve tried to stop many times and can\u2019t \u2014 talk to a counselor. That is not spiritual failure. Some things need a doctor and prayer, and God is not offended by you getting help. He\u2019s usually the one who sent it.',
              reflect:'Who is one person who could know? Not everyone \u2014 one. What\u2019s stopping you, and is that reason actually true?',
              prayer:'God, give me the nerve to tell one person. Put the right one in front of me, and don\u2019t let me talk myself out of it.'
            },
            {
              id:'rf-p5',
              title:'The next ten minutes',
              scripture:{ ref:'1 Corinthians 10:13', text:'No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.' },
              body:'Two things in this verse people miss.\n\nFirst: common to mankind. Whatever you\u2019ve convinced yourself is uniquely broken about you \u2014 it isn\u2019t. The isolation of thinking you\u2019re the only one is itself part of what keeps it going.\n\nSecond, and more useful: he will provide a way out. Singular. A way out. Not a general sense of divine support \u2014 an exit, in the moment, that you have to actually take. Which means part of your job is knowing where the door is before you need it.\n\nThe practical truth is that this is almost never won at the moment of temptation. It\u2019s won an hour earlier, in the decisions nobody sees. The urge tends to arrive at predictable times \u2014 late at night, alone, bored, stressed, after a rejection, after a drink. Those aren\u2019t random. They\u2019re a pattern, and a pattern can be planned against.\n\nSo be concrete. Where does it usually happen, and can you not be there? Phone out of the bedroom \u2014 the single most effective change most people make. Filters and accountability software on every device, set up by someone else so you can\u2019t quietly undo it at 1am. And a specific plan for the ten minutes when it hits: text the person who knows, leave the room, go outside, do push-ups until it passes. Urges peak and fall. Ten minutes of doing literally anything else is usually enough.\n\nNone of that is spiritual heroics. It\u2019s just taking the door God provided instead of standing next to it admiring how faithful He is.',
              reflect:'When does it usually happen \u2014 what time, where, after what feeling? Name the pattern, then name one physical change you\u2019ll make this week.',
              prayer:'God, show me the way out before I need it, and give me the guts to take it when I do.'
            },
            {
              id:'rf-p6',
              title:'When you fail again',
              scripture:{ ref:'Lamentations 3:22\u201323', text:'Because of the LORD\u2019s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.' },
              body:'You will fail again. Saying so isn\u2019t permission \u2014 it\u2019s planning. Because what you do in the hour after a slip decides more than the slip does.\n\nThe usual pattern goes: fail, feel disgusted, decide you\u2019re a fraud, pull back from God because you feel filthy, stop talking to the person who knows, isolate \u2014 and isolation is the exact condition the whole thing runs on. That spiral does more damage over a month than the original failure did in twenty minutes.\n\nLamentations was written by a man watching his city burn, sitting in genuine ruin. He isn\u2019t being cheerful. And from there he says the mercies are new every morning. Not new every time you\u2019ve earned a clean week. New every morning \u2014 on a schedule that has nothing to do with your performance.\n\nSo build the recovery in advance. Tell the person, same day, before you can convince yourself to hide it. Don\u2019t restart the count as if the last month meant nothing \u2014 it didn\u2019t. Ask what happened in the hours before, because there\u2019s information in it. And then keep the next thing you were going to do anyway; showing up to church or to prayer the day after a failure is one of the most defiant things you can do.\n\nProgress here almost never looks like a clean break. It looks like the gaps getting longer, the recovery getting faster, and the grip getting weaker \u2014 over months. Measure it that way and you\u2019ll see movement you\u2019d otherwise miss.\n\nAnd the aim was never just stopping. It\u2019s becoming someone whose desires point somewhere real \u2014 who can love an actual person, be fully present, and not be quietly managing a secret. That\u2019s the thing worth walking toward.',
              reflect:'What\u2019s your plan for the hour after the next slip? Write it now, while you\u2019re thinking clearly \u2014 you won\u2019t be then.',
              prayer:'God, tomorrow morning your mercy is new whether I win tonight or not. Help me get up instead of hiding. Keep pulling me forward.'
            }
          ]
        },
        {
          id:'substances',
          title:'Drinking & Numbing',
          icon:'\ud83c\udf7b',
          summary:'On alcohol, vaping, weed, and whatever else you reach for when you don\u2019t want to feel it.',
          lessons:[
            {
              id:'rf-s1',
              title:'What it\u2019s doing for you',
              scripture:{ ref:'Ephesians 5:18', text:'Do not get drunk on wine, which leads to debauchery. Instead, be filled with the Spirit.' },
              body:'Nobody starts because they want a problem. You started because it worked.\n\nIt took the edge off a week that was too much. It made a room full of people survivable. It let you stop replaying the conversation at 11pm and actually sleep. Whatever it did, it did it fast and it did it reliably, and that is exactly why it got its hooks in.\n\nSo let\u2019s not begin with whether it\u2019s allowed. Begin with what it\u2019s for.\n\nNotice how Paul phrases it. He doesn\u2019t say don\u2019t drink, full stop \u2014 and Scripture doesn\u2019t either; Jesus made wine at a wedding. Paul draws the line at drunk, and then he does something more interesting: he offers a substitute. Instead, be filled. He\u2019s not just closing a door, he\u2019s naming what you were reaching for.\n\nBecause that\u2019s the honest thing here. You\u2019re not chasing the taste. You\u2019re chasing a feeling \u2014 loose, unafraid, unbothered, not in your own head for a while. Those aren\u2019t evil desires. They\u2019re desires for peace, for courage, for rest. God is not opposed to you having any of those. He\u2019s opposed to the cheap version that charges interest.\n\nAnd it does charge interest. The dose creeps up. The reason list grows \u2014 it started with hard weeks and now includes ordinary Tuesdays. You do the mental math about whether anyone noticed. Somewhere in there it stopped being something you chose and became something you arrange your life around.\n\nBefore any of the fixing, just answer this one honestly: what is it actually doing for you? Not what does it cost. What does it give? You cannot replace something until you know what it was replacing.',
              reflect:'Finish this sentence without softening it: \u201cI drink / vape / smoke when I feel ______.\u201d What\u2019s the feeling underneath?',
              prayer:'God, I know what I reach for and I know why. Show me what I\u2019m actually looking for, and start filling that place yourself.'
            },
            {
              id:'rf-s2',
              title:'The lie of one more',
              scripture:{ ref:'Proverbs 23:35', text:'\u201cThey hit me,\u201d you will say, \u201cbut I\u2019m not hurt! They beat me, but I don\u2019t feel it! When will I wake up so I can find another drink?\u201d' },
              body:'Proverbs 23 is the most uncomfortably modern passage in the Bible. It describes bloodshot eyes, needless bruises, seeing strange things, being unable to remember \u2014 and then it ends with the line above, which is essentially a man surveying the damage and immediately planning the next round.\n\nWhat makes it land isn\u2019t the judgment. It\u2019s the accuracy. Whoever wrote it had watched this closely, or lived it.\n\nAnd notice the specific lie it names: I\u2019m not hurt. I don\u2019t feel it. That\u2019s not defiance, that\u2019s the whole mechanism. The thing you use to not feel it is also the thing that convinces you there\u2019s nothing to feel. It anaesthetises the evidence against itself.\n\nThis is why \u201cI can stop whenever I want\u201d is so common and so rarely tested. It doesn\u2019t need to be true. It just needs to be believed on Thursday night.\n\nHere are the questions that actually surface something. Have you ever set a limit and gone past it? Have you hidden how much? Have you needed it to do something you used to do without it \u2014 socialise, sleep, calm down? Has anyone who loves you said something, even once, even gently?\n\nIf you answered yes to more than one of those, that\u2019s worth taking seriously. Not as a verdict on your character. As information.\n\nAnd hear this clearly, because the church has been bad at saying it: if this has a real grip, you need more than a devotional. Talk to a doctor or a counsellor. Find a group \u2014 there\u2019s one in nearly every town, and they are full of people who tried willpower first too. Getting help is not a failure of faith. Some things God heals through a physician, and He is not insulted when you go.',
              reflect:'Have you ever set yourself a limit and gone past it? What did you tell yourself afterwards?',
              prayer:'God, I don\u2019t want to be honest about this and I\u2019m going to be anyway. Show me clearly what\u2019s actually true, even the parts I\u2019ve been managing around.'
            },
            {
              id:'rf-s3',
              title:'Feeling it instead',
              scripture:{ ref:'Psalm 42:3, 5', text:'My tears have been my food day and night, while people say to me all day long, \u201cWhere is your God?\u201d\u2026 Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Saviour and my God.' },
              body:'Here is what nobody tells you about stopping: the feelings you were drowning are still there, and they surface immediately. That\u2019s the actual difficulty. Not the craving \u2014 the return of everything the craving was covering.\n\nSo you need somewhere to put it, or you will go back. Not because you\u2019re weak. Because feelings that have nowhere to go will find the door they know.\n\nThe Psalms are the somewhere. Read Psalm 42 again and notice how bad it\u2019s allowed to get. Tears for food. People mocking him. He asks God twice why He has forgotten him. This is in the worship book. Israel sang this out loud, together.\n\nThat should reset your idea of what\u2019s permitted. You do not have to arrive composed. You don\u2019t have to convert the feeling into something presentable before you bring it. The psalmist just says it \u2014 I am downcast, I am disturbed, where are you \u2014 and then, in the same breath, talks to himself: put your hope in God. Both. Not one instead of the other.\n\nPractically, this means learning to name it. Not \u201cI\u2019m fine\u201d and not \u201cI\u2019m a mess,\u201d but the actual thing: I am lonely. I am ashamed about work. I am angry at my father and I have been for eleven years. Naming it does something. Vague dread is unmanageable; a named feeling can be prayed about, talked about, and sat with.\n\nAnd sitting with it does not kill you. That is the discovery on the other side. The feeling you\u2019ve spent years outrunning turns out to be survivable when you finally stop and let it be there. It rises, it peaks, it passes \u2014 and you\u2019re still here.',
              reflect:'What feeling do you most want to avoid? Say its actual name. Then tell God about it in plain words.',
              prayer:'God, I\u2019ve been running from things I don\u2019t want to feel. I\u2019m going to stop running and let it be here. Sit with me in it.'
            },
            {
              id:'rf-s4',
              title:'Change the room',
              scripture:{ ref:'Proverbs 4:14\u201315', text:'Do not set foot on the path of the wicked or walk in the way of evildoers. Avoid it, do not travel on it; turn from it and go on your way.' },
              body:'Four verbs in one sentence: avoid, do not travel, turn, go. There\u2019s no subtlety. It\u2019s not \u201cwalk that road with strong convictions.\u201d It\u2019s: use a different road.\n\nWe overspiritualise this. We ask God for strength to resist while keeping every condition that makes resisting necessary at full strength. Then we treat the inevitable outcome as a character failure.\n\nSo get concrete. Where is it, physically? A bottle in the cupboard you walk past nightly is a decision you have to win every single night, forever. Get it out. That\u2019s not weakness, it\u2019s arithmetic \u2014 you\u2019re removing a hundred future decisions with one present one.\n\nWho is it with? Some friendships are built entirely around this, and you\u2019ll discover which when you stop. That\u2019s painful and it\u2019s also clarifying. You don\u2019t have to cut anyone off. You do have to notice that certain nights with certain people are not a fair fight, and stop pretending you\u2019ll be the exception.\n\nWhen is it? Almost everyone has a window \u2014 after work, after everyone\u2019s asleep, Friday at six. Put something in the window. Something physical if possible. A walk, a gym, a shower, calling someone. The window is the fight; the rest of the day mostly isn\u2019t.\n\nAnd tell one person the plan. Not so they can police you \u2014 so it exists outside your own head, where you can\u2019t quietly renegotiate it at 9pm.\n\nNone of this is a lack of faith. Proverbs is a book of practical wisdom in the Bible, and its advice about temptation is stunningly unspiritual: don\u2019t go there. Take the other street. God gave you the ability to arrange your life, and using it is obedience, not cheating.',
              reflect:'Name the room, the people, and the time of day. Now pick one of the three and change something this week.',
              prayer:'God, give me the humility to move things out of my way instead of pretending I\u2019m strong enough to walk past them forever.'
            },
            {
              id:'rf-s5',
              title:'Who you\u2019re becoming',
              scripture:{ ref:'2 Corinthians 5:17', text:'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!' },
              body:'If the whole goal is stopping, you will white-knuckle for a while and then drift back, because you\u2019ll have removed something and put nothing in its place. Absence is not a life.\n\nSo aim at something instead.\n\nImagine yourself two years from now, on the other side of this. What\u2019s different? Probably not just the drinking. You\u2019re present in conversations instead of half-checked-out. You remember evenings. You wake up without doing the mental audit of what you said. You have money you didn\u2019t notice you were spending. You\u2019re someone people can rely on at 9pm, not just before six.\n\nThat person is the target. Not \u201csober.\u201d Him. Her.\n\nAnd here is the thing Paul insists on: that person is not a distant possibility you might earn. In Christ, the new creation has come \u2014 present tense, already begun. You are not building someone from scratch. You\u2019re catching up to something God has already declared true about you.\n\nThat changes the emotional weather of the whole fight. You are not auditioning for God\u2019s approval, one clean week at a time. You already have it. You\u2019re just learning to live like the person He says you now are.\n\nWhich also means the setbacks aren\u2019t verdicts. They\u2019re lag. Real, frustrating, worth learning from \u2014 but not proof that the new thing was fake.\n\nOne last practical word. Track months, not days. Notice the gaps stretching. Notice you handled a hard week differently than you would have last year. That\u2019s the actual shape of progress, and it\u2019s almost invisible up close. Look back far enough and you\u2019ll see it.',
              reflect:'Describe the version of you two years past this. Be specific. What does an ordinary Tuesday evening look like?',
              prayer:'God, you already call me new. Help me live into that instead of trying to earn it. Keep pulling me toward who you say I am.'
            }
          ]
        },
        {
          id:'anger',
          title:'Anger & Bitterness',
          icon:'\ud83c\udf29\ufe0f',
          summary:'On the temper you regret, and the grudge you\u2019ve been feeding for years.',
          lessons:[
            {
              id:'rf-a1',
              title:'Anger isn\u2019t the sin',
              scripture:{ ref:'Ephesians 4:26\u201327', text:'In your anger do not sin: Do not let the sun go down while you are still angry, and do not give the devil a foothold.' },
              body:'Read that verse slowly, because most people misremember it. It does not say do not be angry. It says in your anger, do not sin. Anger is assumed. It\u2019s the handling that\u2019s in question.\n\nThat matters, especially if you grew up being told anger itself was ungodly. Because Jesus was angry. He made a whip and cleared a temple. He called religious leaders whitewashed tombs. Mark says he looked around at them in anger, deeply distressed at their stubborn hearts \u2014 and then healed a man in front of them out of spite for their rules.\n\nAnger is a signal. It fires when something you value is threatened or violated. That\u2019s useful information. People who feel no anger at injustice aren\u2019t holy, they\u2019re asleep.\n\nThe problem is what we do in the eight seconds after it fires.\n\nSo the useful question is not \u201cwhy am I angry\u201d as a self-accusation. It\u2019s: what is this protecting? Under most anger is something softer that got hit. Disrespect usually means you feel small. Rage at your kids often means fear. Snapping at your spouse is frequently exhaustion or shame with nowhere else to go. Anger is the bodyguard; something quieter is the thing being guarded.\n\nAnd note Paul\u2019s deadline: before the sun goes down. Not because unresolved anger is untidy, but because of what he says next \u2014 it gives the devil a foothold. A foothold is small. Nobody loses a wall in one night. They lose it because something got a grip and was left alone long enough to widen.\n\nToday, don\u2019t try to stop feeling angry. Just get underneath it.',
              reflect:'Think of the last time you lost your temper. Strip the anger away \u2014 what were you actually feeling underneath it?',
              prayer:'God, I\u2019m not going to pretend I\u2019m not angry. Show me what\u2019s under it, and help me deal with that instead of just the surface.'
            },
            {
              id:'rf-a2',
              title:'The eight seconds',
              scripture:{ ref:'James 1:19\u201320', text:'My dear brothers and sisters, take note of this: Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.' },
              body:'Notice the ratio. One thing to be fast about, two to be slow about. Almost every blow-up you regret came from reversing that.\n\nAnd notice the reason James gives \u2014 not that anger is unpleasant, but that it does not produce the righteousness God desires. Which is worth sitting with, because in the moment, anger feels productive. It feels like it\u2019s about to fix something. It almost never does. It usually just relocates the problem into the other person\u2019s hurt.\n\nThe practical fight happens in a very short window. There\u2019s a gap \u2014 a few seconds \u2014 between the surge and the sentence you can\u2019t take back. That gap is trainable.\n\nWhat works, in the moment: leave. Physically. \u201cI need ten minutes\u201d is a complete sentence and it is not weakness, it\u2019s the strongest available move. Your body is flooded with adrenaline and your reasoning is genuinely impaired \u2014 you are not at your best and you should not be making decisions about someone you love.\n\nAlso: slow the words down. Anger speeds speech up. Deliberately talking slower cools the whole exchange, including you.\n\nAnd get curious out loud. \u201cWhy does this bother me this much?\u201d asked honestly, even mid-argument, changes the temperature. It moves you from attacking to examining.\n\nWhat doesn\u2019t work: venting. The old advice about getting it all out has not held up \u2014 rehearsing anger tends to deepen the groove rather than drain it. There\u2019s a difference between processing something with a trusted person and simply reloading.\n\nOne warning worth saying plainly. If your anger has ever frightened someone, or you\u2019ve broken something, or someone in your house walks carefully around your moods \u2014 that\u2019s past a devotional. Get a counsellor. That\u2019s courage, not shame.',
              reflect:'What is your earliest warning sign \u2014 jaw, chest, voice, a specific thought? Naming it gives you back the gap.',
              prayer:'God, give me the second between feeling it and saying it. Help me use it.'
            },
            {
              id:'rf-a3',
              title:'The grudge you\u2019re feeding',
              scripture:{ ref:'Hebrews 12:15', text:'See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.' },
              body:'Anger is weather. Bitterness is climate.\n\nAnger flares and passes. Bitterness is what happens when it doesn\u2019t \u2014 when something got done to you, it was genuinely wrong, and there was no repair, so you built around it. And you\u2019ve been maintaining it since.\n\nHebrews calls it a root, which is exactly right. Roots are underground. You don\u2019t see them; you see what they push up through. A comment that lands too hard. A whole category of person you can\u2019t be fair about. A relationship you keep at a distance for reasons you\u2019d struggle to explain now.\n\nAnd note the last phrase: defile many. Bitterness never stays contained to the person who earned it. It leaks onto people who had nothing to do with it \u2014 your kids get the version of you that was shaped by someone else\u2019s failure.\n\nHere is the hardest part, and I won\u2019t dress it up. Usually you were actually wronged. That\u2019s what makes it so hard to release. It feels like letting go means agreeing it was fine, or letting them win.\n\nIt doesn\u2019t. Forgiveness is not saying it didn\u2019t matter. It\u2019s deciding to stop being the one who carries the debt. Right now you\u2019re both the creditor and the one paying \u2014 you think about them, and they mostly don\u2019t think about you.\n\nAsk yourself honestly: what is this costing me, right now, today? Not what did they cost you then. What is it costing to keep holding it? Bitterness always feels like power and functions like a tax.',
              reflect:'Who came to mind while reading this? You knew within the first paragraph. What has holding it cost you?',
              prayer:'God, you know what happened and you know it was wrong. I\u2019m tired of carrying it. I don\u2019t know how to let go yet \u2014 start doing something in me.'
            },
            {
              id:'rf-a4',
              title:'What forgiveness isn\u2019t',
              scripture:{ ref:'Colossians 3:13', text:'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.' },
              body:'A lot of people are stuck not because they refuse to forgive but because they\u2019ve been handed a definition that isn\u2019t Christian. So let\u2019s clear the ground.\n\nForgiveness is not saying it was okay. If it was okay there\u2019d be nothing to forgive. The word only exists for things that were genuinely wrong.\n\nIt is not forgetting. You\u2019re not required to develop amnesia. God remembering our sins no more is a covenant statement about not holding them against us, not a claim about divine memory loss.\n\nIt is not trust restored. Trust is rebuilt through changed behaviour over time. You can forgive someone completely and still not hand them your car keys, your money, or unsupervised time with your children.\n\nIt is not reconciliation. That takes two people. Paul says elsewhere: if it is possible, as far as it depends on you, live at peace. Both those qualifiers are there because sometimes it isn\u2019t possible and it doesn\u2019t depend only on you.\n\nAnd it is not a feeling you wait for. If you wait until you feel like it, you will die waiting.\n\nSo what is it? It\u2019s a decision to release the debt \u2014 to stop demanding they pay, and to hand the matter to a God who sees it accurately, judges rightly, and doesn\u2019t need your help.\n\nThat decision usually has to be made more than once. You\u2019ll forgive on Tuesday and find it back on Friday, and think you failed. You didn\u2019t. You\u2019re just doing it again. Some things you forgive a hundred times before it finally stays down \u2014 which, incidentally, is roughly what Jesus told Peter when he asked how many times.',
              reflect:'Which of those five did you have confused with forgiveness? Does that change what\u2019s actually being asked of you?',
              prayer:'God, I\u2019m choosing to hand this over. Not because it didn\u2019t matter, but because I\u2019m not the right one to hold it. Take it. I\u2019ll probably bring it back \u2014 take it again.'
            },
            {
              id:'rf-a5',
              title:'Gentleness is not weakness',
              scripture:{ ref:'Proverbs 15:1', text:'A gentle answer turns away wrath, but a harsh word stirs up anger.' },
              body:'Here\u2019s something worth noticing about the fruit of the Spirit: gentleness is in it, and so is self-control, and they\u2019re listed alongside love and joy as if they belong in the same family. In Scripture, gentleness is not timidity. The same word describes a war horse under control \u2014 enormous power, responsive to the slightest signal. Strength with a hand on it.\n\nThat reframes the goal. You\u2019re not trying to become someone who feels less. You\u2019re trying to become someone whose force is under command.\n\nProverbs 15:1 is one of those verses that sounds like a nicety until you actually use it. A gentle answer genuinely does turn away wrath \u2014 it is almost mechanical. Escalation requires two people. When one of them doesn\u2019t supply the heat, the fire has nothing to burn.\n\nThe person who can stay level when someone is shouting at them is not the weak one in the room. Everyone present knows that.\n\nAnd this is where the whole module lands. You cannot manufacture gentleness by suppression \u2014 that just builds pressure until it blows somewhere worse. It grows, like fruit, from being someone whose deepest need is already met. It is very hard to threaten someone who isn\u2019t protecting anything fragile.\n\nWhich is why the answer to anger is finally not technique. It\u2019s security. The more settled you are in being loved by God, the less every slight has to be a battle for your worth.\n\nStart small. Pick one relationship this week where you\u2019re usually sharp, and answer gently once. Not passively \u2014 you can be completely honest, even firm. Just gently. Then notice what happens in the room, and notice what happens in you.',
              reflect:'Who gets the sharpest version of you? What would one gentle answer look like this week \u2014 what would you actually say?',
              prayer:'God, make me strong enough to be gentle. Settle me deep enough that I don\u2019t have to fight for my worth in every conversation.'
            }
          ]
        },
        {
          id:'comparison',
          title:'Comparison & Your Phone',
          icon:'\ud83d\udcf1',
          summary:'On scrolling, envy, and the quiet ache of everyone else\u2019s life.',
          lessons:[
            {
              id:'rf-c1',
              title:'The thief',
              scripture:{ ref:'Galatians 6:4\u20135', text:'Each one should test their own actions. Then they can take pride in themselves alone, without comparing themselves to someone else, for each one should carry their own load.' },
              body:'You can be perfectly content with your life until you see someone else\u2019s. Nothing about your situation changed in those four seconds. Only the reference point did.\n\nThat\u2019s what makes comparison so strange. It doesn\u2019t take anything from you. It just changes what you\u2019re measuring against, and suddenly a life you were fine with looks thin.\n\nPaul\u2019s instruction is oddly specific: test your own actions, and take pride in that alone, without comparing. He isn\u2019t saying never notice anyone else. He\u2019s saying the scoreboard is yours. Carry your own load \u2014 which means someone else\u2019s load, and how well they\u2019re carrying it, is not your business or your standard.\n\nAnd you should be clear about what you\u2019re actually comparing. You are holding your unedited insides against their curated outside. You know your doubts, your bank balance, the argument you had this morning, the thing you\u2019re ashamed of. You know none of that about them. You know what they chose to publish.\n\nThat isn\u2019t a fair fight, and some part of you knows it. It just doesn\u2019t help, because comparison doesn\u2019t run on logic. It runs on a feeling that arrives before you\u2019ve had a chance to reason.\n\nHere\u2019s what makes it worth taking seriously rather than shrugging off: comparison quietly disqualifies gratitude. You cannot be thankful for something you\u2019ve decided isn\u2019t enough. And a life without gratitude gets grey no matter what\u2019s in it.\n\nSo start by noticing. Just for a day. Catch the moment it happens \u2014 the small drop in the chest when a certain post loads. Don\u2019t judge it, just see it. You can\u2019t fight something you haven\u2019t looked at.',
              reflect:'Whose life makes you feel worst about yours? What specifically do they have that you want?',
              prayer:'God, I keep measuring my life against people I don\u2019t really know. Help me see what you\u2019ve actually put in front of me.'
            },
            {
              id:'rf-c2',
              title:'What envy is telling you',
              scripture:{ ref:'James 3:16', text:'For where you have envy and selfish ambition, there you find disorder and every evil practice.' },
              body:'Envy is a bad master and a useful informant.\n\nJames is blunt about the master part \u2014 where envy is, disorder follows. It corrodes friendships. It makes other people\u2019s good news feel like bad news, which is a genuinely awful way to live. You end up unable to celebrate anyone, and quietly relieved when things go wrong for them, and then ashamed of that.\n\nBut envy is also information, if you\u2019ll interrogate it instead of just feeling it.\n\nEnvy is specific. You are not envious of everyone about everything. You feel it about certain things, from certain people. That specificity is a signal pointing at something you want and either don\u2019t have or don\u2019t believe you can have.\n\nSo interrogate it. When you feel that pull, ask: what exactly is it? Not the surface \u2014 the substance. Envying someone\u2019s marriage might be a longing to be known. Envying a career might be wanting to matter, or wanting to stop worrying about money. Envying someone\u2019s ease might be exhaustion.\n\nOnce you have the real thing, you can do something with it. You can pray about it honestly. You can act on it if it\u2019s actionable. And you can grieve it if it isn\u2019t \u2014 some things you wanted are genuinely not going to happen, and grieving that in God\u2019s presence is far healthier than resenting whoever got it.\n\nWhat you cannot do is nothing. Unexamined envy doesn\u2019t evaporate. It settles into a low background bitterness about your own life, and eventually about God for the way He handed things out.',
              reflect:'Take the last thing you envied. Keep asking \u201cwhat do I actually want here?\u201d until you hit something true.',
              prayer:'God, I\u2019m tired of resenting people for having good things. Show me what I really want, and help me bring it to you instead of nursing it.'
            },
            {
              id:'rf-c3',
              title:'The machine is designed',
              scripture:{ ref:'1 Corinthians 6:12', text:'\u201cI have the right to do anything,\u201d you say \u2014 but not everything is beneficial. \u201cI have the right to do anything\u201d \u2014 but I will not be mastered by anything.' },
              body:'Paul\u2019s line here is one of the most useful sentences in the New Testament for modern life, and it hinges on a word: mastered.\n\nHe isn\u2019t arguing about permission. He grants the permission immediately \u2014 twice. Then he moves the question: is this useful, and who is in charge here?\n\nApply that honestly to your phone. Not \u201cis it allowed.\u201d Obviously. The real questions are: is it beneficial, and is it mastering you?\n\nAnd be clear-eyed about the fight you\u2019re in. These apps are not neutral tools you happen to overuse. They were built by very smart people whose job was to maximise the time you spend, using the same reward mechanics that make slot machines work \u2014 variable rewards, infinite scroll, notifications timed for re-engagement. Feeling like you can\u2019t put it down is not a personal defect. It is the intended outcome of significant investment.\n\nWhich should be freeing, actually. Stop treating it as a character flaw and start treating it as a designed system you can make different decisions inside of.\n\nThe practical stuff works, and it\u2019s dull: phone out of the bedroom overnight, so it isn\u2019t the first and last thing you touch. Notifications off for anything that isn\u2019t a human being contacting you directly. Unfollow, generously \u2014 if an account reliably makes you feel worse, that is sufficient reason, and you owe no explanation. Greyscale if you\u2019re serious; the colour is doing more work than you think.\n\nNone of that is legalism. It\u2019s just refusing to be mastered by something you were told was a tool.',
              reflect:'Check your screen time honestly. How does that number compare to time spent on anything you\u2019d say actually matters to you?',
              prayer:'God, I don\u2019t want anything running me but you. Give me the clarity to see what this is doing and the resolve to change it.'
            },
            {
              id:'rf-c4',
              title:'Your actual life',
              scripture:{ ref:'Psalm 16:5\u20136', text:'LORD, you alone are my portion and my cup; you make my lot secure. The boundary lines have fallen for me in pleasant places; surely I have a delightful inheritance.' },
              body:'Boundary lines is a land term. When Israel entered the promised land, each family received a specific plot \u2014 marked out, bounded, theirs. Not all of it. A portion.\n\nDavid takes that image and applies it to his life. This is my plot. These are my edges. And he says something remarkable about it: the lines have fallen in pleasant places.\n\nEvery life has boundary lines. There are things you will not be, places you will not go, gifts you were not given. Comparison is essentially a refusal to accept your plot \u2014 a permanent low-grade objection to the shape of the land you were handed.\n\nAnd notice what David says first, before the land: you alone are my portion. The plot isn\u2019t the inheritance. God is. Which is why he can look at his actual, bounded, non-infinite life and call it delightful.\n\nHere is the practical shift. Look up from the feed and look at what\u2019s in front of you. Not the life you\u2019d have chosen from a catalogue \u2014 the one you actually have. The people in your house. The work in front of you this week. The friendships that have lasted. The body that mostly works. The fact that you\u2019re reading something about God at all.\n\nGratitude is not pretending your life is better than it is. It is the discipline of accurate attention \u2014 refusing to let the things you don\u2019t have blot out the things you do.\n\nTry this and mean it: three specific things from today. Not \u201cmy family.\u201d Something like \u2014 the way my daughter said my name when I got home. Specific gratitude is the only kind that actually moves anything.',
              reflect:'Name three specific things from today \u2014 not categories, actual moments. Sit with them for a minute before moving on.',
              prayer:'God, you are my portion, not the things I\u2019m missing. Help me see the good you\u2019ve actually put in my hands.'
            },
            {
              id:'rf-c5',
              title:'Celebrate someone',
              scripture:{ ref:'Romans 12:15', text:'Rejoice with those who rejoice; mourn with those who mourn.' },
              body:'The final move against comparison isn\u2019t discipline. It\u2019s the opposite of what envy wants you to do.\n\nRejoice with those who rejoice. Not tolerate their good news. Not manage your face while they tell you. Actually be glad.\n\nThis is harder than mourning with people. Grief invites us in \u2014 we know how to show up for someone who\u2019s hurting. Someone else\u2019s success quietly indicts us, and the polite congratulations we offer often has something sour underneath it that we hope isn\u2019t visible.\n\nBut here\u2019s what happens when you push through and genuinely celebrate someone: the envy loses its grip. You cannot simultaneously resent someone and be glad for them. Actively choosing gladness starves the other thing.\n\nAnd it has to be active, because it will not arrive on its own. Send the message. Say the specific thing you admire. Show up to the thing. Ask them about it and actually listen. The feeling tends to follow the action rather than precede it.\n\nThere\u2019s something deeper here too. Comparison assumes a world of scarcity \u2014 that their portion diminishes yours, that there\u2019s a fixed amount of good and they took some of yours. The gospel says otherwise. Their good news costs you nothing. God is not running out.\n\nIf you believe that, you can be free in a way that\u2019s genuinely rare. You can be the person who is honestly, uncomplicatedly happy for other people. Those people are magnetic, and there are very few of them.\n\nSo pick someone. Ideally someone you\u2019ve felt that twinge about. And go be glad for them out loud, this week.',
              reflect:'Who have you struggled to celebrate? What is one specific thing you could genuinely tell them you admire?',
              prayer:'God, make me someone who is honestly glad when others are blessed. Take the scarcity out of how I see the world.'
            }
          ]
        },
        {
          id:'anxiety',
          title:'Anxiety & Control',
          icon:'\ud83c\udf0a',
          summary:'On the 3am spiral, and trying to hold everything together yourself.',
          lessons:[
            {
              id:'rf-x1',
              title:'The 3am spiral',
              scripture:{ ref:'Psalm 94:19', text:'When anxiety was great within me, your consolation brought me joy.' },
              body:'It has a shape, doesn\u2019t it. You wake at some hour you didn\u2019t choose and your mind is already running \u2014 not on the actual problem, but three moves past it, into consequences that haven\u2019t happened and mostly won\u2019t.\n\nAnd it feels productive. That\u2019s the trick. It feels like by turning it over enough times you might find the angle that makes it safe. You never do. You just arrive at morning exhausted, having solved nothing.\n\nThe first thing worth saying is that this is not a faith problem, or not only one. Anxiety is partly a body doing what bodies do \u2014 a threat system that evolved for immediate danger, firing at things it cannot resolve by running or fighting. That\u2019s why \u201cjust trust God\u201d lands so badly when someone is mid-spiral. You\u2019re not arguing with a belief, you\u2019re arguing with adrenaline.\n\nSo the Bible\u2019s honesty here is a relief. Psalm 94 doesn\u2019t say anxiety shouldn\u2019t be great within me. It says when it was. The writer isn\u2019t apologising for having a nervous system.\n\nElijah collapsed under a tree and asked to die \u2014 and God\u2019s first response was food and sleep. Jesus in Gethsemane was so distressed He sweated blood and said His soul was overwhelmed to the point of death. Whatever anxiety is, it is not evidence that you\u2019re failing at faith. Some of Scripture\u2019s most faithful people were flattened by it.\n\nWhat you need first isn\u2019t a lecture. It\u2019s consolation \u2014 which is the word the psalm uses. Comfort. Presence. Something to hold onto while the wave goes through.\n\nTonight, when it starts, try this: stop trying to solve it. Just say out loud, even in a whisper, that you\u2019re afraid and you can\u2019t fix this at 3am. Then ask Him to stay with you while it passes. That\u2019s a complete prayer.',
              reflect:'What does your spiral usually circle around? Name the actual fear underneath the loop.',
              prayer:'God, my head won\u2019t stop and I can\u2019t fix anything from here. I\u2019m not asking you to solve it tonight. Just stay with me.'
            },
            {
              id:'rf-x2',
              title:'Control is the real habit',
              scripture:{ ref:'Proverbs 16:9', text:'In their hearts humans plan their course, but the LORD establishes their steps.' },
              body:'Underneath most chronic anxiety is a belief you\u2019d never say out loud: if I think hard enough, plan far enough, and stay alert enough, I can keep the bad thing from happening.\n\nIt is a form of taking responsibility for outcomes that were never yours. And it\u2019s exhausting precisely because it\u2019s impossible \u2014 you\u2019re trying to hold a weight that isn\u2019t liftable, and then feeling like a failure for straining.\n\nProverbs 16:9 holds two things together without embarrassment. You plan your course \u2014 that\u2019s good, do it, planning is wisdom. And the Lord establishes your steps. Both are true. You are responsible for your effort and not for your outcomes.\n\nSitting with that distinction is where the relief is. What is genuinely mine here? Usually: my effort, my honesty, my next action, my attitude. What isn\u2019t mine? How other people respond. What happens next year. Whether it works.\n\nMost anxiety is spent almost entirely in the second column.\n\nThere\u2019s an old prayer about this \u2014 the serenity to accept what can\u2019t be changed, courage to change what can, wisdom to know the difference \u2014 and it survives because the sorting is the whole battle. Not the accepting. The sorting.\n\nTry it literally. Write down what you\u2019re anxious about, then draw a line down the page. Left side: things I can actually act on. Right side: things I cannot. Then do something \u2014 anything \u2014 on the left, and pray specifically about the right.\n\nIt sounds too simple. It works because anxiety thrives on the two columns being blurred, so that everything feels simultaneously urgent and impossible.',
              reflect:'What are you carrying right now that was never actually yours to carry?',
              prayer:'God, I\u2019ve been trying to control things I was never given control of. Show me my part, and take the rest \u2014 I\u2019m not built for it.'
            },
            {
              id:'rf-x3',
              title:'Do not be anxious, actually',
              scripture:{ ref:'Philippians 4:6\u20137', text:'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.' },
              body:'This verse gets used as a rebuke, which is almost the opposite of what it is.\n\nRead it as an instruction rather than a scolding and it changes. Paul isn\u2019t saying you shouldn\u2019t feel anxious \u2014 which would be useless advice, like telling someone not to feel cold. He\u2019s giving a transfer procedure. Don\u2019t hold it. Move it. Here is how.\n\nAnd the method is more specific than it first appears.\n\nIn every situation \u2014 nothing is too small or too stupid. The thing you\u2019re embarrassed to be worried about counts.\n\nBy prayer and petition \u2014 petition means specific asks. Not \u201cGod, be with my week.\u201d Name it: the conversation on Thursday, the test results, the money in March. Vague prayer leaves anxiety exactly where it was, because you never actually handed anything over.\n\nWith thanksgiving \u2014 this is the one people skip, and it\u2019s doing real work. Naming something true and good while you\u2019re afraid interrupts the spiral\u2019s narrative that everything is bad and getting worse. It\u2019s not denial. It\u2019s balance.\n\nAnd then the promise, which is worth reading carefully. It doesn\u2019t say you\u2019ll get what you asked for. It says peace will guard your heart and mind. Guard is a military word \u2014 a garrison posted around a city. Not the absence of threat. Protection inside it.\n\nAlso notice: peace that transcends understanding. Meaning it won\u2019t make sense. You may still not know how the thing resolves, and be strangely okay anyway. That\u2019s not you having figured it out. That\u2019s the guard being posted.\n\nThis is a practice, not a one-off. You will hand the same worry over dozens of times. That\u2019s not failure; that\u2019s the exercise.',
              reflect:'Write down one specific thing you\u2019re anxious about. Then write one thing you\u2019re thankful for. Then pray both, out loud.',
              prayer:'God, here it is, specifically: ______. I\u2019m handing it to you. And thank you for ______, which is also true today. Guard my mind while I wait.'
            },
            {
              id:'rf-x4',
              title:'Today has enough',
              scripture:{ ref:'Matthew 6:34', text:'Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.' },
              body:'There\u2019s a dry realism in this verse that people miss because they\u2019re braced for a platitude.\n\nJesus does not say tomorrow will be fine. He says each day has enough trouble of its own. He\u2019s conceding the point \u2014 there will be trouble tomorrow, and there\u2019s trouble today, and today\u2019s is a full day\u2019s worth. His argument is about load, not optimism.\n\nAnxiety works by borrowing. You take tomorrow\u2019s difficulty and next month\u2019s and the worst version of next year\u2019s, and you carry them all today, in advance, alongside today\u2019s actual weight. No wonder you\u2019re flattened. You\u2019re carrying a load that was designed to be distributed across a year.\n\nAnd almost all of it is imaginary. Not the concerns \u2014 those may be real \u2014 but the versions you\u2019re carrying. You are rehearsing scenarios most of which will never occur, and grieving losses that haven\u2019t happened.\n\nThink about the wilderness. Manna came daily, and it rotted if hoarded. That was deliberate. God trained a nation in daily dependence by refusing to let them stockpile. It must have been maddening. It was also the point.\n\nSo the practical question is not \u201chow do I stop worrying about the future.\u201d It\u2019s: what is required of me today? Just today. What\u2019s the next actual thing?\n\nMostly it\u2019s small. Make the call. Send the email. Show up. Go to bed at a reasonable hour. The future is handled in a series of todays, and it is genuinely the only place you\u2019re able to act.\n\nWhen you catch yourself out in next March, come back. Ask what today asks of you. Do that. That is sufficient, and it is also all that\u2019s available.',
              reflect:'What are you carrying today that belongs to a day that hasn\u2019t come? What does today actually ask of you?',
              prayer:'God, I keep living in days I haven\u2019t reached yet. Bring me back to this one. Give me what I need for today and let tomorrow wait.'
            },
            {
              id:'rf-x5',
              title:'Cast it, and keep casting',
              scripture:{ ref:'1 Peter 5:6\u20137', text:'Humble yourselves, therefore, under God\u2019s mighty hand, that he may lift you up in due time. Cast all your anxiety on him because he cares for you.' },
              body:'These are one sentence in the original, and the join changes everything.\n\nHumbling yourself and casting your anxiety are the same movement. Which tells you something uncomfortable and freeing: a lot of worry is pride. Not arrogance \u2014 the quieter kind, where you\u2019ve assumed a level of responsibility for the universe that was never assigned to you. Letting go of it is humility. It\u2019s admitting you are not the one holding this together, and never were.\n\nThe verb matters too. Cast is forceful \u2014 throw, fling off. It\u2019s the same word used for the cloaks thrown over the colt at the triumphal entry. Not setting your worry down gently beside you where you can pick it back up in four minutes. Throwing it.\n\nYou will pick it back up. Everyone does. The instruction is not to cast it once and be finished; it\u2019s a practice you\u2019ll repeat until you die. Some days hourly. That\u2019s normal, and it\u2019s not evidence the first time didn\u2019t work.\n\nAnd then the reason, which is the part to hold onto: because he cares for you. Not because worry is unproductive, true as that is. Not because faith should be stronger. Because He cares about you specifically.\n\nThat\u2019s an astonishing claim if you slow down on it. The God who holds galaxies is described as caring about the thing keeping you awake. Not tolerating it. Caring.\n\nWhich means the invitation isn\u2019t to be less bothered. It\u2019s to be bothered in company \u2014 to stop white-knuckling in private and hand it, repeatedly, to someone who is not overwhelmed by it and does not think you\u2019re weak for bringing it again.\n\nSo bring it again. That is the whole spiritual practice. Bring it again.',
              reflect:'What have you picked back up after handing it over? Throw it again \u2014 right now, out loud.',
              prayer:'God, I\u2019m taking my hands off this. I\u2019ll probably grab it again in an hour, and I\u2019ll give it back then too. Thank you that you actually care about it.'
            }
          ]
        }
      ]
    },
    {
      id:'firststeps',
      name:'First Steps',
      icon:'\ud83c\udf31',
      tag:'For kids',
      blurb:'The basics, explained simply and gently. Who God is, who Jesus is, and what it means to follow Him \u2014 without big words or scary parts.',
      note:'Written for younger readers.',
      modules:[
        {
          id:'basics',
          title:'Getting Started',
          icon:'\u2b50',
          summary:'The first things to know about God.',
          lessons:[
            {
              id:'fs-1',
              title:'Who is God?',
              scripture:{ ref:'Psalm 139:13\u201314', text:'You made every part of me. You put me together inside my mother. I praise you because you made me in an amazing and wonderful way.' },
              body:'God made everything. The sky, the ocean, every animal, and every person \u2014 including you.\n\nHe didn\u2019t make you by accident. The Bible says He knew you before you were even born, and He picked out every single thing about you on purpose. Your laugh. Your voice. The things you\u2019re good at.\n\nGod is bigger than anything we can imagine. But He is also close. He isn\u2019t far away watching from the sky. He is right here, and He likes being with you.\n\nHere is the most important thing to know: God loves you. Not because you are good at things. Not because you always behave. He loves you because you are His.',
              reflect:'What is something about yourself you like? God made that on purpose.',
              prayer:'God, thank you for making me. Help me remember you are close to me today.'
            },
            {
              id:'fs-2',
              title:'Who is Jesus?',
              scripture:{ ref:'John 3:16', text:'God loved the world so much that he gave his only Son. Anyone who believes in him will not be lost, but will have life forever.' },
              body:'Jesus is God\u2019s Son. A long time ago, He came to earth as a real baby, born in a place where animals were kept, because there was nowhere else for His family to stay.\n\nHe grew up like other kids. He had a family. He learned to work with wood.\n\nWhen He was a grown-up, Jesus went everywhere helping people. He made sick people well. He fed people who were hungry. He was kind to people nobody else was kind to.\n\nAnd He told everyone something amazing: if you want to know what God is like, look at me.\n\nJesus is how we know God isn\u2019t scary. God is like Jesus \u2014 kind, gentle, and always making room for people.',
              reflect:'What is one kind thing Jesus did that you like hearing about?',
              prayer:'Jesus, thank you for coming here. Help me learn more about who you are.'
            },
            {
              id:'fs-3',
              title:'What is the Bible?',
              scripture:{ ref:'Psalm 119:105', text:'Your word is like a lamp for my feet and a light on my path.' },
              body:'The Bible is one big book made of lots of smaller books \u2014 66 of them.\n\nIt was written a long, long time ago by many different people. But all of it is about the same thing: God, and how much He loves people.\n\nSome parts are stories. Some parts are songs and prayers. Some parts are letters that people wrote to each other.\n\nThe Bible is like a light. When it\u2019s dark outside and you have a flashlight, you can see where to step next. The Bible helps us see how to live \u2014 not the whole path at once, just the next step.\n\nYou don\u2019t have to understand all of it. Nobody does! You just start, and God helps you learn a little at a time.',
              reflect:'What is one story from the Bible you already know?',
              prayer:'God, help me understand your words. Thank you for giving them to us.'
            },
            {
              id:'fs-4',
              title:'How do I pray?',
              scripture:{ ref:'Matthew 6:6', text:'When you pray, go into your room and close the door. Pray to your Father who cannot be seen. Your Father can see what is done in secret, and he will reward you.' },
              body:'Praying is just talking to God.\n\nYou don\u2019t need special words. You don\u2019t have to sound fancy. You don\u2019t have to close your eyes or fold your hands, though you can if you want.\n\nYou can pray out loud or quietly in your head. You can pray in your room, on the bus, or lying in bed at night.\n\nYou can tell God anything. When you\u2019re happy. When you\u2019re scared. When you\u2019re mad \u2014 even mad at Him. He can handle it.\n\nJesus\u2019 friends once asked Him how to pray, and He gave them a short prayer to use. It starts with \u201cOur Father.\u201d That word matters. God isn\u2019t a stranger you have to be polite to. He\u2019s a good dad who is glad you came.',
              reflect:'What is one thing you\u2019d like to tell God right now?',
              prayer:'God, thank you that I can talk to you anytime. Here is what I want to tell you today\u2026'
            },
            {
              id:'fs-5',
              title:'Why is the world broken?',
              scripture:{ ref:'Romans 3:23\u201324', text:'All people have sinned and are not good enough for God\u2019s glory. They are made right with God by his grace, which is a free gift.' },
              body:'If God made everything good, why are there mean people? Why do people get sick? Why do sad things happen?\n\nHere is what the Bible says. God made the world good, and He gave people a choice \u2014 because love that isn\u2019t chosen isn\u2019t really love. And people chose to go their own way instead of God\u2019s way.\n\nThat choice broke something. Not just for them, for everything.\n\nThe Bible has a word for going our own way instead of God\u2019s way: sin. And everyone does it. Not just really bad people \u2014 everyone. When you lie, or leave someone out, or say something mean, that\u2019s it too.\n\nThat sounds like bad news, and it is. But it\u2019s only the first half. God did not leave the world broken. He had a plan to fix it, and the plan cost Him everything.\n\nThat\u2019s the next lesson.',
              reflect:'Can you think of a time you knew the right thing and did the other thing anyway? Everybody has.',
              prayer:'God, I know I don\u2019t always do what\u2019s right. Thank you that you didn\u2019t give up on us.'
            },
            {
              id:'fs-6',
              title:'The cross',
              scripture:{ ref:'1 Peter 3:18', text:'Christ himself suffered for sins once. He was not guilty, but he suffered for those who are guilty, to bring you to God.' },
              body:'This is the most important part of the whole Bible.\n\nSome people did not like what Jesus taught. They were angry that He said He was God\u2019s Son. So they arrested Him, even though He had never done anything wrong.\n\nJesus was killed on a cross. His friends were heartbroken. They thought it was over.\n\nBut something else was happening that they couldn\u2019t see. Jesus was taking the punishment for everything wrong that everyone has ever done \u2014 so that we wouldn\u2019t have to.\n\nHe didn\u2019t have to do it. He wasn\u2019t guilty of anything. He chose it, because He loves us that much.\n\nAnd that is why the cross is not a sad symbol for Christians. It is the moment God fixed what we broke.',
              reflect:'Jesus chose to do that for people who didn\u2019t deserve it. How does it feel knowing He included you?',
              prayer:'Jesus, thank you for what you did on the cross. I don\u2019t fully understand it, but thank you.'
            },
            {
              id:'fs-7',
              title:'He didn\u2019t stay dead',
              scripture:{ ref:'Matthew 28:5\u20136', text:'The angel said to the women, \u201cDon\u2019t be afraid. I know you are looking for Jesus, who was killed on the cross. He is not here. He has risen from the dead as he said he would.\u201d' },
              body:'Jesus\u2019 friends put His body in a tomb, which is like a cave with a big stone rolled in front of it. Everybody went home sad.\n\nThree days later, some women went back to the tomb early in the morning.\n\nThe stone was rolled away. The tomb was empty.\n\nAn angel told them: He isn\u2019t here. He\u2019s alive.\n\nAt first nobody believed them. Then Jesus started showing up \u2014 walking, talking, even eating breakfast with His friends on a beach. He was really, truly alive.\n\nThis is why Christians celebrate Easter. Not just because Jesus died for us, but because death didn\u2019t win. And because He\u2019s alive, we get to be with Him forever too.',
              reflect:'The women were the first ones to find out. Why do you think God chose them?',
              prayer:'Jesus, you are alive! Thank you that death didn\u2019t win. Help me be excited about that today.'
            },
            {
              id:'fs-8',
              title:'What do I do now?',
              scripture:{ ref:'Micah 6:8', text:'The LORD has told you what is good. This is what he wants from you: Do what is right to other people. Love being kind to others. And live humbly, obeying your God.' },
              body:'So what does God actually want from you?\n\nNot to be perfect. Not to never mess up. Not to be the best at anything.\n\nThe Bible says it simply in one verse: be fair to people, love being kind, and stay close to God.\n\nThat\u2019s it. That\u2019s the whole thing.\n\nBeing fair means treating people the way you\u2019d want to be treated \u2014 including the kid nobody sits with.\n\nBeing kind means you don\u2019t just do nice things, you actually like doing them.\n\nStaying close to God means talking to Him, learning about Him, and remembering you don\u2019t have to do life alone.\n\nAnd when you mess up \u2014 because you will, everyone does \u2014 you just tell God, and He forgives you. Every single time. You never run out.',
              reflect:'Who is one person you could be kind to this week? What could you do?',
              prayer:'God, help me be fair and kind today, and help me remember you\u2019re with me. Thank you for forgiving me when I get it wrong.'
            }
          ]
        },
        {
          id:'feelings',
          title:'Big Feelings',
          icon:'\ud83d\udc99',
          summary:'What to do when you feel scared, mad, sad, or left out.',
          lessons:[
            {
              id:'fs-f1',
              title:'When you\u2019re scared',
              scripture:{ ref:'Joshua 1:9', text:'Be strong and brave. Don\u2019t be afraid, because the LORD your God will be with you everywhere you go.' },
              body:'Everybody gets scared. Grown-ups too, even if they don\u2019t say it.\n\nBeing brave doesn\u2019t mean you stop feeling scared. Brave people feel scared and do the thing anyway.\n\nGod told Joshua to be brave. But look at the reason He gave. He didn\u2019t say \u201cbecause it isn\u2019t scary.\u201d He said \u201cbecause I will be with you.\u201d\n\nThat\u2019s the whole thing. You\u2019re not brave because you\u2019re strong enough by yourself. You\u2019re brave because you\u2019re not by yourself.\n\nWhen you feel scared, you can tell God. Right then. You don\u2019t have to wait. You can just say, \u201cGod, I\u2019m scared,\u201d and He hears you every single time.',
              reflect:'What makes you feel scared? You can tell God about it right now.',
              prayer:'God, sometimes I get scared. Thank you that you are with me everywhere I go. Help me be brave today.'
            },
            {
              id:'fs-f2',
              title:'When you\u2019re mad',
              scripture:{ ref:'James 1:19', text:'Everyone should be quick to listen, slow to speak, and slow to become angry.' },
              body:'Being mad isn\u2019t bad. Even Jesus got mad sometimes, when people were being treated unfairly.\n\nWhat matters is what you do next.\n\nWhen you\u2019re mad, your body feels it. Your face gets hot. Your hands might squeeze. That\u2019s your body saying something feels wrong.\n\nHere\u2019s a trick that really works. Before you say anything, count to ten. Or walk to another room. Or take three big slow breaths.\n\nIt sounds too easy to work. But your mad feeling gets smaller after a few seconds, and then you can say what you mean without saying something mean.\n\nMost of the words we wish we could take back were said in the first five seconds.',
              reflect:'What is something that makes you mad? What could you do instead of yelling next time?',
              prayer:'God, help me slow down when I get mad. Help me say what I mean without hurting people.'
            },
            {
              id:'fs-f3',
              title:'When you\u2019re sad',
              scripture:{ ref:'Psalm 34:18', text:'The LORD is close to people whose hearts have been broken.' },
              body:'Sometimes you feel sad and you know exactly why. Somebody was mean. Someone moved away. A pet died.\n\nAnd sometimes you feel sad and you don\u2019t know why at all. That happens too, and it doesn\u2019t mean anything is wrong with you.\n\nYou don\u2019t have to hurry up and feel happy again. God doesn\u2019t rush you.\n\nDid you know Jesus cried? His friend Lazarus died, and Jesus cried in front of everyone \u2014 even though He knew He was about to bring him back to life. He still cried first.\n\nSo crying isn\u2019t weak. Jesus did it.\n\nWhen you\u2019re sad, tell somebody who loves you. A parent, a grandparent, a teacher. And tell God. Sad feelings get smaller when they\u2019re shared.',
              reflect:'When you feel sad, who is someone safe you can tell?',
              prayer:'God, when I\u2019m sad, thank you that you come close instead of going away. Help me tell somebody instead of hiding it.'
            },
            {
              id:'fs-f4',
              title:'When you feel left out',
              scripture:{ ref:'Psalm 27:10', text:'If my father and mother leave me, the LORD will take me in.' },
              body:'Feeling left out is one of the worst feelings there is.\n\nMaybe you weren\u2019t invited. Maybe everyone was talking about something you weren\u2019t there for. Maybe you were picked last.\n\nHere is something true: being left out does not mean something is wrong with you. Sometimes people just don\u2019t think. Sometimes kids are unkind. Neither of those is about how much you\u2019re worth.\n\nJesus knew what this felt like. His own hometown didn\u2019t want Him. His own family thought He was being weird. His friends fell asleep when He needed them most.\n\nSo when you feel left out, you\u2019re talking to someone who really understands \u2014 not someone guessing.\n\nAnd here\u2019s something you can do with that feeling: look around for someone else who\u2019s left out, and go sit with them. People who know what it feels like usually make the best friends.',
              reflect:'Is there someone at school who often gets left out? What could you do this week?',
              prayer:'God, when I feel left out, remind me you never leave me out. Help me notice other people who feel that way too.'
            },
            {
              id:'fs-f5',
              title:'When you mess up',
              scripture:{ ref:'1 John 1:9', text:'If we confess our sins, he will forgive our sins, because we can trust God to do what is right.' },
              body:'You are going to mess up. Everybody does. Not just kids \u2014 everybody, their whole life.\n\nWhen you mess up, your brain usually says one of two things. Either \u201chide it so nobody finds out,\u201d or \u201cyou\u2019re a bad person.\u201d\n\nBoth of those are lies.\n\nHiding it just makes it heavier. And messing up doesn\u2019t make you bad. It makes you a person.\n\nHere\u2019s what actually helps. Say what you did \u2014 to God, and to whoever you need to say sorry to. Then let it be done.\n\nGod isn\u2019t sitting there disappointed, waiting for you to feel bad long enough. The Bible says as soon as you tell Him, He forgives. Right away. Every time.\n\nYou never run out of chances with God. Not ever.',
              reflect:'Is there something you need to say sorry for? You can start by telling God right now.',
              prayer:'God, I mess up sometimes. Thank you that you forgive me every time and never get tired of me.'
            },
            {
              id:'fs-f6',
              title:'When you\u2019re thankful',
              scripture:{ ref:'1 Thessalonians 5:18', text:'Give thanks whatever happens. That is what God wants for you in Christ Jesus.' },
              body:'Here\u2019s a strange thing about being thankful: it doesn\u2019t just happen when good things happen. It\u2019s something you can practice, like shooting free throws.\n\nAnd the more you practice it, the more you notice good things you were walking right past.\n\nTry this. Every night before you sleep, think of three things from that day. Not big things \u2014 small, real things. What somebody said. A food you liked. Something funny. The way the sky looked.\n\nThen say thank you to God for them.\n\nIf you do that every night for a week, something changes. You start looking for good things during the day, because you know you\u2019ll be counting them later.\n\nThat\u2019s not pretending everything is perfect. Some days are hard. It just means the hard stuff doesn\u2019t get to hide all the good stuff.',
              reflect:'Name three good things from today. Small ones count \u2014 those are usually the best ones.',
              prayer:'God, thank you for today. Especially for ______ and ______ and ______. Help me notice more tomorrow.'
            }
          ]
        },
        {
          id:'friends',
          title:'Being a Good Friend',
          icon:'\ud83e\udd1d',
          summary:'How to treat people the way Jesus did.',
          lessons:[
            {
              id:'fs-r1',
              title:'The most important rule',
              scripture:{ ref:'Matthew 7:12', text:'Do for other people the same things you want them to do for you.' },
              body:'Jesus said a lot of things. But this one is so simple you can remember it forever.\n\nTreat people the way you want to be treated.\n\nThat\u2019s it. That\u2019s the rule.\n\nBefore you say something, you can ask yourself: would I want someone to say that to me?\n\nBefore you leave someone out, ask: would I want to be left out?\n\nIt sounds easy. It\u2019s actually pretty hard, because in the moment you usually don\u2019t stop to think. You just react.\n\nSo it takes practice. But the more you do it, the more it becomes just who you are \u2014 and people notice. People always notice who is safe to be around.',
              reflect:'Think about today. Was there a moment where this rule would have changed what you did?',
              prayer:'God, help me treat people the way I want to be treated \u2014 even when it\u2019s hard, even when they don\u2019t.'
            },
            {
              id:'fs-r2',
              title:'The Good Samaritan',
              scripture:{ ref:'Luke 10:36\u201337', text:'\u201cWhich one of these three men do you think was a neighbor to the man?\u201d The teacher answered, \u201cThe one who showed him mercy.\u201d Jesus said, \u201cThen go and do the same thing.\u201d' },
              body:'Jesus told this story when somebody asked Him who counts as a neighbor.\n\nA man was walking down a road and got attacked by robbers. They took everything and left him hurt on the side of the road.\n\nA priest walked by. He saw the man \u2014 and crossed to the other side of the road.\n\nThen another important religious man walked by. He did exactly the same thing.\n\nThen a Samaritan came along. Samaritans and Jews did not like each other at all. He should have been the one to keep walking.\n\nInstead he stopped. He cleaned the man\u2019s cuts. He put him on his own donkey, took him somewhere safe, and paid for him to stay there until he got better.\n\nJesus asked: which one was a real neighbor? And then He said \u2014 go do that.\n\nA neighbor isn\u2019t just someone who lives near you. It\u2019s anyone who needs help that you can give.',
              reflect:'Have you ever seen someone who needed help and kept walking? What made it hard to stop?',
              prayer:'God, help me be the one who stops. Give me eyes to notice people who need help.'
            },
            {
              id:'fs-r3',
              title:'Telling the truth',
              scripture:{ ref:'Ephesians 4:25', text:'So you must stop telling lies. Tell each other the truth, because we all belong to each other.' },
              body:'Lying feels like it makes a problem smaller. It almost always makes it bigger.\n\nHere\u2019s why. One lie usually needs another lie to hold it up. And then that one needs another. Pretty soon you\u2019re carrying around a stack of them and worrying about which one you told to who.\n\nTelling the truth can be scary. Sometimes you know you\u2019ll get in trouble.\n\nBut here\u2019s the thing \u2014 the trouble from telling the truth is almost always smaller than the trouble from getting caught in a lie. And it\u2019s over faster.\n\nThere\u2019s something else too. People find out who tells the truth. When you\u2019re known as someone honest, people trust you \u2014 and being trusted is worth more than getting out of trouble one time.\n\nIf you\u2019ve already told a lie, you can fix it. Just go say, \u201cI wasn\u2019t honest about something.\u201d It takes about five seconds of bravery.',
              reflect:'Is there something you haven\u2019t been honest about? What would it take to fix it?',
              prayer:'God, help me be honest even when it\u2019s scary. Give me courage to tell the truth.'
            },
            {
              id:'fs-r4',
              title:'Forgiving someone',
              scripture:{ ref:'Colossians 3:13', text:'Forgive each other. Forgive as the Lord forgave you.' },
              body:'When someone hurts you, forgiving them can feel impossible. It can even feel unfair \u2014 like you\u2019re saying what they did was okay.\n\nBut forgiving doesn\u2019t mean it was okay. It means you\u2019re not going to carry it around anymore.\n\nThink about carrying a heavy backpack full of rocks. Every mean thing someone did is a rock. If you never put them down, you\u2019re the one carrying all that weight around \u2014 not them.\n\nForgiving is putting the backpack down.\n\nAlso, forgiving doesn\u2019t always mean being best friends again. If someone keeps being mean, you\u2019re allowed to not spend as much time with them. Forgiving and trusting are two different things.\n\nAnd it usually doesn\u2019t happen all at once. Sometimes you have to forgive the same thing more than once, when the feeling comes back. That\u2019s normal.',
              reflect:'Is there someone you\u2019re still upset with? What would putting that rock down feel like?',
              prayer:'God, it\u2019s hard to forgive. Help me put it down instead of carrying it. You forgave me, so help me do the same.'
            },
            {
              id:'fs-r5',
              title:'Standing up for people',
              scripture:{ ref:'Proverbs 31:8', text:'Speak up for those who cannot speak for themselves.' },
              body:'When someone is being picked on, there are usually three kinds of people there.\n\nThe person being mean. The person getting hurt. And everybody else, watching and not saying anything.\n\nMost people are in that third group. It\u2019s the easiest place to be, because nothing happens to you.\n\nBut here\u2019s something worth knowing: the person getting picked on remembers who said nothing. And they remember, for a very long time, who said something.\n\nStanding up doesn\u2019t have to mean fighting. Usually it\u2019s smaller than that. Saying \u201chey, stop.\u201d Going and standing next to them. Telling a teacher. Asking them to come sit with you afterwards.\n\nOne person deciding not to stay quiet can change everything \u2014 because usually everybody else was waiting for someone to go first.\n\nBe the one who goes first.',
              reflect:'Have you ever seen someone get picked on? What could you do next time?',
              prayer:'God, make me brave enough to speak up when someone needs it. Help me not just watch.'
            },
            {
              id:'fs-r6',
              title:'Being kind on purpose',
              scripture:{ ref:'Ephesians 4:32', text:'Be kind and loving to each other. Forgive each other just as God forgave you in Christ.' },
              body:'Kindness isn\u2019t only about not being mean. Anybody can just not be mean \u2014 that only takes doing nothing.\n\nReal kindness takes doing something.\n\nIt\u2019s noticing the kid sitting alone and going over. It\u2019s saying the nice thing out loud instead of just thinking it. It\u2019s helping clean up when nobody asked you to.\n\nHere\u2019s a fun thing to try: do something kind and don\u2019t tell anyone you did it. No credit. Nobody knows but you and God.\n\nThat one is harder than it sounds! We really like getting credit.\n\nBut kindness that\u2019s just for show isn\u2019t really kindness \u2014 it\u2019s showing off wearing a kindness costume. The real thing doesn\u2019t need an audience.\n\nAnd kind people are the ones everybody wants around. Not the funniest, not the best at sports. The kind ones.',
              reflect:'What is one kind thing you could do tomorrow that nobody would find out about?',
              prayer:'God, help me be kind on purpose \u2014 even when nobody sees, even when nobody says thanks.'
            }
          ]
        },
        {
          id:'stories',
          title:'Stories Jesus Told',
          icon:'\ud83d\udcd6',
          summary:'The stories Jesus used to explain what God is like.',
          lessons:[
            {
              id:'fs-t1',
              title:'The lost sheep',
              scripture:{ ref:'Luke 15:4', text:'Suppose one of you has a hundred sheep and loses one of them. Won\u2019t he leave the other ninety-nine and go and look for the lost one until he finds it?' },
              body:'A shepherd had a hundred sheep. At the end of the day he counted them, and there were only ninety-nine.\n\nHere\u2019s what most people would do: shrug. Ninety-nine out of a hundred is pretty good.\n\nBut this shepherd left all ninety-nine and went out looking for the one. In the dark. And he didn\u2019t stop until he found it.\n\nWhen he did, he didn\u2019t yell at it. He picked it up, carried it home on his shoulders, and threw a party.\n\nJesus told this story to explain how God feels about people.\n\nHere\u2019s the part to remember: you are not one out of a hundred to God. If you were the only person who ever lived, He still would have come.\n\nGod is not a shepherd who counts. He\u2019s a shepherd who goes looking.',
              reflect:'How does it feel knowing God would come looking just for you?',
              prayer:'God, thank you that you don\u2019t give up on people. Thank you that you\u2019d come looking for me.'
            },
            {
              id:'fs-t2',
              title:'The son who came home',
              scripture:{ ref:'Luke 15:20', text:'While the son was still a long way off, his father saw him and felt sorry for him. So the father ran to his son and hugged him.' },
              body:'A young man told his dad he didn\u2019t want to wait for his inheritance \u2014 he wanted his money now. That was basically saying, \u201cI wish you were dead.\u201d\n\nHis dad gave it to him anyway. The son left and spent every bit of it.\n\nThen he ran out of money and ended up feeding pigs, so hungry he wanted to eat the pig food. And he thought: even the workers at my dad\u2019s house eat better than this.\n\nSo he practiced a little speech and started walking home.\n\nHere\u2019s the best part. While he was still far away \u2014 still a tiny dot on the road \u2014 his father saw him. Which means his father had been watching. Every day.\n\nAnd then his father ran. Grown men in that time did not run; it was undignified. He didn\u2019t care.\n\nThe son started his speech. His dad wasn\u2019t even listening \u2014 he was already shouting for a party.\n\nThat is what God is like when someone comes back.',
              reflect:'The dad was watching the road every day. What does that tell you about how God feels about people who are far away?',
              prayer:'God, thank you that you run toward people instead of away. Thank you that I can always come home.'
            },
            {
              id:'fs-t3',
              title:'Two houses',
              scripture:{ ref:'Matthew 7:24', text:'Everyone who hears my words and obeys them is like a wise man who built his house on rock.' },
              body:'Two men built houses.\n\nOne built his on rock. It was harder. Digging into rock takes a long time and it\u2019s no fun.\n\nThe other built his on sand. Way easier. Way faster. And when they were finished, both houses looked exactly the same.\n\nThen the storm came.\n\nThe house on the rock stayed standing. The house on the sand fell down flat.\n\nJesus said the rock is hearing what He says and actually doing it. The sand is hearing it and not doing anything about it.\n\nHere\u2019s why that matters: on a sunny day, you cannot tell the two houses apart. The difference only shows up when things get hard.\n\nThat\u2019s why the small stuff counts \u2014 being honest, being kind, praying when nothing is wrong. That\u2019s digging into rock. It doesn\u2019t look like much until you need it.',
              reflect:'What is one small thing you could do this week that builds on rock?',
              prayer:'God, help me actually do what you say, not just hear it. Help me build on rock.'
            },
            {
              id:'fs-t4',
              title:'The tiny seed',
              scripture:{ ref:'Matthew 13:31\u201332', text:'The kingdom of heaven is like a mustard seed that a man planted in his field. It is the smallest of all seeds, but when it grows, it is the largest of the garden plants.' },
              body:'A mustard seed is tiny. Smaller than the tip of a pencil. You could lose it in your hand.\n\nBut you plant that tiny thing and it grows into something so big that birds build nests in it.\n\nJesus said God\u2019s kingdom works like that.\n\nIt means small things aren\u2019t nothing. A small kindness. A small prayer. A small bit of faith on a day you barely have any.\n\nJesus actually said once that if you have faith the size of a mustard seed, that\u2019s enough. Not mountains of faith. A seed.\n\nSo if you ever feel like what you have to offer is too small to matter \u2014 remember this. God specializes in tiny things that grow into big ones.\n\nSeeds also grow slowly. You can\u2019t watch it happen. But it\u2019s happening the whole time, under the ground where you can\u2019t see.',
              reflect:'What is one small good thing you could plant this week, even if you can\u2019t see it grow yet?',
              prayer:'God, my faith feels small sometimes. Thank you that small is enough for you to work with.'
            },
            {
              id:'fs-t5',
              title:'The man who wouldn\u2019t forgive',
              scripture:{ ref:'Matthew 18:33', text:'\u201cYou should have shown mercy to that other servant, just as I showed mercy to you.\u201d' },
              body:'A servant owed the king a huge amount of money \u2014 more than he could ever pay back in his whole life.\n\nHe begged the king for more time. Instead, the king just canceled the whole thing. Gone. All of it.\n\nThen that same servant walked outside and ran into a guy who owed him a tiny amount. Like lunch money compared to what he\u2019d just been forgiven.\n\nAnd he grabbed him and had him thrown in jail over it.\n\nWhen the king found out, he was furious. You should have shown mercy, the way I showed you mercy.\n\nJesus told this story about forgiving people.\n\nHere\u2019s the point. God has forgiven us for way more than anybody has ever done to us. So when we refuse to forgive somebody over something small, it looks pretty strange.\n\nThat doesn\u2019t make forgiving easy. It just helps you remember you\u2019re not the only one who\u2019s needed it.',
              reflect:'Think of something you needed forgiveness for. Now think of someone you\u2019re still upset with.',
              prayer:'God, you\u2019ve forgiven me for so much. Help me remember that when it\u2019s my turn to forgive someone.'
            },
            {
              id:'fs-t6',
              title:'Two men praying',
              scripture:{ ref:'Luke 18:13\u201314', text:'The tax collector would not even look up to heaven. He said, \u201cGod, have mercy on me, a sinner.\u201d I tell you, this man went home right with God.' },
              body:'Two men went to the temple to pray.\n\nThe first one was very religious. He stood up front and prayed loudly about how good he was. \u201cThank you God that I\u2019m not like other people. I don\u2019t cheat. I fast twice a week. I give money.\u201d Every word of it was actually true.\n\nThe second man was a tax collector \u2014 which back then meant he cheated people for a living. Everybody knew it.\n\nHe stood way in the back. He couldn\u2019t even look up. He just said eight words: \u201cGod, have mercy on me, a sinner.\u201d\n\nJesus said the second man is the one who went home right with God.\n\nThat probably shocked everybody listening.\n\nHere\u2019s why. The first man didn\u2019t think he needed anything, so he didn\u2019t get anything. The second man knew he needed help, so he asked \u2014 and he got it.\n\nYou never have to clean yourself up before talking to God. You just have to be honest.',
              reflect:'Which of those two men is easier for you to be like? Why do you think that is?',
              prayer:'God, I don\u2019t want to pretend I have it all figured out. Have mercy on me. Thank you for listening anyway.'
            }
          ]
        },
        {
          id:'questions',
          title:'Questions You Might Have',
          icon:'\u2753',
          summary:'Honest answers to the things kids actually wonder about.',
          lessons:[
            {
              id:'fs-q1',
              title:'Where is God?',
              scripture:{ ref:'Psalm 139:7\u20138', text:'Where can I go to get away from your Spirit? Where can I run from you? If I go up to the skies, you are there. If I lie down where the dead are, you are there.' },
              body:'You can\u2019t see God. That\u2019s a real thing to wonder about, and it\u2019s a fair question.\n\nHere\u2019s one way to think about it. You can\u2019t see the wind either. But you can see the trees moving. You can feel it on your face. You know it\u2019s there because of what it does.\n\nGod is a bit like that. You see what He does \u2014 in the world He made, in people being kind, in the way you feel not-alone when you pray.\n\nThe Bible says God is everywhere. Not just at church. Not just when you\u2019re being good. In your room. On the bus. When you\u2019re happy and when you\u2019re having the worst day.\n\nThere is no place you can go where God isn\u2019t already there waiting.\n\nAnd if you ever feel like God is far away \u2014 that feeling is not the same as it being true. Feelings change. God doesn\u2019t move.',
              reflect:'Where is a place you feel closest to God? Where do you feel furthest?',
              prayer:'God, I can\u2019t see you, but you\u2019re here. Help me remember that even when I don\u2019t feel it.'
            },
            {
              id:'fs-q2',
              title:'Why doesn\u2019t God just fix everything?',
              scripture:{ ref:'Revelation 21:4', text:'He will wipe away every tear from their eyes. There will be no more death, sadness, crying, or pain.' },
              body:'This is one of the hardest questions there is, and grown-ups ask it too.\n\nIf God is good and God is strong, why are there still sad things?\n\nHere\u2019s an honest answer: nobody knows all of it. Anyone who says they completely understand is making it up.\n\nBut here are two things the Bible does say.\n\nFirst, God gave people real choices. And when people choose badly, it hurts other people. God didn\u2019t want to make robots who could only do what they\u2019re told \u2014 because love you\u2019re forced to give isn\u2019t really love.\n\nSecond, God is not okay with it either. He\u2019s not up there shrugging. Jesus came right into the middle of the mess and He cried at a funeral. And the Bible ends with a promise that one day He wipes away every tear, and pain is finished for good.\n\nSo it\u2019s not fixed yet. But it is going to be. And in the meantime, God is with us in it instead of watching from far away.',
              reflect:'Is there something sad you\u2019ve wondered about? It\u2019s okay to ask God about it \u2014 He isn\u2019t bothered by questions.',
              prayer:'God, some things don\u2019t make sense and they make me sad. Thank you that you\u2019re not okay with them either, and that one day you\u2019ll fix everything.'
            },
            {
              id:'fs-q3',
              title:'Does God hear me?',
              scripture:{ ref:'1 John 5:14', text:'We can come to God with no doubts. This means that when we ask God for things (and those things agree with what God wants for us), God cares and listens.' },
              body:'When you pray, nothing usually happens right away. No voice. No lights. So it\u2019s normal to wonder if anyone\u2019s actually listening.\n\nYes. He is.\n\nGod isn\u2019t too busy. He isn\u2019t only listening to grown-ups, or pastors, or people who use fancy words. The Bible says He knows how many hairs are on your head \u2014 which is a funny way of saying He pays attention to details nobody else would bother with.\n\nBut here\u2019s something important. God listening doesn\u2019t always mean you get what you asked for.\n\nSometimes the answer is yes. Sometimes it\u2019s no. Sometimes it\u2019s not yet.\n\nThat\u2019s hard, especially when you really wanted the yes. But a no from someone who loves you and can see the whole picture isn\u2019t the same as being ignored.\n\nKeep praying anyway. Even when you don\u2019t get an answer you like. Especially then.',
              reflect:'Have you ever prayed for something and not gotten it? How did that feel?',
              prayer:'God, thank you for listening even when I can\u2019t tell. Help me trust you when the answer isn\u2019t what I wanted.'
            },
            {
              id:'fs-q4',
              title:'What happens when we die?',
              scripture:{ ref:'John 14:2\u20133', text:'There are many rooms in my Father\u2019s house\u2026 I am going there to prepare a place for you. I will come back and take you to be with me.' },
              body:'This might be something you think about at night. Lots of kids do, and lots of grown-ups too.\n\nHere\u2019s what Christians believe.\n\nDying is not the end. Jesus died and then came back alive \u2014 that\u2019s the whole reason for Easter. And He said that because He\u2019s alive, people who trust Him get to be alive with Him too.\n\nJesus called it His Father\u2019s house with lots of rooms. He said He\u2019s getting a place ready.\n\nThe Bible says there will be no more crying and no more pain there. Nothing scary. Nothing sad.\n\nIf someone you love has died, it\u2019s okay to be really sad about it. Missing them isn\u2019t a lack of faith. Jesus cried when His friend died, and He knew exactly what happens next.\n\nBeing sad and having hope can be true at the same time.',
              reflect:'Do you have questions about this? Ask a grown-up who loves you \u2014 it\u2019s a good thing to talk about, not a scary one.',
              prayer:'God, thank you that death isn\u2019t the end. Help me not be scared, and help me when I miss people.'
            },
            {
              id:'fs-q5',
              title:'Am I good enough?',
              scripture:{ ref:'Ephesians 2:8\u20139', text:'You have been saved by grace because you believe. You did not save yourselves. It was a gift from God. It was not the result of your own efforts, so you cannot brag about it.' },
              body:'Here\u2019s a question a lot of people carry around quietly: am I good enough for God to love me?\n\nThe answer is no. And that\u2019s actually good news, so stay with me.\n\nNobody is good enough. Not the best kid in your class. Not your parents. Not the pastor. Nobody has ever earned it.\n\nWhich means God\u2019s love was never something you get by being good enough in the first place. It\u2019s a gift.\n\nThink about a birthday present. You don\u2019t earn a present. Somebody just gives it to you because they wanted to. If you had to work for it, it wouldn\u2019t be a present anymore.\n\nSo you can stop trying to be good enough. You already have it.\n\nAnd here\u2019s the part that surprises people: once you really believe you\u2019re loved no matter what, you actually want to do good things more \u2014 not because you\u2019re scared of losing it, but because you\u2019re thankful.',
              reflect:'Do you ever feel like you have to earn God\u2019s love? What would change if you knew for sure you already had it?',
              prayer:'God, thank you that your love is a gift and not a prize. Help me believe that even on my worst days.'
            },
            {
              id:'fs-q6',
              title:'What if I have doubts?',
              scripture:{ ref:'Mark 9:24', text:'The father said, \u201cI do believe! Help me to believe more!\u201d' },
              body:'Sometimes you might wonder if any of this is even real. That can feel scary, like maybe you\u2019re doing something wrong.\n\nYou\u2019re not.\n\nThere\u2019s a story in the Bible about a dad whose son was very sick. He asked Jesus for help and said, \u201cif you can do anything, please help us.\u201d\n\nJesus asked him about believing. And the dad said the most honest thing in the whole Bible: \u201cI do believe \u2014 help me believe more!\u201d\n\nBoth at once. Believing and doubting, in the same sentence.\n\nAnd Jesus helped him. He didn\u2019t say come back when you\u2019ve sorted yourself out. He just helped.\n\nSo if you have questions, ask them. Ask your parents. Ask a pastor. Ask God straight out.\n\nQuestions don\u2019t break faith. Hiding them does, because a question you never ask just sits there getting bigger.\n\nGod is not nervous about your questions. He\u2019s the one who made you curious.',
              reflect:'Is there a question about God you\u2019ve never asked out loud? Who could you ask?',
              prayer:'God, I believe \u2014 and sometimes I don\u2019t. Help me believe more. Thank you that you don\u2019t mind my questions.'
            }
          ]
        }
      ]
    }
  ];

  const CHARACTERS = [
    { id:'jesus', name:'Jesus', icon:'\u271d\ufe0f', tag:'The whole story, from His side',
      summary:'Most people meet Jesus through four books written about Him. This walks the same road from inside His own life \u2014 what He chose, what it cost Him, what He said when almost nobody understood, and what He was steadily walking toward.',
      beats:[
        { t:'Before Bethlehem',
          d:'John does not begin with a manger. He begins before the world existed: the Word was with God, and the Word was God. Everything that follows is that person choosing to enter His own creation. Not sent reluctantly, not arriving as a visitor \u2014 stepping into a story He wrote, as a character who could bleed.' },
        { t:'Thirty quiet years',
          d:'We have almost nothing from His first three decades. A carpenter in a small town under Roman occupation, in a family that eventually included brothers who did not believe Him. One glimpse at twelve, sitting with teachers in the temple, telling His frantic parents He had to be in His Father\u2019s house. Then silence again for eighteen years. Whatever He was, He was in no rush to prove it.' },
        { t:'The wilderness',
          d:'Right after His baptism \u2014 after the voice from heaven says beloved Son \u2014 He is driven into the desert and starved for forty days. Every temptation offers a shortcut to something He would eventually receive anyway: bread, safety, kingdoms. He refuses all three. He would get to the same destination, but by the long road, through the cross.' },
        { t:'Rejected at home',
          d:'His first sermon in Nazareth ends with the town trying to throw Him off a cliff. He reads Isaiah aloud, says the words are about Him, and the people who watched Him grow up cannot hold both things at once. He never lives there again. The gospel is preached first where He was known best, and it is refused there first too.' },
        { t:'The people He chose',
          d:'Not scholars. Fishermen, a tax collector working for the occupying empire, a political revolutionary, and a man who would sell Him. He spent three years with people who consistently missed the point, argued about who was greatest, and fell asleep when He asked them to stay awake. He never traded them in.' },
        { t:'Touching the untouchable',
          d:'A leper asks to be made clean. Jesus could have healed with a word \u2014 He does elsewhere. Instead He reaches out and touches a man no one had touched in years. That gesture runs through everything: the bleeding woman, the tax collectors\u2019 dinner tables, the Samaritan woman at noon, the children people tried to shoo away. He kept going to whoever had been pushed out.' },
        { t:'Teaching in stories',
          d:'He rarely explained Himself directly. He told stories about farmers, lost coins, wayward sons, and unfair employers \u2014 and let them work slowly. When people wanted a clean rule, He gave them a parable that indicted them. When they wanted a fight, He asked a question back. He seemed far more interested in changing what people wanted than in winning arguments.' },
        { t:'The loneliness of being right',
          d:'His family thought He was out of His mind. His hometown rejected Him. Crowds followed Him for bread and left when the teaching got hard \u2014 and He asked the twelve if they wanted to go too. Even Peter, who confessed Him as Messiah, tried to talk Him out of the cross minutes later. Almost nobody understood what He was doing until after it was done.' },
        { t:'Setting His face toward Jerusalem',
          d:'Luke marks the turn: He resolutely set out for Jerusalem. From there the whole gospel bends toward one week. He told them three times what would happen there and they could not hear it. He wept over the city that would kill Him, not for Himself, but for what it was missing.' },
        { t:'The towel',
          d:'On the last night, knowing everything He had come from and was going to, He got up from dinner, wrapped a towel around His waist, and washed the feet of twelve men \u2014 including the one already arranged to betray Him. It was the job of the lowest servant in the house. He never explained His authority more clearly than He did on His knees.' },
        { t:'Gethsemane',
          d:'This is the least guarded moment in His life. He tells His friends His soul is overwhelmed to the point of death, and asks them just to stay awake. Then He asks the Father three times to take the cup away. He does not want to do this. He does it anyway \u2014 not with calm certainty, but sweating, grieving, and choosing: not my will, but yours.' },
        { t:'The silence at the trial',
          d:'Accused, He mostly said nothing. Pilate is baffled by it. He had every argument available and used almost none of them. The one time He answers clearly is when asked directly if He is the Son of God \u2014 the answer that guarantees the sentence.' },
        { t:'The cross',
          d:'Between the nails and the mockery, He forgave the soldiers, promised paradise to a criminal dying beside Him, and made sure His mother would be cared for. Then the worst moment: my God, why have you forsaken me. Whatever else the cross is, it includes a Son experiencing the absence of His Father. And then \u2014 not a defeat, but a completion \u2014 it is finished.' },
        { t:'Sunday',
          d:'He appears first to a woman, in a culture where her testimony would not stand in court. He cooks breakfast on a beach for the men who abandoned Him. He lets Thomas touch the wounds instead of shaming him for asking. Even risen and vindicated, He is still doing what He always did: going to whoever feels furthest away.' }
      ],
      takeaway:'He knew what it would cost before He started, and He came anyway \u2014 for people who would not understand Him until it was over.' },

    { id:'david', name:'David', icon:'\ud83d\udc51', tag:'Shepherd, fugitive, king, failure, poet',
      summary:'Scripture gives more space to David than almost anyone, and refuses to clean him up. He is the giant-killer and the adulterer, the man after God\u2019s own heart and the father who lost his son to a rebellion he half-caused.',
      beats:[
        { t:'The one nobody called',
          d:'Samuel arrives to anoint a king and Jesse lines up seven sons. Not one of them is it. David is not even invited in from the field \u2014 they have to send for him. The chapter\u2019s whole point is stated plainly: people look at appearances, God looks at the heart.' },
        { t:'Goliath',
          d:'An entire army is paralyzed for forty days. A teenager shows up delivering bread, hears the giant, and is genuinely confused that nobody has done anything. He refuses the king\u2019s armor because he has never worn it, and goes with what he actually knows: a sling, and a God who has already gotten him through a lion and a bear.' },
        { t:'Hunted',
          d:'His reward for saving the nation is a decade on the run from a king who throws spears at him. He hides in caves, fakes madness to survive, and twice has Saul completely at his mercy \u2014 and both times refuses to kill him. Many of the psalms come out of these years. He is not writing from a palace; he is writing from a cave.' },
        { t:'Dancing before the ark',
          d:'When he finally brings the ark into Jerusalem he dances so hard his wife despises him for it. His answer is that he will become even more undignified than this. Whatever else he was, he was not self-conscious about God.' },
        { t:'Bathsheba',
          d:'At the season when kings go to war, he stays home. He sees a woman bathing, sends for her, sleeps with her, and when she is pregnant he tries to cover it. When her husband \u2014 one of his most loyal soldiers \u2014 refuses to go home while his comrades are in the field, David has him killed. Every step is worse than the last, and none of it happens in a moment of passion. It is a series of deliberate decisions.' },
        { t:'You are the man',
          d:'Nathan tells him a story about a rich man stealing a poor man\u2019s only lamb. David is furious and demands justice \u2014 and then Nathan says: you are the man. The trap works because David\u2019s sense of right and wrong was still intact. He just had not turned it on himself.' },
        { t:'Psalm 51',
          d:'He does not defend himself or manage the story. He writes the rawest confession in Scripture \u2014 create in me a clean heart, do not take your Spirit from me \u2014 and then publishes it as a song for the whole nation to sing. He made his worst moment part of Israel\u2019s worship.' },
        { t:'The cost',
          d:'Forgiveness does not undo consequences. The child dies. His household fractures. His son Amnon assaults his daughter Tamar and David does nothing, and Absalom eventually kills Amnon for it and turns against his father.' },
        { t:'Absalom',
          d:'His own son drives him out of Jerusalem, and David leaves weeping and barefoot rather than fight him. When the news comes that Absalom is dead, his army has just won \u2014 and the king is inconsolable: O Absalom, my son, my son, would I had died instead of you.' },
        { t:'The end',
          d:'An old man, cold, arranging the temple he was told he could not build \u2014 gathering the gold and the plans for a son who would finish it. He never saw the thing he spent his last years preparing.' }
      ],
      takeaway:'A heart after God is not a clean record. It is where you run once you have wrecked one.' },

    { id:'peter', name:'Peter', icon:'\ud83e\udea8', tag:'The one who kept failing forward',
      summary:'Loud, impulsive, frequently wrong, and always first to speak. He is the disciple most like the rest of us, which is probably why the Gospels keep his failures in.',
      beats:[
        { t:'Leave the nets',
          d:'Jesus borrows his boat, then tells a professional fisherman where to fish after a night of catching nothing. The nets nearly break. Peter\u2019s first reaction is not excitement \u2014 it is go away from me, I am a sinful man. Jesus\u2019 answer is to call him anyway.' },
        { t:'Out of the boat',
          d:'He is the only one who asks to walk on water, and the only one who does. He also sinks. Both halves are true, and both are him: more faith than anyone else in the boat, and not enough to finish the walk.' },
        { t:'You are the Messiah',
          d:'The high point. Jesus asks who they say He is, and Peter gets it exactly right \u2014 and is told this was revealed to him by the Father. Then Jesus explains He must die, Peter rebukes Him for it, and hears the harshest words Jesus ever said to a disciple. Minutes apart.' },
        { t:'The sword',
          d:'In the garden he does the bravest, stupidest thing available: draws a sword against an armed detachment and cuts off a man\u2019s ear. He was willing to die fighting. He was not prepared for a Messiah who would not let him.' },
        { t:'Three denials',
          d:'Hours after swearing he would die first, he is warming himself at a fire in the courtyard, telling a servant girl he does not know the man. Third time, the rooster crows \u2014 and Luke adds the detail that guts you: the Lord turned and looked straight at Peter.' },
        { t:'Breakfast',
          d:'After the resurrection Jesus finds him fishing again, back where he started. There is a charcoal fire on the beach \u2014 the same word used for the fire he denied Jesus beside. Three denials, three questions: do you love me. No lecture, no probation. Just: feed my sheep.' },
        { t:'Pentecost',
          d:'Fifty days later the same man stands in the same city and preaches to thousands, including people who called for the crucifixion. Three thousand believe. The distance between the courtyard and that sermon is the whole point of his story.' },
        { t:'The rooftop',
          d:'Even after all that, God has to show him a vision three times to convince him Gentiles are not unclean. Peter argues with God twice more in one book. Growth was never a straight line for him.' }
      ],
      takeaway:'Failure was not the end of his story. It was the middle of it \u2014 and it made him useful.' },

    { id:'paul', name:'Paul', icon:'\u2709\ufe0f', tag:'From persecutor to apostle',
      summary:'He hunted Christians house to house with legal warrants. Then a light on a road, and the rest of his life spent building what he had tried to destroy \u2014 while never once acting like he had earned the right to.',
      beats:[
        { t:'Holding the coats',
          d:'He first appears at Stephen\u2019s execution, minding the witnesses\u2019 cloaks and approving. Which means he stood there and heard a man he was helping kill pray that God would forgive them. He never mentions whether it stayed with him. It is hard to imagine it did not.' },
        { t:'The road',
          d:'A light, and a voice: Saul, why do you persecute me? Not why do you persecute my followers \u2014 me. That single word shaped everything he later wrote about the church being Christ\u2019s body. He gets up blind and has to be led by the hand into the city he came to raid.' },
        { t:'Brother Saul',
          d:'God sends an ordinary disciple named Ananias to him. Ananias argues \u2014 reasonably, this man arrests people like me \u2014 and then goes anyway, lays hands on him, and calls him brother. The most influential Christian in history was welcomed in by a man who appears in five verses.' },
        { t:'The wilderness years',
          d:'He does not immediately launch a ministry. He disappears into Arabia and then Tarsus for years, and the church he once terrorized has to learn to trust him. Barnabas is the one who eventually vouches for him.' },
        { t:'The road again, and again',
          d:'Three missionary journeys: stoned and left for dead at Lystra, beaten and jailed in Philippi, run out of city after city, shipwrecked three times. He plants churches and then writes them letters that become a third of the New Testament \u2014 mostly to fix problems, mostly from prison or on the move.' },
        { t:'The thorn',
          d:'He never says what it was. He begged God three times to remove it and got a no, plus a sentence: my grace is sufficient for you, my power is made perfect in weakness. He stopped asking and started boasting about it. The unanswered prayer became his clearest theology.' },
        { t:'Confronting Peter',
          d:'When Peter stopped eating with Gentile believers under pressure, Paul opposed him publicly. He was willing to face down the most senior apostle alive over a meal, because the meal was preaching something the gospel was not.' },
        { t:'Chief of sinners',
          d:'Decades in, writing to Timothy, he calls himself the worst of sinners \u2014 present tense. Not was. He believed his own story was placed in Scripture as proof that nobody is beyond reach.' },
        { t:'The last letter',
          d:'From a cold cell awaiting execution: I have fought the good fight, I have finished the race, I have kept the faith. In the same letter he asks Timothy to bring his coat and his books, and notes that everyone deserted him at his trial \u2014 but the Lord stood at my side.' }
      ],
      takeaway:'He never got over being forgiven, and that is exactly what made him unstoppable.' },

    { id:'moses', name:'Moses', icon:'\ud83d\udcdc', tag:'The reluctant deliverer',
      summary:'A prince turned murderer turned shepherd turned liberator. He argued with God more than anyone in Scripture, and God kept the arguments in the text.',
      beats:[
        { t:'Saved by women',
          d:'His life is preserved by five women \u2014 two midwives who defy Pharaoh, his mother, his sister, and Pharaoh\u2019s own daughter. Before he does anything, he is carried by other people\u2019s courage.' },
        { t:'The murder',
          d:'Raised in the palace, he sees an Egyptian beating a Hebrew, looks both ways, and kills him. The next day two Hebrews mock him for it. He flees to the desert and stays forty years. His first attempt at deliverance was violence, in secret, and it failed completely.' },
        { t:'The bush',
          d:'Eighty years old, tending someone else\u2019s sheep, he gets the call. He offers five separate objections \u2014 who am I, what if they ask your name, they will not believe me, I am not a good speaker, please send someone else. God answers all five and gets angry at the last one, but still sends Aaron along.' },
        { t:'Ten rounds with Pharaoh',
          d:'The plagues are not random. Each one targets an Egyptian god \u2014 the Nile, the sun, livestock, the firstborn heir. It is a systematic dismantling of an empire\u2019s entire religion, and Pharaoh hardens against every one.' },
        { t:'The sea',
          d:'Trapped between water and an army, the people immediately turn on him: were there no graves in Egypt? He tells them to stand still and see \u2014 and then God tells him, oddly, to stop praying and move.' },
        { t:'Face to face',
          d:'On Sinai he spends forty days with God and comes down glowing so brightly he has to veil his face. Scripture says God spoke to him as a man speaks with his friend. He also asks to see God\u2019s glory and is told no one can see His face and live \u2014 so he is hidden in a rock and shown God\u2019s back.' },
        { t:'Standing in the gap',
          d:'When the people build the golden calf, God offers to destroy them and start over with Moses. He refuses. He argues God out of it, and then offers to be blotted out of the book himself if they can be spared. The man who did not want the job would not trade them away.' },
        { t:'The rock',
          d:'Forty years of complaints wear him down. Told to speak to a rock for water, he strikes it instead and shouts at the people: must we bring you water? For that, he is told he will not enter the land.' },
        { t:'Nebo',
          d:'He climbs a mountain, sees the whole country he spent forty years walking toward, and dies there. God buries him Himself, and no one knows where. He led people somewhere he was never allowed to go.' }
      ],
      takeaway:'God\u2019s call almost never waits for you to feel qualified \u2014 and it does not require you to be calm about it.' },

    { id:'abraham', name:'Abraham', icon:'\u2b50', tag:'Faith with a long wait in it',
      summary:'The Bible\u2019s benchmark for faith, whose faith failed repeatedly. Twenty-five years passed between the promise and the son, and he did not wait well.',
      beats:[
        { t:'Go',
          d:'Seventy-five years old, comfortable, and told to leave his country, his relatives, and his father\u2019s house for a land that is not named. He goes. Hebrews notes he set out without knowing where he was going.' },
        { t:'The lie',
          d:'Twice, afraid a king will kill him for his wife, he says Sarah is his sister and lets her be taken into a harem. The father of faith saved himself by endangering her. Scripture reports it without softening it.' },
        { t:'Counting stars',
          d:'Childless and old, he is taken outside and told to count the stars. He believed God, and it was credited to him as righteousness \u2014 the verse Paul later builds an entire theology on.' },
        { t:'Hagar',
          d:'Ten years in, they stop waiting. Sarah gives him her servant, and Ishmael is born. The consequences ripple through the rest of Genesis and past it. Trying to help God keep His promise created a wound that never fully closed.' },
        { t:'Laughing',
          d:'When told at ninety-nine that Sarah will have a son, he falls on his face laughing. She laughs too, then denies it. They name the boy Isaac \u2014 he laughs.' },
        { t:'Arguing for Sodom',
          d:'Told the city will be destroyed, he bargains God down from fifty righteous people to ten, careful and persistent, asking whether the Judge of all the earth will do right. He is not passive with God.' },
        { t:'Moriah',
          d:'The hardest chapter in Genesis. Take your son, your only son, whom you love, and offer him. He gets up early, walks three days, builds the altar, binds the boy, and raises the knife. The ram appears in the thicket. He names the place: the Lord will provide.' },
        { t:'Buying a grave',
          d:'At the end, the only land he ever owns in the country he was promised is a field with a cave, bought at full price to bury Sarah. The promise was real. He just did not get to hold it.' }
      ],
      takeaway:'Faith here is not certainty or patience. It is moving before you can see, and being kept even when you handle the waiting badly.' },

    { id:'mary', name:'Mary', icon:'\ud83c\udf1f', tag:'She said yes to everything it would cost',
      summary:'A teenager in an unimportant town said let it be, knowing the pregnancy could end her engagement and her standing. She was there at the beginning, and she was there at the cross.',
      beats:[
        { t:'The visit',
          d:'An angel calls her highly favored, and Luke says she was greatly troubled by the greeting itself. She asks one honest question \u2014 how, since I am a virgin \u2014 and then gives an answer that costs her everything: I am the Lord\u2019s servant, let it be to me as you have said.' },
        { t:'What it risked',
          d:'In her world an unexplained pregnancy meant a broken engagement, public shame, and possibly worse. Joseph planned to divorce her quietly before his own dream changed his mind. She said yes before she knew he would stay.' },
        { t:'The Magnificat',
          d:'Her song is not gentle. Rulers pulled from thrones, the humble lifted, the hungry filled, the rich sent away empty. A young peasant woman sings a revolution about the child she is carrying.' },
        { t:'A feeding trough',
          d:'No room. She gives birth in the company of animals and lays God in the place the food goes. The first visitors are shepherds \u2014 men whose testimony would not have been accepted in court.' },
        { t:'The warning',
          d:'At the temple, Simeon blesses them and then turns to her specifically: a sword will pierce your own soul too. She carried that sentence for thirty years.' },
        { t:'Treasuring things up',
          d:'Luke says it twice \u2014 she treasured all these things and pondered them in her heart. Magi, prophecies, a twelve-year-old telling her he had to be in his Father\u2019s house. She kept what she did not yet understand.' },
        { t:'Do whatever he tells you',
          d:'At the wedding in Cana she brings the problem to Him and gets what sounds like a deflection. She turns to the servants anyway. Her last recorded words in Scripture are instructions to obey her son.' },
        { t:'Thinking he was out of his mind',
          d:'Mark records that his family came to take charge of him, saying he is out of his mind. Even she did not track it the whole way. Faith and confusion lived in her at the same time.' },
        { t:'At the cross',
          d:'Most of the disciples ran. She stayed, and watched. And in the middle of dying He arranged for her care \u2014 woman, here is your son; to John, here is your mother.' }
      ],
      takeaway:'She said yes at the start without being shown the end, and she was still standing there when it came.' },

    { id:'elijah', name:'Elijah', icon:'\ud83d\udd25', tag:'Fire, then a broom tree',
      summary:'He called down fire in front of a nation and then, one day later, asked God to kill him. Scripture\u2019s most honest portrait of collapse after a victory.',
      beats:[
        { t:'Out of nowhere',
          d:'He appears with no introduction and announces a drought to the most wicked king in Israel\u2019s history. Then he disappears to a brook, fed by ravens, until the brook dries up too.' },
        { t:'The widow\u2019s jar',
          d:'He asks a starving widow for her last meal. She makes it, and the flour and oil do not run out. Later her son dies anyway, and she blames him \u2014 and he takes the boy upstairs and cries out to God about it.' },
        { t:'Carmel',
          d:'450 prophets against one. They shout at Baal for hours; Elijah mocks them, suggesting their god might be asleep or relieving himself. Then he soaks his altar with water three times, prays one short prayer, and fire falls. The whole nation faces down.' },
        { t:'The broom tree',
          d:'One threatening message from Jezebel, and the man who just faced 450 prophets runs for his life, sits under a tree in the desert, and asks to die. This is the day after his greatest victory.' },
        { t:'How God responds',
          d:'No rebuke. No speech about his lack of faith. An angel lets him sleep, wakes him, feeds him, and lets him sleep again. Then feeds him a second time, because the journey is too much for you. God treated exhaustion as exhaustion.' },
        { t:'The whisper',
          d:'At Horeb a great wind tears the mountain, then an earthquake, then fire \u2014 and God is in none of them. Then a low whisper. And the question, twice: what are you doing here, Elijah?' },
        { t:'You are not alone',
          d:'His complaint is I am the only one left. God corrects the arithmetic: seven thousand have not bowed to Baal. His despair had convinced him of something that was not true.' },
        { t:'Elisha, and the whirlwind',
          d:'He is given a successor \u2014 practical help, not just encouragement. And at the end he does not die: a chariot of fire, a whirlwind, and a cloak left behind for the man who watched.' }
      ],
      takeaway:'God met his burnout with food, rest, and a whisper before He gave him anything else to do.' },

    { id:'ruth', name:'Ruth', icon:'\ud83c\udf3e', tag:'Loyalty with nothing to gain',
      summary:'A foreign widow with no reason to stay chose a bitter mother-in-law and a God not her own, worked in fields for scraps, and ended up in the family line of David and Jesus.',
      beats:[
        { t:'Three funerals',
          d:'A famine drives an Israelite family to Moab. The father dies. The two sons marry Moabite women, and then both sons die too. Three widows are left with no income and no protection.' },
        { t:'Where you go',
          d:'Naomi tells both daughters-in-law to go home; she has nothing to offer them. Orpah does, sensibly. Ruth refuses: where you go I will go, your people will be my people, your God my God. She chose poverty and a foreign country over a fresh start at home.' },
        { t:'Bitter',
          d:'Naomi arrives home and tells the whole town to stop calling her Naomi \u2014 call me Mara, bitter, because the Almighty has dealt bitterly with me. Ruth stays anyway, attached to a woman who could barely see her.' },
        { t:'Gleaning',
          d:'She works behind the harvesters picking up leftovers, which was the law\u2019s provision for the poor and a vulnerable place for a foreign woman to be. Boaz notices, tells his men to leave her alone, and quietly instructs them to drop extra grain on purpose.' },
        { t:'The threshing floor',
          d:'On Naomi\u2019s risky advice she approaches Boaz at night and asks him to spread his cloak over her \u2014 a request for marriage and protection under the law. He calls it kindness greater than the first, and handles it honorably.' },
        { t:'The redeemer',
          d:'A nearer relative has first claim and backs out when he learns it means taking Ruth as well. Boaz redeems the land and marries her in front of the town elders.' },
        { t:'The last line',
          d:'The women tell Naomi her daughter-in-law is worth more to her than seven sons. The book ends with a genealogy: Ruth\u2019s son, then his son, then David. Matthew names her again in the line of Jesus \u2014 one of only a few women listed, and a Moabite.' }
      ],
      takeaway:'She had no idea she was in a story that mattered. She just kept showing up for someone who could not repay her.' }
  ];

  const TOPICS = [
    { id:'anxious', icon:'\ud83d\ude30', label:'Anxious or worried', keywords:['anxious','anxiety','worry','worried','stress','stressed','panic','fear','afraid','nervous','overwhelmed'],
      intro:'God never once tells you to feel calm before you come to Him \u2014 He tells you to bring it.',
      verses:[
        { ref:'Philippians 4:6\u20137', text:'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds.' },
        { ref:'1 Peter 5:7', text:'Cast all your anxiety on him because he cares for you.' },
        { ref:'Matthew 6:34', text:'Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.' },
        { ref:'Isaiah 41:10', text:'Fear not, for I am with you; be not dismayed, for I am your God. I will strengthen you and help you.' },
        { ref:'Psalm 94:19', text:'When anxiety was great within me, your consolation brought me joy.' }
      ] },
    { id:'grieving', icon:'\ud83d\udcad', label:'Grieving or hurting', keywords:['grief','grieving','loss','died','death','mourning','mourn','hurt','hurting','pain','broken','heartbroken','sad'],
      intro:'Scripture never rushes grief. It gives it a whole book, and God Himself weeps in it.',
      verses:[
        { ref:'Psalm 34:18', text:'The LORD is close to the brokenhearted and saves those who are crushed in spirit.' },
        { ref:'Matthew 5:4', text:'Blessed are those who mourn, for they will be comforted.' },
        { ref:'Revelation 21:4', text:'He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away.' },
        { ref:'John 11:35', text:'Jesus wept.' },
        { ref:'Psalm 147:3', text:'He heals the brokenhearted and binds up their wounds.' },
        { ref:'2 Corinthians 1:3\u20134', text:'The Father of compassion and the God of all comfort, who comforts us in all our troubles.' }
      ] },
    { id:'hope', icon:'\ud83c\udf05', label:'Needing hope', keywords:['hope','hopeless','discouraged','despair','giving up','give up','stuck','tired','weary','exhausted','burnt out','burned out'],
      intro:'Hope in Scripture isn\u2019t optimism about circumstances \u2014 it\u2019s confidence in who God is.',
      verses:[
        { ref:'Jeremiah 29:11', text:'For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.' },
        { ref:'Isaiah 40:31', text:'But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.' },
        { ref:'Lamentations 3:22\u201323', text:'Because of the LORD\u2019s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.' },
        { ref:'Romans 15:13', text:'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.' },
        { ref:'Galatians 6:9', text:'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.' }
      ] },
    { id:'guilt', icon:'\ud83d\udd4a\ufe0f', label:'Guilt or shame', keywords:['guilt','guilty','shame','ashamed','forgive','forgiveness','sin','sinned','failed','failure','unworthy','regret','mistake'],
      intro:'The distance God puts between you and your sin is measured in directions that never meet.',
      verses:[
        { ref:'1 John 1:9', text:'If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.' },
        { ref:'Psalm 103:12', text:'As far as the east is from the west, so far has he removed our transgressions from us.' },
        { ref:'Romans 8:1', text:'Therefore, there is now no condemnation for those who are in Christ Jesus.' },
        { ref:'Isaiah 1:18', text:'Though your sins are like scarlet, they shall be as white as snow.' },
        { ref:'Micah 7:19', text:'You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.' },
        { ref:'Psalm 51:10', text:'Create in me a pure heart, O God, and renew a steadfast spirit within me.' }
      ] },
    { id:'lonely', icon:'\ud83c\udf19', label:'Lonely or alone', keywords:['lonely','alone','isolated','abandoned','forgotten','nobody','friendless','left out'],
      intro:'The promise running through the whole Bible isn\u2019t an easy road \u2014 it\u2019s company on the road.',
      verses:[
        { ref:'Deuteronomy 31:6', text:'Be strong and courageous. Do not be afraid... for the LORD your God goes with you; he will never leave you nor forsake you.' },
        { ref:'Psalm 139:7\u201310', text:'Where can I go from your Spirit? Where can I flee from your presence?... even there your hand will guide me, your right hand will hold me fast.' },
        { ref:'Matthew 28:20', text:'And surely I am with you always, to the very end of the age.' },
        { ref:'Hebrews 13:5', text:'Never will I leave you; never will I forsake you.' },
        { ref:'Psalm 68:6', text:'God sets the lonely in families.' }
      ] },
    { id:'thankful', icon:'\ud83d\ude4f', label:'Thankful or joyful', keywords:['thankful','thanks','grateful','gratitude','joy','joyful','happy','praise','blessed','celebrate'],
      intro:'Gratitude in Scripture is mostly a discipline of accurate memory.',
      verses:[
        { ref:'Psalm 103:1\u20132', text:'Praise the LORD, my soul; all my inmost being, praise his holy name. Praise the LORD, my soul, and forget not all his benefits.' },
        { ref:'1 Thessalonians 5:16\u201318', text:'Rejoice always, pray continually, give thanks in all circumstances; for this is God\u2019s will for you in Christ Jesus.' },
        { ref:'Psalm 118:24', text:'This is the day that the LORD has made; let us rejoice and be glad in it.' },
        { ref:'James 1:17', text:'Every good and perfect gift is from above, coming down from the Father of the heavenly lights.' },
        { ref:'Philippians 4:4', text:'Rejoice in the Lord always. I will say it again: Rejoice!' }
      ] },
    { id:'decisions', icon:'\ud83e\udded', label:'Facing a decision', keywords:['decision','decide','choice','choose','guidance','direction','confused','lost','wisdom','what should i do','future','plan'],
      intro:'You draft the route; He establishes the steps. Both are real.',
      verses:[
        { ref:'Proverbs 3:5\u20136', text:'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.' },
        { ref:'James 1:5', text:'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.' },
        { ref:'Proverbs 16:9', text:'In their hearts humans plan their course, but the LORD establishes their steps.' },
        { ref:'Psalm 119:105', text:'Your word is a lamp for my feet, a light on my path.' },
        { ref:'Isaiah 30:21', text:'Whether you turn to the right or to the left, your ears will hear a voice behind you, saying, \u201cThis is the way; walk in it.\u201d' }
      ] },
    { id:'temptation', icon:'\u26a1', label:'Facing temptation', keywords:['temptation','tempted','struggle','struggling','addiction','habit','relapse','weakness','self control','discipline'],
      intro:'The one you\u2019re bringing this to was tempted in every way you are \u2014 and understands.',
      verses:[
        { ref:'1 Corinthians 10:13', text:'No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear.' },
        { ref:'Hebrews 4:15\u201316', text:'We do not have a high priest who is unable to empathize with our weaknesses... Let us then approach God\u2019s throne of grace with confidence.' },
        { ref:'James 4:7', text:'Submit yourselves, then, to God. Resist the devil, and he will flee from you.' },
        { ref:'Galatians 5:16', text:'So I say, walk by the Spirit, and you will not gratify the desires of the flesh.' },
        { ref:'Psalm 119:11', text:'I have hidden your word in my heart that I might not sin against you.' }
      ] },
    { id:'angry', icon:'\ud83d\ude24', label:'Angry or bitter', keywords:['angry','anger','mad','furious','bitter','bitterness','resentment','rage','hate','forgive someone','betrayed'],
      intro:'Scripture doesn\u2019t forbid anger \u2014 it warns about what you do with it and how long you keep it.',
      verses:[
        { ref:'Ephesians 4:26\u201327', text:'In your anger do not sin: do not let the sun go down while you are still angry, and do not give the devil a foothold.' },
        { ref:'James 1:19\u201320', text:'Everyone should be quick to listen, slow to speak and slow to become angry, because human anger does not produce the righteousness that God desires.' },
        { ref:'Proverbs 15:1', text:'A gentle answer turns away wrath, but a harsh word stirs up anger.' },
        { ref:'Colossians 3:13', text:'Bear with each other and forgive one another if any of you has a grievance against someone. Forgive as the Lord forgave you.' },
        { ref:'Romans 12:19', text:'Do not take revenge, my dear friends, but leave room for God\u2019s wrath.' }
      ] },
    { id:'doubt', icon:'\ud83e\udd14', label:'Doubting or questioning', keywords:['doubt','doubting','questions','questioning','unbelief','faith struggling','why god','does god exist','silent'],
      intro:'The Bible is full of people who argued with God \u2014 and it kept every word of it.',
      verses:[
        { ref:'Mark 9:24', text:'I do believe; help me overcome my unbelief!' },
        { ref:'Jude 1:22', text:'Be merciful to those who doubt.' },
        { ref:'John 20:27', text:'Then he said to Thomas, \u201cPut your finger here; see my hands... Stop doubting and believe.\u201d' },
        { ref:'Habakkuk 1:2', text:'How long, LORD, must I call for help, but you do not listen?' },
        { ref:'Psalm 13:1\u20132', text:'How long, LORD? Will you forget me forever? How long will you hide your face from me?' }
      ] },
    { id:'money', icon:'\ud83d\udcb0', label:'Money or provision', keywords:['money','finances','financial','provision','bills','poor','broke','job','work','provide','need','debt'],
      intro:'The question Scripture keeps asking isn\u2019t how much you have, but what has you.',
      verses:[
        { ref:'Matthew 6:31\u201333', text:'So do not worry, saying, \u201cWhat shall we eat?\u201d... But seek first his kingdom and his righteousness, and all these things will be given to you as well.' },
        { ref:'Philippians 4:19', text:'And my God will meet all your needs according to the riches of his glory in Christ Jesus.' },
        { ref:'1 Timothy 6:6\u20137', text:'But godliness with contentment is great gain. For we brought nothing into the world, and we can take nothing out of it.' },
        { ref:'Proverbs 3:9\u201310', text:'Honor the LORD with your wealth, with the firstfruits of all your crops.' },
        { ref:'Hebrews 13:5', text:'Keep your lives free from the love of money and be content with what you have.' }
      ] },
    { id:'strength', icon:'\ud83d\udcaa', label:'Needing strength', keywords:['strength','strong','weak','weakness','courage','brave','endure','persevere','keep going','hard time','trial'],
      intro:'God\u2019s power tends to show up most clearly right where you have the least.',
      verses:[
        { ref:'2 Corinthians 12:9', text:'My grace is sufficient for you, for my power is made perfect in weakness.' },
        { ref:'Philippians 4:13', text:'I can do all this through him who gives me strength.' },
        { ref:'Joshua 1:9', text:'Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.' },
        { ref:'Nehemiah 8:10', text:'Do not grieve, for the joy of the LORD is your strength.' },
        { ref:'Psalm 46:1', text:'God is our refuge and strength, an ever-present help in trouble.' }
      ] },
    { id:'relationships', icon:'\u2764\ufe0f', label:'Relationships & family', keywords:['relationship','marriage','family','friend','friendship','love','spouse','parents','kids','children','conflict'],
      intro:'The mark Jesus gave His people wasn\u2019t knowledge or power \u2014 it was how they treat each other.',
      verses:[
        { ref:'1 Corinthians 13:4\u20137', text:'Love is patient, love is kind. It does not envy, it does not boast, it is not proud... It always protects, always trusts, always hopes, always perseveres.' },
        { ref:'John 13:34\u201335', text:'As I have loved you, so you must love one another. By this everyone will know that you are my disciples.' },
        { ref:'Proverbs 17:17', text:'A friend loves at all times, and a brother is born for a time of adversity.' },
        { ref:'Ephesians 4:32', text:'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.' },
        { ref:'Proverbs 27:17', text:'As iron sharpens iron, so one person sharpens another.' }
      ] },
    { id:'purpose', icon:'\ud83e\udded', label:'Purpose & calling', keywords:['purpose','calling','called','meaning','why am i here','identity','worth','value','significance'],
      intro:'You were known and set apart before you had a record to be judged by.',
      verses:[
        { ref:'Jeremiah 1:5', text:'Before I formed you in the womb I knew you, before you were born I set you apart.' },
        { ref:'Ephesians 2:10', text:'For we are God\u2019s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.' },
        { ref:'Esther 4:14', text:'And who knows but that you have come to your royal position for such a time as this?' },
        { ref:'Psalm 139:13\u201314', text:'For you created my inmost being; you knit me together in my mother\u2019s womb. I praise you because I am fearfully and wonderfully made.' },
        { ref:'Micah 6:8', text:'And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.' }
      ] },
    { id:'sick', icon:'\ud83c\udfe5', label:'Sickness or healing', keywords:['sick','sickness','illness','ill','healing','heal','disease','hospital','cancer','health','suffering','pain'],
      intro:'Presence is promised inside the fire, not only instead of it.',
      verses:[
        { ref:'Isaiah 43:2', text:'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.' },
        { ref:'James 5:14\u201315', text:'Is anyone among you sick? Let them call the elders of the church to pray over them.' },
        { ref:'Psalm 41:3', text:'The LORD sustains them on their sickbed and restores them from their bed of illness.' },
        { ref:'2 Corinthians 4:16', text:'Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day.' },
        { ref:'Matthew 11:28', text:'Come to me, all you who are weary and burdened, and I will give you rest.' }
      ] },
    { id:'newfaith', icon:'\ud83c\udf31', label:'New to faith', keywords:['new','start','beginning','saved','salvation','believe','christian','born again','baptism','how do i start'],
      intro:'The entry requirement in Scripture is thirst, not qualification.',
      verses:[
        { ref:'John 3:16', text:'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.' },
        { ref:'Romans 10:9', text:'If you declare with your mouth, \u201cJesus is Lord,\u201d and believe in your heart that God raised him from the dead, you will be saved.' },
        { ref:'Ephesians 2:8\u20139', text:'For it is by grace you have been saved, through faith \u2014 and this is not from yourselves, it is the gift of God \u2014 not by works, so that no one can boast.' },
        { ref:'2 Corinthians 5:17', text:'Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!' },
        { ref:'Revelation 22:17', text:'Let the one who is thirsty come; and let the one who wishes take the free gift of the water of life.' }
      ] }
  ];

  function searchTopics(query){
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return TOPICS.filter(t =>
      t.label.toLowerCase().includes(q) ||
      t.keywords.some(k => k.includes(q) || q.includes(k))
    );
  }

  function searchVerses(query){
    const q = query.trim().toLowerCase();
    if (q.length < 3) return [];
    const hits = [];
    TOPICS.forEach(t => {
      t.verses.forEach(v => {
        if (v.text.toLowerCase().includes(q) || v.ref.toLowerCase().includes(q)) {
          hits.push({ ...v, topic: t.label });
        }
      });
    });
    return hits.slice(0, 12);
  }

  function searchLessons(query){
    const q = query.trim().toLowerCase();
    if (q.length < 3) return [];
    return LESSONS.filter(l =>
      l.title.toLowerCase().includes(q) ||
      l.book.toLowerCase().includes(q) ||
      (l.passage || '').toLowerCase().includes(q)
    ).slice(0, 12);
  }

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
    { ref: 'Colossians 3:23', verse: 'Whatever you do, work heartily, as for the Lord and not for men.', title: 'Ordinary work, real purpose', text: 'Most of today will be ordinary tasks \u2014 this verse says none of it is beneath God\u2019s notice. Try doing one routine task today as if it were directly for Him.' },
    { ref: 'Psalm 46:10', verse: 'Be still, and know that I am God.', title: 'Stop moving for a minute', text: 'This was written about a world in chaos \u2014 mountains falling into the sea. Being still isn\u2019t about having a calm day. It\u2019s about stopping long enough to remember who is actually holding things together. Take sixty seconds today and do nothing but that.' },
    { ref: 'Micah 6:8', verse: 'He has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.', title: 'The short version', text: 'People spend lifetimes complicating this. Do what\u2019s right. Actually enjoy being merciful. Stay close to God without needing to be impressive. Which of those three is hardest for you this week?' },
    { ref: 'Hebrews 4:16', verse: 'Let us then approach God\u2019s throne of grace with confidence, so that we may receive mercy and find grace to help us in our time of need.', title: 'Come as you are, now', text: 'Notice the timing: in your time of need. Not after you\u2019ve recovered and have a good report. The invitation is for the middle of the mess, and it says come confidently \u2014 which is a strange word for someone with nothing to offer.' },
    { ref: 'Galatians 6:9', verse: 'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.', title: 'Keep going', text: 'This verse exists because doing good gets tiring, especially when nothing visible comes back. Paul doesn\u2019t deny that. He just adds a timeline you can\u2019t see. What good thing have you been doing that feels like it isn\u2019t landing?' },
    { ref: 'Psalm 34:18', verse: 'The LORD is close to the brokenhearted and saves those who are crushed in spirit.', title: 'Close, not distant', text: 'When you\u2019re hurting, God is described as near \u2014 not waiting for you to pull yourself together first. If today is heavy, you don\u2019t have to perform your way back into His company. He\u2019s already close.' },
    { ref: 'Colossians 3:23', verse: 'Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.', title: 'Nobody\u2019s watching, and He is', text: 'This was written to slaves \u2014 people whose work was uncredited and compelled. If it applied to them, it applies to your inbox, your shift, your laundry. The unseen work has an audience.' },
    { ref: '1 John 3:1', verse: 'See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!', title: 'And that is what we are', text: 'John can\u2019t say it without interrupting himself to insist it\u2019s true. Lavished is not a careful word. Whatever you feel about yourself today, this is the stated fact.' },
    { ref: 'Proverbs 15:1', verse: 'A gentle answer turns away wrath, but a harsh word stirs up anger.', title: 'One soft sentence', text: 'Escalation needs two people. When one of them refuses to supply heat, the fire runs out of fuel. Somewhere today you\u2019ll get the chance to prove this. Try it once and watch what happens.' },
    { ref: 'Isaiah 43:2', verse: 'When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you.', title: 'Through, not around', text: 'Read it carefully \u2014 the promise isn\u2019t that you\u2019ll avoid the water. It\u2019s that you\u2019ll go through it accompanied, and it won\u2019t take you under. That\u2019s a different comfort than the one we usually ask for, and a sturdier one.' },
    { ref: 'Matthew 11:28', verse: 'Come to me, all you who are weary and burdened, and I will give you rest.', title: 'The invitation is for tired people', text: 'Not for the spiritually impressive. For the worn out. If you\u2019re carrying something heavy today, you meet the only requirement listed.' },
    { ref: 'Psalm 121:1\u20132', verse: 'I lift up my eyes to the mountains \u2014 where does my help come from? My help comes from the LORD, the Maker of heaven and earth.', title: 'Look up', text: 'A traveller\u2019s song, sung on a dangerous road. The question comes first, honestly, and then the answer. It\u2019s fine to ask where help is coming from. Just don\u2019t stop before the second verse.' },
    { ref: 'Ephesians 4:32', verse: 'Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.', title: 'The measure', text: 'Notice the standard \u2014 not what they deserve, but what you received. That reframe is uncomfortable and it\u2019s the whole point. Who came to mind just now?' },
    { ref: 'Psalm 139:23\u201324', verse: 'Search me, God, and know my heart; test me and know my anxious thoughts. See if there is any offensive way in me, and lead me in the way everlasting.', title: 'A brave prayer', text: 'Only someone convinced God is for them prays this. It\u2019s an invitation to be examined. Pray it today and then leave a little silence afterward.' },
    { ref: '2 Corinthians 12:9', verse: 'My grace is sufficient for you, for my power is made perfect in weakness.', title: 'Sufficient for this version of today', text: 'Paul asked three times for the thorn to go and got this instead. Not grace that removes the problem \u2014 grace enough for the life that still has it. That\u2019s a harder gift and a better one.' },
    { ref: 'Zephaniah 3:17', verse: 'The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.', title: 'He sings over you', text: 'Most people can accept that God tolerates them. This says delight, and rejoicing, and singing. Sit with how differently you\u2019d walk through today if you actually believed that line.' },
    { ref: 'James 1:5', verse: 'If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.', title: 'Without finding fault', text: 'That phrase is the gift. You can ask about the thing you should probably already know, and there\u2019s no sigh on the other end. What decision do you need wisdom for?' },
    { ref: 'Psalm 27:1', verse: 'The LORD is my light and my salvation \u2014 whom shall I fear? The LORD is the stronghold of my life \u2014 of whom shall I be afraid?', title: 'Two questions', text: 'David asks rather than declares, which makes it land harder. Put the name of whatever you\u2019re afraid of into those questions and read them again.' },
    { ref: 'Romans 12:2', verse: 'Do not conform to the pattern of this world, but be transformed by the renewing of your mind.', title: 'Change starts upstream', text: 'Conforming is passive \u2014 it happens by default if you do nothing. Transformation starts with what you let occupy your thinking. What are you feeding your mind lately?' },
    { ref: 'Psalm 51:10', verse: 'Create in me a pure heart, O God, and renew a steadfast spirit within me.', title: 'Create, not repair', text: 'David wrote this at his lowest, and notice the verb \u2014 not fix, create. He\u2019s asking for something new rather than a patch. That\u2019s available to you today too.' },
    { ref: 'John 15:5', verse: 'I am the vine; you are the branches. If you remain in me and I in you, you will bear much fruit; apart from me you can do nothing.', title: 'Attached, not striving', text: 'A branch doesn\u2019t strain to produce fruit. It stays connected and fruit happens. Where have you been straining when you should have been staying?' },
    { ref: 'Deuteronomy 31:8', verse: 'The LORD himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.', title: 'Ahead of you and with you', text: 'Both at once \u2014 already in tomorrow, and beside you today. Whatever you\u2019re walking toward, He got there first.' },
    { ref: 'Psalm 103:12', verse: 'As far as the east is from the west, so far has he removed our transgressions from us.', title: 'A distance that never closes', text: 'North and south meet at the poles. East and west never meet at all. The image was chosen on purpose. Whatever you keep re-confessing, it is that far gone.' },
    { ref: 'Philippians 2:3\u20134', verse: 'Do nothing out of selfish ambition or vain conceit. Rather, in humility value others above yourselves, not looking to your own interests but each of you to the interests of the others.', title: 'Look up from yourself', text: 'Not thinking less of yourself \u2014 thinking of yourself less. One practical move today: ask someone a real question and actually listen to the answer.' },
    { ref: 'Isaiah 40:31', verse: 'But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.', title: 'Renewed, not manufactured', text: 'Notice the order ends with walking. Sometimes strength looks like soaring, sometimes it just looks like still walking. Both are on the list.' },
    { ref: 'Luke 6:31', verse: 'Do to others as you would have them do to you.', title: 'The simplest test', text: 'It survives because it works in every situation and takes two seconds to apply. Before the email, the comment, the decision \u2014 would you want it done to you?' },
    { ref: 'Psalm 62:8', verse: 'Trust in him at all times, you people; pour out your hearts to him, for God is our refuge.', title: 'Pour it out', text: 'Pour out is not tidy language. It\u2019s emptying a container completely. God is not asking for the edited version of how you\u2019re doing.' },
    { ref: '1 Peter 5:7', verse: 'Cast all your anxiety on him because he cares for you.', title: 'Throw it', text: 'Cast means fling, not set down gently where you can retrieve it in four minutes. And the reason given isn\u2019t that worry is useless \u2014 it\u2019s that He cares about the specific thing keeping you up.' },
    { ref: 'Proverbs 16:9', verse: 'In their hearts humans plan their course, but the LORD establishes their steps.', title: 'Plan anyway', text: 'This isn\u2019t a warning against planning. It\u2019s permission to plan without carrying the outcome. You\u2019re responsible for the effort, not the ending.' },
    { ref: 'Matthew 5:16', verse: 'Let your light shine before others, that they may see your good deeds and glorify your Father in heaven.', title: 'Visible on purpose', text: 'Not so people admire you \u2014 the sentence ends somewhere else entirely. Do something good today that nobody thanks you for and let that be enough.' },
    { ref: 'Psalm 30:5', verse: 'Weeping may stay for the night, but rejoicing comes in the morning.', title: 'The night is not the whole story', text: 'It doesn\u2019t say the weeping was fake or short. It says it has an end. If you\u2019re in the night part right now, that\u2019s not a failure of faith \u2014 it\u2019s a chapter.' },
    { ref: 'Joshua 1:9', verse: 'Have I not commanded you? Be strong and courageous. Do not be afraid; do not be discouraged, for the LORD your God will be with you wherever you go.', title: 'Courage is commanded', text: 'Which means it\u2019s a choice, not a personality type. And the reason given isn\u2019t that the danger is small \u2014 it\u2019s the company you\u2019ll have in it.' },
    { ref: 'Romans 12:12', verse: 'Be joyful in hope, patient in affliction, faithful in prayer.', title: 'Three at once', text: 'Nine words holding a whole posture. Joy pointed forward, patience in the present, prayer running underneath both. Which of the three is thinnest for you right now?' },
    { ref: 'Psalm 145:18', verse: 'The LORD is near to all who call on him, to all who call on him in truth.', title: 'In truth', text: 'The condition isn\u2019t worthiness or eloquence. It\u2019s honesty. Which means the only prayer that fails is the one where you\u2019re managing your image.' },
    { ref: 'Ecclesiastes 3:1', verse: 'There is a time for everything, and a season for every activity under the heavens.', title: 'This is a season', text: 'Whatever you\u2019re in \u2014 exhausting, wonderful, dull \u2014 it is a season and not a permanent address. That\u2019s a warning in good times and a comfort in hard ones.' },
    { ref: 'John 8:12', verse: 'I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.', title: 'Enough light for the next step', text: 'A light doesn\u2019t show you the whole road. It shows you where to put your foot. That\u2019s usually all you get, and it\u2019s usually enough.' },
    { ref: '1 Corinthians 13:4\u20135', verse: 'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.', title: 'Keeps no record', text: 'Read the whole thing with your own name in place of \u201clove.\u201d The line you stumble on is the one to pray about today. For most people it\u2019s the last one.' },
    { ref: 'Psalm 23:4', verse: 'Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me.', title: 'Through the valley', text: 'The psalm doesn\u2019t route around the valley. It goes through it, and the comfort is not a change of scenery \u2014 it\u2019s company. Also notice the pronouns switch here from he to you. It gets personal exactly where it gets dark.' },
    { ref: 'Jeremiah 29:11', verse: 'For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.', title: 'Said to exiles', text: 'This was written to people who had just lost everything and were told they\u2019d be in exile seventy years. It\u2019s not a promise of an easy life. It\u2019s a promise that the story isn\u2019t over.' },
    { ref: 'Titus 2:11\u201312', verse: 'For the grace of God has appeared that offers salvation to all people. It teaches us to say \u201cNo\u201d to ungodliness and worldly passions.', title: 'Grace teaches', text: 'Grace isn\u2019t only the pardon at the start. It\u2019s the instructor for everything after. Where do you need it to teach you a \u201cno\u201d this week?' },
    { ref: 'Psalm 118:24', verse: 'This is the day that the LORD has made; let us rejoice and be glad in it.', title: 'This one', text: 'Not a better day. Not the one after the thing resolves. This one, with everything currently unfinished in it. Find one thing in today worth being glad about and name it out loud.' },
    { ref: 'Mark 9:24', verse: 'Immediately the boy\u2019s father exclaimed, \u201cI do believe; help me overcome my unbelief!\u201d', title: 'Both at once', text: 'The most honest sentence in the Bible, and Jesus helped him anyway. You don\u2019t have to resolve your doubt before you\u2019re allowed to come. Bring both halves.' },
    { ref: 'Galatians 5:22\u201323', verse: 'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.', title: 'Fruit grows', text: 'You can\u2019t manufacture patience by effort any more than you can strain a tree into producing apples. Fruit comes from being connected and given time. Which one is growing in you lately?' },
    { ref: 'Hebrews 12:1', verse: 'Let us throw off everything that hinders and the sin that so easily entangles. And let us run with perseverance the race marked out for us.', title: 'Two things to drop', text: 'Sin, obviously \u2014 but also everything that hinders. Runners strip down not because clothing is evil but because it\u2019s heavy. What\u2019s slowing you that isn\u2019t even wrong?' },
    { ref: 'Lamentations 3:22\u201323', verse: 'Because of the LORD\u2019s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.', title: 'New this morning', text: 'Written by a man watching his city burn. Not optimism \u2014 defiance. Yesterday\u2019s failure doesn\u2019t carry over into today\u2019s mercy. It\u2019s new, this morning, for you.' },
    { ref: 'Matthew 6:33', verse: 'But seek first his kingdom and his righteousness, and all these things will be given to you as well.', title: 'The order matters', text: 'Not seek only \u2014 seek first. It\u2019s a question of sequence, not of caring about nothing else. What has quietly moved into first place lately?' }
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
    const [isSpeaking, setIsSpeaking] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [openTopic, setOpenTopic] = React.useState(null);
    const [exploreView, setExploreView] = React.useState('topics');
    const [openCharacter, setOpenCharacter] = React.useState(null);
    const [openTrack, setOpenTrack] = React.useState(null);
    const [openModule, setOpenModule] = React.useState(null);
    const [openLessonTrack, setOpenLessonTrack] = React.useState(null);
    const [planReflectDraft, setPlanReflectDraft] = React.useState('');
    const [myProfile, setMyProfile] = React.useState(null);
    const [friends, setFriends] = React.useState([]);
    const [myGroups, setMyGroups] = React.useState([]);
    const [groupMembers, setGroupMembers] = React.useState([]);
    const [prayedRows, setPrayedRows] = React.useState([]);
    const [openGroup, setOpenGroup] = React.useState(null);
    const [socialTab, setSocialTab] = React.useState('groups');   // Upper Room shows rooms only
    const [socialLoading, setSocialLoading] = React.useState(false);
    const [socialMsg, setSocialMsg] = React.useState('');
    const [groupCodeInput, setGroupCodeInput] = React.useState('');
    const [newGroupName, setNewGroupName] = React.useState('');
    const [newGroupDesc, setNewGroupDesc] = React.useState('');
    const [prayerDraft, setPrayerDraft] = React.useState('');
    const [publicGroups, setPublicGroups] = React.useState([]);
    const [viewingProfile, setViewingProfile] = React.useState(null);
    const [incomingReqs, setIncomingReqs] = React.useState([]);
    const [outgoingReqs, setOutgoingReqs] = React.useState([]);
    const [peopleQuery, setPeopleQuery] = React.useState('');
    const [peopleResults, setPeopleResults] = React.useState([]);
    const [suggested, setSuggested] = React.useState([]);
    const [chatMessages, setChatMessages] = React.useState([]);
    const [chatAuthors, setChatAuthors] = React.useState({});
    const [chatDraft, setChatDraft] = React.useState('');
    const chatScrollRef = React.useRef(null);
    const chatAtBottomRef = React.useRef(true);
    const [manageOpen, setManageOpen] = React.useState(false);
    const [editingRoom, setEditingRoom] = React.useState(false);
    const [roomNameDraft, setRoomNameDraft] = React.useState('');
    const [roomDescDraft, setRoomDescDraft] = React.useState('');
    const [confirmDelete, setConfirmDelete] = React.useState(false);
    const [roomIconDraft, setRoomIconDraft] = React.useState('');
    const [reactions, setReactions] = React.useState([]);
    const [assignDone, setAssignDone] = React.useState([]);
    const [roomView, setRoomView] = React.useState('chat');
    const [assignOpen, setAssignOpen] = React.useState(false);
    const [assignSearch, setAssignSearch] = React.useState('');
    const [shareVerseData, setShareVerseData] = React.useState(null);
    const [answers, setAnswers] = React.useState([]);
    const [answerDrafts, setAnswerDrafts] = React.useState({});
    const [composerMode, setComposerMode] = React.useState(null);
    const [assignBook, setAssignBook] = React.useState(null);
    const [assignDue, setAssignDue] = React.useState('');
    const [promptDraft, setPromptDraft] = React.useState('');
    const [askAnon, setAskAnon] = React.useState(true);
    const [whoDoneFor, setWhoDoneFor] = React.useState(null);
    const [feed, setFeed] = React.useState([]);
    const [feedPrayers, setFeedPrayers] = React.useState([]);
    const [postDraft, setPostDraft] = React.useState('');
    const [postKind, setPostKind] = React.useState('prayer');
    const [friendsView, setFriendsView] = React.useState('feed');
    const [dailyView, setDailyView] = React.useState('verse');
    const [chatKind, setChatKind] = React.useState('message');
    const [newRoomCode, setNewRoomCode] = React.useState('');
    const [showCreateRoom, setShowCreateRoom] = React.useState(false);
    const [contactMsg, setContactMsg] = React.useState('');
    const [contactBusy, setContactBusy] = React.useState(false);
    const [inviteCopied, setInviteCopied] = React.useState(false);
    const [newFriendMsg, setNewFriendMsg] = React.useState('');
    const [openCheckpoint, setOpenCheckpoint] = React.useState(null);
    const [step, setStep] = React.useState("passage");
    const [qIndex, setQIndex] = React.useState(0);
    const [picked, setPicked] = React.useState(null);
    const [correctCount, setCorrectCount] = React.useState(0);
    const [editingProfile, setEditingProfile] = React.useState(false);
    const [editName, setEditName] = React.useState('');
    const [editAvatar, setEditAvatar] = React.useState('\ud83d\udcd6');
    const [editVerse, setEditVerse] = React.useState('');
    const [editChurch, setEditChurch] = React.useState('');
    const [editPhone, setEditPhone] = React.useState('');
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
    const [tShowIntro, setTShowIntro] = React.useState(false);
    const [wordleInput, setWordleInput] = React.useState('');
    const [wordleShake, setWordleShake] = React.useState(false);
    const [nowTick, setNowTick] = React.useState(Date.now());
    const [tourStep, setTourStep] = React.useState(0);
    const [gatePrompt, setGatePrompt] = React.useState('');
    const [showTour, setShowTour] = React.useState(false);

    // Only run the per-second clock where a countdown is visible.
    // Ticking globally re-rendered the whole app every second.
    React.useEffect(() => {
      if (tab !== 'daily') return;
      const iv = setInterval(() => setNowTick(Date.now()), 1000);
      return () => clearInterval(iv);
    }, [tab]);

    // Cheap minute-level tick so the day still rolls over elsewhere
    React.useEffect(() => {
      const iv = setInterval(() => setNowTick(Date.now()), 60000);
      return () => clearInterval(iv);
    }, []);

    // Roll the day over live: when the countdown hits zero, swap in the new
    // verse, word and tests without needing a refresh.
    const [dayStamp, setDayStamp] = React.useState(todayStr());
    React.useEffect(() => {
      const now = todayStr();
      if (now !== dayStamp) {
        setDayStamp(now);
        setWordleInput('');
        setWordleShake(false);
        stopSpeaking();
      }
    }, [nowTick]);

    // Also catch the case where the phone was asleep past midnight
    React.useEffect(() => {
      function onWake(){
        if (document.visibilityState === 'visible') setNowTick(Date.now());
      }
      document.addEventListener('visibilitychange', onWake);
      window.addEventListener('focus', onWake);
      return () => {
        document.removeEventListener('visibilitychange', onWake);
        window.removeEventListener('focus', onWake);
      };
    }, []);

    React.useEffect(() => {
      if (!window.speechSynthesis) return;
      // Voices load asynchronously in some browsers - trigger the load early
      window.speechSynthesis.getVoices();
      const handler = () => window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = handler;
      return () => { window.speechSynthesis.onvoiceschanged = null; };
    }, []);

    const [user, setUser] = React.useState(null);
    const [authChecked, setAuthChecked] = React.useState(false);
    const [authOpen, setAuthOpen] = React.useState(false);
    const [authMode, setAuthMode] = React.useState('login');
    const [authEmail, setAuthEmail] = React.useState('');
    const [authFirst, setAuthFirst] = React.useState('');
    const [authLast, setAuthLast] = React.useState('');
    const [pendingSignupName, setPendingSignupName] = React.useState('');
    const [authPhone, setAuthPhone] = React.useState('');
    const [authChurch, setAuthChurch] = React.useState('');
    const [churchOptions, setChurchOptions] = React.useState([]);
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
        const session = data && data.session;
        const sessionUser = session ? session.user : null;
        // Realtime respects RLS, so the socket needs the token too
        if (session && sb.realtime && sb.realtime.setAuth) {
          try { sb.realtime.setAuth(session.access_token); } catch (ex) {}
        }
        setUser(sessionUser);
        setAuthChecked(true);
        load(sessionUser);
        if (sessionUser) setShowWelcome(false);
      });
      const { data: listener } = sb.auth.onAuthStateChange((event, session) => {
        const sessionUser = session ? session.user : null;
        if (session && sb.realtime && sb.realtime.setAuth) {
          try { sb.realtime.setAuth(session.access_token); } catch (ex) {}
        }
        setUser(sessionUser);
        load(sessionUser);
        if (sessionUser) setShowWelcome(false);
      });
      return () => { if (listener && listener.subscription) listener.subscription.unsubscribe(); };
    }, []);

    React.useEffect(() => {
      if (!state) return;
      if (!state.seenTour) setShowTour(true);
    }, [state === null]);

    function tourSpot(){
      const order = [null, 'path', 'library', 'library', 'community', 'profile'];
      return order[Math.min(tourStep, order.length - 1)];
    }

    function finishTour(){
      setShowTour(false);
      setTourStep(0);
      if (state) persist({ ...state, seenTour: true });
    }

    React.useEffect(() => {
      if (!sb || !user || !state) return;
      syncPublicProfile(state);
      loadFriends();
      loadRequests();
      loadGroups();
      loadPublicGroups();
      // If they just signed up, make sure the name they typed is saved
      if (pendingSignupName && (!state.profile || !state.profile.name || state.profile.name.toLowerCase() === 'your name')) {
        persist({ ...state, profile: { ...(state.profile || {}), name: pendingSignupName } });
        setPendingSignupName('');
      }
    }, [user && user.id, state === null]);

    React.useEffect(() => {
      if (sb && user && friends !== null) { loadSuggested(); loadFeed(); }
    }, [friends.length, outgoingReqs.length, incomingReqs.length, myGroups.length]);

    React.useEffect(() => {
      if (openGroup) loadGroupDetail(openGroup);
    }, [openGroup]);

    React.useEffect(() => {
      if ((tab === 'community' || tab === 'profile') && sb && user) loadFeed();
    }, [tab, user && user.id, friends.length]);

    // Keep the newest message in view
    React.useEffect(() => {
      const el = chatScrollRef.current;
      if (!el) return;
      if (chatAtBottomRef.current) {
        el.scrollTop = el.scrollHeight;
      }
    }, [chatMessages.length, openGroup]);

    // Jump to the bottom when a room first opens
    React.useEffect(() => {
      if (!openGroup) return;
      chatAtBottomRef.current = true;
      const t = setTimeout(() => {
        const el = chatScrollRef.current;
        if (el) el.scrollTop = el.scrollHeight;
      }, 120);
      return () => clearTimeout(t);
    }, [openGroup]);

    // Live chat: new messages appear without refreshing
    React.useEffect(() => {
      if (!sb || !user || !openGroup) return;
      const ch = sb.channel('room-' + openGroup)
        .on('postgres_changes',
          { event: '*', schema: 'public', table: 'group_messages', filter: 'group_id=eq.' + openGroup },
          () => { loadGroupDetail(openGroup, true); })
        .subscribe();
      // Safety net in case the socket drops
      const poll = setInterval(() => { loadGroupDetail(openGroup, true); }, 6000);
      return () => { try { sb.removeChannel(ch); } catch (ex) {} clearInterval(poll); };
    }, [openGroup, user && user.id]);

    // Live friends: requests and acceptances land straight away
    React.useEffect(() => {
      if (!sb || !user) return;
      const ch = sb.channel('social-' + user.id)
        .on('postgres_changes', { event: '*', schema: 'public', table: 'friend_requests' }, () => {
          loadRequests();
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'friendships' }, () => {
          loadFriends();
        })
        .on('postgres_changes', { event: '*', schema: 'public', table: 'group_members' }, () => {
          loadGroups();
          if (openGroup) loadGroupDetail(openGroup);
        })
        .subscribe();
      const poll = setInterval(() => { if (tab === 'community') { loadRequests(); loadFriends(); } }, 15000);
      return () => { try { sb.removeChannel(ch); } catch (ex) {} clearInterval(poll); };
    }, [user && user.id]);

    async function load(currentUser){
      if (sb && currentUser) {
        try {
          const { data, error } = await sb.from('progress').select('data').eq('id', currentUser.id).maybeSingle();
          if (error) throw error;
          if (data && data.data) { setState({ ...DEFAULT_STATE, ...data.data }); return; }
          // No row yet for this account - start from local guest progress if any, else defaults
          let starting = { ...DEFAULT_STATE };
          try {
            const local = localStorage.getItem(KEY);
            if (local) starting = { ...DEFAULT_STATE, ...JSON.parse(local) };
          } catch (ex) {}
          await sb.from('progress').upsert({ id: currentUser.id, data: starting });
          setState(starting);
          return;
        } catch (ex) { /* fall through to local */ }
      }
      try {
        const local = localStorage.getItem(KEY);
        setState(local ? { ...DEFAULT_STATE, ...JSON.parse(local) } : { ...DEFAULT_STATE });
      } catch (ex) { setState({ ...DEFAULT_STATE }); }
    }

    async function persist(next){
      setState(next);
      if (sb && user) {
        try { await sb.from('progress').upsert({ id: user.id, data: next, updated_at: new Date().toISOString() }); } catch (ex) {}
        syncPublicProfile(next);
        return;
      }
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (ex) {}
    }

    function makeFriendCode(){
      const chars = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
      let out = '';
      for (let i = 0; i < 6; i++) out += chars[Math.floor(Math.random() * chars.length)];
      return out;
    }

    function bestDisplayName(s){
      const raw = (s && s.profile && s.profile.name) ? s.profile.name.trim() : '';
      if (raw && raw.toLowerCase() !== 'your name') return raw;
      // Never fall back to email - that would expose addresses publicly.
      return 'Friend';
    }

    function needsDisplayName(){
      const raw = (state && state.profile && state.profile.name) ? state.profile.name.trim() : '';
      return !raw || raw.toLowerCase() === 'your name' || raw.toLowerCase() === 'friend';
    }

    // Mirrors a safe, public slice of the user's info so friends can see it.
    async function syncPublicProfile(st){
      if (!sb || !user) return;
      const s = st || state;
      if (!s) return;
      try {
        const { data: existing } = await sb.from('profiles').select('friend_code').eq('id', user.id).maybeSingle();
        const row = {
          id: user.id,
          display_name: bestDisplayName(s),
          avatar: (s.profile && s.profile.avatar) || '\ud83d\udcd6',
          verse: (s.profile && s.profile.verse) || '',
          church: (s.profile && s.profile.church) || '',
          lessons_done: s.completed ? s.completed.length : 0,
          checkpoints_done: s.completedCheckpoints ? s.completedCheckpoints.length : 0,
          daily_streak: s.dailyStreak || 0,
          updated_at: new Date().toISOString()
        };
        if (existing && existing.friend_code) {
          row.friend_code = existing.friend_code;
        } else {
          row.friend_code = makeFriendCode();
        }
        await sb.from('profiles').upsert(row);
        setMyProfile(row);
        // Store a one-way hash of the email so contact matching can work
        const hashes = {};
        if (user && user.email) { const h = await hashEmail(user.email); if (h) hashes.email_hash = h; }
        if (s.profile && s.profile.phone) { const p = await hashPhone(s.profile.phone); if (p) hashes.phone_hash = p; }
        if (Object.keys(hashes).length) {
          try { await sb.from('profiles').update(hashes).eq('id', user.id); } catch (ex) {}
        }
      } catch (ex) { /* non-fatal */ }
    }

    async function loadFriends(){
      if (!sb || !user) return;
      setSocialLoading(true);
      try {
        const { data: links } = await sb.from('friendships').select('friend_id').eq('user_id', user.id);
        const ids = (links || []).map(l => l.friend_id);
        if (ids.length) {
          const { data: profs } = await sb.from('profiles').select('*').in('id', ids);
          const list = profs || [];
          try {
            const seen = (state && state.seenFriendIds) || [];
            if (seen.length) {
              const fresh = list.filter(f => seen.indexOf(f.id) === -1);
              if (fresh.length) {
                setNewFriendMsg(fresh.length === 1
                  ? fresh[0].display_name + ' accepted your friend request!'
                  : fresh.length + ' people accepted your friend requests!');
                setTimeout(() => setNewFriendMsg(''), 8000);
              }
            }
            const nowIds = list.map(f => f.id);
            if (state && JSON.stringify(nowIds) !== JSON.stringify(seen)) {
              persist({ ...state, seenFriendIds: nowIds });
            }
          } catch (ex) {}
          setFriends(list);
        } else { setFriends([]); }
      } catch (ex) { setFriends([]); }
      setSocialLoading(false);
    }

    async function loadRequests(){
      if (!sb || !user) return;
      try {
        const { data: inc } = await sb.from('friend_requests')
          .select('*').eq('to_id', user.id).eq('status', 'pending');
        const { data: out } = await sb.from('friend_requests')
          .select('*').eq('from_id', user.id).eq('status', 'pending');
        const incoming = inc || [];
        const outgoing = out || [];
        const ids = incoming.map(r => r.from_id);
        if (ids.length) {
          const { data: profs } = await sb.from('profiles').select('*').in('id', ids);
          const byId = {};
          (profs || []).forEach(p => { byId[p.id] = p; });
          setIncomingReqs(incoming.map(r => ({ ...r, profile: byId[r.from_id] })).filter(r => r.profile));
        } else { setIncomingReqs([]); }
        setOutgoingReqs(outgoing);
      } catch (ex) { setIncomingReqs([]); setOutgoingReqs([]); }
    }

    async function searchPeople(q){
      if (!sb || !user) return;
      const term = q.trim();
      if (term.length < 2) { setPeopleResults([]); return; }
      setSocialLoading(true);
      try {
        const { data, error } = await sb.from('profiles')
          .select('*').ilike('display_name', '%' + term + '%').limit(20);
        if (error) throw error;
        setPeopleResults((data || []).filter(p => p.id !== user.id));
        setSocialMsg('');
      } catch (ex) {
        setPeopleResults([]);
        setSocialMsg('Search failed: ' + (ex && ex.message ? ex.message : 'unknown'));
      }
      setSocialLoading(false);
    }

    // One-way hash so we can match contacts without ever sending real emails
    async function hashEmail(email){
      try {
        const norm = String(email || '').trim().toLowerCase();
        if (!norm) return null;
        const buf = new TextEncoder().encode(norm);
        const digest = await crypto.subtle.digest('SHA-256', buf);
        return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2,'0')).join('');
      } catch (ex) { return null; }
    }

    function normalizePhone(raw){
      const digits = String(raw || '').replace(/\D/g, '');
      if (digits.length < 7) return null;
      return digits.slice(-10);   // last 10 digits: ignores country code differences
    }

    async function hashPhone(raw){
      const norm = normalizePhone(raw);
      if (!norm) return null;
      try {
        const buf = new TextEncoder().encode(norm);
        const digest = await crypto.subtle.digest('SHA-256', buf);
        return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2,'0')).join('');
      } catch (ex) { return null; }
    }

    async function loadChurchOptions(q){
      if (!sb) return;
      const term = (q || '').trim();
      if (term.length < 2) { setChurchOptions([]); return; }
      try {
        const { data } = await sb.from('profiles').select('church').ilike('church', '%' + term + '%').limit(30);
        const uniq = [...new Set((data || []).map(r => (r.church || '').trim()).filter(Boolean))];
        setChurchOptions(uniq.slice(0, 6));
      } catch (ex) { setChurchOptions([]); }
    }

    // If someone opened a room invite link, put them in that exact room
    React.useEffect(() => {
      if (!sb || !user) return;
      let code = '';
      try {
        const params = new URLSearchParams(window.location.search);
        code = (params.get('room') || '').trim().toUpperCase();
      } catch (ex) {}
      if (!code) return;
      (async () => {
        try {
          const { data: g } = await sb.from('groups').select('*').eq('join_code', code).maybeSingle();
          if (!g) return;
          const full = (g.member_count || 0) >= (g.capacity || 75);
          const alreadyIn = myGroups.some(x => x.id === g.id);
          if (full && !alreadyIn) {
            setSocialMsg('That room is full.');
            setTab('community');
          } else {
            await joinGroupDirect(g.id);
            setTab('community');
          }
          try { window.history.replaceState({}, '', window.location.pathname); } catch (ex) {}
        } catch (ex) {}
      })();
    }, [user && user.id, myGroups.length]);

    // If someone arrived via an invite link, connect them to whoever shared it
    React.useEffect(() => {
      if (!sb || !user || !myProfile) return;
      let code = '';
      try {
        const params = new URLSearchParams(window.location.search);
        code = (params.get('invite') || '').trim().toUpperCase();
      } catch (ex) {}
      if (!code || code === myProfile.friend_code) return;
      (async () => {
        try {
          const { data: inviter } = await sb.from('profiles').select('*').eq('friend_code', code).maybeSingle();
          if (!inviter || inviter.id === user.id) return;
          await sb.from('friend_requests').upsert(
            { from_id: user.id, to_id: inviter.id, status: 'pending' },
            { onConflict: 'from_id,to_id' }
          );
          setSocialMsg('Friend request sent to ' + inviter.display_name + '!');
          setTab('community');
          loadRequests();
          try { window.history.replaceState({}, '', window.location.pathname); } catch (ex) {}
        } catch (ex) {}
      })();
    }, [user && user.id, myProfile && myProfile.friend_code]);

    async function loadFeed(){
      if (!sb || !user) return;
      try {
        const ids = [user.id, ...friends.map(f => f.id)];
        const { data } = await sb.from('friend_posts').select('*')
          .in('user_id', ids).order('created_at', { ascending: false }).limit(60);
        setFeed(data || []);
        const postIds = (data || []).map(p => p.id);
        if (postIds.length) {
          const { data: pr } = await sb.from('post_prayers').select('*').in('post_id', postIds);
          setFeedPrayers(pr || []);
        } else { setFeedPrayers([]); }
      } catch (ex) { setFeed([]); }
    }

    async function createPost(){
      if (!sb || !user || !postDraft.trim()) return;
      try {
        await sb.from('friend_posts').insert({ user_id: user.id, kind: postKind, body: postDraft.trim() });
        setPostDraft('');
        loadFeed();
      } catch (ex) { setSocialMsg('Could not post: ' + (ex && ex.message ? ex.message : 'unknown')); }
    }

    async function togglePostPrayer(postId){
      if (!sb || !user) return;
      const mine = feedPrayers.some(p => p.post_id === postId && p.user_id === user.id);
      setFeedPrayers(prev => mine
        ? prev.filter(p => !(p.post_id === postId && p.user_id === user.id))
        : [...prev, { id:'t'+Date.now(), post_id: postId, user_id: user.id }]);
      try {
        if (mine) await sb.from('post_prayers').delete().eq('post_id', postId).eq('user_id', user.id);
        else await sb.from('post_prayers').insert({ post_id: postId, user_id: user.id });
      } catch (ex) { loadFeed(); }
    }

    async function markPostAnswered(postId){
      if (!sb || !user) return;
      try {
        await sb.from('friend_posts').update({ answered: true }).eq('id', postId).eq('user_id', user.id);
        loadFeed();
      } catch (ex) {}
    }

    async function deletePost(postId){
      if (!sb || !user) return;
      try {
        await sb.from('friend_posts').delete().eq('id', postId).eq('user_id', user.id);
        loadFeed();
      } catch (ex) {}
    }

    async function loadSuggested(){
      if (!sb || !user) return;
      try {
        const friendIds = new Set(friends.map(f => f.id));
        const pendingIds = new Set([
          ...outgoingReqs.map(r => r.to_id),
          ...incomingReqs.map(r => r.from_id)
        ]);
        const scores = {};   // candidateId -> score
        const reasons = {};  // candidateId -> why we're suggesting them

        function bump(id, points, reason){
          if (!id || id === user.id || friendIds.has(id) || pendingIds.has(id)) return;
          scores[id] = (scores[id] || 0) + points;
          if (!reasons[id] || points > (reasons[id].points || 0)) reasons[id] = { text: reason, points: points };
        }

        // 1) Friends of your friends - the strongest signal
        if (friendIds.size) {
          const { data: fof } = await sb.from('friendships')
            .select('user_id, friend_id').in('user_id', Array.from(friendIds));
          const mutualCount = {};
          (fof || []).forEach(link => {
            if (link.friend_id === user.id) return;
            mutualCount[link.friend_id] = (mutualCount[link.friend_id] || 0) + 1;
          });
          Object.keys(mutualCount).forEach(id => {
            const n = mutualCount[id];
            bump(id, 100 + n * 10, n === 1 ? '1 mutual friend' : n + ' mutual friends');
          });
        }

        // 2) People in the same rooms as you
        const myGroupIds = myGroups.map(g => g.id);
        if (myGroupIds.length) {
          const { data: mates } = await sb.from('group_members')
            .select('user_id, group_id').in('group_id', myGroupIds);
          const shared = {};
          (mates || []).forEach(m => {
            if (m.user_id === user.id) return;
            shared[m.user_id] = (shared[m.user_id] || 0) + 1;
          });
          Object.keys(shared).forEach(id => {
            const gname = myGroups[0] ? myGroups[0].name : 'a room';
            bump(id, 50 + shared[id] * 5, shared[id] > 1 ? 'In ' + shared[id] + ' of your rooms' : 'In ' + gname);
          });
        }

        // 3) Same church, then same city - strongest real-world signal for a faith app
        const myChurch = (state && state.profile && state.profile.church || '').trim();
        if (myChurch) {
          const { data: same } = await sb.from('profiles').select('*').ilike('church', myChurch).limit(30);
          (same || []).forEach(p => bump(p.id, 150, 'Goes to ' + p.church));
        }

        // 4) People at a similar point in their reading
        const myLessons = (state && state.completed) ? state.completed.length : 0;
        const { data: near } = await sb.from('profiles')
          .select('*')
          .gte('lessons_done', Math.max(0, myLessons - 25))
          .lte('lessons_done', myLessons + 25)
          .limit(40);
        (near || []).forEach(p => bump(p.id, 20, 'Reading at a similar pace'));

        const ids = Object.keys(scores);
        if (!ids.length) { setSuggested([]); return; }

        const { data: profs } = await sb.from('profiles').select('*').in('id', ids.slice(0, 60));
        const ranked = (profs || [])
          .map(p => ({ ...p, _score: scores[p.id] || 0, _reason: (reasons[p.id] || {}).text || '' }))
          .sort((a, b) => b._score - a._score)
          .slice(0, 8);
        setSuggested(ranked);
      } catch (ex) { setSuggested([]); }
    }

    function friendStatus(personId){
      if (friends.some(f => f.id === personId)) return 'friend';
      if (outgoingReqs.some(r => r.to_id === personId)) return 'sent';
      if (incomingReqs.some(r => r.from_id === personId)) return 'incoming';
      return 'none';
    }

    async function sendFriendRequest(personId){
      if (!sb || !user) return;
      try {
        await sb.from('friend_requests').upsert(
          { from_id: user.id, to_id: personId, status: 'pending' },
          { onConflict: 'from_id,to_id' }
        );
        loadRequests();
      } catch (ex) { setSocialMsg('Could not send request.'); }
    }

    async function acceptRequest(req){
      if (!sb || !user) return;
      try {
        await sb.from('friendships').upsert({ user_id: user.id, friend_id: req.from_id });
        await sb.from('friendships').upsert({ user_id: req.from_id, friend_id: user.id });
        await sb.from('friend_requests').delete().eq('id', req.id);
        loadRequests();
        loadFriends();
      } catch (ex) { setSocialMsg('Could not accept.'); }
    }

    async function declineRequest(req){
      if (!sb || !user) return;
      try {
        await sb.from('friend_requests').delete().eq('id', req.id);
        loadRequests();
      } catch (ex) {}
    }

    async function cancelRequest(personId){
      if (!sb || !user) return;
      try {
        await sb.from('friend_requests').delete().eq('from_id', user.id).eq('to_id', personId);
        loadRequests();
      } catch (ex) {}
    }

    async function removeFriend(friendId){
      if (!sb || !user) return;
      try {
        await sb.from('friendships').delete().eq('user_id', user.id).eq('friend_id', friendId);
        await sb.from('friendships').delete().eq('user_id', friendId).eq('friend_id', user.id);
        loadFriends();
      } catch (ex) {}
    }


    function personRow(p, keyPrefix){
      const status = friendStatus(p.id);
      return e('div', {className:'dl-person-row', key:keyPrefix + p.id}, [
        e('button', {className:'dl-person-main', onClick:()=>viewProfile(p.id), key:'m'}, [
          e('span', {className:'dl-person-avatar', key:'a'}, p.avatar || String.fromCodePoint(0x1F4D6)),
          e('span', {style:{flex:1, minWidth:0}, key:'n'}, [
            e('div', {className:'dl-person-name', key:'nm'}, p.display_name),
            p._reason ? e('div', {className:'dl-person-reason', key:'r'}, p._reason) : null,
            e('div', {className:'dl-person-sub', key:'s'}, (p.lessons_done||0) + ' lessons \u00b7 ' + (p.daily_streak||0) + ' day streak')
          ])
        ]),
        status === 'friend'
          ? e('span', {className:'dl-person-tag', key:'t'}, 'Friends')
          : status === 'sent'
          ? e('button', {className:'dl-person-pending', onClick:()=>cancelRequest(p.id), key:'t'}, 'Requested')
          : status === 'incoming'
          ? e('button', {className:'dl-person-add', onClick:()=>{ const r = incomingReqs.find(x=>x.from_id===p.id); if(r) acceptRequest(r); }, key:'t'}, 'Accept')
          : e('button', {className:'dl-person-add', onClick:()=>sendFriendRequest(p.id), key:'t'}, 'Add')
      ]);
    }

    async function loadGroups(){
      if (!sb || !user) return;
      try {
        const { data: mem } = await sb.from('group_members').select('group_id').eq('user_id', user.id);
        const ids = (mem || []).map(m => m.group_id);
        if (!ids.length) { setMyGroups([]); return; }
        const { data: gs } = await sb.from('groups').select('*').in('id', ids);
        setMyGroups(gs || []);
      } catch (ex) { setMyGroups([]); }
    }



    const ROOM_CAP = 75;

    async function loadPublicGroups(){
      setPublicGroups([]);
    }

    function roomIcon(g){
      return (g && g.icon) ? g.icon : '\ud83d\udd12';
    }

    async function joinGroupDirect(groupId){
      if (!sb || !user) return;
      try {
        await sb.from('group_members').upsert({ group_id: groupId, user_id: user.id });
        await loadGroups();
        loadPublicGroups();
        setOpenGroup(groupId);
      } catch (ex) { setSocialMsg('Could not join \u2014 try again.'); }
    }

    async function viewProfile(profileId){
      if (!sb) return;
      setSocialLoading(true);
      try {
        const { data } = await sb.from('profiles').select('*').eq('id', profileId).maybeSingle();
        setViewingProfile(data || null);
      } catch (ex) { setViewingProfile(null); }
      setSocialLoading(false);
    }

    async function createGroup(name, desc, isPublic){
      if (!sb || !user) { setSocialMsg('You need to be signed in.'); return; }
      if (!name.trim()) { setSocialMsg('Give your room a name first.'); return; }
      setSocialMsg('');
      try {
        const code = makeFriendCode();
        const { data, error } = await sb.from('groups').insert({
          name: name.trim(), description: desc.trim(), join_code: code,
          is_public: !!isPublic, owner_id: user.id
        }).select().maybeSingle();
        if (error) throw error;
        if (!data) throw new Error('No room returned');
        const { error: memErr } = await sb.from('group_members').insert({ group_id: data.id, user_id: user.id });
        if (memErr) throw memErr;
        setNewGroupName(''); setNewGroupDesc('');
        setNewRoomCode(code);
        await loadGroups();
        setOpenGroup(data.id);
      } catch (ex) {
        setSocialMsg('Could not create room: ' + (ex && ex.message ? ex.message : 'unknown error'));
      }
    }

    async function joinGroupByCode(code){
      if (!sb || !user) return;
      const clean = code.trim().toUpperCase();
      if (!clean) return;
      setSocialMsg('');
      try {
        const { data: g } = await sb.from('groups').select('*').eq('join_code', clean).maybeSingle();
        if (!g) { setSocialMsg('No group found with that code.'); return; }
        await sb.from('group_members').upsert({ group_id: g.id, user_id: user.id });
        setGroupCodeInput('');
        setSocialMsg('Joined ' + g.name + '!');
        loadGroups();
      } catch (ex) { setSocialMsg('Could not join \u2014 try again.'); }
    }

    async function leaveGroup(groupId){
      if (!sb || !user) return;
      try {
        await sb.from('group_members').delete().eq('group_id', groupId).eq('user_id', user.id);
        if (openGroup === groupId) setOpenGroup(null);
        loadGroups();
      } catch (ex) {}
    }

    async function loadGroupDetail(groupId, quiet){
      if (!sb || !user) return;
      if (!quiet) setSocialLoading(true);
      try {
        const { data: mem } = await sb.from('group_members').select('user_id').eq('group_id', groupId);
        const ids = (mem || []).map(m => m.user_id);
        const { data: profs } = ids.length ? await sb.from('profiles').select('*').in('id', ids) : { data: [] };
        setGroupMembers(profs || []);
        const { data: msgs } = await sb.from('group_messages')
          .select('*').eq('group_id', groupId).order('created_at', { ascending: true }).limit(200);
        const authorIds = [...new Set((msgs || []).map(m => m.user_id))];
        let authorMap = {};
        (profs || []).forEach(p => { authorMap[p.id] = p; });
        const missing = authorIds.filter(id => !authorMap[id]);
        if (missing.length) {
          const { data: extra } = await sb.from('profiles').select('*').in('id', missing);
          (extra || []).forEach(p => { authorMap[p.id] = p; });
        }
        setChatAuthors(authorMap);
        const msgIds = (msgs || []).map(m => m.id);
        if (msgIds.length) {
          try {
            const { data: rx } = await sb.from('message_reactions').select('*').in('message_id', msgIds);
            setReactions(rx || []);
            const { data: ad } = await sb.from('assignment_done').select('*').in('message_id', msgIds);
            setAssignDone(ad || []);
            const { data: ans } = await sb.from('message_answers').select('*').in('message_id', msgIds);
            setAnswers(ans || []);
          } catch (ex) {}
        } else { setReactions([]); setAssignDone([]); setAnswers([]); }
        setChatMessages(prev => {
          const pending = prev.filter(m => m.pending);
          const server = msgs || [];
          const stillPending = pending.filter(p => !server.some(s => s.body === p.body && s.user_id === p.user_id));
          return [...server, ...stillPending];
        });
      } catch (ex) { if (!quiet) { setGroupMembers([]); setChatMessages([]); } }
      if (!quiet) setSocialLoading(false);
    }

    async function removeMember(groupId, memberId){
      if (!sb || !user) return;
      try {
        const { error } = await sb.from('group_members').delete()
          .eq('group_id', groupId).eq('user_id', memberId);
        if (error) throw error;
        loadGroupDetail(groupId);
        setSocialMsg('Removed from the room.');
        setTimeout(()=>setSocialMsg(''), 2500);
      } catch (ex) { setSocialMsg('Could not remove: ' + (ex && ex.message ? ex.message : 'unknown')); }
    }

    async function renameRoom(groupId, name, desc, icon){
      if (!sb || !user || !name.trim()) return;
      try {
        const { error } = await sb.from('groups')
          .update({ name: name.trim(), description: desc.trim(), icon: icon || '' }).eq('id', groupId);
        if (error) throw error;
        setEditingRoom(false);
        loadGroups();
        setSocialMsg('Room updated.');
        setTimeout(()=>setSocialMsg(''), 2500);
      } catch (ex) { setSocialMsg('Could not update: ' + (ex && ex.message ? ex.message : 'unknown')); }
    }

    async function deleteRoom(groupId){
      if (!sb || !user) return;
      try {
        const { error } = await sb.from('groups').delete().eq('id', groupId);
        if (error) throw error;
        setOpenGroup(null);
        setConfirmDelete(false);
        loadGroups();
      } catch (ex) { setSocialMsg('Could not delete: ' + (ex && ex.message ? ex.message : 'unknown')); }
    }

    async function toggleReaction(msgId, emoji, groupId){
      if (!sb || !user) return;
      const mine = reactions.some(r => r.message_id === msgId && r.user_id === user.id && r.emoji === emoji);
      // update on screen straight away
      setReactions(prev => mine
        ? prev.filter(r => !(r.message_id === msgId && r.user_id === user.id && r.emoji === emoji))
        : [...prev, { id: 'tmp'+Date.now(), message_id: msgId, user_id: user.id, emoji: emoji }]);
      try {
        if (mine) {
          await sb.from('message_reactions').delete()
            .eq('message_id', msgId).eq('user_id', user.id).eq('emoji', emoji);
        } else {
          await sb.from('message_reactions').insert({ message_id: msgId, user_id: user.id, emoji: emoji });
        }
      } catch (ex) { loadGroupDetail(groupId, true); }
    }

    async function toggleAssignmentDone(msgId, groupId){
      if (!sb || !user) return;
      const done = assignDone.some(a => a.message_id === msgId && a.user_id === user.id);
      setAssignDone(prev => done
        ? prev.filter(a => !(a.message_id === msgId && a.user_id === user.id))
        : [...prev, { id: 'tmp'+Date.now(), message_id: msgId, user_id: user.id }]);
      try {
        if (done) {
          await sb.from('assignment_done').delete().eq('message_id', msgId).eq('user_id', user.id);
        } else {
          await sb.from('assignment_done').insert({ message_id: msgId, user_id: user.id });
        }
      } catch (ex) { loadGroupDetail(groupId, true); }
    }

    async function postPrompt(groupId, text, kind, anon){
      if (!sb || !user || !text.trim()) return;
      try {
        await sb.from('group_messages').insert({
          group_id: groupId, user_id: user.id, body: text.trim(),
          kind: kind, is_anonymous: !!anon
        });
        setPromptDraft(''); setComposerMode(null);
        loadGroupDetail(groupId, true);
      } catch (ex) { setSocialMsg('Could not post: ' + (ex && ex.message ? ex.message : 'unknown')); }
    }

    async function submitAnswer(msgId, groupId){
      if (!sb || !user) return;
      const text = (answerDrafts[msgId] || '').trim();
      if (!text) return;
      try {
        await sb.from('message_answers').upsert(
          { message_id: msgId, user_id: user.id, body: text },
          { onConflict: 'message_id,user_id' }
        );
        setAnswerDrafts(d => ({ ...d, [msgId]: '' }));
        loadGroupDetail(groupId, true);
      } catch (ex) { setSocialMsg('Could not save: ' + (ex && ex.message ? ex.message : 'unknown')); }
    }

    async function togglePin(groupId, msgId){
      if (!sb || !user) return;
      const g = myGroups.find(x => x.id === groupId);
      const next = (g && g.pinned_message_id === msgId) ? null : msgId;
      try {
        await sb.from('groups').update({ pinned_message_id: next }).eq('id', groupId);
        loadGroups();
      } catch (ex) {}
    }

    async function shareVerse(groupId, ref, text){
      if (!sb || !user) return;
      try {
        await sb.from('group_messages').insert({
          group_id: groupId, user_id: user.id, body: text,
          kind: 'verse', meta: { ref: ref }
        });
        loadGroupDetail(groupId, true);
      } catch (ex) {}
    }

    async function assignLesson(groupId, lesson){
      if (!sb || !user) return;
      try {
        await sb.from('group_messages').insert({
          group_id: groupId, user_id: user.id,
          body: lesson.book + ' \u00b7 ' + lesson.title,
          kind: 'assignment',
          meta: { lessonId: lesson.id, book: lesson.book, title: lesson.title, due: assignDue || null }
        });
        setAssignOpen(false); setAssignSearch(''); setAssignBook(null); setAssignDue(''); setComposerMode(null);
        loadGroupDetail(groupId, true);
      } catch (ex) { setSocialMsg('Could not assign: ' + (ex && ex.message ? ex.message : 'unknown')); }
    }

    function roomLeaderboard(){
      return groupMembers.slice().sort((a,b) => (b.lessons_done||0) - (a.lessons_done||0));
    }

    async function sendMessage(groupId, body, kind){
      if (!sb || !user || !body.trim()) return;
      const text = body.trim();
      setChatDraft('');
      // Show it immediately, then let the server confirm
      const tempId = 'temp-' + Date.now();
      setChatMessages(prev => [...prev, {
        id: tempId, group_id: groupId, user_id: user.id,
        body: text, kind: kind || 'message', created_at: new Date().toISOString(), pending: true
      }]);
      try {
        const { error } = await sb.from('group_messages').insert({
          group_id: groupId, user_id: user.id, body: text, kind: kind || 'message'
        });
        if (error) throw error;
        loadGroupDetail(groupId);
      } catch (ex) {
        setChatMessages(prev => prev.filter(m => m.id !== tempId));
        setSocialMsg('Could not send \u2014 make sure you\u2019ve joined this room.');
      }
    }

    async function deleteMessage(msgId, groupId){
      if (!sb || !user) return;
      try {
        await sb.from('group_messages').delete().eq('id', msgId).eq('user_id', user.id);
        loadGroupDetail(groupId);
      } catch (ex) {}
    }

    function formatMsgTime(iso){
      try {
        const d = new Date(iso);
        const now = new Date();
        const sameDay = d.toDateString() === now.toDateString();
        const time = d.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
        if (sameDay) return time;
        return d.toLocaleDateString([], { month: 'short', day: 'numeric' }) + ' ' + time;
      } catch (ex) { return ''; }
    }

    async function signUp(){
      if (!sb) return;
      const first = authFirst.trim(), last = authLast.trim();
      if (first.length < 2) { setAuthError('Please enter your first name.'); return; }
      if (last.length < 1) { setAuthError('Please enter your last name.'); return; }
      const fullName = first + ' ' + last;
      setAuthError(''); setAuthLoading(true);
      const { data, error } = await sb.auth.signUp({ email: authEmail, password: authPassword });
      setAuthLoading(false);
      if (error) { setAuthError(error.message); return; }
      // Save the name straight into their progress so it shows everywhere
      try {
        const base = state || { ...DEFAULT_STATE };
        const next = { ...base, profile: { ...(base.profile || {}), name: fullName, church: authChurch.trim(), phone: authPhone.trim() } };
        setState(next);
        try { localStorage.setItem(KEY, JSON.stringify(next)); } catch (ex) {}
        setPendingSignupName(fullName);
      } catch (ex) {}
      if (data && data.session) {
        setAuthOpen(false); setAuthEmail(''); setAuthPassword(''); setAuthFirst(''); setAuthLast(''); setAuthPhone(''); setAuthChurch(''); setAuthError('');
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
            authMode === 'signup' ? e('div', {className:'dl-name-row', key:'namerow'}, [
              e('div', {className:'dl-edit-field', style:{flex:1}, key:'f'}, [
                e('label', {key:'l'}, 'First name'),
                e('input', {value:authFirst, onChange: ev=>setAuthFirst(ev.target.value), placeholder:'First', key:'i'})
              ]),
              e('div', {className:'dl-edit-field', style:{flex:1}, key:'la'}, [
                e('label', {key:'l'}, 'Last name'),
                e('input', {value:authLast, onChange: ev=>setAuthLast(ev.target.value), placeholder:'Last', key:'i'})
              ])
            ]) : null,
            authMode === 'signup' ? e('div', {className:'dl-edit-field', key:'phonefield'}, [
              e('label', {key:'l'}, 'Phone number'),
              e('input', {type:'tel', value:authPhone, onChange: ev=>setAuthPhone(ev.target.value), placeholder:'(555) 123-4567', key:'i'}),
              e('div', {className:'dl-edit-hint', key:'h'}, 'Lets friends who have your number find you. Stored scrambled \u2014 never shown to anyone.')
            ]) : null,
            authMode === 'signup' ? e('div', {className:'dl-edit-field', key:'churchfield'}, [
              e('label', {key:'l'}, 'Church (optional)'),
              e('input', {value:authChurch, onChange: ev=>{ setAuthChurch(ev.target.value); loadChurchOptions(ev.target.value); }, placeholder:'Start typing your church\u2026', key:'i'}),
              churchOptions.length ? e('div', {className:'dl-church-opts', key:'opts'}, churchOptions.map(ch =>
                e('button', {className:'dl-church-opt', onClick:()=>{ setAuthChurch(ch); setChurchOptions([]); }, key:ch}, ch)
              )) : null,
              e('div', {className:'dl-edit-hint', key:'h'}, 'We\u2019ll connect you with others from your church.')
            ]) : null,
            e('div', {className:'dl-edit-field', key:'emailfield'}, [
              e('label', {key:'l'}, 'Email'),
              e('input', {type:'email', value:authEmail, onChange: ev=>setAuthEmail(ev.target.value), placeholder:'you@example.com', key:'i'})
            ]),
            e('div', {className:'dl-edit-field', key:'pwfield'}, [
              e('label', {key:'l'}, 'Password'),
              e('input', {type:'password', value:authPassword, onChange: ev=>setAuthPassword(ev.target.value), placeholder:'At least 6 characters', key:'i'})
            ]),
            authError ? e('div', {className:'dl-auth-error', key:'err'}, authError) : null,
            e('button', {className:'dl-auth-submit', disabled: authLoading || !authEmail.trim() || !authPassword.trim() || (authMode === 'signup' && (!authFirst.trim() || !authLast.trim())), onClick: authMode === 'signup' ? signUp : signIn, key:'go'}, authLoading ? '...' : (authMode === 'signup' ? 'Create account' : 'Log in')),
            e('button', {className:'dl-auth-cancel', onClick:()=>setAuthOpen(false), key:'cancel'}, 'Cancel'),
            e('button', {className:'dl-auth-switch', onClick:()=>{ setAuthMode(authMode === 'signup' ? 'login' : 'signup'); setAuthError(''); }, key:'switch'},
              authMode === 'signup' ? 'Already have an account? Log in' : "Don't have an account? Sign up")
          ])
        ])
      );
    }

    function saveTestimony(){
      if (requireAccount('write a testimony')) return;
      persist({ ...state, testimony: testimonyDraft });
      setEditingTestimony(false);
    }

    // Guests can look around, but anything that saves progress needs an account.
    function requireAccount(what){
      if (user) return false;
      setGatePrompt(what || 'save your progress');
      return true;
    }

    function startTest(test){
      if (requireAccount('take tests and earn pearls')) return;
      if (state.gems < test.cost) return;
      persist({ ...state, gems: state.gems - test.cost });
      setActiveTest(test); setTIndex(0); setTPicked(null); setTFillInput(''); setTFillResult(null); setTScore(0); setTFinished(false); setTEarned(0); setTShowIntro(true);
    }

    function beginTestQuestions(){
      setTShowIntro(false);
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
      if (requireAccount('collect badges')) return;
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

    function checkInToday(){
      if (requireAccount('build a streak')) return;
      const today = todayStr();
      if (state.lastCheckIn === today) return;
      if (!state.lastCheckIn) { persist({ ...state, dailyStreak: 1, lastCheckIn: today }); return; }
      const gap = daysBetween(state.lastCheckIn, today);
      if (gap === 1) {
        persist({ ...state, dailyStreak: state.dailyStreak + 1, lastCheckIn: today });
        return;
      }
      const missed = gap - 1;
      if (missed > 0 && (state.streakFreezes || 0) >= missed) {
        persist({ ...state, dailyStreak: state.dailyStreak + 1, lastCheckIn: today, streakFreezes: (state.streakFreezes || 0) - missed, streakFreezeUsedDate: today });
      } else {
        persist({ ...state, dailyStreak: 1, lastCheckIn: today });
      }
    }

    function buyStreakFreeze(){
      if (state.gems < 40) return;
      const current = state.streakFreezes || 0;
      persist({ ...state, gems: state.gems - 40, streakFreezes: current + 1 });
    }

    const WORDLE_COST = 30;

    function wordleGame(){
      return (state && state.wordleGame) || null;
    }

    function startWordle(){
      if (requireAccount('play the word game')) return;
      if (!state) return;
      if ((state.gems || 0) < WORDLE_COST) return;
      // Pick a word we haven't used recently so it feels fresh every time
      const recent = (state.recentWords || []).slice(-20);
      let pool = WORD_BANK.map((w, i) => i).filter(i => recent.indexOf(i) === -1);
      if (!pool.length) pool = WORD_BANK.map((w, i) => i);
      const wordIdx = pool[Math.floor(Math.random() * pool.length)];
      setWordleInput('');
      persist({
        ...state,
        gems: state.gems - WORDLE_COST,
        wordleGame: { wordIdx: wordIdx, guesses: [], done: false, won: false },
        recentWords: [...(state.recentWords || []), wordIdx].slice(-20)
      });
    }

    function closeWordle(){
      if (!state) return;
      setWordleInput('');
      persist({ ...state, wordleGame: null });
    }

    function pressWordleKey(key){
      const g = wordleGame();
      if (!g || g.done) return;
      if (key === 'ENTER') { submitWordleGuess(); return; }
      if (key === 'BACK') { setWordleInput(s => s.slice(0, -1)); return; }
      setWordleInput(s => s.length < 5 ? s + key : s);
    }

    React.useEffect(() => {
      if (tab !== 'daily' || !state) return;
      function handler(ev){
        const g = wordleGame();
        if (!g || g.done) return;
        if (ev.key === 'Enter') { ev.preventDefault(); submitWordleGuess(); }
        else if (ev.key === 'Backspace') { setWordleInput(s => s.slice(0, -1)); }
        else if (/^[a-zA-Z]$/.test(ev.key)) { setWordleInput(s => s.length < 5 ? s + ev.key.toUpperCase() : s); }
      }
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
    }, [tab, state && state.wordleGame, wordleInput]);

    function submitWordleGuess(){
      const g = wordleGame();
      if (!g || g.done) return;
      const guess = wordleInput.trim().toUpperCase();
      if (guess.length !== 5) { setWordleShake(true); setTimeout(()=>setWordleShake(false), 400); return; }
      const target = WORD_BANK[g.wordIdx].word;
      const nextGuesses = [...g.guesses, guess];
      const won = guess === target;
      const done = won || nextGuesses.length >= 5;
      const gemsBonus = won ? 45 : 0;
      persist({
        ...state,
        gems: state.gems + gemsBonus,
        wordleGame: { wordIdx: g.wordIdx, guesses: nextGuesses, done: done, won: won },
        wordleWins: (state.wordleWins || 0) + (won ? 1 : 0)
      });
      setWordleInput('');
    }

    function claimQuest(q){
      if (state.claimedQuests.includes(q.id)) return;
      if (q.get(state) < q.target) return;
      persist({ ...state, claimedQuests: [...state.claimedQuests, q.id], gems: state.gems + q.reward });
    }

    function saveProfile(name, avatar, verse, church, phone){
      persist({ ...state, profile: {
        ...state.profile,
        name: name.trim() || 'Your name', avatar,
        verse: verse.trim() || DEFAULT_VERSE,
        church: (church !== undefined ? church : (state.profile.church || '')).trim(),
        phone: (phone !== undefined ? phone : (state.profile.phone || '')).trim()
      } });
    }

    function openEditProfile(){
      if (requireAccount('edit your profile')) return;
      setEditName(state.profile.name);
      setEditAvatar(state.profile.avatar);
      setEditVerse(state.profile.verse || DEFAULT_VERSE);
      setEditChurch(state.profile.church || '');
      setEditPhone(state.profile.phone || '');
      setChurchOptions([]);
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
      if (requireAccount('save your lesson progress')) return;
      if (nodeStatus(lesson) === "locked") return;
      setOpenLesson(lesson); setStep("passage"); setQIndex(0); setPicked(null); setCorrectCount(0);
    }
    function openCheckpointIfAvailable(book){
      if (requireAccount('take checkpoint reviews')) return;
      if (checkpointStatus(book) === "locked") return;
      setOpenCheckpoint(book); setStep("overview"); setQIndex(0); setPicked(null); setCorrectCount(0);
    }

    function completeDeepStudy(book){
      if (requireAccount('save your progress')) return;
      stopSpeaking();
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
        const log = state.completedLog || [];
        persist({ ...state, completed: already ? state.completed : [...state.completed, openLesson.id], completedLog: already ? log : [...log, { id: openLesson.id, date: todayStr() }], streak: already ? state.streak : state.streak + 1, gems: state.gems + (already ? 0 : 10) });
        setStep("deepdive");
      }
    }

    function planLength(plan){
      return state.planDays && state.activePlan === plan.id ? state.planDays : plan.length;
    }
    function planDayLessonsFor(plan, day){
      const all = planLessons(plan);
      const len = planLength(plan);
      const perDay = Math.max(1, Math.ceil(all.length / len));
      const start = (day - 1) * perDay;
      return all.slice(start, start + perDay);
    }
    function startPlan(planId){
      if (requireAccount('follow a reading plan')) return;
      const plan = READING_PLANS.find(p => p.id === planId);
      persist({ ...state, activePlan: planId, planStarted: todayStr(), planDays: plan ? plan.length : null });
    }
    function stopPlan(){
      persist({ ...state, activePlan: null, planStarted: null, planDays: null });
    }
    function setPlanDays(days){
      persist({ ...state, planDays: days });
    }
    function currentPlanDay(){
      if (!state.planStarted) return 1;
      return Math.max(1, daysBetween(state.planStarted, todayStr()) + 1);
    }
    function savePlanReflection(planId, day, text){
      if (!text.trim()) return;
      const list = state.planReflections || [];
      const filtered = list.filter(r => !(r.planId === planId && r.day === day));
      persist({ ...state, planReflections: [...filtered, { planId, day, text: text.trim(), date: todayStr() }] });
      setPlanReflectDraft('');
    }
    function planReflectionFor(planId, day){
      return (state.planReflections || []).find(r => r.planId === planId && r.day === day);
    }

    function toggleFavorite(lessonId){
      if (requireAccount('save favourites')) return;
      const favs = state.favorites || [];
      const already = favs.includes(lessonId);
      persist({ ...state, favorites: already ? favs.filter(id => id !== lessonId) : [...favs, lessonId] });
    }

    function pickBestVoice(){
      const voices = window.speechSynthesis.getVoices() || [];
      if (!voices.length) return null;
      const en = voices.filter(v => /^en/i.test(v.lang));
      const pool = en.length ? en : voices;
      // Score voices: higher = better quality / warmer delivery
      function score(v){
        const n = v.name;
        let s = 0;
        if (/premium|enhanced|neural|natural/i.test(n)) s += 60;
        if (/siri/i.test(n)) s += 50;
        if (/^Google/i.test(n)) s += 30;
        if (/Microsoft.*Online/i.test(n)) s += 30;
        // Warmer, deeper voices tend to suit reading Scripture
        if (/onyx|guy|daniel|arthur|matthew|brian|aaron|tom|alex|oliver/i.test(n)) s += 14;
        if (/samantha|karen|aria|jenny|serena|moira|ava|allison/i.test(n)) s += 10;
        // Penalize obviously robotic/compact system voices
        if (/compact|eloquence|espeak|pico/i.test(n)) s -= 40;
        if (v.localService === false) s += 8;
        if (/en[-_]?(US|GB)/i.test(v.lang)) s += 6;
        return s;
      }
      return pool.slice().sort((a,b) => score(b) - score(a))[0] || voices[0];
    }

    function speakText(rawText){
      if (!window.speechSynthesis) return;
      window.speechSynthesis.cancel();
      // Clean up characters that make TTS stumble
      const text = String(rawText)
        .replace(/[\u2018\u2019]/g, "'")
        .replace(/[\u201C\u201D]/g, '"')
        .replace(/\u2014/g, ' - ')
        .replace(/\s+/g, ' ')
        .trim();
      if (!text) return;
      // Split into sentence-sized chunks: avoids the browser cutoff bug on long text
      // and lets speech breathe naturally between sentences.
      const parts = text.match(/[^.!?]+[.!?]*/g) || [text];
      const chunks = [];
      let buffer = '';
      parts.forEach(p => {
        if ((buffer + p).length > 180) { if (buffer) chunks.push(buffer.trim()); buffer = p; }
        else { buffer += p; }
      });
      if (buffer.trim()) chunks.push(buffer.trim());

      const voice = pickBestVoice();
      const rate = 0.86;
      let idx = 0;
      function speakNext(){
        if (idx >= chunks.length) { setIsSpeaking(false); return; }
        const chunk = chunks[idx];
        const utter = new SpeechSynthesisUtterance(chunk);
        if (voice) { utter.voice = voice; utter.lang = voice.lang; }
        utter.rate = rate;
        utter.pitch = 0.92;
        utter.volume = 1.0;
        utter.onend = () => {
          idx++;
          // A short breath between sentences gives the reading weight
          // instead of rushing straight into the next line.
          const pause = /[.!?]"?$/.test(chunk.trim()) ? 420 : 200;
          setTimeout(speakNext, pause);
        };
        utter.onerror = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utter);
      }
      setIsSpeaking(true);
      speakNext();
    }

    function stopSpeaking(){
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }

    function toggleSpeak(text){
      if (isSpeaking) { stopSpeaking(); return; }
      speakText(text);
    }

    function toggleReadAloud(lesson){
      if (isSpeaking) { stopSpeaking(); return; }
      speakText(lesson.passage + ' ' + (lesson.keyVerses || []).map(kv => kv.ref + '. ' + kv.text).join(' '));
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
      if (requireAccount('save reflections')) return;
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

    function closeModal(){ if (window.speechSynthesis) window.speechSynthesis.cancel(); setIsSpeaking(false); setOpenLesson(null); setOpenCheckpoint(null); }

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
        e('div', {className:'dl-scene-inner', style:{justifyContent:'center'}, key:'inner'}, [
          e('div', {className:'dl-node-wrap', key:'wrap'}, [
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
            e('div', {className:'dl-node-wrap', key:'wrap'}, [
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
        e('div', {className:'dl-scene-inner', style:{justifyContent:'center'}, key:'inner'}, [
          e('div', {className:'dl-node-wrap', key:'wrap'}, [
            e('button', {className:'dl-node deepstudy' + (studyDone ? ' studied' : ''), onClick:()=>{ if (requireAccount('open deep studies')) return; setOpenStudyBook(book); setStudyStep('prayer'); }, key:'node'},
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
        !user ? e('button', {className:'dl-guest-banner', onClick:()=>{ setAuthMode('signup'); setAuthError(''); setAuthOpen(true); }, key:'guest'}, [
          e('span', {key:'i'}, String.fromCodePoint(0x1F440)),
          e('span', {style:{flex:1, textAlign:'left'}, key:'t'}, 'You\u2019re just looking around \u2014 create a free account to save your progress.'),
          e('span', {className:'dl-guest-cta', key:'c'}, 'Sign up')
        ]) : null,
        e('div', {className:'dl-book-picker', key:'picker'}, booksForward.reduce((out, book, i) => {
          const total = bookLessons(book).length;
          const done = bookLessons(book).filter(l => state.completed.includes(l.id)).length;
          const complete = done === total && state.completedCheckpoints.includes(book);
          const isNT = NEW_TESTAMENT.includes(book);
          const prevWasOT = i > 0 && !NEW_TESTAMENT.includes(booksForward[i-1]);
          if (isNT && prevWasOT) out.push(e('span', {className:'dl-testament-divider', key:'div-'+book}));
          out.push(e('button', {className:'dl-book-chip' + (isNT?' nt':'') + (book===selectedBook?' active':''), onClick:()=>selectBook(book), key:book}, [
            complete ? e('span', {key:'check'}, String.fromCodePoint(0x2705) + ' ') : null,
            book,
            e('span', {className:'dl-book-chip-progress', key:'p'}, ' ' + done + '/' + total)
          ]));
          return out;
        }, [])),
        e('div', {className:'dl-path', key:'pathinner'}, renderBookPath(selectedBook))
      ]) : null,

      tab === 'daily' ? e('div', {className:'dl-daily-wrap', key:'daily'}, [
        e('button', {className:'dl-topic-back', onClick:()=>setTab('library'), key:'bk'}, String.fromCodePoint(0x2190) + ' Library'),
        false ? e('div', {className:'dl-passage-card', key:'verse'}, [
          e('div', {className:'dl-passage-ref'}, 'Today\u2019s reading \u00b7 ' + todaysDevotional().ref),
          e('div', {className:'dl-passage-text'}, '\u201c' + todaysDevotional().verse + '\u201d')
        ]) : null,
        false ? e('div', {className:'dl-devotional-card', key:'devotional'}, [
          e('div', {className:'dl-devotional-label', key:'lbl'}, [String.fromCodePoint(0x2600), ' Today\u2019s devotional']),
          e('div', {className:'dl-devotional-title', key:'t'}, todaysDevotional().title),
          e('div', {className:'dl-devotional-text', key:'txt'}, todaysDevotional().text)
        ]) : null,
        false ? e('div', {className:'dl-streak-card', key:'streak'}, [
          e('div', {className:'dl-streak-num', key:'n'}, state.dailyStreak),
          e('div', {className:'dl-streak-label', key:'l'}, state.dailyStreak === 1 ? 'day streak' : 'day streak'),
          e('div', {className:'dl-streak-week', key:'week'}, last7Days().map(d => e('span', {className:'dl-streak-dot', style:{background: streakDateSet(state).has(d) ? 'var(--gold)' : 'var(--gray-light)'}, key:d}))),
          state.streakFreezeUsedDate === todayStr() && state.lastCheckIn === todayStr()
            ? e('div', {className:'dl-freeze-banner', key:'saved'}, [String.fromCodePoint(0x1F9CA), ' Streak Freeze used \u2014 your streak is safe!'])
            : null,
          e('div', {className:'dl-freeze-row', key:'freezerow'}, [
            e('div', {className:'dl-freeze-count', key:'count'}, [String.fromCodePoint(0x1F9CA), ' ', (state.streakFreezes || 0), ' streak freeze' + ((state.streakFreezes || 0) === 1 ? '' : 's')]),
            e('button', {className:'dl-freeze-buy', disabled: state.gems < 40, onClick: buyStreakFreeze, key:'buy'}, 'Buy for 40 \ud83d\udc8e')
          ]),
          state.lastCheckIn === todayStr()
            ? e('div', {className:'dl-checked-in', key:'done'}, [String.fromCodePoint(0x2705), ' You\u2019re checked in for today']) 
            : e('button', {className:'dl-continue', onClick: checkInToday, key:'btn'}, 'I read today\u2019s verse')
        ]) : null,

        e('div', {className:'dl-section-title', style:{marginTop:'4px'}, key:'wlabel'}, [String.fromCodePoint(0x1F4AC), ' Word Game']),
        (() => {
          const g = wordleGame();
          if (!g) {
            const canPlay = (state.gems || 0) >= WORDLE_COST;
            return e('div', {className:'dl-wordle-card', key:'wordle'}, [
              e('div', {className:'dl-wg-intro', key:'i'}, [
                e('div', {className:'dl-wg-icon', key:'ic'}, String.fromCodePoint(0x1F4AC)),
                e('div', {className:'dl-wg-title', key:'t'}, 'Guess the Bible word'),
                e('div', {className:'dl-wg-sub', key:'s'}, 'Five letters, five tries, and a clue to start you off. A brand new word every game.'),
                e('div', {className:'dl-wg-reward', key:'r'}, [String.fromCodePoint(0x1F48E), ' Win back 45 gems']),
                (state.wordleWins || 0) > 0 ? e('div', {className:'dl-wg-wins', key:'w'}, (state.wordleWins) + (state.wordleWins === 1 ? ' win so far' : ' wins so far')) : null
              ]),
              e('button', {className:'dl-continue', style:{background:'var(--teal)', borderBottomColor:'var(--teal-dark)'}, disabled: !canPlay, onClick: startWordle, key:'play'},
                canPlay ? ('Play \u00b7 ' + WORDLE_COST + ' \ud83d\udc8e') : ('Need ' + WORDLE_COST + ' \ud83d\udc8e to play'))
            ]);
          }
          const target = WORD_BANK[g.wordIdx];
          const rowsLeft = 5 - g.guesses.length;
          const kbStates = keyboardStates(g.guesses, target.word);
          const canReplay = (state.gems || 0) >= WORDLE_COST;
          return e('div', {className:'dl-wordle-card' + (wordleShake ? ' shake' : ''), key:'wordle'}, [
            e('div', {className:'dl-wordle-clue', key:'clue'}, [String.fromCodePoint(0x1F4A1), ' ', target.clue]),
            e('div', {className:'dl-wordle-grid', key:'grid'},
              g.guesses.map((gs, gi) => e('div', {className:'dl-wordle-row', key:'g'+gi},
                evaluateGuess(gs, target.word).map((res, li) => e('div', {className:'dl-wordle-tile revealed ' + res, style:{transitionDelay:(li*90)+'ms', animationDelay:(li*90)+'ms'}, key:li}, gs[li]))
              )).concat(
                g.done ? [] : [ e('div', {className:'dl-wordle-row', key:'active'},
                  Array.from({length:5}).map((_, li) => e('div', {className:'dl-wordle-tile' + (wordleInput[li] ? ' filled pop' : ''), key:li}, wordleInput[li] || ''))
                ) ]
              ).concat(
                Array.from({length: Math.max(0, rowsLeft - (g.done?0:1))}).map((_, ri) => e('div', {className:'dl-wordle-row', key:'empty'+ri},
                  Array.from({length:5}).map((__, li) => e('div', {className:'dl-wordle-tile', key:li}, ''))
                ))
              )
            ),
            g.done
              ? e('div', {className:'dl-wordle-result', key:'result'}, [
                  e('div', {className:'dl-wordle-result-text', key:'t'}, g.won ? (String.fromCodePoint(0x1F389) + ' You got it \u2014 ' + target.word) : ('The word was ' + target.word)),
                  g.won ? e('div', {className:'dl-wordle-result-sub', key:'s'}, '+45 \ud83d\udc8e gems earned') : null,
                  e('div', {className:'dl-wordle-result-sub', key:'clue2'}, target.clue),
                  e('div', {className:'dl-wg-again', key:'again'}, [
                    e('button', {className:'dl-continue', style:{background:'var(--teal)', borderBottomColor:'var(--teal-dark)', flex:1}, disabled: !canReplay, onClick: startWordle, key:'p'},
                      canReplay ? ('Play again \u00b7 ' + WORDLE_COST + ' \ud83d\udc8e') : ('Need ' + WORDLE_COST + ' \ud83d\udc8e')),
                    e('button', {className:'dl-wg-done', onClick: closeWordle, key:'d'}, 'Done')
                  ])
                ])
              : e('div', {className:'dl-wordle-keyboard', key:'kb'}, KEYBOARD_ROWS.map((row, ri) => e('div', {className:'dl-wordle-kb-row', key:'row'+ri},
                  row.map(k => {
                    const isWide = k === 'ENTER' || k === 'BACK';
                    const cls = 'dl-wordle-key' + (isWide ? ' wide' : '') + (kbStates[k] ? ' ' + kbStates[k] : '');
                    const label = k === 'BACK' ? String.fromCodePoint(0x232B) : (k === 'ENTER' ? 'ENTER' : k);
                    return e('button', {className:cls, onClick:()=>pressWordleKey(k), key:k}, label);
                  })
                )))
          ]);
        })(),

        e('div', {className:'dl-section-title', style:{marginTop:'26px'}, key:'label'}, [String.fromCodePoint(0x1F3C6), ' Today\u2019s Challenges']),
        e('div', {className:'dl-empty-note', key:'note'}, 'Spend a few gems, earn a pearl for every right answer, and turn those pearls into badges. Six fresh ones every day.'),
        e('div', {className:'dl-refresh-pill', key:'refresh'}, [String.fromCodePoint(0x1F504), ' New tests in ' + formatCountdown(msUntilMidnight())]),
        ...dailyTests().map(test => {
          const best = state.testBest[test.id];
          const canAfford = state.gems >= test.cost;
          return e('div', {className:'dl-test-card', key:test.id}, [
            e('div', {className:'dl-test-top', key:'top'}, [
              e('div', {className:'dl-test-icon', key:'icon'}, test.icon),
              e('div', {style:{flex:1}, key:'text'}, [
                e('div', {className:'dl-test-title', key:'t'}, test.title),
                e('div', {className:'dl-test-tier', key:'tier'}, [
                  e('span', {className:'dl-tier-badge tier-' + test.tier.toLowerCase().replace(/[^a-z]/g,''), key:'tb'}, test.tier),
                  ' \u00b7 ' + test.questions.length + ' questions'
                ])
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
        e('button', {className:'dl-topic-back', onClick:()=>setTab('library'), key:'bk'}, String.fromCodePoint(0x2190) + ' Library'),
        e('div', {className:'dl-page-title', key:'ptitle'}, 'Reading Plans'),
        e('div', {className:'dl-section-title', style:{marginTop:'4px'}, key:'plabel'}, [String.fromCodePoint(0x1F5D3), ' Reading plans']),
        state.activePlan ? (() => {
          const plan = READING_PLANS.find(p => p.id === state.activePlan);
          if (!plan) return null;
          const len = planLength(plan);
          const day = Math.min(currentPlanDay(), len);
          const todays = planDayLessonsFor(plan, day);
          const prog = planProgress(plan, state);
          const allDone = todays.length > 0 && todays.every(l => state.completed.includes(l.id));
          const existing = planReflectionFor(plan.id, day);
          const total = planLessons(plan).length;
          const minDays = Math.max(7, Math.ceil(total / 6));
          const maxDays = Math.max(minDays + 7, Math.ceil(total * 1.5));
          return e('div', {className:'dl-plan-active', key:'active'}, [
            e('div', {className:'dl-plan-active-top', key:'top'}, [
              e('span', {className:'dl-plan-icon', key:'i'}, plan.icon),
              e('div', {style:{flex:1}, key:'txt'}, [
                e('div', {className:'dl-plan-title', key:'t'}, plan.title),
                e('div', {className:'dl-plan-day', key:'d'}, 'Day ' + day + ' of ' + len)
              ])
            ]),
            e('div', {className:'dl-quest-bar-track', key:'track'}, e('div', {className:'dl-quest-bar-fill', style:{width: prog.pct + '%'}})),
            e('div', {className:'dl-plan-progress', key:'p'}, prog.done + ' of ' + prog.total + ' lessons complete'),

            e('div', {className:'dl-plan-pace', key:'pace'}, [
              e('div', {className:'dl-plan-pace-top', key:'t'}, [
                e('span', {className:'dl-plan-pace-label', key:'l'}, 'Your pace'),
                e('span', {className:'dl-plan-pace-val', key:'v'}, len + ' days \u00b7 ' + Math.max(1, Math.ceil(total / len)) + '/day')
              ]),
              e('input', {type:'range', min:String(minDays), max:String(maxDays), step:'1', value:len, onChange: ev => setPlanDays(parseInt(ev.target.value,10)), className:'dl-range', key:'r'}),
              e('div', {className:'dl-plan-pace-hint', key:'h'}, 'Recommended: ' + plan.length + ' days. Slower is fine \u2014 depth beats speed.')
            ]),

            e('div', {className:'dl-plan-today-label', key:'tl'}, 'Today\u2019s reading'),
            ...todays.map(l => e('button', {className:'dl-plan-lesson' + (state.completed.includes(l.id) ? ' done' : ''), onClick:()=>openIfAvailable(l), key:l.id}, [
              e('span', {className:'dl-fav-book', key:'b'}, l.book),
              e('span', {className:'dl-fav-title', key:'t'}, l.title),
              state.completed.includes(l.id) ? e('span', {className:'dl-plan-check', key:'c'}, String.fromCodePoint(0x2705)) : null
            ])),
            todays.length === 0 ? e('div', {className:'dl-empty-note', key:'none'}, 'Plan complete \u2014 well done.') : null,

            todays.length > 0 ? e('div', {className:'dl-plan-reflect', key:'reflect'}, [
              e('div', {className:'dl-plan-reflect-h', key:'h'}, [String.fromCodePoint(0x1F4DD), ' End of day ' + day]),
              existing
                ? e('div', {key:'saved'}, [
                    e('div', {className:'dl-plan-reflect-saved', key:'txt'}, existing.text),
                    e('button', {className:'dl-plan-leave', style:{textDecoration:'none'}, onClick:()=>setPlanReflectDraft(existing.text), key:'edit'}, 'Edit reflection')
                  ])
                : allDone
                ? e('div', {key:'form'}, [
                    e('div', {className:'dl-plan-reflect-q', key:'q'}, 'What stood out to you today, and what will you carry into tomorrow?'),
                    e('textarea', {className:'dl-testimony-input', style:{minHeight:'80px'}, value:planReflectDraft, onChange: ev=>setPlanReflectDraft(ev.target.value), placeholder:'Write a sentence or two\u2026', key:'ta'}),
                    e('button', {className:'dl-continue', style:{background:'var(--teal)', borderBottomColor:'var(--teal-dark)', marginTop:'10px'}, onClick:()=>savePlanReflection(plan.id, day, planReflectDraft), key:'save'}, 'Save reflection')
                  ])
                : e('div', {className:'dl-plan-reflect-q', key:'locked'}, 'Finish today\u2019s reading to write your reflection.')
            ]) : null,

            e('button', {className:'dl-plan-leave', onClick: stopPlan, key:'leave'}, 'Leave this plan')
          ]);
        })() : [
          e('div', {className:'dl-empty-note', style:{marginBottom:'14px'}, key:'note'}, 'Something to follow alongside your main path. It just tells you what to read each day \u2014 no pressure.'),
          ...READING_PLANS.map(plan => {
            const prog = planProgress(plan, state);
            return e('div', {className:'dl-plan-card', key:plan.id}, [
              e('div', {className:'dl-plan-card-top', key:'top'}, [
                e('span', {className:'dl-plan-icon', key:'i'}, plan.icon),
                e('div', {style:{flex:1}, key:'txt'}, [
                  e('div', {className:'dl-plan-title', key:'t'}, plan.title),
                  e('div', {className:'dl-plan-meta', key:'m'}, plan.length + ' days \u00b7 ' + prog.total + ' lessons')
                ])
              ]),
              e('div', {className:'dl-plan-blurb', key:'b'}, plan.blurb),
              prog.done > 0 ? e('div', {className:'dl-plan-progress', key:'p'}, prog.done + ' of ' + prog.total + ' already done') : null,
              e('button', {className:'dl-continue', style:{background:'var(--teal)', borderBottomColor:'var(--teal-dark)'}, onClick:()=>startPlan(plan.id), key:'start'}, 'Start this plan')
            ]);
          })
        ],

        e('div', {className:'dl-callings-header', style:{marginTop:'28px'}, key:'chdr'}, [
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

      tab === 'library' ? e('div', {className:'dl-daily-wrap', key:'libhub'}, [
        e('div', {className:'dl-page-title', key:'pt'}, 'Library'),
        e('div', {className:'dl-hub-heading', key:'hh'}, [String.fromCodePoint(0x2600), ' Today']),
        e('div', {className:'dl-passage-card', key:'verse'}, [
          e('div', {className:'dl-passage-ref'}, todaysDevotional().ref),
          e('div', {className:'dl-passage-text'}, '\u201c' + todaysDevotional().verse + '\u201d')
        ]),
        e('div', {className:'dl-devotional-card', key:'devotional'}, [
          e('div', {className:'dl-devotional-title', key:'t'}, todaysDevotional().title),
          e('div', {className:'dl-devotional-text', key:'txt'}, todaysDevotional().text)
        ]),
        e('div', {className:'dl-streak-card', key:'streak'}, [
          e('div', {className:'dl-streak-num', key:'n'}, state.dailyStreak),
          e('div', {className:'dl-streak-label', key:'l'}, 'day streak'),
          e('div', {className:'dl-streak-week', key:'week'}, last7Days().map(d =>
            e('span', {className:'dl-streak-dot', style:{background: streakDateSet(state).has(d) ? 'var(--gold)' : 'var(--gray-light)'}, key:d}))),
          state.lastCheckIn === todayStr()
            ? e('div', {className:'dl-checked-in', key:'done'}, [String.fromCodePoint(0x2705), ' You\u2019re checked in for today'])
            : e('button', {className:'dl-continue', onClick: checkInToday, key:'btn'}, 'I read today\u2019s verse')
        ]),

        e('div', {className:'dl-hub-heading', key:'hh2'}, [String.fromCodePoint(0x1F4DA), ' Explore']),
        e('div', {className:'dl-hub-grid', key:'grid'}, [
          e('button', {className:'dl-hub-card', onClick:()=>{setTab('search'); setExploreView('topics');}, key:'t'}, [
            e('span', {className:'dl-hub-icon', key:'i'}, String.fromCodePoint(0x1F50D)),
            e('span', {className:'dl-hub-name', key:'n'}, 'Topics'),
            e('span', {className:'dl-hub-sub', key:'s'}, 'Verses for how you feel')
          ]),
          e('button', {className:'dl-hub-card', onClick:()=>setTab('callings'), key:'p'}, [
            e('span', {className:'dl-hub-icon', key:'i'}, String.fromCodePoint(0x1F5D3)),
            e('span', {className:'dl-hub-name', key:'n'}, 'Plans'),
            e('span', {className:'dl-hub-sub', key:'s'}, 'Read at your own pace')
          ]),
          e('button', {className:'dl-hub-card', onClick:()=>{setTab('search'); setExploreView('tracks');}, key:'k'}, [
            e('span', {className:'dl-hub-icon', key:'i'}, String.fromCodePoint(0x1F6E4)),
            e('span', {className:'dl-hub-name', key:'n'}, 'Tracks'),
            e('span', {className:'dl-hub-sub', key:'s'}, 'Studies for real life')
          ]),
          e('button', {className:'dl-hub-card', onClick:()=>{setTab('search'); setExploreView('timeline');}, key:'l'}, [
            e('span', {className:'dl-hub-icon', key:'i'}, String.fromCodePoint(0x1F4C5)),
            e('span', {className:'dl-hub-name', key:'n'}, 'Timeline'),
            e('span', {className:'dl-hub-sub', key:'s'}, 'The whole story in order')
          ]),
          e('button', {className:'dl-hub-card', onClick:()=>{setTab('search'); setExploreView('people');}, key:'c'}, [
            e('span', {className:'dl-hub-icon', key:'i'}, String.fromCodePoint(0x1F464)),
            e('span', {className:'dl-hub-name', key:'n'}, 'People'),
            e('span', {className:'dl-hub-sub', key:'s'}, 'Follow one life through')
          ]),
          e('button', {className:'dl-hub-card', onClick:()=>{setDailyView('challenges'); setTab('daily');}, key:'g'}, [
            e('span', {className:'dl-hub-icon', key:'i'}, String.fromCodePoint(0x1F3AE)),
            e('span', {className:'dl-hub-name', key:'n'}, 'Games'),
            e('span', {className:'dl-hub-sub', key:'s'}, 'Word game and daily tests')
          ])
        ])
      ]) : null,

      tab === 'search' ? e('div', {className:'dl-daily-wrap', key:'search'}, [
        e('button', {className:'dl-topic-back', onClick:()=>setTab('library'), key:'bk'}, String.fromCodePoint(0x2190) + ' Library'),
        exploreView === 'timeline' ? e('div', {key:'timeline'}, [
          e('div', {className:'dl-empty-note', style:{marginBottom:'16px'}, key:'n'}, 'The whole story in order, from creation to the church. Dates are approximate.'),
          ...TIMELINE.map((era, ei) => e('div', {className:'dl-era', key:'era'+ei}, [
            e('div', {className:'dl-era-head', key:'h'}, [
              e('span', {className:'dl-era-dot', style:{background:era.tint}, key:'d'}),
              e('div', {style:{flex:1}, key:'t'}, [
                e('div', {className:'dl-era-name', key:'n'}, era.era),
                era.approx ? e('div', {className:'dl-era-when', key:'w'}, era.approx) : null
              ])
            ]),
            e('div', {className:'dl-era-line', style:{borderColor:era.tint}, key:'line'}, era.events.map((ev, xi) =>
              e('div', {className:'dl-tl-event', key:xi}, [
                e('span', {className:'dl-tl-dot', style:{background:era.tint}, key:'d'}),
                e('div', {className:'dl-tl-when', key:'w'}, ev.when),
                e('div', {className:'dl-tl-title', key:'t'}, ev.title),
                e('div', {className:'dl-tl-text', key:'x'}, ev.text),
                e('button', {className:'dl-tl-book', onClick:()=>{ setExploreView('topics'); setSearchQuery(ev.book); }, key:'b'}, ev.book)
              ])
            ))
          ]))
        ]) : null,

        exploreView === 'people' ? e('div', {key:'people'},
          openCharacter ? (() => {
            const ch = CHARACTERS.find(x => x.id === openCharacter);
            if (!ch) return null;
            return e('div', {key:'char'}, [
              e('button', {className:'dl-topic-back', onClick:()=>setOpenCharacter(null), key:'back'}, String.fromCodePoint(0x2190) + ' All people'),
              e('div', {className:'dl-char-head', key:'h'}, [
                e('div', {className:'dl-char-icon', key:'i'}, ch.icon),
                e('div', {className:'dl-char-name', key:'n'}, ch.name),
                e('div', {className:'dl-char-tag', key:'t'}, ch.tag)
              ]),
              e('div', {className:'dl-char-summary', key:'s'}, ch.summary),
              e('button', {className:'dl-listen-inline' + (isSpeaking ? ' active' : ''), onClick:()=>toggleSpeak(ch.summary + ' ' + ch.beats.map(b => b.t + '. ' + b.d).join(' ') + ' ' + ch.takeaway), key:'listen'},
                [String.fromCodePoint(isSpeaking ? 0x23F9 : 0x1F50A), ' ', isSpeaking ? 'Stop' : 'Listen']),
              ...ch.beats.map((b, bi) => e('div', {className:'dl-char-beat', key:bi}, [
                e('span', {className:'dl-char-num', key:'n'}, bi + 1),
                e('div', {style:{flex:1}, key:'c'}, [
                  e('div', {className:'dl-char-beat-t', key:'t'}, b.t),
                  e('div', {className:'dl-char-beat-d', key:'d'}, b.d)
                ])
              ])),
              e('div', {className:'dl-char-takeaway', key:'tk'}, [
                e('div', {className:'dl-char-takeaway-h', key:'h'}, [String.fromCodePoint(0x1F511), ' The takeaway']),
                e('div', {key:'t'}, ch.takeaway)
              ])
            ]);
          })() : [
            e('div', {className:'dl-empty-note', style:{marginBottom:'14px'}, key:'n'}, 'Follow one life all the way through, instead of book by book.'),
            e('div', {className:'dl-char-grid', key:'grid'}, CHARACTERS.map(ch =>
              e('button', {className:'dl-char-card', onClick:()=>{ if (requireAccount('read character studies')) return; setOpenCharacter(ch.id); }, key:ch.id}, [
                e('div', {className:'dl-char-card-icon', key:'i'}, ch.icon),
                e('div', {className:'dl-char-card-name', key:'n'}, ch.name),
                e('div', {className:'dl-char-card-tag', key:'t'}, ch.tag),
                !user ? e('span', {className:'dl-lockdot', key:'lk'}, String.fromCodePoint(0x1F512)) : null
              ])
            ))
          ]
        ) : null,

        exploreView === 'topics' ? e('div', {className:'dl-section-title', style:{marginTop:'4px'}, key:'lbl'}, [String.fromCodePoint(0x1F50D), ' How are you doing today?']) : null,
        exploreView === 'topics' ? e('div', {className:'dl-empty-note', style:{marginBottom:'14px'}, key:'note'}, 'Tell me what you\u2019re carrying and I\u2019ll find something for it \u2014 or just tap one below.') : null,
        exploreView === 'topics' ? e('input', {className:'dl-search-input', value:searchQuery, placeholder:'Try \u201canxious\u201d, \u201cgrief\u201d, \u201chope\u201d\u2026', onChange: ev => setSearchQuery(ev.target.value), key:'input'}) : null,

        (exploreView === 'topics' && openTopic) ? (() => {
          const t = TOPICS.find(x => x.id === openTopic);
          if (!t) return null;
          return e('div', {className:'dl-topic-open', key:'topicopen'}, [
            e('button', {className:'dl-topic-back', onClick:()=>setOpenTopic(null), key:'back'}, String.fromCodePoint(0x2190) + ' All topics'),
            e('div', {className:'dl-topic-open-head', key:'head'}, [
              e('span', {className:'dl-topic-open-icon', key:'i'}, t.icon),
              e('span', {className:'dl-topic-open-label', key:'l'}, t.label)
            ]),
            e('div', {className:'dl-topic-intro', key:'intro'}, t.intro),
            e('button', {className:'dl-listen-inline' + (isSpeaking ? ' active' : ''), onClick:()=>toggleSpeak(t.verses.map(v => v.ref + '. ' + v.text).join(' ')), key:'listen'}, [String.fromCodePoint(isSpeaking ? 0x23F9 : 0x1F50A), ' ', isSpeaking ? 'Stop' : 'Listen to these verses']),
            ...t.verses.map((v, i) => e('div', {className:'dl-topic-verse', key:i}, [
              e('div', {className:'dl-topic-verse-ref', key:'r'}, v.ref),
              e('div', {className:'dl-topic-verse-text', key:'t'}, v.text)
            ]))
          ]);
        })() : null,

        (exploreView === 'topics' && !openTopic && searchQuery.trim()) ? (() => {
          const topicHits = searchTopics(searchQuery);
          const verseHits = searchVerses(searchQuery);
          const lessonHits = searchLessons(searchQuery);
          const nothing = !topicHits.length && !verseHits.length && !lessonHits.length;
          return e('div', {key:'results'}, [
            nothing ? e('div', {className:'dl-empty-note', key:'none'}, 'Nothing found for that \u2014 try a feeling like \u201cafraid\u201d, or a book name.') : null,
            topicHits.length ? e('div', {className:'dl-section-title', key:'th'}, 'Topics') : null,
            ...topicHits.map(t => e('button', {className:'dl-topic-chip', onClick:()=>{ if (requireAccount('open topic studies')) return; setOpenTopic(t.id); }, key:'t'+t.id}, [
              e('span', {className:'dl-topic-chip-icon', key:'i'}, t.icon),
              e('span', {key:'l'}, t.label)
            ])),
            verseHits.length ? e('div', {className:'dl-section-title', key:'vh'}, 'Verses') : null,
            ...verseHits.map((v, i) => e('div', {className:'dl-topic-verse', key:'v'+i}, [
              e('div', {className:'dl-topic-verse-ref', key:'r'}, v.ref),
              e('div', {className:'dl-topic-verse-text', key:'t'}, v.text)
            ])),
            lessonHits.length ? e('div', {className:'dl-section-title', key:'lh'}, 'Lessons') : null,
            ...lessonHits.map(l => e('button', {className:'dl-search-lesson', onClick:()=>openIfAvailable(l), key:'l'+l.id}, [
              e('span', {className:'dl-fav-book', key:'b'}, l.book),
              e('span', {className:'dl-fav-title', key:'t'}, l.title),
              nodeStatus(l) === 'locked' ? e('span', {className:'dl-search-locked', key:'lk'}, String.fromCodePoint(0x1F512)) : null
            ]))
          ]);
        })() : null,

        (exploreView === 'topics' && !openTopic && !searchQuery.trim()) ? e('div', {className:'dl-topic-grid', key:'grid'}, TOPICS.map(t =>
          e('button', {className:'dl-topic-card', onClick:()=>{ if (requireAccount('open topic studies')) return; setOpenTopic(t.id); }, key:t.id}, [
            e('div', {className:'dl-topic-card-icon', key:'i'}, t.icon),
            e('div', {className:'dl-topic-card-label', key:'l'}, t.label),
            !user ? e('span', {className:'dl-lockdot', key:'lk'}, String.fromCodePoint(0x1F512)) : null
          ])
        )) : null
      ]) : null,

      tab === 'community' ? e('div', {className:'dl-forest', key:'community'}, [
        e('div', {className:'dl-forest-scene', key:'scene', dangerouslySetInnerHTML:{__html:
          '<svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">' +
            '<defs>' +
              '<linearGradient id="fsky" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset="0%" stop-color="#0a1f18"/><stop offset="28%" stop-color="#123a2b"/>' +
                '<stop offset="58%" stop-color="#1a5540"/><stop offset="82%" stop-color="#0f3527"/>' +
                '<stop offset="100%" stop-color="#071a13"/>' +
              '</linearGradient>' +
              '<radialGradient id="fglow" cx="50%" cy="18%" r="60%">' +
                '<stop offset="0%" stop-color="#cdf5c0" stop-opacity="0.30"/>' +
                '<stop offset="100%" stop-color="#cdf5c0" stop-opacity="0"/>' +
              '</radialGradient>' +
              '<linearGradient id="fbeam" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset="0%" stop-color="#e6ffd9" stop-opacity="0.22"/>' +
                '<stop offset="100%" stop-color="#e6ffd9" stop-opacity="0"/>' +
              '</linearGradient>' +
              '<linearGradient id="ffloor" x1="0" y1="0" x2="0" y2="1">' +
                '<stop offset="0%" stop-color="#0d2a1f" stop-opacity="0"/>' +
                '<stop offset="100%" stop-color="#061510" stop-opacity="0.95"/>' +
              '</linearGradient>' +
            '</defs>' +
            '<rect width="400" height="800" fill="url(#fsky)"/>' +
            '<rect width="400" height="800" fill="url(#fglow)"/>' +
            '<g opacity="0.16">' +
              '<polygon points="40,760 40,470 20,470 55,300 90,470 70,470 70,760" fill="#8ad3a4"/>' +
              '<polygon points="150,760 150,430 128,430 168,240 208,430 186,430 186,760" fill="#8ad3a4"/>' +
              '<polygon points="270,760 270,490 252,490 285,330 318,490 300,490 300,760" fill="#8ad3a4"/>' +
              '<polygon points="360,760 360,450 340,450 378,280 400,410 400,760" fill="#8ad3a4"/>' +
            '</g>' +
            '<g opacity="0.30">' +
              '<polygon points="10,780 10,520 -14,520 26,330 66,520 42,520 42,780" fill="#2f7d55"/>' +
              '<polygon points="105,780 105,560 84,560 120,395 156,560 135,560 135,780" fill="#2f7d55"/>' +
              '<polygon points="215,780 215,540 192,540 232,360 272,540 249,540 249,780" fill="#2f7d55"/>' +
              '<polygon points="330,780 330,570 310,570 345,410 380,570 360,570 360,780" fill="#2f7d55"/>' +
            '</g>' +
            '<g opacity="0.62">' +
              '<polygon points="-20,800 -20,600 -48,600 -6,410 36,600 8,600 8,800" fill="#123a29"/>' +
              '<polygon points="72,800 72,640 48,640 88,470 128,640 104,640 104,800" fill="#123a29"/>' +
              '<polygon points="196,800 196,610 168,610 212,430 256,610 228,610 228,800" fill="#123a29"/>' +
              '<polygon points="316,800 316,650 292,650 332,485 372,650 348,650 348,800" fill="#123a29"/>' +
              '<polygon points="410,800 410,600 384,600 424,420 464,600 438,600 438,800" fill="#123a29"/>' +
            '</g>' +
            '<g class="fbeams">' +
              '<polygon points="120,-40 175,-40 95,820 20,820" fill="url(#fbeam)"/>' +
              '<polygon points="255,-40 292,-40 232,820 178,820" fill="url(#fbeam)"/>' +
            '</g>' +
            '<rect y="560" width="400" height="240" fill="url(#ffloor)"/>' +
          '</svg>'
        }}),
        e('div', {className:'dl-fireflies', key:'ff'},
          [12,28,44,60,76,88,20,52,68,36].map((L, i) =>
            e('span', {className:'dl-firefly', style:{left: L + '%', animationDelay: (i * 1.7) + 's', animationDuration: (11 + (i % 5) * 2.5) + 's'}, key:i})
          )
        ),
        e('div', {className:'dl-forest-inner', key:'inner'}, [
        e('div', {className:'dl-forest-head', key:'ptitle'}, [
          e('div', {className:'dl-forest-title', key:'t'}, 'The Upper Room'),
          e('div', {className:'dl-forest-sub', key:'s'}, 'Where a group gathers to learn together')
        ]),

        !user
          ? e('div', {className:'dl-signin-prompt', key:'signin'}, [
              e('div', {className:'dl-signin-icon', key:'i'}, String.fromCodePoint(0x1F465)),
              e('div', {className:'dl-signin-title', key:'t'}, 'Sign in to join the community'),
              e('div', {className:'dl-signin-sub', key:'s'}, 'Add friends, join groups, and share prayer requests with others walking the same path.'),
              e('button', {className:'dl-continue', style:{maxWidth:'260px', margin:'16px auto 0'}, onClick: ()=>{ setAuthMode('signup'); setAuthError(''); setAuthOpen(true); }, key:'b'}, 'Sign in / Create account')
            ])

        : viewingProfile
        ? (() => {
            const vp = viewingProfile;
            const isFriend = friends.some(f => f.id === vp.id);
            // Build a stand-in state so trophies can be checked from public data
            const pseudo = {
              completed: new Array(vp.lessons_done || 0).fill(-1),
              completedCheckpoints: new Array(vp.checkpoints_done || 0).fill(''),
              dailyStreak: vp.daily_streak || 0,
              reflections: [], testBest: {}, wordleWins: 0
            };
            const earned = TROPHIES.filter(t => { try { return t.check(pseudo); } catch (ex) { return false; } });
            return e('div', {className:'dl-profile-outer', key:'viewprofile'}, [
              e('div', {className:'dl-profile-stars', key:'stars'}),
              e('div', {className:'dl-profile-glow', key:'glow'}),
              e('div', {className:'dl-daily-wrap dl-profile-page', key:'inner'}, [
                e('button', {className:'dl-vp-back', onClick:()=>setViewingProfile(null), key:'back'}, String.fromCodePoint(0x2190) + ' Back'),

                e('div', {className:'dl-profile-header', key:'ph'}, [
                  e('span', {className:'dl-profile-cross', style:{top:'14px', left:'14%'}, key:'c1'}, String.fromCodePoint(0x271D)),
                  e('span', {className:'dl-profile-cross', style:{top:'34px', right:'16%'}, key:'c2'}, String.fromCodePoint(0x271D)),
                  e('span', {className:'dl-profile-cross', style:{bottom:'12px', left:'22%'}, key:'c3'}, String.fromCodePoint(0x271D)),
                  e('span', {className:'dl-profile-cross', style:{bottom:'20px', right:'20%'}, key:'c4'}, String.fromCodePoint(0x271D)),
                  e('div', {className:'dl-profile-avatar', key:'av'}, vp.avatar || String.fromCodePoint(0x1F4D6)),
                  e('div', {className:'dl-profile-name', key:'name'}, vp.display_name),
                  vp.verse ? e('div', {className:'dl-profile-verse', key:'verse'}, '\u201c' + vp.verse + '\u201d') : null,
                  isFriend
                    ? e('div', {className:'dl-vp-friendtag', key:'ft'}, [String.fromCodePoint(0x2713), ' Friends'])
                    : e('button', {className:'dl-profile-edit-btn', onClick:()=>sendFriendRequest(vp.id), key:'add'},
                        friendStatus(vp.id) === 'sent' ? 'Request sent' : 'Add friend')
                ]),

                e('div', {className:'dl-hero-streak', key:'hero'}, [
                  e('div', {className:'dl-hero-flame', key:'flame'}, String.fromCodePoint(0x1F525)),
                  e('div', {className:'dl-hero-num', key:'num'}, vp.daily_streak || 0),
                  e('div', {className:'dl-hero-label', key:'label'}, (vp.daily_streak === 1 ? 'day walking in the Word' : 'days walking in the Word'))
                ]),

                e('div', {className:'dl-profile-grid', key:'grid'}, [
                  e('div', {className:'dl-stat', key:'l'}, [e('div',{className:'dl-stat-badge b2', key:'i'}, String.fromCodePoint(0x1F4D6)), e('div',{className:'dl-stat-num', key:'n'}, vp.lessons_done || 0), e('div',{className:'dl-stat-label', key:'t'}, 'Lessons done')]),
                  e('div', {className:'dl-stat', key:'c'}, [e('div',{className:'dl-stat-badge b3', key:'i'}, String.fromCodePoint(0x1F3C6)), e('div',{className:'dl-stat-num', key:'n'}, vp.checkpoints_done || 0), e('div',{className:'dl-stat-label', key:'t'}, 'Checkpoints')]),
                  e('div', {className:'dl-stat', key:'s'}, [e('div',{className:'dl-stat-badge b1', key:'i'}, String.fromCodePoint(0x1F525)), e('div',{className:'dl-stat-num', key:'n'}, vp.daily_streak || 0), e('div',{className:'dl-stat-label', key:'t'}, 'Day streak')]),
                  e('div', {className:'dl-stat', key:'tr'}, [e('div',{className:'dl-stat-badge b4', key:'i'}, String.fromCodePoint(0x1F3C5)), e('div',{className:'dl-stat-num', key:'n'}, earned.length), e('div',{className:'dl-stat-label', key:'t'}, 'Trophies')])
                ]),

                e('div', {className:'dl-section-title', key:'trlbl'}, [String.fromCodePoint(0x1F3C6), ' Trophy Case']),
                earned.length === 0
                  ? e('div', {className:'dl-empty-note', key:'notr'}, 'No trophies earned yet.')
                  : e('div', {className:'dl-trophy-scroll', key:'trophies'}, earned.map(t =>
                      e('div', {className:'dl-trophy earned', key:t.id, title:t.desc}, [
                        e('div', {className:'dl-trophy-icon', key:'i'}, t.icon),
                        e('div', {className:'dl-trophy-title', key:'t'}, t.title)
                      ])
                    )),

                e('div', {className:'dl-section-title', key:'privlbl'}, [String.fromCodePoint(0x1F512), ' Private']),
                e('div', {className:'dl-locked-card', key:'lock1'}, [
                  e('span', {className:'dl-locked-icon', key:'i'}, String.fromCodePoint(0x1F512)),
                  e('div', {key:'t'}, [
                    e('div', {className:'dl-locked-title', key:'a'}, 'Reflections'),
                    e('div', {className:'dl-locked-sub', key:'b'}, 'Only visible to ' + vp.display_name)
                  ])
                ]),
                e('div', {className:'dl-locked-card', key:'lock2'}, [
                  e('span', {className:'dl-locked-icon', key:'i'}, String.fromCodePoint(0x1F512)),
                  e('div', {key:'t'}, [
                    e('div', {className:'dl-locked-title', key:'a'}, 'Testimony'),
                    e('div', {className:'dl-locked-sub', key:'b'}, 'Kept private, always')
                  ])
                ])
              ])
            ]);
          })()

        : openGroup
        ? (() => {
            const g = myGroups.find(x => x.id === openGroup) || publicGroups.find(x => x.id === openGroup);
            if (!g) return null;
            const isMember = myGroups.some(x => x.id === openGroup);
            return e('div', {className:'dl-chat-wrap', key:'groupdetail'}, [
              e('div', {className:'dl-chat-header', key:'head'}, [
                e('button', {className:'dl-chat-back', onClick:()=>setOpenGroup(null), key:'back'}, String.fromCodePoint(0x2039)),
                e('div', {className:'dl-chat-head-icon', key:'ic'}, roomIcon(g)),
                e('div', {style:{flex:1, minWidth:0}, key:'t'}, [
                  e('div', {className:'dl-chat-title', key:'n'}, [
                    g.name,
                    (g.room_number && g.room_number > 1) ? e('span', {className:'dl-room-num', key:'rn'}, ' #' + g.room_number) : null
                  ]),
                  e('div', {className:'dl-chat-sub', key:'s'}, (() => {
                    const count = g.member_count || groupMembers.length || 0;
                    const cap = g.capacity || 75;
                    if (!g.is_public) return count + ' members \u00b7 Code ' + g.join_code;
                    const left = Math.max(0, cap - count);
                    return count + ' of ' + cap + (left > 0 ? ' \u00b7 ' + left + ' spots left' : ' \u00b7 full');
                  })())
                ]),
                (isMember && g.owner_id === user.id) ? e('button', {className:'dl-room-invite', title:'Manage room', onClick:()=>{
                  setManageOpen(!manageOpen); setEditingRoom(false); setConfirmDelete(false);
                  setRoomNameDraft(g.name); setRoomDescDraft(g.description || ''); setRoomIconDraft(g.icon || '\ud83d\udd12');
                }, key:'mng'}, String.fromCodePoint(0x2699)) : null,
                (isMember && (g.member_count || 0) < (g.capacity || 75)) ? e('button', {className:'dl-room-invite', title:'Invite friends', onClick:()=>{
                  const link = 'https://stepstofaith.com/?room=' + g.join_code;
                  try {
                    if (navigator.share) { navigator.share({ title: g.name, text: 'Join me in ' + g.name + ' on Steps to Faith', url: link }); }
                    else { navigator.clipboard.writeText(link); setSocialMsg('Room link copied!'); setTimeout(()=>setSocialMsg(''), 2500); }
                  } catch (ex) { try { navigator.clipboard.writeText(link); setSocialMsg('Room link copied!'); setTimeout(()=>setSocialMsg(''),2500); } catch (e2) {} }
                }, key:'inv'}, String.fromCodePoint(0x1F465)) : null
              ]),
              e('div', {className:'dl-roomtabs', key:'rtabs'}, [
                e('button', {className:'dl-roomtab' + (roomView==='chat'?' on':''), onClick:()=>setRoomView('chat'), key:'c'}, 'Chat'),
                e('button', {className:'dl-roomtab' + (roomView==='people'?' on':''), onClick:()=>setRoomView('people'), key:'p'}, 'People \u00b7 ' + groupMembers.length)
              ]),
              socialMsg ? e('div', {className:'dl-social-msg', key:'rmsg'}, socialMsg) : null,

              (manageOpen && g.owner_id === user.id) ? e('div', {className:'dl-manage-overlay', key:'manageov'}, [
                e('div', {className:'dl-manage-scrim', onClick:()=>setManageOpen(false), key:'sc'}),
                e('div', {className:'dl-manage', key:'manage'}, [
                e('div', {className:'dl-manage-h', key:'h'}, [String.fromCodePoint(0x2699), ' Room settings']),

                editingRoom
                  ? e('div', {key:'edit'}, [
                      e('input', {className:'dl-social-input', style:{width:'100%', marginBottom:'8px'}, value:roomNameDraft, placeholder:'Room name', onChange: ev=>setRoomNameDraft(ev.target.value), key:'n'}),
                      e('input', {className:'dl-social-input', style:{width:'100%', marginBottom:'10px'}, value:roomDescDraft, placeholder:'Description', onChange: ev=>setRoomDescDraft(ev.target.value), key:'d'}),
                      e('div', {className:'dl-manage-sub', style:{marginTop:0}, key:'il'}, 'Room icon'),
                      e('div', {className:'dl-avatar-grid', key:'ig'}, AVATAR_OPTIONS.map(a =>
                        e('button', {className:'dl-avatar-opt' + (a===roomIconDraft?' sel':''), onClick:()=>setRoomIconDraft(a), key:a}, a)
                      )),
                      e('div', {style:{display:'flex', gap:'8px', marginTop:'10px'}, key:'b'}, [
                        e('button', {className:'dl-gm-cancel', onClick:()=>setEditingRoom(false), key:'c'}, 'Cancel'),
                        e('button', {className:'dl-gm-create', onClick:()=>renameRoom(g.id, roomNameDraft, roomDescDraft, roomIconDraft), key:'s'}, 'Save')
                      ])
                    ])
                  : e('button', {className:'dl-manage-btn', onClick:()=>setEditingRoom(true), key:'ren'}, [String.fromCodePoint(0x270F), ' Rename room']),

                e('div', {className:'dl-manage-sub', key:'ms'}, 'Members (' + groupMembers.length + ')'),
                ...groupMembers.map(m => e('div', {className:'dl-manage-row', key:m.id}, [
                  e('button', {className:'dl-manage-who', onClick:()=>viewProfile(m.id), key:'w'}, [
                    e('span', {className:'dl-manage-av', key:'a'}, m.avatar || String.fromCodePoint(0x1F4D6)),
                    e('span', {style:{flex:1, minWidth:0}, key:'n'}, [
                      e('div', {className:'dl-manage-name', key:'nm'}, m.display_name),
                      m.id === g.owner_id ? e('div', {className:'dl-manage-tag', key:'t'}, 'Owner') : null
                    ])
                  ]),
                  m.id !== g.owner_id
                    ? e('button', {className:'dl-manage-kick', onClick:()=>removeMember(g.id, m.id), key:'k'}, 'Remove')
                    : null
                ])),

                confirmDelete
                  ? e('div', {className:'dl-manage-danger', key:'cd'}, [
                      e('div', {key:'t'}, 'Delete this room for everyone? All messages go with it.'),
                      e('div', {style:{display:'flex', gap:'8px', marginTop:'10px'}, key:'b'}, [
                        e('button', {className:'dl-gm-cancel', onClick:()=>setConfirmDelete(false), key:'c'}, 'Keep it'),
                        e('button', {className:'dl-manage-delete', onClick:()=>deleteRoom(g.id), key:'d'}, 'Delete room')
                      ])
                    ])
                  : e('button', {className:'dl-manage-btn danger', onClick:()=>setConfirmDelete(true), key:'del'}, [String.fromCodePoint(0x1F5D1), ' Delete room']),
                e('button', {className:'dl-manage-close', onClick:()=>setManageOpen(false), key:'cl'}, 'Close')
                ])
              ]) : null,

              e('div', {className:'dl-people-pane' + (roomView === 'people' ? '' : ' mobile-hide'), key:'ppane'},
                roomLeaderboard().map((m, i) => e('div', {className:'dl-lb-row', key:m.id}, [
                  e('span', {className:'dl-lb-rank' + (i<3?' top':''), key:'r'}, '#' + (i+1)),
                  e('button', {className:'dl-manage-who', onClick:()=>viewProfile(m.id), key:'w'}, [
                    e('span', {className:'dl-manage-av', key:'a'}, m.avatar || String.fromCodePoint(0x1F4D6)),
                    e('span', {style:{flex:1, minWidth:0}, key:'n'}, [
                      e('div', {className:'dl-manage-name', key:'nm'}, m.display_name),
                      e('div', {className:'dl-lb-stats', key:'s'}, (m.lessons_done||0) + ' lessons \u00b7 ' + (m.daily_streak||0) + ' day streak')
                    ])
                  ]),
                  m.id === g.owner_id ? e('span', {className:'dl-manage-tag', key:'o'}, 'Owner') : null
                ]))
              ),

              e('div', {className:'dl-chat-scroll' + (roomView === 'chat' ? '' : ' mobile-hide'), key:'scroll', ref: chatScrollRef, onScroll: (ev) => {
                  const el = ev.target;
                  chatAtBottomRef.current = (el.scrollHeight - el.scrollTop - el.clientHeight) < 80;
                }},
                chatMessages.length === 0
                  ? [ e('div', {className:'dl-chat-empty', key:'empty'}, [
                      e('div', {className:'dl-chat-empty-icon', key:'i'}, String.fromCodePoint(0x1F4AC)),
                      e('div', {key:'t'}, g.description || 'Be the first to say something.')
                    ]) ]
                  : (() => {
                      const out = [];
                      let lastDay = '';
                      chatMessages.forEach((m, idx) => {
                        const author = chatAuthors[m.user_id];
                        const mine = m.user_id === user.id;
                        const isPrayer = m.kind === 'prayer';
                        const prev = idx > 0 ? chatMessages[idx-1] : null;

                        // Day divider
                        let dayLabel = '';
                        try {
                          const d = new Date(m.created_at);
                          const today = new Date();
                          const yest = new Date(); yest.setDate(today.getDate()-1);
                          if (d.toDateString() === today.toDateString()) dayLabel = 'Today';
                          else if (d.toDateString() === yest.toDateString()) dayLabel = 'Yesterday';
                          else dayLabel = d.toLocaleDateString([], { month:'long', day:'numeric' });
                        } catch (ex) { dayLabel = ''; }
                        if (dayLabel && dayLabel !== lastDay) {
                          out.push(e('div', {className:'dl-chat-day', key:'day'+idx}, e('span', {}, dayLabel)));
                          lastDay = dayLabel;
                        }

                        // Group consecutive messages from the same person
                        const grouped = prev && prev.user_id === m.user_id && prev.kind === m.kind &&
                          (new Date(m.created_at) - new Date(prev.created_at)) < 5*60*1000 &&
                          dayLabel === lastDay;

                        out.push(e('div', {className:'dl-msg-row' + (mine ? ' mine' : '') + (grouped ? ' grouped' : ''), key:m.id}, [
                          !mine ? (grouped
                            ? e('span', {className:'dl-msg-avatar spacer', key:'av'})
                            : e('button', {className:'dl-msg-avatar', onClick:()=>viewProfile(m.user_id), key:'av'}, (author && author.avatar) || String.fromCodePoint(0x1F4D6))
                          ) : null,
                          e('div', {className:'dl-msg-col', key:'col'}, [
                            (!mine && !grouped) ? e('button', {className:'dl-msg-author', onClick:()=>{ if (!m.is_anonymous) viewProfile(m.user_id); }, key:'a'}, m.is_anonymous ? 'Anonymous' : ((author && author.display_name) || 'Someone')) : null,
                            (m.kind === 'verse')
                            ? e('div', {className:'dl-card-verse', key:'b'}, [
                                e('div', {className:'dl-card-tag', key:'t'}, [String.fromCodePoint(0x1F4D6), ' Shared a verse']),
                                (m.meta && m.meta.ref) ? e('div', {className:'dl-card-ref', key:'r'}, m.meta.ref) : null,
                                e('div', {className:'dl-card-verse-text', key:'x'}, m.body)
                              ])
                          : (m.kind === 'assignment')
                            ? (() => {
                                const total = groupMembers.length || 1;
                                const doneList = assignDone.filter(a => a.message_id === m.id);
                                const doneN = doneList.length;
                                const iDid = doneList.some(a => a.user_id === user.id);
                                const les = m.meta ? LESSONS.find(l => l.id === m.meta.lessonId) : null;
                                const due = m.meta && m.meta.due ? m.meta.due : null;
                                const overdue = due && new Date(due) < new Date(todayStr());
                                const showing = whoDoneFor === m.id;
                                return e('div', {className:'dl-card-assign', key:'b'}, [
                                  e('div', {className:'dl-card-tag assign', key:'t'}, [String.fromCodePoint(0x1F4DD), ' Assignment']),
                                  e('div', {className:'dl-card-title', key:'n'}, m.body),
                                  due ? e('div', {className:'dl-card-due' + (overdue?' late':''), key:'d'},
                                    (overdue ? 'Was due ' : 'Due ') + new Date(due + 'T00:00:00').toLocaleDateString([], {month:'short', day:'numeric'})) : null,
                                  e('div', {className:'dl-card-bar', key:'bar'}, e('div', {className:'dl-card-fill', style:{width: Math.round((doneN/total)*100) + '%'}})),
                                  e('button', {className:'dl-card-count link', onClick:()=>setWhoDoneFor(showing ? null : m.id), key:'c'},
                                    doneN + ' of ' + total + ' finished \u00b7 ' + (showing ? 'hide' : 'see who')),
                                  showing ? e('div', {className:'dl-whodone', key:'wd'}, groupMembers.map(mem => {
                                    const did = doneList.some(a => a.user_id === mem.id);
                                    return e('div', {className:'dl-whodone-row' + (did?' did':''), key:mem.id}, [
                                      e('span', {key:'i'}, did ? String.fromCodePoint(0x2705) : String.fromCodePoint(0x2B1C)),
                                      e('span', {key:'n'}, mem.display_name)
                                    ]);
                                  })) : null,
                                  e('div', {className:'dl-card-actions', key:'a'}, [
                                    les ? e('button', {className:'dl-card-btn', onClick:()=>openIfAvailable(les), key:'o'}, 'Read it') : null,
                                    e('button', {className:'dl-card-btn' + (iDid ? ' done' : ''), onClick:()=>toggleAssignmentDone(m.id, g.id), key:'d'},
                                      iDid ? (String.fromCodePoint(0x2713) + ' Done') : 'Mark done')
                                  ])
                                ]);
                              })()
                          : (m.kind === 'prompt' || m.kind === 'question')
                            ? (() => {
                                const isPrompt = m.kind === 'prompt';
                                const all = answers.filter(a => a.message_id === m.id);
                                const mine = all.find(a => a.user_id === user.id);
                                const locked = isPrompt && !mine;
                                const draft = answerDrafts[m.id] || '';
                                return e('div', {className:'dl-card-prompt' + (isPrompt?'':' question'), key:'b'}, [
                                  e('div', {className:'dl-card-tag' + (isPrompt?'':' q'), key:'t'},
                                    isPrompt ? [String.fromCodePoint(0x1F4AC), ' Discussion'] : [String.fromCodePoint(0x2753), ' Question']),
                                  e('div', {className:'dl-card-title', key:'n'}, m.body),
                                  e('div', {className:'dl-card-count', key:'c'}, all.length + (all.length === 1 ? ' answer' : ' answers')),
                                  e('textarea', {className:'dl-testimony-input', style:{minHeight:'60px', marginTop:'8px'},
                                    value: draft || (mine ? mine.body : ''),
                                    placeholder: isPrompt ? 'Write your answer to unlock the others\u2026' : 'Answer this\u2026',
                                    onChange: ev => setAnswerDrafts(d => ({ ...d, [m.id]: ev.target.value })), key:'ta'}),
                                  e('button', {className:'dl-card-btn', style:{marginTop:'8px'}, onClick:()=>submitAnswer(m.id, g.id), key:'s'},
                                    mine ? 'Update my answer' : 'Post my answer'),
                                  locked
                                    ? e('div', {className:'dl-locked-answers', key:'lk'}, [String.fromCodePoint(0x1F512), ' ' + all.length + ' hidden until you answer'])
                                    : e('div', {className:'dl-answers', key:'ans'}, all.map(a => {
                                        const who = chatAuthors[a.user_id] || groupMembers.find(x => x.id === a.user_id);
                                        return e('div', {className:'dl-answer', key:a.id}, [
                                          e('div', {className:'dl-answer-who', key:'w'}, (who && who.display_name) || 'Someone'),
                                          e('div', {key:'b'}, a.body)
                                        ]);
                                      }))
                                ]);
                              })()
                          : e('div', {className:'dl-msg-bubble' + (mine ? ' mine' : '') + (isPrayer ? ' prayer' : '') + (grouped ? ' grouped' : '') + (m.pending ? ' pending' : ''), key:'b'}, [
                              (isPrayer && !grouped) ? e('div', {className:'dl-msg-prayer-tag', key:'pt'}, [String.fromCodePoint(0x1F64F), ' Prayer request']) : null,
                              e('div', {key:'txt'}, m.body)
                            ]),
                          (() => {
                            const rx = reactions.filter(r => r.message_id === m.id);
                            const counts = {};
                            rx.forEach(r => { counts[r.emoji] = (counts[r.emoji] || 0) + 1; });
                            const emojis = Object.keys(counts);
                            return e('div', {className:'dl-rx-row' + (mine ? ' mine' : ''), key:'rx'}, [
                              ...emojis.map(em => {
                                const isMine = rx.some(r => r.emoji === em && r.user_id === user.id);
                                return e('button', {className:'dl-rx' + (isMine ? ' on' : ''), onClick:()=>toggleReaction(m.id, em, g.id), key:em}, [em, ' ', counts[em]]);
                              }),
                              !m.pending ? e('button', {className:'dl-rx add', onClick:()=>toggleReaction(m.id, String.fromCodePoint(0x1F64F), g.id), key:'add'}, String.fromCodePoint(0x1F64F)) : null
                            ]);
                          })(),
                            e('div', {className:'dl-msg-time', key:'t'}, [
                              formatMsgTime(m.created_at),
                              mine ? e('button', {className:'dl-msg-del', onClick:()=>deleteMessage(m.id, g.id), key:'d'}, 'Delete') : null
                            ])
                          ])
                        ]));
                      });
                      return out;
                    })()
              ),

              (roomView === 'chat' && isMember) ? e('div', {className:'dl-assignwrap', key:'assignwrap'}, [
                !composerMode
                  ? e('div', {className:'dl-tools', key:'tools'}, [
                      g.owner_id === user.id ? e('button', {className:'dl-tool', onClick:()=>{setComposerMode('assign'); setAssignBook(null); setAssignSearch('');}, key:'a'},
                        [String.fromCodePoint(0x1F4DD), ' Assign']) : null,
                      g.owner_id === user.id ? e('button', {className:'dl-tool', onClick:()=>{setComposerMode('prompt'); setPromptDraft('');}, key:'p'},
                        [String.fromCodePoint(0x1F4AC), ' Discuss']) : null,
                      e('button', {className:'dl-tool', onClick:()=>{setComposerMode('ask'); setPromptDraft(''); setAskAnon(true);}, key:'q'},
                        [String.fromCodePoint(0x2753), ' Ask'])
                    ])
                  : null,

                composerMode === 'assign' ? e('div', {className:'dl-assign-box', key:'ab'}, [
                  e('div', {className:'dl-manage-sub', style:{marginTop:0}, key:'l'}, assignBook ? assignBook : 'Pick a book'),
                  !assignBook
                    ? e('div', {key:'books'}, [
                        e('input', {className:'dl-social-input', style:{width:'100%', marginBottom:'8px'}, value:assignSearch, placeholder:'Search books or lessons\u2026', onChange: ev=>setAssignSearch(ev.target.value), key:'s'}),
                        e('div', {className:'dl-assign-list', key:'bl'},
                          assignSearch.trim().length >= 2
                            ? searchLessons(assignSearch).map(l => e('button', {className:'dl-assign-item', onClick:()=>assignLesson(g.id, l), key:l.id}, [
                                e('span', {className:'dl-fav-book', key:'b'}, l.book),
                                e('span', {className:'dl-fav-title', key:'t'}, l.title)
                              ]))
                            : [...new Set(LESSONS.map(l => l.book))].map(bk =>
                                e('button', {className:'dl-assign-item', onClick:()=>setAssignBook(bk), key:bk}, [
                                  e('span', {className:'dl-fav-title', key:'t'}, bk),
                                  e('span', {className:'dl-fav-book', key:'c'}, LESSONS.filter(l=>l.book===bk).length + ' lessons')
                                ])
                              )
                        )
                      ])
                    : e('div', {key:'lessons'}, [
                        e('button', {className:'dl-topic-back', onClick:()=>setAssignBook(null), key:'bk'}, String.fromCodePoint(0x2190) + ' All books'),
                        e('div', {className:'dl-assign-list', key:'ll'},
                          LESSONS.filter(l => l.book === assignBook).map(l =>
                            e('button', {className:'dl-assign-item', onClick:()=>assignLesson(g.id, l), key:l.id}, [
                              e('span', {className:'dl-fav-title', key:'t'}, l.title)
                            ])
                          )
                        )
                      ]),
                  e('div', {className:'dl-due-row', key:'due'}, [
                    e('span', {className:'dl-due-label', key:'l'}, 'Due (optional)'),
                    e('input', {type:'date', className:'dl-due-input', value:assignDue, onChange: ev=>setAssignDue(ev.target.value), key:'i'})
                  ]),
                  e('button', {className:'dl-gm-cancel', style:{width:'100%'}, onClick:()=>{setComposerMode(null); setAssignBook(null);}, key:'c'}, 'Cancel')
                ]) : null,

                (composerMode === 'prompt' || composerMode === 'ask') ? e('div', {className:'dl-assign-box', key:'pb'}, [
                  e('div', {className:'dl-manage-sub', style:{marginTop:0}, key:'l'},
                    composerMode === 'prompt' ? 'Discussion question' : 'Ask the room'),
                  e('div', {className:'dl-tool-hint', key:'h'},
                    composerMode === 'prompt'
                      ? 'Everyone answers privately first \u2014 they only see other answers once they\u2019ve written their own.'
                      : 'Ask anything. You can post without your name attached.'),
                  e('textarea', {className:'dl-testimony-input', style:{minHeight:'70px'}, value:promptDraft,
                    placeholder: composerMode === 'prompt' ? 'e.g. Where have you seen God provide this week?' : 'Your question\u2026',
                    onChange: ev=>setPromptDraft(ev.target.value), key:'t'}),
                  composerMode === 'ask' ? e('label', {className:'dl-anon-label', style:{marginTop:'10px'}, key:'an'}, [
                    e('input', {type:'checkbox', checked:askAnon, onChange: ev=>setAskAnon(ev.target.checked), key:'cb'}),
                    ' Post anonymously'
                  ]) : null,
                  e('div', {style:{display:'flex', gap:'8px', marginTop:'10px'}, key:'b'}, [
                    e('button', {className:'dl-gm-cancel', onClick:()=>setComposerMode(null), key:'c'}, 'Cancel'),
                    e('button', {className:'dl-gm-create', onClick:()=>postPrompt(g.id, promptDraft, composerMode === 'prompt' ? 'prompt' : 'question', composerMode === 'ask' && askAnon), key:'s'},
                      composerMode === 'prompt' ? 'Post question' : 'Ask')
                  ])
                ]) : null
              ]) : null,

              roomView === 'chat' && isMember
                ? e('div', {className:'dl-chat-composer', key:'composer'}, [
                    e('div', {className:'dl-chat-kind', key:'kind'}, [
                      e('button', {className:'dl-kind-btn' + (chatKind==='message'?' active':''), onClick:()=>setChatKind('message'), key:'m'}, 'Message'),
                      e('button', {className:'dl-kind-btn' + (chatKind==='prayer'?' active':''), onClick:()=>setChatKind('prayer'), key:'p'}, [String.fromCodePoint(0x1F64F), ' Prayer'])
                    ]),
                    e('div', {className:'dl-chat-input-row', key:'row'}, [
                      e('textarea', {className:'dl-chat-input', value:chatDraft, rows:1,
                        placeholder: chatKind==='prayer' ? 'Share a prayer request\u2026' : 'Write a message\u2026',
                        onChange: ev=>setChatDraft(ev.target.value),
                        onKeyDown: ev=>{ if(ev.key==='Enter' && !ev.shiftKey){ ev.preventDefault(); sendMessage(g.id, chatDraft, chatKind); } },
                        key:'in'}),
                      e('button', {className:'dl-chat-send', disabled: !chatDraft.trim(), onClick:()=>sendMessage(g.id, chatDraft, chatKind), key:'s'}, String.fromCodePoint(0x27A4))
                    ])
                  ])
                : roomView === 'chat' ? e('div', {className:'dl-chat-joinbar', key:'joinbar'}, [
                    e('span', {key:'t'}, 'Join to join the conversation'),
                    e('button', {className:'dl-social-btn', onClick:()=>joinGroupDirect(g.id), key:'j'}, 'Join room')
                  ]) : null,

              isMember ? e('button', {className:'dl-plan-leave', style:{margin:'10px auto 0', display:'block'}, onClick:()=>leaveGroup(g.id), key:'leave'}, 'Leave this room') : null
            ]);
          })()


        : e('div', {key:'main'}, [
            newRoomCode ? e('div', {className:'dl-newroom-banner', key:'newroom'}, [
              e('div', {className:'dl-newroom-title', key:'t'}, 'Room created! Share this code:'),
              e('div', {className:'dl-newroom-code', key:'c'}, newRoomCode),
              e('button', {className:'dl-newroom-close', onClick:()=>setNewRoomCode(''), key:'x'}, 'Got it')
            ]) : null,

            e('div', {className:'dl-social-tabs', key:'stabs'}, [
              e('button', {className:'dl-social-tab' + (socialTab==='groups'?' active':''), onClick:()=>{setSocialTab('groups'); setSocialMsg('');}, key:'g'}, 'Rooms'),
              e('button', {className:'dl-social-tab' + (socialTab==='friends'?' active':''), onClick:()=>{setSocialTab('friends'); setSocialMsg('');}, key:'f'}, [
                'Friends',
                incomingReqs.length > 0 ? e('span', {className:'dl-tab-badge', key:'b'}, incomingReqs.length) : null
              ])
            ]),

            socialMsg ? e('div', {className:'dl-social-msg', key:'msg'}, socialMsg) : null,

            socialTab === 'friends' ? e('div', {key:'friendspane'}, [
              e('div', {className:'dl-social-tabs', style:{marginBottom:'12px'}, key:'fv'}, [
                e('button', {className:'dl-social-tab' + (friendsView==='feed'?' active':''), onClick:()=>setFriendsView('feed'), key:'f'}, 'Prayer feed'),
                e('button', {className:'dl-social-tab' + (friendsView==='people'?' active':''), onClick:()=>setFriendsView('people'), key:'p'}, 'People')
              ]),

              friendsView === 'feed' ? e('div', {key:'feedpane'}, [
                e('div', {className:'dl-post-box', key:'pb'}, [
                  e('div', {className:'dl-post-kinds', key:'k'}, [
                    e('button', {className:'dl-kind-btn' + (postKind==='prayer'?' active':''), onClick:()=>setPostKind('prayer'), key:'p'}, [String.fromCodePoint(0x1F64F), ' Prayer']),
                    e('button', {className:'dl-kind-btn' + (postKind==='praise'?' active':''), onClick:()=>setPostKind('praise'), key:'r'}, [String.fromCodePoint(0x1F389), ' Praise'])
                  ]),
                  e('textarea', {className:'dl-testimony-input', style:{minHeight:'62px'}, value:postDraft,
                    placeholder: postKind==='prayer' ? 'What do you need prayer for?' : 'What is God doing?',
                    onChange: ev=>setPostDraft(ev.target.value), key:'t'}),
                  e('button', {className:'dl-social-btn', style:{width:'100%', marginTop:'10px', padding:'11px'}, onClick: createPost, key:'s'}, 'Share with friends')
                ]),
                feed.length === 0
                  ? e('div', {className:'dl-empty-note', key:'none'}, friends.length ? 'Nothing yet. Be the first to share something.' : 'Add a friend and their prayer requests show up here.')
                  : e('div', {className:'dl-feed-scroll', key:'list'}, feed.map(p => {
                      const who = p.user_id === user.id ? { display_name:'You', avatar:(state.profile&&state.profile.avatar) } : friends.find(f => f.id === p.user_id);
                      const prayCount = feedPrayers.filter(x => x.post_id === p.id).length;
                      const iPrayed = feedPrayers.some(x => x.post_id === p.id && x.user_id === user.id);
                      const mine = p.user_id === user.id;
                      return e('div', {className:'dl-post' + (p.answered?' answered':''), key:p.id}, [
                        e('div', {className:'dl-post-top', key:'t'}, [
                          e('span', {className:'dl-post-av', key:'a'}, (who && who.avatar) || String.fromCodePoint(0x1F4D6)),
                          e('span', {style:{flex:1, minWidth:0}, key:'n'}, [
                            e('div', {className:'dl-post-who', key:'w'}, (who && who.display_name) || 'A friend'),
                            e('div', {className:'dl-post-kind', key:'k'}, p.answered ? 'Answered prayer' : (p.kind === 'praise' ? 'Praise' : 'Prayer request'))
                          ])
                        ]),
                        e('div', {className:'dl-post-body', key:'b'}, p.body),
                        e('div', {className:'dl-post-foot', key:'f'}, [
                          e('button', {className:'dl-pray-btn' + (iPrayed?' active':''), onClick:()=>togglePostPrayer(p.id), key:'p'},
                            [String.fromCodePoint(0x1F64F), ' ', iPrayed ? 'Praying' : 'Pray']),
                          prayCount > 0 ? e('span', {className:'dl-pray-count', key:'c'}, prayCount + ' praying') : null,
                          (mine && !p.answered && p.kind === 'prayer') ? e('button', {className:'dl-prayer-mini', onClick:()=>markPostAnswered(p.id), key:'a'}, 'Mark answered') : null,
                          mine ? e('button', {className:'dl-prayer-mini', onClick:()=>deletePost(p.id), key:'d'}, 'Delete') : null
                        ])
                      ]);
                    }))
              ]) : null,

              friendsView === 'people' ? e('div', {className:'dl-search-wrap', key:'search'}, [
                e('span', {className:'dl-search-icon', key:'i'}, String.fromCodePoint(0x1F50D)),
                e('input', {className:'dl-people-search', value:peopleQuery, placeholder:'Search people by name\u2026', onChange: ev=>{ setPeopleQuery(ev.target.value); searchPeople(ev.target.value); }, key:'in'}),
                peopleQuery ? e('button', {className:'dl-search-clear', onClick:()=>{setPeopleQuery(''); setPeopleResults([]);}, key:'c'}, String.fromCodePoint(0x2715)) : null
              ]) : null,

              (friendsView === 'people' && peopleQuery.trim().length >= 2) ? e('div', {key:'results'},
                peopleResults.length === 0
                  ? e('div', {className:'dl-empty-note', key:'nr'}, 'No one found with that name.')
                  : peopleResults.map(p => personRow(p, 'res'))
              ) : null,

              (friendsView === 'people' && !peopleQuery.trim() && incomingReqs.length > 0) ? e('div', {key:'reqs'}, [
                e('div', {className:'dl-section-title', style:{marginTop:'4px'}, key:'l'}, [String.fromCodePoint(0x1F4E9), ' Friend requests']),
                ...incomingReqs.map(r => e('div', {className:'dl-person-row', key:r.id}, [
                  e('button', {className:'dl-person-main', onClick:()=>viewProfile(r.profile.id), key:'m'}, [
                    e('span', {className:'dl-person-avatar', key:'a'}, r.profile.avatar || String.fromCodePoint(0x1F4D6)),
                    e('span', {style:{flex:1, minWidth:0}, key:'n'}, [
                      e('div', {className:'dl-person-name', key:'nm'}, r.profile.display_name),
                      e('div', {className:'dl-person-sub', key:'s'}, 'wants to be friends')
                    ])
                  ]),
                  e('div', {className:'dl-req-actions', key:'act'}, [
                    e('button', {className:'dl-req-accept', onClick:()=>acceptRequest(r), key:'a'}, 'Accept'),
                    e('button', {className:'dl-req-decline', onClick:()=>declineRequest(r), key:'d'}, String.fromCodePoint(0x2715))
                  ])
                ]))
              ]) : null,

              (friendsView === 'people' && !peopleQuery.trim()) ? e('div', {key:'friendlist'}, [
                e('div', {className:'dl-section-title', key:'l'}, [String.fromCodePoint(0x1F465), ' Your friends']),
                friends.length === 0
                  ? e('div', {className:'dl-empty-note', key:'none'}, 'No friends yet \u2014 search a name above or add someone suggested below.')
                  : e('div', {key:'list'}, friends
                      .slice()
                      .sort((a,b) => (b.lessons_done||0) - (a.lessons_done||0))
                      .map((f, i) => e('div', {className:'dl-person-row', key:f.id}, [
                        e('span', {className:'dl-friend-rank', key:'r'}, '#' + (i+1)),
                        e('button', {className:'dl-person-main', onClick:()=>viewProfile(f.id), key:'m'}, [
                          e('span', {className:'dl-person-avatar', key:'a'}, f.avatar || String.fromCodePoint(0x1F4D6)),
                          e('span', {style:{flex:1, minWidth:0}, key:'n'}, [
                            e('div', {className:'dl-person-name', key:'nm'}, f.display_name),
                            e('div', {className:'dl-person-sub', key:'st'}, (f.lessons_done||0) + ' lessons \u00b7 ' + (f.daily_streak||0) + ' day streak')
                          ])
                        ]),
                        e('button', {className:'dl-friend-remove', onClick:()=>removeFriend(f.id), key:'x'}, String.fromCodePoint(0x2715))
                      ]))
                    )
              ]) : null,

              (friendsView === 'people' && !peopleQuery.trim()) ? e('div', {key:'grow'}, [
                e('div', {className:'dl-section-title', key:'gl'}, [String.fromCodePoint(0x1F517), ' Invite someone']),
                e('button', {className:'dl-invite-wide', onClick:()=>{
                  const link = 'https://stepstofaith.com/?invite=' + ((myProfile && myProfile.friend_code) || '');
                  try {
                    if (navigator.share) { navigator.share({ title:'Steps to Faith', text:'Walk through the Bible with me', url: link }); }
                    else { navigator.clipboard.writeText(link); setInviteCopied(true); setTimeout(()=>setInviteCopied(false), 2500); }
                  } catch (ex) { try { navigator.clipboard.writeText(link); setInviteCopied(true); setTimeout(()=>setInviteCopied(false),2500); } catch (e2) {} }
                }, key:'inv'}, [
                  e('span', {className:'dl-invite-icon', key:'i'}, String.fromCodePoint(0x1F4E4)),
                  e('span', {style:{flex:1, textAlign:'left'}, key:'t'}, [
                    e('div', {className:'dl-invite-title', key:'a'}, inviteCopied ? 'Link copied!' : 'Share your invite link'),
                    e('div', {className:'dl-invite-sub', key:'b'}, 'Anyone who joins through it gets added to you')
                  ])
                ])
              ]) : null,

              (friendsView === 'people' && !peopleQuery.trim() && suggested.length > 0) ? e('div', {key:'sugg'}, [
                e('div', {className:'dl-section-title', key:'l'}, [String.fromCodePoint(0x2728), ' People you might know']),
                ...suggested.map(p => personRow(p, 'sg'))
              ]) : null
            ]) : null,


            socialTab === 'groups' ? e('div', {key:'groupspane'}, [
              myGroups.length > 0 ? e('div', {className:'dl-gm-label', key:'mylbl'}, 'Your chats') : null,
              ...myGroups.map(g => e('button', {className:'dl-gm-row', onClick:()=>setOpenGroup(g.id), key:g.id}, [
                e('span', {className:'dl-gm-avatar', key:'i'}, roomIcon(g)),
                e('span', {className:'dl-gm-mid', key:'t'}, [
                  e('div', {className:'dl-gm-name', key:'n'}, [
                    g.name,
                    (g.room_number && g.room_number > 1) ? e('span', {className:'dl-room-num', key:'rn'}, ' #' + g.room_number) : null
                  ]),
                  e('div', {className:'dl-gm-preview', key:'d'}, g.description || 'Tap to open')
                ]),
                e('span', {className:'dl-gm-meta', key:'m'}, [
                  e('span', {className:'dl-gm-count', key:'c'}, (g.member_count || 1)),
                  e('span', {className:'dl-gm-arrow', key:'a'}, String.fromCodePoint(0x203A))
                ])
              ])),

              e('div', {className:'dl-gm-label', key:'privlbl'}, 'Rooms'),
              e('div', {className:'dl-gm-private', key:'privbox'}, [
                e('div', {className:'dl-social-row', style:{marginBottom:'12px'}, key:'join'}, [
                  e('input', {className:'dl-social-input', value:groupCodeInput, placeholder:'Have a code? Enter it', maxLength:6, onChange: ev=>setGroupCodeInput(ev.target.value.toUpperCase()), key:'i'}),
                  e('button', {className:'dl-social-btn', onClick:()=>joinGroupByCode(groupCodeInput), key:'b'}, 'Join')
                ]),
                showCreateRoom
                  ? e('div', {key:'form'}, [
                      e('input', {className:'dl-social-input', style:{width:'100%', marginBottom:'8px'}, value:newGroupName, placeholder:'Room name', onChange: ev=>setNewGroupName(ev.target.value), key:'gn'}),
                      e('input', {className:'dl-social-input', style:{width:'100%', marginBottom:'10px'}, value:newGroupDesc, placeholder:'What\u2019s it about? (optional)', onChange: ev=>setNewGroupDesc(ev.target.value), key:'gd'}),
                      e('div', {style:{display:'flex', gap:'8px'}, key:'btns'}, [
                        e('button', {className:'dl-gm-cancel', onClick:()=>setShowCreateRoom(false), key:'c'}, 'Cancel'),
                        e('button', {className:'dl-gm-create', onClick:()=>createGroup(newGroupName, newGroupDesc, false), key:'cr'}, 'Create room')
                      ])
                    ])
                  : e('button', {className:'dl-gm-newbtn', onClick:()=>setShowCreateRoom(true), key:'new'}, [String.fromCodePoint(0x2795), ' Create a room'])
              ])
            ]) : null
          ])
        ])
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
        (!needsDisplayName() && state.profile && (!state.profile.church || !state.profile.phone)) ? e('div', {className:'dl-setname-nudge', onClick: openEditProfile, key:'completeprofile'}, [
          e('span', {className:'dl-setname-icon', key:'i'}, String.fromCodePoint(0x1F91D)),
          e('div', {style:{flex:1}, key:'t'}, [
            e('div', {className:'dl-setname-title', key:'a'}, 'Connect with more people'),
            e('div', {className:'dl-setname-sub', key:'b'}, (!state.profile.church && !state.profile.phone)
              ? 'Add your phone so friends can find you \u2014 and your church (optional) to meet others who go there.'
              : (!state.profile.church ? 'Optional: add your church to meet others who go there.' : 'Add your phone so friends can find you.'))
          ]),
          e('span', {className:'dl-setname-cta', key:'c'}, 'Add')
        ]) : null,
        needsDisplayName() ? e('div', {className:'dl-setname-nudge', onClick: openEditProfile, key:'setname'}, [
          e('span', {className:'dl-setname-icon', key:'i'}, String.fromCodePoint(0x1F44B)),
          e('div', {style:{flex:1}, key:'t'}, [
            e('div', {className:'dl-setname-title', key:'a'}, 'Add your name'),
            e('div', {className:'dl-setname-sub', key:'b'}, 'Friends search by name \u2014 set yours so they can find you.')
          ]),
          e('span', {className:'dl-setname-cta', key:'c'}, 'Set')
        ]) : null,

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
          })),
          (() => {
            const w = weeklyStats(state);
            return e('div', {className:'dl-hero-week-sub', key:'sub'}, w.lessonsThisWeek === 0 ? 'No lessons yet this week' : (w.lessonsThisWeek + ' ' + (w.lessonsThisWeek===1?'lesson':'lessons') + ' this week \u00b7 ' + w.booksTouched + ' ' + (w.booksTouched===1?'book':'books')));
          })()
        ]),

        e('div', {className:'dl-profile-grid', key:'grid'}, [
          e('div', {className:'dl-stat', key:'gems'}, [e('div',{className:'dl-stat-badge b1', key:'ic'}, String.fromCodePoint(0x1F48E)), e('div',{className:'dl-stat-num', key:'n'}, state.gems), e('div',{className:'dl-stat-label', key:'l'}, 'Gems')]),
          e('div', {className:'dl-stat', key:'lessons'}, [e('div',{className:'dl-stat-badge b2', key:'ic'}, String.fromCodePoint(0x1F4D6)), e('div',{className:'dl-stat-num', key:'n'}, state.completed.length), e('div',{className:'dl-stat-label', key:'l'}, 'Lessons done')]),
          e('div', {className:'dl-stat', key:'daily'}, [e('div',{className:'dl-stat-badge b3', key:'ic'}, String.fromCodePoint(0x1F3C6)), e('div',{className:'dl-stat-num', key:'n'}, state.completedCheckpoints.length), e('div',{className:'dl-stat-label', key:'l'}, 'Checkpoints')]),
          e('div', {className:'dl-stat', key:'reflections'}, [e('div',{className:'dl-stat-badge b4', key:'ic'}, String.fromCodePoint(0x1F4DD)), e('div',{className:'dl-stat-num', key:'n'}, state.reflections.length), e('div',{className:'dl-stat-label', key:'l'}, 'Reflections')])
        ]),

        e('div', {className:'dl-section-title', key:'trophylabel'}, [String.fromCodePoint(0x1F3C6), ' Trophy Case']),
        e('div', {className:'dl-trophy-scroll', key:'trophygrid'}, TROPHIES.map(t => {
          const earned = t.check(state);
          return e('div', {className:'dl-trophy' + (earned ? ' earned' : ''), key:t.id, title:t.desc}, [
            e('div', {className:'dl-trophy-icon', key:'i'}, t.icon),
            e('div', {className:'dl-trophy-title', key:'t'}, t.title)
          ]);
        })),

        (state.favorites || []).length > 0 ? e('div', {className:'dl-section-title', key:'favlabel'}, [String.fromCodePoint(0x2B50), ' Favorites']) : null,
        (state.favorites || []).length > 0 ? e('div', {className:'dl-fav-scroll', key:'favlist'}, (state.favorites || []).map(id => {
          const lesson = LESSONS.find(l => l.id === id);
          if (!lesson) return null;
          return e('button', {className:'dl-fav-chip', onClick:()=>openIfAvailable(lesson), key:id}, [
            e('span', {className:'dl-fav-book', key:'b'}, lesson.book),
            e('span', {className:'dl-fav-title', key:'t'}, lesson.title)
          ]);
        })) : null,

        e('div', {className:'dl-section-title', key:'badgeslbl'}, [String.fromCodePoint(0x1F539), ' Badges']),
        state.completedCheckpoints.length === 0
          ? e('div', {className:'dl-empty-note', key:'empty'}, 'Finish your first book and a badge shows up right here.')
          : e('div', {className:'dl-badge-row', key:'badges'}, state.completedCheckpoints.map(b => e('div', {className:'dl-badge', key:b}, [String.fromCodePoint(0x1F3C6), ' ' + b]))),
        e('div', {className:'dl-empty-note', style:{margin:'10px 0'}, key:'shopnote'}, 'Spend pearls earned from tests to unlock more badges.'),
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


        e('div', {className:'dl-section-title', style:{marginTop:'22px'}, key:'rlabel'}, [String.fromCodePoint(0x1F4DD), ' Your reflections']),
        state.reflections.length === 0
          ? e('div', {className:'dl-empty-note', style:{marginBottom:'10px'}, key:'rnote'}, 'Anything you write after a lesson lands here. A little journal that builds itself.')
          : e('div', {key:'rlist'}, state.reflections.map(r => e('div', {className:'dl-reflection-card', key:r.id}, [
              e('div', {className:'dl-reflection-meta', key:'m'}, r.book + ' \u00b7 ' + r.title + ' \u00b7 ' + r.date),
              e('div', {className:'dl-reflection-prompt-text', key:'p'}, r.prompt),
              e('div', {className:'dl-reflection-body', key:'b'}, r.text)
            ]))),

        e('div', {className:'dl-section-title', style:{marginTop:'22px'}, key:'tlabel'}, [String.fromCodePoint(0x1F4D3), ' Your testimony']),
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

      newFriendMsg ? e('div', {className:'dl-toast', key:'toast'}, [
        e('span', {className:'dl-toast-icon', key:'i'}, String.fromCodePoint(0x1F389)),
        e('span', {key:'t'}, newFriendMsg)
      ]) : null,

      e('div', {className:'dl-tabs' + (showTour ? ' tourlift' : ''), key:'tabs'}, [
        e('button', {className:'dl-tab' + (tab==='path'?' active':'') + (showTour && tourSpot()==='path' ? ' tourspot' : ''), onClick:()=>setTab('path'), key:'p'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F463)), 'Path']),
        e('button', {className:'dl-tab' + ((tab==='library'||tab==='daily'||tab==='search'||tab==='callings')?' active':'') + (showTour && tourSpot()==='library' ? ' tourspot' : ''), onClick:()=>setTab('library'), key:'l'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F4DA)), 'Library']),
        e('button', {className:'dl-tab' + (tab==='community'?' active':'') + (showTour && tourSpot()==='community' ? ' tourspot' : ''), onClick:()=>{setTab('community'); setViewingProfile(null);}, key:'u'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F54A)), 'Upper Room']),
        e('button', {className:'dl-tab' + (tab==='profile'?' active':'') + (showTour && tourSpot()==='profile' ? ' tourspot' : ''), onClick:()=>setTab('profile'), key:'pr'}, [
          e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F464)), 'Profile',
          incomingReqs.length > 0 ? e('span', {className:'dl-tab-dot', key:'d'}, incomingReqs.length) : null
        ])
      ]),

      showTour ? (() => {
        const steps = [
          { icon:'\ud83d\udc4b', title:'Welcome to Steps to Faith', text:'A guided walk through the whole Bible, one short lesson at a time. Let me show you around \u2014 it takes about thirty seconds.', tab:'path', spot:null },
          { icon:'\ud83d\udc63', title:'This is your path', text:'Every lesson, Genesis to Revelation, in order. Tap one to read the passage and answer a few questions. Finish a book and you unlock a checkpoint and a badge.', tab:'path', spot:'path' },
          { icon:'\u2600\ufe0f', title:'Check in daily', text:'A new verse and devotional each morning, a streak to keep you going, Bible trivia, and a word game. All of it refreshes at midnight.', tab:'daily', spot:'daily' },
          { icon:'\ud83e\udded', title:'Explore', text:'Search by how you\u2019re feeling \u2014 anxious, grieving, thankful. There\u2019s also a full Bible timeline, character studies, and guided tracks for kids and adults.', tab:'search', spot:'search' },
          { icon:'\ud83d\udcdc', title:'Reading plans', text:'Follow a plan at whatever pace suits you, with a short reflection at the end of each day. Slower is completely fine.', tab:'callings', spot:'callings' },
          { icon:'\ud83d\udc65', title:'Community', text:'Add friends and see how they\u2019re getting on. Create a private room and share the code with people you choose \u2014 for prayer requests and encouragement.', tab:'community', spot:'community' },
          { icon:'\ud83d\udc64', title:'Your profile', text:'Streak, trophies, badges, favourites and reflections all live here. That\u2019s everything \u2014 start wherever you like.', tab:'profile', spot:'profile' }
        ];
        const st = steps[Math.min(tourStep, steps.length - 1)];
        const last = tourStep >= steps.length - 1;
        return e('div', {className:'dl-tour-layer', key:'tour'}, [
          e('div', {className:'dl-tour-dim', key:'dim'}),
          e('div', {className:'dl-tour-card', key:'card'}, [
            e('div', {className:'dl-tour-top', key:'top'}, [
              e('span', {className:'dl-tour-icon', key:'i'}, st.icon),
              e('span', {className:'dl-tour-step', key:'s'}, (tourStep + 1) + ' of ' + steps.length)
            ]),
            e('div', {className:'dl-tour-title', key:'t'}, st.title),
            e('div', {className:'dl-tour-text', key:'x'}, st.text),
            e('div', {className:'dl-tour-dots', key:'dots'}, steps.map((_, i) =>
              e('span', {className:'dl-tour-dot' + (i === tourStep ? ' on' : ''), key:i})
            )),
            e('div', {className:'dl-tour-actions', key:'a'}, [
              !last ? e('button', {className:'dl-tour-skip', onClick: finishTour, key:'s'}, 'Skip') : null,
              e('button', {className:'dl-tour-next', onClick:()=>{
                if (last) { finishTour(); return; }
                const next = tourStep + 1;
                setTourStep(next);
                if (steps[next] && steps[next].tab) setTab(steps[next].tab);
              }, key:'n'}, last ? 'Start reading' : 'Next')
            ])
          ])
        ]);
      })() : null,

      e('div', {className:'dl-dc-modal-bg' + (gatePrompt ? ' open' : ''), key:'gate'},
        gatePrompt ? e('div', {className:'dl-dc-done-wrap'}, [
          e('div', {className:'dl-dc-done-badge', style:{background:'var(--purple)', boxShadow:'0 6px 0 var(--purple-dark)'}, key:'b'}, String.fromCodePoint(0x1F512)),
          e('div', {className:'dl-dc-done-title', key:'t'}, 'Create a free account'),
          e('div', {className:'dl-tour-text', style:{textAlign:'center'}, key:'x'}, 'You\u2019ll need an account to ' + gatePrompt + '. It takes a few seconds, and everything you do is saved across your devices.'),
          e('div', {className:'dl-gate-perks', key:'p'}, [
            e('div', {className:'dl-gate-perk', key:'1'}, [String.fromCodePoint(0x1F4D6), ' Save your place in every book']),
            e('div', {className:'dl-gate-perk', key:'2'}, [String.fromCodePoint(0x1F525), ' Build a daily streak']),
            e('div', {className:'dl-gate-perk', key:'3'}, [String.fromCodePoint(0x1F465), ' Add friends and join rooms'])
          ]),
          e('button', {className:'dl-continue', style:{maxWidth:'280px', marginTop:'6px'}, onClick:()=>{
            setGatePrompt(''); setAuthMode('signup'); setAuthError(''); setAuthOpen(true);
          }, key:'s'}, 'Create free account'),
          e('button', {className:'dl-plan-leave', style:{marginTop:'12px'}, onClick:()=>{
            setGatePrompt(''); setAuthMode('login'); setAuthError(''); setAuthOpen(true);
          }, key:'l'}, 'I already have one'),
          e('button', {className:'dl-plan-leave', style:{marginTop:'4px', textDecoration:'none'}, onClick:()=>setGatePrompt(''), key:'c'}, 'Keep looking around')
        ]) : null
      ),

      e('div', {className:'dl-dc-modal-bg' + (shareVerseData ? ' open' : ''), key:'sharemodal'},
        shareVerseData ? e('div', {className:'dl-dc-done-wrap'}, [
          e('div', {className:'dl-dc-done-badge', style:{background:'var(--purple)', boxShadow:'0 6px 0 var(--purple-dark)'}, key:'b'}, String.fromCodePoint(0x1F4E4)),
          e('div', {className:'dl-dc-done-title', key:'t'}, 'Share this verse'),
          e('div', {className:'dl-card-ref', style:{marginTop:'10px'}, key:'r'}, shareVerseData.ref),
          e('div', {className:'dl-tour-text', style:{fontStyle:'italic'}, key:'v'}, shareVerseData.text),
          e('div', {className:'dl-manage-sub', key:'l'}, 'Send to'),
          ...myGroups.map(g => e('button', {className:'dl-assign-item', onClick:()=>{ shareVerse(g.id, shareVerseData.ref, shareVerseData.text); setShareVerseData(null); setSocialMsg('Verse shared to ' + g.name); setTimeout(()=>setSocialMsg(''), 2500); }, key:g.id}, [
            e('span', {key:'i'}, roomIcon(g)), ' ',
            e('span', {className:'dl-fav-title', key:'n'}, g.name)
          ])),
          e('button', {className:'dl-plan-leave', style:{marginTop:'12px'}, onClick:()=>setShareVerseData(null), key:'c'}, 'Cancel')
        ]) : null
      ),

      e('div', {className:'dl-dc-modal-bg' + (openStudyBook ? ' open' : ''), key:'studymodal'},
        openStudyBook && DEEP_STUDIES[openStudyBook] && (
          studyStep === 'prayer'
          ? [
              e('div', {className:'dl-lesson-top', key:'ltop'}, [
                e('button', {className:'dl-x', onClick:()=>{ stopSpeaking(); setOpenStudyBook(null); }, key:'x'}, String.fromCodePoint(0x2715))
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
            e('button', {className:'dl-x', onClick:()=>{ stopSpeaking(); setOpenStudyBook(null); }, key:'x'}, String.fromCodePoint(0x2715))
          ]),
          e('div', {className:'dl-dc-body', key:'body'}, [
            e('div', {className:'dl-study-header', key:'hdr'}, [
              e('div', {className:'dl-study-icon', key:'icon'}, String.fromCodePoint(0x1F4DC)),
              e('div', {className:'dl-study-focus', key:'f'}, openStudyBook + ' \u00b7 ' + DEEP_STUDIES[openStudyBook].focus),
              e('div', {className:'dl-study-title', key:'t'}, DEEP_STUDIES[openStudyBook].title)
            ]),
            e('button', {className:'dl-listen-inline' + (isSpeaking ? ' active' : ''), style:{marginBottom:'14px'}, onClick:()=>toggleSpeak(
              DEEP_STUDIES[openStudyBook].title + '. ' +
              DEEP_STUDIES[openStudyBook].sections.map(s => s.h + '. ' + s.b).join(' ') + ' ' +
              (DEEP_STUDIES[openStudyBook].takeaway || '')
            ), key:'studylisten'}, [String.fromCodePoint(isSpeaking ? 0x23F9 : 0x1F50A), ' ', isSpeaking ? 'Stop' : 'Listen to this study']),
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
          tShowIntro
          ? e('div', {className:'dl-dc-done-wrap'}, [
              e('button', {className:'dl-x', style:{alignSelf:'flex-start'}, onClick:()=>setActiveTest(null), key:'x'}, String.fromCodePoint(0x2715)),
              e('div', {className:'dl-dc-done-badge', style:{background:'var(--teal)', boxShadow:'0 6px 0 var(--teal-dark)'}, key:'badge'}, activeTest.icon),
              e('div', {className:'dl-dc-done-title', key:'t'}, activeTest.title),
              e('div', {className:'dl-dc-done-sub', key:'s'}, [
                e('span', {className:'dl-tier-badge tier-' + activeTest.tier.toLowerCase().replace(/[^a-z]/g,''), key:'tb'}, activeTest.tier),
                ' \u00b7 ' + activeTest.questions.length + ' questions'
              ]),
              activeTest.intro ? e('div', {className:'dl-passage-card', style:{marginTop:'18px', textAlign:'left'}, key:'introcard'}, [
                e('div', {className:'dl-passage-ref', key:'r'}, activeTest.intro.ref),
                e('div', {className:'dl-passage-text', key:'v'}, '\u201c' + activeTest.intro.verse + '\u201d')
              ]) : null,
              activeTest.intro ? e('div', {className:'dl-test-intro-note', key:'note'}, activeTest.intro.note) : null,
              e('button', {className:'dl-continue', style:{background:'var(--teal)', borderBottomColor:'var(--teal-dark)', maxWidth:'240px', marginTop:'20px'}, onClick: beginTestQuestions, key:'begin'}, 'Start')
            ])
          : tFinished
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
                e('div', {className:'dl-bar-track', key:'track'}, e('div', {className:'dl-bar-fill', style:{background:'var(--teal)', width: Math.round((tIndex / activeTest.questions.length) * 100) + '%'}}))
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
          e('div', {className:'dl-edit-field', key:'echurch'}, [
            e('label', {key:'l'}, 'Church (optional)'),
            e('input', {value:editChurch, onChange: ev=>{ setEditChurch(ev.target.value); loadChurchOptions(ev.target.value); }, placeholder:'Start typing your church\u2026', key:'i'}),
            churchOptions.length ? e('div', {className:'dl-church-opts', key:'opts'}, churchOptions.map(ch =>
              e('button', {className:'dl-church-opt', onClick:()=>{ setEditChurch(ch); setChurchOptions([]); }, key:ch}, ch)
            )) : null,
            e('div', {className:'dl-edit-hint', key:'h'}, 'Connects you with others from your church.')
          ]),
          e('div', {className:'dl-edit-field', key:'ephone'}, [
            e('label', {key:'l'}, 'Phone number'),
            e('input', {type:'tel', value:editPhone, onChange: ev=>setEditPhone(ev.target.value), placeholder:'(555) 123-4567', key:'i'}),
            e('div', {className:'dl-edit-hint', key:'h'}, 'Lets friends who have your number find you. Stored scrambled \u2014 never shown to anyone.')
          ]),
          e('div', {style:{display:'flex', gap:'10px', marginTop:'10px'}, key:'actions'}, [
            e('button', {className:'dl-continue', style:{background:'#fff', color:'var(--ink)', border:'2px solid var(--gray-light)', borderBottomWidth:'4px'}, onClick:()=>setEditingProfile(false), key:'cancel'}, 'Cancel'),
            e('button', {className:'dl-continue', onClick:()=>{ saveProfile(editName, editAvatar, editVerse, editChurch, editPhone); setEditingProfile(false); }, key:'save'}, 'Save')
          ])
        ])
      ) : null,

      e('div', {className:'dl-modal-bg' + (activeModal ? ' open' : ''), key:'modal'},
        activeModal && (
          step === 'deepdive'
          ? e('div', {className:'dl-deepdive-wrap'}, [
              e('div', {className:'dl-deepdive-icon', key:'icon'}, String.fromCodePoint(0x1F56F)),
              e('div', {className:'dl-deepdive-title', key:'t'}, 'What this means'),
              e('button', {className:'dl-listen-inline' + (isSpeaking ? ' active' : ''), onClick:()=>toggleSpeak(currentDeepDive()), key:'listen'}, [String.fromCodePoint(isSpeaking ? 0x23F9 : 0x1F50A), ' ', isSpeaking ? 'Stop' : 'Listen']),
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
                      e('span', {className:'dl-pace-icon', key:'i'}, String.fromCodePoint(0x1F331)),
                      e('span', {key:'t'}, 'One proverb a day. Read it slowly, then carry it with you \u2014 the next one will be here tomorrow.')
                    ]) : null,
                    e('div', {className:'dl-passage-card' + (isCheckpoint?' purple':''), key:'pc'}, isCheckpoint
                      ? [
                          e('div', {className:'dl-passage-ref-row', key:'rr'}, [
                            e('div', {className:'dl-passage-ref', key:'r'}, activeModal.title),
                            e('button', {className:'dl-passage-icon-btn' + (isSpeaking ? ' active' : ''), onClick:()=>toggleSpeak(activeModal.title + '. ' + activeModal.overview.join('. ')), title:'Listen', key:'audio'}, String.fromCodePoint(isSpeaking ? 0x23F9 : 0x1F50A))
                          ]),
                          e('ul', {className:'dl-overview-list', key:'ol'}, activeModal.overview.map((pt, i) => e('li', {key:i}, pt)))
                        ]
                      : [
                          e('div', {className:'dl-passage-ref-row', key:'rr'}, [
                            e('div', {className:'dl-passage-ref', key:'r'}, openLesson.book + ' \u00b7 ' + openLesson.title),
                            e('div', {className:'dl-passage-icon-row', key:'icons'}, [
                              e('button', {className:'dl-passage-icon-btn' + ((state.favorites||[]).includes(openLesson.id) ? ' active' : ''), onClick:()=>toggleFavorite(openLesson.id), title:'Favorite', key:'fav'}, String.fromCodePoint((state.favorites||[]).includes(openLesson.id) ? 0x2B50 : 0x2606)),
                              e('button', {className:'dl-passage-icon-btn' + (isSpeaking ? ' active' : ''), onClick:()=>toggleReadAloud(openLesson), title:'Listen', key:'audio'}, String.fromCodePoint(isSpeaking ? 0x23F9 : 0x1F50A))
                            ])
                          ]),
                          e('div', {className:'dl-passage-text', key:'t'}, openLesson.passage),
                          ...(openLesson.keyVerses || []).map((kv, i) => e('div', {className:'dl-keyverse', key:'kv'+i}, [
                            e('div', {className:'dl-keyverse-mark', key:'m'}, String.fromCodePoint(0x275D)),
                            (user && myGroups.length) ? e('button', {className:'dl-verse-share', title:'Share to a room', onClick:()=>{ setShareVerseData({ ref: kv.ref, text: kv.text }); }, key:'sh'}, String.fromCodePoint(0x1F4E4)) : null,
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
                      e('div', {className:'dl-explain-text', key:'t'}, activeModal.questions[qIndex].explain),
                      e('button', {className:'dl-listen-inline small' + (isSpeaking ? ' active' : ''), onClick:()=>toggleSpeak(activeModal.questions[qIndex].explain), key:'listen'}, [String.fromCodePoint(isSpeaking ? 0x23F9 : 0x1F50A), ' ', isSpeaking ? 'Stop' : 'Listen'])
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

  // Catches any crash and shows the reason instead of a blank white screen.
  class ErrorBoundary extends React.Component {
    constructor(props){ super(props); this.state = { err: null }; }
    static getDerivedStateFromError(err){ return { err: err }; }
    componentDidCatch(err, info){ try { console.error('Steps to Faith crash:', err, info); } catch (e) {} }
    render(){
      if (this.state.err) {
        return e('div', {style:{padding:'30px 20px', fontFamily:'Nunito, sans-serif', color:'#3c3c3c'}}, [
          e('div', {style:{fontSize:'40px', marginBottom:'10px'}, key:'i'}, String.fromCodePoint(0x26A0)),
          e('div', {style:{fontSize:'18px', fontWeight:800, marginBottom:'8px'}, key:'t'}, 'Something went wrong'),
          e('div', {style:{fontSize:'13px', lineHeight:1.5, color:'#777', marginBottom:'14px'}, key:'s'}, 'Please screenshot this and send it over:'),
          e('pre', {style:{fontSize:'11px', background:'#f5f5f7', padding:'12px', borderRadius:'10px', whiteSpace:'pre-wrap', wordBreak:'break-word'}, key:'e'},
            String(this.state.err && this.state.err.message ? this.state.err.message : this.state.err) +
            '\n\n' + String(this.state.err && this.state.err.stack ? this.state.err.stack.split('\n').slice(0,6).join('\n') : '')
          ),
          e('button', {style:{marginTop:'14px', background:'#58cc02', color:'#fff', border:'none', borderRadius:'12px', padding:'12px 20px', fontWeight:800, fontSize:'14px'}, onClick:()=>location.reload(), key:'b'}, 'Reload')
        ]);
      }
      return this.props.children;
    }
  }

  ReactDOM.createRoot(document.getElementById('dl-root')).render(e(ErrorBoundary, null, e(App)));
})();
