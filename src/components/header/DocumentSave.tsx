import React, { ReactElement } from "react";
import SaveIcon from "../../assets/icon-save.svg";
import { useAppDispatch } from "../../hooks/redux";
import { documentActions } from "../../redux/document-slice";
import { toast } from "react-hot-toast";

export default function DocumentSave(): ReactElement {
  const dispatch = useAppDispatch();

  function onClickHandler() {
    dispatch(documentActions.saveChanges());
    toast.success("Document saved");
  }

  return (
    <button aria-label="Save changes" className="primary-btn p-3 rounded-md" onClick={onClickHandler}>
      <img src={SaveIcon} alt="" aria-hidden={true} />
      <span className="hidden md:inline-block">Save Changes</span>
    </button>
  );
}
