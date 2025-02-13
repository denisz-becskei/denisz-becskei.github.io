// src/components/Header.tsx
import React from "react";
import TitleLoader from "./TitleLoader";


const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-base-100 shadow z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white flex flex-row gap-1">Gustyff, <TitleLoader /></h1>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#about" className="hover:text-primary transition-colors text-white">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-primary transition-colors text-white">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-primary transition-colors text-white">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
