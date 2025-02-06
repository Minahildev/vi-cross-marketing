import Elipse1 from "../../assets/Ellipse 1.svg";
import Group from "../../assets/Group.svg";

function Impact() {
  return (
    <section className="bg-white h-full w-full pl-5 sm:pl-10 px-5 sm:px-10 pt-5">
      <div className="absolute lg:pt-20">
        <img
          src={Group}
          alt="Group"
          className="h-1/2  pl-20 px-14"
        />
      </div>
      <div className="relative text-center">
        <div className="flex flex-col text-center lg:pt-20 inset-0">
          <h3 className="text-sm font-bold text-black">Our impact</h3>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-950">
            Our Measurable Results
          </h1>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:pt-20 pr-5 sm:pr-10 pl-5 sm:pl-10">
          {/* First Item */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex items-center justify-center">
              <img
                src={Elipse1}
                alt="Ellipse 1"
                className="h-48 sm:h-60 mb-4"
              />
              <div className="absolute text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-black">
                  5M+
                </h2>
                <h3 className="text-md sm:text-lg font-medium text-blue-950">
                  Participants served
                </h3>
              </div>
            </div>
          </div>

          {/* Second Item */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex items-center justify-center">
              <img
                src={Elipse1}
                alt="Ellipse 1"
                className="h-48 sm:h-60 mb-4"
              />
              <div className="absolute text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-black">
                  5K+
                </h2>
                <h3 className="text-md sm:text-lg font-medium text-blue-950">
                  Exhibition served
                </h3>
              </div>
            </div>
          </div>

          {/* Third Item */}
          <div className="flex flex-col items-center text-center">
            <div className="relative flex items-center justify-center">
              <img
                src={Elipse1}
                alt="Ellipse 1"
                className="h-48 sm:h-60 mb-4"
              />
              <div className="absolute text-center">
                <h2 className="text-4xl sm:text-5xl font-bold text-black">
                  5+
                </h2>
                <h3 className="text-md sm:text-lg font-medium text-blue-950">
                  Years in Industry
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
