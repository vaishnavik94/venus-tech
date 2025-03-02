import { useEffect } from "react";

export const MobileMenu = ({menuOpen, SetMenuOpen}) => {

    return (
        <div 
            className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center transition-all duration-300 ease-in-out
                ${
                    menuOpen
                    ? "h-screen opacity-100 pointer-events-auto"
                    : "h-0 opacity-0 pointer-events-none"
                }
            `}
        >
            <button
                onClick={() => SetMenuOpen(false)}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
                aria-label="Close Menu"  
            >
                &times;
            </button>

            <a 
                href="#home" 
                onClick={() => SetMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                        menuOpen
                        ? "opacity-100 translate-y-5"
                        : "opacity-0 translate-y-0"
                    }
                `}
            >
                Home
            </a>
            <a 
                href="#about" 
                onClick={() => SetMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                        menuOpen
                        ? "opacity-100 translate-y-5"
                        : "opacity-0 translate-y-0"
                    }
                `}
            >
                About
            </a>
            <a 
                href="#projects" 
                onClick={() => SetMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                        menuOpen
                        ? "opacity-100 translate-y-5"
                        : "opacity-0 translate-y-0"
                    }
                `}
            >
                Projects
            </a>
            <a 
                href="#contact" 
                onClick={() => SetMenuOpen(false)}
                className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${
                        menuOpen
                        ? "opacity-100 translate-y-5"
                        : "opacity-0 translate-y-0"
                    }
                `}
            >
                Contact
            </a>

        </div>
    );
};