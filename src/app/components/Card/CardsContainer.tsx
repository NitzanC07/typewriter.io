"use client";
import { useState, useEffect } from "react";
import Card from "./Card";
import styles from "./card.module.css";
import RightArrow from "@/images/icons/arrow_right.svg";
import LeftArrow from "@/images/icons/arrow_left.svg";
import Image from "next/image";

function CardsContainer() {
  const [widthScreen, setWidthScreen] = useState(0);
  const totalCards = 4;
  const CARD_WIDTH = 200;
  const GAP = 20;
  const STEP = CARD_WIDTH + GAP;
  const CARD_BOX = 700;
  const CARD_TRACK = totalCards * STEP;
  const [index, setIndex] = useState(0);

  const slideToRight = () => {
    setIndex((prev) => Math.min(prev + 1, totalCards / 2 - 1));
  };

  const slideToLeft = () => {
    setIndex((prev) => Math.max(prev - 1, -totalCards / 2 + 1));
  };

  useEffect(() => {
    setWidthScreen(window.innerWidth);
  }, []);

  return (
    <>
      {widthScreen > 768 ? (
        <div className={styles.cardsContainer}>
          <button
            className={`iconButton ${
              CARD_BOX < CARD_TRACK ? "" : "iconButtonDisabled"
            }`}
            onClick={slideToRight}
            disabled={CARD_BOX < CARD_TRACK ? false : true}
          >
            <Image src={RightArrow} alt="ימינה" width={40} />
          </button>
          <div className={styles.cardsBox}>
            <div
              className={styles.cardsTrack}
              style={{
                transform: `translateX(${index * STEP}px)`,
              }}
            >
              {[...Array(totalCards)].map((_, index) => (
                <Card key={index} title={index} />
              ))}
            </div>
          </div>
          <button
            className={`iconButton ${
              CARD_BOX < CARD_TRACK ? "" : "iconButtonDisabled"
            }`}
            onClick={slideToLeft}
            disabled={CARD_BOX < CARD_TRACK ? false : true}
          >
            <Image src={LeftArrow} alt="שמאלה" width={40} />
          </button>
        </div>
      ) : (
        <div className="cardsContainer">
          {[...Array(totalCards)].map((_, index) => (
            <Card key={index} title={index} />
          ))}
        </div>
      )}
    </>
  );
}

export default CardsContainer;
