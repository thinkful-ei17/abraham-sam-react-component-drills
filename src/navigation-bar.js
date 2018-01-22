import React from 'react';
import './navigation-bar.css';
import Link from './link';
// The NavigationBar component goes here.  It should be the default export.


export default function NavigationBar(props){
  console.log(props);

  const links = props.links.map(link => <Link {...link} />);


  return(
    <div className="navigation-bar">
    <h1>{props.title}</h1>
    <nav className="navigation-bar-nav">
    <ul >
    {links}
    </ul>
    </nav>
     </div>
  );
}