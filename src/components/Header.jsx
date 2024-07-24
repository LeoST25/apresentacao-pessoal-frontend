// eslint-disable-next-line no-unused-vars
import React from 'react';
import myImage from '../assets/leo.png'

const Header = () => {
  return (
    <header className="header bg-blue-600 text-white p-4 text-center">
      <img src= {myImage} alt="Profile" className="profile-img"/>
      <h1 className="text-4xl">Leonardo Matheus</h1>
      <p className="text-xl">Desenvolvedor Backend Jr</p>
    </header>
  );
};

export default Header;