export const exerciseOptions = { 
    method: 'GET',
    headers: {
    'X-RapidAPI-host': 'http://exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY
    }
};


export const fetchData = async (url, options) => {
const response = await fetch(url, options);
const data = await response.json();

return data;
};