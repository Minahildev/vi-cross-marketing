import Aboutimg1 from "../../assets/Aboutimg1.svg";

function Hsection() {
  return (
    <section className="h-full w-full bg-gray-200 px-5 sm:px-10 py-10 flex flex-col items-center lg:pl-12">
      <div className="text-center lg:pt-20 mb-5 max-w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-950">
          Core Features
        </h1>
        <h4 className="text-sm sm:text-base lg:text-lg font-normal text-blue-950 mt-4">
          The platform offers several core features to enhance the user
          experience and foster business connections. It provides a 2.5D virtual
          space, creating an immersive but accessible environment for product
          showcases and networking opportunities.
        </h4>
      </div>
      <div className="flex justify-center w-full max-w-3xl mt-6">
        <img src={Aboutimg1} alt="Core Features" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
}

export default Hsection;