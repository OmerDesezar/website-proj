import React from 'react'
import YouTube from 'react-youtube';

const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }


export default function Home() {
    return (
        <div>
            <h1>home</h1>
            <h2>This is the home page it just have a bunch of information</h2>
            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={e=> e.target.pauseVideo()}/>
        </div>
    )
}
