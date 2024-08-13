"use client";
import { MainPage } from "@/components/home/MainPage";
import { Toaster } from "@/components/ui/toaster";
import { TopCarousel } from "@/components/home/top-carousel";
import Logout from "@/components/navbar/logout";
import MarkdownRender from "@/components/markdown-render/MarkdownRender";
import AboutMe from "./Hero";
import Career from "./Career";
import Certifications from "./Certifications";
import Awards from "./Awards";
import Education from "./Education";
import Languages from "./Languages";
import Technology from "./Technology";

export default function Portfolio() {

  return (
    <>
      {/* <MainPage /> */}
      {/* <h1>Portfolio</h1> */}
      <AboutMe />
      <Career />
      <Certifications />
      <Awards />
      <Education />
      <Languages />
      <Technology />
      <Toaster />
    </>
  );
}
