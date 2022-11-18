import {Palettes} from "../data/Palettes";
import TileComponent from "../components/TileComponent";

export default function Home() {
    return (
        <>
            <div className="h-[85%] overflow-auto m-5 w-[85%]">
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {Palettes.map((palettes) => (
                        <TileComponent key={palettes.id} id={palettes.id} name={palettes.name} logo={palettes.logo}
                                       tileType={palettes.tileType}/>
                    ))}
                </ul>
            </div>
        </>
    )
}
