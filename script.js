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

// Função para fechar qualquer card expandido existente
function closeExpandedCard() {
  const existingExpanded = document.querySelector('.card-expanded');
  if (existingExpanded) {
    existingExpanded.remove();
  }
}

// Expansão do card ao clicar
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', (e) => {
    // Evitar abrir detalhes completos ao clicar no card expandido
    if (e.target.closest('.card-expanded')) return;

    // Fechar qualquer card expandido existente
    closeExpandedCard();

    // Remover estado ativo de outros cards
    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));

    // Obter dados do card
    const imgSrc = card.querySelector('img').src;
    const title = card.querySelector('h2').textContent;
    const detalhesCompleto = card.querySelector('.detalhes-completo').innerHTML;
    const actor = card.dataset.actor;
    const sinopse = card.dataset.sinopse;

    // Criar o card expandido
    const expandedCard = document.createElement('div');
    expandedCard.classList.add('card-expanded');
    expandedCard.innerHTML = `
      <button class="close-btn">✖</button>
      <img src="${imgSrc}" alt="${title}" />
      <div class="card-expanded-content">
        <h2>${title}</h2>
        <div class="card-expanded-meta">
          <span>2015</span>
          <span>45min por episódio</span>
          <span>Elenco: ${actor}</span>
          <span>Gêneros: Drama, Suspense, Tecnologia</span>
        </div>
        <div class="card-expanded-buttons">
          <button class="btn-play">▶ Assistir</button>
          <button class="btn-add">+ Minha Lista</button>
        </div>
        <p>${sinopse}</p>
        ${detalhesCompleto}
      </div>
    `;

    document.body.appendChild(expandedCard);

    // Fechar o card expandido ao clicar no botão "X"
    expandedCard.querySelector('.close-btn').addEventListener('click', () => {
      expandedCard.remove();
    });

    // Impedir que o clique no card expandido propague
    expandedCard.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  });

  // Mostrar detalhes completos no hover/clique (mantido para dispositivos móveis)
  card.addEventListener('click', (e) => {
    if (!document.querySelector('.card-expanded')) {
      document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    }
  });
});

// Fechar o card expandido ao clicar fora dele
document.addEventListener('click', (e) => {
  if (!e.target.closest('.card') && !e.target.closest('.card-expanded')) {
    closeExpandedCard();
  }
});
