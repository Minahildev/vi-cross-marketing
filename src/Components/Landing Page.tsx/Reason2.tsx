import Box from "../../assets/box.svg";
import EclipseCircle from "../../assets/Ellipse Circle.svg";
import People from "../../assets/people.svg";
import Frame from "../../assets/frame.svg";

function Reasons2() {
  return (
    <section className="bg-white pb-5 h-full w-full px-5 sm:px-10 lg:pt-20">
      <div className="flex flex-col text-center lg:px-60 ">
        <h3 className="text-sm font-bold text-blue-950">Why Choose Us?</h3>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold lg:pt-3 text-blue-950">Why Choose VI Cross?</h1>
        <h4 className="text-md sm:text-lg lg:pt-3 lg:pb-16 pb-20 text-blue-950">
          We help companies of all sizes host incredible custom events with an easy-to-use platform with complimentary project management.
        </h4>
      </div>
      
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 sm:px-10 sm:pt-20 lg:pt-5">
        {[ 
          {
            img: Box,
            title: "Enhance Cross Border Trade",
            desc: "By providing a dedicated virtual space for Canadian exporters to connect with potential buyers in the Asia-Pacific region."
          },
          {
            img: People,
            title: "Engaging User Experience",
            desc: "Through the use of 2.5D graphics, the platform will deliver a visually appealing environment that balances immersion."
          },
          {
            img: Frame,
            title: "Multi Device Support",
            desc: "By building the platform with React, it will ensure responsiveness and compatibility across various devices and browsers."
          }
        ].map((item, index) => (
          <div key={index} className="bg-slate-200 p-5 sm:p-10 border-2 rounded-lg text-center flex flex-col items-center relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
              <img src={EclipseCircle} alt="background" className="h-20 sm:h-28 relative" />
              <img src={item.img} alt={item.title} className="h-16 sm:h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <div className="relative mt-16">
              <h2 className="lg:text-2xl font-bold pb-5">{item.title}</h2>
              <p className="lg:text-lg font-light">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reasons2;

