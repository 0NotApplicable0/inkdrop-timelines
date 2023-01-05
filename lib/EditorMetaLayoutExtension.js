"use babel";

import * as React from "react";
import moment from "moment";

// Extends the editor meta layout to contain due date information.
export default function InkdropTimelinesEditorMetaLayout() {
  const [dueDate, setDueDate] = React.useState(new Date("2023", "0", "2"));
  const [overdue, setOverdue] = React.useState(false);

  const createNoteDueDate = () => {
    inkdrop.commands.dispatch(
      document.body,
      "inkdrop-timelines:toggleCalendar"
    );
    console.log("Set Due Date Event Fired!");
  };

  const daysDue = (returnDays = false) => {
    let currentDate = moment(new Date());
    let formattedDueDate = moment(dueDate);
    let dueIn = formattedDueDate.diff(currentDate, "days").toString();
    if (returnDays) return dueIn;

    if (dueIn === 1) return "Due tomorrow!";
    else if (dueIn === 0) return "Due today!";
    else if (dueIn < 0) return "Overdue!";
    else return `Due in ${dueIn} days`;
  };

  React.useEffect(() => {
    console.log(
      "== debug == Inkdrop Timelines Editor Meta Layout Component Mounted!"
    );
  }, []);

  return (
    <div className="inkdrop-timelines-meta editor-status-bar">
      {dueDate === null ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            className="ui medium text"
            style={{ margin: "auto 0.5em auto auto" }}
          >
            Due Date:
          </p>
          <button
            className="ui mini button"
            data-tooltip="Set a new due date"
            data-position="bottom right"
            onClick={() => createNoteDueDate()}
          >
            +
          </button>
        </div>
      ) : (
        <div>
          <p
            data-tooltip="Set a new due date"
            data-position="bottom right"
            onClick={() => createNoteDueDate()}
            className="ui label default inkdrop-timelines pointerButton"
            style={
              daysDue(true) < 0
                ? {
                    backgroundColor: "red",
                  }
                : {}
            }
          >
            {daysDue()}
          </p>
        </div>
      )}
    </div>
  );
}
