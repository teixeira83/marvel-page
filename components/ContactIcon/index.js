import Image from 'next/image'

export default function ContactIcon(props) {

    return (
            <Image 
                src={props.icon}
                width={72}
                height={20}
            />
    )
}