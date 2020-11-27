import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props){
      return (
        <button
          className="square"
          onClick={props.onClick}
        >
          {props.value}
        </button>
      );
  }
  
  class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(9).fill(null),
        };
      }

        handleClick(i) {
        /*In the tutorial this squareFill is simply square
         *and we already know how the slice method works on arrays
         *but for better readability I have renamed this to squareFill   
        */
        const squareFill = this.state.squares.slice();
        squareFill[i] = 'X';
        this.setState({squares: squareFill});
      }

        renderSquare(i) {
        return (
          <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
          />
        );
      }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  