import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { perPageState, currentPageState } from "../recoil/atoms";
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, Button, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import useFetchTodos from "../hooks/useFetchTodos";
import usePagination from "../hooks/usePagination";

const TodoTable: React.FC = () => {
  const [perPage] = useRecoilState(perPageState);
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [totalTodos, setTotalTodos] = useState<number | null>(null);
  const { todos, loading, error } = useFetchTodos(perPage, currentPage, setTotalTodos);

  const totalPages = totalTodos ? Math.ceil(totalTodos / perPage) : 1;

  const { handlePrevious, handleNext } = usePagination();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Ooops...<br />{error}</p>;

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

        <Typography variant="body1">Page {currentPage} of {totalPages}</Typography>

        <Button variant="contained" onClick={() => handleNext(totalPages)} disabled={currentPage >= totalPages}>
          Next
        </Button>
      </div>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={totalPages}   // Total number of pages
          page={currentPage}    // Current page number
          onChange={(_, value) => setCurrentPage(value)}  // Change current page
          color="primary"
        />
      </div>
    </div>
  );
};

export default TodoTable;
