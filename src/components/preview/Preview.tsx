import React, { ReactElement } from "react";
import Body from "./Body";
import Header from "./Header";

export default function Preview(): ReactElement {
  return (
    <div className="border-l border-neutral-800">
      <Header />
      <Body />
    </div>
  );
}
