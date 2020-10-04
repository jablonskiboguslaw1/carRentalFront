import { rentalApiUrl } from './Routes'
import * as api from './Api'

export const getAll = () =>
    api.get(rentalApiUrl())


    export const getAllByEmployee = (id) =>
    api.get(rentalApiUrl()+'/empl/'+id)

export const create = (id,params) =>
    api.post(rentalApiUrl(id), { ...params })

export const get = (id) => api.get(rentalApiUrl(id))

export const destroy = (id) => api.destroy(rentalApiUrl(id))

export const update = (id, params) =>
    api.put(rentalApiUrl(id), { ...params })
