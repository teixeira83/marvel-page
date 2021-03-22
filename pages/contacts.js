import React from 'react'
import { NavBar, Title, ContactIcon } from '../components/index'
import Image from 'next/image'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10vw;
`

const ContactContainer = styled.div`
    display:flex;
    flex-direction: column;
    width: 35vw;
    justify-content: center;
    align-items: center;
` 
const ContactInformationBox = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 5vh;
`

const LinkText = styled.span`
    width: 100%;
    text-align: center;
    margin: auto auto;
`


export default function Contacts() {
    return (
        <React.Fragment>
            <NavBar />
            <Title title='CONTATOS' />
            <Container>
                <Image src='/contactimage.jpg'
                    width={360}
                    height={360}
                    className='perfil'
                />
                <ContactContainer>
                    <span style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '-50px' }}>Este Projeto foi desenvolvido por Rafael Teixeira.</span>
                    <ContactInformationBox>
                        <ContactIcon icon='/github-icon.png'/>
                        <LinkText>github.com/teixeira83</LinkText>
                    </ContactInformationBox>
                    <ContactInformationBox>
                        <ContactIcon icon='/linkedin-icon.png'/>
                        <LinkText>linkedin.com/in/rafaelalvesdemedeirosteixeira/</LinkText>
                    </ContactInformationBox>
                </ContactContainer>
            </Container>
        </React.Fragment>
    )
}