"use client"
import { motion } from 'framer-motion';
import { menus } from '../data/menus';
import MenuCard from './MenuCard';

export default function Menu (){
    return (
        <div className="container">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Rumah Makan Biru Emas
      </motion.h1>

      <motion.p
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Menu favorit pilihan pelanggan
      </motion.p>

      <div className="grid">
        {menus.map((menu, index) => (
          <MenuCard key={index} menu={menu} />
        ))}
      </div>

      <style jsx>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 28px;
        }
      `}</style>
    </div>
    )
}