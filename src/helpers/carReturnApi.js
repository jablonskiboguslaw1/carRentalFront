import { carReturnApiUrl } from './Routes'
import * as api from './Api'

export const getAll = () =>
    api.get(carReturnApiUrl())

export const create = (id,params) =>
    api.post(carReturnApiUrl(id), { ...params })

export const get = (id) => api.get(carReturnApiUrl(id))

export const destroy = (id) => api.destroy(carReturnApiUrl(id))

export const update = (id, params) =>
    api.put(carReturnApiUrl(id), { ...params })
