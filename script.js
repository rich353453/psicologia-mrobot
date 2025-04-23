// Controle do vídeo
const video = document.querySelector('#bg-video');
const playVideoBtn = document.querySelector('.btn-play');
const infoButton = document.querySelector('.btn-info');
const overlay = document.querySelector('.highlight-overlay');

// Função para reproduzir o vídeo
playVideoBtn.addEventListener('click', () => {
  overlay.classList.add('hidden');
  video.muted = false;
  video.play().then(() => {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }).catch(err => {
    console.error('Erro ao reproduzir o vídeo:', err);
    alert('Não foi possível reproduzir o vídeo. Verifique o console para detalhes.');
  });
});

// Função para exibir mais informações
infoButton.addEventListener('click', () => {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
    background: #222; color: #fff; padding: 20px; border-radius: 8px;
    z-index: 100; max-width: 500px; text-align: center;
  `;
  modal.innerHTML = `
    <h2>Conexões e Sentimentos</h2>
    <p>Explore as emoções dos personagens de Mr. Robot e suas conexões com histórias reais.</p>
    <button onclick="this.parentElement.remove()">Fechar</button>
  `;
  document.body.appendChild(modal);
});

// Controle do carrossel
const carouselTrack = document.querySelector('.carousel-track');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

// Evento para rolar o carrossel
leftArrow.addEventListener('click', () => {
  carouselTrack.scrollBy({ left: -300, behavior: 'smooth' });
});

rightArrow.addEventListener('click', () => {
  carouselTrack.scrollBy({ left: 300, behavior: 'smooth' });
});

// Interação nos cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});
