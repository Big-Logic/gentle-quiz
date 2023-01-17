import React, { useEffect, useState, useContext } from 'react';
import { getQuizQuestions } from '../../../../models/Models';
import { radomiseArray } from '../../../../helpers/Helpers';
import QuizHeader from './QuizHeader/QuizHeader';
import Card from '../../../UI/Card';
import { quizContext } from '../../../../quiz-context/quiz-context';

import styles from './Quiz.module.css';
import QuizBody from './QuizBody/QuizBody';
import QuizFooter from './QuizFooter/QuizFooter';

const Quiz = ({ quizSetupValues, setQuizSetupValues, setQuizResult }) => {
  const { scoreUpdater } = useContext(quizContext);
  console.log('quiz');
  //destructure the value received from the form;
  const { catVal, difVal, limVal } = quizSetupValues;

  const [pointsPerQuestion, setPointsPerQuestion] = useState(
    100 / Number(limVal)
  );
  //quiz data state
  const [quizData, setQuizData] = useState(null);

  //an index state to get a single quiz data
  const [singleQuestionIndex, setSingleQuestionIndex] = useState(0);

  //quiz timeout state
  const [timerUpdate, setTimerUpdate] = useState('init');
  const [counterValue, setCounterValue] = useState(10);

  //button updater
  const [btnColorUpdater, setBtnColorUpdater] = useState(false);

  const [saveScore, setSaveScore] = useState({ fail: 0, pass: 0 });

  //question changer
  const updateQuestionIndex = function () {
    if (singleQuestionIndex === quizData.length - 1) {
      setQuizSetupValues({
        view: 'end',
        formValues: {},
      });
      setQuizResult(Math.floor(saveScore.pass * pointsPerQuestion));
      scoreUpdater(Math.floor(saveScore.pass * pointsPerQuestion));
      return;
    }

    if (!btnColorUpdater) {
      return;
    }
    setSingleQuestionIndex((prev) => prev + 1);
    setCounterValue(10);
    setTimerUpdate('init');
    setBtnColorUpdater(false);
  };

  //handle the fetching of all quiz data
  const handleQuizData = async (func) => {
    try {
      const responseData = await func(catVal, limVal, difVal);
      const filterArr = responseData.map((fd) => {
        return {
          question: fd.question,
          answers: radomiseArray([...fd.incorrectAnswers, fd.correctAnswer]),
          correctAnswer: fd.correctAnswer,
        };
      });
      console.log(filterArr, 'quizaa');
      setQuizData(filterArr);
    } catch (err) {
      console.log(err.message);
    }
  };

  //controls the handleQuizData function
  useEffect(() => {
    //setQuizData(handleQuizData(getQuizQuestions));
    handleQuizData(getQuizQuestions);
  }, []);

  //answer button click action
  const handleAnswerBtnClick = (input) => {
    if (btnColorUpdater) {
      return;
    }
    console.log(quizData[singleQuestionIndex].correctAnswer, 'correctans');
    if (input === quizData[singleQuestionIndex].correctAnswer) {
      setSaveScore((prev) => {
        return {
          pass: prev.pass + 1,
          fail: prev.fail,
        };
      });
    } else {
      setSaveScore((prev) => {
        return {
          pass: prev.pass,
          fail: prev.fail + 1,
        };
      });
    }
    setTimerUpdate('btclick');
    setBtnColorUpdater(true);
  };

  const handleTimerZero = () => {
    setTimerUpdate('btclick');
    setBtnColorUpdater(true);
    setSaveScore((prev) => {
      return {
        pass: prev.pass,
        fail: prev.fail + 1,
      };
    });
  };

  return (
    <>
      {!quizData ? (
        <Card className={styles['loader__wrapper']}>
          <p>Loading...</p>
        </Card>
      ) : (
        <>
          <QuizHeader
            quizDetails={{ catVal, difVal, limVal }}
            saveScore={saveScore}
          />
          <QuizBody
            quizData={quizData[singleQuestionIndex]}
            btnColorUpdater={btnColorUpdater}
            handleAnswerBtnClick={handleAnswerBtnClick}
          />
          <QuizFooter
            timerUpdate={timerUpdate}
            counterValue={counterValue}
            handleTimerZero={handleTimerZero}
            updateQuestionIndex={updateQuestionIndex}
          />
        </>
      )}
    </>
  );
};

export default Quiz;
