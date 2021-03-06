import axios from 'axios'
import MD5 from "crypto-js/md5"

export function getReqParams(currentPagination){
    
    const ts = new Date().getTime()
    const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY
    const publicKey = process.env.NEXT_PUBLIC_KEY
    
    const hash = MD5(ts+privateKey+publicKey).toString()

    const params = {
        ts,
        apikey: publicKey,
        hash,
        limit: 20,
        offset: currentPagination
    }

    return params
}

export async function getCharacters(params) {
  
  const url = process.env.NEXT_PUBLIC_URL

  const rawCharactersList = await axios.get(url, { params })
    .then(res => {
      return res.data.data.results
    })

  const charactersList = rawCharactersList.map( c => {
    
    const character = {
      id: '',
      name: '',
      thumbnail: ''
    }
    
    character.id = c.id
    character.name = c.name
    const thumbnailPathWithExtension = c.thumbnail.path + '.' + c.thumbnail.extension
    character.thumbnail = thumbnailPathWithExtension

    return character
  })

  return charactersList
}

export async function getCharaterByName(params, name) {
  
  const url = process.env.NEXT_PUBLIC_URL

  params.name = name

  const [rawCharacter] = await axios.get(url, { params })
    .then(res => {
      return res.data.data.results
    })

  const character = {
    id: rawCharacter.id, 
    name: rawCharacter.name, 
    description: rawCharacter.description, 
    thumbnail: rawCharacter.thumbnail.path + '.' + rawCharacter.thumbnail.extension,
    comics: {
      items: rawCharacter.comics.items,
      count: rawCharacter.comics.returned
    }
  }
  return character
}
