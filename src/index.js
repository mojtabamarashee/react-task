import React from 'react';
import ReactDOM from 'react-dom';
import {Flight} from './Flight.jsx';
import {Result} from './Result.jsx';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';

let routes = ['flight1', 'flight2', 'flight3', 'flight4'];
//const Routing = (
//  <Router>
//    <div>
//      {routes.map((v, i) => (
//        <Route key={i} path={'/' + v} render={() => <Flight key={i} />} />
//      ))}
//    </div>
//  </Router>
//);

class Flight1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Flight />;
  }
}

function App() {
  const [state1, setState1] = React.useState([
    {exist: true, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false , id : 0 },
    {exist: false, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false, id : 1},
    {exist: false, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false, id : 2},
    {exist: false, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false, id : 3},
  ]);

  const [state2, setState2] = React.useState([
    {exist: true, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false , id : 0},
    {exist: false, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false, id : 1},
    {exist: false, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false, id : 2},
    {exist: false, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false, id : 3},
  ]);

  const [state3, setState3] = React.useState([
    {exist: true, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false,  id :  0  },
    {exist: false, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false, id : 1},
    {exist: false, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false, id : 2},
    {exist: false, mon: false, tue: false, wed: false, thu: false, fra: false, sta: false, sun: false, id : 3},
  ]);

  const [flightNum, setFlightNum] = React.useState(1);

  let flight1Style = {display: 'none'};
  let flight2Style = {display: 'none'};
  let flight3Style = {display: 'none'};
  let resultStyle = {display: 'none'};

  if (flightNum == 1) flight1Style = {display: 'block'};
  if (flightNum == 2) flight2Style = {display: 'block'};
  if (flightNum == 3) flight3Style = {display: 'block'};
  if (flightNum == 4) resultStyle = {display: 'block'};

  return (
    <div>
      <div style={flight1Style}>
        <Flight
          key={1}
          state={state1}
          setState={setState1}
          flightNum={flightNum}
          setFlightNum={setFlightNum}
          name="flight1"
        />
      </div>
      <div style={flight2Style}>
        <Flight
          key={2}
          state={state2}
          setState={setState2}
          flightNum={flightNum}
          setFlightNum={setFlightNum}
          name="flight2"
        />
      </div>
      <div style={flight3Style}>
        <Flight
          key={3}
          state={state3}
          setState={setState3}
          flightNum={flightNum}
          setFlightNum={setFlightNum}
          name="flight3"
        />
      </div>

      <div style={resultStyle}>
        <Result
          key={4}
          state1={state1}
          state2={state2}
          state3={state3}
          name="result"
        />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
