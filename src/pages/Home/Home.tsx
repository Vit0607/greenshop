import { useEffect, useState } from 'react';
import Headling from '../../components/Headling/Headling';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import axios, { AxiosError } from 'axios';
import Loader from '../../components/Loader/Loader';
import { PlantsList } from './PlantsList/PlantsList';
import Pagination from './Pagination/Pagination';
// import styles from './Home.module.css';
// import cn from 'classnames';

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 9;
  const visiblePaginationButtons = 3;

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get<Product[]>(`${PREFIX}/plants`);
      setProducts(data);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
      if (e instanceof AxiosError) {
        setError(e.message);
      }
      setIsLoading(false);
      return;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Calculate the current products to display
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate total pages
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Pagination handlers
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // const renderPagination = () => {
  //   const paginationButtons = [];
  //   for (let i = 1; i <= totalPages; i++) {
  //     if (i === currentPage) {
  //       paginationButtons.push(
  //         <button className={styles['active']} key={i}>
  //           {i}
  //         </button>
  //       );
  //     } else {
  //       paginationButtons.push(
  //         <button
  //           className={cn({
  //             [styles['invisible']]:
  //               (i > visiblePaginationButtons && currentPage != totalPages) ||
  //               (i < visiblePaginationButtons &&
  //                 currentPage > visiblePaginationButtons)
  //           })}
  //           key={i}
  //           onClick={() => handlePageChange(i)}
  //         >
  //           {i}
  //         </button>
  //       );
  //     }
  //   }

  //   // Add next page button
  //   if (
  //     currentPage <= visiblePaginationButtons ||
  //     (currentPage > visiblePaginationButtons && currentPage < totalPages)
  //   ) {
  //     paginationButtons.push(
  //       <button key="next" onClick={() => handlePageChange(currentPage + 1)}>
  //         {' > '}
  //       </button>
  //     );
  //   }

  //   // Add previous page button
  //   if (currentPage > visiblePaginationButtons) {
  //     paginationButtons.unshift(
  //       <button key="prev" onClick={() => handlePageChange(currentPage - 1)}>
  //         {' < '}
  //       </button>
  //     );
  //   }

  //   return paginationButtons;
  // };

  return (
    <>
      <Headling>
        Let's make a better <span>planet</span>
      </Headling>
      <Headling level={2} classLevel={2}>
        Our Blog Posts
      </Headling>
      <Headling classLevel={3}>Barberton Daisy</Headling>
      <div>
        {error && <>{error}</>}
        {!isLoading && <PlantsList products={currentProducts} />}
        {isLoading && <Loader />}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          visiblePaginationButtons={visiblePaginationButtons}
        />
      </div>
    </>
  );
}

export default Home;
