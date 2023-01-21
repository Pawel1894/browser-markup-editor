import React, { ReactElement } from "react";
import LogoIcon from "../../assets/logo.svg";

export default function Logo(): ReactElement {
  return (
    <div className="hidden items-center pr-6 border-r border-r-neutral-500 h-full xl:flex">
      <img src={LogoIcon} alt="" />
    </div>
  );
}
