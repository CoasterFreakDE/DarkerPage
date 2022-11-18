import Tile from "../model/Tile";
import Image from "next/image";
import {useRouter} from "next/router";

export default function TileComponent(tile: Tile) {
    const router = useRouter();
    return (
        <li key={tile.id} className="col-span-1 bg-[#181818] rounded-lg shadow cursor-pointer" onClick={() => router.push(`/[paletteid]`, `/${tile.id}`)}>
            <div className="w-full flex border-[#707070] items-center justify-between p-6 space-x-6">
                <Image className="w-10 h-10 rounded-full flex-shrink-0" src={tile.logo} alt={tile.name} width={64} height={64}/>
                <div className="flex-1 truncate">
                    <h3 className="text-white text-2xl font-bold truncate text-left">{tile.name}</h3>
                    <p className="mt-1 text-gray-500 text-sm font-normal truncate text-right relative inline-flex"><Image className={'text-right mr-1'} src={tile.tileType.icon}  alt={tile.tileType.name} width={13} height={13}/>{tile.tileType.name}</p>
                </div>
            </div>
        </li>
    )
}