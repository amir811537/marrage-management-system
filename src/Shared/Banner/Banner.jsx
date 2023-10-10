import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
      >
        <div className="relative">
          <img
            src="https://i.ibb.co/zbSsSM5/carosul3.jpg"
            alt="Image 1"
            className="w-10/12 max-w-screen-xl mx-auto"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-50">
            <span className="text-5xl font-bold">
              Welcoming Wedding Management System
            </span>
          </p>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/2Yxxzt1/carosol1.jpg"
            alt="Image 2"
            className="w-10/12 max-w-screen-xl mx-auto"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-50">
            {" "}
            <span className="text-5xl font-bold ">
              {" "}
              Management is your passion <br /> don't thought about marriage
            </span>
          </p>
        </div>
        <div className="relative">
          <img
            src="https://i.ibb.co/WkpWFvJ/joshuva-daniel-U4-OS-Gimd-XA-unsplash.jpg"
            alt="Image 3"
            className="w-10/12 max-w-screen-xl mx-auto"
          />
          <p className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-50">
            <span className="text-5xl font-bold ">
              Wedding planning software for <br /> event management
              professionals
            </span>
          </p>
        </div>
      </Carousel>
    </div>

  );
};

export default Banner;
