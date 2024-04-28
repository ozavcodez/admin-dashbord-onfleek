import React, { useState } from 'react'
import AtmCard from './atmCard/AtmCard'
import { cardInfo } from '../../../lib/data'
import "./areaSide.scss"
import Transaction from './transaction/Transaction'
import ProgressChart from './pieChart/ProgressChart'
import useModal from '../../../lib/hooks'

const AreaSide = () => {
    const { openModal } = useModal();
    const [showTransactionDropdown, setShowTransactionDropdown] = useState(false);
    const [showEditDropdown, setShowEditDropdown] = useState(false);


    return (
        <div className='sideBox'>
            <button className='edit-btn' onClick={openModal} >
                <img src="/edit2.svg" alt="" width={18} />

            </button>


            <button className='blue-btn'>
                $10,600
            </button>
            <ProgressChart />
            <div className='title' style={{ position: 'relative' }} onClick={() => setShowTransactionDropdown(!showTransactionDropdown)}>
                <h3>My Card</h3>
                <span>
                    <img src="/dot.svg" alt="" className='icon' />
                    <img src="/dot.svg" alt="" className='icon' />
                </span>
                {showTransactionDropdown && (
                    <div className="dropdown-content">
                        {/* Dropdown items */}
                        <div className="dropdown-item">Show all transaction</div>

                    </div>
                )}
            </div>
            <AtmCard cardInfo={cardInfo} />
            <div className='title' >
                <h3>Transaction</h3>
                <button style={{ position: 'relative', pointer:'cursor' }} onClick={() => setShowEditDropdown(!showEditDropdown)}>
                    <img src="./add.svg" alt="" />
                    {showEditDropdown && (
                        <div className="dropdown-content">
                            {/* Dropdown items */}
                            <div className="dropdown-item">edit</div>

                        </div>
                    )}
                </button>

            </div>
            <Transaction />


        </div>
    )
}

export default AreaSide
