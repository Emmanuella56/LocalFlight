import React from "react";

function TicketPurchase() {
  return (
    <div className="bg-gray-100 w-[90%] md:w-[70%] mx-auto my-10 p-8 rounded-2xl shadow-lg">
      {/* Promotion Banner */}
      <div className="bg-black text-white text-center py-4 rounded-lg mb-6">
        <h2 className="text-xl font-bold uppercase">
          Black Friday Super Splash!
        </h2>
        <p className="text-sm mt-2">
          Enjoy **50% Off** on All Local Flights! 🎉 <br />
          <span className="font-medium">Valid Only for Today!</span>
        </p>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Purchase Your Ticket
      </h2>

      {/* Form */}
      <div className="space-y-6">
        {/* Departure and Arrival */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600">
              Departure
            </label>
            <input
              type="text"
              placeholder="Enter departure city"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg  outline-none"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <label className="block text-sm font-medium text-gray-600">
              Arrival
            </label>
            <input
              type="text"
              placeholder="Enter arrival city"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg  outline-none"
            />
          </div>
        </div>

        {/* Travel Date */}
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600">
              Travel Date
            </label>
            <input
              type="date"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg   outline-none"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            <label className="block text-sm font-medium text-gray-600">
              Number of Passengers
            </label>
            <input
              type="number"
              placeholder="Enter passengers"
              className="w-full mt-2 p-3 border border-gray-300 rounded-lg  outline-none"
            />
          </div>
        </div>

        {/* Travel Class */}
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Travel Class
          </label>
          <select className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 outline-none">
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>

        {/* Buy Button */}
        <button className="w-full mt-6 py-3 bg-[#E0B100] text-white font-bold rounded-lg hover:bg-yellow-600 transition-all duration-300">
          Buy Ticket
        </button>
      </div>
    </div>
  );
}

export default TicketPurchase;
