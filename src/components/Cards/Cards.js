import React from 'react';
import "./cards.css"

const Cards = ({ characterCards }) => {
  if(characterCards)
  return (
    <div className='cards'>
      {characterCards.map(card => (
        <div key={card.id} className='card'>
          <div className="" >
          <img src={card.image} alt=" " className="img-fluid" />
          <div className='content'></div>
          <div className='fs-4'>{card.name}</div>
          <p>ID: {card.id}</p>
        </div></div>
      ))}
    </div>
  );
  else return("No characters found")
};

export default Cards;