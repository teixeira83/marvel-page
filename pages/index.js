import Head from 'next/head'
import { NavBar } from '../components/index';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marvel Page</title>
        <link rel="icon" href="/ironmanicon.png" />
      </Head>
      <main>
        <NavBar />
      </main>
    </div>
  )
}
