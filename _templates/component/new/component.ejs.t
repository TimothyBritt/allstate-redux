---
to: src/components/<%= name %>/<%= Name %>.tsx
---
import React from 'react';

import './<%= h.changeCase.camel(name) %>.scss'

const <%= name %>: React.FC = () => {
    return (
        <div id="<%= h.changeCase.camel(name) %>"></div>
    )
};

export default <%= name %>;