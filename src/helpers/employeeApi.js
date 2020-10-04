import { employeeApiUrl } from './Routes'
import * as api from './Api'

export const getAll = () =>
    api.get(employeeApiUrl())

export const create = params =>
    api.post(employeeApiUrl(), { ...params })

export const get = (id) => api.get(employeeApiUrl(id))

export const destroy = (id) => api.destroy(employeeApiUrl(id))

export const update = (id) =>
    api.put(employeeApiUrl(id))
