import React, { ReactElement } from "react";
import { useAppSelector } from "../../hooks/redux";

export default function Body(): ReactElement {
  const content = useAppSelector((state) => state.docs.activeDoc?.content);
  return <textarea>{content}</textarea>;
}
