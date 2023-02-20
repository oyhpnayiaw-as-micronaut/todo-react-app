import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'hooks/useOnClickOutside';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));

  return (
    <nav className="navbar">
      <ul>
        {links.map((link) => {
          return (
            <li key={link.text}>
              <NavLink
                to={link.path}
                style={({ isActive }) => ({
                  color: isActive ? 'blue' : 'grey',
                })}
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
