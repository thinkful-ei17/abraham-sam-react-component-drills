import React from 'react';

import './navigation-bar.css';

// The NavigationBar component goes here.  It should be the default export.

export default function NavigationBar(props){
  return(
    <div>
     <a href={props.href}>{props.text}</a>
     </div>
  );
}