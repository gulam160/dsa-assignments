/**
 * Given an n x n matrix.
 * In the given matrix, you have to print the elements of the matrix in the snake pattern.
 */

function snakeMatrixPatternTraversal(matrix) {
  let n = matrix.length;

  let temp = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < n; j++) {
        temp += matrix[i][j] + " ";
      }
    } else {
      for (let j = n - 1; j >= 0; j--) {
        temp += matrix[i][j] + " ";
      }
    }
  }
  console.log(temp);
}
snakeMatrixPatternTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]); //Expected Output - 1 2 3 6 5 4 7 8 9
snakeMatrixPatternTraversal([
  [10, 21, 12, 2],
  [36, 50, 16, 10],
  [27, 34, 98, 11],
  [95, 26, 28, 4],
]);
