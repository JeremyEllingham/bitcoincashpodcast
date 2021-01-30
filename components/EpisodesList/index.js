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
    id: 1,
    title: 'Whitepaper Whitewashing & History of The Flippening',
    date: 'Friday, 22nd January 2021',
    bchAddress: 'bitcoincash:qq0u3gej2rw9elpe42pp4cy25qknh2r0fvgfnpv7qm',
    mp3: "https://drive.google.com/file/d/1b_Ra-IX1Lxt6X4doRVeLnxOogsaLwl1a/view?usp=sharing",
    youtube: 'https://www.youtube.com/watch?v=_uimCmw1m9E' 
  },
  {
    id: 2,
    title: 'Grassroots adoption & /r/wallstreetbets vs Wall Street',
    date: 'Thursday, 28th January 2021',
    bchAddress: 'bitcoincash:qqldcn9p2qupgkmq4ctrqujyd4ju2m94y5fq680hye',
    mp3: "https://drive.google.com/file/d/1H4Hx3hGGA7iDQj5YluuC9sKGGNPUYmTM/view?usp=sharing",
    slideDeck: "https://docs.google.com/presentation/d/1wshYxnpvvBe_e4PnzNIEQwVCSCi8AAzldGyuHQNfLB8/edit?usp=sharing",
    youtube: 'https://www.youtube.com/watch?v=voVS2omxMek',
  },
  {
    id: 3,
    title: 'Elon Musk hypes Bitcoin & Crypto Convert Q&A',
    date: 'Saturday, 30th January 2021',
    bchAddress: 'bitcoincash:qqldcn9p2qupgkmq4ctrqujyd4ju2m94y5fq680hye',
    mp3: "",
    slideDeck: "https://docs.google.com/presentation/d/1BpjPtjRl15VQ2ETqFG20ACtNu0lar3aXs5diLCsdIGc/edit?usp=sharing",
    youtube: '',
  }
]

const EpisodesList = () => (
  <div>
    {episodes?.reverse()?.map(({ id, title, date, bchAddress, mp3, slideDeck, youtube}) => (
      <div key={id}>
        <div style={styles.container}>
          <h3>#{id}: {title}</h3>
          <p>{date} - {bchAddress}</p>
          {!!mp3 && <a 
            href={mp3}
            target="_blank"
          ><u>Downloadable .mp3</u>
          </a>}
          {!!slideDeck && <a 
            href={slideDeck}
            target="_blank"
          >
            <u>Slide deck</u>
          </a>}
          <ReactPlayer 
            style={styles.player} 
            url={youtube}
            target="_blank"
          />
        </div>
        <hr />
      </div>
    ))}
  </div>
)

export default EpisodesList