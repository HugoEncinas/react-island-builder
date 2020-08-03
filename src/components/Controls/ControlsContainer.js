import React, { useEffect, useState } from "react";

import ControlsDisplay from './ControlsDisplay';

export const ControlsContainer = ({inputHandler, buildGridHandler, colorValue, colorSwitchHandler}) => {
  
  return (
    <ControlsDisplay inputHandler={inputHandler} buildGridHandler={buildGridHandler} 
      colorValue={colorValue} colorSwitchHandler={colorSwitchHandler}></ControlsDisplay>
  )
};
