import { Characters } from "../components/Characters";

export default function CharactersPage () {

  return (
    <>
     <h1 className="justify-center p-15 flex font-serif font-bold text-3xl bg-blue-500 text-white rounded-lg">
      Rick and Morty Characters
    </h1>
      <Characters />
    </>
  )
}