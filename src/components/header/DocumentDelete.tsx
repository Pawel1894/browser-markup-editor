import React, { ReactElement } from "react";
import DeleteIcon from "../../assets/icon-delete.svg";
import { useAppDispatch } from "../../hooks/redux";
import { documentActions } from "../../redux/document-slice";

export default function DocumentDelete(): ReactElement {
  const dispatch = useAppDispatch();

  function onClickHandler() {
    confirm("test");
    dispatch(documentActions.deleteDocument());
  }

  return (
    <button className="ml-auto" onClick={onClickHandler}>
      <img src={DeleteIcon} aria-hidden={true} alt="" />
      <span className="sr-only">delete markdown document</span>
    </button>
  );
}
