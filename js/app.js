const infoBerserk = document.getElementById('info-berserk');
const moveBerserk = document.querySelector('.move-berserk');
const infoVagabond = document.getElementById('info-vagabond');
const moveVagabond = document.querySelector('.move-vagabond');
const infoVinlandSaga = document.getElementById('info-vinlandsaga');
const moveVinlandSaga = document.querySelector('.move-vinlandsaga');
const subtitle = document.querySelectorAll('.list-item__subTitle');
let activador = true;
let coso = true;
let pero = true;

subtitle.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.id === 'berserk' && activador) {
      infoBerserk.style.display = 'block';
      moveVagabond.style.top = '60px';
      moveVinlandSaga.style.top = '60px';

      activador = false;
      return;
    } else {
      infoBerserk.style.display = 'none';
      moveVagabond.style.top = '0px';
      moveVinlandSaga.style.top = '0px';

      activador = true;
    }

    if (element.id === 'vagabond' && coso) {
      infoVagabond.style.display = 'block';
      moveVinlandSaga.style.top = '60px';

      coso = false;
      return;
    } else {
      infoVagabond.style.display = 'none';
      moveVinlandSaga.style.top = '0px';

      coso = true;
    }

    if (element.id === 'vinland-saga' && pero) {
      infoVinlandSaga.style.display = 'block';

      pero = false;
      return;
    } else {
      infoVinlandSaga.style.display = 'none';

      pero = true;
    }
  });
});
