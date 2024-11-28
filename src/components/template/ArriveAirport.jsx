import React from 'react'

function ArriveAirport({ title, icone, placeholder }) {
  return (
    <div className=" mb-2 mt-3  text-[#F5F5F5]  ">
      <p className="mb-2 text-[11px]">{title}</p>
      <div className="flex mb-1 items-center gap-2">
        <div className=''>{icone}</div>
        <input
          className="border-none text-[10px] bg-transparent outline-none  "
          type="text"
          placeholder={placeholder}
        />
      </div>
      <hr className="w-[60%]" />
    </div>
  );
}

export default ArriveAirport
