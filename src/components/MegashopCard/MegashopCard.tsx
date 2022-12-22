import React from 'react';
import { AllState } from '_types';
import { setSelectedMegashop } from 'features/megashops/megashopsSlice';
import { useAppDispatch } from 'app/hooks';
import { Link } from 'wouter';

import './megashopCard.scss';

interface MegashopCardProps {
    megashop: AllState.Megashop;
}

const MegashopCard: React.FC<MegashopCardProps> = ({ megashop }) => {
    const dispatch = useAppDispatch();

    const handleSelect = () => {
        dispatch(setSelectedMegashop(megashop));
    };

    return (
        <div className="megashopCard">
            <h1>{megashop.name}</h1>
            <p>{megashop.description}</p>
            <p>Vendor Code: {megashop.vendorCode}</p>
            <Link href={`/megashops/${megashop.id}`}>Configure</Link>
        </div>
    );
};

export default MegashopCard;
