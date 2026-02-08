"use client";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import React, { useRef } from "react";

const Solution_items = [
  {
    title: "Custom Software Solutions",
    problem: "Slow Growth",
    description:
      "Tailored web and mobile applications designed to accelerate business expansion and support scalable operations.",
    image: "/p1.png",
  },
  {
    title: "Process Automation",
    problem: "Operational Inefficiency",
    description:
      "Streamline repetitive workflows, reduce errors, and free your team to focus on strategic work.",
    image: "/p2.png",
  },
  {
    title: "Data & Analytics Dashboards",
    problem: "Limited Insights",
    description:
      "Gain real-time visibility into performance, KPIs, and trends to make informed business decisions.",
    image: "/p3.png",
  },
  {
    title: "Modern Web & Mobile Experiences",
    problem: "Weak Digital Presence",
    description:
      "Design and build websites and apps that strengthen your brand, engage customers, and drive conversions.",
    image: "/p4.png",
  },
];

const TypingText = ({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={child}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Solution = () => {
  return (
    <section className="min-h-screen bg-slate-50">
      <div className="container text-center">
        <motion.h6
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block"
        >
          The Solution
        </motion.h6>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="heading"
        >
          Problems businesses face — <br />
          and how we fix them
        </motion.h1>
        <div className="flex flex-col gap-4">
          {Solution_items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className={`flex-1 flex items-center overflow-hidden gap-2 ${
                index === 0
                  ? "max-h-[calc(100vh-8rem)]"
                  : "max-h-[calc(100vh-6rem)]"
              }`}
            >
              <div
                className={`px-10 flex flex-col justify-center flex-1 py-4 text-slate-900 rounded-xl font-medium min-h-[300px]`}
              >
                <TypingText
                  text={item.title}
                  className="text-5xl text-left tracking-wide block"
                />
                <TypingText
                  text={item.description}
                  className="text-xl text-left mt-3 text-slate-500 block"
                  delay={0.2}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-full h-full rounded-2xl flex items-center justify-center aspect-7/8 bg-linear-to-b from-slate-200 to-transparent max-w-1/2"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="w-full h-fit aspect-7/5 flex-1"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
