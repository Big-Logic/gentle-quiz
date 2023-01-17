import React from 'react';

import styles from './QuizHeader.module.css';
import Card from '../../../../UI/Card';

const QuizHeader = ({ quizDetails, saveScore }) => {
  const category = quizDetails.catVal.replace('_', ' ');
  return (
    <Card className={styles['quiz__header--wrapper']}>
      <div>
        <p>{category}</p>
        <p className={styles.description}>Category</p>
      </div>
      <div>
        <p>{quizDetails.difVal}</p>
        <p className={styles.description}>Difficulty</p>
      </div>
      <div>
        <p>{quizDetails.limVal}</p>
        <p className={styles.description}>Questions</p>
      </div>
      <div className={styles['pass__fail--wrapper']}>
        <div>
          <p className={styles.pass}>
            <i class="las la-check"></i>
          </p>
          <p>{saveScore.pass}</p>
        </div>
        <div>
          <p className={styles.fail}>
            <i class="las la-times"></i>
          </p>
          <p>{saveScore.fail}</p>
        </div>
      </div>
    </Card>
  );
};

export default QuizHeader;
