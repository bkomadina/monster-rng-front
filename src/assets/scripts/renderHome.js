import { getMonsterHandler } from "./createMonster.js";
import { createMonsterHandler } from "./createMonster.js";
import { closingAnimation } from "./createMonster.js";

export const renderHome = () => {
  const mainBody = document.getElementById("background");
  mainBody.innerHTML = "";
  mainBody.innerHTML = `
  <section>
  <section class="up up-close">
      <h1 class="top-heading">Create your monster</h1>
      <form id="form-create">
        <label for="name">Name:</label>
        <input id="name" type="text" pattern="[a-zA-Z0-9\s]{2,20}" title="2 to 20 letters, no special characters" required="required" autocomplete="off">
        <label for="HP">HP:</label>
        <input id="HP" type="number" min="15" max="160">
        <label for="damage">Damage:</label>
        <input id="damage" type="number" min="5" max="30">
        <button type="submit">Create</button>
      </form>
      <!-- <div class="border"></div> -->
    </section>
    </section>
    <section>
    <section class="down down-close">
      <h1 class="bottom-heading">Select difficulty:</h1>
      <form id="form-difficulty">
          <ul>
            <li>
              <input name="difficulty" id="easy" value="easy" type="radio" checked="checked" class="circle">
              <label for="easy">Easy</label>
            </li>
            <li>
              <input name="difficulty" id="medium" value="medium" type="radio" class="circle">
              <label for="medium">Medium</label>
              </li>
              <li>
                <input name="difficulty" id="hard" value="hard" type="radio" class="circle">
                <label for="hard">Hard</label>
              </li>
              <li class="last">
                <input name="difficulty" id="last" value="last" type="radio" class="circle">
                <label for="last">Last Created</label>
              </li>
              <li class="last">
                <button id="fight-monster-btn" type="submit">Fight monster</button>
              </li>
            </ul>
        </form>
    </section>
    </section>
`;
  setTimeout(() => {
    closingAnimation();
  }, 100);
  const formCreate = document.getElementById("form-create");
  const formDifficulty = document.getElementById("form-difficulty");
  const difficulty = formDifficulty.querySelector(
    'input[name="difficulty"]:checked'
  ).value;

  formCreate.addEventListener("submit", createMonsterHandler);
  formDifficulty.addEventListener("submit", getMonsterHandler);
};
