import { useRouter } from "next/navigation";

export function Card({ results }) {
    const router = useRouter();
    let display;
    
    if (results) {
        display = results.map((x) => {
          let { id, image, name, status } = x;

    return (
        <div className="flex gap-1 justify-center p-2 font-serif font-bold border-b-2">
            <div className="border-2 border-black" key={id} onClick={() => router.push(`/characters/${id}`)}>
                <h4 className="absolute bg-black text-white rounded-md">{status}</h4>
                <img className="w-full border-b-2 border-black" src={image}/>
                <h3 className="m-1 p-2">{name}</h3>
            </div>
        </div>
    )
})} else {
    display = "No Characters Found!";
}
return (
    <>{display}</>
)};