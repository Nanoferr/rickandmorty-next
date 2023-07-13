"use client";

import { useState, useEffect } from "react";
import { Card } from "./Card";
import { InputEpisodes } from "./InputEpisodes";
export function Episodes() {

let [ info, setInfo ] = useState([]);
let [id, setID] = useState(1);
let [results, setResults] = useState([]);
let api = `https://rickandmortyapi.com/api/episode/${id}`;
let { air_date, name } = info;

useEffect(() => {
  (async function () {
    let data = await fetch(api).then((res) => res.json());
    setInfo(data);

    let a = await Promise.all(data.characters.map((c) => { //metodo para hacer un map utilizando la promesa de que sera await para todos, importante usar esto dentro del useEffect hook, y usar la variable data dentro de esa funcion => data.characters
        return fetch(c).then(res => res.json())
    }
    ))
    setResults(a);
  })();
}, [api]);

return (
  <>
  <div className="justify-center p-5 text-center font-serif font-bold rounded-lg">
    <h1 className="text-3xl text-darker">Episode: {name === "" ? "Unknown" : name}</h1>
    <h2 className="text-2xl text-accent">Air Data: {air_date === "" ? "Unknown" : air_date}</h2>
  </div>
  <div className="grid grid-cols-3">
    <Card results={results}/>
  </div>
  <InputEpisodes  setID={setID} total={51} name={"Episode"}/>
  </>
);
}








/*
export function Episodes() {

    let total = []
    for (let i = 1; i <= 51; i++) {
        total.push(i)
    }
  return (
    <div className="p-5 absolute left-0 bottom-10">
      <Select label="Select the Episode">
        { 
         total.map((item, index) => (
         <Option key={index}>Episode {item}</Option>)
        )
        }
      </Select>
    </div>
  );
} */