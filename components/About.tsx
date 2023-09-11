import instagramPoster from '@/public/assets/instagram.png';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function AboutUs() {
    const aboutUsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!aboutUsRef?.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("motion-safe:animate-fadeIn");
            } else {
                entry.target.classList.remove("motion-safe:animate-fadeIn");
            }
        });
        observer.observe(aboutUsRef.current);
    }, []);

    return (
        <div id='#about-us' className="bg-white px-20 py-20 transition-all">
            <div className='flex space-x-12 items-center rounded-l-full bg-cream'>
                <div>
                    <div className="bg-yellow-300 rounded-full h-[350px] w-[350px] items-center overflow-hidden" ref={aboutUsRef}>
                        <Image alt="instagram-poster" src={instagramPoster} height={300} width={250} className='-top-8 left-12 relative' />
                    </div>
                </div>
                <div className='w-4/5 bg-cream px-10 py-5'>
                    <p className='text-primary text-6xl font-bold py-3'>About us</p>
                    <p className='text-quaternary py-3'>We at Committee for Campus Fauna work towards the welfare and fulfill needs of animals that reside in the campus premises.</p>
                    <p className='text-quaternary py-1'>Volunteers work actively to provide food, medical care, regular sterilization and vaccination of the campus animals. We also organize educational campaigns, workshops, and awareness programs to educate students, faculty, and the community about animal welfare issues.</p>
                </div>
            </div>
        </div>
    )
}