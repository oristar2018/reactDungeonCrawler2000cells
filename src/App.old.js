import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameBoard: [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["10", "11", "12"]]
    };
    this.cellEvent = this.cellEvent.bind(this)
  }
  

  componentDidMount() {
    let playerCell = document.getElementById("2");
    console.log(playerCell)
    playerCell.focus();
  }
  cellEvent(e) {

     let currentCell = document.getElementById(e.target.id); 
     let upCell = document.getElementById(`${parseInt(e.target.id) + 3}`);
     let downCell = document.getElementById(`${parseInt(e.target.id) - 3}`);
     let leftCell = document.getElementById(`${parseInt(e.target.id) + -1}`);
     let rightCell = document.getElementById(`${parseInt(e.target.id) + 1}`);
     console.log('fires', currentCell.dataset.borderRight)

      switch(e.key) {
        case "ArrowUp":
          if (parseInt(upCell.id) > 0) {       
          currentCell.style.background = "white"; 
          currentCell.setAttribute('tabIndex', '1'); 
          upCell.style.background = "red";
          upCell.setAttribute('tabIndex', '0') 
          upCell.focus() 
        }
          
          return "done";
          break; 
        case "ArrowDown":
          if (parseInt(downCell.id) > 0) { 
          currentCell.style.background = "white"; 
          currentCell.setAttribute('tabIndex', '1');  
          downCell.style.background = "red";
          downCell.setAttribute('tabIndex', '0'); 
          downCell.focus()
        }
          return "done";
          break;
        case "ArrowLeft":
          if (parseInt(leftCell.id) > 0) { 
          currentCell.style.background = "white"; 
          currentCell.setAttribute('tabIndex', '1');  
          leftCell.style.background = "red";
          leftCell.setAttribute('tabIndex', '0') 
          leftCell.focus()
        }
          return "done";
          break;
        case "ArrowRight":
          console.log('ok');
          if (currentCell.dataset.borderRight == "false") { 
          console.log('fires2')
          currentCell.style.background = "white";  
          currentCell.setAttribute('tabIndex', '1'); 
          rightCell.style.background = "red";
          rightCell.setAttribute('tabIndex', '0') 
          rightCell.focus()
        }

        else if (currentCell.dataset.borderRight == "true") {
          console.log('fires2')
          currentCell.style.background = "white";  
          currentCell.setAttribute('tabIndex', '1'); 
          let currentLeftCell = document.getElementById(`${e.target.id - 2}`);
          currentLeftCell.style.background = "red";
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

  return this.state.gameBoard.map((x) => {
      if (x[1] === "2" ) {return ( <div style={{display: "flex", flexDirection: "row"}} className="row">
        <div data-border-right="false" onKeyDown={this.cellEvent} id={x[0]}>{x[0]}</div>
        <div data-border-right="false" tabIndex="0" onKeyDown={this.cellEvent} style={{background: "red"}} id={x[1]}>{x[1]}</div>
        <div onKeyDown={this.cellEvent} data-border-right="true" id={x[2]}>{x[2]}</div>
        </div>)}

      else {return ( <div style={{display: "flex", flexDirection: "row"}} id="row">
        <div onKeyDown={this.cellEvent} data-border-right="false" id={x[0]}>{x[0]}</div>
        <div onKeyDown={this.cellEvent} data-border-right="false" id={x[1]}>{x[1]}</div>
        <div onKeyDown={this.cellEvent} data-border-right="true" id={x[2]}>{x[2]}</div>
        </div>)}
    })

  }
}

export default App;
