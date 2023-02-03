import React from 'react';
import { Link } from 'react-router-dom';


const Button = ({to, name, target, rel}) => {
   return (
      <Link to={to} target={target} rel={rel}>
        <button className="btn">{name}</button> 
      </Link>
   );
}

export default Button;
