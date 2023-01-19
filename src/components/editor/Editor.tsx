import React, { ReactElement } from "react";
import { useAppSelector } from "../../hooks/redux";
import { Markdown } from "../markdown/Markdown";
import Preview from "../preview/Preview";

export default function Editor(): ReactElement {
  const isPreview = useAppSelector((state) => state.docs.isPreview);

  return <div>{isPreview ? <Preview /> : <Markdown />}</div>;
}
