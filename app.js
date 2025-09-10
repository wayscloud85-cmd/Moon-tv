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
  const title = document.createElement('div'); 
  title.className='category-title'; 
  title.textContent=cat.toUpperCase(); 
  root.appendChild(title);

  const container = document.createElement('div'); 
  container.className='channel-container';

  channelsData.filter(ch=>ch.category===cat).forEach(ch=>{
    const div = document.createElement('div'); 
    div.className='channel'; 
    div.style.background=categoryColors[cat]||'rgba(255,255,255,0.7)';

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

    const menuBtn = div.querySelector('.menu-btn');
    const menuOptions = div.querySelector('.menu-options');
    menuBtn.addEventListener('click', e=>{ e.stopPropagation(); menuOptions.style.display=menuOptions.style.display==='block'?'none':'block'; });

    const likeBtn = div.querySelector('.like-btn');
    likeBtn.addEventListener('click', e=>{ e.stopPropagation(); likeBtn.classList.toggle('liked'); likeBtn.textContent=likeBtn.classList.contains('liked')?'Liked':'Like'; });

    container.appendChild(div);
  });

  root.appendChild(container);
});
