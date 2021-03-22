import React, { useState, useEffect } from 'react'
import { NavBar, Title } from '../../components/index'
import { Container, TextContainer } from './styles'
import Image from 'next/image'
import { getReqParams, getCharaterByName} from '../../services/characters'

export default function Character(props) {
    
    const [characterInformations, setCharacterInformations] = useState({
        id: '', 
        name: '', 
        description: '', 
        thumbnail: '',
        comics: {
            items: [],
            count: 0
        }
    })

    useEffect(() => {
        setCharacterInformations(props.character)
    }, [])

    return (
        <React.Fragment>
            <NavBar />
            <Title title={props.character.name}/>
            <Container>
                <Image src={props.character.thumbnail}
                    width={360}
                    height={360}
                />
                <TextContainer>
                    <span>Description: {props.character.description || 'This character do not have a description yet.'}</span>
                    <span>Comics: {`The character was present in ${props.character.comics.count} Comics.` || 'This character do not have comics yet.'} </span>
                    {/* {characterInformations.comics.count > 0 ? characterInformations.comics.items.map(comic => {
                        return <span key={characterInformations.id}>{comic}</span>
                    }) : false} */}
                </TextContainer>
            </Container>
        </React.Fragment>
    )
}


export async function getServerSideProps(context) {
    const characterName = context.query.name
    
    const params = await getReqParams(0)
    const character = await getCharaterByName(params, characterName)
  
    return {
      props: {character},
    }
  }