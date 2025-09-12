const e=()=>{let e=document.getElementById("background");e.innerHTML="",e.innerHTML=`
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
  `,setTimeout(()=>{l()},100)},t=()=>{let e=document.getElementById("background");e.innerHTML="",e.innerHTML=`
  <section>
  <section class="up up-close">
      <h1 class="top-heading">Create your monster</h1>
      <form id="form-create">
        <label for="name">Name:</label>
        <input id="name" type="text" pattern="[a-zA-Z0-9s]{2,20}" title="2 to 20 letters, no special characters" required="required" autocomplete="off">
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
`,setTimeout(()=>{l()},100);let t=document.getElementById("form-create"),n=document.getElementById("form-difficulty");n.querySelector('input[name="difficulty"]:checked').value,t.addEventListener("submit",d),n.addEventListener("submit",c)},n=()=>{let e,n,o,a=+randomMonster.HP,r=+randomMonster.damage,i=document.getElementById("monster-hp"),d=document.getElementById("player-hp"),c=document.getElementById("att-btn"),m=document.getElementById("heavy-att-btn"),u=document.getElementById("heal-btn"),f=document.getElementById("retry-btn"),v=document.getElementById("home-btn"),y=t=>{i.max=t,i.value=t,e=t,d.max=100,d.value=100,n=100,o=!0},h=()=>Math.round((Math.random()-.5)*10),b=()=>{let e=r+h();e<0&&(e=0),d.value=n-=e},g=()=>{let t=10+h();i.value=e-=t,b(),L()},p=()=>{let t=18+h();i.value=e-=t,b(),L()||(b(),L())},E=()=>{o?((n+=45+h())>=100?d.value=n=100:d.value=n,o=!1,b(),L()):s("No healing uses left","stay")},L=()=>e<=0&&n>=0?(s("You won!","stay"),y(a),!0):n<=0&&e>=0?(s("You lost!","stay"),y(a),!0):e<=0&&n<=0?(s("Draw!","stay"),y(a),!0):void 0;y(a),c.addEventListener("click",g),m.addEventListener("click",p),u.addEventListener("click",E),f.addEventListener("click",y.bind(void 0,a)),v.addEventListener("click",()=>{c.removeEventListener("click",g),m.removeEventListener("click",p),u.removeEventListener("click",E),f.removeEventListener("click",y.bind(void 0,a)),v.removeEventListener("click",t),l(),setTimeout(()=>{t()},600)})},o=document.getElementById("form-create"),a=document.getElementById("form-difficulty"),r=void 0,i=e=>{e.reset()},s=(e,t="timed")=>{let n=document.querySelector(".notification"),o=document.querySelector("#notificationType");n.classList.toggle("active"),o.classList.toggle("notificationText"),o.innerText=`${e}`;let a=()=>{o.innerText="",n.classList.toggle("active"),o.classList.toggle("notificationText"),window.removeEventListener("mouseup",a)};"stay"===t?window.addEventListener("mouseup",a):setTimeout(a,2e3)},l=()=>{document.querySelector(".up").classList.toggle("up-close"),document.querySelector(".down").classList.toggle("down-close")},d=e=>{var t,n;e.preventDefault();let o=document.getElementById("form-create");fetch(`${r}/add-monster`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:o.name.value.toUpperCase(),HP:o.HP.value,damage:o.damage.value,difficulty:(t=o.HP.value,(n=o.damage.value)<=12&&t<=70||n<=7&&t<=130||n<=30&&t<=25?"easy":n<=15&&t<=80||n<=9&&t<=140||n<=30&&t<=35?"medium":"hard")})}).then(e=>{if(400===e.status)throw Error("Too crazy monster stats");if(500===e.status)throw Error("Server is down");return e.json()}).then(e=>{if(!e.id){s("Monster has no ID"),i(o);return}s("Monster created!"),window.localStorage.setItem("last created",JSON.stringify(e.id)),i(o)}).catch(e=>{console.error(e),s(e)})},c=t=>{let a;t.preventDefault();let i=document.getElementById("form-difficulty"),m=i.querySelector('input[name="difficulty"]:checked').value;try{a=JSON.parse(window.localStorage.getItem("last created"))}catch(t){let e=`No last created monster found", ${t}`;console.error(e),s(e);return}"last"===m&&a?fetch(`${r}/lastcreated/${a}`).then(e=>{if(404===e.status)throw Error("Your last created monster escaped. Create another one");if(500===e.status)throw Error("Server is down");return e.json()}).then(t=>{window.randomMonster={name:t.name,HP:t.hp,damage:t.damage},o.removeEventListener("submit",d),i.removeEventListener("submit",c),l(),setTimeout(()=>{e(),n()},600)}).catch(e=>{console.error(e),s(e)}):fetch(`${r}/monster/${m}`).then(e=>{if(404===e.status)throw Error("Could not find monster with selected difficulty, please create more");if(500===e.status)throw Error("Server is down");return e.json()}).then(t=>{window.randomMonster={name:t.name,HP:t.hp,damage:t.damage},o.removeEventListener("submit",d),i.removeEventListener("submit",c),l(),setTimeout(()=>{e(),n()},600)}).catch(e=>{console.error(e),s(e)})};o.addEventListener("submit",d),a.addEventListener("submit",c);
//# sourceMappingURL=monster-rng-front.9caf4b51.js.map
