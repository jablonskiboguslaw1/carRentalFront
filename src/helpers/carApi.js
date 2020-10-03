import { carApiUrl } from './routes'
import * as api from './api'

export const getAll = () =>
    api.get(carApiUrl())

export const create = params =>
    api.post(carApiUrl(), { ...params })

export const get = (id) => api.get(carApiUrl(id))

export const destroy = (id) => api.destroy(carApiUrl(id))

export const update = (id, params) =>
    api.put(carApiUrl(id), { ...params })
