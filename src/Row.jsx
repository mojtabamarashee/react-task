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

export default function Row({index, state, setState, numOfRows, setNumOfRows}) {
  const [personName, setPersonName] = React.useState([]);
  const [selectedNum, setSelectedNum] = React.useState(0);
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = event => {
    let temp = [...state];
    setPersonName(event.target.value);
    setNumOfRows(numOfRows + 1);
    temp[index].abcd = event.target.value;
    setState(temp);
  };

  const MonChange = e => {
    let temp = [...state];
    temp[index].mon = e.target.checked;
    setState(temp);
    let s = selectedNum + 1;
    setSelectedNum(s);
    if (selectedNum >= 0 && e.target.checked && index < 3) {
      let temp = [...state];
      temp[index + 1].exist = e.target.checked;
      setState(temp);
    }
  };

  const TueChange = e => {
    let temp = [...state];
    temp[index].tue = e.target.checked;
    let s = selectedNum + 1;
    setState(temp);
    setSelectedNum(s);
    if (selectedNum >= 0 && e.target.checked && index < 3) {
      let temp = [...state];
      temp[index + 1].exist = e.target.checked;
      setState(temp);
    }
  };

  const WedChange = e => {
    let temp = [...state];
    temp[index].wed = e.target.checked;
    setState(temp);
    let s = selectedNum + 1;
    setSelectedNum(s);
    if (selectedNum >= 0 && e.target.checked && index < 3) {
      let temp = [...state];
      temp[index + 1].exist = e.target.checked;
      setState(temp);
    }
  };

  const ThuChange = e => {
    let temp = [...state];
    temp[index].thu = e.target.checked;
    setState(temp);
    let s = selectedNum + 1;
    setSelectedNum(s);
    if (selectedNum >= 0 && e.target.checked && index < 3) {
      let temp = [...state];
      temp[index + 1].exist = e.target.checked;
      setState(temp);
    }
  };


  const SunChange = e => {
    let temp = [...state];
    temp[index].sun = e.target.checked;
    setState(temp);
    let s = selectedNum + 1;
    setSelectedNum(s);
    if (selectedNum >= 0 && e.target.checked && index < 3) {
      let temp = [...state];
      temp[index + 1].exist = e.target.checked;
      setState(temp);
    }
  };

  function TextFieldChange(e, name) {
    let temp = [...state];
    if (name == 'A') temp[index].A = event.target.value;
    else if (name == 'B') temp[index].B = event.target.value;
    else if (name == 'C') temp[index].C = event.target.value;
    else if (name == 'D') temp[index].D = event.target.value;
    setState(temp);
  }
  return (
    <div>
      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        onChange={MonChange}
        label="MON"
      />

      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        onChange={TueChange}
        label="TUE"
      />

      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        onChange={WedChange}
        label="WED"
        disabled
      />

      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        onChange={ThuChange}
        label="THU"
      />

      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        label="FRA"
        disabled
      />

      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        label="STA"
        disabled
      />

      <FormControlLabel
        control={<Checkbox name="checkedB" color="primary" />}
        label="SUN"
        onChange={SunChange}
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
          margin="none"
          label={name}
          onChange={e => TextFieldChange(e, name)}
          style={{width: 100, marginLeft: 20, fontSize: '1em'}}
        />
      ))}
    </div>
  );
}
