import { Characters } from "../components/Characters";

export default function CharactersPage () {

  return (
    <>
     <h1 className="justify-center p-15 flex font-bold text-3xl bg-primary text-white rounded-lg">
      Rick and Morty Characters
    </h1>
      <Characters />
    </>
  )
}