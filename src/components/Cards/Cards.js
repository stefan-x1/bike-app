import "./Cards.css";
import Card from "../Card/Card";

function Cards({ filteredBikes }) {
  return (
    <div className="Cards">
      {filteredBikes.map((bike, index) => (
        <Card
          key={index}
          image={`assets/img/${bike.image}.png`}
          title={bike.name}
          price={bike.price}
        />
      ))}
    </div>
  );
}

export default Cards;
