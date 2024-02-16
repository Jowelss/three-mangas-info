const button = document.getElementById('link');
const berserk = document.getElementById('berserk');

button.addEventListener('click', () => {
  let activador = true;
  if (activador) {
    berserk.style.display = 'block';
    activador = false;
  }
  if (activador === false) {
    berserk.style.display = 'none';
  }
});
