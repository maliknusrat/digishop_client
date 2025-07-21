"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaDigitalOcean } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";

export default function Navbar() {
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const serviceRef = useRef();
  const moreRef = useRef();
  const menuRef = useRef(null);

  const user =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const isAuthenticated = user && user !== "null";

  // Handle scroll background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreDropdownOpen(false);
      }
      if (serviceRef.current && !serviceRef.current.contains(e.target)) {
        setServiceDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Closes dropdown on menu item click
  const handleDropdownItemClick = () => {
    setMoreDropdownOpen(false);
    setServiceDropdownOpen(false);
  };

  // Close menu when clicking any link
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ----------------------------
  // Mobile Navbar
  // ----------------------------
  const MobileNavbar = () => (
    <nav
      className="md:hidden bg-[#002a32] text-white fixed top-0 left-0 w-full z-[9999]"
      ref={menuRef}
    >
      <div className="flex items-center justify-between px-4">
        <Link href="/" className="text-2xl font-semibold text-white">
        <FaDigitalOcean />
        </Link>
        <button
          className="focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <ul className="flex flex-col gap-2 px-4 pb-4 text-sm bg-[#002a32] text-white shadow-md">
          <li>
            <Link href="/" onClick={handleLinkClick}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/facilities" onClick={handleLinkClick}>
              Facilities
            </Link>
          </li>
          <li>
            <Link href="/seminar" onClick={handleLinkClick}>
              Seminars
            </Link>
          </li>
          <li>
            <Link href="/courses" onClick={handleLinkClick}>
              Courses
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={handleLinkClick}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/faq" onClick={handleLinkClick}>
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/application" onClick={handleLinkClick}>
              Apply Here
            </Link>
          </li>
          <li>
            {isAuthenticated ? (
              <Link href="/registration" onClick={handleLinkClick}>
                Dashboard
              </Link>
            ) : (
              <Link href="/authentication" onClick={handleLinkClick}>
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );

  // ----------------------------
  // Desktop Navbar
  // ----------------------------
  const DesktopNavbar = () => (
    <nav
      className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#002a32] text-white shadow-md"
          : "bg-transparent text-slate-900"
      }`}
    >
      <div className="flex items-center justify-between px-8 py-2">
        <div className=" flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl  text-white flex items-center justify-center font-semibold"
          >
            <FaDigitalOcean />
            <span className="ml-2 font-black text-cyan-300">DIGI</span>Shop
          </Link>
          <h1 className="text-3xl mt-2"></h1>
        </div>

        <ul className="flex text-white items-center my-3 gap-6">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:underline">
            <Link href="/productList">Products</Link>
          </li>

          {user && <li className="hover:underline">
            <Link href="/cart">Cart</Link>
          </li>}

          <li className="hover:underline">
            <Link href="/login">
              <IoPersonCircleSharp />
            </Link>
          </li>

          {/* Services Dropdown */}
          {/* <li className="relative" ref={serviceRef}>
            <button
              onClick={() => setServiceDropdownOpen((prev) => !prev)}
              className="flex items-center gap-1 hover:underline"
            >
              <span>Services</span>
              <svg
                className={`transition-transform duration-300 ${
                  serviceDropdownOpen ? "rotate-180" : ""
                }`}
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="m6 9 6 6 6-6"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <ul
              className={`absolute top-full mt-2 z-10 w-24 rounded-md text-xs bg-gray-700 p-2 text-white shadow-lg transform transition-all duration-300 origin-top ${
                serviceDropdownOpen
                  ? "opacity-100 scale-100 visible"
                  : "opacity-0 scale-95 invisible"
              }`}
            >
              <li className="px-1 py-1 text-center hover:underline">
                {isAuthenticated ? (
                  <Link href="/registration" onClick={handleDropdownItemClick}>
                    Dashboard
                  </Link>
                ) : (
                  <Link href="/authentication" onClick={handleDropdownItemClick}>
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </li> */}
        </ul>
      </div>
    </nav>
  );

  return (
    <>
      {/* Only show one of these at a time depending on screen size */}
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
}