import React, { useEffect, useState } from 'react';
import styles from './QuizBody.module.css';
import Card from '../../../../UI/Card';

const QuizBody = ({ quizData, btnColorUpdater, handleAnswerBtnClick }) => {
  console.log('quizbd');
  const handleClick = (evt) => {
    handleAnswerBtnClick(evt.target.textContent);
  };

  useEffect(() => {
    const answersBtnWrapper = document.getElementById('ans__btn--wrapper');
    const answersBtn = answersBtnWrapper.querySelectorAll('button');
    if (btnColorUpdater) {
      answersBtn.forEach((ele) => {
        if (ele.textContent === quizData.correctAnswer) {
          ele.className = `${styles['answer__btns']} ${styles['btn__green']}`;
        } else {
          ele.className = `${styles['answer__btns']} ${styles['btn__red']}`;
        }
      });
    }

    return () => {
      answersBtn.forEach((ele) => {
        ele.className = `${styles['answer__btns']}`;
      });
    };
  }, [btnColorUpdater]);
  return (
    <Card className={styles['quiz__body--wrapper']}>
      <p className={styles['quiz__question']}>Q. {quizData.question}</p>
      <div id="ans__btn--wrapper">
        {quizData.answers.map((ele, i) => (
          <button
            className={styles['answer__btns']}
            onClick={handleClick}
            key={`btn${i}`}
          >
            {ele}
          </button>
        ))}
      </div>
    </Card>
  );
};

export default QuizBody;
