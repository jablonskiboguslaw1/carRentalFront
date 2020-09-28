const serverURL = 'http://localhost:8081'


export const carRentalApiUrl = id => id ? `${serverURL}/cars/${id}` : `${serverURL}/cars`
export const clientApiUrl = id => id ? `${serverURL}/client/${id}` : `${serverURL}/client`