import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameBoard: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]], /*[["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["10", "11", "12"]]*/
      test: function (argument) {
        return "test"
      }
    };
    this.cellEvent = this.cellEvent.bind(this)
  }
  

  UNSAFE_componentWillMount() {

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
    playerCell.focus();*/
  }

  componentDidMount() {
    let playerCell = document.getElementById("129");
    console.log(playerCell)
    
    playerCell.focus();
    console.log(this.state.test());

    let cells = document.getElementsByClassName('cell');
    console.log(cells);

    for (var i = 0; i <   cells.length; i++) {
        var random = Math.floor(Math.random() * 6);
        //console.log(random)
        if (random < 2) {
          cells[i].style.background = "silver";
          cells[i].style.width = "50px";
          cells[i].style.height = "50px"
        }

        else if (random >= 2) { 
            cells[i].style.background = "cyan"
            cells[i].style.width = "50px";
            cells[i].style.height = "50px"
      }
    }

    



  }


  cellEvent(e) {

    let currentCell = document.getElementById(e.target.id); 
     let upCell = document.getElementById(`${parseInt(e.target.id) + 20}`);
     let downCell = document.getElementById(`${parseInt(e.target.id) - 20}`);
     let leftCell = document.getElementById(`${parseInt(e.target.id) + -1}`);
     let rightCell = document.getElementById(`${parseInt(e.target.id) + 1}`);
     console.log('fires', currentCell.dataset.borderRight);
     console.log(upCell.dataset.health, currentCell.dataset.health)

      switch(e.key) {
        case "ArrowUp":
          if (upCell.style.background === "cyan" && upCell.dataset.health > 0) {
            let playerHealth = currentCell.dataset.health;
            let ennemyHealth = upCell.dataset.health;
            let playerWeapon = currentCell.dataset.weapon;
            let ennemyWeapon = upCell.dataset.weapon;
            
            playerHealth -= ennemyWeapon;
            ennemyHealth -= playerWeapon;

            currentCell.dataset.health = JSON.stringify(playerHealth);
            upCell.dataset.health = JSON.stringify(ennemyHealth);
            console.log(upCell.dataset.health, currentCell.dataset.health)
          }


         else if (upCell.style.background === "cyan") {       
          currentCell.style.background = "cyan"; 
          currentCell.removeAttribute('tabIndex'); 
          upCell.style.background = "red";
          upCell.setAttribute('data-health', currentCell.dataset.health);
          currentCell.removeAttribute('data-health'); 
          upCell.setAttribute('data-weapon', '50')
          upCell.setAttribute('tabIndex', '0') 
          upCell.focus() 
        }
          
          return "done";
          break; 
        case "ArrowDown":
          if (downCell.style.background === "cyan") { 
          currentCell.style.background = "cyan"; 
          currentCell.removeAttribute('tabIndex');  
          downCell.style.background = "red";
          downCell.setAttribute('data-health', currentCell.dataset.health);
          currentCell.removeAttribute('data-health'); 
          downCell.setAttribute('data-weapon', '50')
          downCell.setAttribute('tabIndex', '0'); 
          downCell.focus()
        }
          return "done";
          break;
        case "ArrowLeft":
          if (leftCell.style.background === "cyan" && currentCell.dataset.borderLeft == "false") { 
          currentCell.style.background = "cyan"; 
          currentCell.removeAttribute('tabIndex');  
          leftCell.style.background = "red";
          leftCell.setAttribute('data-health', currentCell.dataset.health);
          currentCell.removeAttribute('data-health'); 
          leftCell.setAttribute('data-weapon', '50')
          leftCell.setAttribute('tabIndex', '0') 
          leftCell.focus()
        }

        else if (leftCell.style.background === "cyan" && currentCell.dataset.borderLeft == "true") {
          console.log('fires2')
          currentCell.style.background = "cyan";  
          currentCell.removeAttribute('tabIndex'); 
          let currentRightCell = document.getElementById(`${parseInt(e.target.id) + 19}`);
          currentRightCell.style.background = "red";
          currentRightCell.setAttribute('data-health', currentCell.dataset.health);
          currentCell.removeAttribute('data-health'); 
          currentRightCell.setAttribute('data-weapon', '50')
          currentRightCell.setAttribute('tabIndex', '0') 
          currentRightCell.focus()

        }
          return "done";
          break;
        case "ArrowRight":
          console.log('ok');
          if (rightCell.style.background === "cyan" && currentCell.dataset.borderRight == "false") { 
          console.log('fires2')
          currentCell.style.background = "cyan";  
          currentCell.removeAttribute('tabIndex'); 
          rightCell.style.background = "red";
          rightCell.setAttribute('data-health', currentCell.dataset.health);
          currentCell.removeAttribute('data-health'); 
          rightCell.setAttribute('data-weapon', '50')
          rightCell.setAttribute('tabIndex', '0') 
          rightCell.focus()
        }

        else if (rightCell.style.background === "cyan" && currentCell.dataset.borderRight == "true") {
          console.log('fires2')
          currentCell.style.background = "cyan";  
          currentCell.removeAttribute('tabIndex'); 
          let currentLeftCell = document.getElementById(`${parseInt(e.target.id) - 19}`);
          currentLeftCell.style.background = "red";
          currentLeftCell.setAttribute('data-health', currentCell.dataset.health);
          currentCell.removeAttribute('data-health'); 
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
   
  return this.state.gameBoard.reverse().map((x) => {
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
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" data-health="5000" data-weapon="50" style={{background: "red"}} tabIndex="0" id={x[9]}>{x[9]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" id={x[10]}>{x[10]}</div>
          <div className="cell" onKeyDown={this.cellEvent} data-border-right="false" data-border-left="false" data-health="200" data-weapon="20" style={{background: "cyan"}} id={x[11]}>ennemy</div>
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

  })

  }
}

export default App;
