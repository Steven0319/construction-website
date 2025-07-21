import Image from "next/image";
import Link from "next/link";
import Pretitle from "./Pretitle";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const workData = [
  {
    img: "/assets/img/work/restoration.jpg",
    name: "restoration",
    description:
      "Restoring spaces with precision and care, turning damage into lasting beauty.",
    href: "",
  },
  {
    img: "/assets/img/work/construction.jpg",
    name: "construction",
    description:
      "High-quality construction delivering durable and innovative spaces.",
    href: "",
  },
  {
    img: "/assets/img/work/renovation.jpg",
    name: "renovation",
    description: "Expert renovation services tailored to your needs.",
    href: "",
  },
  {
    img: "/assets/img/work/consulting.jpg",
    name: "consulting",
    description: "Expert consulting for successful, stress-free projects.",
    href: "",
  },
];

const Work = () => {
  return (
    <div className="pt-16 xl:pt-32" id="projects">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Our work" center />
          <h2 className="h2 mb-3">Discover Our Projects</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Providing expert services designed to deliver quality and innovation
            in every project we undertake.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
      >
        {workData.map((item, index) => (
          <div
            key={index}
            className="w-full h-[492px] flex-1 relative overflow-hidden group flex justify-center"
          >
            <Image
              src={item.img}
              fill
              className="object-cover"
              alt=""
              quality={100}
            />
            <div className="w-[90%] h-[84px] bg-primary absolute bottom-4 flex justify-between items-center text-white md:translate-y-[108px] md:group-hover:translate-y-0 transition-all duration-500">
              <div className="pl-8 pr-16 flex-1">
                <h4 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                  {item.name}
                </h4>
                <div className="flex items-center gap-1 text-sm leading-tight">
                  <RiCheckboxCircleFill className="text-accent text-xl" />
                  <p className="break-words">{item.description}</p>
                </div>
              </div>
              <Link
                href={item.href}
                className="w-[40px] xl:w-[50px] xl:h-[50px] h-[40px] bg-accent text-primary text-2xl flex justify-center items-center absolute right-3"
              >
                <RiArrowRightUpLine />
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
