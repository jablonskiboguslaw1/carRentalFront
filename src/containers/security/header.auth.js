export default function headerAuth() {

    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accesToken) {
        return { Authorization: 'Bearer ' + user.accesToken }
    }
    else {
        return {}
    }
}
