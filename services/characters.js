import axios from 'axios'
import MD5 from "crypto-js/md5"

export function getReqParams(){
    
    const ts = new Date().getTime()
    const privateKey = process.env.REACT_APP_PRIVATE_KEY
    const publicKey = process.env.REACT_APP_PUBLIC_KEY
    
    const hash = MD5(ts+privateKey+publicKey).toString()

    const params = {
        ts,
        apikey: publicKey,
        hash,
        limit: 20,
        offset: 0
    }

    return params
}

export async function getCharacters(params) {
    
  const url = process.env.REACT_APP_URL

  const apiResponse = await axios.get(url, { params })
    .then(res => {
      return res.data.data
    })

  const paginationData = {
    offset: apiResponse.offset,
    total: apiResponse.total
  }

  const rawCharactersList = apiResponse.results

  const charactersList = rawCharactersList.map( c => {
    
    const character = {
      name: '',
      thumbnail: ''
    }

    character.name = c.name
    const thumbnailPathWithExtension = c.thumbnail.path + '.' + c.thumbnail.extension
    character.thumbnail = thumbnailPathWithExtension

    return character
  })

  return [paginationData, charactersList]
}
