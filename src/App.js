import React, { Component } from 'react';
import logo from './logo.svg';
import disableScroll from 'disable-scroll';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameBoard: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]], /*[["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["10", "11", "12"]]*/
      player_health: "500",
      ennemy_health: "no current ennemy",
      start: false,
      start2: true,
    };
    this.cellEvent = this.cellEvent.bind(this);
    this.start = this.start.bind(this)
  }
  

  /*UNSAFE_componentWillMount() {
    if (this.state.start === true) {
    this.setState((prevState) => {
      var count = [0, 20];
      for (var i = 0; i < 100; i++) {
        let arr = [];
        prevState.gameBoard.push(arr);
        count[0] += 20;
        count[1] += 20;
        for (var j = count[0]; j < count[1]; j++) {
               arr.push(JSON.stringify(j))



           }   }
    }, () => console.log(this.state.gameBoard))
    /*let playerCell = document.getElementById("2");
    console.log(playerCell)
    playerCell.focus();
  }
}*/

  async componentDidUpdate() {
    if (this.state.start === true && this.state.start2 === true) {let playerCell = document.getElementById("129");
    console.log(playerCell)
    
    playerCell.focus();
    

    let cells = document.getElementsByClassName('cell');
    console.log(cells);

    for (var i = 0; i <   cells.length; i++) {
        var random = Math.random() * 100;
        var randomHealth = Math.floor(Math.random() * (1000 - 200) + 200);
        var randomWeapon = Math.floor(Math.random() * (100 - 20) + 20);

        //console.log(random)
        if (parseInt(cells[i].id) <= 19 || parseInt(cells[i].id) >= 2000) {
        cells[i].style.background = "white";
        cells[i].style.color = "white";

}
        if (cells[i].id === "129") {
          cells[i].style.background = "url('wizardFinal.jpg')";
          cells[i].style.backgroundSize = "75px 75px";
          cells[i].style.backgroundRepeat = "no-repeat";
          cells[i].style.width = "75px";
          cells[i].style.height = "75px";

        }

        if (cells[i].id === "128") { 
             cells[i].style.background = "transparent";
            cells[i].style.color = "cyan";
            cells[i].style.width = "75px";
            cells[i].style.height = "75px"

        }

         if (cells[i].id === "127") { 
             cells[i].style.background = "transparent";
            cells[i].style.color = "cyan";
            cells[i].style.width = "75px";
            cells[i].style.height = "75px"

        }

         if (cells[i].id === "130") { 
             cells[i].style.background = "transparent";
            cells[i].style.color = "cyan";
            cells[i].style.width = "75px";
            cells[i].style.height = "75px"

        }

         if (cells[i].id === "131") { 
             cells[i].style.background = "transparent";
            cells[i].style.color = "cyan";
            cells[i].style.width = "75px";
            cells[i].style.height = "75px"

        }

           if (cells[i].id === "20") { 
          cells[i].style.background = "url('/wall.jpg')";
          cells[i].style.color = "navy";
          cells[i].style.backgroundSize = "75px 75px";
          cells[i].style.width = "75px";
          cells[i].style.height = "75px"

        }

        if (cells[i].id === "1930" || cells[i].id === "1931" || cells[i].id === "1950" || cells[i].id === "1951") {
          cells[i].style.background = "url('boss.png')";
          cells[i].style.color = "purple";
          cells[i].style.backgroundSize = "75px 75px";
          cells[i].style.backgroundRepeat = "no-repeat";
          cells[i].style.width = "75px";
          cells[i].style.height = "75px";
          cells[i].setAttribute('data-health', JSON.stringify(randomHealth));
          cells[i].setAttribute('data-weapon', '30')

        }

        if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127" && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random < 2.5 && cells[i].dataset.borderRight === "false" && cells[i].dataset.borderLeft === "false" && randomHealth < 600) {
          
          cells[i].style.background = "url('goblin5.png')";
          cells[i].style.backgroundRepeat = "no-repeat";
          cells[i].style.backgroundSize = "75px 75px";
          cells[i].style.color = "green";
          cells[i].style.width = "75px";
          cells[i].style.height = "75px";
          cells[i].setAttribute('data-health',  JSON.stringify(randomHealth / 5));
          cells[i].setAttribute('data-weapon', '7')
        }

        if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127" && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random < 2.5 && cells[i].dataset.borderRight === "false" && cells[i].dataset.borderLeft === "false" && randomHealth >= 600) {
          
          cells[i].style.background = "url('Wraith.png')";
          cells[i].style.backgroundSize = "75px 75px";
          cells[i].style.backgroundRepeat = "no-repeat";
          cells[i].style.color = "purple";
          cells[i].style.width = "75px";
          cells[i].style.height = "75px";
          cells[i].setAttribute('data-health', JSON.stringify(randomHealth / 2));
          cells[i].setAttribute('data-weapon', '15')
        }
         
         //ennemies can't spawn in corners

         if ((parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127"  && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random < 2.5 && cells[i].dataset.borderRight === "true") || (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127" && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random < 2.5 && cells[i].dataset.borderLeft === "true")) {
          cells[i].style.background = "transparent";
          cells[i].style.color = "cyan";
          cells[i].style.width = "75px";
          cells[i].style.height = "75px";
        
        }

        if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127"  && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random < 30 && random >= 2.5) {
          cells[i].style.background = "url('/wall.jpg')";
          cells[i].style.color = "navy";
          cells[i].style.backgroundSize = "75px 75px";
          cells[i].style.width = "75px";
          cells[i].style.height = "75px"
        }

        if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127"  && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random >= 30 && random < 31.5  && cells[i].dataset.borderRight === "false" && cells[i].dataset.borderLeft === "false") {
          cells[i].style.color = "yellow";  
          cells[i].style.background = "url('healthPotion2.png')";
          cells[i].style.backgroundSize = "75px 75px";
          cells[i].style.backgroundRepeat = "no-repeat";
          cells[i].style.width = "75px";
          cells[i].style.height = "75px";
          cells[i].setAttribute('data-healthpotion', '50');
          cells[i].setAttribute('data-weapon', '0');

        }

        if ((parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127"  && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random >= 30 && random < 31.5  && cells[i].dataset.borderRight === "true") || (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127" && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random >= 30 && random < 31.5  && cells[i].dataset.borderLeft === "true")) {

             cells[i].style.background = "transparent";
             cells[i].style.color = "cyan";
             cells[i].style.width = "75px";
             cells[i].style.height = "75px";

        }

        if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127"  && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random >= 31.5 && random < 33  && cells[i].dataset.borderRight === "false" && cells[i].dataset.borderLeft === "false") {
          cells[i].style.color = "yellow";  
          cells[i].style.background = "url('arcana3.png')";
          cells[i].style.backgroundSize = "75px 75px";
          cells[i].style.backgroundRepeat = "no-repeat";
          cells[i].style.width = "75px";
          cells[i].style.height = "75px";
          cells[i].setAttribute('data-healthpotion', '0');
          cells[i].setAttribute('data-weapon', '2');

        }

         if ((parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127"  && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random >= 31.5 && random < 33  && cells[i].dataset.borderRight === "true") || (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127" && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random >= 31.5 && random < 33  && cells[i].dataset.borderLeft === "true")) {

             cells[i].style.background = "transparent";
             cells[i].style.color = "cyan";
             cells[i].style.width = "75px";
             cells[i].style.height = "75px";

        }


        else if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && cells[i].id !== "20" && cells[i].id !== "130"  && cells[i].id !== "131"  && cells[i].id !== "128"  && cells[i].id !== "127"  && cells[i].id !== "1930" && cells[i].id !== "1931" && cells[i].id !== "1950" && cells[i].id !== "1951" && random >= 33) { 
            cells[i].style.background = "transparent";
            cells[i].style.color = "cyan";
            cells[i].style.width = "75px";
            cells[i].style.height = "75px"
      }

    };


    

  }



  }


  start(e) {
    
    this.setState((prevState) => {
      var count = [0, 20];

      for (var i = 0; i < 100; i++) {
        let arr = [];
        prevState.gameBoard.push(arr);
        count[0] += 20;
        count[1] += 20;
        for (var j = count[0]; j < count[1]; j++) {
               arr.push(JSON.stringify(j))



           }   };
        return { start: true }
    }, () => console.log(this.state.gameBoard))
  }

  cellEvent(e) {

    let currentCell = document.getElementById(e.target.id); 
     let upCell = document.getElementById(`${parseInt(e.target.id) + 20}`);
     let downCell = document.getElementById(`${parseInt(e.target.id) - 20}`);
     let leftCell = document.getElementById(`${parseInt(e.target.id) + -1}`);
     let currentLeftCell = document.getElementById(`${parseInt(e.target.id) - 19}`);
     let currentRightCell = document.getElementById(`${parseInt(e.target.id) + 19}`);
     let rightCell = document.getElementById(`${parseInt(e.target.id) + 1}`);
     let Fireball = document.getElementById('Fireball');
     let Fireball1 = document.getElementById('Fireball1');
     let Fireball2 = document.getElementById('Fireball2');

     let bossCell1 = document.getElementById('1930');
     let bossCell2 = document.getElementById('1931');
     let bossCell3 = document.getElementById('1950');
     let bossCell4 = document.getElementById('1951');


     console.log(Fireball1, bossCell1, bossCell2, bossCell3, bossCell4 );
     let testons = document.getElementById('testons');

     console.log('fires', currentCell.dataset.borderRight);
     console.log(upCell.dataset.health, currentCell.dataset.health);
     
     if (bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent") { alert('YOU WIN'); window.location.reload()};
     //if (parseInt(bossCell1.dataset.health) <= 0 && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent" || bossCell1.style.background === "transparent" && parseInt(bossCell2.dataset.health) <= 0 && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent" || bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && parseInt(bossCell3.dataset.health) <= 0 && bossCell4.style.background === "transparent" || bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && parseInt(bossCell4.dataset.health) <= 0 ) { alert('YOU WIN'); window.location.reload()};
     /*if (parseInt(currentCell.dataset.health) <= 0) {
      alert('GAME OVER');
      window.location.reload();
     }*/



      
      switch(e.key) {
        case "ArrowUp":
          if (upCell.style.color === "navy") {console.log('navy'); disableScroll.on()};
          if (upCell.style.color === "yellow") {
            console.log('yellow');
            disableScroll.off();
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let healthpotion = parseInt(upCell.dataset.healthpotion);
            //arcana name
            let arcanaLevel = parseInt(upCell.dataset.weapon);
            console.log(playerHealth, healthpotion);

            playerHealth += healthpotion;
            //arcana increase
            playerWeapon += arcanaLevel;

                                                         
            currentCell.dataset.health = playerHealth;
            //arcana assign
            currentCell.dataset.weapon = JSON.stringify(playerWeapon);
            currentCell.style.background = "transparent"; 

            currentCell.removeAttribute('tabIndex'); 
            upCell.style.background = "url('wizardFinal.jpg')";
            upCell.style.backgroundSize = "75px 75px";
            upCell.setAttribute('data-health', currentCell.dataset.health);
            upCell.setAttribute('data-experience', currentCell.dataset.experience);
            upCell.setAttribute('data-level', currentCell.dataset.level);
            currentCell.removeAttribute('data-health'); 
            currentCell.removeAttribute('data-experience');
            currentCell.removeAttribute('data-level'); 
            //arcana total
            upCell.setAttribute('data-weapon', currentCell.dataset.weapon);
            currentCell.removeAttribute('data-weapon');
            upCell.setAttribute('tabIndex', '0');
            upCell.style.color = "cyan"; 
            upCell.focus() 
            testons.textContent = "health: " + upCell.dataset.health + " experience: " + upCell.dataset.experience + " level: " + upCell.dataset.level + " arcana: " + upCell.dataset.weapon;
            
          };

          if ((upCell.style.color === "green" && parseInt(upCell.dataset.health) > 0) || (upCell.style.color === "purple" && parseInt(upCell.dataset.health) > 0) ) {
            
            disableScroll.on();
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(upCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(upCell.dataset.weapon);
            let playerLevel = parseInt(currentCell.dataset.level);

            let playerDamage =  Math.ceil(Math.random() * (playerWeapon - 5) + 5);

            let ennemyDamage = Math.ceil(Math.random() * (ennemyWeapon - 5) + 5);

            if (playerLevel < 4) {
            playerHealth -= ennemyDamage;
            ennemyHealth -= (playerDamage + playerLevel);
            playerExperience += (playerDamage + playerLevel);
               }

            if (playerLevel >= 4) {
            playerHealth -= Math.floor(ennemyDamage / 1.5);
            ennemyHealth -= Math.ceil((playerDamage + playerLevel) * 2);
            playerExperience += Math.ceil((playerDamage + playerLevel) * 2);
               }

            if (playerExperience < 1000) { playerLevel = 0; Fireball.play();
            Fireball.currentTime = 0;}
            if (playerExperience >= 1000) { playerLevel = 1; Fireball1.play();
            Fireball.currentTime = 0;}
            if (playerExperience >= 2000) { playerLevel = 2; Fireball1.play();
            Fireball1.currentTime = 0;}
            if (playerExperience >= 3000) { playerLevel = 3; Fireball2.play();
            Fireball1.currentTime = 0;}
            if (playerExperience >= 4000) { playerLevel = 4; Fireball2.play();
            Fireball2.currentTime = 0;}

            currentCell.dataset.health = JSON.stringify(playerHealth);
            upCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            currentCell.dataset.level = JSON.stringify(playerLevel);
            console.log(upCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience + " level: " + currentCell.dataset.level  + " arcana: " + currentCell.dataset.weapon;
            //if ((parseInt(bossCell1.dataset.health) <= 0 && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && parseInt(bossCell2.dataset.health) <= 0 && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && parseInt(bossCell3.dataset.health) <= 0 && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && parseInt(bossCell4.dataset.health) <= 0) ) { alert('YOU WIN'); window.location.reload()};
             if ((parseInt(bossCell1.dataset.health) <= 0 && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && parseInt(bossCell2.dataset.health) <= 0 && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && parseInt(bossCell3.dataset.health) <= 0 && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && parseInt(bossCell4.dataset.health) <= 0)) { alert('YOU WIN'); window.location.reload()};
            if (parseInt(currentCell.dataset.health) <= 0) {
      alert('GAME OVER');
      window.location.reload();}
            
          }


         else if (upCell.style.background === "transparent" || upCell.style.color === "green" || upCell.style.color === "purple") {   
          disableScroll.off();
          let playerWeapon = parseInt(currentCell.dataset.weapon);    
          currentCell.style.background = "transparent"; 
          currentCell.removeAttribute('tabIndex'); 
          upCell.style.background = "url('wizardFinal.jpg')";
          upCell.style.backgroundSize = "75px 75px";
          upCell.setAttribute('data-health', currentCell.dataset.health);
          upCell.setAttribute('data-experience', currentCell.dataset.experience);
          upCell.setAttribute('data-level', currentCell.dataset.level);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience');
          currentCell.removeAttribute('data-level'); 
          upCell.setAttribute('data-weapon', playerWeapon);
          currentCell.removeAttribute('data-weapon');
          upCell.setAttribute('tabIndex', '0') 
          upCell.focus();
          }
          return "done";
          break; 

        case "ArrowDown":
          if (downCell.style.color === "navy") {console.log('navy'); disableScroll.on()};
          if (downCell.style.color === "yellow") {
            console.log('yellow');
            disableScroll.off();
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let healthpotion = parseInt(downCell.dataset.healthpotion);
            let arcanaLevel = parseInt(downCell.dataset.weapon);

            playerHealth += healthpotion;
            playerWeapon += arcanaLevel;

            currentCell.dataset.health = playerHealth;
            currentCell.dataset.weapon = JSON.stringify(playerWeapon);
            currentCell.style.background = "transparent"; 
            currentCell.removeAttribute('tabIndex');  
            downCell.style.background = "url('wizardFinal.jpg')";
            downCell.style.backgroundSize = "75px 75px";
            downCell.setAttribute('data-health', currentCell.dataset.health);
            downCell.setAttribute('data-experience', currentCell.dataset.experience);
            downCell.setAttribute('data-level', currentCell.dataset.level);
            currentCell.removeAttribute('data-health'); 
            currentCell.removeAttribute('data-experience');
            currentCell.removeAttribute('data-level');  
            downCell.setAttribute('data-weapon', currentCell.dataset.weapon);
            currentCell.removeAttribute('data-weapon');
            downCell.setAttribute('tabIndex', '0'); 
            downCell.style.color = "cyan";
            downCell.focus()
            testons.textContent = "health: " + downCell.dataset.health + " experience: " + downCell.dataset.experience + " level: " + downCell.dataset.level  + " arcana: " + downCell.dataset.weapon;

          } ;

          if ((downCell.style.color === "green" && parseInt(downCell.dataset.health)) > 0 || (downCell.style.color === "purple" && parseInt(downCell.dataset.health) > 0)) {
            console.log('combat');
            disableScroll.on();
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(downCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(downCell.dataset.weapon);
            let playerLevel = parseInt(currentCell.dataset.level);

            let playerDamage =  Math.ceil(Math.random() * (playerWeapon - 5) + 5);

            let ennemyDamage = Math.ceil(Math.random() * (ennemyWeapon - 5) + 5);

            if (playerLevel < 4) {
            playerHealth -= ennemyDamage;
            ennemyHealth -= (playerDamage + playerLevel);
            playerExperience += (playerDamage + playerLevel);
               }

            if (playerLevel >= 4) {
            playerHealth -= Math.floor(ennemyDamage / 1.5);
            ennemyHealth -= Math.ceil((playerDamage + playerLevel) * 2);
            playerExperience += Math.ceil((playerDamage + playerLevel) * 2);
               }


            if (playerExperience < 1000) { playerLevel = 0; Fireball.play();
            Fireball.currentTime = 0;}
            if (playerExperience >= 1000) { playerLevel = 1; Fireball1.play();
            Fireball.currentTime = 0;}
            if (playerExperience >= 2000) { playerLevel = 2; Fireball1.play();
            Fireball1.currentTime = 0;}
            if (playerExperience >= 3000) { playerLevel = 3; Fireball2.play();
            Fireball1.currentTime = 0;}
            if (playerExperience >= 4000) { playerLevel = 4; Fireball2.play();
            Fireball2.currentTime = 0;}

            currentCell.dataset.health = JSON.stringify(playerHealth);
            downCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            currentCell.dataset.level = JSON.stringify(playerLevel);
            console.log(downCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience + " level: " + currentCell.dataset.level  + " arcana: " + currentCell.dataset.weapon;
           // if ((parseInt(bossCell1.dataset.health) <= 0 && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && parseInt(bossCell2.dataset.health) <= 0 && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && parseInt(bossCell3.dataset.health) <= 0 && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && parseInt(bossCell4.dataset.health) <= 0) ) { alert('YOU WIN'); window.location.reload()};
             if ((parseInt(bossCell1.dataset.health) <= 0 && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && parseInt(bossCell2.dataset.health) <= 0 && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && parseInt(bossCell3.dataset.health) <= 0 && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && parseInt(bossCell4.dataset.health) <= 0)) { alert('YOU WIN'); window.location.reload()};
            if (parseInt(currentCell.dataset.health) <= 0) {
             alert('GAME OVER');
             window.location.reload();}


          }


          else if (downCell.style.background === "transparent" || downCell.style.color === "green" || downCell.style.color === "purple") { 
          console.log('standard move');
          disableScroll.off();
          let playerWeapon = parseInt(currentCell.dataset.weapon);
          currentCell.style.background = "transparent"; 
          currentCell.removeAttribute('tabIndex');  
          downCell.style.background = "url('wizardFinal.jpg')";
          downCell.style.backgroundSize = "75px 75px";
          downCell.setAttribute('data-health', currentCell.dataset.health);
          downCell.setAttribute('data-experience', currentCell.dataset.experience);
          downCell.setAttribute('data-level', currentCell.dataset.level);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience');
          currentCell.removeAttribute('data-level'); 
          downCell.setAttribute('data-weapon', playerWeapon);
          currentCell.removeAttribute('data-weapon');
          downCell.setAttribute('tabIndex', '0'); 
          downCell.focus();
         
        }
          return "done";
          break;
        case "ArrowLeft":
          if (leftCell.style.color === "navy") {console.log('navy'); disableScroll.on()};
          if (leftCell.style.color === "yellow") {
            console.log('yellow');
            disableScroll.off();
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let healthpotion = parseInt(leftCell.dataset.healthpotion);
            let arcanaLevel = parseInt(leftCell.dataset.weapon);

            playerHealth += healthpotion;
            playerWeapon += arcanaLevel;

            currentCell.dataset.health = playerHealth;
            currentCell.dataset.weapon = JSON.stringify(playerWeapon);
            currentCell.style.background = "transparent"; 
            currentCell.removeAttribute('tabIndex');  
            leftCell.style.background = "url('wizardFinal.jpg')";
            leftCell.style.backgroundSize = "75px 75px";
            leftCell.setAttribute('data-health', currentCell.dataset.health);
            leftCell.setAttribute('data-experience', currentCell.dataset.experience);
            leftCell.setAttribute('data-level', currentCell.dataset.level);
            currentCell.removeAttribute('data-health'); 
            currentCell.removeAttribute('data-experience');
            currentCell.removeAttribute('data-level'); 
            leftCell.setAttribute('data-weapon', currentCell.dataset.weapon);
            currentCell.removeAttribute('data-weapon');
            leftCell.setAttribute('tabIndex', '0'); 
            leftCell.style.color = "cyan";
            leftCell.focus()
            testons.textContent = "health: " + leftCell.dataset.health + " experience: " + leftCell.dataset.experience + " level: " + leftCell.dataset.level  + " arcana: " + leftCell.dataset.weapon;

          } 
          
          if ((leftCell.style.color === "green" && parseInt(leftCell.dataset.health) > 0 && currentCell.dataset.borderLeft == "false") || (leftCell.style.color === "purple" && parseInt(leftCell.dataset.health) > 0 && currentCell.dataset.borderLeft == "false")) {
            console.log('combat');
            disableScroll.on();
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(leftCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(leftCell.dataset.weapon);
            let playerLevel = parseInt(currentCell.dataset.level);
            
            let playerDamage =  Math.ceil(Math.random() * (playerWeapon - 5) + 5);

            let ennemyDamage = Math.ceil(Math.random() * (ennemyWeapon - 5) + 5);

            if (playerLevel < 4) {
            playerHealth -= ennemyDamage;
            ennemyHealth -= (playerDamage + playerLevel);
            playerExperience += (playerDamage + playerLevel);
               }

            if (playerLevel >= 4) {
            playerHealth -= Math.floor(ennemyDamage / 1.5);
            ennemyHealth -= Math.ceil((playerDamage + playerLevel) * 2);
            playerExperience += Math.ceil((playerDamage + playerLevel) * 2);
               }

            if (playerExperience < 1000) { playerLevel = 0; Fireball.play();
            Fireball.currentTime = 0;}
            if (playerExperience >= 1000) { playerLevel = 1; Fireball1.play();
            Fireball.currentTime = 0;}
            if (playerExperience >= 2000) { playerLevel = 2; Fireball1.play();
            Fireball1.currentTime = 0;}
            if (playerExperience >= 3000) { playerLevel = 3; Fireball2.play();
            Fireball1.currentTime = 0;}
            if (playerExperience >= 4000) { playerLevel = 4; Fireball2.play();
            Fireball2.currentTime = 0;}

            currentCell.dataset.health = JSON.stringify(playerHealth);
            leftCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            currentCell.dataset.level = JSON.stringify(playerLevel);
            console.log(leftCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience + " level: " + currentCell.dataset.level  + " arcana: " + currentCell.dataset.weapon;
            //if ((parseInt(bossCell1.dataset.health) <= 0 && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && parseInt(bossCell2.dataset.health) <= 0 && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && parseInt(bossCell3.dataset.health) <= 0 && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && parseInt(bossCell4.dataset.health) <= 0) ) { alert('YOU WIN'); window.location.reload()};
             if ((parseInt(bossCell1.dataset.health) <= 0 && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && parseInt(bossCell2.dataset.health) <= 0 && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && parseInt(bossCell3.dataset.health) <= 0 && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && parseInt(bossCell4.dataset.health) <= 0)) { alert('YOU WIN'); window.location.reload()};
            if (parseInt(currentCell.dataset.health) <= 0) {
             alert('GAME OVER');
             window.location.reload();}

          }




          else if ((leftCell.style.background === "transparent" && currentCell.dataset.borderLeft == "false") || (leftCell.style.color === "green" && currentCell.dataset.borderLeft == "false") || (leftCell.style.color === "purple" && currentCell.dataset.borderLeft == "false")) { 
          console.log('movement');
          disableScroll.off();
          let playerWeapon = parseInt(currentCell.dataset.weapon);
          currentCell.style.background = "transparent"; 
          currentCell.removeAttribute('tabIndex');  
          leftCell.style.background = "url('wizardFinal.jpg')";
          leftCell.style.backgroundSize = "75px 75px";
          leftCell.setAttribute('data-health', currentCell.dataset.health);
          leftCell.setAttribute('data-experience', currentCell.dataset.experience);
          leftCell.setAttribute('data-level', currentCell.dataset.level);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience');
          currentCell.removeAttribute('data-level'); 
          leftCell.setAttribute('data-weapon', playerWeapon);
          currentCell.removeAttribute('data-weapon');
          leftCell.setAttribute('tabIndex', '0') 
          leftCell.focus()
        }

        if (currentCell.dataset.borderLeft == "true" && currentRightCell.style.color !== "navy" && currentRightCell.style.color === "cyan" ) {
          console.log('border move');
          disableScroll.off();
          console.log('fires2')
          let playerWeapon = parseInt(currentCell.dataset.weapon);
          currentCell.style.background = "transparent";  
          currentCell.removeAttribute('tabIndex'); 
          let currentRightCell = document.getElementById(`${parseInt(e.target.id) + 19}`);
          currentRightCell.style.background = "url('wizardFinal.jpg')";
          currentRightCell.style.backgroundSize = "75px 75px";
          currentRightCell.setAttribute('data-health', currentCell.dataset.health);
          currentRightCell.setAttribute('data-experience', currentCell.dataset.experience);
          currentRightCell.setAttribute('data-level', currentCell.dataset.level);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience');
          currentCell.removeAttribute('data-level');  
          currentRightCell.setAttribute('data-weapon', playerWeapon);
          currentCell.removeAttribute('data-weapon');
          currentRightCell.setAttribute('tabIndex', '0') 
          currentRightCell.focus();
          

        };
          return "done";
          break;
        case "ArrowRight":
          if (rightCell.style.color === "navy") {console.log('navy'); disableScroll.on()};
          if (rightCell.style.color === "yellow") {
            console.log('yellow');
            disableScroll.off();
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let healthpotion = parseInt(rightCell.dataset.healthpotion);
            let arcanaLevel = parseInt(rightCell.dataset.weapon);

            playerHealth += healthpotion;
            playerWeapon += arcanaLevel;

            currentCell.dataset.health = playerHealth;
            currentCell.dataset.weapon = JSON.stringify(playerWeapon);
            currentCell.style.background = "transparent"; 
            currentCell.removeAttribute('tabIndex');  
            rightCell.style.background = "url('wizardFinal.jpg')";
            rightCell.style.backgroundSize = "75px 75px";
            rightCell.setAttribute('data-health', currentCell.dataset.health);
            rightCell.setAttribute('data-experience', currentCell.dataset.experience);
            rightCell.setAttribute('data-level', currentCell.dataset.level);
            currentCell.removeAttribute('data-health'); 
            currentCell.removeAttribute('data-experience');
            currentCell.removeAttribute('data-level'); 
            rightCell.setAttribute('data-weapon', currentCell.dataset.weapon);
            currentCell.removeAttribute('data-weapon');
            rightCell.setAttribute('tabIndex', '0'); 
            rightCell.style.color = "cyan";
            rightCell.focus()
            testons.textContent = "health: " + rightCell.dataset.health + " experience: " + rightCell.dataset.experience + " level: " + rightCell.dataset.level  + " arcana: " + rightCell.dataset.weapon;

          } ;

          if ((rightCell.style.color === "green" && parseInt(rightCell.dataset.health) > 0 && currentCell.dataset.borderRight == "false") || (rightCell.style.color === "purple" && parseInt(rightCell.dataset.health) > 0 && currentCell.dataset.borderRight == "false")) {
            console.log('combat');
            disableScroll.on();
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(rightCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(rightCell.dataset.weapon);
            let playerLevel = parseInt(currentCell.dataset.level);
            
            let playerDamage =  Math.ceil(Math.random() * (playerWeapon - 5) + 5);
            let ennemyDamage = Math.ceil(Math.random() * (ennemyWeapon - 5) + 5);

            if (playerLevel < 4) {
            playerHealth -= ennemyDamage;
            ennemyHealth -= (playerDamage + playerLevel);
            playerExperience += (playerDamage + playerLevel);
               }

            if (playerLevel >= 4) {
            playerHealth -= Math.floor(ennemyDamage / 1.5);
            ennemyHealth -= Math.ceil((playerDamage + playerLevel) * 2);
            playerExperience += Math.ceil((playerDamage + playerLevel) * 2);
               }

           if (playerExperience < 1000) { playerLevel = 0; Fireball.play();
            Fireball.currentTime = 0;}
            if (playerExperience >= 1000) { playerLevel = 1; Fireball1.play();
            Fireball.currentTime = 0;}
            if (playerExperience >= 2000) { playerLevel = 2; Fireball1.play();
            Fireball1.currentTime = 0;}
            if (playerExperience >= 3000) { playerLevel = 3; Fireball2.play();
            Fireball1.currentTime = 0;}
            if (playerExperience >= 4000) { playerLevel = 4; Fireball2.play();
            Fireball2.currentTime = 0;}

            currentCell.dataset.health = JSON.stringify(playerHealth);
            rightCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            currentCell.dataset.level = JSON.stringify(playerLevel);
            console.log(rightCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience + " level: " + currentCell.dataset.level  + " arcana: " + currentCell.dataset.weapon;;
           // if ((parseInt(bossCell1.dataset.health) <= 0 && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && parseInt(bossCell2.dataset.health) <= 0 && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && parseInt(bossCell3.dataset.health) <= 0 && bossCell4.style.background === "transparent") || (bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && parseInt(bossCell4.dataset.health) <= 0) ) { alert('YOU WIN'); window.location.reload()};
      

           //  || (bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && parseInt(bossCell4.dataset.health) <= 0) ) { alert('YOU WIN'); window.location.reload()};
            if ((parseInt(bossCell1.dataset.health) <= 0 && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && parseInt(bossCell2.dataset.health) <= 0 && bossCell3.style.background === "transparent" && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && parseInt(bossCell3.dataset.health) <= 0 && bossCell4.style.background === "transparent")) { alert('YOU WIN'); window.location.reload()};
            if ((bossCell1.style.background === "transparent" && bossCell2.style.background === "transparent" && bossCell3.style.background === "transparent" && parseInt(bossCell4.dataset.health) <= 0)) { alert('YOU WIN'); window.location.reload()};
            if (parseInt(currentCell.dataset.health) <= 0) {
             alert('GAME OVER');
             window.location.reload();}

          }


          else if ((rightCell.style.background === "transparent" && currentCell.dataset.borderRight == "false") || (rightCell.style.color === "purple" && currentCell.dataset.borderRight == "false") || (rightCell.style.color === "green" && currentCell.dataset.borderRight == "false")) { 
          console.log('movement');
          disableScroll.off();
          console.log('fires2')
          let playerWeapon = parseInt(currentCell.dataset.weapon);
          currentCell.style.background = "transparent";  
          currentCell.removeAttribute('tabIndex'); 
          rightCell.style.background = "url('wizardFinal.jpg')";
          rightCell.style.backgroundSize = "75px 75px";
          rightCell.setAttribute('data-health', currentCell.dataset.health);
          rightCell.setAttribute('data-experience', currentCell.dataset.experience);
          rightCell.setAttribute('data-level', currentCell.dataset.level);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience');
          currentCell.removeAttribute('data-level'); 
          rightCell.setAttribute('data-weapon', playerWeapon);
          currentCell.removeAttribute('data-weapon');
          rightCell.setAttribute('tabIndex', '0') 
          rightCell.focus();
          
        };

         if (currentCell.dataset.borderRight === "true" && currentLeftCell.style.color !== "navy" && currentLeftCell.style.color === "cyan") {
          console.log('border move');
          disableScroll.off();
          console.log('fires2');
          let playerWeapon = parseInt(currentCell.dataset.weapon);
          currentCell.style.background = "transparent";  
          currentCell.removeAttribute('tabIndex'); 
          let currentLeftCell = document.getElementById(`${parseInt(e.target.id) - 19}`);
          currentLeftCell.style.background = "url('wizardFinal.jpg')";
          currentLeftCell.style.backgroundSize = "75px 75px";
          currentLeftCell.setAttribute('data-health', currentCell.dataset.health);
          currentLeftCell.setAttribute('data-experience', currentCell.dataset.experience);
          currentLeftCell.setAttribute('data-level', currentCell.dataset.level);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience');
          currentCell.removeAttribute('data-level'); 
          currentLeftCell.setAttribute('data-weapon', playerWeapon);
          currentCell.removeAttribute('data-weapon');
          currentLeftCell.setAttribute('tabIndex', '0') 
          currentLeftCell.focus()

        }
          return "done";
          break;

        default: 
         return null
      

  }

}
  render() {
  const test = () => {return (<div>testons</div>)};
  let body = document.querySelector('body');
  body.style.background = "url('darkCastleBack.jpg')";
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";


  if (this.state.start === false) { return <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>

    <h1>Dungeon Of Arcana Rogue Game  <button onClick={this.start}>Start</button></h1>
    <div style={{ display: "flex", flexDirection: "row", alignItems: "center"}}>
    <div style={{display: "flex", flexDirection: "column", order: "2"}}>
    <img className="introPage" src="wizardFinal.jpg" alt="player Image"></img>
    <img className="introPage" src="goblin5.png" alt="player Image"></img>
    <img className="introPage" src="healthPotion2.png" alt="player Image"></img>
    <img className="introPage" src="arcana3.png" alt="player Image"></img>
    <img className="introPage" src="Wraith.png" alt="player Image"></img>
    <img className="introPage" src="boss.png" alt="player Image"></img>

    </div>

    <div style={{display: "flex", flexDirection: "column", height: "auto", order: "1"}}>
    <p>This is your avatar</p>
    <p>Start by defeating those weaker ennemies!</p>
    <p>Grab potions to increase your health!</p>
    <p>Grab arcana to increase your magic power!</p>
    <p>And then go on to fight tougher ennemies</p>
    <p>Reach lvl 4 and receive bonuses to attempt the boss!</p>
    </div>

    </div>


   





    </div>}  
  if (this.state.start === true) { 
  return <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
  <audio id="Fireball" src="Fireball.wav"></audio>
  <audio id="Fireball1" src="Fireball1.mp3"></audio>
  <audio id="Fireball2" src="Fireball2.mp3"></audio>
            <div id="testons">
              health: 500 experience: 0 level: 0 arcana: 50
              
            </div>


  <div style={{background: "url('darkTexture.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed"}} className="container">{this.state.gameBoard.reverse().map((x) => {
       if (x[9] === "129") { 
      return ( <div style={{display: "flex", flexDirection: "row"}} className="row" >
        
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="true" id={x[0]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[1]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[2]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[3]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[4]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[5]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[6]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[7]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[8]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" data-health="500" data-weapon="50" data-experience="0" data-level="0" style={{background: "url('wizardFinal.jpg')", backgroundSize: "contain"}} tabIndex="0" id={x[9]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[10]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" style={{background: "cyan"}} id={x[11]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[12]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[13]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[14]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[15]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[16]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[17]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[18]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="true" data-border-left="false" id={x[19]}></div>








        </div>)
      }
    else {
         return ( <div style={{display: "flex", flexDirection: "row"}} className="row" >
        
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="true" id={x[0]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[1]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[2]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[3]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[4]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[5]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[6]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[7]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[8]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[9]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[10]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[11]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[12]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[13]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[14]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[15]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[16]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[17]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[18]}></div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="true" data-border-left="false" id={x[19]}></div>








        </div>)
    }

  })}
</div></div>}

  }
}

export default App;
