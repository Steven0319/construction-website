import { RiPhoneFill, RiMailFill } from "react-icons/ri";
import Socials from "./Socials";

const Topbar = () => {
  return (
    <section
      className="py-4 xl:h-16 xl:py-0 bg-gradient-to-t from-[#ffc221] to-[#ffd76e] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Contact Info */}
          <div className="hidden xl:flex items-center gap-8 text-black">
            <div className="flex items-center gap-3">
              <RiPhoneFill className="text-xl" />
              <p className="font-medium">+1 234 567 890</p>
            </div>
            <div className="flex items-center gap-3">
              <RiMailFill className="text-xl" />
              <p className="font-medium">email@example.com</p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <Socials
              containerStyles="flex items-center gap-8 mx-auto xl:mx-0"
              iconStyles="text-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topbar;
