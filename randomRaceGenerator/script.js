window.onload = function() {
    // ページ全体のリソースが読み込まれた後に実行されるコード
    const chooseEle = document.getElementById("choose");
    chooseEle.addEventListener("click", choose);
};

function choose() {
    const raseData = [
    "人間",
    "エルフ",
    "ドワーフ",
    "ナイトメア",
    "リカント",
    "ルーンフォーク",
    "リルドラケン",
    "メリア",
    "グラスランナー",
    "ティエンス",
    "レプラカーン"
    ]
  const resEle = document.getElementById("result")
  //0~10の乱数を生成し、配列から値を取得
  const result = raseData[Math.floor(Math.random() * 11)];
  console.log(result)
  //resEleの内容をresultに変更
  resEle.innerHTML = result;
}

