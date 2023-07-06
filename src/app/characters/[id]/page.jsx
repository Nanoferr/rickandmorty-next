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
        <div className="justify-center p-10 m-5 font-serif font-semibold">
          <h1>Este es el character {character.name}</h1>
          <p>Status: {character.status}</p>
          <p>Gender: {character.gender}</p>
          <p>Specie: {character.species}</p>
          <img src={character.image}/>
        </div>
      </>
    )
  }