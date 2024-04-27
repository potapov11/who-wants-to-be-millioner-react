import React, { useState } from "react";
import TypeIt from "typeit-react";
import "./ModalFriendCall.css";

function ModalFriendCall(arrQuestions, numberQuestion, openModalFriend) {
  {
    openModalFriend && (
      <div className="modal">
        <div className="modal__inner">
          <TypeIt>Мой друг считает что правильный ответ это...</TypeIt>
          <div className="hall-hint"></div>
        </div>
      </div>
    );
  }
}

export default ModalFriendCall;
