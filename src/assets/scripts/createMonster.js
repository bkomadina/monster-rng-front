import { renderMonster } from './renderMonster.js';
import { determineDifficulty } from './difficulty.js';
import { fightMonster } from './fightMonster.js';

const formCreate = document.getElementById('form-create');
const formDifficulty = document.getElementById('form-difficulty');

const clearForm = (form) => {
  form.reset();
};

export const notificationToggle = (text, type = 'timed') => {
  const notification = document.querySelector('.notification');
  const notificationText = document.querySelector('#notificationType');
  
  notification.classList.toggle('active');
  notificationText.classList.toggle('notificationText');
  notificationText.innerText = `${text}`;

  const notificationHandler = () => {
    notificationText.innerText = ``;
    notification.classList.toggle('active');
    notificationText.classList.toggle('notificationText');
    window.removeEventListener('mouseup', notificationHandler);
  };
  
  if (type === 'stay') {
    window.addEventListener('mouseup', notificationHandler);
  } else {
    setTimeout(notificationHandler, 2000);
  }
};

export const closingAnimation = () => {
  document.querySelector('.up').classList.toggle('up-close');
  document.querySelector('.down').classList.toggle('down-close');
};

export const createMonsterHandler = (event) => {
  event.preventDefault();
  const formCreate = document.getElementById('form-create');
  fetch('http://localhost:3000/add-monster', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formCreate.name.value.toUpperCase(),
      HP: formCreate.HP.value,
      damage: formCreate.damage.value,
      difficulty: determineDifficulty(
        formCreate.HP.value,
        formCreate.damage.value
      ),
    }),
  })
    .then((response) => {
      if (response.status === 400) {
        throw new Error(
          'Too crazy monster stats'
        );
      }
      return response.json();
    })
    .then((data) => {
      notificationToggle('Monster created!');
      window.localStorage.setItem('last created', JSON.stringify(data._id));
      clearForm(formCreate);
    })
    .catch((error) => {
      console.error(error);
      notificationToggle(error);
    });
};

export const getMonsterHandler = (event) => {
  event.preventDefault();
  const formDifficulty = document.getElementById('form-difficulty');
  const difficulty = formDifficulty.querySelector('input[name="difficulty"]:checked').value;
  if (difficulty === 'last') {
    const lastCreatedId = JSON.parse(window.localStorage.getItem('last created'));
    
    fetch('http://localhost:3000/lastcreated/' + lastCreatedId)
      .then((response) => {
        if (response.status === 404) {
          throw new Error(
            'Your last created monster escaped. Create another one'
          );
        }
        return response.json();
      })
      .then((data) => {
        window.randomMonster = {
          name: data.name,
          HP: data.HP,
          damage: data.damage,
        };
        formCreate.removeEventListener('submit', createMonsterHandler);
        formDifficulty.removeEventListener('submit', getMonsterHandler);
        closingAnimation();
        setTimeout(() => {
          renderMonster();
          fightMonster();
        }, 600);
      })
      .catch((error) => {
        console.error(error);
        notificationToggle(error);
      });
  } else {
    fetch('http://localhost:3000/monster/' + difficulty)
      .then((response) => {
        if (response.status === 404) {
          throw new Error(
            'Could not find monster with selected difficulty, please create more'
          );
        }
        
        return response.json();
      })
      .then((data) => {
        window.randomMonster = {
          name: data.name,
          HP: data.HP,
          damage: data.damage,
        };
        formCreate.removeEventListener('submit', createMonsterHandler);
        formDifficulty.removeEventListener('submit', getMonsterHandler);
        closingAnimation();
        setTimeout(() => {
          renderMonster();
          fightMonster();
        }, 600);
      })
      .catch((error) => {
        console.error(error);
        notificationToggle(error);
      });
  }
};

formCreate.addEventListener('submit', createMonsterHandler);
formDifficulty.addEventListener('submit', getMonsterHandler);