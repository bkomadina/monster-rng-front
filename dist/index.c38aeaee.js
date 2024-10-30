(()=>{let e=()=>{let e=document.getElementById("background");e.innerHTML="",e.innerHTML=`
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
  `,setTimeout(()=>{c()},100)},t=(e,t)=>t<=12&&e<=70||t<=7&&e<=130||t<=30&&e<=25?"easy":t<=15&&e<=80||t<=9&&e<=140||t<=30&&e<=35?"medium":"hard",n=()=>{let e=document.getElementById("background");e.innerHTML="",e.innerHTML=`
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
`,setTimeout(()=>{c()},100);let t=document.getElementById("form-create"),n=document.getElementById("form-difficulty");n.querySelector('input[name="difficulty"]:checked').value,t.addEventListener("submit",d),n.addEventListener("submit",m)},o=()=>{let e,t,o,a=+randomMonster.HP,r=+randomMonster.damage,s=document.getElementById("monster-hp"),i=document.getElementById("player-hp"),d=document.getElementById("att-btn"),m=document.getElementById("heavy-att-btn"),u=document.getElementById("heal-btn"),f=document.getElementById("retry-btn"),v=document.getElementById("home-btn"),y=n=>{s.max=n,s.value=n,e=n,i.max=100,i.value=100,t=100,o=!0},h=()=>Math.round((Math.random()-.5)*10),b=()=>{let e=r+h();e<0&&(e=0),t-=e,i.value=t},g=()=>{let t=10+h();e-=t,s.value=e,b(),L()},p=()=>{let t=18+h();e-=t,s.value=e,b(),L()||(b(),L())},E=()=>{o?((t+=45+h())>=100&&(t=100),i.value=t,o=!1,b(),L()):l("No healing uses left","stay")},L=()=>e<=0&&t>=0?(l("You won!","stay"),y(a),!0):t<=0&&e>=0?(l("You lost!","stay"),y(a),!0):e<=0&&t<=0?(l("Draw!","stay"),y(a),!0):void 0;y(a),d.addEventListener("click",g),m.addEventListener("click",p),u.addEventListener("click",E),f.addEventListener("click",y.bind(void 0,a)),v.addEventListener("click",()=>{d.removeEventListener("click",g),m.removeEventListener("click",p),u.removeEventListener("click",E),f.removeEventListener("click",y.bind(void 0,a)),v.removeEventListener("click",n),c(),setTimeout(()=>{n()},600)})},a=document.getElementById("form-create"),r=document.getElementById("form-difficulty");console.log("process.env.NODE_ENV: ",process.env.NODE_ENV);let s="production"===process.env.NODE_ENV?process.env.BACKEND_URL:"http://localhost:8000";console.log("backendUrl: ",s);let i=e=>{e.reset()},l=(e,t="timed")=>{let n=document.querySelector(".notification"),o=document.querySelector("#notificationType");n.classList.toggle("active"),o.classList.toggle("notificationText"),o.innerText=`${e}`;let a=()=>{o.innerText="",n.classList.toggle("active"),o.classList.toggle("notificationText"),window.removeEventListener("mouseup",a)};"stay"===t?window.addEventListener("mouseup",a):setTimeout(a,2e3)},c=()=>{document.querySelector(".up").classList.toggle("up-close"),document.querySelector(".down").classList.toggle("down-close")},d=e=>{e.preventDefault();let n=document.getElementById("form-create");fetch(`${s}/add-monster`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.name.value.toUpperCase(),HP:n.HP.value,damage:n.damage.value,difficulty:t(n.HP.value,n.damage.value)})}).then(e=>{if(400===e.status)throw Error("Too crazy monster stats");if(500===e.status)throw Error("Server is down");return e.json()}).then(e=>{if(!e.id){l("Monster has no ID"),i(n);return}l("Monster created!"),window.localStorage.setItem("last created",JSON.stringify(e.id)),i(n)}).catch(e=>{console.error(e),l(e)})},m=t=>{let n;t.preventDefault();let r=document.getElementById("form-difficulty"),i=r.querySelector('input[name="difficulty"]:checked').value;try{n=JSON.parse(window.localStorage.getItem("last created"))}catch(t){let e=`No last created monster found", ${t}`;console.error(e),l(e);return}"last"===i&&n?fetch(`${s}/lastcreated/${n}`).then(e=>{if(404===e.status)throw Error("Your last created monster escaped. Create another one");if(500===e.status)throw Error("Server is down");return e.json()}).then(t=>{window.randomMonster={name:t.name,HP:t.hp,damage:t.damage},a.removeEventListener("submit",d),r.removeEventListener("submit",m),c(),setTimeout(()=>{e(),o()},600)}).catch(e=>{console.error(e),l(e)}):fetch(`${s}/monster/${i}`).then(e=>{if(404===e.status)throw Error("Could not find monster with selected difficulty, please create more");if(500===e.status)throw Error("Server is down");return e.json()}).then(t=>{window.randomMonster={name:t.name,HP:t.hp,damage:t.damage},a.removeEventListener("submit",d),r.removeEventListener("submit",m),c(),setTimeout(()=>{e(),o()},600)}).catch(e=>{console.error(e),l(e)})};a.addEventListener("submit",d),r.addEventListener("submit",m)})();
//# sourceMappingURL=index.c38aeaee.js.map
