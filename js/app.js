const button = document.getElementById('link');
const berserk = document.getElementById('berserk');
const coso = document.querySelectorAll('.coso');
let activador = true;

button.addEventListener('click', () => {
  if (activador) {
    berserk.style.display = 'block';

    coso.forEach((element) => {
      return (element.style.top = '60px');
    });
    activador = false;
  } else {
    berserk.style.display = 'none';

    coso.forEach((element) => {
      return (element.style.top = '0px');
    });
    activador = true;
  }
});
