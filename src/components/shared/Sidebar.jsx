import React from "react";
import {
  RiHome6Line,
  RiPercentLine,
  RiPieChartLine,
  RiMailLine,
  RiNotification3Line,
  RiSettings2Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";

function Sidebar(props) {

    const {showMenu} = props;
  return (
    <div className={`bg-zinc-900 fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0": "-left-full"}`}>
      <div>
        <ul className="pl-4">
          <li className="">
            <h1 className="text-2xl uppercase font-bold text-center my-5 text-white">
              Logo
            </h1>
          </li>
          <li className="bg-slate-900 p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-red-400 p-4  rounded-xl text-white flex justify-center"
            >
              <RiHome6Line className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-slate-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white p-4  rounded-xl text-red-500 flex justify-center transition-colors"
            >
              <RiPercentLine className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-slate-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white p-4  rounded-xl text-red-500 flex justify-center transition-colors"
            >
              <RiPieChartLine className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-slate-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white p-4  rounded-xl text-red-500 flex justify-center transition-colors"
            >
              <RiMailLine className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-slate-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white p-4  rounded-xl text-red-500 flex justify-center transition-colors"
            >
              <RiNotification3Line className="text-2xl " />
            </a>
          </li>
          <li className="hover:bg-slate-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white p-4  rounded-xl text-red-500 flex justify-center transition-colors"
            >
              <RiSettings2Line className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="hover:bg-slate-900 p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
            <a
              href="#"
              className="group-hover:bg-red-400 group-hover:text-white p-4 flex justify-center  rounded-xl text-red-500  transition-colors"
            >
              <RiLogoutBoxRLine className="text-2xl " />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
