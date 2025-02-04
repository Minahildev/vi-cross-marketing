import Image from "../../assets/image.svg";

function Body() {
  return (
    <div className="bg-gray-200">
      <div className="relative max-w-full mx-auto">
        {/* Image: responsive full width */}
        <img
          className="h-full w-full object-cover"
          src={Image}
          alt="image description"
        />
        
        <div className="absolute inset-0 flex flex-col px-6 py-6 sm:px-10 md:px-12 lg:px-16">
          
         
          <h1 className="text-lg sm:text-3xl md:text-5xl lg:text-7xl pt-6 md:pt-32 lg:pt-40 font-sans font-semibold text-white text-left lg:text-left">
            2.5D Web-Based Virtual Exhibition Platform
          </h1>

    
          <button className="absolute bottom-5 md:bottom-16 lg:bottom-24 text-blue-800 bg-white lg:hover:bg-blue-200 lg:hover:underline block py-2 px-6 sm:px-8 md:px-10 lg:px-12 rounded-3xl lg:text-2xl mx-auto sm:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
