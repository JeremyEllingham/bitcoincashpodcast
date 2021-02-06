import React from 'react'
import ReactPlayer from 'react-player/youtube'
import episodes from './episodes'

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