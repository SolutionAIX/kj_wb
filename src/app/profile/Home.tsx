"use client";
import { MainPage } from "@/components/home/MainPage";
import { Toaster } from "@/components/ui/toaster";
import { TopCarousel } from "@/components/home/top-carousel";
import Logout from "@/components/navbar/logout";
import MarkdownRender from "@/components/markdown-render/MarkdownRender";

export default function Home() {

  return (
    <>
      {/* <MainPage /> */}
      <MarkdownRender/>
      <Toaster />
    </>
  );
}
