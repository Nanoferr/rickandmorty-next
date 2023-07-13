

export function InputEpisodes({ setID, total, name}) {
  
const numberEpisodes = [...Array(total).keys()]; //metodo para utilizar un array y dividirlo en tantas partes se pueda si es un numero.

    return (
        <>
         <div className="p-5 md:absolute right-0 bottom-10">
            <select onChange={e => setID(e.target.value)} className="w-60 focus:border-blue-500 bg-primary border border-gray-300 text-white text-2xl">
                {
                    numberEpisodes.map((x) => {
                        return (
                            <option value={x + 1} key={x}>{name} {x + 1}</option>
                        )
                    })
                } 
            </select>
          </div>
        </>
    )
}

    /*
    <div className="p-5 absolute left-0 bottom-10">
           
    {
        numberEpisodes.map((x) => {
            return (
                <Option value={x} key={x}>{name} {x + 1}</Option>
            )
        })
    }

</div> */