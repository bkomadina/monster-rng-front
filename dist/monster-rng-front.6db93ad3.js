const e=()=>{let e=document.getElementById("background");e.innerHTML="",e.innerHTML=`
  <section>
  <section class="up up-close">
      <h1 class="top-heading">Create your monster</h1>
      <form id="form-create">
        <label for="name">Name:</label>
        <input id="name" type="text" pattern="^[a-zA-Z0-9\\s]{2,20}$" title="2 to 20 letters, no special characters" required="required" autocomplete="off">
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
`,setTimeout(()=>{s()},100);let t=document.getElementById("form-create"),n=document.getElementById("form-difficulty");n.querySelector('input[name="difficulty"]:checked').value,t.addEventListener("submit",d),n.addEventListener("submit",c)},t=document.getElementById("form-create"),n=document.getElementById("form-difficulty"),a="https://monster-rng-back.onrender.com",o=e=>{let t=document.querySelector(".notification"),n=document.querySelector("#notificationType");n.innerText=e,t.classList.add("active"),n.classList.add("notificationText")},i=()=>{let e=document.querySelector(".notification"),t=document.querySelector("#notificationType");e.classList.remove("active"),t.classList.remove("notificationText"),t.innerText=""},r=(e,t="timed")=>{if(o(e),"timed"===t)setTimeout(i,2e3);else if("stay"===t){let e=()=>{i(),window.removeEventListener("mouseup",e)};window.addEventListener("mouseup",e)}},s=()=>{document.querySelector(".up").classList.toggle("up-close"),document.querySelector(".down").classList.toggle("down-close")},l=a=>{window.randomMonster={name:a.name,HP:a.hp,damage:a.damage},t.removeEventListener("submit",d),n.removeEventListener("submit",c),s(),setTimeout(()=>{i();let t=document.getElementById("background");t.innerHTML="",t.innerHTML=`
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
  `,setTimeout(()=>{s()},100),(()=>{let t,n,a,o=+randomMonster.HP,i=+randomMonster.damage,l=document.getElementById("monster-hp"),d=document.getElementById("player-hp"),c=document.getElementById("att-btn"),m=document.getElementById("heavy-att-btn"),u=document.getElementById("heal-btn"),y=document.getElementById("retry-btn"),f=document.getElementById("home-btn"),v=e=>{l.max=e,l.value=e,t=e,d.max=100,d.value=100,n=100,a=!0},b=()=>Math.round((Math.random()-.5)*10),h=()=>{let e=i+b();e<0&&(e=0),d.value=n-=e},p=()=>{let e=10+b();l.value=t-=e,h(),L()},g=()=>{let e=18+b();l.value=t-=e,h(),L()||(h(),L())},E=()=>{a?((n+=45+b())>=100?d.value=n=100:d.value=n,a=!1,h(),L()):r("No healing uses left","stay")},L=()=>t<=0&&n>=0?(r("You won!","stay"),v(o),!0):n<=0&&t>=0?(r("You lost!","stay"),v(o),!0):t<=0&&n<=0?(r("Draw!","stay"),v(o),!0):void 0;v(o),c.addEventListener("click",p),m.addEventListener("click",g),u.addEventListener("click",E),y.addEventListener("click",v.bind(void 0,o)),f.addEventListener("click",()=>{c.removeEventListener("click",p),m.removeEventListener("click",g),u.removeEventListener("click",E),y.removeEventListener("click",v.bind(void 0,o)),f.removeEventListener("click",e),s(),setTimeout(()=>{e()},600)})})()},600)},d=async e=>{e.preventDefault(),o("Loading...");let t=document.getElementById("form-create");try{var n,i;let e=await fetch(`${a}/add-monster`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t.name.value.toUpperCase(),HP:t.HP.value,damage:t.damage.value,difficulty:(n=t.HP.value,(i=t.damage.value)<=12&&n<=70||i<=7&&n<=130||i<=30&&n<=25?"easy":i<=15&&n<=80||i<=9&&n<=140||i<=30&&n<=35?"medium":"hard")})});if(400===e.status)throw Error("Too crazy monster stats");if(500===e.status)throw Error("Server is down");let o=await e.json();if(!o.id){r("Monster has no ID"),t.reset();return}window.localStorage.setItem("last created",JSON.stringify(o.id)),l(o)}catch(e){console.error(e),r(e.message)}},c=async e=>{e.preventDefault(),o("Loading...");let t=document.getElementById("form-difficulty").querySelector('input[name="difficulty"]:checked').value;try{let e,n=async e=>{let t=await fetch(e);if(404===t.status)throw Error("Your last created monster escaped. Create another one");if(500===t.status)throw Error("Server is down");return await t.json()};if("last"===t){let t=JSON.parse(window.localStorage.getItem("last created"));if(!t)throw Error("No last created monster found.");e=`${a}/lastcreated/${t}`}else e=`${a}/monster/${t}`;let o=await n(e);l(o)}catch(e){console.error(e),r(e.message)}};t.addEventListener("submit",d),n.addEventListener("submit",c);
//# sourceMappingURL=monster-rng-front.6db93ad3.js.map
