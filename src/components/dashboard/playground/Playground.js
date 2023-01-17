import React, { useState } from 'react';

import Card from '../../UI/Card';
import PlaygroundHeader from './playgroundHeader/PlaygroundHeader';
import ActiveUser from '../activeuser/ActiveUser';
import PlayButton from './playbutton/PlayButton';
import QuizSetup from './quizsetup/QuizSetup';
import Quiz from './quiz/Quiz';
import QuizEnd from './quizend/QuizEnd';

import styles from './Playground.module.css';

const Playground = () => {
  //const [playgroundView, setPlaygroundView] = useState('playbtn');
  const [quizSetupValues, setQuizSetupValues] = useState({
    view: 'playBtn',
    formValues: {},
  });
  const [quizResult, setQuizResult] = useState(0);

  console.log('play');
  return (
    <Card className={styles['playground__cont']}>
      <ActiveUser />
      <Card className={styles['playground']}>
        <PlaygroundHeader />
        <Card className={styles['game__details']}>
          {quizSetupValues.view === 'playBtn' ? (
            <PlayButton setQuizSetupValues={setQuizSetupValues} />
          ) : quizSetupValues.view === 'setup' ? (
            <QuizSetup setQuizSetupValues={setQuizSetupValues} />
          ) : quizSetupValues.view === 'quiz' ? (
            <Quiz
              quizSetupValues={quizSetupValues.formValues}
              setQuizSetupValues={setQuizSetupValues}
              setQuizResult={setQuizResult}
            />
          ) : quizSetupValues.view === 'end' ? (
            <QuizEnd
              setQuizSetupValues={setQuizSetupValues}
              quizResult={quizResult}
            />
          ) : (
            <p>An Error occue</p>
          )}
        </Card>
      </Card>
    </Card>
  );
};

export default Playground;
