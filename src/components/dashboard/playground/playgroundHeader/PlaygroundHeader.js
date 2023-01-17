import React, { useContext } from 'react';

import { quizContext } from '../../../../quiz-context/quiz-context';

import Card from '../../../UI/Card';

import styles from './PlaygroundHeader.module.css';

const PlaygroundHeader = () => {
  const { highestScore } = useContext(quizContext);
  return (
    <Card className={styles['playground__header']}>
      <div>
        <h2>Gentle Quiz</h2>
      </div>
      <div>
        <p>H-Score {highestScore}%</p>
      </div>
    </Card>
  );
};

export default PlaygroundHeader;
