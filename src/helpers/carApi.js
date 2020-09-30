import { carRentalApiUrl } from './routes'
import * as api from './api'

export const getAll = () =>
    api.get(carRentalApiUrl())

export const create = params =>
    api.post(carRentalApiUrl(), { ...params })

export const get = (id) => api.get(carRentalApiUrl(id))

export const destroy = (id) => api.destroy(carRentalApiUrl(id))

export const update = (id, params) =>
    api.put(carRentalApiUrl(id), { ...params })
