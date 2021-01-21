import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from 'react-player/youtube'

const myStyles = {
  container: {
    backgroundColor: 'red',
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
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            <p>Youtube video</p>
            <p>Youtube video</p>
            <p>Youtube video</p>
          </Grid>
          <Grid item lg={3}>
            <h3>
              Recommended
            </h3>
            <p>
              <b>
                <u>
                  <i>
                    <a href="https://www.bitcoin.com/bitcoin.pdf" target="_blank">The Bitcoin Whitepaper</a>
                  </i>
                </u>
              </b>: 
              By Satoshi Nakamoto. Read it.
            </p>
            <p>
              <b>
                <u>
                  <i>
                    <a href="https://www.youtube.com/watch?v=-jUsSEOqZME&feature=emb_title" target="_blank">10 Years of Bitcoin</a>
                  </i>
                </u>
              </b>: 
              Hayden Otto explains in a 1 hour talk how it all came to be, Bitcoin Cash vs Bitcoin etc.
            </p>
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