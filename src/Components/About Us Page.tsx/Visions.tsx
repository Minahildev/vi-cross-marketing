import AGrouping from "../../assets/AGrouping.svg";
import AGroup from "../../assets/AGroup.svg";

function Visions() {
  return (
    <section className="h-full w-full px-5 sm:px-10 py-10 flex flex-col lg:grid lg:grid-cols-2 items-center gap-10 lg:pl-12">
      <div className="relative flex justify-center w-full max-w-lg">
        <img src={AGrouping} alt="Vision Statement" className="w-full h-auto object-cover" />
        <img src={AGroup} alt="Vision Overlay" className="w-72 h-72 absolute top-1/2 transform -translate-y-1/2" />
      </div>
      <div className="text-center lg:text-left lg:pt-20 max-w-4xl">
        <h3 className="text-sm font-bold text-blue-950">Video</h3>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-950">
          Vision and Values
        </h1>
        <h4 className="text-sm sm:text-base lg:text-lg font-normal text-blue-950 mt-4 pb-5">
          Our vision is to become the leading platform for immersive virtual exhibitions, empowering organizations and creators to engage global audiences through innovative, interactive environments. We are committed to fostering a future where virtual events are as impactful and accessible as in-person experiences, breaking down geographical barriers to create meaningful connections.
        </h4>
        <button className="text-white bg-blue-900 lg:hover:underline  hover:bg-blue-700 transition py-2 px-6 rounded-3xl">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Visions;
