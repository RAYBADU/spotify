import React from "react";

const DropDown = ({ title, artist, type, cover }) => {
  return (
    <div className="flex  space-x-4 mt-4 items-center cursor-pointer hover:bg-white/10 p-2 rounded-md">
      <img src={cover} alt="Cover" className="w-15  object-cover rounded-md" />
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-400/70 text-sm">
          {type} <span className="font-extrabold"> . </span> {artist}
        </p>
      </div>
    </div>
  );
};

export default DropDown;
