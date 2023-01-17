import Card from '../../../../UI/Card';

import styles from './QuizFooter.module.css';
import QuizTimer from './QuizTimer';

const QuizFooter = (props) => {
  //const [countValue, setCountValue] = useState(10);
  const handleClick = () => {
    props.updateQuestionIndex();
  };
  return (
    <Card className={styles['quiz__footer--wrapper']}>
      <div>
        <QuizTimer
          className={styles['remaining__time']}
          timerUpdate={props.timerUpdate}
          counterValue={props.counterValue}
          handleTimerZero={props.handleTimerZero}
        />
      </div>
      <div>
        <button className={styles['next__btn']} onClick={handleClick}>
          Next
        </button>
      </div>
    </Card>
  );
};

export default QuizFooter;
