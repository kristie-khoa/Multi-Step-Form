import NextandBackButtons from "../Components/NextandBackButtons";
import React, { useState, useEffect } from "react";

function PersonalInfo({ numStepIndex, setNumStepIndex }) {
  const [isNameInvalid, setIsNameInvalid] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isNumberInvalid, setIsNumberInvalid] = useState(false);

  return (
    <>
      <div className="page-content">
        <h1>Personal info</h1>
        <h4>Please provide your name, email address, and phone number.</h4>

        <form
          className="personal-info-container"
          id="personal-info-form"
          onSubmit={() => setNumStepIndex(numStepIndex + 1)}
        >
          <label>
            <div>
              <span>Name</span>

              <span className="input-error-message">
                {isNameInvalid ? "* required field" : ""}
              </span>
            </div>
            <input
              className={isNameInvalid ? "invalid" : ""}
              onChange={() => setIsNameInvalid(false)}
              // type="text"
              placeholder="e.g. Stephen King"
              required
              onInvalid={(e) => {
                e.preventDefault();
                setIsNameInvalid(true);
              }}
            />
          </label>
          <label>
            <div>
              <span>Email</span>

              <span className="input-error-message">
                {isEmailInvalid ? "*required field" : ""}
              </span>
            </div>
            <input
              className={isEmailInvalid ? "invalid" : ""}
              onChange={() => setIsEmailInvalid(false)}
              // type="email"
              placeholder="e.g. stephenking@lorem.com"
              required
              onInvalid={(e) => {
                e.preventDefault();
                setIsEmailInvalid(true);
              }}
            />
          </label>
          <label>
            <div>
              <span>Phone Number</span>

              <span className="input-error-message">
                {isNumberInvalid ? "*required field" : ""}
              </span>
            </div>
            <input
              className={isNumberInvalid ? "invalid" : ""}
              onChange={() => setIsNumberInvalid(false)}
              // type="tel"
              placeholder="e.g. 234-567-890"
              // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              onInvalid={(e) => {
                e.preventDefault();
                setIsNumberInvalid(true);
              }}
            />
          </label>
        </form>
      </div>
      <div className="buttons-container">
        <button className="next-button" type="submit" form="personal-info-form">
          Next Step
        </button>
      </div>
      {/* <NextandBackButtons
        form="personal-info-form"
        // isDisabled={false}
        numStepIndex={numStepIndex}
        setNumStepIndex={setNumStepIndex}
        type="submit"
      /> */}
    </>
  );
}

export default PersonalInfo;

{
  /* <div className="buttons-container">
        <button
          className={numStepIndex <= 2 ? "next-button" : "confirm-button"}
          onClick={() => setNumStepIndex(numStepIndex + 1)}
        >
          {numStepIndex <= 2 ? "Next Step" : "Confirm"}
        </button>
        {numStepIndex > 0 && (
          <a
            className="back-button"
            onClick={() => setNumStepIndex(numStepIndex - 1)}
          >
            Go Back
          </a>
        )}
      </div> */
}
