import authHeader from '../services/auth-header'


const user = JSON.parse(localStorage.getItem('user'));



export const get = url =>
    new Promise(
        (resolve, reject) => {
            fetch(url, {
                method: 'GET', headers: authHeader(), mode: 'cors'

            })
                .then(response => response.json())
                .then(json => resolve(json))
        })


const apiCall = (url, method, body, resolve, reject) => {
    
        let hs = new Headers()
        hs.append('Content-Type', 'application/json; charset=utf-8')
        hs.append('Accept', 'application/json')
        if (user && user.accessToken){
        hs.append('Authorization', 'Bearer ' + user.accessToken )}
        fetch(url, {
            method: method,
            headers: hs,
            
            body: JSON.stringify(body)
        }).then(response => {
            if (response.ok) {
                response.json().then(json => resolve(json))
            }
            else {
                reject(response)
            }
        })
    }



export const post = (url, body) => new Promise(
    (resolve, reject) => apiCall(url, 'POST', body, resolve, reject)
)


export const patch = (url, body) => new Promise(
    (resolve, reject) => apiCall(url, 'PATCH', body, resolve, reject)
)


export const destroy = url =>
    new Promise(
        (resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Authorization': ('Bearer ' + user.accessToken)
                }
            }).then(response => {
                if (response.ok) {
                    resolve(response)
                }
                else {
                    reject(response)
                }
            })
        }

    )
