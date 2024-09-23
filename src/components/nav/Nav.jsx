import './Nav.css';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa';
import { AiOutlineBell } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';

const Nav = () => {
  return (
    <header>
      <div className="left">
        <FaBars className="icons" />
        <Image src="/images/clubLogo.png" alt="Logo Club La Nación" />
      </div>

      <div className="center">
        <input type="text" placeholder="Busca un comercio..." />
        <input type="text" placeholder="Ingresa una ubicación..." />
        <Image src="/images/lupa.png" />
      </div>

      <div className="right">
        <AiOutlineBell className="icons" />
        <CiHeart className="icons" />
        <Image src="/images/happyFace.png" alt="face smiling" width={24} />
      </div>
    </header>
  );
};

export default Nav;
