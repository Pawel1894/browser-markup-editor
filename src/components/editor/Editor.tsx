import React, { ReactElement } from "react";
import { Markdown } from "../markdown/Markdown";
import Preview from "../preview/Preview";

export default function Editor(): ReactElement {
  return (
    <div>
      <Markdown />
      <Preview />
    </div>
  );
}
