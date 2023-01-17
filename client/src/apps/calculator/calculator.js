import React from "react";
import './style.css'
const Calculator = () => {
  return (
    <div className="containerC">
      <div>
        <h2>Calculator</h2>
        <div className="calculator">
          <div className="calc-numbers">0</div>
          <div className="divAC">AC</div>
          <div className="divPN">+/-</div>
          <div className="divPercent">%</div>
          <div className="divDivide">/</div>
          <div className="div7">7</div>
          <div className="div8">8</div>
          <div className="div9">9</div>
          <div className="divX">X</div>
          <div className="div4">4</div>
          <div className="div5">5</div>
          <div className="div6">6</div>
          <div className="divMenus">-</div>
          <div className="div1">1</div>
          <div className="div2">2</div>
          <div className="div3">3</div>

        </div>
      </div>
    </div>
  );
};

export default Calculator;
