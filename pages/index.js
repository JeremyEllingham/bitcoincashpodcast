import Head from 'next/head'
import styles2 from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import EpisodesList from '../components/EpisodesList'
import RecommendedLinks from '../components/RecommendedLinks'
import Prices from '../components/Prices'
import styles from './styles'

const Home = () => {
  return (
    <div>
      <Head>
        <title>The Bitcoin Cash Podcast</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles2.main}>
        <div style={styles.titleWrapper}>
          <img src="/banner.png" alt="BCH Logo" style={styles.logo} />
        </div>
        

        <p className={styles2.description}>
          Following Bitcoin Cash on its rise to global reserve currency.
          <br />
          <br />
          <a 
            style={styles.link} 
            href='https://rss.com/podcasts/bitcoincashpodcast/' 
            target='_blank'
          >
            <u>
              RSS Feed
            </u>
          </a> 
          <a 
            style={styles.link} 
            href='https://read.cash/@BitcoinCashPodcast' 
            target='_blank'
          >
            <u>
              Noise.cash
            </u>
          </a>
        </p>

        <Grid style={styles.container} container justify="center" spacing={2}>
          <Grid item lg={3}>
            <Prices />
            <RecommendedLinks />
          </Grid>

          <Grid item>
            <EpisodesList />
          </Grid>
        </Grid>
      </main>
    </div>
  )
}

export default Home