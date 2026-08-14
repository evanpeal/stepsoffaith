(function(){
  const e = React.createElement;
  const KEY = "bible-path-progress-v3";

  const SUPABASE_URL = "https://wvovrtkszewohbtfqsbz.supabase.co";
  const SUPABASE_KEY = "sb_publishable_E8MMK1clBTPW313Cg0sthw_G9fDvhTn";
  const sb = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY) : null;

  const DEFAULT_STATE = { completed: [], completedCheckpoints: [], streak: 0, gems: 0, pearls: 0, ownedBadges: [], dailyStreak: 0, lastCheckIn: null, claimedQuests: [], profile: { name: 'Your name', avatar: '\ud83d\udcd6' }, testimony: '', reflections: [], testBest: {}, deepStudies: [], dailyWord: null, streakFreezes: 0, streakFreezeUsedDate: null, highlights: [], favorites: [], completedLog: [], wordleWins: 0, seenWhatsNewCommunity: false, seenFriendIds: [], theme: 'light', activePlan: null, planStarted: null, planDays: null, planReflections: [] };

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
    { word:'HEROD', clue:'The king who tried to kill the infant Jesus' }
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
    const [isSpeaking, setIsSpeaking] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [openTopic, setOpenTopic] = React.useState(null);
    const [planReflectDraft, setPlanReflectDraft] = React.useState('');
    const [myProfile, setMyProfile] = React.useState(null);
    const [friends, setFriends] = React.useState([]);
    const [myGroups, setMyGroups] = React.useState([]);
    const [groupMembers, setGroupMembers] = React.useState([]);
    const [groupPrayers, setGroupPrayers] = React.useState([]);
    const [prayedRows, setPrayedRows] = React.useState([]);
    const [openGroup, setOpenGroup] = React.useState(null);
    const [socialTab, setSocialTab] = React.useState('groups');
    const [socialLoading, setSocialLoading] = React.useState(false);
    const [socialMsg, setSocialMsg] = React.useState('');
    const [friendCodeInput, setFriendCodeInput] = React.useState('');
    const [groupCodeInput, setGroupCodeInput] = React.useState('');
    const [newGroupName, setNewGroupName] = React.useState('');
    const [newGroupDesc, setNewGroupDesc] = React.useState('');
    const [prayerDraft, setPrayerDraft] = React.useState('');
    const [prayerAnon, setPrayerAnon] = React.useState(false);
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
    const [chatKind, setChatKind] = React.useState('message');
    const [newRoomCode, setNewRoomCode] = React.useState('');
    const [nameGateInput, setNameGateInput] = React.useState('');
    const [nameGateErr, setNameGateErr] = React.useState('');
    const [showCreateRoom, setShowCreateRoom] = React.useState(false);
    const [contactMatches, setContactMatches] = React.useState([]);
    const [contactMsg, setContactMsg] = React.useState('');
    const [contactBusy, setContactBusy] = React.useState(false);
    const [contactPaste, setContactPaste] = React.useState('');
    const [showContactBox, setShowContactBox] = React.useState(false);
    const [inviteCopied, setInviteCopied] = React.useState(false);
    const [newFriendMsg, setNewFriendMsg] = React.useState('');
    const [browsingType, setBrowsingType] = React.useState(null);
    const [roomSearch, setRoomSearch] = React.useState('');
    const [typeRooms, setTypeRooms] = React.useState([]);
    const [showWhatsNew, setShowWhatsNew] = React.useState(false);
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

    React.useEffect(() => {
      try {
        const root = document.getElementById('dl-root');
        if (root) root.setAttribute('data-theme', (state && state.theme === 'dark') ? 'dark' : 'light');
      } catch (ex) {}
    }, [state && state.theme]);

    function toggleTheme(){
      persist({ ...state, theme: (state.theme === 'dark' ? 'light' : 'dark') });
    }

    React.useEffect(() => {
      const iv = setInterval(() => setNowTick(Date.now()), 1000);
      return () => clearInterval(iv);
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
      if (!state.seenWhatsNewCommunity) setShowWhatsNew(true);
    }, [user && user.id, state === null]);

    React.useEffect(() => {
      if (sb && user && friends !== null) loadSuggested();
    }, [friends.length, outgoingReqs.length, incomingReqs.length, myGroups.length]);

    function dismissWhatsNew(){
      setShowWhatsNew(false);
      if (state) persist({ ...state, seenWhatsNewCommunity: true });
    }

    React.useEffect(() => {
      if (openGroup) loadGroupDetail(openGroup);
    }, [openGroup]);

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

    async function matchContacts(){
      if (!sb || !user) return;
      setContactMsg('');
      setContactBusy(true);
      try {
        let numbers = [];
        if (navigator.contacts && navigator.contacts.select) {
          const picked = await navigator.contacts.select(['tel'], { multiple: true });
          picked.forEach(cn => (cn.tel || []).forEach(t => numbers.push(t)));
        } else {
          contactPaste.split(/[\s,;]+/).forEach(v => { if (normalizePhone(v)) numbers.push(v); });
        }
        if (!numbers.length) {
          setContactMsg('No phone numbers found to check.'); setContactBusy(false); return;
        }
        const phoneHashes = (await Promise.all(numbers.slice(0,500).map(hashPhone))).filter(Boolean);
        if (!phoneHashes.length) { setContactMsg('Could not read those numbers.'); setContactBusy(false); return; }

        const { data } = await sb.from('profiles').select('*').in('phone_hash', phoneHashes).limit(50);
        const friendIds = new Set(friends.map(f => f.id));
        const list = (data || []).filter(p => p.id !== user.id && !friendIds.has(p.id));
        setContactMatches(list);
        setContactMsg(list.length
          ? list.length + (list.length === 1 ? ' of your contacts is here!' : ' of your contacts are here!')
          : 'None of your contacts have joined yet.');
      } catch (ex) {
        setContactMsg('Contact check cancelled.');
      }
      setContactBusy(false);
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
            setSocialMsg('That room just filled up \u2014 joining another one.');
            setTab('community');
            joinRoomType(g.room_type || g.join_code);
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

    function personRowEnd(){ return null; }

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

    const DEFAULT_ROOMS = [
      { code:'PRAY01', name:'Prayer Requests', desc:'Share what you need prayer for, and pray for others.', icon:'\ud83d\ude4f' },
      { code:'ASK001', name:'Faith Questions', desc:'Ask anything about faith, the Bible, or doubt.', icon:'\u2753' },
      { code:'DAILY1', name:'Daily Encouragement', desc:'Share a verse or a word that carried you today.', icon:'\u2600\ufe0f' }
    ];

    const ROOM_CAP = 75;

    async function loadPublicGroups(){
      if (!sb || !user) return;
      try {
        const { data: gs, error } = await sb.from('groups').select('*').eq('is_public', true).order('room_number', { ascending: true });
        if (error) throw error;
        let rooms = gs || [];
        // Make sure the first copy of each room type exists
        const haveTypes = new Set(rooms.map(r => r.room_type || r.join_code));
        const missing = DEFAULT_ROOMS.filter(r => !haveTypes.has(r.code));
        if (missing.length) {
          const toAdd = missing.map(r => ({
            name: r.name, description: r.desc, join_code: r.code,
            room_type: r.code, room_number: 1, capacity: ROOM_CAP,
            is_public: true, owner_id: user.id
          }));
          const { data: created } = await sb.from('groups').insert(toAdd).select();
          if (created && created.length) rooms = rooms.concat(created);
        }
        const keep = new Set(DEFAULT_ROOMS.map(r => r.code));
        setPublicGroups(rooms.filter(r => keep.has(r.room_type || r.join_code)));
      } catch (ex) {
        setPublicGroups([]);
        setSocialMsg('Could not load rooms: ' + (ex && ex.message ? ex.message : 'unknown'));
      }
    }

    async function loadTypeRooms(type){
      if (!sb || !user) return;
      try {
        const { data } = await sb.from('groups').select('*')
          .eq('room_type', type).eq('is_public', true).order('room_number', { ascending: true });
        setTypeRooms(data || []);
      } catch (ex) { setTypeRooms([]); }
    }

    async function openRoomBrowser(type){
      setBrowsingType(type);
      setRoomSearch('');
      await loadTypeRooms(type);
    }

    // One card per room type, with everyone across all its copies counted
    function publicRoomTypes(){
      const byType = {};
      publicGroups.forEach(g => {
        const t = g.room_type || g.join_code;
        if (!byType[t]) byType[t] = { type: t, name: g.name, description: g.description, rooms: [], total: 0 };
        byType[t].rooms.push(g);
        byType[t].total += (g.member_count || 0);
      });
      // Keep them in the order we defined
      return DEFAULT_ROOMS.map(d => byType[d.code]).filter(Boolean);
    }

    // Which copy am I already in, if any?
    function myRoomForType(type){
      return myGroups.find(g => (g.room_type || g.join_code) === type);
    }

    const ROOM_SEED_AT = 30;   // once a room reaches this, quietly open the next one

    // Make sure there's always a room with plenty of space available
    async function ensureFreshRoom(type){
      if (!sb || !user) return null;
      try {
        const { data: all } = await sb.from('groups').select('*')
          .eq('room_type', type).eq('is_public', true).order('room_number', { ascending: true });
        const rooms = all || [];
        const roomy = rooms.find(r => (r.member_count || 0) < ROOM_SEED_AT);
        if (roomy) return null;   // there's still a quiet room, no need for another

        const def = DEFAULT_ROOMS.find(d => d.code === type);
        const nextNum = rooms.length ? Math.max(...rooms.map(r => r.room_number || 1)) + 1 : 1;
        const { data: created } = await sb.from('groups').insert({
          name: (def ? def.name : (rooms[0] ? rooms[0].name : 'Room')),
          description: def ? def.desc : (rooms[0] ? rooms[0].description : ''),
          join_code: type + '-' + nextNum,
          room_type: type, room_number: nextNum, capacity: ROOM_CAP,
          is_public: true, owner_id: user.id
        }).select().maybeSingle();
        return created || null;
      } catch (ex) { return null; }
    }

    // Join a room type: slot into the fullest room that still has space
    async function joinRoomType(type){
      if (!sb || !user) return;
      const mine = myRoomForType(type);
      if (mine) { setOpenGroup(mine.id); return; }
      try {
        const { data: all } = await sb.from('groups').select('*')
          .eq('room_type', type).eq('is_public', true).order('room_number', { ascending: true });
        const rooms = all || [];
        // Prefer rooms that already have people, so conversations stay lively
        const withSpace = rooms.filter(r => (r.member_count || 0) < (r.capacity || ROOM_CAP))
                               .sort((a, b) => (b.member_count || 0) - (a.member_count || 0));
        let target = withSpace[0];

        if (!target) {
          const fresh = await ensureFreshRoom(type);
          target = fresh;
        }
        if (!target) { setSocialMsg('Could not find a room \u2014 try again.'); return; }

        await joinGroupDirect(target.id);
        await ensureFreshRoom(type);   // keep a spare ready for the next person
        loadPublicGroups();
        if (browsingType === type) loadTypeRooms(type);
      } catch (ex) {
        setSocialMsg('Could not join: ' + (ex && ex.message ? ex.message : 'unknown'));
      }
    }

    function roomIcon(g){
      const d = DEFAULT_ROOMS.find(r => r.code === g.join_code);
      if (d) return d.icon;
      return g.is_public ? '\ud83c\udf0d' : '\ud83d\udd12';
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

    async function loadGroupDetail(groupId){
      if (!sb || !user) return;
      setSocialLoading(true);
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
        setChatMessages(msgs || []);
      } catch (ex) { setGroupMembers([]); setChatMessages([]); }
      setSocialLoading(false);
    }

    async function sendMessage(groupId, body, kind){
      if (!sb || !user || !body.trim()) return;
      const text = body.trim();
      setChatDraft('');
      try {
        await sb.from('group_messages').insert({
          group_id: groupId, user_id: user.id, body: text, kind: kind || 'message'
        });
        loadGroupDetail(groupId);
      } catch (ex) { setSocialMsg('Could not send \u2014 make sure you\u2019ve joined this room.'); }
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

    async function postPrayer(groupId, body, anon){
      if (!sb || !user || !body.trim()) return;
      try {
        await sb.from('prayer_requests').insert({
          group_id: groupId, user_id: user.id, body: body.trim(), is_anonymous: !!anon
        });
        setPrayerDraft('');
        loadGroupDetail(groupId);
      } catch (ex) { setSocialMsg('Could not post \u2014 try again.'); }
    }

    async function togglePrayed(requestId, groupId){
      if (!sb || !user) return;
      const already = prayedRows.some(p => p.request_id === requestId && p.user_id === user.id);
      try {
        if (already) {
          await sb.from('prayer_prayed').delete().eq('request_id', requestId).eq('user_id', user.id);
        } else {
          await sb.from('prayer_prayed').insert({ request_id: requestId, user_id: user.id });
        }
        loadGroupDetail(groupId);
      } catch (ex) {}
    }

    async function markPrayerAnswered(requestId, groupId){
      if (!sb || !user) return;
      try {
        await sb.from('prayer_requests').update({ answered: true }).eq('id', requestId).eq('user_id', user.id);
        loadGroupDetail(groupId);
      } catch (ex) {}
    }

    async function deletePrayer(requestId, groupId){
      if (!sb || !user) return;
      try {
        await sb.from('prayer_requests').delete().eq('id', requestId).eq('user_id', user.id);
        loadGroupDetail(groupId);
      } catch (ex) {}
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
      persist({ ...state, testimony: testimonyDraft });
      setEditingTestimony(false);
    }

    function startTest(test){
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

    function todaysWordleState(){
      const today = todayStr();
      const stored = state && state.dailyWord;
      if (stored && stored.date === today) return stored;
      return { date: today, guesses: [], done: false, won: false };
    }

    function pressWordleKey(key){
      const w = todaysWordleState();
      if (w.done) return;
      if (key === 'ENTER') { submitWordleGuess(); return; }
      if (key === 'BACK') { setWordleInput(s => s.slice(0, -1)); return; }
      setWordleInput(s => s.length < 5 ? s + key : s);
    }

    React.useEffect(() => {
      if (tab !== 'daily' || !state) return;
      function handler(ev){
        const w = todaysWordleState();
        if (w.done) return;
        if (ev.key === 'Enter') { ev.preventDefault(); submitWordleGuess(); }
        else if (ev.key === 'Backspace') { setWordleInput(s => s.slice(0, -1)); }
        else if (/^[a-zA-Z]$/.test(ev.key)) { setWordleInput(s => s.length < 5 ? s + ev.key.toUpperCase() : s); }
      }
      window.addEventListener('keydown', handler);
      return () => window.removeEventListener('keydown', handler);
    }, [tab, state && state.dailyWord, wordleInput]);

    function submitWordleGuess(){
      const guess = wordleInput.trim().toUpperCase();
      if (guess.length !== 5) { setWordleShake(true); setTimeout(()=>setWordleShake(false), 400); return; }
      const w = todaysWordleState();
      if (w.done) return;
      const target = todaysWord().word;
      const nextGuesses = [...w.guesses, guess];
      const won = guess === target;
      const done = won || nextGuesses.length >= 5;
      const nextWordle = { date: w.date, guesses: nextGuesses, done, won };
      const gemsBonus = won ? 15 : 0;
      persist({ ...state, dailyWord: nextWordle, gems: state.gems + gemsBonus, wordleWins: (state.wordleWins || 0) + (won ? 1 : 0) });
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
      if (nodeStatus(lesson) === "locked") return;
      setOpenLesson(lesson); setStep("passage"); setQIndex(0); setPicked(null); setCorrectCount(0);
    }
    function openCheckpointIfAvailable(book){
      if (checkpointStatus(book) === "locked") return;
      setOpenCheckpoint(book); setStep("overview"); setQIndex(0); setPicked(null); setCorrectCount(0);
    }

    function completeDeepStudy(book){
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
        ]),

        e('div', {className:'dl-section-title', style:{marginTop:'26px'}, key:'wlabel'}, [String.fromCodePoint(0x1F4AC), ' Word of the Day']),
        (() => {
          const w = todaysWordleState();
          const target = todaysWord();
          const rowsLeft = 5 - w.guesses.length;
          const kbStates = keyboardStates(w.guesses, target.word);
          return e('div', {className:'dl-wordle-card' + (wordleShake ? ' shake' : ''), key:'wordle'}, [
            e('div', {className:'dl-wordle-clue', key:'clue'}, [String.fromCodePoint(0x1F4A1), ' ', target.clue]),
            e('div', {className:'dl-wordle-grid', key:'grid'},
              w.guesses.map((g, gi) => e('div', {className:'dl-wordle-row', key:'g'+gi},
                evaluateGuess(g, target.word).map((res, li) => e('div', {className:'dl-wordle-tile revealed ' + res, style:{transitionDelay:(li*90)+'ms', animationDelay:(li*90)+'ms'}, key:li}, g[li]))
              )).concat(
                w.done ? [] : [ e('div', {className:'dl-wordle-row', key:'active'},
                  Array.from({length:5}).map((_, li) => e('div', {className:'dl-wordle-tile' + (wordleInput[li] ? ' filled pop' : ''), key:li}, wordleInput[li] || ''))
                ) ]
              ).concat(
                Array.from({length: Math.max(0, rowsLeft - (w.done?0:1))}).map((_, ri) => e('div', {className:'dl-wordle-row', key:'empty'+ri},
                  Array.from({length:5}).map((__, li) => e('div', {className:'dl-wordle-tile', key:li}, ''))
                ))
              )
            ),
            w.done
              ? e('div', {className:'dl-wordle-result', key:'result'}, [
                  e('div', {className:'dl-wordle-result-text', key:'t'}, w.won ? (String.fromCodePoint(0x1F389) + ' You got it \u2014 ' + target.word) : ('The word was ' + target.word)),
                  w.won ? e('div', {className:'dl-wordle-result-sub', key:'s'}, '+15 \ud83d\udc8e gems earned') : null,
                  e('div', {className:'dl-wordle-result-sub', key:'clue2'}, target.clue),
                  e('div', {className:'dl-wordle-refresh', key:'r'}, 'New word in ' + formatCountdown(msUntilMidnight()))
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

        e('div', {className:'dl-section-title', style:{marginTop:'26px'}, key:'label'}, [String.fromCodePoint(0x1F3C6), ' Today\u2019s Tests']),
        e('div', {className:'dl-empty-note', key:'note'}, 'Spend gems to play \u2014 earn pearls for every question you get right, and spend pearls on badges in your Profile.'),
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
        e('div', {className:'dl-page-title', key:'ptitle'}, 'Reading Plans & Callings'),
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
          e('div', {className:'dl-empty-note', style:{marginBottom:'14px'}, key:'note'}, 'Pick a plan to follow alongside your main path \u2014 it just guides which lessons to read each day.'),
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

      tab === 'search' ? e('div', {className:'dl-daily-wrap', key:'search'}, [
        e('div', {className:'dl-section-title', style:{marginTop:'4px'}, key:'lbl'}, [String.fromCodePoint(0x1F50D), ' Find what you need']),
        e('div', {className:'dl-empty-note', style:{marginBottom:'14px'}, key:'note'}, 'Search how you\u2019re feeling, or what you\u2019re walking through \u2014 or tap a topic below.'),
        e('input', {className:'dl-search-input', value:searchQuery, placeholder:'Try \u201canxious\u201d, \u201cgrief\u201d, \u201chope\u201d\u2026', onChange: ev => setSearchQuery(ev.target.value), key:'input'}),

        openTopic ? (() => {
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

        (!openTopic && searchQuery.trim()) ? (() => {
          const topicHits = searchTopics(searchQuery);
          const verseHits = searchVerses(searchQuery);
          const lessonHits = searchLessons(searchQuery);
          const nothing = !topicHits.length && !verseHits.length && !lessonHits.length;
          return e('div', {key:'results'}, [
            nothing ? e('div', {className:'dl-empty-note', key:'none'}, 'Nothing found for that \u2014 try a feeling like \u201cafraid\u201d, or a book name.') : null,
            topicHits.length ? e('div', {className:'dl-section-title', key:'th'}, 'Topics') : null,
            ...topicHits.map(t => e('button', {className:'dl-topic-chip', onClick:()=>{ setOpenTopic(t.id); }, key:'t'+t.id}, [
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

        (!openTopic && !searchQuery.trim()) ? e('div', {className:'dl-topic-grid', key:'grid'}, TOPICS.map(t =>
          e('button', {className:'dl-topic-card', onClick:()=>setOpenTopic(t.id), key:t.id}, [
            e('div', {className:'dl-topic-card-icon', key:'i'}, t.icon),
            e('div', {className:'dl-topic-card-label', key:'l'}, t.label)
          ])
        )) : null
      ]) : null,

      tab === 'community' ? e('div', {className:'dl-daily-wrap', key:'community'}, [
        e('div', {className:'dl-page-title', key:'ptitle'}, 'Community'),

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
                e('div', {className:'dl-chat-head-icon', key:'ic'}, g.is_public ? String.fromCodePoint(0x1F30D) : String.fromCodePoint(0x1F512)),
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
                (isMember && (g.member_count || 0) < (g.capacity || 75)) ? e('button', {className:'dl-room-invite', title:'Invite friends', onClick:()=>{
                  const link = 'https://stepstofaith.com/?room=' + g.join_code;
                  try {
                    if (navigator.share) { navigator.share({ title: g.name, text: 'Join me in ' + g.name + ' on Steps to Faith', url: link }); }
                    else { navigator.clipboard.writeText(link); setSocialMsg('Room link copied!'); setTimeout(()=>setSocialMsg(''), 2500); }
                  } catch (ex) { try { navigator.clipboard.writeText(link); setSocialMsg('Room link copied!'); setTimeout(()=>setSocialMsg(''),2500); } catch (e2) {} }
                }, key:'inv'}, String.fromCodePoint(0x1F465)) : null
              ]),
              socialMsg ? e('div', {className:'dl-social-msg', key:'rmsg'}, socialMsg) : null,

              e('div', {className:'dl-chat-scroll', key:'scroll'},
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
                            (!mine && !grouped) ? e('button', {className:'dl-msg-author', onClick:()=>viewProfile(m.user_id), key:'a'}, (author && author.display_name) || 'Someone') : null,
                            e('div', {className:'dl-msg-bubble' + (mine ? ' mine' : '') + (isPrayer ? ' prayer' : '') + (grouped ? ' grouped' : ''), key:'b'}, [
                              (isPrayer && !grouped) ? e('div', {className:'dl-msg-prayer-tag', key:'pt'}, [String.fromCodePoint(0x1F64F), ' Prayer request']) : null,
                              e('div', {key:'txt'}, m.body)
                            ]),
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

              isMember
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
                : e('div', {className:'dl-chat-joinbar', key:'joinbar'}, [
                    e('span', {key:'t'}, 'Join to join the conversation'),
                    e('button', {className:'dl-social-btn', onClick:()=>joinGroupDirect(g.id), key:'j'}, 'Join room')
                  ]),

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
              e('div', {className:'dl-search-wrap', key:'search'}, [
                e('span', {className:'dl-search-icon', key:'i'}, String.fromCodePoint(0x1F50D)),
                e('input', {className:'dl-people-search', value:peopleQuery, placeholder:'Search people by name\u2026', onChange: ev=>{ setPeopleQuery(ev.target.value); searchPeople(ev.target.value); }, key:'in'}),
                peopleQuery ? e('button', {className:'dl-search-clear', onClick:()=>{setPeopleQuery(''); setPeopleResults([]);}, key:'c'}, String.fromCodePoint(0x2715)) : null
              ]),

              peopleQuery.trim().length >= 2 ? e('div', {key:'results'},
                peopleResults.length === 0
                  ? e('div', {className:'dl-empty-note', key:'nr'}, 'No one found with that name.')
                  : peopleResults.map(p => personRow(p, 'res'))
              ) : null,

              (!peopleQuery.trim() && incomingReqs.length > 0) ? e('div', {key:'reqs'}, [
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

              (!peopleQuery.trim()) ? e('div', {key:'friendlist'}, [
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

              (!peopleQuery.trim()) ? e('div', {key:'grow'}, [
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

              (!peopleQuery.trim() && suggested.length > 0) ? e('div', {key:'sugg'}, [
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

              browsingType ? (() => {
                const def = DEFAULT_ROOMS.find(d => d.code === browsingType);
                const q = roomSearch.trim().toLowerCase();
                const list = typeRooms.filter(r => {
                  if (!q) return true;
                  return String(r.room_number).includes(q) || (r.join_code || '').toLowerCase().includes(q);
                });
                return e('div', {key:'browser'}, [
                  e('button', {className:'dl-topic-back', onClick:()=>setBrowsingType(null), key:'back'}, String.fromCodePoint(0x2190) + ' All rooms'),
                  e('div', {className:'dl-browse-head', key:'bh'}, [
                    e('div', {className:'dl-browse-icon', key:'i'}, def ? def.icon : String.fromCodePoint(0x1F30D)),
                    e('div', {style:{flex:1}, key:'t'}, [
                      e('div', {className:'dl-browse-title', key:'n'}, def ? def.name : 'Rooms'),
                      e('div', {className:'dl-browse-sub', key:'s'}, typeRooms.length + (typeRooms.length === 1 ? ' room open' : ' rooms open'))
                    ])
                  ]),
                  e('button', {className:'dl-quickjoin', onClick:()=>joinRoomType(browsingType), key:'qj'}, [
                    e('span', {key:'i'}, String.fromCodePoint(0x26A1)), ' Quick join \u2014 put me anywhere'
                  ]),
                  e('div', {className:'dl-search-wrap', style:{marginBottom:'12px'}, key:'search'}, [
                    e('span', {className:'dl-search-icon', key:'i'}, String.fromCodePoint(0x1F50D)),
                    e('input', {className:'dl-people-search', value:roomSearch, placeholder:'Search by room number\u2026', onChange: ev=>setRoomSearch(ev.target.value), key:'in'})
                  ]),
                  list.length === 0
                    ? e('div', {className:'dl-empty-note', key:'none'}, 'No rooms match that.')
                    : e('div', {key:'rlist'}, list.map(r => {
                        const count = r.member_count || 0;
                        const cap = r.capacity || 75;
                        const full = count >= cap;
                        const inIt = myGroups.some(m => m.id === r.id);
                        const pct = Math.min(100, Math.round((count / cap) * 100));
                        return e('div', {className:'dl-roomcard' + (full ? ' full' : ''), key:r.id}, [
                          e('div', {className:'dl-roomcard-top', key:'t'}, [
                            e('div', {className:'dl-roomcard-id', key:'id'}, '#' + (r.room_number || 1)),
                            e('div', {style:{flex:1}, key:'m'}, [
                              e('div', {className:'dl-roomcard-count', key:'c'}, count + ' / ' + cap + ' people'),
                              e('div', {className:'dl-roomcard-bar', key:'b'}, e('div', {className:'dl-roomcard-fill' + (pct > 85 ? ' hot' : ''), style:{width: pct + '%'}}))
                            ]),
                            inIt
                              ? e('button', {className:'dl-roomcard-btn in', onClick:()=>setOpenGroup(r.id), key:'o'}, 'Open')
                              : full
                              ? e('span', {className:'dl-roomcard-full', key:'f'}, 'Full')
                              : e('button', {className:'dl-roomcard-btn', onClick:()=>{ joinGroupDirect(r.id).then(()=>{ ensureFreshRoom(browsingType); loadTypeRooms(browsingType); }); }, key:'j'}, 'Join')
                          ])
                        ]);
                      })),
                  e('div', {className:'dl-browse-note', key:'note'}, 'New rooms open automatically as these fill up.')
                ]);
              })() : [

              e('div', {className:'dl-gm-label', key:'publbl'}, 'Open to everyone'),
              publicRoomTypes().length === 0
                ? e('div', {className:'dl-empty-note', key:'nopub'}, 'Loading rooms\u2026')
                : e('div', {key:'publist'}, publicRoomTypes().map(rt => {
                    const mine = myRoomForType(rt.type);
                    const def = DEFAULT_ROOMS.find(d => d.code === rt.type);
                    return e('div', {className:'dl-bigroom', key:rt.type}, [
                      e('button', {className:'dl-bigroom-tap', onClick:()=>openRoomBrowser(rt.type), key:'o'}, [
                        e('div', {className:'dl-bigroom-icon', key:'i'}, def ? def.icon : String.fromCodePoint(0x1F30D)),
                        e('div', {className:'dl-bigroom-name', key:'n'}, rt.name),
                        e('div', {className:'dl-bigroom-desc', key:'d'}, rt.description),
                        e('div', {className:'dl-bigroom-members', key:'m'}, [
                          e('span', {className:'dl-bigroom-dot', key:'dt'}),
                          rt.total + (rt.total === 1 ? ' person here' : ' people here'),
                          rt.rooms.length > 1 ? e('span', {className:'dl-bigroom-rooms', key:'r'}, ' \u00b7 ' + rt.rooms.length + ' rooms') : null
                        ])
                      ]),
                      e('div', {className:'dl-bigroom-actions', key:'a'}, [
                        e('button', {className:'dl-bigroom-join' + (mine ? ' inroom' : ''), onClick:()=>joinRoomType(rt.type), key:'j'},
                          mine ? 'Open chat' : 'Quick join'),
                        e('button', {className:'dl-bigroom-browse', onClick:()=>openRoomBrowser(rt.type), key:'b'}, 'Browse rooms')
                      ])
                    ]);
                  })),

              ],

              !browsingType ? e('div', {className:'dl-gm-label', key:'privlbl'}, 'Private rooms') : null,
              !browsingType ? e('div', {className:'dl-gm-private', key:'privbox'}, [
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
                  : e('button', {className:'dl-gm-newbtn', onClick:()=>setShowCreateRoom(true), key:'new'}, [String.fromCodePoint(0x2795), ' Create a private room'])
              ]) : null
            ]) : null
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

        e('div', {className:'dl-theme-row', key:'theme'}, [
          e('span', {className:'dl-theme-icon', key:'i'}, String.fromCodePoint(state.theme === 'dark' ? 0x1F319 : 0x2600)),
          e('span', {style:{flex:1}, key:'t'}, state.theme === 'dark' ? 'Dark mode' : 'Light mode'),
          e('button', {className:'dl-theme-switch' + (state.theme === 'dark' ? ' on' : ''), onClick: toggleTheme, key:'s'},
            e('span', {className:'dl-theme-knob'})
          )
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
          ? e('div', {className:'dl-empty-note', key:'empty'}, 'Finish a book to earn your first badge.')
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
          ? e('div', {className:'dl-empty-note', style:{marginBottom:'10px'}, key:'rnote'}, 'Reflections you save after lessons will show up here.')
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

      e('div', {className:'dl-tabs', key:'tabs'}, [
        e('button', {className:'dl-tab' + (tab==='path'?' active':''), onClick:()=>setTab('path'), key:'p'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F4D6)), 'Path']),
        e('button', {className:'dl-tab' + (tab==='daily'?' active':''), onClick:()=>setTab('daily'), key:'d'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x2600)), 'Daily']),
        e('button', {className:'dl-tab' + (tab==='search'?' active':''), onClick:()=>setTab('search'), key:'s'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F50D)), 'Find']),
        e('button', {className:'dl-tab' + (tab==='callings'?' active':''), onClick:()=>setTab('callings'), key:'c'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F4DC)), 'Plans']),
        e('button', {className:'dl-tab' + (tab==='community'?' active':''), onClick:()=>{setTab('community'); setViewingProfile(null);}, key:'cm'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F465)), 'Community', incomingReqs.length > 0 ? e('span', {className:'dl-tab-dot', key:'d'}, incomingReqs.length) : null]),
        e('button', {className:'dl-tab' + (tab==='profile'?' active':''), onClick:()=>setTab('profile'), key:'pr'}, [e('span',{className:'dl-tab-icon', key:'i'}, String.fromCodePoint(0x1F464)), 'Profile'])
      ]),

      e('div', {className:'dl-dc-modal-bg' + (showWhatsNew ? ' open' : ''), key:'whatsnew'},
        showWhatsNew ? e('div', {className:'dl-dc-done-wrap'}, [
          e('div', {className:'dl-dc-done-badge', style:{background:'var(--purple)', boxShadow:'0 6px 0 var(--purple-dark)'}, key:'b'}, String.fromCodePoint(0x1F465)),
          e('div', {className:'dl-dc-done-title', key:'t'}, 'Community is here'),
          e('div', {className:'dl-dc-done-sub', key:'s'}, 'Something new in Steps to Faith'),
          e('div', {className:'dl-whatsnew-list', key:'list'}, [
            e('div', {className:'dl-whatsnew-item', key:'1'}, [
              e('span', {className:'dl-whatsnew-icon', key:'i'}, String.fromCodePoint(0x1F64F)),
              e('span', {key:'t'}, 'Public rooms for prayer requests, faith questions, testimonies and more \u2014 open to everyone.')
            ]),
            e('div', {className:'dl-whatsnew-item', key:'2'}, [
              e('span', {className:'dl-whatsnew-icon', key:'i'}, String.fromCodePoint(0x1F465)),
              e('span', {key:'t'}, 'Add friends by searching their name, and see how they\u2019re walking through Scripture.')
            ]),
            e('div', {className:'dl-whatsnew-item', key:'3'}, [
              e('span', {className:'dl-whatsnew-icon', key:'i'}, String.fromCodePoint(0x1F512)),
              e('span', {key:'t'}, 'Create private rooms with a code for your own small group.')
            ]),
            e('div', {className:'dl-whatsnew-item', key:'4'}, [
              e('span', {className:'dl-whatsnew-icon', key:'i'}, String.fromCodePoint(0x1F6E1)),
              e('span', {key:'t'}, 'Your testimony and reflections always stay private \u2014 never shared.')
            ])
          ]),
          e('button', {className:'dl-continue', style:{maxWidth:'260px', marginTop:'6px'}, onClick:()=>{ dismissWhatsNew(); setTab('community'); }, key:'go'}, 'Take a look'),
          e('button', {className:'dl-plan-leave', style:{marginTop:'10px'}, onClick: dismissWhatsNew, key:'later'}, 'Maybe later')
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
