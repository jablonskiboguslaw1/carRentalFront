import { reservationApiUrl } from './routes'
import * as api from './api'

export const getAll = () =>
    api.get(reservationApiUrl())

    export const getAllByClient = (id) =>
    api.get(reservationApiUrl()+'/client/'+id)

export const create = params =>
    api.post(reservationApiUrl(), { ...params })

export const get = (id) => api.get(reservationApiUrl(id))

export const destroy = (id) => api.destroy(reservationApiUrl(id))

export const update = (id, params) =>
    api.put(reservationApiUrl(id), { ...params })
