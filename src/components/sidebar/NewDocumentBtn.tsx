import React, { ReactElement } from "react";
import { toast } from "react-hot-toast";
import { useAppDispatch } from "../../hooks/redux";
import { insertDocument } from "../../redux/actions";

export default function NewDocumentBtn(): ReactElement {
  const dispatch = useAppDispatch();
  function onClickHandler() {
    dispatch(insertDocument());
    toast.success("New document created");
  }

  return (
    <button
      aria-label="New document"
      onClick={onClickHandler}
      className="primary-btn w-full p-3 rounded-md mt-7"
    >
      <span>+ New Document</span>
    </button>
  );
}
