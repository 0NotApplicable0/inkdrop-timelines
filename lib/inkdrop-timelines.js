"use babel";

import InkdropTimelinesSettingsDialog from "./SettingsDialog.js";
import InkdropTimelinesEditorMetaLayout from "./EditorMetaLayoutExtension";

module.exports = {
  activate() {
    inkdrop.components.registerClass(InkdropTimelinesSettingsDialog);
    inkdrop.components.registerClass(InkdropTimelinesEditorMetaLayout);
    inkdrop.layouts.addComponentToLayout(
      "modal",
      "InkdropTimelinesSettingsDialog"
    );
    inkdrop.layouts.addComponentToLayout(
      "editor-meta",
      "InkdropTimelinesEditorMetaLayout"
    );
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      "modal",
      "InkdropTimelinesSettingsDialog"
    );
    inkdrop.layouts.removeComponentFromLayout(
      "editor-meta",
      "InkdropTimelinesEditorMetaLayout"
    );
    inkdrop.components.deleteClass(InkdropTimelinesSettingsDialog);
    inkdrop.components.deleteClass(InkdropTimelinesEditorMetaLayout);
  },
};
