import Tile from "../model/Tile";
import Image from "next/image";
import {useRouter} from "next/router";
import {TileTypes} from "../model/TileType";

function openInNewTab(url: string) {
    // @ts-ignore
    window.open(url, '_blank').focus();
}

export default function TileComponent(props: {tile: Tile}) {
    const router = useRouter();
    return (
        <li key={props.tile.id} className="col-span-1 bg-[#181818] rounded-lg shadow cursor-pointer" onClick={() => {
            if (props.tile.tileType == TileTypes.LINK) {
                openInNewTab(props.tile.link)
                return
            }
            router.push(`/[paletteid]`, `/${props.tile.id}`)
        }}>
            <div className="w-full flex border-[#707070] items-center justify-between p-6 space-x-6">
                <Image className="w-10 h-10 rounded-full flex-shrink-0" src={props.tile.logo} alt={props.tile.name} width={64} height={64}/>
                <div className="flex-1 truncate">
                    <h3 className="text-white text-2xl font-bold truncate text-left">{props.tile.name}</h3>
                    <p className="mt-1 text-gray-500 text-sm font-normal truncate text-right relative inline-flex"><Image className={'text-right mr-1'} src={props.tile.tileType.icon}  alt={props.tile.tileType.name} width={13} height={13}/>{props.tile.tileType.name}</p>
                </div>
            </div>
        </li>
    )
}