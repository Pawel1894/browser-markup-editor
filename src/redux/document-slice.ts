import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TDocument } from "../types";

export const documentSlice = createSlice({
  name: "document",
  initialState: {
    documents: null as Array<TDocument> | null,
    activeDoc: null as TDocument | null,
    unsavedData: false,
  },
  reducers: {
    loadDocuments(state, action: PayloadAction<TDocument[]>) {
      state.documents = action.payload;
      state.activeDoc = action.payload[0];
    },
    setActiveDocument(state, action: PayloadAction<string>) {
      state.unsavedData = false;
      const docs = state.documents;
      const newActive = docs?.find((doc) => doc.id === action.payload);
      if (newActive) state.activeDoc = newActive;
    },
    updateName(state, action: PayloadAction<{ id: string; name: string }>) {
      if (!state.activeDoc) return;
      state.unsavedData = true;
      state.activeDoc.name = action.payload.name;
    },
    insertDocument(state) {
      const newDoc = {
        id: window.crypto.randomUUID(),
        content: "",
        createdAt: new Date().toLocaleDateString("en-US"),
        name: "Document.md",
      } satisfies TDocument;

      state.documents?.push(newDoc);
    },
  },
});

// Action creators are generated for each case reducer function
export const documentActions = documentSlice.actions;

export default documentSlice.reducer;
