

const PaginatedItems = ({ totalPages, currentPage, setCurrentPage }) => {
  
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center space-x-2 my-4 select-none">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 text-sm font-medium border rounded-lg transition-colors duration-200 ${
          currentPage === 1
            ? 'bg-gray-100 text-gray-400  border-gray-200'
            : 'bg-white text-gray-700 hover:bg-gray-50 cursor-pointer border-gray-300'
        }`}
      >
        &laquo; Prev
      </button>

      {/* Page Numbers */}
      <div className="hidden sm:flex space-x-1">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={`px-4 py-2 text-sm font-medium border rounded-lg transition-all duration-200 ${
              currentPage === number
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white text-gray-700 hover:bg-gray-50 cursor-pointer border-gray-300'
            }`}
          >
            {number}
          </button>
        ))}
      </div>

      {/* Mobile View */}
      <span className="sm:hidden text-sm font-medium text-gray-700 px-4">
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 text-sm font-medium border rounded-lg transition-colors duration-200 ${
          currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
            : 'bg-white text-gray-700 hover:bg-gray-50 cursor-pointer border-gray-300'
        }`}
      >
        Next &raquo;
      </button>
    </div>
  );
};

export default PaginatedItems;