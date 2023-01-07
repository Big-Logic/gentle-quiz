import React, { useState } from "react";

import Card from "../../../UI/Card";

import styles from "./QuizSetup.module.css";

const QuizSetup = ({ setPlaygroundView, setQuizSetupValues }) => {
  const [categoryValue, setCategoryValue] = useState("general_knowledge");
  const [difficultyValue, setDifficultyValue] = useState('easy');
  const [limitValue, setLimitValue] = useState('15');

  const handleQuizSetupValues = () => {
    setQuizSetupValues({
      catVal: categoryValue,
      difVal: difficultyValue,
      limVal: limitValue,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setPlaygroundView('quiz')
    handleQuizSetupValues();
  };

  const handleSkip = () => {
    setPlaygroundView("loading");
    handleQuizSetupValues();
  };

  const handleBack = () => {
    setPlaygroundView("playbtn");
  };

  
  const handleCategoryValue = ({target}) => {
    setCategoryValue(target.value);
    console.log(target.value);
  } 

  const handleDifficultyValue = ({target}) => {
    setDifficultyValue(target.value);
    console.log(target.value)
  }

  const handleLimitValue = ({target}) => {
    setLimitValue(target.value);
    console.log(target.value);
  }
  return (
    <Card className={styles["setup__form--wrapper"]}>
      <button className={styles['setup__form--backbtn']} onClick={handleBack}>
        <i class="las la-arrow-left"></i>
      </button>
      <form className={styles["setup__form"]} onSubmit={handleSubmit}>
        <h3>Quiz Setup</h3>
        <Card>
          <label htmlFor="category">
            <p>Category</p>
            <select id="category" value={categoryValue} onChange={handleCategoryValue} required>
              <option value="general_knowledge">General Knowledge</option>
              <option value="history">History</option>
              <option value="geography">Geograpy</option>
              <option value="music">Music</option>
              <option value="science">Science</option>
              <option value="food_and_drink">Food & Drink</option>
              <option value="sport_and_leisure">Sport & Leisure</option>
            </select>
          </label>
        </Card>
        <Card>
          <label htmlFor="difficulty">
            <p>Difficulty</p>
            <select id="difficulty" value={difficultyValue} onChange={handleDifficultyValue} required>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
        </Card>
        <Card>
          <label htmlFor="limit">
            <p>Amount of Questions</p>
            <input type="number" id="limit" min='15' max='30' placeholder="amount" value={limitValue} onChange={handleLimitValue} required />
          </label>
        </Card>
        <Card className={styles["setup__form--btnwrapper"]}>
          <button type="button" onClick={handleSkip}>
            Skip
          </button>
          <button type="submit">Start</button>
        </Card>
      </form>
    </Card>
  );
};

export default QuizSetup;