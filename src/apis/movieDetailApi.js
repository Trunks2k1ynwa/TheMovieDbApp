/* eslint-disable consistent-return */
import http from 'apis/http'

export const getMovies = (idMovie) => {
  return http.get(`/movie/${idMovie}`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: 'vi',
    },
  })
}
export const getCredits = (idMovie) => {
  return http.get(`/movie/${idMovie}/credits`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: 'vi',
    },
  })
}
export const getCertification = (idMovie) => {
  return http.get(`/movie/${idMovie}/release_dates`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: 'vi',
    },
  })
}
export const getTrailers = (idMovie) => {
  return http.get(`/movie/${idMovie}/videos`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: 'US',
    },
  })
}
export const getRecommendations = (idMovie) => {
  return http.get(`/movie/${idMovie}/recommendations`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: 'US',
    },
  })
}
export const getMovieImg = (idMovie) => {
  return http.get(`/movie/${idMovie}/images`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
}
export const getKeyWord = (idMovie) => {
  return http.get(`/movie/${idMovie}/keywords`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
}
export const getLanguages = () => {
  return http.get('/configuration/languages', {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
    },
  })
}
