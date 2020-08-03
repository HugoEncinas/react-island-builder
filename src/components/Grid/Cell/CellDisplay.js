import React from 'react';
import { useEffect } from 'react';

import { CellStyled } from './styled'

const CellDisplay = ({color, cellHandler, indexRow, indexCol}) => (
  

  <CellStyled color={color} onClick={()=> cellHandler(indexRow, indexCol)}>
  </CellStyled>
);

export default CellDisplay;
