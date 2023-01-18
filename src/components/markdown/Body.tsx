import React, { ReactElement } from "react";
import { useAppSelector } from "../../hooks/redux";

export default function Body(): ReactElement {
  const activeDoc = useAppSelector((state) => state.docs.activeDoc);

  if (!activeDoc) return <span>No document selected</span>;

  return (
    <textarea
      className="w-screen min-h-screen p-4 font-mono text-sm"
      value={activeDoc?.content ? activeDoc.content : ""}
    />
  );
}
