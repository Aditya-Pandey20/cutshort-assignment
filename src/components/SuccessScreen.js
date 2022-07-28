import React from "react";
import "../styles.css";

export const SuccessScreen = (props) => {
  const { displayName } = props;
  return (
    <div>
      <h3>Congratulations, {displayName}</h3>
      <h6>You have completed onboarding, you can start using Eden</h6>

      <div className="mb_12">
        <button
          onClick={() => {
            console.log("success");
          }}
        >
          Launch Eden
        </button>
      </div>
    </div>
  );
};
