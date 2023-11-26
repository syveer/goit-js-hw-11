import Notiflix from 'notiflix';

export function showLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'block';
}

export function hideLoader() {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
}

export function showError(message) {
  const error = document.getElementById('error');
  error.textContent = message;
  error.style.display = 'block';
}

export function showResults(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = '';

  images.forEach(image => {
    const card = createImageCard(image);
    gallery.appendChild(card);
  });
}

function createImageCard(image) {
  const card = document.createElement('div');
  card.classList.add('photo-card');

  const link = document.createElement('a');
  link.href = image.largeImageURL;
  link.setAttribute('data-lightbox', 'gallery');
  link.setAttribute('data-title', image.tags);

  const img = document.createElement('img');
  img.src = image.webformatURL;
  img.alt = image.tags;
  img.loading = 'lazy';

  const info = document.createElement('div');
  info.classList.add('info');

  ['Likes', 'Views', 'Comments', 'Downloads'].forEach(label => {
    const item = document.createElement('p');
    item.classList.add('info-item');
    item.innerHTML = `<b>${label}</b>: ${image[label.toLowerCase()]}`;
    info.appendChild(item);
  });

  link.appendChild(img);
  card.appendChild(link);
  card.appendChild(info);

  return card;
}
