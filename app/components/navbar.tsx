
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, ChevronDown } from "lucide-react";

// Define types for navigation items
type NavItem = {
  name: string;
  path: string; // Ensure path is always a string
  isDropdown?: boolean;
  subItems?: { name: string; path: string }[]; // Ensure subItems have valid paths
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname(); // Get the current route

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownTimeout(setTimeout(() => setIsDropdownOpen(false), 200)); // Delayed hiding
  };

  // Navigation items with valid paths
  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "People", path: "/people" },
    { name: "Activities", path: "/activities" },
    { name: "Certifications", path: "/certifications" }, // New Certification link
    {
      name: "Research",
      path: "/research", // Parent path (optional, can be removed if not needed)
      isDropdown: true,
      subItems: [
        { name: "Scope", path: "/research/scope" },
        { name: "Publications & Research", path: "/research/publications" },
        { name: "Scholars", path: "/research/scholars" },
      ],
    },
    { name: "Testing Equipments", path: "/testingequipements" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-60 text-white py-4 px-6 flex items-center justify-between z-50">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-2">
        <Image
          src="/iitlogo.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <span className="text-xl font-semibold">IIT Roorkee</span>
      </div>

      {/* Right Side: Navigation Links */}
      <ul
        className={`${
          isOpen
            ? "flex flex-col absolute top-16 right-0 w-full bg-black bg-opacity-80 space-y-6 px-6 py-8 transition-all duration-300 ease-in-out"
            : "hidden"
        } lg:flex lg:flex-row lg:space-x-8 lg:text-base font-medium`}
      >
        {navItems.map((item) => (
          <li
            key={item.name}
            className="relative"
            onMouseEnter={item.isDropdown ? handleMouseEnter : undefined}
            onMouseLeave={item.isDropdown ? handleMouseLeave : undefined}
          >
            {item.isDropdown ? (
              <>
                <div
                  className={`flex items-center text-sm lg:text-base px-3 py-2 rounded-md transition-all duration-300 ${
                    pathname.startsWith("/research")
                      ? "bg-white opacity-70 text-black font-semibold"
                      : "hover:text-gray-300"
                  }`}
                >
                  {item.name}
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </div>

                {/* Desktop Dropdown */}
                {isDropdownOpen && (
                  <ul className="hidden lg:block absolute left-0 mt-2 w-48 bg-black bg-opacity-80 text-white rounded-md shadow-lg py-2">
                    {item.subItems?.map((subItem) => (
                      <li key={subItem.path}>
                        <Link
                          href={subItem.path} // Ensure subItem.path is always a string
                          className="block px-4 py-2 text-sm hover:bg-gray-700 transition-all"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Mobile View - Expandable Submenu */}
                {isOpen && (
                  <ul className="lg:hidden pl-4 space-y-2 mt-2">
                    {item.subItems?.map((subItem) => (
                      <li key={subItem.path}>
                        <Link
                          href={subItem.path} // Ensure subItem.path is always a string
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link
                href={item.path} // Ensure item.path is always a string
                className={`flex items-center text-sm lg:text-base px-3 py-2 rounded-md transition-all duration-300 ${
                  pathname === item.path
                    ? "bg-white opacity-70 text-black font-semibold"
                    : "hover:text-gray-300"
                }`}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="lg:hidden" onClick={toggleMenu}>
        <button className="text-white focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;