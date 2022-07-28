import React from "react";
import "../styles.css";


export const PlanType = (props) => {
  const { personalPlan, togglePersonalPlan, setStep } = props;
  return (
    <div>
      <h3>How are you planning to use Eden?</h3>
      <h6>We'll stremline your setup experience accordingly.</h6>
      <div className="flex mb_12">
        <div
          className={
            "mr_30 cursor_pointer " + (personalPlan ? "border_box" : null)
          }
          onClick={() => togglePersonalPlan(true)}
        >
          For myself.
          <p className="max_width">
            Write better. Think more clearly. Stay organized.
          </p>
        </div>
        <div
          className={"cursor_pointer " + (personalPlan ? null : "border_box")}
          onClick={() => togglePersonalPlan(false)}
        >
          With my team
          <p className="max_width">
            Wikis, docs, tasks & projects, all in one place.
          </p>
        </div>
      </div>

      <div className="mb_12">
        <button onClick={() => setStep(4)}>Create Workspace</button>
      </div>
    </div>
  );
};
