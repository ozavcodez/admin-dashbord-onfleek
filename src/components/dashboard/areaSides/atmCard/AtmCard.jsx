import React from 'react'
import "./AtmCard.scss"

const AtmCard = ({ cardInfo }) => {
    const hashAndFormatCardNumber = (cardNumber) => {
        const visibleDigits = cardNumber.slice(-4);
        const hashedDigits = '*'.repeat(cardNumber.length - 4);
        const formattedNumber = hashedDigits.replace(/(.{4})/g, '$1 ');
        return formattedNumber + visibleDigits;
    };
    const { cardNumber, cardHolder, expirationDate } = cardInfo;
    const formattedNumber = hashAndFormatCardNumber(cardNumber);
  return (
    <div className='atmCard'>
        <div className='atm'>
            <img src="/atm-card.svg" alt=""   />
        </div>
        <div className="cardDetails">
            <p className='number'>{formattedNumber}</p>
            <div className='cardHeader'>
                <p>{cardHolder}</p>
                <p>{expirationDate}</p>
            </div>
        </div>
      
    </div>
  )
}

export default AtmCard
