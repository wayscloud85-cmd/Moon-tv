const channelsData = [
  // Sports
  { category:"Sports", name:"DD Sports", url:"https://cdn-6.pishow.tv/live/13/master.m3u8", logo:"https://i.imgur.com/J2Ky5OO.png" },
  { category:"Sports", name:"Star Sports", url:"https://live20.bozztv.com/akamaissh101/ssh101/vboxsungosttamil/playlist.m3u8", logo:"https://i.imgur.com/dfLSnsZ.png" },
  { category:"Sports", name:"Star Sports 2", url:"https://edge4-moblive.yuppcdn.net/drm1/smil:starsports2drm.smil/chunklist_b996000.m3u8", logo:"https://i.imgur.com/5En7pOI.png" },
  { category:"Sports", name:"PTV Sports", url:"https://tvsen5.aynaott.com/Ptvsports/tracks-v1a1/mono.ts.m3u8", logo:"https://i.imgur.com/CPm6GHA.png" },
  { category:"Sports", name:"T Sports", url:"https://tvsen5.aynaott.com/tsports/tracks-v1a1/mono.ts.m3u8", logo:"https://i.postimg.cc/7PdvbtGt/T-Sports-logo-svg.png" },
  { category:"Sports", name:"GTV Sports", url:"https://tvsen5.aynaott.com/Ravc7gPCZpxk/tracks-v1a1/mono.ts.m3u8", logo:"https://i.postimg.cc/0yFRKtBy/gtv-live-cricket-logo.webp" },
  { category:"Sports", name:"RTA Sports", url:"https://rtatv.akamaized.net/Content/HLS/Live/channel(RTA3)/index.m3u8", logo:"https://i.postimg.cc/6qDg2JN8/rtasport.png" },
  { category:"Sports", name:"A Sports", url:"https://stream2.aryzap.com/v1/018a8885b8951eb401a603639363/018a88860ada09831f17035d95dd/ARYBK2H264_720p.m3u8", logo:"https://i.postimg.cc/QNczJxvr/A-Sports-Logo.png" },
  { category:"Sports", name:"Ten Sports", url:"https://tapmadlive.akamaized.net/tapmadold/tensports.smil/chunklist_w1543578491_b1248000_slENG.m3u8", logo:"https://i.imgur.com/nnqpYNm.png" },
  { category:"Sports", name:"Tamasha Live", url:"https://cdn03isb-n.tamashaweb.com:8087/jazzauth/ASIACUP2025-abr/live/ASIACUP2025-promo/chunks.m3u8", logo:"https://i.postimg.cc/VLgm4F21/63c1e52872e94.jpg" },
  { category:"Sports", name:"Myco Live", url:"https://ml-pull-rtmp-pk1.myco.io/AsiaCupMain/hls/AsiaCupMain_Logo-H264-1080p.m3u8", logo:"https://i.postimg.cc/KcBjdCC7/mark.jpg" },
  { category:"Sports", name:"Eurosport", url:"https://cdn24lhr.tamashaweb.com:8087/jazzauth/Eurosport-abr/live/182M/chunks.m3u8", logo:"https://i.postimg.cc/sDGmdfs6/Eurosport-Logo.png" },

  // News
  { category:"News", name:"Geo News", url:"https://jk3lz82elw79-hls-live.5centscdn.com/newgeonews/07811dc6c422334ce36a09ff5cd6fe71.sdp/playlist.m3u8", logo:"https://i.imgur.com/Op4EsaB.png" },
  { category:"News", name:"Discover Pakistan", url:"https://livecdn.live247stream.com/discoverpakistan/web/playlist.m3u8", logo:"https://i.imgur.com/IJH47fJ.png" },
  { category:"News", name:"Dunia News", url:"https://imob.dunyanews.tv/livehd/ngrp:dunyalivehd_2_all/playlist.m3u8", logo:"https://i.postimg.cc/htHtP9VP/dunyanews.png" },
  { category:"News", name:"Lahore News", url:"https://vcdn.dunyanews.tv/lahorelive/ngrp:lnews_1_all/playlist.m3u8", logo:"https://i.imgur.com/bQfQeEA.jpeg" },
  { category:"News", name:"PTV News", url:"https://www.youtube.com/live/RJFJprClvlk?si=2ubPnVsZqsr63DXj", logo:"https://i.imgur.com/Fpn8VU7.png" },
  { category:"News", name:"ARY News", url:"https://cdn02khi.tamashaweb.com:8087/jazzauth/ARYnews-abr/live/vsat-arynews-L/chunks.m3u8", logo:"https://i.postimg.cc/K85QNzjF/arynews.png" },
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
