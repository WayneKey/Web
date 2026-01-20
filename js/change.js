const software = document.querySelector('[data-category="software"]');
const life = document.querySelector('[data-category="life"]');

document.querySelector('[data-filter="software"]').onclick = () => {
  software.classList.remove('d-none');
  life.classList.add('d-none');
};

document.querySelector('[data-filter="life"]').onclick = () => {
  life.classList.remove('d-none');
  software.classList.add('d-none');
};
