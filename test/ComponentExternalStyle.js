import React from 'react';
import { style } from 'glamor'

const css = style({ color: 'red' })

const ComponentExternalStyle = () => React.createElement('div', {...css})
export default ComponentExternalStyle


