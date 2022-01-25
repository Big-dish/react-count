import React, { useState } from "react";
import "./styles.css";

//初期値は０
const INITIAL_COUNT = 0;

//状態変数nameの初期値はJavaScript
const INITIAL_NAME = "JavaScript";

//SampleComponentを作成
const SampleComponent = () => {
  //countは状態変数/現在の値
  //setCountは状態変数/現在の値を更新するための関数
  //countの初期値はINITIAL＿COUNT
  const [count, setCount] = useState(INITIAL_COUNT);

  //nameは状態変数/現在の値
  //setNameは状態変数/現在の値を更新するための関数
  //nameの初期値はINITIAL_NAME
  const [name, setName] = useState(INITIAL_NAME);

  //1ずつカウントアップするcountIncrement関数を宣言
  //現在のcountを引数で受け取ることができる
  const countIncrement = () => setCount((prevCount) => prevCount + 1);

  //1ずつカウントダウンするcountDecrement関数を宣言
  const countDecrement = () => setCount((prevCount) => prevCount - 1);

  //状態変数/現在の値countを初期値に戻す
  const countReset = () => setCount(INITIAL_COUNT);

  //状態変数/現在の値nameを更新するhandleChangeName関数を宣言
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="App">
      <p>
        現在のカウント数:<b>{count}</b>
        <br />
        count　の初期値:<b>{INITIAL_COUNT}</b>
      </p>
      <button onClick={countIncrement}>increment</button>
      <button onClick={countDecrement}>decrement</button>
      <button onClick={countReset}>reset</button>
      <p>
        Hello,<b>{name}!!</b>
        <br />
        name　の初期値:<b>{INITIAL_NAME}</b>
      </p>

      <input type="text" onChange={handleChangeName} />
    </div>
  );
};

export default function App() {
  return (
    <>
      <SampleComponent />;
      <SampleComponent />;
    </>
  );
}
