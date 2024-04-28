import React from 'react'
import ChartBox from './chartBox/ChartBox';
import AreaCard from './AreaCard';
import VideoBox from './videoBox/VideoBox';
import StatisticChart from './statsCharts/StatsCharts';
import { chartBoxCustomer, chartBoxOrders, chartBoxUser } from '../../../lib/data';
import "./AreaCards.scss"

const AreaCards = () => {

  return (
    <div className="area-cards">
      <div className="box box1">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxCustomer} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxOrders} />
      </div>
      <div className="box7">
        <StatisticChart />
      </div>
      <div className=' box8'>
        <div className='boxes'>
          <div className="box">
            <AreaCard />
          </div>
          <div className="boxt"><VideoBox /></div>
        </div>
      </div>
    </div>
  )
}

export default AreaCards
