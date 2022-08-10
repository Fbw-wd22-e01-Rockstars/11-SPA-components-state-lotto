import React, { useState } from "react";
import Number from "./Number";

export default function LuckyNumbers() {
  const [numbers, setNumbers] = useState([12, 21, 26, 34, 38, 41]);
  const [specialNumber, setSpecialNumber] = useState(5);

  const generateLuckyNumbers = () => {
    let randomNumbers = [];
    for (let i = 0; i < 6; i++) {
      let randomNum = Math.ceil(Math.random() * 49);
      while (randomNumbers.includes(randomNum)) {
        randomNum = Math.ceil(Math.random() * 49);
      }
      randomNumbers.push(randomNum);
    }
    setNumbers(randomNumbers.sort((a, b) => a - b));
    setSpecialNumber(Math.ceil(Math.random() * 10));
  };
  const resetYourNumber=()=>{
      setNumbers([])
      setSpecialNumber(null)
  }
  return (
    <div>
      <h1>Lotto 6 / 49</h1>
      <h4>Generating lucky numbers</h4>
      <div style={{ display: "flex" }}>
        {numbers.map((num) => {
          return <Number number={num} />;
        })}
        {specialNumber && <div style={{backgroundColor:"lightblue",borderRadius:"50%"}}><Number number={specialNumber} /> </div> }
      </div>
      <button onClick={resetYourNumber}>Reset</button>
      <button onClick={generateLuckyNumbers}>Generate Lucky Numbers</button>
    </div>
  );
}
