

import "./App.css";
import "./components/description/Description";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";
import { useEffect, useState } from 'react'
import  Notification  from "./components/notification/Notification";

/* eslint-disable react/prop-types */




export const feedbackSum = {
  good: 0,
  neutral: 0,
  bad: 0
}

function App() {
  



const [value, setValue] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedbackSum");
    return savedFeedback ? JSON.parse(savedFeedback) : feedbackSum;
  });

  const updateFeedback = (feedbackType) => {
    setValue({ ...value, [feedbackType]: value[feedbackType] + 1 });
  };
  const resetFeedback = () => {
    setValue(feedbackSum)
  };

  const totalFeedback = value.good + value.neutral + value.bad;
  const positiveFeedback = totalFeedback === 0 ? 0 : Math.round((value.good / totalFeedback) * 100);
  useEffect(()=>window.localStorage.setItem("feedbackSum",JSON.stringify(value)),[value])
  return (
    <>
      <Description />
      <Options 
        updateFeedback={updateFeedback} resetFeedback={resetFeedback } totalFeedback={totalFeedback}/>
      
      {totalFeedback > 0 ? <Feedback totalFeedback={ totalFeedback} positiveFeedback={positiveFeedback} value={value}/>:<Notification/> }
     
      
    </>
  );
}

export default App;
