const baseUrl = '/api/basic';

export const getAllInfo = () => {
    return fetch(baseUrl)
    .then((res) => res.json())
};