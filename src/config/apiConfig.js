const devDomain = 'http://localhost:5000';
const prodDomain = 'https://bs-campaign.herokuapp.com';
let domain = process.env.NODE_ENV != 'production' ? devDomain : prodDomain;

export const getJsonURL = domain + '/json';