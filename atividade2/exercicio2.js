function printMatrix(matrix) {
  for (const row of matrix) {
      console.log(row.join(" "));
  }
}

function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = new Array(cols).fill(0).map(() => new Array(rows).fill(0));

  for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
          transposed[j][i] = matrix[i][j];
      }
  }

  return transposed;
}

// Exemplo de matriz
const matrixA = [
  [2, 3, 4],
  [5, 6, 7]
];

console.log("Matriz A:");
printMatrix(matrixA);

const transposedA = transposeMatrix(matrixA);

console.log("\nMatriz Transposta:");
printMatrix(transposedA);
