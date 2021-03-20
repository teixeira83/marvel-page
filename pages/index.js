import Head from 'next/head'
import { NavBar, Title, Card } from '../components/index'
import { CardContainer } from './styles'

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

        <CardContainer>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/><Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
          <Card name='Rafael'/>
        </CardContainer>
      </main>
    </div>
  )
}
