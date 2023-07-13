"use client"

import { useState, useEffect } from "react";
import { Search } from "./Search";
import { Pagination } from "./Pagination";
import { Card } from "./Card";
import { Filters } from "./Filters";
import { Episodes } from "./Episodes";


export function Characters() {
  let [fetchedData, setFetchedData] = useState([]);
  let [page, setPage] = useState(1);
  let [search, setSearch] = useState("");
  let { info, results } = fetchedData;
  let [status, setStatus] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");
  
 

let api = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`


  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <>
    <div className="p-8">
      <Search setSearch={setSearch} setPage={setPage} />
    </div>
      <Filters setStatus = {setStatus} setPage={setPage} setGender={setGender} setSpecies={setSpecies}/>
       <div className="lg:grid lg:grid-cols-4 grid grid-cols-3 md:w-fit justify-center gap-5">
      <Card results={results} />
      </div>
    <Pagination info={info} setPage={setPage}/>
    </>
  );
}


/* <div className="grid grid-cols-2 gap-8 justify-center p-2 font-serif font-bold">
{results.map(c => (
  <div key={c.id} onClick={() => router.push(`/characters/${c.id}`)}>
    <h3 className="ml-5">{c.name}</h3>
    <img className="w-full" src={c.image}/>
  </div>
))} 
</div> */


/* const initialUrl = 'https://rickandmortyapi.com/api/character';

async function fetchCharacters() {
  const res = await fetch(initialUrl)
  const data = await res.json()
  return data.results
}

export async function Characters () {
  const router = useRouter();
  
  const characters = await fetchCharacters();

  return (
    <> 
    
        <div>   
          <div className="grid grid-cols-2 gap-8 justify-center">   
            {
              characters.map(character => (
                <div key={character.id}>
                  <h3>{character.name}</h3>
                  <img src={character.image}/>
                </div>
              ))
            } 
          </div>
        </div>
    </>
  )
} */