import React, { useEffect, useState } from "react";

import CellDisplay from './CellDisplay';

export const CellContainer = ({cell, cellHandler, indexRow, indexCol}) => {

  console.log('indexRow', indexRow)
  return (
    <CellDisplay cell={cell} cellHandler={cellHandler} indexRow={indexRow} indexCol={indexCol}></CellDisplay>
  )
};
