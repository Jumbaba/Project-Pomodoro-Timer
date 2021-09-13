import React from "react";
import { secondsToDuration, minutesToDuration } from "./utils/duration";

export default function Session({ session, focusDuration, breakDuration }) {
  if (!session) return null;

  let activityDuration = session?.label === "Focusing" ? focusDuration : breakDuration;

  const progress = (((activityDuration * 60) - session?.timeRemaining) / (activityDuration * 60)) * 100;

  return (
    <div>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {session?.label} for {minutesToDuration(activityDuration)} minutes
          </h2>
          {/* TODO: Update message below correctly format the time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session?.timeRemaining)} remaining
          </p>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={progress} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${progress}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}
