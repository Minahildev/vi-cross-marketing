import Bg1 from "../../assets/Bg1.svg";
import Bg2 from "../../assets/Bg2.svg";
import Bg3 from "../../assets/Bg3.svg";
import Bg4 from "../../assets/Bg4.svg";
import Bg5 from "../../assets/Bg5.svg";

function Cards() {
  const cardData = [
    { image: Bg1, title: "Seamless Connectivity", text: "Connect with potential buyers from the Asia-Pacific region in a virtual space." },
    { image: Bg2, title: "Immersive Experience", text: "Explore a visually appealing 2.5D environment that enhances engagement." },
    { image: Bg3, title: "Efficient Business Matching", text: "Find and connect with relevant buyers using advanced matching tools" },
    { image: Bg4, title: "Real-Time Communication", text: "Communicate directly with potential partners through built-in tools." },
    { image: Bg5, title: "Accessibility", text: "Enjoy a responsive design compatible with various devices and browsers." }
  ];

  return (
    <section className="bg-gray-100 h-full w-full px-6 sm:px-10 lg:px-20 py-10 flex flex-col items-center gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
     
        <div className="col-span-1 sm:col-span-2 lg:col-span-1 p-6">
          <h3 className="text-2xl font-bold text-blue-950">Key Benefits:</h3>
          <p className="text-base text-gray-600 mt-2">Our 2.5D virtual exhibition platform is here to revolutionize the way you connect with potential buyers</p>
        </div>
        
        {cardData.map((card, index) => (
          <div key={index} className="bg-white p-8 rounded-3xl shadow-3xl flex flex-col items-start gap-4">
            <img src={card.image} alt={card.title} className="w-16 h-16 object-cover" />
            <div className="mt-2">
              <h3 className="text-xl font-bold text-black">{card.title}</h3>
              <p className="text-base text-gray-600 mt-1">{card.text}</p>
            </div>
          </div>
        ))}
        
      </div>

      {/* Button */}
      <div className="relative z-10 mt-10 flex justify-center w-full">
        <button className="text-white bg-blue-950 hover:bg-blue-800 transition py-3 px-6 rounded-full text-lg font-medium shadow-lg lg:hover:underline">
         Get Started
        </button>
      </div>
    </section>
  );
}

export default Cards;
