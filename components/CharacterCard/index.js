import Image from 'next/image'
import { Container, CharacterName } from './styles'

export default function CharacterCard(props) {
    return (
        <Container>
            <Image 
                src='/ironmanicon.png'
                width={256}
                height={256}
            />
            <CharacterName>{props.name}</CharacterName>
        </Container>
    )
}