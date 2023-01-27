import React, { ReactElement } from "react";
import { useAppSelector } from "../../hooks/redux";
import { TDocument } from "../../types";
import Document from "./Document";

interface Props {}

export default function Documents({}: Props): ReactElement {
  const documents = useAppSelector((state) => state.docs.documents);
  return (
    <ul className="max-h-[70vh] overflow-y-auto">
      {documents
        ? documents.map((item: TDocument) => {
            return <Document key={item.id} id={item.id} createdAt={item.createdAt} name={item.name} />;
          })
        : null}
    </ul>
  );
}
