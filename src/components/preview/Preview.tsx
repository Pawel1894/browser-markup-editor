import React, { ReactElement } from "react";
import ReactMarkdown from "react-markdown";
import { useAppSelector } from "../../hooks/redux";

interface Props {}

export default function Preview({}: Props): ReactElement {
  const activeDoc = useAppSelector((state) => state.docs.activeDoc);
  if (!activeDoc) return <span>No active document</span>;

  return (
    <div>
      <ReactMarkdown>{activeDoc.content}</ReactMarkdown>
    </div>
  );
}
