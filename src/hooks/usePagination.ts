// src/hooks/usePagination.ts
import { useRecoilState } from "recoil";
import { currentPageState } from "../recoil/atoms";

const usePagination = (initialPage = 1) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = (totalPages: number) => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return {
    currentPage,
    handlePrevious,
    handleNext,
  };
};

export default usePagination;
