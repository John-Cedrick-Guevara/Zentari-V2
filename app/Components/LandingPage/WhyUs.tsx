"use client";
import { motion } from "motion/react";

const reasons = [
  {
    title: "Custom-First Approach",
    description:
      "We don't rely on cookie-cutter templates. Every line of code is written to solve your specific business challenges.",
    gridPosition: "col-span-1",
  },
  {
    title: "Scalability at Core",
    description:
      "We build systems designed to handle growth properly, ensuring you don't need a rewrite when you hit 10x scale.",
    gridPosition: "col-span-1",
  },
  {
    title: "Crystal Clear Comms",
    description:
      "No tech jargon. We partner with you transparently, keeping you in the loop with weekly sprints and updates.",
    gridPosition: "col-span-2",
  },
];

const WhyUs = () => {
  return (
    <section className="bg-backround">
      <div className=" "></div>
      <div className="container">
        <div className="grid grid-cols-3 grid-rows-[fit_fit] gap-8 items-stretch">
          {/* Header */}
          <div className=" col-span-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">
              Why Zentari
            </span>
            <h2 className="heading leading-[1.1] mb-2">
              Software partners, not just vendors.
            </h2>
            <p className="text-lg text-slate-500 font-light">
              We bridge the gap between complex engineering and business goals.
            </p>
          </div>

          {/* Cards */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={`col-span-1 p-8 md:p-10 rounded-3xl bg-white shadow-sm border border-slate-100 hover:border-slate-200 transition-colors `}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Custom-First Approach"
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              We don't rely on cookie-cutter templates. Every line of code is
              written to solve your specific business challenges.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={`col-span-2 p-8 md:p-10 rounded-3xl bg-white shadow-sm border border-slate-100 hover:border-slate-200 transition-colors `}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Crystal Clear Comms
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              No tech jargon. We partner with you transparently, keeping you in
              the loop with weekly sprints and updates.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className={`col-span-1 p-8 md:p-10 rounded-3xl bg-white shadow-sm border border-slate-100 hover:border-slate-200 transition-colors `}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Scalability at Core
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-2xl">
              We build systems designed to handle growth properly, ensuring you
              don't need a rewrite when you hit 10x scale.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
