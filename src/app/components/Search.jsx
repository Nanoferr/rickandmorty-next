"use client"

export function Search({ setSearch, setPage }) {
    return (
        <>
        <form className="justify-center flex m-6">
            <input onChange={e => {
                setSearch(e.target.value);
                setPage(1);
            }} type="text" placeholder="Find your character" className="text-black border-2 lg:w-[500px] lg:h-[50px] md:w-[400px] md:h-[30px]"/>
            <button onClick={e => {
                e.preventDefault();
            }} className="bg-black text-white rounded-sm w-20 hover:text-blue-500">Search</button>
        </form>
        </>
    );
};