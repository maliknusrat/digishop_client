"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  MdChevronLeft,
  MdChevronRight
} from "react-icons/md";
import {
  FaBoxOpen,
  FaTags,
  FaListAlt,
  FaSignOutAlt,
  FaHome
} from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { TbBrandAdobe } from "react-icons/tb";
import { BiSolidCategoryAlt } from "react-icons/bi";

function SidebarContent() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const pathname = usePathname();
  const Router = useRouter();

  // Get role from localStorage
  useEffect(() => {
    const role = localStorage.getItem("role");
    setUserRole(role);
  }, []);

  console.log("User Role:", userRole);

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    Router.push("/");
  };

  const toggleSidebar = () => setIsMinimized((prev) => !prev);

  // Define all links with allowed roles
  const links = [
    {
      href: "/addProduct",
      label: "Add Product",
      icon: <FaBoxOpen className="text-lg" />,
      roles: ["ADMIN","SUPERADMIN"]
    },
    {
      href: "/",
      label: "Home",
      icon: <FaHome  className="text-lg" />,
      roles: ["ADMIN","SUPERADMIN", "USER"]
    },
    {
      href: "/add-brand",
      label: "Add Brand",
      icon: <TbBrandAdobe  className="text-lg" />,
      roles: ["ADMIN","SUPERADMIN"]
    },
    {
      href: "/add-category",
      label: "Add Category",
      icon: <BiSolidCategoryAlt className="text-lg" />,
      roles: ["ADMIN","SUPERADMIN"]
    },
    {
      href: "/cart",
      label: "Cart",
      icon: <IoMdCart  className="text-lg" />,
      roles: ["USER"]
    },
    {
      href: "/orders",
      label: "Order",
      icon: <FaListAlt className="text-lg" />,
      roles: ["ADMIN","SUPERADMIN", "USER"]
    }
  ];

  // Only show links that match current role
  const filteredLinks = links.filter((link) =>
    link.roles.includes(userRole)
  );

  // Don’t render until role is loaded
  if (!userRole) return null;

  return (
    <div className="flex h-screen">
      <aside
        className={`bg-sky-950 text-white transition-all rounded-r-sm duration-300 ease-in-out ${
          isMinimized ? "w-16" : "w-64"
        } shadow-lg`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Header */}
          <div className="flex items-center justify-between h-16 border-b border-gray-700">
            {!isMinimized && (
              <span className="text-lg font-bold">{userRole} Panel</span>
            )}
            <button
              onClick={toggleSidebar}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isMinimized ? (
                <MdChevronRight size={24} />
              ) : (
                <MdChevronLeft size={24} />
              )}
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 p-2 overflow-y-auto">
            {filteredLinks.map(({ href, label, icon }) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`flex items-center gap-4 px-3 py-1 rounded-lg transition-colors duration-200 mb-2 ${
                    isActive
                      ? "bg-white text-black"
                      : "hover:bg-white hover:text-black"
                  } ${isMinimized ? "justify-center" : ""}`}
                >
                  {icon}
                  {!isMinimized && <span>{label}</span>}
                </Link>
              );
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-2 border-t border-gray-700 mt-auto">
            <div
              onClick={signOut}
              className={`flex items-center gap-4 px-3 py-1 rounded-lg transition-colors duration-200 mb-2 cursor-pointer ${
                pathname === "/authentication"
                  ? "bg-[#ffffff] text-black"
                  : "hover:bg-[#ffffff] hover:text-black"
              } ${isMinimized ? "justify-center" : ""}`}
            >
              <FaSignOutAlt />
              {!isMinimized && <span>Log Out</span>}
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default SidebarContent;
