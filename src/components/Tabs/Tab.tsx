import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import './Tab.css';

export const Tab: React.FC<{ name: string; path: string }> = ({
  name,
  path,
}) => {
  const location = useLocation();
  const classNames = [
    location.pathname === path ? 'isActive' : 'isInactive',
    'tab',
  ].join(' ');

  return (
    <li className={classNames}>
      <NavLink className="nav-link" to={path}>
        {name}
      </NavLink>
    </li>
  );
};
