import React from 'react';
import {Outlet} from 'react-router-dom'
import { SideBar} from '../components'


const BaseLayout = () => {
  return (
    <main className='page-wrapper'>
        <SideBar/>
        <div className='content-wrapper'>
            <Outlet/>
        </div>
    </main>
  )
}

export default BaseLayout
