import './assets/global-css/font-awesome.min.css';
import './assets/global-css/burger-menu.css';
import './assets/css/reset.css';
import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import Webfont from 'webfontloader';
import registerServiceWorker from './registerServiceWorker';

Webfont.load({
  google: {
    families: ['Montserrat', 'Roboto', 'Nunito Sans:300,400,800', 'Open Sans:300,600']
  },
  active: () => {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
  }
});
