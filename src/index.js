import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Webfont from 'webfontloader';
// import './assets/css/typography.css';
import './assets/global-css/burger-menu.css';
import './assets/css/reset.css';
import './index.css';

Webfont.load({
  google: {
    families: [
      'Arimo',
      'Montserrat',
      'Lato',
      'Roboto',
      'Nunito Sans',
      'Open Sans'
    ]
  },
  active: () => {
    ReactDOM.render(<App />, document.getElementById('root'));
    registerServiceWorker();
  }
});
