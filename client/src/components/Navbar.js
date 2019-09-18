import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item class="inverted violet button">
        Home
      </Menu.Item>
    </Link>
    <Link to="/about">
      <Menu.Item class="inverted teal button">
        About
      </Menu.Item>
    </Link>
    <Link to="/stores">
      <Menu.Item class="inverted green button">
        Store
      </Menu.Item>
    </Link>
  </Menu>
);


export default Navbar;