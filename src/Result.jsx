import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Circle} from './Flight.jsx';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(state1, state2, state3) {
  return {name, calories, fat, carbs, protein};
}

const rows = [['flight1']];

export default function Result({state1, state2, state3, name, setFlightNum}) {
  const classes = useStyles();
  let A, B, C, D;

  let FindABCD = (day, stateNum) => {
    let t, curState;
    if (stateNum == 1) {
      curState = state1;
    } else if (stateNum == 2) curState = state2;
    if (stateNum == 3) curState = state3;

    t = curState.filter((v, i) => v.exist && v[day])[0];
    let A, B, C, D;
    A = B = C = D = '-';
    if (t) {
      if (t.A) {
        A = t.A;
      }
      if (t.B) {
        B = t.B;
      }
      if (t.C) {
        C = t.C;
      }
      if (t.D) {
        D = t.D;
      }
    }
    return {A, B, C, D};
  };
  let days = ['mon', 'tue', 'wed', 'thu', 'fra', 'sta', 'sun'];

  return (
    <div>
      <Circle text="flight1" name={name} setFlightNum={() => setFlightNum(1)} />
      <Circle text="flight2" name={name} setFlightNum={() => setFlightNum(2)} />
      <Circle text="flight3" name={name} setFlightNum={() => setFlightNum(3)} />
      <Circle text="result" name={name} setFlightNum={() => setFlightNum(4)} />

      <table className={classes.table} size="small" aria-label="a dense table">
        <thead>
          <tr>
            <td key="f">FLIGHT</td>
            <td key="m">MON</td>
            <td key="t">TUE</td>
            <td key="w">WED</td>
            <td key="th">THU</td>
            <td key="fr">FRA</td>
            <td key="st">STA</td>
            <td key="su">SUN</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>flight1</td>
            {days.map(
              (v, i) => (
                ({A, B, C, D} = FindABCD(v, 1)),
                (
                  <td key={i}>
                    <span>{A + ' , ' + B + ' , ' + C + ' , ' + D + ' , '}</span>
                  </td>
                )
              ),
            )}
          </tr>

          <tr>
            <td>flight2</td>
            {days.map(
              (v, i) => (
                ({A, B, C, D} = FindABCD(v, 2)),
                (
                  <td key={i + '1'}>
                    <span>{A + ' , ' + B + ' , ' + C + ' , ' + D + ' , '}</span>
                  </td>
                )
              ),
            )}
          </tr>

          <tr>
            <td>flight3</td>
            {days.map(
              (v, i) => (
                ({A, B, C, D} = FindABCD(v, 3)),
                (
                  <td key={i + '2'}>
                    <span>{A + ' , ' + B + ' , ' + C + ' , ' + D + ' , '}</span>
                  </td>
                )
              ),
            )}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export {Result};
