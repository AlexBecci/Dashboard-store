import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearchLine,
  RiArrowDownSLine,
} from "react-icons/ri";

//Components

import Sidebar from "./components/shared/Sidebar";
import plato1 from "./img/plato2.png";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="bg-slate-900 w-full min-h-screen">
      <Sidebar showMenu={showMenu} />
      {/* Menu movil */}
      <nav className="bg-zinc-900 lg:hidden fixed w-full bottom-0 left-0 text-3xl text-amber-50 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <button className="p-2">
          <RiUser3Line />
        </button>
        <button className="p-2">
          <RiAddLine />
        </button>
        <button className="p-2">
          <RiPieChartLine />
        </button>
        <button onClick={toogleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>

      <main className="lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-20">
        <div className="lg:col-span-6 md:p-8 ">
          {/* HEADER */}
          <header className="">
            {/* TITULO Y BUSCADOR */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <div>
                <h1 className="text-2xl text-gray-300">Titulo</h1>
                <p className="text-gray-500">Fecha julio 2022</p>
              </div>
              <form action="">
                <div className="w-full relative">
                  <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-50" />
                  <input
                    placeholder="Search"
                    type="text"
                    className="bg-zinc-900 w-full py-2 pl-10 pr-4 rounded-lg text-gray-300 outline-none"
                  />
                </div>
              </form>
            </div>
            {/* TABS */}
            <nav className="text-gray-300 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
              <a
                className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-red-300 before:left-0 before:rounded-full before:-bottom-[2px] text-red-300"
                href="#"
              >
                Hot dishes
              </a>
              <a className="  py-2 pr-4" href="#">
                Cold dishes
              </a>
              <a className=" py-2 pr-4" href="#">
                Soup
              </a>
              <a className=" py-2" href="#">
                Grill
              </a>
            </nav>
          </header>
          {/* Title content */}
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-xl text-gray-300 ">Choose dishes</h2>
            <button className="flex items-center gap-4 text-gray-300 bg-zinc-900 py-2 px-4 rounded-lg">
              <RiArrowDownSLine /> Dine in
            </button>
          </div>
          {/* Content */}
          <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {/* CARD */}
            <div className="bg-zinc-900 p-8 rounded-xl flex flex-col items-center gap-3 text-center text-gray-300">
              <img
                src={plato1}
                alt="comida"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned saefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* CARD */}
            <div className="bg-zinc-900 p-8 rounded-xl flex flex-col items-center gap-3 text-center text-gray-300">
              <img
                src={plato1}
                alt="comida"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned saefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* CARD */}
            <div className="bg-zinc-900 p-8 rounded-xl flex flex-col items-center gap-3 text-center text-gray-300">
              <img
                src={plato1}
                alt="comida"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned saefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* CARD */}
            <div className="bg-zinc-900 p-8 rounded-xl flex flex-col items-center gap-3 text-center text-gray-300">
              <img
                src={plato1}
                alt="comida"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned saefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* CARD */}
            <div className="bg-zinc-900 p-8 rounded-xl flex flex-col items-center gap-3 text-center text-gray-300">
              <img
                src={plato1}
                alt="comida"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned saefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
            {/* CARD */}
            <div className="bg-zinc-900 p-8 rounded-xl flex flex-col items-center gap-3 text-center text-gray-300">
              <img
                src={plato1}
                alt="comida"
                className="w-40 h-40 object-cover -mt-20 shadow-2xl rounded-full"
              />
              <p>Speacy seasoned saefood nodles</p>
              <span className="text-gray-400">$2.29</span>
              <p className="text-gray-600">20 Bowls available</p>
            </div>
          </div>
        </div>
        <div className=" bg-zinc-900 lg:col-span-2  fixed lg:static right-0 top-0 w-full h-full">
          {/* ORders */}

          <div className="relative pt-16 text-gray-300 p-8">
            <RiCloseLine className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-slate-900 rounded-full text-xl" />
            <h1 className="text-2xl my-4 ">Orders #151263</h1>
            {/* pill */}
            <div className="flex items-center gap-4 flex-wrap mb-8">
              <button className="bg-red-300 text-white py-2 px-4 rounded-xl">
                Dine In
              </button>
              <button className="border-gray-500 border text-red-300 py-2 px-4 rounded-xl">
                To Go
              </button>
              <button className="border-gray-500 border text-red-300 py-2 px-4 rounded-xl">
                Delivery
              </button>
            </div>
            <div>{/* CARD */}</div>
            <div>
              <div className="grid grid-cols-6 mb-4 p-4">
                <h5 className="col-span-4">Item</h5>
                <h5 className="">Qty</h5>
                <h5>Price</h5>
              </div>
              {/* Product */}
              <div className="bg-slate-900 p-4 rounded-xl">
                <div className=" grid grid-cols-6">
                  {/* DESCRIPTION product */}
                  <div className="flex items-center gap-3 col-span-4">
                    <img
                      src={plato1}
                      alt="comida"
                      className="w-10 h-10 object-cover"
                    />
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  {/* qyt */}
                  <div className="text-center">
                    <span>2</span>
                  </div>
                  {/* price */}
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                {/* Note */}
                <div className="grid grid-cols-6">
                  <form action="" className="col-span-4">
                    <input type='text' className="bg-zinc-900"/>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
