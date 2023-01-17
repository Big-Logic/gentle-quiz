import React, { useState } from 'react';
export const quizContext = React.createContext({ highestScore: 0 });

export const HandleQuizContext = ({ children }) => {
  const [highestScore, setHighestScore] = useState(0);

  const highScoreUpdater = () => {
    
  }
  const contextObj = {
    highestScore: highestScore,
    scoreUpdater: setHighestScore,
  };

  return (
    <quizContext.Provider value={contextObj}>{children}</quizContext.Provider>
  );
};
