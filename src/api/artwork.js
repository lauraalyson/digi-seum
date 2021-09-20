import apiUrl from '../apiConfig'
import axios from 'axios'

export const getRandomArtwork = (artworkId) => {
  console.log('this is artworkId in api call', artworkId)
  return axios({
    method: 'GET',
    url: 'https://collectionapi.metmuseum.org/public/collection/v1/objects' + artworkId
  })
}

export const createArtwork = (data, user) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/artworks',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      artwork: data
    }
  })
}

export const indexArtwork = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/artworks',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showArtwork = (id, user) => {
  return axios({
    method: 'GET',
    url: `${apiUrl}/artworks/${id}`,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteArtwork = (id, user) => {
  return axios({
    url: apiUrl + '/artworks/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const updateArtwork = (data, id, user) => {
  return axios({
    url: apiUrl + '/artworks/' + id,
    method: 'PATCH',
    data: { artwork: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
