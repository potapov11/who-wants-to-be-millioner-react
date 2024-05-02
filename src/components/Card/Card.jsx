import React, { useContext } from "react";
import { globalContext } from "../../App";
import "./Card.css";

function Card({ redItem, goldItem, checkIsCorrect, hideModal }) {
  const { arrQuestions, numberQuestion } = useContext(globalContext);

  return (
    <div className="card">
      <h3 className="card__question">
        {arrQuestions[numberQuestion].question}
      </h3>

      <div className="card__options">
        <ul className="card__list">
          {arrQuestions[numberQuestion].answers.map((item, index) => (
            <li
              className={
                redItem === item ? "red" : "" || goldItem === item ? "gold" : ""
              }
              key={index}
              onClick={(e, index) => {
                checkIsCorrect(e.target.textContent, item);
                hideModal();
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Card;
