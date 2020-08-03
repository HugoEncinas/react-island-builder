import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { InputsStyled} from './styled';

const ColorSwitch = withStyles({
  switchBase: {
    color: 'brown',
    '&$checked': {
      color:'green',
    },
    '&$checked + $track': {
      backgroundColor: 'green',
    },
  },
  checked: {},
  track: {
    backgroundColor: 'brown'
  },
})(Switch);

const ControlsDisplay = ({inputHandler, buildGridHandler, colorValue, colorSwitchHandler}) => (
  <div>
    <InputsStyled>
      <TextField type="number" label="Height: "
        onChange={(ev)=>{inputHandler(ev, 'height')}}
        inputProps={{ min: "1", max: "100", step: "1" }} />
      <TextField type="number" label="Width: "
        onChange={(ev)=>{inputHandler(ev, 'width')}}
        inputProps={{ min: "1", max: "100", step: "1" }} />
      <Button
          size="small"
          onClick={buildGridHandler}
          variant="contained"
          color="secondary"
        >
        Build Grid
      </Button>
    </InputsStyled>
    
    <div>
      <FormControlLabel
        control={
          <ColorSwitch
            checked={colorValue}
            onChange={colorSwitchHandler}
            name="colorSwitch"
      />
        }
        label="Toggle Terrain Color"
      />
    </div>
  </div>
);

export default ControlsDisplay;
