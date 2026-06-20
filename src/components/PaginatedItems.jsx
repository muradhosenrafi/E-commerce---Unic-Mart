import { useState } from "react";
import ReactPaginate from "react-paginate";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function PaginatedItems({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {currentItems.map((item) => (
        <h3 key={item}>Item #{item}</h3>
      ))}

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        previousLabel="Prev"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
      />
    </>
  );
}

export default PaginatedItems;