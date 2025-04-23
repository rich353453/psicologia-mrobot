document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('touchstart', () => {
      card.classList.toggle('active');
      const detalhes = card.querySelector('.detalhes');
      if (card.classList.contains('active')) {
        detalhes.style.display = 'block';
      } else {
        detalhes.style.display = 'none';
      }
    });
  });
  
  const carouselTrack = document.querySelector('.carousel-track');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  
  leftArrow.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: -300, behavior: 'smooth' });
  });
  
  rightArrow.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: 300, behavior: 'smooth' });
  });
  
  // Controle do vídeo com áudio
  const video = document.querySelector('#bg-video');
  const playVideoBtn = document.querySelector('#play-video-btn');
  
  playVideoBtn.addEventListener('click', () => {
    video.play();
    playVideoBtn.style.display = 'none'; // Oculta o botão após iniciar o vídeo
  });