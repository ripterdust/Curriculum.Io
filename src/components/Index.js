import React from 'react'
import { Hero } from './IndexComponents/Hero';
import { Features } from './IndexComponents/Features';

export const Index = () => {
    return (
        <div className="mainPage">
            <Hero />

            <Features />
        </div>
    )
}
