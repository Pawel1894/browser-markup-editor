import React, { ReactElement } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { insertDocument } from "../../redux/actions";

export default function Body(): ReactElement {
  const dispatch = useAppDispatch();
  const { activeDoc, isPreview } = useAppSelector((state) => state.docs);

  function newDoc() {
    dispatch(insertDocument());
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

  return (
    <ReactMarkdown
      className={`p-6 overflow-y-auto  w-full max-h-[calc(100vh-120px)] ${
        isPreview ? "md:max-w-screen-sm md:mx-auto" : ""
      } preview-markdown`}
    >
      {activeDoc.content}
    </ReactMarkdown>
  );
}
