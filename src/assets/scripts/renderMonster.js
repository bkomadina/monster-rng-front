import { closingAnimation } from "./createMonster.js";

export const renderMonster = () => {
  const mainBody = document.getElementById("background");
  mainBody.innerHTML = "";
  mainBody.innerHTML = `
    <section>
    <section class="up up-close">
      <h1 class="monster-name">${randomMonster.name} HP:</h1>
      <progress id="monster-hp" max="" value=""></progress>
      <h1 class="player">Your HP:</h1>
      <progress id="player-hp" max="" value=""></progress>
      <div class="fight-container">
        <button id="att-btn" class="fight-btn">Attack</button>
        <button id="heavy-att-btn" class="fight-btn">Heavy Attack</button>
      </div>
    </section>
    </section>
    <section>
    <section class="down down-close">
      <div class="heal">
        <button id="heal-btn" class="fight-btn">Heal</button>
      </div>
      <button id="retry-btn">Retry</button>
      <button id="home-btn">Create another monster</button>
    </section>
    </section>
  `;
  setTimeout(() => {
    closingAnimation();
  }, 100);
};
