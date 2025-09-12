import { renderMonster } from "./renderMonster.js";
import { determineDifficulty } from "./difficulty.js";
import { fightMonster } from "./fightMonster.js";

const formCreate = document.getElementById("form-create");
const formDifficulty = document.getElementById("form-difficulty");

const backendUrl =
  process.env.NODE_ENV === "production"
    ? process.env.PARCEL_BACKEND_URL
    : "http://localhost:8000";

const clearForm = (form) => {
  form.reset();
};

const showNotification = (text) => {
  const notification = document.querySelector(".notification");
  const notificationText = document.querySelector("#notificationType");
  notificationText.innerText = text;
  notification.classList.add("active");
  notificationText.classList.add("notificationText");
};

const hideNotification = () => {
  const notification = document.querySelector(".notification");
  const notificationText = document.querySelector("#notificationType");
  notification.classList.remove("active");
  notificationText.classList.remove("notificationText");
  notificationText.innerText = "";
};

export const notificationToggle = (text, type = "timed") => {
  showNotification(text);
  if (type === "timed") {
    setTimeout(hideNotification, 2000);
  } else if (type === "stay") {
    const notificationHandler = () => {
      hideNotification();
      window.removeEventListener("mouseup", notificationHandler);
    };
    window.addEventListener("mouseup", notificationHandler);
  }
};

export const closingAnimation = () => {
  document.querySelector(".up").classList.toggle("up-close");
  document.querySelector(".down").classList.toggle("down-close");
};

const startFight = (monsterData) => {
  window.randomMonster = {
    name: monsterData.name,
    HP: monsterData.hp,
    damage: monsterData.damage,
  };

  formCreate.removeEventListener("submit", createMonsterHandler);
  formDifficulty.removeEventListener("submit", getMonsterHandler);

  closingAnimation();
  setTimeout(() => {
    hideNotification();
    renderMonster();
    fightMonster();
  }, 600);
};

export const createMonsterHandler = async (event) => {
  event.preventDefault();
  showNotification("Loading...");

  const formCreate = document.getElementById("form-create");
  try {
    const response = await fetch(`${backendUrl}/add-monster`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
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
    });

    if (response.status === 400) {
      throw new Error("Too crazy monster stats");
    } else if (response.status === 500) {
      throw new Error("Server is down");
    }

    const data = await response.json();

    if (!data.id) {
      notificationToggle("Monster has no ID");
      clearForm(formCreate);
      return;
    }

    window.localStorage.setItem("last created", JSON.stringify(data.id));
    startFight(data);
  } catch (error) {
    console.error(error);
    notificationToggle(error.message);
  }
};

export const getMonsterHandler = async (event) => {
  event.preventDefault();
  showNotification("Loading...");

  const formDifficulty = document.getElementById("form-difficulty");
  const difficulty = formDifficulty.querySelector(
    'input[name="difficulty"]:checked'
  ).value;

  try {
    const getMonster = async (url) => {
      const response = await fetch(url);
      if (response.status === 404) {
        throw new Error(
          "Your last created monster escaped. Create another one"
        );
      } else if (response.status === 500) {
        throw new Error("Server is down");
      }
      return await response.json();
    };

    let url;
    if (difficulty === "last") {
      const lastCreatedId = JSON.parse(
        window.localStorage.getItem("last created")
      );
      if (!lastCreatedId) {
        throw new Error("No last created monster found.");
      }
      url = `${backendUrl}/lastcreated/${lastCreatedId}`;
    } else {
      url = `${backendUrl}/monster/${difficulty}`;
    }

    const data = await getMonster(url);

    startFight(data);
  } catch (error) {
    console.error(error);
    notificationToggle(error.message);
  }
};

formCreate.addEventListener("submit", createMonsterHandler);
formDifficulty.addEventListener("submit", getMonsterHandler);
