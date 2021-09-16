import apiUrl from '../apiConfig'
import axios from 'axios'

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
    data: { friend: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
