/**
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees
 * (clockwise).
 */

function rotateMatrix(matrix) {
  let n = matrix.length;

  let rows = new Array(n).fill(0);
  let rotatedMat = rows.map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j >= 0; j--) {
      rotatedMat[j][n - 1 - i] = matrix[i][j];
    }
  }

  console.log(rotatedMat);
}

rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); // output [[7,4,1],[8,5,2],[9,6,3]]
rotateMatrix([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]); // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
