import { useAppDispatch, useAppSelector } from 'app/hooks';
import { RootState } from 'app/store';
import React from 'react';
import { AllState } from '_types';
import { updateMegashop } from 'features/megashops/megashopsSlice';

import './megashopForm.scss';

interface MegashopFormProps {
    megaShop: AllState.Megashop | null;
}

const MegashopForm: React.FC<MegashopFormProps> = ({ megaShop }) => {
    const dispatch = useAppDispatch();
    const megaShopselectedMegashop = useAppSelector(
        (state: RootState) => state.megashops.selectedMegashop
    );

    const [name, setName] = React.useState(megaShop?.name || '');
    const [description, setDescription] = React.useState(megaShop?.description || '');
    const [vendorCode, setVendorCode] = React.useState(megaShop?.vendorCode || '');
    const [allowCallbacksWhenOpen, setAllowCallbacksWhenOpen] = React.useState(
        megaShop?.allowCallbacksWhenOpen || false
    );
    const [allowVoicemailAsTask, setAllowVoicemailAsTask] = React.useState(
        megaShop?.allowVoicemailAsTask || false
    );
    const [alternatePath, setAlternatePath] = React.useState(megaShop?.alternatePath || '');
    const [alternateRouting, setAlternateRouting] = React.useState(
        megaShop?.alternateRouting || false
    );
    const [branchLocation, setBranchLocation] = React.useState(megaShop?.branchLocation || '');
    const [branchType, setBranchType] = React.useState(megaShop?.branchType || '');
    const [callDirectorModule, setCallDirectorModule] = React.useState(
        megaShop?.callDirectorModule || ''
    );
    const [closedGreeting, setClosedGreeting] = React.useState(megaShop?.closedGreeting || '');
    const [closedModule, setClosedModule] = React.useState(megaShop?.closedModule || '');
    const [DNIS, setDNIS] = React.useState(megaShop?.DNIS || ['']);
    const [emergencyGreetingEnabled, setEmergencyGreetingEnabled] = React.useState(
        megaShop?.emergencyGreetingEnabled || false
    );
    const [emergencyGreetingValue, setEmergencyGreetingValue] = React.useState(
        megaShop?.emergencyGreetingValue || ''
    );
    const [openClosedOverride, setOpenClosedOverride] = React.useState(
        megaShop?.openClosedOverride || false
    );
    const [openGreeting, setOpenGreeting] = React.useState(megaShop?.openGreeting || '');
    const [queueARN, setQueueARN] = React.useState(megaShop?.queueARN || '');
    const [isDirty, setIsDirty] = React.useState(false);

    const assembleLocalMegashop = () => {
        return {
            id: megaShop!.id,
            name,
            description,
            vendorCode,
            allowCallbacksWhenOpen,
            allowVoicemailAsTask,
            alternatePath,
            alternateRouting,
            branchLocation,
            branchType,
            callDirectorModule,
            closedGreeting,
            closedModule,
            DNIS,
            emergencyGreetingEnabled,
            emergencyGreetingValue,
            openClosedOverride,
            openGreeting,
            queueARN,
        };
    };

    const configIsDirty = (a: AllState.Megashop, b: AllState.Megashop) => {
        return JSON.stringify(a) !== JSON.stringify(b);
    };

    React.useEffect(() => {
        if (megaShop) {
            const localMegashop = assembleLocalMegashop();
            const isDirty = configIsDirty(localMegashop, megaShop);
            setIsDirty(isDirty);
        }
    });

    const saveMegashop = () => {
        dispatch(updateMegashop(assembleLocalMegashop()));
    };

    const renderDirtyState = () => {
        if (isDirty) {
            return (
                <div className="megashopConfigurator__dirtyState">
                    <p>Changes have been made to this configuration.</p>
                    <button onClick={saveMegashop}>Save</button>
                </div>
            );
        }
    };

    if (!megaShop) {
        return <div>MegaShop Not Found! Database might have changed since last render.</div>;
    }
    return (
        <div className="megashopForm">
            <div className="megashopConfigurator__form">
                <div className="megashopConfigurator__form__row">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="megashopConfigurator__form__row">
                    <label htmlFor="name">Description</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="megashopConfigurator__form__row">
                    <label htmlFor="name">Vendor Code</label>
                    <input
                        type="text"
                        id="Vendor Code"
                        value={vendorCode}
                        onChange={(e) => setVendorCode(e.target.value)}
                    />
                </div>
                {/* ... */}

                {renderDirtyState()}
            </div>
        </div>
    );
};

export default MegashopForm;
