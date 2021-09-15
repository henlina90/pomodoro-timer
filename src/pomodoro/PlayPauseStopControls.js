import React from "react";
import classNames from "../utils/class-names";

// TODO: Implement stopping the current focus or break session
// TODO: Disable the stop button when there is no active session
// TODO: Disable the stop button when there is no active session

const PlayPauseStopControls = ({
  isTimerRunning,
  setIsTimerRunning,
  focusDuration,
  session,
  setSession,
}) => {
  function playPause() {
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining: focusDuration * 60,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
  }

  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          <button
            type="button"
            className="btn btn-primary"
            data-testid="play-pause"
            title="Start or pause timer"
            onClick={playPause}
          >
            <span
              className={classNames({
                oi: true,
                "oi-media-play": !isTimerRunning,
                "oi-media-pause": isTimerRunning,
              })}
            />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="stop"
            title="Stop the session"
            disabled={session === null}
            onClick={() => {
              setIsTimerRunning(false);
              setSession(null);
            }}
          >
            <span className="oi oi-media-stop" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayPauseStopControls;
