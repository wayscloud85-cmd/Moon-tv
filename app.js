const channelsData = [
  // Sports
  { category:"Sports", name:"DD Sports", url:"https://cdn-6.pishow.tv/live/13/master.m3u8", logo:"https://i.imgur.com/J2Ky5OO.png" },
  { category:"Sports", name:"Star Sports", url:"https://live20.bozztv.com/akamaissh101/ssh101/vboxsungosttamil/playlist.m3u8", logo:"https://i.imgur.com/dfLSnsZ.png" },
  { category:"Sports", name:"Star Sports 2", url:"https://edge4-moblive.yuppcdn.net/drm1/smil:starsports2drm.smil/chunklist_b996000.m3u8", logo:"https://i.imgur.com/5En7pOI.png" },
  { category:"Sports", name:"PTV Sports", url:"https://tvsen5.aynaott.com/Ptvsports/tracks-v1a1/mono.ts.m3u8", logo:"https://i.imgur.com/CPm6GHA.png" },
  { category:"Sports", name:"T Sports", url:"https://tvsen5.aynaott.com/tsports/tracks-v1a1/mono.ts.m3u8", logo:"https://i.postimg.cc/7PdvbtGt/T-Sports-logo-svg.png" },
  // News
  { category:"News", name:"Geo News", url:"https://jk3lz82elw79-hls-live.5centscdn.com/newgeonews/07811dc6c422334ce36a09ff5cd6fe71.sdp/playlist.m3u8", logo:"https://i.imgur.com/Op4EsaB.png" },
  { category:"News", name:"Samaa", url:"https://tapmadlive.akamaized.net/tapmadold/saamanews.smil/chunklist_w496102296_b1248000_sIENG.m3u8", logo:"https://i.imgur.com/r3U4A1P.png" },
  { category:"News", name:"City 42", url:"https://tapmadlive.akamaized.net/tapmadold/city42.smil/chunklist_w1939664964_b748000_slEng.m3u8", logo:"https://i.imgur.com/vcSFetk.png" },
  { category:"News", name:"92 News", url:"https://tapmadlive.akamaized.net/tapmadold/92news.smil/chunklist_w261649448_b1248000_slENG.m3u8", logo:"https://i.imgur.com/gp1Ao4s.jpeg" },
  // Entertainment
  { category:"Entertainment", name:"Hum Sitaray", url:"https://cdn05khi.tamashaweb.com:8087/jazzauth/HumSitaray-abr/live/vsat-107L/chunks.m3u8", logo:"https://i.postimg.cc/YqTq1Z00/Hum-Sitaray-Logo.png" },
  { category:"Entertainment", name:"ARY Zindagi", url:"https://cdn23lhr.tamashaweb.com:8087/jazzauth/ARYzindagi-abr/live/vsat-aryzindagi-L/chunks.m3u8", logo:"https://i.postimg.cc/RFMG0PzV/333721437245ccc832fb7b906272d47f-icon.png" },
  { category:"Entertainment", name:"Geo Kahani", url:"https://jk3lz82elw79-hls-live.5centscdn.com/harPalGeo/955ad3298db330b5ee880c2c9e6f23a0.sdp/playlist.m3u8", logo:"https://i.postimg.cc/7ZmSsPJy/geokahani.png" },
  { category:"Entertainment", name:"ARY Digital", url:"https://cdn05khi.tamashaweb.com:8087/jazzauth/ARYdigital-abr/live/vsat-ary-L/chunks.m3u8", logo:"https://i.imgur.com/TVP7g03.png" },
  // Documentary
  { category:"Documentary", name:"Discovery", url:"https://cdn12isb.tamashaweb.com:8087/jazzauth/DiscoveryHD-abr/live/178M/chunks.m3u8", logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2019_Discovery_logo.svg/512px-2019_Discovery_logo.svg.png" }
];

const categoryColors = { 
  "Sports":"linear-gradient(to bottom left, #00ffff, #ccff33)", 
  "News":"linear-gradient(135deg, #ff7f50, #ffd700)", 
  "Entertainment":"linear-gradient(to bottom right, #ff69b4, #ffb347)", 
  "Documentary":"linear-gradient(to bottom right, #00bfff, #1e90ff)" 
};

const channelsView = document.getElementById("channels-view");
const playerView = document.getElementById("player-view");
const video = document.getElementById("video");
const root = document.getElementById("channels-root");
const backBtn = document.getElementById("back-btn");
let hls;

// Sidebar toggle
const sidebar = document.getElementById('sidebar');
document.getElementById('sidebar-toggle').addEventListener('click', ()=> sidebar.classList.toggle('active'));
document.getElementById('sidebar-close').addEventListener('click', ()=> sidebar.classList.remove('active'));

// Play stream
function playStream(url){
  if(hls) hls.destroy();
  if(Hls.isSupported()){ hls = new Hls(); hls.loadSource(url); hls.attachMedia(video); hls.on(Hls.Events.MANIFEST_PARSED, ()=>video.play()); }
  else { video.src = url; video.play(); }
  channelsView.style.display="none"; playerView.style.display="flex";
}
backBtn.addEventListener("click", ()=> { if(hls) hls.destroy(); video.pause(); video.src=""; playerView.style.display="none"; channelsView.style.display="flex"; });

// Render channels
const categories = [...new Set(channelsData.map(ch=>ch.category))];
categories.forEach(cat=>{
  const title = document.createElement('div'); title.className='category-title'; title.textContent=cat.toUpperCase(); root.appendChild(title);
  const container = document.createElement('div'); container.className='channel-container';
  channelsData.filter(ch=>ch.category===cat).forEach(ch=>{
    const div = document.createElement('div'); div.className='channel'; div.style.background=categoryColors[cat]||'rgba(255,255,255,0.7)';
    div.innerHTML=`
      <img src="${ch.logo}" alt="${ch.name}">
      <div class="channel-name">${ch.name}</div>
      <div class="live-badge">LIVE</div>
      <div class="menu-container">
        <button class="menu-btn">⋮</button>
        <div class="menu-options">
          <button class="like-btn">Like</button>
        </div>
      </div>`;
    div.querySelector('img').addEventListener('click', ()=>playStream(ch.url));
    const menuBtn=div.querySelector('.menu-btn');
    const menuOptions=div.querySelector('.menu-options');
    menuBtn.addEventListener('click', e=>{ e.stopPropagation(); menuOptions.style.display=menuOptions.style.display==='block'?'none':'block'; });
    const likeBtn=div.querySelector('.like-btn');
    likeBtn.addEventListener('click', e=>{ e.stopPropagation(); likeBtn.classList.toggle('liked'); likeBtn.textContent=likeBtn.classList.contains('liked')?'Liked':'Like'; });
    container.appendChild(div);
  });
  root.appendChild(container);
});
