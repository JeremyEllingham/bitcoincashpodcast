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

const episodes = [
  {
    id: 2,
    title: 'Grassroots adoption & /r/wallstreetbets vs Wall Street',
    date: 'Thursday, 28th January 2021',
    bchAddress: 'bitcoincash:qqldcn9p2qupgkmq4ctrqujyd4ju2m94y5fq680hye',
    mp3: "https://drive.google.com/file/d/1H4Hx3hGGA7iDQj5YluuC9sKGGNPUYmTM/view?usp=sharing",
    slideDeck: "https://docs.google.com/presentation/d/1wshYxnpvvBe_e4PnzNIEQwVCSCi8AAzldGyuHQNfLB8/edit?usp=sharing",
    youtube: 'https://www.youtube.com/watch?v=voVS2omxMek',
  }
]

const EpisodesList = () => (
  <div>
    {episodes?.map(({ id, title, date, bchAddress, mp3, slideDeck, youtube}) => (
      <div>
        <div style={styles.container}>
          <h3>#{id}: {title}</h3>
          <p>{date} - {bchAddress}</p>
          <a 
            href={mp3}
            target="_blank"
          ><u>Downloadable .mp3</u>
          </a>
          <a 
            href={slideDeck}
            target="_blank"
          >
            <u>Slide deck</u>
          </a>
          <ReactPlayer 
            style={styles.player} 
            url={youtube}
            target="_blank"
          />
        </div>
        <hr />
      </div>
    ))}
    
    <div style={styles.container}>
      <h3>#1: Whitepaper Whitewashing & History of The Flippening</h3>
      <p>Friday, 22nd January 2021 - bitcoincash:qq0u3gej2rw9elpe42pp4cy25qknh2r0fvgfnpv7qm</p>
      <a 
        href="https://drive.google.com/file/d/1b_Ra-IX1Lxt6X4doRVeLnxOogsaLwl1a/view?usp=sharing"
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