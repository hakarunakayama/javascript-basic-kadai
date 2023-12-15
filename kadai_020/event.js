// ボタンをインスタンス化する
const btn = document.getElementById('btn');
// 「ボタンをクリックしてください」の見出しをインスタンス化
const message = document.getElementById('text');

// ボタンがクリックされたときの挙動を書く。プロパティはvalueじゃなくてtextContent！
btn.addEventListener('click', () => {
  message.textContent = 'ボタンをクリックしました';
});