function NextandBackButtons({
  isDisabled,
  onNextFn,
  numStepIndex,
  setNumStepIndex,
}) {
  return (
    <div className="buttons-container">
      <button
        disabled={isDisabled || false}
        className={numStepIndex <= 2 ? "next-button" : "confirm-button"}
        onClick={() => {
          console.log("run next srtep index +1");
          setNumStepIndex(numStepIndex + 1);
          onNextFn && onNextFn();
        }}
      >
        {numStepIndex <= 2 ? "Next Step" : "Confirm"}
      </button>
      {numStepIndex > 0 && (
        <a
          className="back-button"
          onClick={() => {
            console.log("back");
            setNumStepIndex(numStepIndex - 1);
          }}
        >
          Go Back
        </a>
      )}
    </div>
  );
}

export default NextandBackButtons;
