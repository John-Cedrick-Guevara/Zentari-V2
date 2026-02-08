"use client";
import React from "react";
import { motion } from "motion/react";

const Problem_items = [
  {
    name: "Slow Growth",
    description:
      "Your business is ready to scale, but inefficient systems and outdated software hold you back.",
  },

  {
    name: "Operational Inefficiency",
    description:
      "Processes take too long, errors creep in, and teams spend time on repetitive tasks instead of high-value work.",
  },

  {
    name: "Limited Insights",
    description:
      "Without real-time data and dashboards, it’s hard to make informed decisions and spot opportunities.",
  },

  {
    name: "Weak Digital Presence",
    description:
      "Outdated websites, apps, or customer-facing tools hurt brand perception and limit engagement.",
  },
];

const Problem = () => {
  return (
    <section className="h-screen relative z-40 rounded-t-[4rem]  gradient-layer-solid">
      <div className="container text-center z-[2] flex flex-col justify-between">
        <div>
          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2"
          >
            The Problem
          </motion.h6>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading"
          >
            Your business is growing —
            <br />
            your systems aren’t
          </motion.h1>
        </div>
        <div className="flex justify-center items-start gap-4">
          {Problem_items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex-1 flex flex-col gap-2 h-80 ${
                index % 2 === 0 ? "flex-col-reverse" : ""
              }`}
            >
              <div
                className={`rounded-xl h-30 ${
                  index % 2 === 0
                    ? "bg-linear-to-b from-[#ffffff] to-transparent"
                    : "bg-linear-to-b from-transparent to-[#ffffff]"
                }`}
              ></div>
              <div
                className={`px-10 flex-1 py-4 bg-[#ffffff] text-slate-900 rounded-xl font-medium h-10`}
              >
                <h1 className="text-xl text-left">{item.name}</h1>
                <p className="text-lg text-left mt-3 text-slate-500">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-slate-500"
        >
          These challenges are common — and they’re exactly what we solve.
        </motion.p>
      </div>
    </section>
  );
};

export default Problem;
