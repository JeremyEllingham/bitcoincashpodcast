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
    maxHeight: 200,
    width: 700,
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
  },
  {
    url: 'https://txstreet.com/v/bch-btc',
    title: 'TxStreet',
    description: "Watch Bitcoin Cash's smooth bus station overtake Bitcoin's overcrowded mess.",
  },
  {
    url: 'https://cash.coin.dance/blocks/transactions',
    title: 'Coin.dance',
    description: 'Keep up on the latest Bitcoin Cash stats.',
  },
  {
    url: 'https://reddit.com/r/btc',
    title: 'Reddit /r/btc',
    description: ' Discuss or keep up with the Bitcoin Cash community.',
  },
  {
    url: 'https://nakamotoinstitute.org/mempool/',
    title: 'Nakamoto Institute Mempool',
    description: 'Read up on some big picture Bitcoin theory.',
  },
  {
    url: 'https://99bitcoins.com/bitcoin-obituaries/',
    title: 'Bitcoin Obituaries',
    description: 'Declared dead 350+ times for over 10 years. RIP the haters.',
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
          <img src="/banner.png" alt="BCH Logo" style={myStyles.logo} />
        </div>
        

        <p className={styles.description}>
          Following Bitcoin Cash on its rise to global reserve currency.
          <br />
          <a href='https://rss.com/podcasts/bitcoincashpodcast/' target='_blank'><u>RSS Feed</u></a> 
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