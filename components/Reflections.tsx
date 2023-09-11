import Image from "next/image";
import avatar from "@/public/assets/avatar.png"
import { useEffect, useRef } from "react";

export default function Reflections() {
    const reflectionsRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!reflectionsRef?.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("motion-safe:animate-fadeIn");
            } else {
                entry.target.classList.remove("motion-safe:animate-fadeIn");
            }
        });
        observer.observe(reflectionsRef.current);
    }, []);

    return (

        <div id='#reflections' className="bg-cream px-20 py-20">
            <p className='text-primary text-6xl font-bold w-3/5'>Reflections From Our Community</p>
            <div className="py-8 flex justify-between" ref={reflectionsRef}>
                <div className="bg-white p-8 mr-7 rounded shadow-md flex flex-col space-y-12">
                    <p className=" text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci vestibulum, faucibus massa sed, luctus lectus. Donec accumsan sem id ligula consequat, nec blandit lacus auctor. Quisque convallis dolor et metus mattis dignissim. Suspendisse potenti.</p>
                    <div className="flex items-center space-x-2">
                        <Image alt="author" src={avatar} height={32} width={32} />
                        <p className="text-secondary text-base">Manasvi</p>
                    </div>
                </div>
                <div className="bg-white p-8 mr-7 rounded shadow-md flex flex-col space-y-12">
                    <p className=" text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci vestibulum, faucibus massa sed, luctus lectus. Donec accumsan sem id ligula consequat, nec blandit lacus auctor. Quisque convallis dolor et metus mattis dignissim. Suspendisse potenti.</p>
                    <div className="flex items-center space-x-2">
                        <Image alt="author" src={avatar} height={32} width={32} />
                        <p className="text-secondary text-base">Manasvi</p>
                    </div>
                </div>
                <div className="bg-white p-8 mr-7 rounded shadow-md flex flex-col space-y-12">
                    <p className=" text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec orci vestibulum, faucibus massa sed, luctus lectus. Donec accumsan sem id ligula consequat, nec blandit lacus auctor. Quisque convallis dolor et metus mattis dignissim. Suspendisse potenti.</p>
                    <div className="flex items-center space-x-2">
                        <Image alt="author" src={avatar} height={32} width={32} />
                        <p className="text-secondary text-base">Manasvi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}