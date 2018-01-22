import React from 'react';

export default function Link(props){
  return(
    <li>
      <a href={props.href}>{props.text}</a>
    </li>
  );
}
