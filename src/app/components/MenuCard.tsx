"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Menu } from "../data/menus";

export default function MenuCard({ menu }: { menu: Menu }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <Image
        src={menu.image}
        alt={menu.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />

      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-[var(--blue)] mb-2">
          {menu.name}
        </h3>
        <p className="text-gray-600 mb-4">{menu.description}</p>
        <span className="text-lg font-semibold text-[var(--gold)]">
          {menu.price}
        </span>
      </div>
    </motion.div>
  );
}
