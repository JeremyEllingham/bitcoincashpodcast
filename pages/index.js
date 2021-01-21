import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from 'react-player/youtube'
import RecommendedLink from '../components/RecommendedLink'

const myStyles = {
  container: {
    flexGrow: 1,
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  title: {
    margin: 0,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 1.15,
    fontSize: 80,
  },
  logo: {
    maxHeight: 100,
    width: 500,
  }
}

const recommendedLinks = [
  {
    url: "https://www.bitcoin.com/bitcoin.pdf",
    title: 'The Bitcoin Whitepaper',
    description: 'By Satoshi Nakamoto. Read it.'
  }, 
  {
    url: "https://www.youtube.com/watch?v=-jUsSEOqZME&feature=emb_title",
    title: '10 Years of Bitcoin',
    description: 'Hayden Otto explains in a 1 hour talk how it all came to be, Bitcoin Cash vs Bitcoin etc.'
  }
]

const Home = () => {
  return (
    <div>
      <Head>
        <title>The Bitcoin Cash Podcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={myStyles.titleWrapper}>
          <h1 style={myStyles.title}>
            The
          </h1>
          <img src="/bchLogo2.png" alt="BCH Logo" style={myStyles.logo} />
          <h1 style={myStyles.title}>Podcast</h1>
        </div>
        

        <p className={styles.description}>
          Following Bitcoin Cash on its rise to global reserve currency.
        </p>

        <Grid style={myStyles.container} container justify="center" spacing={2}>
          <Grid item>
            <h2>Episodes</h2>
            <h3>#1: Whitepaper Whitewashing & Is The Flippening Nigh?</h3>
            <p>Friday, 22nd January 2021</p>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
          </Grid>
          <Grid item lg={3}>
            <h3>
              Recommended
            </h3>
            {recommendedLinks.map(({ url, title, description }) => (
              <RecommendedLink
              url={url}
              title={title}
              description={description}
            />
            ))}
            
            <p>
              <b>
                <u>
                  <i>
                    <a href="https://txstreet.com/v/bch-btc" target="_blank">TxStreet</a>
                  </i>
                </u>
              </b>: 
              Watch Bitcoin Cash's smooth bus station overtake Bitcoin's overcrowded mess.
            </p>
            <p>
              <b>
                <u>
                  <i>
                    <a href="https://cash.coin.dance/blocks/transactions" target="_blank">Coin.dance</a>
                  </i>
                </u>
              </b>: 
              Keep up on the latest Bitcoin Cash stats.
            </p>
            <p>
              <b>
                <u>
                  <i>
                    <a href="https://reddit.com/r/btc" target="_blank">Reddit /r/btc</a>
                  </i>
                </u>
              </b>: 
              Discuss or keep up with the Bitcoin Cash community.
            </p>
            <p>
              <b>
                <u>
                  <i>
                    <a href="https://nakamotoinstitute.org/mempool/" target="_blank">Nakamoto Institute Mempool</a>
                  </i>
                </u>
              </b>: 
              Read up on some big picture Bitcoin theory.
            </p>
            <p>
              <b>
                <u>
                  <i>
                    <a href="https://99bitcoins.com/bitcoin-obituaries/" target="_blank">Bitcoin Obituaries</a>
                  </i>
                </u>
              </b>: 
              Declared dead 350+ times for over 10 years. RIP the haters.
            </p>
          </Grid>
        </Grid>
      </main>
    </div>
  )
}

export default Home