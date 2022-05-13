import React from 'react';
import { CardFrame } from '../components/CardFrame';
import { NavigationBar } from '../components/NavigationBar';

export const Composers = () => {
    return (
        <div>
            <NavigationBar />
            <CardFrame title={"Test"} body={"Let's get it!"} badgeText={"Test on badge"} />
        </div>
    )
}

export default Composers;