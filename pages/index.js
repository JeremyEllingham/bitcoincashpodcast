import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'

const myStyles = {
  container: {
    backgroundColor: 'red',
    flexGrow: 1,
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
        <h1 className={styles.title}>
          The Bitcoin Cash Podcast
        </h1>

        <Grid style={myStyles.container} container>
          Some text inside my grid
        </Grid>

        <p className={styles.description}>
          Following Bitcoin Cash on its rise to global reserve currency.
        </p>

        <h2>
          Recommended
        </h2>
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
                <a href="https://reddit.com/r/btc" target="_blank">Reddit /r/btc</a>
              </i>
            </u>
          </b>: 
          Discuss or keep up with the Bitcoin Cash community.
        </p>
        <a></a>
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