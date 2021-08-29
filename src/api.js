const baseUrl = 'https://loft-taxi.glitch.me';

export const serverLogin = async (email, password) => {
    return fetch(
        `${baseUrl}/auth?username=${email}&password=${password}`
    ).then(res => res.json()).then(data => data.success)
}