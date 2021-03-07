export default null // Force module mode

// 2. In the section on Typesafe Protocols we derived one half of a protocol for typesafe matrix math. 
// Given this half of the protocol that runs in the main thread, implement the other half that runs in a Web Worker thread.

type Matrix = number[][]

export type MatrixProtocol = {
  determinant: {
    in: [Matrix]
    out: number
  }
  'dot-product': {
    in: [Matrix, Matrix]
    out: Matrix
  }
  invert: {
    in: [Matrix]
    out: Matrix
  }
}


let handlers: {
  [C in keyof MatrixProtocol]: (
    ...args: MatrixProtocol[C]['in']
  ) => MatrixProtocol[C]['out']
} = {
  determinant(matrix) {
    return determinant(matrix)
  },
  ['dot-product'](a, b) {
    return dotProduct(a, b)
  },
  invert(matrix) {
    return invert(matrix)
  }
}

onmessage = <C extends keyof MatrixProtocol>({
  data: {command, args}
}: {
  data: {command: C; args: MatrixProtocol[C]['in']}
}) => {
  let handler = handlers[command]
  let m = [[0], [0]]
  let result = handler(m, m)
  // let result = handler(...args) // aruments for the rest parameter were not provided, expected 2 arguments but got 0
  postMessage(result)
}

declare function determinant(matrix: Matrix): number
declare function dotProduct(matrixA: Matrix, matrixB: Matrix): Matrix
declare function invert(matrix: Matrix): Matrix
