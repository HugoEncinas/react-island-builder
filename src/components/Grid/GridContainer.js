import React, { useEffect, useState } from "react";

import GridDisplay from './GridDisplay';

export const GridContainer = ({grid, cellHandler}) => {

  return (
    <GridDisplay grid={grid} cellHandler={cellHandler}></GridDisplay>
  )
};
