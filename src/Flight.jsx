import React from 'react';
import ReactDOM from 'react-dom';
import Row from './Row.jsx';
import Button from '@material-ui/core/Button';

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
      <span style={{margin: '200px'}}>{name}</span>
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
        style={{margin: '5%', float:"right"}}
        variant="contained"
        onClick={() => setFlightNum(flightNum + 1)}
        color="secondary">
        Next
      </Button>

      <Button
        style={{margin: '5%', float:"right"}}
        variant="contained"
        onClick={() => setFlightNum(4)}
        color="default">
        Skip
      </Button>
    </div>
  );
}

export {Flight};
