"use client"
import AboutUs from "@/components/About";
import { FAQs } from "@/components/FAQs";
import MiniGallery from "@/components/MiniGallery";
import NavBar from "@/components/NavBar";
import Reflections from "@/components/Reflections";
import homeDog from '@/public/assets/homeDog.png';
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {

  const imageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!imageRef?.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("motion-safe:animate-fadeIn");
      } else {
        entry.target.classList.remove("motion-safe:animate-fadeIn");
      }
    });
    observer.observe(imageRef.current);
  }, []);

  return (
    <div>
      <NavBar />
      <div id="#home" className="bg-cream px-20 flex justify-between py-12 items-center">
        <div className="flex flex-col w-3/5 space-y-4">
          <p className="text-primary text-6xl font-bold">Caring For The Fauna Of Campus</p>
          <p className="text-secondary font-medium text-xl">Committee for Campus Fauna - IIT Roorkee</p>
          <p className="text-primary text-lg font-medium">Your donations can bring happiness and well-being to the furry friends at IIT Roorkee {':)'}</p>
          <div className="flex space-x-6">
            <button className="text-white text-base font-medium px-9 py-2 bg-primary border border-primary rounded-md hover:text-primary hover:bg-cream hover:border-primary transition-all duration-300">Donate</button>
            <button className="text-primary text-base font-medium px-6 py-2 border border-primary rounded-md hover:text-white hover:bg-primary transition-all duration-300">Know more</button>
          </div>
        </div>
        <div ref={imageRef}>
          <Image src={homeDog} alt="home-dog-image" height={450} width={450} className="rounded" />
        </div>
      </div>
      <AboutUs />
      <Reflections />
      <FAQs />
      <MiniGallery />
    </div >
  )
}
