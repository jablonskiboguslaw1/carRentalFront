import { clientApiUrl } from './Routes'
import * as api from './Api'

export const getAll = () =>
    api.get(clientApiUrl())

export const create = params =>
    api.post(clientApiUrl(), { ...params })

export const get = (id) => api.get(clientApiUrl(id))

export const getByUsername=(username) => api.get(clientApiUrl()+'/username/'+username)

export const destroy = (id) => api.destroy(clientApiUrl(id))

export const update = (id, params) =>
    api.put(clientApiUrl(id), { ...params })
