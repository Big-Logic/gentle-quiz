import React, { useState } from "react";

import Card from "../../UI/Card";
import PlaygroundHeader from "./playgroundHeader/PlaygroundHeader";
import ActiveUser from "../activeuser/ActiveUser";
import PlayButton from "./playbutton/PlayButton";
import QuizSetup from "./quizsetup/QuizSetup";
import Quiz from "./quiz/Quiz";

import styles from "./Playground.module.css";

const Playground = () => {
  const [playgroundView, setPlaygroundView] = useState("playbtn");
  const [quizSetupValues, setQuizSetupValues] = useState(null);
  return (
    <Card className={styles["playground__cont"]}>
      <ActiveUser />
      <Card className={styles["playground"]}>
        <PlaygroundHeader />
        <Card className={styles["game__details"]}>
          {playgroundView === "playbtn" ? (
            <PlayButton setPlaygroundView={setPlaygroundView} />
          ) : playgroundView === "setup" ? (
            <QuizSetup setPlaygroundView={setPlaygroundView} setQuizSetupValues={setQuizSetupValues} />
          ) : playgroundView === "quiz" ? (
            <Quiz quizSetupValues={quizSetupValues} />
          ) : (
            <h2>Loading...</h2>
          )}
        </Card>
      </Card>
    </Card>
  );
};

export default Playground;
