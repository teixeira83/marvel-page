import Head from 'next/head'
import { NavBar, Title } from '../components/index';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Marvel Page</title>
        <link rel="icon" href="/ironmanicon.png" />
      </Head>
      <NavBar />
      <main>
        <Title title='MARVEL CHARACTERS'/>
      </main>
    </div>
  )
}
