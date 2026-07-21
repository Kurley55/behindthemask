import { useState } from "react";

export interface Card {
  id: string;
  title: string;
  image: string;
  description?: string;
}

export interface CardGroup {
  type: "Characters" | "Shows" | "Games" | "Hobbies";
  cards: Card[];
}
interface CardDisplayProps {
  cards: Card[];
  onCardClick: (card: Card) => void;
}

function CardDisplay({ cards, onCardClick }: CardDisplayProps) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(-1);
  return (
    <>
      <div className="text-center p-4 d-flex gap-3 flex-wrap">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="e-card-stacked"
            style={{ width: "12rem" }}
            onClick={() => {
              setSelectedCardIndex(index);
              onCardClick(card);
            }}
          >
            <img
              src={card.image}
              className="card-img-top object-fit-cover"
              style={{ height: "150px" }}
              alt={card.title}
            ></img>

            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text">{card.description}</p>
              <a href="#" className="btn btn-primary">
                Expand
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardDisplay;
