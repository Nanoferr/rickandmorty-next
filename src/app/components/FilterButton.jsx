"use client"

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";



export function FilterButton({ setStatus, setPage, setGender, setSpecies }) {
  const [open, setOpen] = useState(0);
  const [alwaysOpen, setAlwaysOpen] = useState(true);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const handleAlwaysOpen = () => {
    setOpen((cur) => !cur);
  };

  let status = ["Alive", "Dead", "Unknown"];
  let species = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];
  let genders = ["female", "male", "genderless", "unknown"];
  return (
    <Fragment>
      <Accordion open={alwaysOpen}>
        <AccordionHeader onClick={handleAlwaysOpen}>
          Status
        </AccordionHeader>
        <AccordionBody className="grid grid-cols-2">
            {
                status.map((item, index) => (
                    <div key={index} className="p-2">
                        <button onClick={() => 
                            {
                                setStatus(item)
                                setPage(1)}
                            } className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{item}</button>
                    </div>
                ))
            }
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Species
        </AccordionHeader>
        <AccordionBody className="grid grid-cols-2"> 
            {
                species.map((item, index) => (
                    <div key={index} className="flex p-2">
                        <button onClick={() => 
                            {
                                setSpecies(item)
                                setPage(1)}
                            } className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{item}</button>
                    </div>
                ))
            }  
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          Gender
        </AccordionHeader>
        <AccordionBody className="grid grid-cols-2">
            {
                genders.map((item, index) => (
                    <div key={index} className="flex p-2">
                        <button onClick={() => 
                            {
                                setGender(item)
                                setPage(1)}
                            } className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{item}</button>
                    </div>
                ))
            } 
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}