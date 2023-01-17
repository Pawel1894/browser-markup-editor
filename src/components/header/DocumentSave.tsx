import React, { ReactElement } from "react";
import SaveIcon from "../../assets/icon-save.svg";

export default function DocumentSave(): ReactElement {
  return (
    <button aria-label="Save changes" className="primary-btn p-3 rounded-md">
      <img src={SaveIcon} alt="" aria-hidden={true} />
      <span className="hidden md:inline-block">Save Changes</span>
    </button>
  );
}
