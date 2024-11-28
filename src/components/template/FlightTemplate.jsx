import React from "react";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

function FlightTemplate({ titile1, title2, span, icone, image }) {
  return (
    <div className="w-[40vw] sm:w-[20vw] md:w-[13vw]">
      {/* Image Container */}
      <div
        className="h-[25vh] sm:h-[30vh] md:h-[28vh] w-full bg-center rounded-2xl bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Text and Icon Section */}
      <div className="flex my-3 items-center justify-between">
        <div>
          <p className="text-[12px] sm:text-[14px] md:text-[16px]">
            {titile1}
            <span className="text-[#E0B100] font-medium"> {span}</span>
          </p>
          <p className="text-[10px] sm:text-[12px] md:text-[14px]">{title2}</p>
        </div>

        {/* Icon Section */}
        <div>
          <FlightTakeoffIcon
            style={{
              color: "#E0B100",
              border: "1px solid #E0B100",
              padding: "3px",
              borderRadius: "100%",
            }}
            className="text-[16px] sm:text-[18px] md:text-[20px]"
          />
        </div>
      </div>
    </div>
  );
}

export default FlightTemplate;
