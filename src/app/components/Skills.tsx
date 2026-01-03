"use client"

import Image from "next/image"
import {motion} from "framer-motion"
import { skills } from "../data/skill"

export default function Skills(){
    return (
        <section id="skills" className="py-24 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
                    {skills.map((skill, idx)=>(
                        <motion.div
                        key={idx}
                        whileHover={{ scale:1.2 }}
                        initial={{ opacity:0, y:20 }}
                        whileInView={{ opacity:1, y:0 }}
                        viewport={{ once:true }}
                        transition={{ duration:0.3, delay:idx*0.05 }}
                        className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow"
                        >
                            <Image
                            src={skill.icon}
                            alt={skill.name}
                            width={50}
                            height={50} />
                            <p className="mt-2 text-gray-700 font-medium">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}