import React from "react";
import "../styles.css";

export const WorkSpaceDetails = (props) => {
  const {
    workspaceName,
    setWorkspaceName,
    workspaceUrl,
    setWorkspaceUrl,
    setStep
  } = props;
  return (
    <div>
      <h3>Let's set up a home for all your work</h3>
      <h6>You can always create another workspace later.</h6>
      <div className="mb_12">
        <label htmlFor="workspaceName">Workspace Name</label>
      </div>
      <input
        id="workspaceName"
        value={workspaceName}
        onChange={(e) => setWorkspaceName(e.target.value)}
      />

      <div className="mb_12">
        <label htmlFor="workspaceUrl">Workspace Url</label>
      </div>
      <div className="mb_12">
        <input
          id="workspaceUrl"
          value={workspaceUrl}
          onChange={(e) => setWorkspaceUrl(e.target.value)}
        />
      </div>

      <div className="mb_12">
        <button onClick={() => setStep(3)}>Create Workspace</button>
      </div>
    </div>
  );
};
