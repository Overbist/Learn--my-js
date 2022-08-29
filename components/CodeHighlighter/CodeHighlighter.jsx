import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter"
import { monokai } from "react-syntax-highlighter/dist/cjs/styles/hljs"

export function CodeHighlighter({ children }) {
  return (
    <SyntaxHighlighter
      language="javascript"
      showLineNumbers="true"
      wrapLongLines="true"
      style={monokai}
      className="codeHighlighter"
    >
      {children}
    </SyntaxHighlighter>
  )
}
