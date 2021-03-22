import Image from 'next/image'
import { NavigationBar, UnorderList, ItemList } from './styles'
import { useRouter } from 'next/router'

export default function NavBar() {
    const router = useRouter()
    return (
        <NavigationBar>
            <Image 
                src='/logo.png'
                width={82}
                height={56}
            />
            <UnorderList>
                <ItemList>
                    <a href='/' onClick={(e) => {
                        e.preventDefault()
                        router.push('/')
                    }}>Home</a>
                </ItemList>
                <ItemList>
                    <a href='/contacts' onClick={(e) => {
                        e.preventDefault()
                        router.push('/contacts')
                    }}>Contacts</a>
                </ItemList>
            </UnorderList>
        </NavigationBar>
    )
}