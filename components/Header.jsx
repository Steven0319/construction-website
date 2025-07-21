"use client";

import { RiArrowRightUpLine } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const links = [
  { name: "home", path: "home" },
  { name: "about", path: "about" },
  { name: "services", path: "services" },
  { name: "projects", path: "projects" },
  { name: "contact", path: "contact" },
];

const Header = () => {
  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />
          {/* Navbar & Button */}
          <nav className="hidden xl:flex items-center gap-12">
            <ul className="flex gap-10 text-white">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] relative after:content-['/'] after:ml-4 last:after:content-none after:text-accent"
                >
                  <ScrollLink
                    to={link.path}
                    smooth
                    spy
                    className="cursor-pointer hover:text-accent transition-all"
                    activeClass="text-accent"
                  >
                    {link.name}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="w-[200px] h-[54px] flex items-center justify-between group border-2 border-white rounded-full bg-white text-primary hover:bg-accent hover:border-accent transition-all duration-500 overflow-hidden">
              <div className="flex-1 text-center tracking-[1.2px] font-bold text-primary text-sm uppercase group-hover:text-white transition-all duration-500">
                Get a quote
              </div>
              <div className="w-11 h-11 bg-primary group-hover:bg-white flex items-center justify-center rounded-full transition-all duration-500">
                <RiArrowRightUpLine className="text-white group-hover:text-accent text-xl group-hover:rotate-45 transition-all duration-500" />
              </div>
            </button>
          </nav>
          {/*navbar mobile*/}
          <div className="xl:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
