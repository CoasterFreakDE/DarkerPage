import Image from "next/image";
import ColorPalette from "../model/ColorPalette";
import classNames from "classnames";
import {hexToHsl, textColor} from "../utils/ColorUtils";
import {HexColor} from "../data/Colors";

export default function PaletteComponent(tile: ColorPalette) {
    return (
        <div className="col-span-1 bg-[#181818] rounded-lg shadow overflow-y-auto">
            <div className="w-full flex flex-col border-[#707070] ">
                <div className="w-full flex flex-row items-center justify-between p-6 space-x-6">
                    <Image className="w-10 h-10 rounded-full flex-shrink-0" src={tile.logo} alt={tile.name} width={64} height={64}/>
                    <div className="flex-1 truncate">
                        <h3 className="text-white text-2xl font-bold truncate text-right">{tile.name}</h3>
                        <p className="mt-1 text-gray-500 text-sm font-normal truncate text-right"><i className={tile.tileType.icon} />{tile.tileType.name}</p>
                    </div>
                </div>
                <ul className="w-full flex flex-col">
                    {tile.colors.sort((first, second) => {
                        return hexToHsl(new HexColor(first)).l - hexToHsl(new HexColor(second)).l
                    }).map((color) => (
                        <li key={color} className="w-full h-24 cursor-pointer" style={{backgroundColor: color}}>
                            <div className="w-full h-full flex flex-row items-center justify-between p-6 space-x-6">
                                <div className="truncate">
                                    <h3 className={classNames(textColor(color), 'text-2xl font-bold truncate')}>{color}</h3>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}