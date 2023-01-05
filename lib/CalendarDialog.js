"use babel";

import React from "react";
import { logger, useModal } from "inkdrop";

const InkdropTimelinesCalendarDialog = (props) => {
  const modal = useModal();
  const { Dialog } = inkdrop.components.classes;

  const toggleCalendar = () => {
    if (modal !== null) modal.show();
  };

  React.useEffect(() => {
    const sub = inkdrop.commands.add(document.body, {
      "inkdrop-timelines:toggleCalendar": toggleCalendar,
    });
    return () => sub.dispose();
  }, [toggleCalendar]);

  return (
    <Dialog {...modal.state} onBackdropClick={modal.close}>
      <Dialog.Title>Select a new due date</Dialog.Title>
      <Dialog.Content>TEST</Dialog.Content>
      <Dialog.Actions>
        <button className="ui button" onClick={modal.close}>
          Close
        </button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default InkdropTimelinesCalendarDialog;
