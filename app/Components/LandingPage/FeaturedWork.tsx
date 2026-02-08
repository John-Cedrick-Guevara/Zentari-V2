"use client";
import React from "react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    client: "FinFlow",
    category: "Fintech",
    problem: "Needed a secure, real-time transaction processing engine.",
    solution: "Microservices architecture on AWS with Node.js.",
    outcome: "Processed $50M+ in first quarter with 99.99% uptime.",
  },
  {
    id: 2,
    client: "MediConnect",
    category: "Healthcare",
    problem: "Legacy scheduling system caused patient delays.",
    solution: "HIPAA-compliant mobile app and admin dashboard.",
    outcome: "Reduced scheduling conflicts by 85% in month one.",
  },
  {
    id: 3,
    client: "LogiTrack",
    category: "Logistics",
    problem: "Lack of visibility for fleet management.",
    solution: "IoT-enabled tracking dashboard with predictive analytics.",
    outcome: "Saved 15% on fuel costs through optimized routing.",
  },
];

const FeaturedWork = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-6 mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">
              Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-slate-900">
              Recent Work
            </h2>
          </div>
          <button className="text-sm font-medium text-slate-900 border-b border-slate-900 pb-0.5 hover:opacity-70 transition-opacity">
            View All Projects
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col h-full bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300"
            >
              {/* Fake Image Placeholder - mimicking a design preview */}
              <div className="h-48 bg-slate-100 relative overflow-hidden group-hover:bg-slate-50 transition-colors">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-bold text-4xl opacity-20 transform group-hover:scale-110 transition-transform duration-500">
                  {project.client.substring(0, 2)}
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.client}
                  </h3>
                </div>

                <div className="space-y-4 text-sm text-slate-600 flex-1">
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-1">
                      Problem
                    </strong>
                    {project.problem}
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold mb-1">
                      Solution
                    </strong>
                    {project.solution}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <strong className="block text-slate-900 font-semibold mb-1 text-sm">
                    Outcome
                  </strong>
                  <p className="text-sm text-slate-600">{project.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
