import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
    todoState,
    loadingState,
    errorState,
    currentPageState,
    perPageState
} from "../recoil/atoms";
import { TodoItem } from "../recoil/types";
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Button, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import api, { getTodos } from "../services/api";

const TodoTable: React.FC = () => {
    const [todos, setTodos] = useRecoilState(todoState);
    const [loading, setLoading] = useRecoilState(loadingState);
    const [error, setError] = useRecoilState(errorState);
    const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
    const [perPage, setPerPage] = useRecoilState(perPageState);
    const handlePrevious = () => setCurrentPage(currentPage - 1);
    const handleNext = () => setCurrentPage(currentPage + 1);

    useEffect(() => {
        const fetchTodos = async () => {
            setLoading(true);
            try {
                const data = await getTodos(perPage, currentPage);
                setTodos(data as TodoItem[]);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(loading);
            }
        };

        fetchTodos();
    }, [currentPage, perPage, setTodos, setLoading, setError]);

    if (loading) { return <p>Loading...</p>; }

    if (error) { return <p>Ooops...<br />{error}</p>; }

    return (
        <div style={{ padding: '3rem' }}>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Completed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {todos.map((todo) => (
                            <TableRow key={todo.id}>
                                <TableCell>{todo.id}</TableCell>
                                <TableCell>{todo.title}</TableCell>
                                <TableCell>{todo.completed ? 'Yes' : 'No'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                <Button variant="contained" onClick={handlePrevious} disabled={currentPage === 1}>
                    Previous
                </Button>

                <Typography variant="body1">Page {currentPage}</Typography>

                <Button variant="contained" onClick={handleNext}>
                    Next
                </Button>
            </div>

            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <Pagination
                    count={20}
                    page={currentPage}
                    onChange={(event, value) => setCurrentPage(value)}
                    color="primary"
                />
            </div>
        </div>
    );
};

export default TodoTable;
