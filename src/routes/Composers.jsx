import React from 'react';
import { CardFrame } from '../components/CardFrame';
import { NavigationBar } from '../components/NavigationBar';
import composersInfo from '../resources/composerInfo';

export const Composers = () => {
    return (
        <div>
            <NavigationBar />
            <CardFrame img={composersInfo[0].photo} title={composersInfo[0].name} body={composersInfo[0].profile} badgeText={composersInfo[0].period} />
        </div>
    )
}

export default Composers;