import "./App.scss";
import { useState, useEffect } from "react";
import { globalContext } from "@/context/GlobalContext";
import hardQuestionsArr from "./components/HardQuestionsArr";
import easyQuestionsArr from "./components/EasyQuestionArr";
import { Card } from "./components/Card/Card.tsx";
import { Logo } from "./components/Logo/Logo.tsx";
import { MusicArrowButton } from "./components/MusicArrowButton/MusicArrowButton";
import { Hints } from "./components/Hints/Hint";
import WinRating from "./components/WinRating/WinRating.jsx";
import ModalHintHall from "./components/Modal/ModalHintHall.jsx";
import { audioModel } from "@/model/audioModel";
import ModalFriendCall from "./components/ModalFriendCall/ModalFriendCall.jsx";
import IntroModalInfo from "./components/IntroModalInfo/IntroModalInfo.tsx";
import ModalLose from "./components/ModalLose/ModalLose.jsx";
import ModalWin from "./components/ModalWin/ModalWin.jsx";

function App() {
  const [isOpenIntro, setOpenIntro] = useState(true ? !sessionStorage.getItem("intro") : false);
  const [disabledAll, setDisabledAll] = useState(false);
  const [numberQuestion, setNumberQuestion] = useState(0);
  const [redItem, setRedItem] = useState("");
  const [goldItem, setGoldItem] = useState("");
  const [arrQuestions, setArrQuestion] = useState(numberQuestion < 4 ? easyQuestionsArr : hardQuestionsArr);
  const [openModal, setOpenModal] = useState(false);
  const [openModalFriend, setOpenModalFriend] = useState(false);
  const [isModalLose, setModalLose] = useState(false);
  const [disabled, setIsDisabled] = useState("");
  const [intro, setIntro] = useState(sessionStorage.getItem("intro") || false);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalWin, setModalWin] = useState(false);

  function changeModal() {
    setOpenModal(!openModal);
  }

  function changeOpenIntro() {
    setOpenIntro(false);
    sessionStorage.setItem("intro", false);
  }

  function hideModal() {
    if (openModal) {
      setOpenModal(false);
      audioModel.stopPlayPollHintSound();
    }
    if (openModalFriend) {
      setOpenModalFriend(false);
      audioModel.stopPlayFriendHintSound();
    }
  }

  function hideModalFriend() {
    setOpenModalFriend(!openModalFriend);
  }

  useEffect(() => {
    if (window.innerWidth <= 520) {
      setIsMobile(true);
    }
  }, []);

  useEffect(() => {
    setArrQuestion(numberQuestion < 4 ? easyQuestionsArr : hardQuestionsArr);
  }, [numberQuestion]);

  function checkIsCorrect(answer) {
    setDisabledAll(true);

    if (numberQuestion === 14) {
      setTimeout(() => {
        alert("Вы выиграли");
        setModalWin(true);
        setIsDisabled(true);
        return;
      }, 1000);
    }

    if (answer === arrQuestions[numberQuestion].correctAnswer) {
      setGoldItem(answer);
      setRedItem("");
      audioModel.playSound();
      setTimeout(() => {
        setGoldItem("");
        setRedItem("");
        setNumberQuestion((prevState) => prevState + 1);
        setDisabledAll(false);
      }, 1000);
    } else {
      setRedItem(answer);
      setGoldItem("");
      audioModel.playWrongSound();
      setTimeout(() => {
        setDisabledAll(false);
        setModalLose(true);
      }, 3000);
    }
  }

  return (
    <globalContext.Provider value={{ numberQuestion, arrQuestions, openModal, isMobile }}>
      <div className="App">
        <div className={!disabledAll ? "container" : "container disabled-all"}>
          {isModalLose ? (
            <ModalLose />
          ) : (
            <div className="block">
              {isOpenIntro ? (
                <IntroModalInfo changeOpenIntro={changeOpenIntro} />
              ) : (
                <div>
                  <MusicArrowButton />
                  <ModalHintHall />
                  <ModalFriendCall openModalFriend={openModalFriend} />
                  <Hints
                    setArrQuestion={setArrQuestion}
                    arrQuestions={arrQuestions}
                    numberQuestion={numberQuestion}
                    changeModal={changeModal}
                    hideModalFriend={hideModalFriend}
                    disabled={disabled}
                  />
                  <WinRating />
                  <Logo />
                  <Card redItem={redItem} goldItem={goldItem} checkIsCorrect={checkIsCorrect} hideModal={hideModal} />
                </div>
              )}
            </div>
          )}
          {isModalWin && <ModalWin />}
        </div>
      </div>
    </globalContext.Provider>
  );
}

export default App;
