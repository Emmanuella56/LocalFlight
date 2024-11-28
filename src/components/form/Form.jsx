import React from "react";
import ArriveAirport from "../template/ArriveAirport";
import EmailIcon from "@mui/icons-material/Email";

function Form() {
  return (
    <div className="bg-gradient-to-r from-[#E0B100] to-[#c8a731] mx-auto my-8 w-[90%] md:w-[50%] h-auto p-8 flex flex-col items-center justify-center rounded-2xl shadow-lg">
      <div className="text-center space-y-4">
        {/* Heading */}
        <div>
          <h2 className="text-3xl font-bold text-white">Subscribe</h2>
          <p className="text-lg font-medium text-white">
            Get Notified About Latest Deals & Offers
          </p>
        </div>

        {/* Description */}
        <div className="text-white text-sm leading-relaxed">
          <p>
            Stay updated with the best offers tailored just for you. Don't miss
            out on exclusive deals that make a difference.
          </p>
          <p>Subscribe now to receive updates straight to your inbox.</p>
        </div>
      </div>

      {/* Input Field */}
      <div className="w-full md:w-[70%] mt-6">
        <div className="flex items-center bg-white rounded-xl px-4 py-2 shadow-sm">
          <EmailIcon style={{ color: "gray" }} className="mr-2" />
          <ArriveAirport
            icone={null}
            placeholder="Enter your email address"
            className="w-full outline-none bg-transparent text-gray-700"
          />
        </div>
        <button className="mt-4 bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition-all duration-300 w-full">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default Form;
