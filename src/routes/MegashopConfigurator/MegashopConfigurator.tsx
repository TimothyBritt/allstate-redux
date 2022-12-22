/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import MegashopForm from 'components/MegashopForm';
import { setSelectedMegashop } from 'features/megashops/megashopsSlice';
import React from 'react';
import { AllState } from '_types';

import './megashopConfigurator.scss';

interface MegashopConfiguratorProps {
    id: string;
}

const MegashopConfigurator: React.FC<MegashopConfiguratorProps> = ({ id }) => {
    const dispatch = useAppDispatch();
    const megashops = useAppSelector((state: RootState) => state.megashops.megashops);
    const selectedMegashop = megashops.filter((megashop) => megashop.id === id)[0];

    return (
        <div id="megashopConfigurator">
            <h2>Megashop Configurator</h2>
            <MegashopForm megaShop={selectedMegashop} />
        </div>
    );
};

export default MegashopConfigurator;
