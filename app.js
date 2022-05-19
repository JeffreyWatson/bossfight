const heroes = {
  connor: {
    name: 'Connor',
    hp: 100,
    gold: 0,
    lvl: 1
  },
  jefe: {
    name: 'Jefe',
    hp: 100,
    gold: 0,
    lvl: 1
  }
}

const bosses = {
  raiden: {
    name: 'Raiden',
    hp: 100,
    lvl: 1
  }
}




function drawHeroes() {
  let template = ''
  for (let key in heroes) {
    let hero = heroes[key]
    template += /*html*/ `
              <div class="col-2">
            <div id="userHealth" class="hero-card bg-light text-dark mt-2">
              <h5>${hero.name} <img src="https://cdn.gamedevmarket.net/wp-content/uploads/20191203155936/36b7fa3e7acdb7daf401d5b86297d239.gif" alt=""></h5>
              <p>HP:${hero.hp}</p>
              <p>GOLD:${hero.gold}</p>
              <p>LVL:${hero.lvl}</p>
            </div>
          </div>
    `
  }

  document.getElementById('hero').innerHTML = template

}

function drawBoss() {
  let template = ''
  for (let key in bosses) {
    let boss = bosses[key]
    template += /*html*/ `
                  <div class="col-4">
            <div class="boss-card bg-dark text-light mt-2 p-4">
            <div class="progress">
                <div id="boss-bar"class="progress-bar bg-danger" role="progressbar" style="width:${boss.hp}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${boss.hp}HP</div>
            </div>
            <h5>${boss.name}</h5>
            <img class="health" src="https://orig00.deviantart.net/5394/f/2012/300/c/b/classic_raiden__mk1__by_sirojuntle-d5j62wn.gif" alt="" onclick="damageBoss('${boss.name.toLowerCase()}')">
            </div>
          </div>
          `
  }
  document.getElementById('boss').innerHTML = template
}

function damageBoss(name) {
  let boss = bosses[name]
  if (boss.hp != 0) {
    boss.hp -= 5
    console.log(boss.hp);
    document.getElementById('boss-bar').style = `width:${boss.hp}% `
  }
}

function playerDamage() {
  for (let key in heroes) {
    let hero = heroes[key]
    if (hero.hp != 0) {
      hero.hp -= 5
      console.log(hero.hp)
      document.getElementById('userHealth')
      drawHeroes()
    }
  }
}


if (boss.hp != 0) {
  let damageInterval = setInterval(playerDamage, 3000)

}


drawBoss()
drawHeroes()