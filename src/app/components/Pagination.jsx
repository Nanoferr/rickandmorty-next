export function Pagination({ info, setPage }) {

    const handleNext = () => {
        setPage((x) => x + 1)
      };
    
      const handlePrevious = () => {
        setPage((x) => x - 1)
      };

    return (
        <div className="justify-center gap-3 flex my-5">
            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-4 m-3 px-4 rounded" onClick={handlePrevious}>
                Previous
            </button>
            <button className="bg-primary hover:bg-blue-700 text-white font-bold py-4 m-3 px-4 rounded" onClick={handleNext}>
                Next
            </button>
        </div>
    )
}