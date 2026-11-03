"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroScene = dynamic(
  () => import("@/components/three/HeroScene"),
  { ssr: false }
);

gsap.registerPlugin(useGSAP);

export default function Hero() {
  const root = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.from(".hero-label", {
      y: 25,
      opacity: 0,
      duration: 0.8,
    })
    .from(".hero-title span", {
      y: 100,
      opacity: 0,
      stagger: 0.18,
      duration: 1.2,
    }, "-=0.4")
    .from(".hero-copy, .hero-actions", {
      y: 25,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
    }, "-=0.5")
    .from(".hero-visual", {
      opacity: 0,
      scale: 0.85,
      duration: 1.4,
    }, "-=1");

    const parallax = gsap.to(".hero-visual", {
      y: -35,
      ease: "none",
      scrollTrigger: {
        trigger: root.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    return () => parallax.kill();
  }, { scope: root });

  return (
    <section
      ref={root}
      className="min-h-dvh pt-32 px-[6%]
      grid grid-cols-1 lg:grid-cols-2
      items-center gap-10"
    >
      <div>
        <h1 className="hero-title serif-heading">
          <span className="block overflow-hidden">
            Handcrafted
          </span>
          <span className="block overflow-hidden">
            luxury in
          </span>
          <span className="block overflow-hidden">
            every bite.
          </span>
        </h1>

        <p className="hero-copy mt-8 max-w-lg leading-8">
          Single-origin cacao, ancestral grains,
          and patient craft for a richer daily ritual.
        </p>

        <div className="hero-actions flex flex-wrap
          gap-4 mt-10">
          <a href="#collections"
            className="hero-primary rounded-full px-8 py-4">
            Shop collections
          </a>

          <a href="#ingredients"
            className="hero-secondary rounded-full px-8 py-4">
            Explore flavors
          </a>
        </div>

        <p className="hero-note mt-10 text-sm">
          Starting at ₹499 per box. No refined sugar.
        </p>
      </div>

      <div className="hero-visual h-[430px]
        lg:h-[650px] relative">
        <HeroScene />
      </div>
    </section>
  );
}