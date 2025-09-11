import { useEffect, useRef, useState } from "react";

import "./App.css";
import MainForm from "./components/answers";
import { url } from "./constant";
import Answers from "./components/answers";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState([]);
  const [recentHistory, setRecentHistory] = useState([]);
  const [selectHistory, setSelectHistory] = useState("");
  const [spinner, setSpinner] = useState(false);

  const scrollToans = useRef();
  const askQuestion = async () => {
    if (!question && !selectHistory) {
      return false;
    }
    const payLoadData = question || selectHistory;
    const payLand = {
      contents: [
        {
          parts: [
            {
              text: payLoadData,
            },
          ],
        },
      ],
    };
    if (question) {
      if (localStorage.getItem("history")) {
        let history = JSON.parse(localStorage.getItem("history"));
        history = [question, ...history];
        localStorage.setItem("history", JSON.stringify(history));
        setRecentHistory(history);
      } else {
        localStorage.setItem("history", JSON.stringify([question]));
        setRecentHistory([question]);
      }
    }
    setSpinner(true);
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
      { type: "q", text: question || selectHistory },
      { type: "a", text: dataString },
    ]);
    setQuestion("");
    setTimeout(() => {
      scrollToans.current.scrollTop = scrollToans.current.scrollHeight;
    }, 500);
    setSpinner(false);
  };
  const delData = () => {
    localStorage.clear();
    setRecentHistory([]);
  };
  const isEnter = (event) => {
    if (event.key == "Enter") {
      askQuestion();
    }
  };
  useEffect(() => {
    askQuestion();
  }, [selectHistory]);

  return (
    <>
      <div className="container-fluid bg-black">
        <div className="row">
          <div className="col-2 bg-primary-color text-white   ">
            <h5 className="text-center my-3">
              Recent History{" "}
              <span onClick={delData} className="pointer hover-color">
                <i className="fa-regular fa-trash-can"></i>
              </span>
            </h5>
            <div className="sidebar-screen-hight truncate sidebar-screen-hight custom-scroll pe-2">
              <ul className="list-unstyled">
                {recentHistory &&
                  recentHistory.map((item, index) => (
                    <li
                      onClick={() => setSelectHistory(item)}
                      key={index}
                      className="primary-color fs-5 fw-semibold list-hover"
                    >
                      * {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          <div className="col-10 screen_hight position-relative pt-3">
            <h1 className="heading-grad text-center display-5 fw-bold py-1">Hello User, Ask me Anything</h1>
           
            <div
              ref={scrollToans}
              className="container overflow-auto custom-scroll hight-fit"
            >
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
                {spinner ? (
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border m-5 spinner-color" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="w-75 m-auto bg-primary-color p-1 pt-3 rounded-pill px-3 input-position position-absolute">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control bg-primary-color text-white outline-black border-black input-focus rounded-0 border-0 outline-0"
                  placeholder="Ask me Anything...."
                  onChange={(event) => setQuestion(event.target.value)}
                  onKeyDown={isEnter}
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
