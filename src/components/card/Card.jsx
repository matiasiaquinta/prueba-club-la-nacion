/*
  Type = First -> Primer carousel
  Type = Second -> Segundo carousel
*/

import { RiMapPin2Line } from 'react-icons/ri';

const Card = ({ account, type }) => {
  const cardContentClass =
    type === 'first' ? 'card-content' : 'card-content second';

  return (
    <div
      className={`card ${type === 'first' ? 'type-first' : 'type-second'}`}
      key={account.id}
    >
      <a href={account.accountUrl}>
        <img src={account.image} alt={`this is a ${account.name} image`} />
      </a>
      <div className={cardContentClass}>
        <h1>
          <a href={account.accountUrl}>{account.name}</a>
        </h1>

        {type === 'first' ? (
          <>
            <div className="card-discounts">
              {account.black !== '0' && (
                <span className="black">{account.maxBlack}</span>
              )}
              <span className="discounts-division">|</span>
              {account.premium !== '0' && (
                <span className="premium">{account.maxPremium}</span>
              )}
              <span className="discounts-division">|</span>
              {account.classic !== '0' && (
                <span className="classic">{account.maxClassic}</span>
              )}
            </div>

            <div className="card-ubication">
              <RiMapPin2Line />
              <p>A </p>
              <span>
                {account.nearestLocation <= 1000
                  ? `${account.nearestLocation} m`
                  : `${(account.nearestLocation / 1000).toFixed(2)} km`}
              </span>
            </div>
          </>
        ) : (
          <button>Quiero mi código</button>
        )}
      </div>
    </div>
  );
};

export default Card;
