
const Pagination = ({ currentPage, totalPages }) => {
  return (
    <div className="flex items-center space-x-2">
      {[...Array(totalPages)].map((_, index) => (
        <div
          key={index}
          className={`h-8 w-8 flex items-center justify-center rounded-full ${
            index === currentPage ? 'bg-ee6611 text-white text-xl' : 'bg-fdf0e7'
          }`}
        >
          {index === currentPage ? <span>{index + 1}</span> : null}
        </div>
      ))}
    </div>
  );
};

export default Pagination;
