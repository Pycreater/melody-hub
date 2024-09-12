"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 bg-gray-900 text-white">
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
          <FooterColumn
            title="Follow Us"
            links={["Twitter", "Facebook", "Instagram"]}
          />
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm" style={{ fontFamily: "Poppins" }}>
            © {new Date().getFullYear()} MelodyHub. All rights reserved.
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
      <h3 className="font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
