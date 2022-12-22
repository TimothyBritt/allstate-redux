import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getMegashops, setSelectedMegashop } from 'features/megashops/megashopsSlice';
import MegashopCardCollection from 'components/MegashopCard/MegashopCardCollection';
import React from 'react';

import './megashopSelector.scss';
import { RootState } from 'app/store';

const MegashopSelector: React.FC = () => {
    const dispatch = useAppDispatch();
    const megashops = useAppSelector((state: RootState) => state.megashops.megashops);

    React.useEffect(() => {
        console.log('MegashopSelector mounted');

        dispatch(getMegashops());

        return () => {
            console.log('MegashopSelector unmounted');
        };
    }, [dispatch]);

    return (
        <div id="megashopSelector">
            <h1>Megashop Selector</h1>
            <MegashopCardCollection megashops={megashops} />
        </div>
    );
};

export default MegashopSelector;
