import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import ReactPlayer from 'react-player/youtube'
import RecommendedLink from '../components/RecommendedLink'
import recommendedLinks from './recommendedLinks'

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
    maxHeight: 200,
    width: 700,
  },
  link: {
    paddingRight: 10, 
    paddingLeft: 10
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
          <img src="/banner.png" alt="BCH Logo" style={myStyles.logo} />
        </div>
        

        <p className={styles.description}>
          Following Bitcoin Cash on its rise to global reserve currency.
          <br />
          <a 
            style={myStyles.link} 
            href='https://rss.com/podcasts/bitcoincashpodcast/' 
            target='_blank'
          >
            <u>
              RSS Feed
            </u>
          </a> 
          <a 
            style={myStyles.link} 
            href='https://read.cash/@BitcoinCashPodcast' 
            target='_blank'
          >
            <u>
              Noise.cash
            </u>
          </a>
        </p>

        <Grid style={myStyles.container} container justify="center" spacing={2}>
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