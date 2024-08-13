// src/components/TopBanner.js
import React from 'react';

const TopIndigoBanner = () => {
    return (
        <div className="w-full h-48 md:h-64 lg:h-80 flex items-center justify-center text-white rounded-xl overflow-hidden relative bg-gradient-to-r from-indigo-500 to-indigo-300 shadow-lg shadow-indigo-500/50">
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center z-10 px-4 md:px-8 lg:px-12 xl:px-16">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">Welcome to Our Website</h1>
                    <p className="text-sm md:text-base lg:text-lg xl:text-xl mt-2">This is a fully responsive top banner with a smooth merging image.</p>
                </div>
                <div className="relative h-full w-full hidden md:block">
                    <img src="./images/violet_test.jpeg" alt="Banner" className="absolute right-0 top-0 w-full h-full object-cover transition-transform duration-300 ease-in-out" style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 30%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)' }} />
                </div>
            </div>
        </div>
    );
}

export default TopIndigoBanner;
