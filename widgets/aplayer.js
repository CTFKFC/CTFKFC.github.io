const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  audio: [
    {
      name: '怎叹', 
      url: '/music/song1.mp3'
    },
    {
      name: '唐人恋曲',
      url: '/music/jwtsgp.mp3'
    }
  ]
});
