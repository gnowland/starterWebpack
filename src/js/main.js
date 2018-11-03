/* global document sweetAlert */

import app from './app';
import './sweet-alert';

document.addEventListener('DOMContentLoaded', () => {
  const myConst = 'test ES6 transpiling';
  app.init(); // testing my custom module
  sweetAlert('Hello world!'); // testing old skool external plugin import
});
