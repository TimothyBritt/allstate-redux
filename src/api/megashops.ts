import { MegashopMockStore } from '../_mockdata/megashop';
import { AllState } from '../_types';

export const APIFetchMegashops = async (): Promise<AllState.Megashop[]> => {
    // TODO: Replace this with a real API call!
    return MegashopMockStore.getInstance().getMegashops();
};

export const APIUpdateMegashop = async (dirtyMegashop): Promise<void> => {
    // TODO: Replace this with a real API call!
    return MegashopMockStore.getInstance().updateMegashop(dirtyMegashop);
};
