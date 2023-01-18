import React, { ChangeEvent, ReactElement } from "react";
import CopyIcon from "../../assets/icon-document.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { documentActions } from "../../redux/document-slice";

export default function DocumentTitle(): ReactElement {
  const activeDoc = useAppSelector((state) => state.docs.activeDoc);
  const dispatch = useAppDispatch();

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    if (!activeDoc) return;

    dispatch(
      documentActions.updateName({
        id: activeDoc?.id,
        name: e.target.value,
      })
    );
  }

  return (
    <div title="test.md" className="relative flex items-center overflow-x-auto">
      <img src={CopyIcon} />
      <div className="ml-4 ">
        <span className="hidden text-neutral-600 text-xs leading-none md:block">Document Name</span>
        <input
          type="text"
          className={`text-white bg-[transparent] outline-none border-b border-b-[transparent] focus:border-b-neutral-800 caret-primary-100 selection:bg-primary-100`}
          value={activeDoc ? activeDoc.name : "No documents"}
          disabled={activeDoc ? false : true}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
