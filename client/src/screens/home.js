import React from "react";
import MultiCarousel from "../components/carousel";
import Card from "../components/card";
import RecentlyPlayed from "../components/cardData";

function createCard(cardProps) {
  return (
    <Card
      key={cardProps.id}
      imgURL={cardProps.imgURL}
      title={cardProps.title}
      title2={cardProps.title2}
      subtitle={cardProps.subtitle}
    />
  );
}
function Home() {
  return (
    <div>
      <div>
        <MultiCarousel />
      </div>
      <div className="RecentlyPlayed container-fluid">
        <div className="row">{RecentlyPlayed.map(createCard)}</div>
      </div>
    </div>
  );
}

export default Home;
