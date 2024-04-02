import css from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <ul>
      <li>
        <p className={css.textFeedback}>Good: {feedback.good}</p>
      </li>
      <li>
        <p className={css.textFeedback}>Neatral: {feedback.neutral}</p>
      </li>
      <li>
        <p className={css.textFeedback}>Bad: {feedback.bad}</p>
      </li>
      <li>
        <p className={css.textFeedback}>Total feedback: {totalFeedback}</p>
      </li>
      <li>
        <p className={css.textFeedback}>
          Percentage of positive feedback: {positivePercentage}%
        </p>
      </li>
    </ul>
  );
};

export default Feedback;
