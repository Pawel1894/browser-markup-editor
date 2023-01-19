import React, { ChangeEvent, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { documentActions } from "../../redux/document-slice";

export default function Body(): ReactElement {
  const { activeDoc, documents } = useAppSelector((state) => state.docs);
  const dispatch = useAppDispatch();

  function newDoc() {
    dispatch(documentActions.insertDocument());
  }

  if (!activeDoc)
    return (
      <div className="pl-4">
        <span>No active document</span>
        <button onClick={newDoc} className="primary-btn">
          Create new
        </button>
      </div>
    );

  function updateContent(e: ChangeEvent<HTMLTextAreaElement>) {
    if (!activeDoc) return;

    dispatch(documentActions.updateMarkdown(e.target.value));
  }

  return (
    <textarea
      className="w-screen min-h-screen p-4 font-mono text-sm"
      value={activeDoc?.content ? activeDoc.content : ""}
      onChange={updateContent}
    />
  );
}
