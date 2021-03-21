import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { NavBar, Title, Card } from '../components/index'
import { CardContainer } from './styles'
import { getReqParams, getCharacters } from '../services/characters'
import InfinityScroll from 'react-infinite-scroll-component'

export default function Home(props) {
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
    <div>
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
              return <Card key={character.name}
                        name={character.name}
                        thumbnail={character.thumbnail}
                      />
                    })
            }
          </InfinityScroll>
        </CardContainer>
      </main>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {

  const params  = await getReqParams(0)
  const characters = await getCharacters(params)
  
  return {characters}
}
