import React, { useState, useEffect } from "react";
import "./Nav.css";

const navData = [
  { label: "Home", href: "#" },
  { label: "Courses", href: "#" },
  { label: "Notes || PYQP", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact Us", href: "#" },
];

const Nav = () => {
  const [login, setLogin] = useState(false); // introduce a state variable

  useEffect(() => {
    // you can add any side effects or logic here based on the login state
  }, [login]);

  const handleLoginClick = () => {
    setLogin(!login); // toggle the login state
  };

  return (
    <nav className="h-24  navbar navbar-expand-lg navbar-light bg-light flex justify-around items-center">
      <div className="logo">
        {/* for logo  */}
        <a className="logo text-2xl cursor-pointer" href="#">
          LEARN & GROW
        </a>
      </div>
      <div className="navbar">
        {/* for nav links */}
        <ul className="flex gap-3 items-center text-xl">
          {navData.map((item, index) => (
            <li key={index} className="nav-item">
              <a className="nav-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              onClick={handleLoginClick}
            >
              {login ? "Login" : "Register/Sign In"}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;