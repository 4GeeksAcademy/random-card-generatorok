import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Home = () => {
  const { store } = useContext(Context);
  const [randomCard, setRandomCard] = useState({ suit: "", number: "" });

  const generateRandomCard = () => {
    console.log("cardSuits:", store.cardSuits);
    console.log("cardNumbers:", store.cardNumbers);

    if (store.cardSuits && store.cardNumbers) {
      const randomSuitIndex = Math.floor(
        Math.random() * store.cardSuits.length
      );
      const randomNumberIndex = Math.floor(
        Math.random() * store.cardNumbers.length
      );

      setRandomCard({
        suit: store.cardSuits[randomSuitIndex],
        number: store.cardNumbers[randomNumberIndex],
      });

      console.log("randomCard:", randomCard);
    }
  };

  useEffect(() => {
    generateRandomCard();
  }, []);

  return (
	<div className="container">
    <div className="card">
        <div className="card-content">
            <div className="card-top-left">
                <div className={"card-suit " + (randomCard.suit === "♦" || randomCard.suit === "♥" ? "red" : "")}>{randomCard.suit}</div>
            </div>
            <div className="card-number-container">
                <div className="card-number">{randomCard.number}</div>
            </div>
            <div className="card-bottom-right">
                <div className={"card-suit " + (randomCard.suit === "♦" || randomCard.suit === "♥" ? "red" : "")}>{randomCard.suit}</div>
            </div>
        </div>
    </div>
    <div className="button">
        <button onClick={generateRandomCard}>Generate Random Card</button>
    </div>
</div>


  );
};

export default Home;
