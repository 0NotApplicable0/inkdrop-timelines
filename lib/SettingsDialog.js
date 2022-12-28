"use babel";

import React from "react";
import { logger, useModal } from "inkdrop";

const InkdropTimelinesSettingsDialog = (props) => {
  const modal = useModal();
  const { Dialog } = inkdrop.components.classes;

  const toggleSettings = () => {
    if (modal !== null) modal.show();
  };

  React.useEffect(() => {
    const sub = inkdrop.commands.add(document.body, {
      "inkdrop-timelines:toggleSettings": toggleSettings,
    });
    return () => sub.dispose();
  }, [toggleSettings]);

  React.useEffect(() => {
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

export default InkdropTimelinesSettingsDialog;
