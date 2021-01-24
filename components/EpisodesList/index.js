import React from 'react'
import ReactPlayer from 'react-player/youtube'

const EpisodesList = () => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <h2>Episodes</h2>
    <div>
      <h3>#1: Whitepaper Whitewashing & History of The Flippening</h3>
      <p>Friday, 22nd January 2021 - BCH: 13u4JV4Ace94evGuujUFfh5VgNLV3jsTHp</p>
      <ReactPlayer url='https://www.youtube.com/watch?v=_uimCmw1m9E' />
    </div>
  </div>
)

export default EpisodesList