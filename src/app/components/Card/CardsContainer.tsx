import { useState } from "react";
import Card from "./Card";
import styles from "./card.module.css";

function CardsContainer() {

    const CARD_WIDTH = 270;
    const GAP = 20;
    const STEP = CARD_WIDTH + GAP;
    const totalCards = 3;
    const [index, setIndex] = useState(0);

    const slideToRight = () => {
        setIndex((prev) => Math.min(prev + 1, totalCards - 1));
    };

    const slideToLeft = () => {
        setIndex((prev) => Math.max(prev - 1, 0));
    };

    console.log("index", index);
    
    return (
    <div className={styles.cardsContainer}>
      <button onClick={slideToRight}>ימינה</button>
      <div className={styles.cardsBox}>
        <div className={styles.cardsTrack} style={{transform: `translateX(-${index * STEP}px)`}}>
            {
                [...Array(totalCards)].map((_, index) => (
                    <Card key={index} title={index+1} />
                ))
            }
        </div>
        
      </div>
      <button onClick={slideToLeft}>שמאלה</button>
    </div>
  );
}

export default CardsContainer;
