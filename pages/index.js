import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'

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
    <div className={styles.container}>
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
            <p>Youtube video</p>
            <p>Youtube video</p>
            <p>Youtube video</p>
          </Grid>
          <Grid item>
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
                    <a href="https://reddit.com/r/btc" target="_blank">Reddit /r/btc</a>
                  </i>
                </u>
              </b>: 
              Discuss or keep up with the Bitcoin Cash community.
            </p>
          </Grid>
        </Grid>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}

export default Home