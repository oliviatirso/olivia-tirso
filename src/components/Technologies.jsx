import { RiReactjsLine } from "react-icons/ri"; // React icon
import { TbBrandNextjs } from "react-icons/tb"; // Next.js icon
import { SiMongodb } from "react-icons/si"; // MongoDB icon
import { DiRedis } from "react-icons/di"; // Redis icon
import { FaNodeJs } from "react-icons/fa"; // Node.js icon
import { SiPython } from "react-icons/si"; // Python icon
import { SiMysql } from "react-icons/si"; // MySQL icon
import { motion } from "framer-motion"; // Animation 
import { BiLogoPostgresql } from "react-icons/bi";


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
                <motion.div initial="initial" animate="animate" variants={iconVariants(5)} className="p-4">
                    <SiMongodb className="text-7xl text-cyan-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(2)} className="p-4">
                    <DiRedis className="text-7xl text-red-700" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(6)} className="p-4">
                    <FaNodeJs className="text-7xl text-green-500" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(4)} className="p-4">
                    <BiLogoPostgresql className="text-7xl text-sky-700" />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVariants(3.5)} className="p-4">
                    <SiMysql className="text-7xl text-blue-500" />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
