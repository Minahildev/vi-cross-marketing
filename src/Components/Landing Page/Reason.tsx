import Image3 from "../../assets/image -3.svg";
import Image4 from "../../assets/image -4.svg";
import Image5 from "../../assets/image -5.svg";

function Reasons() {
  return (
    <div className="bg-black h-full w-full px-5 sm:px-10 py-10">
      <div className="flex flex-col text-center lg:pt-14">
        <h3 className="text-sm font-bold text-white">Why Join VI Cross?</h3>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white">Core Features</h1>

        <div className="flex flex-col sm:flex-row gap-8 px-3 pt-8 "> 
          
          <div className="relative">
            <img src={Image3} alt="Networking Events" className="w-full h-auto" />
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white font-bold border-transparent backdrop-blur sm:hover:underline md:hover:underline lg:hover:bg-gray-700 py-2 px-8 sm:px-16 lg:px-20 rounded-3xl">
              Networking Events
            </button>
          </div>

          <div className="relative">
            <img src={Image4} alt="Virtual Environment" className="w-full h-auto" />
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white font-bold border-transparent backdrop-blur  sm:hover:underline md:hover:underline lg:hover:bg-gray-700 py-2 px-8 sm:px-16 lg:px-20 rounded-3xl">
              Virtual Environment
            </button>
          </div>

          <div className="relative">
            <img src={Image5} alt="Live Webinar" className="w-full h-auto" />
            <button className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white font-bold border-transparent backdrop-blur sm:hover:underline md:hover:underline lg:hover:bg-gray-700 py-2 px-8 sm:px-16 lg:px-20 rounded-3xl">
              Live Webinar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
