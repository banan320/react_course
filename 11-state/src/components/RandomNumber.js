import { React, useState } from "react";
import genRandomNum from "../utilities/genRandomNum";

const RandomNumber = ({ maxNum }) => {
  console.log("rendered");
  const [randomNum, setRandomNum] = useState(genRandomNum(maxNum));

  const changeRanNum = () => {
    setRandomNum(genRandomNum(maxNum));
  };

  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRanNum}>Генерация случайного числа</button>
    </div>
  );
};

export default RandomNumber;
