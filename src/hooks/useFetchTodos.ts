import { useState, useEffect } from "react";
import axios from 'axios';  // Import axios
import { TodoItem } from "../recoil/types";

// Get API URL and default pagination limit from environment variables
const API_URL = process.env.REACT_APP_TODO_API || 'https://jsonplaceholder.typicode.com/todos'; // Fallback in case env is missing
const ITEMS_PER_PAGE = Number(process.env.REACT_APP_ITEMS_PER_PAGE) || 13;

const useFetchTodos = (perPage: number = ITEMS_PER_PAGE, currentPage: number, setTotalTodos: (total: number) => void) => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        // Fetch todos using the API URL and pagination parameters
        const api = await axios.get(API_URL, {
          params: {
            _limit: perPage,
            _page: currentPage,
          },
        });

        // Assuming the API response has a total count in headers or fallback to data length
        const total = api.headers['x-total-count'];

        setTotalTodos(total); // Set the total number of todos
        setTodos(api.data as TodoItem[]);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, [perPage, currentPage, setTotalTodos]);

  return { todos, loading, error };
};

export default useFetchTodos;
