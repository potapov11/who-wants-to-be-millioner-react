import { useContext } from "react";
import { globalContext, GlobalContextValue } from "@/context/GlobalContext";
import type { CardProps } from "./types";
import styles from "./Card.module.scss";

export const Card = ({ redItem, goldItem, checkIsCorrect, hideModal }: CardProps) => {
  const { arrQuestions, numberQuestion } = useContext(globalContext) as GlobalContextValue;

  return (
    <div className={styles.card}>
      <h3 className={styles.card__question}>{arrQuestions[numberQuestion].question}</h3>

      <div className={styles.card__options}>
        <ul className={styles.card__list}>
          {arrQuestions[numberQuestion].answers.map((answer, index) => (
            <li
              className={styles.card__item}
              key={index}
              onClick={() => {
                checkIsCorrect(answer);
                hideModal();
              }}
            >
              <span
                className={`${styles.card__item_inner} ${goldItem === answer ? styles.gold : ""} ${redItem === answer ? styles.red : ""}`}
              >
                {answer}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
