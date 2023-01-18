import React, { ReactElement, SetStateAction } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { documentActions } from "../../redux/document-slice";

interface Props {
  isOpen: boolean;
  setIsPromptOpen: React.Dispatch<SetStateAction<boolean>>;
}

export default function DeletePrompt({ isOpen, setIsPromptOpen }: Props): ReactElement {
  const dispatch = useAppDispatch();

  function stopPropagation(e: React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
  }

  function deleteDocument() {
    dispatch(documentActions.deleteDocument());
    setIsPromptOpen(false);
  }

  return (
    <div
      className={`${isOpen ? "block" : "hidden"} absolute left-0 top-0 bg-transparent w-screen h-screen`}
      onClick={() => setIsPromptOpen(false)}
    >
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-md p-6"
        onClick={stopPropagation}
      >
        <span className="text-neutral-400 font-bold text-xl font-serif">Delete this document?</span>
        <p className="my-4 text-neutral-600 max-w-[36ch] font-serif font-normal">
          Are you sure you want to delete the ‘welcome.md’ document and its contents? This action cannot be
          reversed.
        </p>
        <button className="primary-btn rounded-md w-full" onClick={deleteDocument}>
          <span>Confirm & Delete</span>
        </button>
      </div>
    </div>
  );
}
