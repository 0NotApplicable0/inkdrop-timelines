"use babel";

import * as React from "react";
import PropTypes from "prop-types";

IndropTimelinesNoteListItemView.propTypes = {
  active: PropTypes.bool,
  focused: PropTypes.bool,
  note: PropTypes.object,
  onClick: PropTypes.func,
  onDblClick: PropTypes.func,
  onContextMenu: PropTypes.func,
};

// Modify list item to display due dates
// TODO: Remake default IndropTime
export default function IndropTimelinesNoteListItemView(props) {
  const { active, focused, note } = props;
  const { title } = note;

  function handleClick(e) {
    props.onClick && props.onClick(e, props.note);
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDblClick(e) {
    props.onDblClick && props.onDblClick(e, props.note);
    e.preventDefault();
    e.stopPropagation();
  }

  function handleContextMenu(e) {
    props.onContextMenu && props.onContextMenu(e, props.note);
    e.preventDefault();
    e.stopPropagation();
  }

  return (
    <div
      className={`note-list-item-view ${active && "active"} ${
        focused && "focused"
      }`}
      onClick={handleClick}
      onDoubleClick={handleDblClick}
      onContextMenu={handleContextMenu}
    >
      {title}
    </div>
  );
}
