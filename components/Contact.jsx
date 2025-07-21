import { RiChat1Line, RiMap2Line, RiSmartphoneLine } from "react-icons/ri";
import Socials from "./Socials";
import Form from "./Form";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <div className="pt-16 xl:pt-32" id="contact">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="container mx-auto"
      >
        <div>
          <div className="flex flex-col xl:flex-row h-full gap-[40px] xl:gap-[90px] xl:py-[36px] border-t-4 border-accent">
            {/* information */}
            <div className="w-full xl:max-w-[380px] xl:pr-[70px] xl:border-r xl:border-border/40 h-auto">
              <h4 className="text-[26px] font-primary font-bold mb-6">
                Contact Us
              </h4>
              <p className="mb-9 text-secondary leading-relaxed">
                Have questions or need assistance with your project? Reach out
                to us and our team will be happy to provide personalized
                guidance and solutions tailored to your needs.
              </p>
              {/* contact items */}
              <div className="flex flex-col gap-8">
                {/* Email */}
                <div className="flex items-start gap-[20px]">
                  <div className="flex-shrink-0">
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Chat to us
                    </h5>
                    <p className="mb-2 text-secondary">
                      Our friendly team is here to help.
                    </p>
                    <p className="font-semibold text-primary break-all">
                      hi@urbanbuild.com
                    </p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-[20px]">
                  <div className="flex-shrink-0">
                    <RiSmartphoneLine className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Call us
                    </h5>
                    <p className="mb-2 text-secondary">
                      Mon-Fri from 8am to 6pm.
                    </p>
                    <p className="font-semibold text-primary">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
                {/* Location */}
                <div className="flex items-start gap-[20px]">
                  <div className="flex-shrink-0">
                    <RiMap2Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Visit us
                    </h5>
                    <p className="mb-2 text-secondary">
                      Come meet us at our office.
                    </p>
                    <p className="font-semibold text-primary">
                      123 Main Street, NY 10001
                    </p>
                  </div>
                </div>
                {/* Social Media */}
                <div className="flex items-start gap-[20px]">
                  <div className="flex-shrink-0">
                    <RiChat1Line className="text-[28px] text-accent" />
                  </div>
                  <div>
                    <h5 className="text-[22px] font-semibold font-primary leading-none mb-2">
                      Social Media
                    </h5>
                    <p className="mb-2 text-secondary">
                      Connect with us on our social channels.
                    </p>
                    <Socials
                      containerStyles="flex gap-[40px]"
                      iconStyles="text-primary text-[20px]"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* form */}
            <div className="w-full">
              <h2 className="h2 mb-3">Request A Quote</h2>
              <p className="mb-9 text-secondary leading-relaxed">
                Get in touch with us today to discuss your project needs.
                Whether you have a clear vision or just an idea, our team is
                here to guide you through every step of the process and provide
                a personalized quote tailored to your goals.
              </p>
              <Form />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
