import React, { ReactElement } from "react";
import Logo from "../../assets/logo.svg";
import Documents from "./Documents";
import NewDocumentBtn from "./NewDocumentBtn";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar(): ReactElement {
  return (
    <aside
      aria-hidden="true"
      data-testid="sidebar"
      className="sidebar relative px-6 py-7 bg-neutral-200 h-screen"
    >
      <div>
        <img src={Logo} alt="" />
      </div>
      <div className="my-7">
        <span className="text-neutral-600 font-medium uppercase text-sm tracking-widest">my documents</span>
        <NewDocumentBtn />
        <Documents />
      </div>
      <ThemeToggle />
    </aside>
  );
}
