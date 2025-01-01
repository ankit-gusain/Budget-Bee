import React from 'react';

function Hero() {
    return (
        <section className="bg-gradient-to-b from-black to-gray-900 text-gray-300">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className="text-4xl font-extrabold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent sm:text-6xl animate-fade-in"
                    >
                        Understand User Flow.
                        <span className="sm:block text-gray-500">Increase Conversion.</span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-xl text-gray-400 sm:text-lg leading-relaxed animate-slide-up">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="relative inline-block px-12 py-3 text-sm font-medium text-gray-300 border border-gray-700 rounded shadow-md transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white focus:outline-none focus:ring focus:ring-gray-500 active:scale-95"
                            href="#"
                        >
                            Learn More
                            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-gray-700 to-black opacity-10 rounded"></span>
                        </a>
                        <a
                            className="inline-block px-12 py-3 text-sm font-medium text-gray-200 bg-gray-800 rounded shadow-md transition duration-300 ease-in-out hover:bg-gray-700 hover:scale-105 focus:outline-none focus:ring focus:ring-gray-600 active:scale-95"
                            href="#"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
