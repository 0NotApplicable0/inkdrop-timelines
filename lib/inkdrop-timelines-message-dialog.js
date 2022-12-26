"use babel";

import React, { useEffect, useCallback } from "react";
import { logger, useModal } from "inkdrop";

const InkdropTimelinesMessageDialog = (props) => {
  const modal = useModal();
  const { Dialog } = inkdrop.components.classes;

  const toggle = useCallback(() => {
    modal.show();
    logger.debug("InkdropTimelines was toggled!");
  }, []);

  useEffect(() => {
    const sub = inkdrop.commands.add(document.body, {
      "inkdrop-timelines:toggle": toggle,
    });
    return () => sub.dispose();
  }, [toggle]);

  useEffect(() => {
    console.log("== DEBUG == Inkdrop Timelines Loaded!");
  }, []);

  // TODO: This message dialog is intended to be a help dialog and should contain such.
  return (
    <Dialog {...modal.state} onBackdropClick={modal.close}>
      <Dialog.Title>Inkdrop Timelines Menu</Dialog.Title>
      <Dialog.Content>TEST</Dialog.Content>
      <Dialog.Actions>
        <button className="ui button" onClick={modal.close}>
          Close
        </button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default InkdropTimelinesMessageDialog;
