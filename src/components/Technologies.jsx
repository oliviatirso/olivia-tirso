import { BiLogoPostgresql } from "react-icons/bi"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion"

const iconVariants = (duration => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",

        }
    }
}))

const Technologies = () => {
    return (
        <div className="pd-24">
            <motion.h2 
             whileInView={{ opacity: 1, y: 0 }}
             intial={{ opacity: 0, y: -100 }} 
             className="my-20 text-center text-4xl">Technologies
             </motion.h2>
            <motion.div
            whileInView={{ opacity: 1, x: 0}}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justifycenter gap-4">
                <motion.div
                  intial="initial"
                  animate="animate"
                  variatns={iconVariants(3)}>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div
                 intial="initial"
                 animate="animate"
                 variatns={iconVariants(2.5)}
                 className="p-4">
                    <TbBrandNextjs className="text=7xl" />
                </motion.div>
                <motion.div 
                 intial="initial"
                 animate="animate"
                 variatns={iconVariants(5)}
                 className="p-4">
                    <SiMongodb className="text-7xl text-cyan-500" />
                </motion.div>
                <motion.div
                 intial="initial"
                 animate="animate"
                 variatns={iconVariants(2)}
                 className="p-4">
                    <DiRedis className="text-7xl text-red-700" />
                </motion.div>
                <motion.div
                 intial="initial"
                 animate="animate"
                 variatns={iconVariants(6)}>
                 className="p-4"
                    <FaNodeJS className="text-7xl text-green-500" />
                </motion.div>
                <motion.div
                 intial="initial"
                 animate="animate"
                 variatns={iconVariants(4)}
                 className="p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies