import React from 'react';
import ReactDOM from 'react-dom';

import Post from './post';
import Modal from 'react-modal';


document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store } />, root);
});
