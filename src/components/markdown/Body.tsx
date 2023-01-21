import React, { ChangeEvent, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { insertDocument } from "../../redux/actions";
import { documentActions } from "../../redux/document-slice";

export default function Body(): ReactElement {
  const { activeDoc } = useAppSelector((state) => state.docs);
  const dispatch = useAppDispatch();

  function newDoc() {
    dispatch(insertDocument());
  }

  if (!activeDoc)
    return (
      <div className="m-4">
        <button onClick={newDoc} className="primary-btn rounded-md">
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
      data-testid="markdownArea"
      className="w-full bg-white dark:bg-neutral-100 dark:text-neutral-700 min-h-[calc(100vh-116px)] p-4 font-mono text-sm"
      value={activeDoc?.content ? activeDoc.content : ""}
      onChange={updateContent}
    />
  );
}
