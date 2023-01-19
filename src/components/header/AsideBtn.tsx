import React, { ReactElement, useState } from "react";
import MenuIcon from "../../assets/icon-menu.svg";
import CloseIcon from "../../assets/icon-close.svg";

export default function AsideBtn(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  function toggleSidebar() {
    setIsMenuOpen((prev) => !prev);
    document.getElementsByTagName("body")[0].classList.toggle("menu-closed");
  }

  return (
    <button
      className="flex items-center justify-center w-full h-14 md:h-[72px] bg-neutral-400 hover:bg-primary-100"
      onClick={toggleSidebar}
    >
      <img src={isMenuOpen ? CloseIcon : MenuIcon} />
    </button>
  );
}
