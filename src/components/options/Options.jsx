/* eslint-disable react/prop-types */

import Reset from "../reset/Reset";
import style from "./options.module.css";


export default function Options({
  updateFeedback,
  totalFeedback,
  resetFeedback,
}) {
  return (
    <div className={style.optionButton}>
      <button className={style.styleButton} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={style.styleButton} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={style.styleButton} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <Reset style="styleButton" resetFeedback={resetFeedback} />
      )}
    </div>
  );
}
