"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "./ui/tabs";
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

const fadeInVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.2, delay: 0.1 } },
};

const serviceData = [
  {
    name: "construction",
    icon: <PiWallFill />,
    title: "Construction Services",
    description:
      "We build with precision and innovation, ensuring that every structure is strong, reliable, and built to last. From foundations to finishing touches, our expertise transforms ideas into reality.",
    serviceList: [
      "Residential Builds",
      "Structural Design",
      "Site Prep",
      "Concrete Work",
      "Framing & Roofing",
      "Interior Finish",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-2.jpg" },
    ],
  },
  {
    name: "renovation",
    icon: <PiPaintRollerFill />,
    title: "Renovation Services",
    description:
      "Revitalizing spaces with modern designs and high-quality craftsmanship. Whether upgrading a home or remodeling an office, we bring fresh life to every project.",
    serviceList: [
      "Kitchen Remodel",
      "Basement Finish",
      "Flooring",
      "Energy Upgrades",
      "Carpentry",
      "Painting",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-3.jpg" },
      { url: "/assets/img/services/thumb-4.jpg" },
    ],
  },
  {
    name: "restoration",
    icon: <PiWrenchFill />,
    title: "Restoration Services",
    description:
      "Bringing damaged or aging structures back to life. We specialize in restoring historical landmarks, fire-damaged buildings, and water-damaged properties with meticulous care.",
    serviceList: [
      "Historic Restore",
      "Water Damage",
      "Fire Repair",
      "Structural Fix",
      "Mold Removal",
      "Roof Restore",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-4.jpg" },
      { url: "/assets/img/services/thumb-5.jpg" },
    ],
  },
  {
    name: "consulting",
    icon: <PiUserGearFill />,
    title: "Consulting Services",
    description:
      "Providing expert guidance for construction and renovation projects. From planning and budgeting to compliance and sustainability, our consulting service ensures project success.",
    serviceList: [
      "Project Plans",
      "Costing",
      "Site Management",
      "Permits",
      "Sustainability",
      "Safety",
    ],
    thumbs: [
      { url: "/assets/img/services/thumb-1.jpg" },
      { url: "/assets/img/services/thumb-3.jpg" },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("construction");

  return (
    <section className="pt-16 xl:pt-32" id="services">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div className="text-center max-w-[540px] mx-auto mb-20">
          <Pretitle text="Our Services" center />
          <h2 className="h2 mb-3">Solutions We Provide</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            Offering tailored construction solutions, from planning to
            completion, with a focus on quality and innovation.
          </p>
        </div>

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Tabs
            defaultValue="construction"
            onValueChange={setActiveTab}
            className="flex flex-col xl:flex-row gap-[30px]"
          >
            {/* Tabs List */}
            <TabsList className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-[30px] xl:w-[345px]">
              {serviceData.map((item) => (
                <TabsTrigger
                  key={item.name}
                  value={item.name}
                  className={`w-full h-[100px] flex items-center relative shadow-custom rounded-none p-0 ${
                    activeTab === item.name ? "bg-primary text-white" : ""
                  }`}
                >
                  <div
                    className={`w-[100px] h-[100px] flex items-center justify-center absolute left-0 ${
                      activeTab === item.name
                        ? "bg-accent text-primary"
                        : "bg-white text-primary"
                    }`}
                  >
                    <div className="text-4xl">{item.icon}</div>
                  </div>
                  <div className="ml-[120px] uppercase font-primary text-base font-semibold tracking-[.6px]">
                    {item.name}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Tabs Content */}
            <div className="flex-1 bg-white shadow-custom h-[490px] p-[30px]">
              {serviceData.map((item) => (
                <TabsContent key={item.name} value={item.name} className="m-0">
                  <motion.div
                    variants={fadeInVariant}
                    initial="hidden"
                    whileInView="show"
                    exit="exit"
                    className="flex flex-col md:flex-row gap-[30px]"
                  >
                    {/* Images */}
                    <div className="flex md:flex-col gap-5 xl:gap-[30px]">
                      {item.thumbs.map((thumb, index) => (
                        <div
                          key={index}
                          className="relative w-[140px] xl:w-[200px] h-[140px] xl:h-[200px]"
                        >
                          <Image
                            src={thumb.url}
                            alt="service-thumb"
                            fill
                            className="object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Text and Button */}
                    <div className="flex-1">
                      <h3 className="h3 mb-6">{item.title}</h3>
                      <p className="mb-10">{item.description}</p>
                      <ul className="grid grid-cols-2 gap-4 mb-12">
                        {item.serviceList.map((service, idx) => (
                          <li key={idx} className="flex items-center gap-4">
                            <div className="w-[6px] h-[6px] bg-accent"></div>
                            <div className="capitalize font-medium text-primary">
                              {service}
                            </div>
                          </li>
                        ))}
                      </ul>
                      <Button text="Read more" />
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
