import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { NavBar, Title, Card } from '../components/index'
import { CardContainer } from './styles'
import { getReqParams, getCharacters } from '../services/characters'

export default function Home(props) {
  const [paginationData, setPaginationData] = useState({})
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    setPaginationData(props.paginationData)
    setCharacters(props.characters)
  })

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
          {characters.map(character => {
            return <Card name={character.name}
                      thumbnail={character.thumbnail}
                    />
                  })
          }
        </CardContainer>
      </main>
    </div>
  )
}

Home.getInitialProps = async (ctx) => {

  const params  = await getReqParams()
  const [paginationData,characters] = await getCharacters(params)

  return {paginationData,characters}
}
