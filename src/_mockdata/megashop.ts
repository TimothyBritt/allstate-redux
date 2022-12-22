import { AllState } from '../_types';
import { v4 as uuid } from 'uuid';
import { faker } from '@faker-js/faker';

export class MegashopMockStore {
    private megashops: AllState.Megashop[] = [];
    private static instance: MegashopMockStore;

    private constructor() {
        this.megashops = generateMegashops(3);
        MegashopMockStore.instance = this;
    }

    public static getInstance() {
        if (!MegashopMockStore.instance) {
            MegashopMockStore.instance = new MegashopMockStore();
        }
        return MegashopMockStore.instance;
    }

    public getMegashops(): AllState.Megashop[] {
        return MegashopMockStore.getInstance().megashops;
    }

    public getMegashop(id: string): AllState.Megashop {
        return MegashopMockStore.getInstance().megashops.filter(
            (megashop) => megashop.id === id
        )[0];
    }

    public addMegashop(megashop: AllState.Megashop): void {
        MegashopMockStore.getInstance().megashops.push(megashop);
    }

    public addMegashops(megashops: AllState.Megashop[]): void {
        const instance = MegashopMockStore.getInstance();
        instance.megashops = instance.megashops.concat(megashops);
    }

    public deleteMegashop(id: string): void {
        const instance = MegashopMockStore.getInstance();
        instance.megashops = instance.megashops.filter((megashop) => megashop.id !== id);
    }

    public updateMegashop(megashop: AllState.Megashop): void {
        const instance = MegashopMockStore.getInstance();
        instance.megashops = instance.megashops.map((m) => {
            if (m.id === megashop.id) {
                return megashop;
            }
            return m;
        });
    }
}

export const generateMegashop = (): AllState.Megashop => {
    return {
        id: uuid(),
        name: `${faker.company.catchPhraseAdjective()} MegaShop`,
        description: `${faker.company.catchPhrase()}`,
        vendorCode: Math.random().toString(36).slice(8).toUpperCase(),
        allowCallbacksWhenOpen: true,
        allowVoicemailAsTask: true,
        alternatePath: 'AlternatePath',
        alternateRouting: true,
        branchLocation: 'Virtual',
        branchType: 'Virtual',
        callDirectorModule: 'Director module',
        closedGreeting: 'Sorry, we are closed',
        closedModule: 'A module',
        DNIS: ['DNI1', 'DNI2'],
        emergencyGreetingEnabled: true,
        emergencyGreetingValue: 'Hi this is an emergency greeting',
        openClosedOverride: true,
        openGreeting: 'Hello this is a greeting',
        queueARN: 'some-queue-arn',
    };
};

export const generateMegashops = (count: number): AllState.Megashop[] => {
    return Array(count)
        .fill(null)
        .map(() => generateMegashop());
};
