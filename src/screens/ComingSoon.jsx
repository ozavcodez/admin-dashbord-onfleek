import React from 'react'
import {Link} from "react-router-dom"
import AtmCard from '../components/dashboard/areaSides/atmCard/AtmCard';
import { cardInfo } from '../lib/data';

const ComingSoon = () => {
    return ( 
        <div className="not-found ">
            <p>Coming soon</p>
            <Link to="/">back to the home page</Link>
            <AtmCard cardInfo={cardInfo}/>
        </div>
     );
}

export default ComingSoon
