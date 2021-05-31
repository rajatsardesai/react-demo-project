import React from 'react';
import { CommonNav } from './CommonNav';
import about from '../src/images/about.svg'

export const About = () => {
    return (
        <>
            <CommonNav name="Welcome to About page" imgsrc={about} visit="/contact" btname="Contact Now" />
        </>
    )
}
