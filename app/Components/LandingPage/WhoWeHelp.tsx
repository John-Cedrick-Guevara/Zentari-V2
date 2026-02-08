"use client";
import React from "react";
import { motion } from "motion/react";
import { Building2, LayoutDashboard, Rocket, Settings } from "lucide-react";
import WhyUs from "./WhyUs";

const clientTypes = [
  {
    title: "Startups",
    description:
      "Launch your MVP fast with scalable architecture that grows with your users.",
    icon: Rocket,
  },
  {
    title: "SMEs",
    description:
      "Automate manual workflows and modernize legacy systems to increase efficiency.",
    icon: Settings,
  },
  {
    title: "Enterprises",
    description:
      "Secure, compliant, and robust software solutions for complex organizational needs.",
    icon: Building2,
  },
  {
    title: "Internal Systems",
    description:
      "Custom internal tools and dashboards that empower your workforce.",
    icon: LayoutDashboard,
  },
];

const WhoWeHelp = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div>
          <div className="mb-16 md:text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 block">
              Our Clients
            </span>
            <h2 className="heading mb-6">Who we build for</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {clientTypes.map((client, index) => {
              const Icon = client.icon;
              return (
                <motion.div
                  key={client.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                >
                  {Icon && (
                    <Icon className="w-50 h-50 text-black/10 absolute top-0 left-0 bottom-0 right-0 mx-auto my-auto" />
                  )}
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                    {client.title}
                  </h3>
                  <p className=" text-slate-500 leading-relaxed">
                    {client.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
