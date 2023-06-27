import axios from 'axios';


const endpoint = import.meta.env.VITE_STRAPIURL;
const auth = import.meta.env.VITE_STRAPIAUTH;

export const getHomePageData = () => {
    let url = `http://${endpoint}/api/homePage?populate=*`
    return axios.get(url, {
        headers: {
            'Authorization': `${auth}`,
        }
    });
};

export const getLatestNewsData = () => {
    let url = `http://${endpoint}/api/latestNews?populate=*`
    return axios.get(url, {
        headers: {
            'Authorization': `${auth}`,
        }
    });
};

export const getAboutUsData = () => {
    let url = `http://${endpoint}/api/aboutUs?populate=*`
    return axios.get(url, {
        headers: {
            'Authorization': `${auth}`,
        }
    });
};

export const getAssociations = () => {
    let url = `http://${endpoint}/api/associations?populate=*`
    return axios.get(url, {
        headers: {
            'Authorization': `${auth}`,
        }
    });
};

export const getCareer = () => {
    let url = `http://${endpoint}/api/career?populate=*`
    return axios.get(url, {
        headers: {
            'Authorization': `${auth}`,
        }
    });
};

export const getPortfolio = () => {
    let url = `${endpoint}/api/portfolios?populate=*`
    return axios.get(url, {
        headers: {
            'Authorization': `bearer ${auth}`,
        }
    });
};

export const getResources = () => {
    let url = `http://${endpoint}/api/resources?populate=*`
    return axios.get(url, {
        headers: {
            'Authorization': `${auth}`,
        }
    });
};

export const getArticles = () => {
    let url = `http://${endpoint}/api/articles?populate=*`
    return axios.get(url, {
        headers: {
            'Authorization': `${auth}`,
        }
    });
};

export const getSeminars = () => {
    let url = `http://${endpoint}/api/seminars?populate=*`
    return axios.get(url, {
        headers: {
            'Authorization': `${auth}`,
        }
    });
};

export const getConfig = () => {
    let url = `http://${endpoint}/api/config`
    return axios.get(url, {
        headers: {
            'Authorization': ` bearer ${auth}`,
        }
    })
};