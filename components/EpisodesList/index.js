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
  <div>
    <div style={styles.container}>
      <h3>#2: Grassroots adoption & /r/wallstreetbets vs Wall Street</h3>
      <p>Thursday, 28th January 2021 - bitcoincash:qqldcn9p2qupgkmq4ctrqujyd4ju2m94y5fq680hye</p>
      <a 
        href="/mp3/TheBitcoinCashPodcastEp2.mp3"
        target="_blank"
      ><u>Downloadable .mp3</u>
      </a>
      <a 
        href="https://docs.google.com/presentation/d/1wshYxnpvvBe_e4PnzNIEQwVCSCi8AAzldGyuHQNfLB8/edit?usp=sharing" 
        target="_blank"
      >
        <u>Slide deck</u>
      </a>
      <ReactPlayer 
        style={styles.player} 
        url='https://www.youtube.com/watch?v=_uimCmw1m9E' 
        target="_blank"
      />
    </div>
    <hr />
    <div style={styles.container}>
      <h3>#1: Whitepaper Whitewashing & History of The Flippening</h3>
      <p>Friday, 22nd January 2021 - bitcoincash:qq0u3gej2rw9elpe42pp4cy25qknh2r0fvgfnpv7qm</p>
      <a 
        href="/mp3/TheBitcoinCashPodcastEp1.mp3"
        target="_blank"
      >
        <u>
          Downloadable .mp3
        </u>
      </a>
      <ReactPlayer 
        style={styles.player} 
        url='https://www.youtube.com/watch?v=_uimCmw1m9E' 
        target="_blank"
      />
    </div>
  </div>
)

export default EpisodesList