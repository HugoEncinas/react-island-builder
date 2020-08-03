import React, { useEffect, useState } from "react";

import IslandBuilderDisplay from './IslandBuilderDisplay';
import { countNumberIslands } from '../../utils'

export const IslandBuilderContainer = () => {
  const [height, setHeight] = useState(1); //rows
  const [width, setWidth] = useState(1); //columns
  const [grid, setGrid] = useState([]);
  const [colorValue, setColorValue] = useState(true);
  const [numberCellsFilled, setNumberCellsFilled] = useState(0);
  const [numberIslands, setNumberIslands] = useState(0);

  const inputHandler = (ev, dimension) => {
    const size = ev.target.value;
    if(dimension === 'height') {
      setHeight(size)
    } else {
      setWidth(size)
    }
  }

  const buildGridHandler = () => {
    setNumberCellsFilled(0);
    setNumberIslands(0);
    const arr = [[]];
    for (let i = 0; i < height; i++) {
      arr[i] = [];
      for (let j = 0; j < width; j++) {
        arr[i][j] = -1;
      }
    }
    setGrid(arr);
  }

  const cellHandler = (row, col) => {
    const newGrid = [...grid];
    if (newGrid[row][col] === -1) { // if blue sea
      setNumberCellsFilled(numberCellsFilled+1);
      if (colorValue === true) { // change to green
        newGrid[row][col] = 0;
      } else { // change to brown
        newGrid[row][col] = 1;
      } 
    } else { // if land
      if (colorValue && newGrid[row][col] === 1) { // change cell brown to green
        newGrid[row][col] = 0; 
      } else if (!colorValue && newGrid[row][col] === 0) { // change cell green to brown
        newGrid[row][col] = 1;
      } else { // change cell to blue
        setNumberCellsFilled(numberCellsFilled-1);
        newGrid[row][col] = -1;
      }
    }
    setGrid(newGrid)
  }

  const colorSwitchHandler = (ev) => {
    setColorValue(!colorValue)
  }

  useEffect(() => {
    setNumberIslands(countNumberIslands(grid))
  }, [grid]);

  return (
    <IslandBuilderDisplay grid={grid} inputHandler={inputHandler} buildGridHandler={buildGridHandler} cellHandler={cellHandler}
    colorValue={colorValue} colorSwitchHandler={colorSwitchHandler} numberCellsFilled={numberCellsFilled} numberIslands={numberIslands}></IslandBuilderDisplay>
  )
};
