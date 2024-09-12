"use client";

import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 bg-purple-900 bg-opacity-30 backdrop-blur-md text-white rounded-t-3xl">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <FooterColumn
            title="Company"
            links={["About Us", "Careers", "Press"]}
          />
          <FooterColumn
            title="Legal"
            links={["Terms of Service", "Privacy Policy", "Cookie Policy"]}
          />
          <FooterColumn
            title="Support"
            links={["Help Center", "Community", "Contact Us"]}
          />
          <div>
            <h3 className="font-bold mb-4 text-pink-500">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Pycreater"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/pratikyadav3949/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/prat_ik389"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center space-y-2">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} MelodyHub. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Designed and developed by{" "}
            <span className="font-bold">Pratik Yadav</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  links: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="font-bold mb-4 text-pink-500">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:text-pink-500 transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
