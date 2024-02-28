const subtitle = document.querySelectorAll('.list-item__subTitle');
const infoBerserk = document.getElementById('info-berserk');
const moveBerserk = document.querySelector('.move-berserk');
const infoVagabond = document.getElementById('info-vagabond');
const moveVagabond = document.querySelector('.move-vagabond');
const infoVinlandSaga = document.getElementById('info-vinlandsaga');
const moveVinlandSaga = document.querySelector('.move-vinlandsaga');
const coso = document.getElementById('card');

let activadorBerserk = true;
let activadorVagabond = true;
let activadorVinland = true;

subtitle.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.id === 'berserk' && activadorBerserk) {
      infoBerserk.style.display = 'block';
      moveVagabond.style.top = '60px';
      moveVinlandSaga.style.top = '60px';

      activadorBerserk = false;
      return;
    } else {
      infoBerserk.style.display = 'none';
      moveVagabond.style.top = '0px';
      moveVinlandSaga.style.top = '0px';

      activadorBerserk = true;
    }

    if (element.id === 'vagabond' && activadorVagabond) {
      infoVagabond.style.display = 'block';
      moveVinlandSaga.style.top = '60px';

      activadorVagabond = false;
      return;
    } else {
      infoVagabond.style.display = 'none';
      moveVinlandSaga.style.top = '0px';

      activadorVagabond = true;
    }

    if (element.id === 'vinland-saga' && activadorVinland) {
      infoVinlandSaga.style.display = 'block';

      activadorVinland = false;
      return;
    } else {
      infoVinlandSaga.style.display = 'none';

      activadorVinland = true;
    }
  });
});
