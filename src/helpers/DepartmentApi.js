import { departmentApiUrl } from './Routes'

import * as api from './Api'

export const getAll = () =>
    api.get(departmentApiUrl())

export const create = params =>
    api.post(departmentApiUrl(), { ...params })

export const get = (id) => api.get(departmentApiUrl(id))

export const destroy = (id) => api.destroy(departmentApiUrl(id))

export const update = (id, params) =>
    api.put(departmentApiUrl(id), { ...params })

    export const updateStatus = ( params) =>
    api.put(departmentApiUrl()+'/status', { ...params })