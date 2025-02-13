// src/components/Header.tsx
import React from "react";
import TitleLoader from "./TitleLoader";


const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-base-100 shadow z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl font-bold text-white flex flex-row gap-1">Gustyff, <TitleLoader /></h1>
                {/* Desktop Navigation */}
                <ul className="hidden lg:flex space-x-6">
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
                {/* Mobile Navigation: Hamburger Menu */}
                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a href="#about" className="hover:text-primary transition-colors">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-primary transition-colors">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-primary transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;