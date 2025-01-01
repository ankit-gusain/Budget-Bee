import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';

function Header() {
    return (
        <div className="p-5 flex justify-between items-center shadow-md bg-gradient-to-r from-black via-gray-900 to-gray-800">
            {/* Logo */}
            <div>
                <Image
                    src={'/mylogo.svg'}
                    width={75}
                    height={50}
                    alt="logo"
                    className="hover:opacity-90 transition-opacity duration-300"
                />
            </div>

            {/* Button */}
            <Button className="relative px-5 py-2 text-gray-300 border border-gray-600 rounded-md bg-gray-800 transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white active:scale-95 focus:outline-none focus:ring focus:ring-gray-500">
                Get Started
                <span className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-700 to-black opacity-20 rounded-md"></span>
            </Button>
        </div>
    );
}

export default Header;
