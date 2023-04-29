import { useState } from "react";
import "./App.css";

function App() {
  //Input state 만들어주기
  const [write, setWrite] = useState("");
  //box안에 들어가는 text state 만들어주기
  const [texts, setTexts] = useState([]);

  const ClickButton = () => {
    const newTexts = {
      id: texts.length + 1,
      text: write,
    };
    setTexts([...texts, newTexts]);
    setWrite("");
  };

  const writeChangeHandler = (event) => {
    setWrite(event.target.value);
  };

  return (
    <div>
      <div className="head">
        <input value={write} onChange={writeChangeHandler} />
        <button onClick={ClickButton}>추가하기</button>
      </div>
      <h2>Todo List</h2>
      <div className="Box">
        {texts.map((item) => {
          return (
            <div key={item.id} className="textBox">
              {item.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
