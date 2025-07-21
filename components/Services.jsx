"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "./Button";
import {
  PiWallFill,
  PiPaintRollerFill,
  PiWrenchFill,
  PiUserGearFill,
} from "react-icons/pi";
import Pretitle from "./Pretitle";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const serviceData = [
  {
    name: "construction",
    icon: <PiWallFill />,
    title: "Construction Services",
    description:
      "We build with precision and innovation, ensuring every structure is strong and built to last.",
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Finish",
    ],
    thumbs: [
      "/assets/img/services/thumb-1.jpg",
      "/assets/img/services/thumb-2.jpg",
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    description:
      "Revitalizing spaces with modern designs and high-quality craftsmanship.",
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],
    thumbs: [
      "/assets/img/services/thumb-3.jpg",
      "/assets/img/services/thumb-4.jpg",
    ],
  },
  {
    name: "restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description:
      "Restoring structures with care, from water damage to historic building renovations.",
    serviceList: [
      "Historic Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restore",
    ],
    thumbs: [
      "/assets/img/services/thumb-4.jpg",
      "/assets/img/services/thumb-5.jpg",
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    description:
      "Expert guidance for construction and renovation success, including planning, budgeting and permits.",
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Permits",
      "Sustainability",
      "Safety",
    ],
    thumbs: [
      "/assets/img/services/thumb-1.jpg",
      "/assets/img/services/thumb-3.jpg",
    ],
  },
];

const Services = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="services" className="pt-16 xl:pt-32 px-4 container mx-auto">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <Pretitle text="Our Services" center />
        <h2 className="h2 mb-3">Solutions We Provide</h2>
        <p>
          Offering tailored construction solutions, from planning to completion,
          with a focus on quality and innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
        {serviceData.map((item, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn("up", 0.1 * idx)}
            initial="hidden"
            whileInView="show"
            className={`cursor-pointer p-6 rounded-xl shadow-md bg-white hover:scale-105 transition-transform duration-300 flex flex-col items-center gap-4 ${
              active === idx ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => setActive(idx)}
          >
            <div className="text-5xl text-primary">{item.icon}</div>
            <h3 className="text-xl font-bold uppercase">{item.name}</h3>
          </motion.div>
        ))}
      </div>

      {active !== null && (
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          className="flex flex-col lg:flex-row gap-8 bg-white p-8 rounded-xl shadow-md"
        >
          <div className="flex-1 grid grid-cols-2 gap-4">
            {serviceData[active].thumbs.map((src, index) => (
              <div key={index} className="relative w-full h-48 md:h-64">
                <Image
                  src={src}
                  alt="service image"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-4">
              {serviceData[active].title}
            </h3>
            <p className="mb-6">{serviceData[active].description}</p>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              {serviceData[active].serviceList.map((service, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-primary font-medium"
                >
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  {service}
                </li>
              ))}
            </ul>
            <Button text="Read more" />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Services;
