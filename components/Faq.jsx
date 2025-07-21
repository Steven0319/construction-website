import Pretitle from "./Pretitle";
import FaqItem from "./FaqItem";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const faqItemData = [
  {
    title: "How long does a construction project usually take?",
    description:
      "The duration depends on the project's size, design complexity, and site conditions. Smaller projects may take a few weeks, while larger developments can span several months.",
  },
  {
    title: "Do I need permits for my projects?",
    description:
      "Yes, most construction and renovation projects require permits to comply with local building codes and regulations. We handle the entire permitting process for you.",
  },
  {
    title: "What materials do you use?",
    description:
      "We use high-quality, industry-approved materials sourced from trusted suppliers to ensure durability, aesthetics, and sustainability in every project.",
  },
  {
    title: "Can I make changes after construction starts?",
    description:
      "Yes, minor adjustments can usually be accommodated. However, significant changes may affect the timeline and budget, and we’ll always communicate clearly before proceeding.",
  },
  {
    title: "How much will my construction project cost?",
    description:
      "Project costs vary based on scope, materials, and design preferences. We provide a detailed quote after an initial consultation and site assessment.",
  },
  {
    title: "How do you ensure quality and safety on-site?",
    description:
      "Our team follows strict quality control protocols and adheres to all safety standards, ensuring a secure working environment and top-quality results.",
  },
];

//animation variants for FAQ item
const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 }, //staggered animation
  }),
};

const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container mx-auto">
        {/*text*/}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-[540px] mx-auto xl:mb-20"
        >
          <Pretitle text="Faq" center />
          <h2 className="h2 mb-3">Got Questions? We Have Got You Covered.</h2>
          <p className="mb-11 max-w-[480px] mx-auto">
            From project planning to final touches, we have answered the most
            common questions to help you make informed decisions.
          </p>
        </motion.div>
        {/*faq items*/}
        <ul className="w-full flex flex-col">
          {faqItemData.map((item, index) => {
            return (
              <motion.li
                key={index}
                variants={faqItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                custom={index}
                //pass index to control stagger effect
              >
                <FaqItem title={item.title} description={item.description} />
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Faq;
