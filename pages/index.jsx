import Head from 'next/head'
import Header from '../components/Header'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className='bg-[#ebebeb] h-screen' >
      <Head>
        <title>SEVENDA - Your Trusted Marketplace</title>
        <meta name="description" content="SEVENDA - Buy and sell with confidence" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Header />
        <Main />
      </main>
    </div>
  )
}

