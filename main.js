const feedback = document.getElementById("quiz-sentence");
const choicesContainer = document.getElementById("choices-container");

// クイズの内容
const quiz = {
  choices: [
    {
      text: "小手伸也",
      feedback: "残念！ぽっちゃり体型のコンフィデンスマンじゃないよ！",
      img: "kote.png",
    },
    {
      text: "佐久間宣行",
      feedback: "正解！元テレ東局員のテレビプロデューサーだよ！",
      img: "sakuma1.png",
    },
    {
      text: "ガレッジセールのゴリ",
      feedback: "残念！女装してもゴリエちゃんにはならないよ！",
      img: "gorie.png",
    },
  ],
};

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 選択肢（ボタン）の中身を表示

  const choice1 = document.createElement("button");
  const choice2 = document.createElement("button");
  const choice3 = document.createElement("button");

  choice1.textContent = quiz.choices[0].text;
  choice2.textContent = quiz.choices[1].text;
  choice3.textContent = quiz.choices[2].text;

  choicesContainer.append(choice1, choice2, choice3);

  choice1.onclick = function () {
    // 0 番目の選択肢を選択
    choose(0);
  };
  choice2.onclick = function () {
    // 1 番目の選択肢を選択
    choose(1);
  };
  choice3.onclick = function () {
    // 2 番目の選択肢を選択
    choose(2);
  };
};

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback;
  const image = document.createElement("img");

  image.src = "./images/" + quiz.choices[choiceNumber].img;

  feedback.append(image);
};

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz();
