import TileType from "./TileType";

export default interface Tile {

    id: string;

    name: string;

    logo: string;

    tileType: TileType;
}