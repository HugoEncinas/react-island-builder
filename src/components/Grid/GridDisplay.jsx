import React from 'react';

import Cell from './Cell'
import { RowStyled } from './styled';

const GridDisplay = ({grid, cellHandler}) => (
  <div>
    {
      grid.length? grid.map((row, indexRow) => {
        return (
          <RowStyled key={indexRow}>
            {
              row.map((cell, indexCol) => {
                return <Cell cell={cell} key={`${indexRow}-${indexCol}`} 
                  cellHandler={cellHandler} indexRow={indexRow} indexCol={indexCol}></Cell>
              })
            }
          </RowStyled>
        )
        
      })
      :
      ''
    }
  </div>
);

export default GridDisplay;
