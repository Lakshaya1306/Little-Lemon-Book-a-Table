import React from "react";

function Header() {
  return (
    <header>
      <h1 aria-label="Little Lemon Restaurant">Little Lemon</h1>

      <nav>
        <ul>
          <li>
            <a href="#booking">Reserve a Table</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
