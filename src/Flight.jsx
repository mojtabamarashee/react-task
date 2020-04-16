import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row.jsx';
import Button from '@material-ui/core/Button';

function Circle({text, name}) {
  return (
    <div
      style={{
        display: 'inline-block',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        fontSize: '15px',
        color: '#fff',
        lineHeight: '50px',
        textAlign: 'center',
        background: text == name ? "green" : "grey",
        margin: '0 0 30px 30px',
      }}>
      {text}
    </div>
  );
}

function Flight({state, setState, flightNum, setFlightNum, name}) {
  const [numOfRows, setNumOfRows] = React.useState(1);

  let Comp = [];
  let cntr = 0;
  let i;
  //let tempState = [...state];
  //tempState.sort((a, b) => b.exist - a.exist);
  //setState(tempState);
  for (i = 0; i < state.length; i++) {
    if (state[i].exist == true) {
      Comp.push(
        <Row
          index={i}
          id={cntr++}
          state={state}
          setState={setState}
          key={state[i].id}
          numOfRows={numOfRows}
          setNumOfRows={setNumOfRows}
        />,
      );
    }
  }
  return (
    <div>
      <Circle text="flight1" name = {name}/>
      <Circle text="flight2" name = {name}/>
      <Circle text="flight3" name = {name}/>
      <Circle text="result" name = {name}/>
      {Comp}
      <Button
        style={{margin: '5%'}}
        onClick={() => {
          if (flightNum > 1) setFlightNum(flightNum - 1);
        }}
        variant="contained"
        color="primary">
        Prevous
      </Button>
      <Button
        style={{margin: '5%', float: 'right'}}
        variant="contained"
        onClick={() => setFlightNum(flightNum + 1)}
        color="secondary">
        Next
      </Button>

      <Button
        style={{margin: '5%', float: 'right'}}
        variant="contained"
        onClick={() => setFlightNum(4)}
        color="default">
        Skip
      </Button>
    </div>
  );
}

export {Flight, Circle};
