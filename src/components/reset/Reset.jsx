/* eslint-disable react/prop-types */
import style from"./reset.module.css"


export default function Reset({ resetFeedback }) {
  return (
      <button className={ style.styleButton} onClick={resetFeedback}>Reset</button>
  );
}
