"use client";
import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const CTA = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden gradient-layer-solid">
      <div className="container px-6 mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-8 max-w-4xl mx-auto leading-[1]">
            Ready to scale your Software?
          </h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto font-light">
            Join the businesses building better with Zentari.
            <br className="hidden md:block" />
            No long sales cycles, just results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium text-lg hover:bg-slate-800 transition-all transform hover:scale-105 shadow-xl w-full sm:w-auto"
            >
              Book a Free Discovery Call
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-medium text-lg hover:bg-slate-50 transition-all transform hover:scale-105 w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(241,245,249,0.5)_0%,rgba(255,255,255,0)_70%)] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default CTA;
