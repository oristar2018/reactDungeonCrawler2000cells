import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameBoard: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]], /*[["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["10", "11", "12"]]*/
      player_health: "5000",
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
        if (random < 2.5 && cells[i].dataset.borderRight === "false" && cells[i].dataset.borderLeft === "false" && randomHealth < 600) {
          
          cells[i].style.background = "green";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px";
          cells[i].setAttribute('data-health',  JSON.stringify(randomHealth));
          cells[i].setAttribute('data-weapon', '20')
        }

        if (random < 2.5 && cells[i].dataset.borderRight === "false" && cells[i].dataset.borderLeft === "false" && randomHealth >= 600) {
          
          cells[i].style.background = "purple";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px";
          cells[i].setAttribute('data-health', JSON.stringify(randomHealth));
          cells[i].setAttribute('data-weapon', '20')
        }

         if (random < 2.5 && cells[i].dataset.borderRight === "true" || cells[i].dataset.borderLeft === "true") {
          cells[i].style.background = "cyan";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px";
        
        }

        if (random < 30 && random >= 2.5) {
          cells[i].style.background = "url('/wall.jpg')";
          cells[i].style.backgroundSize = "contain";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px"
        }

        else if (random >= 30) { 
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
     let testons = document.getElementById('testons');

     console.log('fires', currentCell.dataset.borderRight);
     console.log(upCell.dataset.health, currentCell.dataset.health);

      switch(e.key) {
        case "ArrowUp":
          if (upCell.style.background === "green" && parseInt(upCell.dataset.health) > 0 || upCell.style.background === "purple" && parseInt(upCell.dataset.health) > 0 ) {
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(upCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(upCell.dataset.weapon);
            
            playerHealth -= ennemyWeapon;
            ennemyHealth -= playerWeapon;
            playerExperience += playerWeapon;

            currentCell.dataset.health = JSON.stringify(playerHealth);
            upCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            console.log(upCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience;

            
          }


         else if (upCell.style.background === "cyan" || upCell.style.background === "green" || upCell.style.background === "purple") {       
          currentCell.style.background = "cyan"; 
          currentCell.removeAttribute('tabIndex'); 
          upCell.style.background = "url('warrior.png')";
          upCell.style.backgroundSize = "contain";
          upCell.setAttribute('data-health', currentCell.dataset.health);
          upCell.setAttribute('data-experience', currentCell.dataset.experience);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience'); 
          upCell.setAttribute('data-weapon', '50')
          upCell.setAttribute('tabIndex', '0') 
          upCell.focus() 
        }
          
          return "done";
          break; 
        case "ArrowDown":

          if (downCell.style.background === "green" && parseInt(downCell.dataset.health) > 0 || downCell.style.background === "purple" && parseInt(downCell.dataset.health) > 0) {
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(downCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(downCell.dataset.weapon);
            
            playerHealth -= ennemyWeapon;
            ennemyHealth -= playerWeapon;
            playerExperience += playerWeapon;

            currentCell.dataset.health = JSON.stringify(playerHealth);
            downCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            console.log(downCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience;
 
          }


          else if (downCell.style.background === "cyan" || downCell.style.background === "green" || downCell.style.background === "purple") { 
          currentCell.style.background = "cyan"; 
          currentCell.removeAttribute('tabIndex');  
          downCell.style.background = "url('warrior.png')";
          downCell.style.backgroundSize = "contain";
          downCell.setAttribute('data-health', currentCell.dataset.health);
          downCell.setAttribute('data-experience', currentCell.dataset.experience);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience'); 
          downCell.setAttribute('data-weapon', '50')
          downCell.setAttribute('tabIndex', '0'); 
          downCell.focus()
        }
          return "done";
          break;
        case "ArrowLeft":
          
          if (leftCell.style.background === "green" && parseInt(leftCell.dataset.health) > 0 && currentCell.dataset.borderLeft == "false" || leftCell.style.background === "purple" && parseInt(leftCell.dataset.health) > 0 && currentCell.dataset.borderLeft == "false") {
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(leftCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(leftCell.dataset.weapon);
            
            playerHealth -= ennemyWeapon;
            ennemyHealth -= playerWeapon;
            playerExperience += playerWeapon;

            currentCell.dataset.health = JSON.stringify(playerHealth);
            leftCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            console.log(leftCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience;

          }


          else if (leftCell.style.background === "cyan" && currentCell.dataset.borderLeft == "false" || leftCell.style.background === "green" && currentCell.dataset.borderLeft == "false" || leftCell.style.background === "purple" && currentCell.dataset.borderLeft == "false") { 
          currentCell.style.background = "cyan"; 
          currentCell.removeAttribute('tabIndex');  
          leftCell.style.background = "url('warrior.png')";
          leftCell.style.backgroundSize = "contain";
          leftCell.setAttribute('data-health', currentCell.dataset.health);
          leftCell.setAttribute('data-experience', currentCell.dataset.experience);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience'); 
          leftCell.setAttribute('data-weapon', '50')
          leftCell.setAttribute('tabIndex', '0') 
          leftCell.focus()
        }

        else if (leftCell.style.background === "cyan" && currentCell.dataset.borderLeft == "true") {
          console.log('fires2')
          currentCell.style.background = "cyan";  
          currentCell.removeAttribute('tabIndex'); 
          let currentRightCell = document.getElementById(`${parseInt(e.target.id) + 19}`);
          currentRightCell.style.background = "url('warrior.png')";
          currentRightCell.style.backgroundSize = "contain";
          currentRightCell.setAttribute('data-health', currentCell.dataset.health);
          currentRightCell.setAttribute('data-experience', currentCell.dataset.experience);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience'); 
          currentRightCell.setAttribute('data-weapon', '50')
          currentRightCell.setAttribute('tabIndex', '0') 
          currentRightCell.focus()

        }
          return "done";
          break;
        case "ArrowRight":

          if (rightCell.style.background === "green" && parseInt(rightCell.dataset.health) > 0 && currentCell.dataset.borderRight == "false" || rightCell.style.background === "purple" && parseInt(rightCell.dataset.health) > 0 && currentCell.dataset.borderRight == "false") {
            let playerHealth = parseInt(currentCell.dataset.health);
            let playerExperience = parseInt(currentCell.dataset.experience);
            let ennemyHealth = parseInt(rightCell.dataset.health);
            let playerWeapon = parseInt(currentCell.dataset.weapon);
            let ennemyWeapon = parseInt(rightCell.dataset.weapon);
            
            playerHealth -= ennemyWeapon;
            ennemyHealth -= playerWeapon;
            playerExperience += playerWeapon;

            currentCell.dataset.health = JSON.stringify(playerHealth);
            rightCell.dataset.health = JSON.stringify(ennemyHealth);
            currentCell.dataset.experience = JSON.stringify(playerExperience);
            console.log(rightCell.dataset.health, currentCell.dataset.health, currentCell.dataset.experience);
            testons.textContent = "health: " + currentCell.dataset.health + " experience: " + currentCell.dataset.experience;

          }

          
          else if (rightCell.style.background === "cyan" && currentCell.dataset.borderRight == "false" || rightCell.style.background === "purple" && currentCell.dataset.borderRight == "false" || rightCell.style.background === "green" && currentCell.dataset.borderRight == "false") { 
          console.log('fires2')
          currentCell.style.background = "cyan";  
          currentCell.removeAttribute('tabIndex'); 
          rightCell.style.background = "url('warrior.png')";
          rightCell.style.backgroundSize = "contain";
          rightCell.setAttribute('data-health', currentCell.dataset.health);
          rightCell.setAttribute('data-experience', currentCell.dataset.experience);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience'); 
          rightCell.setAttribute('data-weapon', '50')
          rightCell.setAttribute('tabIndex', '0') 
          rightCell.focus()
        }

        else if (rightCell.style.background === "cyan" && currentCell.dataset.borderRight == "true") {
          console.log('fires2')
          currentCell.style.background = "cyan";  
          currentCell.removeAttribute('tabIndex'); 
          let currentLeftCell = document.getElementById(`${parseInt(e.target.id) - 19}`);
          currentLeftCell.style.background = "url('warrior.png')";
          currentLeftCell.style.backgroundSize = "contain";
          currentLeftCell.setAttribute('data-health', currentCell.dataset.health);
          currentLeftCell.setAttribute('data-experience', currentCell.dataset.experience);
          currentCell.removeAttribute('data-health'); 
          currentCell.removeAttribute('data-experience'); 
          currentLeftCell.setAttribute('data-weapon', '50')
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
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" data-health="5000" data-weapon="50" data-experience="0" style={{background: "url('warrior.png')", backgroundSize: "contain"}} tabIndex="0" id={x[9]}>{x[9]}</div>
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
