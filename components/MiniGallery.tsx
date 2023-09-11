import Image from 'next/image';

import dog1 from '@/public/assets/dog-1.png';
import dog2 from '@/public/assets/dog-2.png';
import dog3 from '@/public/assets/dog-3.png';
import dog4 from '@/public/assets/dog-4.png';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function MiniGallery() {
    const miniGalleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!miniGalleryRef?.current) return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("motion-safe:animate-fadeIn");
            } else {
                entry.target.classList.remove("motion-safe:animate-fadeIn");
            }
        });
        observer.observe(miniGalleryRef.current);
    }, []);

    return (
        <div className="bg-cream px-20 py-16 space-y-16">
            <div className='flex justify-evenly' ref={miniGalleryRef}>
                <Image src={dog1} alt='dog-image' width={200} height={200} className='ml-4 transition-all duration-500' />
                <Image src={dog2} alt='dog-image' width={200} height={200} className='mx-4 transition-all duration-500' />
                <Image src={dog3} alt='dog-image' width={200} height={200} className='mx-4 transition-all duration-500' />
                <Image src={dog4} alt='dog-image' width={200} height={200} className='mr-4 transition-all duration-500' />
            </div>
            <div className='flex justify-center'>
                <p className='text-quaternary mx-auto text-large'>Follow us on Instagram
                    <span className='font-medium hover:text-blue-900 cursor-pointer'>
                        <Link target='_blank' href="https://instagram.com/iitroorkee_cares?igshid=MzRlODBiNWFlZA==">@iitoorkee_cares</Link>
                    </span>
                </p>
            </div>
        </div>
    )
}