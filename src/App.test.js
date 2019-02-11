import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// do not touch while using this code
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
