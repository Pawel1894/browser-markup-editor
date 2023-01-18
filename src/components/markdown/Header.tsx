import React, { ReactElement } from "react";
import ShowIcon from "../../assets/icon-show-preview.svg";
import { useAppSelector } from "../../hooks/redux";

export default function Header(): ReactElement {
  return (
    <div className="bg-neutral-900 px-4 py-3 flex justify-between items-center">
      <span className="font-medium text-neutral-600 text-sm tracking-widest">MARKDOWN</span>
      <button>
        <img src={ShowIcon} alt="" />
      </button>
    </div>
  );
}
