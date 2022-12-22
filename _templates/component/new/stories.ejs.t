---
to: src/components/<%= name %>/<%= name %>.stories.tsx
---
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import <%= name %> from './<%= name %>';

export default {
    title: 'RenameMe/<%= name %>',
    component: <%= name %>,
} as ComponentMeta<typeof <%= name %>>;

const Template: ComponentStory<typeof <%= name %>> = (args) => <<%= name %> {...args} />;

export const Primary = Template.bind({});
Primary.args = {};