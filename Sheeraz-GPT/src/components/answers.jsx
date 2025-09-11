import { useEffect, useState } from "react";
import { checkHeadings, replaceStarHeadings } from "../helper";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import ReactMarkDown from "react-markdown";

function Answers({ ans, index, totelData, type }) {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);

  useEffect(() => {
    if (checkHeadings(ans)) {
      setHeading(true);
      setAnswer(replaceStarHeadings(ans));
    }
  }, [ans]);

  const render = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          style={dark}
          language={match[1]}
          PreTag="div"
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code {...props} className={className}>
          {children}
        </code>
      );
    },
  };

  return (
    <>
      {index && totelData > 1 ? (
        <h6 className="py-2 fw-bolder" key={index}>
          {answer}
        </h6>
      ) : heading ? (
        <h5 className="pt-3">{answer}</h5>
      ) : (
        <span className={type === "q" ? "ps-1 primary-color" : "primary-color ps-4"}>
          <ReactMarkDown components={render}>{answer}</ReactMarkDown>
        </span>
      )}
    </>
  );
}

export default Answers;
