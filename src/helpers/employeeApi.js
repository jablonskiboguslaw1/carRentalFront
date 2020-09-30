import { employeeApiUrl } from './routes'
import * as api from './api'

export const getAll = () =>
    api.get(employeeApiUrl())

export const create = params =>
    api.post(employeeApiUrl(), { ...params })

export const get = (id) => api.get(employeeApiUrl(id))

export const destroy = (id) => api.destroy(employeeApiUrl(id))

export const update = (id, params) =>
    api.put(employeeApiUrl(id), { ...params })
