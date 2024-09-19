import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_TODO_API || 'https://jsonplaceholder.typicode.com/todos';
const itemsPerPage = process.env.REACT_APP_ITEMS_PER_PAGE || 13;

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getTodos = async (limit: number, page: number) => {
    try {
        const response = await api.get('', {
            params: {
                _limit: limit,
                _page: page,
            },
        });
        return response.data;
    } catch (error: any) {
        throw new Error(`Error fetching todos: ${error.response?.statusText || error.message}`);
    }
};

export default api;
