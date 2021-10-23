const quizFooter = document.getElementById("quiz-footer");
const quizFooterImage = document.getElementById("quiz-footer-image");
const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");
const choice4 = document.getElementById("choice4");

// クイズの内容
const quiz = {
  choices: [
    {
      feedback: "残念！これを選んだあなたは数年前を振り返ってみよう！",
    },
    {
      feedback:
        "残念！ばれなかったのか？て一瞬思って後で先生のやさしさに気づくよね！",
    },
    {
      feedback:
        "残念！この選択肢は作ってて恥ずかしかったよ！選んだ君は少し変わってるかも！",
    },
    {
      feedback:
        "正解！テレビ東京の局員だったのに、ゲストとしてラジオに出演する度に好評だったので自分の番組を持ってしまった人なんだ！",
    },
  ],
};

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 選択肢（ボタン）の中身を表示

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
  choice4.onclick = function () {
    // 3 番目の選択肢を選択
    choose(3);
    const image = document.createElement("img");

    image.src = "./images/sakuma1.png";

    quizFooter.append(image);
  };
};

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示

  quizFooter.textContent = quiz.choices[choiceNumber].feedback;
};

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz();
