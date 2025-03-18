"use client"
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Hero = () => {
    return (
        <div
            className="hero h-screen"
            style={{
                backgroundImage: "url(/img/hero.jpg)",
            }}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="text-xl font-bold">Welcome to</h1>

                    <h1 className="mb-5 text-5xl font-bold">Bliss Bites</h1>
                    <span className='text-lg'>
                        <Typewriter
                            words={['Freshly baked, delicious, and delivered to you!']}
                            loop={40}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}

                        />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero