import { NavLink } from "react-router-dom";

const NavBarElements = () => {
  return (
    <ul className="flex gap-5">
      <li className="rounded-md  py-2 px-9 m-1 overflow-hidden relative group cursor-pointer  font-medium border-black/35 text-black">
        <NavLink to={"/"}>
          <span className="absolute   w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black  top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-300 group-hover:text-white ease">
            Home
          </span>
        </NavLink>
      </li>

      <li className="rounded-md px-6 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium border-black/35 text-black">
        <NavLink to={"/favorites"}>
          <span className="absolute   w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-black top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span className="relative text-black transition duration-300 group-hover:text-white ease">
            Favorites
          </span>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBarElements;
