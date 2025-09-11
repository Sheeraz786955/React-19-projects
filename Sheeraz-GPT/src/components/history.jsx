

function History({setSelectHistory,recentHistory, setRecentHistory}){
     const delData = () => {
    localStorage.clear();
    setRecentHistory([]);}

    return(
        <>
   
        
         <div className="col-lg-2 col-1 bg-primary-color text-white d-none d-lg-block  ">
            <h4 className="text-center heading-grad mt-2">Sheeraz GPT</h4>
            <h5 className="text-center my-3">
               History{" "}
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
            <p className="text-white text-center ">
              Built and Design by{" "}
              <a className="pointer spinner-color text-decoration-none fw-bold">
                @Sheeraz Ahmad
              </a>
            </p>
          </div>
        </>
    )
}
export default History