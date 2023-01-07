import React, { useEffect, useState } from "react";
import { getQuizQuestions } from "../../../../models/Models";

import styles from "./Quiz.module.css";

const Quiz = ({quizSetupValues}) => {
  const [quizData, setQuizData] = useState({});

  const handleQuizData = async (func) => {
    try {
      const response = await func({catVal, difVal, limVal});

      if(response.ok) {
        const responseData = await response.json();
        console.log(responseData)
      }
    } catch(err) {
      console.log(err.message);
    }
  }

  useEffect(() => {

  })
  return (
    <Card>
      <h3>Hi</h3>
    </Card>
  );
};

export default Quiz;
