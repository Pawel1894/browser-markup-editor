import React, { ReactElement } from "react";
import AsideBtn from "./AsideBtn";
import DocumentDelete from "./DocumentDelete";
import DocumentSave from "./DocumentSave";
import DocumentTitle from "./DocumentTitle";
import Logo from "./Logo";

export default function Header(): ReactElement {
  return (
    <header className="bg-neutral-300 grid grid-cols-[56px_1fr] md:grid-cols-[72px_1fr] ">
      <AsideBtn />
      <div className="grid grid-cols-[1fr_18px_41px] md:grid-cols-[1fr_18px_152px] xl:grid-cols-[auto_1fr_18px_152px] w-full pl-6 pr-2 content-center gap-6">
        <Logo />
        <DocumentTitle />
        <DocumentDelete />
        <DocumentSave />
      </div>
    </header>
  );
}
