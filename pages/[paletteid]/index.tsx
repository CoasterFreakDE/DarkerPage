import { useRouter } from 'next/router'
import {Palettes} from "../../data/Palettes";
import PaletteComponent from "../../components/PaletteComponent";
import OverlayComponent from "../../components/OverlayComponent";
import React from "react";

export default function Palette() {
    const router = useRouter()
    const { paletteid } = router.query
    const palette = Palettes.find(palette => palette.id === paletteid)

    const [showOverlay, setShowOverlay] = React.useState(false)
    const [color, setColor] = React.useState("")

    if (!palette) {
        return <div>Palette not found</div>
    }

    return (
        <div className="h-full p-[5%] w-full">
            <PaletteComponent tile={palette} setColor={setColor} setShowOverlay={setShowOverlay}/>
            <OverlayComponent color={color} show={showOverlay}/>
        </div>
    )
}