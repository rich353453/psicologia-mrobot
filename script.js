/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #fff;
  background-color: #141414;
  overflow-x: hidden;
}

/* Header */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
  position: fixed;
  width: 100%;
  z-index: 10;
}

.logo {
  font-size: 24px;
  color: #e50914;
  font-weight: bold;
}

.logo .sub {
  font-size: 16px;
  color: white;
  margin-left: 10px;
}

nav a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-size: 14px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

nav a:hover {
  opacity: 1;
}

/* Estilo da seção de destaque */
.highlight {
  position: relative;
  height: 80vh;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 40px;
  background-color: #000;
}

.highlight-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: opacity 0.5s ease;
}

.highlight-overlay.hidden {
  opacity: 0;
}

.highlight-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

#bg-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  filter: brightness(0.5);
}

.highlight-content {
  z-index: 2;
  color: #fff;
  max-width: 600px;
}

.highlight-content h1 {
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
}

.highlight-content p {
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 1.5;
}

.highlight-buttons {
  display: flex;
  gap: 10px;
}

.btn-play {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background: #e50914;
  color: #fff;
  transition: background 0.3s ease;
}

.btn-play:hover {
  background: #f40612;
}

.btn-info {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.8);
  color: #000;
  transition: background 0.3s ease;
}

.btn-info:hover {
  background: rgba(255, 255, 255, 1);
}

/* Ajuste para os cards */
.carousel {
  margin-top: 20px;
  padding: 20px 40px;
}

.carousel-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-left: 40px;
}

.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
}

.carousel-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.carousel-track::-webkit-scrollbar {
  display: none;
}

.card {
  background: #222;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  flex-shrink: 0;
  transition: transform 0.3s ease, box-shadow 0.3s ease, height 0.3s ease;
  height: 600px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.card:hover {
  transform: scale(1.1) rotateY(5deg);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
  z-index: 2;
  height: 650px;
}

.card img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  transition: filter 0.3s ease;
}

.card:hover img {
  filter: brightness(0.8);
}

.card-content {
  padding: 15px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  height: calc(100% - 400px);
  display: flex;
  flex-direction: column;
}

.card-content h2 {
  font-size: 18px;
  margin-bottom: 8px;
}

.tag {
  display: inline-block;
  background: #e50914;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  margin-bottom: 8px;
}

.card-content p {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 8px;
}

.detalhes {
  font-size: 12px;
  color: #ddd;
  line-height: 1.4;
  margin-bottom: 8px;
}

.detalhes-completo {
  display: none;
  font-size: 12px;
  color: #ddd;
  line-height: 1.4;
  opacity: 0;
  transition: opacity 0.3s ease;
  overflow-y: auto;
  max-height: 200px;
  background: rgba(0, 0, 0, 0.9);
  padding: 10px;
  border-radius: 4px;
}

.detalhes-completo h3 {
  font-size: 14px;
  margin: 10px 0 5px;
}

.card:hover .detalhes-completo, .card.active .detalhes-completo {
  display: block;
  opacity: 1;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  z-index: 5;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.arrow:hover {
  background: rgba(0, 0, 0, 0.8);
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}

.footer {
  text-align: center;
  padding: 20px;
  background-color: #141414;
  color: #fff;
  font-size: 14px;
  margin-top: 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Responsividade */
@media (max-width: 768px) {
  .highlight-content h1 {
    font-size: 32px;
  }

  .highlight-content p {
    font-size: 16px;
  }

  .card {
    width: 200px;
    height: 450px;
  }

  .card img {
    height: 250px;
  }

  .detalhes, .detalhes-completo {
    font-size: 10px;
  }

  .detalhes-completo {
    max-height: 150px;
  }

  .card:hover, .card.active {
    height: 500px;
    transform: scale(1.05);
  }

  .card-content {
    height: calc(100% - 250px);
  }

  .left-arrow {
    left: 0;
  }

  .right-arrow {
    right: 0;
  }
}
