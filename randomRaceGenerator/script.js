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
    "タビット",
    "ルーンフォーク",
    "ナイトメア",
    "リカント",
    "リルドラケン",
    "グラスランナー",
    "メリア",
    "ティエンス",
    "レプラカーン"
    ]
    const raseIllustPath = [
      "./image/characterImage-lv2/01人間.svg",
      "./image/characterImage-lv2/02エルフ.svg",
      "./image/characterImage-lv2/03.1ドワーフ.svg",
      "./image/characterImage-lv2/04タビット.svg",
      "./image/characterImage-lv2/05ルーンフォーク.svg",
      "./image/characterImage-lv2/06ナイトメア.svg",
      "./image/characterImage-lv2/07リカント.svg",
      "./image/characterImage-lv2/08リルドラケン.svg",
      "./image/characterImage-lv2/09グラスランナー.svg",
      "./image/characterImage-lv2/10.1メリア.svg",
      "./image/characterImage-lv2/11ティエンス.svg",
      "./image/characterImage-lv2/12レプラカーン.svg",
    ]
    const discription = [
      "人間はラクシアで一番数多く存在する人族で、冒険者の数も最多です。見た目は現実世界の人間と変わりません。どの技能にも適性があり、運命を切り拓く力を持っていると言われています。<br>15 歳で成人として扱われ、寿命は約100年です。<br>また、人間はゲーム内時間の1日に1回だけ、特定の判定等で振ったサイコロの出目を裏返す[剣の加護／運命変転]を持ちます。様々な場面で活躍できる種族です。",
      "人間より背が高く、美しく優雅な姿をした種族で、魔法を得意とします。湖や川など、淡水の水辺や湖畔に好んで暮らします。自然を愛し、ゆったりと長い人生を楽しむことを好みますが、好奇心が強いため旅に出るエルフも珍しくありません。<br>人間よりもやや華奢で頭がよいので、魔法を使うのに適した能力をしています。すばやくて器用な者も多いので、レンジャーやフェンサー、シューターにも向いています。15 歳で成人と扱われ、最大寿命は約500 年です。たいていは成人してから冒険者になり、300 歳程度からゆっくりと老い始めます。",
      "人間より背は低いながら、頑健な体と強靱な筋肉を持つ種族です。<br>多くの男性は濃いひげを生やし、がっしりした体格をしています。女性にひげはなく、成人しても人間の少女に似た姿のまま、生涯ほとんど老けません。男女とも、頭髪を含む体毛は金属系の色や派手な原色、中にはピンクや緑などの奇抜な色になる傾向にあります。<br>頑固で一本気な性格の者が多く、非常に仲間想いでもあります。己を鍛え、より強くなろうとする種族性があり、優秀な戦士となります。また優れた武具や細工物を作ることでも有名です。<br>多くの場合、山間部に鉱山町を作って暮らしていますが、蛮族との戦いの場を求めて人間とも積極的に交流し、傭兵や冒険者となるものも多数います。<br>15 歳で成人と扱われ、最大寿命は200 年ほどです。たいていは成人してから冒険者になり、死ぬまで己を鍛え続けます。",
      "タビットは身長１ｍほどの、直立したウサギのような姿をした種族です。体毛の色はさまざまで、手足には肉球がありますが、道具を使ったり、靴を履いたりするのは人間と同じです。知識の収集を好み、真実の探求に打ち込むことを生きがいとしています。<br>魔法に卓越した才能を発揮し、どんな魔法でも使いこなせる素養を持ちます。しかし神聖魔法だけはどうしても習得できず、多くのタビットは「自分たちが太古の神々の戦で敗れ、呪いをかけられた神の末裔だから」だと考えているようです（真相は不明です）。<br>魔法に優れた才能を発揮する反面、短い足と腕のために、動きは鈍く不器用です。10 歳で成人として扱われ、寿命は50 年ほどです。<br>たいていは成人前の５歳くらいから冒険者になり、死ぬまで冒険者であり続けます。",
      "ルーンフォークは自然に生まれた種族ではなく、2,000 年ほど前に興った魔動機文明で作られた人造人間です。<br>基本的に人間と同じような姿と肉体構造をし、食事や睡眠も人間と同じように行います。男性型の多くは大柄、女性型の多くは小柄に作られています。また人間と見分けるためか、必ず首が硬質素材に覆われており、それ以外にもどこか、耳や顔の一部、腕や足などが硬質素材となっています（プレイヤーが任意に決定します）。<br>ルーンフォークは筋力と器用さに優れ、優秀な戦士や射手となります。その出自ゆえマギテックとなる者もよく見られます。神の声が聞こえず、神官は存在しません。<br>寿命は、動作できる期間ということになります。約50 年は安定しますが、それ以降は突然機能停止（死去）することがあります。生まれてから死ぬまで姿は変わらず、生後即冒険者となる者もいます。",
      "ナイトメアは人間やエルフ、ドワーフから生まれてくる、突然変異です。生まれながら魂に“穢れ”を１点持ち、その影響で頭部に１～２本の小さな角、体に痣を持ちます。肌は極端に色白ですが、そのほかの見た目は人間とあまり変わりません。<br>“穢れ”を持つため、忌み子として社会的には忌避されがちですが、冒険者としては優秀であり、魔法戦士として高い適性を持ちます。そのため、冒険者としては差別なく、歓迎されます。<br>ナイトメアは15 歳から成人として扱われます。最大寿命は定かではなく、老衰で死んだ記録はありません。成人前に冒険者となるケースも多く、ほとんどは死ぬまで冒険者であり続けます。",
      "リカントは、アルフレイム大陸に暮らす人間型種族で、豊かな体毛に覆われた尻尾と耳を持ちます。頭部を肉食獣の姿に変化させる能力を持ち、主に野外での生活や活動を得意としています。<br>男性は人間よりやや大柄ですが、女性は人間とあまり変わりません。細身ながら筋肉質であり、敏捷性に優れています。知性も高く、罠を見破ることも得意としており、優れた戦士、密偵、狩人となります。獣の姿になることで筋力を強化できますが、反面、唸るような独特の発声しかできなくなり、多くの魔法を使えなくなってしまいます。<br>かつてその姿や特性から、ライカンスロープ（狼人間など）と混同され、迫害された過去があり、以来強い敵対心を持っています。<br>15 歳で成人とみなされ、寿命は約150 年です。",
      "直立した小型のドラゴンです。一見恐ろしい姿をしていますが、第一の剣ルミエルの加護を受けたことから、人族として数えられています。見た目に反して交流を好み、社交的で、交易商人になる者も多数存在します。独自の国家を形成することもありますが、人間の国家で共存していることのほうが多く見られます。<br>卵から生まれて、３回の脱皮（約30 歳）で成人として扱われ、寿命は約300 年です。",
      "草原を旅する小さな人族で、陽気で能天気な放浪を好む種族です。<br>なぜかマナ（魔法の源）に反応しにくい体質を持ち、そのせいで魔法にはあまり興味がありません。<br>どこから来たのか、どこで生まれたのかは謎の種族です。彼らは記録も残さないので、真相は闇の中です。ごく稀にですが、地下迷宮や“奈落の魔域”で魔神と一緒にいるところを目撃されることから、異世界から来たという説すらあります。<br>成人しても人間の子供と見間違えるような体格ですが、15 歳で肉体的な成熟を迎え、寿命は約200 年といわれています。しかし多くの場合、好奇心がグラスランナーを殺します。",
      "	ラクシア全体でも珍しい、植物から人族になった種族です。<br>見た目は人間そっくりですが、頭や肩、手首など、目立つ場所から花が１～数輪咲いており、感情に応じて咲いたりしおれたりするのが特徴です。男女の性差もあり、外形は人間とかなり似ていますが、内部は植物に近い単純な構造で、そのせいか生命力、耐久力に優れます。睡眠が不要であったり、種の形で子を成すなど、かなり特殊な種族です。<br>能力的に差異はないものの、短命種と長命種が存在し、短命種は種を土に植えてから1 週間ほどで幼児の姿になり、半年ほどで成人します。長命種は、１年ほどで幼児の姿になり、20 歳で成人します。寿命は短命種で10 年程度、長命種で300 年程度生きます。",
      "ティエンスの誕生は、約3,000 年前に滅びたとされる、古代魔法文明デュランディル時代末期まで遡ることができます。<br>魔法文明以前、神話の時代の終焉に存在したアストレイドと呼ばれる神性生物。ティエンスは、人間とこのアストレイドの体をマナを用いた実験によって合成し、人工的に生み出された種族とされています。<br>生み出された理由は諸説ありますが、もっとも有力なものは、“奈落”から現れる魔神に対抗するためだったとされるものです。<br>そのため、ティエンスはいまなお、アルフレイム大陸の北部、特に“奈落の壁”周辺で多く見られます。<br>ティエンスの寿命は、50 年程度と短く、40 歳を過ぎた頃から急激に老い始めます。しかし彼らは自らの意思で仮死状態になることができ、その間は加齢することもなく、何年でも眠り続けます。",
      "レプラカーンは、古代魔法文明時代には存在したとされる種族ですが、よく知られるようになったのは、魔動機文明時代になってからです。<br>身長は総じて人間の子供程度しかなく、男性で平均130㎝程度、女性で120㎝程度です。毛の生えた大きな耳が特徴であり、男性は豊かな髭をたくわえています。この髭のせいでドワーフと見間違えられることがありますが、レプラカーンのほうがかなり小柄かつ華奢で、機敏です。また、総じて人見知りであり、見知らぬ相手と出会えば、すぐに種族特徴である［姿なき職人］の力を用い、消えてしまいます。<br>機械いじりや細工物を得意とし、いまでもマギテック協会でその才能を発揮しているレプラカーンの姿を見ることができます。<br>寿命は比較的長く、約200 年ほどです。そのため、性格はややのんびりしています。しかしひとたび仕事に集中すれば、非常に素早く繊細な手さばきを見せることも有名です。"
    ]
  const resEle = document.getElementById("result")
  const imgEle = document.getElementById("charaImage")
  const credit = document.getElementById("credit")
  const discriEle = document.getElementById("discription")
  //0~10の乱数を生成し、配列から値を取得
  let randomNumber = Math.floor(Math.random() * 12);
  const result = raseData[randomNumber]
  console.log(result)
  //結果の出力　　
  //resEleの内容をresultに変更
  resEle.innerHTML = "あなたは<a href='#discription' class='race'>" + result + "</a>です。"
  //画像表示
    imgEle.src = raseIllustPath[randomNumber]
  //クレジット表示
    credit.innerHTML = "イラスト：黒井ススム"
  //説明表示
    discriEle.className = "discription"
    discriEle.innerHTML = discription[randomNumber] + "<br><a href='https://fujimi-trpg-online.jp/'>富士見書房公式 TRPG ONLINE</a> <a href='https://fujimi-trpg-online.jp/game/sw25-character.html#prettyPhoto'>ソード・ワールド2.5 種族紹介ページ</a>より"
}

