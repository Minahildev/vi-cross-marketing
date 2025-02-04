import Bg6 from "../../assets/Bg6.svg";
import Bg7 from "../../assets/Bg7.svg";
import Bg8 from "../../assets/Bg8.svg";
import Bg9 from "../../assets/Bg9.svg";
import Bg10 from "../../assets/Bg10.svg";

function Fsolutions() {
  const cardData = [
    { image: Bg6, title: "2.5D Virtual Environment", bgColor: "bg-yellow-50" },
    { image: Bg7, title: "Event & Session Management", bgColor: "bg-green-50" },
    { image: Bg8, title: "⁠Business Matching & Networking", bgColor: "bg-blue-50" },
    { image: Bg9, title: "Multi Language Support", bgColor: "bg-purple-50" },
    { image: Bg10, title: "Real Time Analytics", bgColor: "bg-red-50" }
  ];

  return (
    <section className="bg-gray-100 h-full w-full px-6 sm:px-10 lg:px-20 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-700">Features</h3>
            <h1 className="text-3xl font-semibold text-black">Solution We offer</h1>
          </div>

          <div className="flex-grow mt-auto">
            <p className="text-base text-gray-600">
              We've created an environment that fosters meaningful connections and drives business growth.
            </p>
            <button className="text-white bg-blue-950 hover:bg-blue-800 transition py-3 px-6 rounded-full text-lg font-medium shadow-lg mt-4">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Column with Cards */}
        <div className="flex flex-col gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`${card.bgColor} p-6 rounded-xl shadow-lg flex items-center gap-4`}
            >
              <img src={card.image} alt={card.title} className="w-16 h-16 object-cover" />
              <h4 className="text-xl font-bold text-black">{card.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Fsolutions;
