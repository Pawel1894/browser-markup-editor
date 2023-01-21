import React, { ReactElement } from "react";
import SaveIcon from "../../assets/icon-save.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { documentActions } from "../../redux/document-slice";
import { toast } from "react-hot-toast";
import { saveDocument } from "../../redux/actions";

export default function DocumentSave(): ReactElement {
  const dispatch = useAppDispatch();
  const { activeDoc } = useAppSelector((state) => state.docs);

  function onClickHandler() {
    dispatch(saveDocument());
    // saveItem("docs", docs);
    // documentActions.saveChanges()
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
