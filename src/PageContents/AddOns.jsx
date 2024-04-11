import React, { useState, useEffect } from "react";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import NextandBackButtons from "../Components/NextandBackButtons";

function AddOns({
  numStepIndex,
  setNumStepIndex,
  isMonthly,
  addOns,
  setAddOns,
}) {
  const addOnButtons = addOns.map((addOn, index) => {
    return (
      <div
        key={index}
        className={`add-on ${addOn.isSelected ? "active" : ""}`}
        onClick={() => {
          handleClick(index);
        }}
      >
        {addOn.isSelected ? (
          <ImCheckboxChecked size="1.25em" color="#473dff" />
        ) : (
          <ImCheckboxUnchecked size="1.25em" color="#d6d9e6" />
        )}
        <div>
          <h3>{addOn.name}</h3>
          <h4>{addOn.description}</h4>
        </div>
        <span>
          {isMonthly ? `$${addOn.priceMonthly}/mo` : `$${addOn.priceYearly}/yr`}
        </span>
      </div>
    );
  });

  const handleClick = (indexInArr) => {
    let copyArr = [...addOns];
    copyArr[indexInArr] = {
      ...addOns[indexInArr],
      isSelected: !addOns[indexInArr].isSelected,
    };
    setAddOns(copyArr);
  };

  const runFn = (string) => {
    console.log(string);
  };

  return (
    <>
      <div className="page-content">
        <h1>Pick add-ons</h1>
        <h4>Add-ons help enhance your gaming experience.</h4>
        <div className="add-ons-container">{addOnButtons}</div>
      </div>
      <NextandBackButtons
        isDisabled={false}
        numStepIndex={numStepIndex}
        setNumStepIndex={setNumStepIndex}
      />
    </>
  );
}

export default AddOns;

// <div className="buttons-container">
// <button
//   className={numStepIndex <= 2 ? "next-button" : "confirm-button"}
//   onClick={() => {
//     setNumStepIndex(numStepIndex + 1);
//   }}
// >
//   {numStepIndex <= 2 ? "Next Step" : "Confirm"}
// </button>
// {numStepIndex > 0 && (
//   <a
//     className="back-button"
//     onClick={() => setNumStepIndex(numStepIndex - 1)}
//   >
//     Go Back
//   </a>
// )}
// </div>
