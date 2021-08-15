import React from 'react';
import ReactDOM from 'react-dom';
import webComponent from 'react-to-webcomponent'

import App from './App'

const ascsac = webComponent(App, React, ReactDOM)
customElements.define('ascsac-chat', ascsac)