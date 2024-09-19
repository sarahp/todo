import React, { useEffect} from "react";
import { useRecoilState } from "recoil";
import { todoState, 
         loadingState, 
         errorState, 
         currentPageState, 
         perPageState } from "../recoil/atoms";
import api, { getTodos } from "../services/api";

const TodoTable: React.FC = () => {
    const [todos, setTodos] = useRecoilState(todoState);
    const [loading, setLoading] = useRecoilState(loadingState);
    const [error, setError] = useRecoilState(errorState);
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const [perPage, setPerPage] = useRecoilState(perPageState);

    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true);
            try {
                const data = await getTodos(perPage, currentPage);
                setTodos(data as never[]);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false as never);
            }
        };

        fetchTodos();
    }, [currentPage, perPage, setTodos, setLoading, setError]);

    if (loading) { return <p>Loading...</p>;}

    if (error) { return <p>Ooops...<br />{error}</p>; }

    return (
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>{todo.completed ? 'Yes' : 'No'}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Add Pagination UI here */}
        </div>
      );
};

export default TodoTable;
