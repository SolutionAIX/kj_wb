"use client";
import { Toaster } from "@/components/ui/toaster";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Course from "../course/Course";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <>
    <div className="fixed top-0 left-0 w-ful h-full bg-no-repeat bg-cover z-[-1]" style={{ backgroundImage: `url('./images/background_blick.png')`, width:'100%' }}>
      </div>
      <div className="relative mb-12 ">
        <Course/>
        </div>
      <Toaster />
    </>
  );
}
