
export default class TileType {
    public constructor(public name: string, public icon: string) { }
}

export const TileTypes = {
    PALETTE: new TileType("Palette", "/assets/svgs/palette.svg"),
    LINK: new TileType("External link", "/assets/svgs/link.svg"),
}
