import { useRouter } from 'next/router'
import {Palettes} from "../../data/Palettes";
import PaletteComponent from "../../components/PaletteComponent";

export default function Palette() {
    const router = useRouter()
    const { paletteid } = router.query
    const palette = Palettes.find(palette => palette.id === paletteid)

    if (!palette) {
        return <div>Palette not found</div>
    }

    return (
        <div className="h-full p-[5%] w-full">
            <PaletteComponent id={palette.id} name={palette.name} logo={palette.logo}
                              tileType={palette.tileType} colors={palette.colors}/>
        </div>
    )
}