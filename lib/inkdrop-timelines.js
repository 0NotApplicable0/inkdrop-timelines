"use babel";

import InkdropTimelinesMessageDialog from "./inkdrop-timelines-message-dialog";
import InkdropTimelinesEditorMetaLayout from "./inkdrop-timelines-editor-meta-layout";

module.exports = {
  activate() {
    inkdrop.components.registerClass(InkdropTimelinesMessageDialog);
    inkdrop.components.registerClass(InkdropTimelinesEditorMetaLayout);
    inkdrop.layouts.addComponentToLayout(
      "modal",
      "InkdropTimelinesMessageDialog"
    );
    inkdrop.layouts.addComponentToLayout(
      "editor-meta",
      "InkdropTimelinesEditorMetaLayout"
    );
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      "modal",
      "InkdropTimelinesMessageDialog"
    );
    inkdrop.layouts.removeComponentFromLayout(
      "editor-meta",
      "InkdropTimelinesEditorMetaLayout"
    );
    inkdrop.components.deleteClass(InkdropTimelinesMessageDialog);
    inkdrop.components.deleteClass(InkdropTimelinesEditorMetaLayout);
  },
};
