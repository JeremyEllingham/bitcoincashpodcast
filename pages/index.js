import Head from 'next/head'
import styles2 from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from 'react-player/youtube'
import RecommendedLink from '../components/RecommendedLink'
import recommendedLinks from './recommendedLinks'
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
            <h2>
              Recommended
            </h2>
            
            {recommendedLinks.map(({ url, title, description }) => (
              <RecommendedLink
              url={url}
              title={title}
              description={description}
            />
            ))}
          </Grid>

          <Grid item>
            <h2>Episodes</h2>
            <h3>#1: Whitepaper Whitewashing & History of The Flippening</h3>
            <p>Friday, 22nd January 2021 - BCH: 13u4JV4Ace94evGuujUFfh5VgNLV3jsTHp</p>
            <ReactPlayer url='https://www.youtube.com/watch?v=_uimCmw1m9E' />
          </Grid>
        </Grid>
      </main>
    </div>
  )
}

export default Home