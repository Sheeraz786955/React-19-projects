function HistorySideBar({ setSelectHistory, recentHistory, setRecentHistory }) {
  const delData = () => {
    localStorage.clear();
    setRecentHistory([]);
  };
  return (
    <>
      <span
        className=" mt-3 me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <i className="fa-solid fa-sliders spinner-color fs-3"></i>
      </span>

      <div
        className="offcanvas offcanvas-start offcanvas-lg"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header bg-primary-color">
          <h2
            className="offcanvas-title heading-grad"
            id="offcanvasWithBothOptionsLabel"
          >
            Sheeraz GPT
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body bg-primary-color custom-scroll offcanvas-scroll ">
          <div className="  text-white  ">
            <h5 className="text-center my-3">
              History{" "}
              <span onClick={delData} className="pointer hover-color">
                <i className="fa-regular fa-trash-can"></i>
              </span>
            </h5>
            <div className="sidebar-screen-hight truncate sidebar-screen-hight custom-scroll pe-2 text-start">
              <ul className="list-unstyled">
                {recentHistory &&
                  recentHistory.map((item, index) => (
                    <li
                      data-bs-dismiss="offcanvas"
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
         
        </div>
         <div className="offcanvas-footer bg-primary-color">
           <p className="text-white text-center my-2 ">
              Built and Design by{" "}
              <a className="pointer spinner-color text-decoration-none fw-bold">
                @Sheeraz Ahmad
              </a>
            </p>
          </div>
      </div>
    </>
  );
}
export default HistorySideBar;
