import React from 'react'
import ReactPlayer from 'react-player/youtube'

const styles = {
  container: { 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  player: {
    paddingTop: 10
  }
}

const EpisodesList = () => (
  <div style={styles.container}>
    <div>
      <h3>#1: Whitepaper Whitewashing & History of The Flippening</h3>
      <p>Friday, 22nd January 2021 - BCH: 13u4JV4Ace94evGuujUFfh5VgNLV3jsTHp</p>
      <a href="/mp3/TheBitcoinCashPodcastEp1.mp3"><u>Episode #1: Direct link to downloadable .mp3 file</u></a>
      <ReactPlayer 
        style={styles.player} 
        url='https://www.youtube.com/watch?v=_uimCmw1m9E' 
        target="_blank"
      />
    </div>
  </div>
)

export default EpisodesList