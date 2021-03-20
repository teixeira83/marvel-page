import Image from 'next/image'
import { NavigationBar, UnorderList, ItemList } from './styles'

export default function NavBar() {
    return (
        <NavigationBar>
            <Image 
                src='/logo.png'
                width={82}
                height={56}
            />
            <UnorderList>
                <ItemList>
                    <a href='/'>Home</a>
                </ItemList>
                <ItemList>
                    <a href='/'>Contacts</a>
                </ItemList>
            </UnorderList>
        </NavigationBar>
    )
}