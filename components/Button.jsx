import { RiArrowRightUpLine } from "react-icons/ri";

const Button = ({ text }) => {
  return (
    <button className="w-[210px] h-[54px] flex items-center justify-between group rounded-full overflow-hidden border-2 border-accent bg-accent hover:bg-primary transition-all duration-500">
      <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase group-hover:text-white transition-all duration-500">
        {text}
      </div>
      <div className="w-11 h-11 bg-primary flex items-center justify-center group-hover:bg-white rounded-full transition-all duration-500">
        <RiArrowRightUpLine className="text-white group-hover:text-accent text-xl group-hover:rotate-45 transition-all duration-500" />
      </div>
    </button>
  );
};

export default Button;
