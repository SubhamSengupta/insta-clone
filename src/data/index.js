import CONSTANTS from '../constants'
import {responseJson} from './response'

export const getPhotoData = () => {
    const url = CONSTANTS.photoUrl

    return fetch(url, {
        mode: 'no-cors'
    }).then(response => {
        return response.body ? response.json() : responseJson
    })
}