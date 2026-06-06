"use client";
import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Latest Twitter (X) icon
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; 
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1e211f] w-full lg:pt-16   text-white py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1: Logo and Address */}
        <div className="space-y-5 text-center sm:text-left">
      <img
        src="/iitlogo.png"
        alt="IIT Roorkee Logo"
        className="w-16 h-16 mx-auto sm:mx-0"
      />
      <h3 className="text-lg font-bold">IIT ROORKEE</h3>
      <ul className="text-sm mb-10 space-y-2">
        <li className="mb-3">
          <a
            href="https://iitr.ac.in/Institute/How%20To%20Reach%20IIT%20Roorkee.html"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 flex items-center space-x-2"
          >
            <FaMapMarkerAlt className="w-5 h-5 text-gray-300" />
            <span>How to reach IIT Roorkee</span>
          </a>
        </li>
        <li className="flex items-center mb-3 space-x-2">
          <FaPhoneAlt className="w-5 h-5 text-gray-300" />
          <span>+91-1332-285311</span>
        </li>
        <li className="flex  mb-3 items-center space-x-2">
          <FaEnvelope className="w-5 h-5 text-gray-300" />
          <a href="mailto:registrar@iitr.ac.in" className="text-gray-300 hover:text-white">
            registrar@iitr.ac.in
          </a>
        </li>
      </ul>

      {/* Social Media Links (Circular Background) */}
      <div className="flex justify-center sm:justify-start space-x-2 mt-6">
        {[
          { href: "https://www.facebook.com/IITRoorkee.ICC", icon: <FaFacebookF className="w-5 h-5 text-[#1e211f]" /> },
          { href: "https://www.youtube.com/@IITRoorkeeOfficialChannel", icon: <FaYoutube className="w-5 h-5 text-[#1e211f]" /> },
          { href: "https://www.instagram.com/iitroorkee/", icon: <FaInstagram className="w-5 h-5 text-[#1e211f]" /> },
          { href: "https://www.linkedin.com/school/indian-institute-of-technology-roorkee/", icon: <FaLinkedinIn className="w-5 h-5 text-[#1e211f]" /> },
          { href: "https://x.com/iitroorkee", icon: <FaXTwitter className="w-5 h-5 text-[#1e211f]" /> }, // X (Twitter)
        ].map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-2 flex items-center justify-center w-10 h-10 hover:bg-gray-200 transition"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>


        {/* Column 2: Explore Links */}
        <div className=" ml-10space-y-4">
          <h3 className="text-lg font-bold">EXPLORE</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="https://iitr.ac.in/Administration/index.html"
                target="_blank"
                className="hover:text-gray-300"
              >
                Administration
              </a>
            </li>
            <li>
              <a
                href="http://scsp.iitr.ac.in/"
                target="_blank"
                className="hover:text-gray-300"
              >
                Awards and Honours
              </a>
            </li>
            <li>
              <a
                href="https://iitr.ac.in/Departments/index.html"
                target="_blank"
                className="hover:text-gray-300"
              >
                Departments
              </a>
            </li>
            <li>
              <a
                href="https://ir.iitr.ac.in/"
                target="_blank"
                className="hover:text-gray-300"
              >
                International Students
              </a>
            </li>
            <li>
              <a
                href="https://www.iitr.ac.in/rti/"
                target="_blank"
                className="hover:text-gray-300"
              >
                RTI
              </a>
            </li>
            <li>
              <a
                href="https://iitr.ac.in/sric/"
                target="_blank"
                className="hover:text-gray-300"
              >
                Industry Consultation
              </a>
            </li>
            <li>
              <a
                href="https://mm.iitr.ac.in/mmweb/"
                target="_blank"
                className="hover:text-gray-300"
              >
                Tenders and Quotations
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick Access */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#2060b6]">QUICK ACCESS</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="https://alumni.iitr.ac.in/donate"
                target="_blank"
                className="hover:text-gray-300"
              >
                Donate
              </a>
            </li>
            <li>
              <a
                href="https://channeli.in/auth/login?next=/feed"
                target="_blank"
                className="hover:text-gray-300"
              >
                Intranet Portal
              </a>
            </li>
            <li>
              <a
                href="https://newwebmail.iitr.ac.in/?session=f9d8c490c90d969687b99fed91ea214ac74d97b01eae257e44aa9d5bade97baf84967d4d749724a9c51fa234b2b5f3a8c74d97b01eae257e44aa9d5bade97baf"
                target="_blank"
                className="hover:text-gray-300"
              >
                Webmail
              </a>
            </li>
            <li>
              <a
                href="https://ghbooking.iitr.ac.in/"
                target="_blank"
                className="hover:text-gray-300"
              >
                Book Guest House
              </a>
            </li>
            <li>
              <a
                href="https://www.iitsystem.ac.in/"
                target="_blank"
                className="hover:text-gray-300"
              >
                IIT Council
              </a>
            </li>
            <li>
              <a
                href="https://www.education.gov.in/"
                target="_blank"
                className="hover:text-gray-300"
              >
                Moe
              </a>
            </li>
            <li>
              <a
                href="https://www.iitr.ac.in/support/"
                target="_blank"
                className="hover:text-gray-300"
              >
                Support @ IITR
              </a>
            </li>
            <li>
              <a
                href="chttps://www.iitr.ac.in/internalcomplaintscommittee/"
                target="_blank"
                className="hover:text-gray-300"
              >
                ICC
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Inquiries */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Rankings</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="https://iitr.ac.in/Institute/NIRF.html"
                target="_blank"
                className="hover:text-gray-300"
              >
                NIRF
              </a>
            </li>
            <li>
              <a
                href="https://iitr.ac.in/Institute/ARIIA.html"
                target="_blank"
                className="hover:text-gray-300"
              >
                ARIIA
              </a>
            </li>
            <li>
              <a
                href="https://www.topuniversities.com/universities/indian-institute-technology-roorkee-iitr"
                target="_blank"
                className="hover:text-gray-300"
              >
                {" "}
                QS
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-[#2060b6]">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="https://iitr.ac.in/security/index.html"
                target="_blank"
                className="hover:text-gray-300"
              >
                Security
              </a>
            </li>
            <li>
              <a
                href="https://www.iitr.ac.in/safety/index.html"
                target="_blank"
                className="hover:text-gray-300"
              >
                Safety
              </a>
            </li>
            <li>
              <a
                href="https://www.iitr.ac.in/hindicell/index.html"
                target="_blank"
                className="hover:text-gray-300"
              >
                Hindi Cell
              </a>
            </li>
            <li>
              <Link
                href="/login"
                // target="_blank
                className="hover:text-gray-300"
              >
                Auth
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © Made with Love By Shourya Agarwal
      </div>
    </footer>
  );
};

export default Footer;


