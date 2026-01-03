"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = scrolled
    ? "bg-white dark:bg-gray-900 shadow-md"
    : "bg-transparent";

  return (
    <nav className={`${navClass} fixed w-full top-0 z-50 transition-all`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-gray-900 dark:text-white">
            My Portfolio
        </div>

        <div className="flex items-center gap-6">
            <Link href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
            Projects
            </Link>
            <Link href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
            Projects
            </Link>
            <Link href="#projects" className="text-gray-800 dark:text-gray-200 hover:text-blue-500">
            Projects
            </Link>

            <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}
