import Image from 'next/image'
import { Container, CharacterName } from './styles'

export default function CharacterCard(props) {
    return (
        <Container>
            <Image 
                src={props.thumbnail}
                width={256}
                height={256}
            />
            <CharacterName>{props.name}</CharacterName>
        </Container>
    )
}