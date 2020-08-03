export const countNumberIslands = (gridParam) => {
  let grid = [];
  for (let i = 0; i < gridParam.length; i++) {
    grid[i] = [];
    for (let j = 0; j < gridParam[0].length; j++) {
      grid[i][j] = gridParam[i][j];
    }
  }

  if (!grid.length || !grid[0].length) { return 0; } 
  const rows = grid.length;
  const cols = grid[0].length;

  const scanPlot = (r,c) => {
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === -1 ) { return; }

    grid[r][c] = -1;
    scanPlot(r + 1, c);
    scanPlot(r - 1, c);
    scanPlot(r, c + 1);
    scanPlot(r, c - 1);        
  }

  let count = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] >= 0) {
        count++;        
        scanPlot(i,j);
      }
    }
  }
  return count;
};