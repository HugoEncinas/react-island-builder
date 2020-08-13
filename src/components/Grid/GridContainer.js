import React from "react";
import { Typography } from '@material-ui/core';
import GridDisplay from './GridDisplay';

export const GridContainer = ({grid, cellHandler, isLoading}) => {

  if (isLoading) {
    return (
      <Typography variant="h4">
        Loading...
      </Typography>
    )
  }

  return (
    <GridDisplay grid={grid} cellHandler={cellHandler}></GridDisplay>
  )
};
