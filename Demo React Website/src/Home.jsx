import React from 'react';
import { CommonNav } from './CommonNav';
import home from '../src/images/home.svg';

export const Home = () => {
    return (
        <>
            <CommonNav name="Grow your business with" imgsrc={home} visit="/service" btname="Get Started" />
        </>
    )
}
