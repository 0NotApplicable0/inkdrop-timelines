"use babel";

import * as React from "react";
import moment from "moment";

// Extends the editor meta layout to contain due date information.
export default function InkdropTimelinesEditorMetaLayout() {
  const [dueDate, setDueDate] = React.useState(null);

  const createNoteDueDate = () => {
    console.log("Set Due Date Event Fired!");
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
        <div>Due Date: testings</div>
      )}
    </div>
  );
}
