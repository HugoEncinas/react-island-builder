import { Container, Typography } from '@material-ui/core';
import React from 'react';

import Controls from '../Controls'
import Grid from '../Grid'

const IslandBuilderDisplay = ({grid, inputHandler, buildGridHandler, cellHandler, colorValue, colorSwitchHandler,
  numberCellsFilled, numberIslands, isLoading}) => (
  <Container>
    <Typography variant="h2" >
      Island Builder
    </Typography>
    <Controls inputHandler={inputHandler} buildGridHandler={buildGridHandler} 
      colorValue={colorValue} colorSwitchHandler={colorSwitchHandler}></Controls>
    <Typography variant="h6">
      Number plots filled: {`${numberCellsFilled}`}
    </Typography>
    <Typography variant="h6">
      Number Islands: {`${numberIslands}`}
    </Typography>
    <Grid grid={grid} cellHandler={cellHandler} isLoading={isLoading}>
    
    </Grid>
    
  </Container>
  
);

export default IslandBuilderDisplay;
