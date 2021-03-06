

const serverURL = 'https://boguslawjablonski.xyz:8443'
export const carApiUrl = id => id ? `${serverURL}/cars/${id}` : `${serverURL}/cars`
export const clientApiUrl = id => id ? `${serverURL}/client/${id}` : `${serverURL}/client`
export const employeeApiUrl = id => id ? `${serverURL}/employee/${id}` : `${serverURL}/employee`
export const reservationApiUrl = id => id ? `${serverURL}/reservation/${id}` : `${serverURL}/reservation`
export const rentalApiUrl = id => id ? `${serverURL}/rental/${id}` : `${serverURL}/rental`
export const carReturnApiUrl = id => id ? `${serverURL}/returns/${id}` : `${serverURL}/returns`
export const departmentApiUrl = id => id ? `${serverURL}/department/${id}` : `${serverURL}/department`