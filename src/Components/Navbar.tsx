import { FiSearch } from "react-icons/fi";
import { BiChevronDown } from "react-icons/bi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState } from "react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [value, setValue] = useState("courses");
  const notificationCount = 2;

  const handleMenuToggle = () => setIsMenuOpen((prevState) => !prevState);
  const handleMenuItemClick = (item: string) => {
    setIsMenuOpen(false);
    setValue(item);
  };

  return (
    <nav className="flex justify-between">
      <div className="font-bold text-2xl sm:mx-2 md:mx-4">codedamn</div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center border py-1 px-2 rounded-lg relative">
          <FiSearch />
          <input
            type="text"
            placeholder="Search"
            className="mx-1 outline-none border-none"
          />
          <div className="relative">
            <button
              onClick={handleMenuToggle}
              className="py-1 px-2 text-gray-600 rounded bg-gray-100 text-sm flex items-center"
            >
              {value}
              <BiChevronDown />
            </button>
            {isMenuOpen && (
              <div className="absolute top-8 right-0 z-10 mt-2 p-2 bg-white border border-gray-200 rounded shadow-lg">
                {["courses", "projects", "experiences"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleMenuItemClick(item)}
                    className="block w-full p-1 text-gray-800 hover:bg-gray-100"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="relative flex items-center mx-2">
          <div className="flex items-center gap-1">
            <MdOutlineElectricBolt className="text-lg text-blue-700" />
            <span className="text-sm">{notificationCount}</span>
          </div>
          <IoNotificationsOutline className="ml-4 text-lg" />
          {notificationCount > 0 && (
            <div className="absolute -top-1 right-10 w-4 h-4 rounded-full bg-red-500 text-white flex justify-center items-center text-xs">
              {notificationCount}
            </div>
          )}
          <div className="ml-4 rounded-full overflow-hidden w-8 h-8 bg-gray-300" />
          <div className="absolute -top-1 -right-2 w-4 h-4 rounded-full bg-black text-white flex justify-center items-center text-xs">
            5
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
