import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useCallback } from "react";
import Particles from "react-particles";
import './banner.css'
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

import img1 from '../../assets/image/banner/baner1.jpg'
const Banner = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
        // await console.log(container.canvas);

        container.canvas.size.height = 500;
        container.canvas.size.width = 500;
        await console.log(container.canvas.size);
    }, []);
    return (
        <div className='h-[600px] max-h-full arif banner relative'>
            <img className='h-full w-full' src={img1} alt="" />
            <div className='absolute  h-full flex items-center left-0 top-0 bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0) ]'>
                <div className='w-4/5 pl-10'>
                    <h2 className='text-4xl md:text-4xl line-clamp-2 lg:text-7xl leading-tight  text-[#34ffea] font-bold'>We Make Your <span className='text-[#002b9d]'>Sport Toys</span></h2>
                    <p className=' text-white mt-10 font-medium text-2xl'>Buy the best sport & kitten toys from mewmewshop. From refillable catnip toys to laser pointers and interactive sport toys, playtime will be more entertaining.</p>
                    <div className='banner-btn mt-10'>

                        <button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Bye Now

                        </button>
                    </div>
                </div>
                <div className='w-1/5'></div>
            </div>
            {/* <div className='w-full h-full'>
                <Particles className='h-[500px]'
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "",
                            },
                        },
                        fpsLimit: 50,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 3,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div> */}

        </div>
    );
};

export default Banner;