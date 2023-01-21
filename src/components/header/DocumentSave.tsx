import React, { ReactElement } from "react";
import SaveIcon from "../../assets/icon-save.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { toast } from "react-hot-toast";
import { saveDocument } from "../../redux/actions";

export default function DocumentSave(): ReactElement {
  const dispatch = useAppDispatch();
  const { activeDoc } = useAppSelector((state) => state.docs);

  function onClickHandler() {
    dispatch(saveDocument());
    toast.success("Document saved");
  }

  return (
    <button
      data-testid="saveBtn"
      aria-label="Save changes"
      className="primary-btn p-3 rounded-md"
      onClick={onClickHandler}
      disabled={!activeDoc}
    >
      <img src={SaveIcon} alt="" aria-hidden={true} />
      <span className="hidden md:inline-block">Save Changes</span>
    </button>
  );
}
