 async function getCharacter(id) {
   const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
   const data = await res.json()
   return data
}


export default async function CharacterPage ({ params }) {
 const { id } = params

 const character = await getCharacter(id);
  
    return (
      <>
        <div className="justify-center p-10 m-5 font-serif font-bold text-2xl bg-blue-gray-300 rounded-2xl w-fit border-2 border-black">
          <h1 className="ml-20">{character.name}</h1>
          <img className="border-2 border-black" src={character.image}/>
          <div className="grid grid-cols-1 p-6">
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p>
          <p>Specie: {character.species}</p>
          <p>Location: {character.location.name}</p>
          </div>
        </div>
      </>
    )
  }