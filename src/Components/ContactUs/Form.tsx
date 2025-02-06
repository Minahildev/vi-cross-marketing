import PhoneImg from "../../assets/phone.svg";
import envelope from "../../assets/envelope.svg";
import locationdot from "../../assets/locationdot.svg";
import MapImage from "../../assets/map.svg";
import bg from "../../assets/bg.svg";

function ContactForm() {
    return (


        <section >
            <div className="bg-gray-100 h-full w-full px-6 sm:px-10 lg:px-20 py-10">


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
                    {/* Left Column */}
                    <div className="flex flex-col justify-between  text-black p-6 rounded-xl">
                        <h3 className="text-xl font-bold">Contact Us</h3>
                        <h1 className="text-3xl font-semibold">Get in Touch</h1>
                        <p className="text-base mt-4">
                            Our team is here to help you create an
                            engaging, immersive experience tailored to your
                            needs. Let's bring your vision to life!
                        </p>
                        <div className="mt-6">
                            <div className="flex items-center gap-2">
                                <img src={bg} alt="" className="relative h-9 w-9 -left-2" />
                                <img src={PhoneImg} alt="Phone Icon" className="w-5 h-5 absolute object-cover" />
                                <span className="text-lg font-medium">Call Us</span>

                            </div>
                            <p className="text-base pl-9">+1-206-156 2849</p>
                            <div className="mt-6">
                                <div className="flex items-center gap-2">
                                    <img src={bg} alt="" className="relative h-9 w-9 -left-2" />

                                    <img src={envelope} alt="mail Icon" className="absolute w-5 h-5 object-cover" />
                                    <p className="text-lg font-medium">Mail Us</p>
                                </div>

                                <p className="text-base  pl-9">info@vicross.ca</p>
                            </div>
                            <div className="mt-6">
                                <div className="flex items-center gap-2">
                                    <img src={bg} alt="" className="relative h-9 w-9 -left-2" />
                                    <img src={locationdot} alt=" location Icon" className="absolute w-5 h-5 object-cover" />
                                    <p className="text-lg font-medium">Visit Us</p>
                                </div>
                                <p className="text-base  pl-9">123 Maple Street Toronto, ON M5J 2N8, Canada</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="flex flex-col gap-6 ">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold text-black mb-6">Send Us a Message</h2>
                            <form>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 ">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                                            placeholder="Your email"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                                            placeholder="Your number"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Subject</label>
                                        <input
                                            type="text"
                                            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                                            placeholder="Enter subject"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-lg"
                                       
                                        placeholder="Enter your message"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-950 text-white py-3 rounded-full text-lg font-medium shadow-lg hover:bg-blue-800 transition"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="h-full w-full object-cover">
                    <img src={MapImage} alt="" />
                </div>

            </div>

        </section>
    );
}

export default ContactForm;
