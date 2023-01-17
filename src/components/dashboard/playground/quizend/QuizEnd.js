import React from 'react';
import Card from '../../../UI/Card';

import styles from './QuizEnd.module.css';

const QuizEnd = ({ setQuizSetupValues, quizResult }) => {
  const handleClick = () => {
    setQuizSetupValues({
      view: 'setup',
      formValues: {},
    });
  };

  const returnResult = () => {
    if (quizResult >= 80) {
      return (
        <Card
          className={`${styles['score__wrapper']} ${styles['score__wrapper--green']}`}
        >
          <p className={styles.score}>{quizResult}%</p>
          <p className={styles['score__msg']}>Excellent🥳🥳</p>
        </Card>
      );
    } else if (quizResult >= 70 && quizResult < 80) {
      return (
        <Card
          className={`${styles['score__wrapper']} ${styles['score__wrapper--green']}`}
        >
          <p className={styles.score}>{quizResult}%</p>
          <p className={styles['score__msg']}>Good Job🤩🤩</p>
        </Card>
      );
    } else if (quizResult >= 50 && quizResult < 70) {
      return (
        <Card
          className={`${styles['score__wrapper']} ${styles['score__wrapper--red']}`}
        >
          <p className={styles.score}>{quizResult}%</p>
          <p className={styles['score__msg']}>Please Improve😢😢</p>
        </Card>
      );
    } else if (quizResult < 50) {
      return (
        <Card
          className={`${styles['score__wrapper']} ${styles['score__wrapper--red']}`}
        >
          <p className={styles.score}>{quizResult}%</p>
          <p className={styles['score__msg']}>Boring Player🤣🤣👎</p>
        </Card>
      );
    }
  };
  return (
    <Card className={styles['quizend__wrapper']}>
      <div>
        <h2>Game Over!!</h2>
        {returnResult()}
        <Card className={styles['restart__btn--wrapper']}>
          <button className={styles['restart__btn']} onClick={handleClick}>
            Play Again
          </button>
        </Card>
      </div>
    </Card>
  );
};

export default QuizEnd;
