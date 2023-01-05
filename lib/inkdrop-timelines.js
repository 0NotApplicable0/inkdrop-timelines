"use babel";

import InkdropTimelinesCalendarDialog from "./CalendarDialog";
import InkdropTimelinesSettingsDialog from "./SettingsDialog";
import InkdropTimelinesEditorMetaLayout from "./EditorMetaLayoutExtension";
import InkdropTimelinesNoteListItemView from "./NoteListItemExtension";

module.exports = {
  activate() {
    inkdrop.components.registerClass(InkdropTimelinesCalendarDialog);
    inkdrop.components.registerClass(InkdropTimelinesSettingsDialog);
    inkdrop.components.registerClass(InkdropTimelinesEditorMetaLayout);
    // inkdrop.components.registerClass(
    //   InkdropTimelinesNoteListItemView,
    //   "CustomNoteListItemView"
    // );
    inkdrop.layouts.addComponentToLayout(
      "modal",
      "InkdropTimelinesCalendarDialog"
    );
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
      "InkdropTimelinesCalendarDialog"
    );
    inkdrop.layouts.removeComponentFromLayout(
      "modal",
      "InkdropTimelinesSettingsDialog"
    );
    inkdrop.layouts.removeComponentFromLayout(
      "editor-meta",
      "InkdropTimelinesEditorMetaLayout"
    );

    inkdrop.components.deleteClass(InkdropTimelinesCalendarDialog);
    inkdrop.components.deleteClass(InkdropTimelinesSettingsDialog);
    inkdrop.components.deleteClass(InkdropTimelinesEditorMetaLayout);
    // inkdrop.components.deleteClass(
    //   InkdropTimelinesNoteListItemView,
    //   "CustomNoteListItemView"
    // );
  },
};
