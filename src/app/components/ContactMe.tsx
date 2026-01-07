"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, Download } from "lucide-react";
import { JSX } from "react";

interface SocialIconProps {
  href: string;
  icon: JSX.Element;
  label: string;
  color?: string;
}

export default function ContactMe() {
  const socialIcons: SocialIconProps[] = [
    { href: "https://github.com/wibinabae", icon: <Github size={28} />, label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
    { href: "https://www.linkedin.com/feed/", icon: <Linkedin size={28} />, label: "LinkedIn", color: "hover:text-blue-600" },
    { href: "https://www.instagram.com/syarifh261___/", icon: <Instagram size={28} />, label: "Instagram", color: "hover:text-pink-500" },
    { href: "mailto:syarifh430@gmail.com", icon: <Mail size={28} />, label: "Email", color: "hover:text-red-500" },
  ];

  return (
    <section className="py-24 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 dark:text-white"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-700 dark:text-gray-300 mb-12"
        >
          Jangan ragu untuk menghubungi saya melalui sosial media atau email. 
          Download CV saya untuk melihat pengalaman dan skill lebih lengkap.
        </motion.p>

        {/* Sosial Media */}
        <div className="flex justify-center flex-wrap gap-6 mb-12">
          {socialIcons.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5, type: "spring", stiffness: 120 }}
              className={`text-gray-700 dark:text-gray-300 transition transform hover:-translate-y-1 hover:scale-110 ${item.color}`}
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        {/* Download CV */}
        <motion.a
          href="/Syarif_Hidayat_CV.pdf"
          download
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 120 }}
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-1 hover:scale-105"
        >
          <Download size={20} /> Download CV
        </motion.a>
      </div>
    </section>
  );
}
