import OnlinePayment from "../../assets/OnlinePayment.svg";

function Statement() {
  return (
    <section className="h-full w-full px-5 sm:px-10 py-10 flex flex-col lg:grid lg:grid-cols-2 items-center gap-10 lg:pl-12">
      <div className="text-center lg:text-left lg:pt-20 max-w-4xl">
        <h3 className="text-sm font-bold text-blue-950">About Us</h3>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-950">
          Mission Statement
        </h1>
        <h4 className="text-sm sm:text-base lg:text-lg font-normal text-blue-950 mt-4">
          Our mission is to transform the virtual event experience by providing an innovative 2.5D platform that seamlessly blends interactivity with accessibility. We aim to empower businesses, creators, and organizations to host dynamic virtual exhibitions that captivate audiences and foster meaningful engagement.
        </h4>
      </div>
      <div className="flex justify-center w-full max-w-lg">
        <img src={OnlinePayment} alt="Mission Statement" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
}

export default Statement;
