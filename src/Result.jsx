import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(state1, state2, state3) {
  return {name, calories, fat, carbs, protein};
}

const rows = [['flight1']];

export default function Result({state1, state2, state3}) {
  const classes = useStyles();
  let A, B, C, D;

  let FindABCD = (day, stateNum) => {
    let t, curState;
    if (stateNum == 1) curState = state1;
    else if (stateNum == 2) curState = state2;
    if (stateNum == 3) curState = state3;

    if (day == 'mon') t = curState.filter((v, i) => v.mon)[0];
    else if (day == 'tue') t = curState.filter((v, i) => v.tue)[0];
    else if (day == 'wed') t = curState.filter((v, i) => v.wed)[0];
    else if (day == 'thu') t = curState.filter((v, i) => v.thu)[0];
    else if (day == 'fra') t = curState.filter((v, i) => v.fra)[0];
    else if (day == 'sta') t = curState.filter((v, i) => v.sta)[0];
    else if (day == 'sun') t = curState.filter((v, i) => v.sun)[0];
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
  );
}
export {Result};
