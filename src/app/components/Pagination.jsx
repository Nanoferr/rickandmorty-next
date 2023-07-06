export function Pagination({ info, setPage }) {

    const handleNext = () => {
        setPage((x) => x + 1)
      };
    
      const handlePrevious = () => {
        setPage((x) => x - 1)
      };

    return (
        <div className="flex justify-center gap-3 p-5 font-serif">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handlePrevious}>
                Previous
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleNext}>
                Next
            </button>
        </div>
    )
}