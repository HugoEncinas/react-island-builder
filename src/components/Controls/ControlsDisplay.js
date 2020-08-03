import { Button, TextField } from '@material-ui/core';
import React from 'react';

const ControlsDisplay = ({inputHandler, buildGridHandler}) => (
  <div>
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
  </div>
);

export default ControlsDisplay;
