import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { NavBar, Title, Card } from '../components/index'
import { getReqParams, getCharacters } from '../services/characters'
import InfinityScroll from 'react-infinite-scroll-component'
import { useRouter } from 'next/router';
import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 90vw;
    margin: 0 auto;
    min-height: 70vh;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export default function Home(props) {
  const router = useRouter()
  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    setCharacters(props.characters)
  }, [])

  const loadMoreCharacters = async () => {
    
    const params = await getReqParams(characters.length)
    const newCharacters = await getCharacters(params)

    setCharacters(characters.concat(newCharacters))
    return characters.concat(newCharacters)
  }

  return (
    <React.Fragment>
      <Head>
        <title>Marvel Page</title>
        <link rel="icon" href="/ironmanicon.png" />
      </Head>
      <NavBar />
      <main>
        <Title title='MARVEL CHARACTERS'/>

        <CardContainer>
          <InfinityScroll 
            dataLength={characters.length}
            next={loadMoreCharacters}
            hasMore={true}
            style={{ display: 'flex', flexWrap: 'wrap' }}>
            {characters.map(character => {
              return <a onClick={(e) => {
                router.push(`/character?name=${character.name}`)
              }}>
                      <Card key={character.id}
                        name={character.name}
                        thumbnail={character.thumbnail}
                      /></a>
            })}
          </InfinityScroll>
        </CardContainer>
      </main>
    </React.Fragment>
  )
}

Home.getInitialProps = async (ctx) => {

  const params  = await getReqParams(0)
  const characters = await getCharacters(params)
  
  return {characters}
}
