import React, { useEffect, useState } from "react";

import CellDisplay from './CellDisplay';

export const CellContainer = ({cell, cellHandler, indexRow, indexCol}) => {

  const [color, setColor] = useState(-1);

  useEffect(() => {
    if(cell === -1) {
      setColor('blue')
    } else if(cell === 0) {
      setColor('green')
    } else if(cell === 1) {
      setColor('brown')
    }
  }, [cell]);
  
  return (
    <CellDisplay color={color} cellHandler={cellHandler} indexRow={indexRow} indexCol={indexCol}></CellDisplay>
  )
};
