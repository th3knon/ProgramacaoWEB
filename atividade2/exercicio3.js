function matrixMultiplication(A, B) {
  const rowsA = A.length;
  const colsA = A[0].length;
  const rowsB = B.length;
  const colsB = B[0].length;

  if (colsA !== rowsB) {
      return "Não é possível calcular";
  }

  const C = new Array(rowsA).fill(0).map(() => new Array(colsB).fill(0));

  for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
          for (let k = 0; k < colsA; k++) {
              C[i][j] += A[i][k] * B[k][j];
          }
      }
  }

  return C;
}

// Exemplo de matrizes
const matrixA = [
  [2, 3],
  [4, 5],
  [6, 7]
];

const matrixB = [
  [8, 9],
  [10, 11]
];

const result = matrixMultiplication(matrixA, matrixB);

if (result === "Não é possível calcular") {
  console.log(result);
} else {
  for (const row of result) {
      console.log(row);
  }
}
