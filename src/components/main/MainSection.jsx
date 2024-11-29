import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import FlightTemplate from "../template/FlightTemplate";

function MainSection() {
  return (
    <div className="px-5 md:px-20 py-10 bg-[#f9f9f9]">
      {/* Section Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-5 md:gap-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#222]">
            Top Local Destinations
          </h2>
          <div className="text-sm md:text-base text-[#555]">
            <p className="mb-2">
              Dui in orci fermentum a. Maecenas nunc id ut auctor curabitur.
            </p>
            <p className="mb-2">
              Pellentesque id et tristique. Pellentesque et a nisl aliquam.
            </p>
            <p className="mb-4">
              Nam velit duis in mauris arcu vivamus amet turpis in. In bibendum
              placerat quam ullamcorper accumsan felis. Velit vitae pellentesque
              sagittis et consequat sit donec. Donec aenean vivamus ullamcorper
              urna aliquet faucibus lacus aliquet.
            </p>
          </div>
          <button className="bg-[#E0B100] w-full sm:w-[150px]  text-white text-xs md:text-sm py-2 px-6 rounded-3xl hover:bg-[#C9A100] transition-colors duration-300">
            Discover More
          </button>
        </div>

        {/* Right Section: Destinations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5 md:gap-6">
          <div>
            <FlightTemplate
              image={image1}
              titile1="Nigeria"
              span="Lagos"
              title2="Lagos State"
            />
          </div>
          <div>
            <FlightTemplate
              image={image2}
              titile1="Nigeria"
              span="Abuja"
              title2="F.C.T"
            />
          </div>
          <div>
            <FlightTemplate
              image={image3}
              titile1="Nigeria"
              span="Lagos"
              title2="Lagos State"
            />
          </div>
          <div>
            <FlightTemplate
              image={image4}
              titile1="Nigeria"
              span="Port Harcourt"
              title2="Rivers State"
            />
          </div>
          <div>
            <FlightTemplate
              image={image5}
              titile1="Nigeria"
              span="Calabar"
              title2="Cross-River State"
            />
          </div>
          <div>
            <FlightTemplate
              image={image6}
              titile1="Nigeria"
              span="Kaduna"
              title2="Kaduna State"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
