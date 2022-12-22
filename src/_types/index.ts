export namespace AllState {
    export interface Megashop {
        id: string;
        name: string;
        description: string;
        vendorCode: string;
        allowCallbacksWhenOpen: boolean;
        allowVoicemailAsTask: boolean;
        alternatePath: string;
        alternateRouting: boolean;
        branchLocation: string;
        branchType: string;
        callDirectorModule: string;
        closedGreeting: string;
        closedModule: string;
        DNIS: string[];
        emergencyGreetingEnabled: boolean;
        emergencyGreetingValue: string;
        openClosedOverride: boolean;
        openGreeting: string;
        queueARN: string;
    }
}
