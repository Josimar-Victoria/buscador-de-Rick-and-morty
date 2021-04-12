import React, { useState,useContext } from "react";
import ThemeContext from '../context/ThemeContext'

const Header = () => {
  const [darkMode, setdarkMode] = useState(false);
   const color = useContext(ThemeContext)
  const handleClik = () => {
      setdarkMode(!darkMode)
  }
  return (
    <div className="header">
      <h1 style={{color}}>morty</h1>
      <button type="button"onClick={handleClik}>{darkMode ? 'Dark Mode': 'Light mode'}</button>
    </div>
  );
};
export default Header;
