import React, { useState, useContext, useEffect } from 'react'
import { AreaCards, AreaSide, AreaTop } from '../../components'
import { motion } from "framer-motion";

import './DashboardScreen.scss';
import { IoWallet } from 'react-icons/io5';
import { MdStackedBarChart } from 'react-icons/md';
import AddItemModal from '../../components/modal/AddItemModal';

const DashboardScreen = () => {
    const [activeDiv, setActiveDiv] = useState('statistics');

    const handleToggle = (divName) => {
        setActiveDiv(divName);
    };

    
    return (
        <section>
            {/* {isModalOpen && */}
            <AddItemModal/>
        {/* } */}

            <AreaTop />

            <div className='display-btn' >
                <button className='sidebar-close-btn' type="button" onClick={() => handleToggle('statistics')}>
                    <MdStackedBarChart/>
                </button>
                <button className='sidebar-close-btn' type="button" onClick={() => handleToggle('revenue2')}>
                    <IoWallet/>
                </button>
            </div>
            
            <div className='dashboard'>
                <motion.div
                    initial={{ y: -100, x: -100, opacity: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    className="statistics" style={{ display: activeDiv === 'statistics' ? 'grid' : 'none' }}
                >
                    <AreaCards />
                </motion.div>
                <div className="revenue " >
                    <AreaSide />
                </div>
                <motion.div
                    initial={{ y: 100, x: 100, opacity: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    layoutId="activeSection"
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                        duration:1
                    }}
                    
                    className="revenue2" style={{ display: activeDiv === 'revenue2' ? 'block' : 'none' }}>
                    <AreaSide />
                </motion.div>

            </div>
        </section>
    )
}

export default DashboardScreen
