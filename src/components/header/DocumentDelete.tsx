import React, { ReactElement } from "react";
import DeleteIcon from "../../assets/icon-delete.svg";

export default function DocumentDelete(): ReactElement {
  return (
    <button className="ml-auto">
      <img src={DeleteIcon} aria-hidden={true} alt="" />
      <span className="sr-only">delete markdown document</span>
    </button>
  );
}
