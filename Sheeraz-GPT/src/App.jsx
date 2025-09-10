import { useState } from "react";

import "./App.css";
import MainForm from "./components/answers";
import { url } from "./constant";
import Answers from "./components/answers";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  const [recentHistory, setRecentHistory] = useState([]);
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
    if (localStorage.getItem("history")) {
      let history = JSON.parse(localStorage.getItem("history"));
      history = [question, ...history];
      localStorage.setItem("history", JSON.stringify(history));
      setRecentHistory(history);
    } else {
      localStorage.setItem("history", JSON.stringify([question]));
      setRecentHistory(question);
    }

    let response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payLand),
    });
    response = await response.json();
    let dataString = response.candidates[0].content.parts[0].text;
    dataString = dataString.split("* ");
    dataString = dataString.map((item) => item.trim());
    setAnswer([
      ...answer,
      { type: "q", text: question },
      { type: "a", text: dataString },
    ]);
  };
  console.log(recentHistory);
  return (
    <>
      <div className="container-fluid bg-black">
        <div className="row">
          <div className="col-2 bg-primary-color text-white   ">
            <h5 className="text-center my-3">
              Recent History{" "}
              <span>
                <i className="fa-regular fa-trash-can"></i>
              </span>
            </h5>
            <div className="sidebar-screen-hight overflow-auto">
              <ul>
                {recentHistory &&
                  recentHistory.map((item, index) => (
                    <li key={index} className="primary-color fs-5 fw-semibold">
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="col-10 screen_hight position-relative pt-3">
            <div className="container overflow-auto hight-fit">
              <div className="w-75 m-auto">
                <ul className="list-unstyled">
                  {answer.map((item, index) => (
                    <div
                      index={index + Math.random()}
                      className={
                        item.type == "q" ? "d-flex justify-content-end" : ""
                      }
                    >
                      {item.type == "q" ? (
                        <li className="text-white text-end fw-semibold border border-1 p-3 my-2  rounded-start-pill rounded-bottom-pill border-black bg-primary-color w-fit ">
                          <Answers
                            ans={item.text}
                            index={index + Math.random()}
                            totelData={1}
                            type={item.type}
                          />
                        </li>
                      ) : (
                        item.text.map((ansItem, ansIndex) => (
                          <li className="text-white fw-semibold my-2">
                            <Answers
                              ans={ansItem}
                              index={ansIndex + Math.random()}
                              totelData={item.length}
                              type={item.type}
                            />
                          </li>
                        ))
                      )}
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-75 m-auto bg-primary-color p-1 pt-3 rounded-pill px-3 input-position position-absolute">
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
