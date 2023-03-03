import { useState } from "react";
import {
  RiMenu3Fill,
  RiUser3Line,
  RiAddLine,
  RiPieChartLine,
  RiCloseLine,
  RiSearchLine
} from "react-icons/ri";

//Components

import Sidebar from "./components/shared/Sidebar";

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

      <main className="lg:pl-28 grid grid-cols-1 lg:grid-cols-8">
        <div className="lg:col-span-6 ">
          <header className="p-4">
            <div>
              <h1 className="text-2xl text-gray-300">Titulo</h1>
              <p className="text-gray-500">Fecha julio 2022</p>
            </div>
            <form action="">
              <div className="w-full relative">
                <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2"/>
                <input type="text" className="bg-white w-full py-2 pl-8 pr-4"/>
              </div>
            </form>
          </header>
        </div>
        <div className="lg:col-span-2  fixed lg:static">Carrito</div>
      </main>
    </div>
  );
}

export default App;
