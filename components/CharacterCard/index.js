import Image from 'next/image'
import { Container, CharacterName } from './styles'

export default function CharacterCard(props) {

    return (
        <Container>
            <Image 
                src={props.thumbnail}
                width={250}
                height={300}
            />
            <CharacterName>{props.name}</CharacterName>
        </Container>
    )
}