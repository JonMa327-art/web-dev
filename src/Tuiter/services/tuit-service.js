import axios from 'axios';

// const TUITS_API = 'http://localhost:4000/api/tuits';
// const TUITS_API = 'https://full-stack-developer-server-9.herokuapp.com/api/tuits';

const API_BASE = 'https://full-stack-developer-server-9.herokuapp.com/api';
const TUITS_API = `${API_BASE}/tuits`;

export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API);
    return response.data;
}

export const deleteTuit = async (tuit) => {
    const response = await axios
        .delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}

export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}

export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}


