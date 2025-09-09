function MainForm() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 bg-primary-color">
            <h1>Sheeraz GPT</h1>
          </div>
          <div className="col-10 screen_hight position-relative">
            <div className="w-75 m-auto bg-primary-color p-1 pt-3 rounded-4 px-3 input-position position-absolute">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control bg-primary-color text-white outline-black border-black input-focus rounded-0 border-0 outline-0"
                  placeholder="Ask me Anything...."
                />
                <button
                  className="btn bg-primary-color text-white rounded-0"
                  type="button"
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
export default MainForm;
