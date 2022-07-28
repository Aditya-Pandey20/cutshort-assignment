import React, { useState } from "react";
import { UserDetails } from "./UserDetails";
import "../styles.css";
import { WorkSpaceDetails } from "./WorkspaceDetails";
import { PlanType } from "./PlanType";
import { SuccessScreen } from "./SuccessScreen";

export const Form = () => {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [displayName, setDisplayName] = useState("");

  const [workspaceName, setWorkspaceName] = useState("");
  const [workspaceUrl, setWorkspaceUrl] = useState("");

  const [personalPlan, togglePersonalPlan] = useState(true);

  return (
    <div className="container">
      <div className="button-group">
        <div className="button-group__container">
        <button className="progress-btn" onClick={() => setStep(1)}>1</button>
        </div>
        <div className="button-group__container">
        <button className="progress-btn" onClick={() => setStep(2)}>2</button>
        </div>
        <div className="button-group__container">
        <button className="progress-btn" onClick={() => setStep(3)}>3</button>
        </div>
        <div>
        <button className="progress-btn" onClick={() => setStep(4)}>4</button>
        </div>
      </div>
      
      {step === 1 ? (
        <UserDetails
          fullName={fullName}
          setFullName={setFullName}
          displayName={displayName}
          setDisplayName={setDisplayName}
          setStep={setStep}
        />
      ) : null}

      {step === 2 ? (
        <WorkSpaceDetails
          workspaceName={workspaceName}
          setWorkspaceName={setWorkspaceName}
          workspaceUrl={workspaceUrl}
          setWorkspaceUrl={setWorkspaceUrl}
          setStep={setStep}
        />
      ) : null}

      {step === 3 ? (
        <PlanType
          personalPlan={personalPlan}
          togglePersonalPlan={togglePersonalPlan}
          setStep={setStep}
        />
      ) : null}

      {step === 4 ? <SuccessScreen displayName={displayName} /> : null}
    </div>
  );
};
