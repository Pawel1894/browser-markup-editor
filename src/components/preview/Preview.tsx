import React, { ReactElement } from "react";
import Body from "./Body";
import Header from "./Header";

export default function Preview(): ReactElement {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}
