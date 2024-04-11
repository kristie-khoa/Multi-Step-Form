import React, { useState, useEffect } from "react";
import NextandBackButtons from "../Components/NextandBackButtons";
import iconArcade from "/images/icon-arcade.svg";
import iconAdvanced from "/images/icon-advanced.svg";
import iconPro from "/images/icon-pro.svg";

function SelectPlan({
  numStepIndex,
  setNumStepIndex,
  plan,
  setPlan,
  isMonthly,
  setIsMonthly,
  totalCost,
  setTotalCost,
}) {
  const planData = [
    {
      name: "Arcade",
      priceMonthly: 9,
      priceYearly: 90,
      icon: iconArcade,
    },
    {
      name: "Advanced",
      priceMonthly: 12,
      priceYearly: 120,
      icon: iconAdvanced,
    },
    {
      name: "Pro",
      priceMonthly: 15,
      priceYearly: 150,
      icon: iconPro,
    },
  ];

  const planButtons = planData.map((planOption, index) => {
    return (
      <div
        key={index}
        className={`plan-option ${
          plan && plan.name === planOption.name ? "active" : ""
        }`}
        onClick={() => {
          setPlan(planOption);
        }}
      >
        <img src={planOption.icon} />
        <h3>{planOption.name}</h3>

        {!isMonthly ? (
          <>
            <h4>{`$${planOption.priceYearly}/yr`}</h4> <h5>2 months free</h5>
          </>
        ) : (
          <h4>{`$${planOption.priceMonthly}/mo`}</h4>
        )}
      </div>
    );
  });

  return (
    <>
      <div className="page-content">
        <h1>Select your plan</h1>
        <h4>You have the option of monthly or yearly billing.</h4>
        <div className="plan-options-container">{planButtons}</div>
        <div className="toggle-plan">
          <span className={`toggle-label ${isMonthly ? "active" : ""}`}>
            Monthly
          </span>
          <button
            className={`toggle-button ${isMonthly ? "monthly" : "yearly"}`}
            onClick={() => setIsMonthly(!isMonthly)}
          >
            <div></div>
          </button>
          <span className={`toggle-label ${!isMonthly ? "active" : ""}`}>
            Yearly
          </span>
        </div>
      </div>
      <NextandBackButtons
        isDisabled={!plan}
        onNextFn={() =>
          setTotalCost(isMonthly ? plan.priceMonthly : plan.priceYearly)
        }
        numStepIndex={numStepIndex}
        setNumStepIndex={setNumStepIndex}
      />
    </>
  );
}

export default SelectPlan;

// <div className="buttons-container">
//         <button
//           className={numStepIndex <= 2 ? "next-button" : "confirm-button"}
//           onClick={() => {
//             setNumStepIndex(numStepIndex + 1);
//             setTotalCost(isMonthly ? plan.priceMonthly : plan.priceYearly);
//           }}
//         >
//           {numStepIndex <= 2 ? "Next Step" : "Confirm"}
//         </button>
//         {numStepIndex > 0 && (
//           <a
//             className="back-button"
//             onClick={() => {
//               setNumStepIndex(numStepIndex - 1);
//             }}
//           >
//             Go Back
//           </a>
//         )}
//       </div>
