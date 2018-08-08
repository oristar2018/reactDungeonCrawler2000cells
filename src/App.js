import React, { Component } from 'react';
import logo from './logo.svg';
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

        if (cells[i].id === "129") {
          cells[i].style.background = "url('warrior.png')";
          cells[i].style.backgroundSize = "contain";
          cells[i].style.backgroundRepeat = "no-repeat";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px";

        }

        if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random < 2.5 && cells[i].dataset.borderRight === "false" && cells[i].dataset.borderLeft === "false" && randomHealth < 600) {
          
          cells[i].style.background = "url('gobelin.jpg')";
          cells[i].style.backgroundRepeat = "no-repeat";
          cells[i].style.backgroundSize = "contain";
          cells[i].style.color = "green";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px";
          cells[i].setAttribute('data-health',  JSON.stringify(randomHealth / 5));
          cells[i].setAttribute('data-weapon', '5')
        }

        if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random < 2.5 && cells[i].dataset.borderRight === "false" && cells[i].dataset.borderLeft === "false" && randomHealth >= 600) {
          
          cells[i].style.background = "url('ennemy2.jpg')";
          cells[i].style.backgroundSize = "contain";
          cells[i].style.backgroundRepeat = "no-repeat";
          cells[i].style.color = "purple";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px";
          cells[i].setAttribute('data-health', JSON.stringify(randomHealth / 2));
          cells[i].setAttribute('data-weapon', '15')
        }
         
         //ennemies can't spawn in corners

         if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random < 2.5 && cells[i].dataset.borderRight === "true" || parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random < 2.5 && cells[i].dataset.borderLeft === "true") {
          cells[i].style.background = "cyan";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px";
        
        }

        if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random < 30 && random >= 2.5) {
          cells[i].style.background = "url('/wall.jpg')";
          cells[i].style.backgroundSize = "contain";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px"
        }

        if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random >= 30 && random < 31.5  && cells[i].dataset.borderRight === "false" && cells[i].dataset.borderLeft === "false") {
          cells[i].style.color = "yellow";  
          cells[i].style.background = "url('potion.jpg')";
          cells[i].style.backgroundSize = "contain";
          cells[i].style.backgroundRepeat = "no-repeat";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px";
          cells[i].setAttribute('data-healthpotion', '50');
          cells[i].setAttribute('data-weapon', '0');

        }

        if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random >= 30 && random < 31.5  && cells[i].dataset.borderRight === "true" || parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random >= 30 && random < 31.5  && cells[i].dataset.borderLeft === "true") {

             cells[i].style.background = "cyan";
             cells[i].style.width = "50px";
             cells[i].style.height = "50px";

        }

        if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random >= 31.5 && random < 33  && cells[i].dataset.borderRight === "false" && cells[i].dataset.borderLeft === "false") {
          cells[i].style.color = "yellow";  
          cells[i].style.background = "url('arcana2.jpg')";
          cells[i].style.backgroundSize = "contain";
          cells[i].style.backgroundRepeat = "no-repeat";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px";
          cells[i].setAttribute('data-healthpotion', '0');
          cells[i].setAttribute('data-weapon', '2');

        }

         if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random >= 31.5 && random < 33  && cells[i].dataset.borderRight === "true" || parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random >= 31.5 && random < 33  && cells[i].dataset.borderLeft === "true") {

             cells[i].style.background = "cyan";
             cells[i].style.width = "50px";
             cells[i].style.height = "50px";

        }


        else if (parseInt(cells[i].id) > 19 && parseInt(cells[i].id) < 2000 && cells[i].id !== "129" && random >= 33) { 
            cells[i].style.background = "cyan"
            cells[i].style.width = "50px";
            cells[i].style.height = "50px"
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
     let rightCell = document.getElementById(`${parseInt(e.target.id) + 1}`);
     let Fireball1 = document.getElementById('Fireball1');
     console.log(Fireball1);
     let testons = document.getElementById('testons');

     console.log('fires', currentCell.dataset.borderRight);
     console.log(upCell.dataset.health, currentCell.dataset.health);

      switch(e.key) {
        case "ArrowUp":
          if (upCell.style.color === "yellow") {
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
            currentCell.style.background = "cyan"; 

            currentCell.removeAttribute('tabIndex'); 
            upCell.style.background = "url('warrior.png')";
            upCell.style.backgroundSize = "contain";
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
            
          }

          if (upCell.style.color === "green" && parseInt(upCell.dataset.health) > 0 || upCell.style.color === "purple" && parseInt(upCell.dataset.health) > 0 ) {
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(upCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(upCell.dataset.weapon);
            let playerLevel = parseInt(currentCell.dataset.level);

            
            playerHealth -= ennemyWeapon;
            ennemyHealth -= playerWeapon;
            playerExperience += playerWeapon;

            if (playerExperience > 1000) { playerLevel = 1}
            if (playerExperience > 2000) { playerLevel = 2}
            if (playerExperience > 3000) { playerLevel = 3}
            if (playerExperience > 4000) { playerLevel = 4}

            currentCell.dataset.health = JSON.stringify(playerHealth);
            upCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            currentCell.dataset.level = JSON.stringify(playerLevel);
            Fireball1.play();
            console.log(upCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience + " level: " + currentCell.dataset.level  + " arcana: " + currentCell.dataset.weapon;

            
          }


         else if (upCell.style.background === "cyan" || upCell.style.color === "green" || upCell.style.color === "purple") {   
          let playerWeapon = parseInt(currentCell.dataset.weapon);    
          currentCell.style.background = "cyan"; 
          currentCell.removeAttribute('tabIndex'); 
          upCell.style.background = "url('warrior.png')";
          upCell.style.backgroundSize = "contain";
          upCell.setAttribute('data-health', currentCell.dataset.health);
          upCell.setAttribute('data-experience', currentCell.dataset.experience);
          upCell.setAttribute('data-level', currentCell.dataset.level);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience');
          currentCell.removeAttribute('data-level'); 
          upCell.setAttribute('data-weapon', playerWeapon);
          currentCell.removeAttribute('data-weapon');
          upCell.setAttribute('tabIndex', '0') 
          upCell.focus() 
        }
          
          return "done";
          break; 
        case "ArrowDown":
          if (downCell.style.color === "yellow") {
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let healthpotion = parseInt(downCell.dataset.healthpotion);
            let arcanaLevel = parseInt(downCell.dataset.weapon);

            playerHealth += healthpotion;
            playerWeapon += arcanaLevel;

            currentCell.dataset.health = playerHealth;
            currentCell.dataset.weapon = JSON.stringify(playerWeapon);
            currentCell.style.background = "cyan"; 
            currentCell.removeAttribute('tabIndex');  
            downCell.style.background = "url('warrior.png')";
            downCell.style.backgroundSize = "contain";
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

          } 

          if (downCell.style.color === "green" && parseInt(downCell.dataset.health) > 0 || downCell.style.color === "purple" && parseInt(downCell.dataset.health) > 0) {
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(downCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(downCell.dataset.weapon);
            let playerLevel = parseInt(currentCell.dataset.level);

            
            playerHealth -= ennemyWeapon;
            ennemyHealth -= playerWeapon;
            playerExperience += playerWeapon;


            if (playerExperience >= 1000) { playerLevel = 1}
            if (playerExperience >= 2000) { playerLevel = 2}
            if (playerExperience >= 3000) { playerLevel = 3}
            if (playerExperience >= 4000) { playerLevel = 4}

            currentCell.dataset.health = JSON.stringify(playerHealth);
            downCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            currentCell.dataset.level = JSON.stringify(playerLevel);
            console.log(downCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            Fireball1.play();
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience + " level: " + currentCell.dataset.level  + " arcana: " + currentCell.dataset.weapon;
 
          }


          else if (downCell.style.background === "cyan" || downCell.style.color === "green" || downCell.style.color === "purple") { 
          let playerWeapon = parseInt(currentCell.dataset.weapon);
          currentCell.style.background = "cyan"; 
          currentCell.removeAttribute('tabIndex');  
          downCell.style.background = "url('warrior.png')";
          downCell.style.backgroundSize = "contain";
          downCell.setAttribute('data-health', currentCell.dataset.health);
          downCell.setAttribute('data-experience', currentCell.dataset.experience);
          downCell.setAttribute('data-level', currentCell.dataset.level);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience');
          currentCell.removeAttribute('data-level'); 
          downCell.setAttribute('data-weapon', playerWeapon);
          currentCell.removeAttribute('data-weapon');
          downCell.setAttribute('tabIndex', '0'); 
          downCell.focus()
        }
          return "done";
          break;
        case "ArrowLeft":

          if (leftCell.style.color === "yellow") {
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let healthpotion = parseInt(leftCell.dataset.healthpotion);
            let arcanaLevel = parseInt(leftCell.dataset.weapon);

            playerHealth += healthpotion;
            playerWeapon += arcanaLevel;

            currentCell.dataset.health = playerHealth;
            currentCell.dataset.weapon = JSON.stringify(playerWeapon);
            currentCell.style.background = "cyan"; 
            currentCell.removeAttribute('tabIndex');  
            leftCell.style.background = "url('warrior.png')";
            leftCell.style.backgroundSize = "contain";
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
          
          if (leftCell.style.color === "green" && parseInt(leftCell.dataset.health) > 0 && currentCell.dataset.borderLeft == "false" || leftCell.style.color === "purple" && parseInt(leftCell.dataset.health) > 0 && currentCell.dataset.borderLeft == "false") {
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(leftCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(leftCell.dataset.weapon);
            let playerLevel = parseInt(currentCell.dataset.level);
            
            playerHealth -= ennemyWeapon;
            ennemyHealth -= playerWeapon;
            playerExperience += playerWeapon;

            if (playerExperience >= 1000) { playerLevel = 1}
            if (playerExperience >= 2000) { playerLevel = 2}
            if (playerExperience >= 3000) { playerLevel = 3}
            if (playerExperience >= 4000) { playerLevel = 4}

            currentCell.dataset.health = JSON.stringify(playerHealth);
            leftCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            currentCell.dataset.level = JSON.stringify(playerLevel);
            console.log(leftCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            Fireball1.play();
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience + " level: " + currentCell.dataset.level  + " arcana: " + currentCell.dataset.weapon;

          }


          else if (leftCell.style.background === "cyan" && currentCell.dataset.borderLeft == "false" || leftCell.style.color === "green" && currentCell.dataset.borderLeft == "false" || leftCell.style.color === "purple" && currentCell.dataset.borderLeft == "false") { 
          let playerWeapon = parseInt(currentCell.dataset.weapon);
          currentCell.style.background = "cyan"; 
          currentCell.removeAttribute('tabIndex');  
          leftCell.style.background = "url('warrior.png')";
          leftCell.style.backgroundSize = "contain";
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

        else if (leftCell.style.background === "cyan" && currentCell.dataset.borderLeft == "true") {
          console.log('fires2')
          let playerWeapon = parseInt(currentCell.dataset.weapon);
          currentCell.style.background = "cyan";  
          currentCell.removeAttribute('tabIndex'); 
          let currentRightCell = document.getElementById(`${parseInt(e.target.id) + 19}`);
          currentRightCell.style.background = "url('warrior.png')";
          currentRightCell.style.backgroundSize = "contain";
          currentRightCell.setAttribute('data-health', currentCell.dataset.health);
          currentRightCell.setAttribute('data-experience', currentCell.dataset.experience);
          currentRightCell.setAttribute('data-level', currentCell.dataset.level);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience');
          currentCell.removeAttribute('data-level');  
          currentRightCell.setAttribute('data-weapon', playerWeapon);
          currentCell.removeAttribute('data-weapon');
          currentRightCell.setAttribute('tabIndex', '0') 
          currentRightCell.focus()

        }
          return "done";
          break;
        case "ArrowRight":

          if (rightCell.style.color === "yellow") {
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let healthpotion = parseInt(rightCell.dataset.healthpotion);
            let arcanaLevel = parseInt(rightCell.dataset.weapon);

            playerHealth += healthpotion;
            playerWeapon += arcanaLevel;

            currentCell.dataset.health = playerHealth;
            currentCell.dataset.weapon = JSON.stringify(playerWeapon);
            currentCell.style.background = "cyan"; 
            currentCell.removeAttribute('tabIndex');  
            rightCell.style.background = "url('warrior.png')";
            rightCell.style.backgroundSize = "contain";
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

          } 

          if (rightCell.style.color === "green" && parseInt(rightCell.dataset.health) > 0 && currentCell.dataset.borderRight == "false" || rightCell.style.color === "purple" && parseInt(rightCell.dataset.health) > 0 && currentCell.dataset.borderRight == "false") {
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(rightCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(rightCell.dataset.weapon);
            let playerLevel = parseInt(currentCell.dataset.level);
            
            playerHealth -= ennemyWeapon;
            ennemyHealth -= playerWeapon;
            playerExperience += playerWeapon;

            if (playerExperience >= 1000) { playerLevel = 1}
            if (playerExperience >= 2000) { playerLevel = 2}
            if (playerExperience >= 3000) { playerLevel = 3}
            if (playerExperience >= 4000) { playerLevel = 4}

            currentCell.dataset.health = JSON.stringify(playerHealth);
            rightCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            currentCell.dataset.level = JSON.stringify(playerLevel);
            console.log(rightCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            Fireball1.play();
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience + " level: " + currentCell.dataset.level  + " arcana: " + currentCell.dataset.weapon;;

          }

          
          else if (rightCell.style.background === "cyan" && currentCell.dataset.borderRight == "false" || rightCell.style.color === "purple" && currentCell.dataset.borderRight == "false" || rightCell.style.color === "green" && currentCell.dataset.borderRight == "false") { 
          console.log('fires2')
          let playerWeapon = parseInt(currentCell.dataset.weapon);
          currentCell.style.background = "cyan";  
          currentCell.removeAttribute('tabIndex'); 
          rightCell.style.background = "url('warrior.png')";
          rightCell.style.backgroundSize = "contain";
          rightCell.setAttribute('data-health', currentCell.dataset.health);
          rightCell.setAttribute('data-experience', currentCell.dataset.experience);
          rightCell.setAttribute('data-level', currentCell.dataset.level);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience');
          currentCell.removeAttribute('data-level'); 
          rightCell.setAttribute('data-weapon', playerWeapon);
          currentCell.removeAttribute('data-weapon');
          rightCell.setAttribute('tabIndex', '0') 
          rightCell.focus()
        }

        else if (rightCell.style.background === "cyan" && currentCell.dataset.borderRight == "true") {
          console.log('fires2');
          let playerWeapon = parseInt(currentCell.dataset.weapon);
          currentCell.style.background = "cyan";  
          currentCell.removeAttribute('tabIndex'); 
          let currentLeftCell = document.getElementById(`${parseInt(e.target.id) - 19}`);
          currentLeftCell.style.background = "url('warrior.png')";
          currentLeftCell.style.backgroundSize = "contain";
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

  if (this.state.start === false) { return <div><button onClick={this.start}>test</button></div>}  
  if (this.state.start === true) { 
  return <div>
  <audio id="Fireball1" src="Fireball1.mp3"></audio>
            <div id="testons">
              <p>player health: {test()}</p>
              <p>ennemy health: {this.state.ennemy_health}</p>
            </div>


  <div className="container">{this.state.gameBoard.reverse().map((x) => {
       if (x[9] === "129") { 
      return ( <div style={{display: "flex", flexDirection: "row"}} className="row" >
        
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="true" id={x[0]}>{x[0]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[1]}>{x[1]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[2]}>{x[2]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[3]}>{x[3]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[4]}>{x[4]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[5]}>{x[5]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[6]}>{x[6]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[7]}>{x[7]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[8]}>{x[8]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" data-health="500" data-weapon="50" data-experience="0" data-level="0" style={{background: "url('warrior.png')", backgroundSize: "contain"}} tabIndex="0" id={x[9]}>{x[9]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[10]}>{x[10]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" style={{background: "cyan"}} id={x[11]}>{x[11]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[12]}>{x[12]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[13]}>{x[13]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[14]}>{x[14]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[15]}>{x[15]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[16]}>{x[16]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[17]}>{x[17]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[18]}>{x[18]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="true" data-border-left="false" id={x[19]}>{x[19]}</div>








        </div>)
      }
    else {
         return ( <div style={{display: "flex", flexDirection: "row"}} className="row" >
        
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="true" id={x[0]}>{x[0]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[1]}>{x[1]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[2]}>{x[2]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[3]}>{x[3]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[4]}>{x[4]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[5]}>{x[5]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[6]}>{x[6]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[7]}>{x[7]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[8]}>{x[8]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[9]}>{x[9]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[10]}>{x[10]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[11]}>{x[11]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[12]}>{x[12]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[13]}>{x[13]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[14]}>{x[14]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[15]}>{x[15]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[16]}>{x[16]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[17]}>{x[17]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[18]}>{x[18]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="true" data-border-left="false" id={x[19]}>{x[19]}</div>








        </div>)
    }

  })}
</div></div>}

  }
}

export default App;
