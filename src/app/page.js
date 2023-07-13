import Stats from "./components/Stats";

export default function Home() {
  return (
    <>
    <div className="font-bold text-2xl m-24">
        <h1>Hi, im <span className="text-clear">Fer</span>, front-end dev and this is my website.</h1>
        <br></br>
        <p>The main objective is to practice the new features of Next.js13 applying the most important tools of React</p>
        <br></br>
        <p>I'm using the following Rick and Morty public API:<span className="text-clear"> https://rickandmortyapi.com/api</span></p>
    </div>
    <div>
      <Stats />
    </div>
    </>
  )
}
