// import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
// colorfulmessage ファイルのなかの default で export なものを colorfulmessage として呼び出す
// import ColorfulMessage from "./components/ColorfulMessage";
// だからこれでもよい
// import hoge from "./components/ColorfulMessage";
// よくないので 以下のようにすると名前をちゃんと指定する形になって良い
import { ColorfulMessage } from "./components/ColorfulMessage";
// これだと だめ
// import { hoge } from "./components/ColorfulMessage";

const App = () => {
  // state から取り出すのは変数名と 関数名
  const [num, setNum] = useState(100); // 100 は初期値
  const onclickCoutUp = () => {
    // state から取り出した num と それを更新するためのsetNum を使っている
    setNum(num + 1);
  };
  const [faceShowFlag, setfaceShowFlag] = useState(true);
  const onclickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag); //faceShowFlag の逆を与える つまりトグル
  };
  // JSX で {} でくくるとそこは JS になる
  // また、font-size は fontSize のように名前が変わる

  // useeffect は 第二引数のarray にあるものにだけ反応して、それ以外は
  // 最初の呼び出しだけ発火する
  console.log("start");
  useEffect(() => {
    console.log("use effect!");
    if (num % 3 === 0) {
      faceShowFlag || setfaceShowFlag(true); // faceShowFlag が False ならば true へ
    } else {
      faceShowFlag && setfaceShowFlag(false); // faceShowFlag が True ならば false へ
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>aaaa</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="red" message="元気です" />
      <button onClick={onclickCoutUp}>カウントアップ</button>
      <p>{num}</p>
      <hr />
      <button onClick={onclickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p> ＼(^o^)／</p>} && は //左がtrue なら右を変えす
    </>
  );
};

//他のファイルで使いたいから
export default App;
