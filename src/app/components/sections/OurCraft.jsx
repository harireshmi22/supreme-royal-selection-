"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const steps = [
  {
    number: "01",
    title: "The origin",
    description:
      "Carefully selected single-origin cacao from Kerala.",
    color: "#c5a27c",
  },
  {
    number: "02",
    title: "The patience",
    description:
      "Slow stone roasting and traditional chocolate craft.",
    color: "#8d6048",
  },
  {
    number: "03",
    title: "The creation",
    description:
      "Every bar handcrafted with attention to detail.",
    color: "#bd9254",
  },
];

export default function OurCraft() {
  const root = useRef(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray(".craft-panel");

    panels.forEach((panel) => {
      gsap.from(panel.querySelector(".craft-image"), {
        scale: 1.2,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: panel,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(panel.querySelector(".craft-content"), {
        x: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: panel,
          start: "top 70%",
          once: true,
        },
      });
    });
  }, { scope: root });

  return (
    <section
      ref={root}
      id="craft"
      className="section-padding bg-[#eee4d8]"
    >
      <div className="mb-20">
        <p className="text-[#a92d13] mb-5">
          — The art of chocolate
        </p>

        <h2 className="serif-heading max-w-3xl">
          A slower way to create something extraordinary.
        </h2>
      </div>

      <div className="space-y-20">
        {steps.map((step) => (
          <div
            key={step.number}
            className="craft-panel grid md:grid-cols-2
            gap-10 items-center"
          >
            <div className="overflow-hidden">
              <div
                role="img"
                aria-label={step.title}
                className="craft-image aspect-[5/4] w-full"
                style={{
                  background: `linear-gradient(135deg, ${step.color}, #1b100d)`,
                }}
              />
            </div>

            <div className="craft-content">
              <p className="text-[#a92d13]">
                {step.number} / OUR PROCESS
              </p>

              <h3 className="text-5xl mt-6">
                {step.title}
              </h3>

              <p className="mt-6 leading-8
                text-[#78675d] max-w-md">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}