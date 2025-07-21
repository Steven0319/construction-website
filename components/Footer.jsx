import Image from "next/image";
import Link from "next/link";
import {
  RiMapPin2Fill,
  RiPhoneFill,
  RiMailFill,
  RiArrowRightLine,
} from "react-icons/ri";
import Socials from "./Socials";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="mt-16 xl:mt-32 bg-primary text-border pt-16 pb-8"
    >
      <div className="container mx-auto flex flex-col xl:flex-row gap-16 xl:gap-24">
        {/* Logo & Text */}
        <div className="flex-1">
          <Link href="/" className="flex mb-6">
            <Image src="/assets/logo.svg" width={230} height={48} alt="" />
          </Link>
          <p className="max-w-[300px] leading-relaxed mb-8">
            UrbanBuild delivers high-quality construction, renovation, and
            consulting services tailored to your needs. From concept to
            completion, we focus on excellence, transparency, and customer
            satisfaction in every project.
          </p>
          <Socials containerStyles="flex gap-6 text-[20px]" />
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h4 className="h4 text-white mb-6">Contact</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <RiMapPin2Fill className="text-accent text-xl" />
              <p>123 Main Street, NY 10001</p>
            </li>
            <li className="flex items-center gap-4">
              <RiMailFill className="text-accent text-xl" />
              <p>hi@urbanbuild.com</p>
            </li>
            <li className="flex items-center gap-4">
              <RiPhoneFill className="text-accent text-xl" />
              <p>+1 (555) 123-4567</p>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1">
          <h4 className="h4 text-white mb-6">Newsletter</h4>
          <p className="mb-6 leading-relaxed max-w-[320px]">
            Subscribe to our newsletter and be the first to get updates on our
            latest projects and exclusive offers.
          </p>
          <form className="flex items-center border-b border-border">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none flex-1 py-3 text-white placeholder:text-border"
            />
            <button type="submit" className="text-accent text-2xl">
              <RiArrowRightLine />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto mt-12 pt-6 border-t border-border text-center text-border text-sm">
        © 2025 UrbanBuild. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
