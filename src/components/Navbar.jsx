import logo from "../assets/Oliviatirso.webp";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="/" aria-label="Home">
                   <img src={logo} className="mx-2" width={50} height={33} alt="Logo" />
                </a>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                   href="https://www.linkedin.com/in/olivia-tirso/"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="LinkedIn"
                   className="transform transition-transform duration-300 hover:scale-125 hover:text-blue-700">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/oliviatirso"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="GitHub"
                   className="transform transition-transform duration-300 hover:scale-125 hover:text-gray-800">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/in/livtirso/"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="Instagram"
                   className="transform transition-transform duration-300 hover:scale-125 hover:text-gray-800">
                    <FaInstagram />
                </a>
                
            </div>
        </nav>
    );
};

export default Navbar;