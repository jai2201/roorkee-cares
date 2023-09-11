import Image from "next/image";
import logo from '../public/assets/logo.png'
import Link from "next/link";
import React from "react";

export default function NavBar() {

    return (
        <React.Fragment>
            <div className="flex px-20 justify-between py-2 bg-cream">
                <div className="flex space-x-16 items-center">
                    <Image src={logo} alt="logo" height={48} width={52} />
                </div>
                <div className="flex space-x-6 items-center">
                    <Link href='/gallery'><button className="text-primary text-base font-medium px-6 py-2 border border-primary rounded-md hover:bg-primary hover:text-white transition-all duration-300">Gallery</button></Link>
                    <Link href='/donate'>
                        <button className="text-white text-base font-medium px-6 py-2 bg-primary border border-primary rounded-md hover:text-primary hover:bg-cream hover:border-primary transition-all duration-300">Donate</button>
                    </Link>
                </div>
            </div>
        </React.Fragment >
    )
}