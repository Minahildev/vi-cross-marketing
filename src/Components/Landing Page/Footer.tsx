import logo from "../../assets/Logo.svg";
import Image3 from "../../assets/image -3.svg";
import Image4 from "../../assets/image -4.svg";
import Image5 from "../../assets/image -5.svg";
import Link from "../../assets/Link.svg";
import Link1 from "../../assets/Link1.svg";
import Link2 from "../../assets/Link2.svg";
import Link3 from "../../assets/Link3.svg";
import Container from "../../assets/Container.svg";
import Symbol from "../../assets/Symbol.svg"
import Location from "../../assets/location.svg"
import sms from "../../assets/sms.svg"

function Footer() {
  return (
    <section className="bg-black text-white w-full py-10 px-3 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <img src={logo} alt="Logo" className="filter invert" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Our Services</h2>
          <ul className="text-sm font-normal space-y-2">
            <li className="flex gap-2">
              <img src={Symbol} alt="" />Networking People</li>
            <li className="flex gap-2"> <img src={Symbol} alt="" />Conference Planning</li>
            <li className="flex gap-2"> <img src={Symbol} alt="" />Live Webinar</li>
            <li className="flex gap-2"><img src={Symbol} alt="" />Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">
            Our Location</h2>
          <h3 className="text-sm font-normal  flex gap-2 ">
          <img src={Location} alt="" className="h-4"/>Toronto, Canada</h3>
          <h2 className="text-xl font-semibold mt-4">Support</h2>
          <h3 className="text-sm font-normal flex gap-2">
          <img src={sms} alt="" className="h-4"/>support@vicross.com</h3>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Media</h2>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <img src={Image3} alt="Media" className="h-14" />
            <img src={Image4} alt="Media" className="h-14" />
            <img src={Image5} alt="Media" className="h-14" />
            <img src={Image5} alt="Media" className="h-14" />
            <img src={Image4} alt="Media" className="h-14" />
            <img src={Image3} alt="Media" className="h-14" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
        <div className="flex flex-col">
          <div>
           <h2>Follow Us</h2> </div>
<div className="flex pt-5 space-x-4">
<img src={Link} alt="" />
<img src={Link1} alt="" />
<img src={Link2} alt="" />
<img src={Link3} alt="" />
</div>
        </div>
        <div>
          <h2>Subscribe to Our Newsletter</h2>
          <form className="mt-3">
            <div className="relative">
              <input
                type="email"
                className="w-full pl-4 pr-[116px] py-3 rounded-full bg-gray-900 border border-gray-600 text-white"
                placeholder="Your Email Address"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border border-blue-400 text-white px-4 py-2 rounded-full"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col">
        <div>
          <h2>Payment</h2>
        </div> 
        <div className=" flex pt-5">
          <img src={Container} alt="" />

        </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10">
        <h1>&copy; {new Date() .getFullYear()} Vicross. All Rights Reserved.</h1>
      </div>
    </section>
  );
}

export default Footer;
