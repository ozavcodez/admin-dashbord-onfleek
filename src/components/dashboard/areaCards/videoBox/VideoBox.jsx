import React from 'react'
import "./VideoBox.scss"
const VideoBox = () => {
  return (
    <div className='topVideo'>
        <div className='trainer'>
            <img
                src="/vid-user.png"
                alt=""
            />
            <div className='name'>
                <h4>Lily Dovona</h4>
                <span>Business Trainer</span>
            </div>
        </div>
        <h2 className=''> How to properly manage <br /> your personal Budget</h2>
        <div className='videoDetails'>
            <div>
                <img src="/play.png" alt=""  />
                <span className='name'>video</span>
            </div>
            <div>
                <img src="/time.png" alt=""  />
                <span className='name'>15 likes</span>
            </div>
            <div>
                <img src="/star.png" alt=""  />
                <span className='name'>12 likes</span>
            </div>
        </div>
        <div className='moreInfo'>
            <span> 5 days ago</span>
            <div className='button'>
                <button>connect </button>
            </div>
        </div>
    </div>
  )
}

export default VideoBox
