// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="bg-base-200 text-white py-4">
            <div className="container mx-auto px-4 text-center">
                <p>&copy; {new Date().getFullYear()} Gustyff, The Dev. All rights reserved.</p>
                <p>Contact: gustyff.the.dev@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
