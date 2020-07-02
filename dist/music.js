const ap = new APlayer({
  container: document.getElementById('aplayer'),
  mini: true,
  fixed: true,
  autoplay: false,
  theme: '#FADFA3',
  loop: 'all',
  order: 'random',
  preload: 'auto',
  volume: 0.7,
  mutex: true,
  listFolded: false,
  listMaxHeight: 90,
  lrcType: 3,
  audio: [{
    name: 'Momentum Mori',
    artist: 'Danny Baranowsky',
    url: 'https://music.163.com/song/media/outer/url?id=33316344.mp3',
    cover: 'cover.jpg'
  }]
});
