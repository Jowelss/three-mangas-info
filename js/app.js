const subtitle = document.querySelectorAll('.list-item__subTitle');
const infoBerserk = document.getElementById('info-berserk');
const infoVagabond = document.getElementById('info-vagabond');
const infoVinlandSaga = document.getElementById('info-vinlandsaga');

let activadorBerserk = true;
let activadorVagabond = true;
let activadorVinland = true;

subtitle.forEach((element) => {
  element.addEventListener('click', () => {
    if (element.id === 'berserk' && activadorBerserk) {
      infoBerserk.style.display = 'block';

      activadorBerserk = false;
    } else {
      infoBerserk.style.display = 'none';

      activadorBerserk = true;
    }

    if (element.id === 'vagabond' && activadorVagabond) {
      infoVagabond.style.display = 'block';

      activadorVagabond = false;
    } else {
      infoVagabond.style.display = 'none';

      activadorVagabond = true;
    }

    if (element.id === 'vinland-saga' && activadorVinland) {
      infoVinlandSaga.style.display = 'block';

      activadorVinland = false;
    } else {
      infoVinlandSaga.style.display = 'none';

      activadorVinland = true;
    }
  });
});
