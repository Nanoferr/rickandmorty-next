"use client"

import { FilterButton } from "./FilterButton";

export function Filters({ setStatus, setPage, setSpecies, setGender }) {

    let clear = () =>{
        setStatus("");
        setSpecies("");
        setGender("");
        setPage(1);
    }
    return (
        <>
        <div className="p-5 absolute right-0">
            <button className="w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clear}>Clear Filters</button>
            <FilterButton setStatus={setStatus} setPage={setPage} setSpecies={setSpecies} setGender={setGender}/>
        </div>
        </>
    )
}