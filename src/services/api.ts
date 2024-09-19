import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_TODO_API;

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getTodos = async (limit: number, page: number) => {
    try {
        const response = await api.get('',{
            params: {
                _limit: limit,
                _page: page,         
            }
        });

        return response.data;
    } catch (error: any) {
        throw new Error(`Error fetching todos: ${error.response?.statusText || error.message}`);
    }
};

export const createTodo = async (todo: any) => {
    try {
        const response = await api.post('', todo);
        return response.data;
    } catch (error: any) {
        throw new Error(`Error creating todo: ${error.response?.statusText || error.message}`);
    }
};

export default api;
