function diamondTraversal(matrix) {
  const n = matrix.length;

  let temp = "";

  let i = (n - 1) / 2;
  let j = n - 1;
  while (i >= 0 && j >= (n - 1) / 2) {
    temp += matrix[i][j] + " ";
    i--;
    j--;
  }

  i = 1;
  j = (n - 1) / 2 - 1;
  while (i <= (n - 1) / 2 && j >= 0) {
    temp += matrix[i][j] + " ";
    i++;
    j--;
  }

  i = (n - 1) / 2 + 1;
  j = 1;
  while (i <= n - 1 && j <= (n - 1) / 2) {
    temp += matrix[i][j] + " ";
    i++;
    j++;
  }

  i = n - 2;
  j = (n - 1) / 2 + 1;
  while (i >= (n - 1) / 2 + 1 && j <= n - 2) {
    temp += matrix[i][j] + " ";
    i--;
    j++;
  }

  console.log(temp);
}
diamondTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
diamondTraversal([
  [10, 21, 12, 2, 62],
  [36, 50, 16, 10, 31],
  [27, 34, 98, 11, 20],
  [95, 26, 28, 4, 49],
  [14, 46, 68, 40, 49],
]);
