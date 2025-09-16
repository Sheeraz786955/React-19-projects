import clear from "../assets/clear.png";
import wind from "../assets/wind.png";
import humidity from "../assets/humidity.png";
function Weather() {
  return (
    <>
      <div className=" flex justify-center">
        <div className="bg-gradient-to-r from-blue-700 to-blue-500 w-96 ">
          <div className="m-10">
            <form action="">
              <div className="flex justify-center gap-2">
                <div>
                  <input
                    className="bg-white mb-1 text-inherit w-56 rounded-3xl p-2.5"
                    type="text"
                    placeholder="Search City...."
                  />
                </div>
                <div>
                  <button className="bg-white rounded-full p-[3.5px]">
                    <i className="fa-solid fa-magnifying-glass text-3xl p-1 pr-1"></i>
                  </button>
                </div>
              </div>
            </form>
            <div className="w-40 m-auto my-5">
              <img className=" w-100" src={clear} alt="" />
            </div>
            <div>
              <h1 className=" text-white text-7xl font-medium text-center">
                10<sup>o</sup>
                <span className=" text-6xl">C</span>
              </h1>
              <h1 className=" text-center text-white font-medium text-4xl my-3">
                London
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-2 align-items-center mt-8">
              <div className=" flex gap-2 justify-center">
                <div>
                      <i className="fa-solid fa-wind text-4xl text-white"></i>
                </div>
                <div className="text-white font-medium">
                  <h1>3.6 Km/h</h1>
                  <h1>Wind Speed</h1>
                </div>
              </div>
              <div className=" flex gap-2 justify-center">
                <div>
                 <i className="fa-solid fa-water text-4xl text-white"></i>
                </div>
                <div className="text-white font-medium">
                  <h1>90 %</h1>
                  <h1>Humidity</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Weather;
