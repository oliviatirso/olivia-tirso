import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import resumeFile from "../assets/LivTirsoResume-1 copy.pdf";

const Contact = () => {
    return (
        <div className="border-t border-stone-900 pb-20">
            <motion.h2
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{duration: 0.5 }} 
             className="my-10 text-center text-4xl"    
             aria-live= "polite">      
             Get in Touch   
              </motion.h2>
            <div className="text-center tracking-tighter">
                <motion.p
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -100 }}
                  transition={{duration: 1 }}
                  className="my-4">
                  {CONTACT.address}
                </motion.p>
                <motion.p
                 whileInView={{ opacity: 1, y: 0 }}
                 initial={{ opacity: 0, y: 100 }}
                 transition={{duration: 1 }}
                 className="my-4">
                    {CONTACT.phoneNo}
                </motion.p>
                <a href={`mailto:${CONTACT.email}`} className="border-b">
                    {CONTACT.email}
                </a>
                <div className="mt-4">
                    <a href={resumeFile} download className="border-b">
                     Download Resume
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Contact;