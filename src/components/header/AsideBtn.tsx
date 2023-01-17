import React, { ReactElement } from "react";
import MenuIcon from "../../assets/icon-menu.svg";
import CloseIcon from "../../assets/icon-close.svg";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { uiActions } from "../../redux/ui-slice";

export default function AsideBtn(): ReactElement {
  const dispatch = useAppDispatch();
  const isMenuOpen = useAppSelector((state) => state.ui.isMenuOpen);

  function toggleSidebar() {
    dispatch(uiActions.toggleMenu());
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
