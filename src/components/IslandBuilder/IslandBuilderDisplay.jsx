import { Container } from '@material-ui/core';
import React from 'react';

import Controls from '../Controls'
import Grid from '../Grid'

const IslandBuilderDisplay = ({grid, inputHandler, buildGridHandler, cellHandler}) => (
  <Container>
    <Controls inputHandler={inputHandler} buildGridHandler={buildGridHandler}></Controls>
    <Grid grid={grid} cellHandler={cellHandler}>
    
    </Grid>
  </Container>
  
);

export default IslandBuilderDisplay;
