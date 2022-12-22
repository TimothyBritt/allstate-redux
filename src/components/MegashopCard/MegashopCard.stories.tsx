import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MegashopCard from './MegashopCard';
import { generateMegashop } from '_mockdata/megashop';

export default {
    title: 'RenameMe/MegashopCard',
    component: MegashopCard,
} as ComponentMeta<typeof MegashopCard>;

const Template: ComponentStory<typeof MegashopCard> = (args) => <MegashopCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    megashop: generateMegashop(),
};
