import React, { useEffect, useState } from "react";

import IslandBuilderDisplay from './IslandBuilderDisplay';

export const IslandBuilderContainer = () => {

  const [height, setHeight] = useState(1); //rows
  const [width, setWidth] = useState(1); //columns
  const [grid, setGrid] = useState([]);

  const inputHandler = (ev, dimension) => {
    const size = ev.target.value;
    if(dimension === 'height') {
      setHeight(size)
    } else {
      console.log('size', size);
      setWidth(size)
    }
  }

  const buildGridHandler = (ev) => {
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
    if (newGrid[row][col] === -1) {
      newGrid[row][col] = 0;
      
    } else {
      newGrid[row][col] = -1;
    }
    setGrid(newGrid)
  }

  useEffect(() => {
  }, [height, width]);

  useEffect(() => {
    console.log('grid', grid)
  }, [grid]);

  return (
    <IslandBuilderDisplay grid={grid} inputHandler={inputHandler} buildGridHandler={buildGridHandler} cellHandler={cellHandler}></IslandBuilderDisplay>
  )
};
