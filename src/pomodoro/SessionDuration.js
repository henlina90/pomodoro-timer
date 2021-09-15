import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

// TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused
// TODO: Update message below to include current session (Focusing or On Break) total duration
// TODO: Update message below correctly format the time remaining in the current session
// TODO: Increase aria-valuenow as elapsed time increases {variable}
// TODO: Increase width % as elapsed time increases {variable}

const SessionDuration = ({
  session,
  focusDuration,
  breakDuration,
  isTimerRunning,
}) => {
  return (
    <>
      {session && (
        <div>
          <div className="row mb-2">
            <div className="col">
              <h2 data-testid="session-title">
                {session?.label} for{" "}
                {session?.label === "Focusing"
                  ? minutesToDuration(focusDuration)
                  : minutesToDuration(breakDuration)}{" "}
                minutes
              </h2>
              <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(session.timeRemaining)} remaining
              </p>
              {!isTimerRunning && <h3>PAUSED</h3>}
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
                  aria-valuenow={
                    100 -
                    (session.timeRemaining /
                      (session.label === "Focusing"
                        ? focusDuration * 60
                        : breakDuration * 60)) *
                      100
                  }
                  style={{
                    width: `${
                      100 -
                      (session.timeRemaining /
                        (session.label === "Focusing"
                          ? focusDuration * 60
                          : breakDuration * 60)) *
                        100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SessionDuration;
