import { Dispatch } from "@reduxjs/toolkit";
import { saveItem } from "../helpers/localStorage";
import { TDocument } from "../types";
import { documentActions } from "./document-slice";
import { RootState } from "./store";

export function saveDocument() {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const state = getState();
    let docs: TDocument[] = [];
    let activeDoc = state.docs.activeDoc;
    if (state.docs.documents && activeDoc) {
      docs = state.docs.documents.map((a) => ({ ...a }));
      const docIdx = docs.findIndex((doc) => doc.id === activeDoc?.id);
      docs[docIdx].name = activeDoc.name;
      docs[docIdx].content = activeDoc.content;
      docs[docIdx].createdAt = new Date().toLocaleDateString("en-US");
      dispatch(documentActions.saveChanges(docs));
      saveItem("docs", docs);
    }
  };
}

export function insertDocument() {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const state = getState();
    let docs: TDocument[] = [];

    if (state.docs.documents) {
      docs = state.docs.documents.map((a) => ({ ...a }));

      const newDoc = {
        id: window.crypto.randomUUID(),
        content: "",
        createdAt: new Date().toLocaleDateString("en-US"),
        name: "Document.md",
      } satisfies TDocument;

      dispatch(documentActions.insertDocument(newDoc));
      docs.push(newDoc);
      saveItem("docs", docs);
    }
  };
}

export function deleteDocs() {
  return (dispatch: Dispatch, getState: () => RootState) => {
    const state = getState();
    let docs: TDocument[] = [];

    if (state.docs.documents) {
      docs = state.docs.documents.map((a) => ({ ...a }));
      const newDocs = docs.filter((doc) => doc.id !== state.docs.activeDoc?.id);

      dispatch(documentActions.deleteDocument(newDocs));
      saveItem("docs", newDocs);
    }
  };
}
