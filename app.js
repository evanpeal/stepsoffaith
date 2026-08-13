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
    { id:138, book:"Proverbs", title:"Chapter 1 \u2014 Wisdom shouts in the street", side:"c",
      passage: "Proverbs opens by stating its own purpose: these sayings exist for gaining wisdom, discipline, and understanding \u2014 \u201cfor giving prudence to those who are simple, knowledge and discretion to the young.\u201d Then the cornerstone: \u201cThe fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction.\u201d The chapter warns a son against a gang promising easy money (\u201cthrow in your lot with us\u201d), and ends with Wisdom personified as a woman shouting in the public square \u2014 not hidden in a temple, but calling out in the street where everyone passes.",
      keyVerses: [
        { ref: "Proverbs 1:7", text: "The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction." }
      ],
      questions: [
        { q:"What does the book say about its own purpose?", opts:["To entertain", "To give wisdom, discipline, prudence \u2014 skill at living", "To record history"], correct:1, explain:"Proverbs is rare in Scripture for announcing exactly why it exists \u2014 a training manual for living well." },
        { q:"Who is a \u2018fool\u2019 in Proverbs?", opts:["Someone unintelligent", "Someone who despises wisdom and correction \u2014 unteachable, not unintelligent", "Someone uneducated"], correct:1, explain:"The fool's defining trait is refusing instruction, which is why brilliant people can qualify." },
        { q:"Where does Wisdom call out?", opts:["Only in the temple", "In the street, the public square, the city gate \u2014 out in the open", "In secret to a chosen few"], correct:1, explain:"Wisdom isn't hidden knowledge for insiders; she's shouting where the crowds are, and most walk past." }
      ],
      deepDive: "Chapter 1 sets every term the rest of the book will use. \u2018The fear of the LORD\u2019 is the foundation \u2014 not terror, but reckoning with God as the realest thing in the room. The gang scene is startlingly modern: the appeal isn't evil for its own sake but belonging and easy gain \u2014 \u2018throw in your lot with us, we'll all share the loot.\u2019 And Wisdom's street-corner shouting reframes the whole book: wisdom isn't scarce or secret, it's public and ignored. Carry one question today: what has been shouting at me that I keep walking past?" },
    { id:139, book:"Proverbs", title:"Chapter 2 \u2014 Search for it like silver", side:"l",
      passage: "Chapter 2 is one long sentence in Hebrew \u2014 a chain of \u2018if... then.\u2019 IF you accept my words, turn your ear to wisdom, call out for insight, and \u201clook for it as for silver and search for it as for hidden treasure\u201d \u2014 THEN you will understand the fear of the LORD and find the knowledge of God. Because \u201cthe LORD gives wisdom; from his mouth come knowledge and understanding.\u201d The chapter promises wisdom will guard you: from the ways of wicked men, and from the smooth-talking adulteress.",
      keyVerses: [
        { ref: "Proverbs 2:4\u20135", text: "If you look for it as for silver and search for it as for hidden treasure, then you will understand the fear of the LORD." }
      ],
      questions: [
        { q:"What effort does the chapter require?", opts:["Passive waiting", "Active searching \u2014 like digging for silver or hidden treasure", "Paying a teacher"], correct:1, explain:"Wisdom is freely given AND diligently sought \u2014 the chapter holds both without apology." },
        { q:"Where does wisdom ultimately come from?", opts:["Experience alone", "The LORD \u2014 \u2018from his mouth come knowledge and understanding\u2019", "Ancient philosophers"], correct:1, explain:"The searching is real, but the source is God \u2014 which is why the search is prayer as much as study." },
        { q:"What does wisdom do once found?", opts:["Makes you wealthy", "Guards and protects \u2014 saving you from destructive paths and people", "Makes you popular"], correct:1, explain:"Wisdom's first gift isn't advantage but protection \u2014 it keeps you off roads that end badly." }
      ],
      deepDive: "Chapter 2's grammar is its message: a long chain of conditions before a single promise. Nobody stumbles onto silver \u2014 you dig, in one place, for a long time, believing something's there. That's the posture toward Scripture and wisdom this chapter asks for, and it quietly rebukes the way most of us read: skimming, waiting to be struck. Notice too the balance: you search AND God gives. Wisdom isn't earned by effort, but it isn't handed to the incurious either. Today's question: what would 'searching like for treasure' actually change about how you read, listen, and ask?" },
    { id:140, book:"Proverbs", title:"Chapter 3 \u2014 Trust with all your heart", side:"r",
      passage: "The most quoted chapter: \u201cTrust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.\u201d It continues: honor the LORD with your wealth and firstfruits; do not despise the LORD's discipline, \u201cbecause the LORD disciplines those he loves, as a father the son he delights in.\u201d And practical neighbor-love: don't withhold good when it's in your power to act; don't say \u2018come back tomorrow\u2019 when you have it with you now.",
      keyVerses: [
        { ref: "Proverbs 3:5\u20136", text: "Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight." }
      ],
      questions: [
        { q:"What does \u2018lean not on your own understanding\u2019 forbid?", opts:["Thinking at all", "Resting your full weight on your own limited view", "Asking for advice"], correct:1, explain:"The image is a wall you put your weight against \u2014 use your mind, don't make it load-bearing." },
        { q:"How does the chapter frame God's discipline?", opts:["As rejection", "As fatherly love \u2014 correction of a child He delights in", "As random misfortune"], correct:1, explain:"Discipline here is evidence of relationship, not its absence \u2014 a theme Hebrews later quotes directly." },
        { q:"What does 3:27\u201328 say about delayed generosity?", opts:["Take your time", "Don't say \u2018come back tomorrow\u2019 when you can help today", "Only help family"], correct:1, explain:"Wisdom includes timing \u2014 postponed good is often good undone." }
      ],
      deepDive: "Chapter 3 is Proverbs' emotional center, and it earns its fame by covering the whole map: trust (5\u20136), money (9\u201310), suffering (11\u201312), and neighbors (27\u201328). The most overlooked part is the discipline passage \u2014 planted right after the famous trust verses because the two belong together: trusting God with all your heart includes trusting the parts of His work that hurt. And \u2018straight paths\u2019 deserves precision: straight means directed and arriving, not smooth or easy. Today's practice is small and concrete \u2014 verse 27: is there good in your power to do that you've been postponing?" },
    { id:141, book:"Proverbs", title:"Chapter 4 \u2014 Guard your heart", side:"c",
      passage: "A father recalls what his own father taught him \u2014 three generations of instruction in one chapter: \u201cGet wisdom, get understanding... though it cost all you have, get understanding.\u201d Two paths are contrasted: the path of the righteous \u201cis like the morning sun, shining ever brighter till the full light of day,\u201d while the way of the wicked is deep darkness where they stumble over what they can't see. It climaxes in the book's most quoted command about the inner life: \u201cAbove all else, guard your heart, for everything you do flows from it.\u201d",
      keyVerses: [
        { ref: "Proverbs 4:23", text: "Above all else, guard your heart, for everything you do flows from it." }
      ],
      questions: [
        { q:"What is the \u2018heart\u2019 in Hebrew thought?", opts:["Only emotions", "The control center \u2014 thoughts, desires, loyalties, imagination", "The physical organ"], correct:1, explain:"Closer to what we'd call the inner life: where decisions are made before they're visible." },
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
        { q:"How does the chapter describe temptation's opening?", opts:["Obviously ugly", "Sweet \u2014 lips that drip honey, speech smoother than oil", "Openly threatening"], correct:1, explain:"Proverbs is honest that sin's front end is attractive; the bitterness is on the back end." },
        { q:"What's the chapter's positive counsel?", opts:["Avoid all relationships", "Delight in your own marriage \u2014 \u2018rejoice in the wife of your youth\u2019", "Stay busy"], correct:1, explain:"Wisdom doesn't just fence off the wrong thing; it points you toward enjoying the right one." },
        { q:"What image describes being trapped by sin?", opts:["A locked door", "Held fast by the cords of one's own sin", "A heavy stone"], correct:1, explain:"The rope is self-woven \u2014 consequences aren't imposed from outside so much as accumulated from within." }
      ],
      deepDive: "Chapter 5 is uncomfortably direct, and deliberately so \u2014 Proverbs treats sexual faithfulness as a wisdom issue, not just a moral one, because of what it costs: honor, years, wealth, and the ability to look at your own life clearly. The strategy is worth noting: the chapter spends as much energy on delighting in what you have as on avoiding what you don't. Starvation makes bad decisions; gratitude protects. And verse 21 is the quiet anchor for the whole subject \u2014 'your ways are in full view of the LORD' \u2014 there is no private life, only an unwitnessed one." },
    { id:143, book:"Proverbs", title:"Chapter 6 \u2014 Go to the ant", side:"r",
      passage: "Four warnings: don't co-sign carelessly (free yourself \u2018like a gazelle from the hunter's hand\u2019); don't be lazy \u2014 \u201cGo to the ant, you sluggard; consider its ways and be wise,\u201d storing food in summer with no commander over it. Then a famous list: six things the LORD hates, seven that are detestable \u2014 haughty eyes, a lying tongue, hands that shed innocent blood, a heart that devises wicked schemes, feet quick to rush into evil, a false witness, \u201cand a person who stirs up conflict in the community.\u201d",
      keyVerses: [
        { ref: "Proverbs 6:6", text: "Go to the ant, you sluggard; consider its ways and be wise!" }
      ],
      questions: [
        { q:"What makes the ant a model?", opts:["Its strength", "Self-motivated diligence \u2014 no commander, yet it stores in summer", "Its size"], correct:1, explain:"The ant needs no supervision \u2014 the rebuke is aimed at people who only work when watched." },
        { q:"How does the chapter describe poverty's arrival for the sluggard?", opts:["Instantly", "Like a thief \u2014 after a little sleep, a little folding of the hands", "Never"], correct:1, explain:"The famous line: ruin doesn't announce itself; it accumulates in small, reasonable-sounding delays." },
        { q:"What is the seventh detestable thing?", opts:["Wealth", "A person who stirs up conflict in the community", "Laughter"], correct:1, explain:"The list climaxes not with violence but with division-sowing \u2014 God takes community-wrecking seriously." }
      ],
      deepDive: "Chapter 6 is Proverbs at its most practical: financial caution, work ethic, and a list of what God actively hates. The ant passage is genuinely convicting because it isolates the variable \u2014 no commander, overseer, or ruler \u2014 and asks whether you produce when nobody's watching. The seven-things list rewards a slow read: it moves from attitude (haughty eyes) through speech and action, and lands on the person who divides a community, placing gossip and faction-stirring in the same category as violence. Today: which of the seven would someone who knows you well say you're closest to?" },
    { id:144, book:"Proverbs", title:"Chapter 7 \u2014 The young man with no sense", side:"c",
      passage: "The father tells a story he claims to have watched from his window: at twilight, a young man \u201cwho had no sense\u201d walks down the street near a certain corner \u2014 deliberately, step by step, toward the house of a woman waiting for him. She meets him with kisses, perfume, and reassurance that her husband is away on a long journey. \u201cAll at once he followed her, like an ox going to the slaughter... little knowing it will cost him his life.\u201d The counsel: \u201cDo not let your heart turn to her ways or stray into her paths.\u201d",
      keyVerses: [
        { ref: "Proverbs 7:25", text: "Do not let your heart turn to her ways or stray into her paths." }
      ],
      questions: [
        { q:"What was the young man's first mistake?", opts:["Talking to her", "Walking down that street, near that corner, at twilight \u2014 the route itself", "Being out at night"], correct:1, explain:"The chapter tracks the fall backward to a decision made long before the temptation \u2014 proximity chosen on purpose." },
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
        { q:"How old is wisdom, according to this chapter?", opts:["Invented by humans", "Present before creation \u2014 at God's side as the world was made", "Recent"], correct:1, explain:"Wisdom isn't a human invention or a cultural preference \u2014 it's woven into reality's design." },
        { q:"What is wisdom's emotional tone in verse 30?", opts:["Stern duty", "Delight and rejoicing \u2014 a craftsman's joy", "Sorrow"], correct:1, explain:"The world was made in gladness, and wisdom is pictured playing before God \u2014 a striking picture of creation." },
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
        { q:"What's Folly's actual pitch?", opts:["Hard work pays off", "Secrecy and stolen sweetness \u2014 \u2018stolen water is sweet\u2019", "Long-term security"], correct:1, explain:"Folly's appeal is the thrill of the forbidden and the hidden \u2014 never mentioning the bill." },
        { q:"How does the chapter contrast responses to correction?", opts:["Everyone hates it", "Mock a mocker and he hates you; rebuke a wise person and he loves you", "It doesn't"], correct:1, explain:"Verse 8 is a diagnostic you can run on yourself: how do you receive correction?" }
      ],
      deepDive: "Chapter 9 closes the first section of Proverbs by staging the whole book as a choice between two dinner invitations. The symmetry is deliberate \u2014 same street, same audience, same offer of satisfaction \u2014 and the difference is what's on the table and where the guests end up. Verse 8 is the most personally useful verse here: your reaction to correction sorts you faster than any test. If honest feedback makes you defensive, that's data. Today's question is simple: when someone corrected me last, did I resent them or thank them?" },
    { id:147, book:"Proverbs", title:"Chapter 10 \u2014 The proverbs of Solomon begin", side:"c",
      passage: "Here the collected one-line proverbs begin, most built on contrast. \u201cLazy hands make for poverty, but diligent hands bring wealth.\u201d \u201cHatred stirs up conflict, but love covers over all wrongs.\u201d \u201cSin is not ended by multiplying words, but the prudent hold their tongues.\u201d \u201cThe mouth of the righteous is a fountain of life.\u201d And a favorite about integrity: \u201cWhoever walks in integrity walks securely, but whoever takes crooked paths will be found out.\u201d",
      keyVerses: [
        { ref: "Proverbs 10:9", text: "Whoever walks in integrity walks securely, but whoever takes crooked paths will be found out." }
      ],
      questions: [
        { q:"What does \u2018love covers over all wrongs\u2019 mean here?", opts:["Ignoring all sin", "Love doesn't broadcast or nurse every offense \u2014 it absorbs rather than amplifies", "Lying to protect people"], correct:1, explain:"Contrasted with hatred that stirs up conflict; love's instinct is to cover, not publicize." },
        { q:"What does the chapter say about many words?", opts:["More words, more wisdom", "\u2018Sin is not ended by multiplying words\u2019 \u2014 restraint is prudent", "Silence is always best"], correct:1, explain:"Proverbs consistently treats verbal restraint as a mark of wisdom, not weakness." },
        { q:"What's the security in walking with integrity?", opts:["Guaranteed wealth", "Nothing to be discovered \u2014 crooked paths eventually get found out", "Public praise"], correct:1, explain:"Integrity is restful because it requires no memory management." }
      ],
      deepDive: "From chapter 10 on, Proverbs shifts style: no more long speeches, just hundreds of two-line contrasts you can carry one at a time. Chapter 10 sets the themes the rest will circle: work, words, integrity, and the long horizon. Verse 9 is the whole book in miniature \u2014 integrity 'walks securely' because there's no exposure risk, nothing to track, no story to keep straight. It's a quiet argument that honesty is not only right but restful. Pick one line from this chapter and let it work on you today; the format is designed for exactly that." },
    { id:148, book:"Proverbs", title:"Chapter 11 \u2014 Generosity that grows", side:"l",
      passage: "The chapter opens with commerce: \u201cThe LORD detests dishonest scales, but accurate weights find favor with him\u201d \u2014 God cares about your business practices. Then pride and humility, integrity and duplicity. And its most surprising economics: \u201cOne person gives freely, yet gains even more; another withholds unduly, but comes to poverty. A generous person will prosper; whoever refreshes others will be refreshed.\u201d It closes with a memorable image: \u201cLike a gold ring in a pig's snout is a beautiful woman who shows no discretion.\u201d",
      keyVerses: [
        { ref: "Proverbs 11:25", text: "A generous person will prosper; whoever refreshes others will be refreshed." }
      ],
      questions: [
        { q:"What does the LORD \u2018detest\u2019 in verse 1?", opts:["Poverty", "Dishonest scales \u2014 rigged business practices", "Trade itself"], correct:1, explain:"The Bible's God cares about the accuracy of a merchant's weights \u2014 worship and commerce aren't separate." },
        { q:"What's the paradox of generosity here?", opts:["Giving always costs you", "Giving freely can increase you; hoarding can impoverish you", "Only give to family"], correct:1, explain:"Proverbs describes a pattern that runs against arithmetic intuition \u2014 open hands tend to end up fuller." },
        { q:"What does the gold-ring image critique?", opts:["Jewelry", "Beauty without discretion \u2014 an ornament in the wrong setting", "Wealth"], correct:1, explain:"Proverbs' most vivid picture that outward polish without character is absurd, not impressive." }
      ],
      deepDive: "Chapter 11 pairs two things we usually keep apart: honest scales and open hands. The first says God is watching your invoices; the second says generosity has a strange return profile. Read carefully, verse 25 isn't a prosperity formula \u2014 Proverbs elsewhere is clear the righteous can be poor \u2014 but a description of how life generally runs: refreshers get refreshed, in relationships, reputation, and often more. Today's small experiment: give something away that you'd normally hold \u2014 time, credit, money, an hour of help \u2014 and watch what it does to you, regardless of what returns." },
    { id:149, book:"Proverbs", title:"Chapter 12 \u2014 Words that pierce or heal", side:"r",
      passage: "\u201cWhoever loves discipline loves knowledge, but whoever hates correction is stupid\u201d \u2014 the chapter's blunt opening. Then a run on speech: \u201cThe words of the reckless pierce like swords, but the tongue of the wise brings healing.\u201d \u201cTruthful lips endure forever, but a lying tongue lasts only a moment.\u201d And on inner life and others: \u201cAnxiety weighs down the heart, but a kind word cheers it up.\u201d Even animals get a mention: \u201cThe righteous care for the needs of their animals.\u201d",
      keyVerses: [
        { ref: "Proverbs 12:18", text: "The words of the reckless pierce like swords, but the tongue of the wise brings healing." }
      ],
      questions: [
        { q:"How blunt is the chapter about hating correction?", opts:["Gently discouraging", "It calls it stupid \u2014 the Hebrew is that direct", "It doesn't address it"], correct:1, explain:"Proverbs uses the word for a brutish animal \u2014 refusing correction reduces a person's capacity to think." },
        { q:"What two things can words do, per verse 18?", opts:["Inform or bore", "Pierce like swords or bring healing", "Entertain or annoy"], correct:1, explain:"There's no neutral category \u2014 words are landing as damage or repair, whether you intended it or not." },
        { q:"What does verse 25 prescribe for an anxious heart?", opts:["Solitude", "A kind word \u2014 someone else's encouragement", "Hard work"], correct:1, explain:"Proverbs treats a kind word as medicine \u2014 which means yours is medicine someone needs today." }
      ],
      deepDive: "Chapter 12 is largely about the mouth, and its images are surgical: reckless words 'pierce like swords' \u2014 you can probably still quote a sentence someone stabbed you with years ago, which is the proverb's own proof. The asymmetry is what should get us: words cost almost nothing to speak and can cost enormously to receive. Verse 25 turns that around into an assignment \u2014 someone in your orbit is carrying anxiety today, and a specific, true, unprompted kind word is the prescription Proverbs actually names. It'll take you eleven seconds." },
    { id:150, book:"Proverbs", title:"Chapter 13 \u2014 The company you keep", side:"c",
      passage: "\u201cWalk with the wise and become wise, for a companion of fools suffers harm.\u201d The chapter weighs long-term thinking against short: \u201cDishonest money dwindles away, but whoever gathers money little by little makes it grow.\u201d \u201cHope deferred makes the heart sick, but a longing fulfilled is a tree of life.\u201d And on receiving instruction: \u201cWhoever disregards discipline comes to poverty and shame, but whoever heeds correction is honored.\u201d",
      keyVerses: [
        { ref: "Proverbs 13:20", text: "Walk with the wise and become wise, for a companion of fools suffers harm." }
      ],
      questions: [
        { q:"How does verse 20 describe influence?", opts:["Instant", "Gradual absorption \u2014 you become like who you walk with", "Impossible"], correct:1, explain:"The verb suggests ongoing companionship, not a single conversation \u2014 proximity shapes you slowly." },
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
        { q:"What makes the wrong way dangerous, per verse 12?", opts:["It's obviously evil", "It seems right \u2014 sincerity isn't the same as accuracy", "It's hidden"], correct:1, explain:"The danger isn't deception by others but self-assurance \u2014 feeling right is not evidence of being right." },
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
        { q:"When does verse 1 apply?", opts:["When starting a conversation", "In the ANSWER \u2014 when someone comes at you hot", "Only in writing"], correct:1, explain:"It's a second-move proverb: the anger is already in the room; your reply steers what happens next." },
        { q:"Is a gentle answer weakness?", opts:["Yes", "No \u2014 it's controlled strength; firing back is the reflex, staying soft is the discipline", "It means silence"], correct:1, explain:"Content can be firm while tone stays soft \u2014 gentleness is about temperature, not conviction." },
        { q:"What does verse 17 prefer?", opts:["A feast at any cost", "Vegetables with love over a fattened calf with hatred", "Solitude"], correct:1, explain:"Proverbs keeps ranking relational health above material comfort." }
      ],
      deepDive: "Chapter 15 lives in the half-second between what lands on you and what you send back. The physics are observable: harshness escalates because anger answered with anger validates itself; gentleness starves the fire of oxygen. You've watched both happen this month. The practical experiment is small \u2014 in your next tense exchange, deliberately lower your volume and slow your reply by two seconds \u2014 and the effect on the room is usually immediate. Proverbs elsewhere crowns this skill: better a patient person than a warrior." },
    { id:153, book:"Proverbs", title:"Chapter 16 \u2014 Plans, pride, and steps", side:"c",
      passage: "A chapter about who's actually running things: \u201cCommit to the LORD whatever you do, and he will establish your plans.\u201d \u201cIn their hearts humans plan their course, but the LORD establishes their steps.\u201d Between them sits the book's most quoted warning: \u201cPride goes before destruction, a haughty spirit before a fall.\u201d And a line about self-mastery: \u201cBetter a patient person than a warrior, one with self-control than one who takes a city.\u201d",
      keyVerses: [
        { ref: "Proverbs 16:9", text: "In their hearts humans plan their course, but the LORD establishes their steps." }
      ],
      questions: [
        { q:"Does verse 9 discourage planning?", opts:["Yes", "No \u2014 humans plan, and God directs; both are affirmed", "It's silent on planning"], correct:1, explain:"Proverbs praises diligent planners \u2014 the correction is aimed at the grip, not the planning." },
        { q:"Why is pride dangerous rather than just unpleasant?", opts:["It annoys people", "It blinds \u2014 to warnings and correction \u2014 right before the drop", "It costs money"], correct:1, explain:"Pride edits out exactly the information that would have prevented the fall." },
        { q:"What does verse 32 rank above conquering a city?", opts:["Wealth", "Patience and self-control", "Fame"], correct:1, explain:"Proverbs' consistent verdict: ruling yourself is the harder and higher achievement." }
      ],
      deepDive: "Chapter 16 threads a needle between two errors: refusing to plan (which Proverbs calls laziness, not faith) and planning as though God must ratify your draft. Both are real \u2014 you genuinely chart the course, He genuinely establishes the steps \u2014 and the gap between your map and your actual footprints is where most of life's meaning turns out to live. You've watched it all through this app: Joseph planned none of Egypt, Ruth none of Bethlehem, Esther planned anonymity. Plan well today; hold the pen loosely; treat detours with curiosity instead of only frustration." },
    { id:154, book:"Proverbs", title:"Chapter 17 \u2014 A friend loves at all times", side:"l",
      passage: "\u201cBetter a dry crust with peace and quiet than a house full of feasting, with strife.\u201d The chapter gives friendship its best line: \u201cA friend loves at all times, and a brother is born for a time of adversity.\u201d It knows the cost of grudge-keeping: \u201cWhoever would foster love covers over an offense, but whoever repeats the matter separates close friends.\u201d And it names something modern medicine agrees with: \u201cA cheerful heart is good medicine, but a crushed spirit dries up the bones.\u201d",
      keyVerses: [
        { ref: "Proverbs 17:17", text: "A friend loves at all times, and a brother is born for a time of adversity." }
      ],
      questions: [
        { q:"What separates close friends, per verse 9?", opts:["Distance", "Repeating the matter \u2014 rehearsing an offense instead of covering it", "Disagreement"], correct:1, explain:"Friendships rarely die from the original offense; they die from its retelling." },
        { q:"What does \u2018at all times\u2019 emphasize?", opts:["Constant contact", "Consistency \u2014 love that holds in adversity, not just convenience", "Instant responses"], correct:1, explain:"The second line clarifies it: adversity is the time such love proves itself." },
        { q:"How does the chapter describe a cheerful heart?", opts:["Naive", "Good medicine \u2014 while a crushed spirit dries up the bones", "Irrelevant"], correct:1, explain:"Proverbs connects inner life and physical health long before anyone studied it clinically." }
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
        { q:"What does verse 17 say about kindness to the poor?", opts:["It's optional charity", "It's lending to the LORD \u2014 who repays", "It's unwise"], correct:1, explain:"One of Scripture's boldest images: God personally assumes the debt of what you give away." },
        { q:"What's the irony in verse 3?", opts:["Fools blame themselves", "Their own folly ruins them \u2014 then they rage at God about it", "God causes their ruin"], correct:1, explain:"Proverbs names a pattern most of us recognize: consequences arrive and we look for someone else to blame." },
        { q:"What prevails over human plans?", opts:["Chance", "The LORD's purpose", "Willpower"], correct:1, explain:"Plans are many and welcome; the outcome belongs to God \u2014 the same theme as 16:9." }
      ],
      deepDive: "Chapter 19 is unusually honest about class and character. It admits plainly that money attracts people and poverty isolates \u2014 no pretending otherwise \u2014 and then insists integrity outranks income anyway. Verse 17 is the one to carry: kindness to the poor is treated as a loan to God Himself, which reframes generosity from charity to investment with a divine counterparty. And verse 3 stings usefully: check whether any frustration you're currently aiming at God is actually the arrival of your own choices." },
    { id:157, book:"Proverbs", title:"Chapter 20 \u2014 Who can say my heart is pure?", side:"l",
      passage: "\u201cWine is a mocker and beer a brawler; whoever is led astray by them is not wise.\u201d The chapter probes motives: \u201cMany claim to have unfailing love, but a faithful person who can find?\u201d and asks the question nobody can answer well: \u201cWho can say, \u2018I have kept my heart pure; I am clean and without sin\u2019?\u201d It also praises honest business again \u2014 differing weights and measures are detestable \u2014 and notes: \u201cThe purposes of a person's heart are deep waters, but one who has insight draws them out.\u201d",
      keyVerses: [
        { ref: "Proverbs 20:9", text: "Who can say, \u201cI have kept my heart pure; I am clean and without sin\u201d?" }
      ],
      questions: [
        { q:"What answer does verse 9 expect?", opts:["Many people", "No one \u2014 it's a rhetorical question exposing universal need", "Only the wise"], correct:1, explain:"Proverbs, the book of practical achievement, admits the one thing achievement can't accomplish." },
        { q:"What does verse 5 say about people's motives?", opts:["They're obvious", "Deep waters \u2014 requiring insight to draw out", "They don't matter"], correct:1, explain:"Understanding people takes patient drawing-out, like hauling a bucket from a deep well." },
        { q:"How does the chapter treat alcohol?", opts:["Forbidden entirely", "Warned about \u2014 being led astray by it is not wise", "Encouraged"], correct:1, explain:"Proverbs' concern is control: what's mocking and brawling in you when judgment goes." }
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
        { q:"What's the balance in verse 31?", opts:["Preparation is pointless", "Prepare the horse fully \u2014 and know victory rests with the LORD", "God does everything"], correct:1, explain:"Full diligence plus full dependence \u2014 the same pairing as Nehemiah's prayer and posted guard." }
      ],
      deepDive: "Chapter 21 opens and closes on the same theme from opposite ends: God directs the most powerful heart in the kingdom, and God grants the victory the best-prepared army can't guarantee. Between those bookends sits a jab at religious performance \u2014 justice over sacrifice \u2014 that would be at home in Amos or Micah. The practical takeaway is verse 31: prepare the horse. Do the work, make the plan, train, save, study. Then release the outcome, because it was never in your column. Anxiety usually comes from trying to occupy both columns at once." },
    { id:159, book:"Proverbs", title:"Chapter 22 \u2014 A good name, and a child's path", side:"c",
      passage: "\u201cA good name is more desirable than great riches; to be esteemed is better than silver or gold. Rich and poor have this in common: The LORD is the Maker of them all.\u201d The chapter contains the famous parenting line: \u201cStart children off on the way they should go, and even when they are old they will not turn from it.\u201d It warns against exploiting the poor \u2014 \u201cthe LORD will take up their case\u201d \u2014 and against befriending hot-tempered people, \u201cor you may learn their ways and get yourself ensnared.\u201d",
      keyVerses: [
        { ref: "Proverbs 22:1", text: "A good name is more desirable than great riches; to be esteemed is better than silver or gold." }
      ],
      questions: [
        { q:"What do rich and poor have in common?", opts:["Nothing", "The LORD is the Maker of them all", "The same opportunities"], correct:1, explain:"Shared origin levels the field \u2014 the basis for the chapter's warnings against exploiting the poor." },
        { q:"What's the warning about hot-tempered friends?", opts:["They're unreliable", "You may learn their ways \u2014 temperament is contagious", "They're dangerous physically"], correct:1, explain:"Proverbs keeps insisting your close company rewires your defaults, including your temper." },
        { q:"How should verse 6 about children be read?", opts:["An ironclad guarantee", "A general principle \u2014 early direction shapes a life, without denying free will", "Irrelevant today"], correct:1, explain:"Proverbs describes how life generally runs; Job stands nearby as the reminder that exceptions exist." }
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
        { q:"How does the wine passage work?", opts:["Abstract theory", "A vivid, almost cinematic picture of the aftermath \u2014 bites like a snake", "A blanket prohibition"], correct:1, explain:"Proverbs argues by showing the ending, not just labeling the behavior." }
      ],
      deepDive: "Chapter 23's financial counsel isn't anti-work \u2014 Proverbs praises diligence constantly \u2014 it's anti-exhaustion for something that can't hold you. 'Do not wear yourself out to get rich' is aimed at the person whose health, family, and rest are being spent as fuel. The eagle image is the argument: what you're burning your life for has wings. The wine passage at the end works the same way \u2014 it doesn't lecture, it just narrates the morning after in enough detail that the reader supplies the conclusion. Today: what are you currently trading that you can't get back, and for what?" },
    { id:161, book:"Proverbs", title:"Chapter 24 \u2014 Rise again", side:"r",
      passage: "\u201cBy wisdom a house is built, and through understanding it is established.\u201d The chapter counsels rescue \u2014 \u201cRescue those being led away to death... If you say, \u2018But we knew nothing about this,\u2019 does not he who weighs the heart perceive it?\u201d It refuses gloating: \u201cDo not gloat when your enemy falls.\u201d And it gives the line that has carried countless people through failure: \u201cFor though the righteous fall seven times, they rise again, but the wicked stumble when calamity strikes.\u201d",
      keyVerses: [
        { ref: "Proverbs 24:16", text: "For though the righteous fall seven times, they rise again." }
      ],
      questions: [
        { q:"What defines the righteous in verse 16?", opts:["Never falling", "Rising again \u2014 seven times if necessary", "Falling only once"], correct:1, explain:"Righteousness here is not a clean record but a refusal to stay down." },
        { q:"What excuse does verse 12 dismantle?", opts:["\u2018I was too busy\u2019", "\u2018We knew nothing about this\u2019 \u2014 claimed ignorance about people in danger", "\u2018It's not my job\u2019"], correct:1, explain:"God 'weighs the heart' \u2014 selective ignorance isn't an alibi." },
        { q:"What does the chapter forbid regarding enemies?", opts:["Defending yourself", "Gloating when they fall", "Speaking to them"], correct:1, explain:"Even justified vindication isn't a license to celebrate someone's ruin." }
      ],
      deepDive: "Verse 16 is one of the most quoted verses in the Bible for good reason: it relocates righteousness from performance to persistence. Seven falls \u2014 not one lapse, a pattern of them \u2014 and the person is still called righteous, because they get up. If you're currently down for the fourth or fifth time on something, this verse is Scripture's refusal to write you off. Pair it with verse 12's harder edge: the chapter also won't let you claim ignorance about people in trouble you could have helped. Rise yourself; go back for others." },
    { id:162, book:"Proverbs", title:"Chapter 25 \u2014 A city with broken walls", side:"c",
      passage: "\u201cThese are more proverbs of Solomon, compiled by the men of Hezekiah king of Judah.\u201d The chapter loves precise images: \u201cLike apples of gold in settings of silver is a ruling rightly given.\u201d \u201cLike a city whose walls are broken through is a person who lacks self-control.\u201d It advises restraint in visiting (\u201cSeldom set foot in your neighbor's house \u2014 too much of you, and they will hate you\u201d) and radical kindness to enemies: \u201cIf your enemy is hungry, give him food to eat... you will heap burning coals on his head.\u201d",
      keyVerses: [
        { ref: "Proverbs 25:28", text: "Like a city whose walls are broken through is a person who lacks self-control." }
      ],
      questions: [
        { q:"What does the broken-walls image convey?", opts:["Poverty", "Total vulnerability \u2014 without self-control, anything can walk in", "Loneliness"], correct:1, explain:"In the ancient world, walls were survival; a person without self-control is defenseless against everything." },
        { q:"What's the counsel about enemies?", opts:["Avoid them", "Feed them \u2014 practical kindness, quoted later by Paul in Romans 12", "Confront them"], correct:1, explain:"The 'burning coals' image is debated, but the action is unmistakable: meet hostility with concrete good." },
        { q:"What does verse 17 warn about?", opts:["Poor gifts", "Overstaying \u2014 too much of you and neighbors grow weary", "Bad advice"], correct:1, explain:"Proverbs' social intelligence includes knowing when to leave." }
      ],
      deepDive: "Chapter 25's images are its argument. Broken walls is the sharpest: self-control isn't one virtue among many but the perimeter that protects all the others \u2014 lose it and your time, money, mouth, and body are all exposed at once. The enemy-feeding counsel is remarkable this far back in Scripture; Paul quotes it directly in Romans 12 as the Christian answer to revenge. Today's takeaway is diagnostic: where is your wall broken? Name the one area where you consistently have no perimeter, and that's the repair project." },
    { id:163, book:"Proverbs", title:"Chapter 26 \u2014 The fool, the sluggard, the gossip", side:"l",
      passage: "A gallery of unflattering portraits. The fool: \u201cAs a dog returns to its vomit, so fools repeat their folly.\u201d The sluggard: \u201cAs a door turns on its hinges, so a sluggard turns on his bed\u201d \u2014 endless motion, no progress \u2014 and \u201cThe sluggard buries his hand in the dish; he is too lazy to bring it back to his mouth.\u201d The gossip: \u201cWithout wood a fire goes out; without a gossip a quarrel dies down.\u201d And on false friendliness: \u201cLike a coating of silver dross on earthenware are fervent lips with an evil heart.\u201d",
      keyVerses: [
        { ref: "Proverbs 26:20", text: "Without wood a fire goes out; without a gossip a quarrel dies down." }
      ],
      questions: [
        { q:"What does the door-on-hinges image capture?", opts:["Productivity", "Motion without progress \u2014 activity that goes nowhere", "Restfulness"], correct:1, explain:"The sluggard isn't still; he's busy turning, and ends up exactly where he started." },
        { q:"What sustains a quarrel, per verse 20?", opts:["The original offense", "The gossip \u2014 remove the fuel and the fire dies", "Time"], correct:1, explain:"Conflicts usually survive on retelling, not on the incident itself." },
        { q:"How does the chapter picture the fool's pattern?", opts:["Slow improvement", "A dog returning to its vomit \u2014 repeating folly", "One-time mistakes"], correct:1, explain:"Proverbs' most disgusting image, chosen deliberately for the repetition of avoidable mistakes." }
      ],
      deepDive: "Chapter 26 is Proverbs at its most brutal, and its humor is the point \u2014 these images are meant to be so vivid you can't unsee yourself in them. The sluggard passages are the funniest and most convicting: a man turning on his bed like a door, too tired to lift food to his own mouth. And verse 20 hands you a genuine tool: if you want a conflict to die, stop feeding it wood. Most quarrels in a family, church, or workplace are kept alive by three people retelling them. Today: is there a fire you're supplying?" },
    { id:164, book:"Proverbs", title:"Chapter 27 \u2014 Iron sharpens iron", side:"r",
      passage: "\u201cDo not boast about tomorrow, for you do not know what a day may bring.\u201d The chapter values honest friction: \u201cWounds from a friend can be trusted, but an enemy multiplies kisses,\u201d and gives its most famous line: \u201cAs iron sharpens iron, so one person sharpens another.\u201d It ends with practical stewardship: \u201cBe sure you know the condition of your flocks, give careful attention to your herds; for riches do not endure forever.\u201d",
      keyVerses: [
        { ref: "Proverbs 27:17", text: "As iron sharpens iron, so one person sharpens another." }
      ],
      questions: [
        { q:"What does the iron image require?", opts:["Distance and politeness", "Proximity and friction \u2014 real contact, even sparks", "Identical opinions"], correct:1, explain:"Nothing is sharpened by agreement; the grinding contact is the mechanism, not a malfunction." },
        { q:"What can be trusted more than an enemy's kisses?", opts:["Flattery", "Wounds from a friend", "Silence"], correct:1, explain:"One hurts to help; the other pleases to harm \u2014 Proverbs inverts how they feel." },
        { q:"What does \u2018know the condition of your flocks\u2019 teach?", opts:["Buy more", "Pay attention to what you actually have \u2014 stewardship over expansion", "Sell everything"], correct:1, explain:"Wealth requires attention, not just acquisition \u2014 an ancient case for actually checking your accounts." }
      ],
      deepDive: "Chapter 27 is a roster check. Iron on iron means two hard surfaces in real contact \u2014 proximity, friction, mutual benefit. Most of us drift toward whetstone-free relationships: people who agree, flatter, or never get close enough to see our dull edges. The audit is worth doing honestly: Who is allowed to correct me? When did I last thank someone for pushback instead of defending myself? Whose growth am I supplying friction to? If those come up empty, the assignment is to take one friendship a layer deeper \u2014 invite the honesty you've been managing away." },
    { id:165, book:"Proverbs", title:"Chapter 28 \u2014 Bold as a lion", side:"c",
      passage: "\u201cThe wicked flee though no one pursues, but the righteous are as bold as a lion.\u201d The chapter is heavy on justice and honesty in leadership: \u201cWhen the righteous triumph, there is great elation; but when the wicked rise to power, people go into hiding.\u201d And it names the mechanism of mercy: \u201cWhoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy.\u201d It's also blunt about listening: \u201cIf anyone turns a deaf ear to my instruction, even their prayers are detestable.\u201d",
      keyVerses: [
        { ref: "Proverbs 28:13", text: "Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy." }
      ],
      questions: [
        { q:"What does verse 1 say about guilt?", opts:["It's invisible", "The wicked flee though no one pursues \u2014 guilt manufactures its own paranoia", "It brings peace"], correct:1, explain:"Hidden wrongdoing costs you rest; integrity walks in without looking over its shoulder." },
        { q:"What two things does verse 13 require?", opts:["Confession alone", "Confessing AND renouncing \u2014 naming it and turning from it", "Renouncing alone"], correct:1, explain:"Confession without change is management; renouncing without honesty is willpower. Mercy meets both." },
        { q:"What happens when the wicked rise to power?", opts:["Nothing changes", "People go into hiding", "Prosperity follows"], correct:1, explain:"Proverbs consistently notes that leadership character reshapes an entire society's atmosphere." }
      ],
      deepDive: "Verse 13 is the clearest gospel-shaped sentence in Proverbs: concealment blocks prosperity; confession plus renunciation finds mercy. Both halves matter \u2014 admitting without turning is just performance, turning without admitting is just willpower. And verse 1 explains why concealment costs so much: hidden wrong makes you jumpy, defensive, and exhausted, fleeing pursuers who don't exist. Boldness in Proverbs isn't personality; it's the natural posture of someone with nothing buried. Today's question: what would it take to stop managing something and simply name it?" },
    { id:166, book:"Proverbs", title:"Chapter 29 \u2014 Where there is no vision", side:"l",
      passage: "\u201cWhoever remains stiff-necked after many rebukes will suddenly be destroyed \u2014 without remedy.\u201d The chapter's best-known line: \u201cWhere there is no revelation, people cast off restraint; but blessed is the one who heeds wisdom's instruction.\u201d It names a trap most people recognize: \u201cFear of man will prove to be a snare, but whoever trusts in the LORD is kept safe.\u201d And it observes anger honestly: \u201cFools give full vent to their rage, but the wise bring calm in the end.\u201d",
      keyVerses: [
        { ref: "Proverbs 29:25", text: "Fear of man will prove to be a snare, but whoever trusts in the LORD is kept safe." }
      ],
      questions: [
        { q:"What happens without revelation/vision?", opts:["People become efficient", "People cast off restraint \u2014 no shared word, no boundaries", "Nothing changes"], correct:1, explain:"The verse is about God's revealed word, not merely leadership vision \u2014 lose it and restraint unravels." },
        { q:"Why is fear of man called a snare?", opts:["People are dangerous", "It traps you \u2014 decisions get made by what others think, not what's right", "It's unavoidable"], correct:1, explain:"A snare catches you gradually and invisibly; approval-hunger steers a life without announcing itself." },
        { q:"How do fools and the wise handle rage?", opts:["Identically", "Fools give full vent; the wise bring calm in the end", "The wise suppress everything"], correct:1, explain:"Not denial of anger \u2014 management of it, aiming at eventual calm rather than immediate release." }
      ],
      deepDive: "Chapter 29's most personally useful line is verse 25. Fear of man is a snare because it operates invisibly: you don't feel afraid, you just find yourself shaping opinions, spending money, and making decisions around anticipated approval. The antidote Proverbs offers isn't bravado but trust \u2014 relocating your sense of safety from people's verdicts to God's. Pair it with verse 11 on anger: the wise aren't people who feel less, they're people who aim at the end state. Today: name one decision you're making mostly to avoid someone's disapproval." },
    { id:167, book:"Proverbs", title:"Chapter 30 \u2014 Neither poverty nor riches", side:"r",
      passage: "The sayings of Agur \u2014 who opens with startling humility: \u201cI am the most ignorant of men; I do not have a man's understanding.\u201d He prays one of Scripture's most practical prayers: \u201cGive me neither poverty nor riches, but give me only my daily bread. Otherwise, I may have too much and disown you... Or I may become poor and steal, and so dishonor the name of my God.\u201d He marvels at four small creatures that are \u201cextremely wise\u201d \u2014 ants, hyraxes, locusts, and lizards.",
      keyVerses: [
        { ref: "Proverbs 30:8\u20139", text: "Give me neither poverty nor riches, but give me only my daily bread." }
      ],
      questions: [
        { q:"Why does Agur fear too much wealth?", opts:["Taxes", "He may disown God \u2014 \u2018Who is the LORD?\u2019", "It's hard to manage"], correct:1, explain:"Abundance can quietly make God feel optional \u2014 a spiritual risk most people never name." },
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
        { q:"How does the book end \u2014 and why does it matter?", opts:["With wealth", "\u2018A woman who fears the LORD is to be praised\u2019 \u2014 back to 1:7", "With a warning"], correct:1, explain:"The book closes on the same foundation it opened with: the fear of the LORD, now embodied in a life." }
      ],
      deepDive: "Proverbs ends by embodying everything it taught. The wisdom that shouted in the streets in chapter 1 now looks like a specific life: someone who works hard, plans ahead, trades shrewdly, opens her arms to the poor, speaks with kindness, and can 'laugh at the days to come' because she's prepared for them. It's not a checklist to measure anyone against \u2014 it's what the fear of the LORD looks like when it's fully lived out in ordinary work, money, and speech. And Lemuel's mother's charge sits right before it: use whatever voice you have for people who don't have one. Thirty-one chapters, and the last word is the same as the first \u2014 the fear of the LORD. That's where wisdom starts, and apparently where it ends up too." }
,
    { id:169, book:"Ecclesiastes", title:"Everything is vapor", side:"l",
      passage: "\u201cMeaningless! Meaningless!\u201d says the Teacher. \u201cUtterly meaningless! Everything is meaningless.\u201d The Hebrew word is hevel \u2014 vapor, breath, mist: not worthless, but impossible to grasp. \u201cWhat do people gain from all their labors at which they toil under the sun? Generations come and generations go, but the earth remains forever.\u201d The sun rises and sets and hurries back; rivers run to the sea and the sea is never full. \u201cThere is nothing new under the sun.\u201d",
      keyVerses: [
        { ref: "Ecclesiastes 1:2", text: "\u201cMeaningless! Meaningless!\u201d says the Teacher. \u201cUtterly meaningless! Everything is meaningless.\u201d" }
      ],
      questions: [
        { q:"What does the Hebrew word hevel actually picture?", opts:["Garbage", "Vapor or breath \u2014 real but impossible to hold onto", "A lie"], correct:1, explain:"Not \u2018worthless\u2019 so much as \u2018ungraspable\u2019 \u2014 you can see your breath on a cold morning and never catch it." },
        { q:"What phrase frames the book's whole search?", opts:["\u2018In heaven above\u2019", "\u2018Under the sun\u2019 \u2014 life examined without looking up", "\u2018In the beginning\u2019"], correct:1, explain:"The Teacher deliberately limits his view to this world alone \u2014 and reports honestly what he finds there." },
        { q:"Why is a book this bleak in the Bible?", opts:["By accident", "Because Scripture refuses to pretend life feels tidy \u2014 it names the ache before answering it", "To discourage faith"], correct:1, explain:"Ecclesiastes gives permission to say the honest thing out loud, inside the pages of Scripture itself." }
      ],
      deepDive: "Ecclesiastes is the strangest book in the Bible and one of the most needed \u2014 an unflinching look at life 'under the sun,' the phrase repeated nearly thirty times to mark the experiment's boundaries. The Teacher isn't a cynic for sport; he's a man with unlimited resources testing whether anything on earth can bear the weight of ultimate meaning. His verdict, hevel, is often mistranslated 'meaningless,' but 'vapor' catches it better: everything real, everything fleeting, nothing you can grip. That honesty is a gift. Most religion rushes to reassure; Ecclesiastes sits in the ache long enough to make its final answer worth something." },
    { id:170, book:"Ecclesiastes", title:"The great experiment", side:"r",
      passage: "The Teacher tries everything a person could want: laughter, wine, great projects, houses, vineyards, gardens, reservoirs, servants, herds, silver and gold, singers, \u201cthe delights of a man's heart.\u201d \u201cI denied myself nothing my eyes desired; I refused my heart no pleasure.\u201d And then the verdict: \u201cYet when I surveyed all that my hands had done and what I had toiled to achieve, everything was meaningless, a chasing after the wind; nothing was gained under the sun.\u201d Even wisdom, he notes, ends the same as folly \u2014 both die.",
      keyVerses: [
        { ref: "Ecclesiastes 2:11", text: "Yet when I surveyed all that my hands had done... everything was meaningless, a chasing after the wind." }
      ],
      questions: [
        { q:"What made the Teacher's experiment unusual?", opts:["He had no resources", "He could actually afford everything \u2014 nothing was denied him", "He only imagined it"], correct:1, explain:"Most people theorize about whether money and pleasure satisfy; he ran the full test with unlimited budget." },
        { q:"What's his conclusion about achievement?", opts:["It fully satisfies", "A chasing after the wind \u2014 nothing gained that lasts", "It should be avoided"], correct:1, explain:"Not that work is bad, but that it can't carry the weight of ultimate meaning." },
        { q:"What troubles him about wisdom itself?", opts:["It's useless", "The wise and the fool meet the same end \u2014 death levels both", "It can't be learned"], correct:1, explain:"He grants wisdom is better than folly, then notes it doesn't exempt anyone from the grave." }
      ],
      deepDive: "Chapter 2 is the experiment nobody else can afford to run. Solomon-like resources, total permission, and a careful record kept \u2014 pleasure, alcohol, architecture, art, wealth, music, sex, and the sheer satisfaction of building things. The honest report is that it worked, briefly, and then didn't. What makes this more than a rich man's complaint is the reason he gives: everything he built would pass to someone who hadn't earned it and might waste it. Achievement can't outlast you. If you've ever hit a goal and felt the strange flatness afterward, this chapter is Scripture already knowing about it." },
    { id:171, book:"Ecclesiastes", title:"A time for everything", side:"c",
      passage: "\u201cThere is a time for everything, and a season for every activity under the heavens: a time to be born and a time to die, a time to plant and a time to uproot... a time to weep and a time to laugh, a time to mourn and a time to dance... a time to be silent and a time to speak, a time to love and a time to hate, a time for war and a time for peace.\u201d And then the key: \u201cHe has made everything beautiful in its time. He has also set eternity in the human heart.\u201d",
      keyVerses: [
        { ref: "Ecclesiastes 3:11", text: "He has made everything beautiful in its time. He has also set eternity in the human heart." }
      ],
      questions: [
        { q:"What does the poem of seasons acknowledge?", opts:["Only good seasons exist", "Both halves are real \u2014 weeping and laughing, war and peace, all have their time", "Nothing changes"], correct:1, explain:"Scripture refuses to pretend life is only harvest; there's a season for uprooting too." },
        { q:"What has God set in the human heart?", opts:["Ambition", "Eternity \u2014 a sense of something beyond time", "Fear"], correct:1, explain:"The ache the whole book documents is explained here: we're built for more than \u2018under the sun\u2019 can supply." },
        { q:"How does that explain the book's restlessness?", opts:["We're broken", "We're made for eternity but living inside time \u2014 so temporary things never quite fit", "The Teacher was ungrateful"], correct:1, explain:"The mismatch is by design \u2014 it's what keeps a person looking up." }
      ],
      deepDive: "The seasons poem is the most quoted passage in Ecclesiastes, and it's usually read as gentle comfort. It's actually sharper than that: it names the things we'd rather not schedule \u2014 dying, uprooting, tearing down, mourning, hating, war \u2014 as having their proper time under God's ordering. But verse 11 is the key to the whole book: eternity set in the human heart. That single line explains why the Teacher's experiment failed. Nothing temporary satisfies a creature built for permanence. The restlessness isn't a defect; it's a compass." },
    { id:172, book:"Ecclesiastes", title:"Two are better than one", side:"l",
      passage: "The Teacher looks at oppression, envy, and driven work \u2014 \u201cAll toil and all achievement spring from one person's envy of another\u201d \u2014 and then turns to a man with no family, working endlessly, never asking, \u201cFor whom am I toiling?\u201d Against that isolation he sets community: \u201cTwo are better than one, because they have a good return for their labor: If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up... A cord of three strands is not quickly broken.\u201d",
      keyVerses: [
        { ref: "Ecclesiastes 4:9\u201310", text: "Two are better than one... If either of them falls down, one can help the other up." }
      ],
      questions: [
        { q:"What does he say drives much achievement?", opts:["Love of the work", "Envy of others \u2014 comparison as the engine", "Divine calling"], correct:1, explain:"An uncomfortably modern diagnosis: much ambition is competitive, not creative." },
        { q:"What question does the isolated worker never ask?", opts:["\u2018How much more?\u2019", "\u2018For whom am I toiling?\u2019", "\u2018Is this legal?\u2019"], correct:1, explain:"Work without relationship loses its point \u2014 and the driven often never pause to notice." },
        { q:"What's the cord-of-three-strands image about?", opts:["Wealth", "Strength through companionship \u2014 shared life resists breaking", "Physical rope-making"], correct:1, explain:"Often read at weddings, but written about friendship and community in general." }
      ],
      deepDive: "Chapter 4 is Ecclesiastes at its most tender. Having proven that achievement can't satisfy, the Teacher notices the person most likely to keep trying anyway: alone, driven, no one to enjoy it with, never once asking who any of it is for. The answer he offers isn't more meaning from the work \u2014 it's people. Two are better than one, for warmth, for defense, and for the simple mechanic of being picked up when you fall. If the last few weeks have been all output and no company, this chapter has your name on it: the question to sit with is his, exactly as written \u2014 for whom am I toiling?" },
    { id:173, book:"Ecclesiastes", title:"Eat your bread with joy", side:"r",
      passage: "Between the hard verdicts, the Teacher keeps returning to a simple, stubborn counsel: \u201cA person can do nothing better than to eat and drink and find satisfaction in their own toil. This too, I see, is from the hand of God.\u201d Later he sharpens it: \u201cGo, eat your food with gladness, and drink your wine with a joyful heart... Enjoy life with your wife, whom you love... Whatever your hand finds to do, do it with all your might.\u201d Money doesn't satisfy \u2014 \u201cwhoever loves money never has enough\u201d \u2014 but bread, work, and companionship, received as gifts, do.",
      keyVerses: [
        { ref: "Ecclesiastes 9:7", text: "Go, eat your food with gladness, and drink your wine with a joyful heart, for God has already approved what you do." }
      ],
      questions: [
        { q:"What does the Teacher recommend, given that nothing lasts?", opts:["Despair", "Receive ordinary gifts with joy \u2014 food, work, companionship \u2014 as from God's hand", "Withdraw from life"], correct:1, explain:"His conclusion is not nihilism but gratitude: enjoy the day you were given." },
        { q:"What does he say about loving money?", opts:["It satisfies eventually", "Whoever loves money never has enough", "It's harmless"], correct:1, explain:"An appetite that grows with feeding \u2014 a diagnosis three thousand years old and still accurate." },
        { q:"How should work be done?", opts:["Minimally", "\u2018With all your might\u2019 \u2014 wholeheartedly, while you have it", "Only for pay"], correct:1, explain:"Fleeting doesn't mean unimportant \u2014 the brevity is a reason for presence, not withdrawal." }
      ],
      deepDive: "This is the turn that saves Ecclesiastes from despair, and it's easy to miss because it arrives quietly and repeatedly. If nothing under the sun can bear ultimate weight, then stop asking it to \u2014 and enjoy it for what it actually is: a gift for today. Bread tastes better when it isn't being asked to justify your existence. That's the paradox at the book's center: the person who stops demanding that life supply meaning is finally free to enjoy life. Today's practice is embarrassingly simple \u2014 eat one meal slowly, notice it, and thank God for it without asking it to be more than a meal." },
    { id:174, book:"Ecclesiastes", title:"Remember your Creator", side:"c",
      passage: "The book closes with an image of aging \u2014 the days of trouble when \u201cthe keepers of the house tremble\u201d and \u201cthe grinders cease because they are few\u201d \u2014 and one urgent charge: \u201cRemember your Creator in the days of your youth, before the days of trouble come.\u201d Then the final verdict, spoken after every experiment has failed: \u201cNow all has been heard; here is the conclusion of the matter: Fear God and keep his commandments, for this is the duty of all mankind. For God will bring every deed into judgment, including every hidden thing.\u201d",
      keyVerses: [
        { ref: "Ecclesiastes 12:13", text: "Now all has been heard; here is the conclusion of the matter: Fear God and keep his commandments." }
      ],
      questions: [
        { q:"When does the Teacher say to remember your Creator?", opts:["After retirement", "In the days of your youth \u2014 before trouble and age arrive", "Only in crisis"], correct:1, explain:"He is telling the young what the old learn too late: build the foundation before the weather comes." },
        { q:"Where does the whole book finally land?", opts:["Despair", "Fear God and keep his commandments \u2014 the same foundation as Proverbs", "Enjoy money"], correct:1, explain:"Everything \u2018under the sun\u2019 failed; the answer required looking above it." },
        { q:"What does he say about hidden deeds?", opts:["They don't count", "God will bring every deed into judgment, including every hidden thing", "Only public acts matter"], correct:1, explain:"Meaning is restored precisely because nothing is finally forgotten \u2014 not even the unseen." }
      ],
      deepDive: "Ecclesiastes ends by earning its conclusion. After chapters of demolition \u2014 pleasure, wealth, wisdom, work, legacy, all vapor \u2014 the last word is not 'therefore nothing matters' but the opposite: fear God, keep his commandments, because everything, including what nobody saw, is finally accounted for. That's the inversion the whole book was built for. If nothing is remembered, nothing matters; because God remembers everything, even the small hidden faithfulness has weight. And the aging poem gives the charge its urgency: remember Him now, while your strength is yours to spend." },
    { id:175, book:"Song of Solomon", title:"Let him kiss me", side:"l",
      passage: "The Bible's love poem opens in the woman's voice, unembarrassed: \u201cLet him kiss me with the kisses of his mouth \u2014 for your love is more delightful than wine.\u201d She is candid about herself \u2014 \u201cDark am I, yet lovely\u201d \u2014 and about wanting to be near him: \u201cTell me, you whom I love, where you graze your flock.\u201d He answers in kind, calling her \u201cmy darling\u201d and comparing her to a mare among Pharaoh's chariots. Two people delighting openly in each other, in a book Scripture chose to keep.",
      keyVerses: [
        { ref: "Song of Solomon 1:2", text: "Let him kiss me with the kisses of his mouth \u2014 for your love is more delightful than wine." }
      ],
      questions: [
        { q:"Whose voice opens the book?", opts:["The man's", "The woman's \u2014 she speaks first and speaks most in the Song", "A narrator's"], correct:1, explain:"Unusual for ancient literature: the woman's desire and voice lead the poem throughout." },
        { q:"What's notable about the Song being in Scripture?", opts:["It's a mistake", "The Bible includes frank, joyful romantic love as good and God-given", "It's purely allegory"], correct:1, explain:"Long read allegorically too, but its plain sense celebrates married love without embarrassment." },
        { q:"How does she describe herself?", opts:["Ashamed", "\u2018Dark am I, yet lovely\u2019 \u2014 honest and self-possessed", "Perfect in every way"], correct:1, explain:"Sun-darkened from working the vineyards \u2014 real, working, and beautiful." }
      ],
      deepDive: "It surprises people that this book is in the Bible at all \u2014 which says more about our assumptions than about Scripture. The Song presents romantic and physical love between a husband and wife as something to be celebrated out loud, not tolerated quietly. Notice who drives it: the woman speaks the majority of the lines and initiates most of the desire, extraordinary in ancient poetry. Christians have also read it for centuries as a picture of God's love for His people \u2014 a legitimate second layer \u2014 but the first layer matters too: God is not embarrassed by the love He designed." },
    { id:176, book:"Song of Solomon", title:"Arise, my darling", side:"r",
      passage: "Winter breaks and the beloved calls: \u201cSee! The winter is past; the rains are over and gone. Flowers appear on the earth; the season of singing has come... Arise, come, my darling; my beautiful one, come with me.\u201d She answers with the Song's refrain of belonging: \u201cMy beloved is mine and I am his.\u201d And she gives the Song's repeated warning, spoken three times across the book: \u201cDo not arouse or awaken love until it so desires.\u201d",
      keyVerses: [
        { ref: "Song of Solomon 2:16", text: "My beloved is mine and I am his." }
      ],
      questions: [
        { q:"What season imagery frames the invitation?", opts:["Harvest", "Spring \u2014 winter past, flowers appearing, singing returning", "Deep winter"], correct:1, explain:"Love pictured as a thaw \u2014 the world coming back to life around it." },
        { q:"What does the refrain \u2018my beloved is mine and I am his\u2019 emphasize?", opts:["Ownership as control", "Mutual belonging \u2014 both directions, equally", "One-sided devotion"], correct:1, explain:"The Song's vision is reciprocal: each fully given, neither consumed." },
        { q:"What warning repeats three times in the book?", opts:["Guard your money", "Do not awaken love before its time", "Avoid marriage"], correct:1, explain:"A striking note of restraint inside a celebration \u2014 love is good, and timing matters." }
      ],
      deepDive: "The spring passage is the Song's most quoted, and it works because it locates love inside the turning of seasons: the winter really was long, and it really did end. Then, right beside all that warmth, comes the Song's repeated caution \u2014 don't awaken love before it's ready. That the same book celebrating desire also counsels patience is exactly the balance Scripture keeps: this is powerful and good, and powerful good things have a proper time. Modern culture tends to keep the first half and drop the second. The Song insists on both." },
    { id:177, book:"Song of Solomon", title:"You are altogether beautiful", side:"c",
      passage: "The husband's praise runs long and specific: \u201cHow beautiful you are, my darling! Oh, how beautiful!\u201d Line after line naming what he sees, ending: \u201cYou are altogether beautiful, my darling; there is no flaw in you.\u201d He calls her \u201cmy sister, my bride\u201d \u2014 language of covenant kinship as well as romance \u2014 and says, \u201cYou have stolen my heart with one glance of your eyes.\u201d She responds by welcoming him: \u201cLet my beloved come into his garden.\u201d",
      keyVerses: [
        { ref: "Song of Solomon 4:7", text: "You are altogether beautiful, my darling; there is no flaw in you." }
      ],
      questions: [
        { q:"What characterizes his praise?", opts:["Vague compliments", "Long, specific, particular \u2014 he names what he actually sees", "Comparison to others"], correct:1, explain:"Real love in the Song is detailed; generic admiration isn't the same as being known." },
        { q:"What does \u2018my sister, my bride\u2019 add?", opts:["Confusion", "Covenant kinship alongside romance \u2014 family-level belonging", "A literal relation"], correct:1, explain:"Ancient love language combining permanence and passion \u2014 she is both beloved and kin." },
        { q:"What does \u2018no flaw in you\u2019 express?", opts:["Literal perfection", "Love's way of seeing \u2014 delight that isn't auditing for defects", "Naive blindness"], correct:1, explain:"Not that she has no faults, but that his gaze isn't hunting for them." }
      ],
      deepDive: "What stands out in chapter 4 is the specificity. He doesn't say 'you're great' \u2014 he catalogues, at length, particular things about a particular person. That's the difference between flattery and being known, and it's a usable lesson: generic praise costs nothing and lands as nothing. 'There is no flaw in you' isn't a claim about her record; it's a description of how love looks at someone \u2014 not scanning for defects. And 'my sister, my bride' quietly refuses to separate passion from permanence, which the surrounding culture then and now keeps trying to do." },
    { id:178, book:"Song of Solomon", title:"Love as strong as death", side:"l",
      passage: "The Song's climax is its most famous passage: \u201cPlace me like a seal over your heart, like a seal on your arm; for love is as strong as death, its jealousy unyielding as the grave. It burns like blazing fire, like a mighty flame. Many waters cannot quench love; rivers cannot sweep it away. If one were to give all the wealth of one's house for love, it would be utterly scorned.\u201d",
      keyVerses: [
        { ref: "Song of Solomon 8:6\u20137", text: "For love is as strong as death... Many waters cannot quench love; rivers cannot sweep it away." }
      ],
      questions: [
        { q:"What does the seal image request?", opts:["Ownership", "Permanent belonging \u2014 a seal marked identity and unbreakable claim", "A gift"], correct:1, explain:"A seal was pressed into wax as a signature; she asks to be that permanent mark on him." },
        { q:"What comparison measures love's strength?", opts:["Wealth", "Death and the grave \u2014 the most unrelenting forces known", "Time"], correct:1, explain:"Love is placed in the same weight class as death: it does not let go." },
        { q:"What can't buy love?", opts:["Nothing \u2014 it's purchasable", "All the wealth of one's house \u2014 the offer would be scorned", "Only small amounts"], correct:1, explain:"The Song ends by declaring love priceless in the strict sense: not for sale at any figure." }
      ],
      deepDive: "This is where the Song lifts from romance to something enormous. Love as strong as death \u2014 in a world where death always wins, that's the highest claim available. Many waters cannot quench it; wealth cannot buy it. Christians have long heard the gospel in these lines, because a love that outmatched death is exactly what the New Testament claims happened. But the human-level reading is powerful on its own: covenant love is not a feeling that fades with weather, it's a fire that floodwater can't put out. Ask what kind of love you're building \u2014 and whether it could survive what this passage says love survives." },
    { id:179, book:"Isaiah", title:"Come, let us reason together", side:"r",
      passage: "Isaiah opens with God's lawsuit against His people: they've kept the religion and lost the point. \u201cStop bringing meaningless offerings! Your incense is detestable to me... Your hands are full of blood!\u201d And then the remedy, which is not more religion but justice and mercy: \u201cLearn to do right; seek justice. Defend the oppressed. Take up the cause of the fatherless; plead the case of the widow.\u201d Then the astonishing offer: \u201cCome now, let us settle the matter. Though your sins are like scarlet, they shall be as white as snow.\u201d",
      keyVerses: [
        { ref: "Isaiah 1:18", text: "Come now, let us settle the matter. Though your sins are like scarlet, they shall be as white as snow." }
      ],
      questions: [
        { q:"What was wrong with their worship?", opts:["The wrong songs", "It continued while injustice did \u2014 religion detached from righteousness", "Too few sacrifices"], correct:1, explain:"God rejects offerings from hands full of blood \u2014 worship can't launder how you treat people." },
        { q:"What does God ask for instead?", opts:["Bigger offerings", "Justice, defense of the oppressed, care for the fatherless and widow", "Silence"], correct:1, explain:"The prophets' constant demand: worship proven by how the vulnerable are treated." },
        { q:"What is offered despite the indictment?", opts:["Nothing", "Complete cleansing \u2014 scarlet sins made white as snow", "A lighter sentence"], correct:1, explain:"The chapter's turn is stunning: the prosecutor offers full pardon mid-lawsuit." }
      ],
      deepDive: "Isaiah 1 sets the pattern for the whole book: unflinching diagnosis followed by unreasonable grace. The charge is not irreligion \u2014 they were busy with offerings and festivals \u2014 but religion running alongside injustice, as though the two occupied separate accounts. God says they don't. Then comes verse 18, one of Scripture's boldest sentences: scarlet to snow, offered to the very people just indicted. Isaiah's whole message lives in that tension \u2014 judgment named honestly, mercy offered anyway \u2014 and the invitation is to bring the mess into the open rather than manage it." },
    { id:180, book:"Isaiah", title:"Holy, holy, holy", side:"c",
      passage: "\u201cIn the year that King Uzziah died, I saw the Lord, high and exalted, seated on a throne; and the train of his robe filled the temple.\u201d Seraphim called to one another: \u201cHoly, holy, holy is the LORD Almighty; the whole earth is full of his glory.\u201d The doorposts shook. Isaiah's response was collapse: \u201cWoe to me! I am ruined! For I am a man of unclean lips.\u201d A seraph touched his mouth with a coal from the altar \u2014 \u201cyour guilt is taken away\u201d \u2014 and then the Lord asked, \u201cWhom shall I send?\u201d Isaiah answered: \u201cHere am I. Send me!\u201d",
      keyVerses: [
        { ref: "Isaiah 6:8", text: "Then I heard the voice of the Lord saying, \u201cWhom shall I send? And who will go for us?\u201d And I said, \u201cHere am I. Send me!\u201d" }
      ],
      questions: [
        { q:"What was Isaiah's first reaction to seeing God?", opts:["Joy", "Ruin \u2014 \u2018Woe to me! I am a man of unclean lips\u2019", "Confidence"], correct:1, explain:"Nearness to holiness produced immediate self-knowledge, not comfort." },
        { q:"What happened before Isaiah was sent?", opts:["He was trained", "His guilt was taken away by a coal from the altar", "He volunteered first"], correct:1, explain:"Cleansing preceded commissioning \u2014 God dealt with his mouth before using it." },
        { q:"What is the order of the encounter?", opts:["Call, then cleansing", "Vision \u2014 conviction \u2014 cleansing \u2014 call", "Call, then vision"], correct:1, explain:"A pattern many have recognized in their own story: seeing God rightly starts everything else." }
      ],
      deepDive: "Isaiah 6 is the Bible's most complete picture of encountering God's holiness, and its sequence matters. The vision produces conviction \u2014 not vague guilt, but specific: unclean lips, in a man whose life's work was words. Then cleansing, applied precisely where the problem was. Only then the question, and it's an open one: 'whom shall I send?' The invitation was not aimed at him personally; he volunteered from a cleansed place. Notice too that 'holy' is the only attribute Scripture triples. If your sense of God has grown casual, this chapter is the corrective \u2014 and its comfort is that the coal comes before the commission." },
    { id:181, book:"Isaiah", title:"A child is born", side:"l",
      passage: "Into a nation walking in darkness under threat of invasion, Isaiah speaks a promise: \u201cThe virgin will conceive and give birth to a son, and will call him Immanuel\u201d \u2014 God with us. Later he expands it: \u201cThe people walking in darkness have seen a great light... For to us a child is born, to us a son is given, and the government will be on his shoulders. And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace.\u201d",
      keyVerses: [
        { ref: "Isaiah 9:6", text: "For to us a child is born, to us a son is given... And he will be called Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace." }
      ],
      questions: [
        { q:"What does \u2018Immanuel\u2019 mean?", opts:["God is great", "God with us", "God saves"], correct:1, explain:"The name is the promise \u2014 not merely help from a distance but presence." },
        { q:"What's remarkable about the titles in 9:6?", opts:["They're modest", "They ascribe divine names to a coming child \u2014 including \u2018Mighty God\u2019", "They describe a general"], correct:1, explain:"No ordinary king in Israel was called Mighty God \u2014 the promise reaches beyond any local ruler." },
        { q:"When were these words first spoken?", opts:["In peacetime", "Under threat of invasion \u2014 to people walking in darkness", "After the exile ended"], correct:1, explain:"The light was promised while the darkness was still thickening, not after it lifted." }
      ],
      deepDive: "These are the words read in churches every Christmas, and their original setting makes them stronger, not weaker: a small nation facing annihilation, told that the answer would arrive as a baby. Not an army \u2014 a child. The titles stack up impossibly for any ordinary king: Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace. Seven centuries later the New Testament claims the arrival, and Matthew quotes Immanuel directly. Whatever Isaiah's first hearers understood, the shape of the promise is unmistakable: God's answer to darkness comes near, and comes small." },
    { id:182, book:"Isaiah", title:"Soar on wings like eagles", side:"r",
      passage: "\u201cComfort, comfort my people, says your God\u201d \u2014 the great turn in Isaiah. He measures the waters in the hollow of his hand, weighs the mountains on scales, and the nations are \u201ca drop in a bucket.\u201d To exiles convinced God had lost track of them, the answer is a question: \u201cDo you not know? Have you not heard? The LORD is the everlasting God... He gives strength to the weary and increases the power of the weak... but those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.\u201d",
      keyVerses: [
        { ref: "Isaiah 40:31", text: "But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary." }
      ],
      questions: [
        { q:"Who is the promise of renewed strength aimed at?", opts:["The naturally strong", "The weary and the weak \u2014 even young men stumble and fall", "Warriors only"], correct:1, explain:"The chapter explicitly says youth and strength give out; the renewal is for those who've run dry." },
        { q:"What does \u2018hope in the LORD\u2019 translate more literally as?", opts:["Wish", "Wait for \u2014 an active, expectant waiting", "Ignore"], correct:1, explain:"The Hebrew carries waiting and hoping together \u2014 strength comes to those who keep looking to Him." },
        { q:"What's the descending order at the end \u2014 soar, run, walk?", opts:["A mistake", "Deliberate \u2014 ending with walking, the hardest ordinary faithfulness", "Random"], correct:1, explain:"Soaring is dramatic; walking without fainting is daily life, and it's given last for a reason." }
      ],
      deepDive: "Isaiah 40 opens the second half of the book with comfort, addressed to people who assumed they'd been forgotten. Its logic is to make God big again: oceans in a hand's hollow, nations as dust on a scale, stars called out by name. Then it turns personal \u2014 the same God who runs galaxies notices your exhaustion. Don't miss the descending order at the end: soar, run, walk. It descends on purpose, because most of life isn't soaring, and walking without fainting through an ordinary hard season is the harder miracle. That's the promise, and it's given to the weary specifically." },
    { id:183, book:"Isaiah", title:"When you pass through the waters", side:"c",
      passage: "\u201cBut now, this is what the LORD says \u2014 he who created you, Jacob, he who formed you, Israel: Do not fear, for I have redeemed you; I have summoned you by name; you are mine. When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you. When you walk through the fire, you will not be burned; the flames will not set you ablaze.\u201d And the reason: \u201cyou are precious and honored in my sight, and... I love you.\u201d",
      keyVerses: [
        { ref: "Isaiah 43:2", text: "When you pass through the waters, I will be with you; and when you pass through the rivers, they will not sweep over you." }
      ],
      questions: [
        { q:"What word choice matters most \u2014 \u2018if\u2019 or \u2018when\u2019?", opts:["\u2018If\u2019 \u2014 trouble is optional", "\u2018When\u2019 \u2014 the waters and fire are assumed", "Neither"], correct:1, explain:"God never promises the absence of deep water; He promises company inside it." },
        { q:"What is the basis of \u2018do not fear\u2019?", opts:["Positive thinking", "Redemption, being summoned by name, and belonging \u2014 \u2018you are mine\u2019", "Good odds"], correct:1, explain:"The command rests on relationship, not on circumstances improving." },
        { q:"What reason does God give in verse 4?", opts:["Their usefulness", "\u2018You are precious and honored in my sight, and I love you\u2019", "Their obedience"], correct:1, explain:"Value assigned by the One doing the valuing \u2014 not earned by performance." }
      ],
      deepDive: "Isaiah 43:2 has walked with people through hospital corridors, funerals, and bankruptcies for centuries, and its honesty is why. It doesn't promise dry ground; it says 'when you pass through' \u2014 the waters are coming, and the fire is real. What's promised is presence and preservation: not swept away, not consumed. Notice also the grammar of belonging stacked in verse 1 \u2014 created you, formed you, redeemed you, summoned you by name, you are mine. Fear is answered not by information about the future but by clarity about whose you are." },
    { id:184, book:"Isaiah", title:"The suffering servant", side:"l",
      passage: "The most quoted chapter in the New Testament: \u201cHe was despised and rejected by mankind, a man of suffering, and familiar with pain... Surely he took up our pain and bore our suffering, yet we considered him punished by God, stricken by him, and afflicted. But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed. We all, like sheep, have gone astray... and the LORD has laid on him the iniquity of us all.\u201d",
      keyVerses: [
        { ref: "Isaiah 53:5", text: "But he was pierced for our transgressions, he was crushed for our iniquities; the punishment that brought us peace was on him, and by his wounds we are healed." }
      ],
      questions: [
        { q:"What is the servant's suffering FOR?", opts:["His own sins", "Ours \u2014 pierced for our transgressions, bearing our iniquity", "No reason given"], correct:1, explain:"Substitution is the chapter's engine: he takes what belonged to others." },
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
        { q:"Who is the invitation for?", opts:["The wealthy", "The thirsty and those with no money \u2014 need is the only qualification", "The religious elite"], correct:1, explain:"The single entry requirement is thirst; the price has already been handled." },
        { q:"What question does verse 2 ask?", opts:["Why work at all?", "Why spend money on what isn't bread and labor on what doesn't satisfy?", "Why give to the poor?"], correct:1, explain:"A diagnosis of misdirected appetite \u2014 paying for what can't feed you." },
        { q:"What is promised to those who return?", opts:["A probation period", "Free and abundant pardon \u2014 \u2018he will freely pardon\u2019", "Nothing certain"], correct:1, explain:"The Hebrew suggests pardon in abundance, not grudging minimum." }
      ],
      deepDive: "Isaiah 55 is the Old Testament's great open invitation, and its economics are deliberately absurd: come buy, without money, without cost. That paradox is the point \u2014 the transaction happened somewhere else (chapter 53 just told you where), so what remains is simply coming. Verse 2's question is worth carrying: what am I currently paying for that doesn't feed me? Time, attention, money, energy \u2014 spent on things that leave you hungrier. And the chapter's closing image is one of Scripture's most hopeful: God's word going out like rain and snow, never returning empty, always accomplishing what it was sent to do." },
    { id:186, book:"Isaiah", title:"The Spirit of the Lord is on me", side:"c",
      passage: "\u201cThe Spirit of the Sovereign LORD is on me, because the LORD has anointed me to proclaim good news to the poor. He has sent me to bind up the brokenhearted, to proclaim freedom for the captives and release from darkness for the prisoners... to comfort all who mourn, and provide for those who grieve \u2014 to bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair.\u201d Centuries later, Jesus stood in a synagogue in Nazareth, read exactly this, and said: \u201cToday this scripture is fulfilled in your hearing.\u201d",
      keyVerses: [
        { ref: "Isaiah 61:3", text: "To bestow on them a crown of beauty instead of ashes, the oil of joy instead of mourning, and a garment of praise instead of a spirit of despair." }
      ],
      questions: [
        { q:"Who is the anointing aimed at serving?", opts:["Kings and nobles", "The poor, brokenhearted, captive, imprisoned, and grieving", "Priests"], correct:1, explain:"The mission is aimed downward \u2014 at exactly the people power usually overlooks." },
        { q:"What's the pattern of the exchanges in verse 3?", opts:["Loss for loss", "Beauty for ashes, joy for mourning, praise for despair \u2014 trades in the sufferer's favor", "Delay"], correct:1, explain:"Not erasure of grief but exchange \u2014 something better given in place of what was lost." },
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
        { q:"What is happening around them meanwhile?", opts:["Universal peace", "Darkness covering the earth \u2014 the light rises within the dark, not after it", "Nothing"], correct:1, explain:"The contrast is the point: light is most visible against the deepest dark." },
        { q:"What happens to the nations in this vision?", opts:["They're destroyed", "They come toward the light \u2014 drawn in, not driven out", "They ignore it"], correct:1, explain:"Isaiah's vision keeps widening beyond Israel \u2014 the light is for everyone who comes." }
      ],
      deepDive: "Isaiah 60 is written to a people who felt anything but radiant \u2014 which is why the command is 'arise' rather than 'become.' The light already came; the response is to get up into it. The chapter's most striking feature is its scope: nations streaming in, gates standing permanently open, and finally no need for sun or moon because God Himself is the light. Revelation picks up that exact image for the New Jerusalem at the Bible's very end. For anyone in a dark season, the sequencing is the comfort: darkness covers the earth, and the light rises anyway, right in the middle of it." },
    { id:188, book:"Isaiah", title:"New heavens and a new earth", side:"r",
      passage: "Isaiah's final vision: \u201cSee, I will create new heavens and a new earth. The former things will not be remembered... I will create Jerusalem to be a delight and its people a joy. I will rejoice over Jerusalem and take delight in my people; the sound of weeping and of crying will be heard in it no more.\u201d People will build houses and live in them, plant vineyards and eat their fruit \u2014 no more labor stolen by others. \u201cThe wolf and the lamb will feed together... They will neither harm nor destroy on all my holy mountain.\u201d",
      keyVerses: [
        { ref: "Isaiah 65:17", text: "See, I will create new heavens and a new earth. The former things will not be remembered." }
      ],
      questions: [
        { q:"What ends in the new creation?", opts:["Work and joy", "Weeping, crying, and stolen labor \u2014 the ache of a broken world", "Community"], correct:1, explain:"Not an escape from life but life without its griefs and injustices." },
        { q:"What continues in the new creation?", opts:["Nothing", "Building, planting, working \u2014 meaningful labor that isn't taken from you", "Only rest"], correct:1, explain:"Isaiah's picture isn't idleness on clouds; it's ordinary good work finally secure." },
        { q:"What does the wolf-and-lamb image convey?", opts:["Zoology", "Reconciliation so deep even natural hostility ends", "A parable about kings"], correct:1, explain:"Peace pictured at every level \u2014 not merely absence of war but the healing of hostility itself." }
      ],
      deepDive: "Isaiah ends where the Bible ends: a new creation. What's striking is how earthy it is \u2014 houses, vineyards, work, neighborhoods \u2014 not a disembodied elsewhere but this world healed. What's removed is precise: weeping, premature death, and the theft of your labor by someone else. And the wolf lying down with the lamb pictures peace so complete that even instinctive hostility is undone. Revelation 21 quotes this chapter nearly word for word. For a book that opened with a lawsuit over injustice, ending here is the whole argument: God's intention was never merely to forgive the world but to remake it." },
    { id:189, book:"Jeremiah", title:"Before I formed you", side:"c",
      passage: "\u201cThe word of the LORD came to me, saying, \u2018Before I formed you in the womb I knew you, before you were born I set you apart; I appointed you as a prophet to the nations.\u2019\u201d Jeremiah objected: \u201cI do not know how to speak; I am too young.\u201d God's answer removed the excuse and the fear together: \u201cDo not say, \u2018I am too young.\u2019 You must go to everyone I send you to and say whatever I command you. Do not be afraid of them, for I am with you and will rescue you.\u201d Then He touched Jeremiah's mouth and put His words there.",
      keyVerses: [
        { ref: "Jeremiah 1:5", text: "Before I formed you in the womb I knew you, before you were born I set you apart." }
      ],
      questions: [
        { q:"When did God's knowledge of Jeremiah begin?", opts:["At his calling", "Before he was formed in the womb", "When he became a prophet"], correct:1, explain:"The calling predates the man \u2014 identity assigned before any performance existed to earn it." },
        { q:"What was Jeremiah's objection?", opts:["He was too busy", "\u2018I do not know how to speak; I am too young\u2019", "He didn't believe"], correct:1, explain:"Inadequacy, the same objection Moses made \u2014 and God answers it the same way: I am with you." },
        { q:"What did God NOT promise him?", opts:["His presence", "An easy or successful ministry \u2014 Jeremiah preached forty years to a nation that wouldn't listen", "Rescue"], correct:1, explain:"He promised presence and rescue, not results \u2014 a distinction Jeremiah's whole life would test." }
      ],
      deepDive: "Jeremiah's call has comforted people for millennia \u2014 known before formed, set apart before born \u2014 but it's worth reading with his biography in view. This man would preach for forty years, be beaten, imprisoned, thrown in a cistern, and watch his warnings ignored until the city burned exactly as he said. God's promise was never that it would go well; it was 'I am with you.' That reframes the verse's comfort: being known and appointed before birth doesn't guarantee an easy road, it guarantees you're not on it alone. If you've measured your calling by its reception, Jeremiah is the correction." },
    { id:190, book:"Jeremiah", title:"Broken cisterns", side:"l",
      passage: "God brings a charge with a memorable image: \u201cMy people have committed two sins: They have forsaken me, the spring of living water, and have dug their own cisterns, broken cisterns that cannot hold water.\u201d In a desert land, a spring is endless and free; a cistern is a hand-dug pit that only holds what rain you catch \u2014 and a cracked one holds nothing at all. God isn't only grieved that they left; He's grieved by what they left Him for.",
      keyVerses: [
        { ref: "Jeremiah 2:13", text: "They have forsaken me, the spring of living water, and have dug their own cisterns, broken cisterns that cannot hold water." }
      ],
      questions: [
        { q:"What are the two sins named?", opts:["Lying and stealing", "Forsaking the spring, and digging broken cisterns to replace it", "Idolatry alone"], correct:1, explain:"Leaving is the first; the substitute is the second \u2014 and the substitute is the tragedy." },
        { q:"Why is the spring-versus-cistern contrast so sharp?", opts:["Cisterns are expensive", "A spring is living and endless; a cistern is hand-dug, limited, and this one leaks", "They're equivalent"], correct:1, explain:"Enormous labor spent to produce something vastly worse than what was free." },
        { q:"What does the image say about idolatry generally?", opts:["It's satisfying", "It's exhausting work that can't hold what you put in it", "It's harmless"], correct:1, explain:"Whatever you substitute for God requires constant digging and still runs dry." }
      ],
      deepDive: "This is one of Scripture's most useful images for anything that has quietly taken God's place. Notice what God grieves: not just the leaving, but the trade. A spring requires nothing of you and never stops; a cistern is a pit you carve out of rock by hand, that holds only what falls into it, and if it cracks it holds nothing. That's a precise description of how substitutes work \u2014 enormous effort, diminishing returns, chronic thirst. The honest question today: what am I currently digging that keeps not holding water?" },
    { id:191, book:"Jeremiah", title:"The potter's house", side:"r",
      passage: "God sends Jeremiah to a potter's house to watch him work. \u201cBut the pot he was shaping from the clay was marred in his hands; so the potter formed it into another pot, shaping it as seemed best to him.\u201d Then the word: \u201cCan I not do with you, Israel, as this potter does? Like clay in the hand of the potter, so are you in my hand.\u201d The message carries both warning and hope \u2014 God announces that if a nation He warned turns from its evil, He will relent from the disaster He planned.",
      keyVerses: [
        { ref: "Jeremiah 18:6", text: "Like clay in the hand of the potter, so are you in my hand." }
      ],
      questions: [
        { q:"What did the potter do with the marred pot?", opts:["Threw it away", "Reformed it into another pot", "Sold it damaged"], correct:1, explain:"The clay stayed on the wheel \u2014 marring led to remaking, not discarding." },
        { q:"What does the image say about God's sovereignty?", opts:["It's arbitrary", "He has the right and skill to shape \u2014 and He responds to how the clay responds", "It doesn't apply to nations"], correct:1, explain:"The chapter explicitly ties His action to repentance: turn, and the announced disaster is relented." },
        { q:"What is the hopeful edge of this image?", opts:["Ruined is final", "A marred vessel isn't a wasted one \u2014 it goes back on the wheel", "The potter gives up"], correct:1, explain:"For anyone who feels beyond repair, the potter's response is remaking, not the trash heap." }
      ],
      deepDive: "The potter image gets used to teach God's absolute rights over us, and it does teach that \u2014 but the scene Jeremiah actually watched is gentler than the sermon usually is. The pot was marred while being made, and the potter didn't discard it; he pressed it down and started again with the same clay. Then God ties the whole thing to response: warn a nation, and if it turns, He relents. Sovereignty and responsiveness held together. If something in your life feels ruined past use, the workshop's lesson is that the clay is still on the wheel and still in skilled hands." },
    { id:192, book:"Jeremiah", title:"Plans to give you hope", side:"c",
      passage: "Jeremiah writes a letter to the exiles already in Babylon \u2014 and the counsel is startling: don't wait to live. \u201cBuild houses and settle down; plant gardens and eat what they produce... Seek the peace and prosperity of the city to which I have carried you into exile. Pray to the LORD for it.\u201d Then the famous promise: \u201cFor I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.\u201d The context: seventy years of exile first.",
      keyVerses: [
        { ref: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future." }
      ],
      questions: [
        { q:"Who received this promise, and where?", opts:["Free people in Jerusalem", "Exiles in Babylon \u2014 facing seventy years before return", "Kings"], correct:1, explain:"The most quoted comfort verse in the Bible was addressed to people whose situation would not improve for a lifetime." },
        { q:"What did God tell the exiles to do meanwhile?", opts:["Wait passively", "Build, plant, marry, and seek the good of the city that held them", "Plan an escape"], correct:1, explain:"Live fully where you are \u2014 even a temporary place deserves your full presence." },
        { q:"What does the context add to verse 11?", opts:["It weakens it", "It strengthens it \u2014 God's good plans operate on timelines longer than our preferences", "Nothing"], correct:1, explain:"Not a promise of quick relief, but of a good ending that outlasts a long hard middle." }
      ],
      deepDive: "Jeremiah 29:11 shows up on coffee mugs and graduation cards, usually stripped of everything that makes it powerful. It was written to people in a foreign capital, told plainly that they'd be there seventy years \u2014 most would die in exile \u2014 and instructed to build houses, plant gardens, and pray for the city that conquered them. That's the setting of 'plans to prosper you.' Read there, it stops being a promise of quick rescue and becomes something sturdier: God's good purposes run on timelines that outlast our patience, and the right response to a long middle is to live fully inside it." },
    { id:193, book:"Jeremiah", title:"Fire in my bones", side:"l",
      passage: "Jeremiah's most raw prayer, after being beaten and put in stocks: \u201cYou deceived me, LORD, and I was deceived... I am ridiculed all day long; everyone mocks me.\u201d He tries to quit: \u201cBut if I say, \u2018I will not mention his word or speak anymore in his name,\u2019 his word is in my heart like a fire, a fire shut up in my bones. I am weary of holding it in; indeed, I cannot.\u201d In the same passage he swings to praise \u2014 \u201cSing to the LORD! Give praise to the LORD!\u201d \u2014 and then to cursing the day he was born.",
      keyVerses: [
        { ref: "Jeremiah 20:9", text: "His word is in my heart like a fire, a fire shut up in my bones. I am weary of holding it in; indeed, I cannot." }
      ],
      questions: [
        { q:"What is remarkable about Jeremiah's complaint?", opts:["Its politeness", "Its rawness \u2014 he accuses God directly, and Scripture preserves it", "Its brevity"], correct:1, explain:"Like Job and the psalms of lament, the Bible keeps the unedited version of faithful anguish." },
        { q:"Why couldn't he quit?", opts:["Contract obligations", "God's word burned in him like fire shut up in his bones", "Fear of punishment"], correct:1, explain:"Silence cost him more than speaking did \u2014 the calling wouldn't stay buried." },
        { q:"What do the mood swings in this chapter show?", opts:["Instability disqualifying him", "That praise and despair can coexist in a faithful life", "That he lost his faith"], correct:1, explain:"Within a few verses: accusation, praise, and cursing his birthday \u2014 all preserved as honest faith." }
      ],
      deepDive: "Jeremiah 20 is one of the most emotionally honest passages in Scripture. He accuses God of deceiving him, describes being mocked all day, tries to resign \u2014 and finds he can't, because the word burns. Then, astonishingly, he breaks into praise, and a few lines later curses the day he was born. No editor smoothed this out, which is itself the lesson: faith is not the absence of that turbulence. If you've ever felt both 'I can't do this anymore' and 'I can't walk away from this' in the same hour, Jeremiah wrote it down first." },
    { id:194, book:"Jeremiah", title:"A new covenant", side:"r",
      passage: "In the middle of a book about collapse, God promises something entirely new: \u201cThe days are coming, declares the LORD, when I will make a new covenant with the people of Israel... It will not be like the covenant I made with their ancestors... I will put my law in their minds and write it on their hearts. I will be their God, and they will be my people... For I will forgive their wickedness and will remember their sins no more.\u201d",
      keyVerses: [
        { ref: "Jeremiah 31:33", text: "I will put my law in their minds and write it on their hearts. I will be their God, and they will be my people." }
      ],
      questions: [
        { q:"How is the new covenant different?", opts:["Stricter rules", "The law written on hearts, not tablets \u2014 internal, not merely external", "Fewer commands"], correct:1, explain:"The problem was never the law's content but the human heart's capacity \u2014 so God addresses the heart." },
        { q:"What happens to sins under it?", opts:["They're tracked carefully", "Forgiven, and remembered no more", "Punished later"], correct:1, explain:"Deliberate forgetting by the One who forgets nothing accidentally \u2014 the strongest possible pardon." },
        { q:"Where does the New Testament use this passage?", opts:["Nowhere", "Hebrews quotes it in full, and Jesus invokes it at the Last Supper", "Only in Revelation"], correct:1, explain:"\u2018This cup is the new covenant in my blood\u2019 \u2014 Jesus names this promise as arriving." }
      ],
      deepDive: "This is the mountaintop of Jeremiah, and it comes from a prophet whose entire career was announcing collapse. The diagnosis behind it runs through the whole Old Testament: a law outside a person can direct but can't change them. So God promises to move it inside \u2014 written on hearts \u2014 along with universal knowledge of Him and forgiveness so complete He describes it as forgetting. Hebrews quotes this chapter at length, and Jesus reached for its language over a cup on the night before He died. Everything the Bible calls 'new covenant' starts as a promise spoken over a burning city." },
    { id:195, book:"Jeremiah", title:"The city falls", side:"c",
      passage: "After forty years of warnings, it happened exactly as Jeremiah said: Babylon breached the walls, the temple was burned, the king's sons were killed before his eyes, and the people were carried into exile. Jeremiah, offered safety in Babylon, chose to stay with the poorest who remained in the land. His warnings had been ignored, his career looked like failure, and every word he spoke came true \u2014 which brought him no satisfaction at all, only grief for the city he loved.",
      keyVerses: [
        { ref: "Jeremiah 39:18", text: "I will save you; you will not fall by the sword but will escape with your life, because you trust in me, declares the LORD." }
      ],
      questions: [
        { q:"How did Jeremiah's forty years of preaching end?", opts:["National revival", "The exact judgment he warned about \u2014 the city fell", "Him being honored"], correct:1, explain:"He was right, and it brought him no vindication he wanted \u2014 only the grief of being right." },
        { q:"What did Jeremiah choose when offered comfort in Babylon?", opts:["He took it", "He stayed in the ruined land with the poorest who remained", "He fled to Egypt alone"], correct:1, explain:"Given an exit, the weeping prophet stayed with the people who had nothing." },
        { q:"What does his life say about faithfulness?", opts:["It guarantees results", "It's measured by obedience, not by whether people listen", "It's easy"], correct:1, explain:"By any modern metric his ministry failed; by Scripture's, he is one of its great successes." }
      ],
      deepDive: "Jeremiah is the Bible's hardest case study in faithfulness without visible results. Forty years of preaching, no national repentance, a burned city, and a prophet who wept over the very people who mocked him. The temptation is to read the fall as vindication \u2014 but the book won't let you; he grieved rather than gloated. What his life quietly asks is whether you can define faithfulness without reference to outcomes. If your only measure is response, Jeremiah's career is a failure. If the measure is obedience under sustained discouragement, he stands near the top of Scripture." },
    { id:196, book:"Lamentations", title:"How lonely sits the city", side:"l",
      passage: "Five poems written in the ashes of Jerusalem \u2014 grief with no rush to feel better. \u201cHow deserted lies the city, once so full of people! How like a widow is she, who once was great among the nations!... She weeps bitterly in the night, tears are on her cheeks. Among all her lovers there is no one to comfort her.\u201d Nothing is minimized \u2014 the hunger, the ruined temple, the children, the shame \u2014 and nothing is explained away. Grief is given a full book and permitted to speak.",
      keyVerses: [
        { ref: "Lamentations 1:12", text: "Is it nothing to you, all you who pass by? Look around and see. Is any suffering like my suffering?" }
      ],
      questions: [
        { q:"What is Lamentations?", opts:["A history", "Five poems of grief over Jerusalem's destruction", "A collection of laws"], correct:1, explain:"Scripture devotes a whole book to sustained mourning \u2014 no plot, no resolution, just honest lament." },
        { q:"How does the book handle the pain?", opts:["Minimizes it", "Names it fully, in detail, without hurrying to comfort", "Blames the victims only"], correct:1, explain:"It refuses to shorten grief \u2014 which is why grieving people have found it trustworthy for millennia." },
        { q:"Why does a book like this belong in the Bible?", opts:["To depress readers", "Because faith includes lament \u2014 God gives grief its own language", "By accident"], correct:1, explain:"Scripture doesn't require you to feel fine before you speak to God." }
      ],
      deepDive: "Lamentations exists because Scripture takes grief seriously enough to give it structure. The poems are acrostics \u2014 each stanza starting with successive Hebrew letters \u2014 which sounds academic until you consider what it means: grief so overwhelming it needed a form to hold it, A to Z, all of it. Nothing here is rushed. There's no 'everything happens for a reason,' no early comfort, no minimizing. For anyone who has been handed a tidy explanation while their world was still burning, this book is the Bible's answer: sit down, say all of it, take as long as you need." },
    { id:197, book:"Lamentations", title:"Great is your faithfulness", side:"r",
      passage: "At the exact center of the five poems, in the middle of the darkest one, the turn comes: \u201cYet this I call to mind and therefore I have hope: Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness. I say to myself, \u2018The LORD is my portion; therefore I will wait for him.\u2019\u201d The verses just before it describe a man who has forgotten what happiness is. Hope here is not a mood \u2014 it is something deliberately called to mind.",
      keyVerses: [
        { ref: "Lamentations 3:22\u201323", text: "Because of the LORD\u2019s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." }
      ],
      questions: [
        { q:"Where does this famous passage sit?", opts:["At the happy ending", "At the center of the book \u2014 surrounded by unresolved grief", "In an appendix"], correct:1, explain:"Hope appears inside the lament, not after it \u2014 the ruins are still smoking on both sides of it." },
        { q:"How does hope arrive here?", opts:["As a feeling", "By deliberate recall \u2014 \u2018this I call to mind\u2019", "Through circumstances improving"], correct:1, explain:"He chooses what to remember when he can't choose what to feel." },
        { q:"How often are God's mercies renewed?", opts:["Yearly", "Every morning", "Once for all"], correct:1, explain:"A fresh supply daily \u2014 yesterday's failures don't carry over into today's mercy." }
      ],
      deepDive: "The most famous hymn line in this passage \u2014 great is your faithfulness \u2014 was written by a man who two verses earlier said his splendor was gone and his hope had perished. That's what makes it trustworthy. The mechanism is worth copying exactly: 'yet this I call to mind and therefore I have hope.' He doesn't wait to feel hopeful; he deliberately recalls something true and lets hope follow. And the promise is sized for exactly this kind of season \u2014 not a one-time rescue but mercies renewed each morning, enough for one day, arriving again tomorrow." },
    { id:198, book:"Lamentations", title:"Restore us to yourself", side:"c",
      passage: "The final poem is a prayer with no guarantees attached: \u201cRemember, LORD, what has happened to us; look, and see our disgrace... Our hearts are faint, our eyes grow dim... You, LORD, reign forever; your throne endures from generation to generation. Why do you always forget us? Why do you forsake us so long? Restore us to yourself, LORD, that we may return; renew our days as of old \u2014 unless you have utterly rejected us and are angry with us beyond measure.\u201d The book ends on that unresolved note.",
      keyVerses: [
        { ref: "Lamentations 5:21", text: "Restore us to yourself, LORD, that we may return; renew our days as of old." }
      ],
      questions: [
        { q:"How does the book end?", opts:["With full resolution", "With an unresolved plea \u2014 restore us, unless you have rejected us", "With a celebration"], correct:1, explain:"Scripture allows a book to end in the middle of waiting \u2014 because sometimes life does." },
        { q:"What's the direction of the request in 5:21?", opts:["Restore our fortunes", "Restore us to YOURSELF \u2014 relationship before circumstances", "Restore the buildings"], correct:1, explain:"The deepest loss named isn't the city but the closeness \u2014 and that's what's asked for first." },
        { q:"What do they affirm even while complaining?", opts:["Nothing", "\u2018You, LORD, reign forever\u2019 \u2014 God's throne endures regardless", "That they deserved better"], correct:1, explain:"Lament here holds two things: God still reigns, and this still hurts." }
      ],
      deepDive: "It takes courage for a book of the Bible to end like this \u2014 no restoration scene, no epilogue, just a request and a shadow of doubt. But that honesty is a gift to anyone still waiting. Notice what they actually ask for: not the city back, not comfort, but restoration to God Himself \u2014 and even that request admits it requires His initiative first ('restore us... that we may return'). Lamentations leaves the door open rather than shutting it, which is exactly where a lot of real faith lives: still asking, not yet answered, and still addressing the God who reigns." },
    { id:199, book:"Daniel", title:"Resolved not to defile himself", side:"l",
      passage: "Taken as a teenager from Jerusalem to Babylon, Daniel was enrolled in a three-year program designed to remake him \u2014 new language, new literature, even a new name. \u201cBut Daniel resolved not to defile himself with the royal food and wine.\u201d He asked respectfully for a ten-day test on vegetables and water. At the end they looked healthier than all the others. God gave the four young men knowledge and understanding, and when the king examined them, \u201che found none equal to Daniel, Hananiah, Mishael and Azariah.\u201d",
      keyVerses: [
        { ref: "Daniel 1:8", text: "But Daniel resolved not to defile himself with the royal food and wine." }
      ],
      questions: [
        { q:"What did Babylon's program aim to do?", opts:["Educate fairly", "Remake their identity \u2014 language, literature, and even their names", "Punish them"], correct:1, explain:"Assimilation by immersion; Daniel accepted the education and drew a line at the table." },
        { q:"How did Daniel handle his objection?", opts:["Public protest", "A respectful request and a proposed ten-day test", "Secret disobedience"], correct:1, explain:"Conviction delivered with courtesy \u2014 he neither compromised nor grandstanded." },
        { q:"What's notable about where he drew the line?", opts:["He refused everything Babylonian", "He accepted much and drew a firm line at one specific point", "He drew no lines"], correct:1, explain:"Wisdom in exile: engage the culture deeply, and know precisely where you won't bend." }
      ],
      deepDive: "Daniel 1 is a masterclass in living faithfully inside a culture that isn't yours. He learns the language, studies the literature, serves the government, and answers to a Babylonian name \u2014 and then draws one clear line and holds it without a speech. Notice the manner: he 'asked permission,' proposed a test, and made it easy for the official to say yes. Conviction without obnoxiousness is rarer than either compromise or grandstanding. And the line came early \u2014 decided before the pressure, which is why it held. Where's your line, and did you settle it in advance?" },
    { id:200, book:"Daniel", title:"The dream and the stone", side:"r",
      passage: "Nebuchadnezzar demanded that his wise men tell him both his dream and its meaning \u2014 on pain of death. Daniel asked for time, gathered his friends to pray, and God revealed it. The dream: a great statue of gold, silver, bronze, iron, and clay \u2014 successive kingdoms. Then \u201ca rock was cut out, but not by human hands,\u201d struck the statue, shattered it, and \u201cbecame a huge mountain and filled the whole earth.\u201d Daniel's interpretation: \u201cThe God of heaven will set up a kingdom that will never be destroyed.\u201d",
      keyVerses: [
        { ref: "Daniel 2:44", text: "The God of heaven will set up a kingdom that will never be destroyed... it will itself endure forever." }
      ],
      questions: [
        { q:"What did Daniel do before interpreting?", opts:["Consulted astrologers", "Asked for time and gathered his friends to pray for mercy", "Guessed"], correct:1, explain:"The first move in a life-or-death crisis was a prayer meeting \u2014 and he credited God publicly after." },
        { q:"What did the rock \u2018not cut by human hands\u2019 represent?", opts:["Another empire", "God's kingdom \u2014 not of human origin, and permanent", "An earthquake"], correct:1, explain:"Every human kingdom in the statue eventually shatters; the one from outside human hands fills the earth." },
        { q:"What comfort did this give exiles?", opts:["Babylon would last forever", "Empires rise and fall on a schedule God knows \u2014 and His kingdom outlasts them all", "They'd rule Babylon"], correct:1, explain:"To captives of a superpower, the message was that even this empire was temporary." }
      ],
      deepDive: "Daniel 2 is the political theology of the whole book: empires are real, powerful, and temporary. To exiles living under the world's dominant superpower, that was the most subversive message imaginable. The statue's descending materials \u2014 gold down to iron mixed with clay \u2014 picture kingdoms increasingly impressive and increasingly brittle, and the stone that ends them isn't quarried by anyone. Notice too how Daniel handled the crisis: prayer first, credit given publicly to God second, career advancement a distant third. He was elevated because he refused to take the credit." },
    { id:201, book:"Daniel", title:"But if not", side:"c",
      passage: "The king built a golden image and commanded everyone to bow. Three men would not. Given one final chance and threatened with a blazing furnace, they answered: \u201cIf we are thrown into the blazing furnace, the God we serve is able to deliver us from it, and he will deliver us from Your Majesty's hand. But even if he does not, we want you to know, Your Majesty, that we will not serve your gods.\u201d The furnace was heated seven times hotter \u2014 and the king saw four men walking in the fire, \u201cand the fourth looks like a son of the gods.\u201d",
      keyVerses: [
        { ref: "Daniel 3:17\u201318", text: "The God we serve is able to deliver us... But even if he does not, we will not serve your gods." }
      ],
      questions: [
        { q:"What makes \u2018but even if he does not\u2019 so important?", opts:["It shows doubt", "Their obedience didn't depend on being rescued", "It's a bargaining position"], correct:1, explain:"Faith that requires a guaranteed outcome isn't faith \u2014 they settled that before the furnace." },
        { q:"What did the king see in the fire?", opts:["Three men burning", "Four men walking unbound \u2014 the fourth like a son of the gods", "Nothing"], correct:1, explain:"They weren't spared the fire; they were accompanied inside it." },
        { q:"What burned in the story?", opts:["The three men", "Only the ropes that bound them \u2014 and the soldiers who threw them in", "The furnace itself"], correct:1, explain:"The fire consumed their restraints and nothing else \u2014 a detail the text points out." }
      ],
      deepDive: "Three words carry this chapter: 'but if not.' The men state their confidence that God can rescue them, and then refuse to make their obedience conditional on it. That's the difference between faith and a transaction. And the deliverance, when it comes, isn't what they asked for \u2014 they aren't kept out of the furnace, they're met inside it, and the only thing the fire destroys is what was binding them. If you're praying for rescue from something right now, this chapter offers both possibilities honestly, and insists the answer doesn't change what you owe God." },
    { id:202, book:"Daniel", title:"The king who became an animal", side:"l",
      passage: "Nebuchadnezzar dreams of a great tree cut down. Daniel, distressed, tells him the truth: the tree is the king, and unless he repents he will lose his mind and live like an animal until he acknowledges \u201cthat the Most High is sovereign over all kingdoms on earth.\u201d Daniel urges him to renounce his sins by doing right and showing mercy to the oppressed. Twelve months later, surveying his city, the king said, \u201cIs not this the great Babylon I have built by my mighty power?\u201d The words were still on his lips when it happened.",
      keyVerses: [
        { ref: "Daniel 4:37", text: "Those who walk in pride he is able to humble." }
      ],
      questions: [
        { q:"What did Daniel urge the king to do?", opts:["Nothing", "Renounce his sins by doing right and showing mercy to the oppressed", "Abdicate"], correct:1, explain:"The prescribed repentance was practical justice, not merely private regret." },
        { q:"What triggered the judgment?", opts:["A military defeat", "A boast \u2014 \u2018the great Babylon I have built by my mighty power\u2019", "A dream"], correct:1, explain:"Twelve months of grace passed first; the sentence fell mid-sentence of self-congratulation." },
        { q:"How does the chapter end?", opts:["With the king's death", "With Nebuchadnezzar restored, praising God \u2014 a pagan king's testimony", "With Babylon destroyed"], correct:1, explain:"The most powerful man alive writes the chapter himself, ending with praise for the God who humbled him." }
      ],
      deepDive: "The strangest feature of Daniel 4 is its narrator: much of it is written in Nebuchadnezzar's own voice, a public royal testimony about losing his mind and finding God. Two details deserve attention. First, the twelve months of grace between the warning and the fall \u2014 judgment in Scripture is almost always slower than we expect. Second, Daniel's prescribed remedy: mercy to the oppressed. In the Bible, the cure for pride is rarely introspection; it's turning outward toward people you'd been overlooking. And the ending is genuinely startling \u2014 Babylon's emperor, restored, praising the God of his captives." },
    { id:203, book:"Daniel", title:"The writing on the wall", side:"r",
      passage: "At a feast, King Belshazzar drank from the goblets looted from God's temple and praised gods of gold and stone. \u201cSuddenly the fingers of a human hand appeared and wrote on the plaster of the wall.\u201d The king's face went pale, his knees knocked. Daniel was summoned and refused the rewards before interpreting: MENE, MENE, TEKEL, PARSIN \u2014 numbered, weighed, divided. \u201cYou have been weighed on the scales and found wanting.\u201d Daniel added the charge: you knew what happened to Nebuchadnezzar, \u201cbut you did not humble yourself.\u201d That very night the king was slain.",
      keyVerses: [
        { ref: "Daniel 5:27", text: "TEKEL: You have been weighed on the scales and found wanting." }
      ],
      questions: [
        { q:"What made Belshazzar's feast an offense?", opts:["Its expense", "Drinking from the looted temple goblets while praising idols", "The guest list"], correct:1, explain:"Deliberate desecration \u2014 using holy things as props for mocking their God." },
        { q:"What was the added charge against him?", opts:["Poor governance", "He knew Nebuchadnezzar's story and didn't humble himself", "Military failure"], correct:1, explain:"He had the lesson available in living memory and ignored it \u2014 knowledge without response." },
        { q:"What did Daniel do about the offered rewards?", opts:["Demanded more", "Refused them before interpreting \u2014 then told the truth anyway", "Accepted quietly"], correct:1, explain:"An old man now, Daniel makes clear his message isn't for sale." }
      ],
      deepDive: "'The writing on the wall' entered the English language from this chapter, and the phrase's meaning is right: a verdict that has already been rendered. What's sharpest here is the added charge in verse 22 \u2014 'you knew all this, but you did not humble yourself.' Belshazzar's problem wasn't ignorance; his grandfather's humiliation was family history. Available truth, unapplied, is its own indictment. And notice the aged Daniel refusing the purple robe and gold chain before speaking. Sixty years into exile, he still couldn't be bought." },
    { id:204, book:"Daniel", title:"The lions' den", side:"c",
      passage: "Now in his eighties and about to be promoted over the whole kingdom, Daniel drew jealous enemies who could find no corruption in him \u2014 \u201cwe will never find any basis for charges against this man Daniel unless it has something to do with the law of his God.\u201d They tricked the king into outlawing prayer for thirty days. \u201cNow when Daniel learned that the decree had been published, he went home to his upstairs room where the windows opened toward Jerusalem. Three times a day he got down on his knees and prayed, just as he had done before.\u201d",
      keyVerses: [
        { ref: "Daniel 6:10", text: "Three times a day he got down on his knees and prayed, giving thanks to his God, just as he had done before." }
      ],
      questions: [
        { q:"What could Daniel's enemies find against him?", opts:["Corruption and fraud", "Nothing \u2014 except his faithfulness to God", "Poor performance"], correct:1, explain:"Decades in politics under four rulers, and his opponents' research turned up a clean record." },
        { q:"What phrase describes his response to the decree?", opts:["He prayed louder", "\u2018Just as he had done before\u2019 \u2014 no change at all", "He prayed secretly"], correct:1, explain:"He neither hid nor escalated \u2014 the habit built over decades simply continued." },
        { q:"How did the king react?", opts:["He celebrated", "He was distressed all night, fasting, and rushed to the den at dawn", "He was indifferent"], correct:1, explain:"Trapped by his own law, the king spent the night sleepless over the man he'd condemned." }
      ],
      deepDive: "Notice what the story doesn't say: Daniel didn't pray harder, or make a statement, or hide. He prayed 'just as he had done before' \u2014 the crisis revealed a habit rather than creating a decision. That's the chapter's quiet argument: what you'll do under pressure is mostly determined by what you were already doing without it. He was in his eighties, and the windows still opened toward Jerusalem, three times a day, decades after that city fell. And his enemies' investigation is its own testimony \u2014 a lifetime in a corrupt government with nothing to find." },
    { id:205, book:"Daniel", title:"One like a son of man", side:"l",
      passage: "Daniel's own visions begin \u2014 four beasts rising from the sea, empires in monstrous form. Then the scene shifts to a throne room: \u201cthe Ancient of Days took his seat. His clothing was as white as snow... thousands upon thousands attended him.\u201d And then: \u201cThere before me was one like a son of man, coming with the clouds of heaven. He approached the Ancient of Days and was led into his presence. He was given authority, glory and sovereign power... his dominion is an everlasting dominion that will not pass away.\u201d",
      keyVerses: [
        { ref: "Daniel 7:14", text: "His dominion is an everlasting dominion that will not pass away, and his kingdom is one that will never be destroyed." }
      ],
      questions: [
        { q:"How are the empires pictured?", opts:["As noble kings", "As beasts rising from the sea \u2014 predatory and chaotic", "As gardens"], correct:1, explain:"Daniel 2 showed empires as an impressive statue; Daniel 7 shows what they look like from heaven's side." },
        { q:"Who approaches the Ancient of Days?", opts:["An angel", "\u2018One like a son of man\u2019 \u2014 human in appearance, given everlasting dominion", "A prophet"], correct:1, explain:"A human figure receiving universal, eternal authority \u2014 unique in the Old Testament." },
        { q:"Why does this title matter in the Gospels?", opts:["It doesn't", "\u2018Son of Man\u2019 was Jesus' most frequent self-designation \u2014 drawn from this vision", "It refers to Daniel"], correct:1, explain:"A title that sounds humble and quietly claims this throne room scene." }
      ],
      deepDive: "Daniel 7 pairs with Daniel 2 and reveals the difference in perspective: from the ground, empires look like a gleaming statue; from heaven, they look like beasts crawling out of the chaotic sea. Then the throne room, and a figure 'like a son of man' \u2014 human, in contrast to the beasts \u2014 receiving authority over every nation, forever. This is the passage behind Jesus' favorite name for Himself, and it's why the high priest tore his robes when Jesus quoted it at His trial: everyone in the room knew exactly which throne scene He was claiming." },
    { id:206, book:"Daniel", title:"Daniel's prayer", side:"r",
      passage: "Reading Jeremiah's scrolls, Daniel realizes the seventy years of exile are nearly up \u2014 and his response to a promise about to be fulfilled is to pray harder, not to relax. \u201cSo I turned to the Lord God and pleaded with him in prayer and petition, in fasting, and in sackcloth and ashes.\u201d His prayer says \u2018we\u2019 throughout: \u201cwe have sinned and done wrong... we have not listened.\u201d He asks nothing on the basis of merit: \u201cWe do not make requests of you because we are righteous, but because of your great mercy.\u201d",
      keyVerses: [
        { ref: "Daniel 9:18", text: "We do not make requests of you because we are righteous, but because of your great mercy." }
      ],
      questions: [
        { q:"What prompted Daniel's prayer?", opts:["A vision", "Reading Jeremiah and realizing the seventy years were nearly complete", "A royal decree"], correct:1, explain:"Scripture reading led directly to prayer \u2014 and a promise near fulfillment made him pray more, not less." },
        { q:"Whose sins does he confess?", opts:["Only the nation's, as an outsider", "\u2018We\u2019 \u2014 he includes himself throughout", "Only his own"], correct:1, explain:"One of Scripture's most upright men prays in the first person plural \u2014 identification, not accusation." },
        { q:"On what basis does he ask?", opts:["Israel's obedience", "God's great mercy alone \u2014 explicitly not their righteousness", "A bargain"], correct:1, explain:"He removes merit from the equation entirely, which is why the prayer has been a model ever since." }
      ],
      deepDive: "Daniel 9 answers a question people still ask: if God has promised something, why pray about it? Daniel's example is the reply \u2014 discovering the promise was nearly due drove him into fasting and sackcloth. Promises invite participation rather than replacing it. And notice the pronouns: a man whose enemies couldn't find a flaw prays 'we have sinned, we have not listened,' standing with his people rather than above them. Finally, verse 18 strips away every basis but one \u2014 not because we are righteous, but because of your great mercy. That sentence is where prayer actually stands." }
,
    { id:207, book:"Ezekiel", title:"Wheels and glory by the river", side:"c",
      passage: "Ezekiel was a priest in exile by the Kebar River in Babylon \u2014 far from the temple where a priest was supposed to serve. There, \u201cthe heavens were opened and I saw visions of God.\u201d A windstorm, immense wheels full of eyes, living creatures with four faces, and above it all a throne with a figure \u201clike that of a man\u201d surrounded by brilliant light. \u201cThis was the appearance of the likeness of the glory of the LORD. When I saw it, I fell facedown.\u201d The point was unmistakable to an exile: God's throne has wheels. He is not confined to Jerusalem.",
      keyVerses: [
        { ref: "Ezekiel 1:28", text: "This was the appearance of the likeness of the glory of the LORD. When I saw it, I fell facedown." }
      ],
      questions: [
        { q:"Where was Ezekiel when he saw this vision?", opts:["In the temple", "In exile by a river in Babylon", "On Mount Sinai"], correct:1, explain:"A priest with no temple, in a foreign land \u2014 and God's throne showed up anyway." },
        { q:"What's the significance of the wheels?", opts:["Decoration", "God's throne is mobile \u2014 He isn't tied to one place or one nation", "They represent chariots of war"], correct:1, explain:"For people convinced God stayed behind in Jerusalem, a rolling throne was the whole message." },
        { q:"What was Ezekiel's response?", opts:["He took notes calmly", "He fell facedown", "He fled"], correct:1, explain:"Same reaction as Isaiah and John \u2014 seeing God's glory puts a person on the floor." }
      ],
      deepDive: "Ezekiel's opening vision is famously strange, and the strangeness is doing something. He was a priest, trained for a temple he'd never serve in, living among people who assumed their God had stayed behind in the ruins of Jerusalem. Then the heavens open in Babylon \u2014 of all places \u2014 and the throne he sees has wheels, moving in any direction without turning. The theology is simple under all the fire and eyes: God is not local, not defeated, and not absent from the place you were carried to against your will. Whatever exile you're in, this vision insists it isn't outside His range." },
    { id:208, book:"Ezekiel", title:"The watchman", side:"l",
      passage: "God gave Ezekiel a job description with weight: \u201cSon of man, I have made you a watchman for the people of Israel; so hear the word I speak and give them warning from me.\u201d If a watchman sees the sword coming and stays silent, the blood is on his hands. If he sounds the trumpet and no one listens, he has saved himself. God adds His own heart on the matter: \u201cI take no pleasure in the death of the wicked, but rather that they turn from their ways and live. Turn! Turn from your evil ways!\u201d",
      keyVerses: [
        { ref: "Ezekiel 33:11", text: "I take no pleasure in the death of the wicked, but rather that they turn from their ways and live." }
      ],
      questions: [
        { q:"What is a watchman's job?", opts:["To fight the enemy", "To see danger coming and sound the warning", "To rule the city"], correct:1, explain:"Not to force a response \u2014 only to make sure the warning was actually given." },
        { q:"What happens if the watchman warns and no one listens?", opts:["He's responsible", "He has done his duty \u2014 the responsibility shifts", "He must warn again forever"], correct:1, explain:"Faithfulness is measured by the warning given, not the response received." },
        { q:"What does God say about His own attitude toward judgment?", opts:["He enjoys it", "He takes no pleasure in it \u2014 He wants people to turn and live", "He is indifferent"], correct:1, explain:"The most quoted line in Ezekiel, and the heart behind every warning in the book." }
      ],
      deepDive: "The watchman image has shaped how believers think about speaking hard truth for millennia, and it cuts both ways. It creates real responsibility \u2014 silence when you see danger isn't neutral \u2014 and it also sets a limit: the watchman controls the warning, never the response. That distinction has saved a lot of people from despair over those who wouldn't listen. And notice where God plants His own heart in the middle of a warning chapter: 'I take no pleasure in the death of the wicked.' The judgment in this book is real and reluctant. The invitation \u2014 turn and live \u2014 is the reason the warnings exist at all." },
    { id:209, book:"Ezekiel", title:"The valley of dry bones", side:"r",
      passage: "God set Ezekiel down in a valley full of bones \u2014 \u201cthey were very dry\u201d \u2014 and asked, \u201cSon of man, can these bones live?\u201d Ezekiel answered carefully: \u201cSovereign LORD, you alone know.\u201d Then: prophesy to the bones. As he spoke there was a rattling, and bones came together, tendons and flesh appeared, skin covered them \u2014 but no breath. He prophesied again to the breath, \u201cand they came to life and stood up on their feet \u2014 a vast army.\u201d The meaning: \u201cThese bones are the people of Israel. They say, \u2018Our hope is gone; we are cut off.\u2019\u201d",
      keyVerses: [
        { ref: "Ezekiel 37:5", text: "This is what the Sovereign LORD says to these bones: I will make breath enter you, and you will come to life." }
      ],
      questions: [
        { q:"What did the bones represent?", opts:["Literal graves", "Exiled Israel \u2014 people saying \u2018our hope is gone, we are cut off\u2019", "Enemy armies"], correct:1, explain:"The vision addresses the death of hope, not just physical death." },
        { q:"How did Ezekiel answer \u2018can these bones live?\u2019", opts:["\u2018No\u2019", "\u2018Sovereign LORD, you alone know\u2019", "\u2018Of course\u2019"], correct:1, explain:"Honest faith \u2014 he wouldn't claim certainty, and he wouldn't rule God out." },
        { q:"What was the two-stage process?", opts:["Bones assembled, then breath entered", "Breath first, then bones", "It happened instantly"], correct:0, explain:"Bodies were reassembled but lifeless until the breath came \u2014 structure isn't the same as life." }
      ],
      deepDive: "This is the Bible's greatest picture of hopelessness reversed. Note the detail: the bones were 'very dry' \u2014 not recently dead, long past any natural chance. And the diagnosis is quoted directly from the exiles' own mouths: 'our hope is gone; we are cut off.' God's response isn't a pep talk but a resurrection. The two stages matter too: bodies assembled but breathless, then the breath entering \u2014 the same word as spirit, and the same word from Genesis 2. Whatever in your life has been dead long enough to look permanent, this chapter's question is the one God asks: can these bones live? The honest answer is Ezekiel's \u2014 you alone know." },
    { id:210, book:"Ezekiel", title:"A new heart and a new spirit", side:"c",
      passage: "The promise underneath the whole book: \u201cI will sprinkle clean water on you, and you will be clean; I will cleanse you from all your impurities and from all your idols. I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh. And I will put my Spirit in you and move you to follow my decrees.\u201d And the reason given is startling: not because they deserved it, but \u201cfor the sake of my holy name.\u201d",
      keyVerses: [
        { ref: "Ezekiel 36:26", text: "I will give you a new heart and put a new spirit in you; I will remove from you your heart of stone and give you a heart of flesh." }
      ],
      questions: [
        { q:"What is replaced in this promise?", opts:["Their circumstances only", "The heart itself \u2014 stone exchanged for flesh", "Their leaders"], correct:1, explain:"God addresses the organ that kept failing, rather than issuing more instructions to a stone." },
        { q:"Who does the work?", opts:["The people, through effort", "God \u2014 every verb is \u2018I will\u2019", "A future king"], correct:1, explain:"Read the passage counting the \u2018I wills\u2019; human contribution isn't the mechanism here." },
        { q:"What reason does God give?", opts:["Their repentance earned it", "For the sake of His own holy name", "Their suffering was enough"], correct:1, explain:"Grace anchored in God's character rather than their performance \u2014 which is why it holds." }
      ],
      deepDive: "Ezekiel 36 is the twin of Jeremiah 31, and together they're the Old Testament's clearest promise of what the New Testament calls being born again. The problem all along was never that the law was unclear; it was that a heart of stone can't respond no matter how clear the instruction. So God promises a transplant \u2014 and adds His own Spirit as the power to actually walk in it. The most freeing detail is the stated reason: 'for the sake of my holy name.' If the promise depended on their record, it would collapse; because it rests on His character, it doesn't. Jesus assumed Nicodemus should have known this passage when He said 'you must be born again.'" },
    { id:211, book:"Ezekiel", title:"The shepherds of Israel", side:"l",
      passage: "God brings charges against Israel's leaders: \u201cWoe to you shepherds of Israel who only take care of yourselves! Should not shepherds take care of the flock?... You have not strengthened the weak or healed the sick or bound up the injured. You have not brought back the strays or searched for the lost.\u201d So God takes the job Himself: \u201cI myself will search for my sheep and look after them... I will bring back the strays and bind up the injured and strengthen the weak.\u201d",
      keyVerses: [
        { ref: "Ezekiel 34:11", text: "I myself will search for my sheep and look after them." }
      ],
      questions: [
        { q:"What was the shepherds' failure?", opts:["Poor teaching", "Caring for themselves instead of the flock \u2014 the weak, sick, injured, and lost neglected", "Military weakness"], correct:1, explain:"The indictment is specific and practical: those needing the most care got the least." },
        { q:"What does God do about it?", opts:["Appoints better shepherds only", "Takes the job Himself \u2014 \u2018I myself will search for my sheep\u2019", "Abandons the flock"], correct:1, explain:"The failure of human leadership becomes the occasion for God's direct care." },
        { q:"How does this connect to the New Testament?", opts:["It doesn't", "Jesus says \u2018I am the good shepherd\u2019 \u2014 claiming this chapter", "It refers only to David"], correct:1, explain:"John 10 reads as a direct claim on Ezekiel 34 \u2014 the shepherd God promised, arrived." }
      ],
      deepDive: "Ezekiel 34 is one of Scripture's most searching passages on leadership, and its test is simple: who is being cared for, and who is being used? The shepherds ate well, wore wool, and left the injured untended \u2014 leadership as consumption. God's response is the turn everything depends on: if the shepherds won't, He will, personally. Jesus reaches for this exact chapter in John 10 \u2014 'I am the good shepherd' \u2014 and adds what Ezekiel didn't say: the good shepherd lays down his life for the sheep. If you lead anything, the diagnostic here is the weak, sick, injured, and straying: are they better off because you're in charge?" },
    { id:212, book:"Ezekiel", title:"The glory departs \u2014 and returns", side:"r",
      passage: "In the book's most devastating scene, Ezekiel watches the glory of the LORD leave the temple by stages \u2014 from the ark, to the threshold, to the east gate, and finally to the mountain east of the city. God's presence, which had filled Solomon's temple, withdraws from a house that had filled itself with idols. But at the book's end, the vision reverses: \u201cI saw the glory of the God of Israel coming from the east... and the glory of the LORD entered the temple.\u201d The last words of the book name the restored city: \u201cTHE LORD IS THERE.\u201d",
      keyVerses: [
        { ref: "Ezekiel 48:35", text: "And the name of the city from that time on will be: THE LORD IS THERE." }
      ],
      questions: [
        { q:"How did the glory leave the temple?", opts:["Suddenly", "By stages \u2014 slowly, reluctantly, pausing along the way", "It never left"], correct:1, explain:"The text lingers on each stop; even judgment moves slowly in Ezekiel." },
        { q:"Why did the glory depart?", opts:["The building was too small", "The temple had been filled with idolatry \u2014 God will not share His house", "The people asked Him to"], correct:1, explain:"Chapters 8\u201310 tour the idolatry hidden inside the temple itself before the glory withdraws." },
        { q:"How does the book end?", opts:["In ruins", "With the glory returning and the city named \u2018THE LORD IS THERE\u2019", "In exile"], correct:1, explain:"Ezekiel's final word is presence restored \u2014 the whole point of everything that came before." }
      ],
      deepDive: "Ezekiel's structure is the departure and return of glory, and the pacing of the departure is the tell: God leaves in stages, pausing at the threshold, at the gate, at the mountain \u2014 as though reluctant at every step. That slowness is mercy shaped like hesitation. And the book's final sentence is one of the great endings in Scripture: the restored city's name is not a description of its walls or its wealth but of its resident \u2014 THE LORD IS THERE. Everything the prophets promise ultimately comes down to that: not better circumstances but restored presence. Revelation's last chapters borrow this vision almost wholesale." },
    { id:213, book:"Ezekiel", title:"The river from the temple", side:"c",
      passage: "Ezekiel is shown water trickling from under the temple threshold. His guide measures a thousand cubits and leads him in \u2014 ankle-deep. Another thousand \u2014 knee-deep. Another \u2014 waist-deep. Another \u2014 \u201ca river that no one could cross\u201d and had to be swum. Wherever the river flows, everything lives: fish teem, the salt sea turns fresh, and trees line both banks whose \u201cleaves will not wither, nor will their fruit fail... Their fruit will serve for food and their leaves for healing.\u201d",
      keyVerses: [
        { ref: "Ezekiel 47:9", text: "Where the river flows everything will live." }
      ],
      questions: [
        { q:"How does the river change as it flows?", opts:["It shrinks", "It deepens \u2014 ankles, knees, waist, then too deep to cross", "It stays the same"], correct:1, explain:"A river deepening without tributaries \u2014 the source itself keeps supplying more." },
        { q:"What happens where the river goes?", opts:["Nothing", "Everything lives \u2014 even the salt sea turns fresh", "It floods the land"], correct:1, explain:"Life follows the water, including into a sea famous for supporting nothing." },
        { q:"Where does the river start?", opts:["A mountain spring", "From under the temple \u2014 from God's presence", "The Jordan"], correct:1, explain:"The source is presence; everything downstream is the effect of it." }
      ],
      deepDive: "The measured wade into the river is one of Scripture's most quietly personal images: ankles, knees, waist, and then water you can't stand up in. Every stage is genuinely in the river, and every stage is deeper \u2014 which is a fair picture of a life with God, where 'in' isn't a single point but a going further. And the destination is the Dead Sea, the most lifeless water in the region, turned fresh. Revelation 22 takes this river, these trees, and these healing leaves and places them at the center of the new creation. Where the river flows, everything lives." },
    { id:214, book:"Hosea", title:"Go, marry an unfaithful wife", side:"l",
      passage: "God gives Hosea the hardest assignment in the prophets: \u201cGo, marry a promiscuous woman and have children with her, for like an adulterous wife this land is guilty of unfaithfulness to the LORD.\u201d He marries Gomer. She leaves. Their children are given names that spell judgment \u2014 \u2018Not Loved,\u2019 \u2018Not My People.\u2019 And then God tells him to go get her back: \u201cGo, show your love to your wife again, though she is loved by another man and is an adulteress. Love her as the LORD loves the Israelites.\u201d Hosea buys her back for fifteen shekels and a measure of barley.",
      keyVerses: [
        { ref: "Hosea 3:1", text: "Go, show your love to your wife again... Love her as the LORD loves the Israelites." }
      ],
      questions: [
        { q:"What was Hosea's assignment?", opts:["To preach in the temple", "To marry an unfaithful woman \u2014 living out God's own experience", "To write a history"], correct:1, explain:"The prophet's marriage became the sermon: his pain was a window into God's." },
        { q:"What happened after Gomer left?", opts:["Hosea divorced her", "God told him to go get her back and love her again", "She was punished"], correct:1, explain:"The command wasn't tolerance \u2014 it was pursuit, at cost, of someone who had left." },
        { q:"What did Hosea have to do to get her back?", opts:["Nothing", "Buy her \u2014 pay a price to redeem his own wife", "Ask the king"], correct:1, explain:"Redemption pictured literally: paying to reclaim what was already his." }
      ],
      deepDive: "Hosea is God saying, in effect: you want to know what this feels like from my side? Marry her. The prophet's ruined marriage becomes the most emotionally raw picture of God's love in the Old Testament \u2014 not the calm love of a distant deity but the grief of a betrayed spouse who goes and buys his wife back out of the situation she chose. Notice the price: fifteen shekels and barley, roughly the cost of a slave. That's the shape of redemption throughout Scripture \u2014 love that pays to reclaim what it already owns. If God's love has ever sounded abstract to you, this book makes it painfully concrete." },
    { id:215, book:"Hosea", title:"I desire mercy, not sacrifice", side:"r",
      passage: "Hosea calls the people back with tenderness and honesty: \u201cCome, let us return to the LORD. He has torn us to pieces but he will heal us... Let us acknowledge the LORD; let us press on to acknowledge him. As surely as the sun rises, he will appear.\u201d But their loyalty is \u201clike the morning mist, like the early dew that disappears.\u201d Then the line Jesus would quote twice: \u201cFor I desire mercy, not sacrifice, and acknowledgment of God rather than burnt offerings.\u201d",
      keyVerses: [
        { ref: "Hosea 6:6", text: "For I desire mercy, not sacrifice, and acknowledgment of God rather than burnt offerings." }
      ],
      questions: [
        { q:"What image describes their loyalty?", opts:["A mountain", "Morning mist and early dew \u2014 real, and gone by noon", "A river"], correct:1, explain:"Sincere while it lasts, and it doesn't last \u2014 a devastatingly accurate picture of shallow devotion." },
        { q:"What does God prefer over sacrifice?", opts:["Longer prayers", "Mercy, and knowing Him", "Larger offerings"], correct:1, explain:"Ritual isn't rejected; ritual substituting for a changed heart and merciful life is." },
        { q:"Where does Jesus quote this?", opts:["Nowhere", "Twice in Matthew \u2014 defending his eating with sinners and his disciples in the grain fields", "Only at the cross"], correct:1, explain:"He tells the Pharisees twice: \u2018go and learn what this means.\u2019" }
      ],
      deepDive: "'I desire mercy, not sacrifice' may be the most important sentence in the minor prophets for religious people specifically. It doesn't attack devotion; it attacks devotion that leaves you unmerciful. Jesus quoted it twice, both times to religious experts who were technically correct and relationally cruel \u2014 which suggests the temptation never went away. And Hosea's morning-mist line is the honest mirror alongside it: most of us have real devotion that burns off by mid-morning. The chapter's invitation is gentler than it deserves to be: come, let us return \u2014 and 'as surely as the sun rises, he will appear.'" },
    { id:216, book:"Hosea", title:"How can I give you up?", side:"c",
      passage: "God remembers Israel's childhood: \u201cWhen Israel was a child, I loved him... It was I who taught Ephraim to walk, taking them by the arms... I led them with cords of human kindness, with ties of love... and bent down to feed them.\u201d Then, at the point where judgment is fully deserved, God's own heart breaks open: \u201cHow can I give you up, Ephraim? How can I hand you over?... My heart is changed within me; all my compassion is aroused.\u201d And the book ends with healing: \u201cI will heal their waywardness and love them freely.\u201d",
      keyVerses: [
        { ref: "Hosea 11:8", text: "How can I give you up, Ephraim?... My heart is changed within me; all my compassion is aroused." }
      ],
      questions: [
        { q:"What image describes God's early care for Israel?", opts:["A king and subjects", "A parent teaching a child to walk and bending down to feed them", "A general and army"], correct:1, explain:"One of the tenderest pictures of God in Scripture \u2014 stooping to feed a toddler." },
        { q:"What happens at the moment judgment is deserved?", opts:["It falls immediately", "God's compassion overrules \u2014 \u2018how can I give you up?\u2019", "Israel repents first"], correct:1, explain:"The turn comes from God's heart, not from any change in their behavior." },
        { q:"How does the book end?", opts:["In judgment", "\u2018I will heal their waywardness and love them freely\u2019", "Unresolved"], correct:1, explain:"Freely \u2014 the word rules out anything earned." }
      ],
      deepDive: "Hosea 11 is the emotional summit of the prophets. God remembers teaching a child to walk, and then \u2014 at exactly the moment justice is due \u2014 says something that shouldn't be possible for a judge: how can I give you up? My heart is changed within me. This isn't God being talked out of anything; it's God revealing what has been true underneath the whole confrontation. And the book's last chapter delivers the two words everything hangs on: 'love them freely.' Not because the waywardness was small, and not because they finally earned it. Freely. That's the word Hosea's whole ruined marriage was written to define." },
    { id:217, book:"Joel", title:"Return to me with all your heart", side:"l",
      passage: "A locust plague strips the land bare \u2014 \u201cwhat the locust swarm has left the great locusts have eaten\u201d \u2014 and Joel reads the disaster as a summons. \u201cEven now, declares the LORD, return to me with all your heart, with fasting and weeping and mourning. Rend your heart and not your garments. Return to the LORD your God, for he is gracious and compassionate, slow to anger and abounding in love.\u201d And a promise for what was lost: \u201cI will repay you for the years the locusts have eaten.\u201d",
      keyVerses: [
        { ref: "Joel 2:25", text: "I will repay you for the years the locusts have eaten." }
      ],
      questions: [
        { q:"What does \u2018rend your heart and not your garments\u2019 mean?", opts:["Tear your clothes properly", "Real inward repentance rather than a public display", "Fast longer"], correct:1, explain:"Tearing clothes was the visible sign; God asks for the thing the sign was supposed to represent." },
        { q:"What two words open the invitation?", opts:["\u2018Too late\u2019", "\u2018Even now\u2019 \u2014 after the devastation, the door is still open", "\u2018Perhaps someday\u2019"], correct:1, explain:"The most hopeful phrase in the book, spoken over a stripped landscape." },
        { q:"What does God promise about lost years?", opts:["They're gone forever", "\u2018I will repay you for the years the locusts have eaten\u2019", "They never mattered"], correct:1, explain:"Not merely forgiveness but restoration \u2014 God addressing the wasted time itself." }
      ],
      deepDive: "Joel takes a natural disaster and reads it as a wake-up call, and his invitation contains two of the Bible's most quoted phrases. 'Rend your heart and not your garments' cuts at performed repentance \u2014 the visible signs are easier than the inward turn they're meant to represent. And 'I will repay you for the years the locusts have eaten' has carried people through the specific grief of wasted time: years lost to addiction, a bad decade, a season eaten by something. The promise doesn't rewind the calendar. It says God is able to make the outcome fuller than the loss." },
    { id:218, book:"Joel", title:"I will pour out my Spirit", side:"r",
      passage: "Then the promise that changed everything: \u201cAnd afterward, I will pour out my Spirit on all people. Your sons and daughters will prophesy, your old men will dream dreams, your young men will see visions. Even on my servants, both men and women, I will pour out my Spirit in those days.\u201d And the invitation attached: \u201cEveryone who calls on the name of the LORD will be saved.\u201d On the day of Pentecost, Peter stood up and said: this is that.",
      keyVerses: [
        { ref: "Joel 2:28", text: "And afterward, I will pour out my Spirit on all people." }
      ],
      questions: [
        { q:"Who receives the Spirit in this promise?", opts:["Only prophets and priests", "All people \u2014 sons and daughters, old and young, male and female servants", "Only Israel's leaders"], correct:1, explain:"In an age when God's Spirit came on select individuals, this promised everyone." },
        { q:"What does Peter do with this passage?", opts:["Ignores it", "Quotes it at Pentecost \u2014 \u2018this is what was spoken by the prophet Joel\u2019", "Argues against it"], correct:1, explain:"The church's first sermon is an exposition of Joel 2." },
        { q:"What is the invitation attached to it?", opts:["Only the worthy may come", "\u2018Everyone who calls on the name of the LORD will be saved\u2019", "Wait for a sign"], correct:1, explain:"Paul quotes this same line in Romans 10 \u2014 the door is opened to anyone who calls." }
      ],
      deepDive: "Joel 2:28 is one of the Old Testament's most radical promises. Under the old arrangement, God's Spirit came upon particular people for particular tasks \u2014 a judge, a king, a prophet. Joel announces a flood instead of a trickle, poured on 'all people,' explicitly including the categories that had the least standing: young, old, and servants of both sexes. Peter recognized it happening on the day the church was born and said so out loud. The last line is the door: everyone who calls on the name of the LORD will be saved. Everyone \u2014 which Paul later hammers home to make sure no one reads it narrowly." },
    { id:219, book:"Amos", title:"Judgment begins abroad \u2014 and comes home", side:"c",
      passage: "Amos was a shepherd and fig farmer, not a professional prophet. He opens by pronouncing judgment on Israel's neighbors \u2014 Damascus, Gaza, Tyre, Edom, Ammon, Moab \u2014 for atrocities in war. His audience would have cheered each one. Then he turns to Judah. Then to Israel itself: \u201cThey sell the innocent for silver, and the needy for a pair of sandals. They trample on the heads of the poor as on the dust of the ground.\u201d The sermon that started as foreign policy ended in the room.",
      keyVerses: [
        { ref: "Amos 2:6\u20137", text: "They sell the innocent for silver, and the needy for a pair of sandals. They trample on the heads of the poor." }
      ],
      questions: [
        { q:"Who was Amos before he prophesied?", opts:["A priest", "A shepherd and fig farmer", "A royal official"], correct:1, explain:"An outsider with no professional stake, which is part of why he could speak so plainly." },
        { q:"What's the rhetorical strategy of chapters 1\u20132?", opts:["Start with Israel", "Judge the neighbors first \u2014 then turn the same standard on the audience", "Praise everyone"], correct:1, explain:"They cheered through six oracles before the seventh landed on them." },
        { q:"What specific sins does he name in Israel?", opts:["Wrong sacrifices", "Selling the needy, trampling the poor \u2014 economic injustice", "Foreign alliances"], correct:1, explain:"Amos's concern throughout is what prosperity was doing to the vulnerable." }
      ],
      deepDive: "Amos's opening is a masterpiece of preaching. Each oracle against a neighbor would have drawn applause \u2014 yes, judge Damascus, judge Gaza \u2014 and each one narrows the circle until the same standard lands on the people nodding along. That move is worth remembering whenever you find yourself enjoying a critique of someone else. And his charges are startlingly concrete: not vague unfaithfulness but selling people for silver and a pair of sandals. Amos was a farmer who saw what a booming economy was doing at the bottom, and he refused to call it prosperity." },
    { id:220, book:"Amos", title:"Let justice roll down", side:"l",
      passage: "God rejects worship offered by an unjust society in the strongest terms in Scripture: \u201cI hate, I despise your religious festivals; your assemblies are a stench to me... Away with the noise of your songs! I will not listen to the music of your harps.\u201d And then the demand: \u201cBut let justice roll on like a river, righteousness like a never-failing stream!\u201d",
      keyVerses: [
        { ref: "Amos 5:24", text: "But let justice roll on like a river, righteousness like a never-failing stream!" }
      ],
      questions: [
        { q:"What is God rejecting here?", opts:["All worship forever", "Worship offered by people practicing injustice", "Only music"], correct:1, explain:"The festivals were correct; the society producing them was crushing the poor." },
        { q:"What image describes the alternative?", opts:["A trickle", "A rolling river and a never-failing stream", "A rainstorm"], correct:1, explain:"Not an occasional charitable event \u2014 continuous, structural, unstoppable justice." },
        { q:"Why does this verse still get quoted?", opts:["Its poetry alone", "Martin Luther King Jr. and generations of reformers built on it", "It's rarely quoted"], correct:1, explain:"It has anchored the church's justice tradition for centuries \u2014 famously in King's speeches." }
      ],
      deepDive: "Amos 5:24 is the verse the modern church quotes most often from the minor prophets, and its context sharpens it: God is not asking for justice in addition to worship, He is refusing worship that comes from an unjust life. That's an uncomfortable claim for anyone who has separated Sunday from the rest of the week. The image itself is worth sitting with \u2014 a never-failing stream, not a seasonal wadi that runs during the rainy season and dries up. Occasional generosity is a wadi. Amos wants a river." },
    { id:221, book:"Amos", title:"The plumb line", side:"r",
      passage: "God shows Amos a vision: \u201cThe Lord was standing by a wall that had been built true to plumb, with a plumb line in his hand. And the LORD asked me, \u2018What do you see, Amos?\u2019 \u2018A plumb line,\u2019 I replied. Then the Lord said, \u2018Look, I am setting a plumb line among my people Israel; I will spare them no longer.\u2019\u201d The priest Amaziah promptly told Amos to go prophesy somewhere else \u2014 \u201cdon't prophesy anymore at Bethel, because this is the king's sanctuary.\u201d",
      keyVerses: [
        { ref: "Amos 7:8", text: "Look, I am setting a plumb line among my people Israel; I will spare them no longer." }
      ],
      questions: [
        { q:"What is a plumb line used for?", opts:["Measuring length", "Testing whether a wall is truly vertical", "Weighing goods"], correct:1, explain:"A weighted string \u2014 gravity's own standard, impossible to argue with." },
        { q:"What does the image say about God's standard?", opts:["It shifts with culture", "It's fixed and objective \u2014 the wall either matches it or doesn't", "It's unknowable"], correct:1, explain:"Walls can look straight until measured; so can lives and societies." },
        { q:"How did the establishment respond to Amos?", opts:["Repentance", "Told him to go prophesy elsewhere \u2014 this is the king's sanctuary", "Promoted him"], correct:1, explain:"When religion belongs to power, uncomfortable truth gets reassigned to another zip code." }
      ],
      deepDive: "The plumb line is one of Scripture's most useful images for how God evaluates. A wall doesn't look crooked to the people living behind it; it looks normal, because their eyes adjusted years ago. Only an external standard \u2014 a weighted string obeying gravity \u2014 tells the truth. That's what Scripture does to a life or a society: it doesn't argue with your sense of normal, it just hangs straight beside it. And Amaziah's response is the timeless one: don't say that here, this is the king's sanctuary. Truth that threatens power always gets told to relocate." },
    { id:222, book:"Obadiah", title:"The pride of Edom", side:"c",
      passage: "The Bible's shortest book \u2014 twenty-one verses \u2014 aimed at Edom, the nation descended from Esau, Jacob's brother. Their sin: standing by, and then joining in, when Jerusalem fell. \u201cYou should not gloat over your brother in the day of his misfortune... nor seize their wealth in the day of their disaster.\u201d And their confidence: \u201cThe pride of your heart has deceived you, you who live in the clefts of the rocks... You who say to yourself, \u2018Who can bring me down to the ground?\u2019\u201d God's answer: \u201cThough you soar like the eagle... from there I will bring you down.\u201d",
      keyVerses: [
        { ref: "Obadiah 1:3", text: "The pride of your heart has deceived you, you who live in the clefts of the rocks and make your home on the heights." }
      ],
      questions: [
        { q:"What was Edom's relationship to Israel?", opts:["Strangers", "Brothers \u2014 descended from Esau, Jacob's twin", "Ancient allies"], correct:1, explain:"The betrayal is a family one, which is why the language is so sharp." },
        { q:"What was Edom's sin?", opts:["Idolatry", "Gloating over a brother's disaster \u2014 and profiting from it", "Breaking a treaty"], correct:1, explain:"Standing by, then looting: the sin of the bystander who becomes a participant." },
        { q:"What deceived them?", opts:["False prophets", "The pride of their own hearts \u2014 secured in mountain strongholds", "Foreign advisors"], correct:1, explain:"Their cliff fortresses felt untouchable, and safety became self-deception." }
      ],
      deepDive: "Obadiah is one page long and lands two permanent points. First, God notices what you do when someone else is having their worst day \u2014 Edom didn't destroy Jerusalem, they just enjoyed it and took a share. Passive complicity gets a whole book. Second, the diagnosis of pride is precisely worded: 'the pride of your heart has deceived you.' Pride's danger isn't that it's unattractive but that it distorts perception \u2014 living high in the rocks, they genuinely could not imagine falling. The shortest book in the Old Testament exists to say that both of those things are visible from heaven." },
    { id:223, book:"Jonah", title:"Running the other way", side:"l",
      passage: "\u201cThe word of the LORD came to Jonah: \u2018Go to the great city of Nineveh and preach against it.\u2019 But Jonah ran away from the LORD and headed for Tarshish\u201d \u2014 the opposite direction, as far west as ships went. A violent storm nearly broke the ship apart; the pagan sailors prayed while the prophet slept below. Discovering the cause, Jonah told them to throw him overboard. They tried to row back to land first \u2014 the pagans showing more mercy than the prophet \u2014 and finally did. \u201cThe LORD provided a huge fish to swallow Jonah.\u201d",
      keyVerses: [
        { ref: "Jonah 1:3", text: "But Jonah ran away from the LORD and headed for Tarshish." }
      ],
      questions: [
        { q:"Why is Nineveh significant?", opts:["It was a friendly city", "It was the capital of Assyria \u2014 Israel's brutal enemy", "It was uninhabited"], correct:1, explain:"Jonah wasn't afraid of Nineveh; he didn't want them spared, as chapter 4 admits outright." },
        { q:"Who behaves better in chapter 1 \u2014 the prophet or the sailors?", opts:["The prophet", "The pagan sailors \u2014 they pray, and try to save him before throwing him over", "Neither"], correct:1, explain:"The book keeps making outsiders look better than the insider, on purpose." },
        { q:"What was the fish?", opts:["A punishment only", "God's provision \u2014 the text says the LORD \u2018provided\u2019 it", "A coincidence"], correct:1, explain:"The same verb is used for the plant and the worm later \u2014 all of it arranged rescue." }
      ],
      deepDive: "Jonah is the only prophet who runs, and the book never lets you forget that the problem isn't fear \u2014 he says plainly in chapter 4 that he fled because he knew God was merciful and might spare his enemies. Notice the contrasts the author builds: pagan sailors praying while the prophet sleeps, and doing everything possible to avoid throwing him overboard. The outsiders keep out-behaving the insider. And the fish is called provision, not punishment \u2014 the first hint that this book is about a God who rescues people who don't want to be where He's sending them." },
    { id:224, book:"Jonah", title:"From inside the fish", side:"r",
      passage: "\u201cFrom inside the fish Jonah prayed to the LORD his God.\u201d The prayer is mostly quotations from the Psalms, spoken from the strangest place anyone has prayed: \u201cIn my distress I called to the LORD, and he answered me. From deep in the realm of the dead I called for help, and you listened to my cry... When my life was ebbing away, I remembered you, LORD... What I have vowed I will make good. I will say, \u2018Salvation comes from the LORD.\u2019 And the LORD commanded the fish, and it vomited Jonah onto dry land.\u201d",
      keyVerses: [
        { ref: "Jonah 2:9", text: "What I have vowed I will make good. I will say, \u2018Salvation comes from the LORD.\u2019" }
      ],
      questions: [
        { q:"What is Jonah's prayer largely made of?", opts:["New material", "Lines from the Psalms \u2014 remembered Scripture surfacing in crisis", "Complaints"], correct:1, explain:"What he had memorized in better days became his vocabulary at the bottom." },
        { q:"Where does Jonah say he called from?", opts:["The ship", "\u2018Deep in the realm of the dead\u2019 \u2014 the lowest place he could name", "Nineveh"], correct:1, explain:"The prayer treats the fish as a grave from which God retrieved him." },
        { q:"What's the prayer's conclusion?", opts:["\u2018I deserved better\u2019", "\u2018Salvation comes from the LORD\u2019", "\u2018Send someone else\u2019"], correct:1, explain:"The right theology, from a man who will still resent it being applied to his enemies." }
      ],
      deepDive: "Two things stand out about this prayer. First, its raw material: Jonah is quoting psalms he clearly knew by heart, which is a quiet argument for filling your memory with Scripture before you need it. What's stored surfaces when you're too far gone to compose anything new. Second, the irony the book builds: Jonah declares 'salvation comes from the LORD' while being personally rescued \u2014 and then spends chapter 4 furious that the same salvation reached Nineveh. It's possible to have excellent theology about your own rescue and resent it being extended to someone you dislike." },
    { id:225, book:"Jonah", title:"Nineveh believes", side:"c",
      passage: "The word comes a second time, and this time Jonah goes. His sermon is eight words in Hebrew: \u201cForty more days and Nineveh will be overthrown.\u201d No mention of God, no offer of mercy, no invitation \u2014 possibly the worst sermon ever preached. And it produced the greatest revival in Scripture: \u201cThe Ninevites believed God.\u201d They declared a fast, from the greatest to the least; even the king stepped off his throne and sat in dust. \u201cWhen God saw what they did and how they turned from their evil ways, he relented.\u201d",
      keyVerses: [
        { ref: "Jonah 3:10", text: "When God saw what they did and how they turned from their evil ways, he relented." }
      ],
      questions: [
        { q:"What was remarkable about Jonah's sermon?", opts:["Its eloquence", "Its brevity and bleakness \u2014 eight words, no mercy offered", "Its length"], correct:1, explain:"The results plainly had nothing to do with the messenger's skill or enthusiasm." },
        { q:"How far did the repentance reach?", opts:["A few citizens", "From the greatest to the least \u2014 including the king off his throne", "Only the priests"], correct:1, explain:"An entire enemy capital turning \u2014 the largest response to any prophet in the Bible." },
        { q:"What did God do?", opts:["Destroyed them anyway", "Relented \u2014 He saw their turning and did not bring the threatened disaster", "Waited forty more years"], correct:1, explain:"Exactly what Jonah feared, and exactly what the book exists to celebrate." }
      ],
      deepDive: "The joke of Jonah 3 is that the worst sermon in Scripture produced its biggest revival. Eight words, delivered by a reluctant man who wanted them destroyed, and a whole city turns \u2014 which makes the point unmistakable: the power was never in the preacher. There's something freeing in that for anyone who has ever felt unqualified to say anything about God. And the king's proclamation contains one of the Bible's humblest lines: 'Who knows? God may yet relent.' No presumption, no bargaining \u2014 just turning, and hoping." },
    { id:226, book:"Jonah", title:"The worm and the question", side:"l",
      passage: "\u201cBut to Jonah this seemed very wrong, and he became angry\u201d \u2014 and finally admits why he ran: \u201cI knew that you are a gracious and compassionate God, slow to anger and abounding in love, a God who relents from sending calamity.\u201d He sulks outside the city hoping for fireworks. God provides a plant for shade; Jonah is delighted. God provides a worm; the plant dies; Jonah wants to die too. Then God's closing question: you cared about a plant you didn't grow \u2014 \u201cshould I not have concern for the great city of Nineveh, in which there are more than a hundred and twenty thousand people?\u201d The book ends on that question, unanswered.",
      keyVerses: [
        { ref: "Jonah 4:11", text: "And should I not have concern for the great city of Nineveh, in which there are more than a hundred and twenty thousand people?" }
      ],
      questions: [
        { q:"Why did Jonah say he ran?", opts:["Fear of Nineveh", "Because he knew God was gracious and might spare them", "He doubted God existed"], correct:1, explain:"He didn't doubt God's mercy \u2014 he objected to it, which is a different problem entirely." },
        { q:"What was the plant and worm for?", opts:["Comfort only", "To expose Jonah's misplaced compassion \u2014 grieving a plant, not a city", "A punishment"], correct:1, explain:"God argues by experience: you cared about this; now consider what I care about." },
        { q:"How does the book end?", opts:["Jonah repents", "With God's question hanging in the air, unanswered", "Nineveh is destroyed"], correct:1, explain:"The question is left for the reader \u2014 which is exactly why it still lands." }
      ],
      deepDive: "Jonah's last chapter reveals that the book was never about a fish. Jonah's complaint is that God is too merciful \u2014 he quotes God's own self-description from Exodus 34 as an accusation. Then the plant exposes him: he grieved a vine he didn't plant while resenting mercy toward 120,000 people. And the book simply stops on God's question, with no reply from Jonah. That silence is deliberate; the question is aimed past him at whoever is reading. Is there a group you'd be quietly disappointed to see God bless? Jonah is the book that asks it and refuses to answer for you." },
    { id:227, book:"Micah", title:"What does the LORD require?", side:"r",
      passage: "Micah stages a courtroom scene \u2014 God's case against His people, with the mountains as jury. The people answer by escalating offers: shall I come with burnt offerings? Thousands of rams? Ten thousand rivers of oil? My firstborn for my transgression? The reply cuts through all of it: \u201cHe has shown you, O mortal, what is good. And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God.\u201d",
      keyVerses: [
        { ref: "Micah 6:8", text: "And what does the LORD require of you? To act justly and to love mercy and to walk humbly with your God." }
      ],
      questions: [
        { q:"What were the people offering?", opts:["Nothing", "Escalating sacrifices \u2014 rams, rivers of oil, even a firstborn child", "Prayers only"], correct:1, explain:"They kept raising the price, assuming the problem was quantity." },
        { q:"What does God actually require?", opts:["Larger offerings", "Act justly, love mercy, walk humbly", "Perfect record-keeping"], correct:1, explain:"Three phrases covering how you treat people and how you stand before God." },
        { q:"What's the difference between the three?", opts:["They're identical", "Justice is what you do; mercy is what you love; humility is how you walk with God", "Only the first matters"], correct:1, explain:"Action, affection, and posture \u2014 covering behavior, heart, and relationship." }
      ],
      deepDive: "Micah 6:8 is the Old Testament's most quoted summary of what God wants, and its power is in what it replaces. The people were bidding upward \u2014 more rams, more oil, ultimately a child \u2014 assuming God was expensive. The answer says the currency was wrong from the start. Notice the three verbs: act justly (behavior toward others), love mercy (not merely doing mercy but wanting to), and walk humbly with your God (a posture, ongoing, relational). It's simple enough to memorize in a minute and demanding enough to take a lifetime. If you want a single verse to test a week against, this is a strong candidate." },
    { id:228, book:"Micah", title:"But you, Bethlehem", side:"c",
      passage: "In the middle of judgment, a promise about a town nobody counted: \u201cBut you, Bethlehem Ephrathah, though you are small among the clans of Judah, out of you will come for me one who will be ruler over Israel, whose origins are from of old, from ancient times.\u201d He will \u201cstand and shepherd his flock in the strength of the LORD... And he will be their peace.\u201d Seven centuries later, when Herod asked where the Messiah would be born, the scribes quoted this verse from memory.",
      keyVerses: [
        { ref: "Micah 5:2", text: "But you, Bethlehem Ephrathah, though you are small among the clans of Judah, out of you will come for me one who will be ruler over Israel." }
      ],
      questions: [
        { q:"What's emphasized about Bethlehem?", opts:["Its power", "Its smallness \u2014 \u2018small among the clans of Judah\u2019", "Its wealth"], correct:1, explain:"God's pattern again: the significant thing comes out of the overlooked place." },
        { q:"What's said about the ruler's origins?", opts:["Recent", "\u2018From of old, from ancient times\u2019", "Unknown"], correct:1, explain:"A phrase reaching back beyond any human genealogy \u2014 hinting at more than a local king." },
        { q:"How is the ruler described?", opts:["A conqueror", "A shepherd \u2014 and \u2018he will be their peace\u2019", "A judge"], correct:1, explain:"Strength exercised as care, which is how the Bible keeps defining real kingship." }
      ],
      deepDive: "Micah 5:2 is one of the most specific predictions in the Old Testament, and it was still common knowledge seven hundred years later \u2014 Herod's scribes quoted it without needing to look it up. What's most characteristic is the emphasis on smallness: not Jerusalem, not a capital, but a village too minor to be listed among Judah's clans. The Bible does this relentlessly \u2014 younger sons, barren women, minor towns \u2014 as if to make sure no one confuses God's work with human prominence. And the promised ruler's job description is shepherding, not conquering. He will be their peace." },
    { id:229, book:"Micah", title:"Who is a God like you?", side:"l",
      passage: "Micah ends with wonder at God's character: \u201cWho is a God like you, who pardons sin and forgives the transgression of the remnant of his inheritance? You do not stay angry forever but delight to show mercy. You will again have compassion on us; you will tread our sins underfoot and hurl all our iniquities into the depths of the sea.\u201d The prophet's own name means \u2018who is like the LORD?\u2019 \u2014 and the book ends by answering its own question.",
      keyVerses: [
        { ref: "Micah 7:18\u201319", text: "You do not stay angry forever but delight to show mercy... you will hurl all our iniquities into the depths of the sea." }
      ],
      questions: [
        { q:"What does God \u2018delight\u2019 in?", opts:["Judgment", "Showing mercy", "Sacrifices"], correct:1, explain:"Not reluctant forgiveness but pleasure in it \u2014 mercy as God's preference, not His concession." },
        { q:"What happens to the sins?", opts:["Recorded permanently", "Hurled into the depths of the sea", "Reduced"], correct:1, explain:"Thrown, deliberately, into the one place ancient people knew nothing returns from." },
        { q:"What does the name \u2018Micah\u2019 mean?", opts:["Servant of God", "Who is like the LORD?", "God saves"], correct:1, explain:"The book closes by asking the question its author's name has been asking the whole time." }
      ],
      deepDive: "Micah's ending is a small masterpiece. The prophet whose name asks 'who is like the LORD?' answers it not with power or knowledge but with mercy: this is a God who does not stay angry and actually delights in forgiving. The image of sins hurled into the depths of the sea is deliberately final \u2014 not filed, not reduced, not suspended, but thrown where nothing is recovered. Corrie ten Boom famously added that God then posts a sign: no fishing. If you are someone who keeps dredging up what God has already dealt with, this is the passage to memorize." },
    { id:230, book:"Nahum", title:"Slow to anger, great in power", side:"r",
      passage: "A century after Jonah, Nineveh had returned to its brutality \u2014 and Nahum announces its fall. But he opens by holding two truths together: \u201cThe LORD is slow to anger but great in power; the LORD will not leave the guilty unpunished.\u201d And in the middle of the judgment, a sentence for the frightened: \u201cThe LORD is good, a refuge in times of trouble. He cares for those who trust in him.\u201d For a small nation crushed under Assyria for generations, this book was not cruelty \u2014 it was the announcement that the bully would not last forever.",
      keyVerses: [
        { ref: "Nahum 1:7", text: "The LORD is good, a refuge in times of trouble. He cares for those who trust in him." }
      ],
      questions: [
        { q:"How does Nahum connect to Jonah?", opts:["No connection", "Same city \u2014 Nineveh repented under Jonah, and a century later returned to brutality", "Same prophet"], correct:1, explain:"Mercy received in one generation was not inherited by the next." },
        { q:"What two things does 1:3 hold together?", opts:["Anger and indifference", "Slow to anger AND will not leave the guilty unpunished", "Power and distance"], correct:1, explain:"Patience is not the same as permission \u2014 both are true of God at once." },
        { q:"Who was this book good news for?", opts:["Assyria", "The small nations Assyria had crushed for generations", "No one"], correct:1, explain:"Judgment on an empire reads very differently from underneath its boot." }
      ],
      deepDive: "Nahum is uncomfortable reading until you consider the audience. Assyria was the ancient world's most efficient terror state, famous for flaying prisoners and deporting whole populations, and this book announces to their victims that it ends. Read from that position, the judgment is not vengeance porn \u2014 it's the promise that evil has an expiration date. And verse 7 sits right in the middle of it: the LORD is good, a refuge in trouble, caring for those who take shelter in Him. The same chapter says God is slow to anger and will not let the guilty go. Both, at once, are what makes Him trustworthy." },
    { id:231, book:"Habakkuk", title:"How long, LORD?", side:"c",
      passage: "Habakkuk doesn't preach to people \u2014 he argues with God. \u201cHow long, LORD, must I call for help, but you do not listen? Or cry out to you, \u2018Violence!\u2019 but you do not save? Why do you make me look at injustice?\u201d God's answer makes it worse: I am raising up the Babylonians \u2014 a nation more violent still \u2014 as the instrument. Habakkuk pushes back harder: \u201cYour eyes are too pure to look on evil... Why then do you tolerate the treacherous? Why are you silent while the wicked swallow up those more righteous than themselves?\u201d",
      keyVerses: [
        { ref: "Habakkuk 1:2", text: "How long, LORD, must I call for help, but you do not listen?" }
      ],
      questions: [
        { q:"What's unusual about this book?", opts:["It's a history", "It's a prophet arguing with God rather than preaching to people", "It has no author"], correct:1, explain:"The whole book is a dialogue \u2014 complaint, answer, harder complaint, answer." },
        { q:"What was God's first answer?", opts:["Immediate justice", "He was raising up Babylon \u2014 an even more violent nation \u2014 as His instrument", "Silence"], correct:1, explain:"The answer created a bigger problem than the question, which Habakkuk says out loud." },
        { q:"How does Scripture treat his complaints?", opts:["As faithlessness", "As faith \u2014 they're preserved, answered, and never rebuked", "As unimportant"], correct:1, explain:"Like Job, honest wrestling directed at God is treated as legitimate prayer." }
      ],
      deepDive: "Habakkuk is the book for anyone who has looked at the world and thought: how is God letting this continue? The prophet asks it directly, gets an answer he finds worse than the silence, and asks again \u2014 and none of it is treated as rebellion. That's the first gift of the book: your hardest question about God's apparent inaction has a chapter in the Bible. Notice also what he does with his complaint \u2014 he brings it to God rather than about God, and then, in chapter 2, he climbs the watchtower to wait for a reply. Complaint plus expectation is the posture the whole book models." },
    { id:232, book:"Habakkuk", title:"The righteous will live by faith", side:"l",
      passage: "Habakkuk stations himself on the ramparts to watch for God's reply. It comes: \u201cWrite down the revelation and make it plain on tablets so that a herald may run with it. For the revelation awaits an appointed time... Though it linger, wait for it; it will certainly come and will not delay.\u201d And at its center, the sentence that would later ignite the Reformation: \u201cSee, the enemy is puffed up; his desires are not upright \u2014 but the righteous person will live by his faithfulness.\u201d",
      keyVerses: [
        { ref: "Habakkuk 2:4", text: "The righteous person will live by his faithfulness." }
      ],
      questions: [
        { q:"What did Habakkuk do after complaining?", opts:["Left", "Stationed himself on the watchtower to wait for God's answer", "Complained louder"], correct:1, explain:"He expected a reply \u2014 complaint with expectation, not resignation." },
        { q:"What does God say about the timing?", opts:["Immediate", "It awaits an appointed time \u2014 \u2018though it linger, wait for it\u2019", "Never"], correct:1, explain:"An answer certain in substance and slow in schedule \u2014 which is most of the Bible's answers." },
        { q:"Why is 2:4 historically important?", opts:["It isn't", "Paul quotes it in Romans and Galatians; it shaped Luther and the Reformation", "Only Jews cite it"], correct:1, explain:"One line from a minor prophet became the backbone of the doctrine of justification by faith." }
      ],
      deepDive: "Habakkuk 2:4 is the most consequential sentence in the minor prophets. Paul quotes it in Romans and Galatians, the writer of Hebrews quotes it too, and Luther's rediscovery of it lit the fuse of the Reformation. In context it's the answer to 'how do I live while the wicked prosper and God seems slow?' \u2014 the righteous will live by faith, meaning steady trust when the evidence hasn't arrived. And notice God's instruction about the vision: write it plainly, because you'll need to read it during the wait. Whatever God has told you, get it in writing before the lingering starts." },
    { id:233, book:"Habakkuk", title:"Though the fig tree does not bud", side:"r",
      passage: "The book ends in worship, with everything still unresolved: \u201cThough the fig tree does not bud and there are no grapes on the vines, though the olive crop fails and the fields produce no food, though there are no sheep in the pen and no cattle in the stalls, yet I will rejoice in the LORD, I will be joyful in God my Savior. The Sovereign LORD is my strength; he makes my feet like the feet of a deer, he enables me to tread on the heights.\u201d",
      keyVerses: [
        { ref: "Habakkuk 3:17\u201318", text: "Though the fig tree does not bud... yet I will rejoice in the LORD, I will be joyful in God my Savior." }
      ],
      questions: [
        { q:"What has changed in Habakkuk's circumstances by the end?", opts:["Everything improved", "Nothing \u2014 the crops still fail and the invasion is still coming", "He moved away"], correct:1, explain:"The book's resolution is internal; the situation is unchanged." },
        { q:"What's the force of the word \u2018yet\u2019?", opts:["Uncertainty", "Deliberate choice \u2014 joy decided in spite of the facts listed", "Denial"], correct:1, explain:"He lists every failure honestly and then plants a decision on the other side of them." },
        { q:"Where is his joy located?", opts:["In the harvest", "In the LORD Himself \u2014 \u2018God my Savior\u2019", "In future crops"], correct:1, explain:"Joy anchored to a Person rather than to conditions is the only kind that survives conditions." }
      ],
      deepDive: "Habakkuk's ending is one of the bravest sentences in Scripture, and it works only because of the honesty of the list preceding it. He doesn't say the crops will recover \u2014 he names each failure specifically: no figs, no grapes, no olives, no grain, no sheep, no cattle. Total agricultural collapse in an agricultural economy. And then: yet. That word is the whole Christian life in three letters. Joy here isn't a feeling produced by circumstances but a decision anchored in a Person, which is precisely why it can survive when the fields are empty." },
    { id:234, book:"Zephaniah", title:"The great day of the LORD", side:"c",
      passage: "Zephaniah preaches the day of the LORD in its most sweeping terms \u2014 a coming reckoning that leaves no one on the sidelines, including those \u201cwho are complacent, who are like wine left on its dregs, who think, \u2018The LORD will do nothing, either good or bad.\u2019\u201d Against that indifference he calls for a different posture: \u201cSeek the LORD, all you humble of the land, you who do what he commands. Seek righteousness, seek humility; perhaps you will be sheltered on the day of the LORD's anger.\u201d",
      keyVerses: [
        { ref: "Zephaniah 2:3", text: "Seek the LORD, all you humble of the land... Seek righteousness, seek humility." }
      ],
      questions: [
        { q:"What sin does Zephaniah single out?", opts:["Idolatry only", "Complacency \u2014 assuming God will do nothing, either good or bad", "Poverty"], correct:1, explain:"The \u2018wine left on its dregs\u2019 image: settled, thickened, unstirred indifference." },
        { q:"Who is told to seek the LORD?", opts:["Kings", "The humble of the land \u2014 those who do what He commands", "Priests only"], correct:1, explain:"The invitation runs toward the overlooked rather than the powerful." },
        { q:"What is the tone of \u2018perhaps you will be sheltered\u2019?", opts:["Cynical", "Humble hope \u2014 no presumption, but real invitation", "Despairing"], correct:1, explain:"The same humility as Nineveh's king: \u2018who knows?\u2019 \u2014 seeking without demanding." }
      ],
      deepDive: "Zephaniah's most modern indictment is complacency \u2014 people who wouldn't call themselves rebellious, just unbothered: 'the LORD will do nothing, either good or bad.' Practical atheism, held by people still attending the festivals. His image is precise: wine left too long on its sediment, thickened and stale from never being stirred. Against that he calls the humble to actively seek \u2014 righteousness, humility \u2014 without any guarantee, only a 'perhaps.' There's integrity in that. The book asks whether your sense that God isn't going to act has quietly become the reason you've stopped moving." },
    { id:235, book:"Zephaniah", title:"He will rejoice over you with singing", side:"l",
      passage: "The book that opened with sweeping judgment ends with one of the most tender sentences in Scripture: \u201cThe LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.\u201d The judgment is past; the fear is removed \u2014 \u201cDo not fear, Zion; do not let your hands hang limp\u201d \u2014 and God Himself is pictured, astonishingly, singing.",
      keyVerses: [
        { ref: "Zephaniah 3:17", text: "The LORD your God is with you, the Mighty Warrior who saves. He will take great delight in you... he will rejoice over you with singing." }
      ],
      questions: [
        { q:"What is God pictured doing?", opts:["Judging", "Delighting, quieting, and singing over His people", "Departing"], correct:1, explain:"One of only a few places in Scripture where God Himself is described as singing." },
        { q:"What two titles sit side by side?", opts:["Judge and jury", "Mighty Warrior who saves \u2014 and one who delights and sings", "King and priest"], correct:1, explain:"Power and tenderness in a single verse, neither cancelling the other." },
        { q:"How does the placement of this verse matter?", opts:["It's unrelated to the judgment", "It comes after the judgment \u2014 delight on the far side of dealing honestly with sin", "It opens the book"], correct:1, explain:"The tenderness isn't denial; it's what remains once the confrontation is finished." }
      ],
      deepDive: "Zephaniah 3:17 catches people off guard, mostly because they've never read the two chapters before it. This is the same book that opened with 'I will sweep away everything' \u2014 and it ends with God delighting, quieting with His love, and singing over His people. That progression is the whole prophetic message in miniature: honest confrontation first, and joy on the other side of it. The picture is worth sitting with, because most people can imagine God tolerating them, and some can imagine Him forgiving them. Very few picture Him singing." },
    { id:236, book:"Haggai", title:"Give careful thought to your ways", side:"r",
      passage: "The exiles were home, but the temple lay unfinished for years while everyone got on with life. Haggai's question is blunt: \u201cIs it a time for you yourselves to be living in your paneled houses, while this house remains a ruin?\u201d Then the diagnosis: \u201cYou have planted much, but harvested little. You eat, but never have enough... You earn wages, only to put them in a purse with holes in it. Give careful thought to your ways.\u201d The people obeyed \u2014 and \u201cthe LORD stirred up the spirit\u201d of the governor, the priest, and the whole remnant, and they began to build.",
      keyVerses: [
        { ref: "Haggai 1:5", text: "Now this is what the LORD Almighty says: Give careful thought to your ways." }
      ],
      questions: [
        { q:"What was the problem?", opts:["Persecution", "Misplaced priorities \u2014 paneled houses finished, God's house left in ruins", "Lack of materials"], correct:1, explain:"Nobody decided to abandon the temple; it just kept not being the priority." },
        { q:"What image describes their frustration?", opts:["An empty field", "Wages put in a purse with holes in it", "A broken plow"], correct:1, explain:"Effort producing nothing that stays \u2014 the felt experience of misordered priorities." },
        { q:"How did the people respond to Haggai?", opts:["They ignored him", "They obeyed \u2014 and God stirred their spirits to build", "They exiled him"], correct:1, explain:"One of the few prophets in Scripture whose audience actually listened, and quickly." }
      ],
      deepDive: "Haggai is short, practical, and uncomfortably relevant. Nobody in Jerusalem voted to abandon the temple \u2014 they just had legitimate things to do, and sixteen years passed. That's how priorities usually die: not by decision but by postponement. The purse with holes is the image that stings, because it names a real feeling \u2014 working hard and watching it evaporate. And the phrase repeated through the book, 'give careful thought to your ways,' is an invitation to audit rather than a condemnation. What have you postponed so long that the postponement has become the decision?" },
    { id:237, book:"Haggai", title:"The glory of this house", side:"c",
      passage: "As the new temple rose, the older people who remembered Solomon's saw how small it was. Haggai names the discouragement directly: \u201cWho of you is left who saw this house in its former glory? How does it look to you now? Does it not seem to you like nothing?\u201d Then, three times: \u201cBe strong... and work. For I am with you.\u201d And the promise: \u201cThe glory of this present house will be greater than the glory of the former house, says the LORD Almighty. And in this place I will grant peace.\u201d",
      keyVerses: [
        { ref: "Haggai 2:9", text: "The glory of this present house will be greater than the glory of the former house, says the LORD Almighty." }
      ],
      questions: [
        { q:"What discouraged the builders?", opts:["Enemy attacks", "Comparison \u2014 the new temple looked like nothing beside the old one", "Bad weather"], correct:1, explain:"The same grief as Ezra 3: those who remembered the former glory wept." },
        { q:"What does God repeat three times?", opts:["\u2018Give more\u2019", "\u2018Be strong... and work. For I am with you\u2019", "\u2018Wait longer\u2019"], correct:1, explain:"Encouragement plus assignment plus presence \u2014 in that order, three times over." },
        { q:"What's promised about the modest new house?", opts:["It will be rebuilt bigger", "Its glory will exceed the former \u2014 and God will grant peace there", "It will be temporary"], correct:1, explain:"Glory measured by God's presence and purpose, not by square footage or gold." }
      ],
      deepDive: "Haggai 2 speaks precisely to the discouragement of building something that looks small next to what used to be. God doesn't dismiss the comparison \u2014 He names it out loud, twice \u2014 and then refuses to let it be the final word. The promise is that this modest house would hold a greater glory than Solomon's, which is a strange claim about a smaller building until you remember who eventually walked through its courts. Whatever you're rebuilding that feels like a downgrade from before, the instruction here is the one repeated three times: be strong, work, and remember who is with you." },
    { id:238, book:"Zechariah", title:"Not by might, nor by power", side:"l",
      passage: "Zechariah sees a golden lampstand fed by two olive trees \u2014 a light with a permanent, self-supplying oil source. Asked what it means, the angel gives the word for Zerubbabel, who was trying to rebuild the temple with a discouraged remnant and no resources: \u201cNot by might nor by power, but by my Spirit, says the LORD Almighty.\u201d And to those unimpressed by the small beginning: \u201cWho dares despise the day of small things?\u201d",
      keyVerses: [
        { ref: "Zechariah 4:6", text: "Not by might nor by power, but by my Spirit, says the LORD Almighty." }
      ],
      questions: [
        { q:"What does the lampstand vision picture?", opts:["Human effort", "A light with a continuous supply it doesn't generate itself", "A treasury"], correct:1, explain:"Oil flowing directly from the trees to the lamp \u2014 supply without human pumping." },
        { q:"What does 4:6 rule out?", opts:["All effort", "Might and power as the source \u2014 the work runs on God's Spirit", "Prayer"], correct:1, explain:"Zerubbabel still built; the verse names what the building actually ran on." },
        { q:"What does \u2018the day of small things\u2019 address?", opts:["Impatience with big projects", "Contempt for modest beginnings", "Poor planning"], correct:1, explain:"A direct word to anyone embarrassed by how small their start looks." }
      ],
      deepDive: "Zechariah 4:6 is quoted constantly and usually detached from its setting, which is a shame, because the setting is the point: a discouraged governor trying to rebuild a temple with a fraction of the people and money the first one had. Into that, God says the work will run on His Spirit rather than on resources. And the follow-up line is for everyone who has felt embarrassed by the size of their start: 'who dares despise the day of small things?' God apparently enjoys small beginnings; most of the Bible's turning points are one. Do the small faithful thing, and stop measuring it against what you wish it were." },
    { id:239, book:"Zechariah", title:"Your king comes, riding a donkey", side:"r",
      passage: "Zechariah's visions turn toward a coming king: \u201cRejoice greatly, Daughter Zion! Shout, Daughter Jerusalem! See, your king comes to you, righteous and victorious, lowly and riding on a donkey, on a colt, the foal of a donkey.\u201d He will take away the war horses and the battle bow, \u201cand he will proclaim peace to the nations.\u201d Centuries later, Jesus deliberately sent two disciples to find a colt before riding into Jerusalem \u2014 quoting this verse with His entrance.",
      keyVerses: [
        { ref: "Zechariah 9:9", text: "See, your king comes to you, righteous and victorious, lowly and riding on a donkey." }
      ],
      questions: [
        { q:"What's unusual about the king's arrival?", opts:["A war horse", "A donkey \u2014 lowly, not the mount of a conquering general", "He walks"], correct:1, explain:"Conquerors rode horses; a donkey signaled peace, and everyone watching knew it." },
        { q:"What does the king remove?", opts:["Taxes", "The war horses and battle bow \u2014 and proclaims peace to the nations", "The temple"], correct:1, explain:"His victory results in disarmament, not a bigger army." },
        { q:"How did Jesus use this passage?", opts:["He avoided it", "He deliberately arranged a colt and rode it into Jerusalem", "He quoted it in a sermon only"], correct:1, explain:"A public, unmistakable claim to be this king \u2014 acted out rather than announced." }
      ],
      deepDive: "Zechariah 9:9 is a portrait of the strangest kind of victory: a king who is righteous and victorious, and also 'lowly,' arriving on a donkey and disarming his own side. Everyone in Jerusalem knew the code \u2014 horses meant war, donkeys meant peace \u2014 which is why the triumphal entry was so charged. Jesus didn't stumble into that image; He sent disciples ahead specifically to arrange it. It's the clearest picture of how His kingdom differs from every other one: real authority, arriving without a weapon, proclaiming peace to the nations rather than conquering them." },
    { id:240, book:"Zechariah", title:"They will look on me", side:"c",
      passage: "Zechariah's later visions grow intense: a fountain opened \u201cto cleanse them from sin and impurity,\u201d a shepherd struck and the sheep scattered, and a line the Gospels quote at the crucifixion: \u201cThey will look on me, the one they have pierced, and they will mourn for him as one mourns for an only child.\u201d The book ends with the LORD reigning as king over the whole earth \u2014 and even the cooking pots in Jerusalem declared \u201cHOLY TO THE LORD.\u201d",
      keyVerses: [
        { ref: "Zechariah 12:10", text: "They will look on me, the one they have pierced, and they will mourn for him as one mourns for an only child." }
      ],
      questions: [
        { q:"What does the fountain represent?", opts:["Irrigation", "Cleansing from sin and impurity \u2014 opened, not earned", "A water supply"], correct:1, explain:"A source made available; the imagery of washing runs throughout Zechariah's later chapters." },
        { q:"Where do the Gospels quote 12:10?", opts:["At the resurrection", "At the crucifixion \u2014 John cites it when Jesus' side is pierced", "At the baptism"], correct:1, explain:"John quotes it directly; Revelation echoes it too." },
        { q:"What does the ending say about ordinary objects?", opts:["They're worthless", "Even cooking pots will be \u2018HOLY TO THE LORD\u2019", "They'll be destroyed"], correct:1, explain:"Holiness spreading past the temple into ordinary kitchen equipment \u2014 the sacred/secular divide erased." }
      ],
      deepDive: "Zechariah's last chapters are dense and strange, and they contain some of the Old Testament's most startling anticipations \u2014 a struck shepherd, a pierced one mourned like an only child, a fountain opened for uncleanness. The New Testament reaches for these images repeatedly. But don't miss the ending, which is quietly one of the best in the prophets: on that day, the bells on the horses and the cooking pots in every house will be inscribed 'HOLY TO THE LORD.' The line between sacred and ordinary disappears entirely. Everything, down to the pans, belongs to God." },
    { id:241, book:"Malachi", title:"Where is the honor due me?", side:"l",
      passage: "The last prophet before four hundred years of silence opens with an argument. God says, \u201cI have loved you\u201d \u2014 and the people answer, \u201cHow have you loved us?\u201d That pattern repeats through the book: God speaks, the people talk back. He charges them with offering blind, lame, and diseased animals: \u201cTry offering them to your governor! Would he be pleased with you?\u201d The issue isn't ignorance but contempt \u2014 giving God what they'd be embarrassed to give a human official.",
      keyVerses: [
        { ref: "Malachi 1:6", text: "A son honors his father, and a slave his master. If I am a father, where is the honor due me?" }
      ],
      questions: [
        { q:"What's the book's distinctive style?", opts:["Poetry", "Argument \u2014 God speaks, and the people answer back with objections", "Narrative"], correct:1, explain:"Six disputes structure the book, each with the people's own defensive question quoted." },
        { q:"What was wrong with their offerings?", opts:["Too small", "Blind, lame, and diseased animals \u2014 leftovers dressed as worship", "The wrong species"], correct:1, explain:"They kept the good animals and gave God the ones nobody wanted." },
        { q:"What test does God propose?", opts:["A sacrifice contest", "Offer it to your governor and see if he accepts it", "A fast"], correct:1, explain:"A devastating comparison: they showed more care for a human official than for God." }
      ],
      deepDive: "Malachi is a book of arguments, and the people's defensive questions \u2014 'how have you loved us?', 'how have we defiled you?' \u2014 make it feel unnervingly modern. The central charge isn't dramatic rebellion but cheapness: giving God what costs nothing, the animals they couldn't sell. God's test is brilliant and humiliating: try that with your governor. The application isn't about livestock. It's about whether God gets your leftover time, attention, and energy \u2014 the version of you nobody else would accept \u2014 while your best goes everywhere else." },
    { id:242, book:"Malachi", title:"Test me in this", side:"r",
      passage: "God levels a charge with a challenge attached: \u201cWill a mere mortal rob God? Yet you rob me. But you ask, \u2018How are we robbing you?\u2019 In tithes and offerings.\u201d Then the one place in Scripture where God invites a test: \u201cBring the whole tithe into the storehouse... Test me in this, says the LORD Almighty, and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it.\u201d",
      keyVerses: [
        { ref: "Malachi 3:10", text: "Test me in this, says the LORD Almighty, and see if I will not throw open the floodgates of heaven." }
      ],
      questions: [
        { q:"What makes this passage unique?", opts:["Its length", "God explicitly invites His people to test Him", "It's a parable"], correct:1, explain:"Elsewhere testing God is forbidden; here He opens the books on this one point." },
        { q:"What was being withheld?", opts:["Prayers", "Tithes and offerings \u2014 the portion designated for God's work and the poor", "Attendance"], correct:1, explain:"The storehouse supported the temple and the vulnerable; withholding hurt both." },
        { q:"What's the promised response?", opts:["A small return", "Floodgates opened \u2014 blessing beyond room to store", "Silence"], correct:1, explain:"The image is agricultural abundance, not a guaranteed financial scheme." }
      ],
      deepDive: "This is the one place God says 'test me,' which is remarkable given how often Scripture forbids testing Him. The context is a community withholding what supported both worship and the poor, while wondering aloud why things felt dry. A caution worth stating plainly: this isn't a formula for guaranteed wealth, and reading it that way has done real damage. What it is, is an invitation to find out experimentally whether generosity toward God leaves you poorer. Generations have taken the test and reported back. The safest way to engage the passage is the way it's written \u2014 not as a calculation, but as a dare." },
    { id:243, book:"Malachi", title:"The sun of righteousness", side:"c",
      passage: "The Old Testament's final page. God notices those who feared Him: \u201cA scroll of remembrance was written in his presence concerning those who feared the LORD and honored his name. \u2018They will be mine,\u2019 says the LORD... \u2018I will spare them, just as a father has compassion and spares his son.\u2019\u201d And the last promise: \u201cBut for you who revere my name, the sun of righteousness will rise with healing in its rays.\u201d Then a final word about a coming prophet like Elijah \u2014 and four hundred years of silence before an angel appears to a priest named Zechariah.",
      keyVerses: [
        { ref: "Malachi 4:2", text: "But for you who revere my name, the sun of righteousness will rise with healing in its rays." }
      ],
      questions: [
        { q:"What is the scroll of remembrance?", opts:["A record of sins", "A record of those who feared the LORD and honored His name", "A census"], correct:1, explain:"Faithfulness in a discouraging era isn't unnoticed \u2014 it's written down." },
        { q:"What image ends the Old Testament?", opts:["A storm", "The sun of righteousness rising with healing in its rays", "A closed door"], correct:1, explain:"Sunrise \u2014 the last picture before four centuries of waiting." },
        { q:"What follows Malachi historically?", opts:["Immediate fulfillment", "About four hundred years of prophetic silence", "Another prophet"], correct:1, explain:"The next voice is John the Baptist \u2014 the promised messenger who prepares the way." }
      ],
      deepDive: "Malachi ends the Old Testament with sunrise and then silence. The scroll of remembrance is worth pausing on: in a discouraged, cynical era, people who still feared God talked with each other about it, and God had it written down. Faithfulness in a bad season is recorded even when it changes nothing visible. Then the final image \u2014 the sun of righteousness rising with healing in its rays \u2014 and four hundred years of nothing. That gap is part of the story: God's people waited across generations for a dawn they'd been promised. Then a priest named Zechariah met an angel in the temple, and the silence broke." }
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
    "Malachi": "You're partway through Malachi. They offered God the animals nobody wanted. What version of you does God usually get \u2014 your best, or your leftovers?"
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
    "Malachi": "Looking back at Malachi \u2014 the arguments, the blind offerings, \u2018test me in this,\u2019 the scroll of remembrance, and the sun of righteousness \u2014 the Old Testament ends with sunrise and then four hundred years of silence. What are you currently waiting on God for, and what would faithfulness look like during the wait?"
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
        { q:"Who is a \u2018fool\u2019 in this book?", opts:["Someone unintelligent", "Someone unteachable \u2014 who despises correction", "Someone poor"], correct:1, explain:"The fool's defining trait is refusing instruction, which is why brilliant people can qualify." },
        { q:"Why guard the heart \u2018above all else\u2019 (4:23)?", opts:["It's fragile", "Everything you do flows from it \u2014 it's upstream of all behavior", "Tradition"], correct:1, explain:"Behavior management can't fix a polluted source; Proverbs aims at the wellspring." },
        { q:"What does 14:12 warn about?", opts:["Obvious evil", "A way that SEEMS right but ends in death \u2014 sincerity isn't accuracy", "Bad advice from others"], correct:1, explain:"Feeling right is not evidence of being right \u2014 which is why counsel and Scripture exist." },
        { q:"What was the recommended pace for this book \u2014 and why?", opts:["As fast as possible", "One chapter a day \u2014 lived through the day, not just read", "One per week"], correct:1, explain:"A chapter of Proverbs is dense enough to work on you for a whole day \u2014 speed is the one way to waste it." }
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
        { q:"What does hevel picture?", opts:["Garbage", "Vapor \u2014 real but impossible to hold", "A lie"], correct:1, explain:"Not worthless; ungraspable. That distinction changes the whole book." },
        { q:"What phrase marks the experiment's boundary?", opts:["\u2018In the beginning\u2019", "\u2018Under the sun\u2019", "\u2018Forever and ever\u2019"], correct:1, explain:"Life examined on its own terms, without reference to God \u2014 and found unable to satisfy." },
        { q:"What has God set in the human heart?", opts:["Ambition", "Eternity", "Fear"], correct:1, explain:"Built for permanence, living inside time \u2014 which is why temporary things never quite fit." },
        { q:"What's the book's practical counsel amid all the vapor?", opts:["Despair", "Receive ordinary gifts \u2014 food, work, company \u2014 with joy, from God's hand", "Withdraw"], correct:1, explain:"Stop asking life to justify you, and you're finally free to enjoy it." },
        { q:"Where does the book land?", opts:["Nihilism", "Fear God and keep his commandments \u2014 every deed, even hidden, is remembered", "Wealth"], correct:1, explain:"Meaning is restored precisely because nothing is finally forgotten." }
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
        { q:"What characterizes the praise in chapter 4?", opts:["Vague compliments", "Long and specific \u2014 particular things about a particular person", "Comparison to others"], correct:1, explain:"The difference between flattery and being truly known." },
        { q:"How strong is love, per chapter 8?", opts:["Stronger than wealth only", "As strong as death \u2014 unquenchable by many waters", "It fades"], correct:1, explain:"In a world where death always wins, that's the highest claim available." },
        { q:"What can buy love?", opts:["Great wealth", "Nothing \u2014 the offer would be utterly scorned", "Time"], correct:1, explain:"The Song ends declaring love priceless in the strict sense." }
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
        "And the ending: new heavens and a new earth, no more weeping, work that isn't stolen, the wolf beside the lamb."
      ],
      questions: [
        { q:"What was wrong with the worship in chapter 1?", opts:["Wrong music", "It ran alongside injustice \u2014 offerings from hands full of blood", "Too infrequent"], correct:1, explain:"The prophets insist worship is proven by how the vulnerable are treated." },
        { q:"What order does Isaiah 6 follow?", opts:["Call, then cleansing", "Vision, conviction, cleansing, call", "Cleansing, then vision"], correct:1, explain:"The coal came before the commission \u2014 God dealt with his lips before using them." },
        { q:"Who is promised renewed strength in 40:31?", opts:["The naturally strong", "The weary and weak \u2014 even youths stumble", "Soldiers"], correct:1, explain:"And note the descending order: soar, run, and finally walk without fainting \u2014 daily life, given last." },
        { q:"What is the servant's suffering for, in chapter 53?", opts:["His own sins", "Ours \u2014 pierced for our transgressions, bearing our iniquity", "No stated reason"], correct:1, explain:"Substitution is the chapter's engine, and the New Testament quotes it constantly." },
        { q:"What's the entry requirement in chapter 55?", opts:["Wealth", "Thirst \u2014 come, though you have no money", "Religious standing"], correct:1, explain:"The transaction happened elsewhere (chapter 53); what remains is coming." }
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
        { q:"What did God promise Jeremiah at his call?", opts:["Success and honor", "Presence and rescue \u2014 not results", "An easy road"], correct:1, explain:"Forty years of ignored preaching tested that distinction to its limit." },
        { q:"What are the two sins of Jeremiah 2:13?", opts:["Lying and stealing", "Forsaking the spring, and digging broken cisterns", "Idolatry and theft"], correct:1, explain:"Leaving is the first; the exhausting, leaking substitute is the tragedy." },
        { q:"Who received the promise of Jeremiah 29:11?", opts:["Free citizens of Jerusalem", "Exiles in Babylon facing seventy years", "The king"], correct:1, explain:"Its context makes it sturdier: good plans that outlast a long hard middle." },
        { q:"What's new about the new covenant?", opts:["Fewer rules", "The law written on hearts, and sins remembered no more", "A new priesthood only"], correct:1, explain:"Jesus reached for this language over a cup the night before He died." },
        { q:"How should we measure Jeremiah's ministry?", opts:["By its results \u2014 a failure", "By obedience under sustained discouragement", "By his popularity"], correct:1, explain:"By modern metrics he failed; by Scripture's, he stands near the top." }
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
        { q:"How does hope arrive in chapter 3?", opts:["As a feeling", "By deliberate recall \u2014 \u2018this I call to mind\u2019", "Through circumstances improving"], correct:1, explain:"He chooses what to remember when he cannot choose what to feel." },
        { q:"How often are God's mercies renewed?", opts:["Once", "Every morning", "Yearly"], correct:1, explain:"Enough for one day, arriving again tomorrow \u2014 sized exactly for hard seasons." },
        { q:"How does the book end?", opts:["With restoration", "With an unresolved plea \u2014 restore us, unless you have rejected us", "With celebration"], correct:1, explain:"Scripture lets a book end mid-wait, because sometimes life does." }
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
        { q:"Why did the wheeled throne matter to exiles?", opts:["It was impressive", "It showed God is not confined to Jerusalem \u2014 He came to Babylon", "It predicted chariots"], correct:1, explain:"Their assumption was that God stayed behind in the ruins; the vision says otherwise." },
        { q:"What is the watchman responsible for?", opts:["The response", "The warning \u2014 sounding it faithfully", "The outcome of the battle"], correct:1, explain:"Faithfulness measured by the trumpet, not by who listens." },
        { q:"What did the dry bones represent?", opts:["Enemy armies", "Exiles saying \u2018our hope is gone; we are cut off\u2019", "Literal graves"], correct:1, explain:"The vision addresses the death of hope specifically." },
        { q:"Who does the work in the new-heart promise?", opts:["The people", "God \u2014 every verb is \u2018I will\u2019", "The priests"], correct:1, explain:"A transplant, not a resolution \u2014 and His Spirit as the power to walk in it." },
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
        { q:"What image describes their devotion?", opts:["A river", "Morning mist \u2014 sincere and short-lived", "A mountain"], correct:1, explain:"An uncomfortably accurate picture of most shallow devotion." },
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
        { q:"Who receives the outpoured Spirit?", opts:["Prophets only", "All people \u2014 including the young, old, and servants of both sexes", "Priests"], correct:1, explain:"A flood where there had been a trickle." },
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
        { q:"Who was Edom to Israel?", opts:["Strangers", "Brothers \u2014 descendants of Esau", "Longtime allies"], correct:1, explain:"Which is why the language is so sharp; this was family." },
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
        { q:"What's notable about his sermon?", opts:["Its eloquence", "Eight words, no mercy offered \u2014 and the biggest revival in the Bible", "Its length"], correct:1, explain:"The power plainly wasn't in the preacher." },
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
        { q:"How does Nahum relate to Jonah?", opts:["No connection", "Same city, a century later \u2014 repentance not sustained", "Same prophet"], correct:1, explain:"Nineveh's turning under Jonah didn't pass down to the next generation." },
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
        { q:"What's unusual about this book?", opts:["It's a history", "It's a dialogue \u2014 the prophet argues with God", "It has no author"], correct:1, explain:"Complaint, answer, harder complaint, answer \u2014 and none of it rebuked." },
        { q:"What did Habakkuk do after complaining?", opts:["Left", "Climbed the watchtower to wait for God's reply", "Complained louder"], correct:1, explain:"Complaint with expectation \u2014 the posture the whole book models." },
        { q:"Why is 2:4 historically significant?", opts:["It isn't", "Paul quotes it twice; it shaped Luther and the Reformation", "It's obscure"], correct:1, explain:"One line from a minor prophet became the backbone of justification by faith." },
        { q:"What changed by the book's end?", opts:["Everything improved", "Nothing \u2014 the crops still fail; the change is internal", "He moved away"], correct:1, explain:"The resolution is worship, not circumstances." },
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
        { q:"What sin does Zephaniah single out?", opts:["Idolatry only", "Complacency \u2014 practical atheism among the religious", "Poverty"], correct:1, explain:"People who assumed God simply wouldn't act, either way." },
        { q:"What does the \u2018wine on its dregs\u2019 picture?", opts:["Celebration", "Settled, stale indifference from never being stirred", "Wealth"], correct:1, explain:"An image of a life gone thick with unexamined assumptions." },
        { q:"Who is invited to seek the LORD?", opts:["Kings", "The humble of the land", "Priests only"], correct:1, explain:"The invitation runs toward the overlooked." },
        { q:"What is God pictured doing in 3:17?", opts:["Judging", "Delighting, quieting, and singing over His people", "Departing"], correct:1, explain:"One of the few places God Himself is described as singing." },
        { q:"Where does that verse sit in the book?", opts:["At the opening", "After the judgment \u2014 joy on the far side of honest confrontation", "In the middle of the warnings"], correct:1, explain:"The tenderness isn't denial; it's what remains once the confrontation is done." }
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
        { q:"What was the problem?", opts:["Persecution", "Postponement \u2014 paneled houses finished, God's house left in ruins", "No materials"], correct:1, explain:"Nobody decided to abandon it; sixteen years just passed." },
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
        { q:"Why does the donkey matter in 9:9?", opts:["Practicality", "Horses meant war; a donkey signaled peace \u2014 and everyone knew it", "It was cheaper"], correct:1, explain:"Jesus deliberately arranged this entrance." },
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
        { q:"What was wrong with the offerings?", opts:["Too small", "Blind and diseased animals \u2014 what nobody wanted", "The wrong species"], correct:1, explain:"Cheapness dressed as devotion." },
        { q:"What test does God propose about the offerings?", opts:["A contest", "Offer them to your governor and see", "A fast"], correct:1, explain:"They showed more care for a human official than for God." },
        { q:"What's unique about the tithe passage?", opts:["Nothing", "God explicitly invites His people to test Him", "It's a parable"], correct:1, explain:"Elsewhere testing God is forbidden; here He opens the books." },
        { q:"How does the Old Testament end?", opts:["In judgment", "With sunrise promised \u2014 then four hundred years of silence", "With a new king"], correct:1, explain:"The next voice is John the Baptist, the promised messenger." }
      ],
      deepDive: "Malachi closes the Old Testament with an argument and a sunrise. Its central charge isn't dramatic rebellion but cheapness \u2014 giving God what costs nothing while showing more care for a human official. The test God proposes cuts through every defense: try that with your governor. And then two gifts before the silence: a scroll of remembrance, recording the people who kept fearing God in a cynical era when it changed nothing visible, and the promise of the sun of righteousness rising with healing in its rays. Four hundred years later, an angel appeared to a priest in the temple, and the silence broke."
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
      reflection: "Where have you been faithful for a long time without visible return, and started to wonder if it's futile? Who are the people you could talk with about it \u2014 and have you told them?" }
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
  const NEW_TESTAMENT = ["Matthew","Mark","Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians","Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy","Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John","Jude","Revelation"];

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
        e('div', {className:'dl-book-picker-wrap', key:'picker'}, [
          e('div', {className:'dl-testament-label', key:'otl'}, 'Old Testament'),
          e('div', {className:'dl-book-picker', key:'ot'}, booksForward.filter(b => !NEW_TESTAMENT.includes(b)).map(book => {
            const total = bookLessons(book).length;
            const done = bookLessons(book).filter(l => state.completed.includes(l.id)).length;
            const complete = done === total && state.completedCheckpoints.includes(book);
            return e('button', {className:'dl-book-chip' + (book===selectedBook?' active':''), onClick:()=>selectBook(book), key:book}, [
              complete ? e('span', {key:'check'}, String.fromCodePoint(0x2705) + ' ') : null,
              book,
              e('span', {className:'dl-book-chip-progress', key:'p'}, ' ' + done + '/' + total)
            ]);
          })),
          booksForward.some(b => NEW_TESTAMENT.includes(b)) ? e('div', {className:'dl-testament-label nt', key:'ntl'}, 'New Testament') : null,
          booksForward.some(b => NEW_TESTAMENT.includes(b)) ? e('div', {className:'dl-book-picker', key:'nt'}, booksForward.filter(b => NEW_TESTAMENT.includes(b)).map(book => {
            const total = bookLessons(book).length;
            const done = bookLessons(book).filter(l => state.completed.includes(l.id)).length;
            const complete = done === total && state.completedCheckpoints.includes(book);
            return e('button', {className:'dl-book-chip nt' + (book===selectedBook?' active':''), onClick:()=>selectBook(book), key:book}, [
              complete ? e('span', {key:'check'}, String.fromCodePoint(0x2705) + ' ') : null,
              book,
              e('span', {className:'dl-book-chip-progress', key:'p'}, ' ' + done + '/' + total)
            ]);
          })) : null
        ]),
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
