import { useEffect, useState } from "react";
import { checkHeadings, replaceStarHeadings } from "../helper";

function Answers({ ans, index, totelData ,type }) {
  const [heading, setHeading] = useState(false);
  const [answer, setAnswer] = useState(ans);
  useEffect(() => {
    if (checkHeadings(ans)) {
      setHeading(true);
      setAnswer(replaceStarHeadings(ans));
    }
  
  }, []);

  return (
    <>
      {index && totelData > 1 ? (
        <h6 className="py-2 fw-bolder" key={index}>
          {answer}
        </h6>
      ) : heading ? (
        <h5 className="pt-3">{answer}</h5>
      ) : (
        <span className={type=="q"?"ps-1 primary-color":"primary-color ps-4"}>{answer}</span>
      )}
    </>
  );
}
export default Answers;
