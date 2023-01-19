import React, { ReactElement } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/redux";
import { documentActions } from "../../redux/document-slice";

interface Props {}

export default function Body({}: Props): ReactElement {
  const dispatch = useDispatch();
  const { activeDoc, documents } = useAppSelector((state) => state.docs);

  function newDoc() {
    dispatch(documentActions.insertDocument());
    if (documents) dispatch(documentActions.setActiveDocument(documents[0].id));
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

  return <ReactMarkdown>{activeDoc.content}</ReactMarkdown>;
}
