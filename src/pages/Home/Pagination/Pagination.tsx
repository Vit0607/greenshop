import styles from './Pagination.module.css';
import { PaginationProps } from './Pagination.props';
import cn from 'classnames';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  visiblePaginationButtons
}: PaginationProps) => {
  const renderPagination = () => {
    const paginationButtons = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        paginationButtons.push(
          <button className={styles['active']} key={i}>
            {i}
          </button>
        );
      } else {
        paginationButtons.push(
          <button
            className={cn({
              [styles['invisible']]:
                (i > visiblePaginationButtons && currentPage !== totalPages) ||
                (i < visiblePaginationButtons &&
                  currentPage > visiblePaginationButtons)
            })}
            key={i}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      }
    }

    // Add next page button
    if (
      currentPage <= visiblePaginationButtons ||
      (currentPage > visiblePaginationButtons && currentPage < totalPages)
    ) {
      paginationButtons.push(
        <button key="next" onClick={() => onPageChange(currentPage + 1)}>
          {' > '}
        </button>
      );
    }

    // Add previous page button
    if (currentPage > visiblePaginationButtons) {
      paginationButtons.unshift(
        <button key="prev" onClick={() => onPageChange(currentPage - 1)}>
          {' < '}
        </button>
      );
    }

    return paginationButtons;
  };

  return <div>{renderPagination()}</div>;
};

export default Pagination;
