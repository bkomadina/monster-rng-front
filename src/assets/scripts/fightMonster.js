import { renderHome } from './renderHome.js';
import { closingAnimation, notificationToggle } from './createMonster.js';

export const fightMonster = () => {
  let monsterMaxHp = +randomMonster.HP;
  let monsterDamage = +randomMonster.damage;
  let currentMonsterHp;

  const playerMaxHp = 100;
  const playerDamage = 10;
  let currentPlayerHp;
  let healUses;

  const monsterHpProg = document.getElementById('monster-hp');
  const playerHpProg = document.getElementById('player-hp');
  const attackBtn = document.getElementById('att-btn');
  const heavyAttackkBtn = document.getElementById('heavy-att-btn');
  const healBtn = document.getElementById('heal-btn');
  const retryBtn = document.getElementById('retry-btn');
  const homeBtn = document.getElementById('home-btn');

  const setMaxHp = (monsterHp) => {
    monsterHpProg.max = monsterHp;
    monsterHpProg.value = monsterHp;
    currentMonsterHp = monsterHp;

    playerHpProg.max = playerMaxHp;
    playerHpProg.value = playerMaxHp;
    currentPlayerHp = playerMaxHp;
    healUses = true;
  };

  const randomDamage = () => {
    return Math.round((Math.random() - 0.5) * 10);
  };

  const monsterAttack = () => {
    let monsterDmg = monsterDamage + randomDamage();
    if (monsterDmg < 0) {
      monsterDmg = 0;
    }
    currentPlayerHp -= monsterDmg;
    playerHpProg.value = currentPlayerHp;
  };

  const playerAttack = () => {
    let playerDmg = playerDamage + randomDamage();
    currentMonsterHp -= playerDmg;
    monsterHpProg.value = currentMonsterHp;
    monsterAttack();
    checkWin();
  };

  const playerHeavyAtt = () => {
    let playerDmg = playerDamage * 1.8 + randomDamage();
    currentMonsterHp -= playerDmg;
    monsterHpProg.value = currentMonsterHp;
    monsterAttack();
    if (checkWin()) {
      return;
    } else {
      monsterAttack();
    }
  };

  const playerHeal = () => {
    if (healUses) {
      currentPlayerHp += 45 + randomDamage();
      if (currentPlayerHp >= playerMaxHp) {
        currentPlayerHp = playerMaxHp;
        playerHpProg.value = currentPlayerHp;
      } else {
        playerHpProg.value = currentPlayerHp;
      }
      healUses = false;
      monsterAttack();
      checkWin();
    } else {
      notificationToggle('No healing uses left', 'stay');
    }
  };

  const checkWin = () => {
    if (currentMonsterHp <= 0 && currentPlayerHp >= 0) {
      notificationToggle('You won!', 'stay');
      setMaxHp(monsterMaxHp);
      return true;
    } else if (currentPlayerHp <= 0 && currentMonsterHp >= 0) {
      notificationToggle('You lost!', 'stay');
      setMaxHp(monsterMaxHp);
      return true;
    } else if (currentMonsterHp <= 0 && currentPlayerHp <= 0) {
      notificationToggle('Draw!', 'stay');
      setMaxHp(monsterMaxHp);
      return true;
    }
  };

  const clearListenersRenderHomeHandler = () => {
    attackBtn.removeEventListener('click', playerAttack);
    heavyAttackkBtn.removeEventListener('click', playerHeavyAtt);
    healBtn.removeEventListener('click', playerHeal);
    retryBtn.removeEventListener('click', setMaxHp.bind(this, monsterMaxHp));
    homeBtn.removeEventListener('click', renderHome);
    closingAnimation();
    setTimeout(() => {
      renderHome();
    }, 600);
  };

  setMaxHp(monsterMaxHp);

  attackBtn.addEventListener('click', playerAttack);
  heavyAttackkBtn.addEventListener('click', playerHeavyAtt);
  healBtn.addEventListener('click', playerHeal);

  retryBtn.addEventListener('click', setMaxHp.bind(this, monsterMaxHp));

  homeBtn.addEventListener('click', clearListenersRenderHomeHandler);
};
