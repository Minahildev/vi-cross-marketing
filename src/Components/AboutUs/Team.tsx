import Group from "../../assets/Group.svg";
import Mask from "../../assets/Mask.svg";
import Mask1 from "../../assets/Mask1.svg";
import Mask2 from "../../assets/Mask2.svg";
import Mask3 from "../../assets/Mask3.svg";

function Team() {
    return (
        <section className="relative bg-white min-h-screen w-full px-5 sm:px-10 pt-5 flex flex-col items-center text-center">
            {/* Background Group Image */}
            <div className="absolute inset-0 flex justify-center">
                <img src={Group} alt="Group" className="w-full max-w-5xl opacity-30" />
            </div>
            
            {/* Section Title */}
            <div className="relative z-10 mt-10 lg:mt-20">
                <h3 className="text-sm font-bold text-black">Our Team</h3>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-950">
                    Expert Team
                </h1>
            </div>
            
            {/* Team Images and Names */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-16 text-center">
                <div className="flex flex-col items-center">
                    <img src={Mask} alt="Eugene Wells" className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full object-cover shadow-lg" />
                    <h2 className="text-lg font-semibold mt-2">Eugene Wells</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Mask1} alt="Donna Howard" className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full object-cover shadow-lg" />
                    <h2 className="text-lg font-semibold mt-2">Donna Howard</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Mask2} alt="Donald Henderson" className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full object-cover shadow-lg" />
                    <h2 className="text-lg font-semibold mt-2">Donald Henderson</h2>
                </div>
                <div className="flex flex-col items-center">
                    <img src={Mask3} alt="Elizabeth Walker" className="h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 rounded-full object-cover shadow-lg" />
                    <h2 className="text-lg font-semibold mt-2">Elizabeth Walker</h2>
                </div>
            </div>
            
            {/* Button */}
            <div className="relative z-10 mt-10">
                <button className="text-white bg-blue-900 hover:bg-blue-800 transition py-3 px-6 rounded-full text-lg font-medium shadow-lg lg:hover:underline">
                    View All Team
                </button>
            </div>
        </section>
    );
}

export default Team;