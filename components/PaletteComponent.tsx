import Image from "next/image";
import ColorPalette from "../model/ColorPalette";
import classNames from "classnames";
import {hexToHsl, textColor} from "../utils/ColorUtils";
import {HexColor, HSLColor} from "../data/Colors";

export default function PaletteComponent(props: { tile: ColorPalette, setColor: (color: string) => void, setShowOverlay: (show: boolean) => void }) {

    function openInNewTab(url: string) {
        // @ts-ignore
        window.open(url, '_blank').focus();
    }

    return (
        <div className="col-span-1 bg-[#181818] rounded-lg shadow overflow-y-auto">
            <div className="w-full flex flex-col border-[#707070] ">
                <div className="w-full flex flex-row items-center justify-between p-6 space-x-6 cursor-pointer" onClick={() => openInNewTab(props.tile.link)}>
                    <Image className="w-10 h-10 rounded-full flex-shrink-0" src={props.tile.logo} alt={props.tile.name} width={64} height={64}/>
                    <div className="flex-1 truncate">
                        <h3 className="text-white text-2xl font-bold truncate text-left">{props.tile.name}</h3>
                        <p className="mt-1 text-gray-500 text-sm font-normal truncate text-right relative inline-flex"><Image className={'text-right mr-1'} src={props.tile.tileType.icon}  alt={props.tile.tileType.name} width={13} height={13}/>{props.tile.tileType.name}</p>
                    </div>
                </div>
                <ul className="w-full flex flex-col">
                    {props.tile.colors.filter((value, index, self) => self.indexOf(value) === index).sort((first, second) => {
                        const firstHSL: HSLColor = hexToHsl(new HexColor(first))
                        const secondHSL: HSLColor = hexToHsl(new HexColor(second))

                        if ((firstHSL.l >= 0.64 && firstHSL.l <= 0.66) && (secondHSL.l >= 0.64 && secondHSL.l <= 0.66)) {
                            return secondHSL.h - firstHSL.h
                        }

                        return firstHSL.l - secondHSL.l
                    }).map((color) => (
                        <li key={color} className="w-full h-24 cursor-pointer" style={{backgroundColor: color}} onClick={() => {
                            navigator.clipboard.writeText(color)
                            props.setColor(color)
                            props.setShowOverlay(true)
                            const audio = new Audio('/assets/sounds/copy.mp3');
                            audio.play();
                            setTimeout(() => {
                                props.setShowOverlay(false)
                            }, 1000)
                        }}>
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