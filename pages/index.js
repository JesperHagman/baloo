import Head from 'next/head'
import Slider from '../components/Slider'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Baloo</title>
        <meta name="description" content="Vi hjälper dig i dejtingdjungeln" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
    <Slider />
     <Footer />
    </div>
  )
}