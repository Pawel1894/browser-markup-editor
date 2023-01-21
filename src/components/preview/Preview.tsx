import React, { ReactElement } from "react";
import Body from "./Body";
import Header from "./Header";

interface Props {
  isPreview: boolean;
}

export default function Preview({ isPreview }: Props): ReactElement {
  return (
    <div className={`${isPreview && window.innerWidth > 768 ? "border-l border-neutral-800" : ""}`}>
      <Header />
      <Body />
    </div>
  );
}
