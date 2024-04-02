import css from './Options.module.css';

const Options = ({ updateFeedback, handleReset, totalFeedback }) => {
  return (
    <div className={css.boxOptions}>
      <button
        onClick={() => updateFeedback('good')}
        className={css.btnOptions}
        type="button"
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback('neutral')}
        className={css.btnOptions}
        type="button"
      >
        Neatral
      </button>
      <button
        onClick={() => updateFeedback('bad')}
        className={css.btnOptions}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleReset} className={css.btnOptions} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
