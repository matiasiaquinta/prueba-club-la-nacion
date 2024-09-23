import './Nav.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineBell } from 'react-icons/ai';
import { CiHeart } from 'react-icons/ci';

const Nav = () => {
  return (
    <header>
      <div className="left">
        <FaBars className="icons" />
        <img src="/images/clubLogo.png" alt="Logo Club La Nación" />
      </div>

      <div className="center">
        <input type="text" placeholder="Busca un comercio..." />
        <input type="text" placeholder="Ingresa una ubicación..." />
        <img src="/images/lupa.png" />
      </div>

      <div className="right">
        <AiOutlineBell className="icons" />
        <CiHeart className="icons" />
        <img src="/images/happyFace.png" alt="face smiling" width={24} />
      </div>
    </header>
  );
};

export default Nav;
