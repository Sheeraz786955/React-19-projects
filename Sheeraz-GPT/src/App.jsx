import { useState } from "react";

import "./App.css";
import MainForm from "./components/answers";
import { url } from "./constant";
import Answers from "./components/answers";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const askQuestion = async () => {
    const payLand = {
      contents: [
        {
          parts: [
            {
              text: question,
            },
          ],
        },
      ],
    };
    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payLand),
    });
    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;
    dataString = dataString.split("* ");
    dataString = dataString.map((item) => item.trim());
    setAnswer(dataString);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-primary-color">
            <h1>Sheeraz GPT</h1>
          </div>

          <div className="col-10 screen_hight position-relative">
            <div className="container overflow-auto h-75">
              <ul className="list-unstyled">
                {answer &&
                  answer.map((item, index) => (
                    <li className="text-white">
                      <Answers ans={item} index={index} totelData={item.length} />
                    </li>
                  ))}
              </ul>
            </div>
            <div className="w-75 m-auto bg-primary-color p-1 pt-3 rounded-4 px-3 input-position position-absolute">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control bg-primary-color text-white outline-black border-black input-focus rounded-0 border-0 outline-0"
                  placeholder="Ask me Anything...."
                  onChange={(event) => setQuestion(event.target.value)}
                  value={question}
                />
                <button
                  className="btn bg-primary-color text-white rounded-0"
                  type="button"
                  onClick={askQuestion}
                >
                  Ask
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
