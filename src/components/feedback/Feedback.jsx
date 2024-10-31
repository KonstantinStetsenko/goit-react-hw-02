
import style from"./feedback.module.css"

/* eslint-disable react/prop-types */

export default function Feedback({ value, totalFeedback, positiveFeedback }) {
  return (
    <ul className={style.dataUl}>
      <li className={style.list}>Good: {value.good}</li>
      <li className={style.list}>Neutral: {value.neutral}</li>
      <li className={style.list}>Bad: {value.bad}</li>
      <li className={style.list}>Total Feedback: {totalFeedback}</li>
      <li className={style.list}>Positive Feedback: {positiveFeedback}%</li>
    </ul>
  );
}
