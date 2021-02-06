
import fs from 'fs'
import Head from 'next/head'
import styles2 from '../styles/Home.module.css'
import Grid from '@material-ui/core/Grid'
import EpisodesList from '../components/EpisodesList'
import RecommendedLinks from '../components/RecommendedLinks'
import Prices from '../components/Prices'
import People from '../components/People'
import generateRssFeed from '../lib/rss'

const styles = {
  gridContainer: {
    flex: 1,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
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
        <link rel="icon" href="/bch.ico" />
      </Head>

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
              Read.cash
            </u>
          </a>
        </p>

        <Grid style={styles.gridContainer} container spacing={2}>
          <Grid justify="center" item md={9} lg={9}>
            <EpisodesList/>
          </Grid>

          <Grid justify="center" item md={3} lg={3}>
            <RecommendedLinks />
            <People />
            <Prices />
          </Grid>
        </Grid>
    </div>
  )
}

export async function getStaticProps() {
  const feeds = await generateRssFeed();
  const { rss, atom, json } = feeds

  fs.writeFileSync('./public/rss.xml', rss)
  fs.writeFileSync('./public/atom.xml', atom);
  fs.writeFileSync('./public/feed.json', json);

  return {
    props: {}
  }
}

export default Home