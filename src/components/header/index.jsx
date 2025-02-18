import React from "react";
import Container from "./../container/index";
import { Link } from "react-router-dom";
import { PiVirus } from "react-icons/pi";

const Header = () => {
  return (
    <div className="border-b border-gray-400 bg-blue-900 text-white">
      <Container design="flex justify-between items-center ">
        <Link to="/" className="flex gap-3 items-center">
          <PiVirus className="text-4xl text-red-600" />
          <span className="font-semibold">Covid 19</span>
        </Link>

        <nav className="flex gap-4">
          <a href="#">Anasayfa</a>
          <a href="#">Sonuçlarımız</a>
          <a href="#" className="max-md:hidden">
            Hakkımızda
          </a>
          <a href="#" className="max-lg:hidden">
            İletişim
          </a>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
