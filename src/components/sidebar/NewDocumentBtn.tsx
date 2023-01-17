import React, { ReactElement } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { documentActions } from "../../redux/document-slice";

export default function NewDocumentBtn(): ReactElement {
  const dispatch = useAppDispatch();
  function onClickHandler() {
    dispatch(documentActions.insertDocument());
  }

  return (
    <button
      aria-label="Save changes"
      onClick={onClickHandler}
      className="primary-btn w-full p-3 rounded-md mt-7"
    >
      <span>+ New Document</span>
    </button>
  );
}
