// Controle de exibição dos detalhes nos cards
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

// Controle do carrossel
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
const resetBtn = document.querySelector('#reset-btn');
const mainContent = document.querySelector('.main-title'); // Seleciona o título principal
const carouselContainer = document.querySelector('.carousel-container'); // Seleciona o container dos cards

// Evento para remover o filtro e ocultar o conteúdo
playVideoBtn.addEventListener('click', () => {
  // Remove o filtro do vídeo
  video.classList.add('no-filter');

  // Oculta o conteúdo (títulos e cards)
  mainContent.classList.add('hidden-content');
  carouselContainer.classList.add('hidden-content');

  // Exibe o botão de reset
  resetBtn.style.display = 'block';

  // Oculta o botão de "Tocar Vídeo"
  playVideoBtn.style.display = 'none';
});

// Evento para voltar ao estado padrão
resetBtn.addEventListener('click', () => {
  // Restaura o filtro do vídeo
  video.classList.remove('no-filter');

  // Exibe o conteúdo novamente
  mainContent.classList.remove('hidden-content');
  carouselContainer.classList.remove('hidden-content');

  // Oculta o botão de reset
  resetBtn.style.display = 'none';

  // Exibe o botão de "Tocar Vídeo"
  playVideoBtn.style.display = 'block';
});

// Adiciona gradiente ao vídeo ao descer a página
document.addEventListener('scroll', () => {
  const video = document.getElementById('bg-video');
  if (window.scrollY > 50) {
    video.classList.add('bg-gradient'); // Escurece o fundo ao descer
  } else {
    video.classList.remove('bg-gradient'); // Remove o escurecimento ao voltar ao topo
  }
});