import React, { useState, useEffect } from 'react'
import { AreaCards, AreaSide, AreaTop } from '../../components'
import { motion } from "framer-motion";

import { IoWallet } from 'react-icons/io5';
import { MdStackedBarChart } from 'react-icons/md';
import './DashboardScreen.scss';
import AddItemModal from '../../components/modal/AddItemModal';

const DashboardScreen = () => {
    const [activeDiv, setActiveDiv] = useState('data');
    const [isSmallScreen, setIsSmallScreen] = useState(false);


    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    useEffect(() => {
        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Initial check for screen size
        handleResize();

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const handleToggle = (divName) => {
        console.log("yes");
        setActiveDiv(divName);

    };

    return (
        <section>

            <AreaTop />

            <div className='display-btn' >
                <button
                    className='sidebar-close-btn'
                    type="button"
                    onClick={() => handleToggle('data')}
                    style={{ backgroundColor: activeDiv === 'data' ? '#00C3F8' : '' }}
                >
                    <MdStackedBarChart className='icon' />
                </button>
                <button
                    className='sidebar-close-btn'
                    type="button" onClick={() => handleToggle('wallet')}
                    style={{ backgroundColor: activeDiv === 'wallet' ? '#00C3F8' : '' }}
                >
                    <IoWallet  className='icon'/>
                </button>
            </div>

            <div className='dashboard'>
                <motion.div
                    initial={{ y: -100, x: -100, opacity: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    className="statistics"
                >
                    <AreaCards />
                </motion.div>

                <motion.div
                    initial={{ y: 100, x: 100, opacity: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    

                    className="revenue">
                    <AreaSide />
                </motion.div>

            </div>
            {isSmallScreen && (
                <motion.div
                    initial={{ y: -100, x: -100, opacity: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    className="data" style={{ display: activeDiv === 'data' ? 'grid' : 'none' }}
                    layoutId="activeSection"
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                    
                    }}
                >
                    <AreaCards />
                </motion.div>
            )}
            {isSmallScreen && (
                <motion.div
                    initial={{ y: 100, x: 100, opacity: 0 }}
                    animate={{ y: 0, x: 0, opacity: 1 }}
                    layoutId="activeSection"
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 30,
                        duration: 1
                    }}

                    className="wallet" style={{ display: activeDiv === 'wallet' ? 'block' : 'none' }}>
                        <h1>Total Sales</h1>
                    <AreaSide />
                </motion.div>
            )}
            <AddItemModal />

        </section>
    )
}

export default DashboardScreen
