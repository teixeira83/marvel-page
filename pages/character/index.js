import React, { useEffect } from 'react'
import { NavBar, Title } from '../../components/index'
import Image from 'next/image'
import { getReqParams, getCharaterByName} from '../../services/characters'
import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 10vw;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    width: 35vw;
    span {
        margin-top: 5vh;
    }
`

export default function Character(props) {

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