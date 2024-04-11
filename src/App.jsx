import React, { useState, useEffect } from "react";
import "./App.css";
import PersonalInfo from "./PageContents/PersonalInfo";
import SelectPlan from "./PageContents/SelectPlan";
import AddOns from "./PageContents/AddOns";
import Summary from "./PageContents/Summary";
import IconThankYou from "/images/icon-thank-you.svg";

const addOnsData = [
  {
    name: "Online Services",
    description: "Access to multiplayer games",
    priceMonthly: 1,
    priceYearly: 10,
    isSelected: false,
  },
  {
    name: "Larger Storage",
    description: "Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 20,
    isSelected: false,
  },
  {
    name: "Customizable Profile",
    description: "Custome theme on your profile",
    priceMonthly: 2,
    priceYearly: 20,
    isSelected: false,
  },
];

function App() {
  const [numStepIndex, setNumStepIndex] = useState(0);
  const [plan, setPlan] = useState(null);
  const [isMonthly, setIsMonthly] = useState(true);
  const [addOns, setAddOns] = useState(addOnsData);
  const [totalCost, setTotalCost] = useState(0);

  const pages = [
    {
      stepName: "YOUR INFO",
      content: (
        <PersonalInfo
          numStepIndex={numStepIndex}
          setNumStepIndex={setNumStepIndex}
        />
      ),
    },
    {
      stepName: "SELECT PLAN",
      content: (
        <SelectPlan
          totalCost={totalCost}
          setTotalCost={setTotalCost}
          numStepIndex={numStepIndex}
          setNumStepIndex={setNumStepIndex}
          plan={plan}
          setPlan={setPlan}
          isMonthly={isMonthly}
          setIsMonthly={setIsMonthly}
        />
      ),
    },
    {
      stepName: "ADD-ONS",
      content: (
        <AddOns
          numStepIndex={numStepIndex}
          setNumStepIndex={setNumStepIndex}
          addOns={addOns}
          setAddOns={setAddOns}
          isMonthly={isMonthly}
        />
      ),
    },
    {
      stepName: "SUMMARY",
      content: (
        <Summary
          totalCost={totalCost}
          setTotalCost={setTotalCost}
          numStepIndex={numStepIndex}
          setNumStepIndex={setNumStepIndex}
          plan={plan}
          isMonthly={isMonthly}
          addOns={addOns}
        />
      ),
    },
    {
      stepName: "Thank You",
      content: (
        <div className="page-content thank-you-page">
          <div>
            <img src={IconThankYou} />
          </div>
          <h1>Thank You!</h1>
          <h4>
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </h4>
        </div>
      ),
    },
  ];

  let currPageContent = pages[numStepIndex].content;

  const listSteps = pages.map((step, index) => {
    let stepNum = index + 1;
    if (stepNum === 5) {
      return null;
    }
    return (
      <div className="progress-nav-item" key={index}>
        <div className={`num-label ${index === numStepIndex ? "active" : ""}`}>
          {stepNum}
        </div>
        <div>
          <div className="step-label">{`STEP ${stepNum}`}</div>
          <div className="step-name">{step.stepName}</div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="card">
        <div className="progress-nav">{listSteps}</div>
        <div className="main-section">{currPageContent}</div>
      </div>
    </>
  );
}

export default App;
