import React from 'react';
import ReactDOM from 'react-dom';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const names = ['A', 'B', 'C', 'D'];
const days = ['mon', 'tue', 'wed', 'thu', 'fra', 'sta', 'sun'];

export default function Row({
  index,
  id,
  state,
  setState,
  numOfRows,
  setNumOfRows,
}) {
  const [personName, setPersonName] = React.useState([]);
  const [selectedNum, setSelectedNum] = React.useState(
    days.some(day => state[index][day]),
  );
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = event => {
    let temp = [...state];
    setPersonName(event.target.value);
    setNumOfRows(numOfRows + 1);
    temp[index].abcd = event.target.value;
    setState(temp);
  };

  function FindNumOfRow(state) {
    let len = 0;
    state.forEach(v => (v.exist ? len++ : null));
    return len;
  }

  const DayChange = (e, day, setDayCheck, index) => {
    let s;
    let temp = [...state];
    if (e.target.checked) {
      s = selectedNum;
      if (s >= 1) {
        setDayCheck(false);
        temp[index + 1].exist = true;
        temp[index + 1][day] = true;
        //days.forEach((day, i) => (temp[index][day] = false));
        //setState(temp);
      } else {
        temp[index][day] = true;
        s = selectedNum + 1;
        setSelectedNum(s);
        setDayCheck(true);
      }
    } else {
      s = selectedNum - 1;
      setDayCheck(false);
      setSelectedNum(s);
      if (s == 0) {
        if (FindNumOfRow(state) > 1) {
          temp[index].exist = false;
          days.forEach(day => (temp[index][day] = false));
          temp.sort((a, b) => b.exist - a.exist);
        }
        //setState(temp);
      }
    }
    setState(temp);
  };

  function TextFieldChange(e, name) {
    let temp = [...state];
    temp[index][name] = event.target.value;
    setState(temp);
  }

  const [monCheck, setMonCheck] = React.useState(state[index].mon);
  const [tueCheck, setTueCheck] = React.useState(state[index].tue);
    let p = state[index].sun;
  const [sunCheck, setSunCheck] = React.useState(p);
  const [thuCheck, setThuCheck] = React.useState(state[index].thu);
  const [fraCheck, setFraCheck] = React.useState(state[index].fra);

  function FindCheckBoxStatus(index, day) {
    let stat;
    let arr = state.map((v, i) => (v.exist ? i : -1));
    let maxIndex = Math.max(...arr);
    if (index == maxIndex) {
      stat = state.some((v, i) => v[day] && i != index);
    } else {
      stat = !state[index][day];
    }
    return stat;
  }

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox checked={monCheck} name="checkedB" color="primary" />
        }
        onChange={e => DayChange(e, 'mon', setMonCheck, index)}
        label="MON"
        disabled={FindCheckBoxStatus(index, 'mon')}
      />

      <FormControlLabel
        control={
          <Checkbox checked={tueCheck} name="checkedB" color="primary" />
        }
        onChange={e => DayChange(e, 'tue', setTueCheck, index)}
        label="TUE"
        disabled={FindCheckBoxStatus(index, 'tue')}
      />

      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        onChange={e => DayChange(e, 'wed', setWedCheck, index)}
        label="WED"
        disabled
      />

      <FormControlLabel
        control={
          <Checkbox checked={thuCheck} name="checkedB" color="primary" />
        }
        onChange={e => DayChange(e, 'thu', setThuCheck, index)}
        label="THU"
        disabled={FindCheckBoxStatus(index, 'thu')}
      />

      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        label="FRA"
        onChange={e => DayChange(e, 'fra', setFraCheck, index)}
        disabled
      />

      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        label="STA"
        disabled
      />

      <FormControlLabel
        control={
          <Checkbox
            checked={(() => console.log('sunCheck1 = ', sunCheck), sunCheck)}
            name="checkedB"
            color="primary"
          />
        }
        label="SUN"
        disabled={FindCheckBoxStatus(index, 'sun')}
        onChange={e => DayChange(e, 'sun', setSunCheck, index)}
      />

      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input />}
          renderValue={selected => selected.join(', ')}
          MenuProps={MenuProps}>
          {names.map(name => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {personName.map(name => (
        <TextField
          key={name}
          id="standard-basic"
		  required
          margin="none"
          label={name}
          onChange={e => TextFieldChange(e, name)}
          style={{width: 100, marginLeft: 20, fontSize: '1em'}}
        />
      ))}
    </div>
  );
}
