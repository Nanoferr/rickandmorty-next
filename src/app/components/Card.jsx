import { useRouter } from "next/navigation";

export function Card({ results }) {
    const router = useRouter();
    let display;
    
    if (results) {
        display = results.map((x) => {
          let { id, image, name, status } = x;
    return (
        <div  key={id} className="gap-1 flex justify-center p-2 font-serif font-bold cursor-pointer">
            <div className="border-2 border-black bg-gray" onClick={() => router.push(`/characters/${id}`)}>
                <h4 className="w-fit text-2xl bg-primary text-white rounded-md">{status}</h4>
                <img className="w-full border-b-2 border-black" src={image}/>
                <h3 className="m-1 p-2 text-2xl text-darker">{name}</h3>
            </div>
        </div>
    )
})} else {
    display = "No Characters Found!";
}
return (
    <>{display}</>
)};