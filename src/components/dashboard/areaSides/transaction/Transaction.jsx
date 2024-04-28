import React from 'react';
import { transactionsData } from '../../../../lib/data';
import "./Transaction.scss"

const Transaction = () => {
  return (
    <div className="transaction">
      <div className="list">
        {transactionsData.map(item=>(
          <div className="listItem" key={item.id}>
            <div className="item">
              <img src={item.img}  alt='' className='icon'/>
              <div className="itemTexts">
                <span className="name">{item.name}</span>
                <span className="date">{item.date}</span>
              </div>
            </div>
            <span className="amount">-${item.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Transaction
