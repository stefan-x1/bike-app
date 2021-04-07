import "./Card.css";

function Card({ image, title, price }) {
  return (
    <div className="Card">
      <div className="bike-image">
        <img src={image} alt="Bike" />
      </div>
      <div className="bike-info">
        <h6>
          <b>{title}</b>
        </h6>
        <small>{price} $</small>
      </div>
    </div>
  );
}

export default Card;
