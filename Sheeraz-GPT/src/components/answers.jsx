import { useEffect, useState } from "react";
import { checkHeadings, replaceStarHeadings } from "../helper";

function Answers({ ans, index, totelData }) {
  const[heading,setHeading]=useState(false)
  const[answer,setAnswer]=useState(ans)
  useEffect(() => {
   if(checkHeadings(ans)){
    setHeading(true)
    setAnswer(replaceStarHeadings(ans)
    )
   }
console.log(totelData)

  }, []);

  return <>{index&&totelData>1?<h6 className="py-2" key={index}>{answer}</h6>:
  heading? <h5 className="pt-3">{answer}</h5>:<span className="primary-color ps-4">{answer}</span>}
</>
}
export default Answers;
