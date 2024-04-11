import React, { useState, useEffect } from "react";
import NextandBackButtons from "../Components/NextandBackButtons";

function Summary({
  numStepIndex,
  setNumStepIndex,
  plan,
  addOns,
  isMonthly,
  totalCost,
}) {
  let addOnsList = [];
  let addOnTotalCost = 0;

  for (let i = 0; i < addOns.length; i++) {
    if (addOns[i].isSelected) {
      if (isMonthly) {
        addOnTotalCost = addOnTotalCost + addOns[i].priceMonthly;
      } else {
        addOnTotalCost = addOnTotalCost + addOns[i].priceYearly;
      }
      addOnsList.push(
        <div key={i} className="pricing-charge-add-on-item">
          <h4>{addOns[i].name}</h4>
          <h4 className="summary-pricing-item">
            {isMonthly
              ? `$${addOns[i].priceMonthly}/mo`
              : `$${addOns[i].priceYearly}/yr`}
          </h4>
        </div>
      );
    }
  }

  return (
    <>
      <div className="page-content">
        <h1>Finishing up</h1>
        <h4>Double-check everything looks OK before confirm2ng.</h4>
        <div className="pricing-summary">
          <div className="pricing-charges-container">
            <div className="pricing-charge-plan-item">
              <div>
                <h3>{`${plan.name}(${isMonthly ? "Monthly" : "Yearly"})`}</h3>

                <h4>
                  <a onClick={() => setNumStepIndex(1)}>Change</a>
                </h4>
              </div>
              <h4 className="summary-pricing-item">
                {isMonthly
                  ? `$${plan.priceMonthly}/mo`
                  : `$${plan.priceYearly}/yr`}
              </h4>
            </div>
            {addOnsList}
          </div>
          <div className="pricing-total">
            <h4>{`Total (per ${isMonthly ? "month" : "year"})`}</h4>
            <h5>{`+${totalCost + addOnTotalCost}/${
              isMonthly ? "mo" : "yr"
            }`}</h5>
          </div>
        </div>
      </div>
      <NextandBackButtons
        isDisabled={false}
        numStepIndex={numStepIndex}
        setNumStepIndex={setNumStepIndex}
      />
    </>
  );
}

export default Summary;

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
</div>; */
}
