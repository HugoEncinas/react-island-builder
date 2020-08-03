import React from 'react';

import { CellStyled } from './styled'

const CellDisplay = ({cell, cellHandler, indexRow, indexCol}) => (
  <CellStyled color={cell} onClick={()=> cellHandler(indexRow, indexCol)}>
  </CellStyled>
);

export default CellDisplay;
