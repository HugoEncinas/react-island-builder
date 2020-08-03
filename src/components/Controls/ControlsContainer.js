import React, { useEffect, useState } from "react";

import ControlsDisplay from './ControlsDisplay';

export const ControlsContainer = ({inputHandler, buildGridHandler}) => {
  
  return (
    <ControlsDisplay inputHandler={inputHandler} buildGridHandler={buildGridHandler}></ControlsDisplay>
  )
};
