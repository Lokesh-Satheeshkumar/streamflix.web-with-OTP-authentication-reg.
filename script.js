document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.querySelector('.btn');
  const infoBtn = document.querySelector('.btn.btn-secondary');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      alert('Click ok to play video!');
    });
  }

  if (infoBtn) {
    infoBtn.addEventListener('click', () => {
      alert('More info clicked! Movie details coming soon.');
    });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  const playBtn = document.querySelector('.btn');
  const infoBtn = document.querySelector('.btn.btn-secondary');
  const videoModal = document.getElementById('videoModal');
  const closeModal = document.getElementById('closeModal');
  const videoPlayer = document.getElementById('videoPlayer');

  if (playBtn) {
    playBtn.addEventListener('click', () => {
      videoModal.style.display = 'block';
      videoPlayer.play();
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      videoModal.style.display = 'none';
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    });
  }

  // Close modal when clicking outside video content
  window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
      videoModal.style.display = 'none';
      videoPlayer.pause();
      videoPlayer.currentTime = 0;
    }
  });

  if (infoBtn) {
    infoBtn.addEventListener('click', () => {
      alert('More info clicked! Movie details coming soon.');
    });
  }
});
