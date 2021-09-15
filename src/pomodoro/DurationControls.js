import React from "react";
import { minutesToDuration } from "../utils/duration";

// TODO: Update this text to display the current focus session duration
// TODO: Implement decreasing focus duration and disable during a focus or break session
// TODO: Implement increasing focus duration and disable during a focus or break session
// TODO: Update this text to display the current break session duration
// TODO: Implement decreasing break duration and disable during a focus or break session
// TODO: Implement increasing break duration and disable during a focus or break session

const DurationControls = ({
  focusDuration,
  setFocusDuration,
  breakDuration,
  setBreakDuration,
  session,
}) => {
  const handleFocusDecrease = () => {
    setFocusDuration((currentDuration) => {
      return Math.max(5, currentDuration - 5);
    });
  };

  const handleFocusIncrease = () => {
    setFocusDuration((currentDuration) => {
      return Math.min(60, currentDuration + 5);
    });
  };

  const handleBreakDecrease = () => {
    setBreakDuration((currentDuration) => {
      return Math.max(1, currentDuration - 1);
    });
  };

  const handleBreakIncrease = () => {
    setBreakDuration((currentDuration) => {
      return Math.min(15, currentDuration + 1);
    });
  };

  return (
    <div className="row">
      <div className="col">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-focus">
            Focus Duration: {minutesToDuration(focusDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              disabled={session?.timeRemaining ? true : false}
              data-testid="decrease-focus"
              onClick={handleFocusDecrease}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-focus"
              disabled={session?.timeRemaining ? true : false}
              onClick={handleFocusIncrease}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="float-right">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-break">
              Break Duration: {minutesToDuration(breakDuration)}
            </span>
            <div className="input-group-append">
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-break"
                disabled={session?.timeRemaining ? true : false}
                onClick={handleBreakDecrease}
              >
                <span className="oi oi-minus" />
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-break"
                disabled={session?.timeRemaining ? true : false}
                onClick={handleBreakIncrease}
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurationControls;
