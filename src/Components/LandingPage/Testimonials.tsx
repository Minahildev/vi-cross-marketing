import Msgid1 from "../../assets/Ellipse msg1.svg";
import Msgid2 from "../../assets/Ellipse msg2.svg";
import Msgid3 from "../../assets/Ellipse msg3.svg";
import GQ from "../../assets/GQ.svg";

function Testimonial() {
  return (
    <section className="bg-white text-black w-full px-5 md:px-10 lg:px-20 py-10">
      {/* Section Heading */}
      <div className="flex flex-col text-center">
        <h3 className="text-sm font-bold text-blue-950">TESTIMONIALS</h3>
        <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mt-2">
          What People Say About Us
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {/* Testimonial Card 1 */}
        <div className="bg-slate-200 border rounded-lg p-6">
          <p className="text-md font-light text-left pb-6">
            The 2.5D virtual exhibition platform exceeded our expectations
            with its interactive, yet easy-to-use interface. Visitors loved
            exploring the customized booths and engaging with our content
            seamlessly.
          </p>
          <div className="flex items-center gap-4">
            <img src={Msgid2} alt="Sarah Jack" className="w-12 h-12" />
            <div>
              <h3 className="font-semibold">Sarah Jack</h3>
              <h4 className="text-sm text-gray-600">TV Model</h4>
            </div>
            <img src={GQ} alt="Quote" className="ml-auto w-8 h-8" />
          </div>
        </div>

        {/* Testimonial Card 2 */}
        <div className="bg-slate-200 border rounded-lg p-6">
          <p className="text-md font-light text-left pb-6">
            The platform offered the perfect blend of simplicity and interactivity.
            Our audience was fully immersed, and the ability to explore exhibits in a
            virtual space added a unique dimension to the experience.
          </p>
          <div className="flex items-center gap-4">
            <img src={Msgid1} alt="John Smith" className="w-12 h-12" />
            <div>
              <h3 className="font-semibold">John Smith</h3>
              <h4 className="text-sm text-gray-600">Developer</h4>
            </div>
            <img src={GQ} alt="Quote" className="ml-auto w-8 h-8" />
          </div>
        </div>

        {/* Testimonial Card 3 */}
        <div className="bg-slate-200 border rounded-lg p-6">
          <p className="text-md font-light text-left pb-6">
            Setting up the exhibition was a breeze, and the response from
            attendees was fantastic. The platform made it easy to showcase our
            work while keeping visitors engaged.
          </p>
          <div className="flex items-center gap-4">
            <img src={Msgid3} alt="Ramos Leo" className="w-12 h-12" />
            <div>
              <h3 className="font-semibold">Ramos Leo</h3>
              <h4 className="text-sm text-gray-600">Designer</h4>
            </div>
            <img src={GQ} alt="Quote" className="ml-auto w-8 h-8" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
