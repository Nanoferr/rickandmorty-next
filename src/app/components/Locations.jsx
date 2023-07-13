"use client";

import { Select, Option } from "@material-tailwind/react";


export function Locations() {

   let locations = []

  return (
    <div className="p-5 absolute left-0 bottom-10">
      <Select label="Select the Episode">
        { 
         locations.map((item, index) => (
         <Option key={index}>Location {item}</Option>)
        )
        }
      </Select>
    </div>
  );
}