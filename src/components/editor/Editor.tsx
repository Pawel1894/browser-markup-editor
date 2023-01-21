import React, { ReactElement } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Markdown } from "../markdown/Markdown";
import Preview from "../preview/Preview";

export default function Editor(): ReactElement {
  const isPreview = useAppSelector((state) => state.docs.isPreview);

  return (
    <div className={`grid grid-cols-1 ${!isPreview ? "md:grid-cols-2" : null}`}>
      {!isPreview ? <Markdown /> : null}
      {isPreview || window.innerWidth >= 768 ? <Preview isPreview={isPreview} /> : null}
    </div>
  );
}
