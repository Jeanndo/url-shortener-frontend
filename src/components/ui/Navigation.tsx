"use client";
import { MenuOutlined } from "@ant-design/icons";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [navScrolled, setNavScrolled] = useState<boolean>(false);

  const listenScrollEvent = () => {
    if (window.scrollY > 80) {
      setNavScrolled(true);
    } else {
      setNavScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <nav
      className={
        navScrolled
          ? "flex justify-around w-full h-20 bg-white items-center fixed z-50"
          : "flex justify-around w-full h-20 bg-[#031f39] items-center fixed z-50"
      }
    >
      <div>
        <span className="text-4xl font-bold text-orange-500">bitly</span>
      </div>
      <div className="hidden sm:block">
        <ul className="flex justify-center items-center gap-x-4">
          <li className={navScrolled?"text-black font-bold":"text-white font-bold"}>
            <span>Platiform</span>
          </li>
          <li className={navScrolled?"text-black font-bold":"text-white font-bold"}>
            <span>Solutions</span>
          </li>
          <li className={navScrolled?"text-black font-bold":"text-white font-bold"}>
            <span>Pricing</span>
          </li>
          <li className={navScrolled?"text-black font-bold":"text-white font-bold"}>
            <span>Resources</span>
          </li>
        </ul>
      </div>
      <div className="hidden sm:block">
        <ul className="flex justify-center items-center gap-x-4">
          <li className={navScrolled?"text-black font-bold":"text-white font-bold"}>En</li>
          <li>
            <Link href="/login" className={navScrolled?"text-black font-bold":"text-white font-bold"}>
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/quote"
              className={navScrolled?"border-2 border-black p-2 text-black rounded-md":"border-2 border-white p-2 text-white rounded-md"}
            >
              Get a Quote
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className="border-2 bg-white p-2 rounded-md text-black"
            >
              Sign up Free
            </Link>
          </li>
        </ul>
      </div>
      <div className="block sm:hidden">
        <MenuOutlined className="!text-white" />
      </div>
    </nav>
  );
};

export default Navigation;
