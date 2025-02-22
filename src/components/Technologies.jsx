import { RiReactjsLine } from "react-icons/ri"; // React icon
import { TbBrandNextjs } from "react-icons/tb"; // Next.js icon
import { FaNodeJs } from "react-icons/fa"; // Node.js icon
import { SiPython } from "react-icons/si"; // Python icon
import { SiMysql } from "react-icons/si"; // MySQL icon
import { FaJava } from "react-icons/fa"; // Java icon
import { motion } from "framer-motion"; // Animation

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
    return (
        <div className="pd-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                <motion.div initial="initial" animate="animate" variants={iconVariants(3)}>
                    <RiReactjsLine className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2.5)} className="p-4">
                    <TbBrandNextjs className="text-7xl" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                
                <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-4">
                    <SiMysql className="text-7xl text-blue-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(4.5)} className="p-4">
                    <SiPython className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
                    <FaJava className="text-7xl text-red-600" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
