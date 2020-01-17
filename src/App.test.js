import React from 'react';
import { render } from '@testing-library/react';
import REACTDOM from 'react-dom';
import App from './App';
import Datalist from './datalist'

test('Datalist-test', () => {
  const div= document.createElement("div");
  REACTDOM.render(<Datalist/>,div)
});
