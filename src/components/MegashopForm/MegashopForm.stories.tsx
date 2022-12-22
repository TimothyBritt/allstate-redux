import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import MegashopForm from './MegashopForm';

export default {
    title: 'RenameMe/MegashopForm',
    component: MegashopForm,
} as ComponentMeta<typeof MegashopForm>;

const Template: ComponentStory<typeof MegashopForm> = (args) => <MegashopForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};