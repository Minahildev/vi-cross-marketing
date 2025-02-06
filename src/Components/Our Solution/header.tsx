import himage from "../../assets/himage.svg";

function header() {
  return (
    <div className="bg-gray-200">
      <div className="relative max-w-full mx-auto">
        <img
          className="h-full w-full object-cover"
          src={himage}
          alt="image description"
        />
        <div className="absolute inset-0 flex flex-col items-center px-10 py-5 sm:px-12 md:px-16 lg:px-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl pt-6 md:pt-32 lg:pt-40 font-sans font-semibold text-white text-left lg:text-left">
            Our Solutions
          </h1>
          <h2 className="text-md sm:text-lg lg:pt-3 lg:pb-16 pb-20 text-white">
          1st Canadian 2.5D Virtual Exhibition platform
          </h2>

        
        </div>
      </div>
    </div>
  );
}

export default header;

