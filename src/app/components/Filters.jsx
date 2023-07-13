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
        <div className="lg:p-20 md:absolute right-20">
            <button className="w-20 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={clear}>Clear Filters</button>
            <FilterButton setStatus={setStatus} setPage={setPage} setSpecies={setSpecies} setGender={setGender}/>
        </div>
        </>
    )
}