import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from './navigation-bar';
import registerServiceWorker from './registerServiceWorker';

const links = [{
  text: 'Courses',
  href: 'http://www.thinkful.com/courses/'
}, {
  text: 'Mentorship',
  href: 'http://www.thinkful.com/mentorship/'
}];

ReactDOM.render(
  <NavigationBar title="Thinkful" links={links} />, 
  document.getElementById('root'));
registerServiceWorker();
