import Gradient2 from "../../assets/Gradient2.svg";

function Ctime() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-tr from-pink-900 to-blue-900 flex flex-col items-center justify-center">
      {/* Background Image with Full Height */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={Gradient2}
          alt="Gradient Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative text-center px-5 sm:px-10 lg:px-60 z-10">
        <h3 className="text-sm font-semibold pb-8 sm:pb-16 pt-8 sm:pt-16 text-white">
          UPCOMING EXHIBITION
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          Counting Time & Not Yet Registered? Hurry Up!
        </h1>
      </div>

      {/* Countdown Timer */}      
      <div className="relative flex flex-wrap justify-center gap-8 sm:gap-10 bg-transparent text-white px-8 lg:px-20 pt-5 pb-20 z-10">
        {[{ label: "Days", value: 21 }, { label: "Hours", value: 5 }, { label: "Minutes", value: 32 }, { label: "Seconds", value: 18 }].map((item, index) => (
          <div
            key={index}
            className="text-center border-2 border-slate-600 rounded-md backdrop-blur-md p-5 w-24 sm:w-32 lg:w-40"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold pt-5">{item.value}</h1>
            <h3 className="text-sm sm:text-lg font-normal pb-5">{item.label}</h3>
          </div>
        ))}
      </div>

      {/* Register Button */}
      <div className="relative flex place-content-center z-10 pb-10">
        <button className="text-blue-800 bg-white py-4 px-10 font-semibold rounded-full shadow-md hover:bg-gray-200 sm:hover:underline md:hover:underline lg:hover:underline transition-all">
          Register Now
        </button>
      </div>
    </section>
  );
}

export default Ctime;
