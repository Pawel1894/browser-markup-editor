import React, { ReactElement } from "react";
import CopyIcon from "../../assets/icon-document.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { documentActions } from "../../redux/document-slice";

interface Props {
  createdAt: string;
  name: string;
  id: string;
}

export default function Document({ createdAt, name, id }: Props): ReactElement {
  const dispatch = useAppDispatch();
  const activeDocId = useAppSelector((state) => state.docs.activeDoc?.id);

  function setActiveDocument() {
    dispatch(documentActions.setActiveDocument(id));
  }

  return (
    <button
      onClick={setActiveDocument}
      title={name}
      className="group relative flex items-center overflow-x-auto mt-6 "
    >
      <img src={CopyIcon} />
      <div className="ml-4 ">
        <span className="hidden w-fit text-neutral-600 text-xs leading-none md:block">{createdAt}</span>
        <span
          className={`${
            activeDocId === id ? "text-primary-100" : "text-white"
          }  group-hover:text-primary-100`}
        >
          {name}
        </span>
      </div>
    </button>
  );
}
