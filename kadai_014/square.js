// 引数を二乗する関数squareを定義。returnもしっかり記述する。
const square = (num) => {
  return num * num;
}

// 引数は関数を使うときに指定する。今回はランダム。
console.log(square(Math.floor(Math.random() * 100)));