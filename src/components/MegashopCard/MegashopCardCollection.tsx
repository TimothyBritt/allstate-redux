import React from 'react';
import { AllState } from '_types';
import MegashopCard from './MegashopCard';

import './megashopCard.scss';

interface MegashopCardCollectionProps {
    megashops: AllState.Megashop[];
}

const MegashopCardCollection: React.FC<MegashopCardCollectionProps> = ({ megashops }) => {
    const renderMegashopCards = () => {
        return megashops.map((megashop) => {
            return <MegashopCard key={megashop.id} megashop={megashop} />;
        });
    };
    return <div className="megashopCollection">{renderMegashopCards()}</div>;
};

export default MegashopCardCollection;
