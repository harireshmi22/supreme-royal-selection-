"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({
    children,
}) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        });

        lenis.on("scroll", ScrollTrigger.update);

        const ticker = (time) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(ticker);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}