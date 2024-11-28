import React, { useState, useEffect } from "react";
import plan from "../assets/plan.png";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Nav from "./Nav";
import ArriveAirport from "./template/ArriveAirport";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

function Home() {
  const [currentText, setCurrentText] = useState(0);
  const messages = [
    "Black Friday Super Splash!",
    "50% Off on All Local Flights!",
    "Valid Only for Today!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % messages.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div
      className="h-screen py-5 sm:py-0   sm:h-[80vh] flex flex-col bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${plan})` }}
    >
      {/* Top Bar */}
      <div className="h-screen pb-3 sm:pb-0 sm:h-[8vh] px-5 md:px-20 border-b border-[#F5F5F5] grid grid-cols-1 gap-4 sm:gap-0  sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center gap-3 text-[#F5F5F5] text-xs md:text-sm">
          <p>+234 2345678069</p>
          <p>letsbook@gmail.com</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <FacebookOutlinedIcon style={{ width: "15px" }} />
            </div>
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <LinkedInIcon style={{ width: "15px" }} />
            </div>
            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
              <InstagramIcon style={{ width: "15px" }} />
            </div>
          </div>
          <div className="border-l-[1px] px-3 flex items-center gap-2 text-[#F5F5F5] text-sm border-r-[1px]">
            <p>Log in</p>
            <p className="px-2 py-1 rounded-3xl border border-[#E0B100]">
              Sign Up
            </p>
          </div>
          <div className="flex items-center text-xs text-white">
            <p>Order Now</p>
            <KeyboardArrowDownIcon />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Nav />

      {/* Main Content */}
      <div className="grid mt-5 text-white px-5 md:px-20 grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Say Yes to The World
          </h1>
          <p className="text-sm md:text-base mb-4 font-light">
            Pulvinar rhoncus eget non vulputate varius ullamcorper enim arcu
            mauris. Pharetra augue amet sit cursus. Leo commodo neque neque
            praesent. Aliquet tincidunt maecenas elementum eu ipsum erat. Velit
            quisque morbi nisl accumsan auctor at at nec.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ArriveAirport
              title="Departure Airport"
              placeholder="Where are you now?"
              icone={<LocationOnIcon />}
            />
            <ArriveAirport
              title="Arrival Airport"
              placeholder="Where are you going?"
              icone={<LocationOnIcon />}
            />
            <ArriveAirport
              title="Date"
              placeholder="When are you leaving?"
              icone={<CalendarMonthIcon />}
            />
            <ArriveAirport
              title="Travellers"
              placeholder="Number of passengers?"
              icone={<AccountCircleIcon />}
            />
          </div>
        </div>

        {/* Right Section - Animated Text */}
        <div className="flex items-center justify-center text-center">
          <div className="text-2xl md:text-4xl font-bold text-[#E0B100] animate-pulse">
            {messages[currentText]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
