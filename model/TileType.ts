
export default class TileType {
    public constructor(public name: string, public icon: string) { }
}

export const TileTypes = {
    PALETTE: new TileType("Palette", "fa-solid fa-palette"),
}
