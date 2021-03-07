import React from "react";
import { arta, CodeBlock } from "react-code-blocks";

export const DefaultCodeBlock = ({ text }) => {
  return (
    <CodeBlock text={text} language="jsx" showLineNumbers={true} theme={arta} />
  );
};
