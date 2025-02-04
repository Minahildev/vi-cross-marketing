import Dpimage from "../../assets/Dpimage.svg";

function Description() {
  return (
    <section className="bg-gray-100 flex justify-center">
      <div className="bg-black rounded-b-3xl px-6 sm:px-10 lg:px-20 py-10 flex flex-col lg:flex-row items-center gap-10 mx-20 max-w-6xl">
        <div className="text-center lg:text-left lg:pt-10 max-w-2xl">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Enhance Your Business with Our 2.5D Virtual Exhibition Platform
          </h1>
          <h4 className="text-sm sm:text-base lg:text-lg font-normal text-white mt-4">
            Are you a Canadian supplier looking to expand your reach into the dynamic Asia-Pacific market? Our innovative platform bridges the gap between Canadian suppliers and Asia-Pacific buyers, offering an immersive and engaging experience. With advanced features like business matching, real-time communication, and a visually appealing 2.5D environment, our platform is designed to facilitate cross-border trade and drive business growth.
          </h4>
        </div>
        <div className="flex justify-center w-full max-w-md">
          <img src={Dpimage} alt="Mission Statement" className="w-full h-auto object-cover" />
        </div>
      </div>
    </section>
  );
}

export default Description;