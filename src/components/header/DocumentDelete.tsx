import React, { ReactElement, useState } from "react";
import DeleteIcon from "../../assets/icon-delete.svg";
import DeletePrompt from "./DeletePrompt";

export default function DocumentDelete(): ReactElement {
  const [isPromptOpen, setIsPromptOpen] = useState(false);

  function onClickHandler() {
    setIsPromptOpen(true);
  }

  return (
    <>
      <DeletePrompt isOpen={isPromptOpen} setIsPromptOpen={setIsPromptOpen} />
      <button className="ml-auto" onClick={onClickHandler}>
        <img src={DeleteIcon} aria-hidden={true} alt="" />
        <span className="sr-only">delete markdown document</span>
      </button>
    </>
  );
}
