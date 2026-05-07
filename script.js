const emotions = [
    { id:1, name:"Mirror", color:"#3b82f6", emoji:"&#x1FA9E;", meaning:"As cool as a cucumber", proverb:"'Still waters run deep.' True peace comes from accepting the reflection you see in the mirror.", q:"When someone is 'as cool as a cucumber', what are they showing?", opts:["Total panic","Calmness and self-control","Extreme anger"], correct:1, reason:"This idiom perfectly reflects the calmness and self-acceptance of Mirror Blue." },
    { id:2, name:"Candle", color:"#fbbf24", emoji:"&#x1F56F;", meaning:"Light at the end of the tunnel", proverb:"'Better to light a candle than curse the darkness.' Your hope is your internal spark.", q:"What does seeing the 'light at the end of the tunnel' signify?", opts:["Hope in a difficult situation","The end of a party","Being lost in the dark"], correct:0, reason:"It represents the 'inner light' and hope that Candle Yellow provides." },
    { id:3, name:"Feather", color:"#f472b6", emoji:"&#x1FAB6;", meaning:"Light as a feather", proverb:"'Kindness is the language which the deaf can hear.' Carry your heart without the weight of the world.", q:"If a feeling is 'light as a feather', how would you describe it?", opts:["Burdened and heavy","Gentle and compassionate","Cold and distant"], correct:1, reason:"Feather Pink is about softness and the lack of emotional weight." },
    { id:4, name:"Balloon", color:"#ef4444", emoji:"&#x1F388;", meaning:"Full of beans", proverb:"'A rising tide lifts all boats.' Let your motivation inflate your soul and lift your spirit.", q:"What does it mean to be 'full of beans'?", opts:["Feeling tired","Having lots of energy and spirit","Being hungry"], correct:1, reason:"Balloon Red is the engine of energy and motivation." },
    { id:5, name:"Key", color:"#f59e0b", emoji:"&#x1F511;", meaning:"The key to success", proverb:"'Every solution breeds new problems, but every lock has a key.' You hold the value within.", q:"Finding the 'key to success' involves which state of mind?", opts:["Giving up easily","Discovery and value-finding","Waiting for luck"], correct:1, reason:"Key Gold represents finding solutions and recognizing your own value." },
    { id:6, name:"Squishy", color:"#a855f7", emoji:"&#x1F7E3;", meaning:"Take a load off", proverb:"'Blessed are the flexible, for they shall not be bent out of shape.' Squeeze out the stress.", q:"When you 'take a load off', what are you doing?", opts:["Increasing your work","Relaxing and reducing stress","Carrying more weight"], correct:1, reason:"Squishy Purple is the ultimate tool for stress reduction and relief." },
    { id:7, name:"Stone", color:"#6b7280", emoji:"&#x1F5FF;", meaning:"Leave no stone unturned", proverb:"'Steady as a rock.' Patience is not the ability to wait, but the ability to keep a good attitude while waiting.", q:"To 'leave no stone unturned' requires which quality?", opts:["Laziness","Patience and resilience","Speed"], correct:1, reason:"Stone Grey represents the power of thoroughness and steady endurance." },
    { id:8, name:"Hourglass", color:"#92400e", emoji:"&#x231B;", meaning:"In the nick of time", proverb:"'Time is a great healer.' Balance the grains of your reality with the flow of the universe.", q:"Doing something 'in the nick of time' emphasizes what?", opts:["Wasting time","Precise timing and realism","Living in the past"], correct:1, reason:"Hourglass Brown is about the reality of time and finding balance within it." },
    { id:9, name:"Compass", color:"#10b981", emoji:"&#x1F9ED;", meaning:"Finding your feet", proverb:"'Growth is the only evidence of life.' Trust your inner compass to lead you through the wild.", q:"What happens when you are 'finding your feet'?", opts:["You are getting lost","You are gaining confidence and direction","You are standing still"], correct:1, reason:"Compass Green is all about making decisions and personal growth." },
    { id:10, name:"Heart", color:"#f43f5e", emoji:"&#x2764;&#xFE0F;", meaning:"Wear your heart on your sleeve", proverb:"'Empathy is seeing with the eyes of another.' To love is to recognize yourself in the other.", q:"What does it mean to 'wear your heart on your sleeve'?", opts:["Hiding your emotions","Showing your feelings and empathy openly","Being very angry"], correct:1, reason:"Heart Red/Pink represents the bridge of open connection and empathy." },
    { id:11, name:"Notebook", color:"#f8fafc", emoji:"&#x1F4D3;", meaning:"Turn over a new leaf", proverb:"'A journey of a thousand miles begins with a single thought.' Express the truth to start fresh.", q:"When you 'turn over a new leaf', what are you starting?", opts:["An old habit","A fresh beginning and new expression","A different book"], correct:1, reason:"Notebook White provides the canvas for fresh start." }
];

function triggerBurst(emoji) {
    const fx = document.getElementById('fx-container');
    for(let i=0; i<20; i++) {
        const b = document.createElement('div');
        b.className = 'burst-emoji';
        b.innerHTML = emoji;
        b.style.left = '50%'; b.style.top = '50%';
        b.style.setProperty('--tx', `${(Math.random()-0.5)*800}px`);
        b.style.setProperty('--ty', `${(Math.random()-0.5)*800}px`);
        b.style.setProperty('--tr', `${Math.random()*720}deg`);
        fx.appendChild(b);
        setTimeout(() => b.remove(), 1000); 
    }
}

function navigateTo(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function filterItems() {
    const grid = document.getElementById('items-grid');
    grid.innerHTML = '';
    emotions.forEach(e => {
        const card = document.createElement('div');
        card.className = 'emotion-card';
        card.style.setProperty('--neon', e.color);
        card.onclick = () => {
            triggerBurst(e.emoji);
            openDetail(e.id, 'info');
        };
        card.innerHTML = `<span class="text-6xl mb-6">${e.emoji}</span><div class="text-center"><h3 class="font-bold text-base mb-1">${e.name}</h3><p class="text-[10px] text-gray-500 uppercase tracking-widest">${e.meaning.split(' ')[0]}...</p></div>`;
        grid.appendChild(card);
    });
}

function openDetail(id, mode) {
    const e = emotions.find(x => x.id === id);
    const detailCont = document.getElementById('detail-container');
    detailCont.style.backgroundColor = e.color + "0D"; 
    detailCont.style.borderColor = e.color + "33"; 

    document.documentElement.style.setProperty('--detail-neon', e.color);
    document.getElementById('d-emoji').innerHTML = e.emoji;
    document.getElementById('d-title').innerText = e.name;
    document.getElementById('d-meaning').innerText = e.meaning;
    document.getElementById('d-meaning').style.color = e.color;
    document.getElementById('d-proverb').innerText = e.proverb;
    document.getElementById('t-question').innerText = e.q;
    document.getElementById('t-reason').innerText = e.reason;

    const optsDiv = document.getElementById('t-options');
    optsDiv.innerHTML = '';
    e.opts.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = "p-5 rounded-2xl bg-white/5 border border-white/10 text-left transition-all font-semibold";
        btn.innerText = opt;
        btn.onclick = () => {
            const allBtns = optsDiv.querySelectorAll('button');
            allBtns.forEach(b => b.disabled = true);
            if(idx === e.correct) {
                btn.style.borderColor = "#4ade80"; btn.style.background = "rgba(74,222,128,0.1)";
                triggerBurst('✅');
            } else {
                btn.style.borderColor = "#f87171"; btn.style.background = "rgba(248,113,113,0.1)";
                allBtns[e.correct].style.borderColor = "#4ade80"; allBtns[e.correct].style.background = "rgba(74,222,128,0.1)";
                triggerBurst('❌');
            }
            document.getElementById('t-feedback').classList.remove('inner-hidden');
        };
        optsDiv.appendChild(btn);
    });

    document.getElementById('info-mode').classList.toggle('inner-hidden', mode === 'test');
    document.getElementById('test-mode').classList.toggle('inner-hidden', mode === 'info');
    document.getElementById('t-feedback').classList.add('inner-hidden');
    document.getElementById('start-test-btn').onclick = () => openDetail(id, 'test');
    navigateTo('detail-view');
}

const container = document.getElementById('floatingEmojis');
const icons = ["✨","🧿","🌀","💫","🪷","💎"];
for (let i = 0; i < 20; i++) {
    const span = document.createElement('span');
    span.className = 'fly-emoji';
    span.innerHTML = icons[i % icons.length];
    span.style.cssText = `--dur:${15+Math.random()*15}s;--delay:-${Math.random()*20}s;--top:${Math.random()*95}%;--drift:${(Math.random()-0.5)*300}px;--spin:${Math.random()*360}deg;`;
    container.appendChild(span);
}

filterItems();