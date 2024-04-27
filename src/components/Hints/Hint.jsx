import "./Hint.css";
import { playFiftySound } from "../Audio/Audio";
import React, { useState } from "react";

function Hints({ hintFifty, fifty, changeModal, disabled }) {
  return (
    <div className="hints">
      <button
        className={fifty ? "hints__fifity" : "hints__fifity disabled"}
        onClick={() => {
          hintFifty();
          playFiftySound();
        }}
      >
        50 на 50
      </button>

      <button
        className={!disabled ? "hall-help" : "hall-help disabled"}
        onClick={() => changeModal()}
      ></button>

      <button
        className={"friend-help"}
        // onClick={() => changeModal()}
      ></button>
    </div>
  );
}

export default Hints;
