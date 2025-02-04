import Image2 from "../../assets/image-2.svg";

function Features() {
  return (
    <div className="h-full w-full pl-5 sm:pl-10 px-5 sm:px-10 ">
      <div className="flex flex-col text-center lg:pt-20 mb-5">
        <h3 className="text-sm font-bold text-blue-950">Features</h3>
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-950">
          Core Features
        </h1>
        <h4 className="text-sm sm:text-base lg:text-md font-normal text-center text-blue-950">
          The platform offers several core features to enhance the user
          experience and foster business connections. It provides a 2.5D virtual
          space, creating an immersive but accessible environment for product
          showcases and networking opportunities.
        </h4>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="text-left sm:text-center lg:text-right">
          <h2 className="lg:text-xl font-bold">2.5D Virtual Environment</h2>
          <p className="lg:text-base font-light">
            The platform will utilize 2.5D graphics to create an engaging and
            interactive virtual exhibition space.
          </p>
          
          <h2 className="lg:text-xl font-bold">Responsive User Interface</h2>
          <p className="lg:text-base font-light">
            Developed using React, the platform will offer a dynamic and
            responsive interface that adapts to different screen sizes and
            devices.
          </p>

          <h2 className="lg:text-xl font-bold">Exhibitor Booths</h2>
          <p className="lg:text-base font-light">
            Each exhibitor will have a customizable virtual booth where they can
            showcase their products, services, and brand.
          </p>

          <h2 className="lg:text-xl font-bold">Product Search & Filtering</h2>
          <p className="lg:text-base font-light">
            Each exhibitor will have a customizable virtual booth where they can
            showcase their products, services, and brand.
          </p>

          <h2 className="lg:text-xl font-bold">Presentation & Webinar Rooms</h2>
          <p className="lg:text-base font-light">
            Sellers will have the ability to host live presentations, product
            launches, and webinars within the platform.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center sm:col-span-2 lg:col-span-1">
          <img
            src={Image2}
            alt="logo"
            className="h-auto max-w-full object-contain sm:h-80  lg:pt-28"
          />
        </div>

        <div className="text-left sm:text-center lg:text-left pb-5">
          <h2 className="lg:text-xl font-bold">Business Matching & Networking</h2>
          <p className="lg:text-base font-light">
            The platform will feature AI-driven business matching services that
            connect buyers with the most relevant exhibitors based on their
            interests and needs.
          </p>

          <h2 className="lg:text-xl font-bold">Content Management System (CMS)</h2>
          <p className="lg:text-base font-light">
            An integrated CMS will allow exhibitors and organizers to easily
            manage their content, including updating booth materials, scheduling
            presentations, and managing attendee lists.
          </p>

          <h2 className="lg:text-xl font-bold">Digital Invitations and Engagement Tools</h2>
          <p className="lg:text-base font-light">
            The platform will support the creation and distribution of digital
            invitations to potential buyers.
          </p>

          <h2 className="lg:text-xl font-bold">Analytics and Reporting</h2>
          <p className="lg:text-base font-light">
            The platform will include analytics tools that provide exhibitors
            and event organizers with insights into attendee behavior, booth
            visits, engagement levels, and other key metrics.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
