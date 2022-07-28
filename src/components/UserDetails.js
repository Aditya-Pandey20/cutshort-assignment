import React from "react";
import "../styles.css";

export const UserDetails = (props) => {
  const { fullName, setFullName, displayName, setDisplayName, setStep } = props;
  return (
    <div>
      <h3>Welcome! First things first...</h3>
      <div className="mb_12">
        <label htmlFor="fullName">Full Name</label>
      </div>
      <input
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <div className="mb_12">
        <label htmlFor="displayName">Display Name</label>
      </div>
      <div className="mb_12">
        <input
          id="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>

      <div className="mb_12">
        <button onClick={() => setStep(2)}>Create Workspace</button>
      </div>
    </div>
  );
};
