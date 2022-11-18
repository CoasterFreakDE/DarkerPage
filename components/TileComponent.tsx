import Tile from "../model/Tile";
import Image from "next/image";

export default function TileComponent(tile: Tile) {
    return (
        <li key={tile.id} className="col-span-1 bg-[#181818] rounded-lg shadow cursor-pointer" onClick={() => location.href = `/${tile.id}`}>
            <div className="w-full flex border-[#707070] items-center justify-between p-6 space-x-6">
                <Image className="w-10 h-10 rounded-full flex-shrink-0" src={tile.logo} alt={tile.name} width={64} height={64}/>
                <div className="flex-1 truncate">
                    <h3 className="text-white text-2xl font-bold truncate text-right">{tile.name}</h3>
                    <p className="mt-1 text-gray-500 text-sm font-normal truncate text-right"><i className={tile.tileType.icon} />{tile.tileType.name}</p>
                </div>
            </div>
        </li>
    )
}