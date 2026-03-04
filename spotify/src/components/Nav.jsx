import DropDown from "./DropDown";
import Home from "../assets/home.svg";
import Search from "../assets/search.svg";
import Albums from "../assets/albums.svg";
import user from "../assets/user.png";
import cover1 from "../assets/cover1.webp";
import cover2 from "../assets/cover2.jpg";
import cover3 from "../assets/cover3.jpg";
import cover4 from "../assets/cover4.png";
import cover5 from "../assets/cover5.jpg";
import cover6 from "../assets/cover6.jpg";
import cover7 from "../assets/cover7.png";
import cover8 from "../assets/cover8.jpg";

import { useState } from "react";

const Nav = () => {
  const dropDownData = [
    {
      id: 1,
      title: "There Is None Like You",
      artist: "Michael W. Smith",
      type: "Song",
      cover: cover1,
    },
    {
      id: 2,
      title: "The Birth of Revival",
      artist: "Dunsin Oyekan",
      type: "Album",
      cover: cover2,
    },
    {
      id: 3,
      title: "Mercy",
      artist: "Dunsin Oyekan",
      type: "Song",
      cover: cover3,
    },
    {
      id: 4,
      title: "Destiny Hour",
      artist: "Pastor Benjamin Ansah",
      type: "Album",
      cover: cover4,
    },
    {
      id: 5,
      title: "Father Of Spirits",
      artist: "Theophilus Sunday",
      type: "Song",
      cover: cover5,
    },

    {
      id: 6,
      title: "E Ti Tobi to (Live)",
      artist: "EmmaOMG",
      type: "Song",
      cover: cover6,
    },
    {
      id: 7,
      title: "Crazy Praise",
      artist: " PBA",
      type: "Concert",
      cover: cover7,
    },
    {
      id: 8,
      title: "The Feast: Worship Medley Vol. 3",
      artist: " Suminsola Agbebi",
      type: "Song",
      cover: cover8,
    },
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <nav className="bg-black px-6 py-3 h-auto w-full flex justify-between items-center">
      {/* Spotify Logo */}
      <a
        href="https://open.spotify.com/ "
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-spotify text-white text-4xl cursor-pointer"></i>
      </a>

      {/* input and home icon */}
      <div className="flex space-x-4 items-center">
        <div className="bg-white/20 p-2 rounded-full">
          <img src={Home} alt="Home" className="w-6 cursor-pointer " />
        </div>

        <div className="relative">
          <input
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            type="text"
            className="border border-white/20 bg-[#1f1f1f] py-3 px-12 w-sm md:w-md lg:w-lg xl:w-xl  rounded-full text-white placeholder:text-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
            placeholder="What do you want to play?"
          />

          <img
            src={Search}
            alt="Search"
            className="w-6  absolute left-3 top-2.5"
          />

          <img
            src={Albums}
            alt="Albums"
            className="w-6  absolute right-3 top-2.5"
          />

          {/* dropdown */}
          <div
            className={`absolute bg-[#1f1f1f] w-full h-92 overflow-y-auto  mt-3 rounded-md text-white p-4 shadow-xl scrollbar-hide ${isDropdownOpen ? "opacity-100 -translate-y-0 duration-300" : "opacity-0 pointer-events-none translate-y-2 duration-300"}`}
          >
            <p className="font-semibold">Recent Searches</p>
            {dropDownData.map((item) => (
              <DropDown
                key={item.id}
                title={item.title}
                artist={item.artist}
                type={item.type}
                cover={item.cover}
              />
            ))}
          </div>
          {/* end of dropdown */}
        </div>
      </div>

      {/* notification and user profile */}
      <div className="flex space-x-4 items-center">
        <div className="bg-white/20 p-2 rounded-full">
          <i className="fa-solid fa-bell text-white cursor-pointer"></i>
        </div>
        <div
          onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
          className=" rounded-full relative"
        >
          <img
            src={user}
            alt="User"
            className="size-8 rounded-full cursor-pointer"
          />
          {/* user status    */}

          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
          {/* user dropdown */}
          <div
            className={`absolute right-0 mt-2 w-48 bg-[#1f1f1f] rounded-md shadow-lg py-2  ${isUserDropdownOpen ? "opacity-100 translate-y-0 duration-300" : "opacity-0 pointer-events-none translate-y-2 duration-300"}`}
          >
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-700"
            >
              Account
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-700"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-700"
            >
              Recents
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-700"
            >
              Support
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-700"
            >
              Download
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-700"
            >
              Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-white hover:bg-gray-700"
            >
              Log out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
