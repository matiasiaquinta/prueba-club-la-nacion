'use client';
import './Carousel.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useCarousel } from '@/hooks/useCarousel';
import Card from '@/components/card/Card';

const Carousel = ({ type }) => {
  const { cardAccount } = useCarousel(type);

  return (
    <section className="carousel-section">
      <div className={`carousel-title ${type}`}>
        <h1>
          {type === 'first'
            ? 'Turismo en Buenos Aires'
            : 'Códigos de descuento'}
        </h1>
        <button>
          {type === 'first' ? 'Todos los beneficios' : 'Todos los códigos'}
        </button>
      </div>

      {type === 'second' && (
        <p className="carousel-subtitle">
          ¿Sos socio de Club LA NACION? Descargá tu código y disfrutá beneficios
          exclusivos en tus marcas favoritas
        </p>
      )}

      <div className="carousel">
        <div className="carousel-controls">
          <IoIosArrowBack className="icon-arrow" />
          <IoIosArrowForward className="icon-arrow" />
        </div>

        {cardAccount &&
          cardAccount.map((account) => (
            <Card account={account} key={account.id} type={type} />
          ))}
      </div>
    </section>
  );
};

export default Carousel;
